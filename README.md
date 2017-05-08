# Popular Grabber

[![Github Rl]][1]
[![Travis]][2]
[![AppVeyor]][3]
[![CC Coverage]][4]
[![CC Score]][5]
[![CC Issues]][6]
[![David]][7]

Grab the most popular titles on [Kitsu][0]

## Requirements

- [git](https://git-scm.com/) 2.0.0 or newer
- [node.js](https://nodejs.org) 7.0.0 or newer
- [yarn](https://https://yarnpkg.com) 0.21.0 or newer (optional)

## Setup

1. Download source code:

    ```bash
    git clone https://github.com/wopian/kitsu-popular-grabber.git
    cd kitsu-popular-grabber
    ```

1. Install dependencies:

    ```bash
    yarn
    # or
    npm i
    ```

1. Run the script:

    ```bash
    yarn start
    # or
    npm start
    ```

## Parameters

```bash
npm start <mediaType>
```

`<mediaType>`

- Allowed: `anime` or `manga`
- Default: `anime`

## Releases

See [CHANGELOG][8]

## License

All code released under the [MIT license][9]

[GitHub Rl]:https://img.shields.io/github/release/wopian/kitsu-popular-grabber.svg?style=flat-square
[Travis]:https://img.shields.io/travis/wopian/kitsu-popular-grabber/master.svg?style=flat-square&label=linux%20%26%20macOS
[CC Coverage]:https://img.shields.io/codeclimate/coverage/github/wopian/kitsu-popular-grabber.svg?style=flat-square
[CC Score]:https://img.shields.io/codeclimate/github/wopian/kitsu-popular-grabber.svg?style=flat-square
[CC Issues]:https://img.shields.io/codeclimate/issues/github/wopian/kitsu-popular-grabber.svg?style=flat-square
[David]:https://img.shields.io/david/wopian/kitsu-popular-grabber.svg?style=flat-square
[AppVeyor]:https://img.shields.io/appveyor/ci/wopian/kitsu-popular-grabber/master.svg?style=flat-square&label=windows

[0]:https://kitsu.io
[1]:https://github.com/wopian/kitsu-popular-grabber/releases
[2]:https://travis-ci.org/wopian/kitsu-popular-grabber
[3]:https://ci.appveyor.com/project/wopian/kitsu-popular-grabber
[4]:https://codeclimate.com/github/wopian/kitsu-popular-grabber/coverage
[5]:https://codeclimate.com/github/wopian/kitsu-popular-grabber
[6]:https://codeclimate.com/github/wopian/kitsu-popular-grabber/issues
[7]:https://david-dm.org/wopian/kitsu-popular-grabber
[8]:https://github.com/wopian/kitsu-popular-grabber/blob/master/CHANGELOG.md
[9]:https://github.com/wopian/kitsu-popular-grabber/blob/master/LICENSE.md
