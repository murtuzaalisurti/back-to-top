# &lt;back-to-top&gt;

A `<back-to-top>` button web component with throttle support.

```html
<back-to-top throttle="600"></back-to-top>
```

```css
.back-to-top {
    bottom: 3rem;
    left: 2rem;
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 50%;
    z-index: 10;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}
```

## Installation

You can use it as an npm package or from a CDN.

### 1. NPM

- Install the package

```bash
npm i @murtuzaalisurti/back-to-top
```

- Import the package in a JS module using:

```js
import "@murtuzaalisurti/back-to-top"
// ... some other code
```

- And refer to that file using a `script` tag such as:

```js
<script src="./your-js-module" type="module"></script>
```

### 2. CDN

Grab the js file from a CDN using a script tag such as:

```js
<script type="module" src="https://www.unpkg.com/@murtuzaalisurti/back-to-top@latest/public/main.js"></script>
```

## Usage

With the js script in place, just add this component in your HTML.

```html
<back-to-top throttle="600"></back-to-top>
```

You can style this component however you want, here are some styles to start with:

```css
.back-to-top {
    bottom: 3rem;
    left: 2rem;
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 50%;
    z-index: 10;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}
```

## Options

Introduced in [v2.0](https://www.npmjs.com/package/@murtuzaalisurti/back-to-top/v/2.0.0), you can now use the `throttle` attribute to set a throttle rate for the back-to-top button. The value is in milliseconds.

```html
<back-to-top throttle="800"></back-to-top>
```

## Event Throttling

- This package uses lodash for [throttling](https://css-tricks.com/debouncing-throttling-explained-examples/) scroll events in order to show/hide the back-to-top button component.
- It uses a custom lodash build generated from `lodash include=throttle -p`.
- Throttle rate modification support introduced in [v2.0](https://www.npmjs.com/package/@murtuzaalisurti/back-to-top/v/2.0.0)

## Demo

Try it on [Codepen](https://codepen.io/seekertruth/pen/gOJLQKW) or, see it in action here [https://murtuzaalisurti.github.io/back-to-top/](https://murtuzaalisurti.github.io/back-to-top/).
