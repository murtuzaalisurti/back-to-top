# Changelog

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v2.0.0](https://www.npmjs.com/package/@murtuzaalisurti/back-to-top/v/2.0.0)

### Added

- v2.0 - throttle rate modification support via attribute ([#2](https://github.com/murtuzaalisurti/back-to-top/pull/2))

### Breaking Change 🚧

- Moved away from the `is` attribute (safari doesn't support it) and refactored the component to be an autonomous custom element by just extending the `HTMLElement` class. See discussion [#1](https://github.com/murtuzaalisurti/back-to-top/issues/1).
- With this change, you have to define your element in HTML as shown below:

```html
<back-to-top throttle="400"></back-to-top>
```
