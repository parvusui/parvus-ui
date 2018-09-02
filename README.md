# parvus-ui
[![npm](https://img.shields.io/npm/v/parvus-ui.svg)](https://www.npmjs.com/package/parvus-ui)
[![GitHub issues](https://img.shields.io/github/issues/rnglnd/parvus-ui.svg)](https://github.com/rnglnd/parvus-ui/issues)

Welcome to Parvus-UI!

This library is a small footprint shareable UI component library for React and Preact.

The origin of this is seeing how big component libraries had become. They had loads of really great features and they looked great, but they were huge and this made me sad. So I set about to create something with loads of useful features, without going overboard, but in a really small footprint.

Features:
- Over 15 component types that are often found in every app (buttons, cards, links, breadcrumbs, modals...).
- Theme provider with contaxt API polyfill for Preact and React 15.
- `Styles` and `className` props to customise every component
- A dev component and styleguide to view and try out every component.
- 5 KB.

## Installation

```
$ npm install parvus-ui --save
```

## Usage

### Theming
The context api is used for theming and we even have included a polyfill for preact and older versions of react.

To get started on theming just add the provider to your entry or app js file and provide it with the theme like below:

```
<ThemeProvider
  theme={{
    backgroundColor: '#fefefe',
    neutralColor: '#f9f9f9',
    primaryColor: '#007bff',
    secondaryColor: '#6c757d',
    tertiaryColor: '#fefefe',
    successColor: '#3cb371',
    errorColor: '#ff0000',
    warningColor: '#ffa500',
    fontColor: '#000000',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
  }}
>
  App code here
</ThemeProvider>
```

### Components
All the components follow a similar pattern, just check out the props it requires first and get importing.

```
  <Button type="primary">Click</Button>
```

### Styling
[cxs](https://github.com/cxs-css/cxs) is used for styling all components and each expose a `styles` prop which can both overwrite existing styles and also add styles:

```
<Button
  type="primary"
  styles={{
    backgroundColor: '#222222',
    ':hover': {
      backgroundColor: '#444444',
      opacity: 1
    }
  }}
>
  Click
</Button>
```

## Development

Help would be really great as there's so much to do. To get started:
- Check our issues or get started on your great idea.
- Fork the repo.
- Follow the commands below.
- When finished submit your pull request and let us have a look.

### Guidelines
- Use `rem` everywhere although `px` are acceptable for borders and when absoulte positing elements (although using `rem` would be awesome for that).
- All components should be stateless functional components, although if there's a case otherwise submit the pr anyway and we can chat.
- Tests should be added for every new component.
- All components should be added to the examples view and styleguide.

### Commands
Install dependencies:

```
$ npm install
```

Run the example app at [http://localhost:3000](http://localhost:3000):

```
$ npm start
```

View the styleguide at [http://localhost:6060](http://localhost:6060):

```
$ npm run styleguide
```

Run tests and watch for code changes using [jest](https://github.com/facebook/jest):

```
$ npm test
```

Lint `src` and `test` files:

```
$ npm run lint
```

## Questions

Docs never cover everything so if you've any questions feel free to reach out to @sringland on twitter or put it in a github issue.

## License

MIT
