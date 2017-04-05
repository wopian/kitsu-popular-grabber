import PrettyError from 'pretty-error'

export const log = console.log
export const err = console.error
export const pe = new PrettyError()

export let arg = process.argv.slice(2)

export async function checkArg () {
  if (arg.length > 0) {
    // 0 = media type
    if (arg[0]) {
      // Check if valid type
      if (arg[0].search(/^(anime|manga)$/i)) {
        err(pe.render(`'${arg[0]}' is not a valid media type. Valid: anime or manga`))
        return false
      }
    }
  }
  return true
}

pe.skipNodeFiles()
pe.appendStyle({
  'pretty-error > header > title > kind': {
    color: 'grey',
    background: 'black'
  },
  'pretty-error > header > colon': {
  },
  'pretty-error > header > message': {
    color: 'red',
    background: 'black',
    padding: '0 0'
  },
  'pretty-error > trace > item': {
    marginLeft: 2
  },
  'pretty-error > trace > item > header > pointer > file': {
    color: 'cyan'
  },
  'pretty-error > trace > item > header > pointer > colon': {
    color: 'grey'
  },
  'pretty-error > trace > item > header > pointer > line': {
    color: 'grey'
  },
  'pretty-error > trace > item > header > what': {
    color: 'white'
  }
})
