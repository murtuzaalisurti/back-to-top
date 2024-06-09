# Changelog

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v3.0.3](https://www.npmjs.com/package/@murtuzaalisurti/back-to-top/v/3.0.3)

### Improvements

- remove dependencies which were actually dev dependencies - [`9a5ede5`](https://github.com/murtuzaalisurti/back-to-top/commit/9a5ede5)

## [v3.0.2](https://www.npmjs.com/package/@murtuzaalisurti/back-to-top/v/3.0.2)

### Fix

- modularize lodash' custom build used in this component - [`7e720dd`](https://github.com/murtuzaalisurti/back-to-top/commit/7e720dd)

## [v3.0.1](https://www.npmjs.com/package/@murtuzaalisurti/back-to-top/v/3.0.1)

### Improvements

- fix: add display none to fallback element to prevent style override (hidden attribute gets overridden by display flex). - 9a3fc89
- fix: supports class `back-to-top-fallback` for the fallback element selection. - 2df7e06

```html
<back-to-top throttle="350">
    <a href="#" class="back-to-top-fallback" style="position: fixed;">back-to-top</a>
    <template>
        button content here
    </template>
</back-to-top>
```

## [v3.0.0](https://www.npmjs.com/package/@murtuzaalisurti/back-to-top/v/3.0.0)

### Added

- Fallback anchor link support when javascript can't execute. ([#5](https://github.com/murtuzaalisurti/back-to-top/pull/5))
- Customizable button content [`83dfe0e`](https://github.com/murtuzaalisurti/back-to-top/pull/5/commits/83dfe0e2d79dea0d77bf4ffdc4b16c0b073934cd).

```html
<back-to-top throttle="350">
    <a href="#" style="position: fixed; left: 1rem; bottom: 2rem;">back-to-top</a>
    <template>
        button content here
    </template>
</back-to-top>
```

## [v2.0.0](https://www.npmjs.com/package/@murtuzaalisurti/back-to-top/v/2.0.0)

### Added

- v2.0 - throttle rate modification support via attribute ([#2](https://github.com/murtuzaalisurti/back-to-top/pull/2))

### Breaking Change 🚧

- Moved away from the `is` attribute (safari doesn't support it) and refactored the component to be an autonomous custom element by just extending the `HTMLElement` class. See discussion [#1](https://github.com/murtuzaalisurti/back-to-top/issues/1).
- With this change, you have to define your element in HTML as shown below:

```html
<back-to-top throttle="400"></back-to-top>
```
