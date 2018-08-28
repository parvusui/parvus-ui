# parvus-ui

Welcome to Parvus-UI!

This library is a small footprint shareable UI component library for React and Preact.

The origin of this is seeing how big component libraries had become. They had loads of really great features and they looked great, but they were huge and this made me sad. So I set about to create something with loads of useful features, without going overboard, but in a really small footprint.

Current Parvus has:
- Over 15 component types that are often found in every app (buttons, cards, links, breadcrumbs, modals...).
- A theme provider.
- A styleguide to view all the components.
- A dev component with all the components imported to play around with.

## Installation

```
$ npm i parvus-ui
```

## Usage

### Theming
The context api is used for theming and we even have a polyfill for preact and older versions of react.

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
  <Button type="primary">Button</Button>
```

## Development

Help would be really great as there's so much to do. To get started:
- Check our issues or get started on your great idea.
- Fork the repo.
- Follow the commands below.
- When you're finished submit your pull request and let us have a look.

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

I know docs never cover everything and sometimes they can be confusing so if you've any questions please reach out to us on github.

## License

MIT
