# netlify-cms-widget-pathname

[![npm version][version-badge]][version]
![Node.js CI](https://github.com/karolis-sh/netlify-cms-widget-pathname/workflows/Node.js%20CI/badge.svg)
[![License: MIT][license-badge]][license]
[![code style: prettier][code-style-badge]][code-style]

This widget provides pathname validation and URL preview. This might be handy if
you construct URL's based on input field. Check out [the demo](https://netlify-cms-widget-pathname.netlify.com/demo)!

![preview](docs/preview.png)

## Install

```shell
npm i netlify-cms-widget-pathname
```

or

```shell
yarn add netlify-cms-widget-pathname
```

## Setup

```js
import { PathnameControl, PathnamePreview } from 'netlify-cms-widget-pathname';

CMS.registerWidget('pathname', PathnameControl, PathnamePreview);
```

## How to use

Add to your Netlify CMS configuration:

```yaml
fields:
  - name: pathname
    label: Page pathname
    widget: pathname
```

## Configuration

You can customize the preview of the URL with these options:

- `url_prefix` - add a prefix for the pathname

```yaml
fields:
  - name: pathname
    label: Page pathname
    widget: pathname
    url_prefix: /blog
```

- `url_origin` - customize the URL's origin (default is `window.location.origin`)

```yaml
fields:
  - name: pathname
    label: Page pathname
    widget: pathname
    url_origin: https://github.com
```

[version-badge]: https://badge.fury.io/js/netlify-cms-widget-pathname.svg
[version]: https://www.npmjs.com/package/netlify-cms-widget-pathname
[license-badge]: https://img.shields.io/badge/License-MIT-yellow.svg
[license]: https://opensource.org/licenses/MIT
[code-style-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[code-style]: https://github.com/prettier/prettier
