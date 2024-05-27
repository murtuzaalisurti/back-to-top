/**
 * @license
 * This component uses a custom loash build which includes only the 'throttle' module
 */
import "./lodash.custom.min.js"

class BackToTop extends HTMLElement {
    constructor() {
        super();
        this.currentScrollPos = 0;
        this.throttleRate = 400; // milliseconds
    }

    static get observedAttributes() {
        return ["throttle"];
    }

    static register(tagName) {
        if ("customElements" in window) {
            customElements.define(tagName || "back-to-top", BackToTop);
        }
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

            return `${parsedKey}: ${obj[key]}`;
        }).join(";").concat(";");
    }

    get backToTopButton() {
        return document.querySelector("back-to-top > button:first-child");
    }

    get svgUpArrow() {
        return this.backToTopButton.querySelector('svg');
    }

    get getThrottleRate() {
        return this.throttleRate;
    }

    set setThrottleRate(value) {
        this.throttleRate = Number(value);
    }

    #defaultStyles = {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
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

    getComputedStyles(e) {
        return window.getComputedStyle(e, null);
    }

    handleClick() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    throttledFunction(rate) {
        return _.throttle(() => {
            let prevScrollPos =
                document.documentElement.scrollTop ||
                window.scrollY ||
                document.body.scrollTop;
    
            this.currentScrollPos <= prevScrollPos
                ? this.backToTopButton.style = this.#hidden
                : this.backToTopButton.style = this.#show;
    
            this.currentScrollPos = prevScrollPos;
    
            this.currentScrollPos === 0 &&
                (this.backToTopButton.style = this.#hidden);
        }, rate);
    }

    connectedCallback() {
        this.append(document.createElement("button"));
        this.backToTopButton.classList.add("back-to-top");
        this.backToTopButton.style = this.#hidden;

        this.currentScrollPos =
            document.documentElement.scrollTop ||
            window.scrollY ||
            document.body.scrollTop;

        this.handleThrottle = this.throttledFunction(this.getThrottleRate)
        window.addEventListener("scroll", this.handleThrottle);
        this.backToTopButton.addEventListener("click", this.handleClick);

        this.backToTopButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
        `;

        const currentSVGStyles = this.getComputedStyles(this.svgUpArrow);

        if (currentSVGStyles.getPropertyValue("display") === "inline") {
            this.svgUpArrow.style.display = "block";
        }

        if (currentSVGStyles.getPropertyValue("height") === "auto") {
            this.svgUpArrow.style.height = "80%";
        }
    }

    attributeChangedCallback(name, oldVal, newVal) {
        name === "throttle" && (this.setThrottleRate = newVal) && (this.handleThrottle = this.throttledFunction(this.getThrottleRate));
    }

    disconnectedCallback() {
        window.removeEventListener("scroll", this.handleThrottle);
        this.backToTopButton.removeEventListener("click", this.handleClick);
    }
}

BackToTop.register();