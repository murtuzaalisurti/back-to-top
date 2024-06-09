/**
 * @license
 * This component uses a custom loash build which includes only the 'throttle' module
 */
import throttle from "./modularize/throttle.js"

class BackToTop extends HTMLElement {
    constructor() {
        super();
        this.currentScrollPos = 0;
        this.throttleRate = 400; // milliseconds
        this.buttonContent = `
            <template>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
            </template>
        `
    }

    static get observedAttributes() {
        return ["throttle"];
    }

    static register(tagName) {
        if ("customElements" in window) {
            customElements.define(tagName || "back-to-top", BackToTop);
        }
    }

    /**
     * @explain
     * Converting camelCase CSS properties defined in JS objects to kebab case
     * and returning the CSS block
     */
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

    get svg() {
        return this.backToTopButton.querySelector('svg');
    }

    get getThrottleRate() {
        return this.throttleRate;
    }

    set setThrottleRate(value) {
        this.throttleRate = Number(value);
    }

    get getButtonContent() {
        return this.buttonContent;
    }

    set setButtonContent(value) {
        this.buttonContent = value;
    }

    backToTopChildElement(selector) {
        return this.querySelector(selector);
    }

    get backToTopLink() {
        return this.backToTopChildElement('.back-to-top-fallback') ?? this.backToTopChildElement('a');
    }

    get backToTopButton() {
        return this.backToTopChildElement('button');
    }

    parseHTMLFromString(htmlAsString) {
        return new DOMParser().parseFromString(htmlAsString, "text/html");
    }

    templateContent(element) {
        return element.querySelector("template")?.content.cloneNode(true);
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
        return throttle(() => {
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
        this.backToTopLink && this.backToTopLink.setAttribute("hidden", true);
        this.backToTopLink && (this.backToTopLink.style.display = 'none');

        this.append(document.createElement("button"));
        this.backToTopButton.classList.add("back-to-top");
        this.backToTopButton.style = this.#hidden;
        this.backToTopButton.removeAttribute("hidden");

        // setting default button content from a template
        this.setButtonContent = this.templateContent(this.parseHTMLFromString(this.buttonContent));

        // if the template exists in the user-defined HTML inside the custom element, then
        const buttonContent = this.templateContent(this);
        if (buttonContent) this.setButtonContent = buttonContent;

        // appending the content inside the button
        this.backToTopButton.append(this.buttonContent);

        this.currentScrollPos =
            document.documentElement.scrollTop ||
            window.scrollY ||
            document.body.scrollTop;

        this.handleThrottle = this.throttledFunction(this.getThrottleRate)
        window.addEventListener("scroll", this.handleThrottle);
        this.backToTopButton.addEventListener("click", this.handleClick);

        if (this.svg) {
            const currentSVGStyles = this.getComputedStyles(this.svg);
    
            if (currentSVGStyles.getPropertyValue("display") === "inline") {
                this.svg.style.display = "block";
            }
        }
    }

    // observing the "throttle" attribute
    attributeChangedCallback(name, oldVal, newVal) {
        name === "throttle" && (this.setThrottleRate = newVal) && (this.handleThrottle = this.throttledFunction(this.getThrottleRate));
    }

    // when the component is removed from the document, removing the listeners
    disconnectedCallback() {
        window.removeEventListener("scroll", this.handleThrottle);
        this.backToTopButton.removeEventListener("click", this.handleClick);
    }
}

BackToTop.register();