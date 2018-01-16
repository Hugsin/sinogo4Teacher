/**
 * ichartjs Library v1.2 http://www.ichartjs.com/
 *
 * @author wanghe
 * @Copyright 2013 wanghetommy@gmail.com Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
;
! function(a) {
    var b = navigator.userAgent.toLowerCase(),
        c = function(a) {
            return a.test(b)
        },
        d = Object.prototype.toString,
        e = c(/opera/),
        f = c(/\bchrome\b/),
        g = c(/webkit/),
        h = !f && c(/safari/),
        i = !e && c(/msie/),
        j = !!document.createElement("canvas").getContext,
        k = !g && c(/gecko/),
        l = c(/ipod|ipad|iphone|android/gi),
        m = {
            Linear: function(a, b, c, d) {
                return c * a / d + b
            },
            Cubic: {
                easeIn: function(a, b, c, d) {
                    return c * (a /= d) * a * a + b
                },
                easeOut: function(a, b, c, d) {
                    return c * ((a = a / d - 1) * a * a + 1) + b
                },
                easeInOut: function(a, b, c, d) {
                    return (a /= d / 2) < 1 ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b
                }
            }
        },
        n = function(a) {
            var b = !1,
                c = !1,
                o = [],
                p = function() {
                    return document.addEventListener ? function() {
                        document.removeEventListener("DOMContentLoaded", p, !1), r()
                    } : document.attachEvent ? function() {
                        "complete" === document.readyState && (document.detachEvent("onreadystatechange", p), r())
                    } : void 0
                }(),
                q = function() {
                    if (!b) {
                        try {
                            document.documentElement.doScroll("left")
                        } catch (a) {
                            return setTimeout(q, 1), void 0
                        }
                        r()
                    }
                },
                r = function() {
                    if (!b) {
                        b = !0;
                        for (var a = 0; a < o.length; a++) o[a].call(document);
                        o = []
                    }
                },
                s = function() {
                    if (!c) {
                        if (c = !0, "complete" === document.readyState) return setTimeout(r, 1);
                        if (document.addEventListener) document.addEventListener("DOMContentLoaded", p, !1), a.addEventListener("load", r, !1);
                        else if (document.attachEvent) {
                            document.attachEvent("onreadystatechange", p), a.attachEvent("onload", r);
                            var b = !1;
                            try {
                                b = null == a.frameElement
                            } catch (d) {}
                            document.documentElement.doScroll && b && q()
                        }
                    }
                },
                t = function(a) {
                    s(), b ? a.call(document, u) : o.push(function() {
                        return a.call(this)
                    })
                },
                u = function(a) {
                    return !a || a.nodeType ? a : "string" == typeof a ? (-1 != a.indexOf("#") && (a = a.substring(1)), document.getElementById(a)) : ("function" == typeof a && t(a), void 0)
                };
            u.apply = function(a, b) {
                if (a && b && "object" == typeof b)
                    for (var c in b) "undefined" != typeof b[c] && (a[c] = b[c]);
                if (!b && a) {
                    var d = {};
                    for (var c in a) d[c] = a[c];
                    return d
                }
                return a
            }, u.apply(u, {
                version: "1.0",
                email: "taylor@ichartjs.com",
                isEmpty: function(a, b) {
                    return null === a || void 0 === a || u.isArray(a) && !a.length || (b ? !1 : "" === a)
                },
                isArray: function(a) {
                    return "[object Array]" === d.apply(a)
                },
                isDate: function(a) {
                    return "[object Date]" === d.apply(a)
                },
                isObject: function(a) {
                    return !!a && "[object Object]" === d.apply(a)
                },
                isFunction: function(a) {
                    return "[object Function]" === d.apply(a)
                },
                isNumber: function(a) {
                    return "number" == typeof a && isFinite(a)
                },
                isString: function(a) {
                    return "string" == typeof a
                },
                isBoolean: function(a) {
                    return "boolean" == typeof a
                },
                isFalse: function(a) {
                    return "boolean" == typeof a && !a
                },
                isElement: function(a) {
                    return a ? !!a.tagName : !1
                },
                isDefined: function(a) {
                    return "undefined" != typeof a
                }
            }), u.applyIf = function(a, b) {
                if (a && u.isObject(b))
                    for (var c in b) u.isDefined(b[c]) && !u.isDefined(a[c]) && (a[c] = b[c]);
                return !b && a ? u.apply(a) : a
            }, u.merge = function(a, b, c) {
                if (a && u.isObject(b)) {
                    for (var d in b) u.isDefined(b[d]) && (u.isObject(b[d]) ? u.isObject(a[d]) ? u.merge(a[d], b[d]) : a[d] = u.clone(b[d], !0) : a[d] = b[d]);
                    if (u.isObject(c)) return u.merge(a, c)
                }
                return a
            }, u.clone = function(a, b, c) {
                var d = {};
                if (u.isArray(a) && u.isObject(b))
                    for (var e = 0; e < a.length; e++) d[a[e]] = c && u.isObject(b[a[e]]) ? u.clone(b[a[e]], c) : b[a[e]];
                else if (u.isObject(a))
                    for (var f in a) d[f] = b && u.isObject(a[f]) && !a[f].ICHARTJS_OBJECT ? u.clone(a[f], b) : a[f];
                return d
            }, u.override = function(a, b) {
                if (a && b) {
                    var c = a.prototype;
                    u.apply(c, b), u.isIE && b.hasOwnProperty("toString") && (c.toString = b.toString)
                }
            }, u.extend = function() {
                var a = function(a) {
                        for (var b in a) this[b] = a[b]
                    },
                    b = Object.prototype.constructor;
                return function(c, d) {
                    var e, f = function() {
                            c.apply(this, arguments)
                        },
                        g = function() {},
                        h = c.prototype;
                    return g.prototype = h, e = f.prototype = new g, e.constructor = f, f.superclass = h, h.constructor == b && (h.constructor = c), f.override = function(a) {
                        u.override(f, a)
                    }, e.superclass = e.supr = function() {
                        return h
                    }, e.override = a, u.override(f, d), f.extend = function(a) {
                        return u.extend(f, a)
                    }, f.plugin_ = {}, f.plugin = function(a, b) {
                        u.isString(a) && u.isFunction(b) && (f.plugin_[a] = b)
                    }, f
                }
            }();
            var v = Math.sin,
                w = Math.cos,
                x = Math.atan,
                y = (Math.tan, Math.acos, Math.sqrt),
                z = Math.abs,
                A = Math.PI,
                B = 2 * A,
                C = Math.ceil,
                D = Math.round,
                E = Math.floor,
                F = Math.max,
                G = Math.min,
                H = parseFloat,
                I = {},
                J = {},
                K = function(a, b) {
                    if (0 == a) return a;
                    var c = z(a),
                        d = .1;
                    if (c > 1) {
                        for (; c > 1;) c /= 10, d = 10 * d;
                        return E(a / d + b) * d
                    }
                    for (d = 1; 1 > c;) c = 10 * c, d = 10 * d;
                    return D(a * d + b) / d
                },
                L = {
                    white: "rgb(255,255,255)",
                    green: "rgb(0,128,0)",
                    gray: "rgb(80,80,80)",
                    red: "rgb(255,0,0)",
                    blue: "rgb(0,0,255)",
                    yellow: "rgb(255,255,0)",
                    black: "rgb(0,0,0)"
                },
                M = function(a) {
                    return a = a.replace(/#/g, "").replace(/^(\w)(\w)(\w)$/, "$1$1$2$2$3$3"), (7 == a.length ? "rgba(" : "rgb(") + parseInt(a.substring(0, 2), 16) + "," + parseInt(a.substring(2, 4), 16) + "," + parseInt(a.substring(4, 6), 16) + (7 == a.length ? ",0." + a.substring(6, 7) + ")" : ")")
                },
                N = function(a) {
                    var b = /rgb\((\w*),(\w*),(\w*)\)/.exec(a);
                    if (b) return new Array(b[1], b[2], b[3]);
                    if (b = /rgba\((\w*),(\w*),(\w*),(.*)\)/.exec(a)) return new Array(b[1], b[2], b[3], b[4]);
                    throw new Error("invalid colors value '" + a + "'")
                },
                O = function(a, b, c) {
                    u.isArray(a) && (b = a[1], c = a[2], a = a[0]), a /= 255, b /= 255, c /= 255;
                    var d = F(F(a, b), c),
                        e = G(G(a, b), c),
                        f = d - e;
                    if (0 == f) return new Array(0, 0, d);
                    var g;
                    return a == d ? g = (b - c) / f : b == d ? g = (c - a) / f + 2 : c == d && (g = (a - b) / f + 4), g *= 60, 0 > g && (g += 360), new Array(g, f / d, d)
                },
                P = function(a) {
                    if (!a) return a;
                    if (a = a.replace(/\s/g, "").toLowerCase(), /^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.exec(a)) return a;
                    if (/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0(\.\d*)?|1(\.0)?)\)$/.exec(a)) return a;
                    if (/^#(([a-fA-F0-9]{6,7})|([a-fA-F0-9]{3}))$/.exec(a)) return M(a);
                    if (L[a]) return L[a];
                    throw new Error("invalid colors value '" + a + "'")
                },
                Q = function(a, b, c, d) {
                    u.isArray(a) && (d = b, b = a[1], c = a[2], a = a[0]);
                    var e, f, g, h = E(a / 60) % 6,
                        i = a / 60 - h,
                        j = c * (1 - b),
                        k = c * (1 - b * i),
                        l = c * (1 - b * (1 - i));
                    switch (h) {
                        case 0:
                            e = c, f = l, g = j;
                            break;
                        case 1:
                            e = k, f = c, g = j;
                            break;
                        case 2:
                            e = j, f = c, g = l;
                            break;
                        case 3:
                            e = j, f = k, g = c;
                            break;
                        case 4:
                            e = l, f = j, g = c;
                            break;
                        case 5:
                            e = c, f = j, g = k
                    }
                    return "rgb" + (d ? "a" : "") + "(" + D(255 * e) + "," + D(255 * f) + "," + D(255 * g) + (d ? "," + d + ")" : ")")
                },
                R = .05,
                S = .14,
                T = function(a, b) {
                    return b = b || S, a > .5 ? b - (1 - a) / 10 : a > .1 ? b - .16 + a / 5 : a > b ? b : a / 2
                },
                U = function(a, b, c, d) {
                    if (!b) return b;
                    b = N(P(b));
                    var e = O(b);
                    return d = 0 != d ? d || R : d, e[1] -= d, a ? (e[2] -= T(e[2], c), e[1] = u.upTo(e[1], 1), e[2] = u.lowTo(e[2], 0)) : (e[2] += T(1 - e[2], c), e[1] = u.lowTo(e[1], 0), e[2] = u.upTo(e[2], 1)), Q(e, b[3])
                };
            return u.apply(u, {
                getFont: function(a, b, c, d) {
                    return a + " " + b + (d || "px") + " " + c
                },
                getDoc: function() {
                    var b = a.contentWindow ? a.contentWindow.document : a.contentDocument ? a.contentDocument : a.document;
                    return b
                },
                DefineAbstract: function(a, b) {
                    if (!b[a]) throw new Error("Cannot instantiate the type '" + b.type + "'.you must implements it with method '" + a + "'.")
                },
                getAA: function(a) {
                    return "linear" == a ? m.Linear : "easeInOut" == a || "easeIn" == a || "easeOut" == a ? m.Cubic[a] : m.Linear
                },
                noConflict: function() {
                    return n
                },
                plugin: function(a, b, c) {
                    u.isFunction(a) && a.plugin(b, c)
                },
                parsePadding: function(a, b) {
                    return a = a || 0, u.isNumber(a) ? new Array(a, a, a, a) : u.isArray(a) ? a : (b = b || 0, a = a.replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, /\s/).replace(/\s/g, ",").split(","), 1 == a.length ? a[0] = a[1] = a[2] = a[3] = H(a[0]) || b : 2 == a.length ? (a[0] = a[2] = H(a[0]) || b, a[1] = a[3] = H(a[1]) || b) : 3 == a.length ? (a[0] = H(a[0]) || b, a[1] = a[3] = H(a[1]) || b, a[2] = H(a[2]) || b) : (a[0] = H(a[0]) || b, a[1] = H(a[1]) || b, a[2] = H(a[2]) || b, a[3] = H(a[3]) || b), a)
                },
                distanceP2P: function(a, b, c, d) {
                    return y((c - a) * (c - a) + (d - b) * (d - b))
                },
                atan2Radian: function(a, b, c, d) {
                    if (a == c) return d > b ? A / 2 : 3 * A / 2;
                    if (b == d) return c > a ? 0 : A;
                    var e = u.quadrant(a, b, c, d),
                        f = x(z((b - d) / (a - c)));
                    return e ? (3 == e ? B : A) + (2 == e ? f : -f) : f
                },
                angle2Radian: function(a) {
                    return a * A / 180
                },
                radian2Angle: function(a) {
                    return 180 * a / A
                },
                quadrant: function(a, b, c, d) {
                    return c > a ? d > b ? 0 : 3 : d > b ? 1 : 2
                },
                toPI2: function(a) {
                    for (; 0 > a;) a += B;
                    return a
                },
                visible: function(a, b, c) {
                    if (a >= b) return [];
                    var d = u.quadrantd(a),
                        e = u.quadrantd(b);
                    if ((2 == d || 3 == d) && (2 == e || 3 == e) && A > b - a) return [];
                    if (a = u.toPI2(a), b = u.toPI2(b), a >= b && (b += B), a > A) a = B;
                    else {
                        if (b > B) return [{
                            s: a,
                            e: A,
                            f: c
                        }, {
                            s: B,
                            e: b,
                            f: c
                        }];
                        b > A && (b = A)
                    }
                    return {
                        s: a,
                        e: b,
                        f: c
                    }
                },
                quadrantd: function(a) {
                    if (0 == a) return 0;
                    if (0 == a % B) return 3;
                    for (; 0 > a;) a += B;
                    return C(2 * (a % B) / A) - 1
                },
                upTo: function(a, b) {
                    return b > a ? a : b
                },
                lowTo: function(a, b) {
                    return a > b ? a : b
                },
                between: function(a, b, c) {
                    return a > b ? u.between(b, a, c) : c > b ? b : a > c ? a : c
                },
                inRange: function(a, b, c) {
                    return b > c && c > a
                },
                angleInRange: function(a, b, c) {
                    return c -= a, c = 0 > c ? c + B : c, c %= B, b - a > c
                },
                angleZInRange: function(a, b, c) {
                    return a > b ? c > a || b > c : b > c && c > a
                },
                inRangeClosed: function(a, b, c) {
                    return b >= c && c >= a
                },
                inEllipse: function(a, b, c, d) {
                    return 1 >= a * a / c / c + b * b / d / d
                },
                p2Point: function(a, b, c, d) {
                    return {
                        x: a + w(c) * d,
                        y: b + v(c) * d
                    }
                },
                toRgb: P,
                toRgba: function(a, b) {
                    var c = N(P(a));
                    return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + b + ")"
                },
                vectorP2P: function(a, b, c) {
                    return c || (b = u.angle2Radian(b), a = u.angle2Radian(a)), b = v(b), {
                        x: b * v(a),
                        y: b * w(a)
                    }
                },
                uid: function(a) {
                    return (a || "ichartjs") + "_" + C(1e4 * Math.random()) + (new Date).getTime().toString().substring(4)
                },
                register: function(a) {
                    if (u.isString(a)) J[a.toLowerCase()] = a;
                    else {
                        var b = a.get("id");
                        if (!b || "" == b) {
                            for (b = u.uid(a.type); I[b];) b = u.uid(a.type);
                            a.push("id", b)
                        }
                        if (I[b]) throw new Error("exist reduplicate id :" + b);
                        a.id = b, I[b] = a
                    }
                },
                create: function(a) {
                    if (!a.type || !J[a.type]) throw new Error("TypeNotFoundException[" + a.type + "]");
                    return new u[J[a.type]](a)
                },
                remove: function(a) {
                    delete I[a]
                },
                get: function(a) {
                    return I[a]
                },
                isPercent: function(a) {
                    return u.isString(a) && a.match(/(.*)%/)
                },
                parsePercent: function(a, b) {
                    return u.isString(a) && (a = a.match(/(.*)%/), a && (a = b ? E(H(a[1]) * b / 100) : a[1] / 100)), !a || 0 >= a || a > b ? b : a
                },
                parseFloat: function(a, b) {
                    if (!u.isNumber(a) && (a = H(a), !u.isNumber(a))) throw new Error("[" + b + "]=" + a + "is not a valid number.");
                    return a
                },
                ceil: function(a) {
                    return K(a, 1)
                },
                floor: function(a) {
                    return K(a, -1)
                },
                _2D: "2d",
                _3D: "3d",
                light: function(a, b, c) {
                    return U(!1, a, b, c)
                },
                dark: function(a, b, c) {
                    return U(!0, a, b, c)
                },
                fixPixel: function(a) {
                    return u.isNumber(a) ? a : H(a.replace("px", "")) || 0
                },
                toPixel: function(a) {
                    return u.isNumber(a) ? a + "px" : u.fixPixel(a) + "px"
                },
                emptyFn: function() {
                    return !0
                },
                ratio: a.devicePixelRatio || 1,
                supportCanvas: j,
                isOpera: e,
                isWebKit: g,
                isChrome: f,
                isSafari: h,
                isIE: i,
                isGecko: k,
                isMobile: l,
                touch: "ontouchend" in document,
                FRAME: l ? 30 : 60
            }), u.Assert = {
                isTrue: function(a, b) {
                    if (a !== !0) throw new Error(b)
                }
            }, u.requestAnimFrame = function() {
                var b = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(b) {
                    a.setTimeout(b, 1e3 / 60)
                };
                return function(a) {
                    b(a)
                }
            }(), u.Event = {
                addEvent: function(a, b, c, d) {
                    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
                },
                fix: function(b) {
                    "undefined" == typeof b && (b = a.event);
                    var c = {
                        target: b.target,
                        pageX: b.pageX,
                        pageY: b.pageY,
                        offsetX: b.offsetX,
                        offsetY: b.offsetY,
                        stopPropagation: !1,
                        event: b
                    };
                    if ("undefined" == typeof b.offsetX) {
                        var d = document.documentElement || {},
                            e = document.body,
                            f = (d.scrollLeft || e.scrollLeft || 0) - (d.clientLeft || e.clientLeft || 0),
                            g = (d.scrollTop || e.scrollTop || 0) - (d.clientTop || e.clientTop || 0),
                            h = b.targetTouches;
                        b.target || (c.target = b.srcElement || (h ? h[0].target : d || e)), h && (c.pageX = h[0].pageX, c.pageY = h[0].pageY), null == c.pageX && null != b.clientX && (c.pageX = b.clientX + f, c.pageY = b.clientY + g);
                        var i = 0,
                            j = 0,
                            k = c.target;
                        if (k.getBoundingClientRect) {
                            var l = k.getBoundingClientRect();
                            i = l.left + (a.pageXOffset || f), j = l.top + (a.pageYOffset || g)
                        } else
                            for (; k != document.body && k;) i += k.offsetLeft - (k.scrollLeft || 0), j += k.offsetTop, k = k.offsetParent;
                        c.offsetX = c.pageX - i, c.offsetY = c.pageY - j
                    }
                    return c.x = c.offsetX, c.y = c.offsetY, b.stopPropagation || (b.stopPropagation = function() {
                        a.event.cancelBubble = !0
                    }), c
                }
            }, u
        }(a);
    Array.prototype.each = function(a, b) {
        for (var c, d = this.length, e = 0; d > e && (c = b ? a.call(b, this[e], e) : a(this[e], e), "boolean" != typeof c || c); e++);
        return this
    }, Array.prototype.eachAll = function(a, b) {
        this.each(function(c, d) {
            return n.isArray(c) ? c.eachAll(a, b) : b ? a.call(b, c, d) : a(c, d)
        }, b)
    }, Array.prototype.sor = function(a) {
        for (var b, c = this, d = c.length - 1, e = 0; d > e; e++)
            for (var f = d; f > e; f--)(a ? !a(c[f], c[f - 1]) : c[f] < c[f - 1]) && (b = c[f], c[f] = c[f - 1], c[f - 1] = b)
    }, a.iChart = n, a.$ || (a.$ = a.iChart)
}(window),
function(a) {
    a.Element = function(b) {
            var c = this._();
            c.type = "element", c.ICHARTJS_OBJECT = !0, a.DefineAbstract("configure", c), a.DefineAbstract("afterConfiguration", c), c.options = {}, c.set({
                border: {
                    enable: !1,
                    color: "#BCBCBC",
                    style: "solid",
                    width: 1,
                    radius: 0
                },
                shadow: !1,
                shadow_color: "#666666",
                shadow_blur: 4,
                shadow_offsetx: 0,
                shadow_offsety: 0
            }), c.W = "width", c.H = "height", c.O = "top", c.B = "bottom", c.L = "left", c.R = "right", c.C = "center", c.X = "originx", c.Y = "originy", c.variable = {}, c.events = {
                mouseup: [],
                touchstart: [],
                touchmove: [],
                touchend: [],
                mousedown: [],
                dblclick: []
            }, c.registerEvent("initialize"), c.configure.apply(c, Array.prototype.slice.call(arguments, 1)), c.default_ = a.clone(c.options, !0), c.set(b), c.afterConfiguration(c)
        }, a.Element.prototype = {
            _: function() {
                return this
            },
            afterConfiguration: function(b) {
                if (a.isObject(b.get("listeners")))
                    for (var c in b.get("listeners")) b.on(c, b.get("listeners")[c]);
                b.initialize(), b.fireEvent(b, "initialize", [b])
            },
            registerEvent: function() {
                for (var a = 0; a < arguments.length; a++) this.events[arguments[a]] = []
            },
            fireString: function(b, c, d, e) {
                var f = this.fireEvent(b, c, d);
                return a.isString(f) ? f : f !== !0 && a.isDefined(f) ? f.toString() : e
            },
            fireEvent: function(a, b, c) {
                var d = this.events[b].length;
                if (1 == d) return this.events[b][0].apply(a, c);
                for (var e = !0, f = 0; d > f; f++) this.events[b][f].apply(a, c) || (e = !1);
                return e
            },
            on: function(b, c) {
                return a.isString(b) && a.isArray(this.events[b]) ? this.events[b].push(c) : a.isArray(b) && b.each(function(a) {
                    this.on(a, c)
                }, this), this
            },
            getPlugin: function(a) {
                return this.constructor.plugin_[a]
            },
            set: function(b) {
                a.isObject(b) && a.merge(this.options, b)
            },
            pushIf: function(b, c) {
                return a.isDefined(this.get(b)) && null != this.get(b) ? this.get(b) : this.push(b, c)
            },
            push: function(a, b) {
                for (var c = a.split("."), d = c.length - 1, e = this.options, f = 0; d > f; f++) e[c[f]] || (e[c[f]] = {}), e = e[c[f]];
                return e[c[d]] = b, b
            },
            get: function(a) {
                for (var b = a.split("."), c = this.options[b[0]], d = 1; d < b.length; d++) {
                    if (!c) return null;
                    c = c[b[d]]
                }
                return c
            }
        }, a.Painter = a.extend(a.Element, {
            configure: function() {
                this.type = "painter", this.dimension = a._2D, a.DefineAbstract("commonDraw", this), a.DefineAbstract("initialize", this), this.set({
                    strokeStyle: "gray",
                    padding: 10,
                    color: "black",
                    offsetx: 0,
                    offsety: 0,
                    background_color: "#FEFEFE",
                    color_factor: .15,
                    style: "",
                    border: {
                        enable: !0
                    },
                    gradient: !1,
                    gradient_mode: "LinearGradientUpDown",
                    z_index: 0,
                    listeners: null,
                    originx: null,
                    originy: null
                }), this.variable.event = {
                    mouseover: !1
                }, this.variable.animation = {}, this.registerEvent("click", "mousemove", "mouseover", "mouseout", "beforedraw", "draw")
            },
            is3D: function() {
                return this.dimension == a._3D
            },
            tf: function(b) {
                var c = this._();
                return a.isFunction(c.get(b)) ? c.get(b).apply(c, [c.T, b]) : c.get(b)
            },
            applyGradient: function(a, b, c, d) {
                var e = this._();
                e.get("gradient") && e.get("f_color") && (e.push("f_color", e.T.gradient(a || e.x || 0, b || e.y || 0, c || e.get(e.W), d || e.get(e.H), [e.get("dark_color"), e.get("light_color")], e.get("gradient_mode"))), e.push("light_color", e.T.gradient(a || e.x || 0, b || e.y || 0, c || e.get(e.W), d || e.get(e.H), [e.get("background_color"), e.get("light_color")], e.get("gradient_mode"))), e.push("f_color_", e.get("f_color")))
            },
            draw: function(a, b) {
                if (b) this.root.draw(a);
                else {
                    if (!this.fireEvent(this, "beforedraw", [this, a])) return this;
                    this.commonDraw(this, a), this.fireEvent(this, "draw", [this, a])
                }
            },
            inject: function(a) {
                a && (this.root = a, this.target = this.T = a.T)
            },
            doConfig: function() {
                var b = this._(),
                    c = a.parsePadding(b.get("padding")),
                    d = b.get("border.enable"),
                    d = d ? a.parsePadding(b.get("border.width")) : [0, 0, 0, 0],
                    e = a.toRgb(b.get("background_color")),
                    f = b.get("color_factor"),
                    g = b.get("gradient") ? 0 : null;
                if (b.set({
                        border_top: d[0],
                        border_right: d[1],
                        border_bottom: d[2],
                        border_left: d[3],
                        hborder: d[1] + d[3],
                        vborder: d[0] + d[2],
                        padding_top: c[0] + d[0],
                        padding_right: c[1] + d[1],
                        padding_bottom: c[2] + d[2],
                        padding_left: c[3] + d[3],
                        hpadding: c[1] + c[3] + d[1] + d[3],
                        vpadding: c[0] + c[2] + d[0] + d[2]
                    }), b.push("f_color", e), b.push("f_color_", e), b.push("light_color", a.light(e, f, g)), b.push("dark_color", a.dark(e, .8 * f, g)), b.push("light_color2", a.light(e, 2 * f, g)), b.is3D() && !b.get("xAngle_")) {
                    var h = a.vectorP2P(b.get("xAngle"), b.get("yAngle"));
                    b.push("xAngle_", h.x), b.push("yAngle_", h.y)
                }
            }
        }), a.Html = a.extend(a.Element, {
            configure: function(b) {
                this.type = "html", this.T = b, a.DefineAbstract("beforeshow", this), this.set({
                    animation: !0,
                    default_action: !0,
                    width: 0,
                    height: 0,
                    style: "",
                    index: 999,
                    offset_top: 0,
                    offset_left: 0
                }), this.transitions = ""
            },
            initialize: function() {
                var a = this._();
                a.wrap = a.get("wrap"), a.dom = document.createElement("div"), a.get("shadow") && a.css("boxShadow", a.get("shadow_offsetx") + "px " + a.get("shadow_offsety") + "px " + a.get("shadow_blur") + "px " + a.get("shadow_color")), a.get("border.enable") && (a.css("border", a.get("border.width") + "px " + a.get("border.style") + " " + a.get("border.color")), a.css("borderRadius", a.get("border.radius") + "px")), a.css("position", "absolute"), a.css("zIndex", a.get("index")), a.applyStyle(), a.wrap.appendChild(a.dom), a.style = a.dom.style, a.get("default_action") && a.doAction(a)
            },
            width: function() {
                return this.dom.offsetWidth
            },
            height: function() {
                return this.dom.offsetHeight
            },
            onTransitionEnd: function(b, c) {
                var d = "transitionend";
                a.isWebKit ? d = "webkitTransitionEnd" : a.isOpera && (d = "oTransitionEnd"), a.Event.addEvent(this.dom, d, b, c)
            },
            destroy: function() {
                this.wrap.removeChild(this.dom), this.dom = null
            },
            transition: function(b) {
                this.transitions = "" == this.transitions ? b : this.transitions + "," + b, a.isWebKit ? this.css("WebkitTransition", this.transitions) : a.isGecko ? this.css("MozTransition", this.transitions) : a.isOpera ? this.css("OTransition", this.transitions) : this.css("transition", this.transitions)
            },
            beforeshow: function(a, b, c) {
                c.follow(a, b, c)
            },
            show: function(a, b) {
                this.beforeshow(a, b, this), this.css("visibility", "visible"), this.get("animation") && this.css("opacity", 1)
            },
            hidden: function() {
                this.css("visibility", "hidden")
            },
            getDom: function() {
                return this.dom
            },
            css: function(b, c) {
                if (a.isString(b)) {
                    if (!a.isDefined(c)) return this.dom.style[b];
                    this.dom.style[b] = c
                }
            },
            applyStyle: function() {
                for (var a, b = this.get("style").split(";"), c = 0; c < b.length; c++) a = b[c].split(":"), a.length > 1 && this.css(a[0], a[1])
            }
        }), a.Component = a.extend(a.Painter, {
            configure: function(b) {
                a.Component.superclass.configure.apply(this, arguments), this.type = "component", this.set({
                    fontsize: 12,
                    font: "Verdana",
                    fontweight: "normal",
                    fontunit: "px",
                    tip: {
                        enable: !1,
                        border: {
                            width: 2
                        }
                    }
                }), this.atomic = !1, this.proxy = !1, this.ICHARTJS_CHART = !1, this.inject(b)
            },
            initialize: function() {
                a.DefineAbstract("isEventValid", this), a.DefineAbstract("doDraw", this), this.doConfig()
            },
            getDimension: function() {
                return {
                    x: this.x,
                    y: this.y,
                    width: this.get("width"),
                    height: this.get("height")
                }
            },
            destroy: function() {
                this.tip && this.tip.destroy()
            },
            doConfig: function() {
                a.Component.superclass.doConfig.call(this);
                var b = this._(),
                    c = b.get(b.W),
                    d = b.get("maxwidth"),
                    e = b.get(b.X);
                if (c && d && (c = b.push(b.W, a.parsePercent(c, d)), c > d && (c = b.push("width", d)), d > c)) {
                    var f = b.get("align") || b.C;
                    f == b.C ? e += (d - c) / 2 : f == b.R && (e += d - c)
                }
                b.x = b.push(b.X, e + b.get("offsetx")), b.y = b.push(b.Y, b.get(b.Y) + b.get("offsety")), b.push("fontStyle", a.getFont(b.get("fontweight"), b.get("fontsize"), b.get("font"), b.get("fontunit"))), b.data = b.get("data"), b.get("tip.enable") && (b.pushIf("tip.border.color", b.get("f_color")), a.isFunction(b.get("tip.invokeOffset")) || b.push("tip.invokeOffset", b.tipInvoke()))
            },
            isMouseOver: function(a) {
                return this.isEventValid(a, this)
            },
            redraw: function(a) {
                this.root.draw(a, this.root.Combination)
            },
            last: a.emptyFn,
            commonDraw: function(a) {
                a.proxy || a.doDraw.call(a, a)
            }
        }), a.Tip = a.extend(a.Html, {
            configure: function() {
                a.Tip.superclass.configure.apply(this, arguments), this.type = "tip", this.set({
                    name: "",
                    index: 0,
                    value: "",
                    text: "",
                    showType: "follow",
                    invokeOffset: null,
                    fade_duration: 300,
                    move_duration: 100,
                    timing_function: "ease-out",
                    invokeOffsetDynamic: !1,
                    style: "textAlign:left;padding:4px 5px;cursor:pointer;backgroundColor:rgba(239,239,239,.85);fontSize:12px;color:black;",
                    border: {
                        enable: !0,
                        radius: 5
                    },
                    delay: 200
                }), this.registerEvent("parseText")
            },
            position: function(a, b, c) {
                c.style.top = (0 > a ? 0 : a) + "px", c.style.left = (0 > b ? 0 : b) + "px"
            },
            follow: function(b, c, d) {
                if (d.get("invokeOffsetDynamic")) {
                    if (c.hit) {
                        (a.isString(c.text) || a.isNumber(c.text)) && d.text(c.name, c.value, c.text, c.i, d);
                        var e = d.get("invokeOffset")(d.width(), d.height(), c);
                        d.position(e.top, e.left, d)
                    }
                } else if ("follow" != d.get("showType") && a.isFunction(d.get("invokeOffset"))) {
                    var e = d.get("invokeOffset")(d.width(), d.height(), c);
                    d.position(e.top, e.left, d)
                } else d.position(b.y - 1.1 * d.height() - 2, b.x + 2, d)
            },
            text: function(a, b, c, d, e) {
                e.dom.innerHTML = e.fireString(e, "parseText", [e, a, b, c, d], c)
            },
            hidden: function() {
                this.get("animation") ? this.css("opacity", 0) : this.css("visibility", "hidden")
            },
            doAction: function(a) {
                a.T.on("mouseover", function(b, c, d) {
                    a.show(c, d)
                }).on("mouseout", function(b, c) {
                    a.hidden(c)
                }), "follow" == a.get("showType") && a.T.on("mousemove", function(b, c, d) {
                    a.T.variable.event.mouseover && setTimeout(function() {
                        a.T.variable.event.mouseover && a.follow(c, d, a)
                    }, a.get("delay"))
                })
            },
            initialize: function() {
                a.Tip.superclass.initialize.call(this);
                var b = this._();
                if (b.text(b.get("name"), b.get("value"), b.get("text"), b.get("index"), b), b.hidden(), b.get("animation")) {
                    var c = b.get("move_duration") / 1e3 + "s " + b.get("timing_function") + " 0s";
                    b.transition("opacity " + b.get("fade_duration") / 1e3 + "s " + b.get("timing_function") + " 0s"), b.transition("top " + c), b.transition("left " + c), b.onTransitionEnd(function() {
                        0 == b.css("opacity") && b.css("visibility", "hidden")
                    }, !1)
                }
            }
        }), a.CrossHair = a.extend(a.Html, {
            configure: function() {
                a.CrossHair.superclass.configure.apply(this, arguments), this.type = "crosshair", this.set({
                    top: 0,
                    left: 0,
                    hcross: !0,
                    vcross: !0,
                    invokeOffset: null,
                    line_width: 1,
                    line_color: "#1A1A1A",
                    delay: 200
                })
            },
            follow: function(a, b, c) {
                if (c.get("invokeOffset")) {
                    var d = c.get("invokeOffset")(a, b);
                    d && d.hit ? (c.o_valid = !0, c.position(d.top - c.top, d.left - c.left, c)) : d && c.o_valid || c.position(c.owidth, c.oheight, c)
                } else c.position(a.y - c.top - 1, a.x - c.left - 1, c)
            },
            position: function(a, b, c) {
                c.horizontal.style.top = a - c.size + "px", c.vertical.style.left = b - c.size + "px"
            },
            doCreate: function(b, c, d) {
                var e = document.createElement("div");
                return e.style.width = a.toPixel(c), e.style.height = a.toPixel(d), e.style.backgroundColor = b.get("line_color"), e.style.position = "absolute", b.dom.appendChild(e), e
            },
            doAction: function(a) {
                a.T.on("mouseover", function(b, c, d) {
                    a.show(c, d)
                }).on("mouseout", function(b, c, d) {
                    a.hidden(c, d)
                }).on("mousemove", function(b, c, d) {
                    a.follow(c, d, a)
                })
            },
            initialize: function() {
                a.CrossHair.superclass.initialize.call(this);
                var b = this._(),
                    c = a.toPixel(b.get("line_width"));
                b.size = b.get("line_width") / 2, b.top = a.fixPixel(b.get(b.O)), b.left = a.fixPixel(b.get(b.L)), b.owidth = -b.T.root.width, b.oheight = -b.T.root.height, b.o_valid = !1, b.css("width", "0px"), b.css("height", "0px"), b.css("top", b.top + "px"), b.css("left", b.left + "px"), b.css("visibility", "hidden"), b.horizontal = b.doCreate(b, b.get("hcross") ? a.toPixel(b.get(b.W)) : "0px", c), b.vertical = b.doCreate(b, c, b.get("vcross") ? a.toPixel(b.get(b.H)) : "0px")
            }
        }), a.Legend = a.extend(a.Component, {
            configure: function() {
                a.Legend.superclass.configure.apply(this, arguments), this.type = "legend", this.set({
                    data: void 0,
                    width: "auto",
                    column: 1,
                    row: "max",
                    maxwidth: 0,
                    line_height: 16,
                    sign: "square",
                    sign_size: 10,
                    sign_space: 5,
                    legend_space: 5,
                    z_index: 1009,
                    text_with_sign_color: !1,
                    align: "right",
                    valign: "middle"
                }), this.atomic = !0, this.registerEvent("parse")
            },
            isEventValid: function(a, b) {
                var c = {
                        valid: !1
                    },
                    d = b.get("line_height");
                return a.x > this.x && a.x < b.x + b.width && a.y > b.y && a.y < b.y + b.height && b.data.each(function(e, f) {
                    return a.x > e.x && a.x < e.x + e.width_ + b.get("signwidth") && a.y > e.y - d / 2 && a.y < e.y + d / 2 ? (c = {
                        valid: !0,
                        index: f,
                        target: e
                    }, !1) : void 0
                }, b), c
            },
            drawCell: function(a, b, c, d, e, f) {
                var g = f.get("sign_size"),
                    h = f.getPlugin("sign");
                h && h.call(f, f.T, e, {
                    x: a + g / 2,
                    y: b
                }, g, d) || (-1 != e.indexOf("bar") && f.T.box(a, b - g / 12, g, g / 6, 0, d), "round" == e ? f.T.round(a + g / 2, b, g / 2, d) : "round-bar" == e ? f.T.round(a + g / 2, b, g / 4, d) : "square-bar" == e ? f.T.box(a + g / 4, b - g / 4, g / 2, g / 2, 0, d) : "square" == e && f.T.box(a, b - g / 2, g, g, 0, d)), f.T.fillText(c, a + f.get("signwidth"), b, 0, f.get("text_with_sign_color") ? d : f.get("color"), "lr", f.get("line_height"))
            },
            doDraw: function(b) {
                b.T.box(b.x, b.y, b.width, b.height, b.get("border"), b.get("f_color"), !1, b.get("shadow")), b.T.textStyle(b.L, "middle", a.getFont(b.get("fontweight"), b.get("fontsize"), b.get("font"))), b.data.each(function(a) {
                    b.drawCell(a.x, a.y, a.text, a.color, a.sign, b)
                })
            },
            doLayout: function(b, c) {
                var d = b.get("sign_size"),
                    e = 0,
                    f = 0,
                    g = 0,
                    h = b.get("column"),
                    i = b.get("row"),
                    j = b.data.length;
                h = h > j ? j : h, b.T.textFont(b.get("fontStyle")), b.get("line_height") < d && b.push("line_height", d + d / 5), b.push("signwidth", d + b.get("sign_space")), b.data.each(function(a) {
                    a.width_ = b.T.measureText(a.text)
                }, b);
                for (var k = 0; h > k; k++) {
                    g = 0;
                    for (var l = k; j > l; l += h) g = Math.max(g, b.data[l].width_);
                    b.columnwidth[k] = g, e += g
                }
                for (var k = 0; i > k; k++) {
                    g = 0;
                    for (var l = k * h; j > l; l++) g = Math.max(g, b.data[l].text.split("\n").length);
                    b.columnheight[k] = g, f += g
                }
                if (e = b.push(b.W, e + b.get("hpadding") + b.get("signwidth") * h + (h - 1) * b.get("legend_space")), e > b.get("maxwidth")) {
                    var m = Math.floor(b.get("fontsize") * (b.get("maxwidth") / e));
                    if (!(10 > m && 1 == h)) return m > 9 ? b.push("fontStyle", a.getFont(b.get("fontweight"), b.push("fontsize", m), b.get("font"))) : h > 1 && b.push("row", Math.ceil(j / b.push("column", h - 1))), b.doLayout(b, c), void 0
                }
                var n, o, p, q;
                b.width = e, b.height = f = b.push(b.H, f * b.get("line_height") + b.get("vpadding")), b.y = b.get("valign") == b.O ? c.get("t_originy") : b.get("valign") == b.B ? c.get("b_originy") - f : c.get("centery") - f / 2, b.x = b.get("align") == b.L ? c.get("l_originx") : b.get("align") == b.C ? c.get("centerx") - e / 2 : c.get("r_originx") - e, b.x = b.push(b.X, (b.x < 0 ? c.get("l_originx") : b.x) + b.get("offsetx")), b.y = b.push(b.Y, (b.y < 0 ? c.get("t_originy") : b.y) + b.get("offsety")), p = b.y + b.get("padding_top"), d = b.get("legend_space") + b.get("signwidth");
                for (var k = 0; i > k; k++) {
                    o = b.x + b.get("padding_left"), q = b.columnheight[k] / 2 * b.get("line_height"), p += q;
                    for (var l = 0; h > l && j > k * h + l; l++) n = b.data[k * h + l], n.y = p, n.x = o, o += b.columnwidth[l] + d;
                    p += q
                }
            },
            doConfig: function() {
                a.Legend.superclass.doConfig.call(this);
                var b = this._(),
                    c = b.root,
                    d = a.isNumber(b.get("column")),
                    e = a.isNumber(b.get("row")),
                    f = b.data.length;
                b.get("align") == b.C && "middle" == b.get("valign") && b.push("valign", b.O), c.get("align") == b.L && "middle" == b.get("valign") && b.push("align", b.R), b.data.each(function(c, d) {
                    a.merge(c, b.fireEvent(b, "parse", [b, c.name, d])), c.text = c.text || c.name || "", c.sign = c.sign || b.get("sign")
                }, b), d || e || (d = b.push("column", 1)), d && !e && (e = b.push("row", Math.ceil(f / b.get("column")))), !d && e && (d = b.push("column", Math.ceil(f / b.get("row")))), d = b.get("column"), e = b.get("row"), f > e * d && (e += Math.ceil((f - e * d) / d), e = b.push("row", e)), b.columnwidth = [], b.columnheight = [], b.doLayout(b, c)
            }
        }), a.Label = a.extend(a.Component, {
            configure: function() {
                a.Label.superclass.configure.apply(this, arguments), this.type = "label", this.set({
                    text: "",
                    line_height: 12,
                    line_thickness: 1,
                    sign: "square",
                    sign_size: 12,
                    padding: "2 5",
                    offsety: 2,
                    sign_space: 5,
                    background_color: "#efefef",
                    text_with_sign_color: !1
                }), this.atomic = !0, this.registerEvent()
            },
            isEventValid: function(b, c) {
                return {
                    valid: a.inRange(c.labelx, c.labelx + c.get(c.W), b.x) && a.inRange(c.labely, c.labely + c.get(c.H), b.y)
                }
            },
            text: function(a) {
                a && this.push("text", a), this.push(this.W, this.T.measureText(this.get("text")) + this.get("hpadding") + this.get("sign_size") + this.get("sign_space"))
            },
            localizer: function(a) {
                var b = a.get("quadrantd"),
                    c = a.get("line_points"),
                    d = a.get("smooth"),
                    b = b >= 1 && 2 >= b,
                    e = a.get("labelx"),
                    f = a.get("labely");
                a.labelx = e + (b ? -a.get(a.W) - d : d), a.labely = f - a.get(a.H) / 2, c[2] = {
                    x: e,
                    y: f
                }, c[3] = {
                    x: c[2].x + (b ? -d : d),
                    y: c[2].y
                }
            },
            doLayout: function(a, b, c, d) {
                d.push("labelx", d.get("labelx") + a / c), d.push("labely", d.get("labely") + b / c), d.get("line_points").each(function(c, d) {
                    return c.x += a, c.y += b, 1 == d
                }, d), d.localizer(d)
            },
            doDraw: function(a) {
                var b = a.get("line_points"),
                    c = a.get("sign_size"),
                    d = a.labelx + a.get("padding_left"),
                    e = a.labely + a.get("padding_top");
                a.T.label(b, a.get("line_thickness"), a.get("border.color")), a.T.box(a.labelx, a.labely, a.get(a.W), a.get(a.H), a.get("border"), a.get("f_color"), !1, a.get("shadow")), a.T.textStyle(a.L, a.O, a.get("fontStyle"));
                var f = a.get("color");
                a.get("text_with_sign_color") && (f = a.get("scolor")), "square" == a.get("sign") ? a.T.box(d, e, c, c, 0, a.get("scolor")) : a.get("sign") && a.T.round(d + c / 2, e + c / 2, c / 2, a.get("scolor")), a.T.fillText(a.get("text"), d + c + a.get("sign_space"), e, a.get("textwidth"), f)
            },
            doConfig: function() {
                a.Label.superclass.doConfig.call(this);
                var b = this._();
                b.T.textFont(b.get("fontStyle")), b.get("fontsize") > b.get("line_height") && b.push("line_height", b.get("fontsize")), b.get("sign") || (b.push("sign_size", 0), b.push("sign_space", 0)), b.push(b.H, b.get("line_height") + b.get("vpadding")), b.text(), b.localizer(b)
            }
        }), a.Text = a.extend(a.Component, {
            configure: function() {
                a.Text.superclass.configure.apply(this, arguments), this.type = "text", this.set({
                    text: "",
                    textAlign: "center",
                    align: "center",
                    background_color: 0,
                    textBaseline: "top",
                    border: {
                        enable: !1
                    },
                    width: 0,
                    height: 0,
                    padding: 0,
                    writingmode: "lr",
                    line_height: 16,
                    rotate: 0
                }), this.registerEvent()
            },
            doDraw: function(a) {
                a.get("box_feature") && a.T.box(a.x, a.y, a.get(a.W), a.get(a.H), a.get("border"), a.get("f_color")), a.T.text(a.get("text"), a.get("textx"), a.get("texty"), a.get(a.W) - a.get("hpadding"), a.get("color"), a.get("textAlign"), a.get("textBaseline"), a.get("fontStyle"), a.get("writingmode"), a.get("line_height"), a.get("shadow"), a.get("rotate"))
            },
            isEventValid: function() {
                return {
                    valid: !1
                }
            },
            doLayout: function(a, b, c, d) {
                d.x = d.push(d.X, d.x + a), d.y = d.push(d.Y, d.y + b), d.push("textx", d.get("textx") + a), d.push("texty", d.get("texty") + b)
            },
            doConfig: function() {
                a.Text.superclass.doConfig.call(this);
                var b = this._(),
                    c = b.x,
                    d = b.y + b.get("padding_top"),
                    e = b.get(b.W),
                    f = b.get(b.H),
                    g = b.get("textAlign");
                c += g == b.C ? e / 2 : g == b.R ? e - b.get("padding_right") : b.get("padding_left"), f && (d += f / 2, b.push("textBaseline", "middle")), b.push("textx", c), b.push("texty", d), b.push("box_feature", e && f), b.applyGradient()
            }
        }),
        function(a) {
            function b(b) {
                this.canvas = "string" == typeof b ? a(b) : b, this.c = this.canvas.getContext("2d")
            }
            var c = Math.PI,
                d = c / 90,
                e = d / 2,
                f = Math.ceil,
                g = Math.floor,
                h = 2 * c,
                i = Math.max,
                j = Math.min,
                k = Math.sin,
                l = Math.cos,
                m = function(a, b) {
                    return 1 == a ? g(b) + .5 : Math.round(b)
                },
                n = function(a, b, c, d) {
                    var e, f, g, h, k = b.x,
                        l = b.y,
                        m = a[c - 1],
                        n = a[c + 1];
                    if (c < a.length - 1) {
                        var o, p = m.y,
                            q = n.y;
                        e = (d * k + m.x) / (d + 1), f = (d * l + p) / (d + 1), g = (d * k + n.x) / (d + 1), h = (d * l + q) / (d + 1), o = (h - f) * (g - k) / (g - e) + l - h, f += o, h += o, f > p && f > l ? (f = i(p, l), h = 2 * l - f) : p > f && l > f && (f = j(p, l), h = 2 * l - f), h > q && h > l ? (h = i(q, l), f = 2 * l - h) : q > h && l > h && (h = j(q, l), f = 2 * l - h), b.rcx = g, b.rcy = h
                    }
                    return [m.rcx || m.x, m.rcy || m.y, e || k, f || l, k, l]
                },
                o = function(b) {
                    return a.isNumber(b) ? b : a.parseFloat(b, b)
                },
                p = function(b, c) {
                    var d, e, f = 0,
                        g = 0,
                        h = !1,
                        k = c.get("labels");
                    if (c.data = b, "simple" == c.dataType) c.total = 0, b.each(function(b) {
                        if (b.background_color = b.color, f = b.value || 0, a.isArray(f)) {
                            var k = 0;
                            g = f.length > g ? f.length : g;
                            for (var l = 0; l < f.length; l++) f[l] = o(f[l]), k += f[l], h || (d = e = f[l], h = !0), d = i(f[l], d), e = j(f[l], e);
                            b.total = k
                        } else f = o(f), b.value = f, c.total += f, h || (d = e = f, h = !0), d = i(f, d), e = j(f, e)
                    }, c), a.isArray(k) && (g = k.length > g ? k.length : g), c.push("maxItemSize", g);
                    else if ("stacked" == c.dataType || "complex" == c.dataType) {
                        var l, m, n, p = k.length,
                            q = "stacked" == c.dataType;
                        if (0 == p) {
                            p = b[0].value.length;
                            for (var r = 0; p > r; r++) k.push("")
                        }
                        c.columns = [];
                        for (var r = 0; p > r; r++) l = [], m = 0, b.each(function(c, g) {
                            f = c.value[r], (f || 0 == f) && (c.value[r] = f = o(f, f), m += f, q ? n = b[g].color : (n = c.color, h || (d = e = f, h = !0), d = i(f, d), e = j(f, e)), l.push(a.applyIf({
                                name: c.name,
                                value: c.value[r],
                                background_color: n,
                                color: n
                            }, a.isArray(c.extra) ? c.extra[r] || {} : c)))
                        }), q && (h || (d = e = f, h = !0), d = i(m, d), e = j(m, e)), c.columns.push({
                            total: m,
                            name: k[r],
                            item: l
                        })
                    }
                    c.push("minValue", e), c.push("maxValue", d), c.doConfig()
                };
            b.prototype = {
                getContext: function() {
                    return this.c
                },
                css: function(b, c) {
                    return a.isDefined(c) ? (this.canvas.style[b] = c, void 0) : this.canvas.style[b]
                },
                ellipse: function(a, b, c, e, f, g, h, i, j, m, n, o, p, q) {
                    var r = f,
                        p = !!p;
                    for (this.save().gCo(q).strokeStyle(i, j, m).shadowOn(n).fillStyle(h).moveTo(a, b).beginPath(), p && this.moveTo(a, b); g >= r;) this.lineTo(a + c * l(r), b + e * k(r)), r += d;
                    return this.lineTo(a + c * l(g), b + e * k(g)).closePath().stroke(i).fill(h).restore()
                },
                arc: function(a, b, c, d, e, f, h, i, j, m, n, o, p, q) {
                    return i && (c -= g(j / 2)), 0 >= c ? this : (this.save().gCo(q).strokeStyle(i, j, m).fillStyle(h).beginPath(), d ? (this.moveTo(a + l(e) * (c - d), b + k(e) * (c - d)).lineTo(a + l(e) * c, b + k(e) * c), this.c.arc(a, b, c, e, f, o), this.lineTo(a + l(f) * (c - d), b + k(f) * (c - d)), this.c.arc(a, b, c - d, f, e, !o)) : (this.c.arc(a, b, c, e, f, o), p && this.lineTo(a, b)), this.closePath(), i ? this.shadowOn(n).stroke(i).shadowOff().fill(h) : this.shadowOn(n).fill(h), this.restore())
                },
                sector: function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
                    return k && this.arc(a, b, c, d, e, f, g, h, i, j, k, l, !m, !n), this.arc(a, b, c, d, e, f, g, h, i, j, !1, l, !m)
                },
                sector3D: function() {
                    var b = function(b, c, e, f, g, h, i, j, m) {
                            var n = function(a, d) {
                                    this.lineTo(b + e * l(a), c + (d || 0) + f * k(a))
                                },
                                o = g;
                            for (this.fillStyle(a.dark(m)).moveTo(b + e * l(g), c + f * k(g)).beginPath(); h >= o;) n.call(this, o), o += d;
                            for (n.call(this, h), this.lineTo(b + e * l(h), c + j + f * k(h)), o = h; o >= g;) n.call(this, o, j), o -= d;
                            n.call(this, g, j), this.lineTo(b + e * l(g), c + f * k(g)).closePath().fill(!0)
                        },
                        c = function(a, b, c, d, e, f, g, h) {
                            var i = a + c * l(g),
                                j = b + f + d * k(g);
                            this.moveTo(a, b).beginPath().fillStyle(h).lineTo(a, b + f).lineTo(i, j).lineTo(i, j - f).lineTo(a, b).closePath().fill(!0)
                        },
                        e = function(b, d, e, f, g, h, i, j, k) {
                            var l = a.quadrantd(g),
                                m = a.quadrantd(h);
                            k = a.dark(k), (1 == l || 2 == l) && c.call(this, b, d, e, f, i, j, g, k), (0 == m || 3 == m) && c.call(this, b, d, e, f, i, j, h, k)
                        },
                        f = function(a, c, d, f, g, h, i, j, k, l, m, n, o) {
                            return this.ellipse(a, c + i, d, f, g, h, j, k, l, m, n, o, !0), e.call(this, a, c, d, f, g, h, o, i, j), this.ellipse(a, c, d, f, g, h, j, k, l, m, !1, o, !0), b.call(this, a, c, d, f, g, h, o, i, j), this
                        };
                    return f.layerPaint = e, f.sPaint = b, f.layerDraw = c, f
                }(),
                textStyle: function(a, b, c) {
                    return this.textAlign(a).textBaseline(b).textFont(c)
                },
                strokeStyle: function(a, b, c, d) {
                    return a && (b && (this.c.lineWidth = b), c && (this.c.strokeStyle = c), d && (this.c.lineJoin = d)), this
                },
                globalAlpha: function(a) {
                    return a && (this.c.globalAlpha = a), this
                },
                fillStyle: function(a) {
                    return a && (this.c.fillStyle = a), this
                },
                arc2: function(a, b, c, d, e, f) {
                    return c && this.c.arc(a, b, c, d, e, f), this
                },
                textAlign: function(a) {
                    return a && (this.c.textAlign = a), this
                },
                textBaseline: function(a) {
                    return a && (this.c.textBaseline = a), this
                },
                textFont: function(a) {
                    return a && (this.c.font = a), this
                },
                shadowOn: function(a) {
                    return a && (this.c.shadowColor = a.color, this.c.shadowBlur = a.blur, this.c.shadowOffsetX = a.offsetx, this.c.shadowOffsetY = a.offsety), this
                },
                shadowOff: function() {
                    return this.c.shadowColor = "white", this.c.shadowBlur = this.c.shadowOffsetX = this.c.shadowOffsetY = 0, this
                },
                gradient: function(a, b, c, d, e, f, g) {
                    f = f.toLowerCase();
                    var h = a,
                        i = b,
                        j = !f.indexOf("linear");
                    if (f = f.substring(14), j) {
                        switch (f) {
                            case "updown":
                                i += d;
                                break;
                            case "downup":
                                b += d;
                                break;
                            case "leftright":
                                h += c;
                                break;
                            case "rightleft":
                                a += c;
                                break;
                            default:
                                return e[0]
                        }
                        return this.avgLinearGradient(a, b, h, i, e)
                    }
                    return a += c / 2, b += d / 2, this.avgRadialGradient(a, b, g || 0, a, b, c > d ? d : c, "outin" == f ? e.reverse() : e)
                },
                avgLinearGradient: function(a, b, c, d, e) {
                    for (var f = this.createLinearGradient(a, b, c, d), g = 0; g < e.length; g++) f.addColorStop(g / (e.length - 1), e[g]);
                    return f
                },
                createLinearGradient: function(a, b, c, d) {
                    return this.c.createLinearGradient(a, b, c, d)
                },
                avgRadialGradient: function(a, b, c, d, e, f, g) {
                    for (var h = this.createRadialGradient(a, b, c, d, e, f), i = 0; i < g.length; i++) h.addColorStop(i / (g.length - 1), g[i]);
                    return h
                },
                createRadialGradient: function(a, b, c, d, e, f) {
                    return this.c.createRadialGradient(a, b, c, d, e, f)
                },
                text: function(a, b, c, d, e, f, g, h, i, j, k, l) {
                    return this.save().textStyle(f, g, h).fillText(a, b, c, d, e, i, j, k, l).restore()
                },
                fillText: function(a, b, c, d, f, g, h, i, j) {
                    if (a = a.toString(), !a || !a.length) return this;
                    d = d || !1, g = g || "lr", h = h || 16, b = m(0, b), c = m(0, c);
                    var k = a.split("tb" == g ? "" : "\n");
                    return k.length > 1 && ("middle" == this.c.textBaseline ? c -= (k.length - 1) * h / 2 : "bottom" == this.c.textBaseline && (c -= (k.length - 1) * h)), this.save().fillStyle(f).translate(b, c).rotate(e * j).shadowOn(i), k.each(function(a, e) {
                        try {
                            d && d > 0 ? this.c.fillText(a, 0, e * h, d) : this.c.fillText(a, 0, e * h)
                        } catch (f) {
                            console.log(f.message + "[" + a + "," + b + "," + c + "]")
                        }
                    }, this), this.restore()
                },
                measureText: function(a) {
                    a = a.split("\n");
                    var b = 0;
                    return a.each(function(a) {
                        b = i(this.measureText(a).width, b)
                    }, this.c), b
                },
                moveTo: function(a, b) {
                    return a = a || 0, b = b || 0, this.c.moveTo(a, b), this
                },
                lineTo: function(a, b) {
                    return a = a || 0, b = b || 0, this.c.lineTo(a, b), this
                },
                save: function() {
                    return this.c.save(), this
                },
                restore: function() {
                    return this.c.restore(), this
                },
                beginPath: function() {
                    return this.c.beginPath(), this
                },
                closePath: function() {
                    return this.c.closePath(), this
                },
                stroke: function(a) {
                    return a && this.c.stroke(), this
                },
                fill: function(a) {
                    return a && this.c.fill(), this
                },
                cube: function(b, c, d, e, f, g, h, i, j, k, l, n) {
                    b = m(k, b), c = m(k, c), h = h && h > 0 ? h : f;
                    var o = b + h * d,
                        p = c - h * e;
                    return o = m(k, o), p = m(k, p), n && (this.polygon(i, j, k, l, n, !1, [{
                        x: b,
                        y: c
                    }, {
                        x: o,
                        y: p
                    }, {
                        x: o + f,
                        y: p
                    }, {
                        x: b + f,
                        y: c
                    }]), this.polygon(i, j, k, l, n, !1, [{
                        x: b,
                        y: c
                    }, {
                        x: b,
                        y: c + g
                    }, {
                        x: b + f,
                        y: c + g
                    }, {
                        x: b + f,
                        y: c
                    }]), this.polygon(i, j, k, l, n, !1, [{
                        x: b + f,
                        y: c
                    }, {
                        x: o + f,
                        y: p
                    }, {
                        x: o + f,
                        y: p + g
                    }, {
                        x: b + f,
                        y: c + g
                    }])), this.polygon(a.dark(i), j, k, l, !1, !1, [{
                        x: b,
                        y: c
                    }, {
                        x: o,
                        y: p
                    }, {
                        x: o + f,
                        y: p
                    }, {
                        x: b + f,
                        y: c
                    }]), this.polygon(i, j, k, l, !1, !1, [{
                        x: b,
                        y: c
                    }, {
                        x: b,
                        y: c + g
                    }, {
                        x: b + f,
                        y: c + g
                    }, {
                        x: b + f,
                        y: c
                    }]), this.polygon(a.dark(i), j, k, l, !1, !1, [{
                        x: b + f,
                        y: c
                    }, {
                        x: o + f,
                        y: p
                    }, {
                        x: o + f,
                        y: p + g
                    }, {
                        x: b + f,
                        y: c + g
                    }]), this
                },
                cube3D: function(b, c, d, e, f, g, h, i, j, k, l, n) {
                    if (b = m(k, b), c = m(k, c), i = i && 0 != i ? i : g, f) {
                        var o = a.vectorP2P(d, e);
                        d = b + i * o.x, e = c - i * o.y
                    } else d = b + i * d, e = c - i * e;
                    for (; n.length < 6;) n.push(!1);
                    d = m(k, d), e = m(k, e);
                    var p = [];
                    return 0 > e ? a.isObject(n[4]) && p.push(a.applyIf({
                        points: [{
                            x: b,
                            y: c - h
                        }, {
                            x: d,
                            y: e - h
                        }, {
                            x: d + g,
                            y: e - h
                        }, {
                            x: b + g,
                            y: c - h
                        }]
                    }, n[4])) : a.isObject(n[0]) && p.push(a.applyIf({
                        points: [{
                            x: b,
                            y: c
                        }, {
                            x: d,
                            y: e
                        }, {
                            x: d + g,
                            y: e
                        }, {
                            x: b + g,
                            y: c
                        }]
                    }, n[0])), a.isObject(n[1]) && p.push(a.applyIf({
                        points: [{
                            x: d,
                            y: e
                        }, {
                            x: d,
                            y: e - h
                        }, {
                            x: d + g,
                            y: e - h
                        }, {
                            x: d + g,
                            y: e
                        }]
                    }, n[1])), a.isObject(n[2]) && p.push(a.applyIf({
                        points: [{
                            x: b,
                            y: c
                        }, {
                            x: b,
                            y: c - h
                        }, {
                            x: d,
                            y: e - h
                        }, {
                            x: d,
                            y: e
                        }]
                    }, n[2])), a.isObject(n[3]) && p.push(a.applyIf({
                        points: [{
                            x: b + g,
                            y: c
                        }, {
                            x: b + g,
                            y: c - h
                        }, {
                            x: d + g,
                            y: e - h
                        }, {
                            x: d + g,
                            y: e
                        }]
                    }, n[3])), 0 > e ? a.isObject(n[0]) && p.push(a.applyIf({
                        points: [{
                            x: b,
                            y: c
                        }, {
                            x: d,
                            y: e
                        }, {
                            x: d + g,
                            y: e
                        }, {
                            x: b + g,
                            y: c
                        }]
                    }, n[0])) : a.isObject(n[4]) && p.push(a.applyIf({
                        points: [{
                            x: b,
                            y: c - h
                        }, {
                            x: d,
                            y: e - h
                        }, {
                            x: d + g,
                            y: e - h
                        }, {
                            x: b + g,
                            y: c - h
                        }]
                    }, n[4])), a.isObject(n[5]) && p.push(a.applyIf({
                        points: [{
                            x: b,
                            y: c
                        }, {
                            x: b,
                            y: c - h
                        }, {
                            x: b + g,
                            y: c - h
                        }, {
                            x: b + g,
                            y: c
                        }]
                    }, n[5])), p.each(function(a) {
                        this.polygon(a.color, j, k, l, a.shadow, a.alpha, a.points)
                    }, this), this
                },
                polygon: function(a, b, c, d, e, f, g, h, i, j) {
                    if (this.save().strokeStyle(b, c, d).beginPath().fillStyle(a).globalAlpha(f).shadowOn(e).moveTo(g[0].x, g[0].y), h) {
                        this.moveTo(m(c, j[0].x), m(c, j[0].y)).lineTo(m(c, g[0].x), m(c, g[0].y));
                        for (var k = 1; k < g.length; k++) this.bezierCurveTo(n(g, g[k], k, i));
                        this.lineTo(m(c, j[1].x), m(c, j[1].y))
                    } else
                        for (var k = 1; k < g.length; k++) this.lineTo(m(c, g[k].x), m(c, g[k].y));
                    return this.closePath().stroke(b).fill(a).restore()
                },
                lines: function(a, b, c, d) {
                    if (!b) return this;
                    this.save().gCo(d).beginPath().strokeStyle(!0, b, c).moveTo(m(b, a[0]), m(b, a[1]));
                    for (var e = 2; e < a.length - 1; e += 2) this.lineTo(m(b, a[e]), m(b, a[e + 1]));
                    return this.stroke(!0).restore()
                },
                bezierCurveTo: function(a) {
                    return this.c.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]), this
                },
                label: function(a, b, c) {
                    return this.save().beginPath().strokeStyle(!0, b, c).moveTo(m(b, a[0].x), m(b, a[0].y)).bezierCurveTo([a[1].x, a[1].y, a[2].x, a[2].y, a[3].x, a[3].y]).stroke(!0).restore()
                },
                lineArray: function(a, b, c, d, e) {
                    if (!b) return this;
                    this.save().beginPath().strokeStyle(!0, b, c).moveTo(m(b, a[0].x), m(b, a[0].y));
                    for (var f = 1; f < a.length; f++) d ? this.bezierCurveTo(n(a, a[f], f, e || 1.5)) : this.lineTo(m(b, a[f].x), m(b, a[f].y));
                    return this.stroke(!0).restore()
                },
                dotted: function(b, c, d, e, f, h, i, j, k) {
                    if (!f) return this;
                    b = m(f, b), c = m(f, c), d = m(f, d), e = m(f, e);
                    var l, n = a.distanceP2P(b, c, d, e);
                    if (0 >= i || i >= n || b != d && c != e) return this.line(b, c, d, e, f, h, k);
                    (b > d || c > e) && (l = b, b = d, d = l, l = c, c = e, e = l), this.save().gCo(k).strokeStyle(!0, f, h).beginPath().moveTo(b, c);
                    var o = i * (j || 1),
                        p = g(n / (i + o)),
                        q = n - p * (i + o) > i,
                        r = c == e;
                    p = q ? p + 1 : p;
                    for (var s = 1; p >= s; s++) this.lineTo(r ? b + i * s + o * (s - 1) : b, r ? c : c + i * s + o * (s - 1)).moveTo(r ? b + (i + o) * s : b, r ? c : c + (i + o) * s);
                    return q || this.lineTo(d, e), this.stroke(!0).restore()
                },
                line: function(a, b, c, d, e, f, g) {
                    return e ? (this.save().gCo(g), this.beginPath().strokeStyle(!0, e, f).moveTo(m(e, a), m(e, b)).lineTo(m(e, c), m(e, d)).stroke(!0).restore()) : this
                },
                round: function(a, b, c, d, e, f) {
                    return this.arc(a, b, c, 0, 0, h, d, !!f, e, f)
                },
                round0: function(a, b, c, d, e) {
                    return this.arc(a.x, a.y, b, 0, 0, h, c, !!e, d, e)
                },
                fillRect: function(a, b, c, d) {
                    return this.c.fillRect(a, b, c, d), this
                },
                translate: function(a, b) {
                    return this.c.translate(a, b), this
                },
                rotate: function(a) {
                    return this.c.rotate(a), this
                },
                clearRect: function(a, b, c, d) {
                    return a = a || 0, b = b || 0, c = c || this.canvas.width, d = d || this.canvas.height, this.c.clearRect(a, b, c, d), this
                },
                gCo: function(a) {
                    return a ? this.gCO(a) : this
                },
                gCO: function(a) {
                    return this.c.globalCompositeOperation = a ? "destination-over" : "source-over", this
                },
                box: function(b, d, e, i, j, k, l, n, o) {
                    if (j = j || {
                            enable: 0
                        }, j.enable) {
                        var p = j.width,
                            q = j.color,
                            r = j.radius,
                            s = a.isNumber(p);
                        p = a.parsePadding(p), p[0] == p[1] && p[1] == p[2] && p[2] == p[3] && (s = !0), n = n ? 1 : -1, e += n * (p[1] + p[3]) / 2, i += n * (p[0] + p[2]) / 2, b -= n * (p[3] / 2), d -= n * (p[0] / 2), p = s ? p[0] : p, r = s && r && 0 != r && "0" != r ? a.parsePadding(r) : 0
                    }
                    return this.save().gCo(o).fillStyle(k).strokeStyle(s, p, q), r ? this.beginPath().moveTo(m(p, b + r[0]), m(p, d)).lineTo(m(p, b + e - r[1]), m(p, d)).arc2(m(p, b + e - r[1]), m(p, d + r[1]), r[1], 3 * c / 2, h).lineTo(m(p, b + e), m(p, d + i - r[2])).arc2(m(p, b + e - r[2]), m(p, d + i - r[2]), r[2], 0, c / 2).lineTo(m(p, b + r[3]), m(p, d + i)).arc2(m(p, b + r[3]), m(p, d + i - r[3]), r[3], c / 2, c).lineTo(m(p, b), m(p, d + r[0])).arc2(m(p, b + r[0]), m(p, d + r[0]), r[0], c, 3 * c / 2).closePath().shadowOn(l).stroke(p).shadowOff().fill(k) : !j.enable || s ? (p && j.enable && (this.shadowOn(l).c.strokeRect(b, d, e, i), this.shadowOff()), k && this.fillRect(b, d, e, i)) : (p && (q = a.isArray(q) ? q : [q, q, q, q], this.shadowOn(l).line(b + e, d + p[0] / 2, b + e, d + i - p[0] / 2, p[1], q[1], 0).line(b, d + p[0] / 2, b, d + i - p[0] / 2, p[3], q[3], 0).line(g(b - p[3] / 2), d, b + e + p[1] / 2, d, p[0], q[0], 0).line(g(b - p[3] / 2), d + i, b + e + p[1] / 2, d + i, p[2], q[2], 0).shadowOff()), k && this.beginPath().moveTo(g(b + p[3] / 2), g(d + p[0] / 2)).lineTo(f(b + e - p[1] / 2), d + p[0] / 2).lineTo(f(b + e - p[1] / 2), f(d + i - p[2] / 2)).lineTo(g(b + p[3] / 2), f(d + i - p[2] / 2)).lineTo(g(b + p[3] / 2), g(d + p[0] / 2)).closePath().fill(k)), this.restore()
                },
                toDataURL: function(a) {
                    return this.canvas.toDataURL(a || "image/png")
                },
                addEvent: function(b, c, d) {
                    a.Event.addEvent(this.canvas, b, c, d)
                }
            }, a.taylor = {
                light: function(a, b) {
                    b.highlight = !1, a.on("mouseover", function() {
                        b.highlight = !0, a.redraw("mouseover")
                    }).on("mouseout", function() {
                        b.highlight = !1, a.redraw("mouseout")
                    }).on("beforedraw", function() {
                        return a.push("f_color", b.highlight ? a.get("light_color") : a.get("f_color_")), !0
                    })
                }
            }, a.Chart = a.extend(a.Painter, {
                configure: function() {
                    a.Chart.superclass.configure.apply(this, arguments), this.type = "chart", this.dataType = "simple", this.set({
                        id: "",
                        render: "",
                        data: [],
                        width: void 0,
                        height: void 0,
                        lineJoin: "round",
                        align: "center",
                        default_mouseover_css: !0,
                        turn_off_touchmove: !1,
                        showpercent: !1,
                        decimalsnum: 1,
                        empty: {
                            text: "No data found",
                            fontsize: 16
                        },
                        title: {
                            text: "",
                            fontweight: "bold",
                            fontsize: 20,
                            height: 30
                        },
                        subtitle: {
                            text: "",
                            fontweight: "bold",
                            fontsize: 16,
                            height: 20
                        },
                        footnote: {
                            text: "",
                            color: "#5d7f97",
                            textAlign: "right",
                            height: 20
                        },
                        animation: !1,
                        doAnimation: null,
                        animation_timing_function: "easeInOut",
                        animation_duration: 1e3,
                        z_index: 999,
                        legend: {
                            enable: !1
                        },
                        tip: {
                            enable: !1
                        }
                    }), this.registerEvent("beforeAnimation", "afterAnimation", "resize", "animating"), this.T = null, this.Rendered = !1, this.Combination = !1, this.Animationed = !1, this.show = !1, this.data = [], this.plugins = [], this.components = [], this.oneways = [], this.total = 0, this.ICHARTJS_CHART = !0
                },
                toDataURL: function(a) {
                    return this.T.toDataURL(a)
                },
                segmentRect: function() {
                    this.Combination || this.T.clearRect()
                },
                resetCanvas: function() {
                    this.Combination || this.T.box(this.get("l_originx"), this.get("t_originy"), this.get("client_width"), this.get("client_height"), 0, this.get("f_color"), 0, 0, !0)
                },
                animation: function(b) {
                    b.segmentRect(), b.coo && !b.ILLUSIVE_COO && b.coo.draw(), b.doAnimation(b.variable.animation.time, b.duration, b), b.plugins.each(function(a) {
                        a.A_draw && (a.variable.animation.animating = !0, a.variable.animation.time = b.variable.animation.time, a.draw(), a.variable.animation.animating = !1)
                    }), b.Combination || (b.oneways.each(function(a) {
                        a.draw()
                    }), b.variable.animation.time < b.duration ? (b.variable.animation.time++, a.requestAnimFrame(function() {
                        b.animation(b)
                    })) : a.requestAnimFrame(function() {
                        b.Animationed = !0, b.plugins.each(function(a) {
                            a.Animationed = !0
                        }), b.processAnimation = !1, b.draw(), b.plugins.each(function(a) {
                            a.processAnimation = !1
                        }), b.fireEvent(b, "afterAnimation", [b])
                    }))
                },
                runAnimation: function(a) {
                    a.fireEvent(a, "beforeAnimation", [a]), a.A_draw || (a.variable.animation = {
                        type: 0,
                        time: 0,
                        queue: []
                    }), a.processAnimation = !0, a.animation(a)
                },
                doSort: function() {
                    var b = function(b, c) {
                        return (a.isArray(b) ? b.zIndex || 0 : b.get("z_index")) > (a.isArray(c) ? c.zIndex || 0 : c.get("z_index"))
                    };
                    this.components.sor(b), this.oneways.sor(b)
                },
                commonDraw: function(b, c) {
                    return b.show = !1, b.redraw || (a.Assert.isTrue(b.Rendered, b.type + " has not rendered"), b.doSort()), b.redraw = !0, !b.Animationed && b.get("animation") ? (b.runAnimation(b), void 0) : (b.segmentRect(), b.components.eachAll(function(a) {
                        a.draw(c)
                    }), b.components.eachAll(function(a) {
                        a.last && a.last(a)
                    }), b.oneways.each(function(a) {
                        a.draw()
                    }), b.show = !0, void 0)
                },
                plugin: function(a) {
                    var b = this._();
                    a.inject(b), a.ICHARTJS_CHART && (a.Combination = !0, a.setUp()), b.get("animation") || a.push("animation", !1), a.duration = b.duration, b.register(a), b.plugins.push(a)
                },
                destroy: function(a) {
                    a.components.eachAll(function(a) {
                        a.destroy(a)
                    }), a.oneways.each(function(a) {
                        a.destroy(a)
                    })
                },
                getTitle: function() {
                    return this.title
                },
                getSubTitle: function() {
                    return this.subtitle
                },
                getFootNote: function() {
                    return this.footnote
                },
                getDrawingArea: function() {
                    return {
                        x: this.get("l_originx"),
                        x: this.get("t_originy"),
                        width: this.get("client_width"),
                        height: this.get("client_height")
                    }
                },
                create: function(c, d) {
                    if (c.get("fit")) {
                        var e = window.innerWidth,
                            f = window.innerHeight,
                            g = a.getDoc().body.style;
                        g.padding = "0px", g.margin = "0px", g.overflow = "hidden", c.push(c.W, e), c.push(c.H, f)
                    }
                    c.canvasid = a.uid(c.type), c.shellid = "shell-" + c.canvasid;
                    var h = [];
                    h.push("<div id='"), h.push(c.shellid), h.push("' style='padding:0px;margin:0px auto;overflow:hidden;position:relative;'>"), h.push("<canvas id= '"), h.push(c.canvasid), h.push("' style='-webkit-text-size-adjust: none;'>"), h.push("<p>Your browser does not support the canvas element</p></canvas>"), h.push("</div>"), d.innerHTML = h.join(""), c.shell = a(c.shellid), c.T = c.target = new b(c.canvasid), c.size(c), c.Rendered = !0
                },
                setUp: function() {
                    var a = this._();
                    a.redraw = !1, a.T.clearRect(), a.initialize()
                },
                load: function(a) {
                    var b = this._();
                    b.push("data", a || []), b.setUp(), (b.Combination ? b.root : b).draw()
                },
                resize: function(b, c) {
                    b = a.parseFloat(b), c = a.parseFloat(c);
                    var d = this._();
                    d.Combination || (d.width = d.push(d.W, b), d.height = d.push(d.H, c), d.size(d)), d.setUp(), d.plugins.eachAll(function(a) {
                        a.Combination && a.resize(b, c)
                    }), d.Combination || d.draw(), d.set(d.fireEvent(d, "resize", [b, c]))
                },
                size: function(b) {
                    var c = a.ratio,
                        d = b.pushIf(b.W, 400),
                        e = b.pushIf(b.H, 300),
                        f = b.T.canvas;
                    b.shell.style.width = f.style.width = d + "px", b.shell.style.height = f.style.height = e + "px", f.width = (b.width = d) * c, f.height = (b.height = e) * c, c > 1 && b.T.c.scale(c, c)
                },
                initialize: function() {
                    var b = this._(),
                        c = b.get("data"),
                        d = b.get("render");
                    b.push(b.X, null), b.push(b.Y, null), b.Combination ? (a.apply(b.options, a.clone([b.W, b.H, "padding", "border", "client_height", "client_width", "minDistance", "maxDistance", "centerx", "centery", "l_originx", "r_originx", "t_originy", "b_originy"], b.root.options, !0)), b.width = b.get(b.W), b.height = b.get(b.H), b.shell = b.root.shell, b.Rendered = !0) : b.Rendered || d && b.create(b, a(d)), b.Rendered && (a.isString(b.get("url")) && !c ? b.ajax.call(b, b.get("url"), function(a) {
                        b.push("data", a), b.initialize(), b.draw()
                    }) : p.call(b, c || [], b))
                },
                eventOff: function() {
                    this.stopEvent = !0
                },
                eventOn: function() {
                    this.stopEvent = !1
                },
                oneWay: function(b) {
                    b.T.strokeStyle(!0, 0, b.get("strokeStyle"), b.get("lineJoin")), b.processAnimation = b.get("animation"), a.isFunction(b.get("doAnimation")) && (b.doAnimation = b.get("doAnimation")), b.animationArithmetic = a.getAA(b.get("animation_timing_function"));
                    var c, d, e = [b.components, b.oneways],
                        g = b.variable.event,
                        h = b.Combination,
                        i = !b.get("turn_off_touchmove") && !h,
                        j = !a.touch && b.get("default_mouseover_css") && !h,
                        k = a.touch ? ["touchstart", "touchmove"] : ["click", "mousemove"];
                    b.stopEvent = !1, b.A_draw = h && b.processAnimation, a.register(b), h || k.each(function(c) {
                        b.T.addEvent(c, function(d) {
                            b.processAnimation || b.stopEvent || d.targetTouches && 1 != d.targetTouches.length || b.fireEvent(b, c, [b, a.Event.fix(d)])
                        }, !1)
                    }), b.on(k[0], function(a, b) {
                        return e.eachAll(function(a) {
                            if (a.ICHARTJS_CHART) {
                                if (a.fireEvent(a, k[0], [a, b])) return g.click = !0, !1
                            } else {
                                var c = a.isMouseOver(b);
                                if (c.valid) return g.click = !0, a.fireEvent(a, "click", [a, b, c]), !b.stopPropagation
                            }
                        }), g.click ? (i && b.event.preventDefault(), g.click = !1, !0) : void 0
                    }), (!a.touch || i) && (b.on(k[1], function(a, b) {
                        return c = d = !1, e.eachAll(function(a) {
                            if (!a.ICHARTJS_CHART) {
                                var d = a.variable.event,
                                    e = a.isMouseOver(b);
                                if (e.valid) {
                                    if (c = c || a.atomic, d.mouseover || (d.mouseover = !0, a.fireEvent(a, "mouseover", [a, b, e])), a.fireEvent(a, "mousemove", [a, b, e]), e.stop) return !1
                                } else d.mouseover && (d.mouseover = !1, a.fireEvent(a, "mouseout", [a, b, e]));
                                return !b.stopPropagation
                            }
                            return a.fireEvent(a, k[1], [a, b]) ? (c = !0, !1) : void 0
                        }), g.mouseover ? (b.event.preventDefault(), c || (g.mouseover = !1, a.fireEvent(a, "mouseout", [a, b])), g.mouseover) : (c && (g.mouseover = c, a.fireEvent(a, "mouseover", [a, b])), void 0)
                    }), j && b.on("mouseover", function() {
                        b.T.css("cursor", "pointer")
                    }).on("mouseout", function() {
                        b.T.css("cursor", "default")
                    })), b.Combination || (b.bg = new a.Custom({
                        z_index: -1,
                        drawFn: function() {
                            b.T.box(0, 0, b.width, b.height, b.get("border"), b.get("f_color"), 0, 0, !0)
                        }
                    }), b.duration = f(b.get("animation_duration") * a.FRAME / 1e3)), b.oneWay = a.emptyFn
                },
                originXY: function(a, b, c) {
                    var d = a.get("align");
                    return d == a.L ? a.pushIf(a.X, b[0]) : d == a.R ? a.pushIf(a.X, b[1]) : a.pushIf(a.X, b[2]), a.x = a.push(a.X, a.get(a.X) + a.get("offsetx")), a.y = a.push(a.Y, c[0] + a.get("offsety")), {
                        x: a.x,
                        y: a.y
                    }
                },
                getPercent: function(a, b) {
                    return this.get("showpercent") ? (100 * (a / (b || this.total || 1))).toFixed(this.get("decimalsnum")) + "%" : a
                },
                doActing: function(b, c, d, e, f) {
                    var g = !!b.get("communal_acting"),
                        h = b.getPercent(c.value, c.total);
                    b.push(g ? "sub_option" : "communal_acting", a.clone(b.get(g ? "communal_acting" : "sub_option"), !0)), a.merge(b.get("sub_option"), c), a.merge(b.get("sub_option"), d), b.push("sub_option.value", h), b.push("sub_option.value_", c.value), b.get("sub_option.tip.enable") && (b.push("sub_option.tip.text", f || c.name + " " + h), b.push("sub_option.tip.name", c.name), b.push("sub_option.tip.index", e), b.push("sub_option.tip.value", c.value), b.push("sub_option.tip.total", c.total || b.total))
                },
                register: function(b) {
                    return b.id = a.uid(b.type), this.components.push(b), b
                },
                isE: function() {
                    return !this.data.length
                },
                remove: function(a, b) {
                    b && a.components.each(function(c, d) {
                        return b.id == c.id ? (a.components.splice(d, 1), !1) : void 0
                    })
                },
                merge: function(b, c) {
                    var d = this._();
                    a.isString(d.get(b)) && d.push(b, a.applyIf({
                        text: d.get(b)
                    }, d.default_[b])), c && "" != d.get(b).text && c(d)
                },
                doConfig: function() {
                    a.Chart.superclass.doConfig.call(this);
                    var b = this._();
                    if (b.destroy(b), b.oneways.length = 0, b.oneWay(b), b.get("shadow") !== !1 && b.push("shadow", {
                            color: b.get("shadow_color"),
                            blur: b.get("shadow_blur"),
                            offsetx: b.get("shadow_offsetx"),
                            offsety: b.get("shadow_offsety")
                        }), a.apply(b.get("sub_option"), a.clone(["shadow", "tip"], b.options, !0)), b.push("communal_acting", 0), !b.Combination) {
                        b.oneways.push(b.bg), b.push("r_originx", b.width - b.get("padding_right")), b.push("b_originy", b.height - b.get("padding_bottom")), b.applyGradient();
                        var c, d = 0,
                            e = b.push("l_originx", b.get("padding_left")),
                            f = b.push("t_originy", b.get("padding_top")),
                            g = b.push("client_width", b.width - b.get("hpadding"));
                        b.merge("subtitle"), b.merge("title", function() {
                            var c = "" != b.get("subtitle.text");
                            d = c ? b.get("title.height") + b.get("subtitle.height") : b.get("title.height"), f = b.push("t_originy", f + d), b.push("title.originx", e), b.push("title.originy", b.get("padding_top")), b.push("title.maxwidth", g), b.pushIf("title.width", g), b.title = new a.Text(b.get("title"), b), b.oneways.push(b.title), c && (b.push("subtitle.originx", e), b.push("subtitle.originy", b.get("padding_top") + b.get("title.height")), b.pushIf("subtitle.width", g), b.push("subtitle.maxwidth", g), b.subtitle = new a.Text(b.get("subtitle"), b), b.oneways.push(b.subtitle))
                        }), b.merge("footnote", function() {
                            var c = b.get("footnote.height");
                            d += c, b.push("b_originy", b.get("b_originy") - c), b.push("footnote.originx", e), b.push("footnote.originy", b.get("b_originy")), b.push("footnote.maxwidth", g), b.pushIf("footnote.width", g), b.footnote = new a.Text(b.get("footnote"), b), b.oneways.push(b.footnote)
                        }), c = b.push("client_height", b.get(b.H) - b.get("vpadding") - b.pushIf("other_height", d)), b.push("minDistance", j(g, c)), b.push("maxDistance", i(g, c)), b.push("centerx", e + g / 2), b.push("centery", f + c / 2)
                    }
                    b.isE() && b.merge("empty", function() {
                        b.push("empty.originx", b.get("centerx")), b.push("empty.originy", b.get("centery")), b.push("empty.textBaseline", "middle"), b.empty = new a.Text(b.get("empty"), b), b.oneways.push(b.empty)
                    }), b.get("legend.enable") && (b.legend = new a.Legend(a.apply({
                        maxwidth: b.get("client_width"),
                        data: b.data
                    }, b.get("legend")), b), b.oneways.push(b.legend)), b.push("sub_option.tip.wrap", b.push("tip.wrap", b.shell))
                }
            })
        }(a), a.Custom = a.extend(a.Component, {
            configure: function() {
                a.Custom.superclass.configure.apply(this, arguments), this.type = "custom", this.set({
                    drawFn: a.emptyFn,
                    configFn: a.emptyFn,
                    eventValid: void 0,
                    animating_draw: !0
                })
            },
            doDraw: function(a) {
                a.get("drawFn").call(a, a)
            },
            isEventValid: function(b, c) {
                return a.isFunction(this.get("eventValid")) ? this.get("eventValid").call(this, b, c) : {
                    valid: !1
                }
            },
            doConfig: function() {
                a.Custom.superclass.doConfig.call(this);
                var b = this._();
                b.A_draw = b.get("animating_draw"), b.variable.animation = {
                    animating: !1,
                    time: 0
                }, b.duration = 0, b.get("configFn").call(b, b)
            }
        }), a.Scale = a.extend(a.Component, {
            configure: function() {
                a.Scale.superclass.configure.apply(this, arguments), this.type = "scale", this.set({
                    position: "left",
                    which: "h",
                    basic_value: 0,
                    scale2grid: !0,
                    distance: void 0,
                    start_scale: 0,
                    end_scale: void 0,
                    min_scale: void 0,
                    max_scale: void 0,
                    scale_space: void 0,
                    scale_share: 5,
                    scale_enable: !0,
                    scale_size: 1,
                    scale_width: 4,
                    scale_color: "#333333",
                    scaleAlign: "center",
                    labels: [],
                    label: {},
                    text_space: 6,
                    textAlign: "left",
                    decimalsnum: 0,
                    join_style: "none",
                    join_size: 2
                }), this.registerEvent("parseText")
            },
            isEventValid: function() {
                return {
                    valid: !1
                }
            },
            getScale: function(b) {
                var c = [b.get("basic_value"), b.get("start_scale"), b.get("end_scale"), b.get("end_scale") - b.get("start_scale"), 0];
                return c[4] = a.inRange(c[1], c[2] + 1, c[0]) || a.inRange(c[2] - 1, c[1], c[0]), {
                    range: c[4],
                    basic: c[4] ? (c[0] - c[1]) / c[3] : 0,
                    start: c[4] ? c[0] : c[1],
                    end: c[2],
                    distance: c[3]
                }
            },
            doDraw: function(a) {
                a.get("scale_enable") && a.items.each(function(b) {
                    a.T.line(b.x0, b.y0, b.x1, b.y1, a.get("scale_size"), a.get("scale_color"), !1)
                }), a.labels.each(function(a) {
                    a.draw()
                })
            },
            doLayout: function(a, b, c) {
                c.get("scale_enable") && c.items.each(function(c) {
                    c.x0 += a, c.y0 += b, c.x1 += a, c.y1 += b
                }), c.labels.each(function(c) {
                    c.doLayout(a, b, 0, c)
                })
            },
            doConfig: function() {
                a.Scale.superclass.doConfig.call(this);
                var b = this._(),
                    c = Math.abs,
                    d = b.get("labels").length,
                    e = b.get("min_scale"),
                    f = b.get("max_scale"),
                    g = b.get("scale_space"),
                    h = b.get("end_scale"),
                    i = b.get("start_scale");
                if (b.items = [], b.labels = [], b.number = 0, d > 0) b.number = d - 1;
                else {
                    if (i > e && (i = b.push("start_scale", a.floor(e))), (!a.isNumber(h) || f > h) && (h = a.ceil(f), h = b.push("end_scale", h || i ? h : 1)), g && c(g) < c(h - i) && b.push("scale_share", (h - i) / g), b.number = b.push("scale_share", c(b.get("scale_share"))), !g || g > h - i) {
                        for (var j = (h - i + "").indexOf(".") + 1, k = 1; j > 0;) j--, k *= 10;
                        g = b.push("scale", (h - i) * k / b.get("scale_share") / k)
                    }
                    parseInt(g) != g && 0 == b.get("decimalsnum") && b.push("decimalsnum", (g + "").substring((g + "").indexOf(".") + 1).length)
                }
                b.push("distanceOne", b.get("valid_distance") / b.number);
                var l, m, n, o = 0,
                    p = 0,
                    q = 0,
                    r = 0,
                    s = 0,
                    t = 0,
                    u = b.get("scale_width"),
                    v = u / 2,
                    w = b.get("scaleAlign"),
                    x = b.get("position"),
                    y = b.get("text_space"),
                    z = "",
                    A = b.get("coo").get("axis.width");
                b.push("which", b.get("which").toLowerCase()), b.isH = "h" == b.get("which"), b.isH ? (w == b.O ? r = -u : w == b.C ? (r = -v, p = v) : p = u, x == b.O ? (t = -y - A[0], z = b.B) : (t = y + A[2], z = b.O), x = b.C) : (w == b.L ? q = -u : w == b.C ? (q = -v, o = v) : o = u, z = "middle", x == b.R ? (x = b.L, s = y + A[1]) : (x = b.R, s = -y - A[3]));
                for (var B = 0; B <= b.number; B++) l = d ? b.get("labels")[B] : (g * B + i).toFixed(b.get("decimalsnum")), m = b.isH ? b.get("valid_x") + B * b.get("distanceOne") : b.x, n = b.isH ? b.y : b.get("valid_y") + b.get("valid_distance") - B * b.get("distanceOne"), b.items.push({
                    x: m,
                    y: n,
                    x0: m + q,
                    y0: n + r,
                    x1: m + o,
                    y1: n + p
                }), b.get("label") && b.labels.push(new a.Text(a.applyIf(a.apply(b.get("label"), a.merge({
                    text: l,
                    x: m,
                    y: n,
                    originx: m + s,
                    originy: n + t
                }, b.fireEvent(b, "parseText", [l, m + s, n + t, B, b.number == B]))), {
                    textAlign: x,
                    textBaseline: z
                }), b))
            }
        }), a.Coordinate = {
            coordinate_: function(b) {
                var c = this._(),
                    d = c.get("coordinate"),
                    e = c.get("scaleAlign");
                if (d.ICHARTJS_OBJECT) return c.x = c.push(c.X, d.x), c.y = c.push(c.Y, d.y), c.ILLUSIVE_COO = !0, d.refresh(c.get("minValue"), c.get("maxValue"), e), d;
                var f = "85%",
                    g = a.parsePercent,
                    i = c.get("coordinate.scale"),
                    j = c.push("coordinate._width", g(c.get("coordinate.width") || f, Math.floor(c.get("client_width"))));
                if (h = c.push("coordinate._height", g(c.get("coordinate.height") || f, Math.floor(c.get("client_height"))) - (c.is3D() ? (c.get("coordinate.pedestal_height") || 22) + (c.get("coordinate.board_deep") || 20) : 0)), c.push("coordinate.valid_height_value", g(c.get("coordinate.valid_height"), h)), c.push("coordinate.valid_width_value", g(c.get("coordinate.valid_width"), j)), c.originXY(c, [c.get("l_originx"), c.get("r_originx") - j, c.get("centerx") - j / 2], [c.get("centery") - h / 2]), c.set({
                        coordinate: {
                            originx: c.x,
                            originy: c.y,
                            id: "coordinate"
                        }
                    }), b && b(), a.isObject(i) && (i = [i]), a.isArray(i)) {
                    var k = "stacked" != c.dataType;
                    i.each(function(b) {
                        c.get("percent") && b.position == e && (b = a.apply(b, {
                            start_scale: 0,
                            end_scale: 100,
                            scale_space: 10,
                            listeners: {
                                parseText: function(a) {
                                    return {
                                        text: a + "%"
                                    }
                                }
                            }
                        })), (!b.start_scale || k && !b.assign_scale && b.start_scale > c.get("minValue")) && (b.min_scale = c.get("minValue")), (!b.end_scale || k && !b.assign_scale && b.end_scale < c.get("maxValue")) && (b.max_scale = c.get("maxValue"))
                    })
                } else c.push("coordinate.scale", {
                    position: e,
                    scaleAlign: e,
                    max_scale: c.get("maxValue"),
                    min_scale: c.get("minValue")
                });
                return c.is3D() && c.set({
                    coordinate: {
                        xAngle_: c.get("xAngle_"),
                        yAngle_: c.get("yAngle_"),
                        zHeight: c.get("zHeight") * c.get("bottom_scale")
                    }
                }), c.remove(c, c.coo), c.isE() ? void 0 : c.register(new(a[c.is3D() ? "Coordinate3D" : "Coordinate2D"])(c.get("coordinate"), c))
            }
        }, a.Coordinate2D = a.extend(a.Component, {
            configure: function() {
                a.Coordinate2D.superclass.configure.apply(this, arguments), this.type = "coordinate2d", this.set({
                    sign_size: 12,
                    sign_space: 5,
                    scale: [],
                    width: "85%",
                    height: "85%",
                    valid_width: "100%",
                    valid_height: "100%",
                    grid_line_width: 1,
                    grid_color: "#dbe1e1",
                    gridHStyle: {},
                    gridVStyle: {},
                    gridlinesVisible: !0,
                    scale2grid: !0,
                    grids: void 0,
                    ignoreOverlap: !0,
                    ignoreEdge: !1,
                    xlabel: "",
                    ylabel: "",
                    background_color: 0,
                    striped: !0,
                    striped_direction: "v",
                    striped_factor: .01,
                    crosshair: {
                        enable: !1
                    },
                    z_index: -1,
                    axis: {
                        enable: !0,
                        color: "#666666",
                        width: 1
                    }
                }), this.scale = [], this.gridlines = []
            },
            refresh: function(a, b, c) {
                this.scale.each(function(d) {
                    if (d.get("position") == c) {
                        var e;
                        return (!d.get("assign_scale") || d.get("end_scale") < b) && (d.push("max_scale", d.push("end_scale", b)), e = !0), (!d.get("assign_scale") || d.get("start_scale") > a) && (d.push("min_scale", d.push("start_scale", a)), e = !0), e && d.doConfig(), !1
                    }
                })
            },
            getScale: function(a, b) {
                for (var c = this._(), d = 0; d < c.scale.length; d++)
                    if (c.scale[d].get("position") == a) return c.scale[d].getScale(c.scale[d]);
                if (!b) return a = a == c.L ? c.R : a == c.R ? c.L : a == c.O ? c.B : c.O, c.getScale(a, !0);
                throw new Error("No_Valid_Scale")
            },
            isEventValid: function(a, b) {
                return {
                    valid: a.x > b.x && a.x < b.x + b.width && a.y < b.y + b.height && a.y > b.y
                }
            },
            doDraw: function(b) {
                if (b.T.box(b.x, b.y, b.width, b.height, 0, b.get("f_color")), b.get("striped")) var c, d, e = !1,
                    f = (b.get("axis.width"), a.dark(b.get("background_color"), b.get("striped_factor"), 0));
                var g = "v" == b.get("striped_direction");
                b.gridlines.each(function(a) {
                    b.get("striped") && (e && (g ? b.T.box(a.x1, a.y1 + a.width, a.x2 - a.x1, d - a.y1 - a.width, 0, f) : b.T.box(c + a.width, a.y2, a.x1 - c, a.y1 - a.y2, 0, f)), c = a.x1, d = a.y1, e = !e)
                }).each(function(a) {
                    a.overlap || (a.solid ? b.T.line(a.x1, a.y1, a.x2, a.y2, a.width, a.color) : b.T.dotted(a.x1, a.y1, a.x2, a.y2, a.width, a.color, a.size, a.fator))
                }), b.T.box(b.x, b.y, b.width, b.height, b.get("axis"), !1, b.get("shadow"), !0), b.scale.each(function(a) {
                    a.draw()
                })
            },
            destroy: function() {
                this.crosshair && this.crosshair.destroy()
            },
            doCrosshair: function(b) {
                b.get("crosshair.enable") && !b.crosshair && (b.push("crosshair.wrap", b.root.shell), b.push("crosshair.height", b.height), b.push("crosshair.width", b.width), b.push("crosshair.top", b.y), b.push("crosshair.left", b.x), b.crosshair = new a.CrossHair(b.get("crosshair"), b))
            },
            doConfig: function() {
                a.Coordinate2D.superclass.doConfig.call(this);
                var b = this._();
                if (b.atomic = !1, b.width = b.get("_width"), b.height = b.get("_height"), b.valid_width = b.get("valid_width_value"), b.valid_height = b.get("valid_height_value"), b.get("gradient") && a.isString(b.get("f_color")) && b.push("f_color", b.T.avgLinearGradient(b.x, b.y, b.x, b.y + b.height, [b.get("dark_color"), b.get("light_color")])), b.get("axis.enable")) {
                    var c = b.get("axis.width");
                    a.isArray(c) || b.push("axis.width", [c, c, c, c])
                } else b.push("axis.width", [0, 0, 0, 0]);
                b.doCrosshair(b);
                var d, e = !(!b.get("gridlinesVisible") || !b.get("grids")),
                    f = e && !!b.get("grids.horizontal"),
                    g = e && !!b.get("grids.vertical"),
                    h = b.height,
                    i = b.width,
                    j = b.valid_width,
                    k = b.valid_height,
                    l = b.get("gridlinesVisible") && b.get("scale2grid") && !(f && g),
                    m = b.push("x_start", b.x + (i - j) / 2),
                    n = b.push("y_start", b.y + (h - k) / 2),
                    o = b.get("axis.width");
                b.push("x_end", b.x + (i + j) / 2), b.push("y_end", b.y + (h + k) / 2), a.isArray(b.get("scale")) || (a.isObject(b.get("scale")) ? b.push("scale", [b.get("scale")]) : b.push("scale", [])), b.get("scale").each(function(c) {
                    d = c.position, d = d || b.L, d = d.toLowerCase(), c[b.X] = b.x, c.coo = b, c[b.Y] = b.y, c.valid_x = m, c.valid_y = n, c.position = d, d == b.O ? (c.which = "h", c.distance = i, c.valid_distance = j) : d == b.R ? (c.which = "v", c.distance = h, c.valid_distance = k, c[b.X] += i, c.valid_x += j) : d == b.B ? (c.which = "h", c.distance = i, c.valid_distance = j, c[b.Y] += h, c.valid_y += k) : (c.which = "v", c.distance = h, c.valid_distance = k), c.label = a.applyIf(c.label || {}, b.get("label")), b.scale.push(new a.Scale(c, b.root))
                }, b);
                var p = b.push("ignoreOverlap", b.get("ignoreOverlap") && b.get("axis.enable") || b.get("ignoreEdge"));
                if (p)
                    if (b.get("ignoreEdge")) var q = function(a, c, d) {
                        return "v" == a ? d == b.y || d == b.y + h : c == b.x || c == b.x + a
                    };
                    else var q = function(a, c, d) {
                        return "v" == a ? d == b.y && o[0] > 0 || d == b.y + h && o[2] > 0 : c == b.x && o[3] > 0 || c == b.x + i && o[1] > 0
                    };
                var r = {
                        solid: !0,
                        size: 10,
                        fator: 1,
                        width: b.get("grid_line_width"),
                        color: b.get("grid_color")
                    },
                    s = a.applyIf(b.get("gridHStyle"), r),
                    t = a.applyIf(b.get("gridVStyle"), r);
                if (l) {
                    var u, v, w;
                    b.scale.each(function(c) {
                        w = c.get("position"), a.isFalse(c.get("scale2grid")) || f && "v" == c.get("which") || g && "h" == c.get("which") || (u = v = 0, w == b.O ? v = h : w == b.R ? u = -i : w == b.B ? v = -h : u = i, c.items.each(function(d) {
                            p && b.gridlines.push(a.applyIf({
                                overlap: q.call(b, c.get("which"), d.x, d.y),
                                x1: d.x,
                                y1: d.y,
                                x2: d.x + u,
                                y2: d.y + v
                            }, c.isH ? t : s))
                        }))
                    })
                }
                if (g) {
                    var x = b.get("grids.vertical");
                    a.Assert.isTrue(x.value > 0, "vertical value");
                    var y = i / x.value,
                        z = x.value;
                    "given_value" == x.way && (z = y, y = x.value, y = y > i ? i : y);
                    for (var A = 0; z >= A; A++) p && b.gridlines.push(a.applyIf({
                        overlap: q.call(b, "h", b.x + A * y, b.y),
                        x1: b.x + A * y,
                        y1: b.y,
                        x2: b.x + A * y,
                        y2: b.y + h,
                        H: !1,
                        width: t.width,
                        color: t.color
                    }, t))
                }
                if (f) {
                    var B = b.get("grids.horizontal");
                    a.Assert.isTrue(B.value > 0, "horizontal value");
                    var y = h / B.value,
                        z = B.value;
                    "given_value" == B.way && (z = y, y = B.value, y = y > h ? h : y);
                    for (var A = 0; z >= A; A++) p && b.gridlines.push(a.applyIf({
                        overlap: q.call(b, "v", b.x, b.y + A * y),
                        x1: b.x,
                        y1: b.y + A * y,
                        x2: b.x + i,
                        y2: b.y + A * y,
                        H: !0,
                        width: s.width,
                        color: s.color
                    }, s))
                }
            }
        }), a.Coordinate3D = a.extend(a.Coordinate2D, {
            configure: function() {
                a.Coordinate3D.superclass.configure.apply(this, arguments), this.type = "coordinate3d", this.dimension = a._3D, this.set({
                    xAngle: 60,
                    yAngle: 20,
                    xAngle_: void 0,
                    yAngle_: void 0,
                    zHeight: 0,
                    pedestal_height: 22,
                    board_deep: 20,
                    left_board: !0,
                    gradient: !0,
                    color_factor: .18,
                    ignoreEdge: !0,
                    striped: !1,
                    grid_color: "#a4ad96",
                    background_color: "#d6dbd2",
                    shadow_offsetx: 4,
                    shadow_offsety: 2,
                    wall_style: [],
                    axis: {
                        enable: !1
                    }
                })
            },
            doDraw: function(a) {
                var b = a.width,
                    c = a.height,
                    d = a.get("xAngle_"),
                    e = a.get("yAngle_"),
                    f = a.get("zHeight"),
                    g = a.get("z_offx"),
                    h = a.get("z_offy");
                a.get("pedestal_height") && a.T.cube3D(a.x, a.y + c + a.get("pedestal_height"), d, e, !1, b, a.get("pedestal_height"), 3 * f / 2, a.get("axis.enable"), a.get("axis.width"), a.get("axis.color"), a.get("bottom_style")), a.get("board_deep") && a.T.cube3D(a.x + g, a.y + c - h, d, e, !1, b, c, a.get("board_deep"), a.get("axis.enable"), a.get("axis.width"), a.get("axis.color"), a.get("board_style")), a.T.cube3D(a.x, a.y + c, d, e, !1, b, c, f, a.get("axis.enable"), a.get("axis.width"), a.get("axis.color"), a.get("wall_style")), a.gridlines.each(function(b) {
                    b.solid ? (a.get("left_board") && a.T.line(b.x1, b.y1, b.x1 + g, b.y1 - h, b.width, b.color), a.T.line(b.x1 + g, b.y1 - h, b.x2 + g, b.y2 - h, b.width, b.color)) : (a.get("left_board") && a.T.dotted(b.x1, b.y1, b.x1 + g, b.y1 - h, b.width, b.color, b.size, b.fator), a.T.dotted(b.x1 + g, b.y1 - h, b.x2 + g, b.y2 - h, b.width, b.color, b.size, b.fator))
                }), a.scale.each(function(a) {
                    a.draw()
                })
            },
            doConfig: function() {
                a.Coordinate3D.superclass.doConfig.call(this);
                for (var b = this._(), c = b.get("wall_style"), d = b.get("background_color") || "#d6dbd2", e = b.height, f = b.width, g = b.get("color_factor"), h = b.push("z_offx", b.get("xAngle_") * b.get("zHeight")), i = b.push("z_offy", b.get("yAngle_") * b.get("zHeight")); c.length < 6;) c.push({
                    color: d
                });
                b.get("left_board") || (c[2] = !1, b.scale.each(function(a) {
                    a.doLayout(h, -i, a)
                })), b.push("bottom_style", [{
                    color: b.get("shadow_color"),
                    shadow: b.get("shadow")
                }, !1, !1, {
                    color: c[3].color
                }, !1, {
                    color: c[3].color
                }]), b.push("board_style", [!1, !1, !1, {
                    color: c[4].color
                }, {
                    color: c[5].color
                }, !1]), b.get("gradient") && (a.isString(c[0].color) && (c[0].color = b.T.avgLinearGradient(b.x, b.y + e, b.x + f, b.y + e, [a.dark(c[0].color, g / 2 + .06), a.dark(c[0].color, g / 2 + .06)])), a.isString(c[1].color) && (c[1].color = b.T.avgLinearGradient(b.x + h, b.y - i, b.x + h, b.y + e - i, [a.dark(c[1].color, g), a.light(c[1].color, g)])), a.isString(c[2].color) && (c[2].color = b.T.avgLinearGradient(b.x, b.y, b.x, b.y + e, [a.light(c[2].color, g / 3), a.dark(c[2].color, g)])), b.get("bottom_style")[5].color = b.T.avgLinearGradient(b.x, b.y + e, b.x, b.y + e + b.get("pedestal_height"), [a.light(c[3].color, g / 2 + .06), a.dark(c[3].color, g / 2, 0)])), b.push("wall_style", [c[0], c[1], c[2]])
            }
        }), a.Rectangle = a.extend(a.Component, {
            configure: function() {
                a.Rectangle.superclass.configure.apply(this, arguments), this.type = "rectangle", this.set({
                    width: 0,
                    height: 0,
                    value_space: 4,
                    value: "",
                    label: {},
                    name: "",
                    tipAlign: "top",
                    valueAlign: "top",
                    shadow_blur: 3,
                    shadow_offsety: -1
                }), this.atomic = !0, this.registerEvent("parseText"), this.label = null
            },
            last: function(a) {
                a.label && a.label.draw()
            },
            doDraw: function(a) {
                a.drawRectangle()
            },
            doConfig: function() {
                a.Rectangle.superclass.doConfig.call(this);
                var b = this._(),
                    c = b.variable.event,
                    d = b.get("valueAlign");
                a.taylor.light(b, c), b.width = b.get(b.W), b.height = b.get(b.H);
                var e = b.push("centerx", b.x + b.width / 2),
                    f = b.push("centery", b.y + b.height / 2),
                    g = b.C,
                    h = "middle",
                    i = b.get("value_space");
                d == b.L ? (g = b.R, e = b.x - i) : d == b.R ? (g = b.L, e = b.x + b.width + i) : d == b.B ? (f = b.y + b.height + i, h = b.O) : d == b.O && (f = b.y - i, h = b.B), b.get("label") && (b.push("label.originx", e), b.push("label.originy", f), b.push("label.text", b.push("value", b.fireString(b, "parseText", [b, b.get("value")], b.get("value")))), a.applyIf(b.get("label"), {
                    textAlign: g,
                    textBaseline: h,
                    color: b.get("color")
                }), b.label = new a.Text(b.get("label"), b)), b.get("tip.enable") && ("follow" != b.get("tip.showType") && b.push("tip.invokeOffsetDynamic", !1), b.tip = new a.Tip(b.get("tip"), b))
            }
        }), a.Rectangle2D = a.extend(a.Rectangle, {
            configure: function() {
                a.Rectangle2D.superclass.configure.apply(this, arguments), this.type = "rectangle2d", this.set({
                    shadow_offsety: -2
                })
            },
            drawRectangle: function() {
                var a = this._();
                a.T.box(a.get(a.X), a.get(a.Y), a.get(a.W), a.get(a.H), a.get("border"), a.get("f_color"), a.get("shadow"))
            },
            isEventValid: function(a, b) {
                return {
                    valid: a.x > b.x && a.x < b.x + b.width && a.y < b.y + b.height && a.y > b.y
                }
            },
            tipInvoke: function() {
                var a = this._();
                return function(b, c) {
                    return {
                        left: a.tipX(b, c),
                        top: a.tipY(b, c)
                    }
                }
            },
            doConfig: function() {
                a.Rectangle2D.superclass.doConfig.call(this);
                var b = this._(),
                    c = b.get("tipAlign");
                c == b.L || c == b.R ? b.tipY = function(a, c) {
                    return b.get("centery") - c / 2
                } : b.tipX = function(a) {
                    return b.get("centerx") - a / 2
                }, c == b.L ? b.tipX = function(a) {
                    return b.x - b.get("value_space") - a
                } : c == b.R ? b.tipX = function() {
                    return b.x + b.width + b.get("value_space")
                } : b.tipY = c == b.B ? function() {
                    return b.y + b.height + 3
                } : function(a, c) {
                    return b.y - c - 3
                }, b.applyGradient()
            }
        }), a.Rectangle3D = a.extend(a.Rectangle, {
            configure: function() {
                a.Rectangle3D.superclass.configure.apply(this, arguments), this.type = "rectangle3d", this.dimension = a._3D, this.set({
                    zHeight: void 0,
                    xAngle: 60,
                    yAngle: 20,
                    xAngle_: void 0,
                    yAngle_: void 0,
                    shadow_offsetx: 2
                })
            },
            drawRectangle: function() {
                var a = this._();
                a.T.cube(a.get(a.X), a.get(a.Y), a.get("xAngle_"), a.get("yAngle_"), a.get(a.W), a.get(a.H), a.get("zHeight"), a.get("f_color"), a.get("border.enable"), a.get("border.width"), a.get("light_color"), a.get("shadow"))
            },
            isEventValid: function(a, b) {
                return {
                    valid: a.x > b.x && a.x < b.x + b.get(b.W) && a.y < b.y + b.get(b.H) && a.y > b.y
                }
            },
            tipInvoke: function() {
                var a = this._();
                return function(b, c) {
                    return {
                        left: a.topCenterX - b / 2,
                        top: a.topCenterY - c
                    }
                }
            },
            doConfig: function() {
                a.Rectangle3D.superclass.doConfig.call(this);
                var b = this._();
                b.pushIf("zHeight", b.get(b.W)), b.topCenterX = b.x + (b.get(b.W) + b.get(b.W) * b.get("xAngle_")) / 2, b.topCenterY = b.y - b.get(b.W) * b.get("yAngle_") / 2 - b.get("value_space"), b.get("valueAlign") == b.O && b.label && (b.label.push("textx", b.topCenterX), b.label.push("texty", b.topCenterY))
            }
        }), a.Sector = a.extend(a.Component, {
            configure: function() {
                a.Sector.superclass.configure.apply(this, arguments), this.type = "sector", this.set({
                    value: "",
                    name: "",
                    ignored: !1,
                    counterclockwise: !1,
                    startAngle: 0,
                    middleAngle: 0,
                    endAngle: 0,
                    totalAngle: 0,
                    bound_event: "click",
                    expand: !1,
                    donutwidth: 0,
                    mutex: !1,
                    increment: void 0,
                    label_length: void 0,
                    gradient_mode: "RadialGradientOutIn",
                    mini_label_threshold_angle: 15,
                    mini_label: !1,
                    label: {},
                    rounded: !1
                }), this.atomic = !0, this.registerEvent("changed", "parseText"), this.label = null, this.tip = null
            },
            bound: function() {
                this.expanded || this.toggle()
            },
            rebound: function() {
                this.expanded && this.toggle()
            },
            toggle: function() {
                this.fireEvent(this, this.get("bound_event"), [this])
            },
            getDimension: function() {
                var a = this._();
                return {
                    x: a.x,
                    x: a.y,
                    startAngle: a.get("startAngle"),
                    middleAngle: a.get("middleAngle"),
                    endAngle: a.get("endAngle")
                }
            },
            doDraw: function(a) {
                a.get("ignored") || (a.label && !a.get("mini_label") && a.label.draw(), a.drawSector(), a.label && a.get("mini_label") && a.label.draw())
            },
            doText: function(b, c, d) {
                b.push("label.originx", c), b.push("label.originy", d), b.push("label.textBaseline", "middle"), b.label = new a.Text(b.get("label"), b)
            },
            doLabel: function(b, c, d, e, f, g, h, i) {
                b.push("label.originx", c), b.push("label.originy", d), b.push("label.quadrantd", e), b.push("label.line_points", f), b.push("label.labelx", g), b.push("label.labely", h), b.push("label.smooth", i), b.push("label.angle", b.get("middleAngle") % (2 * Math.PI)), b.label = new a.Label(b.get("label"), b)
            },
            isLabel: function() {
                return this.get("label") && !this.get("mini_label")
            },
            doConfig: function() {
                a.Sector.superclass.doConfig.call(this);
                var b, c = this._(),
                    d = c.variable.event,
                    e = c.get("label"),
                    f = c.get("bound_event");
                return c.get("rounded") ? (c.push("startAngle", 0), c.push("endAngle", 2 * Math.PI), void 0) : (a.taylor.light(c, d), c.push("totalAngle", c.get("endAngle") - c.get("startAngle")), e && (c.get("mini_label") && (c.get("mini_label_threshold_angle") * Math.PI / 180 > c.get("totalAngle") ? c.push("mini_label", !1) : a.apply(c.get("label"), c.get("mini_label"))), c.push("label.text", c.fireString(c, "parseText", [c, c.get("label.text")], c.get("label.text"))), c.pushIf("label.border.color", c.get("border.color")), c.push("label.scolor", c.get("background_color"))), c.variable.event.status = c.expanded = c.get("expand"), c.get("tip.enable") && ("follow" != c.get("tip.showType") && c.push("tip.invokeOffsetDynamic", !1), c.tip = new a.Tip(c.get("tip"), c)), d.poped = !1, c.on(f, function() {
                    d.poped = !0, c.expanded = !c.expanded, c.redraw(f), d.poped = !1
                }), c.on("beforedraw", function(a, g) {
                    return g == f && (b = !1, c.x = c.get(c.X), c.y = c.get(c.Y), c.expanded && (c.get("mutex") && !d.poped ? (c.expanded = !1, b = !0) : (c.x += c.get("inc_x"), c.y -= c.get("inc_y"))), d.status != c.expanded && (c.fireEvent(c, "changed", [c, c.expanded]), b = !0, d.status = c.expanded), e && b && c.label.doLayout(c.get("inc_x") * (c.expanded ? 1 : -1), -c.get("inc_y") * (c.expanded ? 1 : -1), 2, c.label)), !0
                }), void 0)
            }
        }), a.Sector2D = a.extend(a.Sector, {
            configure: function() {
                a.Sector2D.superclass.configure.apply(this, arguments), this.type = "sector2d", this.set({
                    radius: 0
                })
            },
            drawSector: function() {
                this.T.sector(this.x, this.y, this.r, this.get("donutwidth"), this.get("startAngle"), this.get("endAngle"), this.get("f_color"), this.get("border.enable"), this.get("border.width"), this.get("border.color"), this.get("shadow"), this.get("counterclockwise"))
            },
            isEventValid: function(b, c) {
                if (!c.get("ignored")) {
                    if (c.isLabel() && c.label.isEventValid(b, c.label).valid) return {
                        valid: !0
                    };
                    var d = a.distanceP2P(c.x, c.y, b.x, b.y),
                        e = c.get("donutwidth");
                    if (c.r < d || e && c.r - e > d) return {
                        valid: !1
                    };
                    if (a.angleInRange(c.get("startAngle"), c.get("endAngle"), a.atan2Radian(c.x, c.y, b.x, b.y))) return {
                        valid: !0
                    }
                }
                return {
                    valid: !1
                }
            },
            tipInvoke: function() {
                var b = this,
                    c = b.get("middleAngle"),
                    d = a.quadrantd(c);
                return function(e, f) {
                    var g = a.p2Point(b.x, b.y, c, .8 * b.r);
                    return {
                        left: d >= 1 && 2 >= d ? g.x - e : g.x,
                        top: d >= 2 ? g.y - f : g.y
                    }
                }
            },
            doConfig: function() {
                a.Sector2D.superclass.doConfig.call(this);
                var b = this._();
                b.r = b.get("radius"), b.get("donutwidth") > b.r && b.push("donutwidth", 0), b.applyGradient(b.x - b.r, b.y - b.r, .9 * 2 * b.r, .9 * 2 * b.r);
                var c = b.get("middleAngle"),
                    d = b.pushIf("increment", a.lowTo(5, b.r / 10));
                if (b.push("inc_x", d * Math.cos(2 * Math.PI - c)), b.push("inc_y", d * Math.sin(2 * Math.PI - c)), d *= 2, b.get("label"))
                    if (b.get("mini_label")) P2 = a.p2Point(b.x, b.y, c, b.get("donutwidth") ? b.r - b.get("donutwidth") / 2 : 5 * b.r / 8), b.doText(b, P2.x, P2.y);
                    else {
                        var e = a.quadrantd(c),
                            f = a.p2Point(b.x, b.y, c, b.r + d),
                            g = a.p2Point(b.x, b.y, c, b.r + .6 * d);
                        P2 = a.p2Point(b.x, b.y, c, b.r), b.doLabel(b, P2.x, P2.y, e, [{
                            x: P2.x,
                            y: P2.y
                        }, {
                            x: g.x,
                            y: g.y
                        }, {
                            x: f.x,
                            y: f.y
                        }], f.x, f.y, .4 * d)
                    }
            }
        }), a.Sector3D = a.extend(a.Sector, {
            configure: function() {
                a.Sector3D.superclass.configure.apply(this, arguments), this.type = "sector3d", this.dimension = a._3D, this.set({
                    semi_major_axis: 0,
                    semi_minor_axis: 0,
                    cylinder_height: 0
                }), this.proxy = !0
            },
            isEventValid: function(b, c) {
                if (!c.get("ignored")) {
                    if (c.isLabel() && c.label.isEventValid(b, c.label).valid) return {
                        valid: !0
                    };
                    if (!a.inEllipse(b.x - c.x, b.y - c.y, c.a, c.b)) return {
                        valid: !1
                    };
                    if (a.angleZInRange(c.sA, c.eA, a.atan2Radian(c.x, c.y, b.x, b.y))) return {
                        valid: !0
                    }
                }
                return {
                    valid: !1
                }
            },
            p2p: function(a, b, c, d) {
                return {
                    x: a + this.a * Math.cos(c) * d,
                    y: b + this.b * Math.sin(c) * d
                }
            },
            tipInvoke: function() {
                var b = this,
                    c = b.get("middleAngle"),
                    d = a.quadrantd(c);
                return function(a, e) {
                    var f = b.p2p(b.x, b.y, c, .6);
                    return {
                        left: d >= 2 && 3 >= d ? f.x - a : f.x,
                        top: d >= 3 ? f.y - e : f.y
                    }
                }
            },
            doConfig: function() {
                a.Sector3D.superclass.doConfig.call(this);
                var b = this._(),
                    c = b.get("counterclockwise"),
                    d = b.get("middleAngle");
                b.a = b.get("semi_major_axis"), b.b = b.get("semi_minor_axis"), b.h = b.get("cylinder_height"), a.Assert.isTrue(b.a * b.b >= 0, "major&minor");
                var e = 2 * Math.PI,
                    f = function(d) {
                        for (; 0 > d;) d += e;
                        return Math.abs(a.atan2Radian(0, 0, b.a * Math.cos(d), c ? -b.b * Math.sin(d) : b.b * Math.sin(d)))
                    },
                    g = b.pushIf("increment", a.lowTo(5, b.a / 10));
                if (b.sA = f.call(b, b.get("startAngle")), b.eA = f.call(b, b.get("endAngle")), b.mA = f.call(b, d), b.push("inc_x", g * Math.cos(e - b.mA)), b.push("inc_y", g * Math.sin(e - b.mA)), g *= 2, b.get("label"))
                    if (b.get("mini_label")) {
                        var h = b.p2p(b.x, b.y, d, .5);
                        b.doText(b, h.x, h.y)
                    } else {
                        var i = a.quadrantd(d),
                            j = b.p2p(b.x, b.y, d, g / b.a + 1),
                            k = b.p2p(b.x, b.y, d, .6 * g / b.a + 1),
                            l = b.p2p(b.x, b.y, d, 1);
                        b.doLabel(b, l.x, l.y, i, [{
                            x: l.x,
                            y: l.y
                        }, {
                            x: k.x,
                            y: k.y
                        }, {
                            x: j.x,
                            y: j.y
                        }], j.x, j.y, .4 * g)
                    }
            }
        }), a.Pie = a.extend(a.Chart, {
            configure: function() {
                a.Pie.superclass.configure.call(this), this.type = "pie", this.set({
                    radius: "100%",
                    offset_angle: 0,
                    separate_angle: 0,
                    bound_event: "click",
                    counterclockwise: !1,
                    intellectLayout: !0,
                    layout_distance: 4,
                    pop_animate: !1,
                    mutex: !1,
                    increment: void 0,
                    sub_option: {
                        label: {}
                    }
                }), this.registerEvent("bound", "rebound"), this.sectors = [], this.components.push(this.sectors), this.ILLUSIVE_COO = !0
            },
            toggle: function(a) {
                this.sectors[a || 0].toggle()
            },
            bound: function(a) {
                this.sectors[a || 0].bound()
            },
            rebound: function(a) {
                this.sectors[a || 0].rebound()
            },
            getSectors: function() {
                return this.sectors
            },
            doAnimation: function(a, b, c) {
                var d = 0,
                    e = c.oA;
                c.sectors.each(function(f) {
                    d = c.animationArithmetic(a, 0, f.get("totalAngle"), b), f.push("startAngle", e), f.push("endAngle", e += d), c.is3D() || f.drawSector()
                }), c.is3D() && c.proxy.drawSector()
            },
            parse: function(a) {
                a.data.each(function(b, c) {
                    a.doParse(a, b, c)
                }, a), a.localizer(a)
            },
            doParse: function(a, b, c) {
                var d = b.name + " " + a.getPercent(b.value);
                a.doActing(a, b, null, c, d), a.push("sub_option.id", c), a.get("sub_option.label") && a.push("sub_option.label.text", d), a.push("sub_option.listeners.changed", function(b, c) {
                    a.fireEvent(a, c ? "bound" : "rebound", [a, b.get("name")])
                }), a.sectors.push(a.doSector(a, b))
            },
            doSector: function(b) {
                return new a[b.sub](b.get("sub_option"), b)
            },
            dolayout: function(b, c, d, e, f, g) {
                (b.is3D() ? a.inEllipse(b.get(b.X) - c, b.topY - d, b.a, b.b) : a.distanceP2P(b.get(b.X), b.topY, c, d) < b.r) && (d = b.topY - d, e.push("labelx", b.get(b.X) + (2 * Math.sqrt(b.r * b.r - d * d) + f) * (0 == g || 3 == g ? 1 : -1)), e.localizer(e))
            },
            localizer: function(a) {
                if (a.get("intellectLayout")) {
                    var b, c, d, e = [],
                        f = [],
                        g = a.get("layout_distance");
                    a.sectors.each(function(a) {
                        a.isLabel() && e.push(a.label)
                    }), e.sor(function(a, b) {
                        return Math.abs(Math.sin(a.get("angle"))) - Math.abs(Math.sin(b.get("angle"))) > 0
                    }), e.each(function(e) {
                        f.each(function(f) {
                            c = f.labelx, d = f.labely, (e.labely <= d && d - e.labely - 1 < e.get(a.H) || e.labely > d && e.labely - d - 1 < f.get(a.H)) && (e.labelx <= c && c - e.labelx < e.get(a.W) || e.labelx > c && e.labelx - c < f.get(a.W)) && (b = e.get("quadrantd"), e.push("labely", e.get("labely") + d - e.labely + (e.get(a.H) + g) * (b > 1 ? -1 : 1)), e.localizer(e), a.dolayout(a, e.get("labelx"), e.get("labely") + e.get(a.H) / 2 * (2 > b ? -1 : 1), e, g, b))
                        }, a), f.push(e)
                    })
                }
            },
            doConfig: function() {
                a.Pie.superclass.doConfig.call(this);
                var b, c = this._(),
                    d = c.get("radius"),
                    e = c.get("sub_option.label") ? .35 : .44,
                    f = 2 * Math.PI;
                c.sub = c.is3D() ? "Sector3D" : "Sector2D", c.sectors.zIndex = c.get("z_index"), c.sectors.length = 0, c.oA = a.angle2Radian(c.get("offset_angle")) % f, c.is3D() && (e += .06);
                var g = c.data.length,
                    h = a.angle2Radian(a.between(0, 90, c.get("separate_angle"))),
                    i = f - h,
                    h = h / g,
                    j = c.oA + h,
                    k = j;
                0 == c.total && (b = 1 / g), c.data.each(function(a, d) {
                    j += (b || a.value / c.total) * i, d == g - 1 && (j = f + c.oA), a.startAngle = k, a.endAngle = j, a.totalAngle = j - k, a.middleAngle = (k + j) / 2, k = j + h
                }, c), c.r = d = a.parsePercent(d, Math.floor(c.get("minDistance") * e)), c.topY = c.originXY(c, [d + c.get("l_originx"), c.get("r_originx") - d, c.get("centerx")], [c.get("centery")]).y, a.apply(c.get("sub_option"), a.clone([c.X, c.Y, "bound_event", "mutex", "increment"], c.options))
            }
        }), a.Pie2D = a.extend(a.Pie, {
            configure: function() {
                a.Pie2D.superclass.configure.call(this), this.type = "pie2d"
            },
            doConfig: function() {
                a.Pie2D.superclass.doConfig.call(this);
                var b = this._();
                b.push("sub_option.radius", b.r), b.parse(b)
            }
        }), a.register("Pie2D"), a.Pie3D = a.extend(a.Pie, {
            configure: function() {
                a.Pie3D.superclass.configure.apply(this, arguments), this.type = "pie3d", this.dimension = a._3D, this.set({
                    zRotate: 45,
                    yHeight: 30
                }), this.positive = !0
            },
            doSector: function(b, c) {
                return b.push("sub_option.cylinder_height", c.cylinder_height ? c.cylinder_height * b.get("zRotate_") : b.get("cylinder_height")), new a[b.sub](b.get("sub_option"), b)
            },
            one: function(b) {
                var c, d, e, f = [],
                    g = b.get("counterclockwise"),
                    h = function(a, b) {
                        return 1 + Math.sin(b ? a + Math.PI : a)
                    },
                    i = "startAngle",
                    j = "endAngle";
                lay = function(b, d, f, g) {
                    e = a.quadrantd(d), (b && (0 == e || 3 == e) || !b && (2 == e || 1 == e)) && c.push({
                        g: d,
                        z: d == f,
                        x: g.x,
                        y: g.y,
                        a: g.a,
                        b: g.b,
                        color: a.dark(g.get("background_color")),
                        h: g.h,
                        F: g
                    })
                }, b.proxy = new a.Custom({
                    z_index: b.get("z_index") + 1,
                    drawFn: function() {
                        this.drawSector(), f = [], b.sectors.each(function(a) {
                            a.get("label") && (a.expanded ? f.push(a.label) : a.label.draw())
                        }), f.each(function(a) {
                            a.draw()
                        })
                    }
                }), b.proxy.drawSector = function() {
                    b.sectors.each(function(a) {
                        b.T.ellipse(a.x, a.y + a.h, a.a, a.b, a.get(i), a.get(j), 0, a.get("border.enable"), a.get("border.width"), a.get("border.color"), a.get("shadow"), g, !0)
                    }, b), c = [], d = [], b.sectors.each(function(b) {
                        lay(g, b.get(i), b.get(j), b), lay(!g, b.get(j), b.get(i), b), d = d.concat(a.visible(b.get(i), b.get(j), b))
                    }, b), c.sor(function(a, b) {
                        var c = h(a.g) - h(b.g);
                        return 0 == c ? a.z : c > 0
                    }), c.each(function(a) {
                        b.T.sector3D.layerDraw.call(b.T, a.x, a.y, a.a + .5, a.b + .5, g, a.h, a.g, a.color)
                    }, b), b.processAnimation || d.sor(function(a, b) {
                        return h((a.s + a.e) / 2, 1) - h((b.s + b.e) / 2, 1) < 0
                    }), d.each(function(a) {
                        b.T.sector3D.sPaint.call(b.T, a.f.x, a.f.y, a.f.a, a.f.b, a.s, a.e, g, a.f.h, a.f.get("f_color"))
                    }, b), b.sectors.each(function(a) {
                        b.T.ellipse(a.x, a.y, a.a, a.b, a.get(i), a.get(j), a.get("f_color"), a.get("border.enable"), a.get("border.width"), a.get("border.color"), !1, !1, !0)
                    }, b)
                }, b.components.push(b.proxy), b.one = a.emptyFn
            },
            doConfig: function() {
                a.Pie3D.superclass.doConfig.call(this);
                var b = this._(),
                    c = a.angle2Radian(b.get("zRotate"));
                b.push("cylinder_height", b.get("yHeight") * b.push("zRotate_", Math.abs(Math.cos(c)))), b.a = b.push("sub_option.semi_major_axis", b.r), b.b = b.push("sub_option.semi_minor_axis", b.r * Math.abs(Math.sin(c))), b.topY = b.push("sub_option.originy", b.get(b.Y) - b.get("yHeight") / 2), b.parse(b), b.one(b)
            }
        }), a.register("Pie3D"), a.Donut2D = a.extend(a.Pie, {
            configure: function() {
                a.Donut2D.superclass.configure.call(this), this.type = "donut2d", this.set({
                    donutwidth: .3,
                    center: {
                        text: "",
                        line_height: 24,
                        fontweight: "bold",
                        fontsize: 24
                    }
                })
            },
            doConfig: function() {
                a.Donut2D.superclass.doConfig.call(this);
                var b = this._(),
                    c = "donutwidth",
                    d = b.get(c),
                    e = b.r;
                b.push("sub_option.radius", e), d >= e ? d = 0 : 1 > d && (d = Math.floor(e * d)), b.push("sub_option.donutwidth", b.push(c, d)), b.merge("center"), "" != b.get("center.text") && (b.push("center.originx", b.get(b.X)), b.push("center.originy", b.get(b.Y)), b.push("center.textBaseline", "middle"), b.center = new a.Text(b.get("center"), b), b.oneways.push(b.center)), b.parse(b)
            }
        }), a.register("Donut2D"), a.Column = a.extend(a.Chart, {
            configure: function() {
                a.Column.superclass.configure.call(this), this.type = "column", this.set({
                    coordinate: {},
                    column_width: "66%",
                    column_space: void 0,
                    text_space: 6,
                    scaleAlign: "left",
                    sub_option: {},
                    label: {}
                }), this.registerEvent(), this.rectangles = [], this.labels = [], this.components.push(this.labels), this.components.push(this.rectangles)
            },
            doAnimation: function(a, b, c) {
                var d;
                c.labels.each(function(a) {
                    a.draw()
                }), c.rectangles.each(function(e) {
                    d = Math.ceil(c.animationArithmetic(a, 0, e.height, b)), e.push(c.Y, e.y + (e.height - d)), e.push(c.H, d), e.drawRectangle()
                })
            },
            getCoordinate: function() {
                return this.coo
            },
            doLabel: function(b, c, d, e, f) {
                b.labels.push(new a.Text(a.apply(b.get("label"), {
                    id: c,
                    text: d,
                    originx: e,
                    originy: f
                }), b))
            },
            doParse: function(a, b, c, d) {
                a.doActing(a, b, d, c)
            },
            engine: function(a) {
                if (!a.isE()) {
                    var b = a.get("column_width_"),
                        c = a.get("column_space"),
                        d = a.coo.getScale(a.get("scaleAlign")),
                        e = a.coo.valid_height,
                        f = b / 2,
                        g = b * (a.get("group_fator") || 0),
                        h = "complex" != a.dataType ? b + c : a.data.length * b + c + (a.is3D() ? (a.data.length - 1) * g : 0),
                        i = a.coo.get("y_end"),
                        j = i - d.basic * e - (a.is3D() ? a.get("zHeight") * (a.get("bottom_scale") - 1) / 2 * a.get("yAngle_") : 0),
                        k = c + a.coo.get("x_start");
                    i = i + a.get("text_space") + a.coo.get("axis.width")[2], a.doEngine(a, b, c, d, e, f, g, h, k, j, i)
                }
            },
            doConfig: function() {
                a.Column.superclass.doConfig.call(this);
                var b = this._(),
                    c = "column_width",
                    d = "z_index";
                b.sub = b.is3D() ? "Rectangle3D" : "Rectangle2D", b.rectangles.length = 0, b.labels.length = 0, b.rectangles.zIndex = b.get(d), b.labels.zIndex = b.get(d) + 1, b.coo = a.Coordinate.coordinate_.call(b, function() {
                    var d, e = b.data.length,
                        f = b.get("coordinate.valid_width_value");
                    "complex" == b.dataType ? (d = b.get("labels").length, e = d * e + (b.is3D() ? (e - 1) * d * b.get("group_fator") : 0), d += 1) : ("stacked" == b.dataType && (e = b.get("labels").length), d = e + 1), b.push("column_space", (f - b.push("sub_option.width", b.push("column_width_", a.parsePercent(b.get(c), Math.floor(f / e)))) * e) / d), b.is3D() && (b.push("sub_option.zHeight", b.push("zHeight", b.get("column_width_") * b.get("zScale"))), b.push("sub_option.xAngle_", b.get("xAngle_")), b.push("sub_option.yAngle_", b.get("yAngle_")))
                })
            }
        }), a.Column2D = a.extend(a.Column, {
            configure: function() {
                a.Column2D.superclass.configure.call(this), this.type = "column2d"
            },
            doEngine: function(b, c, d, e, f, g, h, i, j, k, l) {
                var m;
                b.data.each(function(c, d) {
                    m = (c.value - e.start) * f / e.distance, b.doParse(b, c, d, {
                        id: d,
                        originx: j + d * i,
                        originy: k - (m > 0 ? m : 0),
                        height: Math.abs(m)
                    }), b.rectangles.push(new a[b.sub](b.get("sub_option"), b)), b.doLabel(b, d, c.name, j + i * d + g, l)
                }, b)
            },
            doConfig: function() {
                a.Column2D.superclass.doConfig.call(this), this.engine(this)
            }
        }), a.register("Column2D"), a.Column3D = a.extend(a.Column2D, {
            configure: function() {
                a.Column3D.superclass.configure.call(this), this.type = "column3d", this.dimension = a._3D, this.set({
                    coordinate: {},
                    xAngle: 60,
                    yAngle: 20,
                    zScale: 1,
                    bottom_scale: 1.4
                })
            },
            doConfig: function() {
                a.Column3D.superclass.doConfig.call(this)
            }
        }), a.register("Column3D"), a.ColumnMulti2D = a.extend(a.Column, {
            configure: function() {
                a.ColumnMulti2D.superclass.configure.call(this), this.type = "columnmulti2d", this.dataType = "complex", this.set({
                    labels: []
                })
            },
            doEngine: function(b, c, d, e, f, g, h, i, j, k, l) {
                var m;
                b.columns.each(function(g, n) {
                    g.item.each(function(d, g) {
                        m = (d.value - e.start) * f / e.distance, b.doParse(b, d, n + "_" + g, {
                            id: n + "_" + g,
                            originx: j + g * (c + h) + n * i,
                            originy: k - (m > 0 ? m : 0),
                            height: Math.abs(m)
                        }), b.rectangles.push(new a[b.sub](b.get("sub_option"), b))
                    }, b), b.doLabel(b, n, g.name, j - .5 * d + (n + .5) * i, l)
                }, b)
            },
            doConfig: function() {
                a.ColumnMulti2D.superclass.doConfig.call(this), this.engine(this)
            }
        }), a.register("ColumnMulti2D"), a.ColumnMulti3D = a.extend(a.ColumnMulti2D, {
            configure: function() {
                a.ColumnMulti3D.superclass.configure.call(this), this.type = "columnmulti3d", this.dataType = "complex", this.dimension = a._3D, this.set({
                    xAngle: 60,
                    yAngle: 20,
                    zScale: 1,
                    group_fator: .3,
                    bottom_scale: 1.4
                })
            },
            doConfig: function() {
                a.ColumnMulti3D.superclass.doConfig.call(this)
            }
        }), a.register("ColumnMulti3D"), a.ColumnStacked2D = a.extend(a.Column, {
            configure: function() {
                a.ColumnStacked2D.superclass.configure.call(this), this.type = "columnstacked2d", this.dataType = "stacked", this.set({
                    percent: !1,
                    labels: [],
                    sub_option: {
                        label: {
                            color: "#ffffff"
                        },
                        valueAlign: "middle"
                    }
                })
            },
            doEngine: function(b, c, d, e, f, g, h, i, j, k, l) {
                var m, n, o, p = b.get("percent");
                b.columns.each(function(c, g) {
                    m = 0, o = p ? 100 / c.total : 1, c.item.each(function(d, h) {
                        n = (d.value * o - e.start) * f / e.distance, d.total = c.total, b.doParse(b, d, g + "_" + h, {
                            id: g + "_" + h,
                            originx: j + g * i,
                            originy: k - (n > 0 ? n : 0) - m,
                            height: Math.abs(n)
                        }), m += n, b.rectangles.push(new a[b.sub](b.get("sub_option"), b))
                    }, b), b.doLabel(b, g, c.name, j - .5 * d + (g + .5) * i, l)
                }, b)
            },
            doConfig: function() {
                a.ColumnStacked2D.superclass.doConfig.call(this), this.engine(this)
            }
        }), a.register("ColumnStacked2D"), a.ColumnStacked3D = a.extend(a.ColumnStacked2D, {
            configure: function() {
                a.ColumnStacked3D.superclass.configure.call(this), this.type = "columnstacked3d", this.dataType = "stacked", this.dimension = a._3D, this.set({
                    percent: !1,
                    sub_option: {
                        label: {
                            color: "#ffffff"
                        },
                        valueAlign: "middle"
                    },
                    coordinate: {},
                    xAngle: 60,
                    yAngle: 20,
                    zScale: 1,
                    bottom_scale: 1.4
                })
            },
            doConfig: function() {
                a.ColumnStacked3D.superclass.doConfig.call(this)
            }
        }), a.register("ColumnStacked3D"), a.Bar = a.extend(a.Chart, {
            configure: function() {
                a.Bar.superclass.configure.call(this), this.type = "bar", this.set({
                    coordinate: {
                        striped_direction: "h"
                    },
                    bar_height: "66%",
                    bar_space: void 0,
                    text_space: 6,
                    scaleAlign: "bottom",
                    sub_option: {},
                    label: {}
                }), this.rectangles = [], this.labels = [], this.components.push(this.labels), this.components.push(this.rectangles)
            },
            getCoordinate: function() {
                return this.coo
            },
            doLabel: function(b, c, d, e, f) {
                b.labels.push(new a.Text(a.apply(b.get("label"), {
                    id: c,
                    text: d,
                    textAlign: "right",
                    textBaseline: "middle",
                    originx: e,
                    originy: f
                }), b))
            },
            doParse: function(a, b, c, d) {
                a.doActing(a, b, d, c)
            },
            engine: function(a) {
                if (!a.isE()) {
                    var b = a.get("_bar_height"),
                        c = a.get("bar_space"),
                        d = a.coo.getScale(a.get("scaleAlign")),
                        e = a.coo.valid_width,
                        f = b / 2,
                        g = "complex" != a.dataType ? b + c : a.data.length * b + c,
                        h = a.coo.get("x_start") + d.basic * e,
                        i = a.coo.get(a.X) - a.get("text_space") - a.coo.get("axis.width")[3],
                        j = a.coo.get("y_start") + c;
                    a.doEngine(a, b, c, d, e, f, g, h, i, j)
                }
            },
            doAnimation: function(a, b, c) {
                c.labels.each(function(a) {
                    a.draw()
                }), c.rectangles.each(function(d) {
                    d.push(c.W, Math.ceil(c.animationArithmetic(a, 0, d.width, b))), d.drawRectangle()
                })
            },
            doConfig: function() {
                a.Bar.superclass.doConfig.call(this);
                var b = this._(),
                    c = "z_index";
                b.rectangles.length = 0, b.labels.length = 0, b.rectangles.zIndex = b.get(c), b.labels.zIndex = b.get(c) + 1, b.coo = a.Coordinate.coordinate_.call(b, function() {
                    var c, d = b.data.length,
                        e = b.get("coordinate.valid_height_value");
                    "complex" == b.dataType ? (c = b.get("labels").length, d = c * d + (b.is3D() ? (d - 1) * c * b.get("group_fator") : 0), c += 1) : ("stacked" == b.dataType && (d = b.get("labels").length), c = d + 1), b.push("bar_space", (e - b.push("sub_option.height", b.push("_bar_height", a.parsePercent(b.get("bar_height"), Math.floor(e / d)))) * d) / c)
                }), b.push("sub_option.valueAlign", b.R), b.push("sub_option.tipAlign", b.R)
            }
        }), a.Bar2D = a.extend(a.Bar, {
            configure: function() {
                a.Bar2D.superclass.configure.call(this), this.type = "bar2d"
            },
            doEngine: function(b, c, d, e, f, g, h, i, j, k) {
                var l;
                b.data.each(function(c, d) {
                    l = (c.value - e.start) * f / e.distance, b.doParse(b, c, d, {
                        id: d,
                        originy: k + d * h,
                        width: Math.abs(l),
                        originx: i + (l > 0 ? 0 : -Math.abs(l))
                    }), b.rectangles.push(new a.Rectangle2D(b.get("sub_option"), b)), b.doLabel(b, d, c.name, j, k + d * h + g)
                }, b)
            },
            doConfig: function() {
                a.Bar2D.superclass.doConfig.call(this), this.engine(this)
            }
        }), a.register("Bar2D"), a.BarMulti2D = a.extend(a.Bar, {
            configure: function() {
                a.BarMulti2D.superclass.configure.call(this), this.type = "barmulti2d", this.dataType = "complex", this.set({
                    labels: []
                })
            },
            doEngine: function(b, c, d, e, f, g, h, i, j, k) {
                var l;
                b.columns.each(function(g, m) {
                    g.item.each(function(d, g) {
                        l = (d.value - e.start) * f / e.distance, b.doParse(b, d, g, {
                            id: m + "_" + g,
                            originy: k + g * c + m * h,
                            width: Math.abs(l),
                            originx: i + (l > 0 ? 0 : -Math.abs(l))
                        }), b.rectangles.push(new a.Rectangle2D(b.get("sub_option"), b))
                    }, b), b.doLabel(b, m, g.name, j, k - .5 * d + (m + .5) * h)
                }, b)
            },
            doConfig: function() {
                a.BarMulti2D.superclass.doConfig.call(this), this.engine(this)
            }
        }), a.register("BarMulti2D"), a.BarStacked2D = a.extend(a.Bar, {
            configure: function() {
                a.BarStacked2D.superclass.configure.call(this), this.type = "barstacked2d", this.dataType = "stacked", this.set({
                    percent: !1,
                    labels: [],
                    sub_option: {
                        label: {
                            color: "#ffffff"
                        },
                        valueAlign: "middle"
                    }
                })
            },
            doEngine: function(b, c, d, e, f, g, h, i, j, k) {
                var l, m, n, o = b.get("percent");
                b.columns.each(function(c, g) {
                    l = 0, n = o ? 100 / c.total : 1, c.item.each(function(d, j) {
                        m = (d.value * n - e.start) * f / e.distance, d.total = c.total, b.doParse(b, d, j, {
                            id: g + "_" + j,
                            originy: k + g * h,
                            originx: i + (m > 0 ? 0 : -Math.abs(m)) + l,
                            width: Math.abs(m)
                        }), l += m, b.rectangles.push(new a.Rectangle2D(b.get("sub_option"), b))
                    }, b), b.doLabel(b, g, c.name, j, k - .5 * d + (g + .5) * h)
                }, b)
            },
            doConfig: function() {
                a.BarStacked2D.superclass.doConfig.call(this), this.push("sub_option.valueAlign", this.C), this.engine(this)
            }
        }), a.register("BarStacked2D"), a.LineSegment = a.extend(a.Component, {
            configure: function() {
                a.LineSegment.superclass.configure.apply(this, arguments), this.type = "linesegment", this.set({
                    brushsize: 1,
                    intersection: !0,
                    label: {},
                    sign: "round",
                    area_color: null,
                    hollow: !0,
                    hollow_inside: !0,
                    hollow_color: "#FEFEFE",
                    smooth: !1,
                    smoothing: 1.5,
                    point_size: 6,
                    points: [],
                    keep_with_coordinate: !1,
                    shadow_blur: 1,
                    shadow_offsety: 1,
                    point_space: 0,
                    coordinate: null,
                    event_range_x: 0,
                    limit_y: !1,
                    tip_offset: 2,
                    event_range_y: 0
                }), this.registerEvent("parseText"), this.tip = null
            },
            drawSegment: function() {
                var a = this._();
                a.polygons.each(function(b) {
                    a.T.polygon.apply(a.T, b)
                }), a.T.shadowOn(a.get("shadow")), a.lines.each(function(b) {
                    a.T.lineArray.apply(a.T, b)
                }), a.intersections.each(function(b) {
                    a.sign_plugin ? a.sign_plugin_fn.apply(a, b) : a.T.round0.apply(a.T, b)
                }), a.get("shadow") && a.T.shadowOff()
            },
            doDraw: function(a) {
                a.drawSegment(), a.get("label") && a.labels.each(function(a) {
                    a.draw()
                })
            },
            isEventValid: function() {},
            tipInvoke: function() {
                var a = this.x,
                    b = (this.y, this.get("tip_offset")),
                    c = this.get("point_size") + b,
                    d = this;
                return function(e, f, g) {
                    var h = g.left,
                        i = g.top;
                    return h = d.tipPosition < 3 && h - e - a - b > 0 || d.tipPosition > 2 && 0 > h - e - a - b ? h - (e + b) : h + b, i = 0 == d.tipPosition % 2 ? i + c : i - f - c, {
                        left: h,
                        top: i
                    }
                }
            },
            PP: function(a, b, c, d, e, f) {
                a.get("area") && a.polygons.push([a.tf("area_color") || a.get("light_color2"), 0, a.get("brushsize"), 0, 0, a.get("area_opacity"), a.get("smooth") ? b : [{
                    x: c,
                    y: d
                }].concat(b.concat([{
                    x: e,
                    y: f
                }])), a.get("smooth"), a.get("smoothing") || 1.5, [{
                    x: c,
                    y: d
                }, {
                    x: e,
                    y: f
                }]])
            },
            parse: function(b) {
                b.polygons = [], b.lines = [], b.intersections = [], b.labels = [];
                var c = b.get("points"),
                    d = b.get("intersection"),
                    e = !!b.get("label"),
                    f = [],
                    g = !1,
                    h = b.get("smooth"),
                    i = b.get("smoothing") || 1.5,
                    j = b.get("f_color"),
                    k = b.get("brushsize"),
                    l = b.get("point_size");
                if (d) {
                    var m = b.getPlugin("sign"),
                        n = j,
                        o = b.get("hollow_color");
                    b.sign_plugin = a.isFunction(m), b.sign_plugin_fn = m, b.get("hollow_inside") && (n = o, o = j)
                }
                c.each(function(c) {
                    c.x_ = c.x, c.y_ = c.y, !c.ignored && e && (b.push("label.originx", c.x), b.push("label.originy", c.y - l / 2 - 1), b.push("label.text", b.fireString(b, "parseText", [b, c.value], c.value)), a.applyIf(b.get("label"), {
                        textBaseline: "bottom",
                        color: b.get("f_color")
                    }), b.labels.push(new a.Text(b.get("label"), b))), c.ignored && g ? (b.lines.push([f, k, j, h, i]), b.PP(b, f, f[0].x, b.y, f[f.length - 1].x, b.y), f = [], g = !1) : c.ignored || (f.push(c), g = !0), d && !c.ignored && b.intersections.push(b.sign_plugin ? [b.T, b.get("sign"), c, l, c.color || n, c.hollow_color || o] : b.get("hollow") ? [c, l / 2 - k + 1, c.color || n, k + 1, c.hollow_color || o] : [c, l / 2, c.color || n])
                }), f.length && (b.lines.push([f, k, j, h, i]), b.PP(b, f, f[0].x, b.y, f[f.length - 1].x, b.y))
            },
            doConfig: function() {
                a.LineSegment.superclass.doConfig.call(this), a.Assert.isTrue(this.get("point_space") > 0, "point_space");
                var b = this._(),
                    c = 3 * b.get("point_size") / 2,
                    d = b.get("point_space"),
                    e = b.get("event_range_y"),
                    f = b.get("event_range_x"),
                    g = b.get("tipInvokeHeap"),
                    h = b.get("points"),
                    i = b.get("name");
                b.parse(b), (0 >= f || f > d / 2) && (f = b.push("event_range_x", d / 2)), 0 == e && (e = b.push("event_range_y", c / 2)), b.get("tip.enable") && (b.on("mouseover", function() {
                    g.push(b), b.tipPosition = g.length
                }).on("mouseout", function() {
                    g.pop()
                }), b.push("tip.invokeOffsetDynamic", !0), b.tip = new a.Tip(b.get("tip"), b));
                var j = b.get("coordinate"),
                    k = b.get("limit_y"),
                    l = b.get("keep_with_coordinate"),
                    m = function(a, b, c) {
                        return !a.ignored && Math.abs(b - a.x) < f && (!k || k && Math.abs(c - a.y) < e) ? !0 : !1
                    },
                    n = function(a) {
                        return {
                            valid: !0,
                            name: i,
                            value: h[a].value,
                            text: h[a].text,
                            top: h[a].y,
                            left: h[a].x,
                            i: a,
                            hit: !0
                        }
                    };
                b.isEventValid = function(c) {
                    if (j && !j.isEventValid(c, j).valid) return {
                        valid: !1
                    };
                    var e = Math.floor((c.x - b.x) / d);
                    if (0 > e || e >= h.length - 1) return e = a.between(0, h.length - 1, e), m(h[e], c.x, c.y) ? n(e) : {
                        valid: l
                    };
                    for (var f = e; e + 1 >= f; f++)
                        if (m(h[f], c.x, c.y)) return n(f);
                    return {
                        valid: l
                    }
                }
            }
        }), a.Line = a.extend(a.Chart, {
            configure: function() {
                a.Line.superclass.configure.call(this), this.type = "line", this.set({
                    brushsize: 1,
                    coordinate: {
                        axis: {
                            width: [0, 0, 2, 2]
                        }
                    },
                    crosshair: {
                        enable: !1
                    },
                    tipMocker: null,
                    tipMockerOffset: null,
                    scaleAlign: "left",
                    labelAlign: "bottom",
                    labels: [],
                    label_space: 6,
                    proportional_spacing: !0,
                    sub_option: {},
                    legend: {
                        sign: "bar"
                    },
                    label: {}
                }), this.registerEvent("parsePoint"), this.lines = [], this.components.push(this.lines)
            },
            getCoordinate: function() {
                return this.coo
            },
            doConfig: function() {
                a.Line.superclass.doConfig.call(this);
                var b = this._(),
                    c = 1 == b.data.length;
                b.lines.length = 0, b.lines.zIndex = b.get("z_index");
                var d = b.pushIf("sub_option.keep_with_coordinate", c);
                if (b.get("crosshair.enable") && (b.pushIf("crosshair.hcross", c), b.push("crosshair.invokeOffset", function(a) {
                        var c = b.lines[0].isEventValid(a);
                        return c.valid ? c : d
                    })), b.Combination || (b.push("coordinate.crosshair", b.get("crosshair")), b.pushIf("coordinate.scale", [{
                        position: b.get("scaleAlign"),
                        max_scale: b.get("maxValue")
                    }, {
                        position: b.get("labelAlign"),
                        start_scale: 1,
                        scale: 1,
                        end_scale: b.get("maxItemSize"),
                        labels: b.get("labels"),
                        label: b.get("label")
                    }])), b.coo = a.Coordinate.coordinate_.call(b), b.Combination && (b.coo.push("crosshair", b.get("crosshair")), b.coo.doCrosshair(b.coo)), !b.isE()) {
                    var e = b.coo.valid_width,
                        f = e,
                        g = b.get("maxItemSize") - 1,
                        h = e / g,
                        i = b.get("point_space");
                    if (b.get("proportional_spacing") && (i && h > i ? f = g * i : b.push("point_space", h)), b.push("sub_option.width", f), b.push("sub_option.height", b.coo.valid_height), b.push("sub_option.originx", b.coo.get("x_start") + (e - f) / 2), b.push("sub_option.originy", b.coo.get("y_end")), b.get("tip.enable") && !b.mocker && a.isFunction(b.get("tipMocker"))) {
                        b.push("sub_option.tip.enable", !1), b.push("tip.invokeOffsetDynamic", !0);
                        var j, k, l, m, n = b.coo.get(b.X),
                            o = b.coo.get(b.Y),
                            p = b.coo.height,
                            q = b.get("tipMockerOffset");
                        q = a.isNumber(q) ? 0 > q ? 0 : q > 1 ? 1 : q : null, b.push("tip.invokeOffset", function(a, b, c) {
                            return null != q ? c.top = o + (p - b) * q : (c.top = c.maxTop - (c.maxTop - c.minTop) / 3 - b, (b > p || o > c.top) && (c.top = o)), {
                                left: c.left - a - n > 5 ? c.left - a - 5 : c.left + 5,
                                top: c.top
                            }
                        });
                        var r = b.get("tip.listeners.parseText");
                        r && delete b.get("tip.listeners").parseText, b.mocker = new a.Custom({
                            eventValid: function(a) {
                                return l = b.lines[0].isEventValid(a), l.hit = k != l.i, l.valid && (k = l.i, j = [], b.lines.each(function(b, c) {
                                    m = b.isEventValid(a), 0 == c ? l.minTop = l.maxTop = m.top : (l.minTop = Math.min(l.minTop, m.top), l.maxTop = Math.max(l.maxTop, m.top)), j.push(r ? r(null, m.name, m.value, m.text, m.i) : m.name + " " + m.value)
                                }), l.text = b.get("tipMocker").call(b, j, l.i) || "tipMocker not return"), l.valid ? l : !1
                            }
                        }), new a.Tip(b.get("tip"), b.mocker), b.register(b.mocker)
                    }
                    b.pushIf("sub_option.area_opacity", b.get("area_opacity"))
                }
            }
        }), a.LineBasic2D = a.extend(a.Line, {
            configure: function() {
                a.LineBasic2D.superclass.configure.call(this), this.type = "basicline2d", this.tipInvokeHeap = []
            },
            doAnimation: function(a, b, c) {
                c.lines.each(function(d) {
                    d.get("points").each(function(e) {
                        e.y = d.y - Math.ceil(c.animationArithmetic(a, 0, d.y - e.y_, b))
                    }), d.drawSegment()
                })
            },
            doConfig: function() {
                a.LineBasic2D.superclass.doConfig.call(this);
                var b = this._();
                if (!b.isE()) {
                    var c, d, e, f, g, h, i = b.coo.valid_height,
                        j = b.get("point_space"),
                        k = b.get("sub_option.originx");
                    b.push("sub_option.tip.showType", "follow"), b.push("sub_option.coordinate", b.coo), b.push("sub_option.tipInvokeHeap", b.tipInvokeHeap), b.push("sub_option.point_space", j), b.data.each(function(l) {
                        c = b.coo.getScale(l.scaleAlign || b.get("scaleAlign")), g = b.get("sub_option.originy") - c.basic * i, d = [], l.value.each(function(m, n) {
                            e = j * n, f = (m - c.start) * i / c.distance, h = {
                                x: k + e,
                                y: g - f,
                                value: m,
                                text: l.name + " " + m
                            }, a.merge(h, b.fireEvent(b, "parsePoint", [l, m, e, f, n, c])), d.push(h)
                        }, b), a.merge(b.get("sub_option"), l), b.push("sub_option.points", d), b.push("sub_option.brushsize", l.linewidth || l.line_width), b.lines.push(new a.LineSegment(b.get("sub_option"), b))
                    }, this)
                }
            }
        }), a.register("LineBasic2D"), a.Area2D = a.extend(a.LineBasic2D, {
            configure: function() {
                a.Area2D.superclass.configure.call(this), this.type = "area2d", this.set({
                    area_opacity: .3
                })
            },
            doConfig: function() {
                this.push("sub_option.area", !0), a.Area2D.superclass.doConfig.call(this)
            }
        }), a.register("Area2D")
}(iChart);
