# React Landing Page

---

**Glenn Lanzer III**

This repository holds my **Dev Landing Page**. The goal of my landing page is to have a one stop shop to everything I do or learn online.

## Includes

---

_**React**_ | _**Babel**_ | _**ESLint**_ | _**SCSS**_ | _**PostCSS**_ | _**Autoprefixer**_ | _**Jest**_ | _**Webpack**_ | _**gh-pages**_ | _**Service Worker**_

The following are some of the technologies used in making this landing page (devDependencies):

- `react` 16.2.0
- `react-dom` 16.2.0
- `autoprefixer` 7.1.6
- `babel-core` 6.26.0
  - `babel-eslint` 7.2.3
  - `babel-jest` 20.0.3
  - `babel-loader` 7.1.2
  - `babel-preset-react-app` 3.1.1
  - `babel-runtime` 6.26.0
- `case-sensitive-paths-webpack-plugin` 2.1.1
- `chalk` 1.1.3
- `css-loader` 0.28.7
- `dotenv` 4.0.0
  - `dotenv-expand` 4.2.0
- `eslint` 4.10.0
  - `eslint-config-react-app` 2.1.0
  - `eslint-loader` 1.9.0
  - `eslint-plugin-flowtype` 2.39.1
  - `eslint-plugin-import` 2.8.0
  - `eslint-plugin-jsx-a11y` 5.1.1
  - `eslint-plugin-react` 7.4.0
- `extract-text-webpack-plugin` 3.0.2
- `file-loader` 1.1.5
- `fs-extra` 3.0.1
- `gh-pages` 1.1.0
- `html-webpack-plugin` 2.29.0
- `jest` 20.0.4
- `node-sass` 4.7.2
- `object-assign` 4.1.1
- `postcss-flexbugs-fixes` 3.2.0
- `postcss-loader` 2.0.8
- `promise` 8.0.1
- `raf` 3.4.0
- `react-dev-utils` 5.0.0
- `sass-loader` 6.0.7
- `style-loader` 0.19.0
- `sw-precache-webpack-plugin` 0.11.4
- `url-loader` 0.6.2
- `webpack` 3.8.1
  - `webpack-dev-server` 2.9.4
  - `webpack-manifest-plugin` 1.3.2
- `whatwg-fetch` 2.0.3

## Scripts

---

To run locally on your machine:

**Pre-requisites:**

- `Git`
- `Node` or `Yarn`
- `npm`

1. Download `Nodejs` (comes with `npm`) or download `Yarn`
2. Fork this repository and keep your development branch synced
3. Clone your fork to your local machine
4. `cd` into `react-landing-page` and type `npm install` to install any dependencies and devDependencies
5. Type `npm start` to start developmental server
6. Make your changes where necessary

`npm start`: `node scripts/start.js`
`npm start:prod`: `ENV=prod node scripts/start.js`
`npm clean`: `rm -rf build`
`npm prebuild`: `npm run clean`
`npm build`: `node scripts/build.js`
`npm test`: `node scripts/test.js --env=jsdom`
`npm predeploy`: `npm run build`
`npm deploy`: `aws s3 cp build/ s3://.com --recursive`

## License

---

MIT © Glenn Lanzer III
