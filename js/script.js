! function (n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).astralis = t()
}(this, (function () {
    "use strict";
    var n, t, e, o;
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function (n) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var t = Object(this),
                e = t.length >>> 0;
            if ("function" != typeof n) throw new TypeError("predicate must be a function");
            for (var o = arguments[1], i = 0; i < e;) {
                var r = t[i];
                if (n.call(o, r, i, t)) return r;
                i++
            }
        }
    }), Array.from || (Array.from = (n = Object.prototype.toString, t = function (t) {
        return "function" == typeof t || "[object Function]" === n.call(t)
    }, e = Math.pow(2, 53) - 1, o = function (n) {
        var t = function (n) {
            var t = Number(n);
            return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
        }(n);
        return Math.min(Math.max(t, 0), e)
    }, function (n) {
        var e = this,
            i = Object(n);
        if (null == n) throw new TypeError("Array.from requires an array-like object - not null or undefined");
        var r, a = arguments.length > 1 ? arguments[1] : void 0;
        if (void 0 !== a) {
            if (!t(a)) throw new TypeError("Array.from: when provided, the second argument must be a function");
            arguments.length > 2 && (r = arguments[2])
        }
        for (var u, l = o(i.length), c = t(e) ? Object(new e(l)) : new Array(l), f = 0; f < l;) u = i[f], c[f] = a ? void 0 === r ? a(u, f) : a.call(r, u, f) : u, f += 1;
        return c.length = l, c
    }));
    var i = window,
        r = document,
        a = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
        u = /(Mac|iPhone|iPod|iPad)/i.test(i.navigator.userAgent),
        l = "ontouchstart" in i || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
        c = {
            test: {},
            shared: {}
        },
        f = ["parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards", "dropEffect", "waterEffect"];

    function s(n, t) {
        i.console && i.console[n] && i.console[n]("astralis: " + t)
    }

    function v(n) {
        return "none" !== i.getComputedStyle(n).display
    }

    function d(n) {
        return Array.from(n).filter((function (n) {
            return v(n)
        }))
    }

    function h(n, t) {
        return (t = arguments.length > 1 ? t : document) ? t.querySelectorAll(n) : null
    }

    function p(n) {
        n = n || {};
        for (var t = 1, e = arguments.length; t < e; ++t) {
            var o = arguments[t];
            if (o)
                for (var i in o) o.hasOwnProperty(i) && "__proto__" != i && "constructor" != i && ("[object Object]" !== Object.prototype.toString.call(o[i]) ? n[i] = o[i] : n[i] = p(n[i], o[i]))
        }
        return n
    }

    function g(n, t) {
        return null != n && n.classList.contains(t)
    }

    function m() {
        return "innerHeight" in i ? i.innerHeight : r.documentElement.offsetHeight
    }

    function w() {
        return i.innerWidth
    }

    function b(n, t) {
        var e;
        for (e in n = M(n), t)
            if (t.hasOwnProperty(e) && null !== e)
                for (var o = 0; o < n.length; o++) n[o].style[e] = t[e];
        return n
    }

    function y(n) {
        return n.previousElementSibling
    }

    function S(n) {
        return n.nextElementSibling
    }

    function T(n, t) {
        n = A(n) ? n[0] : n;
        for (var e = null != t ? h(t, n.parentNode) : n.parentNode.childNodes, o = 0, i = 0; i < e.length; i++) {
            if (e[i] == n) return o;
            1 == e[i].nodeType && o++
        }
        return -1
    }

    function M(n) {
        return A(n) ? n : [n]
    }

    function x(n) {
        n = M(n);
        for (var t = 0; t < n.length; t++) n[t].style.display = "none";
        return n
    }

    function k(n) {
        n = M(n);
        for (var t = 0; t < n.length; t++) n[t].style.display = "block";
        return n
    }

    function A(n) {
        return "[object Array]" === Object.prototype.toString.call(n) || "[object NodeList]" === Object.prototype.toString.call(n)
    }

    function O(n, t) {
        n = M(n);
        for (var e = 0; e < n.length; e++) n[e].classList.add(t);
        return n
    }

    function j(n, t) {
        n = M(n);
        for (var e = t.split(" "), o = 0; o < e.length; o++) {
            t = e[o];
            for (var i = 0; i < n.length; i++) n[i].classList.remove(t)
        }
        return n
    }

    function D(n, t) {
        t.appendChild(n)
    }

    function E(n, t, e) {
        var o;
        t = t || r.createElement("div");
        for (var i = 0; i < n.length; i++) {
            var a = n[i];
            (e && !i || !e) && (o = t.cloneNode(!0), a.parentNode.insertBefore(o, a)), o.appendChild(a)
        }
        return n
    }

    function L(n, t) {
        E(n, t, !0)
    }

    function R(n) {
        for (var t = r.createDocumentFragment(); n.firstChild;) t.appendChild(n.firstChild);
        n.parentNode.replaceChild(t, n)
    }

    function P(n, t) {
        return n && 1 === n.nodeType ? q(n, t) ? n : P(n.parentNode, t) : null
    }

    function C(n, t) {
        F(n, n.nextSibling, t)
    }

    function z(n, t) {
        F(n, n, t)
    }

    function F(n, t, e) {
        A(e) || ("string" == typeof e && (e = Q(e)), e = [e]);
        for (var o = 0; o < e.length; o++) n.parentNode.insertBefore(e[o], t)
    }

    function N(n) {
        if (void 0 !== n && n.fitToSection) return r.body.scrollTop;
        var t = r.documentElement;
        return (i.pageYOffset || t.scrollTop) - (t.clientTop || 0)
    }

    function B(n) {
        return Array.prototype.filter.call(n.parentNode.children, (function (t) {
            return t !== n
        }))
    }

    function I(n) {
        n.preventDefault()
    }

    function H(n, t) {
        return n.getAttribute(t)
    }

    function W(n, t, e) {
        r.addEventListener(n, t, "undefined" === e ? null : e)
    }

    function V(n, t, e) {
        i.addEventListener(n, t, "undefined" === e ? null : e)
    }

    function U(n, t, e) {
        r.removeEventListener(n, t, "undefined" === e ? null : e)
    }

    function K(n, t, e) {
        i.removeEventListener(n, t, "undefined" === e ? null : e)
    }

    function G(n) {
        if ("function" == typeof n) return !0;
        var t = Object.prototype.toString.call(n);
        return "[object Function]" === t || "[object GeneratorFunction]" === t
    }

    function _(n, t, e) {
        var o;
        e = void 0 === e ? {} : e, "function" == typeof i.CustomEvent ? o = new CustomEvent(t, {
            detail: e
        }) : (o = r.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, e), n.dispatchEvent(o)
    }

    function q(n, t) {
        return (n.matches || n.t || n.msMatchesSelector || n.mozMatchesSelector || n.webkitMatchesSelector || n.oMatchesSelector).call(n, t)
    }

    function Y(n, t) {
        if ("boolean" == typeof t)
            for (var e = 0; e < n.length; e++) n[e].style.display = t ? "block" : "none";
        return n
    }

    function Q(n) {
        var t = r.createElement("div");
        return t.innerHTML = n.trim(), t.firstChild
    }

    function X(n) {
        n = M(n);
        for (var t = 0; t < n.length; t++) {
            var e = n[t];
            e && e.parentElement && e.parentNode.removeChild(e)
        }
    }

    function $(n, t, e) {
        for (var o = n[e], i = []; o;)(q(o, t) || null == t) && i.push(o), o = o[e];
        return i
    }

    function J(n, t) {
        return $(n, t, "nextElementSibling")
    }

    function Z(n, t) {
        return $(n, t, "previousElementSibling")
    }

    function nn(n) {
        return n[n.length - 1]
    }

    function tn(n, t) {
        for (var e = 0, o = n.slice(Math.max(n.length - t, 1)), i = 0; i < o.length; i++) e += o[i];
        return Math.ceil(e / t)
    }

    function en(n, t) {
        n.setAttribute(t, H(n, "data-" + t)), n.removeAttribute("data-" + t)
    }

    function on(n) {
        return on = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
            return typeof n
        } : function (n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }, on(n)
    }
    i.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (n, t) {
        t = t || window;
        for (var e = 0; e < this.length; e++) n.call(t, this[e], e, this)
    }), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function (n, t) {
            if (null == n) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(n), o = 1; o < arguments.length; o++) {
                var i = arguments[o];
                if (null != i)
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
            }
            return e
        },
        writable: !0,
        o: !0
    }), window.fp_utils = {
        $: h,
        deepExtend: p,
        hasClass: g,
        getWindowHeight: m,
        css: b,
        prev: y,
        next: S,
        last: function (n) {
            return n[n.length - 1]
        },
        index: T,
        getList: M,
        hide: x,
        show: k,
        isArrayOrList: A,
        addClass: O,
        removeClass: j,
        appendTo: D,
        wrap: E,
        wrapAll: L,
        unwrap: R,
        closest: P,
        after: C,
        before: z,
        insertBefore: F,
        getScrollTop: N,
        siblings: B,
        preventDefault: I,
        isFunction: G,
        trigger: _,
        matches: q,
        toggle: Y,
        createElementFromHTML: Q,
        remove: X,
        untilAll: $,
        nextAll: J,
        prevAll: Z,
        showError: s
    };
    var rn = {
            i: {},
            u: function (n, t) {
                var e = this;
                return "object" !== on(this.i[n]) && (this.i[n] = []), this.i[n].push(t),
                    function () {
                        return e.removeListener(n, t)
                    }
            },
            removeListener: function (n, t) {
                if ("object" === on(this.i[n])) {
                    var e = this.i[n].indexOf(t);
                    e > -1 && this.i[n].splice(e, 1)
                }
            },
            l: function (n) {
                for (var t = this, e = arguments.length, o = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) o[i - 1] = arguments[i];
                "object" === on(this.i[n]) && this.i[n].forEach((function (n) {
                    return n.apply(t, o)
                }))
            },
            once: function (n, t) {
                var e = this,
                    o = this.u(n, (function () {
                        o();
                        for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        t.apply(e, i)
                    }))
            }
        },
        an = {
            v: 0,
            h: 0,
            slides: [],
            p: [],
            g: null,
            S: null,
            T: !1,
            M: !1,
            A: !1,
            O: !1,
            j: !1,
            D: void 0,
            L: void 0,
            R: !1,
            P: !0,
            C: "none",
            F: "none",
            N: !1,
            B: !1,
            I: !0,
            H: 0,
            W: m(),
            V: !1,
            U: {},
            scrollY: 0,
            scrollX: 0
        };

    function un(n) {
        Object.assign(an, n)
    }

    function ln() {
        return an
    }

    function cn(n) {
        rn.l("onClickOrTouch", {
            e: n,
            target: n.target
        })
    }

    function fn() {
        ["click", "touchstart"].forEach((function (n) {
            U(n, cn)
        }))
    }

    function sn() {
        un({
            I: !0
        })
    }
    i.state = an, rn.u("bindEvents", (function () {
        ["click", "touchstart"].forEach((function (n) {
            W(n, cn)
        })), V("focus", sn), rn.u("onDestroy", fn)
    }));
    var vn = "astralis-wrapper",
        dn = "." + vn,
        hn = "fp-responsive",
        pn = "fp-notransition",
        gn = "fp-destroyed",
        mn = "fp-enabled",
        wn = "active",
        bn = ".active",
        yn = "fp-completely",
        Sn = "fp-section",
        Tn = "." + Sn,
        Mn = ".fp-tableCell",
        xn = "fp-auto-height",
        kn = "#fp-nav",
        An = "fp-slide",
        On = "." + An,
        jn = ".fp-slide.active",
        Dn = "fp-slides",
        En = ".fp-slides",
        Ln = "fp-slidesContainer",
        Rn = "." + Ln,
        Pn = "fp-table",
        Cn = "fp-overflow",
        zn = "." + Cn,
        Fn = ".fp-slidesNav",
        Nn = ".fp-slidesNav a",
        Bn = "fp-controlArrow",
        In = "." + Bn,
        Hn = "fp-prev",
        Wn = ".fp-controlArrow.fp-prev",
        Vn = ".fp-controlArrow.fp-next",
        Un = {
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            licenseKey: "",
            credits: {
                enabled: !0,
                label: "Made with astralis.js",
                position: "right"
            },
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            dragAndMove: !1,
            offsetSections: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !0,
            scrollOverflowReset: !1,
            touchSensitivity: 5,
            touchWrapper: null,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            allowCorrectDirection: !1,
            scrollOverflowMacStyle: !0,
            controlArrows: !0,
            controlArrowsHTML: ['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'],
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            parallax: !1,
            parallaxOptions: {
                type: "reveal",
                percentage: 62,
                property: "translate"
            },
            cards: !1,
            cardsOptions: {
                perspective: 100,
                fadeContent: !0,
                fadeBackground: !0
            },
            sectionSelector: ".section",
            slideSelector: ".slide",
            afterLoad: null,
            beforeLeave: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            onScrollOverflow: null,
            lazyLoading: !0,
            observer: !0
        },
        Kn = null,
        Gn = !1,
        _n = p({}, Un),
        qn = null;

    function Yn(n) {
        return Kn
    }

    function Qn() {
        return qn || Un
    }

    function Xn() {
        return _n
    }

    function $n(n, t, e) {
        qn[n] = t, "internal" !== e && (_n[n] = t)
    }

    function Jn() {
        if (!Qn().anchors.length) {
            var n = h(Qn().sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", Kn);
            n.length && n.length === h(Qn().sectionSelector, Kn).length && (Gn = !0, n.forEach((function (n) {
                Qn().anchors.push(H(n, "data-anchor").toString())
            })))
        }
        if (!Qn().navigationTooltips.length) {
            var t = h(Qn().sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", Kn);
            t.length && t.forEach((function (n) {
                Qn().navigationTooltips.push(H(n, "data-tooltip").toString())
            }))
        }
    }
    var Zn = function (n) {
            this.anchor = n.anchor, this.item = n.item, this.index = n.index(), this.isLast = this.index === n.item.parentElement.querySelectorAll(n.selector).length - 1, this.isFirst = !this.index, this.isActive = n.isActive
        },
        nt = function (n, t) {
            this.parent = this.parent || null, this.selector = t, this.anchor = H(n, "data-anchor") || Qn().anchors[T(n, Qn().sectionSelector)], this.item = n, this.isVisible = v(n), this.isActive = g(n, wn), this.K = g(n, Cn), this.G = t === Qn().sectionSelector, this._ = P(n, Rn) || P(n, dn), this.index = function () {
                return this.siblings().indexOf(this)
            }
        };

    function tt(n) {
        return n.map((function (n) {
            return n.item
        }))
    }

    function et(n, t) {
        return n.find((function (n) {
            return n.item === t
        }))
    }
    nt.prototype.siblings = function () {
        return this.G ? this.isVisible ? an.p : an.q : this.parent ? this.parent.slides : 0
    }, nt.prototype.prev = function () {
        var n = this.siblings(),
            t = (this.G ? n.indexOf(this) : this.parent.slides.indexOf(this)) - 1;
        return t >= 0 ? n[t] : null
    }, nt.prototype.next = function () {
        var n = this.siblings(),
            t = (this.G ? n.indexOf(this) : this.parent.slides.indexOf(this)) + 1;
        return t < n.length ? n[t] : null
    }, nt.prototype.Y = function () {
        return this.G ? an.p : an.X
    };
    var ot, it = function (n) {
            Zn.call(this, n)
        },
        rt = function (n) {
            Zn.call(this, n)
        };

    function at(n) {
        var t = h(jn, n);
        return t.length && (n = t[0]), n
    }

    function ut(n) {
        var t, e, o = Qn();
        return o.autoScrolling && !o.scrollBar ? (t = -n, e = h(dn)[0]) : o.fitToSection ? (t = n, e = r.body) : (t = n, e = window), {
            options: t,
            element: e
        }
    }

    function lt(n, t) {
        !Qn().autoScrolling || Qn().scrollBar || n.self != window && g(n, Dn) ? n.self != window && g(n, Dn) ? n.scrollLeft = t : n.scrollTo(0, t) : n.style.top = t + "px"
    }

    function ct(n) {
        var t = "transform " + Qn().scrollingSpeed + "ms " + Qn().easingcss3;
        return j(n, pn), b(n, {
            "-webkit-transition": t,
            transition: t
        })
    }

    function ft(n, t) {
        var e = n.index(),
            o = T(t, Tn);
        return e == o ? "none" : e > o ? "up" : "down"
    }

    function st(n) {
        return O(n, pn)
    }

    function vt(n) {
        return {
            "-webkit-transform": n,
            "-moz-transform": n,
            "-ms-transform": n,
            transform: n
        }
    }

    function dt(n, t) {
        t ? ct(Yn()) : st(Yn()), clearTimeout(ot), b(Yn(), vt(n)), c.test.J = n, ot = setTimeout((function () {
            j(Yn(), pn)
        }), 10)
    }

    function ht(n) {
        var t = Math.round(n);
        if (Qn().css3 && Qn().autoScrolling && !Qn().scrollBar) dt("translate3d(0px, -" + t + "px, 0px)", !1);
        else if (Qn().autoScrolling && !Qn().scrollBar) b(Yn(), {
            top: -t + "px"
        }), c.test.top = -t + "px";
        else {
            var e = ut(t);
            lt(e.element, e.options)
        }
    }

    function pt(n, t) {
        $n("scrollingSpeed", n, t)
    }

    function gt(n, t, e, o) {
        var a, u = function (n) {
                return n.self != i && g(n, Dn) ? n.scrollLeft : !Qn().autoScrolling || Qn().scrollBar ? N(Qn()) : n.offsetTop
            }(n),
            l = t - u,
            c = !1;
        un({
            R: !0
        }), n === r.body && b(r.body, {
            "scroll-snap-type": "none"
        }), window.requestAnimationFrame((function r(f) {
            a || (a = f);
            var s = Math.floor(f - a);
            if (an.R) {
                var v = t;
                e && (v = i.fp_easings[Qn().easing](s, u, l, e)), s <= e && lt(n, v), s < e ? window.requestAnimationFrame(r) : void 0 === o || c || (o(), c = !0)
            } else c || (o(), c = !0)
        }))
    }

    function mt(n) {
        return n && !n.item ? new it(new ae(n)) : n ? new it(n) : null
    }

    function wt(n) {
        return n ? new rt(n) : null
    }

    function bt(n, t) {
        var e, o = function (n, t) {
            var e = {
                afterRender: function () {
                    return {
                        section: mt(ln().g),
                        Z: wt(ln().g.activeSlide)
                    }
                },
                onLeave: function () {
                    return {
                        origin: mt(t.items.origin),
                        destination: mt(t.items.destination),
                        direction: t.direction,
                        trigger: ln().S
                    }
                },
                afterLoad: function () {
                    return e.onLeave()
                },
                afterSlideLoad: function () {
                    return {
                        section: mt(t.items.section),
                        origin: mt(t.items.origin),
                        destination: mt(t.items.destination),
                        direction: t.direction,
                        trigger: ln().S
                    }
                },
                onSlideLeave: function () {
                    return e.afterSlideLoad()
                },
                beforeLeave: function () {
                    return e.onLeave()
                },
                onScrollOverflow: function () {
                    return {
                        section: mt(ln().g),
                        Z: wt(ln().g.activeSlide),
                        position: t.position,
                        direction: t.direction
                    }
                }
            };
            return e[n]()
        }(n, t);
        return _(Yn(), n, o), !1 !== Qn()[n].apply(o[Object.keys(o)[0]], (e = o, Object.keys(e).map((function (n) {
            return e[n]
        }))))
    }

    function yt(n) {
        var t = at(n);
        h("video, audio", t).forEach((function (n) {
            n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play()
        })), h('iframe[src*="youtube.com/embed/"]', t).forEach((function (n) {
            n.hasAttribute("data-autoplay") && St(n), n.onload = function () {
                n.hasAttribute("data-autoplay") && St(n)
            }
        }))
    }

    function St(n) {
        n.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
    }

    function Tt(n) {
        var t = at(n);
        h("video, audio", t).forEach((function (n) {
            n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause()
        })), h('iframe[src*="youtube.com/embed/"]', t).forEach((function (n) {
            /youtube\.com\/embed\//.test(H(n, "src")) && !n.hasAttribute("data-keepplaying") && n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
        }))
    }

    function Mt(n) {
        Qn().lazyLoading && h("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", at(n)).forEach((function (n) {
            if (["src", "srcset"].forEach((function (t) {
                    var e = H(n, "data-" + t);
                    null != e && e && (en(n, t), n.addEventListener("load", (function () {})))
                })), q(n, "source")) {
                var t = P(n, "video, audio");
                t && (t.load(), t.onloadeddata = function () {})
            }
        }))
    }
    c.setScrollingSpeed = pt;
    var xt = null,
        kt = null,
        At = null;

    function Ot() {
        var n = ln().g.item,
            t = ln().g.activeSlide,
            e = jt(n),
            o = String(e);
        t && (o = o + "-" + jt(t.item)), o = o.replace("/", "-").replace("#", "");
        var i = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
        xt.className = xt.className.replace(i, ""), O(xt, "fp-viewing-" + o)
    }

    function jt(n) {
        if (!n) return null;
        var t = H(n, "data-anchor"),
            e = T(n);
        return null == t && (t = e), t
    }

    function Dt(n, t, e) {
        var o = "";
        Qn().anchors.length && !Qn().lockAnchors && (n ? (null != e && (o = e), null == t && (t = n), un({
            L: t
        }), Et(o + "/" + t)) : null != n ? (un({
            L: t
        }), Et(e)) : Et(e)), Ot()
    }

    function Et(n) {
        if (Qn().recordHistory) location.hash = n;
        else if (a || l) i.history.replaceState(void 0, void 0, "#" + n);
        else {
            var t = i.location.href.split("#")[0];
            i.location.replace(t + "#" + n)
        }
    }

    function Lt(n, t, e) {
        var o = "Section" === t ? Qn().anchors[n] : H(e, "data-anchor");
        return encodeURI(Qn().navigationTooltips[n] || o || t + " " + (n + 1))
    }

    function Rt(n) {
        I(n), un({
            S: "horizontalNav"
        });
        var t = P(this, Tn),
            e = h(En, P(this, Tn))[0],
            o = et(ln().p, t).slides[T(P(this, "li"))];
        rn.l("landscapeScroll", {
            slides: e,
            destination: o.item
        })
    }
    var Pt, Ct = {};

    function zt(n, t, e) {
        "all" !== t ? Ct[e][t] = n : Object.keys(Ct[e]).forEach((function (t) {
            Ct[e][t] = n
        }))
    }

    function Ft() {
        return Ct
    }

    function Nt() {
        var n = P(this, Tn);
        g(this, Hn) ? Ft().m.left && (un({
            S: "slideArrow"
        }), rn.l("moveSlideLeft", {
            section: n
        })) : Ft().m.right && (un({
            S: "slideArrow"
        }), rn.l("moveSlideRight", {
            section: n
        }))
    }

    function Bt() {
        clearTimeout(Pt)
    }

    function It(n, t, e) {
        var o, i, r = P(n, Tn),
            a = ln().p.filter((function (n) {
                return n.item == r
            }))[0],
            u = a.slides.filter((function (n) {
                return n.item == t
            }))[0],
            l = {
                slides: n,
                destiny: t,
                direction: e,
                destinyPos: {
                    left: t.offsetLeft
                },
                slideIndex: u.index(),
                section: r,
                sectionIndex: a.index(),
                anchorLink: a.anchor,
                slidesNav: h(Fn, r)[0],
                slideAnchor: u.anchor,
                prevSlide: a.activeSlide.item,
                prevSlideIndex: a.activeSlide.index(),
                items: {
                    section: a,
                    origin: a.activeSlide,
                    destination: u
                },
                localIsResizing: an.O
            };
        l.nn = (o = l.prevSlideIndex, i = l.slideIndex, o == i ? "none" : o > i ? "left" : "right"), l.direction = l.direction ? l.direction : l.nn, l.localIsResizing || un({
            P: !1
        }), Qn().onSlideLeave && !l.localIsResizing && "none" !== l.nn && G(Qn().onSlideLeave) && !1 === bt("onSlideLeave", l) ? un({
            A: !1
        }) : (O(t, wn), j(B(t), wn), ee(), l.localIsResizing || (Tt(l.prevSlide), Mt(t)), function (n) {
            !Qn().loopHorizontal && Qn().controlArrows && (Y(h(Wn, n.section), 0 !== n.slideIndex), Y(h(Vn, n.section), null != S(n.destiny)))
        }(l), a.isActive && !l.localIsResizing && Dt(l.slideIndex, l.slideAnchor, l.anchorLink), function (n, t, e) {
            var o, i, r = t.destinyPos;
            if (o = t.slidesNav, i = t.slideIndex, Qn().slidesNavigation && null != o && (j(h(bn, o), wn), O(h("a", h("li", o)[i]), wn)), un({
                    scrollX: Math.round(r.left)
                }), Qn().css3) {
                var a = "translate3d(-" + Math.round(r.left) + "px, 0px, 0px)";
                c.test.tn[t.sectionIndex] = a, b(ct(h(Rn, n)), vt(a)), clearTimeout(Pt), Pt = setTimeout((function () {
                    Wt(t)
                }), Qn().scrollingSpeed)
            } else c.test.left[t.sectionIndex] = Math.round(r.left), gt(n, Math.round(r.left), Qn().scrollingSpeed, (function () {
                Wt(t)
            }))
        }(n, l))
    }

    function Ht() {
        clearTimeout(Pt)
    }

    function Wt(n) {
        n.localIsResizing || (G(Qn().afterSlideLoad) && bt("afterSlideLoad", n), un({
            P: !0
        }), yt(n.destiny)), un({
            A: !1
        })
    }

    function Vt(n, t) {
        pt(0, "internal"), void 0 !== t && un({
            O: !0
        }), It(P(n, En), n), void 0 !== t && un({
            O: !1
        }), pt(Xn().scrollingSpeed, "internal")
    }

    function Ut(n, t) {
        $n("recordHistory", n, t)
    }

    function Kt(n, t) {
        n || ht(0), $n("autoScrolling", n, t);
        var e = ln().g.item;
        if (Qn().autoScrolling && !Qn().scrollBar) b(At, {
            overflow: "hidden",
            height: "100%"
        }), j(xt, "fp-scrollable"), Ut(Xn().recordHistory, "internal"), b(Yn(), {
            "-ms-touch-action": "none",
            "touch-action": "none"
        }), null != e && ht(e.offsetTop);
        else if (b(At, {
                overflow: "visible",
                height: "initial"
            }), O(xt, "fp-scrollable"), Ut(!!Qn().autoScrolling && Xn().recordHistory, "internal"), b(Yn(), {
                "-ms-touch-action": "",
                "touch-action": ""
            }), null != e) {
            b(At, {
                "scroll-behavior": "unset"
            });
            var o = ut(e.offsetTop);
            o.element.scrollTo(0, o.options)
        }
    }
    Ct.m = {
        up: !0,
        down: !0,
        left: !0,
        right: !0
    }, Ct.k = p({}, Ct.m), rn.u("onClickOrTouch", (function (n) {
        var t = n.target;
        (q(t, In) || P(t, In)) && Nt.call(t, n)
    })), c.landscapeScroll = It, rn.u("bindEvents", (function () {
        rn.u("onPerformMovement", Bt)
    })), c.setRecordHistory = Ut, c.setAutoScrolling = Kt, c.test.setAutoScrolling = Kt, c.setFitToSection = qt, c.fitToSection = function () {};
    var Gt, _t = "scrollSnapAlign" in (Gt = r.documentElement.style) || "en" in Gt || "on" in Gt;

    function qt(n, t) {
        Yt(n), $n("fitToSection", n, t)
    }

    function Yt(n) {
        _t && (Qn().fitToSection && (!Qn().autoScrolling || Qn().scrollBar) && n ? O : j)(kt, "fp-snaps")
    }

    function Qt() {
        var n = Qn().responsive || Qn().responsiveWidth,
            t = Qn().responsiveHeight,
            e = n && i.innerWidth < n,
            o = t && i.innerHeight < t;
        n && t ? Xt(e || o) : n ? Xt(e) : t && Xt(o)
    }

    function Xt(n) {
        var t = $t();
        n ? t || (Kt(!1, "internal"), qt(!1, "internal"), x(h(kn)), O(xt, hn), G(Qn().afterResponsive) && Qn().afterResponsive.call(Yn(), n)) : t && (Kt(Xn().autoScrolling, "internal"), qt(Xn().autoScrolling, "internal"), k(h(kn)), j(xt, hn), G(Qn().afterResponsive) && Qn().afterResponsive.call(Yn(), n))
    }

    function $t() {
        return g(xt, hn)
    }
    c.setResponsive = Xt, rn.u("bindEvents", (function () {
        i.addEventListener("load", (function () {
            Qn().scrollOverflow && !Qn().scrollBar && (Zt.rn(), Zt.an())
        })), Qn().scrollOverflow && tt(ln().X).forEach((function (n) {
            Zt.un(n).addEventListener("scroll", Zt.ln), n.addEventListener("wheel", Zt.cn), n.addEventListener("keydown", Zt.cn), n.addEventListener("keydown", Zt.sn)
        }))
    }));
    var Jt, Zt = {
            vn: null,
            dn: null,
            hn: null,
            cn: function (n) {
                if (!an.P) return I(n), !1
            },
            an: function () {
                r.activeElement === this.vn && this.vn.blur(), h(".fp-overflow.active", ln().g.item)[0] && (this.vn = h(zn, ln().g.item)[0], this.vn.focus())
            },
            rn: function () {
                Qn().scrollOverflowMacStyle && !u && O(xt, "fp-scroll-mac"), ln().X.forEach((function (n) {
                    if (!(g(n.item, "fp-noscroll") || g(n.item, "fp-auto-height-responsive") && $t())) {
                        var t = at(n.item),
                            e = Zt.pn(n.item);
                        e ? (O(t, Cn), t.setAttribute("tabindex", "-1")) : (j(t, Cn), t.removeAttribute("tabindex")), n.K = e
                    }
                }))
            },
            un: function (n) {
                var t = at(n);
                return h(zn, t)[0] || t
            },
            K: function (n) {
                return g(n, Cn) || null != h(zn, n)[0]
            },
            gn: function (n) {
                return n.G && n.activeSlide ? n.activeSlide.K : n.K
            },
            pn: function (n) {
                return n.scrollHeight > i.innerHeight
            },
            mn: function (n, t) {
                if (!an.P) return !1;
                var e = Zt.un(t);
                if (!Qn().scrollOverflow || !g(e, Cn)) return !0;
                var o = e.scrollTop,
                    i = "up" === n && o <= 0,
                    r = "down" === n && e.scrollHeight <= Math.ceil(e.offsetHeight + o),
                    a = i || r;
                return a || (this.dn = (new Date).getTime()), a
            },
            wn: function () {
                this.hn = (new Date).getTime();
                var n = this.hn - Zt.dn,
                    t = (a || l) && an.N,
                    e = an.B && n > 600;
                return t && n > 400 || e
            },
            ln: (Jt = 0, function (n) {
                var t = n.target.scrollTop,
                    e = "none" !== an.C ? an.C : Jt < t ? "down" : "up";
                Jt = t, G(Qn().onScrollOverflow) && bt("onScrollOverflow", {
                    position: t,
                    direction: e
                }), g(n.target, Cn) && an.P && Zt.mn(e, n.target) && Zt.wn() && rn.l("onScrollOverflowScrolled", {
                    direction: e
                })
            })
        },
        ne = null,
        te = null;

    function ee() {
        an.g = null, an.p.map((function (n) {
                var t = g(n.item, wn);
                n.isActive = t, n.K = Zt.K(n.item), t && (an.g = n), n.slides.length && (n.activeSlide = null, n.slides.map((function (t) {
                    var e = g(t.item, wn);
                    t.K = Zt.K(n.item), t.isActive = e, e && (n.activeSlide = t)
                })))
            })),
            function () {
                var n = an.g,
                    t = !!an.g && an.g.slides.length,
                    e = an.g ? an.g.activeSlide : null;
                if (!n && an.p.length && !ln().T && ne) {
                    var o = re(ne, an.p);
                    o && (an.g = o, an.g.isActive = !0, O(an.g.item, wn)), an.g && ht(an.g.item.offsetTop)
                }
                if (t && !e && te) {
                    var i = re(te, an.g.slides);
                    i && (an.g.activeSlide = i, an.g.activeSlide.isActive = !0, O(an.g.activeSlide.item, wn)), an.g.activeSlide && Vt(an.g.activeSlide.item, "internal")
                }
            }()
    }

    function oe() {
        var n = h(Qn().sectionSelector, Yn()),
            t = d(n),
            e = Array.from(n).map((function (n) {
                return new ae(n)
            })),
            o = e.filter((function (n) {
                return n.isVisible
            })),
            i = o.reduce((function (n, t) {
                return n.concat(t.slides)
            }), []);
        ne = ie(an.g), te = ie(an.g ? an.g.activeSlide : null), an.v = t.length, an.h = o.reduce((function (n, t) {
            return n + t.slides.length
        }), 0), an.p = o, an.q = e, an.slides = i, an.X = an.p.concat(an.slides)
    }

    function ie(n) {
        if (!n) return null;
        var t = n ? n.item : null,
            e = n.G ? an.q : an.g.bn;
        if (t) {
            var o = et(e, t);
            return o ? o.index() : null
        }
        return null
    }

    function re(n, t) {
        var e, o = n - 1,
            i = n;
        do {
            if (e = t[o] || t[i]) break;
            o -= 1, i += 1
        } while (o >= 0 || i < t.length);
        return e
    }
    var ae = function (n) {
        var t = this;
        [].push.call(arguments, Qn().sectionSelector), nt.apply(this, arguments), this.yn = h(Qn().slideSelector, n), this.bn = Array.from(this.yn).map((function (n) {
            return new ue(n, t)
        })), this.slides = this.bn.filter((function (n) {
            return n.isVisible
        })), this.activeSlide = this.slides.length ? this.slides.filter((function (n) {
            return n.isActive
        }))[0] || this.slides[0] : null
    };
    ae.prototype = nt.prototype, ae.prototype.constructor = ae;
    var ue = function (n, t) {
        this.parent = t, nt.call(this, n, Qn().slideSelector)
    };

    function le() {
        O(h(Qn().sectionSelector, Yn()), Sn), O(h(Qn().slideSelector, Yn()), An)
    }

    function ce() {
        _(y(this), "click")
    }

    function fe() {
        X(h(kn));
        var n = r.createElement("div");
        n.setAttribute("id", "fp-nav");
        var t = r.createElement("ul");
        n.appendChild(t), D(n, xt);
        var e = h(kn)[0];
        O(e, "fp-" + Qn().navigationPosition), Qn().showActiveTooltip && O(e, "fp-show-active");
        for (var o = "", i = 0; i < ln().p.length; i++) {
            var a = ln().p[i],
                u = "";
            Qn().anchors.length && (u = a.anchor), o += '<li><a href="#' + encodeURI(u) + '"><span class="fp-sr-only">' + Lt(a.index(), "Section") + "</span><span></span></a>";
            var l = Qn().navigationTooltips[a.index()];
            void 0 !== l && "" !== l && (o += '<div class="fp-tooltip fp-' + Qn().navigationPosition + '">' + l + "</div>"), o += "</li>"
        }
        h("ul", e)[0].innerHTML = o;
        var c = h("li", h(kn)[0])[ln().g.index()];
        O(h("a", c), wn)
    }

    function se(n) {
        n.preventDefault && I(n), un({
            S: "verticalNav"
        });
        var t = T(P(this, "#fp-nav li"));
        rn.l("scrollPage", {
            destination: ln().p[t]
        })
    }

    function ve(n) {
        Qn().verticalCentered && (Zt.gn(n) || g(n.item, Pn) || O(n.item, Pn))
    }

    function de(n) {
        var t = n.slides.length,
            e = n.yn,
            o = n.slides,
            i = 100 * t,
            a = 100 / t;
        if (!h(En, n.item)[0]) {
            var u = r.createElement("div");
            u.className = Dn, L(e, u);
            var l = r.createElement("div");
            l.className = Ln, L(e, l)
        }
        b(h(Rn, n.item), {
            width: i + "%"
        }), t > 1 && (Qn().controlArrows && function (n) {
            var t = n.item,
                e = [Q(Qn().controlArrowsHTML[0]), Q(Qn().controlArrowsHTML[1])];
            C(h(En, t)[0], e), O(e, Bn), O(e[0], Hn), O(e[1], "fp-next"), "#fff" !== Qn().controlArrowColor && (b(h(Vn, t), {
                "border-color": "transparent transparent transparent " + Qn().controlArrowColor
            }), b(h(Wn, t), {
                "border-color": "transparent " + Qn().controlArrowColor + " transparent transparent"
            })), Qn().loopHorizontal || x(h(Wn, t))
        }(n), Qn().slidesNavigation && function (n) {
            var t = n.item,
                e = n.slides.length;
            D(Q('<div class="fp-slidesNav"><ul></ul></div>'), t);
            var o = h(Fn, t)[0];
            O(o, "fp-" + Qn().slidesNavPosition);
            for (var i = 0; i < e; i++) D(Q('<li><a href="#"><span class="fp-sr-only">' + Lt(i, "Slide", h(On, t)[i]) + "</span><span></span></a></li>"), h("ul", o)[0]);
            b(o, {
                "margin-left": "-" + o.innerWidth / 2 + "px"
            });
            var r = n.activeSlide ? n.activeSlide.index() : 0;
            O(h("a", h("li", o)[r]), wn)
        }(n)), o.forEach((function (n) {
            b(n.item, {
                width: a + "%"
            }), Qn().verticalCentered && ve(n)
        }));
        var c = n.activeSlide || null;
        null != c && an.g && (0 !== an.g.index() || 0 === an.g.index() && 0 !== c.index()) ? Vt(c.item, "internal") : O(e[0], wn)
    }
    ue.prototype = nt.prototype, ue.prototype.constructor = ae;
    var he, pe = null;

    function ge(n) {
        var t = n.item,
            e = n.yn.length,
            o = n.index();
        !ln().g && n.isVisible && (O(t, wn), ee()), pe = ln().g.item, Qn().paddingTop && b(t, {
            "padding-top": Qn().paddingTop
        }), Qn().paddingBottom && b(t, {
            "padding-bottom": Qn().paddingBottom
        }), void 0 !== Qn().sectionsColor[o] && b(t, {
            "background-color": Qn().sectionsColor[o]
        }), void 0 !== Qn().anchors[o] && t.setAttribute("data-anchor", n.anchor), e || ve(n)
    }
    c.getActiveSection = function () {
        return ln().g
    };
    var me = {
        attributes: !1,
        subtree: !0,
        childList: !0,
        characterData: !0
    };

    function we() {
        return d(h(Qn().slideSelector, Yn())).length !== ln().h
    }

    function be(n) {
        var t = we();
        (we() || d(h(Qn().sectionSelector, Yn())).length !== ln().v) && !an.V && (Qn().observer && he && he.disconnect(), oe(), ee(), Qn().anchors = [], X(h(kn)), le(), Jn(), Qn().navigation && fe(), t && (X(h(Fn)), X(h(In))), ln().p.forEach((function (n) {
            n.slides.length ? t && de(n) : ge(n)
        }))), Qn().observer && he && h(dn)[0] && he.observe(h(dn)[0], me)
    }
    rn.u("bindEvents", (function () {
        var n, t, e;
        Qn().observer && "MutationObserver" in window && h(dn)[0] && (n = h(dn)[0], t = me, (e = new MutationObserver(be)).observe(n, t), he = e), rn.u("contentChanged", be)
    })), c.Sn = be;
    var ye = function () {
        var n = !1;
        try {
            var t = Object.defineProperty({}, "passive", {
                get: function () {
                    n = !0
                }
            });
            V("testPassive", null, t), K("testPassive", null, t)
        } catch (n) {}
        return function () {
            return n
        }
    }();

    function Se() {
        return !!ye() && {
            passive: !1
        }
    }(new Date).getTime();
    var Te, Me, xe, ke, Ae, Oe, je, De, Ee = (Me = !0, xe = (new Date).getTime(), ke = !i.astralis_api, function (n, t) {
            var e = (new Date).getTime(),
                o = "wheel" === n ? Qn().scrollingSpeed : 100;
            return Me = ke || e - xe >= o, ke = !i.astralis_api, Me && (Te = t(), xe = e), void 0 === Te || Te
        }),
        Le = (je = (new Date).getTime(), De = [], {
            Tn: function (n) {
                var t = (n = n || i.event).wheelDelta || -n.deltaY || -n.detail,
                    e = Math.max(-1, Math.min(1, t)),
                    o = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX;
                Ae = Math.abs(n.wheelDeltaX) < Math.abs(n.wheelDelta) || Math.abs(n.deltaX) < Math.abs(n.deltaY) || !o;
                var r = (new Date).getTime();
                Oe = e < 0 ? "down" : "up", De.length > 149 && De.shift(), De.push(Math.abs(t));
                var a = r - je;
                je = r, a > 200 && (De = [])
            },
            Mn: function () {
                var n = tn(De, 10) >= tn(De, 70);
                return !!De.length && n && Ae
            },
            xn: function () {
                return Oe
            }
        });

    function Re() {
        var n = Qn().css3 ? N(Qn()) + m() : nn(ln().p).item.offsetTop + nn(ln().p).item.offsetHeight,
            t = ut(n);
        c.test.top = -n + "px", b(r.body, {
            "scroll-snap-type": "none"
        }), b(At, {
            "scroll-behavior": "unset"
        }), un({
            P: !1
        }), gt(t.element, t.options, Qn().scrollingSpeed, (function () {
            setTimeout((function () {
                un({
                    T: !0
                }), un({
                    P: !0
                })
            }), 30)
        }))
    }

    function Pe() {
        Yn().getBoundingClientRect().bottom >= 0 && Ce()
    }

    function Ce() {
        var n = ut(nn(ln().p).item.offsetTop);
        un({
            P: !1
        }), gt(n.element, n.options, Qn().scrollingSpeed, (function () {
            un({
                P: !0
            }), un({
                T: !1
            }), un({
                kn: !1
            })
        }))
    }
    var ze, Fe, Ne, Be, Ie, He = (ze = !1, Fe = {}, Ne = {}, function (n, t, e) {
        switch (n) {
            case "set":
                Fe[t] = (new Date).getTime(), Ne[t] = e;
                break;
            case "isNewKeyframe":
                var o = (new Date).getTime();
                ze = o - Fe[t] > Ne[t]
        }
        return ze
    });

    function We() {
        var n = h(".fp-auto-height")[0] || $t() && h(".fp-auto-height-responsive")[0];
        Qn().lazyLoading && n && h(".fp-section:not(.active)").forEach((function (n) {
            var t, e, o, i, r;
            e = (t = n.getBoundingClientRect()).top, o = t.bottom, i = e + 2 < an.W && e > 0, r = o > 2 && o < an.W, (i || r) && Mt(n)
        }))
    }

    function Ve(n, t) {
        var e;
        e = n, Qn().menu && Qn().menu.length && h(Qn().menu).forEach((function (n) {
                null != n && (j(h(bn, n), wn), O(h('[data-menuanchor="' + e + '"]', n), wn))
            })),
            function (n, t) {
                var e = h(kn)[0];
                Qn().navigation && null != e && "none" !== e.style.display && (j(h(bn, e), wn), O(n ? h('a[href="#' + n + '"]', e) : h("a", h("li", e)[t]), wn))
            }(n, t)
    }

    function Ue(n, t) {
        if (G(Qn().beforeLeave)) return Ee(ln().S, (function () {
            return bt(n, t)
        }))
    }

    function Ke(n, t, e) {
        var o = n.item;
        if (null != o) {
            var i, r, a = function (n) {
                    var t = n.offsetHeight,
                        e = n.offsetTop,
                        o = e,
                        i = e > an.H,
                        r = o - m() + t,
                        a = Qn().bigSectionsDestination;
                    return t > m() ? (i || a) && "bottom" !== a || (o = r) : (i || an.O && null == S(n)) && (o = r), un({
                        H: o
                    }), o
                }(o),
                u = {
                    element: o,
                    callback: t,
                    isMovementUp: e,
                    dtop: a,
                    yMovement: ft(ln().g, o),
                    anchorLink: n.anchor,
                    sectionIndex: n.index(),
                    activeSlide: n.activeSlide ? n.activeSlide.item : null,
                    leavingSection: ln().g.index() + 1,
                    localIsResizing: an.O,
                    items: {
                        origin: ln().g,
                        destination: n
                    },
                    direction: null
                };
            if (!(ln().g.item == o && !an.O || Qn().scrollBar && N(Qn()) === u.dtop && !g(o, xn))) {
                if (null != u.activeSlide && (i = H(u.activeSlide, "data-anchor"), r = T(u.activeSlide, null)), !u.localIsResizing) {
                    var l = u.yMovement;
                    if (void 0 !== e && (l = e ? "up" : "down"), u.direction = l, G(Qn().beforeLeave) && !1 === Ue("beforeLeave", u)) return;
                    if (G(Qn().onLeave) && !bt("onLeave", u)) return
                }
                Qn().autoScrolling && Qn().continuousVertical && void 0 !== u.isMovementUp && (!u.isMovementUp && "up" == u.yMovement || u.isMovementUp && "down" == u.yMovement) && (u = function (n) {
                        un({
                            V: !0
                        });
                        var t = ln().g.item;
                        return n.isMovementUp ? z(t, J(t, Tn)) : C(t, Z(t, Tn).reverse()), ht(ln().g.item.offsetTop),
                            function () {
                                for (var n = h(jn), t = 0; t < n.length; t++) Vt(n[t], "internal")
                            }(), n.An = t, n.dtop = n.element.offsetTop, n.yMovement = ft(ln().g, n.element), n
                    }(u)), u.localIsResizing || Tt(ln().g.item), O(o, wn), j(B(o), wn), ee(), Mt(o), un({
                        P: c.test.On
                    }), Dt(r, i, u.anchorLink),
                    function (n) {
                        var t = Qn().scrollingSpeed < 700,
                            e = t ? 700 : Qn().scrollingSpeed;
                        if (un({
                                C: "none",
                                scrollY: Math.round(n.dtop)
                            }), rn.l("onPerformMovement"), Qn().css3 && Qn().autoScrolling && !Qn().scrollBar) dt("translate3d(0px, -" + Math.round(n.dtop) + "px, 0px)", !0), Qn().scrollingSpeed ? (clearTimeout(Be), Be = setTimeout((function () {
                            Ge(n), un({
                                P: !t || c.test.On
                            })
                        }), Qn().scrollingSpeed)) : Ge(n);
                        else {
                            var o = ut(n.dtop);
                            c.test.top = -n.dtop + "px", b(At, {
                                "scroll-behavior": "unset"
                            }), clearTimeout(Be), gt(o.element, o.options, Qn().scrollingSpeed, (function () {
                                Qn().scrollBar ? Be = setTimeout((function () {
                                    Ge(n)
                                }), 30) : (Ge(n), un({
                                    P: !t || c.test.On
                                }))
                            }))
                        }
                        t && (clearTimeout(Ie), Ie = setTimeout((function () {
                            un({
                                P: !0
                            })
                        }), e))
                    }(u), un({
                        D: u.anchorLink
                    }), Ve(u.anchorLink, u.sectionIndex)
            }
        }
    }

    function Ge(n) {
        Qn().fitToSection && g(h(".fp-section.active")[0], xn) && b(r.body, {
                "scroll-snap-type": "none"
            }), un({
                T: !1
            }),
            function (n) {
                null != n.An && (n.isMovementUp ? z(h(Tn)[0], n.An) : C(h(Tn)[ln().p.length - 1], n.An), ht(ln().g.item.offsetTop), function () {
                    for (var n = h(jn), t = 0; t < n.length; t++) Vt(n[t], "internal")
                }(), un({
                    V: !1
                }))
            }(n), G(Qn().afterLoad) && !n.localIsResizing && bt("afterLoad", n), ee(), n.localIsResizing || yt(n.element), O(n.element, yn), j(B(n.element), yn), We(), Zt.an(), un({
                P: !0
            }), G(n.callback) && n.callback()
    }

    function _e() {
        var n = ln().g.next();
        n || !Qn().loopBottom && !Qn().continuousVertical || (n = ln().p[0]), null != n ? Ke(n, null, !1) : Yn().scrollHeight < xt.scrollHeight && rn.l("scrollBeyondastralis")
    }

    function qe() {
        var n = ln().g.prev();
        n || !Qn().loopTop && !Qn().continuousVertical || (n = nn(ln().p)), null != n && Ke(n, null, !0)
    }
    c.moveTo = moveTo, c.getScrollY = function () {
        return an.scrollY
    }, rn.u("onDestroy", (function () {
        clearTimeout(Be), clearTimeout(Ie)
    })), c.moveSectionDown = _e, c.moveSectionUp = qe;
    var Ye = 0;

    function Qe(n) {
        Qn().autoScrolling && (an.P && (n.pageY < Ye && Ft().m.up ? qe() : n.pageY > Ye && Ft().m.down && _e()), Ye = n.pageY)
    }

    function Xe(n) {
        if (Ft().m[n]) {
            var t = "down" === n ? _e : qe;
            Qn().scrollOverflow && Zt.gn(ln().g) ? Zt.mn(n, ln().g.item) && Zt.wn() && t() : t()
        }
    }
    var $e, Je, Ze, no = 0,
        to = 0,
        eo = 0,
        oo = 0,
        io = (i.PointerEvent && (Ze = {
            down: "pointerdown",
            move: "pointermove"
        }), Ze),
        ro = {
            jn: "ontouchmove" in window ? "touchmove" : io ? io.move : null,
            Dn: "ontouchstart" in window ? "touchstart" : io ? io.down : null
        };

    function ao(n) {
        var t = P(n.target, Tn) || ln().g.item,
            e = Zt.gn(ln().g);
        if (uo(n)) {
            un({
                N: !0,
                B: !1
            }), Qn().autoScrolling && (!e || e && !an.P) && I(n);
            var o = fo(n);
            eo = o.y, oo = o.x;
            var r = Math.abs(no - eo) > i.innerHeight / 100 * Qn().touchSensitivity,
                a = Math.abs(to - oo) > w() / 100 * Qn().touchSensitivity,
                u = h(En, t).length && Math.abs(to - oo) > Math.abs(no - eo),
                l = no > eo ? "down" : "up";
            un({
                C: u ? to > oo ? "right" : "left" : l
            }), u ? !an.A && a && (to > oo ? Ft().m.right && rn.l("moveSlideRight", {
                section: t
            }) : Ft().m.left && rn.l("moveSlideLeft", {
                section: t
            })) : Qn().autoScrolling && an.P && r && Xe(l)
        }
    }

    function uo(n) {
        return void 0 === n.pointerType || "mouse" != n.pointerType
    }

    function lo(n) {
        if (Qn().fitToSection && un({
                R: !1
            }), uo(n)) {
            var t = fo(n);
            no = t.y, to = t.x
        }
        V("touchend", co)
    }

    function co() {
        K("touchend", co), un({
            N: !1
        })
    }

    function fo(n) {
        var t = {};
        return t.y = void 0 !== n.pageY && (n.pageY || n.pageX) ? n.pageY : n.touches[0].pageY, t.x = void 0 !== n.pageX && (n.pageY || n.pageX) ? n.pageX : n.touches[0].pageX, l && uo(n) && Qn().scrollBar && void 0 !== n.touches && (t.y = n.touches[0].pageY, t.x = n.touches[0].pageX), t
    }

    function so(n) {
        Qn().autoScrolling && uo(n) && Ft().m.up && (an.P || I(n))
    }

    function vo(n, t) {
        var e = null == t ? ln().g.item : t,
            o = et(an.p, e),
            i = h(En, e)[0];
        if (!(null == i || an.A || o.slides.length < 2)) {
            var r = o.activeSlide,
                a = "left" === n ? r.prev() : r.next();
            if (!a) {
                if (!Qn().loopHorizontal) return;
                a = "left" === n ? nn(o.slides) : o.slides[0]
            }
            un({
                A: !c.test.On
            }), It(i, a.item, n)
        }
    }

    function ho(n) {
        vo("left", n)
    }

    function po(n) {
        vo("right", n)
    }

    function go(n) {
        var t = ln().p.filter((function (t) {
            return t.anchor === n
        }))[0];
        if (!t) {
            var e = void 0 !== n ? n - 1 : 0;
            t = ln().p[e]
        }
        return t
    }

    function mo(n) {
        null != n && It(P(n, En), n)
    }

    function wo(n, t) {
        var e = go(n);
        if (null != e) {
            var o = function (n, t) {
                var e = t.slides.filter((function (t) {
                    return t.anchor === n
                }))[0];
                return null == e && (n = void 0 !== n ? n : 0, e = t.slides[n]), e ? e.item : null
            }(t, e);
            e.anchor === an.D || g(e.item, wn) ? mo(o) : Ke(e, (function () {
                mo(o)
            }))
        }
    }

    function bo(n, t) {
        var e = go(n);
        void 0 !== t ? wo(n, t) : null != e && Ke(e)
    }

    function yo() {
        clearTimeout(Je), U("keydown", To), U("keyup", Mo)
    }

    function So() {
        var n = r.activeElement;
        return q(n, "textarea") || q(n, "input") || q(n, "select") || "true" == H(n, "contentEditable") || "" == H(n, "contentEditable")
    }

    function To(n) {
        clearTimeout(Je);
        var t = n.keyCode,
            e = [37, 39].indexOf(t) > -1,
            o = Qn().autoScrolling || e;
        9 === t ? function (n) {
            var t = n.shiftKey,
                e = r.activeElement,
                o = ko(at(ln().g.item));

            function i(n) {
                return I(n), o[0] ? o[0].focus() : null
            }(function (n) {
                var t = ko(r),
                    e = t.indexOf(r.activeElement),
                    o = t[n.shiftKey ? e - 1 : e + 1],
                    i = P(o, On),
                    a = P(o, Tn);
                return !i && !a
            })(n) || (e ? null == P(e, ".fp-section.active,.fp-section.active .fp-slide.active") && (e = i(n)) : i(n), (!t && e == o[o.length - 1] || t && e == o[0]) && I(n))
        }(n) : !So() && Qn().keyboardScrolling && o && ($e = n.ctrlKey, Je = setTimeout((function () {
            ! function (n) {
                var t = n.shiftKey,
                    e = r.activeElement,
                    o = q(e, "video") || q(e, "audio"),
                    i = Zt.mn("up", ln().g.item),
                    a = Zt.mn("down", ln().g.item),
                    u = [37, 39].indexOf(n.keyCode) > -1;
                if (Oo(n), an.P || u) switch (un({
                    S: "keydown"
                }), n.keyCode) {
                    case 38:
                    case 33:
                        Ft().k.up && i && (an.T ? rn.l("onKeyDown", {
                            e: n
                        }) : qe());
                        break;
                    case 32:
                        if (t && Ft().k.up && !o && i) {
                            qe();
                            break
                        }
                        case 40:
                        case 34:
                            if (Ft().k.down && a) {
                                if (an.T) return;
                                32 === n.keyCode && o || _e()
                            }
                            break;
                        case 36:
                            Ft().k.up && bo(1);
                            break;
                        case 35:
                            Ft().k.down && bo(ln().p.length);
                            break;
                        case 37:
                            Ft().k.left && ho();
                            break;
                        case 39:
                            Ft().k.right && po()
                }
            }(n)
        }), 0))
    }

    function Mo(n) {
        an.I && ($e = n.ctrlKey)
    }

    function xo() {
        un({
            I: !1
        }), $e = !1
    }

    function ko(n) {
        return [].slice.call(h('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', n)).filter((function (n) {
            return "-1" !== H(n, "tabindex") && null !== n.offsetParent
        }))
    }

    function Ao(n) {
        So() || Oo(n)
    }

    function Oo(n) {
        (function (n) {
            return [40, 38, 32, 33, 34].indexOf(n.keyCode) > -1 && !an.T
        })(n) && !P(n.target, zn) && n.preventDefault()
    }
    c.moveSlideLeft = ho, c.moveSlideRight = po, c.moveTo = bo, rn.u("bindEvents", (function () {
        V("blur", xo), W("keydown", To), xt.addEventListener("keydown", Ao), W("keyup", Mo), rn.u("onDestroy", yo)
    }));
    var jo = (new Date).getTime(),
        Do = [];

    function Eo(n) {
        n ? (function () {
            var n, t = "";
            i.addEventListener ? n = "addEventListener" : (n = "attachEvent", t = "on");
            var e = "onwheel" in r.createElement("div") ? "wheel" : void 0 !== r.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                o = Se();
            "DOMMouseScroll" == e ? r[n](t + "MozMousePixelScroll", Lo, o) : r[n](t + e, Lo, o)
        }(), Yn().addEventListener("mousedown", Ro), Yn().addEventListener("mouseup", Po)) : (r.addEventListener ? (U("mousewheel", Lo, !1), U("wheel", Lo, !1), U("MozMousePixelScroll", Lo, !1)) : r.detachEvent("onmousewheel", Lo), Yn().removeEventListener("mousedown", Ro), Yn().removeEventListener("mouseup", Po))
    }

    function Lo(n) {
        var t = (new Date).getTime(),
            e = g(h(".fp-completely")[0], "fp-normal-scroll"),
            o = function (n, t) {
                (new Date).getTime();
                var e = ln().T && n.getBoundingClientRect().bottom >= 0 && "up" === Le.xn(),
                    o = ln().kn;
                if (o) return I(t), !1;
                if (ln().T) {
                    if (e) {
                        var i;
                        if (!(o || He("isNewKeyframe", "beyondastralis") && Le.Mn())) return (i = ut(nn(ln().p).item.offsetTop + nn(ln().p).item.offsetHeight)).element.scrollTo(0, i.options), un({
                            kn: !1
                        }), I(t), !1;
                        if (Le.Mn()) return e = !1, un({
                            kn: !0
                        }), un({
                            S: "wheel"
                        }), Ce(), I(t), !1
                    } else He("set", "beyondastralis", 1e3);
                    if (!o && !e) return !0
                }
            }(Yn(), n);
        if (an.B || un({
                N: !1,
                B: !0,
                C: "none"
            }), !Ft().m.down && !Ft().m.up) return I(n), !1;
        if (o) return !0;
        if (!1 === o) return I(n), !1;
        if (Qn().autoScrolling && !$e && !e) {
            var r = (n = n || i.event).wheelDelta || -n.deltaY || -n.detail,
                a = Math.max(-1, Math.min(1, r)),
                u = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX,
                l = Math.abs(n.wheelDeltaX) < Math.abs(n.wheelDelta) || Math.abs(n.deltaX) < Math.abs(n.deltaY) || !u,
                c = a < 0 ? "down" : a > 0 ? "up" : "none";
            Do.length > 149 && Do.shift(), Do.push(Math.abs(r)), Qn().scrollBar && I(n);
            var f = t - jo;
            return jo = t, f > 200 && (Do = []), un({
                F: c
            }), an.P && tn(Do, 10) >= tn(Do, 70) && l && (un({
                S: "wheel"
            }), Xe(a < 0 ? "down" : "up")), !1
        }
        Qn().fitToSection && un({
            R: !1
        })
    }

    function Ro(n) {
        var t;
        2 == n.which && (t = n.pageY, Ye = t, Yn().addEventListener("mousemove", Qe))
    }

    function Po(n) {
        2 == n.which && Yn().removeEventListener("mousemove", Qe)
    }

    function Co(n) {
        n ? (Eo(!0), function () {
            if (ro.jn && (a || l)) {
                Qn().autoScrolling && (xt.removeEventListener(ro.jn, so, {
                    passive: !1
                }), xt.addEventListener(ro.jn, so, {
                    passive: !1
                }));
                var n = Qn().touchWrapper;
                n.removeEventListener(ro.Dn, lo), n.removeEventListener(ro.jn, ao, {
                    passive: !1
                }), n.addEventListener(ro.Dn, lo), n.addEventListener(ro.jn, ao, {
                    passive: !1
                })
            }
        }()) : (Eo(!1), function () {
            if (ro.jn && (a || l)) {
                Qn().autoScrolling && (xt.removeEventListener(ro.jn, ao, {
                    passive: !1
                }), xt.removeEventListener(ro.jn, so, {
                    passive: !1
                }));
                var n = Qn().touchWrapper;
                n.removeEventListener(ro.Dn, lo), n.removeEventListener(ro.jn, ao, {
                    passive: !1
                })
            }
        }())
    }
    c.setMouseWheelScrolling = Eo;
    var zo = !0;

    function Fo() {
        ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach((function (n) {
            U(n, Bo, !0)
        }))
    }

    function No(n, t) {
        document["fp_" + n] = t, W(n, Bo, !0)
    }

    function Bo(n) {
        var t = n.type,
            e = !1,
            o = "mouseleave" === t ? n.toElement || n.relatedTarget : n.target;
        o != document && o ? ("touchend" === t && (zo = !1, setTimeout((function () {
            zo = !0
        }), 800)), ("mouseenter" !== t || zo) && (Qn().normalScrollElements.split(",").forEach((function (n) {
            if (!e) {
                var t = q(o, n),
                    i = P(o, n);
                (t || i) && (c.shared.En || Co(!1), c.shared.En = !0, e = !0)
            }
        })), !e && c.shared.En && (Co(!0), c.shared.En = !1))) : Co(!0)
    }

    function Io(n, t) {
        pt(0, "internal"), bo(n, t), pt(Xn().scrollingSpeed, "internal")
    }
    rn.u("bindEvents", (function () {
        Qn().normalScrollElements && (["mouseenter", "touchstart"].forEach((function (n) {
            No(n, !1)
        })), ["mouseleave", "touchend"].forEach((function (n) {
            No(n, !0)
        }))), rn.u("onDestroy", Fo)
    })), c.silentMoveTo = Io;
    var Ho, Wo, Vo = m(),
        Uo = w(),
        Ko = !1;

    function Go() {
        clearTimeout(Ho), clearTimeout(Wo), K("resize", _o)
    }

    function _o() {
        Ko || (Qn().autoScrolling && !Qn().scrollBar || !Qn().fitToSection) && Yo(m()),
            function () {
                if (a)
                    for (var n = 0; n < 4; n++) Wo = setTimeout((function () {
                        window.requestAnimationFrame((function () {
                            Qn().autoScrolling && !Qn().scrollBar && (un({
                                O: !0
                            }), Io(an.g.index() + 1), un({
                                O: !1
                            }))
                        }))
                    }), 200 * n)
            }(), Ko = !0, clearTimeout(Ho), Ho = setTimeout((function () {
                ! function () {
                    if (un({
                            O: !0
                        }), Yo(""), !Qn().fitToSection || Qn().autoScrolling || an.T || function () {
                            if (!Qn().autoScrolling || Qn().scrollBar) {
                                var n = .01 * i.innerHeight;
                                r.documentElement.style.setProperty("--vh", "".concat(n, "px"))
                            }
                        }(), rn.l("contentChanged"), ee(), Qt(), a) {
                        var n = r.activeElement;
                        if (!q(n, "textarea") && !q(n, "input") && !q(n, "select")) {
                            var t = m();
                            Math.abs(t - Vo) > 20 * Math.max(Vo, t) / 100 && (qo(!0), Vo = t)
                        }
                    } else e = m(), o = w(), an.W === e && Uo === o || (un({
                        W: e
                    }), Uo = o, qo(!0));
                    var e, o;
                    un({
                        O: !1
                    })
                }(), Ko = !1
            }), 400)
    }

    function qo(n) {
        if (!g(Yn(), gn)) {
            un({
                O: !0,
                W: m(),
                Ln: w()
            });
            for (var t = ln().p, e = 0; e < t.length; ++e) {
                var o = t[e],
                    r = h(En, o.item)[0];
                o.slides.length > 1 && It(r, o.activeSlide.item)
            }
            Qn().scrollOverflow && Zt.rn();
            var a = ln().g.index();
            an.T || a && Io(a + 1), un({
                O: !1
            }), G(Qn().afterResize) && n && Qn().afterResize.call(Yn(), i.innerWidth, i.innerHeight), G(Qn().afterReBuild) && !n && Qn().afterReBuild.call(Yn()), _(Yn(), "afterRebuild")
        }
    }

    function Yo(n) {
        var t = "" === n ? "" : n + "px";
        ln().p.forEach((function (n) {
            b(n.item, {
                height: t
            })
        }))
    }

    function Qo() {
        var n, t, e = i.location.hash;
        if (e.length) {
            var o = e.replace("#", "").split("/"),
                r = e.indexOf("#/") > -1;
            n = r ? "/" + o[1] : decodeURIComponent(o[0]);
            var a = r ? o[2] : o[1];
            a && a.length && (t = decodeURIComponent(a))
        }
        return {
            section: n,
            Z: t
        }
    }

    function Xo() {
        K("hashchange", $o)
    }

    function $o() {
        if (!an.j && !Qn().lockAnchors) {
            var n = Qo(),
                t = n.section,
                e = n.Z,
                o = void 0 === an.D,
                i = void 0 === an.D && void 0 === e && !an.A;
            t && t.length && (t && t !== an.D && !o || i || !an.A && an.L != e) && rn.l("onScrollPageAndSlide", {
                Rn: t,
                slideAnchor: e
            })
        }
    }

    function Jo(n) {
        var t = n.target;
        P(t, Qn().menu + " [data-menuanchor]") && Zo.call(t, n)
    }

    function Zo(n) {
        un({
            S: "menu"
        }), !h(Qn().menu)[0] || !Qn().lockAnchors && Qn().anchors.length || (I(n), rn.l("onMenuClick", {
            anchor: H(this, "data-menuanchor")
        }))
    }

    function ni(n) {
        var t = n.target;
        t && P(t, "#fp-nav a") ? se.call(t, n.e) : q(t, ".fp-tooltip") ? ce.call(t) : (q(t, Nn) || null != P(t, Nn)) && Rt.call(t, n.e)
    }
    c.reBuild = qo, rn.u("bindEvents", (function () {
        V("resize", _o), rn.u("onDestroy", Go)
    })), c.setLockAnchors = function (n) {
        Qn().lockAnchors = n
    }, rn.u("bindEvents", (function () {
        V("hashchange", $o), rn.u("onDestroy", Xo)
    })), rn.u("bindEvents", (function () {
        W("wheel", Le.Tn, Se()), rn.u("scrollBeyondastralis", Re), rn.u("onKeyDown", Pe)
    })), rn.u("bindEvents", (function () {
        rn.u("onClickOrTouch", Jo)
    })), rn.u("bindEvents", (function () {
        rn.u("onClickOrTouch", ni)
    }));
    var ti, ei, oi = 0;

    function ii(n) {
        var t, e, o, i, a;
        if (!an.O && ln().g && (nn(ln().p), !ln().T && !ln().kn && (!Qn().autoScrolling || Qn().scrollBar))) {
            var u = N(Qn()),
                l = function (n) {
                    var t = n > oi ? "down" : "up";
                    return oi = n, un({
                        H: n
                    }), t
                }(u),
                c = 0,
                f = u + m() / 2,
                s = xt.scrollHeight - m() === u,
                v = ln().p;
            if (un({
                    scrollY: u
                }), s) c = v.length - 1;
            else if (u)
                for (var d = 0; d < v.length; ++d) v[d].item.offsetTop <= f && (c = d);
            else c = 0;
            if (o = l, i = ln().g.item.offsetTop, a = i + m(), ("up" == o ? a >= N(Qn()) + m() : i <= N(Qn())) && (g(ln().g.item, yn) || (O(ln().g.item, yn), j(B(ln().g.item), yn))), e = (t = v[c]).item, !t.isActive) {
                un({
                    j: !0
                });
                var h, p, w = ln().g.item,
                    y = ln().g.index() + 1,
                    S = ft(ln().g, e),
                    T = t.anchor,
                    M = t.index() + 1,
                    x = t.activeSlide,
                    k = {
                        g: w,
                        sectionIndex: M - 1,
                        anchorLink: T,
                        element: e,
                        leavingSection: y,
                        direction: S,
                        items: {
                            origin: ln().g,
                            destination: t
                        }
                    };
                x && (p = x.anchor, h = x.index()), an.P && (O(e, wn), j(B(e), wn), G(Qn().beforeLeave) && Ue("beforeLeave", k), G(Qn().onLeave) && bt("onLeave", k), G(Qn().afterLoad) && bt("afterLoad", k), Tt(w), Mt(e), yt(e), Ve(T, M - 1), Qn().anchors.length && un({
                    D: T
                }), Dt(h, p, T), ee()), clearTimeout(ti), ti = setTimeout((function () {
                    un({
                        j: !1
                    })
                }), 100)
            }
            Qn().fitToSection && an.P && (clearTimeout(ei), ei = setTimeout((function () {
                an.p.filter((function (n) {
                    var t = n.item.getBoundingClientRect();
                    return Math.round(t.bottom) === Math.round(m()) || 0 === Math.round(t.top)
                })).length || b(r.body, {
                    "scroll-snap-type": "y mandatory"
                })
            }), 300))
        }
    }

    function ri(n, t) {
        void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach((function (t) {
            zt(n, t, "k")
        })) : (zt(n, "all", "k"), Qn().keyboardScrolling = n)
    }

    function ai(n) {
        var t = n.index();
        void 0 !== Qn().anchors[t] && n.isActive && Ve(Qn().anchors[t], t), Qn().menu && Qn().css3 && null != P(h(Qn().menu)[0], dn) && h(Qn().menu).forEach((function (n) {
            xt.appendChild(n)
        }))
    }

    function ui() {
        b(function (n, t) {
            var e = [n];
            do {
                n = n.parentNode, e.push(n)
            } while (!q(n, "body"));
            return e
        }(Yn()), {
            height: "100%",
            position: "relative"
        }), O(Yn(), vn), O(kt, mn), un({
            W: m()
        }), j(Yn(), gn), le();
        for (var n = ln().q, t = 0; t < n.length; t++) {
            var e = n[t],
                o = e.yn;
            e.item.setAttribute("data-fp-styles", H(e.item, "style")), ge(e), ai(e), o.length > 0 && de(e)
        }
        Qn().fixedElements && Qn().css3 && h(Qn().fixedElements).forEach((function (n) {
            xt.appendChild(n)
        })), Qn().navigation && fe(), h('iframe[src*="youtube.com/embed/"]', Yn()).forEach((function (n) {
            var t, e;
            e = H(t = n, "src"), t.setAttribute("src", e + (/\?/.test(e) ? "&" : "?") + "enablejsapi=1")
        }))
    }

    function li() {
        var n, t, e = ln().g,
            o = ln().g.item;
        O(o, yn), Mt(o), We(), yt(o), t = go((n = Qo()).section), n.section && t && (void 0 === t || t.index() !== T(pe)) || !G(Qn().afterLoad) || bt("afterLoad", {
            g: o,
            element: o,
            direction: null,
            anchorLink: e.anchor,
            sectionIndex: e.index(),
            items: {
                origin: ln().g,
                destination: ln().g
            }
        }), G(Qn().afterRender) && bt("afterRender")
    }

    function ci(n, t) {
        void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach((function (t) {
            zt(n, t, "m")
        })) : zt(n, "all", "m")
    }

    function fi() {
        var n = Qo(),
            t = n.section,
            e = n.Z;
        t && (Qn().animateAnchor ? wo(t, e) : Io(t, e))
    }

    function si() {
        var n = Qn().licenseKey;
        "" === Qn().licenseKey.trim() ? (s("error", "astralis.js requires a `licenseKey` option. Read about it on the following URL:"), s("error", "https://github.com/alvarotrigo/astralis.js#options")) : Qn() && an.Pn || r.domain.indexOf("alvarotrigo.com") > -1 ? n && n.length : (s("error", "Incorrect `licenseKey`. Get one for astralis.js version 4 here:"), s("error", "https://alvarotrigo.com/astralis/pricing")), g(kt, mn) ? s("error", "astralis.js can only be initialized once and you are doing it multiple times!") : (Qn().continuousVertical && (Qn().loopTop || Qn().loopBottom) && (Qn().continuousVertical = !1, s("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !Qn().scrollOverflow || !Qn().scrollBar && Qn().autoScrolling || s("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !Qn().continuousVertical || !Qn().scrollBar && Qn().autoScrolling || (Qn().continuousVertical = !1, s("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), f.forEach((function (n) {
            Qn()[n] && s("warn", "astralis.js extensions require astralis.extensions.min.js file instead of the usual astralis.js. Requested: " + n)
        })), Qn().anchors.forEach((function (n) {
            var t = [].slice.call(h("[name]")).filter((function (t) {
                    return H(t, "name") && H(t, "name").toLowerCase() == n.toLowerCase()
                })),
                e = [].slice.call(h("[id]")).filter((function (t) {
                    return H(t, "id") && H(t, "id").toLowerCase() == n.toLowerCase()
                }));
            if (e.length || t.length) {
                s("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                var o = e.length ? "id" : "name";
                (e.length || t.length) && s("error", '"' + n + '" is is being used by another element `' + o + "` property")
            }
        })))
    }

    function vi(n, t) {
        var e;
        if (xt = h("body")[0], kt = h("html")[0], At = h("html, body"), !g(kt, mn)) return "touchWrapper", e = "string" == typeof n ? h(n)[0] : n, Un.touchWrapper = e,
            function (n) {
                qn = p({}, Un, n), _n = Object.assign({}, qn)
            }(t),
            function (n) {
                Kn = n
            }("string" == typeof n ? h(n)[0] : n), rn.l("onInitialise"), si(), c.getastralisData = function () {
                return {
                    options: Qn()
                }
            }, c.version = "4.0.10", c.test = Object.assign(c.test, {
                top: "0px",
                J: "translate3d(0px, 0px, 0px)",
                tn: function () {
                    for (var n = [], t = 0; t < h(Qn().sectionSelector, Yn()).length; t++) n.push("translate3d(0px, 0px, 0px)");
                    return n
                }(),
                left: function () {
                    for (var n = [], t = 0; t < h(Qn().sectionSelector, Yn()).length; t++) n.push(0);
                    return n
                }(),
                options: Qn(),
                setAutoScrolling: null
            }), c.shared = Object.assign(c.shared, {
                Cn: null,
                En: !1
            }), i.astralis_api = c, Yn() && (rn.l("beforeInit"), oe(), ee(), Qn().scrollBar = Qn().scrollBar || Qn().hybrid, Jn(), ui(), Yt(!0), ci(!0), Co(!0), Kt(Qn().autoScrolling, "internal"), Qt(), Ot(), "complete" === r.readyState && fi(), V("load", fi), li(), oe(), ee(), rn.l("bindEvents")), i.astralis_api;
        si()
    }
    return rn.u("onDestroy", (function () {
            clearTimeout(ti), clearTimeout(ei)
        })), rn.u("bindEvents", (function () {
            V("scroll", ii), r.body.addEventListener("scroll", ii), rn.u("onScrollPageAndSlide", (function (n) {
                wo(n.Rn, n.slideAnchor)
            })), rn.u("onMenuClick", (function (n) {
                bo(n.anchor, void 0)
            })), rn.u("onScrollOverflowScrolled", (function (n) {
                ("down" === n.direction ? _e : qe)()
            })), rn.u("scrollPage", (function (n) {
                Ke(n.destination)
            }))
        })), rn.u("onDestroy", (function () {
            K("scroll", ii)
        })), c.getActiveSlide = function () {
            return wt(ln().g.activeSlide)
        }, c.getScrollX = function () {
            return an.scrollX
        }, rn.u("bindEvents", (function () {
            rn.u("onDestroy", Ht), rn.u("landscapeScroll", (function (n) {
                It(n.slides, n.destination)
            })), rn.u("moveSlideRight", (function (n) {
                po(n.section)
            })), rn.u("moveSlideLeft", (function (n) {
                ho(n.section)
            }))
        })),
        function () {
            rn.u("onInitialise", (function () {
                var t, u;
                un({
                    Pn: (Qn().licenseKey, t = Qn().licenseKey, u = function (t) {
                        var e = parseInt("514").toString(16);
                        if (!t || t.length < 29 || 4 === t.split(n[0]).length) return null;
                        var o = ["Each", "for"][i()]().join(""),
                            u = t[["split"]]("-"),
                            l = [];
                        u[o]((function (n, t) {
                            if (t < 4) {
                                var o = function (n) {
                                    var t = n[n.length - 1],
                                        e = ["NaN", "is"][i()]().join("");
                                    return window[e](t) ? r(t) : function (n) {
                                        return n - wn.length
                                    }(t)
                                }(n);
                                l.push(o);
                                var a = r(n[o]);
                                if (1 === t) {
                                    var u = ["pa", "dS", "t", "art"].join("");
                                    a = a.toString()[u](2, "0")
                                }
                                e += a, 0 !== t && 1 !== t || (e += "-")
                            }
                        }));
                        var c = 0,
                            f = "";
                        return t.split("-").forEach((function (n, t) {
                            if (t < 4) {
                                for (var e = 0, o = 0; o < 4; o++) o !== l[t] && (e += Math.abs(r(n[o])), isNaN(n[o]) || c++);
                                var i = a(e);
                                f += i
                            }
                        })), f += a(c), {
                            zn: new Date(e + "T00:00"),
                            Fn: e.split("-")[2] === 8 * (wn.length - 2) + "",
                            Nn: f
                        }
                    }(t), u && (Qn().credits && u && e <= u.zn && u.Nn === t.split(n[0])[4] || function (n) {
                        var t = o[i()]().join("");
                        return n && 0 === t.indexOf(n) && n.length === t.length
                    }(t) || u.Fn) || !1)
                })
            }));
            var n = ["-"],
                t = "2022-7-7".split("-"),
                e = new Date(t[0], t[1], t[2]),
                o = ["se", "licen", "-", "v3", "l", "gp"];

            function i() {
                return [
                    ["re", "verse"].join("")
                ]["".length]
            }

            function r(n) {
                return n ? isNaN(n) ? n.charCodeAt(0) - 72 : n : ""
            }

            function a(n) {
                var t = 72 + n;
                return t > 90 && t < 97 && (t += 15), String.fromCharCode(t).toUpperCase()
            }
        }(), c.setKeyboardScrolling = ri, c.shared.Cn = li, c.setAllowScrolling = ci, c.destroy = function (n) {
            Kt(!1, "internal"), ci(!0), Co(!1), ri(!1), O(Yn(), gn), rn.l("onDestroy"), n && (ht(0), h("img[data-src], source[data-src], audio[data-src], iframe[data-src]", Yn()).forEach((function (n) {
                en(n, "src")
            })), h("img[data-srcset]").forEach((function (n) {
                en(n, "srcset")
            })), X(h("#fp-nav, .fp-slidesNav, .fp-controlArrow")), b(tt(ln().p), {
                height: "",
                "background-color": "",
                padding: ""
            }), b(tt(ln().slides), {
                width: ""
            }), b(Yn(), {
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }), b(At, {
                overflow: "",
                height: ""
            }), j(kt, mn), j(xt, hn), xt.className.split(/\s+/).forEach((function (n) {
                0 === n.indexOf("fp-viewing") && j(xt, n)
            })), tt(ln().X).forEach((function (n) {
                Qn().scrollOverflow && j(n, Cn), j(n, "fp-table active " + yn), H(n, "data-fp-styles") && n.setAttribute("style", H(n, "data-fp-styles")), g(n, Sn) && !Gn && n.removeAttribute("data-anchor")
            })), st(Yn()), [Mn, Rn, En].forEach((function (n) {
                h(n, Yn()).forEach((function (n) {
                    R(n)
                }))
            })), b(Yn(), {
                "-webkit-transition": "none",
                transition: "none"
            }), i.scrollTo(0, 0), [Sn, An, Ln].forEach((function (n) {
                j(h("." + n), n)
            })))
        }, i.fp_easings = p(i.fp_easings, {
            easeInOutCubic: function (n, t, e, o) {
                return (n /= o / 2) < 1 ? e / 2 * n * n * n + t : e / 2 * ((n -= 2) * n * n + 2) + t
            }
        }), i.jQuery && function (n, t) {
            n && t ? n.fn.astralis = function (e) {
                e = n.extend({}, e, {
                    $: n
                }), new t(this[0], e), Object.keys(c).forEach((function (n) {
                    Qn().$.fn.astralis[n] = c[n]
                }))
            } : s("error", "jQuery is required to use the jQuery astralis adapter!")
        }(i.jQuery, vi), vi
}));