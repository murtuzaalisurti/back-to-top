# &lt;back-to-top&gt;

A "back-to-top" button web component with throttle support.

## Installation

From:

1. NPM
    - >npm i @murtuzaalisurti/back-to-top
    - Import the package in a JS module using:
        - > import "@murtuzaalisurti/back-to-top"
    - And refer to that file using a `script` tag such as:
        - > `<script src="./your-js-module" type="module"></script>`

## Event Throttling

This package uses lodash for throttling scroll events in order to show/hide the back-to-top button component. It uses a custom lodash build generated from `lodash include=throttle -p`.
