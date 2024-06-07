# Changelog

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v3.0.0](https://www.npmjs.com/package/@murtuzaalisurti/back-to-top/v/3.0.0)

### Added

- Fallback anchor link support when javascript can't execute. ([#5](https://github.com/murtuzaalisurti/back-to-top/pull/5))
- Customizable button content [83dfe0e](https://github.com/murtuzaalisurti/back-to-top/pull/5/commits/83dfe0e2d79dea0d77bf4ffdc4b16c0b073934cd).

```html
<back-to-top throttle="350">
    <a href="#" style="position: fixed; left: 1rem; bottom: 2rem;">back-to-top</a>
    <template>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
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
