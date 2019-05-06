# Installing ${title}

[${title}] runs in all Node environments, with special instructions for:

| [Node](#node) | [CLI](#phtml-cli) | [Eleventy](#eleventy) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- |

## Node

Add [${title}] to your project:

```bash
npm install ${npmId} --save-dev
```

Use [${title}] to process your HTML:

```js
const ${idCamelCase} = require('${npmId}')

${idCamelCase}.process(YOUR_HTML /*, processOptions, pluginOptions */)
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml')
const ${idCamelCase} = require('${npmId}')

phtml([
  ${idCamelCase}(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */)
```

## CLI

Transform HTML files directly from the command line:

```bash
npx phtml source.html output.html -p ${npmId}
```

Alternatively, add [${title}] to your `phtml.config.js` configuration file:

```js
module.exports = {
  plugins: [
    ['${npmId}', /* pluginOptions */]
  ]
}
```

## Eleventy

Add [pHTML Eleventy] and [${title}] to your Eleventy project:

```sh
npm install ${npmId} @phtml/11ty --save-dev
```

Use [pHTML Eleventy] and [${title}] in your Eleventy configuration:

```js
const phtml11ty = require('@phtml/11ty')
const ${idCamelCase} = require('${npmId}')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(phtml11ty, {
    use: [
      ${idCamelCase}(/* pluginOptions */)
    ]
  })
}
```

## Gulp

Add [Gulp pHTML] and [${title}] to your project:

```bash
npm install ${npmId} gulp-phtml --save-dev
```

Use [Gulp pHTML] and [${title}] in your Gulpfile:

```js
const gulp = require('gulp')
const gulpPhtml = require('gulp-phtml')
const ${idCamelCase} = require('${npmId}')

gulp.task('html',
  () => gulp.src('./src/*.html').pipe(
    gulpPhtml({
      plugins: [
        ${idCamelCase}(/* pluginOptions */)
      ]
    })
  ).pipe(
    gulp.dest('dist')
  )
)
```

## Grunt

Add [Grunt pHTML] to your project:

```bash
npm install grunt-phtml --save-dev
```

Use [Grunt pHTML] and [${title}] in your Gruntfile:

```js
const ${idCamelCase} = require('${npmId}')

grunt.loadNpmTasks('grunt-phtml')

grunt.initConfig({
  phtml: {
    options: {
      plugins: [
        ${idCamelCase}(/* pluginOptions */)
      ]
    },
    dist: {
      files: [{
        expand: true,
        src: 'src/*.html',
        dest: 'dest'
      }]
    }
  }
})
```

[Gulp pHTML]: https://github.com/phtmlorg/gulp-phtml
[Grunt pHTML]: https://github.com/phtmlorg/grunt-phtml
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML Eleventy]: https://github.com/phtmlorg/phtml-11ty
[${title}]: https://github.com/${user}/${id}
