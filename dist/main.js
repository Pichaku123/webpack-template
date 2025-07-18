(() => {
    const e = {
        56: (e, t, r) => {
            e.exports = function (e) {
                const t = r.nc;
                t && e.setAttribute("nonce", t);
            };
        },
        72: (e) => {
            const t = [];
            function r(e) {
                for (var r = -1, n = 0; n < t.length; n++)
                    if (t[n].identifier === e) {
                        r = n;
                        break;
                    }
                return r;
            }
            function n(e, n) {
                for (var a = {}, c = [], i = 0; i < e.length; i++) {
                    const s = e[i];
                    const u = n.base ? s[0] + n.base : s[0];
                    const p = a[u] || 0;
                    const l = "".concat(u, " ").concat(p);
                    a[u] = p + 1;
                    const d = r(l);
                    const f = {
                        css: s[1],
                        media: s[2],
                        sourceMap: s[3],
                        supports: s[4],
                        layer: s[5],
                    };
                    if (d !== -1) (t[d].references++, t[d].updater(f));
                    else {
                        const v = o(f, n);
                        ((n.byIndex = i),
                            t.splice(i, 0, { identifier: l, updater: v, references: 1 }));
                    }
                    c.push(l);
                }
                return c;
            }
            function o(e, t) {
                const r = t.domAPI(t);
                return (
                    r.update(e),
                    function (t) {
                        if (t) {
                            if (
                                t.css === e.css &&
                                t.media === e.media &&
                                t.sourceMap === e.sourceMap &&
                                t.supports === e.supports &&
                                t.layer === e.layer
                            )
                                return;
                            r.update((e = t));
                        } else r.remove();
                    }
                );
            }
            e.exports = function (e, o) {
                let a = n((e = e || []), (o = o || {}));
                return function (e) {
                    e = e || [];
                    for (let c = 0; c < a.length; c++) {
                        const i = r(a[c]);
                        t[i].references--;
                    }
                    for (var s = n(e, o), u = 0; u < a.length; u++) {
                        const p = r(a[u]);
                        t[p].references === 0 && (t[p].updater(), t.splice(p, 1));
                    }
                    a = s;
                };
            };
        },
        113: (e) => {
            e.exports = function (e, t) {
                if (t.styleSheet) t.styleSheet.cssText = e;
                else {
                    for (; t.firstChild; ) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(e));
                }
            };
        },
        314: (e) => {
            e.exports = function (e) {
                const t = [];
                return (
                    (t.toString = function () {
                        return this.map(function (t) {
                            let r = "";
                            const n = void 0 !== t[5];
                            return (
                                t[4] && (r += "@supports (".concat(t[4], ") {")),
                                t[2] && (r += "@media ".concat(t[2], " {")),
                                n &&
                                    (r += "@layer".concat(
                                        t[5].length > 0 ? " ".concat(t[5]) : "",
                                        " {"
                                    )),
                                (r += e(t)),
                                n && (r += "}"),
                                t[2] && (r += "}"),
                                t[4] && (r += "}"),
                                r
                            );
                        }).join("");
                    }),
                    (t.i = function (e, r, n, o, a) {
                        typeof e === "string" && (e = [[null, e, void 0]]);
                        const c = {};
                        if (n)
                            for (let i = 0; i < this.length; i++) {
                                const s = this[i][0];
                                s != null && (c[s] = !0);
                            }
                        for (let u = 0; u < e.length; u++) {
                            const p = [].concat(e[u]);
                            (n && c[p[0]]) ||
                                (void 0 !== a &&
                                    (void 0 === p[5] ||
                                        (p[1] = "@layer"
                                            .concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {")
                                            .concat(p[1], "}")),
                                    (p[5] = a)),
                                r &&
                                    (p[2]
                                        ? ((p[1] = "@media ".concat(p[2], " {").concat(p[1], "}")),
                                          (p[2] = r))
                                        : (p[2] = r)),
                                o &&
                                    (p[4]
                                        ? ((p[1] = "@supports ("
                                              .concat(p[4], ") {")
                                              .concat(p[1], "}")),
                                          (p[4] = o))
                                        : (p[4] = "".concat(o))),
                                t.push(p));
                        }
                    }),
                    t
                );
            };
        },
        365: (e, t, r) => {
            r.d(t, { A: () => i });
            const n = r(601);
            const o = r.n(n);
            const a = r(314);
            const c = r.n(a)()(o());
            c.push([e.id, "body{\n    background-color: azure;\n}", ""]);
            const i = c;
        },
        540: (e) => {
            e.exports = function (e) {
                const t = document.createElement("style");
                return (e.setAttributes(t, e.attributes), e.insert(t, e.options), t);
            };
        },
        601: (e) => {
            e.exports = function (e) {
                return e[1];
            };
        },
        659: (e) => {
            const t = {};
            e.exports = function (e, r) {
                const n = (function (e) {
                    if (void 0 === t[e]) {
                        let r = document.querySelector(e);
                        if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                            try {
                                r = r.contentDocument.head;
                            } catch (e) {
                                r = null;
                            }
                        t[e] = r;
                    }
                    return t[e];
                })(e);
                if (!n)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                n.appendChild(r);
            };
        },
        825: (e) => {
            e.exports = function (e) {
                if (typeof document === "undefined")
                    return { update: function () {}, remove: function () {} };
                const t = e.insertStyleElement(e);
                return {
                    update: function (r) {
                        !(function (e, t, r) {
                            let n = "";
                            (r.supports && (n += "@supports (".concat(r.supports, ") {")),
                                r.media && (n += "@media ".concat(r.media, " {")));
                            const o = void 0 !== r.layer;
                            (o &&
                                (n += "@layer".concat(
                                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                                    " {"
                                )),
                                (n += r.css),
                                o && (n += "}"),
                                r.media && (n += "}"),
                                r.supports && (n += "}"));
                            const a = r.sourceMap;
                            (a &&
                                typeof btoa !== "undefined" &&
                                (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                                    btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                                    " */"
                                )),
                                t.styleTagTransform(n, e, t.options));
                        })(t, e, r);
                    },
                    remove: function () {
                        !(function (e) {
                            if (e.parentNode === null) return !1;
                            e.parentNode.removeChild(e);
                        })(t);
                    },
                };
            };
        },
    };
    const t = {};
    function r(n) {
        const o = t[n];
        if (void 0 !== o) return o.exports;
        const a = (t[n] = { id: n, exports: {} });
        return (e[n](a, a.exports, r), a.exports);
    }
    ((r.n = (e) => {
        const t = e && e.__esModule ? () => e.default : () => e;
        return (r.d(t, { a: t }), t);
    }),
        (r.d = (e, t) => {
            for (const n in t)
                r.o(t, n) &&
                    !r.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (r.g = (function () {
            if (typeof globalThis === "object") return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if (typeof window === "object") return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (() => {
            let e;
            r.g.importScripts && (e = `${r.g.location}`);
            const t = r.g.document;
            if (
                !e &&
                t &&
                (t.currentScript &&
                    t.currentScript.tagName.toUpperCase() === "SCRIPT" &&
                    (e = t.currentScript.src),
                !e)
            ) {
                const n = t.getElementsByTagName("script");
                if (n.length)
                    for (let o = n.length - 1; o > -1 && (!e || !/^http(s?):/.test(e)); )
                        e = n[o--].src;
            }
            if (!e) throw new Error("Automatic publicPath is not supported in this browser");
            ((e = e
                .replace(/^blob:/, "")
                .replace(/#.*$/, "")
                .replace(/\?.*$/, "")
                .replace(/\/[^\/]+$/, "/")),
                (r.p = e));
        })(),
        (r.nc = void 0));
    const n = `${r.p}images/cat.jpeg`;
    const o = r(72);
    const a = r.n(o);
    const c = r(825);
    const i = r.n(c);
    const s = r(659);
    const u = r.n(s);
    const p = r(56);
    const l = r.n(p);
    const d = r(540);
    const f = r.n(d);
    const v = r(113);
    const m = r.n(v);
    const h = r(365);
    const y = {};
    ((y.styleTagTransform = m()),
        (y.setAttributes = l()),
        (y.insert = u().bind(null, "head")),
        (y.domAPI = i()),
        (y.insertStyleElement = f()),
        a()(h.A, y),
        h.A && h.A.locals && h.A.locals);
    const g = document.createElement("img");
    ((g.src = n), document.body.appendChild(g), console.log("hello"));
})();
