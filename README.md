# &lt;back-to-top&gt;

A `back-to-top` button web component with throttle support.

> ```html
> <button is="back-to-top" class="back-to-top"></button>
> ```

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
<button is="back-to-top" class="back-to-top"></button>
```

> !IMPORTANT: The `is="back-to-top"` attribute is a must.

You can style this component however you want, here are some styles to start with:

```css
.back-to-top {
    bottom: 3rem;
    left: 2rem;
    width: 3rem;
    height: 3rem;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}
```

## Event Throttling

- This package uses lodash for [throttling](https://css-tricks.com/debouncing-throttling-explained-examples/) scroll events in order to show/hide the back-to-top button component.
- It uses a custom lodash build generated from `lodash include=throttle -p`.
- Currently, the throttling rate is set to `400` milliseconds and is not configurable, but will support it's modification in the near future.
