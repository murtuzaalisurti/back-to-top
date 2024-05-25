import "./lodash.custom.min.js"

/**
 * @license
 * This component uses a custom loash build which includes only the 'throttle' module
 */
class BackToTop extends HTMLButtonElement {
    constructor() {
        super();
        this.currentScrollPos = 0;
        this.handleThrottle = this.handleThrottle.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    static register(tagName, extendsElement) {
        if ("customElements" in window) {
            if (extendsElement) {
                customElements.define(tagName || "back-to-top", BackToTop, { extends: extendsElement });
                return;
            }
            customElements.define(tagName || "back-to-top", BackToTop);
        }
    }

    #defaultStyles = {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    getCSSFromJSDeclaration(obj) {
        return Object.keys(obj).map(key => {
            const camelCaseProperty = key.split("").some(letter => letter.toLowerCase() !== letter)
            const parsedKey =
                camelCaseProperty ? key.split("").splice(
                    key.split("").findIndex(letter => letter.toLowerCase() !== letter)
                ).join("").toLowerCase().concat("-").concat(
                    key.split("").splice(
                        0, key.split("").findIndex(letter => letter.toLowerCase() !== letter)
                    ).join("").toLowerCase()
                ).split("-").reverse().join("-") : key;

            return `${parsedKey}: ${obj[key]}`
        }).join(";").concat(";")
    }

    #hidden = this.getCSSFromJSDeclaration({
        ...this.#defaultStyles,
        opacity: 0,
        visibility: "hidden"
    })

    #show = this.getCSSFromJSDeclaration({
        ...this.#defaultStyles,
        opacity: 1,
        visibility: "visible"
    })

    connectedCallback() {
        this.style = 'display: none';

        this.currentScrollPos =
            document.documentElement.scrollTop ||
            window.scrollY ||
            document.body.scrollTop;

        window.addEventListener("scroll", this.handleThrottle);
        this.addEventListener("click", this.handleClick);

        this.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
        `

        const svgUpArrowElement = this.querySelector('svg')
        const currentSVGStyles = this.getComputedStyles(svgUpArrowElement)

        if (currentSVGStyles.getPropertyValue("display") === "inline") {
            this.querySelector('svg').style.display = "block"
        }

        if (currentSVGStyles.getPropertyValue("height") === "auto") {
            this.querySelector('svg').style.height = "80%"
        }
    }

    disconnectedCallback() {
        window.removeEventListener("scroll", this.handleThrottle);
        this.removeEventListener("click", this.handleClick);
    }

    getComputedStyles(e) {
        return window.getComputedStyle(e, null)
    }

    handleClick() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    handleThrottle = _.throttle(() => {
        let prevScrollPos =
            document.documentElement.scrollTop ||
            window.scrollY ||
            document.body.scrollTop;

        this.currentScrollPos <= prevScrollPos
            ? this.style = this.#hidden
            : this.style = this.#show;

        this.currentScrollPos = prevScrollPos;

        this.currentScrollPos === 0 &&
            (this.style = this.#hidden);
    }, 400)
}

BackToTop.register("back-to-top", "button");