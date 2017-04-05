import JsonApi from 'devour-client'
import { version } from '../package'
import { arg, checkArg, log, err, pe } from './util'

const baseArg = 'anime'
const baseUrl = 'https://kitsu.io/api/edge'
const Kitsu = new JsonApi({
  apiUrl: baseUrl,
  logger: false,
  pluralize: false
})
let MEDIA = []

Kitsu.headers['User-Agent'] = `PopularGrabber/${version} (wopian)`

Kitsu.define('anime', {
  slug: '',
  canonicalTitle: '',
  titles: ''
})

Kitsu.define('manga', {
  slug: '',
  canonicalTitle: '',
  titles: ''
})

// Get response from API
async function getPage (offset, mediaType) {
  return Kitsu.findAll(mediaType, {
    fields: {
      anime: 'canonicalTitle,titles,slug',
      manga: 'canonicalTitle,titles,slug'
    },
    sort: 'popularityRank',
    page: {
      limit: 20,
      offset
    }
  })
}

async function listMedia (offset, mediaType) {
  await getPage(offset, mediaType)
  .then(response => {
    response.forEach((media) => {
      MEDIA.push(media)
    })
    if (response.links.next && offset <= 20) {
      // Get the next page
      listMedia(offset += 20, mediaType)
    } else {
      // Last page, display the output
      displaySeason()
    }
  })
  .catch(error => err(pe.render(error)))
}

async function displaySeason () {
  log('Most Popular Titles:\n')

  MEDIA.forEach((media) => {
    if (!media.titles.en) media.titles.en = media.canonicalTitle
    log(`${media.titles.en} (${media.id})`)
    log(`https://kitsu.io/${media.type}/${media.slug}\n`)
  })
}

Promise.resolve(checkArg())
.then(valid => {
  if (valid) listMedia(0, arg[0] || baseArg)
})
