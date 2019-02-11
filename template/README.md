# ${title} [<img src="https://phtmlorg.github.io/phtml/logo.svg" alt="pHTML" width="90" height="90" align="right">][phtml]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[${title}] lets you ${desc} in HTML.

```html
<example/>

<!-- becomes -->

<example/>
```

## Usage

Add [${title}] to your project:

```bash
npm install ${npmId} --save-dev
```

Use [${title}] to process your HTML:

```js
const ${idCamelCase} = require('${npmId}');

${idCamelCase}.process(YOUR_HTML /*, processOptions, pluginOptions */);
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml');
const ${idCamelCase} = require('${npmId}');

phtml([
  ${idCamelCase}(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */);
```

[${title}] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [pHTML CLI](INSTALL.md#phtml-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

## Options

...

[cli-img]: https://img.shields.io/travis/${user}/${id}.svg
[cli-url]: https://travis-ci.org/${user}/${id}
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/phtmlorg/phtml
[npm-img]: https://img.shields.io/npm/v/${npmId}.svg
[npm-url]: https://www.npmjs.com/package/${npmId}

[pHTML]: https://github.com/phtmlorg/phtml
[${title}]: https://github.com/${user}/${id}
