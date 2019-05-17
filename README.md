# create-phtml-plugin [<img src="https://phtml.io/logo.svg" alt="pHTML" width="90" height="90" align="right">][pHTML]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Gitter Chat][git-img]][git-url]

[Create pHTML Plugin] lets you quickly create new [pHTML] plugins with
documentation, tests, and built in compiling for supported Node environments.

```sh
npm init phtml-plugin YOUR_DESTINATION
```

```sh
npx create-phtml-plugin YOUR_DESTINATION
```

After completing the instructions, write your plugin to `src/index.js` and
update `README.md` with further details outlining your plugin functionality.

## Options

You can pass options into phtml-plugin to automate plugin creation.

### to

The `to` argument defines the destination of the new project. The first
undefined argument will also determine this value.

```sh
npm init phtml-plugin --to path/to/plugin
```

### title

The `title` argument defines the formal name of the project.

```sh
npm init phtml-plugin --title Super
```

```sh
npm init phtml-plugin --title "Awesome Blossom"
```

### id

The `id` argument defines the id used by the project package.json and
repository.

```sh
npm init phtml-plugin --id awes-blos
```

### desc

The `desc` or `description` argument defines the description used by the
project README.md and package.json.

```sh
# becomes "Use exciting new functions" and "Awesome Blossom lets you create new functions in HTML."
npm init phtml-plugin --desc "use exciting new functions"
```

```sh
# becomes "Use exciting new functions" and "Awesome Blossom lets you create new functions in HTML."
npm init phtml-plugin --description "use exciting new functions"
```

### author

The `author` argument defines the author used by the project package.json.

```sh
npm init phtml-plugin --author "Joe Bloggs"
```

### email

The `email` argument defines the email used by the project package.json.

```sh
npm init phtml-plugin --email "jonathantneal@hotmail.com"
```

### user

The `user` argument defines the repository user or group hosting the project.

```sh
npm init phtml-plugin --user "phtmlorg"
```

### keywords

The `keywords` argument defines the keywords used by the project package.json.

```sh
npm init phtml-plugin --keywords "awesome,blossom"
```

### no-install

The `no-install` argument instructs the project to not automatically install
dependencies.

```sh
npm init phtml-plugin --no-install
```

[cli-img]: https://img.shields.io/travis/phtmlorg/create-phtml-plugin.svg
[cli-url]: https://travis-ci.org/phtmlorg/create-phtml-plugin
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/phtmlorg/phtml
[npm-img]: https://img.shields.io/npm/v/create-phtml-plugin.svg
[npm-url]: https://www.npmjs.com/package/create-phtml-plugin

[Create pHTML Plugin]: https://github.com/phtmlorg/create-phtml-plugin
[pHTML]: https://github.com/phtmlorg/phtml
