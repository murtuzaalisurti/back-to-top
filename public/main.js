(() => {
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);

  // lodash.custom.min.js
  (function() {
    function t() {
      return d.Date.now();
    }
    function e() {
    }
    function n(e2, n2, r2) {
      function i2(t2) {
        var n3 = s2, o2 = b2;
        return s2 = b2 = f, j2 = t2, d2 = e2.apply(o2, n3);
      }
      function a2(t2) {
        var e3 = t2 - g2;
        return t2 -= j2, g2 === f || e3 >= n2 || 0 > e3 || x2 && t2 >= y2;
      }
      function c2() {
        var e3 = t();
        if (a2(e3)) return l2(e3);
        var o2, r3 = setTimeout;
        o2 = e3 - j2, e3 = n2 - (e3 - g2), o2 = x2 ? h(e3, y2 - o2) : e3, m2 = r3(c2, o2);
      }
      function l2(t2) {
        return m2 = f, T && s2 ? i2(t2) : (s2 = b2 = f, d2);
      }
      function p2() {
        var e3 = t(), o2 = a2(e3);
        if (s2 = arguments, b2 = this, g2 = e3, o2) {
          if (m2 === f) return j2 = e3 = g2, m2 = setTimeout(c2, n2), v2 ? i2(e3) : d2;
          if (x2) return m2 = setTimeout(c2, n2), i2(g2);
        }
        return m2 === f && (m2 = setTimeout(c2, n2)), d2;
      }
      var s2, b2, y2, d2, m2, g2, j2 = 0, v2 = false, x2 = false, T = true;
      if (typeof e2 != "function") throw new TypeError("Expected a function");
      return n2 = u(n2) || 0, o(r2) && (v2 = !!r2.leading, y2 = (x2 = "maxWait" in r2) ? O(u(r2.maxWait) || 0, n2) : y2, T = "trailing" in r2 ? !!r2.trailing : T), p2.cancel = function() {
        m2 !== f && clearTimeout(m2), j2 = 0, s2 = g2 = b2 = m2 = f;
      }, p2.flush = function() {
        return m2 === f ? d2 : l2(t());
      }, p2;
    }
    function o(t2) {
      var e2 = typeof t2;
      return null != t2 && ("object" == e2 || "function" == e2);
    }
    function r(t2) {
      return null != t2 && typeof t2 == "object";
    }
    function i(t2) {
      var e2;
      if (!(e2 = typeof t2 == "symbol") && (e2 = r(t2))) {
        if (null == t2) t2 = t2 === f ? "[object Undefined]" : "[object Null]";
        else if (x && x in Object(t2)) {
          e2 = j.call(t2, x);
          var n2 = t2[x];
          try {
            t2[x] = f;
            var o2 = true;
          } catch (t3) {
          }
          var i2 = v.call(t2);
          o2 && (e2 ? t2[x] = n2 : delete t2[x]), t2 = i2;
        } else t2 = v.call(t2);
        e2 = "[object Symbol]" == t2;
      }
      return e2;
    }
    function u(t2) {
      if (typeof t2 == "number") return t2;
      if (i(t2)) return a;
      if (o(t2) && (t2 = typeof t2.valueOf == "function" ? t2.valueOf() : t2, t2 = o(t2) ? t2 + "" : t2), typeof t2 != "string") return 0 === t2 ? t2 : +t2;
      t2 = t2.replace(c, "");
      var e2 = p.test(t2);
      return e2 || s.test(t2) ? b(t2.slice(2), e2 ? 2 : 8) : l.test(t2) ? a : +t2;
    }
    var f, a = NaN, c = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, s = /^0o[0-7]+$/i, b = parseInt, y = typeof self == "object" && self && self.Object === Object && self, d = typeof global == "object" && global && global.Object === Object && global || y || Function("return this")(), m = (y = typeof exports == "object" && exports && !exports.nodeType && exports) && typeof module == "object" && module && !module.nodeType && module, g = Object.prototype, j = g.hasOwnProperty, v = g.toString, x = (g = d.Symbol) ? g.toStringTag : f, O = Math.max, h = Math.min;
    e.debounce = n, e.throttle = function(t2, e2, r2) {
      var i2 = true, u2 = true;
      if (typeof t2 != "function") throw new TypeError("Expected a function");
      return o(r2) && (i2 = "leading" in r2 ? !!r2.leading : i2, u2 = "trailing" in r2 ? !!r2.trailing : u2), n(t2, e2, { leading: i2, maxWait: e2, trailing: u2 });
    }, e.isObject = o, e.isObjectLike = r, e.isSymbol = i, e.now = t, e.toNumber = u, e.VERSION = "4.17.5", typeof define == "function" && typeof define.amd == "object" && define.amd ? (d._ = e, define(function() {
      return e;
    })) : m ? ((m.exports = e)._ = e, y._ = e) : d._ = e;
  }).call(void 0);

  // main.js
  var _defaultStyles, _hidden, _show;
  var _BackToTop = class _BackToTop extends HTMLElement {
    constructor() {
      super();
      __privateAdd(this, _defaultStyles, {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      });
      __privateAdd(this, _hidden, this.getCSSFromJSDeclaration({
        ...__privateGet(this, _defaultStyles),
        opacity: 0,
        visibility: "hidden"
      }));
      __privateAdd(this, _show, this.getCSSFromJSDeclaration({
        ...__privateGet(this, _defaultStyles),
        opacity: 1,
        visibility: "visible"
      }));
      this.currentScrollPos = 0;
      this.throttleRate = 400;
    }
    static get observedAttributes() {
      return ["throttle"];
    }
    static register(tagName) {
      if ("customElements" in window) {
        customElements.define(tagName || "back-to-top", _BackToTop);
      }
    }
    /**
     * @explain
     * Converting camelCase CSS properties defined in JS objects to kebab case
     * and returning the CSS block
     */
    getCSSFromJSDeclaration(obj) {
      return Object.keys(obj).map((key) => {
        const camelCaseProperty = key.split("").some((letter) => letter.toLowerCase() !== letter);
        const parsedKey = camelCaseProperty ? key.split("").splice(
          key.split("").findIndex((letter) => letter.toLowerCase() !== letter)
        ).join("").toLowerCase().concat("-").concat(
          key.split("").splice(
            0,
            key.split("").findIndex((letter) => letter.toLowerCase() !== letter)
          ).join("").toLowerCase()
        ).split("-").reverse().join("-") : key;
        return `${parsedKey}: ${obj[key]}`;
      }).join(";").concat(";");
    }
    get backToTopButton() {
      return this.querySelector("button");
    }
    get backToTopLink() {
      return this.querySelector("a");
    }
    get svgUpArrow() {
      return this.backToTopButton.querySelector("svg");
    }
    get getThrottleRate() {
      return this.throttleRate;
    }
    set setThrottleRate(value) {
      this.throttleRate = Number(value);
    }
    getComputedStyles(e) {
      return window.getComputedStyle(e, null);
    }
    handleClick() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    throttledFunction(rate) {
      return _.throttle(() => {
        let prevScrollPos = document.documentElement.scrollTop || window.scrollY || document.body.scrollTop;
        this.currentScrollPos <= prevScrollPos ? this.backToTopButton.style = __privateGet(this, _hidden) : this.backToTopButton.style = __privateGet(this, _show);
        this.currentScrollPos = prevScrollPos;
        this.currentScrollPos === 0 && (this.backToTopButton.style = __privateGet(this, _hidden));
      }, rate);
    }
    connectedCallback() {
      this.backToTopLink && this.backToTopLink.setAttribute("hidden", true);
      this.append(document.createElement("button"));
      this.backToTopButton.classList.add("back-to-top");
      this.backToTopButton.style = __privateGet(this, _hidden);
      this.backToTopButton.removeAttribute("hidden");
      this.currentScrollPos = document.documentElement.scrollTop || window.scrollY || document.body.scrollTop;
      this.handleThrottle = this.throttledFunction(this.getThrottleRate);
      window.addEventListener("scroll", this.handleThrottle);
      this.backToTopButton.addEventListener("click", this.handleClick);
      this.backToTopButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
        `;
      const currentSVGStyles = this.getComputedStyles(this.svgUpArrow);
      const currentBackToTopButtonStyles = this.getComputedStyles(this.backToTopButton);
      if (currentSVGStyles.getPropertyValue("display") === "inline") {
        this.svgUpArrow.style.display = "block";
      }
      if (currentSVGStyles.getPropertyValue("height") === currentBackToTopButtonStyles.getPropertyValue("height")) {
        this.svgUpArrow.style.height = "70%";
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
  };
  _defaultStyles = new WeakMap();
  _hidden = new WeakMap();
  _show = new WeakMap();
  var BackToTop = _BackToTop;
  BackToTop.register();
})();
/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="throttle" -p`
 */
/**
 * @license
 * This component uses a custom loash build which includes only the 'throttle' module
 */
