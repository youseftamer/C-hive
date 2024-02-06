
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __esm = (fn, res) => function __init() {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    };
    var __commonJS = (cb, mod) => function __require() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var __export = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  
    // packages/shared/render/plugins/BaseSiteModules/tram-min.js
    var require_tram_min = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/tram-min.js"() {
        "use strict";
        window.tram = function(a) {
          function b(a2, b2) {
            var c2 = new M.Bare();
            return c2.init(a2, b2);
          }
          function c(a2) {
            return a2.replace(/[A-Z]/g, function(a3) {
              return "-" + a3.toLowerCase();
            });
          }
          function d(a2) {
            var b2 = parseInt(a2.slice(1), 16), c2 = b2 >> 16 & 255, d2 = b2 >> 8 & 255, e2 = 255 & b2;
            return [c2, d2, e2];
          }
          function e(a2, b2, c2) {
            return "#" + (1 << 24 | a2 << 16 | b2 << 8 | c2).toString(16).slice(1);
          }
          function f() {
          }
          function g(a2, b2) {
            j("Type warning: Expected: [" + a2 + "] Got: [" + typeof b2 + "] " + b2);
          }
          function h(a2, b2, c2) {
            j("Units do not match [" + a2 + "]: " + b2 + ", " + c2);
          }
          function i(a2, b2, c2) {
            if (void 0 !== b2 && (c2 = b2), void 0 === a2)
              return c2;
            var d2 = c2;
            return $.test(a2) || !_.test(a2) ? d2 = parseInt(a2, 10) : _.test(a2) && (d2 = 1e3 * parseFloat(a2)), 0 > d2 && (d2 = 0), d2 === d2 ? d2 : c2;
          }
          function j(a2) {
            U.debug && window && window.console.warn(a2);
          }
          function k(a2) {
            for (var b2 = -1, c2 = a2 ? a2.length : 0, d2 = []; ++b2 < c2; ) {
              var e2 = a2[b2];
              e2 && d2.push(e2);
            }
            return d2;
          }
          var l = function(a2, b2, c2) {
            function d2(a3) {
              return "object" == typeof a3;
            }
            function e2(a3) {
              return "function" == typeof a3;
            }
            function f2() {
            }
            function g2(h2, i2) {
              function j2() {
                var a3 = new k2();
                return e2(a3.init) && a3.init.apply(a3, arguments), a3;
              }
              function k2() {
              }
              i2 === c2 && (i2 = h2, h2 = Object), j2.Bare = k2;
              var l2, m2 = f2[a2] = h2[a2], n2 = k2[a2] = j2[a2] = new f2();
              return n2.constructor = j2, j2.mixin = function(b3) {
                return k2[a2] = j2[a2] = g2(j2, b3)[a2], j2;
              }, j2.open = function(a3) {
                if (l2 = {}, e2(a3) ? l2 = a3.call(j2, n2, m2, j2, h2) : d2(a3) && (l2 = a3), d2(l2))
                  for (var c3 in l2)
                    b2.call(l2, c3) && (n2[c3] = l2[c3]);
                return e2(n2.init) || (n2.init = h2), j2;
              }, j2.open(i2);
            }
            return g2;
          }("prototype", {}.hasOwnProperty), m = {
            ease: ["ease", function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (-2.75 * f2 * e2 + 11 * e2 * e2 + -15.5 * f2 + 8 * e2 + 0.25 * a2);
            }],
            "ease-in": ["ease-in", function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (-1 * f2 * e2 + 3 * e2 * e2 + -3 * f2 + 2 * e2);
            }],
            "ease-out": ["ease-out", function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (0.3 * f2 * e2 + -1.6 * e2 * e2 + 2.2 * f2 + -1.8 * e2 + 1.9 * a2);
            }],
            "ease-in-out": ["ease-in-out", function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (2 * f2 * e2 + -5 * e2 * e2 + 2 * f2 + 2 * e2);
            }],
            linear: ["linear", function(a2, b2, c2, d2) {
              return c2 * a2 / d2 + b2;
            }],
            "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 + b2;
            }],
            "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(a2, b2, c2, d2) {
              return -c2 * (a2 /= d2) * (a2 - 2) + b2;
            }],
            "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 + b2 : -c2 / 2 * (--a2 * (a2 - 2) - 1) + b2;
            }],
            "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 * a2 + b2;
            }],
            "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(a2, b2, c2, d2) {
              return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 + 1) + b2;
            }],
            "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 + 2) + b2;
            }],
            "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 * a2 * a2 + b2;
            }],
            "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(a2, b2, c2, d2) {
              return -c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 - 1) + b2;
            }],
            "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 + b2 : -c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 - 2) + b2;
            }],
            "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 * a2 * a2 * a2 + b2;
            }],
            "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(a2, b2, c2, d2) {
              return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 * a2 + 1) + b2;
            }],
            "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 * a2 + 2) + b2;
            }],
            "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(a2, b2, c2, d2) {
              return -c2 * Math.cos(a2 / d2 * (Math.PI / 2)) + c2 + b2;
            }],
            "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(a2, b2, c2, d2) {
              return c2 * Math.sin(a2 / d2 * (Math.PI / 2)) + b2;
            }],
            "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(a2, b2, c2, d2) {
              return -c2 / 2 * (Math.cos(Math.PI * a2 / d2) - 1) + b2;
            }],
            "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(a2, b2, c2, d2) {
              return 0 === a2 ? b2 : c2 * Math.pow(2, 10 * (a2 / d2 - 1)) + b2;
            }],
            "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(a2, b2, c2, d2) {
              return a2 === d2 ? b2 + c2 : c2 * (-Math.pow(2, -10 * a2 / d2) + 1) + b2;
            }],
            "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(a2, b2, c2, d2) {
              return 0 === a2 ? b2 : a2 === d2 ? b2 + c2 : (a2 /= d2 / 2) < 1 ? c2 / 2 * Math.pow(2, 10 * (a2 - 1)) + b2 : c2 / 2 * (-Math.pow(2, -10 * --a2) + 2) + b2;
            }],
            "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(a2, b2, c2, d2) {
              return -c2 * (Math.sqrt(1 - (a2 /= d2) * a2) - 1) + b2;
            }],
            "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(a2, b2, c2, d2) {
              return c2 * Math.sqrt(1 - (a2 = a2 / d2 - 1) * a2) + b2;
            }],
            "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? -c2 / 2 * (Math.sqrt(1 - a2 * a2) - 1) + b2 : c2 / 2 * (Math.sqrt(1 - (a2 -= 2) * a2) + 1) + b2;
            }],
            "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1.70158), c2 * (a2 /= d2) * a2 * ((e2 + 1) * a2 - e2) + b2;
            }],
            "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1.70158), c2 * ((a2 = a2 / d2 - 1) * a2 * ((e2 + 1) * a2 + e2) + 1) + b2;
            }],
            "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1.70158), (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * (((e2 *= 1.525) + 1) * a2 - e2) + b2 : c2 / 2 * ((a2 -= 2) * a2 * (((e2 *= 1.525) + 1) * a2 + e2) + 2) + b2;
            }]
          }, n = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
          }, o = document, p = window, q = "bkwld-tram", r = /[\-\.0-9]/g, s = /[A-Z]/, t = "number", u = /^(rgb|#)/, v = /(em|cm|mm|in|pt|pc|px)$/, w = /(em|cm|mm|in|pt|pc|px|%)$/, x = /(deg|rad|turn)$/, y = "unitless", z = /(all|none) 0s ease 0s/, A = /^(width|height)$/, B = " ", C = o.createElement("a"), D = ["Webkit", "Moz", "O", "ms"], E = ["-webkit-", "-moz-", "-o-", "-ms-"], F = function(a2) {
            if (a2 in C.style)
              return {
                dom: a2,
                css: a2
              };
            var b2, c2, d2 = "", e2 = a2.split("-");
            for (b2 = 0; b2 < e2.length; b2++)
              d2 += e2[b2].charAt(0).toUpperCase() + e2[b2].slice(1);
            for (b2 = 0; b2 < D.length; b2++)
              if (c2 = D[b2] + d2, c2 in C.style)
                return {
                  dom: c2,
                  css: E[b2] + a2
                };
          }, G = b.support = {
            bind: Function.prototype.bind,
            transform: F("transform"),
            transition: F("transition"),
            backface: F("backface-visibility"),
            timing: F("transition-timing-function")
          };
          if (G.transition) {
            var H = G.timing.dom;
            if (C.style[H] = m["ease-in-back"][0], !C.style[H])
              for (var I in n)
                m[I][0] = n[I];
          }
          var J = b.frame = function() {
            var a2 = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
            return a2 && G.bind ? a2.bind(p) : function(a3) {
              p.setTimeout(a3, 16);
            };
          }(), K = b.now = function() {
            var a2 = p.performance, b2 = a2 && (a2.now || a2.webkitNow || a2.msNow || a2.mozNow);
            return b2 && G.bind ? b2.bind(a2) : Date.now || function() {
              return +/* @__PURE__ */ new Date();
            };
          }(), L = l(function(b2) {
            function d2(a2, b3) {
              var c2 = k(("" + a2).split(B)), d3 = c2[0];
              b3 = b3 || {};
              var e3 = Y[d3];
              if (!e3)
                return j("Unsupported property: " + d3);
              if (!b3.weak || !this.props[d3]) {
                var f3 = e3[0], g3 = this.props[d3];
                return g3 || (g3 = this.props[d3] = new f3.Bare()), g3.init(this.$el, c2, e3, b3), g3;
              }
            }
            function e2(a2, b3, c2) {
              if (a2) {
                var e3 = typeof a2;
                if (b3 || (this.timer && this.timer.destroy(), this.queue = [], this.active = false), "number" == e3 && b3)
                  return this.timer = new S({
                    duration: a2,
                    context: this,
                    complete: h2
                  }), void (this.active = true);
                if ("string" == e3 && b3) {
                  switch (a2) {
                    case "hide":
                      o2.call(this);
                      break;
                    case "stop":
                      l2.call(this);
                      break;
                    case "redraw":
                      p2.call(this);
                      break;
                    default:
                      d2.call(this, a2, c2 && c2[1]);
                  }
                  return h2.call(this);
                }
                if ("function" == e3)
                  return void a2.call(this, this);
                if ("object" == e3) {
                  var f3 = 0;
                  u2.call(this, a2, function(a3, b4) {
                    a3.span > f3 && (f3 = a3.span), a3.stop(), a3.animate(b4);
                  }, function(a3) {
                    "wait" in a3 && (f3 = i(a3.wait, 0));
                  }), t2.call(this), f3 > 0 && (this.timer = new S({
                    duration: f3,
                    context: this
                  }), this.active = true, b3 && (this.timer.complete = h2));
                  var g3 = this, j2 = false, k2 = {};
                  J(function() {
                    u2.call(g3, a2, function(a3) {
                      a3.active && (j2 = true, k2[a3.name] = a3.nextStyle);
                    }), j2 && g3.$el.css(k2);
                  });
                }
              }
            }
            function f2(a2) {
              a2 = i(a2, 0), this.active ? this.queue.push({
                options: a2
              }) : (this.timer = new S({
                duration: a2,
                context: this,
                complete: h2
              }), this.active = true);
            }
            function g2(a2) {
              return this.active ? (this.queue.push({
                options: a2,
                args: arguments
              }), void (this.timer.complete = h2)) : j("No active transition timer. Use start() or wait() before then().");
            }
            function h2() {
              if (this.timer && this.timer.destroy(), this.active = false, this.queue.length) {
                var a2 = this.queue.shift();
                e2.call(this, a2.options, true, a2.args);
              }
            }
            function l2(a2) {
              this.timer && this.timer.destroy(), this.queue = [], this.active = false;
              var b3;
              "string" == typeof a2 ? (b3 = {}, b3[a2] = 1) : b3 = "object" == typeof a2 && null != a2 ? a2 : this.props, u2.call(this, b3, v2), t2.call(this);
            }
            function m2(a2) {
              l2.call(this, a2), u2.call(this, a2, w2, x2);
            }
            function n2(a2) {
              "string" != typeof a2 && (a2 = "block"), this.el.style.display = a2;
            }
            function o2() {
              l2.call(this), this.el.style.display = "none";
            }
            function p2() {
              this.el.offsetHeight;
            }
            function r2() {
              l2.call(this), a.removeData(this.el, q), this.$el = this.el = null;
            }
            function t2() {
              var a2, b3, c2 = [];
              this.upstream && c2.push(this.upstream);
              for (a2 in this.props)
                b3 = this.props[a2], b3.active && c2.push(b3.string);
              c2 = c2.join(","), this.style !== c2 && (this.style = c2, this.el.style[G.transition.dom] = c2);
            }
            function u2(a2, b3, e3) {
              var f3, g3, h3, i2, j2 = b3 !== v2, k2 = {};
              for (f3 in a2)
                h3 = a2[f3], f3 in Z ? (k2.transform || (k2.transform = {}), k2.transform[f3] = h3) : (s.test(f3) && (f3 = c(f3)), f3 in Y ? k2[f3] = h3 : (i2 || (i2 = {}), i2[f3] = h3));
              for (f3 in k2) {
                if (h3 = k2[f3], g3 = this.props[f3], !g3) {
                  if (!j2)
                    continue;
                  g3 = d2.call(this, f3);
                }
                b3.call(this, g3, h3);
              }
              e3 && i2 && e3.call(this, i2);
            }
            function v2(a2) {
              a2.stop();
            }
            function w2(a2, b3) {
              a2.set(b3);
            }
            function x2(a2) {
              this.$el.css(a2);
            }
            function y2(a2, c2) {
              b2[a2] = function() {
                return this.children ? A2.call(this, c2, arguments) : (this.el && c2.apply(this, arguments), this);
              };
            }
            function A2(a2, b3) {
              var c2, d3 = this.children.length;
              for (c2 = 0; d3 > c2; c2++)
                a2.apply(this.children[c2], b3);
              return this;
            }
            b2.init = function(b3) {
              if (this.$el = a(b3), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = false, U.keepInherited && !U.fallback) {
                var c2 = W(this.el, "transition");
                c2 && !z.test(c2) && (this.upstream = c2);
              }
              G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
            }, y2("add", d2), y2("start", e2), y2("wait", f2), y2("then", g2), y2("next", h2), y2("stop", l2), y2("set", m2), y2("show", n2), y2("hide", o2), y2("redraw", p2), y2("destroy", r2);
          }), M = l(L, function(b2) {
            function c2(b3, c3) {
              var d2 = a.data(b3, q) || a.data(b3, q, new L.Bare());
              return d2.el || d2.init(b3), c3 ? d2.start(c3) : d2;
            }
            b2.init = function(b3, d2) {
              var e2 = a(b3);
              if (!e2.length)
                return this;
              if (1 === e2.length)
                return c2(e2[0], d2);
              var f2 = [];
              return e2.each(function(a2, b4) {
                f2.push(c2(b4, d2));
              }), this.children = f2, this;
            };
          }), N = l(function(a2) {
            function b2() {
              var a3 = this.get();
              this.update("auto");
              var b3 = this.get();
              return this.update(a3), b3;
            }
            function c2(a3, b3, c3) {
              return void 0 !== b3 && (c3 = b3), a3 in m ? a3 : c3;
            }
            function d2(a3) {
              var b3 = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a3);
              return (b3 ? e(b3[1], b3[2], b3[3]) : a3).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
            }
            var f2 = {
              duration: 500,
              ease: "ease",
              delay: 0
            };
            a2.init = function(a3, b3, d3, e2) {
              this.$el = a3, this.el = a3[0];
              var g2 = b3[0];
              d3[2] && (g2 = d3[2]), X[g2] && (g2 = X[g2]), this.name = g2, this.type = d3[1], this.duration = i(b3[1], this.duration, f2.duration), this.ease = c2(b3[2], this.ease, f2.ease), this.delay = i(b3[3], this.delay, f2.delay), this.span = this.duration + this.delay, this.active = false, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e2.unit || this.unit || U.defaultUnit, this.angle = e2.angle || this.angle || U.defaultAngle, U.fallback || e2.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
            }, a2.set = function(a3) {
              a3 = this.convert(a3, this.type), this.update(a3), this.redraw();
            }, a2.transition = function(a3) {
              this.active = true, a3 = this.convert(a3, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a3 && (a3 = b2.call(this))), this.nextStyle = a3;
            }, a2.fallback = function(a3) {
              var c3 = this.el.style[this.name] || this.convert(this.get(), this.type);
              a3 = this.convert(a3, this.type), this.auto && ("auto" == c3 && (c3 = this.convert(this.get(), this.type)), "auto" == a3 && (a3 = b2.call(this))), this.tween = new R({
                from: c3,
                to: a3,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this
              });
            }, a2.get = function() {
              return W(this.el, this.name);
            }, a2.update = function(a3) {
              V(this.el, this.name, a3);
            }, a2.stop = function() {
              (this.active || this.nextStyle) && (this.active = false, this.nextStyle = null, V(this.el, this.name, this.get()));
              var a3 = this.tween;
              a3 && a3.context && a3.destroy();
            }, a2.convert = function(a3, b3) {
              if ("auto" == a3 && this.auto)
                return a3;
              var c3, e2 = "number" == typeof a3, f3 = "string" == typeof a3;
              switch (b3) {
                case t:
                  if (e2)
                    return a3;
                  if (f3 && "" === a3.replace(r, ""))
                    return +a3;
                  c3 = "number(unitless)";
                  break;
                case u:
                  if (f3) {
                    if ("" === a3 && this.original)
                      return this.original;
                    if (b3.test(a3))
                      return "#" == a3.charAt(0) && 7 == a3.length ? a3 : d2(a3);
                  }
                  c3 = "hex or rgb string";
                  break;
                case v:
                  if (e2)
                    return a3 + this.unit;
                  if (f3 && b3.test(a3))
                    return a3;
                  c3 = "number(px) or string(unit)";
                  break;
                case w:
                  if (e2)
                    return a3 + this.unit;
                  if (f3 && b3.test(a3))
                    return a3;
                  c3 = "number(px) or string(unit or %)";
                  break;
                case x:
                  if (e2)
                    return a3 + this.angle;
                  if (f3 && b3.test(a3))
                    return a3;
                  c3 = "number(deg) or string(angle)";
                  break;
                case y:
                  if (e2)
                    return a3;
                  if (f3 && w.test(a3))
                    return a3;
                  c3 = "number(unitless) or string(unit or %)";
              }
              return g(c3, a3), a3;
            }, a2.redraw = function() {
              this.el.offsetHeight;
            };
          }), O = l(N, function(a2, b2) {
            a2.init = function() {
              b2.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
            };
          }), P = l(N, function(a2, b2) {
            a2.init = function() {
              b2.init.apply(this, arguments), this.animate = this.fallback;
            }, a2.get = function() {
              return this.$el[this.name]();
            }, a2.update = function(a3) {
              this.$el[this.name](a3);
            };
          }), Q = l(N, function(a2, b2) {
            function c2(a3, b3) {
              var c3, d2, e2, f2, g2;
              for (c3 in a3)
                f2 = Z[c3], e2 = f2[0], d2 = f2[1] || c3, g2 = this.convert(a3[c3], e2), b3.call(this, d2, g2, e2);
            }
            a2.init = function() {
              b2.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
            }, a2.set = function(a3) {
              c2.call(this, a3, function(a4, b3) {
                this.current[a4] = b3;
              }), V(this.el, this.name, this.style(this.current)), this.redraw();
            }, a2.transition = function(a3) {
              var b3 = this.values(a3);
              this.tween = new T({
                current: this.current,
                values: b3,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease
              });
              var c3, d2 = {};
              for (c3 in this.current)
                d2[c3] = c3 in b3 ? b3[c3] : this.current[c3];
              this.active = true, this.nextStyle = this.style(d2);
            }, a2.fallback = function(a3) {
              var b3 = this.values(a3);
              this.tween = new T({
                current: this.current,
                values: b3,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this
              });
            }, a2.update = function() {
              V(this.el, this.name, this.style(this.current));
            }, a2.style = function(a3) {
              var b3, c3 = "";
              for (b3 in a3)
                c3 += b3 + "(" + a3[b3] + ") ";
              return c3;
            }, a2.values = function(a3) {
              var b3, d2 = {};
              return c2.call(this, a3, function(a4, c3, e2) {
                d2[a4] = c3, void 0 === this.current[a4] && (b3 = 0, ~a4.indexOf("scale") && (b3 = 1), this.current[a4] = this.convert(b3, e2));
              }), d2;
            };
          }), R = l(function(b2) {
            function c2(a2) {
              1 === n2.push(a2) && J(g2);
            }
            function g2() {
              var a2, b3, c3, d2 = n2.length;
              if (d2)
                for (J(g2), b3 = K(), a2 = d2; a2--; )
                  c3 = n2[a2], c3 && c3.render(b3);
            }
            function i2(b3) {
              var c3, d2 = a.inArray(b3, n2);
              d2 >= 0 && (c3 = n2.slice(d2 + 1), n2.length = d2, c3.length && (n2 = n2.concat(c3)));
            }
            function j2(a2) {
              return Math.round(a2 * o2) / o2;
            }
            function k2(a2, b3, c3) {
              return e(a2[0] + c3 * (b3[0] - a2[0]), a2[1] + c3 * (b3[1] - a2[1]), a2[2] + c3 * (b3[2] - a2[2]));
            }
            var l2 = {
              ease: m.ease[1],
              from: 0,
              to: 1
            };
            b2.init = function(a2) {
              this.duration = a2.duration || 0, this.delay = a2.delay || 0;
              var b3 = a2.ease || l2.ease;
              m[b3] && (b3 = m[b3][1]), "function" != typeof b3 && (b3 = l2.ease), this.ease = b3, this.update = a2.update || f, this.complete = a2.complete || f, this.context = a2.context || this, this.name = a2.name;
              var c3 = a2.from, d2 = a2.to;
              void 0 === c3 && (c3 = l2.from), void 0 === d2 && (d2 = l2.to), this.unit = a2.unit || "", "number" == typeof c3 && "number" == typeof d2 ? (this.begin = c3, this.change = d2 - c3) : this.format(d2, c3), this.value = this.begin + this.unit, this.start = K(), a2.autoplay !== false && this.play();
            }, b2.play = function() {
              this.active || (this.start || (this.start = K()), this.active = true, c2(this));
            }, b2.stop = function() {
              this.active && (this.active = false, i2(this));
            }, b2.render = function(a2) {
              var b3, c3 = a2 - this.start;
              if (this.delay) {
                if (c3 <= this.delay)
                  return;
                c3 -= this.delay;
              }
              if (c3 < this.duration) {
                var d2 = this.ease(c3, 0, 1, this.duration);
                return b3 = this.startRGB ? k2(this.startRGB, this.endRGB, d2) : j2(this.begin + d2 * this.change), this.value = b3 + this.unit, void this.update.call(this.context, this.value);
              }
              b3 = this.endHex || this.begin + this.change, this.value = b3 + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
            }, b2.format = function(a2, b3) {
              if (b3 += "", a2 += "", "#" == a2.charAt(0))
                return this.startRGB = d(b3), this.endRGB = d(a2), this.endHex = a2, this.begin = 0, void (this.change = 1);
              if (!this.unit) {
                var c3 = b3.replace(r, ""), e2 = a2.replace(r, "");
                c3 !== e2 && h("tween", b3, a2), this.unit = c3;
              }
              b3 = parseFloat(b3), a2 = parseFloat(a2), this.begin = this.value = b3, this.change = a2 - b3;
            }, b2.destroy = function() {
              this.stop(), this.context = null, this.ease = this.update = this.complete = f;
            };
            var n2 = [], o2 = 1e3;
          }), S = l(R, function(a2) {
            a2.init = function(a3) {
              this.duration = a3.duration || 0, this.complete = a3.complete || f, this.context = a3.context, this.play();
            }, a2.render = function(a3) {
              var b2 = a3 - this.start;
              b2 < this.duration || (this.complete.call(this.context), this.destroy());
            };
          }), T = l(R, function(a2, b2) {
            a2.init = function(a3) {
              this.context = a3.context, this.update = a3.update, this.tweens = [], this.current = a3.current;
              var b3, c2;
              for (b3 in a3.values)
                c2 = a3.values[b3], this.current[b3] !== c2 && this.tweens.push(new R({
                  name: b3,
                  from: this.current[b3],
                  to: c2,
                  duration: a3.duration,
                  delay: a3.delay,
                  ease: a3.ease,
                  autoplay: false
                }));
              this.play();
            }, a2.render = function(a3) {
              var b3, c2, d2 = this.tweens.length, e2 = false;
              for (b3 = d2; b3--; )
                c2 = this.tweens[b3], c2.context && (c2.render(a3), this.current[c2.name] = c2.value, e2 = true);
              return e2 ? void (this.update && this.update.call(this.context)) : this.destroy();
            }, a2.destroy = function() {
              if (b2.destroy.call(this), this.tweens) {
                var a3, c2 = this.tweens.length;
                for (a3 = c2; a3--; )
                  this.tweens[a3].destroy();
                this.tweens = null, this.current = null;
              }
            };
          }), U = b.config = {
            debug: false,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: false,
            hideBackface: false,
            perspective: "",
            fallback: !G.transition,
            agentTests: []
          };
          b.fallback = function(a2) {
            if (!G.transition)
              return U.fallback = true;
            U.agentTests.push("(" + a2 + ")");
            var b2 = new RegExp(U.agentTests.join("|"), "i");
            U.fallback = b2.test(navigator.userAgent);
          }, b.fallback("6.0.[2-5] Safari"), b.tween = function(a2) {
            return new R(a2);
          }, b.delay = function(a2, b2, c2) {
            return new S({
              complete: b2,
              duration: a2,
              context: c2
            });
          }, a.fn.tram = function(a2) {
            return b.call(null, this, a2);
          };
          var V = a.style, W = a.css, X = {
            transform: G.transform && G.transform.css
          }, Y = {
            color: [O, u],
            background: [O, u, "background-color"],
            "outline-color": [O, u],
            "border-color": [O, u],
            "border-top-color": [O, u],
            "border-right-color": [O, u],
            "border-bottom-color": [O, u],
            "border-left-color": [O, u],
            "border-width": [N, v],
            "border-top-width": [N, v],
            "border-right-width": [N, v],
            "border-bottom-width": [N, v],
            "border-left-width": [N, v],
            "border-spacing": [N, v],
            "letter-spacing": [N, v],
            margin: [N, v],
            "margin-top": [N, v],
            "margin-right": [N, v],
            "margin-bottom": [N, v],
            "margin-left": [N, v],
            padding: [N, v],
            "padding-top": [N, v],
            "padding-right": [N, v],
            "padding-bottom": [N, v],
            "padding-left": [N, v],
            "outline-width": [N, v],
            opacity: [N, t],
            top: [N, w],
            right: [N, w],
            bottom: [N, w],
            left: [N, w],
            "font-size": [N, w],
            "text-indent": [N, w],
            "word-spacing": [N, w],
            width: [N, w],
            "min-width": [N, w],
            "max-width": [N, w],
            height: [N, w],
            "min-height": [N, w],
            "max-height": [N, w],
            "line-height": [N, y],
            "scroll-top": [P, t, "scrollTop"],
            "scroll-left": [P, t, "scrollLeft"]
          }, Z = {};
          G.transform && (Y.transform = [Q], Z = {
            x: [w, "translateX"],
            y: [w, "translateY"],
            rotate: [x],
            rotateX: [x],
            rotateY: [x],
            scale: [t],
            scaleX: [t],
            scaleY: [t],
            skew: [x],
            skewX: [x],
            skewY: [x]
          }), G.transform && G.backface && (Z.z = [w, "translateZ"], Z.rotateZ = [x], Z.scaleZ = [t], Z.perspective = [v]);
          var $ = /ms/, _ = /s|\./;
          return a.tram = b;
        }(window.jQuery);
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/underscore-custom.js
    var require_underscore_custom = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/underscore-custom.js"(exports, module) {
        "use strict";
        var $ = window.$;
        var tram = require_tram_min() && $.tram;
        module.exports = function() {
          var _ = {};
          _.VERSION = "1.6.0-Webflow";
          var breaker = {};
          var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
          var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty2 = ObjProto.hasOwnProperty;
          var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
          var each = _.each = _.forEach = function(obj, iterator, context) {
            if (obj == null)
              return obj;
            if (nativeForEach && obj.forEach === nativeForEach) {
              obj.forEach(iterator, context);
            } else if (obj.length === +obj.length) {
              for (var i = 0, length = obj.length; i < length; i++) {
                if (iterator.call(context, obj[i], i, obj) === breaker)
                  return;
              }
            } else {
              var keys = _.keys(obj);
              for (var i = 0, length = keys.length; i < length; i++) {
                if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker)
                  return;
              }
            }
            return obj;
          };
          _.map = _.collect = function(obj, iterator, context) {
            var results = [];
            if (obj == null)
              return results;
            if (nativeMap && obj.map === nativeMap)
              return obj.map(iterator, context);
            each(obj, function(value, index, list) {
              results.push(iterator.call(context, value, index, list));
            });
            return results;
          };
          _.find = _.detect = function(obj, predicate, context) {
            var result;
            any(obj, function(value, index, list) {
              if (predicate.call(context, value, index, list)) {
                result = value;
                return true;
              }
            });
            return result;
          };
          _.filter = _.select = function(obj, predicate, context) {
            var results = [];
            if (obj == null)
              return results;
            if (nativeFilter && obj.filter === nativeFilter)
              return obj.filter(predicate, context);
            each(obj, function(value, index, list) {
              if (predicate.call(context, value, index, list))
                results.push(value);
            });
            return results;
          };
          var any = _.some = _.any = function(obj, predicate, context) {
            predicate || (predicate = _.identity);
            var result = false;
            if (obj == null)
              return result;
            if (nativeSome && obj.some === nativeSome)
              return obj.some(predicate, context);
            each(obj, function(value, index, list) {
              if (result || (result = predicate.call(context, value, index, list)))
                return breaker;
            });
            return !!result;
          };
          _.contains = _.include = function(obj, target) {
            if (obj == null)
              return false;
            if (nativeIndexOf && obj.indexOf === nativeIndexOf)
              return obj.indexOf(target) != -1;
            return any(obj, function(value) {
              return value === target;
            });
          };
          _.delay = function(func, wait) {
            var args = slice.call(arguments, 2);
            return setTimeout(function() {
              return func.apply(null, args);
            }, wait);
          };
          _.defer = function(func) {
            return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
          };
          _.throttle = function(func) {
            var wait, args, context;
            return function() {
              if (wait)
                return;
              wait = true;
              args = arguments;
              context = this;
              tram.frame(function() {
                wait = false;
                func.apply(context, args);
              });
            };
          };
          _.debounce = function(func, wait, immediate) {
            var timeout, args, context, timestamp, result;
            var later = function() {
              var last = _.now() - timestamp;
              if (last < wait) {
                timeout = setTimeout(later, wait - last);
              } else {
                timeout = null;
                if (!immediate) {
                  result = func.apply(context, args);
                  context = args = null;
                }
              }
            };
            return function() {
              context = this;
              args = arguments;
              timestamp = _.now();
              var callNow = immediate && !timeout;
              if (!timeout) {
                timeout = setTimeout(later, wait);
              }
              if (callNow) {
                result = func.apply(context, args);
                context = args = null;
              }
              return result;
            };
          };
          _.defaults = function(obj) {
            if (!_.isObject(obj))
              return obj;
            for (var i = 1, length = arguments.length; i < length; i++) {
              var source = arguments[i];
              for (var prop in source) {
                if (obj[prop] === void 0)
                  obj[prop] = source[prop];
              }
            }
            return obj;
          };
          _.keys = function(obj) {
            if (!_.isObject(obj))
              return [];
            if (nativeKeys)
              return nativeKeys(obj);
            var keys = [];
            for (var key in obj)
              if (_.has(obj, key))
                keys.push(key);
            return keys;
          };
          _.has = function(obj, key) {
            return hasOwnProperty2.call(obj, key);
          };
          _.isObject = function(obj) {
            return obj === Object(obj);
          };
          _.now = Date.now || function() {
            return (/* @__PURE__ */ new Date()).getTime();
          };
          _.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
          };
          var noMatch = /(.)^/;
          var escapes = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
          };
          var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
          var escapeChar = function(match) {
            return "\\" + escapes[match];
          };
          var bareIdentifier = /^\s*(\w|\$)+\s*$/;
          _.template = function(text, settings, oldSettings) {
            if (!settings && oldSettings)
              settings = oldSettings;
            settings = _.defaults({}, settings, _.templateSettings);
            var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$", "g");
            var index = 0;
            var source = "__p+='";
            text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
              source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
              index = offset + match.length;
              if (escape) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
              } else if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
              } else if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='";
              }
              return match;
            });
            source += "';\n";
            var argument = settings.variable;
            if (argument) {
              if (!bareIdentifier.test(argument))
                throw new Error("variable is not a bare identifier: " + argument);
            } else {
              source = "with(obj||{}){\n" + source + "}\n";
              argument = "obj";
            }
            source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
            var render;
            try {
              render = new Function(settings.variable || "obj", "_", source);
            } catch (e) {
              e.source = source;
              throw e;
            }
            var template = function(data) {
              return render.call(this, data, _);
            };
            template.source = "function(" + argument + "){\n" + source + "}";
            return template;
          };
          return _;
        }();
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-lib.js
    var require_webflow_lib = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-lib.js"(exports, module) {
        "use strict";
        var Webflow = {};
        var modules = {};
        var primary = [];
        var secondary = window.Webflow || [];
        var $ = window.jQuery;
        var $win = $(window);
        var $doc = $(document);
        var isFunction = $.isFunction;
        var _ = Webflow._ = require_underscore_custom();
        var tram = Webflow.tram = require_tram_min() && $.tram;
        var domready = false;
        var destroyed = false;
        tram.config.hideBackface = false;
        tram.config.keepInherited = true;
        Webflow.define = function(name, factory, options) {
          if (modules[name]) {
            unbindModule(modules[name]);
          }
          var instance = modules[name] = factory($, _, options) || {};
          bindModule(instance);
          return instance;
        };
        Webflow.require = function(name) {
          return modules[name];
        };
        function bindModule(module2) {
          if (Webflow.env()) {
            isFunction(module2.design) && $win.on("__wf_design", module2.design);
            isFunction(module2.preview) && $win.on("__wf_preview", module2.preview);
          }
          isFunction(module2.destroy) && $win.on("__wf_destroy", module2.destroy);
          if (module2.ready && isFunction(module2.ready)) {
            addReady(module2);
          }
        }
        function addReady(module2) {
          if (domready) {
            module2.ready();
            return;
          }
          if (_.contains(primary, module2.ready)) {
            return;
          }
          primary.push(module2.ready);
        }
        function unbindModule(module2) {
          isFunction(module2.design) && $win.off("__wf_design", module2.design);
          isFunction(module2.preview) && $win.off("__wf_preview", module2.preview);
          isFunction(module2.destroy) && $win.off("__wf_destroy", module2.destroy);
          if (module2.ready && isFunction(module2.ready)) {
            removeReady(module2);
          }
        }
        function removeReady(module2) {
          primary = _.filter(primary, function(readyFn) {
            return readyFn !== module2.ready;
          });
        }
        Webflow.push = function(ready) {
          if (domready) {
            isFunction(ready) && ready();
            return;
          }
          secondary.push(ready);
        };
        Webflow.env = function(mode) {
          var designFlag = window.__wf_design;
          var inApp = typeof designFlag !== "undefined";
          if (!mode) {
            return inApp;
          }
          if (mode === "design") {
            return inApp && designFlag;
          }
          if (mode === "preview") {
            return inApp && !designFlag;
          }
          if (mode === "slug") {
            return inApp && window.__wf_slug;
          }
          if (mode === "editor") {
            return window.WebflowEditor;
          }
          if (mode === "test") {
            return window.__wf_test;
          }
          if (mode === "frame") {
            return window !== window.top;
          }
        };
        var userAgent = navigator.userAgent.toLowerCase();
        var touch = Webflow.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
        var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
        var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
        Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;
        var touchTarget;
        touch && $doc.on("touchstart mousedown", function(evt) {
          touchTarget = evt.target;
        });
        Webflow.validClick = touch ? function(clickTarget) {
          return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
        } : function() {
          return true;
        };
        var resizeEvents = "resize.webflow orientationchange.webflow load.webflow";
        var scrollEvents = "scroll.webflow " + resizeEvents;
        Webflow.resize = eventProxy($win, resizeEvents);
        Webflow.scroll = eventProxy($win, scrollEvents);
        Webflow.redraw = eventProxy();
        function eventProxy(target, types) {
          var handlers = [];
          var proxy = {};
          proxy.up = _.throttle(function(evt) {
            _.each(handlers, function(h) {
              h(evt);
            });
          });
          if (target && types) {
            target.on(types, proxy.up);
          }
          proxy.on = function(handler) {
            if (typeof handler !== "function") {
              return;
            }
            if (_.contains(handlers, handler)) {
              return;
            }
            handlers.push(handler);
          };
          proxy.off = function(handler) {
            if (!arguments.length) {
              handlers = [];
              return;
            }
            handlers = _.filter(handlers, function(h) {
              return h !== handler;
            });
          };
          return proxy;
        }
        Webflow.location = function(url) {
          window.location = url;
        };
        if (Webflow.env()) {
          Webflow.location = function() {
          };
        }
        Webflow.ready = function() {
          domready = true;
          if (destroyed) {
            restoreModules();
          } else {
            _.each(primary, callReady);
          }
          _.each(secondary, callReady);
          Webflow.resize.up();
        };
        function callReady(readyFn) {
          isFunction(readyFn) && readyFn();
        }
        function restoreModules() {
          destroyed = false;
          _.each(modules, bindModule);
        }
        var deferLoad;
        Webflow.load = function(handler) {
          deferLoad.then(handler);
        };
        function bindLoad() {
          if (deferLoad) {
            deferLoad.reject();
            $win.off("load", deferLoad.resolve);
          }
          deferLoad = new $.Deferred();
          $win.on("load", deferLoad.resolve);
        }
        Webflow.destroy = function(options) {
          options = options || {};
          destroyed = true;
          $win.triggerHandler("__wf_destroy");
          if (options.domready != null) {
            domready = options.domready;
          }
          _.each(modules, unbindModule);
          Webflow.resize.off();
          Webflow.scroll.off();
          Webflow.redraw.off();
          primary = [];
          secondary = [];
          if (deferLoad.state() === "pending") {
            bindLoad();
          }
        };
        $(Webflow.ready);
        bindLoad();
        module.exports = window.Webflow = Webflow;
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-brand.js
    var require_webflow_brand = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-brand.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("brand", module.exports = function($) {
          var api = {};
          var doc = document;
          var $html = $("html");
          var $body = $("body");
          var namespace = ".w-webflow-badge";
          var location = window.location;
          var isPhantom = /PhantomJS/i.test(navigator.userAgent);
          var fullScreenEvents = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          var brandElement;
          api.ready = function() {
            var shouldBrand = $html.attr("data-wf-status");
            var publishedDomain = $html.attr("data-wf-domain") || "";
            if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
              shouldBrand = true;
            }
            if (shouldBrand && !isPhantom) {
              brandElement = brandElement || createBadge();
              ensureBrand();
              setTimeout(ensureBrand, 500);
              $(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
            }
          };
          function onFullScreenChange() {
            var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
            $(brandElement).attr("style", fullScreen ? "display: none !important;" : "");
          }
          function createBadge() {
            var $brand = $('').attr("", "");
            var $logoArt = $("").attr("", "").attr("", "").css({
              marginRight: "4px",
              width: "26px"
            });
            var $logoText = $("").attr("", "").attr("", "");
            $brand.append($logoArt, $logoText);
            return $brand[0];
          }
          function ensureBrand() {
            var found = $body.children(namespace);
            var match = found.length && found.get(0) === brandElement;
            var inEditor = Webflow.env("editor");
            if (match) {
              if (inEditor) {
                found.remove();
              }
              return;
            }
            if (found.length) {
              found.remove();
            }
            if (!inEditor) {
              $body.append(brandElement);
            }
          }
          return api;
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-edit.js
    var require_webflow_edit = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-edit.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("edit", module.exports = function($, _, options) {
          options = options || {};
          if (Webflow.env("test") || Webflow.env("frame")) {
            if (!options.fixture && !inCypress()) {
              return {
                exit: 1
              };
            }
          }
          var api = {};
          var $win = $(window);
          var $html = $(document.documentElement);
          var location = document.location;
          var hashchange = "hashchange";
          var loaded;
          var loadEditor = options.load || load;
          var hasLocalStorage = false;
          try {
            hasLocalStorage = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor");
          } catch (e) {
          }
          if (hasLocalStorage) {
            loadEditor();
          } else if (location.search) {
            if (/[?&](edit)(?:[=&?]|$)/.test(location.search) || /\?edit$/.test(location.href)) {
              loadEditor();
            }
          } else {
            $win.on(hashchange, checkHash).triggerHandler(hashchange);
          }
          function checkHash() {
            if (loaded) {
              return;
            }
            if (/\?edit/.test(location.hash)) {
              loadEditor();
            }
          }
          function load() {
            loaded = true;
            window.WebflowEditor = true;
            $win.off(hashchange, checkHash);
            checkThirdPartyCookieSupport(function(thirdPartyCookiesSupported) {
              $.ajax({
                url: cleanSlashes("https://editor-api.webflow.com/api/editor/view"),
                data: {
                  siteId: $html.attr("data-wf-site")
                },
                xhrFields: {
                  withCredentials: true
                },
                dataType: "json",
                crossDomain: true,
                success: success(thirdPartyCookiesSupported)
              });
            });
          }
          function success(thirdPartyCookiesSupported) {
            return function(data) {
              if (!data) {
                console.error("Could not load editor data");
                return;
              }
              data.thirdPartyCookiesSupported = thirdPartyCookiesSupported;
              getScript(prefix(data.bugReporterScriptPath), function() {
                getScript(prefix(data.scriptPath), function() {
                  window.WebflowEditor(data);
                });
              });
            };
          }
          function getScript(url, done) {
            $.ajax({
              type: "GET",
              url,
              dataType: "script",
              cache: true
            }).then(done, error);
          }
          function error(jqXHR, textStatus, errorThrown) {
            console.error("Could not load editor script: " + textStatus);
            throw errorThrown;
          }
          function prefix(url) {
            return url.indexOf("//") >= 0 ? url : cleanSlashes("https://editor-api.webflow.com" + url);
          }
          function cleanSlashes(url) {
            return url.replace(/([^:])\/\//g, "$1/");
          }
          function checkThirdPartyCookieSupport(callback) {
            var iframe = window.document.createElement("iframe");
            iframe.src = "https://webflow.com/site/third-party-cookie-check.html";
            iframe.style.display = "none";
            iframe.sandbox = "allow-scripts allow-same-origin";
            var handleMessage = function(event) {
              if (event.data === "WF_third_party_cookies_unsupported") {
                cleanUpCookieCheckerIframe(iframe, handleMessage);
                callback(false);
              } else if (event.data === "WF_third_party_cookies_supported") {
                cleanUpCookieCheckerIframe(iframe, handleMessage);
                callback(true);
              }
            };
            iframe.onerror = function() {
              cleanUpCookieCheckerIframe(iframe, handleMessage);
              callback(false);
            };
            window.addEventListener("message", handleMessage, false);
            window.document.body.appendChild(iframe);
          }
          function cleanUpCookieCheckerIframe(iframe, listener) {
            window.removeEventListener("message", listener, false);
            iframe.remove();
          }
          return api;
        });
        function inCypress() {
          try {
            return window.top.__Cypress__;
          } catch (e) {
            return false;
          }
        }
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js
    var require_webflow_focus_visible = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("focus-visible", module.exports = function() {
          function applyFocusVisiblePolyfill(scope) {
            var hadKeyboardEvent = true;
            var hadFocusVisibleRecently = false;
            var hadFocusVisibleRecentlyTimeout = null;
            var inputTypesAllowlist = {
              text: true,
              search: true,
              url: true,
              tel: true,
              email: true,
              password: true,
              number: true,
              date: true,
              month: true,
              week: true,
              time: true,
              datetime: true,
              "datetime-local": true
            };
            function isValidFocusTarget(el) {
              if (el && el !== document && el.nodeName !== "HTML" && el.nodeName !== "BODY" && "classList" in el && "contains" in el.classList) {
                return true;
              }
              return false;
            }
            function focusTriggersKeyboardModality(el) {
              var type = el.type;
              var tagName = el.tagName;
              if (tagName === "INPUT" && inputTypesAllowlist[type] && !el.readOnly) {
                return true;
              }
              if (tagName === "TEXTAREA" && !el.readOnly) {
                return true;
              }
              if (el.isContentEditable) {
                return true;
              }
              return false;
            }
            function addFocusVisibleAttribute(el) {
              if (el.getAttribute("data-wf-focus-visible")) {
                return;
              }
              el.setAttribute("data-wf-focus-visible", "true");
            }
            function removeFocusVisibleAttribute(el) {
              if (!el.getAttribute("data-wf-focus-visible")) {
                return;
              }
              el.removeAttribute("data-wf-focus-visible");
            }
            function onKeyDown(e) {
              if (e.metaKey || e.altKey || e.ctrlKey) {
                return;
              }
              if (isValidFocusTarget(scope.activeElement)) {
                addFocusVisibleAttribute(scope.activeElement);
              }
              hadKeyboardEvent = true;
            }
            function onPointerDown() {
              hadKeyboardEvent = false;
            }
            function onFocus(e) {
              if (!isValidFocusTarget(e.target)) {
                return;
              }
              if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
                addFocusVisibleAttribute(e.target);
              }
            }
            function onBlur(e) {
              if (!isValidFocusTarget(e.target)) {
                return;
              }
              if (e.target.hasAttribute("data-wf-focus-visible")) {
                hadFocusVisibleRecently = true;
                window.clearTimeout(hadFocusVisibleRecentlyTimeout);
                hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                  hadFocusVisibleRecently = false;
                }, 100);
                removeFocusVisibleAttribute(e.target);
              }
            }
            function onVisibilityChange() {
              if (document.visibilityState === "hidden") {
                if (hadFocusVisibleRecently) {
                  hadKeyboardEvent = true;
                }
                addInitialPointerMoveListeners();
              }
            }
            function addInitialPointerMoveListeners() {
              document.addEventListener("mousemove", onInitialPointerMove);
              document.addEventListener("mousedown", onInitialPointerMove);
              document.addEventListener("mouseup", onInitialPointerMove);
              document.addEventListener("pointermove", onInitialPointerMove);
              document.addEventListener("pointerdown", onInitialPointerMove);
              document.addEventListener("pointerup", onInitialPointerMove);
              document.addEventListener("touchmove", onInitialPointerMove);
              document.addEventListener("touchstart", onInitialPointerMove);
              document.addEventListener("touchend", onInitialPointerMove);
            }
            function removeInitialPointerMoveListeners() {
              document.removeEventListener("mousemove", onInitialPointerMove);
              document.removeEventListener("mousedown", onInitialPointerMove);
              document.removeEventListener("mouseup", onInitialPointerMove);
              document.removeEventListener("pointermove", onInitialPointerMove);
              document.removeEventListener("pointerdown", onInitialPointerMove);
              document.removeEventListener("pointerup", onInitialPointerMove);
              document.removeEventListener("touchmove", onInitialPointerMove);
              document.removeEventListener("touchstart", onInitialPointerMove);
              document.removeEventListener("touchend", onInitialPointerMove);
            }
            function onInitialPointerMove(e) {
              if (e.target.nodeName && e.target.nodeName.toLowerCase() === "html") {
                return;
              }
              hadKeyboardEvent = false;
              removeInitialPointerMoveListeners();
            }
            document.addEventListener("keydown", onKeyDown, true);
            document.addEventListener("mousedown", onPointerDown, true);
            document.addEventListener("pointerdown", onPointerDown, true);
            document.addEventListener("touchstart", onPointerDown, true);
            document.addEventListener("visibilitychange", onVisibilityChange, true);
            addInitialPointerMoveListeners();
            scope.addEventListener("focus", onFocus, true);
            scope.addEventListener("blur", onBlur, true);
          }
          function ready() {
            if (typeof document !== "undefined") {
              try {
                document.querySelector(":focus-visible");
              } catch (e) {
                applyFocusVisiblePolyfill(document);
              }
            }
          }
          return {
            ready
          };
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-focus.js
    var require_webflow_focus = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-focus.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("focus", module.exports = function() {
          var capturedEvents = [];
          var capturing = false;
          function captureEvent(e) {
            if (capturing) {
              e.preventDefault();
              e.stopPropagation();
              e.stopImmediatePropagation();
              capturedEvents.unshift(e);
            }
          }
          function isPolyfilledFocusEvent(e) {
            var el = e.target;
            var tag = el.tagName;
            return /^a$/i.test(tag) && el.href != null || // (A)
            /^(button|textarea)$/i.test(tag) && el.disabled !== true || // (B) (C)
            /^input$/i.test(tag) && /^(button|reset|submit|radio|checkbox)$/i.test(el.type) && !el.disabled || // (D)
            !/^(button|input|textarea|select|a)$/i.test(tag) && !Number.isNaN(Number.parseFloat(el.tabIndex)) || // (E)
            /^audio$/i.test(tag) || // (F)
            /^video$/i.test(tag) && el.controls === true;
          }
          function handler(e) {
            if (isPolyfilledFocusEvent(e)) {
              capturing = true;
              setTimeout(() => {
                capturing = false;
                e.target.focus();
                while (capturedEvents.length > 0) {
                  var event = capturedEvents.pop();
                  event.target.dispatchEvent(new MouseEvent(event.type, event));
                }
              }, 0);
            }
          }
          function ready() {
            if (typeof document !== "undefined" && document.body.hasAttribute("data-wf-focus-within") && Webflow.env.safari) {
              document.addEventListener("mousedown", handler, true);
              document.addEventListener("mouseup", captureEvent, true);
              document.addEventListener("click", captureEvent, true);
            }
          }
          return {
            ready
          };
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js
    var require_webflow_ix_events = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js"(exports, module) {
        "use strict";
        var $ = window.jQuery;
        var api = {};
        var eventQueue = [];
        var namespace = ".w-ix";
        var eventTriggers = {
          reset: function(i, el) {
            el.__wf_intro = null;
          },
          intro: function(i, el) {
            if (el.__wf_intro) {
              return;
            }
            el.__wf_intro = true;
            $(el).triggerHandler(api.types.INTRO);
          },
          outro: function(i, el) {
            if (!el.__wf_intro) {
              return;
            }
            el.__wf_intro = null;
            $(el).triggerHandler(api.types.OUTRO);
          }
        };
        api.triggers = {};
        api.types = {
          INTRO: "w-ix-intro" + namespace,
          OUTRO: "w-ix-outro" + namespace
        };
        api.init = function() {
          var count = eventQueue.length;
          for (var i = 0; i < count; i++) {
            var memo = eventQueue[i];
            memo[0](0, memo[1]);
          }
          eventQueue = [];
          $.extend(api.triggers, eventTriggers);
        };
        api.async = function() {
          for (var key in eventTriggers) {
            var func = eventTriggers[key];
            if (!eventTriggers.hasOwnProperty(key)) {
              continue;
            }
            api.triggers[key] = function(i, el) {
              eventQueue.push([func, el]);
            };
          }
        };
        api.async();
        module.exports = api;
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js
    var require_webflow_ix2_events = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js"(exports, module) {
        "use strict";
        var IXEvents = require_webflow_ix_events();
        function dispatchCustomEvent2(element, eventName) {
          var event = document.createEvent("CustomEvent");
          event.initCustomEvent(eventName, true, true, null);
          element.dispatchEvent(event);
        }
        var $ = window.jQuery;
        var api = {};
        var namespace = ".w-ix";
        var eventTriggers = {
          reset: function(i, el) {
            IXEvents.triggers.reset(i, el);
          },
          intro: function(i, el) {
            IXEvents.triggers.intro(i, el);
            dispatchCustomEvent2(el, "COMPONENT_ACTIVE");
          },
          outro: function(i, el) {
            IXEvents.triggers.outro(i, el);
            dispatchCustomEvent2(el, "COMPONENT_INACTIVE");
          }
        };
        api.triggers = {};
        api.types = {
          INTRO: "w-ix-intro" + namespace,
          OUTRO: "w-ix-outro" + namespace
        };
        $.extend(api.triggers, eventTriggers);
        module.exports = api;
      }
    });
  
    // node_modules/@babel/runtime/helpers/typeof.js
    var require_typeof = __commonJS({
      "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
            return typeof obj2;
          } : function(obj2) {
            return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(obj);
        }
        module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
      }
    });
  
    // node_modules/@babel/runtime/helpers/interopRequireWildcard.js
    var require_interopRequireWildcard = __commonJS({
      "node_modules/@babel/runtime/helpers/interopRequireWildcard.js"(exports, module) {
        var _typeof = require_typeof()["default"];
        function _getRequireWildcardCache(nodeInterop) {
          if (typeof WeakMap !== "function")
            return null;
          var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
          var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
          return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
            return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }
        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }
          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return {
              "default": obj
            };
          }
          var cache = _getRequireWildcardCache(nodeInterop);
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj["default"] = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }
        module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;
      }
    });
  
    // node_modules/@babel/runtime/helpers/interopRequireDefault.js
    var require_interopRequireDefault = __commonJS({
      "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }
        module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
      }
    });
  
    // node_modules/core-js/internals/global.js
    var require_global = __commonJS({
      "node_modules/core-js/internals/global.js"(exports, module) {
        var check = function(it) {
          return it && it.Math == Math && it;
        };
        module.exports = // eslint-disable-next-line es/no-global-this -- safe
        check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
        check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
        function() {
          return this;
        }() || Function("return this")();
      }
    });
  
    // node_modules/core-js/internals/fails.js
    var require_fails = __commonJS({
      "node_modules/core-js/internals/fails.js"(exports, module) {
        module.exports = function(exec) {
          try {
            return !!exec();
          } catch (error) {
            return true;
          }
        };
      }
    });
  
    // node_modules/core-js/internals/descriptors.js
    var require_descriptors = __commonJS({
      "node_modules/core-js/internals/descriptors.js"(exports, module) {
        var fails = require_fails();
        module.exports = !fails(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] != 7;
        });
      }
    });
  
    // node_modules/core-js/internals/function-call.js
    var require_function_call = __commonJS({
      "node_modules/core-js/internals/function-call.js"(exports, module) {
        var call = Function.prototype.call;
        module.exports = call.bind ? call.bind(call) : function() {
          return call.apply(call, arguments);
        };
      }
    });
  
    // node_modules/core-js/internals/object-property-is-enumerable.js
    var require_object_property_is_enumerable = __commonJS({
      "node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
        "use strict";
        var $propertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
        exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
          var descriptor = getOwnPropertyDescriptor(this, V);
          return !!descriptor && descriptor.enumerable;
        } : $propertyIsEnumerable;
      }
    });
  
    // node_modules/core-js/internals/create-property-descriptor.js
    var require_create_property_descriptor = __commonJS({
      "node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
        module.exports = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value
          };
        };
      }
    });
  
    // node_modules/core-js/internals/function-uncurry-this.js
    var require_function_uncurry_this = __commonJS({
      "node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
        var FunctionPrototype = Function.prototype;
        var bind = FunctionPrototype.bind;
        var call = FunctionPrototype.call;
        var callBind = bind && bind.bind(call);
        module.exports = bind ? function(fn) {
          return fn && callBind(call, fn);
        } : function(fn) {
          return fn && function() {
            return call.apply(fn, arguments);
          };
        };
      }
    });
  
    // node_modules/core-js/internals/classof-raw.js
    var require_classof_raw = __commonJS({
      "node_modules/core-js/internals/classof-raw.js"(exports, module) {
        var uncurryThis = require_function_uncurry_this();
        var toString = uncurryThis({}.toString);
        var stringSlice = uncurryThis("".slice);
        module.exports = function(it) {
          return stringSlice(toString(it), 8, -1);
        };
      }
    });
  
    // node_modules/core-js/internals/indexed-object.js
    var require_indexed_object = __commonJS({
      "node_modules/core-js/internals/indexed-object.js"(exports, module) {
        var global2 = require_global();
        var uncurryThis = require_function_uncurry_this();
        var fails = require_fails();
        var classof = require_classof_raw();
        var Object2 = global2.Object;
        var split = uncurryThis("".split);
        module.exports = fails(function() {
          return !Object2("z").propertyIsEnumerable(0);
        }) ? function(it) {
          return classof(it) == "String" ? split(it, "") : Object2(it);
        } : Object2;
      }
    });
  
    // node_modules/core-js/internals/require-object-coercible.js
    var require_require_object_coercible = __commonJS({
      "node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
        var global2 = require_global();
        var TypeError2 = global2.TypeError;
        module.exports = function(it) {
          if (it == void 0)
            throw TypeError2("Can't call method on " + it);
          return it;
        };
      }
    });
  
    // node_modules/core-js/internals/to-indexed-object.js
    var require_to_indexed_object = __commonJS({
      "node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
        var IndexedObject = require_indexed_object();
        var requireObjectCoercible = require_require_object_coercible();
        module.exports = function(it) {
          return IndexedObject(requireObjectCoercible(it));
        };
      }
    });
  
    // node_modules/core-js/internals/is-callable.js
    var require_is_callable = __commonJS({
      "node_modules/core-js/internals/is-callable.js"(exports, module) {
        module.exports = function(argument) {
          return typeof argument == "function";
        };
      }
    });
  
    // node_modules/core-js/internals/is-object.js
    var require_is_object = __commonJS({
      "node_modules/core-js/internals/is-object.js"(exports, module) {
        var isCallable = require_is_callable();
        module.exports = function(it) {
          return typeof it == "object" ? it !== null : isCallable(it);
        };
      }
    });
  
    // node_modules/core-js/internals/get-built-in.js
    var require_get_built_in = __commonJS({
      "node_modules/core-js/internals/get-built-in.js"(exports, module) {
        var global2 = require_global();
        var isCallable = require_is_callable();
        var aFunction = function(argument) {
          return isCallable(argument) ? argument : void 0;
        };
        module.exports = function(namespace, method) {
          return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
        };
      }
    });
  
    // node_modules/core-js/internals/object-is-prototype-of.js
    var require_object_is_prototype_of = __commonJS({
      "node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
        var uncurryThis = require_function_uncurry_this();
        module.exports = uncurryThis({}.isPrototypeOf);
      }
    });
  
    // node_modules/core-js/internals/engine-user-agent.js
    var require_engine_user_agent = __commonJS({
      "node_modules/core-js/internals/engine-user-agent.js"(exports, module) {
        var getBuiltIn = require_get_built_in();
        module.exports = getBuiltIn("navigator", "userAgent") || "";
      }
    });
  
    // node_modules/core-js/internals/engine-v8-version.js
    var require_engine_v8_version = __commonJS({
      "node_modules/core-js/internals/engine-v8-version.js"(exports, module) {
        var global2 = require_global();
        var userAgent = require_engine_user_agent();
        var process2 = global2.process;
        var Deno = global2.Deno;
        var versions = process2 && process2.versions || Deno && Deno.version;
        var v8 = versions && versions.v8;
        var match;
        var version;
        if (v8) {
          match = v8.split(".");
          version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
        }
        if (!version && userAgent) {
          match = userAgent.match(/Edge\/(\d+)/);
          if (!match || match[1] >= 74) {
            match = userAgent.match(/Chrome\/(\d+)/);
            if (match)
              version = +match[1];
          }
        }
        module.exports = version;
      }
    });
  
    // node_modules/core-js/internals/native-symbol.js
    var require_native_symbol = __commonJS({
      "node_modules/core-js/internals/native-symbol.js"(exports, module) {
        var V8_VERSION = require_engine_v8_version();
        var fails = require_fails();
        module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
          var symbol = Symbol();
          return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
          !Symbol.sham && V8_VERSION && V8_VERSION < 41;
        });
      }
    });
  
    // node_modules/core-js/internals/use-symbol-as-uid.js
    var require_use_symbol_as_uid = __commonJS({
      "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
        var NATIVE_SYMBOL = require_native_symbol();
        module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
      }
    });
  
    // node_modules/core-js/internals/is-symbol.js
    var require_is_symbol = __commonJS({
      "node_modules/core-js/internals/is-symbol.js"(exports, module) {
        var global2 = require_global();
        var getBuiltIn = require_get_built_in();
        var isCallable = require_is_callable();
        var isPrototypeOf = require_object_is_prototype_of();
        var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
        var Object2 = global2.Object;
        module.exports = USE_SYMBOL_AS_UID ? function(it) {
          return typeof it == "symbol";
        } : function(it) {
          var $Symbol = getBuiltIn("Symbol");
          return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object2(it));
        };
      }
    });
  
    // node_modules/core-js/internals/try-to-string.js
    var require_try_to_string = __commonJS({
      "node_modules/core-js/internals/try-to-string.js"(exports, module) {
        var global2 = require_global();
        var String2 = global2.String;
        module.exports = function(argument) {
          try {
            return String2(argument);
          } catch (error) {
            return "Object";
          }
        };
      }
    });
  
    // node_modules/core-js/internals/a-callable.js
    var require_a_callable = __commonJS({
      "node_modules/core-js/internals/a-callable.js"(exports, module) {
        var global2 = require_global();
        var isCallable = require_is_callable();
        var tryToString = require_try_to_string();
        var TypeError2 = global2.TypeError;
        module.exports = function(argument) {
          if (isCallable(argument))
            return argument;
          throw TypeError2(tryToString(argument) + " is not a function");
        };
      }
    });
  
    // node_modules/core-js/internals/get-method.js
    var require_get_method = __commonJS({
      "node_modules/core-js/internals/get-method.js"(exports, module) {
        var aCallable = require_a_callable();
        module.exports = function(V, P) {
          var func = V[P];
          return func == null ? void 0 : aCallable(func);
        };
      }
    });
  
    // node_modules/core-js/internals/ordinary-to-primitive.js
    var require_ordinary_to_primitive = __commonJS({
      "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
        var global2 = require_global();
        var call = require_function_call();
        var isCallable = require_is_callable();
        var isObject = require_is_object();
        var TypeError2 = global2.TypeError;
        module.exports = function(input, pref) {
          var fn, val;
          if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
            return val;
          if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)))
            return val;
          if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
            return val;
          throw TypeError2("Can't convert object to primitive value");
        };
      }
    });
  
    // node_modules/core-js/internals/is-pure.js
    var require_is_pure = __commonJS({
      "node_modules/core-js/internals/is-pure.js"(exports, module) {
        module.exports = false;
      }
    });
  
    // node_modules/core-js/internals/set-global.js
    var require_set_global = __commonJS({
      "node_modules/core-js/internals/set-global.js"(exports, module) {
        var global2 = require_global();
        var defineProperty = Object.defineProperty;
        module.exports = function(key, value) {
          try {
            defineProperty(global2, key, { value, configurable: true, writable: true });
          } catch (error) {
            global2[key] = value;
          }
          return value;
        };
      }
    });
  
    // node_modules/core-js/internals/shared-store.js
    var require_shared_store = __commonJS({
      "node_modules/core-js/internals/shared-store.js"(exports, module) {
        var global2 = require_global();
        var setGlobal = require_set_global();
        var SHARED = "__core-js_shared__";
        var store = global2[SHARED] || setGlobal(SHARED, {});
        module.exports = store;
      }
    });
  
    // node_modules/core-js/internals/shared.js
    var require_shared = __commonJS({
      "node_modules/core-js/internals/shared.js"(exports, module) {
        var IS_PURE = require_is_pure();
        var store = require_shared_store();
        (module.exports = function(key, value) {
          return store[key] || (store[key] = value !== void 0 ? value : {});
        })("versions", []).push({
          version: "3.19.0",
          mode: IS_PURE ? "pure" : "global",
          copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        });
      }
    });
  
    // node_modules/core-js/internals/to-object.js
    var require_to_object = __commonJS({
      "node_modules/core-js/internals/to-object.js"(exports, module) {
        var global2 = require_global();
        var requireObjectCoercible = require_require_object_coercible();
        var Object2 = global2.Object;
        module.exports = function(argument) {
          return Object2(requireObjectCoercible(argument));
        };
      }
    });
  
    // node_modules/core-js/internals/has-own-property.js
    var require_has_own_property = __commonJS({
      "node_modules/core-js/internals/has-own-property.js"(exports, module) {
        var uncurryThis = require_function_uncurry_this();
        var toObject = require_to_object();
        var hasOwnProperty2 = uncurryThis({}.hasOwnProperty);
        module.exports = Object.hasOwn || function hasOwn(it, key) {
          return hasOwnProperty2(toObject(it), key);
        };
      }
    });
  
    // node_modules/core-js/internals/uid.js
    var require_uid = __commonJS({
      "node_modules/core-js/internals/uid.js"(exports, module) {
        var uncurryThis = require_function_uncurry_this();
        var id = 0;
        var postfix = Math.random();
        var toString = uncurryThis(1 .toString);
        module.exports = function(key) {
          return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
        };
      }
    });
  
    // node_modules/core-js/internals/well-known-symbol.js
    var require_well_known_symbol = __commonJS({
      "node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
        var global2 = require_global();
        var shared = require_shared();
        var hasOwn = require_has_own_property();
        var uid = require_uid();
        var NATIVE_SYMBOL = require_native_symbol();
        var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
        var WellKnownSymbolsStore = shared("wks");
        var Symbol2 = global2.Symbol;
        var symbolFor = Symbol2 && Symbol2["for"];
        var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
        module.exports = function(name) {
          if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
            var description = "Symbol." + name;
            if (NATIVE_SYMBOL && hasOwn(Symbol2, name)) {
              WellKnownSymbolsStore[name] = Symbol2[name];
            } else if (USE_SYMBOL_AS_UID && symbolFor) {
              WellKnownSymbolsStore[name] = symbolFor(description);
            } else {
              WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
            }
          }
          return WellKnownSymbolsStore[name];
        };
      }
    });
  
    // node_modules/core-js/internals/to-primitive.js
    var require_to_primitive = __commonJS({
      "node_modules/core-js/internals/to-primitive.js"(exports, module) {
        var global2 = require_global();
        var call = require_function_call();
        var isObject = require_is_object();
        var isSymbol = require_is_symbol();
        var getMethod = require_get_method();
        var ordinaryToPrimitive = require_ordinary_to_primitive();
        var wellKnownSymbol = require_well_known_symbol();
        var TypeError2 = global2.TypeError;
        var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
        module.exports = function(input, pref) {
          if (!isObject(input) || isSymbol(input))
            return input;
          var exoticToPrim = getMethod(input, TO_PRIMITIVE);
          var result;
          if (exoticToPrim) {
            if (pref === void 0)
              pref = "default";
            result = call(exoticToPrim, input, pref);
            if (!isObject(result) || isSymbol(result))
              return result;
            throw TypeError2("Can't convert object to primitive value");
          }
          if (pref === void 0)
            pref = "number";
          return ordinaryToPrimitive(input, pref);
        };
      }
    });
  
    // node_modules/core-js/internals/to-property-key.js
    var require_to_property_key = __commonJS({
      "node_modules/core-js/internals/to-property-key.js"(exports, module) {
        var toPrimitive = require_to_primitive();
        var isSymbol = require_is_symbol();
        module.exports = function(argument) {
          var key = toPrimitive(argument, "string");
          return isSymbol(key) ? key : key + "";
        };
      }
    });
  
    // node_modules/core-js/internals/document-create-element.js
    var require_document_create_element = __commonJS({
      "node_modules/core-js/internals/document-create-element.js"(exports, module) {
        var global2 = require_global();
        var isObject = require_is_object();
        var document2 = global2.document;
        var EXISTS = isObject(document2) && isObject(document2.createElement);
        module.exports = function(it) {
          return EXISTS ? document2.createElement(it) : {};
        };
      }
    });
  
    // node_modules/core-js/internals/ie8-dom-define.js
    var require_ie8_dom_define = __commonJS({
      "node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
        var DESCRIPTORS = require_descriptors();
        var fails = require_fails();
        var createElement = require_document_create_element();
        module.exports = !DESCRIPTORS && !fails(function() {
          return Object.defineProperty(createElement("div"), "a", {
            get: function() {
              return 7;
            }
          }).a != 7;
        });
      }
    });
  
    // node_modules/core-js/internals/object-get-own-property-descriptor.js
    var require_object_get_own_property_descriptor = __commonJS({
      "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
        var DESCRIPTORS = require_descriptors();
        var call = require_function_call();
        var propertyIsEnumerableModule = require_object_property_is_enumerable();
        var createPropertyDescriptor = require_create_property_descriptor();
        var toIndexedObject = require_to_indexed_object();
        var toPropertyKey = require_to_property_key();
        var hasOwn = require_has_own_property();
        var IE8_DOM_DEFINE = require_ie8_dom_define();
        var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
          O = toIndexedObject(O);
          P = toPropertyKey(P);
          if (IE8_DOM_DEFINE)
            try {
              return $getOwnPropertyDescriptor(O, P);
            } catch (error) {
            }
          if (hasOwn(O, P))
            return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
        };
      }
    });
  
    // node_modules/core-js/internals/an-object.js
    var require_an_object = __commonJS({
      "node_modules/core-js/internals/an-object.js"(exports, module) {
        var global2 = require_global();
        var isObject = require_is_object();
        var String2 = global2.String;
        var TypeError2 = global2.TypeError;
        module.exports = function(argument) {
          if (isObject(argument))
            return argument;
          throw TypeError2(String2(argument) + " is not an object");
        };
      }
    });
  
    // node_modules/core-js/internals/object-define-property.js
    var require_object_define_property = __commonJS({
      "node_modules/core-js/internals/object-define-property.js"(exports) {
        var global2 = require_global();
        var DESCRIPTORS = require_descriptors();
        var IE8_DOM_DEFINE = require_ie8_dom_define();
        var anObject = require_an_object();
        var toPropertyKey = require_to_property_key();
        var TypeError2 = global2.TypeError;
        var $defineProperty = Object.defineProperty;
        exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPropertyKey(P);
          anObject(Attributes);
          if (IE8_DOM_DEFINE)
            try {
              return $defineProperty(O, P, Attributes);
            } catch (error) {
            }
          if ("get" in Attributes || "set" in Attributes)
            throw TypeError2("Accessors not supported");
          if ("value" in Attributes)
            O[P] = Attributes.value;
          return O;
        };
      }
    });
  
    // node_modules/core-js/internals/create-non-enumerable-property.js
    var require_create_non_enumerable_property = __commonJS({
      "node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
        var DESCRIPTORS = require_descriptors();
        var definePropertyModule = require_object_define_property();
        var createPropertyDescriptor = require_create_property_descriptor();
        module.exports = DESCRIPTORS ? function(object, key, value) {
          return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
        } : function(object, key, value) {
          object[key] = value;
          return object;
        };
      }
    });
  
    // node_modules/core-js/internals/inspect-source.js
    var require_inspect_source = __commonJS({
      "node_modules/core-js/internals/inspect-source.js"(exports, module) {
        var uncurryThis = require_function_uncurry_this();
        var isCallable = require_is_callable();
        var store = require_shared_store();
        var functionToString = uncurryThis(Function.toString);
        if (!isCallable(store.inspectSource)) {
          store.inspectSource = function(it) {
            return functionToString(it);
          };
        }
        module.exports = store.inspectSource;
      }
    });
  
    // node_modules/core-js/internals/native-weak-map.js
    var require_native_weak_map = __commonJS({
      "node_modules/core-js/internals/native-weak-map.js"(exports, module) {
        var global2 = require_global();
        var isCallable = require_is_callable();
        var inspectSource = require_inspect_source();
        var WeakMap2 = global2.WeakMap;
        module.exports = isCallable(WeakMap2) && /native code/.test(inspectSource(WeakMap2));
      }
    });
  
    // node_modules/core-js/internals/shared-key.js
    var require_shared_key = __commonJS({
      "node_modules/core-js/internals/shared-key.js"(exports, module) {
        var shared = require_shared();
        var uid = require_uid();
        var keys = shared("keys");
        module.exports = function(key) {
          return keys[key] || (keys[key] = uid(key));
        };
      }
    });
  
    // node_modules/core-js/internals/hidden-keys.js
    var require_hidden_keys = __commonJS({
      "node_modules/core-js/internals/hidden-keys.js"(exports, module) {
        module.exports = {};
      }
    });
  
    // node_modules/core-js/internals/internal-state.js
    var require_internal_state = __commonJS({
      "node_modules/core-js/internals/internal-state.js"(exports, module) {
        var NATIVE_WEAK_MAP = require_native_weak_map();
        var global2 = require_global();
        var uncurryThis = require_function_uncurry_this();
        var isObject = require_is_object();
        var createNonEnumerableProperty = require_create_non_enumerable_property();
        var hasOwn = require_has_own_property();
        var shared = require_shared_store();
        var sharedKey = require_shared_key();
        var hiddenKeys = require_hidden_keys();
        var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
        var TypeError2 = global2.TypeError;
        var WeakMap2 = global2.WeakMap;
        var set3;
        var get3;
        var has;
        var enforce = function(it) {
          return has(it) ? get3(it) : set3(it, {});
        };
        var getterFor = function(TYPE) {
          return function(it) {
            var state;
            if (!isObject(it) || (state = get3(it)).type !== TYPE) {
              throw TypeError2("Incompatible receiver, " + TYPE + " required");
            }
            return state;
          };
        };
        if (NATIVE_WEAK_MAP || shared.state) {
          store = shared.state || (shared.state = new WeakMap2());
          wmget = uncurryThis(store.get);
          wmhas = uncurryThis(store.has);
          wmset = uncurryThis(store.set);
          set3 = function(it, metadata) {
            if (wmhas(store, it))
              throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            wmset(store, it, metadata);
            return metadata;
          };
          get3 = function(it) {
            return wmget(store, it) || {};
          };
          has = function(it) {
            return wmhas(store, it);
          };
        } else {
          STATE = sharedKey("state");
          hiddenKeys[STATE] = true;
          set3 = function(it, metadata) {
            if (hasOwn(it, STATE))
              throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };
          get3 = function(it) {
            return hasOwn(it, STATE) ? it[STATE] : {};
          };
          has = function(it) {
            return hasOwn(it, STATE);
          };
        }
        var store;
        var wmget;
        var wmhas;
        var wmset;
        var STATE;
        module.exports = {
          set: set3,
          get: get3,
          has,
          enforce,
          getterFor
        };
      }
    });
  
    // node_modules/core-js/internals/function-name.js
    var require_function_name = __commonJS({
      "node_modules/core-js/internals/function-name.js"(exports, module) {
        var DESCRIPTORS = require_descriptors();
        var hasOwn = require_has_own_property();
        var FunctionPrototype = Function.prototype;
        var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
        var EXISTS = hasOwn(FunctionPrototype, "name");
        var PROPER = EXISTS && function something() {
        }.name === "something";
        var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
        module.exports = {
          EXISTS,
          PROPER,
          CONFIGURABLE
        };
      }
    });
  
    // node_modules/core-js/internals/redefine.js
    var require_redefine = __commonJS({
      "node_modules/core-js/internals/redefine.js"(exports, module) {
        var global2 = require_global();
        var isCallable = require_is_callable();
        var hasOwn = require_has_own_property();
        var createNonEnumerableProperty = require_create_non_enumerable_property();
        var setGlobal = require_set_global();
        var inspectSource = require_inspect_source();
        var InternalStateModule = require_internal_state();
        var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
        var getInternalState = InternalStateModule.get;
        var enforceInternalState = InternalStateModule.enforce;
        var TEMPLATE = String(String).split("String");
        (module.exports = function(O, key, value, options) {
          var unsafe = options ? !!options.unsafe : false;
          var simple = options ? !!options.enumerable : false;
          var noTargetGet = options ? !!options.noTargetGet : false;
          var name = options && options.name !== void 0 ? options.name : key;
          var state;
          if (isCallable(value)) {
            if (String(name).slice(0, 7) === "Symbol(") {
              name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
            }
            if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
              createNonEnumerableProperty(value, "name", name);
            }
            state = enforceInternalState(value);
            if (!state.source) {
              state.source = TEMPLATE.join(typeof name == "string" ? name : "");
            }
          }
          if (O === global2) {
            if (simple)
              O[key] = value;
            else
              setGlobal(key, value);
            return;
          } else if (!unsafe) {
            delete O[key];
          } else if (!noTargetGet && O[key]) {
            simple = true;
          }
          if (simple)
            O[key] = value;
          else
            createNonEnumerableProperty(O, key, value);
        })(Function.prototype, "toString", function toString() {
          return isCallable(this) && getInternalState(this).source || inspectSource(this);
        });
      }
    });
  
    // node_modules/core-js/internals/to-integer-or-infinity.js
    var require_to_integer_or_infinity = __commonJS({
      "node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
        var ceil = Math.ceil;
        var floor = Math.floor;
        module.exports = function(argument) {
          var number = +argument;
          return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
        };
      }
    });
  
    // node_modules/core-js/internals/to-absolute-index.js
    var require_to_absolute_index = __commonJS({
      "node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
        var toIntegerOrInfinity = require_to_integer_or_infinity();
        var max = Math.max;
        var min = Math.min;
        module.exports = function(index, length) {
          var integer = toIntegerOrInfinity(index);
          return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };
      }
    });
  
    // node_modules/core-js/internals/to-length.js
    var require_to_length = __commonJS({
      "node_modules/core-js/internals/to-length.js"(exports, module) {
        var toIntegerOrInfinity = require_to_integer_or_infinity();
        var min = Math.min;
        module.exports = function(argument) {
          return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
        };
      }
    });
  
    // node_modules/core-js/internals/length-of-array-like.js
    var require_length_of_array_like = __commonJS({
      "node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
        var toLength = require_to_length();
        module.exports = function(obj) {
          return toLength(obj.length);
        };
      }
    });
  
    // node_modules/core-js/internals/array-includes.js
    var require_array_includes = __commonJS({
      "node_modules/core-js/internals/array-includes.js"(exports, module) {
        var toIndexedObject = require_to_indexed_object();
        var toAbsoluteIndex = require_to_absolute_index();
        var lengthOfArrayLike = require_length_of_array_like();
        var createMethod = function(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = lengthOfArrayLike(O);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            if (IS_INCLUDES && el != el)
              while (length > index) {
                value = O[index++];
                if (value != value)
                  return true;
              }
            else
              for (; length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el)
                  return IS_INCLUDES || index || 0;
              }
            return !IS_INCLUDES && -1;
          };
        };
        module.exports = {
          // `Array.prototype.includes` method
          // https://tc39.es/ecma262/#sec-array.prototype.includes
          includes: createMethod(true),
          // `Array.prototype.indexOf` method
          // https://tc39.es/ecma262/#sec-array.prototype.indexof
          indexOf: createMethod(false)
        };
      }
    });
  
    // node_modules/core-js/internals/object-keys-internal.js
    var require_object_keys_internal = __commonJS({
      "node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
        var uncurryThis = require_function_uncurry_this();
        var hasOwn = require_has_own_property();
        var toIndexedObject = require_to_indexed_object();
        var indexOf = require_array_includes().indexOf;
        var hiddenKeys = require_hidden_keys();
        var push = uncurryThis([].push);
        module.exports = function(object, names) {
          var O = toIndexedObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O)
            !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
          while (names.length > i)
            if (hasOwn(O, key = names[i++])) {
              ~indexOf(result, key) || push(result, key);
            }
          return result;
        };
      }
    });
  
    // node_modules/core-js/internals/enum-bug-keys.js
    var require_enum_bug_keys = __commonJS({
      "node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
        module.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf"
        ];
      }
    });
  
    // node_modules/core-js/internals/object-get-own-property-names.js
    var require_object_get_own_property_names = __commonJS({
      "node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
        var internalObjectKeys = require_object_keys_internal();
        var enumBugKeys = require_enum_bug_keys();
        var hiddenKeys = enumBugKeys.concat("length", "prototype");
        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
          return internalObjectKeys(O, hiddenKeys);
        };
      }
    });
  
    // node_modules/core-js/internals/object-get-own-property-symbols.js
    var require_object_get_own_property_symbols = __commonJS({
      "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
        exports.f = Object.getOwnPropertySymbols;
      }
    });
  
    // node_modules/core-js/internals/own-keys.js
    var require_own_keys = __commonJS({
      "node_modules/core-js/internals/own-keys.js"(exports, module) {
        var getBuiltIn = require_get_built_in();
        var uncurryThis = require_function_uncurry_this();
        var getOwnPropertyNamesModule = require_object_get_own_property_names();
        var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
        var anObject = require_an_object();
        var concat = uncurryThis([].concat);
        module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
          var keys = getOwnPropertyNamesModule.f(anObject(it));
          var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
          return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
        };
      }
    });
  
    // node_modules/core-js/internals/copy-constructor-properties.js
    var require_copy_constructor_properties = __commonJS({
      "node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
        var hasOwn = require_has_own_property();
        var ownKeys = require_own_keys();
        var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
        var definePropertyModule = require_object_define_property();
        module.exports = function(target, source) {
          var keys = ownKeys(source);
          var defineProperty = definePropertyModule.f;
          var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!hasOwn(target, key))
              defineProperty(target, key, getOwnPropertyDescriptor(source, key));
          }
        };
      }
    });
  
    // node_modules/core-js/internals/is-forced.js
    var require_is_forced = __commonJS({
      "node_modules/core-js/internals/is-forced.js"(exports, module) {
        var fails = require_fails();
        var isCallable = require_is_callable();
        var replacement = /#|\.prototype\./;
        var isForced = function(feature, detection) {
          var value = data[normalize(feature)];
          return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
        };
        var normalize = isForced.normalize = function(string) {
          return String(string).replace(replacement, ".").toLowerCase();
        };
        var data = isForced.data = {};
        var NATIVE = isForced.NATIVE = "N";
        var POLYFILL = isForced.POLYFILL = "P";
        module.exports = isForced;
      }
    });
  
    // node_modules/core-js/internals/export.js
    var require_export = __commonJS({
      "node_modules/core-js/internals/export.js"(exports, module) {
        var global2 = require_global();
        var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
        var createNonEnumerableProperty = require_create_non_enumerable_property();
        var redefine = require_redefine();
        var setGlobal = require_set_global();
        var copyConstructorProperties = require_copy_constructor_properties();
        var isForced = require_is_forced();
        module.exports = function(options, source) {
          var TARGET = options.target;
          var GLOBAL = options.global;
          var STATIC = options.stat;
          var FORCED, target, key, targetProperty, sourceProperty, descriptor;
          if (GLOBAL) {
            target = global2;
          } else if (STATIC) {
            target = global2[TARGET] || setGlobal(TARGET, {});
          } else {
            target = (global2[TARGET] || {}).prototype;
          }
          if (target)
            for (key in source) {
              sourceProperty = source[key];
              if (options.noTargetGet) {
                descriptor = getOwnPropertyDescriptor(target, key);
                targetProperty = descriptor && descriptor.value;
              } else
                targetProperty = target[key];
              FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
              if (!FORCED && targetProperty !== void 0) {
                if (typeof sourceProperty == typeof targetProperty)
                  continue;
                copyConstructorProperties(sourceProperty, targetProperty);
              }
              if (options.sham || targetProperty && targetProperty.sham) {
                createNonEnumerableProperty(sourceProperty, "sham", true);
              }
              redefine(target, key, sourceProperty, options);
            }
        };
      }
    });
  
    // node_modules/core-js/internals/object-keys.js
    var require_object_keys = __commonJS({
      "node_modules/core-js/internals/object-keys.js"(exports, module) {
        var internalObjectKeys = require_object_keys_internal();
        var enumBugKeys = require_enum_bug_keys();
        module.exports = Object.keys || function keys(O) {
          return internalObjectKeys(O, enumBugKeys);
        };
      }
    });
  
    // node_modules/core-js/internals/object-define-properties.js
    var require_object_define_properties = __commonJS({
      "node_modules/core-js/internals/object-define-properties.js"(exports, module) {
        var DESCRIPTORS = require_descriptors();
        var definePropertyModule = require_object_define_property();
        var anObject = require_an_object();
        var toIndexedObject = require_to_indexed_object();
        var objectKeys = require_object_keys();
        module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
          anObject(O);
          var props = toIndexedObject(Properties);
          var keys = objectKeys(Properties);
          var length = keys.length;
          var index = 0;
          var key;
          while (length > index)
            definePropertyModule.f(O, key = keys[index++], props[key]);
          return O;
        };
      }
    });
  
    // node_modules/core-js/internals/html.js
    var require_html = __commonJS({
      "node_modules/core-js/internals/html.js"(exports, module) {
        var getBuiltIn = require_get_built_in();
        module.exports = getBuiltIn("document", "documentElement");
      }
    });
  
    // node_modules/core-js/internals/object-create.js
    var require_object_create = __commonJS({
      "node_modules/core-js/internals/object-create.js"(exports, module) {
        var anObject = require_an_object();
        var defineProperties = require_object_define_properties();
        var enumBugKeys = require_enum_bug_keys();
        var hiddenKeys = require_hidden_keys();
        var html = require_html();
        var documentCreateElement = require_document_create_element();
        var sharedKey = require_shared_key();
        var GT = ">";
        var LT = "<";
        var PROTOTYPE = "prototype";
        var SCRIPT = "script";
        var IE_PROTO = sharedKey("IE_PROTO");
        var EmptyConstructor = function() {
        };
        var scriptTag = function(content) {
          return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
        };
        var NullProtoObjectViaActiveX = function(activeXDocument2) {
          activeXDocument2.write(scriptTag(""));
          activeXDocument2.close();
          var temp = activeXDocument2.parentWindow.Object;
          activeXDocument2 = null;
          return temp;
        };
        var NullProtoObjectViaIFrame = function() {
          var iframe = documentCreateElement("iframe");
          var JS = "java" + SCRIPT + ":";
          var iframeDocument;
          iframe.style.display = "none";
          html.appendChild(iframe);
          iframe.src = String(JS);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(scriptTag("document.F=Object"));
          iframeDocument.close();
          return iframeDocument.F;
        };
        var activeXDocument;
        var NullProtoObject = function() {
          try {
            activeXDocument = new ActiveXObject("htmlfile");
          } catch (error) {
          }
          NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
          var length = enumBugKeys.length;
          while (length--)
            delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
          return NullProtoObject();
        };
        hiddenKeys[IE_PROTO] = true;
        module.exports = Object.create || function create(O, Properties) {
          var result;
          if (O !== null) {
            EmptyConstructor[PROTOTYPE] = anObject(O);
            result = new EmptyConstructor();
            EmptyConstructor[PROTOTYPE] = null;
            result[IE_PROTO] = O;
          } else
            result = NullProtoObject();
          return Properties === void 0 ? result : defineProperties(result, Properties);
        };
      }
    });
  
    // node_modules/core-js/internals/add-to-unscopables.js
    var require_add_to_unscopables = __commonJS({
      "node_modules/core-js/internals/add-to-unscopables.js"(exports, module) {
        var wellKnownSymbol = require_well_known_symbol();
        var create = require_object_create();
        var definePropertyModule = require_object_define_property();
        var UNSCOPABLES = wellKnownSymbol("unscopables");
        var ArrayPrototype = Array.prototype;
        if (ArrayPrototype[UNSCOPABLES] == void 0) {
          definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
            configurable: true,
            value: create(null)
          });
        }
        module.exports = function(key) {
          ArrayPrototype[UNSCOPABLES][key] = true;
        };
      }
    });
  
    // node_modules/core-js/modules/es.array.includes.js
    var require_es_array_includes = __commonJS({
      "node_modules/core-js/modules/es.array.includes.js"() {
        "use strict";
        var $ = require_export();
        var $includes = require_array_includes().includes;
        var addToUnscopables = require_add_to_unscopables();
        $({ target: "Array", proto: true }, {
          includes: function includes(el) {
            return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        addToUnscopables("includes");
      }
    });
  
    // node_modules/core-js/internals/entry-unbind.js
    var require_entry_unbind = __commonJS({
      "node_modules/core-js/internals/entry-unbind.js"(exports, module) {
        var global2 = require_global();
        var uncurryThis = require_function_uncurry_this();
        module.exports = function(CONSTRUCTOR, METHOD) {
          return uncurryThis(global2[CONSTRUCTOR].prototype[METHOD]);
        };
      }
    });
  
    // node_modules/core-js/es/array/includes.js
    var require_includes = __commonJS({
      "node_modules/core-js/es/array/includes.js"(exports, module) {
        require_es_array_includes();
        var entryUnbind = require_entry_unbind();
        module.exports = entryUnbind("Array", "includes");
      }
    });
  
    // node_modules/core-js/stable/array/includes.js
    var require_includes2 = __commonJS({
      "node_modules/core-js/stable/array/includes.js"(exports, module) {
        var parent = require_includes();
        module.exports = parent;
      }
    });
  
    // node_modules/core-js/features/array/includes.js
    var require_includes3 = __commonJS({
      "node_modules/core-js/features/array/includes.js"(exports, module) {
        var parent = require_includes2();
        module.exports = parent;
      }
    });
  
    // node_modules/lodash/_freeGlobal.js
    var require_freeGlobal = __commonJS({
      "node_modules/lodash/_freeGlobal.js"(exports, module) {
        var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
        module.exports = freeGlobal;
      }
    });
  
    // node_modules/lodash/_root.js
    var require_root = __commonJS({
      "node_modules/lodash/_root.js"(exports, module) {
        var freeGlobal = require_freeGlobal();
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        module.exports = root;
      }
    });
  
    // node_modules/lodash/_Symbol.js
    var require_Symbol = __commonJS({
      "node_modules/lodash/_Symbol.js"(exports, module) {
        var root = require_root();
        var Symbol2 = root.Symbol;
        module.exports = Symbol2;
      }
    });
  
    // node_modules/lodash/_getRawTag.js
    var require_getRawTag = __commonJS({
      "node_modules/lodash/_getRawTag.js"(exports, module) {
        var Symbol2 = require_Symbol();
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        var nativeObjectToString = objectProto.toString;
        var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
        function getRawTag(value) {
          var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = void 0;
            var unmasked = true;
          } catch (e) {
          }
          var result = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result;
        }
        module.exports = getRawTag;
      }
    });
  
    // node_modules/lodash/_objectToString.js
    var require_objectToString = __commonJS({
      "node_modules/lodash/_objectToString.js"(exports, module) {
        var objectProto = Object.prototype;
        var nativeObjectToString = objectProto.toString;
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        module.exports = objectToString;
      }
    });
  
    // node_modules/lodash/_baseGetTag.js
    var require_baseGetTag = __commonJS({
      "node_modules/lodash/_baseGetTag.js"(exports, module) {
        var Symbol2 = require_Symbol();
        var getRawTag = require_getRawTag();
        var objectToString = require_objectToString();
        var nullTag = "[object Null]";
        var undefinedTag = "[object Undefined]";
        var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
        function baseGetTag(value) {
          if (value == null) {
            return value === void 0 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
        }
        module.exports = baseGetTag;
      }
    });
  
    // node_modules/lodash/_overArg.js
    var require_overArg = __commonJS({
      "node_modules/lodash/_overArg.js"(exports, module) {
        function overArg(func, transform) {
          return function(arg) {
            return func(transform(arg));
          };
        }
        module.exports = overArg;
      }
    });
  
    // node_modules/lodash/_getPrototype.js
    var require_getPrototype = __commonJS({
      "node_modules/lodash/_getPrototype.js"(exports, module) {
        var overArg = require_overArg();
        var getPrototype = overArg(Object.getPrototypeOf, Object);
        module.exports = getPrototype;
      }
    });
  
    // node_modules/lodash/isObjectLike.js
    var require_isObjectLike = __commonJS({
      "node_modules/lodash/isObjectLike.js"(exports, module) {
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        module.exports = isObjectLike;
      }
    });
  
    // node_modules/lodash/isPlainObject.js
    var require_isPlainObject = __commonJS({
      "node_modules/lodash/isPlainObject.js"(exports, module) {
        var baseGetTag = require_baseGetTag();
        var getPrototype = require_getPrototype();
        var isObjectLike = require_isObjectLike();
        var objectTag = "[object Object]";
        var funcProto = Function.prototype;
        var objectProto = Object.prototype;
        var funcToString = funcProto.toString;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        var objectCtorString = funcToString.call(Object);
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        module.exports = isPlainObject;
      }
    });
  
    // node_modules/symbol-observable/lib/ponyfill.js
    var require_ponyfill = __commonJS({
      "node_modules/symbol-observable/lib/ponyfill.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = symbolObservablePonyfill;
        function symbolObservablePonyfill(root) {
          var result;
          var _Symbol = root.Symbol;
          if (typeof _Symbol === "function") {
            if (_Symbol.observable) {
              result = _Symbol.observable;
            } else {
              result = _Symbol("observable");
              _Symbol.observable = result;
            }
          } else {
            result = "@@observable";
          }
          return result;
        }
      }
    });
  
    // node_modules/symbol-observable/lib/index.js
    var require_lib = __commonJS({
      "node_modules/symbol-observable/lib/index.js"(exports, module) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var _ponyfill = require_ponyfill();
        var _ponyfill2 = _interopRequireDefault(_ponyfill);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        var root;
        if (typeof self !== "undefined") {
          root = self;
        } else if (typeof window !== "undefined") {
          root = window;
        } else if (typeof global !== "undefined") {
          root = global;
        } else if (typeof module !== "undefined") {
          root = module;
        } else {
          root = Function("return this")();
        }
        var result = (0, _ponyfill2["default"])(root);
        exports["default"] = result;
      }
    });
  
    // node_modules/redux/lib/createStore.js
    var require_createStore = __commonJS({
      "node_modules/redux/lib/createStore.js"(exports) {
        "use strict";
        exports.__esModule = true;
        exports.ActionTypes = void 0;
        exports["default"] = createStore;
        var _isPlainObject = require_isPlainObject();
        var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
        var _symbolObservable = require_lib();
        var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        var ActionTypes = exports.ActionTypes = {
          INIT: "@@redux/INIT"
        };
        function createStore(reducer, preloadedState, enhancer) {
          var _ref2;
          if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
            enhancer = preloadedState;
            preloadedState = void 0;
          }
          if (typeof enhancer !== "undefined") {
            if (typeof enhancer !== "function") {
              throw new Error("Expected the enhancer to be a function.");
            }
            return enhancer(createStore)(reducer, preloadedState);
          }
          if (typeof reducer !== "function") {
            throw new Error("Expected the reducer to be a function.");
          }
          var currentReducer = reducer;
          var currentState = preloadedState;
          var currentListeners = [];
          var nextListeners = currentListeners;
          var isDispatching = false;
          function ensureCanMutateNextListeners() {
            if (nextListeners === currentListeners) {
              nextListeners = currentListeners.slice();
            }
          }
          function getState() {
            return currentState;
          }
          function subscribe(listener) {
            if (typeof listener !== "function") {
              throw new Error("Expected listener to be a function.");
            }
            var isSubscribed = true;
            ensureCanMutateNextListeners();
            nextListeners.push(listener);
            return function unsubscribe() {
              if (!isSubscribed) {
                return;
              }
              isSubscribed = false;
              ensureCanMutateNextListeners();
              var index = nextListeners.indexOf(listener);
              nextListeners.splice(index, 1);
            };
          }
          function dispatch(action) {
            if (!(0, _isPlainObject2["default"])(action)) {
              throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            }
            if (typeof action.type === "undefined") {
              throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            }
            if (isDispatching) {
              throw new Error("Reducers may not dispatch actions.");
            }
            try {
              isDispatching = true;
              currentState = currentReducer(currentState, action);
            } finally {
              isDispatching = false;
            }
            var listeners = currentListeners = nextListeners;
            for (var i = 0; i < listeners.length; i++) {
              listeners[i]();
            }
            return action;
          }
          function replaceReducer(nextReducer) {
            if (typeof nextReducer !== "function") {
              throw new Error("Expected the nextReducer to be a function.");
            }
            currentReducer = nextReducer;
            dispatch({ type: ActionTypes.INIT });
          }
          function observable() {
            var _ref;
            var outerSubscribe = subscribe;
            return _ref = {
              /**
               * The minimal observable subscription method.
               * @param {Object} observer Any object that can be used as an observer.
               * The observer object should have a `next` method.
               * @returns {subscription} An object with an `unsubscribe` method that can
               * be used to unsubscribe the observable from the store, and prevent further
               * emission of values from the observable.
               */
              subscribe: function subscribe2(observer) {
                if (typeof observer !== "object") {
                  throw new TypeError("Expected the observer to be an object.");
                }
                function observeState() {
                  if (observer.next) {
                    observer.next(getState());
                  }
                }
                observeState();
                var unsubscribe = outerSubscribe(observeState);
                return { unsubscribe };
              }
            }, _ref[_symbolObservable2["default"]] = function() {
              return this;
            }, _ref;
          }
          dispatch({ type: ActionTypes.INIT });
          return _ref2 = {
            dispatch,
            subscribe,
            getState,
            replaceReducer
          }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
        }
      }
    });
  
    // node_modules/redux/lib/utils/warning.js
    var require_warning = __commonJS({
      "node_modules/redux/lib/utils/warning.js"(exports) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = warning;
        function warning(message) {
          if (typeof console !== "undefined" && typeof console.error === "function") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (e) {
          }
        }
      }
    });
  
    // node_modules/redux/lib/combineReducers.js
    var require_combineReducers = __commonJS({
      "node_modules/redux/lib/combineReducers.js"(exports) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = combineReducers2;
        var _createStore = require_createStore();
        var _isPlainObject = require_isPlainObject();
        var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
        var _warning = require_warning();
        var _warning2 = _interopRequireDefault(_warning);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        function getUndefinedStateErrorMessage(key, action) {
          var actionType = action && action.type;
          var actionName = actionType && '"' + actionType.toString() + '"' || "an action";
          return "Given action " + actionName + ', reducer "' + key + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
        }
        function assertReducerSanity(reducers) {
          Object.keys(reducers).forEach(function(key) {
            var reducer = reducers[key];
            var initialState4 = reducer(void 0, { type: _createStore.ActionTypes.INIT });
            if (typeof initialState4 === "undefined") {
              throw new Error('Reducer "' + key + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
            }
            var type = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
            if (typeof reducer(void 0, { type }) === "undefined") {
              throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
            }
          });
        }
        function combineReducers2(reducers) {
          var reducerKeys = Object.keys(reducers);
          var finalReducers = {};
          for (var i = 0; i < reducerKeys.length; i++) {
            var key = reducerKeys[i];
            if (false) {
              if (typeof reducers[key] === "undefined") {
                (0, _warning2["default"])('No reducer provided for key "' + key + '"');
              }
            }
            if (typeof reducers[key] === "function") {
              finalReducers[key] = reducers[key];
            }
          }
          var finalReducerKeys = Object.keys(finalReducers);
          if (false) {
            var unexpectedKeyCache = {};
          }
          var sanityError;
          try {
            assertReducerSanity(finalReducers);
          } catch (e) {
            sanityError = e;
          }
          return function combination() {
            var state = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
            var action = arguments[1];
            if (sanityError) {
              throw sanityError;
            }
            if (false) {
              var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
              if (warningMessage) {
                (0, _warning2["default"])(warningMessage);
              }
            }
            var hasChanged = false;
            var nextState = {};
            for (var i2 = 0; i2 < finalReducerKeys.length; i2++) {
              var key2 = finalReducerKeys[i2];
              var reducer = finalReducers[key2];
              var previousStateForKey = state[key2];
              var nextStateForKey = reducer(previousStateForKey, action);
              if (typeof nextStateForKey === "undefined") {
                var errorMessage = getUndefinedStateErrorMessage(key2, action);
                throw new Error(errorMessage);
              }
              nextState[key2] = nextStateForKey;
              hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
            }
            return hasChanged ? nextState : state;
          };
        }
      }
    });
  
    // node_modules/redux/lib/bindActionCreators.js
    var require_bindActionCreators = __commonJS({
      "node_modules/redux/lib/bindActionCreators.js"(exports) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = bindActionCreators;
        function bindActionCreator(actionCreator, dispatch) {
          return function() {
            return dispatch(actionCreator.apply(void 0, arguments));
          };
        }
        function bindActionCreators(actionCreators, dispatch) {
          if (typeof actionCreators === "function") {
            return bindActionCreator(actionCreators, dispatch);
          }
          if (typeof actionCreators !== "object" || actionCreators === null) {
            throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? "null" : typeof actionCreators) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
          }
          var keys = Object.keys(actionCreators);
          var boundActionCreators = {};
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var actionCreator = actionCreators[key];
            if (typeof actionCreator === "function") {
              boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
            }
          }
          return boundActionCreators;
        }
      }
    });
  
    // node_modules/redux/lib/compose.js
    var require_compose = __commonJS({
      "node_modules/redux/lib/compose.js"(exports) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = compose;
        function compose() {
          for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
            funcs[_key] = arguments[_key];
          }
          if (funcs.length === 0) {
            return function(arg) {
              return arg;
            };
          }
          if (funcs.length === 1) {
            return funcs[0];
          }
          var last = funcs[funcs.length - 1];
          var rest = funcs.slice(0, -1);
          return function() {
            return rest.reduceRight(function(composed, f) {
              return f(composed);
            }, last.apply(void 0, arguments));
          };
        }
      }
    });
  
    // node_modules/redux/lib/applyMiddleware.js
    var require_applyMiddleware = __commonJS({
      "node_modules/redux/lib/applyMiddleware.js"(exports) {
        "use strict";
        exports.__esModule = true;
        var _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        exports["default"] = applyMiddleware;
        var _compose = require_compose();
        var _compose2 = _interopRequireDefault(_compose);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        function applyMiddleware() {
          for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
            middlewares[_key] = arguments[_key];
          }
          return function(createStore) {
            return function(reducer, preloadedState, enhancer) {
              var store = createStore(reducer, preloadedState, enhancer);
              var _dispatch = store.dispatch;
              var chain = [];
              var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch(action) {
                  return _dispatch(action);
                }
              };
              chain = middlewares.map(function(middleware) {
                return middleware(middlewareAPI);
              });
              _dispatch = _compose2["default"].apply(void 0, chain)(store.dispatch);
              return _extends({}, store, {
                dispatch: _dispatch
              });
            };
          };
        }
      }
    });
  
    // node_modules/redux/lib/index.js
    var require_lib2 = __commonJS({
      "node_modules/redux/lib/index.js"(exports) {
        "use strict";
        exports.__esModule = true;
        exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = void 0;
        var _createStore = require_createStore();
        var _createStore2 = _interopRequireDefault(_createStore);
        var _combineReducers = require_combineReducers();
        var _combineReducers2 = _interopRequireDefault(_combineReducers);
        var _bindActionCreators = require_bindActionCreators();
        var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
        var _applyMiddleware = require_applyMiddleware();
        var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
        var _compose = require_compose();
        var _compose2 = _interopRequireDefault(_compose);
        var _warning = require_warning();
        var _warning2 = _interopRequireDefault(_warning);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        if (false) {
          (0, _warning2["default"])("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build.");
        }
        exports.createStore = _createStore2["default"];
        exports.combineReducers = _combineReducers2["default"];
        exports.bindActionCreators = _bindActionCreators2["default"];
        exports.applyMiddleware = _applyMiddleware2["default"];
        exports.compose = _compose2["default"];
      }
    });
  
    // packages/systems/ix2/shared-constants/trigger-events.ts
    var EventTypeConsts, EventAppliesTo, EventBasedOn, EventContinuousMouseAxes, EventLimitAffectedElements, QuickEffectIds, QuickEffectDirectionConsts;
    var init_trigger_events = __esm({
      "packages/systems/ix2/shared-constants/trigger-events.ts"() {
        "use strict";
        EventTypeConsts = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL"
        };
        EventAppliesTo = {
          ELEMENT: "ELEMENT",
          CLASS: "CLASS",
          PAGE: "PAGE"
        };
        EventBasedOn = {
          ELEMENT: "ELEMENT",
          VIEWPORT: "VIEWPORT"
        };
        EventContinuousMouseAxes = {
          X_AXIS: "X_AXIS",
          Y_AXIS: "Y_AXIS"
        };
        EventLimitAffectedElements = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        };
        QuickEffectIds = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        };
        QuickEffectDirectionConsts = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        };
      }
    });
  
    // packages/systems/ix2/shared-constants/animation-actions.ts
    var ActionTypeConsts, ActionAppliesTo;
    var init_animation_actions = __esm({
      "packages/systems/ix2/shared-constants/animation-actions.ts"() {
        "use strict";
        ActionTypeConsts = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          // TODO: Clean these up below because they're not used at this time
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        };
        ActionAppliesTo = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        };
      }
    });
  
    // packages/systems/ix2/shared-constants/trigger-interactions.ts
    var InteractionTypeConsts;
    var init_trigger_interactions = __esm({
      "packages/systems/ix2/shared-constants/trigger-interactions.ts"() {
        "use strict";
        InteractionTypeConsts = {
          MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
          MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
          MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
          SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
          SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
          MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
          PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
          PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
          PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
          NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
          DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
          ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
          TAB_INTERACTION: "TAB_INTERACTION",
          SLIDER_INTERACTION: "SLIDER_INTERACTION"
        };
      }
    });
  
    // packages/systems/ix2/shared-constants/reduced-motion.ts
    var TRANSFORM_MOVE, TRANSFORM_SCALE, TRANSFORM_ROTATE, TRANSFORM_SKEW, STYLE_SIZE, STYLE_FILTER, STYLE_FONT_VARIATION, ReducedMotionTypes;
    var init_reduced_motion = __esm({
      "packages/systems/ix2/shared-constants/reduced-motion.ts"() {
        "use strict";
        init_animation_actions();
        ({
          TRANSFORM_MOVE,
          TRANSFORM_SCALE,
          TRANSFORM_ROTATE,
          TRANSFORM_SKEW,
          STYLE_SIZE,
          STYLE_FILTER,
          STYLE_FONT_VARIATION
        } = ActionTypeConsts);
        ReducedMotionTypes = {
          [TRANSFORM_MOVE]: true,
          [TRANSFORM_SCALE]: true,
          [TRANSFORM_ROTATE]: true,
          [TRANSFORM_SKEW]: true,
          [STYLE_SIZE]: true,
          [STYLE_FILTER]: true,
          [STYLE_FONT_VARIATION]: true
        };
      }
    });
  
    // packages/systems/ix2/shared-constants/IX2EngineActionTypes.ts
    var IX2EngineActionTypes_exports = {};
    __export(IX2EngineActionTypes_exports, {
      IX2_ACTION_LIST_PLAYBACK_CHANGED: () => IX2_ACTION_LIST_PLAYBACK_CHANGED,
      IX2_ANIMATION_FRAME_CHANGED: () => IX2_ANIMATION_FRAME_CHANGED,
      IX2_CLEAR_REQUESTED: () => IX2_CLEAR_REQUESTED,
      IX2_ELEMENT_STATE_CHANGED: () => IX2_ELEMENT_STATE_CHANGED,
      IX2_EVENT_LISTENER_ADDED: () => IX2_EVENT_LISTENER_ADDED,
      IX2_EVENT_STATE_CHANGED: () => IX2_EVENT_STATE_CHANGED,
      IX2_INSTANCE_ADDED: () => IX2_INSTANCE_ADDED,
      IX2_INSTANCE_REMOVED: () => IX2_INSTANCE_REMOVED,
      IX2_INSTANCE_STARTED: () => IX2_INSTANCE_STARTED,
      IX2_MEDIA_QUERIES_DEFINED: () => IX2_MEDIA_QUERIES_DEFINED,
      IX2_PARAMETER_CHANGED: () => IX2_PARAMETER_CHANGED,
      IX2_PLAYBACK_REQUESTED: () => IX2_PLAYBACK_REQUESTED,
      IX2_PREVIEW_REQUESTED: () => IX2_PREVIEW_REQUESTED,
      IX2_RAW_DATA_IMPORTED: () => IX2_RAW_DATA_IMPORTED,
      IX2_SESSION_INITIALIZED: () => IX2_SESSION_INITIALIZED,
      IX2_SESSION_STARTED: () => IX2_SESSION_STARTED,
      IX2_SESSION_STOPPED: () => IX2_SESSION_STOPPED,
      IX2_STOP_REQUESTED: () => IX2_STOP_REQUESTED,
      IX2_TEST_FRAME_RENDERED: () => IX2_TEST_FRAME_RENDERED,
      IX2_VIEWPORT_WIDTH_CHANGED: () => IX2_VIEWPORT_WIDTH_CHANGED
    });
    var IX2_RAW_DATA_IMPORTED, IX2_SESSION_INITIALIZED, IX2_SESSION_STARTED, IX2_SESSION_STOPPED, IX2_PREVIEW_REQUESTED, IX2_PLAYBACK_REQUESTED, IX2_STOP_REQUESTED, IX2_CLEAR_REQUESTED, IX2_EVENT_LISTENER_ADDED, IX2_EVENT_STATE_CHANGED, IX2_ANIMATION_FRAME_CHANGED, IX2_PARAMETER_CHANGED, IX2_INSTANCE_ADDED, IX2_INSTANCE_STARTED, IX2_INSTANCE_REMOVED, IX2_ELEMENT_STATE_CHANGED, IX2_ACTION_LIST_PLAYBACK_CHANGED, IX2_VIEWPORT_WIDTH_CHANGED, IX2_MEDIA_QUERIES_DEFINED, IX2_TEST_FRAME_RENDERED;
    var init_IX2EngineActionTypes = __esm({
      "packages/systems/ix2/shared-constants/IX2EngineActionTypes.ts"() {
        "use strict";
        IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
        IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
        IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
        IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
        IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
        IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
        IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
        IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
        IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
        IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
        IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
        IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
        IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
        IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
        IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
        IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
        IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
        IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
        IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
        IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED";
      }
    });
  
    // packages/systems/ix2/shared-constants/IX2EngineConstants.ts
    var IX2EngineConstants_exports = {};
    __export(IX2EngineConstants_exports, {
      ABSTRACT_NODE: () => ABSTRACT_NODE,
      AUTO: () => AUTO,
      BACKGROUND: () => BACKGROUND,
      BACKGROUND_COLOR: () => BACKGROUND_COLOR,
      BAR_DELIMITER: () => BAR_DELIMITER,
      BORDER_COLOR: () => BORDER_COLOR,
      BOUNDARY_SELECTOR: () => BOUNDARY_SELECTOR,
      CHILDREN: () => CHILDREN,
      COLON_DELIMITER: () => COLON_DELIMITER,
      COLOR: () => COLOR,
      COMMA_DELIMITER: () => COMMA_DELIMITER,
      CONFIG_UNIT: () => CONFIG_UNIT,
      CONFIG_VALUE: () => CONFIG_VALUE,
      CONFIG_X_UNIT: () => CONFIG_X_UNIT,
      CONFIG_X_VALUE: () => CONFIG_X_VALUE,
      CONFIG_Y_UNIT: () => CONFIG_Y_UNIT,
      CONFIG_Y_VALUE: () => CONFIG_Y_VALUE,
      CONFIG_Z_UNIT: () => CONFIG_Z_UNIT,
      CONFIG_Z_VALUE: () => CONFIG_Z_VALUE,
      DISPLAY: () => DISPLAY,
      FILTER: () => FILTER,
      FLEX: () => FLEX,
      FONT_VARIATION_SETTINGS: () => FONT_VARIATION_SETTINGS,
      HEIGHT: () => HEIGHT,
      HTML_ELEMENT: () => HTML_ELEMENT,
      IMMEDIATE_CHILDREN: () => IMMEDIATE_CHILDREN,
      IX2_ID_DELIMITER: () => IX2_ID_DELIMITER,
      OPACITY: () => OPACITY,
      PARENT: () => PARENT,
      PLAIN_OBJECT: () => PLAIN_OBJECT,
      PRESERVE_3D: () => PRESERVE_3D,
      RENDER_GENERAL: () => RENDER_GENERAL,
      RENDER_PLUGIN: () => RENDER_PLUGIN,
      RENDER_STYLE: () => RENDER_STYLE,
      RENDER_TRANSFORM: () => RENDER_TRANSFORM,
      ROTATE_X: () => ROTATE_X,
      ROTATE_Y: () => ROTATE_Y,
      ROTATE_Z: () => ROTATE_Z,
      SCALE_3D: () => SCALE_3D,
      SCALE_X: () => SCALE_X,
      SCALE_Y: () => SCALE_Y,
      SCALE_Z: () => SCALE_Z,
      SIBLINGS: () => SIBLINGS,
      SKEW: () => SKEW,
      SKEW_X: () => SKEW_X,
      SKEW_Y: () => SKEW_Y,
      TRANSFORM: () => TRANSFORM,
      TRANSLATE_3D: () => TRANSLATE_3D,
      TRANSLATE_X: () => TRANSLATE_X,
      TRANSLATE_Y: () => TRANSLATE_Y,
      TRANSLATE_Z: () => TRANSLATE_Z,
      WF_PAGE: () => WF_PAGE,
      WIDTH: () => WIDTH,
      WILL_CHANGE: () => WILL_CHANGE,
      W_MOD_IX: () => W_MOD_IX,
      W_MOD_JS: () => W_MOD_JS
    });
    var IX2_ID_DELIMITER, WF_PAGE, W_MOD_JS, W_MOD_IX, BOUNDARY_SELECTOR, CONFIG_X_VALUE, CONFIG_Y_VALUE, CONFIG_Z_VALUE, CONFIG_VALUE, CONFIG_X_UNIT, CONFIG_Y_UNIT, CONFIG_Z_UNIT, CONFIG_UNIT, TRANSFORM, TRANSLATE_X, TRANSLATE_Y, TRANSLATE_Z, TRANSLATE_3D, SCALE_X, SCALE_Y, SCALE_Z, SCALE_3D, ROTATE_X, ROTATE_Y, ROTATE_Z, SKEW, SKEW_X, SKEW_Y, OPACITY, FILTER, FONT_VARIATION_SETTINGS, WIDTH, HEIGHT, BACKGROUND_COLOR, BACKGROUND, BORDER_COLOR, COLOR, DISPLAY, FLEX, WILL_CHANGE, AUTO, COMMA_DELIMITER, COLON_DELIMITER, BAR_DELIMITER, CHILDREN, IMMEDIATE_CHILDREN, SIBLINGS, PARENT, PRESERVE_3D, HTML_ELEMENT, PLAIN_OBJECT, ABSTRACT_NODE, RENDER_TRANSFORM, RENDER_GENERAL, RENDER_STYLE, RENDER_PLUGIN;
    var init_IX2EngineConstants = __esm({
      "packages/systems/ix2/shared-constants/IX2EngineConstants.ts"() {
        "use strict";
        IX2_ID_DELIMITER = "|";
        WF_PAGE = "data-wf-page";
        W_MOD_JS = "w-mod-js";
        W_MOD_IX = "w-mod-ix";
        BOUNDARY_SELECTOR = ".w-dyn-item";
        CONFIG_X_VALUE = "xValue";
        CONFIG_Y_VALUE = "yValue";
        CONFIG_Z_VALUE = "zValue";
        CONFIG_VALUE = "value";
        CONFIG_X_UNIT = "xUnit";
        CONFIG_Y_UNIT = "yUnit";
        CONFIG_Z_UNIT = "zUnit";
        CONFIG_UNIT = "unit";
        TRANSFORM = "transform";
        TRANSLATE_X = "translateX";
        TRANSLATE_Y = "translateY";
        TRANSLATE_Z = "translateZ";
        TRANSLATE_3D = "translate3d";
        SCALE_X = "scaleX";
        SCALE_Y = "scaleY";
        SCALE_Z = "scaleZ";
        SCALE_3D = "scale3d";
        ROTATE_X = "rotateX";
        ROTATE_Y = "rotateY";
        ROTATE_Z = "rotateZ";
        SKEW = "skew";
        SKEW_X = "skewX";
        SKEW_Y = "skewY";
        OPACITY = "opacity";
        FILTER = "filter";
        FONT_VARIATION_SETTINGS = "font-variation-settings";
        WIDTH = "width";
        HEIGHT = "height";
        BACKGROUND_COLOR = "backgroundColor";
        BACKGROUND = "background";
        BORDER_COLOR = "borderColor";
        COLOR = "color";
        DISPLAY = "display";
        FLEX = "flex";
        WILL_CHANGE = "willChange";
        AUTO = "AUTO";
        COMMA_DELIMITER = ",";
        COLON_DELIMITER = ":";
        BAR_DELIMITER = "|";
        CHILDREN = "CHILDREN";
        IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
        SIBLINGS = "SIBLINGS";
        PARENT = "PARENT";
        PRESERVE_3D = "preserve-3d";
        HTML_ELEMENT = "HTML_ELEMENT";
        PLAIN_OBJECT = "PLAIN_OBJECT";
        ABSTRACT_NODE = "ABSTRACT_NODE";
        RENDER_TRANSFORM = "RENDER_TRANSFORM";
        RENDER_GENERAL = "RENDER_GENERAL";
        RENDER_STYLE = "RENDER_STYLE";
        RENDER_PLUGIN = "RENDER_PLUGIN";
      }
    });
  
    // packages/systems/ix2/shared-constants/index.ts
    var shared_constants_exports = {};
    __export(shared_constants_exports, {
      ActionAppliesTo: () => ActionAppliesTo,
      ActionTypeConsts: () => ActionTypeConsts,
      EventAppliesTo: () => EventAppliesTo,
      EventBasedOn: () => EventBasedOn,
      EventContinuousMouseAxes: () => EventContinuousMouseAxes,
      EventLimitAffectedElements: () => EventLimitAffectedElements,
      EventTypeConsts: () => EventTypeConsts,
      IX2EngineActionTypes: () => IX2EngineActionTypes_exports,
      IX2EngineConstants: () => IX2EngineConstants_exports,
      InteractionTypeConsts: () => InteractionTypeConsts,
      QuickEffectDirectionConsts: () => QuickEffectDirectionConsts,
      QuickEffectIds: () => QuickEffectIds,
      ReducedMotionTypes: () => ReducedMotionTypes
    });
    var init_shared_constants = __esm({
      "packages/systems/ix2/shared-constants/index.ts"() {
        "use strict";
        init_trigger_events();
        init_animation_actions();
        init_trigger_interactions();
        init_reduced_motion();
        init_IX2EngineActionTypes();
        init_IX2EngineConstants();
        init_animation_actions();
        init_trigger_events();
      }
    });
  
    // packages/systems/ix2/engine/reducers/IX2DataReducer.ts
    var IX2_RAW_DATA_IMPORTED2, ixData;
    var init_IX2DataReducer = __esm({
      "packages/systems/ix2/engine/reducers/IX2DataReducer.ts"() {
        "use strict";
        init_shared_constants();
        ({ IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED2 } = IX2EngineActionTypes_exports);
        ixData = (state = Object.freeze({}), action) => {
          switch (action.type) {
            case IX2_RAW_DATA_IMPORTED2: {
              return action.payload.ixData || Object.freeze({});
            }
            default: {
              return state;
            }
          }
        };
      }
    });
  
    // node_modules/timm/lib/timm.js
    var require_timm = __commonJS({
      "node_modules/timm/lib/timm.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        exports.clone = clone;
        exports.addLast = addLast2;
        exports.addFirst = addFirst;
        exports.removeLast = removeLast;
        exports.removeFirst = removeFirst;
        exports.insert = insert;
        exports.removeAt = removeAt;
        exports.replaceAt = replaceAt;
        exports.getIn = getIn2;
        exports.set = set3;
        exports.setIn = setIn4;
        exports.update = update;
        exports.updateIn = updateIn;
        exports.merge = merge3;
        exports.mergeDeep = mergeDeep;
        exports.mergeIn = mergeIn4;
        exports.omit = omit;
        exports.addDefaults = addDefaults;
        var INVALID_ARGS = "INVALID_ARGS";
        function throwStr(msg) {
          throw new Error(msg);
        }
        function getKeysAndSymbols(obj) {
          var keys = Object.keys(obj);
          if (Object.getOwnPropertySymbols) {
            return keys.concat(Object.getOwnPropertySymbols(obj));
          }
          return keys;
        }
        var hasOwnProperty2 = {}.hasOwnProperty;
        function clone(obj) {
          if (Array.isArray(obj))
            return obj.slice();
          var keys = getKeysAndSymbols(obj);
          var out = {};
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            out[key] = obj[key];
          }
          return out;
        }
        function doMerge(fAddDefaults, fDeep, first) {
          var out = first;
          !(out != null) && throwStr(false ? "At least one object should be provided to merge()" : INVALID_ARGS);
          var fChanged = false;
          for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
            rest[_key - 3] = arguments[_key];
          }
          for (var idx = 0; idx < rest.length; idx++) {
            var obj = rest[idx];
            if (obj == null)
              continue;
            var keys = getKeysAndSymbols(obj);
            if (!keys.length)
              continue;
            for (var j = 0; j <= keys.length; j++) {
              var key = keys[j];
              if (fAddDefaults && out[key] !== void 0)
                continue;
              var nextVal = obj[key];
              if (fDeep && isObject(out[key]) && isObject(nextVal)) {
                nextVal = doMerge(fAddDefaults, fDeep, out[key], nextVal);
              }
              if (nextVal === void 0 || nextVal === out[key])
                continue;
              if (!fChanged) {
                fChanged = true;
                out = clone(out);
              }
              out[key] = nextVal;
            }
          }
          return out;
        }
        function isObject(o) {
          var type = typeof o === "undefined" ? "undefined" : _typeof(o);
          return o != null && (type === "object" || type === "function");
        }
        function addLast2(array, val) {
          if (Array.isArray(val))
            return array.concat(val);
          return array.concat([val]);
        }
        function addFirst(array, val) {
          if (Array.isArray(val))
            return val.concat(array);
          return [val].concat(array);
        }
        function removeLast(array) {
          if (!array.length)
            return array;
          return array.slice(0, array.length - 1);
        }
        function removeFirst(array) {
          if (!array.length)
            return array;
          return array.slice(1);
        }
        function insert(array, idx, val) {
          return array.slice(0, idx).concat(Array.isArray(val) ? val : [val]).concat(array.slice(idx));
        }
        function removeAt(array, idx) {
          if (idx >= array.length || idx < 0)
            return array;
          return array.slice(0, idx).concat(array.slice(idx + 1));
        }
        function replaceAt(array, idx, newItem) {
          if (array[idx] === newItem)
            return array;
          var len = array.length;
          var result = Array(len);
          for (var i = 0; i < len; i++) {
            result[i] = array[i];
          }
          result[idx] = newItem;
          return result;
        }
        function getIn2(obj, path) {
          !Array.isArray(path) && throwStr(false ? "A path array should be provided when calling getIn()" : INVALID_ARGS);
          if (obj == null)
            return void 0;
          var ptr = obj;
          for (var i = 0; i < path.length; i++) {
            var key = path[i];
            ptr = ptr != null ? ptr[key] : void 0;
            if (ptr === void 0)
              return ptr;
          }
          return ptr;
        }
        function set3(obj, key, val) {
          var fallback = typeof key === "number" ? [] : {};
          var finalObj = obj == null ? fallback : obj;
          if (finalObj[key] === val)
            return finalObj;
          var obj2 = clone(finalObj);
          obj2[key] = val;
          return obj2;
        }
        function doSetIn(obj, path, val, idx) {
          var newValue = void 0;
          var key = path[idx];
          if (idx === path.length - 1) {
            newValue = val;
          } else {
            var nestedObj = isObject(obj) && isObject(obj[key]) ? obj[key] : typeof path[idx + 1] === "number" ? [] : {};
            newValue = doSetIn(nestedObj, path, val, idx + 1);
          }
          return set3(obj, key, newValue);
        }
        function setIn4(obj, path, val) {
          if (!path.length)
            return val;
          return doSetIn(obj, path, val, 0);
        }
        function update(obj, key, fnUpdate) {
          var prevVal = obj == null ? void 0 : obj[key];
          var nextVal = fnUpdate(prevVal);
          return set3(obj, key, nextVal);
        }
        function updateIn(obj, path, fnUpdate) {
          var prevVal = getIn2(obj, path);
          var nextVal = fnUpdate(prevVal);
          return setIn4(obj, path, nextVal);
        }
        function merge3(a, b, c, d, e, f) {
          for (var _len2 = arguments.length, rest = Array(_len2 > 6 ? _len2 - 6 : 0), _key2 = 6; _key2 < _len2; _key2++) {
            rest[_key2 - 6] = arguments[_key2];
          }
          return rest.length ? doMerge.call.apply(doMerge, [null, false, false, a, b, c, d, e, f].concat(rest)) : doMerge(false, false, a, b, c, d, e, f);
        }
        function mergeDeep(a, b, c, d, e, f) {
          for (var _len3 = arguments.length, rest = Array(_len3 > 6 ? _len3 - 6 : 0), _key3 = 6; _key3 < _len3; _key3++) {
            rest[_key3 - 6] = arguments[_key3];
          }
          return rest.length ? doMerge.call.apply(doMerge, [null, false, true, a, b, c, d, e, f].concat(rest)) : doMerge(false, true, a, b, c, d, e, f);
        }
        function mergeIn4(a, path, b, c, d, e, f) {
          var prevVal = getIn2(a, path);
          if (prevVal == null)
            prevVal = {};
          var nextVal = void 0;
          for (var _len4 = arguments.length, rest = Array(_len4 > 7 ? _len4 - 7 : 0), _key4 = 7; _key4 < _len4; _key4++) {
            rest[_key4 - 7] = arguments[_key4];
          }
          if (rest.length) {
            nextVal = doMerge.call.apply(doMerge, [null, false, false, prevVal, b, c, d, e, f].concat(rest));
          } else {
            nextVal = doMerge(false, false, prevVal, b, c, d, e, f);
          }
          return setIn4(a, path, nextVal);
        }
        function omit(obj, attrs) {
          var omitList = Array.isArray(attrs) ? attrs : [attrs];
          var fDoSomething = false;
          for (var i = 0; i < omitList.length; i++) {
            if (hasOwnProperty2.call(obj, omitList[i])) {
              fDoSomething = true;
              break;
            }
          }
          if (!fDoSomething)
            return obj;
          var out = {};
          var keys = getKeysAndSymbols(obj);
          for (var _i = 0; _i < keys.length; _i++) {
            var key = keys[_i];
            if (omitList.indexOf(key) >= 0)
              continue;
            out[key] = obj[key];
          }
          return out;
        }
        function addDefaults(a, b, c, d, e, f) {
          for (var _len5 = arguments.length, rest = Array(_len5 > 6 ? _len5 - 6 : 0), _key5 = 6; _key5 < _len5; _key5++) {
            rest[_key5 - 6] = arguments[_key5];
          }
          return rest.length ? doMerge.call.apply(doMerge, [null, true, false, a, b, c, d, e, f].concat(rest)) : doMerge(true, false, a, b, c, d, e, f);
        }
        var timm = {
          clone,
          addLast: addLast2,
          addFirst,
          removeLast,
          removeFirst,
          insert,
          removeAt,
          replaceAt,
          getIn: getIn2,
          // eslint-disable-next-line object-shorthand
          set: set3,
          // so that flow doesn't complain
          setIn: setIn4,
          update,
          updateIn,
          merge: merge3,
          mergeDeep,
          mergeIn: mergeIn4,
          omit,
          addDefaults
        };
        exports.default = timm;
      }
    });
  
    // packages/systems/ix2/engine/reducers/IX2RequestReducer.ts
    var import_timm, IX2_PREVIEW_REQUESTED2, IX2_PLAYBACK_REQUESTED2, IX2_STOP_REQUESTED2, IX2_CLEAR_REQUESTED2, initialState, stateKeys, ixRequest;
    var init_IX2RequestReducer = __esm({
      "packages/systems/ix2/engine/reducers/IX2RequestReducer.ts"() {
        "use strict";
        init_shared_constants();
        import_timm = __toESM(require_timm());
        ({
          IX2_PREVIEW_REQUESTED: IX2_PREVIEW_REQUESTED2,
          IX2_PLAYBACK_REQUESTED: IX2_PLAYBACK_REQUESTED2,
          IX2_STOP_REQUESTED: IX2_STOP_REQUESTED2,
          IX2_CLEAR_REQUESTED: IX2_CLEAR_REQUESTED2
        } = IX2EngineActionTypes_exports);
        initialState = {
          preview: {},
          playback: {},
          stop: {},
          clear: {}
        };
        stateKeys = Object.create(null, {
          [IX2_PREVIEW_REQUESTED2]: { value: "preview" },
          [IX2_PLAYBACK_REQUESTED2]: { value: "playback" },
          [IX2_STOP_REQUESTED2]: { value: "stop" },
          [IX2_CLEAR_REQUESTED2]: { value: "clear" }
        });
        ixRequest = (state = initialState, action) => {
          if (action.type in stateKeys) {
            const key = [stateKeys[action.type]];
            return (0, import_timm.setIn)(state, [key], { ...action.payload });
          }
          return state;
        };
      }
    });
  
    // packages/systems/ix2/engine/reducers/IX2SessionReducer.ts
    var import_timm2, IX2_SESSION_INITIALIZED2, IX2_SESSION_STARTED2, IX2_TEST_FRAME_RENDERED2, IX2_SESSION_STOPPED2, IX2_EVENT_LISTENER_ADDED2, IX2_EVENT_STATE_CHANGED2, IX2_ANIMATION_FRAME_CHANGED2, IX2_ACTION_LIST_PLAYBACK_CHANGED2, IX2_VIEWPORT_WIDTH_CHANGED2, IX2_MEDIA_QUERIES_DEFINED2, initialState2, TEST_FRAME_STEPS_SIZE, ixSession;
    var init_IX2SessionReducer = __esm({
      "packages/systems/ix2/engine/reducers/IX2SessionReducer.ts"() {
        "use strict";
        init_shared_constants();
        import_timm2 = __toESM(require_timm());
        ({
          IX2_SESSION_INITIALIZED: IX2_SESSION_INITIALIZED2,
          IX2_SESSION_STARTED: IX2_SESSION_STARTED2,
          IX2_TEST_FRAME_RENDERED: IX2_TEST_FRAME_RENDERED2,
          IX2_SESSION_STOPPED: IX2_SESSION_STOPPED2,
          IX2_EVENT_LISTENER_ADDED: IX2_EVENT_LISTENER_ADDED2,
          IX2_EVENT_STATE_CHANGED: IX2_EVENT_STATE_CHANGED2,
          IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED2,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: IX2_ACTION_LIST_PLAYBACK_CHANGED2,
          IX2_VIEWPORT_WIDTH_CHANGED: IX2_VIEWPORT_WIDTH_CHANGED2,
          IX2_MEDIA_QUERIES_DEFINED: IX2_MEDIA_QUERIES_DEFINED2
        } = IX2EngineActionTypes_exports);
        initialState2 = {
          active: false,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: false,
          hasDefinedMediaQueries: false,
          reducedMotion: false
        };
        TEST_FRAME_STEPS_SIZE = 20;
        ixSession = (state = initialState2, action) => {
          switch (action.type) {
            case IX2_SESSION_INITIALIZED2: {
              const { hasBoundaryNodes, reducedMotion } = action.payload;
              return (0, import_timm2.merge)(state, {
                hasBoundaryNodes,
                reducedMotion
              });
            }
            case IX2_SESSION_STARTED2: {
              return (0, import_timm2.set)(state, "active", true);
            }
            case IX2_TEST_FRAME_RENDERED2: {
              const {
                payload: { step = TEST_FRAME_STEPS_SIZE }
              } = action;
              return (0, import_timm2.set)(state, "tick", state.tick + step);
            }
            case IX2_SESSION_STOPPED2: {
              return initialState2;
            }
            case IX2_ANIMATION_FRAME_CHANGED2: {
              const {
                payload: { now }
              } = action;
              return (0, import_timm2.set)(state, "tick", now);
            }
            case IX2_EVENT_LISTENER_ADDED2: {
              const eventListeners = (0, import_timm2.addLast)(state.eventListeners, action.payload);
              return (0, import_timm2.set)(state, "eventListeners", eventListeners);
            }
            case IX2_EVENT_STATE_CHANGED2: {
              const { stateKey, newState } = action.payload;
              return (0, import_timm2.setIn)(state, ["eventState", stateKey], newState);
            }
            case IX2_ACTION_LIST_PLAYBACK_CHANGED2: {
              const { actionListId, isPlaying } = action.payload;
              return (0, import_timm2.setIn)(state, ["playbackState", actionListId], isPlaying);
            }
            case IX2_VIEWPORT_WIDTH_CHANGED2: {
              const { width, mediaQueries } = action.payload;
              const mediaQueryCount = mediaQueries.length;
              let mediaQueryKey = null;
              for (let i = 0; i < mediaQueryCount; i++) {
                const { key, min, max } = mediaQueries[i];
                if (width >= min && width <= max) {
                  mediaQueryKey = key;
                  break;
                }
              }
              return (0, import_timm2.merge)(state, {
                viewportWidth: width,
                mediaQueryKey
              });
            }
            case IX2_MEDIA_QUERIES_DEFINED2: {
              return (0, import_timm2.set)(state, "hasDefinedMediaQueries", true);
            }
            default: {
              return state;
            }
          }
        };
      }
    });
  
    // node_modules/lodash/_listCacheClear.js
    var require_listCacheClear = __commonJS({
      "node_modules/lodash/_listCacheClear.js"(exports, module) {
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        module.exports = listCacheClear;
      }
    });
  
    // node_modules/lodash/eq.js
    var require_eq = __commonJS({
      "node_modules/lodash/eq.js"(exports, module) {
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        module.exports = eq;
      }
    });
  
    // node_modules/lodash/_assocIndexOf.js
    var require_assocIndexOf = __commonJS({
      "node_modules/lodash/_assocIndexOf.js"(exports, module) {
        var eq = require_eq();
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        module.exports = assocIndexOf;
      }
    });
  
    // node_modules/lodash/_listCacheDelete.js
    var require_listCacheDelete = __commonJS({
      "node_modules/lodash/_listCacheDelete.js"(exports, module) {
        var assocIndexOf = require_assocIndexOf();
        var arrayProto = Array.prototype;
        var splice = arrayProto.splice;
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        module.exports = listCacheDelete;
      }
    });
  
    // node_modules/lodash/_listCacheGet.js
    var require_listCacheGet = __commonJS({
      "node_modules/lodash/_listCacheGet.js"(exports, module) {
        var assocIndexOf = require_assocIndexOf();
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? void 0 : data[index][1];
        }
        module.exports = listCacheGet;
      }
    });
  
    // node_modules/lodash/_listCacheHas.js
    var require_listCacheHas = __commonJS({
      "node_modules/lodash/_listCacheHas.js"(exports, module) {
        var assocIndexOf = require_assocIndexOf();
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        module.exports = listCacheHas;
      }
    });
  
    // node_modules/lodash/_listCacheSet.js
    var require_listCacheSet = __commonJS({
      "node_modules/lodash/_listCacheSet.js"(exports, module) {
        var assocIndexOf = require_assocIndexOf();
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        module.exports = listCacheSet;
      }
    });
  
    // node_modules/lodash/_ListCache.js
    var require_ListCache = __commonJS({
      "node_modules/lodash/_ListCache.js"(exports, module) {
        var listCacheClear = require_listCacheClear();
        var listCacheDelete = require_listCacheDelete();
        var listCacheGet = require_listCacheGet();
        var listCacheHas = require_listCacheHas();
        var listCacheSet = require_listCacheSet();
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        module.exports = ListCache;
      }
    });
  
    // node_modules/lodash/_stackClear.js
    var require_stackClear = __commonJS({
      "node_modules/lodash/_stackClear.js"(exports, module) {
        var ListCache = require_ListCache();
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        module.exports = stackClear;
      }
    });
  
    // node_modules/lodash/_stackDelete.js
    var require_stackDelete = __commonJS({
      "node_modules/lodash/_stackDelete.js"(exports, module) {
        function stackDelete(key) {
          var data = this.__data__, result = data["delete"](key);
          this.size = data.size;
          return result;
        }
        module.exports = stackDelete;
      }
    });
  
    // node_modules/lodash/_stackGet.js
    var require_stackGet = __commonJS({
      "node_modules/lodash/_stackGet.js"(exports, module) {
        function stackGet(key) {
          return this.__data__.get(key);
        }
        module.exports = stackGet;
      }
    });
  
    // node_modules/lodash/_stackHas.js
    var require_stackHas = __commonJS({
      "node_modules/lodash/_stackHas.js"(exports, module) {
        function stackHas(key) {
          return this.__data__.has(key);
        }
        module.exports = stackHas;
      }
    });
  
    // node_modules/lodash/isObject.js
    var require_isObject = __commonJS({
      "node_modules/lodash/isObject.js"(exports, module) {
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        module.exports = isObject;
      }
    });
  
    // node_modules/lodash/isFunction.js
    var require_isFunction = __commonJS({
      "node_modules/lodash/isFunction.js"(exports, module) {
        var baseGetTag = require_baseGetTag();
        var isObject = require_isObject();
        var asyncTag = "[object AsyncFunction]";
        var funcTag = "[object Function]";
        var genTag = "[object GeneratorFunction]";
        var proxyTag = "[object Proxy]";
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        module.exports = isFunction;
      }
    });
  
    // node_modules/lodash/_coreJsData.js
    var require_coreJsData = __commonJS({
      "node_modules/lodash/_coreJsData.js"(exports, module) {
        var root = require_root();
        var coreJsData = root["__core-js_shared__"];
        module.exports = coreJsData;
      }
    });
  
    // node_modules/lodash/_isMasked.js
    var require_isMasked = __commonJS({
      "node_modules/lodash/_isMasked.js"(exports, module) {
        var coreJsData = require_coreJsData();
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        module.exports = isMasked;
      }
    });
  
    // node_modules/lodash/_toSource.js
    var require_toSource = __commonJS({
      "node_modules/lodash/_toSource.js"(exports, module) {
        var funcProto = Function.prototype;
        var funcToString = funcProto.toString;
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        module.exports = toSource;
      }
    });
  
    // node_modules/lodash/_baseIsNative.js
    var require_baseIsNative = __commonJS({
      "node_modules/lodash/_baseIsNative.js"(exports, module) {
        var isFunction = require_isFunction();
        var isMasked = require_isMasked();
        var isObject = require_isObject();
        var toSource = require_toSource();
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var funcProto = Function.prototype;
        var objectProto = Object.prototype;
        var funcToString = funcProto.toString;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        var reIsNative = RegExp(
          "^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        module.exports = baseIsNative;
      }
    });
  
    // node_modules/lodash/_getValue.js
    var require_getValue = __commonJS({
      "node_modules/lodash/_getValue.js"(exports, module) {
        function getValue(object, key) {
          return object == null ? void 0 : object[key];
        }
        module.exports = getValue;
      }
    });
  
    // node_modules/lodash/_getNative.js
    var require_getNative = __commonJS({
      "node_modules/lodash/_getNative.js"(exports, module) {
        var baseIsNative = require_baseIsNative();
        var getValue = require_getValue();
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : void 0;
        }
        module.exports = getNative;
      }
    });
  
    // node_modules/lodash/_Map.js
    var require_Map = __commonJS({
      "node_modules/lodash/_Map.js"(exports, module) {
        var getNative = require_getNative();
        var root = require_root();
        var Map2 = getNative(root, "Map");
        module.exports = Map2;
      }
    });
  
    // node_modules/lodash/_nativeCreate.js
    var require_nativeCreate = __commonJS({
      "node_modules/lodash/_nativeCreate.js"(exports, module) {
        var getNative = require_getNative();
        var nativeCreate = getNative(Object, "create");
        module.exports = nativeCreate;
      }
    });
  
    // node_modules/lodash/_hashClear.js
    var require_hashClear = __commonJS({
      "node_modules/lodash/_hashClear.js"(exports, module) {
        var nativeCreate = require_nativeCreate();
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        module.exports = hashClear;
      }
    });
  
    // node_modules/lodash/_hashDelete.js
    var require_hashDelete = __commonJS({
      "node_modules/lodash/_hashDelete.js"(exports, module) {
        function hashDelete(key) {
          var result = this.has(key) && delete this.__data__[key];
          this.size -= result ? 1 : 0;
          return result;
        }
        module.exports = hashDelete;
      }
    });
  
    // node_modules/lodash/_hashGet.js
    var require_hashGet = __commonJS({
      "node_modules/lodash/_hashGet.js"(exports, module) {
        var nativeCreate = require_nativeCreate();
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? void 0 : result;
          }
          return hasOwnProperty2.call(data, key) ? data[key] : void 0;
        }
        module.exports = hashGet;
      }
    });
  
    // node_modules/lodash/_hashHas.js
    var require_hashHas = __commonJS({
      "node_modules/lodash/_hashHas.js"(exports, module) {
        var nativeCreate = require_nativeCreate();
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
        }
        module.exports = hashHas;
      }
    });
  
    // node_modules/lodash/_hashSet.js
    var require_hashSet = __commonJS({
      "node_modules/lodash/_hashSet.js"(exports, module) {
        var nativeCreate = require_nativeCreate();
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
          return this;
        }
        module.exports = hashSet;
      }
    });
  
    // node_modules/lodash/_Hash.js
    var require_Hash = __commonJS({
      "node_modules/lodash/_Hash.js"(exports, module) {
        var hashClear = require_hashClear();
        var hashDelete = require_hashDelete();
        var hashGet = require_hashGet();
        var hashHas = require_hashHas();
        var hashSet = require_hashSet();
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        module.exports = Hash;
      }
    });
  
    // node_modules/lodash/_mapCacheClear.js
    var require_mapCacheClear = __commonJS({
      "node_modules/lodash/_mapCacheClear.js"(exports, module) {
        var Hash = require_Hash();
        var ListCache = require_ListCache();
        var Map2 = require_Map();
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        module.exports = mapCacheClear;
      }
    });
  
    // node_modules/lodash/_isKeyable.js
    var require_isKeyable = __commonJS({
      "node_modules/lodash/_isKeyable.js"(exports, module) {
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        module.exports = isKeyable;
      }
    });
  
    // node_modules/lodash/_getMapData.js
    var require_getMapData = __commonJS({
      "node_modules/lodash/_getMapData.js"(exports, module) {
        var isKeyable = require_isKeyable();
        function getMapData(map, key) {
          var data = map.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        module.exports = getMapData;
      }
    });
  
    // node_modules/lodash/_mapCacheDelete.js
    var require_mapCacheDelete = __commonJS({
      "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
        var getMapData = require_getMapData();
        function mapCacheDelete(key) {
          var result = getMapData(this, key)["delete"](key);
          this.size -= result ? 1 : 0;
          return result;
        }
        module.exports = mapCacheDelete;
      }
    });
  
    // node_modules/lodash/_mapCacheGet.js
    var require_mapCacheGet = __commonJS({
      "node_modules/lodash/_mapCacheGet.js"(exports, module) {
        var getMapData = require_getMapData();
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        module.exports = mapCacheGet;
      }
    });
  
    // node_modules/lodash/_mapCacheHas.js
    var require_mapCacheHas = __commonJS({
      "node_modules/lodash/_mapCacheHas.js"(exports, module) {
        var getMapData = require_getMapData();
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        module.exports = mapCacheHas;
      }
    });
  
    // node_modules/lodash/_mapCacheSet.js
    var require_mapCacheSet = __commonJS({
      "node_modules/lodash/_mapCacheSet.js"(exports, module) {
        var getMapData = require_getMapData();
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        module.exports = mapCacheSet;
      }
    });
  
    // node_modules/lodash/_MapCache.js
    var require_MapCache = __commonJS({
      "node_modules/lodash/_MapCache.js"(exports, module) {
        var mapCacheClear = require_mapCacheClear();
        var mapCacheDelete = require_mapCacheDelete();
        var mapCacheGet = require_mapCacheGet();
        var mapCacheHas = require_mapCacheHas();
        var mapCacheSet = require_mapCacheSet();
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        module.exports = MapCache;
      }
    });
  
    // node_modules/lodash/_stackSet.js
    var require_stackSet = __commonJS({
      "node_modules/lodash/_stackSet.js"(exports, module) {
        var ListCache = require_ListCache();
        var Map2 = require_Map();
        var MapCache = require_MapCache();
        var LARGE_ARRAY_SIZE = 200;
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        module.exports = stackSet;
      }
    });
  
    // node_modules/lodash/_Stack.js
    var require_Stack = __commonJS({
      "node_modules/lodash/_Stack.js"(exports, module) {
        var ListCache = require_ListCache();
        var stackClear = require_stackClear();
        var stackDelete = require_stackDelete();
        var stackGet = require_stackGet();
        var stackHas = require_stackHas();
        var stackSet = require_stackSet();
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        module.exports = Stack;
      }
    });
  
    // node_modules/lodash/_setCacheAdd.js
    var require_setCacheAdd = __commonJS({
      "node_modules/lodash/_setCacheAdd.js"(exports, module) {
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        module.exports = setCacheAdd;
      }
    });
  
    // node_modules/lodash/_setCacheHas.js
    var require_setCacheHas = __commonJS({
      "node_modules/lodash/_setCacheHas.js"(exports, module) {
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        module.exports = setCacheHas;
      }
    });
  
    // node_modules/lodash/_SetCache.js
    var require_SetCache = __commonJS({
      "node_modules/lodash/_SetCache.js"(exports, module) {
        var MapCache = require_MapCache();
        var setCacheAdd = require_setCacheAdd();
        var setCacheHas = require_setCacheHas();
        function SetCache(values) {
          var index = -1, length = values == null ? 0 : values.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values[index]);
          }
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        module.exports = SetCache;
      }
    });
  
    // node_modules/lodash/_arraySome.js
    var require_arraySome = __commonJS({
      "node_modules/lodash/_arraySome.js"(exports, module) {
        function arraySome(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (predicate(array[index], index, array)) {
              return true;
            }
          }
          return false;
        }
        module.exports = arraySome;
      }
    });
  
    // node_modules/lodash/_cacheHas.js
    var require_cacheHas = __commonJS({
      "node_modules/lodash/_cacheHas.js"(exports, module) {
        function cacheHas(cache, key) {
          return cache.has(key);
        }
        module.exports = cacheHas;
      }
    });
  
    // node_modules/lodash/_equalArrays.js
    var require_equalArrays = __commonJS({
      "node_modules/lodash/_equalArrays.js"(exports, module) {
        var SetCache = require_SetCache();
        var arraySome = require_arraySome();
        var cacheHas = require_cacheHas();
        var COMPARE_PARTIAL_FLAG = 1;
        var COMPARE_UNORDERED_FLAG = 2;
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== void 0) {
              if (compared) {
                continue;
              }
              result = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result;
        }
        module.exports = equalArrays;
      }
    });
  
    // node_modules/lodash/_Uint8Array.js
    var require_Uint8Array = __commonJS({
      "node_modules/lodash/_Uint8Array.js"(exports, module) {
        var root = require_root();
        var Uint8Array2 = root.Uint8Array;
        module.exports = Uint8Array2;
      }
    });
  
    // node_modules/lodash/_mapToArray.js
    var require_mapToArray = __commonJS({
      "node_modules/lodash/_mapToArray.js"(exports, module) {
        function mapToArray(map) {
          var index = -1, result = Array(map.size);
          map.forEach(function(value, key) {
            result[++index] = [key, value];
          });
          return result;
        }
        module.exports = mapToArray;
      }
    });
  
    // node_modules/lodash/_setToArray.js
    var require_setToArray = __commonJS({
      "node_modules/lodash/_setToArray.js"(exports, module) {
        function setToArray(set3) {
          var index = -1, result = Array(set3.size);
          set3.forEach(function(value) {
            result[++index] = value;
          });
          return result;
        }
        module.exports = setToArray;
      }
    });
  
    // node_modules/lodash/_equalByTag.js
    var require_equalByTag = __commonJS({
      "node_modules/lodash/_equalByTag.js"(exports, module) {
        var Symbol2 = require_Symbol();
        var Uint8Array2 = require_Uint8Array();
        var eq = require_eq();
        var equalArrays = require_equalArrays();
        var mapToArray = require_mapToArray();
        var setToArray = require_setToArray();
        var COMPARE_PARTIAL_FLAG = 1;
        var COMPARE_UNORDERED_FLAG = 2;
        var boolTag = "[object Boolean]";
        var dateTag = "[object Date]";
        var errorTag = "[object Error]";
        var mapTag = "[object Map]";
        var numberTag = "[object Number]";
        var regexpTag = "[object RegExp]";
        var setTag = "[object Set]";
        var stringTag = "[object String]";
        var symbolTag = "[object Symbol]";
        var arrayBufferTag = "[object ArrayBuffer]";
        var dataViewTag = "[object DataView]";
        var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
        var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        module.exports = equalByTag;
      }
    });
  
    // node_modules/lodash/_arrayPush.js
    var require_arrayPush = __commonJS({
      "node_modules/lodash/_arrayPush.js"(exports, module) {
        function arrayPush(array, values) {
          var index = -1, length = values.length, offset = array.length;
          while (++index < length) {
            array[offset + index] = values[index];
          }
          return array;
        }
        module.exports = arrayPush;
      }
    });
  
    // node_modules/lodash/isArray.js
    var require_isArray = __commonJS({
      "node_modules/lodash/isArray.js"(exports, module) {
        var isArray = Array.isArray;
        module.exports = isArray;
      }
    });
  
    // node_modules/lodash/_baseGetAllKeys.js
    var require_baseGetAllKeys = __commonJS({
      "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
        var arrayPush = require_arrayPush();
        var isArray = require_isArray();
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result = keysFunc(object);
          return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
        }
        module.exports = baseGetAllKeys;
      }
    });
  
    // node_modules/lodash/_arrayFilter.js
    var require_arrayFilter = __commonJS({
      "node_modules/lodash/_arrayFilter.js"(exports, module) {
        function arrayFilter(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result[resIndex++] = value;
            }
          }
          return result;
        }
        module.exports = arrayFilter;
      }
    });
  
    // node_modules/lodash/stubArray.js
    var require_stubArray = __commonJS({
      "node_modules/lodash/stubArray.js"(exports, module) {
        function stubArray() {
          return [];
        }
        module.exports = stubArray;
      }
    });
  
    // node_modules/lodash/_getSymbols.js
    var require_getSymbols = __commonJS({
      "node_modules/lodash/_getSymbols.js"(exports, module) {
        var arrayFilter = require_arrayFilter();
        var stubArray = require_stubArray();
        var objectProto = Object.prototype;
        var propertyIsEnumerable = objectProto.propertyIsEnumerable;
        var nativeGetSymbols = Object.getOwnPropertySymbols;
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        module.exports = getSymbols;
      }
    });
  
    // node_modules/lodash/_baseTimes.js
    var require_baseTimes = __commonJS({
      "node_modules/lodash/_baseTimes.js"(exports, module) {
        function baseTimes(n, iteratee) {
          var index = -1, result = Array(n);
          while (++index < n) {
            result[index] = iteratee(index);
          }
          return result;
        }
        module.exports = baseTimes;
      }
    });
  
    // node_modules/lodash/_baseIsArguments.js
    var require_baseIsArguments = __commonJS({
      "node_modules/lodash/_baseIsArguments.js"(exports, module) {
        var baseGetTag = require_baseGetTag();
        var isObjectLike = require_isObjectLike();
        var argsTag = "[object Arguments]";
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        module.exports = baseIsArguments;
      }
    });
  
    // node_modules/lodash/isArguments.js
    var require_isArguments = __commonJS({
      "node_modules/lodash/isArguments.js"(exports, module) {
        var baseIsArguments = require_baseIsArguments();
        var isObjectLike = require_isObjectLike();
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        var propertyIsEnumerable = objectProto.propertyIsEnumerable;
        var isArguments = baseIsArguments(function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        module.exports = isArguments;
      }
    });
  
    // node_modules/lodash/stubFalse.js
    var require_stubFalse = __commonJS({
      "node_modules/lodash/stubFalse.js"(exports, module) {
        function stubFalse() {
          return false;
        }
        module.exports = stubFalse;
      }
    });
  
    // node_modules/lodash/isBuffer.js
    var require_isBuffer = __commonJS({
      "node_modules/lodash/isBuffer.js"(exports, module) {
        var root = require_root();
        var stubFalse = require_stubFalse();
        var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
        var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var Buffer2 = moduleExports ? root.Buffer : void 0;
        var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
        var isBuffer = nativeIsBuffer || stubFalse;
        module.exports = isBuffer;
      }
    });
  
    // node_modules/lodash/_isIndex.js
    var require_isIndex = __commonJS({
      "node_modules/lodash/_isIndex.js"(exports, module) {
        var MAX_SAFE_INTEGER = 9007199254740991;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        module.exports = isIndex;
      }
    });
  
    // node_modules/lodash/isLength.js
    var require_isLength = __commonJS({
      "node_modules/lodash/isLength.js"(exports, module) {
        var MAX_SAFE_INTEGER = 9007199254740991;
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        module.exports = isLength;
      }
    });
  
    // node_modules/lodash/_baseIsTypedArray.js
    var require_baseIsTypedArray = __commonJS({
      "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
        var baseGetTag = require_baseGetTag();
        var isLength = require_isLength();
        var isObjectLike = require_isObjectLike();
        var argsTag = "[object Arguments]";
        var arrayTag = "[object Array]";
        var boolTag = "[object Boolean]";
        var dateTag = "[object Date]";
        var errorTag = "[object Error]";
        var funcTag = "[object Function]";
        var mapTag = "[object Map]";
        var numberTag = "[object Number]";
        var objectTag = "[object Object]";
        var regexpTag = "[object RegExp]";
        var setTag = "[object Set]";
        var stringTag = "[object String]";
        var weakMapTag = "[object WeakMap]";
        var arrayBufferTag = "[object ArrayBuffer]";
        var dataViewTag = "[object DataView]";
        var float32Tag = "[object Float32Array]";
        var float64Tag = "[object Float64Array]";
        var int8Tag = "[object Int8Array]";
        var int16Tag = "[object Int16Array]";
        var int32Tag = "[object Int32Array]";
        var uint8Tag = "[object Uint8Array]";
        var uint8ClampedTag = "[object Uint8ClampedArray]";
        var uint16Tag = "[object Uint16Array]";
        var uint32Tag = "[object Uint32Array]";
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        module.exports = baseIsTypedArray;
      }
    });
  
    // node_modules/lodash/_baseUnary.js
    var require_baseUnary = __commonJS({
      "node_modules/lodash/_baseUnary.js"(exports, module) {
        function baseUnary(func) {
          return function(value) {
            return func(value);
          };
        }
        module.exports = baseUnary;
      }
    });
  
    // node_modules/lodash/_nodeUtil.js
    var require_nodeUtil = __commonJS({
      "node_modules/lodash/_nodeUtil.js"(exports, module) {
        var freeGlobal = require_freeGlobal();
        var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
        var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var freeProcess = moduleExports && freeGlobal.process;
        var nodeUtil = function() {
          try {
            var types = freeModule && freeModule.require && freeModule.require("util").types;
            if (types) {
              return types;
            }
            return freeProcess && freeProcess.binding && freeProcess.binding("util");
          } catch (e) {
          }
        }();
        module.exports = nodeUtil;
      }
    });
  
    // node_modules/lodash/isTypedArray.js
    var require_isTypedArray = __commonJS({
      "node_modules/lodash/isTypedArray.js"(exports, module) {
        var baseIsTypedArray = require_baseIsTypedArray();
        var baseUnary = require_baseUnary();
        var nodeUtil = require_nodeUtil();
        var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        module.exports = isTypedArray;
      }
    });
  
    // node_modules/lodash/_arrayLikeKeys.js
    var require_arrayLikeKeys = __commonJS({
      "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
        var baseTimes = require_baseTimes();
        var isArguments = require_isArguments();
        var isArray = require_isArray();
        var isBuffer = require_isBuffer();
        var isIndex = require_isIndex();
        var isTypedArray = require_isTypedArray();
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result.push(key);
            }
          }
          return result;
        }
        module.exports = arrayLikeKeys;
      }
    });
  
    // node_modules/lodash/_isPrototype.js
    var require_isPrototype = __commonJS({
      "node_modules/lodash/_isPrototype.js"(exports, module) {
        var objectProto = Object.prototype;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        module.exports = isPrototype;
      }
    });
  
    // node_modules/lodash/_nativeKeys.js
    var require_nativeKeys = __commonJS({
      "node_modules/lodash/_nativeKeys.js"(exports, module) {
        var overArg = require_overArg();
        var nativeKeys = overArg(Object.keys, Object);
        module.exports = nativeKeys;
      }
    });
  
    // node_modules/lodash/_baseKeys.js
    var require_baseKeys = __commonJS({
      "node_modules/lodash/_baseKeys.js"(exports, module) {
        var isPrototype = require_isPrototype();
        var nativeKeys = require_nativeKeys();
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result = [];
          for (var key in Object(object)) {
            if (hasOwnProperty2.call(object, key) && key != "constructor") {
              result.push(key);
            }
          }
          return result;
        }
        module.exports = baseKeys;
      }
    });
  
    // node_modules/lodash/isArrayLike.js
    var require_isArrayLike = __commonJS({
      "node_modules/lodash/isArrayLike.js"(exports, module) {
        var isFunction = require_isFunction();
        var isLength = require_isLength();
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        module.exports = isArrayLike;
      }
    });
  
    // node_modules/lodash/keys.js
    var require_keys = __commonJS({
      "node_modules/lodash/keys.js"(exports, module) {
        var arrayLikeKeys = require_arrayLikeKeys();
        var baseKeys = require_baseKeys();
        var isArrayLike = require_isArrayLike();
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        module.exports = keys;
      }
    });
  
    // node_modules/lodash/_getAllKeys.js
    var require_getAllKeys = __commonJS({
      "node_modules/lodash/_getAllKeys.js"(exports, module) {
        var baseGetAllKeys = require_baseGetAllKeys();
        var getSymbols = require_getSymbols();
        var keys = require_keys();
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        module.exports = getAllKeys;
      }
    });
  
    // node_modules/lodash/_equalObjects.js
    var require_equalObjects = __commonJS({
      "node_modules/lodash/_equalObjects.js"(exports, module) {
        var getAllKeys = require_getAllKeys();
        var COMPARE_PARTIAL_FLAG = 1;
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result;
        }
        module.exports = equalObjects;
      }
    });
  
    // node_modules/lodash/_DataView.js
    var require_DataView = __commonJS({
      "node_modules/lodash/_DataView.js"(exports, module) {
        var getNative = require_getNative();
        var root = require_root();
        var DataView = getNative(root, "DataView");
        module.exports = DataView;
      }
    });
  
    // node_modules/lodash/_Promise.js
    var require_Promise = __commonJS({
      "node_modules/lodash/_Promise.js"(exports, module) {
        var getNative = require_getNative();
        var root = require_root();
        var Promise2 = getNative(root, "Promise");
        module.exports = Promise2;
      }
    });
  
    // node_modules/lodash/_Set.js
    var require_Set = __commonJS({
      "node_modules/lodash/_Set.js"(exports, module) {
        var getNative = require_getNative();
        var root = require_root();
        var Set = getNative(root, "Set");
        module.exports = Set;
      }
    });
  
    // node_modules/lodash/_WeakMap.js
    var require_WeakMap = __commonJS({
      "node_modules/lodash/_WeakMap.js"(exports, module) {
        var getNative = require_getNative();
        var root = require_root();
        var WeakMap2 = getNative(root, "WeakMap");
        module.exports = WeakMap2;
      }
    });
  
    // node_modules/lodash/_getTag.js
    var require_getTag = __commonJS({
      "node_modules/lodash/_getTag.js"(exports, module) {
        var DataView = require_DataView();
        var Map2 = require_Map();
        var Promise2 = require_Promise();
        var Set = require_Set();
        var WeakMap2 = require_WeakMap();
        var baseGetTag = require_baseGetTag();
        var toSource = require_toSource();
        var mapTag = "[object Map]";
        var objectTag = "[object Object]";
        var promiseTag = "[object Promise]";
        var setTag = "[object Set]";
        var weakMapTag = "[object WeakMap]";
        var dataViewTag = "[object DataView]";
        var dataViewCtorString = toSource(DataView);
        var mapCtorString = toSource(Map2);
        var promiseCtorString = toSource(Promise2);
        var setCtorString = toSource(Set);
        var weakMapCtorString = toSource(WeakMap2);
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
          getTag = function(value) {
            var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result;
          };
        }
        module.exports = getTag;
      }
    });
  
    // node_modules/lodash/_baseIsEqualDeep.js
    var require_baseIsEqualDeep = __commonJS({
      "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
        var Stack = require_Stack();
        var equalArrays = require_equalArrays();
        var equalByTag = require_equalByTag();
        var equalObjects = require_equalObjects();
        var getTag = require_getTag();
        var isArray = require_isArray();
        var isBuffer = require_isBuffer();
        var isTypedArray = require_isTypedArray();
        var COMPARE_PARTIAL_FLAG = 1;
        var argsTag = "[object Arguments]";
        var arrayTag = "[object Array]";
        var objectTag = "[object Object]";
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        module.exports = baseIsEqualDeep;
      }
    });
  
    // node_modules/lodash/_baseIsEqual.js
    var require_baseIsEqual = __commonJS({
      "node_modules/lodash/_baseIsEqual.js"(exports, module) {
        var baseIsEqualDeep = require_baseIsEqualDeep();
        var isObjectLike = require_isObjectLike();
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        module.exports = baseIsEqual;
      }
    });
  
    // node_modules/lodash/_baseIsMatch.js
    var require_baseIsMatch = __commonJS({
      "node_modules/lodash/_baseIsMatch.js"(exports, module) {
        var Stack = require_Stack();
        var baseIsEqual = require_baseIsEqual();
        var COMPARE_PARTIAL_FLAG = 1;
        var COMPARE_UNORDERED_FLAG = 2;
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === void 0 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
                return false;
              }
            }
          }
          return true;
        }
        module.exports = baseIsMatch;
      }
    });
  
    // node_modules/lodash/_isStrictComparable.js
    var require_isStrictComparable = __commonJS({
      "node_modules/lodash/_isStrictComparable.js"(exports, module) {
        var isObject = require_isObject();
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        module.exports = isStrictComparable;
      }
    });
  
    // node_modules/lodash/_getMatchData.js
    var require_getMatchData = __commonJS({
      "node_modules/lodash/_getMatchData.js"(exports, module) {
        var isStrictComparable = require_isStrictComparable();
        var keys = require_keys();
        function getMatchData(object) {
          var result = keys(object), length = result.length;
          while (length--) {
            var key = result[length], value = object[key];
            result[length] = [key, value, isStrictComparable(value)];
          }
          return result;
        }
        module.exports = getMatchData;
      }
    });
  
    // node_modules/lodash/_matchesStrictComparable.js
    var require_matchesStrictComparable = __commonJS({
      "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
          };
        }
        module.exports = matchesStrictComparable;
      }
    });
  
    // node_modules/lodash/_baseMatches.js
    var require_baseMatches = __commonJS({
      "node_modules/lodash/_baseMatches.js"(exports, module) {
        var baseIsMatch = require_baseIsMatch();
        var getMatchData = require_getMatchData();
        var matchesStrictComparable = require_matchesStrictComparable();
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        module.exports = baseMatches;
      }
    });
  
    // node_modules/lodash/isSymbol.js
    var require_isSymbol = __commonJS({
      "node_modules/lodash/isSymbol.js"(exports, module) {
        var baseGetTag = require_baseGetTag();
        var isObjectLike = require_isObjectLike();
        var symbolTag = "[object Symbol]";
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        module.exports = isSymbol;
      }
    });
  
    // node_modules/lodash/_isKey.js
    var require_isKey = __commonJS({
      "node_modules/lodash/_isKey.js"(exports, module) {
        var isArray = require_isArray();
        var isSymbol = require_isSymbol();
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
        var reIsPlainProp = /^\w*$/;
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
        }
        module.exports = isKey;
      }
    });
  
    // node_modules/lodash/memoize.js
    var require_memoize = __commonJS({
      "node_modules/lodash/memoize.js"(exports, module) {
        var MapCache = require_MapCache();
        var FUNC_ERROR_TEXT = "Expected a function";
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result = func.apply(this, args);
            memoized.cache = cache.set(key, result) || cache;
            return result;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        module.exports = memoize;
      }
    });
  
    // node_modules/lodash/_memoizeCapped.js
    var require_memoizeCapped = __commonJS({
      "node_modules/lodash/_memoizeCapped.js"(exports, module) {
        var memoize = require_memoize();
        var MAX_MEMOIZE_SIZE = 500;
        function memoizeCapped(func) {
          var result = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result.cache;
          return result;
        }
        module.exports = memoizeCapped;
      }
    });
  
    // node_modules/lodash/_stringToPath.js
    var require_stringToPath = __commonJS({
      "node_modules/lodash/_stringToPath.js"(exports, module) {
        var memoizeCapped = require_memoizeCapped();
        var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        var reEscapeChar = /\\(\\)?/g;
        var stringToPath = memoizeCapped(function(string) {
          var result = [];
          if (string.charCodeAt(0) === 46) {
            result.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result;
        });
        module.exports = stringToPath;
      }
    });
  
    // node_modules/lodash/_arrayMap.js
    var require_arrayMap = __commonJS({
      "node_modules/lodash/_arrayMap.js"(exports, module) {
        function arrayMap(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length, result = Array(length);
          while (++index < length) {
            result[index] = iteratee(array[index], index, array);
          }
          return result;
        }
        module.exports = arrayMap;
      }
    });
  
    // node_modules/lodash/_baseToString.js
    var require_baseToString = __commonJS({
      "node_modules/lodash/_baseToString.js"(exports, module) {
        var Symbol2 = require_Symbol();
        var arrayMap = require_arrayMap();
        var isArray = require_isArray();
        var isSymbol = require_isSymbol();
        var INFINITY = 1 / 0;
        var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
        var symbolToString = symbolProto ? symbolProto.toString : void 0;
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result = value + "";
          return result == "0" && 1 / value == -INFINITY ? "-0" : result;
        }
        module.exports = baseToString;
      }
    });
  
    // node_modules/lodash/toString.js
    var require_toString = __commonJS({
      "node_modules/lodash/toString.js"(exports, module) {
        var baseToString = require_baseToString();
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        module.exports = toString;
      }
    });
  
    // node_modules/lodash/_castPath.js
    var require_castPath = __commonJS({
      "node_modules/lodash/_castPath.js"(exports, module) {
        var isArray = require_isArray();
        var isKey = require_isKey();
        var stringToPath = require_stringToPath();
        var toString = require_toString();
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        module.exports = castPath;
      }
    });
  
    // node_modules/lodash/_toKey.js
    var require_toKey = __commonJS({
      "node_modules/lodash/_toKey.js"(exports, module) {
        var isSymbol = require_isSymbol();
        var INFINITY = 1 / 0;
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result = value + "";
          return result == "0" && 1 / value == -INFINITY ? "-0" : result;
        }
        module.exports = toKey;
      }
    });
  
    // node_modules/lodash/_baseGet.js
    var require_baseGet = __commonJS({
      "node_modules/lodash/_baseGet.js"(exports, module) {
        var castPath = require_castPath();
        var toKey = require_toKey();
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : void 0;
        }
        module.exports = baseGet;
      }
    });
  
    // node_modules/lodash/get.js
    var require_get = __commonJS({
      "node_modules/lodash/get.js"(exports, module) {
        var baseGet = require_baseGet();
        function get3(object, path, defaultValue) {
          var result = object == null ? void 0 : baseGet(object, path);
          return result === void 0 ? defaultValue : result;
        }
        module.exports = get3;
      }
    });
  
    // node_modules/lodash/_baseHasIn.js
    var require_baseHasIn = __commonJS({
      "node_modules/lodash/_baseHasIn.js"(exports, module) {
        function baseHasIn(object, key) {
          return object != null && key in Object(object);
        }
        module.exports = baseHasIn;
      }
    });
  
    // node_modules/lodash/_hasPath.js
    var require_hasPath = __commonJS({
      "node_modules/lodash/_hasPath.js"(exports, module) {
        var castPath = require_castPath();
        var isArguments = require_isArguments();
        var isArray = require_isArray();
        var isIndex = require_isIndex();
        var isLength = require_isLength();
        var toKey = require_toKey();
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result || ++index != length) {
            return result;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        module.exports = hasPath;
      }
    });
  
    // node_modules/lodash/hasIn.js
    var require_hasIn = __commonJS({
      "node_modules/lodash/hasIn.js"(exports, module) {
        var baseHasIn = require_baseHasIn();
        var hasPath = require_hasPath();
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        module.exports = hasIn;
      }
    });
  
    // node_modules/lodash/_baseMatchesProperty.js
    var require_baseMatchesProperty = __commonJS({
      "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
        var baseIsEqual = require_baseIsEqual();
        var get3 = require_get();
        var hasIn = require_hasIn();
        var isKey = require_isKey();
        var isStrictComparable = require_isStrictComparable();
        var matchesStrictComparable = require_matchesStrictComparable();
        var toKey = require_toKey();
        var COMPARE_PARTIAL_FLAG = 1;
        var COMPARE_UNORDERED_FLAG = 2;
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get3(object, path);
            return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        module.exports = baseMatchesProperty;
      }
    });
  
    // node_modules/lodash/identity.js
    var require_identity = __commonJS({
      "node_modules/lodash/identity.js"(exports, module) {
        function identity(value) {
          return value;
        }
        module.exports = identity;
      }
    });
  
    // node_modules/lodash/_baseProperty.js
    var require_baseProperty = __commonJS({
      "node_modules/lodash/_baseProperty.js"(exports, module) {
        function baseProperty(key) {
          return function(object) {
            return object == null ? void 0 : object[key];
          };
        }
        module.exports = baseProperty;
      }
    });
  
    // node_modules/lodash/_basePropertyDeep.js
    var require_basePropertyDeep = __commonJS({
      "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
        var baseGet = require_baseGet();
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        module.exports = basePropertyDeep;
      }
    });
  
    // node_modules/lodash/property.js
    var require_property = __commonJS({
      "node_modules/lodash/property.js"(exports, module) {
        var baseProperty = require_baseProperty();
        var basePropertyDeep = require_basePropertyDeep();
        var isKey = require_isKey();
        var toKey = require_toKey();
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        module.exports = property;
      }
    });
  
    // node_modules/lodash/_baseIteratee.js
    var require_baseIteratee = __commonJS({
      "node_modules/lodash/_baseIteratee.js"(exports, module) {
        var baseMatches = require_baseMatches();
        var baseMatchesProperty = require_baseMatchesProperty();
        var identity = require_identity();
        var isArray = require_isArray();
        var property = require_property();
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        module.exports = baseIteratee;
      }
    });
  
    // node_modules/lodash/_createFind.js
    var require_createFind = __commonJS({
      "node_modules/lodash/_createFind.js"(exports, module) {
        var baseIteratee = require_baseIteratee();
        var isArrayLike = require_isArrayLike();
        var keys = require_keys();
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object(collection);
            if (!isArrayLike(collection)) {
              var iteratee = baseIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
          };
        }
        module.exports = createFind;
      }
    });
  
    // node_modules/lodash/_baseFindIndex.js
    var require_baseFindIndex = __commonJS({
      "node_modules/lodash/_baseFindIndex.js"(exports, module) {
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
          var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
          while (fromRight ? index-- : ++index < length) {
            if (predicate(array[index], index, array)) {
              return index;
            }
          }
          return -1;
        }
        module.exports = baseFindIndex;
      }
    });
  
    // node_modules/lodash/_trimmedEndIndex.js
    var require_trimmedEndIndex = __commonJS({
      "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
        var reWhitespace = /\s/;
        function trimmedEndIndex(string) {
          var index = string.length;
          while (index-- && reWhitespace.test(string.charAt(index))) {
          }
          return index;
        }
        module.exports = trimmedEndIndex;
      }
    });
  
    // node_modules/lodash/_baseTrim.js
    var require_baseTrim = __commonJS({
      "node_modules/lodash/_baseTrim.js"(exports, module) {
        var trimmedEndIndex = require_trimmedEndIndex();
        var reTrimStart = /^\s+/;
        function baseTrim(string) {
          return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
        }
        module.exports = baseTrim;
      }
    });
  
    // node_modules/lodash/toNumber.js
    var require_toNumber = __commonJS({
      "node_modules/lodash/toNumber.js"(exports, module) {
        var baseTrim = require_baseTrim();
        var isObject = require_isObject();
        var isSymbol = require_isSymbol();
        var NAN = 0 / 0;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsOctal = /^0o[0-7]+$/i;
        var freeParseInt = parseInt;
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        module.exports = toNumber;
      }
    });
  
    // node_modules/lodash/toFinite.js
    var require_toFinite = __commonJS({
      "node_modules/lodash/toFinite.js"(exports, module) {
        var toNumber = require_toNumber();
        var INFINITY = 1 / 0;
        var MAX_INTEGER = 17976931348623157e292;
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        module.exports = toFinite;
      }
    });
  
    // node_modules/lodash/toInteger.js
    var require_toInteger = __commonJS({
      "node_modules/lodash/toInteger.js"(exports, module) {
        var toFinite = require_toFinite();
        function toInteger(value) {
          var result = toFinite(value), remainder = result % 1;
          return result === result ? remainder ? result - remainder : result : 0;
        }
        module.exports = toInteger;
      }
    });
  
    // node_modules/lodash/findIndex.js
    var require_findIndex = __commonJS({
      "node_modules/lodash/findIndex.js"(exports, module) {
        var baseFindIndex = require_baseFindIndex();
        var baseIteratee = require_baseIteratee();
        var toInteger = require_toInteger();
        var nativeMax = Math.max;
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, baseIteratee(predicate, 3), index);
        }
        module.exports = findIndex;
      }
    });
  
    // node_modules/lodash/find.js
    var require_find = __commonJS({
      "node_modules/lodash/find.js"(exports, module) {
        var createFind = require_createFind();
        var findIndex = require_findIndex();
        var find3 = createFind(findIndex);
        module.exports = find3;
      }
    });
  
    // packages/systems/ix2/shared/logic/IX2BrowserSupport.ts
    var IX2BrowserSupport_exports = {};
    __export(IX2BrowserSupport_exports, {
      ELEMENT_MATCHES: () => ELEMENT_MATCHES,
      FLEX_PREFIXED: () => FLEX_PREFIXED,
      IS_BROWSER_ENV: () => IS_BROWSER_ENV,
      TRANSFORM_PREFIXED: () => TRANSFORM_PREFIXED,
      TRANSFORM_STYLE_PREFIXED: () => TRANSFORM_STYLE_PREFIXED,
      withBrowser: () => withBrowser
    });
    var import_find, IS_BROWSER_ENV, withBrowser, ELEMENT_MATCHES, FLEX_PREFIXED, TRANSFORM_PREFIXED, TRANSFORM_PREFIX, TRANSFORM_STYLE_PREFIXED;
    var init_IX2BrowserSupport = __esm({
      "packages/systems/ix2/shared/logic/IX2BrowserSupport.ts"() {
        "use strict";
        import_find = __toESM(require_find());
        IS_BROWSER_ENV = typeof window !== "undefined";
        withBrowser = (fn, fallback) => {
          if (IS_BROWSER_ENV) {
            return fn();
          }
          return fallback;
        };
        ELEMENT_MATCHES = withBrowser(() => {
          return (0, import_find.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector"
            ],
            (key) => key in Element.prototype
          );
        });
        FLEX_PREFIXED = withBrowser(() => {
          const el = document.createElement("i");
          const values = [
            "flex",
            "-webkit-flex",
            "-ms-flexbox",
            "-moz-box",
            "-webkit-box"
          ];
          const none = "";
          try {
            const { length } = values;
            for (let i = 0; i < length; i++) {
              const value = values[i];
              el.style.display = value;
              if (el.style.display === value) {
                return value;
              }
            }
            return none;
          } catch (err) {
            return none;
          }
        }, "flex");
        TRANSFORM_PREFIXED = withBrowser(() => {
          const el = document.createElement("i");
          if (el.style.transform == null) {
            const prefixes = ["Webkit", "Moz", "ms"];
            const suffix = "Transform";
            const { length } = prefixes;
            for (let i = 0; i < length; i++) {
              const prop = prefixes[i] + suffix;
              if (el.style[prop] !== void 0) {
                return prop;
              }
            }
          }
          return "transform";
        }, "transform");
        TRANSFORM_PREFIX = TRANSFORM_PREFIXED.split("transform")[0];
        TRANSFORM_STYLE_PREFIXED = TRANSFORM_PREFIX ? TRANSFORM_PREFIX + "TransformStyle" : "transformStyle";
      }
    });
  
    // node_modules/bezier-easing/src/index.js
    var require_src = __commonJS({
      "node_modules/bezier-easing/src/index.js"(exports, module) {
        var NEWTON_ITERATIONS = 4;
        var NEWTON_MIN_SLOPE = 1e-3;
        var SUBDIVISION_PRECISION = 1e-7;
        var SUBDIVISION_MAX_ITERATIONS = 10;
        var kSplineTableSize = 11;
        var kSampleStepSize = 1 / (kSplineTableSize - 1);
        var float32ArraySupported = typeof Float32Array === "function";
        function A(aA1, aA2) {
          return 1 - 3 * aA2 + 3 * aA1;
        }
        function B(aA1, aA2) {
          return 3 * aA2 - 6 * aA1;
        }
        function C(aA1) {
          return 3 * aA1;
        }
        function calcBezier(aT, aA1, aA2) {
          return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
        }
        function getSlope(aT, aA1, aA2) {
          return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
        }
        function binarySubdivide(aX, aA, aB, mX1, mX2) {
          var currentX, currentT, i = 0;
          do {
            currentT = aA + (aB - aA) / 2;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0) {
              aB = currentT;
            } else {
              aA = currentT;
            }
          } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
          return currentT;
        }
        function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
          for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
            var currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0) {
              return aGuessT;
            }
            var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
          }
          return aGuessT;
        }
        module.exports = function bezier(mX1, mY1, mX2, mY2) {
          if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
            throw new Error("bezier x values must be in [0, 1] range");
          }
          var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
          if (mX1 !== mY1 || mX2 !== mY2) {
            for (var i = 0; i < kSplineTableSize; ++i) {
              sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
            }
          }
          function getTForX(aX) {
            var intervalStart = 0;
            var currentSample = 1;
            var lastSample = kSplineTableSize - 1;
            for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
              intervalStart += kSampleStepSize;
            }
            --currentSample;
            var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
            var guessForT = intervalStart + dist * kSampleStepSize;
            var initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= NEWTON_MIN_SLOPE) {
              return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
            } else if (initialSlope === 0) {
              return guessForT;
            } else {
              return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
            }
          }
          return function BezierEasing3(x) {
            if (mX1 === mY1 && mX2 === mY2) {
              return x;
            }
            if (x === 0) {
              return 0;
            }
            if (x === 1) {
              return 1;
            }
            return calcBezier(getTForX(x), mY1, mY2);
          };
        };
      }
    });
  
    // packages/systems/ix2/shared/logic/IX2Easings.ts
    var IX2Easings_exports = {};
    __export(IX2Easings_exports, {
      bounce: () => bounce,
      bouncePast: () => bouncePast,
      ease: () => ease,
      easeIn: () => easeIn,
      easeInOut: () => easeInOut,
      easeOut: () => easeOut,
      inBack: () => inBack,
      inCirc: () => inCirc,
      inCubic: () => inCubic,
      inElastic: () => inElastic,
      inExpo: () => inExpo,
      inOutBack: () => inOutBack,
      inOutCirc: () => inOutCirc,
      inOutCubic: () => inOutCubic,
      inOutElastic: () => inOutElastic,
      inOutExpo: () => inOutExpo,
      inOutQuad: () => inOutQuad,
      inOutQuart: () => inOutQuart,
      inOutQuint: () => inOutQuint,
      inOutSine: () => inOutSine,
      inQuad: () => inQuad,
      inQuart: () => inQuart,
      inQuint: () => inQuint,
      inSine: () => inSine,
      outBack: () => outBack,
      outBounce: () => outBounce,
      outCirc: () => outCirc,
      outCubic: () => outCubic,
      outElastic: () => outElastic,
      outExpo: () => outExpo,
      outQuad: () => outQuad,
      outQuart: () => outQuart,
      outQuint: () => outQuint,
      outSine: () => outSine,
      swingFrom: () => swingFrom,
      swingFromTo: () => swingFromTo,
      swingTo: () => swingTo
    });
    function inQuad(pos) {
      return Math.pow(pos, 2);
    }
    function outQuad(pos) {
      return -(Math.pow(pos - 1, 2) - 1);
    }
    function inOutQuad(pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 2);
      }
      return -0.5 * ((pos -= 2) * pos - 2);
    }
    function inCubic(pos) {
      return Math.pow(pos, 3);
    }
    function outCubic(pos) {
      return Math.pow(pos - 1, 3) + 1;
    }
    function inOutCubic(pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 3);
      }
      return 0.5 * (Math.pow(pos - 2, 3) + 2);
    }
    function inQuart(pos) {
      return Math.pow(pos, 4);
    }
    function outQuart(pos) {
      return -(Math.pow(pos - 1, 4) - 1);
    }
    function inOutQuart(pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 4);
      }
      return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
    }
    function inQuint(pos) {
      return Math.pow(pos, 5);
    }
    function outQuint(pos) {
      return Math.pow(pos - 1, 5) + 1;
    }
    function inOutQuint(pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 5);
      }
      return 0.5 * (Math.pow(pos - 2, 5) + 2);
    }
    function inSine(pos) {
      return -Math.cos(pos * (Math.PI / 2)) + 1;
    }
    function outSine(pos) {
      return Math.sin(pos * (Math.PI / 2));
    }
    function inOutSine(pos) {
      return -0.5 * (Math.cos(Math.PI * pos) - 1);
    }
    function inExpo(pos) {
      return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
    }
    function outExpo(pos) {
      return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
    }
    function inOutExpo(pos) {
      if (pos === 0) {
        return 0;
      }
      if (pos === 1) {
        return 1;
      }
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(2, 10 * (pos - 1));
      }
      return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
    }
    function inCirc(pos) {
      return -(Math.sqrt(1 - pos * pos) - 1);
    }
    function outCirc(pos) {
      return Math.sqrt(1 - Math.pow(pos - 1, 2));
    }
    function inOutCirc(pos) {
      if ((pos /= 0.5) < 1) {
        return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
      }
      return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
    }
    function outBounce(pos) {
      if (pos < 1 / 2.75) {
        return 7.5625 * pos * pos;
      } else if (pos < 2 / 2.75) {
        return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
      } else if (pos < 2.5 / 2.75) {
        return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
      } else {
        return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
      }
    }
    function inBack(pos) {
      const s = magicSwing;
      return pos * pos * ((s + 1) * pos - s);
    }
    function outBack(pos) {
      const s = magicSwing;
      return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
    }
    function inOutBack(pos) {
      let s = magicSwing;
      if ((pos /= 0.5) < 1) {
        return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
      }
      return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
    }
    function inElastic(pos) {
      let s = magicSwing;
      let p = 0;
      let a = 1;
      if (pos === 0) {
        return 0;
      }
      if (pos === 1) {
        return 1;
      }
      if (!p) {
        p = 0.3;
      }
      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }
      return -(a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
    }
    function outElastic(pos) {
      let s = magicSwing;
      let p = 0;
      let a = 1;
      if (pos === 0) {
        return 0;
      }
      if (pos === 1) {
        return 1;
      }
      if (!p) {
        p = 0.3;
      }
      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }
      return a * Math.pow(2, -10 * pos) * Math.sin((pos - s) * (2 * Math.PI) / p) + 1;
    }
    function inOutElastic(pos) {
      let s = magicSwing;
      let p = 0;
      let a = 1;
      if (pos === 0) {
        return 0;
      }
      if ((pos /= 1 / 2) === 2) {
        return 1;
      }
      if (!p) {
        p = 0.3 * 1.5;
      }
      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }
      if (pos < 1) {
        return -0.5 * (a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
      }
      return a * Math.pow(2, -10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p) * 0.5 + 1;
    }
    function swingFromTo(pos) {
      let s = magicSwing;
      return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
    }
    function swingFrom(pos) {
      const s = magicSwing;
      return pos * pos * ((s + 1) * pos - s);
    }
    function swingTo(pos) {
      const s = magicSwing;
      return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
    }
    function bounce(pos) {
      if (pos < 1 / 2.75) {
        return 7.5625 * pos * pos;
      } else if (pos < 2 / 2.75) {
        return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
      } else if (pos < 2.5 / 2.75) {
        return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
      } else {
        return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
      }
    }
    function bouncePast(pos) {
      if (pos < 1 / 2.75) {
        return 7.5625 * pos * pos;
      } else if (pos < 2 / 2.75) {
        return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
      } else if (pos < 2.5 / 2.75) {
        return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
      } else {
        return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
      }
    }
    var import_bezier_easing, magicSwing, ease, easeIn, easeOut, easeInOut;
    var init_IX2Easings = __esm({
      "packages/systems/ix2/shared/logic/IX2Easings.ts"() {
        "use strict";
        import_bezier_easing = __toESM(require_src());
        magicSwing = 1.70158;
        ease = (0, import_bezier_easing.default)(0.25, 0.1, 0.25, 1);
        easeIn = (0, import_bezier_easing.default)(0.42, 0, 1, 1);
        easeOut = (0, import_bezier_easing.default)(0, 0, 0.58, 1);
        easeInOut = (0, import_bezier_easing.default)(0.42, 0, 0.58, 1);
      }
    });
  
    // packages/systems/ix2/shared/logic/IX2EasingUtils.ts
    var IX2EasingUtils_exports = {};
    __export(IX2EasingUtils_exports, {
      applyEasing: () => applyEasing,
      createBezierEasing: () => createBezierEasing,
      optimizeFloat: () => optimizeFloat
    });
    function optimizeFloat(value, digits = 5, base = 10) {
      const pow = Math.pow(base, digits);
      const float = Number(Math.round(value * pow) / pow);
      return Math.abs(float) > 1e-4 ? float : 0;
    }
    function createBezierEasing(easing) {
      return (0, import_bezier_easing2.default)(...easing);
    }
    function applyEasing(easing, position, customEasingFn) {
      if (position === 0) {
        return 0;
      }
      if (position === 1) {
        return 1;
      }
      if (customEasingFn) {
        return optimizeFloat(position > 0 ? customEasingFn(position) : position);
      }
      return optimizeFloat(
        position > 0 && easing && IX2Easings_exports[easing] ? IX2Easings_exports[easing](position) : position
      );
    }
    var import_bezier_easing2;
    var init_IX2EasingUtils = __esm({
      "packages/systems/ix2/shared/logic/IX2EasingUtils.ts"() {
        "use strict";
        init_IX2Easings();
        import_bezier_easing2 = __toESM(require_src());
      }
    });
  
    // packages/systems/ix2/shared/reducers/IX2ElementsReducer.ts
    var IX2ElementsReducer_exports = {};
    __export(IX2ElementsReducer_exports, {
      createElementState: () => createElementState,
      ixElements: () => ixElements,
      mergeActionState: () => mergeActionState
    });
    function createElementState(state, ref, refType, elementId, actionItem) {
      const refId = refType === PLAIN_OBJECT2 ? (0, import_timm3.getIn)(actionItem, ["config", "target", "objectId"]) : null;
      return (0, import_timm3.mergeIn)(state, [elementId], {
        id: elementId,
        ref,
        refId,
        refType
      });
    }
    function mergeActionState(state, elementId, actionTypeId, actionState, actionItem) {
      const units = pickUnits(actionItem);
      const mergePath = [elementId, refState, actionTypeId];
      return (0, import_timm3.mergeIn)(state, mergePath, actionState, units);
    }
    function pickUnits(actionItem) {
      const { config } = actionItem;
      return valueUnitPairs.reduce((result, pair) => {
        const valueKey = pair[0];
        const unitKey = pair[1];
        const configValue = config[valueKey];
        const configUnit = config[unitKey];
        if (configValue != null && configUnit != null) {
          result[unitKey] = configUnit;
        }
        return result;
      }, {});
    }
    var import_timm3, HTML_ELEMENT2, PLAIN_OBJECT2, ABSTRACT_NODE2, CONFIG_X_VALUE2, CONFIG_Y_VALUE2, CONFIG_Z_VALUE2, CONFIG_VALUE2, CONFIG_X_UNIT2, CONFIG_Y_UNIT2, CONFIG_Z_UNIT2, CONFIG_UNIT2, IX2_SESSION_STOPPED3, IX2_INSTANCE_ADDED2, IX2_ELEMENT_STATE_CHANGED2, initialState3, refState, ixElements, valueUnitPairs;
    var init_IX2ElementsReducer = __esm({
      "packages/systems/ix2/shared/reducers/IX2ElementsReducer.ts"() {
        "use strict";
        import_timm3 = __toESM(require_timm());
        init_shared_constants();
        ({
          HTML_ELEMENT: HTML_ELEMENT2,
          PLAIN_OBJECT: PLAIN_OBJECT2,
          ABSTRACT_NODE: ABSTRACT_NODE2,
          CONFIG_X_VALUE: CONFIG_X_VALUE2,
          CONFIG_Y_VALUE: CONFIG_Y_VALUE2,
          CONFIG_Z_VALUE: CONFIG_Z_VALUE2,
          CONFIG_VALUE: CONFIG_VALUE2,
          CONFIG_X_UNIT: CONFIG_X_UNIT2,
          CONFIG_Y_UNIT: CONFIG_Y_UNIT2,
          CONFIG_Z_UNIT: CONFIG_Z_UNIT2,
          CONFIG_UNIT: CONFIG_UNIT2
        } = IX2EngineConstants_exports);
        ({ IX2_SESSION_STOPPED: IX2_SESSION_STOPPED3, IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED2, IX2_ELEMENT_STATE_CHANGED: IX2_ELEMENT_STATE_CHANGED2 } = IX2EngineActionTypes_exports);
        initialState3 = {};
        refState = "refState";
        ixElements = (state = initialState3, action = {}) => {
          switch (action.type) {
            case IX2_SESSION_STOPPED3: {
              return initialState3;
            }
            case IX2_INSTANCE_ADDED2: {
              const {
                elementId,
                element: ref,
                origin,
                actionItem,
                refType
              } = action.payload;
              const { actionTypeId } = actionItem;
              let newState = state;
              if ((0, import_timm3.getIn)(newState, [elementId, ref]) !== ref) {
                newState = createElementState(
                  newState,
                  ref,
                  refType,
                  elementId,
                  actionItem
                );
              }
              return mergeActionState(
                newState,
                elementId,
                actionTypeId,
                origin,
                actionItem
              );
            }
            case IX2_ELEMENT_STATE_CHANGED2: {
              const { elementId, actionTypeId, current, actionItem } = action.payload;
              return mergeActionState(
                state,
                elementId,
                actionTypeId,
                current,
                actionItem
              );
            }
            default: {
              return state;
            }
          }
        };
        valueUnitPairs = [
          [CONFIG_X_VALUE2, CONFIG_X_UNIT2],
          [CONFIG_Y_VALUE2, CONFIG_Y_UNIT2],
          [CONFIG_Z_VALUE2, CONFIG_Z_UNIT2],
          [CONFIG_VALUE2, CONFIG_UNIT2]
        ];
      }
    });
  
    // packages/systems/ix2/plugins/IX2Lottie.js
    var require_IX2Lottie = __commonJS({
      "packages/systems/ix2/plugins/IX2Lottie.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.renderPlugin = exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
        var getPluginConfig2 = (actionItemConfig) => {
          return actionItemConfig.value;
        };
        exports.getPluginConfig = getPluginConfig2;
        var getPluginDuration3 = (element, actionItem) => {
          if (actionItem.config.duration !== "auto") {
            return null;
          }
          const duration = parseFloat(element.getAttribute("data-duration"));
          if (duration > 0) {
            return duration * 1e3;
          }
          return parseFloat(element.getAttribute("data-default-duration")) * 1e3;
        };
        exports.getPluginDuration = getPluginDuration3;
        var getPluginOrigin2 = (refState2) => {
          return refState2 || {
            value: 0
          };
        };
        exports.getPluginOrigin = getPluginOrigin2;
        var getPluginDestination2 = (actionItemConfig) => {
          return {
            value: actionItemConfig.value
          };
        };
        exports.getPluginDestination = getPluginDestination2;
        var createPluginInstance3 = (element) => {
          const instance = window.Webflow.require("lottie").createInstance(element);
          instance.stop();
          instance.setSubframe(true);
          return instance;
        };
        exports.createPluginInstance = createPluginInstance3;
        var renderPlugin2 = (pluginInstance, refState2, actionItem) => {
          if (!pluginInstance) {
            return;
          }
          const percent = refState2[actionItem.actionTypeId].value / 100;
          pluginInstance.goToFrame(pluginInstance.frames * percent);
        };
        exports.renderPlugin = renderPlugin2;
        var clearPlugin2 = (element) => {
          const instance = window.Webflow.require("lottie").createInstance(element);
          instance.stop();
        };
        exports.clearPlugin = clearPlugin2;
      }
    });
  
    // packages/systems/ix2/plugins/IX2Spline.js
    var require_IX2Spline = __commonJS({
      "packages/systems/ix2/plugins/IX2Spline.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.renderPlugin = exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
        var queryContainerElement = (elementId) => document.querySelector(`[data-w-id="${elementId}"]`);
        var getFrontendModule = () => window.Webflow.require("spline");
        var difference = (arr1, arr2) => arr1.filter((x) => !arr2.includes(x));
        var getPluginConfig2 = (actionItemConfig, key) => {
          return actionItemConfig.value[key];
        };
        exports.getPluginConfig = getPluginConfig2;
        var getPluginDuration3 = () => {
          return null;
        };
        exports.getPluginDuration = getPluginDuration3;
        var DEFAULT_VALUES = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1
        });
        var getPluginOrigin2 = (refState2, actionItem) => {
          const destination = actionItem.config.value;
          const destinationKeys = Object.keys(destination);
          if (refState2) {
            const stateKeys2 = Object.keys(refState2);
            const diffKeys = difference(destinationKeys, stateKeys2);
            if (diffKeys.length) {
              const origin2 = diffKeys.reduce((result, key) => {
                result[key] = DEFAULT_VALUES[key];
                return result;
              }, refState2);
              return origin2;
            }
            return refState2;
          }
          const origin = destinationKeys.reduce((result, key) => {
            result[key] = DEFAULT_VALUES[key];
            return result;
          }, {});
          return origin;
        };
        exports.getPluginOrigin = getPluginOrigin2;
        var getPluginDestination2 = (actionItemConfig) => {
          return actionItemConfig.value;
        };
        exports.getPluginDestination = getPluginDestination2;
        var createPluginInstance3 = (element, actionItem) => {
          var _actionItem$config, _actionItem$config$ta;
          const pluginElementId = actionItem === null || actionItem === void 0 ? void 0 : (_actionItem$config = actionItem.config) === null || _actionItem$config === void 0 ? void 0 : (_actionItem$config$ta = _actionItem$config.target) === null || _actionItem$config$ta === void 0 ? void 0 : _actionItem$config$ta.pluginElement;
          return pluginElementId ? queryContainerElement(pluginElementId) : null;
        };
        exports.createPluginInstance = createPluginInstance3;
        var renderPlugin2 = (containerElement, refState2, actionItem) => {
          const frontendModule = getFrontendModule();
          const instance = frontendModule.getInstance(containerElement);
          const objectId = actionItem.config.target.objectId;
          const renderSpline = (spline) => {
            if (!spline) {
              throw new Error("Invalid spline app passed to renderSpline");
            }
            const obj = objectId && spline.findObjectById(objectId);
            if (!obj) {
              return;
            }
            const {
              PLUGIN_SPLINE: props
            } = refState2;
            if (props.positionX != null) {
              obj.position.x = props.positionX;
            }
            if (props.positionY != null) {
              obj.position.y = props.positionY;
            }
            if (props.positionZ != null) {
              obj.position.z = props.positionZ;
            }
            if (props.rotationX != null) {
              obj.rotation.x = props.rotationX;
            }
            if (props.rotationY != null) {
              obj.rotation.y = props.rotationY;
            }
            if (props.rotationZ != null) {
              obj.rotation.z = props.rotationZ;
            }
            if (props.scaleX != null) {
              obj.scale.x = props.scaleX;
            }
            if (props.scaleY != null) {
              obj.scale.y = props.scaleY;
            }
            if (props.scaleZ != null) {
              obj.scale.z = props.scaleZ;
            }
          };
          if (instance) {
            renderSpline(instance.spline);
          } else {
            frontendModule.setLoadHandler(containerElement, renderSpline);
          }
        };
        exports.renderPlugin = renderPlugin2;
        var clearPlugin2 = () => {
          return null;
        };
        exports.clearPlugin = clearPlugin2;
      }
    });
  
    // packages/systems/ix2/plugins/IX2Variable.js
    var require_IX2Variable = __commonJS({
      "packages/systems/ix2/plugins/IX2Variable.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
        exports.normalizeColor = normalizeColor;
        exports.renderPlugin = void 0;
        function normalizeColor(inputColor) {
          let red;
          let green;
          let blue;
          let alpha = 1;
          const cleanColor = inputColor.replace(/\s/g, "").toLowerCase();
          if (cleanColor.startsWith("#")) {
            const hex = cleanColor.substring(1);
            if (hex.length === 3) {
              red = parseInt(hex[0] + hex[0], 16);
              green = parseInt(hex[1] + hex[1], 16);
              blue = parseInt(hex[2] + hex[2], 16);
            } else if (hex.length === 6) {
              red = parseInt(hex.substring(0, 2), 16);
              green = parseInt(hex.substring(2, 4), 16);
              blue = parseInt(hex.substring(4, 6), 16);
            }
          } else if (cleanColor.startsWith("rgba")) {
            const rgbaValues = cleanColor.match(/rgba\(([^)]+)\)/)[1].split(",");
            red = parseInt(rgbaValues[0], 10);
            green = parseInt(rgbaValues[1], 10);
            blue = parseInt(rgbaValues[2], 10);
            alpha = parseFloat(rgbaValues[3]);
          } else if (cleanColor.startsWith("rgb")) {
            const rgbValues = cleanColor.match(/rgb\(([^)]+)\)/)[1].split(",");
            red = parseInt(rgbValues[0], 10);
            green = parseInt(rgbValues[1], 10);
            blue = parseInt(rgbValues[2], 10);
          } else if (cleanColor.startsWith("hsla")) {
            const hslaValues = cleanColor.match(/hsla\(([^)]+)\)/)[1].split(",");
            const h = parseFloat(hslaValues[0]);
            const s = parseFloat(hslaValues[1].replace("%", "")) / 100;
            const l = parseFloat(hslaValues[2].replace("%", "")) / 100;
            alpha = parseFloat(hslaValues[3]);
            const C = (1 - Math.abs(2 * l - 1)) * s;
            const X = C * (1 - Math.abs(h / 60 % 2 - 1));
            const m = l - C / 2;
            let R;
            let G;
            let B;
            if (h >= 0 && h < 60) {
              R = C;
              G = X;
              B = 0;
            } else if (h >= 60 && h < 120) {
              R = X;
              G = C;
              B = 0;
            } else if (h >= 120 && h < 180) {
              R = 0;
              G = C;
              B = X;
            } else if (h >= 180 && h < 240) {
              R = 0;
              G = X;
              B = C;
            } else if (h >= 240 && h < 300) {
              R = X;
              G = 0;
              B = C;
            } else {
              R = C;
              G = 0;
              B = X;
            }
            red = Math.round((R + m) * 255);
            green = Math.round((G + m) * 255);
            blue = Math.round((B + m) * 255);
          } else if (cleanColor.startsWith("hsl")) {
            const hslValues = cleanColor.match(/hsl\(([^)]+)\)/)[1].split(",");
            const h = parseFloat(hslValues[0]);
            const s = parseFloat(hslValues[1].replace("%", "")) / 100;
            const l = parseFloat(hslValues[2].replace("%", "")) / 100;
            const C = (1 - Math.abs(2 * l - 1)) * s;
            const X = C * (1 - Math.abs(h / 60 % 2 - 1));
            const m = l - C / 2;
            let R;
            let G;
            let B;
            if (h >= 0 && h < 60) {
              R = C;
              G = X;
              B = 0;
            } else if (h >= 60 && h < 120) {
              R = X;
              G = C;
              B = 0;
            } else if (h >= 120 && h < 180) {
              R = 0;
              G = C;
              B = X;
            } else if (h >= 180 && h < 240) {
              R = 0;
              G = X;
              B = C;
            } else if (h >= 240 && h < 300) {
              R = X;
              G = 0;
              B = C;
            } else {
              R = C;
              G = 0;
              B = X;
            }
            red = Math.round((R + m) * 255);
            green = Math.round((G + m) * 255);
            blue = Math.round((B + m) * 255);
          }
          if (Number.isNaN(red) || Number.isNaN(green) || Number.isNaN(blue)) {
            `Invalid color in [ix2/lugins/IX2Variable.js] '${inputColor}'`;
          }
          return {
            red,
            green,
            blue,
            alpha
          };
        }
        var getPluginConfig2 = (actionItemConfig, key) => {
          return actionItemConfig.value[key];
        };
        exports.getPluginConfig = getPluginConfig2;
        var getPluginDuration3 = () => {
          return null;
        };
        exports.getPluginDuration = getPluginDuration3;
        var getPluginOrigin2 = (refState2, actionItem) => {
          if (refState2) {
            return refState2;
          }
          const destination = actionItem.config.value;
          const objectId = actionItem.config.target.objectId;
          const computedValue = getComputedStyle(document.documentElement).getPropertyValue(objectId);
          if (destination.size != null) {
            return {
              size: parseInt(computedValue, 10)
            };
          }
          if (destination.red != null && destination.green != null && destination.blue != null) {
            return normalizeColor(computedValue);
          }
        };
        exports.getPluginOrigin = getPluginOrigin2;
        var getPluginDestination2 = (actionItemConfig) => {
          return actionItemConfig.value;
        };
        exports.getPluginDestination = getPluginDestination2;
        var createPluginInstance3 = () => {
          return null;
        };
        exports.createPluginInstance = createPluginInstance3;
        var renderPlugin2 = (_, refState2, actionItem) => {
          const objectId = actionItem.config.target.objectId;
          const unit = actionItem.config.value.unit;
          const {
            PLUGIN_VARIABLE: props
          } = refState2;
          const {
            size: size2,
            red,
            green,
            blue,
            alpha
          } = props;
          let value;
          if (size2 != null) {
            value = size2 + unit;
          }
          if (red != null && blue != null && green != null && alpha != null) {
            value = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
          }
          if (value != null) {
            document.documentElement.style.setProperty(objectId, value);
          }
        };
        exports.renderPlugin = renderPlugin2;
        var clearPlugin2 = (ref, actionItem) => {
          const objectId = actionItem.config.target.objectId;
          document.documentElement.style.removeProperty(objectId);
        };
        exports.clearPlugin = clearPlugin2;
      }
    });
  
    // packages/systems/ix2/plugins/index.js
    var require_plugins = __commonJS({
      "packages/systems/ix2/plugins/index.js"(exports) {
        "use strict";
        var _interopRequireWildcard = require_interopRequireWildcard().default;
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.pluginMethodMap = void 0;
        var _sharedConstants = (init_shared_constants(), __toCommonJS(shared_constants_exports));
        var lottie = _interopRequireWildcard(require_IX2Lottie());
        var spline = _interopRequireWildcard(require_IX2Spline());
        var variable = _interopRequireWildcard(require_IX2Variable());
        var pluginMethodMap2 = exports.pluginMethodMap = /* @__PURE__ */ new Map([[_sharedConstants.ActionTypeConsts.PLUGIN_LOTTIE, {
          ...lottie
        }], [_sharedConstants.ActionTypeConsts.PLUGIN_SPLINE, {
          ...spline
        }], [_sharedConstants.ActionTypeConsts.PLUGIN_VARIABLE, {
          ...variable
        }]]);
      }
    });
  
    // packages/systems/ix2/shared/logic/IX2VanillaPlugins.ts
    var IX2VanillaPlugins_exports = {};
    __export(IX2VanillaPlugins_exports, {
      clearPlugin: () => clearPlugin,
      createPluginInstance: () => createPluginInstance,
      getPluginConfig: () => getPluginConfig,
      getPluginDestination: () => getPluginDestination,
      getPluginDuration: () => getPluginDuration,
      getPluginOrigin: () => getPluginOrigin,
      isPluginType: () => isPluginType,
      renderPlugin: () => renderPlugin
    });
    function isPluginType(actionTypeId) {
      return import_plugins.pluginMethodMap.has(actionTypeId);
    }
    var import_plugins, pluginMethod, getPluginConfig, getPluginOrigin, getPluginDuration, getPluginDestination, createPluginInstance, renderPlugin, clearPlugin;
    var init_IX2VanillaPlugins = __esm({
      "packages/systems/ix2/shared/logic/IX2VanillaPlugins.ts"() {
        "use strict";
        init_IX2BrowserSupport();
        import_plugins = __toESM(require_plugins());
        pluginMethod = (methodName) => (actionTypeId) => {
          if (!IS_BROWSER_ENV) {
            return () => null;
          }
          const plugin = import_plugins.pluginMethodMap.get(actionTypeId);
          if (!plugin) {
            throw new Error(`IX2 no plugin configured for: ${actionTypeId}`);
          }
          const method = plugin[methodName];
          if (!method) {
            throw new Error(`IX2 invalid plugin method: ${methodName}`);
          }
          return method;
        };
        getPluginConfig = pluginMethod("getPluginConfig");
        getPluginOrigin = pluginMethod("getPluginOrigin");
        getPluginDuration = pluginMethod("getPluginDuration");
        getPluginDestination = pluginMethod("getPluginDestination");
        createPluginInstance = pluginMethod("createPluginInstance");
        renderPlugin = pluginMethod("renderPlugin");
        clearPlugin = pluginMethod("clearPlugin");
      }
    });
  
    // node_modules/lodash/defaultTo.js
    var require_defaultTo = __commonJS({
      "node_modules/lodash/defaultTo.js"(exports, module) {
        function defaultTo2(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        module.exports = defaultTo2;
      }
    });
  
    // node_modules/lodash/_arrayReduce.js
    var require_arrayReduce = __commonJS({
      "node_modules/lodash/_arrayReduce.js"(exports, module) {
        function arrayReduce(array, iteratee, accumulator, initAccum) {
          var index = -1, length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[++index];
          }
          while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
          }
          return accumulator;
        }
        module.exports = arrayReduce;
      }
    });
  
    // node_modules/lodash/_createBaseFor.js
    var require_createBaseFor = __commonJS({
      "node_modules/lodash/_createBaseFor.js"(exports, module) {
        function createBaseFor(fromRight) {
          return function(object, iteratee, keysFunc) {
            var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        module.exports = createBaseFor;
      }
    });
  
    // node_modules/lodash/_baseFor.js
    var require_baseFor = __commonJS({
      "node_modules/lodash/_baseFor.js"(exports, module) {
        var createBaseFor = require_createBaseFor();
        var baseFor = createBaseFor();
        module.exports = baseFor;
      }
    });
  
    // node_modules/lodash/_baseForOwn.js
    var require_baseForOwn = __commonJS({
      "node_modules/lodash/_baseForOwn.js"(exports, module) {
        var baseFor = require_baseFor();
        var keys = require_keys();
        function baseForOwn(object, iteratee) {
          return object && baseFor(object, iteratee, keys);
        }
        module.exports = baseForOwn;
      }
    });
  
    // node_modules/lodash/_createBaseEach.js
    var require_createBaseEach = __commonJS({
      "node_modules/lodash/_createBaseEach.js"(exports, module) {
        var isArrayLike = require_isArrayLike();
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        module.exports = createBaseEach;
      }
    });
  
    // node_modules/lodash/_baseEach.js
    var require_baseEach = __commonJS({
      "node_modules/lodash/_baseEach.js"(exports, module) {
        var baseForOwn = require_baseForOwn();
        var createBaseEach = require_createBaseEach();
        var baseEach = createBaseEach(baseForOwn);
        module.exports = baseEach;
      }
    });
  
    // node_modules/lodash/_baseReduce.js
    var require_baseReduce = __commonJS({
      "node_modules/lodash/_baseReduce.js"(exports, module) {
        function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
          eachFunc(collection, function(value, index, collection2) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
          });
          return accumulator;
        }
        module.exports = baseReduce;
      }
    });
  
    // node_modules/lodash/reduce.js
    var require_reduce = __commonJS({
      "node_modules/lodash/reduce.js"(exports, module) {
        var arrayReduce = require_arrayReduce();
        var baseEach = require_baseEach();
        var baseIteratee = require_baseIteratee();
        var baseReduce = require_baseReduce();
        var isArray = require_isArray();
        function reduce2(collection, iteratee, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
        }
        module.exports = reduce2;
      }
    });
  
    // node_modules/lodash/findLastIndex.js
    var require_findLastIndex = __commonJS({
      "node_modules/lodash/findLastIndex.js"(exports, module) {
        var baseFindIndex = require_baseFindIndex();
        var baseIteratee = require_baseIteratee();
        var toInteger = require_toInteger();
        var nativeMax = Math.max;
        var nativeMin = Math.min;
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== void 0) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
        }
        module.exports = findLastIndex;
      }
    });
  
    // node_modules/lodash/findLast.js
    var require_findLast = __commonJS({
      "node_modules/lodash/findLast.js"(exports, module) {
        var createFind = require_createFind();
        var findLastIndex = require_findLastIndex();
        var findLast2 = createFind(findLastIndex);
        module.exports = findLast2;
      }
    });
  
    // packages/systems/ix2/shared/logic/shallowEqual.ts
    function is(x, y) {
      if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
      }
      return x !== x && y !== y;
    }
    function shallowEqual(objA, objB) {
      if (is(objA, objB)) {
        return true;
      }
      if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
        return false;
      }
      const keysA = Object.keys(objA);
      const keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      for (let i = 0; i < keysA.length; i++) {
        if (
          // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'PropertyKey'.
          !hasOwnProperty.call(objB, keysA[i]) || // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type. | TS2538 - Type 'undefined' cannot be used as an index type.
          !is(objA[keysA[i]], objB[keysA[i]])
        ) {
          return false;
        }
      }
      return true;
    }
    var hasOwnProperty, shallowEqual_default;
    var init_shallowEqual = __esm({
      "packages/systems/ix2/shared/logic/shallowEqual.ts"() {
        "use strict";
        hasOwnProperty = Object.prototype.hasOwnProperty;
        shallowEqual_default = shallowEqual;
      }
    });
  
    // packages/systems/ix2/shared/logic/IX2VanillaUtils.ts
    var IX2VanillaUtils_exports = {};
    __export(IX2VanillaUtils_exports, {
      cleanupHTMLElement: () => cleanupHTMLElement,
      clearAllStyles: () => clearAllStyles,
      clearObjectCache: () => clearObjectCache,
      getActionListProgress: () => getActionListProgress,
      getAffectedElements: () => getAffectedElements,
      getComputedStyle: () => getComputedStyle2,
      getDestinationValues: () => getDestinationValues,
      getElementId: () => getElementId,
      getInstanceId: () => getInstanceId,
      getInstanceOrigin: () => getInstanceOrigin,
      getItemConfigByKey: () => getItemConfigByKey,
      getMaxDurationItemIndex: () => getMaxDurationItemIndex,
      getNamespacedParameterId: () => getNamespacedParameterId,
      getRenderType: () => getRenderType,
      getStyleProp: () => getStyleProp,
      mediaQueriesEqual: () => mediaQueriesEqual,
      observeStore: () => observeStore,
      reduceListToGroup: () => reduceListToGroup,
      reifyState: () => reifyState,
      renderHTMLElement: () => renderHTMLElement,
      shallowEqual: () => shallowEqual_default,
      shouldAllowMediaQuery: () => shouldAllowMediaQuery,
      shouldNamespaceEventParameter: () => shouldNamespaceEventParameter,
      stringifyTarget: () => stringifyTarget
    });
    function clearObjectCache() {
      objectCache.clear();
    }
    function getInstanceId() {
      return "i" + instanceCount++;
    }
    function getElementId(ixElements3, ref) {
      for (const key in ixElements3) {
        const ixEl = ixElements3[key];
        if (ixEl && ixEl.ref === ref) {
          return ixEl.id;
        }
      }
      return "e" + elementCount++;
    }
    function reifyState({ events, actionLists, site } = {}) {
      const eventTypeMap = (0, import_reduce.default)(
        events,
        (result, event) => {
          const { eventTypeId } = event;
          if (!result[eventTypeId]) {
            result[eventTypeId] = {};
          }
          result[eventTypeId][event.id] = event;
          return result;
        },
        {}
      );
      let mediaQueries = site && site.mediaQueries;
      let mediaQueryKeys = [];
      if (mediaQueries) {
        mediaQueryKeys = mediaQueries.map((mq) => mq.key);
      } else {
        mediaQueries = [];
        console.warn(`IX2 missing mediaQueries in site data`);
      }
      return {
        ixData: {
          events,
          actionLists,
          eventTypeMap,
          mediaQueries,
          mediaQueryKeys
        }
      };
    }
    function observeStore({
      // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
      store,
      // @ts-expect-error - TS7031 - Binding element 'select' implicitly has an 'any' type.
      select,
      // @ts-expect-error - TS7031 - Binding element 'onChange' implicitly has an 'any' type.
      onChange,
      comparator = strictEqual
    }) {
      const { getState, subscribe } = store;
      const unsubscribe = subscribe(handleChange);
      let currentState = select(getState());
      function handleChange() {
        const nextState = select(getState());
        if (nextState == null) {
          unsubscribe();
          return;
        }
        if (!comparator(nextState, currentState)) {
          currentState = nextState;
          onChange(currentState, store);
        }
      }
      return unsubscribe;
    }
    function normalizeTarget(target) {
      const type = typeof target;
      if (type === "string") {
        return { id: target };
      } else if (target != null && type === "object") {
        const { id, objectId, selector, selectorGuids, appliesTo, useEventTarget } = target;
        return { id, objectId, selector, selectorGuids, appliesTo, useEventTarget };
      }
      return {};
    }
    function getAffectedElements({
      config,
      event,
      eventTarget,
      elementRoot,
      elementApi
    }) {
      if (!elementApi) {
        throw new Error("IX2 missing elementApi");
      }
      const { targets } = config;
      if (Array.isArray(targets) && targets.length > 0) {
        return targets.reduce(
          (accumulator, target2) => accumulator.concat(
            getAffectedElements({
              config: { target: target2 },
              event,
              eventTarget,
              elementRoot,
              elementApi
            })
          ),
          []
        );
      }
      const {
        getValidDocument: getValidDocument2,
        getQuerySelector: getQuerySelector2,
        queryDocument: queryDocument2,
        getChildElements: getChildElements2,
        getSiblingElements: getSiblingElements2,
        matchSelector: matchSelector2,
        elementContains: elementContains2,
        isSiblingNode: isSiblingNode2
      } = elementApi;
      const { target } = config;
      if (!target) {
        return [];
      }
      const {
        id,
        objectId,
        selector,
        selectorGuids,
        appliesTo,
        useEventTarget
      } = normalizeTarget(target);
      if (objectId) {
        const ref = objectCache.has(objectId) ? objectCache.get(objectId) : objectCache.set(objectId, {}).get(objectId);
        return [ref];
      }
      if (appliesTo === EventAppliesTo.PAGE) {
        const doc = getValidDocument2(id);
        return doc ? [doc] : [];
      }
      const overrides = event?.action?.config?.affectedElements ?? {};
      const override = overrides[id || selector] || {};
      const validOverride = Boolean(override.id || override.selector);
      let limitAffectedElements;
      let baseSelector;
      let finalSelector;
      const eventTargetSelector = event && getQuerySelector2(normalizeTarget(event.target));
      if (validOverride) {
        limitAffectedElements = override.limitAffectedElements;
        baseSelector = eventTargetSelector;
        finalSelector = getQuerySelector2(override);
      } else {
        baseSelector = finalSelector = getQuerySelector2({
          id,
          selector,
          selectorGuids
        });
      }
      if (event && useEventTarget) {
        const eventTargets = eventTarget && (finalSelector || useEventTarget === true) ? [eventTarget] : queryDocument2(eventTargetSelector);
        if (finalSelector) {
          if (useEventTarget === PARENT2) {
            return queryDocument2(finalSelector).filter(
              (parentElement) => eventTargets.some(
                (targetElement) => elementContains2(parentElement, targetElement)
              )
            );
          }
          if (useEventTarget === CHILDREN2) {
            return queryDocument2(finalSelector).filter(
              (childElement) => eventTargets.some(
                (targetElement) => elementContains2(targetElement, childElement)
              )
            );
          }
          if (useEventTarget === SIBLINGS2) {
            return queryDocument2(finalSelector).filter(
              (siblingElement) => eventTargets.some(
                (targetElement) => isSiblingNode2(targetElement, siblingElement)
              )
            );
          }
        }
        return eventTargets;
      }
      if (baseSelector == null || finalSelector == null) {
        return [];
      }
      if (IS_BROWSER_ENV && elementRoot) {
        return queryDocument2(finalSelector).filter(
          (element) => elementRoot.contains(element)
        );
      }
      if (limitAffectedElements === CHILDREN2) {
        return queryDocument2(baseSelector, finalSelector);
      } else if (limitAffectedElements === IMMEDIATE_CHILDREN2) {
        return getChildElements2(queryDocument2(baseSelector)).filter(
          matchSelector2(finalSelector)
        );
      } else if (limitAffectedElements === SIBLINGS2) {
        return getSiblingElements2(queryDocument2(baseSelector)).filter(
          matchSelector2(finalSelector)
        );
      } else {
        return queryDocument2(finalSelector);
      }
    }
    function getComputedStyle2({ element, actionItem }) {
      if (!IS_BROWSER_ENV) {
        return {};
      }
      const { actionTypeId } = actionItem;
      switch (actionTypeId) {
        case STYLE_SIZE2:
        case STYLE_BACKGROUND_COLOR:
        case STYLE_BORDER:
        case STYLE_TEXT_COLOR:
        case GENERAL_DISPLAY:
          return window.getComputedStyle(element);
        default:
          return {};
      }
    }
    function getInstanceOrigin(element, refState2 = {}, computedStyle = {}, actionItem, elementApi) {
      const { getStyle: getStyle2 } = elementApi;
      const { actionTypeId } = actionItem;
      if (isPluginType(actionTypeId)) {
        return getPluginOrigin(actionTypeId)(refState2[actionTypeId], actionItem);
      }
      switch (actionItem.actionTypeId) {
        case TRANSFORM_MOVE2:
        case TRANSFORM_SCALE2:
        case TRANSFORM_ROTATE2:
        case TRANSFORM_SKEW2: {
          return (
            // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW"' can't be used to index type '{}'.
            refState2[actionItem.actionTypeId] || transformDefaults[actionItem.actionTypeId]
          );
        }
        case STYLE_FILTER2:
          return getFilterDefaults(
            // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FILTER"' can't be used to index type '{}'.
            refState2[actionItem.actionTypeId],
            actionItem.config.filters
          );
        case STYLE_FONT_VARIATION2:
          return getFontVariationDefaults(
            // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FONT_VARIATION"' can't be used to index type '{}'.
            refState2[actionItem.actionTypeId],
            actionItem.config.fontVariations
          );
        case STYLE_OPACITY:
          return { value: (0, import_defaultTo.default)(parseFloat(getStyle2(element, OPACITY2)), 1) };
        case STYLE_SIZE2: {
          const inlineWidth = getStyle2(element, WIDTH2);
          const inlineHeight = getStyle2(element, HEIGHT2);
          let widthValue;
          let heightValue;
          if (actionItem.config.widthUnit === AUTO2) {
            widthValue = pxValueRegex.test(inlineWidth) ? parseFloat(inlineWidth) : (
              // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
              parseFloat(computedStyle.width)
            );
          } else {
            widthValue = (0, import_defaultTo.default)(
              parseFloat(inlineWidth),
              // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
              parseFloat(computedStyle.width)
            );
          }
          if (actionItem.config.heightUnit === AUTO2) {
            heightValue = pxValueRegex.test(inlineHeight) ? parseFloat(inlineHeight) : (
              // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
              parseFloat(computedStyle.height)
            );
          } else {
            heightValue = (0, import_defaultTo.default)(
              parseFloat(inlineHeight),
              // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
              parseFloat(computedStyle.height)
            );
          }
          return {
            widthValue,
            heightValue
          };
        }
        case STYLE_BACKGROUND_COLOR:
        case STYLE_BORDER:
        case STYLE_TEXT_COLOR:
          return parseColor({
            element,
            actionTypeId: actionItem.actionTypeId,
            computedStyle,
            getStyle: getStyle2
          });
        case GENERAL_DISPLAY:
          return {
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            value: (0, import_defaultTo.default)(getStyle2(element, DISPLAY2), computedStyle.display)
          };
        case OBJECT_VALUE:
          return refState2[actionItem.actionTypeId] || { value: 0 };
        default: {
          return;
        }
      }
    }
    function getDestinationValues({
      element,
      actionItem,
      elementApi
    }) {
      if (isPluginType(actionItem.actionTypeId)) {
        return getPluginDestination(actionItem.actionTypeId)(actionItem.config);
      }
      switch (actionItem.actionTypeId) {
        case TRANSFORM_MOVE2:
        case TRANSFORM_SCALE2:
        case TRANSFORM_ROTATE2:
        case TRANSFORM_SKEW2: {
          const { xValue, yValue, zValue } = actionItem.config;
          return { xValue, yValue, zValue };
        }
        case STYLE_SIZE2: {
          const { getStyle: getStyle2, setStyle: setStyle2, getProperty: getProperty2 } = elementApi;
          const { widthUnit, heightUnit } = actionItem.config;
          let { widthValue, heightValue } = actionItem.config;
          if (!IS_BROWSER_ENV) {
            return { widthValue, heightValue };
          }
          if (widthUnit === AUTO2) {
            const temp = getStyle2(element, WIDTH2);
            setStyle2(element, WIDTH2, "");
            widthValue = getProperty2(element, "offsetWidth");
            setStyle2(element, WIDTH2, temp);
          }
          if (heightUnit === AUTO2) {
            const temp = getStyle2(element, HEIGHT2);
            setStyle2(element, HEIGHT2, "");
            heightValue = getProperty2(element, "offsetHeight");
            setStyle2(element, HEIGHT2, temp);
          }
          return { widthValue, heightValue };
        }
        case STYLE_BACKGROUND_COLOR:
        case STYLE_BORDER:
        case STYLE_TEXT_COLOR: {
          const { rValue, gValue, bValue, aValue } = actionItem.config;
          return { rValue, gValue, bValue, aValue };
        }
        case STYLE_FILTER2: {
          return actionItem.config.filters.reduce(
            reduceFilters,
            {}
          );
        }
        case STYLE_FONT_VARIATION2: {
          return actionItem.config.fontVariations.reduce(
            reduceFontVariations,
            {}
          );
        }
        default: {
          const { value } = actionItem.config;
          return { value };
        }
      }
    }
    function getRenderType(actionTypeId) {
      if (/^TRANSFORM_/.test(actionTypeId)) {
        return RENDER_TRANSFORM2;
      }
      if (/^STYLE_/.test(actionTypeId)) {
        return RENDER_STYLE2;
      }
      if (/^GENERAL_/.test(actionTypeId)) {
        return RENDER_GENERAL2;
      }
      if (/^PLUGIN_/.test(actionTypeId)) {
        return RENDER_PLUGIN2;
      }
    }
    function getStyleProp(renderType, actionTypeId) {
      return renderType === RENDER_STYLE2 ? actionTypeId.replace("STYLE_", "").toLowerCase() : null;
    }
    function renderHTMLElement(element, refState2, actionState, eventId, actionItem, styleProp, elementApi, renderType, pluginInstance) {
      switch (renderType) {
        case RENDER_TRANSFORM2: {
          return renderTransform(
            element,
            refState2,
            actionState,
            actionItem,
            elementApi
          );
        }
        case RENDER_STYLE2: {
          return renderStyle(
            element,
            refState2,
            actionState,
            actionItem,
            styleProp,
            elementApi
          );
        }
        case RENDER_GENERAL2: {
          return renderGeneral(element, actionItem, elementApi);
        }
        case RENDER_PLUGIN2: {
          const { actionTypeId } = actionItem;
          if (isPluginType(actionTypeId)) {
            return renderPlugin(actionTypeId)(pluginInstance, refState2, actionItem);
          }
        }
      }
    }
    function renderTransform(element, refState2, actionState, actionItem, elementApi) {
      const newTransform = transformKeys.map((actionTypeId) => {
        const defaults = transformDefaults[actionTypeId];
        const {
          xValue = defaults.xValue,
          yValue = defaults.yValue,
          zValue = defaults.zValue,
          xUnit = "",
          yUnit = "",
          zUnit = ""
        } = refState2[actionTypeId] || {};
        switch (actionTypeId) {
          case TRANSFORM_MOVE2:
            return `${TRANSLATE_3D2}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
          case TRANSFORM_SCALE2:
            return `${SCALE_3D2}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
          case TRANSFORM_ROTATE2:
            return `${ROTATE_X2}(${xValue}${xUnit}) ${ROTATE_Y2}(${yValue}${yUnit}) ${ROTATE_Z2}(${zValue}${zUnit})`;
          case TRANSFORM_SKEW2:
            return `${SKEW2}(${xValue}${xUnit}, ${yValue}${yUnit})`;
          default:
            return "";
        }
      }).join(" ");
      const { setStyle: setStyle2 } = elementApi;
      addWillChange(element, TRANSFORM_PREFIXED, elementApi);
      setStyle2(element, TRANSFORM_PREFIXED, newTransform);
      if (hasDefined3dTransform(actionItem, actionState)) {
        setStyle2(element, TRANSFORM_STYLE_PREFIXED, PRESERVE_3D2);
      }
    }
    function renderFilter(element, actionState, actionItemConfig, elementApi) {
      const filterValue = (0, import_reduce.default)(
        actionState,
        (result, value, type) => `${result} ${type}(${value}${getFilterUnit(type, actionItemConfig)})`,
        ""
      );
      const { setStyle: setStyle2 } = elementApi;
      addWillChange(element, FILTER2, elementApi);
      setStyle2(element, FILTER2, filterValue);
    }
    function renderFontVariation(element, actionState, actionItemConfig, elementApi) {
      const fontVariationValue = (0, import_reduce.default)(
        actionState,
        (result, value, type) => {
          result.push(`"${type}" ${value}`);
          return result;
        },
        []
      ).join(", ");
      const { setStyle: setStyle2 } = elementApi;
      addWillChange(element, FONT_VARIATION_SETTINGS2, elementApi);
      setStyle2(element, FONT_VARIATION_SETTINGS2, fontVariationValue);
    }
    function hasDefined3dTransform({ actionTypeId }, { xValue, yValue, zValue }) {
      return actionTypeId === TRANSFORM_MOVE2 && zValue !== void 0 || // SCALE_Z
      actionTypeId === TRANSFORM_SCALE2 && zValue !== void 0 || // ROTATE_X or ROTATE_Y
      actionTypeId === TRANSFORM_ROTATE2 && (xValue !== void 0 || yValue !== void 0);
    }
    function getFirstMatch(regex, value) {
      const match = regex.exec(value);
      return match ? match[1] : "";
    }
    function parseColor({ element, actionTypeId, computedStyle, getStyle: getStyle2 }) {
      const prop = colorStyleProps[actionTypeId];
      const inlineValue = getStyle2(element, prop);
      const value = rgbValidRegex.test(inlineValue) ? inlineValue : computedStyle[prop];
      const matches = getFirstMatch(rgbMatchRegex, value).split(COMMA_DELIMITER2);
      return {
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
        rValue: (0, import_defaultTo.default)(parseInt(matches[0], 10), 255),
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
        gValue: (0, import_defaultTo.default)(parseInt(matches[1], 10), 255),
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
        bValue: (0, import_defaultTo.default)(parseInt(matches[2], 10), 255),
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
        aValue: (0, import_defaultTo.default)(parseFloat(matches[3]), 1)
      };
    }
    function renderStyle(element, refState2, actionState, actionItem, styleProp, elementApi) {
      const { setStyle: setStyle2 } = elementApi;
      switch (actionItem.actionTypeId) {
        case STYLE_SIZE2: {
          let { widthUnit = "", heightUnit = "" } = actionItem.config;
          const { widthValue, heightValue } = actionState;
          if (widthValue !== void 0) {
            if (widthUnit === AUTO2) {
              widthUnit = "px";
            }
            addWillChange(element, WIDTH2, elementApi);
            setStyle2(element, WIDTH2, widthValue + widthUnit);
          }
          if (heightValue !== void 0) {
            if (heightUnit === AUTO2) {
              heightUnit = "px";
            }
            addWillChange(element, HEIGHT2, elementApi);
            setStyle2(element, HEIGHT2, heightValue + heightUnit);
          }
          break;
        }
        case STYLE_FILTER2: {
          renderFilter(element, actionState, actionItem.config, elementApi);
          break;
        }
        case STYLE_FONT_VARIATION2: {
          renderFontVariation(element, actionState, actionItem.config, elementApi);
          break;
        }
        case STYLE_BACKGROUND_COLOR:
        case STYLE_BORDER:
        case STYLE_TEXT_COLOR: {
          const prop = colorStyleProps[actionItem.actionTypeId];
          const rValue = Math.round(actionState.rValue);
          const gValue = Math.round(actionState.gValue);
          const bValue = Math.round(actionState.bValue);
          const aValue = actionState.aValue;
          addWillChange(element, prop, elementApi);
          setStyle2(
            element,
            prop,
            aValue >= 1 ? `rgb(${rValue},${gValue},${bValue})` : `rgba(${rValue},${gValue},${bValue},${aValue})`
          );
          break;
        }
        default: {
          const { unit = "" } = actionItem.config;
          addWillChange(element, styleProp, elementApi);
          setStyle2(element, styleProp, actionState.value + unit);
          break;
        }
      }
    }
    function renderGeneral(element, actionItem, elementApi) {
      const { setStyle: setStyle2 } = elementApi;
      switch (actionItem.actionTypeId) {
        case GENERAL_DISPLAY: {
          const { value } = actionItem.config;
          if (value === FLEX2 && IS_BROWSER_ENV) {
            setStyle2(element, DISPLAY2, FLEX_PREFIXED);
          } else {
            setStyle2(element, DISPLAY2, value);
          }
          return;
        }
      }
    }
    function addWillChange(element, prop, elementApi) {
      if (!IS_BROWSER_ENV) {
        return;
      }
      const validProp = willChangeProps[prop];
      if (!validProp) {
        return;
      }
      const { getStyle: getStyle2, setStyle: setStyle2 } = elementApi;
      const value = getStyle2(element, WILL_CHANGE2);
      if (!value) {
        setStyle2(element, WILL_CHANGE2, validProp);
        return;
      }
      const values = value.split(COMMA_DELIMITER2).map(trim);
      if (values.indexOf(validProp) === -1) {
        setStyle2(
          element,
          WILL_CHANGE2,
          values.concat(validProp).join(COMMA_DELIMITER2)
        );
      }
    }
    function removeWillChange(element, prop, elementApi) {
      if (!IS_BROWSER_ENV) {
        return;
      }
      const validProp = willChangeProps[prop];
      if (!validProp) {
        return;
      }
      const { getStyle: getStyle2, setStyle: setStyle2 } = elementApi;
      const value = getStyle2(element, WILL_CHANGE2);
      if (!value || value.indexOf(validProp) === -1) {
        return;
      }
      setStyle2(
        element,
        WILL_CHANGE2,
        value.split(COMMA_DELIMITER2).map(trim).filter((v) => v !== validProp).join(COMMA_DELIMITER2)
      );
    }
    function clearAllStyles({ store, elementApi }) {
      const { ixData: ixData2 } = store.getState();
      const { events = {}, actionLists = {} } = ixData2;
      Object.keys(events).forEach((eventId) => {
        const event = events[eventId];
        const { config } = event.action;
        const { actionListId } = config;
        const actionList = actionLists[actionListId];
        if (actionList) {
          clearActionListStyles({ actionList, event, elementApi });
        }
      });
      Object.keys(actionLists).forEach((actionListId) => {
        clearActionListStyles({ actionList: actionLists[actionListId], elementApi });
      });
    }
    function clearActionListStyles({ actionList = {}, event, elementApi }) {
      const { actionItemGroups, continuousParameterGroups } = actionList;
      actionItemGroups && // @ts-expect-error - TS7006 - Parameter 'actionGroup' implicitly has an 'any' type.
      actionItemGroups.forEach((actionGroup) => {
        clearActionGroupStyles({ actionGroup, event, elementApi });
      });
      continuousParameterGroups && // @ts-expect-error - TS7006 - Parameter 'paramGroup' implicitly has an 'any' type.
      continuousParameterGroups.forEach((paramGroup) => {
        const { continuousActionGroups } = paramGroup;
        continuousActionGroups.forEach((actionGroup) => {
          clearActionGroupStyles({ actionGroup, event, elementApi });
        });
      });
    }
    function clearActionGroupStyles({ actionGroup, event, elementApi }) {
      const { actionItems } = actionGroup;
      actionItems.forEach((actionItem) => {
        const { actionTypeId, config } = actionItem;
        let clearElement;
        if (isPluginType(actionTypeId)) {
          clearElement = (ref) => clearPlugin(actionTypeId)(ref, actionItem);
        } else {
          clearElement = processElementByType({
            effect: clearStyleProp,
            actionTypeId,
            elementApi
          });
        }
        getAffectedElements({ config, event, elementApi }).forEach(clearElement);
      });
    }
    function cleanupHTMLElement(element, actionItem, elementApi) {
      const { setStyle: setStyle2, getStyle: getStyle2 } = elementApi;
      const { actionTypeId } = actionItem;
      if (actionTypeId === STYLE_SIZE2) {
        const { config } = actionItem;
        if (config.widthUnit === AUTO2) {
          setStyle2(element, WIDTH2, "");
        }
        if (config.heightUnit === AUTO2) {
          setStyle2(element, HEIGHT2, "");
        }
      }
      if (getStyle2(element, WILL_CHANGE2)) {
        processElementByType({ effect: removeWillChange, actionTypeId, elementApi })(
          element
        );
      }
    }
    function clearStyleProp(element, prop, elementApi) {
      const { setStyle: setStyle2 } = elementApi;
      removeWillChange(element, prop, elementApi);
      setStyle2(element, prop, "");
      if (prop === TRANSFORM_PREFIXED) {
        setStyle2(element, TRANSFORM_STYLE_PREFIXED, "");
      }
    }
    function getMaxDurationItemIndex(actionItems) {
      let maxDuration = 0;
      let resultIndex = 0;
      actionItems.forEach((actionItem, index) => {
        const { config } = actionItem;
        const total = config.delay + config.duration;
        if (total >= maxDuration) {
          maxDuration = total;
          resultIndex = index;
        }
      });
      return resultIndex;
    }
    function getActionListProgress(actionList, instance) {
      const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
      const { actionItem: instanceItem, verboseTimeElapsed = 0 } = instance;
      let totalDuration = 0;
      let elapsedDuration = 0;
      actionItemGroups.forEach((group, index) => {
        if (useFirstGroupAsInitialState && index === 0) {
          return;
        }
        const { actionItems } = group;
        const carrierItem = actionItems[getMaxDurationItemIndex(actionItems)];
        const { config, actionTypeId } = carrierItem;
        if (instanceItem.id === carrierItem.id) {
          elapsedDuration = totalDuration + verboseTimeElapsed;
        }
        const duration = getRenderType(actionTypeId) === RENDER_GENERAL2 ? 0 : config.duration;
        totalDuration += config.delay + duration;
      });
      return totalDuration > 0 ? optimizeFloat(elapsedDuration / totalDuration) : 0;
    }
    function reduceListToGroup({ actionList, actionItemId, rawData }) {
      const { actionItemGroups, continuousParameterGroups } = actionList;
      const newActionItems = [];
      const takeItemUntilMatch = (actionItem) => {
        newActionItems.push(
          (0, import_timm4.mergeIn)(actionItem, ["config"], {
            delay: 0,
            duration: 0
          })
        );
        return actionItem.id === actionItemId;
      };
      actionItemGroups && // @ts-expect-error - TS7031 - Binding element 'actionItems' implicitly has an 'any' type.
      actionItemGroups.some(({ actionItems }) => {
        return actionItems.some(takeItemUntilMatch);
      });
      continuousParameterGroups && // @ts-expect-error - TS7006 - Parameter 'paramGroup' implicitly has an 'any' type.
      continuousParameterGroups.some((paramGroup) => {
        const { continuousActionGroups } = paramGroup;
        return continuousActionGroups.some(({ actionItems }) => {
          return actionItems.some(takeItemUntilMatch);
        });
      });
      return (0, import_timm4.setIn)(rawData, ["actionLists"], {
        [actionList.id]: {
          id: actionList.id,
          actionItemGroups: [
            {
              actionItems: newActionItems
            }
          ]
        }
      });
    }
    function shouldNamespaceEventParameter(eventTypeId, { basedOn }) {
      return eventTypeId === EventTypeConsts.SCROLLING_IN_VIEW && (basedOn === EventBasedOn.ELEMENT || basedOn == null) || eventTypeId === EventTypeConsts.MOUSE_MOVE && basedOn === EventBasedOn.ELEMENT;
    }
    function getNamespacedParameterId(eventStateKey, continuousParameterGroupId) {
      const namespacedParameterId = eventStateKey + COLON_DELIMITER2 + continuousParameterGroupId;
      return namespacedParameterId;
    }
    function shouldAllowMediaQuery(mediaQueries, mediaQueryKey) {
      if (mediaQueryKey == null) {
        return true;
      }
      return mediaQueries.indexOf(mediaQueryKey) !== -1;
    }
    function mediaQueriesEqual(listA, listB) {
      return shallowEqual_default(listA && listA.sort(), listB && listB.sort());
    }
    function stringifyTarget(target) {
      if (typeof target === "string") {
        return target;
      }
      if (target.pluginElement && target.objectId) {
        return target.pluginElement + BAR_DELIMITER2 + target.objectId;
      }
      if (target.objectId) {
        return target.objectId;
      }
      const { id = "", selector = "", useEventTarget = "" } = target;
      return id + BAR_DELIMITER2 + selector + BAR_DELIMITER2 + useEventTarget;
    }
    var import_defaultTo, import_reduce, import_findLast, import_timm4, BACKGROUND2, TRANSFORM2, TRANSLATE_3D2, SCALE_3D2, ROTATE_X2, ROTATE_Y2, ROTATE_Z2, SKEW2, PRESERVE_3D2, FLEX2, OPACITY2, FILTER2, FONT_VARIATION_SETTINGS2, WIDTH2, HEIGHT2, BACKGROUND_COLOR2, BORDER_COLOR2, COLOR2, CHILDREN2, IMMEDIATE_CHILDREN2, SIBLINGS2, PARENT2, DISPLAY2, WILL_CHANGE2, AUTO2, COMMA_DELIMITER2, COLON_DELIMITER2, BAR_DELIMITER2, RENDER_TRANSFORM2, RENDER_GENERAL2, RENDER_STYLE2, RENDER_PLUGIN2, TRANSFORM_MOVE2, TRANSFORM_SCALE2, TRANSFORM_ROTATE2, TRANSFORM_SKEW2, STYLE_OPACITY, STYLE_FILTER2, STYLE_FONT_VARIATION2, STYLE_SIZE2, STYLE_BACKGROUND_COLOR, STYLE_BORDER, STYLE_TEXT_COLOR, GENERAL_DISPLAY, OBJECT_VALUE, trim, colorStyleProps, willChangeProps, objectCache, instanceCount, elementCount, strictEqual, pxValueRegex, getFilterDefaults, getFontVariationDefaults, reduceFilters, reduceFontVariations, getItemConfigByKey, transformDefaults, filterDefaults, fontVariationDefaults, getFilterUnit, transformKeys, paramCapture, rgbValidRegex, rgbMatchRegex, processElementByType;
    var init_IX2VanillaUtils = __esm({
      "packages/systems/ix2/shared/logic/IX2VanillaUtils.ts"() {
        "use strict";
        import_defaultTo = __toESM(require_defaultTo());
        import_reduce = __toESM(require_reduce());
        import_findLast = __toESM(require_findLast());
        import_timm4 = __toESM(require_timm());
        init_shared_constants();
        init_shallowEqual();
        init_IX2EasingUtils();
        init_IX2VanillaPlugins();
        init_IX2BrowserSupport();
        ({
          BACKGROUND: BACKGROUND2,
          TRANSFORM: TRANSFORM2,
          TRANSLATE_3D: TRANSLATE_3D2,
          SCALE_3D: SCALE_3D2,
          ROTATE_X: ROTATE_X2,
          ROTATE_Y: ROTATE_Y2,
          ROTATE_Z: ROTATE_Z2,
          SKEW: SKEW2,
          PRESERVE_3D: PRESERVE_3D2,
          FLEX: FLEX2,
          OPACITY: OPACITY2,
          FILTER: FILTER2,
          FONT_VARIATION_SETTINGS: FONT_VARIATION_SETTINGS2,
          WIDTH: WIDTH2,
          HEIGHT: HEIGHT2,
          BACKGROUND_COLOR: BACKGROUND_COLOR2,
          BORDER_COLOR: BORDER_COLOR2,
          COLOR: COLOR2,
          CHILDREN: CHILDREN2,
          IMMEDIATE_CHILDREN: IMMEDIATE_CHILDREN2,
          SIBLINGS: SIBLINGS2,
          PARENT: PARENT2,
          DISPLAY: DISPLAY2,
          WILL_CHANGE: WILL_CHANGE2,
          AUTO: AUTO2,
          COMMA_DELIMITER: COMMA_DELIMITER2,
          COLON_DELIMITER: COLON_DELIMITER2,
          BAR_DELIMITER: BAR_DELIMITER2,
          RENDER_TRANSFORM: RENDER_TRANSFORM2,
          RENDER_GENERAL: RENDER_GENERAL2,
          RENDER_STYLE: RENDER_STYLE2,
          RENDER_PLUGIN: RENDER_PLUGIN2
        } = IX2EngineConstants_exports);
        ({
          TRANSFORM_MOVE: TRANSFORM_MOVE2,
          TRANSFORM_SCALE: TRANSFORM_SCALE2,
          TRANSFORM_ROTATE: TRANSFORM_ROTATE2,
          TRANSFORM_SKEW: TRANSFORM_SKEW2,
          STYLE_OPACITY,
          STYLE_FILTER: STYLE_FILTER2,
          STYLE_FONT_VARIATION: STYLE_FONT_VARIATION2,
          STYLE_SIZE: STYLE_SIZE2,
          STYLE_BACKGROUND_COLOR,
          STYLE_BORDER,
          STYLE_TEXT_COLOR,
          GENERAL_DISPLAY,
          OBJECT_VALUE
        } = ActionTypeConsts);
        trim = (v) => v.trim();
        colorStyleProps = Object.freeze({
          [STYLE_BACKGROUND_COLOR]: BACKGROUND_COLOR2,
          [STYLE_BORDER]: BORDER_COLOR2,
          [STYLE_TEXT_COLOR]: COLOR2
        });
        willChangeProps = Object.freeze({
          [TRANSFORM_PREFIXED]: TRANSFORM2,
          [BACKGROUND_COLOR2]: BACKGROUND2,
          [OPACITY2]: OPACITY2,
          [FILTER2]: FILTER2,
          [WIDTH2]: WIDTH2,
          [HEIGHT2]: HEIGHT2,
          [FONT_VARIATION_SETTINGS2]: FONT_VARIATION_SETTINGS2
        });
        objectCache = /* @__PURE__ */ new Map();
        instanceCount = 1;
        elementCount = 1;
        strictEqual = (a, b) => a === b;
        pxValueRegex = /px/;
        getFilterDefaults = (actionState, filters) => (
          // @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type. | TS7006 - Parameter 'filter' implicitly has an 'any' type.
          filters.reduce((result, filter) => {
            if (result[filter.type] == null) {
              result[filter.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Readonly<{ blur: 0; 'hue-rotate': 0; invert: 0; grayscale: 0; saturate: 100; sepia: 0; contrast: 100; brightness: 100; }>'.
              filterDefaults[filter.type];
            }
            return result;
          }, actionState || {})
        );
        getFontVariationDefaults = (actionState, fontVariations) => fontVariations.reduce((result, fontVariation) => {
          if (result[fontVariation.type] == null) {
            result[fontVariation.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Readonly<{ wght: 0; opsz: 0; wdth: 0; slnt: 0; }>'.
            fontVariationDefaults[fontVariation.type] || // @ts-expect-error - TS2339 - Property 'defaultValue' does not exist on type 'FontVariationItemConfigType'.
            fontVariation.defaultValue || 0;
          }
          return result;
        }, actionState || {});
        reduceFilters = (result, filter) => {
          if (filter) {
            result[filter.type] = filter.value || 0;
          }
          return result;
        };
        reduceFontVariations = (result, fontVariation) => {
          if (fontVariation) {
            result[fontVariation.type] = fontVariation.value || 0;
          }
          return result;
        };
        getItemConfigByKey = (actionTypeId, key, config) => {
          if (isPluginType(actionTypeId)) {
            return getPluginConfig(actionTypeId)(config, key);
          }
          switch (actionTypeId) {
            case STYLE_FILTER2: {
              const filter = (0, import_findLast.default)(config.filters, ({ type }) => type === key);
              return filter ? filter.value : 0;
            }
            case STYLE_FONT_VARIATION2: {
              const fontVariation = (0, import_findLast.default)(
                config.fontVariations,
                ({ type }) => type === key
              );
              return fontVariation ? fontVariation.value : 0;
            }
            default:
              return config[key];
          }
        };
        transformDefaults = {
          [TRANSFORM_MOVE2]: Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
          }),
          [TRANSFORM_SCALE2]: Object.freeze({
            xValue: 1,
            yValue: 1,
            zValue: 1
          }),
          [TRANSFORM_ROTATE2]: Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
          }),
          [TRANSFORM_SKEW2]: Object.freeze({
            xValue: 0,
            yValue: 0
          })
        };
        filterDefaults = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100
        });
        fontVariationDefaults = Object.freeze({
          wght: 0,
          opsz: 0,
          wdth: 0,
          slnt: 0
        });
        getFilterUnit = (filterType, actionItemConfig) => {
          const filter = (0, import_findLast.default)(
            actionItemConfig.filters,
            ({ type }) => type === filterType
          );
          if (filter && filter.unit) {
            return filter.unit;
          }
          switch (filterType) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        };
        transformKeys = Object.keys(transformDefaults);
        paramCapture = "\\(([^)]+)\\)";
        rgbValidRegex = /^rgb/;
        rgbMatchRegex = RegExp(`rgba?${paramCapture}`);
        processElementByType = ({
          effect,
          actionTypeId,
          elementApi
        }) => (
          // @ts-expect-error - TS7006 - Parameter 'element' implicitly has an 'any' type.
          (element) => {
            switch (actionTypeId) {
              case TRANSFORM_MOVE2:
              case TRANSFORM_SCALE2:
              case TRANSFORM_ROTATE2:
              case TRANSFORM_SKEW2:
                effect(element, TRANSFORM_PREFIXED, elementApi);
                break;
              case STYLE_FILTER2:
                effect(element, FILTER2, elementApi);
                break;
              case STYLE_FONT_VARIATION2:
                effect(element, FONT_VARIATION_SETTINGS2, elementApi);
                break;
              case STYLE_OPACITY:
                effect(element, OPACITY2, elementApi);
                break;
              case STYLE_SIZE2:
                effect(element, WIDTH2, elementApi);
                effect(element, HEIGHT2, elementApi);
                break;
              case STYLE_BACKGROUND_COLOR:
              case STYLE_BORDER:
              case STYLE_TEXT_COLOR:
                effect(element, colorStyleProps[actionTypeId], elementApi);
                break;
              case GENERAL_DISPLAY:
                effect(element, DISPLAY2, elementApi);
                break;
            }
          }
        );
      }
    });
  
    // packages/systems/ix2/shared/index.js
    var require_shared2 = __commonJS({
      "packages/systems/ix2/shared/index.js"(exports) {
        "use strict";
        var _interopRequireWildcard = require_interopRequireWildcard().default;
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.IX2VanillaUtils = exports.IX2VanillaPlugins = exports.IX2ElementsReducer = exports.IX2Easings = exports.IX2EasingUtils = exports.IX2BrowserSupport = void 0;
        var IX2BrowserSupport2 = _interopRequireWildcard((init_IX2BrowserSupport(), __toCommonJS(IX2BrowserSupport_exports)));
        exports.IX2BrowserSupport = IX2BrowserSupport2;
        var IX2Easings = _interopRequireWildcard((init_IX2Easings(), __toCommonJS(IX2Easings_exports)));
        exports.IX2Easings = IX2Easings;
        var IX2EasingUtils2 = _interopRequireWildcard((init_IX2EasingUtils(), __toCommonJS(IX2EasingUtils_exports)));
        exports.IX2EasingUtils = IX2EasingUtils2;
        var IX2ElementsReducer2 = _interopRequireWildcard((init_IX2ElementsReducer(), __toCommonJS(IX2ElementsReducer_exports)));
        exports.IX2ElementsReducer = IX2ElementsReducer2;
        var IX2VanillaPlugins2 = _interopRequireWildcard((init_IX2VanillaPlugins(), __toCommonJS(IX2VanillaPlugins_exports)));
        exports.IX2VanillaPlugins = IX2VanillaPlugins2;
        var IX2VanillaUtils5 = _interopRequireWildcard((init_IX2VanillaUtils(), __toCommonJS(IX2VanillaUtils_exports)));
        exports.IX2VanillaUtils = IX2VanillaUtils5;
      }
    });
  
    // packages/systems/ix2/engine/reducers/IX2InstancesReducer.ts
    var import_shared, import_timm5, IX2_RAW_DATA_IMPORTED3, IX2_SESSION_STOPPED4, IX2_INSTANCE_ADDED3, IX2_INSTANCE_STARTED2, IX2_INSTANCE_REMOVED2, IX2_ANIMATION_FRAME_CHANGED3, optimizeFloat2, applyEasing2, createBezierEasing2, RENDER_GENERAL3, getItemConfigByKey2, getRenderType2, getStyleProp2, continuousInstance, timedInstance, ixInstances;
    var init_IX2InstancesReducer = __esm({
      "packages/systems/ix2/engine/reducers/IX2InstancesReducer.ts"() {
        "use strict";
        init_shared_constants();
        import_shared = __toESM(require_shared2());
        import_timm5 = __toESM(require_timm());
        ({
          IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED3,
          IX2_SESSION_STOPPED: IX2_SESSION_STOPPED4,
          IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED3,
          IX2_INSTANCE_STARTED: IX2_INSTANCE_STARTED2,
          IX2_INSTANCE_REMOVED: IX2_INSTANCE_REMOVED2,
          IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED3
        } = IX2EngineActionTypes_exports);
        ({ optimizeFloat: optimizeFloat2, applyEasing: applyEasing2, createBezierEasing: createBezierEasing2 } = import_shared.IX2EasingUtils);
        ({ RENDER_GENERAL: RENDER_GENERAL3 } = IX2EngineConstants_exports);
        ({ getItemConfigByKey: getItemConfigByKey2, getRenderType: getRenderType2, getStyleProp: getStyleProp2 } = import_shared.IX2VanillaUtils);
        continuousInstance = (state, action) => {
          const {
            position: lastPosition,
            parameterId,
            actionGroups,
            destinationKeys,
            smoothing,
            restingValue,
            actionTypeId,
            customEasingFn,
            skipMotion,
            skipToValue
          } = state;
          const { parameters } = action.payload;
          let velocity = Math.max(1 - smoothing, 0.01);
          let paramValue = parameters[parameterId];
          if (paramValue == null) {
            velocity = 1;
            paramValue = restingValue;
          }
          const nextPosition = Math.max(paramValue, 0) || 0;
          const positionDiff = optimizeFloat2(nextPosition - lastPosition);
          const position = skipMotion ? skipToValue : optimizeFloat2(lastPosition + positionDiff * velocity);
          const keyframePosition = position * 100;
          if (position === lastPosition && state.current) {
            return state;
          }
          let fromActionItem;
          let toActionItem;
          let positionOffset;
          let positionRange;
          for (let i = 0, { length } = actionGroups; i < length; i++) {
            const { keyframe, actionItems } = actionGroups[i];
            if (i === 0) {
              fromActionItem = actionItems[0];
            }
            if (keyframePosition >= keyframe) {
              fromActionItem = actionItems[0];
              const nextGroup = actionGroups[i + 1];
              const hasNextItem = nextGroup && keyframePosition !== keyframe;
              toActionItem = hasNextItem ? nextGroup.actionItems[0] : null;
              if (hasNextItem) {
                positionOffset = keyframe / 100;
                positionRange = (nextGroup.keyframe - keyframe) / 100;
              }
            }
          }
          const current = {};
          if (fromActionItem && !toActionItem) {
            for (let i = 0, { length } = destinationKeys; i < length; i++) {
              const key = destinationKeys[i];
              current[key] = getItemConfigByKey2(
                actionTypeId,
                key,
                fromActionItem.config
              );
            }
          } else if (fromActionItem && toActionItem && positionOffset !== void 0 && positionRange !== void 0) {
            const localPosition = (position - positionOffset) / positionRange;
            const easing = fromActionItem.config.easing;
            const eased = applyEasing2(easing, localPosition, customEasingFn);
            for (let i = 0, { length } = destinationKeys; i < length; i++) {
              const key = destinationKeys[i];
              const fromVal = getItemConfigByKey2(
                actionTypeId,
                key,
                fromActionItem.config
              );
              const toVal = getItemConfigByKey2(actionTypeId, key, toActionItem.config);
              const diff = toVal - fromVal;
              const value = diff * eased + fromVal;
              current[key] = value;
            }
          }
          return (0, import_timm5.merge)(state, {
            position,
            current
          });
        };
        timedInstance = (state, action) => {
          const {
            active,
            origin,
            start,
            immediate,
            renderType,
            verbose,
            actionItem,
            destination,
            destinationKeys,
            pluginDuration,
            instanceDelay,
            customEasingFn,
            skipMotion
          } = state;
          const easing = actionItem.config.easing;
          let { duration, delay } = actionItem.config;
          if (pluginDuration != null) {
            duration = pluginDuration;
          }
          delay = instanceDelay != null ? instanceDelay : delay;
          if (renderType === RENDER_GENERAL3) {
            duration = 0;
          } else if (immediate || skipMotion) {
            duration = delay = 0;
          }
          const { now } = action.payload;
          if (active && origin) {
            const delta = now - (start + delay);
            if (verbose) {
              const verboseDelta = now - start;
              const verboseDuration = duration + delay;
              const verbosePosition = optimizeFloat2(
                Math.min(Math.max(0, verboseDelta / verboseDuration), 1)
              );
              state = (0, import_timm5.set)(
                state,
                "verboseTimeElapsed",
                verboseDuration * verbosePosition
              );
            }
            if (delta < 0) {
              return state;
            }
            const position = optimizeFloat2(Math.min(Math.max(0, delta / duration), 1));
            const eased = applyEasing2(easing, position, customEasingFn);
            const newProps = {};
            let current = null;
            if (destinationKeys.length) {
              current = destinationKeys.reduce((result, key) => {
                const destValue = destination[key];
                const originVal = parseFloat(origin[key]) || 0;
                const diff = parseFloat(destValue) - originVal;
                const value = diff * eased + originVal;
                result[key] = value;
                return result;
              }, {});
            }
            newProps.current = current;
            newProps.position = position;
            if (position === 1) {
              newProps.active = false;
              newProps.complete = true;
            }
            return (0, import_timm5.merge)(state, newProps);
          }
          return state;
        };
        ixInstances = (state = Object.freeze({}), action) => {
          switch (action.type) {
            case IX2_RAW_DATA_IMPORTED3: {
              return action.payload.ixInstances || Object.freeze({});
            }
            case IX2_SESSION_STOPPED4: {
              return Object.freeze({});
            }
            case IX2_INSTANCE_ADDED3: {
              const {
                instanceId,
                elementId,
                actionItem,
                eventId,
                eventTarget,
                eventStateKey,
                actionListId,
                groupIndex,
                isCarrier,
                origin,
                destination,
                immediate,
                verbose,
                continuous,
                parameterId,
                actionGroups,
                smoothing,
                restingValue,
                pluginInstance,
                pluginDuration,
                instanceDelay,
                skipMotion,
                skipToValue
              } = action.payload;
              const { actionTypeId } = actionItem;
              const renderType = getRenderType2(actionTypeId);
              const styleProp = getStyleProp2(renderType, actionTypeId);
              const destinationKeys = Object.keys(destination).filter(
                (key) => (
                  // Skip null destination values
                  destination[key] != null && // Skip string destination values
                  typeof destination[key] !== "string"
                )
              );
              const { easing } = actionItem.config;
              return (0, import_timm5.set)(state, instanceId, {
                id: instanceId,
                elementId,
                active: false,
                position: 0,
                start: 0,
                origin,
                destination,
                destinationKeys,
                immediate,
                verbose,
                current: null,
                actionItem,
                actionTypeId,
                eventId,
                eventTarget,
                eventStateKey,
                actionListId,
                groupIndex,
                renderType,
                isCarrier,
                styleProp,
                continuous,
                parameterId,
                actionGroups,
                smoothing,
                restingValue,
                pluginInstance,
                pluginDuration,
                instanceDelay,
                skipMotion,
                skipToValue,
                customEasingFn: Array.isArray(easing) && easing.length === 4 ? (
                  // @ts-expect-error - TS2345 - Argument of type 'any[]' is not assignable to parameter of type 'IX2EasingCustomType'.
                  createBezierEasing2(easing)
                ) : void 0
              });
            }
            case IX2_INSTANCE_STARTED2: {
              const { instanceId, time } = action.payload;
              return (0, import_timm5.mergeIn)(state, [instanceId], {
                active: true,
                complete: false,
                start: time
              });
            }
            case IX2_INSTANCE_REMOVED2: {
              const { instanceId } = action.payload;
              if (!state[instanceId]) {
                return state;
              }
              const newState = {};
              const keys = Object.keys(state);
              const { length } = keys;
              for (let i = 0; i < length; i++) {
                const key = keys[i];
                if (key !== instanceId) {
                  newState[key] = state[key];
                }
              }
              return newState;
            }
            case IX2_ANIMATION_FRAME_CHANGED3: {
              let newState = state;
              const keys = Object.keys(state);
              const { length } = keys;
              for (let i = 0; i < length; i++) {
                const key = keys[i];
                const instance = state[key];
                const reducer = instance.continuous ? continuousInstance : timedInstance;
                newState = (0, import_timm5.set)(newState, key, reducer(instance, action));
              }
              return newState;
            }
            default: {
              return state;
            }
          }
        };
      }
    });
  
    // packages/systems/ix2/engine/reducers/IX2ParametersReducer.ts
    var IX2_RAW_DATA_IMPORTED4, IX2_SESSION_STOPPED5, IX2_PARAMETER_CHANGED2, ixParameters;
    var init_IX2ParametersReducer = __esm({
      "packages/systems/ix2/engine/reducers/IX2ParametersReducer.ts"() {
        "use strict";
        init_shared_constants();
        ({ IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED4, IX2_SESSION_STOPPED: IX2_SESSION_STOPPED5, IX2_PARAMETER_CHANGED: IX2_PARAMETER_CHANGED2 } = IX2EngineActionTypes_exports);
        ixParameters = (state = {
          /*mutable flat state*/
        }, action) => {
          switch (action.type) {
            case IX2_RAW_DATA_IMPORTED4: {
              return action.payload.ixParameters || {
                /*mutable flat state*/
              };
            }
            case IX2_SESSION_STOPPED5: {
              return {
                /*mutable flat state*/
              };
            }
            case IX2_PARAMETER_CHANGED2: {
              const { key, value } = action.payload;
              state[key] = value;
              return state;
            }
            default: {
              return state;
            }
          }
        };
      }
    });
  
    // packages/systems/ix2/engine/reducers/IX2Reducer.ts
    var IX2Reducer_exports = {};
    __export(IX2Reducer_exports, {
      default: () => IX2Reducer_default
    });
    var import_redux, import_shared2, ixElements2, IX2Reducer_default;
    var init_IX2Reducer = __esm({
      "packages/systems/ix2/engine/reducers/IX2Reducer.ts"() {
        "use strict";
        import_redux = __toESM(require_lib2());
        init_IX2DataReducer();
        init_IX2RequestReducer();
        init_IX2SessionReducer();
        import_shared2 = __toESM(require_shared2());
        init_IX2InstancesReducer();
        init_IX2ParametersReducer();
        ({ ixElements: ixElements2 } = import_shared2.IX2ElementsReducer);
        IX2Reducer_default = (0, import_redux.combineReducers)({
          // @ts-expect-error - TS2322 - Type '(state: FixMeAny | null | undefined, action: {    type: typeof IX2_RAW_DATA_IMPORTED;    payload: {        ixData: FixMeAny;    };}) => any' is not assignable to type 'Reducer<any>'.
          ixData,
          ixRequest,
          ixSession,
          ixElements: ixElements2,
          ixInstances,
          ixParameters
        });
      }
    });
  
    // node_modules/lodash/isString.js
    var require_isString = __commonJS({
      "node_modules/lodash/isString.js"(exports, module) {
        var baseGetTag = require_baseGetTag();
        var isArray = require_isArray();
        var isObjectLike = require_isObjectLike();
        var stringTag = "[object String]";
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        module.exports = isString;
      }
    });
  
    // node_modules/lodash/_asciiSize.js
    var require_asciiSize = __commonJS({
      "node_modules/lodash/_asciiSize.js"(exports, module) {
        var baseProperty = require_baseProperty();
        var asciiSize = baseProperty("length");
        module.exports = asciiSize;
      }
    });
  
    // node_modules/lodash/_hasUnicode.js
    var require_hasUnicode = __commonJS({
      "node_modules/lodash/_hasUnicode.js"(exports, module) {
        var rsAstralRange = "\\ud800-\\udfff";
        var rsComboMarksRange = "\\u0300-\\u036f";
        var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
        var rsComboSymbolsRange = "\\u20d0-\\u20ff";
        var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
        var rsVarRange = "\\ufe0e\\ufe0f";
        var rsZWJ = "\\u200d";
        var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
        function hasUnicode(string) {
          return reHasUnicode.test(string);
        }
        module.exports = hasUnicode;
      }
    });
  
    // node_modules/lodash/_unicodeSize.js
    var require_unicodeSize = __commonJS({
      "node_modules/lodash/_unicodeSize.js"(exports, module) {
        var rsAstralRange = "\\ud800-\\udfff";
        var rsComboMarksRange = "\\u0300-\\u036f";
        var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
        var rsComboSymbolsRange = "\\u20d0-\\u20ff";
        var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
        var rsVarRange = "\\ufe0e\\ufe0f";
        var rsAstral = "[" + rsAstralRange + "]";
        var rsCombo = "[" + rsComboRange + "]";
        var rsFitz = "\\ud83c[\\udffb-\\udfff]";
        var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
        var rsNonAstral = "[^" + rsAstralRange + "]";
        var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
        var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
        var rsZWJ = "\\u200d";
        var reOptMod = rsModifier + "?";
        var rsOptVar = "[" + rsVarRange + "]?";
        var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
        var rsSeq = rsOptVar + reOptMod + rsOptJoin;
        var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
        var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
        function unicodeSize(string) {
          var result = reUnicode.lastIndex = 0;
          while (reUnicode.test(string)) {
            ++result;
          }
          return result;
        }
        module.exports = unicodeSize;
      }
    });
  
    // node_modules/lodash/_stringSize.js
    var require_stringSize = __commonJS({
      "node_modules/lodash/_stringSize.js"(exports, module) {
        var asciiSize = require_asciiSize();
        var hasUnicode = require_hasUnicode();
        var unicodeSize = require_unicodeSize();
        function stringSize(string) {
          return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
        }
        module.exports = stringSize;
      }
    });
  
    // node_modules/lodash/size.js
    var require_size = __commonJS({
      "node_modules/lodash/size.js"(exports, module) {
        var baseKeys = require_baseKeys();
        var getTag = require_getTag();
        var isArrayLike = require_isArrayLike();
        var isString = require_isString();
        var stringSize = require_stringSize();
        var mapTag = "[object Map]";
        var setTag = "[object Set]";
        function size2(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        module.exports = size2;
      }
    });
  
    // node_modules/lodash/negate.js
    var require_negate = __commonJS({
      "node_modules/lodash/negate.js"(exports, module) {
        var FUNC_ERROR_TEXT = "Expected a function";
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        module.exports = negate;
      }
    });
  
    // node_modules/lodash/_defineProperty.js
    var require_defineProperty = __commonJS({
      "node_modules/lodash/_defineProperty.js"(exports, module) {
        var getNative = require_getNative();
        var defineProperty = function() {
          try {
            var func = getNative(Object, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        module.exports = defineProperty;
      }
    });
  
    // node_modules/lodash/_baseAssignValue.js
    var require_baseAssignValue = __commonJS({
      "node_modules/lodash/_baseAssignValue.js"(exports, module) {
        var defineProperty = require_defineProperty();
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        module.exports = baseAssignValue;
      }
    });
  
    // node_modules/lodash/_assignValue.js
    var require_assignValue = __commonJS({
      "node_modules/lodash/_assignValue.js"(exports, module) {
        var baseAssignValue = require_baseAssignValue();
        var eq = require_eq();
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty2.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        module.exports = assignValue;
      }
    });
  
    // node_modules/lodash/_baseSet.js
    var require_baseSet = __commonJS({
      "node_modules/lodash/_baseSet.js"(exports, module) {
        var assignValue = require_assignValue();
        var castPath = require_castPath();
        var isIndex = require_isIndex();
        var isObject = require_isObject();
        var toKey = require_toKey();
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : void 0;
              if (newValue === void 0) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        module.exports = baseSet;
      }
    });
  
    // node_modules/lodash/_basePickBy.js
    var require_basePickBy = __commonJS({
      "node_modules/lodash/_basePickBy.js"(exports, module) {
        var baseGet = require_baseGet();
        var baseSet = require_baseSet();
        var castPath = require_castPath();
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result, castPath(path, object), value);
            }
          }
          return result;
        }
        module.exports = basePickBy;
      }
    });
  
    // node_modules/lodash/_getSymbolsIn.js
    var require_getSymbolsIn = __commonJS({
      "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
        var arrayPush = require_arrayPush();
        var getPrototype = require_getPrototype();
        var getSymbols = require_getSymbols();
        var stubArray = require_stubArray();
        var nativeGetSymbols = Object.getOwnPropertySymbols;
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result = [];
          while (object) {
            arrayPush(result, getSymbols(object));
            object = getPrototype(object);
          }
          return result;
        };
        module.exports = getSymbolsIn;
      }
    });
  
    // node_modules/lodash/_nativeKeysIn.js
    var require_nativeKeysIn = __commonJS({
      "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
        function nativeKeysIn(object) {
          var result = [];
          if (object != null) {
            for (var key in Object(object)) {
              result.push(key);
            }
          }
          return result;
        }
        module.exports = nativeKeysIn;
      }
    });
  
    // node_modules/lodash/_baseKeysIn.js
    var require_baseKeysIn = __commonJS({
      "node_modules/lodash/_baseKeysIn.js"(exports, module) {
        var isObject = require_isObject();
        var isPrototype = require_isPrototype();
        var nativeKeysIn = require_nativeKeysIn();
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
              result.push(key);
            }
          }
          return result;
        }
        module.exports = baseKeysIn;
      }
    });
  
    // node_modules/lodash/keysIn.js
    var require_keysIn = __commonJS({
      "node_modules/lodash/keysIn.js"(exports, module) {
        var arrayLikeKeys = require_arrayLikeKeys();
        var baseKeysIn = require_baseKeysIn();
        var isArrayLike = require_isArrayLike();
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        module.exports = keysIn;
      }
    });
  
    // node_modules/lodash/_getAllKeysIn.js
    var require_getAllKeysIn = __commonJS({
      "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
        var baseGetAllKeys = require_baseGetAllKeys();
        var getSymbolsIn = require_getSymbolsIn();
        var keysIn = require_keysIn();
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        module.exports = getAllKeysIn;
      }
    });
  
    // node_modules/lodash/pickBy.js
    var require_pickBy = __commonJS({
      "node_modules/lodash/pickBy.js"(exports, module) {
        var arrayMap = require_arrayMap();
        var baseIteratee = require_baseIteratee();
        var basePickBy = require_basePickBy();
        var getAllKeysIn = require_getAllKeysIn();
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = baseIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        module.exports = pickBy;
      }
    });
  
    // node_modules/lodash/omitBy.js
    var require_omitBy = __commonJS({
      "node_modules/lodash/omitBy.js"(exports, module) {
        var baseIteratee = require_baseIteratee();
        var negate = require_negate();
        var pickBy = require_pickBy();
        function omitBy2(object, predicate) {
          return pickBy(object, negate(baseIteratee(predicate)));
        }
        module.exports = omitBy2;
      }
    });
  
    // node_modules/lodash/isEmpty.js
    var require_isEmpty = __commonJS({
      "node_modules/lodash/isEmpty.js"(exports, module) {
        var baseKeys = require_baseKeys();
        var getTag = require_getTag();
        var isArguments = require_isArguments();
        var isArray = require_isArray();
        var isArrayLike = require_isArrayLike();
        var isBuffer = require_isBuffer();
        var isPrototype = require_isPrototype();
        var isTypedArray = require_isTypedArray();
        var mapTag = "[object Map]";
        var setTag = "[object Set]";
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function isEmpty2(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty2.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        module.exports = isEmpty2;
      }
    });
  
    // node_modules/lodash/mapValues.js
    var require_mapValues = __commonJS({
      "node_modules/lodash/mapValues.js"(exports, module) {
        var baseAssignValue = require_baseAssignValue();
        var baseForOwn = require_baseForOwn();
        var baseIteratee = require_baseIteratee();
        function mapValues2(object, iteratee) {
          var result = {};
          iteratee = baseIteratee(iteratee, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result, key, iteratee(value, key, object2));
          });
          return result;
        }
        module.exports = mapValues2;
      }
    });
  
    // node_modules/lodash/_arrayEach.js
    var require_arrayEach = __commonJS({
      "node_modules/lodash/_arrayEach.js"(exports, module) {
        function arrayEach(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
              break;
            }
          }
          return array;
        }
        module.exports = arrayEach;
      }
    });
  
    // node_modules/lodash/_castFunction.js
    var require_castFunction = __commonJS({
      "node_modules/lodash/_castFunction.js"(exports, module) {
        var identity = require_identity();
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        module.exports = castFunction;
      }
    });
  
    // node_modules/lodash/forEach.js
    var require_forEach = __commonJS({
      "node_modules/lodash/forEach.js"(exports, module) {
        var arrayEach = require_arrayEach();
        var baseEach = require_baseEach();
        var castFunction = require_castFunction();
        var isArray = require_isArray();
        function forEach2(collection, iteratee) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, castFunction(iteratee));
        }
        module.exports = forEach2;
      }
    });
  
    // node_modules/lodash/now.js
    var require_now = __commonJS({
      "node_modules/lodash/now.js"(exports, module) {
        var root = require_root();
        var now = function() {
          return root.Date.now();
        };
        module.exports = now;
      }
    });
  
    // node_modules/lodash/debounce.js
    var require_debounce = __commonJS({
      "node_modules/lodash/debounce.js"(exports, module) {
        var isObject = require_isObject();
        var now = require_now();
        var toNumber = require_toNumber();
        var FUNC_ERROR_TEXT = "Expected a function";
        var nativeMax = Math.max;
        var nativeMin = Math.min;
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = void 0;
            lastInvokeTime = time;
            result = func.apply(thisArg, args);
            return result;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout(timerExpired, wait);
            return leading ? invokeFunc(time) : result;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = void 0;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = void 0;
            return result;
          }
          function cancel() {
            if (timerId !== void 0) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = void 0;
          }
          function flush() {
            return timerId === void 0 ? result : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === void 0) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === void 0) {
              timerId = setTimeout(timerExpired, wait);
            }
            return result;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        module.exports = debounce;
      }
    });
  
    // node_modules/lodash/throttle.js
    var require_throttle = __commonJS({
      "node_modules/lodash/throttle.js"(exports, module) {
        var debounce = require_debounce();
        var isObject = require_isObject();
        var FUNC_ERROR_TEXT = "Expected a function";
        function throttle2(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        module.exports = throttle2;
      }
    });
  
    // packages/systems/ix2/engine/actions/IX2EngineActions.ts
    var IX2EngineActions_exports = {};
    __export(IX2EngineActions_exports, {
      actionListPlaybackChanged: () => actionListPlaybackChanged,
      animationFrameChanged: () => animationFrameChanged,
      clearRequested: () => clearRequested,
      elementStateChanged: () => elementStateChanged,
      eventListenerAdded: () => eventListenerAdded,
      eventStateChanged: () => eventStateChanged,
      instanceAdded: () => instanceAdded,
      instanceRemoved: () => instanceRemoved,
      instanceStarted: () => instanceStarted,
      mediaQueriesDefined: () => mediaQueriesDefined,
      parameterChanged: () => parameterChanged,
      playbackRequested: () => playbackRequested,
      previewRequested: () => previewRequested,
      rawDataImported: () => rawDataImported,
      sessionInitialized: () => sessionInitialized,
      sessionStarted: () => sessionStarted,
      sessionStopped: () => sessionStopped,
      stopRequested: () => stopRequested,
      testFrameRendered: () => testFrameRendered,
      viewportWidthChanged: () => viewportWidthChanged
    });
    var import_shared3, IX2_RAW_DATA_IMPORTED5, IX2_SESSION_INITIALIZED3, IX2_SESSION_STARTED3, IX2_SESSION_STOPPED6, IX2_PREVIEW_REQUESTED3, IX2_PLAYBACK_REQUESTED3, IX2_STOP_REQUESTED3, IX2_CLEAR_REQUESTED3, IX2_EVENT_LISTENER_ADDED3, IX2_TEST_FRAME_RENDERED3, IX2_EVENT_STATE_CHANGED3, IX2_ANIMATION_FRAME_CHANGED4, IX2_PARAMETER_CHANGED3, IX2_INSTANCE_ADDED4, IX2_INSTANCE_STARTED3, IX2_INSTANCE_REMOVED3, IX2_ELEMENT_STATE_CHANGED3, IX2_ACTION_LIST_PLAYBACK_CHANGED3, IX2_VIEWPORT_WIDTH_CHANGED3, IX2_MEDIA_QUERIES_DEFINED3, reifyState2, rawDataImported, sessionInitialized, sessionStarted, sessionStopped, previewRequested, playbackRequested, stopRequested, clearRequested, eventListenerAdded, testFrameRendered, eventStateChanged, animationFrameChanged, parameterChanged, instanceAdded, instanceStarted, instanceRemoved, elementStateChanged, actionListPlaybackChanged, viewportWidthChanged, mediaQueriesDefined;
    var init_IX2EngineActions = __esm({
      "packages/systems/ix2/engine/actions/IX2EngineActions.ts"() {
        "use strict";
        init_shared_constants();
        import_shared3 = __toESM(require_shared2());
        ({
          IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED5,
          IX2_SESSION_INITIALIZED: IX2_SESSION_INITIALIZED3,
          IX2_SESSION_STARTED: IX2_SESSION_STARTED3,
          IX2_SESSION_STOPPED: IX2_SESSION_STOPPED6,
          IX2_PREVIEW_REQUESTED: IX2_PREVIEW_REQUESTED3,
          IX2_PLAYBACK_REQUESTED: IX2_PLAYBACK_REQUESTED3,
          IX2_STOP_REQUESTED: IX2_STOP_REQUESTED3,
          IX2_CLEAR_REQUESTED: IX2_CLEAR_REQUESTED3,
          IX2_EVENT_LISTENER_ADDED: IX2_EVENT_LISTENER_ADDED3,
          IX2_TEST_FRAME_RENDERED: IX2_TEST_FRAME_RENDERED3,
          IX2_EVENT_STATE_CHANGED: IX2_EVENT_STATE_CHANGED3,
          IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED4,
          IX2_PARAMETER_CHANGED: IX2_PARAMETER_CHANGED3,
          IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED4,
          IX2_INSTANCE_STARTED: IX2_INSTANCE_STARTED3,
          IX2_INSTANCE_REMOVED: IX2_INSTANCE_REMOVED3,
          IX2_ELEMENT_STATE_CHANGED: IX2_ELEMENT_STATE_CHANGED3,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: IX2_ACTION_LIST_PLAYBACK_CHANGED3,
          IX2_VIEWPORT_WIDTH_CHANGED: IX2_VIEWPORT_WIDTH_CHANGED3,
          IX2_MEDIA_QUERIES_DEFINED: IX2_MEDIA_QUERIES_DEFINED3
        } = IX2EngineActionTypes_exports);
        ({ reifyState: reifyState2 } = import_shared3.IX2VanillaUtils);
        rawDataImported = (rawData) => ({
          type: IX2_RAW_DATA_IMPORTED5,
          payload: {
            ...reifyState2(rawData)
          }
        });
        sessionInitialized = ({
          hasBoundaryNodes,
          reducedMotion
        }) => ({
          type: IX2_SESSION_INITIALIZED3,
          payload: {
            hasBoundaryNodes,
            reducedMotion
          }
        });
        sessionStarted = () => ({
          type: IX2_SESSION_STARTED3
        });
        sessionStopped = () => ({
          type: IX2_SESSION_STOPPED6
        });
        previewRequested = ({
          rawData,
          defer
        }) => ({
          type: IX2_PREVIEW_REQUESTED3,
          payload: {
            defer,
            rawData
          }
        });
        playbackRequested = ({
          actionTypeId = ActionTypeConsts.GENERAL_START_ACTION,
          actionListId,
          actionItemId,
          eventId,
          allowEvents,
          immediate,
          testManual,
          verbose,
          rawData
        }) => ({
          type: IX2_PLAYBACK_REQUESTED3,
          payload: {
            actionTypeId,
            actionListId,
            actionItemId,
            testManual,
            eventId,
            allowEvents,
            immediate,
            verbose,
            rawData
          }
        });
        stopRequested = (actionListId) => ({
          type: IX2_STOP_REQUESTED3,
          payload: {
            actionListId
          }
        });
        clearRequested = () => ({
          type: IX2_CLEAR_REQUESTED3
        });
        eventListenerAdded = (target, listenerParams) => ({
          type: IX2_EVENT_LISTENER_ADDED3,
          payload: {
            target,
            listenerParams
          }
        });
        testFrameRendered = (step = 1) => ({
          type: IX2_TEST_FRAME_RENDERED3,
          payload: {
            step
          }
        });
        eventStateChanged = (stateKey, newState) => ({
          type: IX2_EVENT_STATE_CHANGED3,
          payload: {
            stateKey,
            newState
          }
        });
        animationFrameChanged = (now, parameters) => ({
          type: IX2_ANIMATION_FRAME_CHANGED4,
          payload: {
            now,
            parameters
          }
        });
        parameterChanged = (key, value) => ({
          type: IX2_PARAMETER_CHANGED3,
          payload: {
            key,
            value
          }
        });
        instanceAdded = (options) => ({
          type: IX2_INSTANCE_ADDED4,
          payload: {
            ...options
          }
        });
        instanceStarted = (instanceId, time) => ({
          type: IX2_INSTANCE_STARTED3,
          payload: {
            instanceId,
            time
          }
        });
        instanceRemoved = (instanceId) => ({
          type: IX2_INSTANCE_REMOVED3,
          payload: {
            instanceId
          }
        });
        elementStateChanged = (elementId, actionTypeId, current, actionItem) => ({
          type: IX2_ELEMENT_STATE_CHANGED3,
          payload: {
            elementId,
            actionTypeId,
            current,
            actionItem
          }
        });
        actionListPlaybackChanged = ({
          actionListId,
          isPlaying
        }) => ({
          type: IX2_ACTION_LIST_PLAYBACK_CHANGED3,
          payload: {
            actionListId,
            isPlaying
          }
        });
        viewportWidthChanged = ({
          width,
          mediaQueries
        }) => ({
          type: IX2_VIEWPORT_WIDTH_CHANGED3,
          payload: {
            width,
            mediaQueries
          }
        });
        mediaQueriesDefined = () => ({
          type: IX2_MEDIA_QUERIES_DEFINED3
        });
      }
    });
  
    // packages/systems/ix2/engine/logic/IX2BrowserApi.ts
    var IX2BrowserApi_exports = {};
    __export(IX2BrowserApi_exports, {
      elementContains: () => elementContains,
      getChildElements: () => getChildElements,
      getClosestElement: () => getClosestElement,
      getProperty: () => getProperty,
      getQuerySelector: () => getQuerySelector,
      getRefType: () => getRefType,
      getSiblingElements: () => getSiblingElements,
      getStyle: () => getStyle,
      getValidDocument: () => getValidDocument,
      isSiblingNode: () => isSiblingNode,
      matchSelector: () => matchSelector,
      queryDocument: () => queryDocument,
      setStyle: () => setStyle
    });
    function setStyle(element, prop, value) {
      element.style[prop] = value;
    }
    function getStyle(element, prop) {
      return element.style[prop];
    }
    function getProperty(element, prop) {
      return element[prop];
    }
    function matchSelector(selector) {
      return (element) => element[ELEMENT_MATCHES2](selector);
    }
    function getQuerySelector({
      id,
      selector
    }) {
      if (id) {
        let nodeId = id;
        if (id.indexOf(IX2_ID_DELIMITER2) !== -1) {
          const pair = id.split(IX2_ID_DELIMITER2);
          const pageId = pair[0];
          nodeId = pair[1];
          if (pageId !== document.documentElement.getAttribute(WF_PAGE2)) {
            return null;
          }
        }
        return `[data-w-id="${nodeId}"], [data-w-id^="${nodeId}_instance"]`;
      }
      return selector;
    }
    function getValidDocument(pageId) {
      if (pageId == null || pageId === document.documentElement.getAttribute(WF_PAGE2)) {
        return document;
      }
      return null;
    }
    function queryDocument(baseSelector, descendantSelector) {
      return Array.prototype.slice.call(
        document.querySelectorAll(
          descendantSelector ? baseSelector + " " + descendantSelector : baseSelector
        )
      );
    }
    function elementContains(parent, child) {
      return parent.contains(child);
    }
    function isSiblingNode(a, b) {
      return a !== b && a.parentNode === b.parentNode;
    }
    function getChildElements(sourceElements) {
      const childElements = [];
      for (let i = 0, { length } = sourceElements || []; i < length; i++) {
        const { children } = sourceElements[i];
        const { length: childCount } = children;
        if (!childCount) {
          continue;
        }
        for (let j = 0; j < childCount; j++) {
          childElements.push(children[j]);
        }
      }
      return childElements;
    }
    function getSiblingElements(sourceElements = []) {
      const elements = [];
      const parentCache = [];
      for (let i = 0, { length } = sourceElements; i < length; i++) {
        const { parentNode } = sourceElements[i];
        if (!parentNode || !parentNode.children || !parentNode.children.length) {
          continue;
        }
        if (parentCache.indexOf(parentNode) !== -1) {
          continue;
        }
        parentCache.push(parentNode);
        let el = parentNode.firstElementChild;
        while (el != null) {
          if (sourceElements.indexOf(el) === -1) {
            elements.push(el);
          }
          el = el.nextElementSibling;
        }
      }
      return elements;
    }
    function getRefType(ref) {
      if (ref != null && typeof ref == "object") {
        return ref instanceof Element ? HTML_ELEMENT3 : PLAIN_OBJECT3;
      }
      return null;
    }
    var import_shared4, ELEMENT_MATCHES2, IX2_ID_DELIMITER2, HTML_ELEMENT3, PLAIN_OBJECT3, WF_PAGE2, getClosestElement;
    var init_IX2BrowserApi = __esm({
      "packages/systems/ix2/engine/logic/IX2BrowserApi.ts"() {
        "use strict";
        import_shared4 = __toESM(require_shared2());
        init_shared_constants();
        ({ ELEMENT_MATCHES: ELEMENT_MATCHES2 } = import_shared4.IX2BrowserSupport);
        ({ IX2_ID_DELIMITER: IX2_ID_DELIMITER2, HTML_ELEMENT: HTML_ELEMENT3, PLAIN_OBJECT: PLAIN_OBJECT3, WF_PAGE: WF_PAGE2 } = IX2EngineConstants_exports);
        getClosestElement = Element.prototype.closest ? (element, selector) => {
          if (!document.documentElement.contains(element)) {
            return null;
          }
          return element.closest(selector);
        } : (element, selector) => {
          if (!document.documentElement.contains(element)) {
            return null;
          }
          let el = element;
          do {
            if (el[ELEMENT_MATCHES2] && el[ELEMENT_MATCHES2](selector)) {
              return el;
            }
            el = el.parentNode;
          } while (el != null);
          return null;
        };
      }
    });
  
    // node_modules/lodash/_baseCreate.js
    var require_baseCreate = __commonJS({
      "node_modules/lodash/_baseCreate.js"(exports, module) {
        var isObject = require_isObject();
        var objectCreate = Object.create;
        var baseCreate = function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result = new object();
            object.prototype = void 0;
            return result;
          };
        }();
        module.exports = baseCreate;
      }
    });
  
    // node_modules/lodash/_baseLodash.js
    var require_baseLodash = __commonJS({
      "node_modules/lodash/_baseLodash.js"(exports, module) {
        function baseLodash() {
        }
        module.exports = baseLodash;
      }
    });
  
    // node_modules/lodash/_LodashWrapper.js
    var require_LodashWrapper = __commonJS({
      "node_modules/lodash/_LodashWrapper.js"(exports, module) {
        var baseCreate = require_baseCreate();
        var baseLodash = require_baseLodash();
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = void 0;
        }
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        module.exports = LodashWrapper;
      }
    });
  
    // node_modules/lodash/_isFlattenable.js
    var require_isFlattenable = __commonJS({
      "node_modules/lodash/_isFlattenable.js"(exports, module) {
        var Symbol2 = require_Symbol();
        var isArguments = require_isArguments();
        var isArray = require_isArray();
        var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        module.exports = isFlattenable;
      }
    });
  
    // node_modules/lodash/_baseFlatten.js
    var require_baseFlatten = __commonJS({
      "node_modules/lodash/_baseFlatten.js"(exports, module) {
        var arrayPush = require_arrayPush();
        var isFlattenable = require_isFlattenable();
        function baseFlatten(array, depth, predicate, isStrict, result) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result || (result = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result);
              } else {
                arrayPush(result, value);
              }
            } else if (!isStrict) {
              result[result.length] = value;
            }
          }
          return result;
        }
        module.exports = baseFlatten;
      }
    });
  
    // node_modules/lodash/flatten.js
    var require_flatten = __commonJS({
      "node_modules/lodash/flatten.js"(exports, module) {
        var baseFlatten = require_baseFlatten();
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        module.exports = flatten;
      }
    });
  
    // node_modules/lodash/_apply.js
    var require_apply = __commonJS({
      "node_modules/lodash/_apply.js"(exports, module) {
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }
        module.exports = apply;
      }
    });
  
    // node_modules/lodash/_overRest.js
    var require_overRest = __commonJS({
      "node_modules/lodash/_overRest.js"(exports, module) {
        var apply = require_apply();
        var nativeMax = Math.max;
        function overRest(func, start, transform) {
          start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform(array);
            return apply(func, this, otherArgs);
          };
        }
        module.exports = overRest;
      }
    });
  
    // node_modules/lodash/constant.js
    var require_constant = __commonJS({
      "node_modules/lodash/constant.js"(exports, module) {
        function constant(value) {
          return function() {
            return value;
          };
        }
        module.exports = constant;
      }
    });
  
    // node_modules/lodash/_baseSetToString.js
    var require_baseSetToString = __commonJS({
      "node_modules/lodash/_baseSetToString.js"(exports, module) {
        var constant = require_constant();
        var defineProperty = require_defineProperty();
        var identity = require_identity();
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        module.exports = baseSetToString;
      }
    });
  
    // node_modules/lodash/_shortOut.js
    var require_shortOut = __commonJS({
      "node_modules/lodash/_shortOut.js"(exports, module) {
        var HOT_COUNT = 800;
        var HOT_SPAN = 16;
        var nativeNow = Date.now;
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(void 0, arguments);
          };
        }
        module.exports = shortOut;
      }
    });
  
    // node_modules/lodash/_setToString.js
    var require_setToString = __commonJS({
      "node_modules/lodash/_setToString.js"(exports, module) {
        var baseSetToString = require_baseSetToString();
        var shortOut = require_shortOut();
        var setToString = shortOut(baseSetToString);
        module.exports = setToString;
      }
    });
  
    // node_modules/lodash/_flatRest.js
    var require_flatRest = __commonJS({
      "node_modules/lodash/_flatRest.js"(exports, module) {
        var flatten = require_flatten();
        var overRest = require_overRest();
        var setToString = require_setToString();
        function flatRest(func) {
          return setToString(overRest(func, void 0, flatten), func + "");
        }
        module.exports = flatRest;
      }
    });
  
    // node_modules/lodash/_metaMap.js
    var require_metaMap = __commonJS({
      "node_modules/lodash/_metaMap.js"(exports, module) {
        var WeakMap2 = require_WeakMap();
        var metaMap = WeakMap2 && new WeakMap2();
        module.exports = metaMap;
      }
    });
  
    // node_modules/lodash/noop.js
    var require_noop = __commonJS({
      "node_modules/lodash/noop.js"(exports, module) {
        function noop() {
        }
        module.exports = noop;
      }
    });
  
    // node_modules/lodash/_getData.js
    var require_getData = __commonJS({
      "node_modules/lodash/_getData.js"(exports, module) {
        var metaMap = require_metaMap();
        var noop = require_noop();
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        module.exports = getData;
      }
    });
  
    // node_modules/lodash/_realNames.js
    var require_realNames = __commonJS({
      "node_modules/lodash/_realNames.js"(exports, module) {
        var realNames = {};
        module.exports = realNames;
      }
    });
  
    // node_modules/lodash/_getFuncName.js
    var require_getFuncName = __commonJS({
      "node_modules/lodash/_getFuncName.js"(exports, module) {
        var realNames = require_realNames();
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function getFuncName(func) {
          var result = func.name + "", array = realNames[result], length = hasOwnProperty2.call(realNames, result) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result;
        }
        module.exports = getFuncName;
      }
    });
  
    // node_modules/lodash/_LazyWrapper.js
    var require_LazyWrapper = __commonJS({
      "node_modules/lodash/_LazyWrapper.js"(exports, module) {
        var baseCreate = require_baseCreate();
        var baseLodash = require_baseLodash();
        var MAX_ARRAY_LENGTH = 4294967295;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        module.exports = LazyWrapper;
      }
    });
  
    // node_modules/lodash/_copyArray.js
    var require_copyArray = __commonJS({
      "node_modules/lodash/_copyArray.js"(exports, module) {
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        module.exports = copyArray;
      }
    });
  
    // node_modules/lodash/_wrapperClone.js
    var require_wrapperClone = __commonJS({
      "node_modules/lodash/_wrapperClone.js"(exports, module) {
        var LazyWrapper = require_LazyWrapper();
        var LodashWrapper = require_LodashWrapper();
        var copyArray = require_copyArray();
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result.__actions__ = copyArray(wrapper.__actions__);
          result.__index__ = wrapper.__index__;
          result.__values__ = wrapper.__values__;
          return result;
        }
        module.exports = wrapperClone;
      }
    });
  
    // node_modules/lodash/wrapperLodash.js
    var require_wrapperLodash = __commonJS({
      "node_modules/lodash/wrapperLodash.js"(exports, module) {
        var LazyWrapper = require_LazyWrapper();
        var LodashWrapper = require_LodashWrapper();
        var baseLodash = require_baseLodash();
        var isArray = require_isArray();
        var isObjectLike = require_isObjectLike();
        var wrapperClone = require_wrapperClone();
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty2.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        module.exports = lodash;
      }
    });
  
    // node_modules/lodash/_isLaziable.js
    var require_isLaziable = __commonJS({
      "node_modules/lodash/_isLaziable.js"(exports, module) {
        var LazyWrapper = require_LazyWrapper();
        var getData = require_getData();
        var getFuncName = require_getFuncName();
        var lodash = require_wrapperLodash();
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        module.exports = isLaziable;
      }
    });
  
    // node_modules/lodash/_createFlow.js
    var require_createFlow = __commonJS({
      "node_modules/lodash/_createFlow.js"(exports, module) {
        var LodashWrapper = require_LodashWrapper();
        var flatRest = require_flatRest();
        var getData = require_getData();
        var getFuncName = require_getFuncName();
        var isArray = require_isArray();
        var isLaziable = require_isLaziable();
        var FUNC_ERROR_TEXT = "Expected a function";
        var WRAP_CURRY_FLAG = 8;
        var WRAP_PARTIAL_FLAG = 32;
        var WRAP_ARY_FLAG = 128;
        var WRAP_REARG_FLAG = 256;
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : void 0;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result = funcs[index2].call(this, result);
              }
              return result;
            };
          });
        }
        module.exports = createFlow;
      }
    });
  
    // node_modules/lodash/flow.js
    var require_flow = __commonJS({
      "node_modules/lodash/flow.js"(exports, module) {
        var createFlow = require_createFlow();
        var flow2 = createFlow();
        module.exports = flow2;
      }
    });
  
    // node_modules/lodash/_baseClamp.js
    var require_baseClamp = __commonJS({
      "node_modules/lodash/_baseClamp.js"(exports, module) {
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== void 0) {
              number = number <= upper ? number : upper;
            }
            if (lower !== void 0) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        module.exports = baseClamp;
      }
    });
  
    // node_modules/lodash/clamp.js
    var require_clamp = __commonJS({
      "node_modules/lodash/clamp.js"(exports, module) {
        var baseClamp = require_baseClamp();
        var toNumber = require_toNumber();
        function clamp2(number, lower, upper) {
          if (upper === void 0) {
            upper = lower;
            lower = void 0;
          }
          if (upper !== void 0) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== void 0) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        module.exports = clamp2;
      }
    });
  
    // packages/systems/ix2/engine/logic/IX2VanillaEvents.ts
    var import_flow, import_get, import_clamp, import_shared5, MOUSE_CLICK, MOUSE_SECOND_CLICK, MOUSE_DOWN, MOUSE_UP, MOUSE_OVER, MOUSE_OUT, DROPDOWN_CLOSE, DROPDOWN_OPEN, SLIDER_ACTIVE, SLIDER_INACTIVE, TAB_ACTIVE, TAB_INACTIVE, NAVBAR_CLOSE, NAVBAR_OPEN, MOUSE_MOVE, PAGE_SCROLL_DOWN, SCROLL_INTO_VIEW, SCROLL_OUT_OF_VIEW, PAGE_SCROLL_UP, SCROLLING_IN_VIEW, PAGE_FINISH, ECOMMERCE_CART_CLOSE, ECOMMERCE_CART_OPEN, PAGE_START, PAGE_SCROLL, COMPONENT_ACTIVE, COMPONENT_INACTIVE, COLON_DELIMITER3, getNamespacedParameterId2, composableFilter, isElement, containsElement, isOrContainsElement, getAutoStopEvent, hasAutoStopEvent, actionGroupCreator, withFilter, baseActionGroupOptions, baseActivityActionGroupOptions, SCROLL_EVENT_TYPES, MOUSE_OVER_OUT_TYPES, baseScrollActionGroupOptions, AUTO_STOP_DISABLED_EVENTS, getDocumentState, areBoxesIntersecting, isElementHovered, isElementVisible, whenComponentActiveChange, whenElementHoverChange, whenElementVisibiltyChange, whenScrollDirectionChange, pointIntersects, whenPageLoadFinish, whenPageLoadStart, whenClickCountChange, getComponentActiveOptions, getComponentInactiveOptions, scrollIntoOutOfViewOptions, MOUSE_OUT_ROUND_THRESHOLD, IX2VanillaEvents_default;
    var init_IX2VanillaEvents = __esm({
      "packages/systems/ix2/engine/logic/IX2VanillaEvents.ts"() {
        "use strict";
        import_flow = __toESM(require_flow());
        import_get = __toESM(require_get());
        import_clamp = __toESM(require_clamp());
        init_shared_constants();
        init_IX2VanillaEngine();
        init_IX2EngineActions();
        import_shared5 = __toESM(require_shared2());
        ({
          MOUSE_CLICK,
          MOUSE_SECOND_CLICK,
          MOUSE_DOWN,
          MOUSE_UP,
          MOUSE_OVER,
          MOUSE_OUT,
          DROPDOWN_CLOSE,
          DROPDOWN_OPEN,
          SLIDER_ACTIVE,
          SLIDER_INACTIVE,
          TAB_ACTIVE,
          TAB_INACTIVE,
          NAVBAR_CLOSE,
          NAVBAR_OPEN,
          MOUSE_MOVE,
          PAGE_SCROLL_DOWN,
          SCROLL_INTO_VIEW,
          SCROLL_OUT_OF_VIEW,
          PAGE_SCROLL_UP,
          SCROLLING_IN_VIEW,
          PAGE_FINISH,
          ECOMMERCE_CART_CLOSE,
          ECOMMERCE_CART_OPEN,
          PAGE_START,
          PAGE_SCROLL
        } = EventTypeConsts);
        COMPONENT_ACTIVE = "COMPONENT_ACTIVE";
        COMPONENT_INACTIVE = "COMPONENT_INACTIVE";
        ({ COLON_DELIMITER: COLON_DELIMITER3 } = IX2EngineConstants_exports);
        ({ getNamespacedParameterId: getNamespacedParameterId2 } = import_shared5.IX2VanillaUtils);
        composableFilter = (predicate) => (options) => {
          if (typeof options === "object" && predicate(options)) {
            return true;
          }
          return options;
        };
        isElement = composableFilter(({ element, nativeEvent }) => {
          return element === nativeEvent.target;
        });
        containsElement = composableFilter(({ element, nativeEvent }) => {
          return element.contains(nativeEvent.target);
        });
        isOrContainsElement = (0, import_flow.default)([isElement, containsElement]);
        getAutoStopEvent = (store, autoStopEventId) => {
          if (autoStopEventId) {
            const { ixData: ixData2 } = store.getState();
            const { events } = ixData2;
            const eventToStop = events[autoStopEventId];
            if (eventToStop && !AUTO_STOP_DISABLED_EVENTS[eventToStop.eventTypeId]) {
              return eventToStop;
            }
          }
          return null;
        };
        hasAutoStopEvent = ({ store, event }) => {
          const { action: eventAction } = event;
          const { autoStopEventId } = eventAction.config;
          return Boolean(getAutoStopEvent(store, autoStopEventId));
        };
        actionGroupCreator = ({ store, event, element, eventStateKey }, state) => {
          const { action: eventAction, id: eventId } = event;
          const { actionListId, autoStopEventId } = eventAction.config;
          const eventToStop = getAutoStopEvent(store, autoStopEventId);
          if (eventToStop) {
            stopActionGroup({
              store,
              eventId: autoStopEventId,
              eventTarget: element,
              eventStateKey: autoStopEventId + COLON_DELIMITER3 + eventStateKey.split(COLON_DELIMITER3)[1],
              actionListId: (0, import_get.default)(eventToStop, "action.config.actionListId")
            });
          }
          stopActionGroup({
            store,
            eventId,
            eventTarget: element,
            eventStateKey,
            actionListId
          });
          startActionGroup({
            store,
            eventId,
            eventTarget: element,
            eventStateKey,
            actionListId
          });
          return state;
        };
        withFilter = (filter, handler) => (options, state) => filter(options, state) === true ? handler(options, state) : state;
        baseActionGroupOptions = {
          handler: withFilter(isOrContainsElement, actionGroupCreator)
        };
        baseActivityActionGroupOptions = {
          ...baseActionGroupOptions,
          types: [COMPONENT_ACTIVE, COMPONENT_INACTIVE].join(" ")
        };
        SCROLL_EVENT_TYPES = [
          { target: window, types: "resize orientationchange", throttle: true },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: true
          }
        ];
        MOUSE_OVER_OUT_TYPES = "mouseover mouseout";
        baseScrollActionGroupOptions = {
          types: SCROLL_EVENT_TYPES
        };
        AUTO_STOP_DISABLED_EVENTS = {
          PAGE_START,
          PAGE_FINISH
        };
        getDocumentState = (() => {
          const supportOffset = window.pageXOffset !== void 0;
          const isCSS1Compat = document.compatMode === "CSS1Compat";
          const rootElement = isCSS1Compat ? document.documentElement : document.body;
          return () => ({
            scrollLeft: supportOffset ? window.pageXOffset : rootElement.scrollLeft,
            scrollTop: supportOffset ? window.pageYOffset : rootElement.scrollTop,
            // required to remove elasticity in Safari scrolling.
            stiffScrollTop: (0, import_clamp.default)(
              supportOffset ? window.pageYOffset : rootElement.scrollTop,
              0,
              rootElement.scrollHeight - window.innerHeight
            ),
            scrollWidth: rootElement.scrollWidth,
            scrollHeight: rootElement.scrollHeight,
            clientWidth: rootElement.clientWidth,
            clientHeight: rootElement.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
          });
        })();
        areBoxesIntersecting = (a, b) => !(a.left > b.right || a.right < b.left || a.top > b.bottom || a.bottom < b.top);
        isElementHovered = ({ element, nativeEvent }) => {
          const { type, target, relatedTarget } = nativeEvent;
          const containsTarget = element.contains(target);
          if (type === "mouseover" && containsTarget) {
            return true;
          }
          const containsRelated = element.contains(relatedTarget);
          if (type === "mouseout" && containsTarget && containsRelated) {
            return true;
          }
          return false;
        };
        isElementVisible = (options) => {
          const {
            element,
            event: { config }
          } = options;
          const { clientWidth, clientHeight } = getDocumentState();
          const scrollOffsetValue = config.scrollOffsetValue;
          const scrollOffsetUnit = config.scrollOffsetUnit;
          const isPX = scrollOffsetUnit === "PX";
          const offsetPadding = isPX ? scrollOffsetValue : clientHeight * (scrollOffsetValue || 0) / 100;
          return areBoxesIntersecting(element.getBoundingClientRect(), {
            left: 0,
            top: offsetPadding,
            right: clientWidth,
            bottom: clientHeight - offsetPadding
          });
        };
        whenComponentActiveChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
        (handler) => (options, oldState) => {
          const { type } = options.nativeEvent;
          const isActive = [COMPONENT_ACTIVE, COMPONENT_INACTIVE].indexOf(type) !== -1 ? type === COMPONENT_ACTIVE : oldState.isActive;
          const newState = {
            ...oldState,
            isActive
          };
          if (!oldState || newState.isActive !== oldState.isActive) {
            return handler(options, newState) || newState;
          }
          return newState;
        };
        whenElementHoverChange = (handler) => (options, oldState) => {
          const newState = {
            elementHovered: isElementHovered(options)
          };
          if (oldState ? newState.elementHovered !== oldState.elementHovered : newState.elementHovered) {
            return handler(options, newState) || newState;
          }
          return newState;
        };
        whenElementVisibiltyChange = (handler) => (options, oldState) => {
          const newState = {
            ...oldState,
            elementVisible: isElementVisible(options)
          };
          if (oldState ? newState.elementVisible !== oldState.elementVisible : newState.elementVisible) {
            return handler(options, newState) || newState;
          }
          return newState;
        };
        whenScrollDirectionChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
        (handler) => (options, oldState = {}) => {
          const {
            stiffScrollTop: scrollTop,
            scrollHeight,
            innerHeight
          } = getDocumentState();
          const {
            event: { config, eventTypeId }
          } = options;
          const { scrollOffsetValue, scrollOffsetUnit } = config;
          const isPX = scrollOffsetUnit === "PX";
          const scrollHeightBounds = scrollHeight - innerHeight;
          const percentTop = Number((scrollTop / scrollHeightBounds).toFixed(2));
          if (oldState && oldState.percentTop === percentTop) {
            return oldState;
          }
          const scrollTopPadding = (isPX ? scrollOffsetValue : innerHeight * (scrollOffsetValue || 0) / 100) / scrollHeightBounds;
          let scrollingDown;
          let scrollDirectionChanged;
          let anchorTop = 0;
          if (oldState) {
            scrollingDown = percentTop > oldState.percentTop;
            scrollDirectionChanged = oldState.scrollingDown !== scrollingDown;
            anchorTop = scrollDirectionChanged ? percentTop : oldState.anchorTop;
          }
          const inBounds = eventTypeId === PAGE_SCROLL_DOWN ? percentTop >= anchorTop + scrollTopPadding : percentTop <= anchorTop - scrollTopPadding;
          const newState = {
            ...oldState,
            percentTop,
            inBounds,
            anchorTop,
            scrollingDown
          };
          if (oldState && inBounds && // @ts-expect-error - TS2339 - Property 'inBounds' does not exist on type '{}'.
          (scrollDirectionChanged || newState.inBounds !== oldState.inBounds)) {
            return handler(options, newState) || newState;
          }
          return newState;
        };
        pointIntersects = (point, rect) => point.left > rect.left && point.left < rect.right && point.top > rect.top && point.top < rect.bottom;
        whenPageLoadFinish = (handler) => (options, oldState) => {
          const newState = {
            finished: document.readyState === "complete"
          };
          if (newState.finished && !(oldState && oldState.finshed)) {
            handler(options);
          }
          return newState;
        };
        whenPageLoadStart = (handler) => (options, oldState) => {
          const newState = {
            started: true
          };
          if (!oldState) {
            handler(options);
          }
          return newState;
        };
        whenClickCountChange = (handler) => (options, oldState = { clickCount: 0 }) => {
          const newState = {
            clickCount: oldState.clickCount % 2 + 1
          };
          if (newState.clickCount !== oldState.clickCount) {
            return handler(options, newState) || newState;
          }
          return newState;
        };
        getComponentActiveOptions = (allowNestedChildrenEvents = true) => ({
          ...baseActivityActionGroupOptions,
          handler: withFilter(
            allowNestedChildrenEvents ? isOrContainsElement : isElement,
            // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
            whenComponentActiveChange((options, state) => {
              return state.isActive ? baseActionGroupOptions.handler(options, state) : state;
            })
          )
        });
        getComponentInactiveOptions = (allowNestedChildrenEvents = true) => ({
          ...baseActivityActionGroupOptions,
          handler: withFilter(
            allowNestedChildrenEvents ? isOrContainsElement : isElement,
            // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
            whenComponentActiveChange((options, state) => {
              return !state.isActive ? baseActionGroupOptions.handler(options, state) : state;
            })
          )
        });
        scrollIntoOutOfViewOptions = {
          ...baseScrollActionGroupOptions,
          handler: whenElementVisibiltyChange((options, state) => {
            const { elementVisible } = state;
            const { event, store } = options;
            const { ixData: ixData2 } = store.getState();
            const { events } = ixData2;
            if (!events[event.action.config.autoStopEventId] && state.triggered) {
              return state;
            }
            if (event.eventTypeId === SCROLL_INTO_VIEW === elementVisible) {
              actionGroupCreator(options);
              return {
                ...state,
                triggered: true
              };
            } else {
              return state;
            }
          })
        };
        MOUSE_OUT_ROUND_THRESHOLD = 0.05;
        IX2VanillaEvents_default = {
          [SLIDER_ACTIVE]: getComponentActiveOptions(),
          [SLIDER_INACTIVE]: getComponentInactiveOptions(),
          [DROPDOWN_OPEN]: getComponentActiveOptions(),
          [DROPDOWN_CLOSE]: getComponentInactiveOptions(),
          // navbar elements may contain nested components in the menu. To prevent activity misfires, only listed for activity
          // events where the target is the navbar element, and ignore children that dispatch activitiy events.
          [NAVBAR_OPEN]: getComponentActiveOptions(false),
          [NAVBAR_CLOSE]: getComponentInactiveOptions(false),
          [TAB_ACTIVE]: getComponentActiveOptions(),
          [TAB_INACTIVE]: getComponentInactiveOptions(),
          [ECOMMERCE_CART_OPEN]: {
            types: "ecommerce-cart-open",
            handler: withFilter(isOrContainsElement, actionGroupCreator)
          },
          [ECOMMERCE_CART_CLOSE]: {
            types: "ecommerce-cart-close",
            handler: withFilter(isOrContainsElement, actionGroupCreator)
          },
          [MOUSE_CLICK]: {
            types: "click",
            handler: withFilter(
              isOrContainsElement,
              whenClickCountChange((options, { clickCount }) => {
                if (hasAutoStopEvent(options)) {
                  clickCount === 1 && actionGroupCreator(options);
                } else {
                  actionGroupCreator(options);
                }
              })
            )
          },
          [MOUSE_SECOND_CLICK]: {
            types: "click",
            handler: withFilter(
              isOrContainsElement,
              whenClickCountChange((options, { clickCount }) => {
                if (clickCount === 2) {
                  actionGroupCreator(options);
                }
              })
            )
          },
          [MOUSE_DOWN]: {
            ...baseActionGroupOptions,
            types: "mousedown"
          },
          [MOUSE_UP]: {
            ...baseActionGroupOptions,
            types: "mouseup"
          },
          [MOUSE_OVER]: {
            types: MOUSE_OVER_OUT_TYPES,
            handler: withFilter(
              isOrContainsElement,
              whenElementHoverChange((options, state) => {
                if (state.elementHovered) {
                  actionGroupCreator(options);
                }
              })
            )
          },
          [MOUSE_OUT]: {
            types: MOUSE_OVER_OUT_TYPES,
            handler: withFilter(
              isOrContainsElement,
              whenElementHoverChange((options, state) => {
                if (!state.elementHovered) {
                  actionGroupCreator(options);
                }
              })
            )
          },
          [MOUSE_MOVE]: {
            types: "mousemove mouseout scroll",
            handler: ({ store, element, eventConfig, nativeEvent, eventStateKey }, state = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }) => {
              const {
                basedOn,
                selectedAxis,
                continuousParameterGroupId,
                reverse,
                restingState = 0
              } = eventConfig;
              const {
                clientX = state.clientX,
                clientY = state.clientY,
                pageX = state.pageX,
                pageY = state.pageY
              } = nativeEvent;
              const isXAxis = selectedAxis === "X_AXIS";
              const isMouseOut = nativeEvent.type === "mouseout";
              let value = restingState / 100;
              let namespacedParameterId = continuousParameterGroupId;
              let elementHovered = false;
              switch (basedOn) {
                case EventBasedOn.VIEWPORT: {
                  value = isXAxis ? Math.min(clientX, window.innerWidth) / window.innerWidth : Math.min(clientY, window.innerHeight) / window.innerHeight;
                  break;
                }
                case EventBasedOn.PAGE: {
                  const { scrollLeft, scrollTop, scrollWidth, scrollHeight } = getDocumentState();
                  value = isXAxis ? Math.min(scrollLeft + pageX, scrollWidth) / scrollWidth : Math.min(scrollTop + pageY, scrollHeight) / scrollHeight;
                  break;
                }
                case EventBasedOn.ELEMENT:
                default: {
                  namespacedParameterId = getNamespacedParameterId2(
                    eventStateKey,
                    continuousParameterGroupId
                  );
                  const isMouseEvent = nativeEvent.type.indexOf("mouse") === 0;
                  if (isMouseEvent && isOrContainsElement({ element, nativeEvent }) !== true) {
                    break;
                  }
                  const rect = element.getBoundingClientRect();
                  const { left, top, width, height } = rect;
                  if (!isMouseEvent && !pointIntersects({ left: clientX, top: clientY }, rect)) {
                    break;
                  }
                  elementHovered = true;
                  value = isXAxis ? (clientX - left) / width : (clientY - top) / height;
                  break;
                }
              }
              if (isMouseOut && (value > 1 - MOUSE_OUT_ROUND_THRESHOLD || value < MOUSE_OUT_ROUND_THRESHOLD)) {
                value = Math.round(value);
              }
              if (basedOn !== EventBasedOn.ELEMENT || elementHovered || // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              elementHovered !== state.elementHovered) {
                value = reverse ? 1 - value : value;
                store.dispatch(parameterChanged(namespacedParameterId, value));
              }
              return {
                elementHovered,
                clientX,
                clientY,
                pageX,
                pageY
              };
            }
          },
          [PAGE_SCROLL]: {
            types: SCROLL_EVENT_TYPES,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            handler: ({ store, eventConfig }) => {
              const { continuousParameterGroupId, reverse } = eventConfig;
              const { scrollTop, scrollHeight, clientHeight } = getDocumentState();
              let value = scrollTop / (scrollHeight - clientHeight);
              value = reverse ? 1 - value : value;
              store.dispatch(parameterChanged(continuousParameterGroupId, value));
            }
          },
          [SCROLLING_IN_VIEW]: {
            types: SCROLL_EVENT_TYPES,
            handler: ({ element, store, eventConfig, eventStateKey }, state = { scrollPercent: 0 }) => {
              const {
                scrollLeft,
                scrollTop,
                scrollWidth,
                scrollHeight,
                clientHeight: visibleHeight
              } = getDocumentState();
              const {
                basedOn,
                selectedAxis,
                continuousParameterGroupId,
                startsEntering,
                startsExiting,
                addEndOffset,
                addStartOffset,
                addOffsetValue = 0,
                endOffsetValue = 0
              } = eventConfig;
              const isXAxis = selectedAxis === "X_AXIS";
              if (basedOn === EventBasedOn.VIEWPORT) {
                const value = isXAxis ? scrollLeft / scrollWidth : scrollTop / scrollHeight;
                if (value !== state.scrollPercent) {
                  store.dispatch(parameterChanged(continuousParameterGroupId, value));
                }
                return {
                  scrollPercent: value
                };
              } else {
                const namespacedParameterId = getNamespacedParameterId2(
                  eventStateKey,
                  continuousParameterGroupId
                );
                const elementRect = element.getBoundingClientRect();
                let offsetStartPerc = (addStartOffset ? addOffsetValue : 0) / 100;
                let offsetEndPerc = (addEndOffset ? endOffsetValue : 0) / 100;
                offsetStartPerc = startsEntering ? offsetStartPerc : 1 - offsetStartPerc;
                offsetEndPerc = startsExiting ? offsetEndPerc : 1 - offsetEndPerc;
                const offsetElementTop = elementRect.top + Math.min(elementRect.height * offsetStartPerc, visibleHeight);
                const offsetElementBottom = elementRect.top + elementRect.height * offsetEndPerc;
                const offsetHeight = offsetElementBottom - offsetElementTop;
                const fixedScrollHeight = Math.min(
                  visibleHeight + offsetHeight,
                  scrollHeight
                );
                const fixedScrollTop = Math.min(
                  Math.max(0, visibleHeight - offsetElementTop),
                  fixedScrollHeight
                );
                const fixedScrollPerc = fixedScrollTop / fixedScrollHeight;
                if (fixedScrollPerc !== state.scrollPercent) {
                  store.dispatch(
                    parameterChanged(namespacedParameterId, fixedScrollPerc)
                  );
                }
                return {
                  scrollPercent: fixedScrollPerc
                };
              }
            }
          },
          [SCROLL_INTO_VIEW]: scrollIntoOutOfViewOptions,
          [SCROLL_OUT_OF_VIEW]: scrollIntoOutOfViewOptions,
          [PAGE_SCROLL_DOWN]: {
            ...baseScrollActionGroupOptions,
            // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
            handler: whenScrollDirectionChange((options, state) => {
              if (state.scrollingDown) {
                actionGroupCreator(options);
              }
            })
          },
          [PAGE_SCROLL_UP]: {
            ...baseScrollActionGroupOptions,
            // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
            handler: whenScrollDirectionChange((options, state) => {
              if (!state.scrollingDown) {
                actionGroupCreator(options);
              }
            })
          },
          [PAGE_FINISH]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: withFilter(isElement, whenPageLoadFinish(actionGroupCreator))
          },
          [PAGE_START]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: withFilter(isElement, whenPageLoadStart(actionGroupCreator))
          }
        };
      }
    });
  
    // packages/systems/ix2/engine/logic/IX2VanillaEngine.ts
    var IX2VanillaEngine_exports = {};
    __export(IX2VanillaEngine_exports, {
      observeRequests: () => observeRequests,
      startActionGroup: () => startActionGroup,
      startEngine: () => startEngine,
      stopActionGroup: () => stopActionGroup,
      stopAllActionGroups: () => stopAllActionGroups,
      stopEngine: () => stopEngine
    });
    function observeRequests(store) {
      observeStore2({
        store,
        // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
        select: ({ ixRequest: ixRequest2 }) => ixRequest2.preview,
        onChange: handlePreviewRequest
      });
      observeStore2({
        store,
        // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
        select: ({ ixRequest: ixRequest2 }) => ixRequest2.playback,
        onChange: handlePlaybackRequest
      });
      observeStore2({
        store,
        // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
        select: ({ ixRequest: ixRequest2 }) => ixRequest2.stop,
        onChange: handleStopRequest
      });
      observeStore2({
        store,
        // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
        select: ({ ixRequest: ixRequest2 }) => ixRequest2.clear,
        onChange: handleClearRequest
      });
    }
    function observeMediaQueryChange(store) {
      observeStore2({
        store,
        // @ts-expect-error - TS7031 - Binding element 'ixSession' implicitly has an 'any' type.
        select: ({ ixSession: ixSession2 }) => ixSession2.mediaQueryKey,
        onChange: () => {
          stopEngine(store);
          clearAllStyles2({ store, elementApi: IX2BrowserApi_exports });
          startEngine({ store, allowEvents: true });
          dispatchPageUpdateEvent();
        }
      });
    }
    function observeOneRenderTick(store, onTick) {
      const unsubscribe = observeStore2({
        store,
        // @ts-expect-error - TS7031 - Binding element 'ixSession' implicitly has an 'any' type.
        select: ({ ixSession: ixSession2 }) => ixSession2.tick,
        // @ts-expect-error - TS7006 - Parameter 'tick' implicitly has an 'any' type.
        onChange: (tick) => {
          onTick(tick);
          unsubscribe();
        }
      });
    }
    function handlePreviewRequest({ rawData, defer }, store) {
      const start = () => {
        startEngine({ store, rawData, allowEvents: true });
        dispatchPageUpdateEvent();
      };
      defer ? setTimeout(start, 0) : start();
    }
    function dispatchPageUpdateEvent() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function handlePlaybackRequest(playback, store) {
      const {
        actionTypeId,
        actionListId,
        actionItemId,
        eventId,
        allowEvents,
        immediate,
        testManual,
        verbose = true
      } = playback;
      let { rawData } = playback;
      if (actionListId && actionItemId && rawData && immediate) {
        const actionList = rawData.actionLists[actionListId];
        if (actionList) {
          rawData = reduceListToGroup2({
            actionList,
            actionItemId,
            rawData
          });
        }
      }
      startEngine({ store, rawData, allowEvents, testManual });
      if (actionListId && actionTypeId === ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(actionTypeId)) {
        stopActionGroup({ store, actionListId });
        renderInitialGroup({ store, actionListId, eventId });
        const started = startActionGroup({
          store,
          eventId,
          actionListId,
          immediate,
          verbose
        });
        if (verbose && started) {
          store.dispatch(
            actionListPlaybackChanged({ actionListId, isPlaying: !immediate })
          );
        }
      }
    }
    function handleStopRequest({ actionListId }, store) {
      if (actionListId) {
        stopActionGroup({ store, actionListId });
      } else {
        stopAllActionGroups({ store });
      }
      stopEngine(store);
    }
    function handleClearRequest(state, store) {
      stopEngine(store);
      clearAllStyles2({ store, elementApi: IX2BrowserApi_exports });
    }
    function startEngine({ store, rawData, allowEvents, testManual }) {
      const { ixSession: ixSession2 } = store.getState();
      if (rawData) {
        store.dispatch(rawDataImported(rawData));
      }
      if (!ixSession2.active) {
        store.dispatch(
          sessionInitialized({
            hasBoundaryNodes: Boolean(document.querySelector(BOUNDARY_SELECTOR2)),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
          })
        );
        if (allowEvents) {
          bindEvents(store);
          addDocumentClass();
          if (store.getState().ixSession.hasDefinedMediaQueries) {
            observeMediaQueryChange(store);
          }
        }
        store.dispatch(sessionStarted());
        startRenderLoop(store, testManual);
      }
    }
    function addDocumentClass() {
      const { documentElement } = document;
      if (documentElement.className.indexOf(W_MOD_IX2) === -1) {
        documentElement.className += ` ${W_MOD_IX2}`;
      }
    }
    function startRenderLoop(store, testManual) {
      const handleFrame = (now) => {
        const { ixSession: ixSession2, ixParameters: ixParameters2 } = store.getState();
        if (ixSession2.active) {
          store.dispatch(animationFrameChanged(now, ixParameters2));
          if (testManual) {
            observeOneRenderTick(store, handleFrame);
          } else {
            requestAnimationFrame(handleFrame);
          }
        }
      };
      handleFrame(window.performance.now());
    }
    function stopEngine(store) {
      const { ixSession: ixSession2 } = store.getState();
      if (ixSession2.active) {
        const { eventListeners } = ixSession2;
        eventListeners.forEach(clearEventListener);
        clearObjectCache2();
        store.dispatch(sessionStopped());
      }
    }
    function clearEventListener({ target, listenerParams }) {
      target.removeEventListener.apply(target, listenerParams);
    }
    function createGroupInstances({
      // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
      store,
      // @ts-expect-error - TS7031 - Binding element 'eventStateKey' implicitly has an 'any' type.
      eventStateKey,
      // @ts-expect-error - TS7031 - Binding element 'eventTarget' implicitly has an 'any' type.
      eventTarget,
      // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
      eventId,
      // @ts-expect-error - TS7031 - Binding element 'eventConfig' implicitly has an 'any' type.
      eventConfig,
      // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
      actionListId,
      // @ts-expect-error - TS7031 - Binding element 'parameterGroup' implicitly has an 'any' type.
      parameterGroup,
      // @ts-expect-error - TS7031 - Binding element 'smoothing' implicitly has an 'any' type.
      smoothing,
      // @ts-expect-error - TS7031 - Binding element 'restingValue' implicitly has an 'any' type.
      restingValue
    }) {
      const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
      const { events } = ixData2;
      const event = events[eventId];
      const { eventTypeId } = event;
      const targetCache = {};
      const instanceActionGroups = {};
      const instanceConfigs = [];
      const { continuousActionGroups } = parameterGroup;
      let { id: parameterId } = parameterGroup;
      if (shouldNamespaceEventParameter2(eventTypeId, eventConfig)) {
        parameterId = getNamespacedParameterId3(eventStateKey, parameterId);
      }
      const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
      continuousActionGroups.forEach((actionGroup) => {
        const { keyframe, actionItems } = actionGroup;
        actionItems.forEach((actionItem) => {
          const { actionTypeId } = actionItem;
          const { target } = actionItem.config;
          if (!target) {
            return;
          }
          const elementRoot = target.boundaryMode ? eventElementRoot : null;
          const key = stringifyTarget2(target) + COLON_DELIMITER4 + actionTypeId;
          instanceActionGroups[key] = appendActionItem(
            instanceActionGroups[key],
            keyframe,
            actionItem
          );
          if (!targetCache[key]) {
            targetCache[key] = true;
            const { config } = actionItem;
            getAffectedElements2({
              config,
              event,
              eventTarget,
              elementRoot,
              elementApi: IX2BrowserApi_exports
            }).forEach((element) => {
              instanceConfigs.push({ element, key });
            });
          }
        });
      });
      instanceConfigs.forEach(({ element, key }) => {
        const actionGroups = instanceActionGroups[key];
        const actionItem = (0, import_get2.default)(actionGroups, `[0].actionItems[0]`, {});
        const { actionTypeId } = actionItem;
        const pluginInstance = isPluginType2(actionTypeId) ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
        const destination = getDestinationValues2(
          { element, actionItem, elementApi: IX2BrowserApi_exports },
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          pluginInstance
        );
        createInstance({
          store,
          element,
          eventId,
          actionListId,
          actionItem,
          destination,
          continuous: true,
          parameterId,
          actionGroups,
          smoothing,
          restingValue,
          pluginInstance
        });
      });
    }
    function appendActionItem(actionGroups = [], keyframe, actionItem) {
      const newActionGroups = [...actionGroups];
      let groupIndex;
      newActionGroups.some((group, index) => {
        if (group.keyframe === keyframe) {
          groupIndex = index;
          return true;
        }
        return false;
      });
      if (groupIndex == null) {
        groupIndex = newActionGroups.length;
        newActionGroups.push({
          keyframe,
          actionItems: []
        });
      }
      newActionGroups[groupIndex].actionItems.push(actionItem);
      return newActionGroups;
    }
    function bindEvents(store) {
      const { ixData: ixData2 } = store.getState();
      const { eventTypeMap } = ixData2;
      updateViewportWidth(store);
      (0, import_forEach.default)(eventTypeMap, (events, key) => {
        const logic = IX2VanillaEvents_default[key];
        if (!logic) {
          console.warn(`IX2 event type not configured: ${key}`);
          return;
        }
        bindEventType({
          logic,
          store,
          events
        });
      });
      const { ixSession: ixSession2 } = store.getState();
      if (ixSession2.eventListeners.length) {
        bindResizeEvents(store);
      }
    }
    function bindResizeEvents(store) {
      const handleResize = () => {
        updateViewportWidth(store);
      };
      WINDOW_RESIZE_EVENTS.forEach((type) => {
        window.addEventListener(type, handleResize);
        store.dispatch(eventListenerAdded(window, [type, handleResize]));
      });
      handleResize();
    }
    function updateViewportWidth(store) {
      const { ixSession: ixSession2, ixData: ixData2 } = store.getState();
      const width = window.innerWidth;
      if (width !== ixSession2.viewportWidth) {
        const { mediaQueries } = ixData2;
        store.dispatch(viewportWidthChanged({ width, mediaQueries }));
      }
    }
    function bindEventType({ logic, store, events }) {
      injectBehaviorCSSFixes(events);
      const { types: eventTypes, handler: eventHandler } = logic;
      const { ixData: ixData2 } = store.getState();
      const { actionLists } = ixData2;
      const eventTargets = mapFoundValues(events, getAffectedForEvent);
      if (!(0, import_size.default)(eventTargets)) {
        return;
      }
      (0, import_forEach.default)(eventTargets, (elements, key) => {
        const event = events[key];
        const {
          action: eventAction,
          id: eventId,
          mediaQueries = ixData2.mediaQueryKeys
        } = event;
        const { actionListId } = eventAction.config;
        if (!mediaQueriesEqual2(mediaQueries, ixData2.mediaQueryKeys)) {
          store.dispatch(mediaQueriesDefined());
        }
        if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
          const configs = Array.isArray(event.config) ? event.config : [event.config];
          configs.forEach((eventConfig) => {
            const { continuousParameterGroupId } = eventConfig;
            const paramGroups = (0, import_get2.default)(
              actionLists,
              `${actionListId}.continuousParameterGroups`,
              []
            );
            const parameterGroup = (0, import_find2.default)(
              paramGroups,
              ({ id }) => id === continuousParameterGroupId
            );
            const smoothing = (eventConfig.smoothing || 0) / 100;
            const restingValue = (eventConfig.restingState || 0) / 100;
            if (!parameterGroup) {
              return;
            }
            elements.forEach((eventTarget, index) => {
              const eventStateKey = eventId + COLON_DELIMITER4 + index;
              createGroupInstances({
                store,
                eventStateKey,
                eventTarget,
                eventId,
                eventConfig,
                actionListId,
                parameterGroup,
                smoothing,
                restingValue
              });
            });
          });
        }
        if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(eventAction.actionTypeId)) {
          renderInitialGroup({ store, actionListId, eventId });
        }
      });
      const handleEvent = (nativeEvent) => {
        const { ixSession: ixSession2 } = store.getState();
        forEachEventTarget(eventTargets, (element, eventId, eventStateKey) => {
          const event = events[eventId];
          const oldState = ixSession2.eventState[eventStateKey];
          const { action: eventAction, mediaQueries = ixData2.mediaQueryKeys } = event;
          if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
            return;
          }
          const handleEventWithConfig = (eventConfig = {}) => {
            const newState = eventHandler(
              {
                store,
                element,
                event,
                eventConfig,
                nativeEvent,
                eventStateKey
              },
              oldState
            );
            if (!shallowEqual2(newState, oldState)) {
              store.dispatch(eventStateChanged(eventStateKey, newState));
            }
          };
          if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
            const configs = Array.isArray(event.config) ? event.config : [event.config];
            configs.forEach(handleEventWithConfig);
          } else {
            handleEventWithConfig();
          }
        });
      };
      const handleEventThrottled = (0, import_throttle.default)(handleEvent, THROTTLED_EVENT_WAIT);
      const addListeners = ({
        target = document,
        // @ts-expect-error - TS7031 - Binding element 'types' implicitly has an 'any' type.
        types,
        // @ts-expect-error - TS7031 - Binding element 'shouldThrottle' implicitly has an 'any' type.
        throttle: shouldThrottle
      }) => {
        types.split(" ").filter(Boolean).forEach((type) => {
          const handlerFunc = shouldThrottle ? handleEventThrottled : handleEvent;
          target.addEventListener(type, handlerFunc);
          store.dispatch(eventListenerAdded(target, [type, handlerFunc]));
        });
      };
      if (Array.isArray(eventTypes)) {
        eventTypes.forEach(addListeners);
      } else if (typeof eventTypes === "string") {
        addListeners(logic);
      }
    }
    function injectBehaviorCSSFixes(events) {
      if (!IS_MOBILE_SAFARI) {
        return;
      }
      const injectedSelectors = {};
      let cssText = "";
      for (const eventId in events) {
        const { eventTypeId, target } = events[eventId];
        const selector = getQuerySelector(target);
        if (injectedSelectors[selector]) {
          continue;
        }
        if (eventTypeId === EventTypeConsts.MOUSE_CLICK || eventTypeId === EventTypeConsts.MOUSE_SECOND_CLICK) {
          injectedSelectors[selector] = true;
          cssText += selector + "{cursor: pointer;touch-action: manipulation;}";
        }
      }
      if (cssText) {
        const style = document.createElement("style");
        style.textContent = cssText;
        document.body.appendChild(style);
      }
    }
    function renderInitialGroup({ store, actionListId, eventId }) {
      const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
      const { actionLists, events } = ixData2;
      const event = events[eventId];
      const actionList = actionLists[actionListId];
      if (actionList && actionList.useFirstGroupAsInitialState) {
        const initialStateItems = (0, import_get2.default)(
          actionList,
          "actionItemGroups[0].actionItems",
          []
        );
        const mediaQueries = (0, import_get2.default)(event, "mediaQueries", ixData2.mediaQueryKeys);
        if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
          return;
        }
        initialStateItems.forEach((actionItem) => {
          const { config: itemConfig, actionTypeId } = actionItem;
          const config = (
            // When useEventTarget is explicitly true, use event target/targets to query elements
            // However, skip this condition when objectId is defined
            itemConfig?.target?.useEventTarget === true && itemConfig?.target?.objectId == null ? { target: event.target, targets: event.targets } : itemConfig
          );
          const itemElements = getAffectedElements2({ config, event, elementApi: IX2BrowserApi_exports });
          const shouldUsePlugin = isPluginType2(actionTypeId);
          itemElements.forEach((element) => {
            const pluginInstance = shouldUsePlugin ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
            createInstance({
              destination: getDestinationValues2(
                { element, actionItem, elementApi: IX2BrowserApi_exports },
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                pluginInstance
              ),
              immediate: true,
              store,
              element,
              eventId,
              actionItem,
              actionListId,
              pluginInstance
            });
          });
        });
      }
    }
    function stopAllActionGroups({ store }) {
      const { ixInstances: ixInstances2 } = store.getState();
      (0, import_forEach.default)(ixInstances2, (instance) => {
        if (!instance.continuous) {
          const { actionListId, verbose } = instance;
          removeInstance(instance, store);
          if (verbose) {
            store.dispatch(
              actionListPlaybackChanged({ actionListId, isPlaying: false })
            );
          }
        }
      });
    }
    function stopActionGroup({
      // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
      store,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      eventId,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      eventTarget,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      eventStateKey,
      // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
      actionListId
    }) {
      const { ixInstances: ixInstances2, ixSession: ixSession2 } = store.getState();
      const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
      (0, import_forEach.default)(ixInstances2, (instance) => {
        const boundaryMode = (0, import_get2.default)(instance, "actionItem.config.target.boundaryMode");
        const validEventKey = eventStateKey ? instance.eventStateKey === eventStateKey : true;
        if (instance.actionListId === actionListId && instance.eventId === eventId && validEventKey) {
          if (eventElementRoot && boundaryMode && !elementContains(eventElementRoot, instance.element)) {
            return;
          }
          removeInstance(instance, store);
          if (instance.verbose) {
            store.dispatch(
              actionListPlaybackChanged({ actionListId, isPlaying: false })
            );
          }
        }
      });
    }
    function startActionGroup({
      // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
      store,
      // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
      eventId,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      eventTarget,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      eventStateKey,
      // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
      actionListId,
      groupIndex = 0,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      immediate,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      verbose
    }) {
      const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
      const { events } = ixData2;
      const event = events[eventId] || {};
      const { mediaQueries = ixData2.mediaQueryKeys } = event;
      const actionList = (0, import_get2.default)(ixData2, `actionLists.${actionListId}`, {});
      const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
      if (!actionItemGroups || !actionItemGroups.length) {
        return false;
      }
      if (groupIndex >= actionItemGroups.length && (0, import_get2.default)(event, "config.loop")) {
        groupIndex = 0;
      }
      if (groupIndex === 0 && useFirstGroupAsInitialState) {
        groupIndex++;
      }
      const isFirstGroup = groupIndex === 0 || groupIndex === 1 && useFirstGroupAsInitialState;
      const instanceDelay = isFirstGroup && isQuickEffect(event.action?.actionTypeId) ? event.config.delay : void 0;
      const actionItems = (0, import_get2.default)(actionItemGroups, [groupIndex, "actionItems"], []);
      if (!actionItems.length) {
        return false;
      }
      if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
        return false;
      }
      const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
      const carrierIndex = getMaxDurationItemIndex2(actionItems);
      let groupStartResult = false;
      actionItems.forEach((actionItem, actionIndex) => {
        const { config, actionTypeId } = actionItem;
        const shouldUsePlugin = isPluginType2(actionTypeId);
        const { target } = config;
        if (!target) {
          return;
        }
        const elementRoot = target.boundaryMode ? eventElementRoot : null;
        const elements = getAffectedElements2({
          config,
          event,
          eventTarget,
          elementRoot,
          elementApi: IX2BrowserApi_exports
        });
        elements.forEach((element, elementIndex) => {
          const pluginInstance = shouldUsePlugin ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
          const pluginDuration = shouldUsePlugin ? getPluginDuration2(actionTypeId)(element, actionItem) : null;
          groupStartResult = true;
          const isCarrier = carrierIndex === actionIndex && elementIndex === 0;
          const computedStyle = getComputedStyle3({ element, actionItem });
          const destination = getDestinationValues2(
            { element, actionItem, elementApi: IX2BrowserApi_exports },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            pluginInstance
          );
          createInstance({
            store,
            element,
            actionItem,
            eventId,
            eventTarget,
            eventStateKey,
            actionListId,
            groupIndex,
            isCarrier,
            computedStyle,
            destination,
            immediate,
            verbose,
            pluginInstance,
            pluginDuration,
            instanceDelay
          });
        });
      });
      return groupStartResult;
    }
    function createInstance(options) {
      const { store, computedStyle, ...rest } = options;
      const {
        element,
        actionItem,
        immediate,
        pluginInstance,
        continuous,
        restingValue,
        eventId
      } = rest;
      const autoStart = !continuous;
      const instanceId = getInstanceId2();
      const { ixElements: ixElements3, ixSession: ixSession2, ixData: ixData2 } = store.getState();
      const elementId = getElementId2(ixElements3, element);
      const { refState: refState2 } = ixElements3[elementId] || {};
      const refType = getRefType(element);
      const skipMotion = (
        // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ readonly TRANSFORM_MOVE: true; readonly TRANSFORM_SCALE: true; readonly TRANSFORM_ROTATE: true; readonly TRANSFORM_SKEW: true; readonly STYLE_SIZE: true; readonly STYLE_FILTER: true; readonly STYLE_FONT_VARIATION: true; }'.
        ixSession2.reducedMotion && ReducedMotionTypes[actionItem.actionTypeId]
      );
      let skipToValue;
      if (skipMotion && continuous) {
        switch (ixData2.events[eventId]?.eventTypeId) {
          case EventTypeConsts.MOUSE_MOVE:
          case EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            skipToValue = restingValue;
            break;
          default:
            skipToValue = 0.5;
            break;
        }
      }
      const origin = getInstanceOrigin2(
        element,
        refState2,
        computedStyle,
        actionItem,
        IX2BrowserApi_exports,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        pluginInstance
      );
      store.dispatch(
        instanceAdded({
          instanceId,
          elementId,
          origin,
          refType,
          skipMotion,
          skipToValue,
          ...rest
        })
      );
      dispatchCustomEvent(document.body, "ix2-animation-started", instanceId);
      if (immediate) {
        renderImmediateInstance(store, instanceId);
        return;
      }
      observeStore2({
        store,
        // @ts-expect-error - TS7031 - Binding element 'ixInstances' implicitly has an 'any' type.
        select: ({ ixInstances: ixInstances2 }) => ixInstances2[instanceId],
        onChange: handleInstanceChange
      });
      if (autoStart) {
        store.dispatch(instanceStarted(instanceId, ixSession2.tick));
      }
    }
    function removeInstance(instance, store) {
      dispatchCustomEvent(document.body, "ix2-animation-stopping", {
        instanceId: instance.id,
        state: store.getState()
      });
      const { elementId, actionItem } = instance;
      const { ixElements: ixElements3 } = store.getState();
      const { ref, refType } = ixElements3[elementId] || {};
      if (refType === HTML_ELEMENT4) {
        cleanupHTMLElement2(ref, actionItem, IX2BrowserApi_exports);
      }
      store.dispatch(instanceRemoved(instance.id));
    }
    function dispatchCustomEvent(element, eventName, detail) {
      const event = document.createEvent("CustomEvent");
      event.initCustomEvent(eventName, true, true, detail);
      element.dispatchEvent(event);
    }
    function renderImmediateInstance(store, instanceId) {
      const { ixParameters: ixParameters2 } = store.getState();
      store.dispatch(instanceStarted(instanceId, 0));
      store.dispatch(animationFrameChanged(performance.now(), ixParameters2));
      const { ixInstances: ixInstances2 } = store.getState();
      handleInstanceChange(ixInstances2[instanceId], store);
    }
    function handleInstanceChange(instance, store) {
      const {
        active,
        continuous,
        complete,
        elementId,
        actionItem,
        actionTypeId,
        renderType,
        current,
        groupIndex,
        eventId,
        eventTarget,
        eventStateKey,
        actionListId,
        isCarrier,
        styleProp,
        verbose,
        pluginInstance
      } = instance;
      const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
      const { events } = ixData2;
      const event = events[eventId] || {};
      const { mediaQueries = ixData2.mediaQueryKeys } = event;
      if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
        return;
      }
      if (continuous || active || complete) {
        if (current || renderType === RENDER_GENERAL4 && complete) {
          store.dispatch(
            elementStateChanged(elementId, actionTypeId, current, actionItem)
          );
          const { ixElements: ixElements3 } = store.getState();
          const { ref, refType, refState: refState2 } = ixElements3[elementId] || {};
          const actionState = refState2 && refState2[actionTypeId];
          if (refType === HTML_ELEMENT4 || isPluginType2(actionTypeId)) {
            renderHTMLElement2(
              ref,
              refState2,
              actionState,
              eventId,
              actionItem,
              styleProp,
              IX2BrowserApi_exports,
              renderType,
              pluginInstance
            );
          }
        }
        if (complete) {
          if (isCarrier) {
            const started = startActionGroup({
              store,
              eventId,
              eventTarget,
              eventStateKey,
              actionListId,
              groupIndex: groupIndex + 1,
              verbose
            });
            if (verbose && !started) {
              store.dispatch(
                actionListPlaybackChanged({ actionListId, isPlaying: false })
              );
            }
          }
          removeInstance(instance, store);
        }
      }
    }
    var import_find2, import_get2, import_size, import_omitBy, import_isEmpty, import_mapValues, import_forEach, import_throttle, import_shared6, QuickEffectsIdList, isQuickEffect, COLON_DELIMITER4, BOUNDARY_SELECTOR2, HTML_ELEMENT4, RENDER_GENERAL4, W_MOD_IX2, getAffectedElements2, getElementId2, getDestinationValues2, observeStore2, getInstanceId2, renderHTMLElement2, clearAllStyles2, getMaxDurationItemIndex2, getComputedStyle3, getInstanceOrigin2, reduceListToGroup2, shouldNamespaceEventParameter2, getNamespacedParameterId3, shouldAllowMediaQuery2, cleanupHTMLElement2, clearObjectCache2, stringifyTarget2, mediaQueriesEqual2, shallowEqual2, isPluginType2, createPluginInstance2, getPluginDuration2, ua, IS_MOBILE_SAFARI, THROTTLED_EVENT_WAIT, WINDOW_RESIZE_EVENTS, mapFoundValues, forEachEventTarget, getAffectedForEvent;
    var init_IX2VanillaEngine = __esm({
      "packages/systems/ix2/engine/logic/IX2VanillaEngine.ts"() {
        "use strict";
        import_find2 = __toESM(require_find());
        import_get2 = __toESM(require_get());
        import_size = __toESM(require_size());
        import_omitBy = __toESM(require_omitBy());
        import_isEmpty = __toESM(require_isEmpty());
        import_mapValues = __toESM(require_mapValues());
        import_forEach = __toESM(require_forEach());
        import_throttle = __toESM(require_throttle());
        init_shared_constants();
        import_shared6 = __toESM(require_shared2());
        init_IX2EngineActions();
        init_IX2BrowserApi();
        init_IX2VanillaEvents();
        QuickEffectsIdList = Object.keys(QuickEffectIds);
        isQuickEffect = (actionTypeId) => QuickEffectsIdList.includes(actionTypeId);
        ({
          COLON_DELIMITER: COLON_DELIMITER4,
          BOUNDARY_SELECTOR: BOUNDARY_SELECTOR2,
          HTML_ELEMENT: HTML_ELEMENT4,
          RENDER_GENERAL: RENDER_GENERAL4,
          W_MOD_IX: W_MOD_IX2
        } = IX2EngineConstants_exports);
        ({
          getAffectedElements: getAffectedElements2,
          getElementId: getElementId2,
          getDestinationValues: getDestinationValues2,
          observeStore: observeStore2,
          getInstanceId: getInstanceId2,
          renderHTMLElement: renderHTMLElement2,
          clearAllStyles: clearAllStyles2,
          getMaxDurationItemIndex: getMaxDurationItemIndex2,
          getComputedStyle: getComputedStyle3,
          getInstanceOrigin: getInstanceOrigin2,
          reduceListToGroup: reduceListToGroup2,
          shouldNamespaceEventParameter: shouldNamespaceEventParameter2,
          getNamespacedParameterId: getNamespacedParameterId3,
          shouldAllowMediaQuery: shouldAllowMediaQuery2,
          cleanupHTMLElement: cleanupHTMLElement2,
          clearObjectCache: clearObjectCache2,
          stringifyTarget: stringifyTarget2,
          mediaQueriesEqual: mediaQueriesEqual2,
          shallowEqual: shallowEqual2
        } = import_shared6.IX2VanillaUtils);
        ({ isPluginType: isPluginType2, createPluginInstance: createPluginInstance2, getPluginDuration: getPluginDuration2 } = import_shared6.IX2VanillaPlugins);
        ua = navigator.userAgent;
        IS_MOBILE_SAFARI = ua.match(/iPad/i) || ua.match(/iPhone/);
        THROTTLED_EVENT_WAIT = 12;
        WINDOW_RESIZE_EVENTS = ["resize", "orientationchange"];
        mapFoundValues = (object, iteratee) => (0, import_omitBy.default)((0, import_mapValues.default)(object, iteratee), import_isEmpty.default);
        forEachEventTarget = (eventTargets, eventCallback) => {
          (0, import_forEach.default)(eventTargets, (elements, eventId) => {
            elements.forEach((element, index) => {
              const eventStateKey = eventId + COLON_DELIMITER4 + index;
              eventCallback(element, eventId, eventStateKey);
            });
          });
        };
        getAffectedForEvent = (event) => {
          const config = { target: event.target, targets: event.targets };
          return getAffectedElements2({ config, elementApi: IX2BrowserApi_exports });
        };
      }
    });
  
    // packages/systems/ix2/engine/index.js
    var require_engine = __commonJS({
      "packages/systems/ix2/engine/index.js"(exports) {
        "use strict";
        var _interopRequireWildcard = require_interopRequireWildcard().default;
        var _interopRequireDefault = require_interopRequireDefault().default;
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.actions = void 0;
        exports.destroy = destroy;
        exports.init = init;
        exports.setEnv = setEnv;
        exports.store = void 0;
        require_includes3();
        var _redux = require_lib2();
        var _IX2Reducer = _interopRequireDefault((init_IX2Reducer(), __toCommonJS(IX2Reducer_exports)));
        var _IX2VanillaEngine = (init_IX2VanillaEngine(), __toCommonJS(IX2VanillaEngine_exports));
        var actions = _interopRequireWildcard((init_IX2EngineActions(), __toCommonJS(IX2EngineActions_exports)));
        exports.actions = actions;
        var store = exports.store = (0, _redux.createStore)(_IX2Reducer.default);
        function setEnv(env) {
          if (env()) {
            (0, _IX2VanillaEngine.observeRequests)(store);
          }
        }
        function init(rawData) {
          destroy();
          (0, _IX2VanillaEngine.startEngine)({
            store,
            rawData,
            allowEvents: true
          });
        }
        function destroy() {
          (0, _IX2VanillaEngine.stopEngine)(store);
        }
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-ix2.js
    var require_webflow_ix2 = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-ix2.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        var ix2 = require_engine();
        ix2.setEnv(Webflow.env);
        Webflow.define("ix2", module.exports = function() {
          return ix2;
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-links.js
    var require_webflow_links = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-links.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("links", module.exports = function($, _) {
          var api = {};
          var $win = $(window);
          var designer;
          var inApp = Webflow.env();
          var location = window.location;
          var tempLink = document.createElement("a");
          var linkCurrent = "w--current";
          var indexPage = /index\.(html|php)$/;
          var dirList = /\/$/;
          var anchors;
          var slug;
          api.ready = api.design = api.preview = init;
          function init() {
            designer = inApp && Webflow.env("design");
            slug = Webflow.env("slug") || location.pathname || "";
            Webflow.scroll.off(scroll);
            anchors = [];
            var links = document.links;
            for (var i = 0; i < links.length; ++i) {
              select(links[i]);
            }
            if (anchors.length) {
              Webflow.scroll.on(scroll);
              scroll();
            }
          }
          function select(link) {
            if (link.getAttribute("hreflang")) {
              return;
            }
            var href = designer && link.getAttribute("href-disabled") || link.getAttribute("href");
            tempLink.href = href;
            if (href.indexOf(":") >= 0) {
              return;
            }
            var $link = $(link);
            if (tempLink.hash.length > 1 && tempLink.host + tempLink.pathname === location.host + location.pathname) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(tempLink.hash)) {
                return;
              }
              var $section = $(tempLink.hash);
              $section.length && anchors.push({
                link: $link,
                sec: $section,
                active: false
              });
              return;
            }
            if (href === "#" || href === "") {
              return;
            }
            var match = tempLink.href === location.href || href === slug || indexPage.test(href) && dirList.test(slug);
            setClass($link, linkCurrent, match);
          }
          function scroll() {
            var viewTop = $win.scrollTop();
            var viewHeight = $win.height();
            _.each(anchors, function(anchor) {
              if (anchor.link.attr("hreflang")) {
                return;
              }
              var $link = anchor.link;
              var $section = anchor.sec;
              var top = $section.offset().top;
              var height = $section.outerHeight();
              var offset = viewHeight * 0.5;
              var active = $section.is(":visible") && top + height - offset >= viewTop && top + offset <= viewTop + viewHeight;
              if (anchor.active === active) {
                return;
              }
              anchor.active = active;
              setClass($link, linkCurrent, active);
            });
          }
          function setClass($elem, className, add) {
            var exists = $elem.hasClass(className);
            if (add && exists) {
              return;
            }
            if (!add && !exists) {
              return;
            }
            add ? $elem.addClass(className) : $elem.removeClass(className);
          }
          return api;
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js
    var require_webflow_scroll = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("scroll", module.exports = function($) {
          var NS_EVENTS = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll"
          };
          var loc = window.location;
          var history = inIframe() ? null : window.history;
          var $win = $(window);
          var $doc = $(document);
          var $body = $(document.body);
          var animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
            window.setTimeout(fn, 15);
          };
          var rootTag = Webflow.env("editor") ? ".w-editor-body" : "body";
          var headerSelector = "header, " + rootTag + " > .header, " + rootTag + " > .w-nav:not([data-no-scroll])";
          var emptyHrefSelector = 'a[href="#"]';
          var localHrefSelector = 'a[href*="#"]:not(.w-tab-link):not(' + emptyHrefSelector + ")";
          var scrollTargetOutlineCSS = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}';
          var focusStylesEl = document.createElement("style");
          focusStylesEl.appendChild(document.createTextNode(scrollTargetOutlineCSS));
          function inIframe() {
            try {
              return Boolean(window.frameElement);
            } catch (e) {
              return true;
            }
          }
          var validHash = /^#[a-zA-Z0-9][\w:.-]*$/;
          function linksToCurrentPage(link) {
            return validHash.test(link.hash) && link.host + link.pathname === loc.host + loc.pathname;
          }
          const reducedMotionMediaQuery = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
          function reducedMotionEnabled() {
            return document.body.getAttribute("data-wf-scroll-motion") === "none" || reducedMotionMediaQuery.matches;
          }
          function setFocusable($el, action) {
            var initialTabindex;
            switch (action) {
              case "add":
                initialTabindex = $el.attr("tabindex");
                if (initialTabindex) {
                  $el.attr("data-wf-tabindex-swap", initialTabindex);
                } else {
                  $el.attr("tabindex", "-1");
                }
                break;
              case "remove":
                initialTabindex = $el.attr("data-wf-tabindex-swap");
                if (initialTabindex) {
                  $el.attr("tabindex", initialTabindex);
                  $el.removeAttr("data-wf-tabindex-swap");
                } else {
                  $el.removeAttr("tabindex");
                }
                break;
            }
            $el.toggleClass("wf-force-outline-none", action === "add");
          }
          function validateScroll(evt) {
            var target = evt.currentTarget;
            if (
              // Bail if in Designer
              Webflow.env("design") || // Ignore links being used by jQuery mobile
              window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(target.className)
            ) {
              return;
            }
            var hash = linksToCurrentPage(target) ? target.hash : "";
            if (hash === "")
              return;
            var $el = $(hash);
            if (!$el.length) {
              return;
            }
            if (evt) {
              evt.preventDefault();
              evt.stopPropagation();
            }
            updateHistory(hash, evt);
            window.setTimeout(function() {
              scroll($el, function setFocus() {
                setFocusable($el, "add");
                $el.get(0).focus({
                  preventScroll: true
                });
                setFocusable($el, "remove");
              });
            }, evt ? 0 : 300);
          }
          function updateHistory(hash) {
            if (loc.hash !== hash && history && history.pushState && // Navigation breaks Chrome when the protocol is `file:`.
            !(Webflow.env.chrome && loc.protocol === "file:")) {
              var oldHash = history.state && history.state.hash;
              if (oldHash !== hash) {
                history.pushState({
                  hash
                }, "", hash);
              }
            }
          }
          function scroll($targetEl, cb) {
            var start = $win.scrollTop();
            var end = calculateScrollEndPosition($targetEl);
            if (start === end)
              return;
            var duration = calculateScrollDuration($targetEl, start, end);
            var clock = Date.now();
            var step = function() {
              var elapsed = Date.now() - clock;
              window.scroll(0, getY(start, end, elapsed, duration));
              if (elapsed <= duration) {
                animate(step);
              } else if (typeof cb === "function") {
                cb();
              }
            };
            animate(step);
          }
          function calculateScrollEndPosition($targetEl) {
            var $header = $(headerSelector);
            var offsetY = $header.css("position") === "fixed" ? $header.outerHeight() : 0;
            var end = $targetEl.offset().top - offsetY;
            if ($targetEl.data("scroll") === "mid") {
              var available = $win.height() - offsetY;
              var elHeight = $targetEl.outerHeight();
              if (elHeight < available) {
                end -= Math.round((available - elHeight) / 2);
              }
            }
            return end;
          }
          function calculateScrollDuration($targetEl, start, end) {
            if (reducedMotionEnabled())
              return 0;
            var mult = 1;
            $body.add($targetEl).each(function(_, el) {
              var time = parseFloat(el.getAttribute("data-scroll-time"));
              if (!isNaN(time) && time >= 0) {
                mult = time;
              }
            });
            return (472.143 * Math.log(Math.abs(start - end) + 125) - 2e3) * mult;
          }
          function getY(start, end, elapsed, duration) {
            if (elapsed > duration) {
              return end;
            }
            return start + (end - start) * ease2(elapsed / duration);
          }
          function ease2(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          }
          function ready() {
            var {
              WF_CLICK_EMPTY,
              WF_CLICK_SCROLL
            } = NS_EVENTS;
            $doc.on(WF_CLICK_SCROLL, localHrefSelector, validateScroll);
            $doc.on(WF_CLICK_EMPTY, emptyHrefSelector, function(e) {
              e.preventDefault();
            });
            document.head.insertBefore(focusStylesEl, document.head.firstChild);
          }
          return {
            ready
          };
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-touch.js
    var require_webflow_touch = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-touch.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("touch", module.exports = function($) {
          var api = {};
          var getSelection = window.getSelection;
          $.event.special.tap = {
            bindType: "click",
            delegateType: "click"
          };
          api.init = function(el) {
            el = typeof el === "string" ? $(el).get(0) : el;
            return el ? new Touch(el) : null;
          };
          function Touch(el) {
            var active = false;
            var useTouch = false;
            var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
            var startX;
            var lastX;
            el.addEventListener("touchstart", start, false);
            el.addEventListener("touchmove", move, false);
            el.addEventListener("touchend", end, false);
            el.addEventListener("touchcancel", cancel, false);
            el.addEventListener("mousedown", start, false);
            el.addEventListener("mousemove", move, false);
            el.addEventListener("mouseup", end, false);
            el.addEventListener("mouseout", cancel, false);
            function start(evt) {
              var touches = evt.touches;
              if (touches && touches.length > 1) {
                return;
              }
              active = true;
              if (touches) {
                useTouch = true;
                startX = touches[0].clientX;
              } else {
                startX = evt.clientX;
              }
              lastX = startX;
            }
            function move(evt) {
              if (!active) {
                return;
              }
              if (useTouch && evt.type === "mousemove") {
                evt.preventDefault();
                evt.stopPropagation();
                return;
              }
              var touches = evt.touches;
              var x = touches ? touches[0].clientX : evt.clientX;
              var velocityX = x - lastX;
              lastX = x;
              if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === "") {
                triggerEvent("swipe", evt, {
                  direction: velocityX > 0 ? "right" : "left"
                });
                cancel();
              }
            }
            function end(evt) {
              if (!active) {
                return;
              }
              active = false;
              if (useTouch && evt.type === "mouseup") {
                evt.preventDefault();
                evt.stopPropagation();
                useTouch = false;
                return;
              }
            }
            function cancel() {
              active = false;
            }
            function destroy() {
              el.removeEventListener("touchstart", start, false);
              el.removeEventListener("touchmove", move, false);
              el.removeEventListener("touchend", end, false);
              el.removeEventListener("touchcancel", cancel, false);
              el.removeEventListener("mousedown", start, false);
              el.removeEventListener("mousemove", move, false);
              el.removeEventListener("mouseup", end, false);
              el.removeEventListener("mouseout", cancel, false);
              el = null;
            }
            this.destroy = destroy;
          }
          function triggerEvent(type, evt, data) {
            var newEvent = $.Event(type, {
              originalEvent: evt
            });
            $(evt.target).trigger(newEvent, data);
          }
          api.instance = api.init(document);
          return api;
        });
      }
    });
  
    // packages/shared/render/plugins/Form/webflow-forms-hosted.js
    var require_webflow_forms_hosted = __commonJS({
      "packages/shared/render/plugins/Form/webflow-forms-hosted.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = hostedSubmitWebflow;
        function hostedSubmitWebflow(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl) {
          return function(data) {
            reset(data);
            var form = data.form;
            var payload = {
              name: form.attr("data-name") || form.attr("name") || "Untitled Form",
              pageId: form.attr("data-wf-page-id") || "",
              elementId: form.attr("data-wf-element-id") || "",
              source: loc.href,
              test: Webflow.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(form.html()),
              trackingCookies: collectEnterpriseTrackingCookies()
            };
            const wfFlow = form.attr("data-wf-flow");
            if (wfFlow) {
              payload.wfFlow = wfFlow;
            }
            preventDefault(data);
            var status = findFields(form, payload.fields);
            if (status) {
              return alert(status);
            }
            payload.fileUploads = findFileUploads(form);
            disableBtn(data);
            if (!siteId) {
              afterSubmit(data);
              return;
            }
            $.ajax({
              url: formUrl,
              type: "POST",
              data: payload,
              dataType: "json",
              crossDomain: true
            }).done(function(response) {
              if (response && response.code === 200) {
                data.success = true;
              }
              afterSubmit(data);
            }).fail(function() {
              afterSubmit(data);
            });
          };
        }
      }
    });
  
    // packages/shared/render/plugins/Form/webflow-forms.js
    var require_webflow_forms = __commonJS({
      "packages/shared/render/plugins/Form/webflow-forms.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("forms", module.exports = function($, _) {
          var api = {};
          var $doc = $(document);
          var $forms;
          var loc = window.location;
          var retro = window.XDomainRequest && !window.atob;
          var namespace = ".w-form";
          var siteId;
          var emailField = /e(-)?mail/i;
          var emailValue = /^\S+@\S+$/;
          var alert = window.alert;
          var inApp = Webflow.env();
          var listening;
          var formUrl;
          var signFileUrl;
          var chimpRegex = /list-manage[1-9]?.com/i;
          var disconnected = _.debounce(function() {
            alert("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.");
          }, 100);
          api.ready = api.design = api.preview = function() {
            init();
            if (!inApp && !listening) {
              addListeners();
            }
          };
          function init() {
            siteId = $("html").attr("data-wf-site");
            formUrl = "https://webflow.com/api/v1/form/" + siteId;
            if (retro && formUrl.indexOf("https://webflow.com") >= 0) {
              formUrl = formUrl.replace("https://webflow.com", "https://formdata.webflow.com");
            }
            signFileUrl = `${formUrl}/signFile`;
            $forms = $(namespace + " form");
            if (!$forms.length) {
              return;
            }
            $forms.each(build);
          }
          function build(i, el) {
            var $el = $(el);
            var data = $.data(el, namespace);
            if (!data) {
              data = $.data(el, namespace, {
                form: $el
              });
            }
            reset(data);
            var wrap = $el.closest("div.w-form");
            data.done = wrap.find("> .w-form-done");
            data.fail = wrap.find("> .w-form-fail");
            data.fileUploads = wrap.find(".w-file-upload");
            data.fileUploads.each(function(j) {
              initFileUpload(j, data);
            });
            var formName = data.form.attr("aria-label") || data.form.attr("data-name") || "Form";
            if (!data.done.attr("aria-label")) {
              data.form.attr("aria-label", formName);
            }
            data.done.attr("tabindex", "-1");
            data.done.attr("role", "region");
            if (!data.done.attr("aria-label")) {
              data.done.attr("aria-label", formName + " success");
            }
            data.fail.attr("tabindex", "-1");
            data.fail.attr("role", "region");
            if (!data.fail.attr("aria-label")) {
              data.fail.attr("aria-label", formName + " failure");
            }
            var action = data.action = $el.attr("action");
            data.handler = null;
            data.redirect = $el.attr("data-redirect");
            if (chimpRegex.test(action)) {
              data.handler = submitMailChimp;
              return;
            }
            if (action) {
              return;
            }
            if (siteId) {
              data.handler = false ? exportedSubmitWebflow : (() => {
                const hostedSubmitHandler = require_webflow_forms_hosted().default;
                return hostedSubmitHandler(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl);
              })();
              return;
            }
            disconnected();
          }
          function addListeners() {
            listening = true;
            $doc.on("submit", namespace + " form", function(evt) {
              var data = $.data(this, namespace);
              if (data.handler) {
                data.evt = evt;
                data.handler(data);
              }
            });
            const CHECKBOX_CLASS_NAME = ".w-checkbox-input";
            const RADIO_INPUT_CLASS_NAME = ".w-radio-input";
            const CHECKED_CLASS = "w--redirected-checked";
            const FOCUSED_CLASS = "w--redirected-focus";
            const FOCUSED_VISIBLE_CLASS = "w--redirected-focus-visible";
            const focusVisibleSelectors = ":focus-visible, [data-wf-focus-visible]";
            const CUSTOM_CONTROLS = [["checkbox", CHECKBOX_CLASS_NAME], ["radio", RADIO_INPUT_CLASS_NAME]];
            $doc.on("change", namespace + ` form input[type="checkbox"]:not(` + CHECKBOX_CLASS_NAME + ")", (evt) => {
              $(evt.target).siblings(CHECKBOX_CLASS_NAME).toggleClass(CHECKED_CLASS);
            });
            $doc.on("change", namespace + ` form input[type="radio"]`, (evt) => {
              $(`input[name="${evt.target.name}"]:not(${CHECKBOX_CLASS_NAME})`).map((i, el) => $(el).siblings(RADIO_INPUT_CLASS_NAME).removeClass(CHECKED_CLASS));
              const $target = $(evt.target);
              if (!$target.hasClass("w-radio-input")) {
                $target.siblings(RADIO_INPUT_CLASS_NAME).addClass(CHECKED_CLASS);
              }
            });
            CUSTOM_CONTROLS.forEach(([controlType, customControlClassName]) => {
              $doc.on("focus", namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ")", (evt) => {
                $(evt.target).siblings(customControlClassName).addClass(FOCUSED_CLASS);
                $(evt.target).filter(focusVisibleSelectors).siblings(customControlClassName).addClass(FOCUSED_VISIBLE_CLASS);
              });
              $doc.on("blur", namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ")", (evt) => {
                $(evt.target).siblings(customControlClassName).removeClass(`${FOCUSED_CLASS} ${FOCUSED_VISIBLE_CLASS}`);
              });
            });
          }
          function reset(data) {
            var btn = data.btn = data.form.find(':input[type="submit"]');
            data.wait = data.btn.attr("data-wait") || null;
            data.success = false;
            btn.prop("disabled", false);
            data.label && btn.val(data.label);
          }
          function disableBtn(data) {
            var btn = data.btn;
            var wait = data.wait;
            btn.prop("disabled", true);
            if (wait) {
              data.label = btn.val();
              btn.val(wait);
            }
          }
          function findFields(form, result) {
            var status = null;
            result = result || {};
            form.find(':input:not([type="submit"]):not([type="file"])').each(function(i, el) {
              var field = $(el);
              var type = field.attr("type");
              var name = field.attr("data-name") || field.attr("name") || "Field " + (i + 1);
              var value = field.val();
              if (type === "checkbox") {
                value = field.is(":checked");
              } else if (type === "radio") {
                if (result[name] === null || typeof result[name] === "string") {
                  return;
                }
                value = form.find('input[name="' + field.attr("name") + '"]:checked').val() || null;
              }
              if (typeof value === "string") {
                value = $.trim(value);
              }
              result[name] = value;
              status = status || getStatus(field, type, name, value);
            });
            return status;
          }
          function findFileUploads(form) {
            var result = {};
            form.find(':input[type="file"]').each(function(i, el) {
              var field = $(el);
              var name = field.attr("data-name") || field.attr("name") || "File " + (i + 1);
              var value = field.attr("data-value");
              if (typeof value === "string") {
                value = $.trim(value);
              }
              result[name] = value;
            });
            return result;
          }
          const trackingCookieNameMap = {
            _mkto_trk: "marketo"
            // __hstc: 'hubspot',
          };
          function collectEnterpriseTrackingCookies() {
            const cookies = document.cookie.split("; ").reduce(function(acc, cookie) {
              const splitCookie = cookie.split("=");
              const name = splitCookie[0];
              if (name in trackingCookieNameMap) {
                const mappedName = trackingCookieNameMap[name];
                const value = splitCookie.slice(1).join("=");
                acc[mappedName] = value;
              }
              return acc;
            }, {});
            return cookies;
          }
          function getStatus(field, type, name, value) {
            var status = null;
            if (type === "password") {
              status = "Passwords cannot be submitted.";
            } else if (field.attr("required")) {
              if (!value) {
                status = "Please fill out the required field: " + name;
              } else if (emailField.test(field.attr("type"))) {
                if (!emailValue.test(value)) {
                  status = "Please enter a valid email address for: " + name;
                }
              }
            } else if (name === "g-recaptcha-response" && !value) {
              status = "Please confirm you\u2019re not a robot.";
            }
            return status;
          }
          function exportedSubmitWebflow(data) {
            preventDefault(data);
            afterSubmit(data);
          }
          function submitMailChimp(data) {
            reset(data);
            var form = data.form;
            var payload = {};
            if (/^https/.test(loc.href) && !/^https/.test(data.action)) {
              form.attr("method", "post");
              return;
            }
            preventDefault(data);
            var status = findFields(form, payload);
            if (status) {
              return alert(status);
            }
            disableBtn(data);
            var fullName;
            _.each(payload, function(value, key) {
              if (emailField.test(key)) {
                payload.EMAIL = value;
              }
              if (/^((full[ _-]?)?name)$/i.test(key)) {
                fullName = value;
              }
              if (/^(first[ _-]?name)$/i.test(key)) {
                payload.FNAME = value;
              }
              if (/^(last[ _-]?name)$/i.test(key)) {
                payload.LNAME = value;
              }
            });
            if (fullName && !payload.FNAME) {
              fullName = fullName.split(" ");
              payload.FNAME = fullName[0];
              payload.LNAME = payload.LNAME || fullName[1];
            }
            var url = data.action.replace("/post?", "/post-json?") + "&c=?";
            var userId = url.indexOf("u=") + 2;
            userId = url.substring(userId, url.indexOf("&", userId));
            var listId = url.indexOf("id=") + 3;
            listId = url.substring(listId, url.indexOf("&", listId));
            payload["b_" + userId + "_" + listId] = "";
            $.ajax({
              url,
              data: payload,
              dataType: "jsonp"
            }).done(function(resp) {
              data.success = resp.result === "success" || /already/.test(resp.msg);
              if (!data.success) {
                console.info("MailChimp error: " + resp.msg);
              }
              afterSubmit(data);
            }).fail(function() {
              afterSubmit(data);
            });
          }
          function afterSubmit(data) {
            var form = data.form;
            var redirect = data.redirect;
            var success = data.success;
            if (success && redirect) {
              Webflow.location(redirect);
              return;
            }
            data.done.toggle(success);
            data.fail.toggle(!success);
            if (success) {
              data.done.focus();
            } else {
              data.fail.focus();
            }
            form.toggle(!success);
            reset(data);
          }
          function preventDefault(data) {
            data.evt && data.evt.preventDefault();
            data.evt = null;
          }
          function initFileUpload(i, form) {
            if (!form.fileUploads || !form.fileUploads[i]) {
              return;
            }
            var file;
            var $el = $(form.fileUploads[i]);
            var $defaultWrap = $el.find("> .w-file-upload-default");
            var $uploadingWrap = $el.find("> .w-file-upload-uploading");
            var $successWrap = $el.find("> .w-file-upload-success");
            var $errorWrap = $el.find("> .w-file-upload-error");
            var $input = $defaultWrap.find(".w-file-upload-input");
            var $label = $defaultWrap.find(".w-file-upload-label");
            var $labelChildren = $label.children();
            var $errorMsgEl = $errorWrap.find(".w-file-upload-error-msg");
            var $fileEl = $successWrap.find(".w-file-upload-file");
            var $removeEl = $successWrap.find(".w-file-remove-link");
            var $fileNameEl = $fileEl.find(".w-file-upload-file-name");
            var sizeErrMsg = $errorMsgEl.attr("data-w-size-error");
            var typeErrMsg = $errorMsgEl.attr("data-w-type-error");
            var genericErrMsg = $errorMsgEl.attr("data-w-generic-error");
            if (!inApp) {
              $label.on("click keydown", function(e) {
                if (e.type === "keydown" && e.which !== 13 && e.which !== 32) {
                  return;
                }
                e.preventDefault();
                $input.click();
              });
            }
            $label.find(".w-icon-file-upload-icon").attr("aria-hidden", "true");
            $removeEl.find(".w-icon-file-upload-remove").attr("aria-hidden", "true");
            if (!inApp) {
              $removeEl.on("click keydown", function(e) {
                if (e.type === "keydown") {
                  if (e.which !== 13 && e.which !== 32) {
                    return;
                  }
                  e.preventDefault();
                }
                $input.removeAttr("data-value");
                $input.val("");
                $fileNameEl.html("");
                $defaultWrap.toggle(true);
                $successWrap.toggle(false);
                $label.focus();
              });
              $input.on("change", function(e) {
                file = e.target && e.target.files && e.target.files[0];
                if (!file) {
                  return;
                }
                $defaultWrap.toggle(false);
                $errorWrap.toggle(false);
                $uploadingWrap.toggle(true);
                $uploadingWrap.focus();
                $fileNameEl.text(file.name);
                if (!isUploading()) {
                  disableBtn(form);
                }
                form.fileUploads[i].uploading = true;
                signFile(file, afterSign);
              });
              var height = $label.outerHeight();
              $input.height(height);
              $input.width(1);
            } else {
              $input.on("click", function(e) {
                e.preventDefault();
              });
              $label.on("click", function(e) {
                e.preventDefault();
              });
              $labelChildren.on("click", function(e) {
                e.preventDefault();
              });
            }
            function parseError(err) {
              var errorMsg = err.responseJSON && err.responseJSON.msg;
              var userError = genericErrMsg;
              if (typeof errorMsg === "string" && errorMsg.indexOf("InvalidFileTypeError") === 0) {
                userError = typeErrMsg;
              } else if (typeof errorMsg === "string" && errorMsg.indexOf("MaxFileSizeError") === 0) {
                userError = sizeErrMsg;
              }
              $errorMsgEl.text(userError);
              $input.removeAttr("data-value");
              $input.val("");
              $uploadingWrap.toggle(false);
              $defaultWrap.toggle(true);
              $errorWrap.toggle(true);
              $errorWrap.focus();
              form.fileUploads[i].uploading = false;
              if (!isUploading()) {
                reset(form);
              }
            }
            function afterSign(err, data) {
              if (err) {
                return parseError(err);
              }
              var fileName = data.fileName;
              var postData = data.postData;
              var fileId = data.fileId;
              var s3Url = data.s3Url;
              $input.attr("data-value", fileId);
              uploadS3(s3Url, postData, file, fileName, afterUpload);
            }
            function afterUpload(err) {
              if (err) {
                return parseError(err);
              }
              $uploadingWrap.toggle(false);
              $successWrap.css("display", "inline-block");
              $successWrap.focus();
              form.fileUploads[i].uploading = false;
              if (!isUploading()) {
                reset(form);
              }
            }
            function isUploading() {
              var uploads = form.fileUploads && form.fileUploads.toArray() || [];
              return uploads.some(function(value) {
                return value.uploading;
              });
            }
          }
          function signFile(file, cb) {
            var payload = new URLSearchParams({
              name: file.name,
              size: file.size
            });
            $.ajax({
              type: "GET",
              url: `${signFileUrl}?${payload}`,
              crossDomain: true
            }).done(function(data) {
              cb(null, data);
            }).fail(function(err) {
              cb(err);
            });
          }
          function uploadS3(url, data, file, fileName, cb) {
            var formData = new FormData();
            for (var k in data) {
              formData.append(k, data[k]);
            }
            formData.append("file", file, fileName);
            $.ajax({
              type: "POST",
              url,
              data: formData,
              processData: false,
              contentType: false
            }).done(function() {
              cb(null);
            }).fail(function(err) {
              cb(err);
            });
          }
          return api;
        });
      }
    });
  
    // <stdin>
    require_webflow_brand();
    require_webflow_edit();
    require_webflow_focus_visible();
    require_webflow_focus();
    require_webflow_ix2_events();
    require_webflow_ix2();
    require_webflow_links();
    require_webflow_scroll();
    require_webflow_touch();
    require_webflow_forms();
  })();
  /*!
   * tram.js v0.8.2-global
   * Cross-browser CSS3 transitions in JavaScript
   * https://github.com/bkwld/tram
   * MIT License
   */
  /*!
   * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
   *
   * http://underscorejs.org
   * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Underscore may be freely distributed under the MIT license.
   * @license MIT
   */
  /*! Bundled license information:
  
  timm/lib/timm.js:
    (*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     *)
  */
  /**
   * ----------------------------------------------------------------------
   * Webflow: Interactions 2.0: Init
   */
  Webflow.require('ix2').init(
  {"events":{"e-16":{"id":"e-16","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e483deaf-08e2-77b7-15c9-04a81e21e04c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e483deaf-08e2-77b7-15c9-04a81e21e04c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673570592361},"e-17":{"id":"e-17","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-16"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e483deaf-08e2-77b7-15c9-04a81e21e04c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e483deaf-08e2-77b7-15c9-04a81e21e04c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673570592361},"e-18":{"id":"e-18","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["main"],"target":{"id":"e483deaf-08e2-77b7-15c9-04a81e21e04c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e483deaf-08e2-77b7-15c9-04a81e21e04c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673570730833},"e-19":{"id":"e-19","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-96","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main"],"target":{"id":"e483deaf-08e2-77b7-15c9-04a81e21e04c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e483deaf-08e2-77b7-15c9-04a81e21e04c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673570730834},"e-38":{"id":"e-38","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-39"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3bf97273-acb5-e34e-2a9e-6fa2ad31e1f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf97273-acb5-e34e-2a9e-6fa2ad31e1f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1673643052800},"e-40":{"id":"e-40","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-97","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-41"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"e483deaf-08e2-77b7-15c9-04a81e21e04c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e483deaf-08e2-77b7-15c9-04a81e21e04c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673666165445},"e-41":{"id":"e-41","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-98","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-40"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"e483deaf-08e2-77b7-15c9-04a81e21e04c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e483deaf-08e2-77b7-15c9-04a81e21e04c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673666165445},"e-53":{"id":"e-53","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-21","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"selector":".wrap-menu-button","originalId":"3bf97273-acb5-e34e-2a9e-6fa2ad31e201","appliesTo":"CLASS"},"targets":[{"selector":".wrap-menu-button","originalId":"3bf97273-acb5-e34e-2a9e-6fa2ad31e201","appliesTo":"CLASS"}],"config":[{"continuousParameterGroupId":"a-21-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":95,"restingState":50},{"continuousParameterGroupId":"a-21-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":95,"restingState":50}],"createdOn":1673818830246},"e-203":{"id":"e-203","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-204"}},"mediaQueries":["main","medium"],"target":{"id":"8c1d2cce-f1ab-7e94-e9c8-2e6db95c1d7e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8c1d2cce-f1ab-7e94-e9c8-2e6db95c1d7e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675050728777},"e-205":{"id":"e-205","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-206"}},"mediaQueries":["small","tiny"],"target":{"id":"8c1d2cce-f1ab-7e94-e9c8-2e6db95c1d7e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8c1d2cce-f1ab-7e94-e9c8-2e6db95c1d7e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1675062667958},"e-230":{"id":"e-230","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-53","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"65c2286ce8952a148ef34f07","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-53-p","selectedAxis":"X_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":96,"restingState":50},{"continuousParameterGroupId":"a-53-p-2","selectedAxis":"Y_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":96,"restingState":50}],"createdOn":1675299456740},"e-237":{"id":"e-237","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-55","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07|be490e1f-6f80-1215-db0a-eb5648ef8104","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07|be490e1f-6f80-1215-db0a-eb5648ef8104","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-55-p","smoothing":90,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1675497593975},"e-280":{"id":"e-280","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-24","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-24-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1675672020751},"e-341":{"id":"e-341","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-63","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-342"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-transition","originalId":"0382d51c-e55b-400c-93d0-718353679048","appliesTo":"CLASS"},"targets":[{"selector":".page-transition","originalId":"0382d51c-e55b-400c-93d0-718353679048","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676257806135},"e-343":{"id":"e-343","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-64","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-344"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676264290022},"e-420":{"id":"e-420","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-421"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722cef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722cef","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676498392948},"e-426":{"id":"e-426","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-68","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-427"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d1842067-9892-963b-3411-d6935f448cab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d1842067-9892-963b-3411-d6935f448cab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676500779876},"e-428":{"id":"e-428","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-429"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e483deaf-08e2-77b7-15c9-04a81e21e046","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e483deaf-08e2-77b7-15c9-04a81e21e046","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676501242046},"e-432":{"id":"e-432","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-21","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722cf1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722cf1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-21-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":94,"restingState":50},{"continuousParameterGroupId":"a-21-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":94,"restingState":50}],"createdOn":1676575620067},"e-433":{"id":"e-433","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-434"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d00","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d00","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676576069687},"e-435":{"id":"e-435","name":"","animationType":"preset","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-21","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d02","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d02","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-21-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":94,"restingState":50},{"continuousParameterGroupId":"a-21-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":94,"restingState":50}],"createdOn":1676576069687},"e-436":{"id":"e-436","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-437"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722cf1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722cf1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676578455265},"e-438":{"id":"e-438","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-439"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d21","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d21","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676584685631},"e-440":{"id":"e-440","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-71","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-441"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d23","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d23","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676584685631},"e-442":{"id":"e-442","name":"","animationType":"preset","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-21","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d23","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d23","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-21-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":94,"restingState":50},{"continuousParameterGroupId":"a-21-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":94,"restingState":50}],"createdOn":1676584685631},"e-443":{"id":"e-443","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-444"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d02","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d02","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676593686602},"e-445":{"id":"e-445","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-446"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d44","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d44","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676664485203},"e-447":{"id":"e-447","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-72","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-448"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d46","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d46","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676664485203},"e-449":{"id":"e-449","name":"","animationType":"preset","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-21","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d46","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d46","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-21-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":94,"restingState":50},{"continuousParameterGroupId":"a-21-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":94,"restingState":50}],"createdOn":1676664485203},"e-450":{"id":"e-450","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-451"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d5c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d5c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676666723021},"e-459":{"id":"e-459","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-460"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d6a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d6a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676767528150},"e-463":{"id":"e-463","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-464"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"73f92be5-4bb0-8b95-bbfd-3e65cc78968a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"73f92be5-4bb0-8b95-bbfd-3e65cc78968a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676873998052},"e-468":{"id":"e-468","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-467"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676927932347},"e-477":{"id":"e-477","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-63","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-478"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e483deaf-08e2-77b7-15c9-04a81e21e041","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e483deaf-08e2-77b7-15c9-04a81e21e041","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1676934243054},"e-491":{"id":"e-491","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-77","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-492"}},"mediaQueries":["main"],"target":{"selector":".cursor","originalId":"65c2286ce8952a148ef34f02|578b72d8-ddb1-fcc4-8358-73e16f132d5a","appliesTo":"CLASS"},"targets":[{"selector":".cursor","originalId":"65c2286ce8952a148ef34f02|578b72d8-ddb1-fcc4-8358-73e16f132d5a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677010940517},"e-492":{"id":"e-492","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-78","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-491"}},"mediaQueries":["main"],"target":{"selector":".cursor","originalId":"65c2286ce8952a148ef34f02|578b72d8-ddb1-fcc4-8358-73e16f132d5a","appliesTo":"CLASS"},"targets":[{"selector":".cursor","originalId":"65c2286ce8952a148ef34f02|578b72d8-ddb1-fcc4-8358-73e16f132d5a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677010940521},"e-493":{"id":"e-493","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-75","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"65c2286ce8952a148ef34f07","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-75-p","selectedAxis":"X_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":0,"restingState":50},{"continuousParameterGroupId":"a-75-p-2","selectedAxis":"Y_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":0,"restingState":50}],"createdOn":1677017023334},"e-494":{"id":"e-494","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-76","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"65c2286ce8952a148ef34f07","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-76-p","selectedAxis":"X_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":90,"restingState":50},{"continuousParameterGroupId":"a-76-p-2","selectedAxis":"Y_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":90,"restingState":50}],"createdOn":1677017038155},"e-495":{"id":"e-495","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-63","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-496"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3bf97273-acb5-e34e-2a9e-6fa2ad31e201","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf97273-acb5-e34e-2a9e-6fa2ad31e201","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677091189622},"e-497":{"id":"e-497","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-63","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-498"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3bf97273-acb5-e34e-2a9e-6fa2ad31e208","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3bf97273-acb5-e34e-2a9e-6fa2ad31e208","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677091208274},"e-538":{"id":"e-538","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-80","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"65c2286ce8952a148ef34f07","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-80-p","selectedAxis":"X_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":98,"restingState":50},{"continuousParameterGroupId":"a-80-p-2","selectedAxis":"Y_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":98,"restingState":50}],"createdOn":1677186846341},"e-543":{"id":"e-543","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-544"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|e58a5d44-1716-9672-7e90-c6fd64155066","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|e58a5d44-1716-9672-7e90-c6fd64155066","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677210513660},"e-545":{"id":"e-545","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-83","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-546"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|87e7325b-d321-ad7f-237a-83b00bc520ba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|87e7325b-d321-ad7f-237a-83b00bc520ba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677213829945},"e-547":{"id":"e-547","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-84","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-548"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677214244016},"e-549":{"id":"e-549","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-85","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-550"}},"mediaQueries":["main"],"target":{"selector":".hover-effect","originalId":"fb3817f9-ed1b-93d5-948b-c2f2fec2a1da","appliesTo":"CLASS"},"targets":[{"selector":".hover-effect","originalId":"fb3817f9-ed1b-93d5-948b-c2f2fec2a1da","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677221804593},"e-550":{"id":"e-550","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-86","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-549"}},"mediaQueries":["main"],"target":{"selector":".hover-effect","originalId":"fb3817f9-ed1b-93d5-948b-c2f2fec2a1da","appliesTo":"CLASS"},"targets":[{"selector":".hover-effect","originalId":"fb3817f9-ed1b-93d5-948b-c2f2fec2a1da","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677221804598},"e-551":{"id":"e-551","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-85","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-552"}},"mediaQueries":["main"],"target":{"id":"d1842067-9892-963b-3411-d6935f448cab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d1842067-9892-963b-3411-d6935f448cab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677222294696},"e-552":{"id":"e-552","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-86","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-551"}},"mediaQueries":["main"],"target":{"id":"d1842067-9892-963b-3411-d6935f448cab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d1842067-9892-963b-3411-d6935f448cab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677222294699},"e-553":{"id":"e-553","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-554"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|1d777848-41b1-eb68-9bbc-fa34a3742425","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|1d777848-41b1-eb68-9bbc-fa34a3742425","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677223222099},"e-555":{"id":"e-555","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-83","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-556"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|cdbd1d31-8127-c2cc-9f46-583aaf9666ef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|cdbd1d31-8127-c2cc-9f46-583aaf9666ef","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677223596538},"e-557":{"id":"e-557","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-83","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-558"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|022f6d24-7684-28cb-2b30-64e4bbd0617a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|022f6d24-7684-28cb-2b30-64e4bbd0617a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677376103063},"e-559":{"id":"e-559","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-87","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-560"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|a2961385-4442-e36b-4796-176bed3e77e2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|a2961385-4442-e36b-4796-176bed3e77e2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677459384897},"e-561":{"id":"e-561","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-88","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-562"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|a2961385-4442-e36b-4796-176bed3e77e2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|a2961385-4442-e36b-4796-176bed3e77e2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677460418264},"e-562":{"id":"e-562","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-89","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-561"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|a2961385-4442-e36b-4796-176bed3e77e2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|a2961385-4442-e36b-4796-176bed3e77e2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677460418270},"e-563":{"id":"e-563","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-87","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-564"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|f135212b-5fe9-1643-fbe6-dcd14eea3f88","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|f135212b-5fe9-1643-fbe6-dcd14eea3f88","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677463328448},"e-565":{"id":"e-565","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-88","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-566"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|f135212b-5fe9-1643-fbe6-dcd14eea3f88","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|f135212b-5fe9-1643-fbe6-dcd14eea3f88","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677463328448},"e-566":{"id":"e-566","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-89","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-565"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|f135212b-5fe9-1643-fbe6-dcd14eea3f88","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|f135212b-5fe9-1643-fbe6-dcd14eea3f88","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677463328448},"e-567":{"id":"e-567","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-87","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-568"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|bbe38d80-3b42-e90b-295d-4aab2fce1a66","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|bbe38d80-3b42-e90b-295d-4aab2fce1a66","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677463334701},"e-569":{"id":"e-569","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-88","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-570"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|bbe38d80-3b42-e90b-295d-4aab2fce1a66","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|bbe38d80-3b42-e90b-295d-4aab2fce1a66","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677463334701},"e-570":{"id":"e-570","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-89","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-569"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|bbe38d80-3b42-e90b-295d-4aab2fce1a66","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|bbe38d80-3b42-e90b-295d-4aab2fce1a66","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677463334701},"e-571":{"id":"e-571","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-87","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-572"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|2a326ca9-1075-bb5e-bd0c-be0701d7c568","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|2a326ca9-1075-bb5e-bd0c-be0701d7c568","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677463335273},"e-573":{"id":"e-573","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-88","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-574"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|2a326ca9-1075-bb5e-bd0c-be0701d7c568","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|2a326ca9-1075-bb5e-bd0c-be0701d7c568","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677463335273},"e-574":{"id":"e-574","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-89","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-573"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|2a326ca9-1075-bb5e-bd0c-be0701d7c568","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|2a326ca9-1075-bb5e-bd0c-be0701d7c568","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677463335273},"e-575":{"id":"e-575","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-87","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-576"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|c826e690-681d-a76c-de26-043465341fad","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|c826e690-681d-a76c-de26-043465341fad","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677463335899},"e-577":{"id":"e-577","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-88","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-578"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|c826e690-681d-a76c-de26-043465341fad","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|c826e690-681d-a76c-de26-043465341fad","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677463335899},"e-578":{"id":"e-578","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-89","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-577"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|c826e690-681d-a76c-de26-043465341fad","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|c826e690-681d-a76c-de26-043465341fad","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677463335899},"e-579":{"id":"e-579","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-580"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|d2ac2a5b-e289-d54f-02b1-f0f52f45c876","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|d2ac2a5b-e289-d54f-02b1-f0f52f45c876","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677510940696},"e-581":{"id":"e-581","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-37","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|8c84da71-76bb-9dd5-466b-99ec97cfbf29","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|8c84da71-76bb-9dd5-466b-99ec97cfbf29","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-37-p","smoothing":90,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1677511786469},"e-582":{"id":"e-582","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-583"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|67d14e14-7e45-b772-36e7-81e2e1cd61b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|67d14e14-7e45-b772-36e7-81e2e1cd61b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677515777150},"e-588":{"id":"e-588","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-83","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-589"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|de67ea69-285c-5736-cd04-d63b03db4783","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|de67ea69-285c-5736-cd04-d63b03db4783","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677517450941},"e-590":{"id":"e-590","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-591"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|67d14e14-7e45-b772-36e7-81e2e1cd61bd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|67d14e14-7e45-b772-36e7-81e2e1cd61bd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677517866964},"e-592":{"id":"e-592","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-593"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|67d14e14-7e45-b772-36e7-81e2e1cd61bd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|67d14e14-7e45-b772-36e7-81e2e1cd61bd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677518585751},"e-593":{"id":"e-593","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-592"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|67d14e14-7e45-b772-36e7-81e2e1cd61bd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|67d14e14-7e45-b772-36e7-81e2e1cd61bd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677518585756},"e-594":{"id":"e-594","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-595"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|08ac08ba-e4b2-492c-a09b-1b7276653c40","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|08ac08ba-e4b2-492c-a09b-1b7276653c40","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677518961712},"e-596":{"id":"e-596","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-597"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|08ac08ba-e4b2-492c-a09b-1b7276653c40","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|08ac08ba-e4b2-492c-a09b-1b7276653c40","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677518961712},"e-597":{"id":"e-597","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-596"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|08ac08ba-e4b2-492c-a09b-1b7276653c40","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|08ac08ba-e4b2-492c-a09b-1b7276653c40","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677518961712},"e-598":{"id":"e-598","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-599"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|ffb8a592-199e-e17e-8774-ba87f75de0cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|ffb8a592-199e-e17e-8774-ba87f75de0cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519001347},"e-599":{"id":"e-599","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-598"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|ffb8a592-199e-e17e-8774-ba87f75de0cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|ffb8a592-199e-e17e-8774-ba87f75de0cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519001347},"e-600":{"id":"e-600","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-601"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|ffb8a592-199e-e17e-8774-ba87f75de0cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|ffb8a592-199e-e17e-8774-ba87f75de0cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677519001347},"e-602":{"id":"e-602","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-603"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|294966da-684e-38e0-8b02-da3d6d257a48","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|294966da-684e-38e0-8b02-da3d6d257a48","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677519040322},"e-604":{"id":"e-604","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-605"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|294966da-684e-38e0-8b02-da3d6d257a48","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|294966da-684e-38e0-8b02-da3d6d257a48","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519040322},"e-605":{"id":"e-605","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-604"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|294966da-684e-38e0-8b02-da3d6d257a48","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|294966da-684e-38e0-8b02-da3d6d257a48","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519040322},"e-606":{"id":"e-606","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-607"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|5af29d46-2c63-a66a-a84a-2610262c6d88","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|5af29d46-2c63-a66a-a84a-2610262c6d88","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519068557},"e-607":{"id":"e-607","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-606"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|5af29d46-2c63-a66a-a84a-2610262c6d88","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|5af29d46-2c63-a66a-a84a-2610262c6d88","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519068557},"e-608":{"id":"e-608","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-609"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|5af29d46-2c63-a66a-a84a-2610262c6d88","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|5af29d46-2c63-a66a-a84a-2610262c6d88","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677519068557},"e-610":{"id":"e-610","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-611"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|429e2a2f-04dd-6cb1-e680-087692b89ece","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|429e2a2f-04dd-6cb1-e680-087692b89ece","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677519117557},"e-612":{"id":"e-612","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-613"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|429e2a2f-04dd-6cb1-e680-087692b89ece","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|429e2a2f-04dd-6cb1-e680-087692b89ece","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519117557},"e-613":{"id":"e-613","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-612"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|429e2a2f-04dd-6cb1-e680-087692b89ece","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|429e2a2f-04dd-6cb1-e680-087692b89ece","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519117557},"e-614":{"id":"e-614","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-615"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|a78528c0-36c3-3765-bd48-bda115be1a91","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|a78528c0-36c3-3765-bd48-bda115be1a91","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677519137913},"e-616":{"id":"e-616","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-617"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|a78528c0-36c3-3765-bd48-bda115be1a91","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|a78528c0-36c3-3765-bd48-bda115be1a91","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519137913},"e-617":{"id":"e-617","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-616"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|a78528c0-36c3-3765-bd48-bda115be1a91","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|a78528c0-36c3-3765-bd48-bda115be1a91","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519137913},"e-618":{"id":"e-618","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-619"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|c6cc8083-bedb-2f15-1b69-58fba2963241","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|c6cc8083-bedb-2f15-1b69-58fba2963241","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519164927},"e-619":{"id":"e-619","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-618"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|c6cc8083-bedb-2f15-1b69-58fba2963241","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|c6cc8083-bedb-2f15-1b69-58fba2963241","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519164927},"e-620":{"id":"e-620","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-621"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|c6cc8083-bedb-2f15-1b69-58fba2963241","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|c6cc8083-bedb-2f15-1b69-58fba2963241","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677519164927},"e-622":{"id":"e-622","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-623"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|c5afc7af-f687-48c1-ba2b-fe3b14c516ac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|c5afc7af-f687-48c1-ba2b-fe3b14c516ac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519193809},"e-623":{"id":"e-623","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-622"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|c5afc7af-f687-48c1-ba2b-fe3b14c516ac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|c5afc7af-f687-48c1-ba2b-fe3b14c516ac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519193809},"e-624":{"id":"e-624","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-625"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|c5afc7af-f687-48c1-ba2b-fe3b14c516ac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|c5afc7af-f687-48c1-ba2b-fe3b14c516ac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677519193809},"e-626":{"id":"e-626","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-627"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|8970c7ab-1b44-7840-0274-5facc3014192","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|8970c7ab-1b44-7840-0274-5facc3014192","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519220822},"e-627":{"id":"e-627","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-626"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|8970c7ab-1b44-7840-0274-5facc3014192","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|8970c7ab-1b44-7840-0274-5facc3014192","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519220822},"e-628":{"id":"e-628","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-629"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|8970c7ab-1b44-7840-0274-5facc3014192","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|8970c7ab-1b44-7840-0274-5facc3014192","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677519220822},"e-630":{"id":"e-630","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-631"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|83ab8eab-4e3c-249d-297a-1da970d2c712","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|83ab8eab-4e3c-249d-297a-1da970d2c712","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519241347},"e-631":{"id":"e-631","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-630"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|83ab8eab-4e3c-249d-297a-1da970d2c712","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|83ab8eab-4e3c-249d-297a-1da970d2c712","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519241347},"e-632":{"id":"e-632","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-633"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|83ab8eab-4e3c-249d-297a-1da970d2c712","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|83ab8eab-4e3c-249d-297a-1da970d2c712","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677519241347},"e-634":{"id":"e-634","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-635"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|c79b212d-f87e-4719-01e4-b2aaf9fd0500","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|c79b212d-f87e-4719-01e4-b2aaf9fd0500","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519268569},"e-635":{"id":"e-635","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-634"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|c79b212d-f87e-4719-01e4-b2aaf9fd0500","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|c79b212d-f87e-4719-01e4-b2aaf9fd0500","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519268569},"e-636":{"id":"e-636","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-637"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|c79b212d-f87e-4719-01e4-b2aaf9fd0500","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|c79b212d-f87e-4719-01e4-b2aaf9fd0500","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677519268569},"e-638":{"id":"e-638","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-639"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|8801eeeb-100f-ce47-6e3a-4d551f074213","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|8801eeeb-100f-ce47-6e3a-4d551f074213","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677519298879},"e-640":{"id":"e-640","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-641"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|8801eeeb-100f-ce47-6e3a-4d551f074213","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|8801eeeb-100f-ce47-6e3a-4d551f074213","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519298879},"e-641":{"id":"e-641","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-640"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|8801eeeb-100f-ce47-6e3a-4d551f074213","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|8801eeeb-100f-ce47-6e3a-4d551f074213","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519298879},"e-642":{"id":"e-642","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-643"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|d22e3dfe-fc56-8ba6-ec40-4fd337d5f556","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|d22e3dfe-fc56-8ba6-ec40-4fd337d5f556","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677519329357},"e-644":{"id":"e-644","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-645"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|d22e3dfe-fc56-8ba6-ec40-4fd337d5f556","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|d22e3dfe-fc56-8ba6-ec40-4fd337d5f556","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519329357},"e-645":{"id":"e-645","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-644"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|d22e3dfe-fc56-8ba6-ec40-4fd337d5f556","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|d22e3dfe-fc56-8ba6-ec40-4fd337d5f556","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677519329357},"e-646":{"id":"e-646","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-647"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|2894d2ea-c503-40a2-0901-248f33ae1dc2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|2894d2ea-c503-40a2-0901-248f33ae1dc2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677519606456},"e-648":{"id":"e-648","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-83","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-649"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|359f9a1b-24b3-541d-b99e-0003def2199b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|359f9a1b-24b3-541d-b99e-0003def2199b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677519609656},"e-650":{"id":"e-650","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-651"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|a6c1fafa-6ee1-5416-393e-c85ee52d7c1d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|a6c1fafa-6ee1-5416-393e-c85ee52d7c1d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677520157843},"e-651":{"id":"e-651","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-650"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|a6c1fafa-6ee1-5416-393e-c85ee52d7c1d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|a6c1fafa-6ee1-5416-393e-c85ee52d7c1d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677520157843},"e-652":{"id":"e-652","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-653"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|a6c1fafa-6ee1-5416-393e-c85ee52d7c1d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|a6c1fafa-6ee1-5416-393e-c85ee52d7c1d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1677520157843},"e-656":{"id":"e-656","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-657"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"61a02dd6-d024-3dca-16cd-86512091270f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"61a02dd6-d024-3dca-16cd-86512091270f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677525623552},"e-657":{"id":"e-657","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-93","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-656"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"61a02dd6-d024-3dca-16cd-86512091270f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"61a02dd6-d024-3dca-16cd-86512091270f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677525623557},"e-658":{"id":"e-658","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-659"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dd8c49bc-cd90-8c0c-a0f6-f1a7eefb8337","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dd8c49bc-cd90-8c0c-a0f6-f1a7eefb8337","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677527030625},"e-659":{"id":"e-659","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-658"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dd8c49bc-cd90-8c0c-a0f6-f1a7eefb8337","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dd8c49bc-cd90-8c0c-a0f6-f1a7eefb8337","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677527030625},"e-660":{"id":"e-660","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-79","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-79-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1677628985486},"e-661":{"id":"e-661","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-75","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-75-p","selectedAxis":"X_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":50,"restingState":50},{"continuousParameterGroupId":"a-75-p-2","selectedAxis":"Y_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":50,"restingState":50}],"createdOn":1677629556014},"e-662":{"id":"e-662","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-76","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-76-p","selectedAxis":"X_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":92,"restingState":50},{"continuousParameterGroupId":"a-76-p-2","selectedAxis":"Y_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":92,"restingState":50}],"createdOn":1677629644106},"e-663":{"id":"e-663","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-85","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-664"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8c1d2cce-f1ab-7e94-e9c8-2e6db95c1da7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8c1d2cce-f1ab-7e94-e9c8-2e6db95c1da7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677961688183},"e-664":{"id":"e-664","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-86","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-663"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8c1d2cce-f1ab-7e94-e9c8-2e6db95c1da7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8c1d2cce-f1ab-7e94-e9c8-2e6db95c1da7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677961688186},"e-665":{"id":"e-665","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-85","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-666"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d2e31283-fe98-d0e0-78e0-92db74e9516d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d2e31283-fe98-d0e0-78e0-92db74e9516d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677961801964},"e-666":{"id":"e-666","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-86","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-665"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d2e31283-fe98-d0e0-78e0-92db74e9516d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d2e31283-fe98-d0e0-78e0-92db74e9516d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677961801967},"e-667":{"id":"e-667","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-85","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-668"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8c1d2cce-f1ab-7e94-e9c8-2e6db95c1daf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8c1d2cce-f1ab-7e94-e9c8-2e6db95c1daf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677965646926},"e-668":{"id":"e-668","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-86","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-667"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8c1d2cce-f1ab-7e94-e9c8-2e6db95c1daf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8c1d2cce-f1ab-7e94-e9c8-2e6db95c1daf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677965646929},"e-671":{"id":"e-671","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-65","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-672"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d1842067-9892-963b-3411-d6935f448cab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d1842067-9892-963b-3411-d6935f448cab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1677992017048},"e-673":{"id":"e-673","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-63","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-674"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|a2961385-4442-e36b-4796-176bed3e77e2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|a2961385-4442-e36b-4796-176bed3e77e2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1678044168870},"e-676":{"id":"e-676","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-675"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1678046168596},"e-677":{"id":"e-677","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-678"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07|21a7acd1-8482-3a92-8d42-5f4e9d65a933","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07|21a7acd1-8482-3a92-8d42-5f4e9d65a933","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678069691627},"e-684":{"id":"e-684","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-81","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-683"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1678071184161},"e-687":{"id":"e-687","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-688"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07|56f48bc4-4fc6-5a0c-29fd-76a734d9d6ab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07|56f48bc4-4fc6-5a0c-29fd-76a734d9d6ab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678077248319},"e-689":{"id":"e-689","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-690"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07|1a6afc8b-fe8e-f221-d950-331a683706a4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07|1a6afc8b-fe8e-f221-d950-331a683706a4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678077584383},"e-691":{"id":"e-691","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-692"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07|5c23c5ad-4916-406a-e7ce-501837d922f2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07|5c23c5ad-4916-406a-e7ce-501837d922f2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678077625281},"e-693":{"id":"e-693","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-694"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07|367c3de2-01bd-f842-c8af-cae6a1bb51ea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07|367c3de2-01bd-f842-c8af-cae6a1bb51ea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678077653688},"e-695":{"id":"e-695","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-696"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07|4514826b-9fda-b60d-a6c1-cb839f896335","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07|4514826b-9fda-b60d-a6c1-cb839f896335","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678078933864},"e-697":{"id":"e-697","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-698"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07|e5d09d26-0d2f-25df-c53a-79c641779f0a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07|e5d09d26-0d2f-25df-c53a-79c641779f0a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678217423197},"e-699":{"id":"e-699","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-700"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07|937a1eba-9bab-0017-e517-31063f7ad498","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07|937a1eba-9bab-0017-e517-31063f7ad498","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678217873059},"e-701":{"id":"e-701","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-702"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07|d591c1dc-4403-1622-062b-eb0f4d0cde72","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07|d591c1dc-4403-1622-062b-eb0f4d0cde72","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678217906000},"e-703":{"id":"e-703","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-704"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07|16cb53f8-798e-da2c-096f-62ee07117194","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07|16cb53f8-798e-da2c-096f-62ee07117194","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678217919505},"e-705":{"id":"e-705","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-99","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-706"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07|e5d09d26-0d2f-25df-c53a-79c641779f0b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07|e5d09d26-0d2f-25df-c53a-79c641779f0b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678218491806},"e-707":{"id":"e-707","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-99","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-708"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07|54cefe31-64d2-f9c2-effd-4bba51c959dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07|54cefe31-64d2-f9c2-effd-4bba51c959dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678219061659},"e-709":{"id":"e-709","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-99","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-710"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07|b37bbada-359c-1dad-4f2a-9192af12f3d8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07|b37bbada-359c-1dad-4f2a-9192af12f3d8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678219134231},"e-711":{"id":"e-711","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-99","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-712"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07|5cac4773-0855-6cf9-9e48-98b93a7fa4d3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07|5cac4773-0855-6cf9-9e48-98b93a7fa4d3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678219150599},"e-713":{"id":"e-713","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-99","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-714"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07|002b4118-b45f-85bd-ff77-efd4c9ad8be5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07|002b4118-b45f-85bd-ff77-efd4c9ad8be5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678219284899},"e-715":{"id":"e-715","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-716"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f07|24cc349f-6230-50c3-caa1-200122abe191","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f07|24cc349f-6230-50c3-caa1-200122abe191","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678222403017},"e-717":{"id":"e-717","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-718"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|0a0a110c-ea96-8307-8667-84b1257f4b4d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|0a0a110c-ea96-8307-8667-84b1257f4b4d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678225014010},"e-719":{"id":"e-719","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-30","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|65e79de5-ae4e-2a41-cb88-a5453cbcb3af","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|65e79de5-ae4e-2a41-cb88-a5453cbcb3af","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-30-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1678225560352},"e-722":{"id":"e-722","name":"","animationType":"preset","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-100","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f04","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-100-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1678300977689},"e-726":{"id":"e-726","name":"","animationType":"preset","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-725"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f04","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1678300977689},"e-727":{"id":"e-727","name":"","animationType":"preset","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-75","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"65c2286ce8952a148ef34f04","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-75-p","selectedAxis":"X_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":0,"restingState":50},{"continuousParameterGroupId":"a-75-p-2","selectedAxis":"Y_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":0,"restingState":50}],"createdOn":1678300977689},"e-728":{"id":"e-728","name":"","animationType":"preset","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-76","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"65c2286ce8952a148ef34f04","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-76-p","selectedAxis":"X_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":90,"restingState":50},{"continuousParameterGroupId":"a-76-p-2","selectedAxis":"Y_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":90,"restingState":50}],"createdOn":1678300977689},"e-733":{"id":"e-733","name":"","animationType":"preset","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-81","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-732"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f04","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1678300977689},"e-764":{"id":"e-764","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-765"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f04|71b62cdd-4887-f10e-897b-aaf6e455b850","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04|71b62cdd-4887-f10e-897b-aaf6e455b850","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678304934099},"e-769":{"id":"e-769","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-770"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f04|ac4c6871-db7b-44e0-6fa6-fd79bd793c57","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04|ac4c6871-db7b-44e0-6fa6-fd79bd793c57","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678307691656},"e-771":{"id":"e-771","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-772"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f04|011a06ce-ab72-6faf-d0e0-603869474fdf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04|011a06ce-ab72-6faf-d0e0-603869474fdf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678308507097},"e-773":{"id":"e-773","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-774"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f04|011a06ce-ab72-6faf-d0e0-603869474fe0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04|011a06ce-ab72-6faf-d0e0-603869474fe0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678308507097},"e-775":{"id":"e-775","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-776"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f04|c42ee8c0-f11b-c19c-cd14-127c89997ef1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04|c42ee8c0-f11b-c19c-cd14-127c89997ef1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678310867095},"e-777":{"id":"e-777","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-778"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f04|c42ee8c0-f11b-c19c-cd14-127c89997ef2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04|c42ee8c0-f11b-c19c-cd14-127c89997ef2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678310867095},"e-779":{"id":"e-779","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-780"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f04|a61d3e90-9679-e1fd-8c19-0674959d0a40","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04|a61d3e90-9679-e1fd-8c19-0674959d0a40","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678311251524},"e-781":{"id":"e-781","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-782"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f04|a61d3e90-9679-e1fd-8c19-0674959d0a41","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04|a61d3e90-9679-e1fd-8c19-0674959d0a41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678311251524},"e-783":{"id":"e-783","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-784"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f04|79bd5103-4383-18c2-8a47-ff4008b6cd4d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04|79bd5103-4383-18c2-8a47-ff4008b6cd4d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678311596076},"e-785":{"id":"e-785","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-786"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f04|79bd5103-4383-18c2-8a47-ff4008b6cd4e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04|79bd5103-4383-18c2-8a47-ff4008b6cd4e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1678311596076},"e-787":{"id":"e-787","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-788"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f04","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1678313480512},"e-789":{"id":"e-789","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-63","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-790"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|f135212b-5fe9-1643-fbe6-dcd14eea3f88","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|f135212b-5fe9-1643-fbe6-dcd14eea3f88","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1678317598924},"e-791":{"id":"e-791","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-63","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-792"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|c826e690-681d-a76c-de26-043465341fad","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|c826e690-681d-a76c-de26-043465341fad","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1678317624369},"e-793":{"id":"e-793","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-63","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-794"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|2a326ca9-1075-bb5e-bd0c-be0701d7c568","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|2a326ca9-1075-bb5e-bd0c-be0701d7c568","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1678317642892},"e-795":{"id":"e-795","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-63","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-796"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|bbe38d80-3b42-e90b-295d-4aab2fce1a66","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|bbe38d80-3b42-e90b-295d-4aab2fce1a66","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1678317653713},"e-797":{"id":"e-797","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-53","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"65c2286ce8952a148ef34f04","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-53-p","selectedAxis":"X_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":96,"restingState":50},{"continuousParameterGroupId":"a-53-p-2","selectedAxis":"Y_AXIS","basedOn":"VIEWPORT","reverse":false,"smoothing":96,"restingState":50}],"createdOn":1680977416476},"e-798":{"id":"e-798","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-55","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34f04|e70252ff-2808-975e-272a-0b04a5a5bf7d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34f04|e70252ff-2808-975e-272a-0b04a5a5bf7d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-55-p","smoothing":90,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1680978250540},"e-799":{"id":"e-799","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-21","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"4235083c-32e3-be3e-b102-d8bc45b7c188","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4235083c-32e3-be3e-b102-d8bc45b7c188","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-21-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":94,"restingState":50},{"continuousParameterGroupId":"a-21-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":94,"restingState":50}],"createdOn":1684466673208},"e-800":{"id":"e-800","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-801"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d5f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0dd1a6e-b069-f5dc-54e5-b27931722d5f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684467032511},"e-802":{"id":"e-802","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-803"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c2286ce8952a148ef34efd|46ef1bb7-dda3-62ff-ba87-cd7c4fbaa8d1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c2286ce8952a148ef34efd|46ef1bb7-dda3-62ff-ba87-cd7c4fbaa8d1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686019531089}},"actionLists":{"a-4":{"id":"a-4","title":"99 GLOBAL - CLICK - HAMBURGER LINES","actionItemGroups":[{"actionItems":[{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":800,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line-2","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e968c"]},"yValue":-3,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-4-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":800,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line-1","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9697"]},"yValue":3,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-4-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":200,"easing":[0.86,0,0.07,1],"duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line-1","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9697"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":200,"easing":[0.86,0,0.07,1],"duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line-2","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e968c"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1673287731848},"a-7":{"id":"a-7","title":"99 GLOBAL - CLICK 2 - HAMBURGER LINES","actionItemGroups":[{"actionItems":[{"id":"a-7-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line-1","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9697"]},"yValue":3,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line-2","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e968c"]},"yValue":-3,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-11","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line-1","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9697"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-12","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line-2","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e968c"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-7-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line-1","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9697"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line-2","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e968c"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-7-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":[0.86,0,0.07,1],"duration":800,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line-1","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9697"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":[0.86,0,0.07,1],"duration":800,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line-2","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e968c"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1673289123150},"a":{"id":"a","title":"99 GLOBAL - CLICK - MENU DESKTOP OPEN","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu","selectorGuids":["1c8d1c17-cac3-e036-716f-c7d87c652e0f"]},"heightValue":0,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-n-12","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu-bg","selectorGuids":["a4650a2e-8b7e-465e-8ce9-8fd3aa8fea0d"]},"heightValue":0,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu-middle-line","selectorGuids":["6b51afc0-d1bc-e2be-344c-26215a43aa7b"]},"heightValue":0,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-n-20","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":500,"target":{"selector":".wrap-menu-button","selectorGuids":["802ff336-7bc4-6377-77cb-41a17d70948c"]},"widthValue":50,"heightValue":50,"widthUnit":"px","heightUnit":"px","locked":true}},{"id":"a-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".wrap-menu-button-text","selectorGuids":["41d5e986-2161-cde8-a53a-8ac45bae399c"]},"value":0,"unit":""}},{"id":"a-n-22","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".email-field-wrap.in-menu","selectorGuids":["951b85fb-26ee-b582-874d-7febca48dc55","4f1850b6-5731-f864-a391-c7ebdf538330"]},"xValue":-101,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".phone-field-wrap.in-menu","selectorGuids":["f6e29ad3-6805-2100-ffe6-b95e25b631e4","083fc781-b8c6-7872-3519-34b99e646467"]},"xValue":101,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":1500,"target":{"selector":".menu","selectorGuids":["1c8d1c17-cac3-e036-716f-c7d87c652e0f"]},"heightValue":100,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-n-13","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":2000,"target":{"selector":".menu-bg","selectorGuids":["a4650a2e-8b7e-465e-8ce9-8fd3aa8fea0d"]},"heightValue":100,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":500,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"selector":".menu-middle-line","selectorGuids":["6b51afc0-d1bc-e2be-344c-26215a43aa7b"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-n-21","actionTypeId":"STYLE_SIZE","config":{"delay":1000,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"selector":".wrap-menu-button","selectorGuids":["802ff336-7bc4-6377-77cb-41a17d70948c"]},"widthValue":500,"heightValue":500,"widthUnit":"px","heightUnit":"px","locked":true}},{"id":"a-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":2500,"easing":[0.25,0.25,0.75,0.75],"duration":600,"target":{"selector":".wrap-menu-button-text","selectorGuids":["41d5e986-2161-cde8-a53a-8ac45bae399c"]},"value":1,"unit":""}},{"id":"a-n-24","actionTypeId":"TRANSFORM_MOVE","config":{"delay":3000,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".email-field-wrap.in-menu","selectorGuids":["951b85fb-26ee-b582-874d-7febca48dc55","4f1850b6-5731-f864-a391-c7ebdf538330"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":3000,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".phone-field-wrap.in-menu","selectorGuids":["f6e29ad3-6805-2100-ffe6-b95e25b631e4","083fc781-b8c6-7872-3519-34b99e646467"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673384021432},"a-96":{"id":"a-96","title":"99 GLOBAL - CLICK 2 - MENU DESKTOP CLOSE","actionItemGroups":[{"actionItems":[{"id":"a-96-n-10","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":2000,"target":{"selector":".menu-middle-line","selectorGuids":["6b51afc0-d1bc-e2be-344c-26215a43aa7b"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-96-n-11","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":2000,"target":{"selector":".wrap-menu-button","selectorGuids":["802ff336-7bc4-6377-77cb-41a17d70948c"]},"widthValue":50,"heightValue":50,"widthUnit":"px","heightUnit":"px","locked":true}},{"id":"a-96-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":[0.25,0.25,0.75,0.75],"duration":500,"target":{"selector":".wrap-menu-button-text","selectorGuids":["41d5e986-2161-cde8-a53a-8ac45bae399c"]},"value":0,"unit":""}},{"id":"a-96-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.215,0.61,0.355,1],"duration":2000,"target":{"selector":".email-field-wrap.in-menu","selectorGuids":["951b85fb-26ee-b582-874d-7febca48dc55","4f1850b6-5731-f864-a391-c7ebdf538330"]},"xValue":-101,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-96-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.215,0.61,0.355,1],"duration":2000,"target":{"selector":".phone-field-wrap.in-menu","selectorGuids":["f6e29ad3-6805-2100-ffe6-b95e25b631e4","083fc781-b8c6-7872-3519-34b99e646467"]},"xValue":101,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-96-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":500,"easing":[0.86,0,0.07,1],"duration":2000,"target":{"selector":".menu","selectorGuids":["1c8d1c17-cac3-e036-716f-c7d87c652e0f"]},"heightValue":0,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-96-n-9","actionTypeId":"STYLE_SIZE","config":{"delay":500,"easing":[0.86,0,0.07,1],"duration":1500,"target":{"selector":".menu-bg","selectorGuids":["a4650a2e-8b7e-465e-8ce9-8fd3aa8fea0d"]},"heightValue":0,"widthUnit":"PX","heightUnit":"vh","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1673384021432},"a-12":{"id":"a-12","title":"99 GLOBAL - ON SCROLL - LOOP MENU BUTTONS TEXT LOOP","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu-button-text","selectorGuids":["802ff336-7bc4-6377-77cb-41a17d70948f"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-12-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"selector":".menu-button-text","selectorGuids":["802ff336-7bc4-6377-77cb-41a17d70948f"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-12-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"selector":".menu-button-text","selectorGuids":["802ff336-7bc4-6377-77cb-41a17d70948f"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673643057285},"a-97":{"id":"a-97","title":"99 GLOBAL - CLICK - MENU T/P OPEN","actionItemGroups":[{"actionItems":[{"id":"a-97-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu","selectorGuids":["1c8d1c17-cac3-e036-716f-c7d87c652e0f"]},"heightValue":0,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-97-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu-bg","selectorGuids":["a4650a2e-8b7e-465e-8ce9-8fd3aa8fea0d"]},"heightValue":0,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-97-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu-middle-line","selectorGuids":["6b51afc0-d1bc-e2be-344c-26215a43aa7b"]},"heightValue":0,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-97-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":500,"target":{"selector":".wrap-menu-button","selectorGuids":["802ff336-7bc4-6377-77cb-41a17d70948c"]},"widthValue":50,"heightValue":50,"widthUnit":"px","heightUnit":"px","locked":true}},{"id":"a-97-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".wrap-menu-button-text","selectorGuids":["41d5e986-2161-cde8-a53a-8ac45bae399c"]},"value":0,"unit":""}},{"id":"a-97-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".email-field-wrap.in-menu","selectorGuids":["951b85fb-26ee-b582-874d-7febca48dc55","4f1850b6-5731-f864-a391-c7ebdf538330"]},"xValue":-101,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-97-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".phone-field-wrap.in-menu","selectorGuids":["f6e29ad3-6805-2100-ffe6-b95e25b631e4","083fc781-b8c6-7872-3519-34b99e646467"]},"xValue":101,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-97-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":1500,"target":{"selector":".menu","selectorGuids":["1c8d1c17-cac3-e036-716f-c7d87c652e0f"]},"heightValue":100,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-97-n-9","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":2000,"target":{"selector":".menu-bg","selectorGuids":["a4650a2e-8b7e-465e-8ce9-8fd3aa8fea0d"]},"heightValue":100,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-97-n-10","actionTypeId":"STYLE_SIZE","config":{"delay":500,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"selector":".menu-middle-line","selectorGuids":["6b51afc0-d1bc-e2be-344c-26215a43aa7b"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-97-n-11","actionTypeId":"STYLE_SIZE","config":{"delay":1000,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"selector":".wrap-menu-button","selectorGuids":["802ff336-7bc4-6377-77cb-41a17d70948c"]},"widthValue":300,"heightValue":300,"widthUnit":"px","heightUnit":"px","locked":true}},{"id":"a-97-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":2500,"easing":[0.25,0.25,0.75,0.75],"duration":600,"target":{"selector":".wrap-menu-button-text","selectorGuids":["41d5e986-2161-cde8-a53a-8ac45bae399c"]},"value":1,"unit":""}},{"id":"a-97-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":3000,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".email-field-wrap.in-menu","selectorGuids":["951b85fb-26ee-b582-874d-7febca48dc55","4f1850b6-5731-f864-a391-c7ebdf538330"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-97-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":3000,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".phone-field-wrap.in-menu","selectorGuids":["f6e29ad3-6805-2100-ffe6-b95e25b631e4","083fc781-b8c6-7872-3519-34b99e646467"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673384021432},"a-98":{"id":"a-98","title":"99 GLOBAL - CLICK 2 - MENU T/P OPEN","actionItemGroups":[{"actionItems":[{"id":"a-98-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":2000,"target":{"selector":".menu-middle-line","selectorGuids":["6b51afc0-d1bc-e2be-344c-26215a43aa7b"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-98-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":2000,"target":{"selector":".wrap-menu-button","selectorGuids":["802ff336-7bc4-6377-77cb-41a17d70948c"]},"widthValue":50,"heightValue":50,"widthUnit":"px","heightUnit":"px","locked":true}},{"id":"a-98-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":[0.25,0.25,0.75,0.75],"duration":500,"target":{"selector":".wrap-menu-button-text","selectorGuids":["41d5e986-2161-cde8-a53a-8ac45bae399c"]},"value":0,"unit":""}},{"id":"a-98-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.215,0.61,0.355,1],"duration":2000,"target":{"selector":".email-field-wrap.in-menu","selectorGuids":["951b85fb-26ee-b582-874d-7febca48dc55","4f1850b6-5731-f864-a391-c7ebdf538330"]},"xValue":-101,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-98-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.215,0.61,0.355,1],"duration":2000,"target":{"selector":".phone-field-wrap.in-menu","selectorGuids":["f6e29ad3-6805-2100-ffe6-b95e25b631e4","083fc781-b8c6-7872-3519-34b99e646467"]},"xValue":101,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-98-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":500,"easing":[0.86,0,0.07,1],"duration":2000,"target":{"selector":".menu","selectorGuids":["1c8d1c17-cac3-e036-716f-c7d87c652e0f"]},"heightValue":0,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-98-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":500,"easing":[0.86,0,0.07,1],"duration":1500,"target":{"selector":".menu-bg","selectorGuids":["a4650a2e-8b7e-465e-8ce9-8fd3aa8fea0d"]},"heightValue":0,"widthUnit":"PX","heightUnit":"vh","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1673384021432},"a-21":{"id":"a-21","title":"MAGNETIC MENU BUTTONS","continuousParameterGroups":[{"id":"a-21-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-21-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"3bf97273-acb5-e34e-2a9e-6fa2ad31e201"},"xValue":-50,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-21-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"3bf97273-acb5-e34e-2a9e-6fa2ad31e201"},"xValue":50,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}]},{"id":"a-21-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-21-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"3bf97273-acb5-e34e-2a9e-6fa2ad31e201"},"yValue":-50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-21-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"3bf97273-acb5-e34e-2a9e-6fa2ad31e201"},"yValue":50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}]}],"createdOn":1673818916492},"a-50":{"id":"a-50","title":"99 GLOBAL - ON SCROLL - FOOTER - DESK/TABLET","actionItemGroups":[{"actionItems":[{"id":"a-50-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-center-line","selectorGuids":["419caa75-05b0-1d69-d257-1a6aea27c81e"]},"heightValue":0,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-50-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":1500,"target":{"useEventTarget":"SIBLINGS","selector":".footer-frame-line-top","selectorGuids":["f281e01a-e9a6-61e8-e177-591f1c77f03a"]},"widthValue":0,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-50-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-frame-line-left","selectorGuids":["6e4db770-d01b-69b6-596d-d4d53fc1414f"]},"heightValue":0,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-50-n-9","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-frame-line-right","selectorGuids":["d399c0bc-5d61-9e8f-0ea3-a1263171bdaa"]},"heightValue":0,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-50-n-10","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"useEventTarget":"SIBLINGS","selector":".footer-frame-line-bottom","selectorGuids":["b06fb0e4-f41a-1e91-9965-5b451ed94e4f"]},"widthValue":0,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-50-n-60","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".footer-us-text","selectorGuids":["89771819-9f6c-3e5e-00f9-298520bfde99"]},"yValue":25,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-50-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1","selectorGuids":["5edf6519-d03d-4e99-bffd-a5a879f0cb41"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-50-n-12","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1","selectorGuids":["5edf6519-d03d-4e99-bffd-a5a879f0cb41"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-50-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1","selectorGuids":["5edf6519-d03d-4e99-bffd-a5a879f0cb41"]},"value":0,"unit":""}},{"id":"a-50-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1-1","selectorGuids":["feb35ad2-220b-c53a-5fb4-5382f6121dd5"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-50-n-15","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1-1","selectorGuids":["feb35ad2-220b-c53a-5fb4-5382f6121dd5"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-50-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1-1","selectorGuids":["feb35ad2-220b-c53a-5fb4-5382f6121dd5"]},"value":0,"unit":""}},{"id":"a-50-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1-2","selectorGuids":["1b098fa7-1e9a-a38e-9847-3f15e66eee42"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-50-n-18","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1-2","selectorGuids":["1b098fa7-1e9a-a38e-9847-3f15e66eee42"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-50-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1-2","selectorGuids":["1b098fa7-1e9a-a38e-9847-3f15e66eee42"]},"value":0,"unit":""}},{"id":"a-50-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1250,"target":{"selector":".paragraph.footer-paragraph","selectorGuids":["a7217e76-e412-bc97-15ee-b27a7f1bc7e1","5af514ab-c4fb-24aa-5b1c-7b95cd0f1cef"]},"value":0,"unit":""}},{"id":"a-50-n-64","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".paragraph-white-part","selectorGuids":["597e8b83-4ada-b0ea-8230-fb89074298d4"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}},{"id":"a-50-n-66","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".footer-link-dot","selectorGuids":["fff3a311-62ae-ab8f-b7db-8c8109dab924"]},"value":0,"unit":""}},{"id":"a-50-n-68","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".footer-link-dot-2","selectorGuids":["759ef13e-443d-3cfb-c65a-79dd8cd35da6"]},"value":0,"unit":""}},{"id":"a-50-n-70","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-email-text.hover-effect-text","selectorGuids":["d4626466-65c4-59a6-ca72-bdd57d50bb6f","dfdbbaa1-6e22-b079-9165-c0cb4181d754"]},"yValue":15,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-50-n-73","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-phone-text.hover-effect-text","selectorGuids":["8ab5ba14-e2e2-641a-aeb5-773577812a9b","1cd0407d-9fd9-3363-87a8-3b2c1f791cf0"]},"yValue":15,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-50-n-57","actionTypeId":"TRANSFORM_MOVE","config":{"delay":250,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".footer-we-text","selectorGuids":["f039d900-72ad-06fe-0b31-03833865ade6"]},"xValue":-120,"yValue":null,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-50-n-26","actionTypeId":"TRANSFORM_MOVE","config":{"delay":250,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".footer-circle-left-wrap","selectorGuids":["f742a92a-4dc2-6c20-d894-b01f40740cad"]},"xValue":83,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-50-n-28","actionTypeId":"TRANSFORM_MOVE","config":{"delay":250,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".footer-circle-right-wrap","selectorGuids":["3ae85fa2-64e3-1166-c6a8-fbc87d540ef3"]},"xValue":-83,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-50-n-58","actionTypeId":"TRANSFORM_MOVE","config":{"delay":250,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".footer-you-text","selectorGuids":["66afa1ba-8b77-5678-de57-6c0dc7f76de5"]},"xValue":120,"yValue":null,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-50-n-30","actionTypeId":"GENERAL_DISPLAY","config":{"delay":2500,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".footer-circle-center-wrap","selectorGuids":["e0c033f7-b265-41bb-6c33-3d36595d8692"]},"value":"flex"}},{"id":"a-50-n-59","actionTypeId":"TRANSFORM_MOVE","config":{"delay":2500,"easing":[0.23,1,0.32,1],"duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".footer-us-text","selectorGuids":["89771819-9f6c-3e5e-00f9-298520bfde99"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-50-n-61","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".footer-us-text","selectorGuids":["89771819-9f6c-3e5e-00f9-298520bfde99"]},"yValue":-25,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-50-n-33","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.455,0.03,0.515,0.955],"duration":2000,"target":{"selector":".footer-center-line","selectorGuids":["419caa75-05b0-1d69-d257-1a6aea27c81e"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-50-n-34","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"useEventTarget":"SIBLINGS","selector":".footer-frame-line-top","selectorGuids":["f281e01a-e9a6-61e8-e177-591f1c77f03a"]},"widthValue":100,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-50-n-35","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"selector":".footer-frame-line-right","selectorGuids":["d399c0bc-5d61-9e8f-0ea3-a1263171bdaa"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-50-n-36","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"selector":".footer-frame-line-left","selectorGuids":["6e4db770-d01b-69b6-596d-d4d53fc1414f"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-50-n-37","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"useEventTarget":"SIBLINGS","selector":".footer-frame-line-bottom","selectorGuids":["b06fb0e4-f41a-1e91-9965-5b451ed94e4f"]},"widthValue":100,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-50-n-38","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".footer-heading-1","selectorGuids":["5edf6519-d03d-4e99-bffd-a5a879f0cb41"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-50-n-39","actionTypeId":"TRANSFORM_SKEW","config":{"delay":1000,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".footer-heading-1","selectorGuids":["5edf6519-d03d-4e99-bffd-a5a879f0cb41"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-50-n-40","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":[0.25,0.25,0.75,0.75],"duration":2500,"target":{"selector":".footer-heading-1","selectorGuids":["5edf6519-d03d-4e99-bffd-a5a879f0cb41"]},"value":1,"unit":""}},{"id":"a-50-n-43","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1200,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".footer-heading-1-1","selectorGuids":["feb35ad2-220b-c53a-5fb4-5382f6121dd5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-50-n-42","actionTypeId":"TRANSFORM_SKEW","config":{"delay":1200,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".footer-heading-1-1","selectorGuids":["feb35ad2-220b-c53a-5fb4-5382f6121dd5"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-50-n-41","actionTypeId":"STYLE_OPACITY","config":{"delay":1200,"easing":"","duration":2500,"target":{"selector":".footer-heading-1-1","selectorGuids":["feb35ad2-220b-c53a-5fb4-5382f6121dd5"]},"value":1,"unit":""}},{"id":"a-50-n-44","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1400,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".footer-heading-1-2","selectorGuids":["1b098fa7-1e9a-a38e-9847-3f15e66eee42"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-50-n-45","actionTypeId":"TRANSFORM_SKEW","config":{"delay":1400,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".footer-heading-1-2","selectorGuids":["1b098fa7-1e9a-a38e-9847-3f15e66eee42"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-50-n-46","actionTypeId":"STYLE_OPACITY","config":{"delay":1400,"easing":"","duration":2500,"target":{"selector":".footer-heading-1-2","selectorGuids":["1b098fa7-1e9a-a38e-9847-3f15e66eee42"]},"value":1,"unit":""}},{"id":"a-50-n-49","actionTypeId":"STYLE_OPACITY","config":{"delay":1500,"easing":"","duration":2500,"target":{"selector":".paragraph.footer-paragraph","selectorGuids":["a7217e76-e412-bc97-15ee-b27a7f1bc7e1","5af514ab-c4fb-24aa-5b1c-7b95cd0f1cef"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-50-n-65","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":750,"target":{"selector":".paragraph-white-part","selectorGuids":["597e8b83-4ada-b0ea-8230-fb89074298d4"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]},{"actionItems":[{"id":"a-50-n-67","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".footer-link-dot","selectorGuids":["fff3a311-62ae-ab8f-b7db-8c8109dab924"]},"value":1,"unit":""}},{"id":"a-50-n-69","actionTypeId":"STYLE_OPACITY","config":{"delay":150,"easing":"","duration":0,"target":{"selector":".footer-link-dot-2","selectorGuids":["759ef13e-443d-3cfb-c65a-79dd8cd35da6"]},"value":1,"unit":""}},{"id":"a-50-n-71","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".footer-email-text.hover-effect-text","selectorGuids":["d4626466-65c4-59a6-ca72-bdd57d50bb6f","dfdbbaa1-6e22-b079-9165-c0cb4181d754"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-50-n-72","actionTypeId":"TRANSFORM_MOVE","config":{"delay":450,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".footer-phone-text.hover-effect-text","selectorGuids":["8ab5ba14-e2e2-641a-aeb5-773577812a9b","1cd0407d-9fd9-3363-87a8-3b2c1f791cf0"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1674864065949},"a-94":{"id":"a-94","title":"99 GLOBAL - ON SCROLL - FOOTER - MOBILE","actionItemGroups":[{"actionItems":[{"id":"a-94-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-center-line","selectorGuids":["419caa75-05b0-1d69-d257-1a6aea27c81e"]},"heightValue":0,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-94-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":1500,"target":{"useEventTarget":"SIBLINGS","selector":".footer-frame-line-top","selectorGuids":["f281e01a-e9a6-61e8-e177-591f1c77f03a"]},"widthValue":0,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-94-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-frame-line-left","selectorGuids":["6e4db770-d01b-69b6-596d-d4d53fc1414f"]},"heightValue":0,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-94-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-frame-line-right","selectorGuids":["d399c0bc-5d61-9e8f-0ea3-a1263171bdaa"]},"heightValue":0,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-94-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"useEventTarget":"SIBLINGS","selector":".footer-frame-line-bottom","selectorGuids":["b06fb0e4-f41a-1e91-9965-5b451ed94e4f"]},"widthValue":0,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-94-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".footer-us-text","selectorGuids":["89771819-9f6c-3e5e-00f9-298520bfde99"]},"yValue":25,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-94-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1","selectorGuids":["5edf6519-d03d-4e99-bffd-a5a879f0cb41"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-94-n-8","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1","selectorGuids":["5edf6519-d03d-4e99-bffd-a5a879f0cb41"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-94-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1","selectorGuids":["5edf6519-d03d-4e99-bffd-a5a879f0cb41"]},"value":0,"unit":""}},{"id":"a-94-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1-1","selectorGuids":["feb35ad2-220b-c53a-5fb4-5382f6121dd5"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-94-n-11","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1-1","selectorGuids":["feb35ad2-220b-c53a-5fb4-5382f6121dd5"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-94-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1-1","selectorGuids":["feb35ad2-220b-c53a-5fb4-5382f6121dd5"]},"value":0,"unit":""}},{"id":"a-94-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1-2","selectorGuids":["1b098fa7-1e9a-a38e-9847-3f15e66eee42"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-94-n-14","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1-2","selectorGuids":["1b098fa7-1e9a-a38e-9847-3f15e66eee42"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-94-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-heading-1-2","selectorGuids":["1b098fa7-1e9a-a38e-9847-3f15e66eee42"]},"value":0,"unit":""}},{"id":"a-94-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1250,"target":{"selector":".paragraph.footer-paragraph","selectorGuids":["a7217e76-e412-bc97-15ee-b27a7f1bc7e1","5af514ab-c4fb-24aa-5b1c-7b95cd0f1cef"]},"value":0,"unit":""}},{"id":"a-94-n-17","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".paragraph-white-part","selectorGuids":["597e8b83-4ada-b0ea-8230-fb89074298d4"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}},{"id":"a-94-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".footer-link-dot","selectorGuids":["fff3a311-62ae-ab8f-b7db-8c8109dab924"]},"value":0,"unit":""}},{"id":"a-94-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".footer-link-dot-2","selectorGuids":["759ef13e-443d-3cfb-c65a-79dd8cd35da6"]},"value":0,"unit":""}},{"id":"a-94-n-20","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-email-text.hover-effect-text","selectorGuids":["d4626466-65c4-59a6-ca72-bdd57d50bb6f","dfdbbaa1-6e22-b079-9165-c0cb4181d754"]},"yValue":15,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-94-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-phone-text.hover-effect-text","selectorGuids":["8ab5ba14-e2e2-641a-aeb5-773577812a9b","1cd0407d-9fd9-3363-87a8-3b2c1f791cf0"]},"yValue":15,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-94-n-22","actionTypeId":"TRANSFORM_MOVE","config":{"delay":250,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".footer-we-text","selectorGuids":["f039d900-72ad-06fe-0b31-03833865ade6"]},"xValue":-75,"yValue":null,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-94-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":250,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".footer-circle-left-wrap","selectorGuids":["f742a92a-4dc2-6c20-d894-b01f40740cad"]},"xValue":55,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-94-n-24","actionTypeId":"TRANSFORM_MOVE","config":{"delay":250,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".footer-circle-right-wrap","selectorGuids":["3ae85fa2-64e3-1166-c6a8-fbc87d540ef3"]},"xValue":-55,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-94-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":250,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".footer-you-text","selectorGuids":["66afa1ba-8b77-5678-de57-6c0dc7f76de5"]},"xValue":75,"yValue":null,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-94-n-26","actionTypeId":"GENERAL_DISPLAY","config":{"delay":2500,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".footer-circle-center-wrap","selectorGuids":["e0c033f7-b265-41bb-6c33-3d36595d8692"]},"value":"flex"}},{"id":"a-94-n-27","actionTypeId":"TRANSFORM_MOVE","config":{"delay":2500,"easing":[0.23,1,0.32,1],"duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".footer-us-text","selectorGuids":["89771819-9f6c-3e5e-00f9-298520bfde99"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-94-n-28","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".footer-us-text","selectorGuids":["89771819-9f6c-3e5e-00f9-298520bfde99"]},"yValue":-25,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-94-n-29","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.455,0.03,0.515,0.955],"duration":2000,"target":{"selector":".footer-center-line","selectorGuids":["419caa75-05b0-1d69-d257-1a6aea27c81e"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-94-n-30","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"useEventTarget":"SIBLINGS","selector":".footer-frame-line-top","selectorGuids":["f281e01a-e9a6-61e8-e177-591f1c77f03a"]},"widthValue":100,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-94-n-31","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"selector":".footer-frame-line-right","selectorGuids":["d399c0bc-5d61-9e8f-0ea3-a1263171bdaa"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-94-n-32","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"selector":".footer-frame-line-left","selectorGuids":["6e4db770-d01b-69b6-596d-d4d53fc1414f"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-94-n-33","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"useEventTarget":"SIBLINGS","selector":".footer-frame-line-bottom","selectorGuids":["b06fb0e4-f41a-1e91-9965-5b451ed94e4f"]},"widthValue":100,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-94-n-34","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".footer-heading-1","selectorGuids":["5edf6519-d03d-4e99-bffd-a5a879f0cb41"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-94-n-35","actionTypeId":"TRANSFORM_SKEW","config":{"delay":1000,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".footer-heading-1","selectorGuids":["5edf6519-d03d-4e99-bffd-a5a879f0cb41"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-94-n-36","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":[0.25,0.25,0.75,0.75],"duration":2500,"target":{"selector":".footer-heading-1","selectorGuids":["5edf6519-d03d-4e99-bffd-a5a879f0cb41"]},"value":1,"unit":""}},{"id":"a-94-n-37","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1200,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".footer-heading-1-1","selectorGuids":["feb35ad2-220b-c53a-5fb4-5382f6121dd5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-94-n-38","actionTypeId":"TRANSFORM_SKEW","config":{"delay":1200,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".footer-heading-1-1","selectorGuids":["feb35ad2-220b-c53a-5fb4-5382f6121dd5"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-94-n-39","actionTypeId":"STYLE_OPACITY","config":{"delay":1200,"easing":"","duration":2500,"target":{"selector":".footer-heading-1-1","selectorGuids":["feb35ad2-220b-c53a-5fb4-5382f6121dd5"]},"value":1,"unit":""}},{"id":"a-94-n-40","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1400,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".footer-heading-1-2","selectorGuids":["1b098fa7-1e9a-a38e-9847-3f15e66eee42"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-94-n-41","actionTypeId":"TRANSFORM_SKEW","config":{"delay":1400,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".footer-heading-1-2","selectorGuids":["1b098fa7-1e9a-a38e-9847-3f15e66eee42"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-94-n-42","actionTypeId":"STYLE_OPACITY","config":{"delay":1400,"easing":"","duration":2500,"target":{"selector":".footer-heading-1-2","selectorGuids":["1b098fa7-1e9a-a38e-9847-3f15e66eee42"]},"value":1,"unit":""}},{"id":"a-94-n-43","actionTypeId":"STYLE_OPACITY","config":{"delay":1500,"easing":"","duration":2500,"target":{"selector":".paragraph.footer-paragraph","selectorGuids":["a7217e76-e412-bc97-15ee-b27a7f1bc7e1","5af514ab-c4fb-24aa-5b1c-7b95cd0f1cef"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-94-n-44","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":750,"target":{"selector":".paragraph-white-part","selectorGuids":["597e8b83-4ada-b0ea-8230-fb89074298d4"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]},{"actionItems":[{"id":"a-94-n-45","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".footer-link-dot","selectorGuids":["fff3a311-62ae-ab8f-b7db-8c8109dab924"]},"value":1,"unit":""}},{"id":"a-94-n-46","actionTypeId":"STYLE_OPACITY","config":{"delay":150,"easing":"","duration":0,"target":{"selector":".footer-link-dot-2","selectorGuids":["759ef13e-443d-3cfb-c65a-79dd8cd35da6"]},"value":1,"unit":""}},{"id":"a-94-n-47","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".footer-email-text.hover-effect-text","selectorGuids":["d4626466-65c4-59a6-ca72-bdd57d50bb6f","dfdbbaa1-6e22-b079-9165-c0cb4181d754"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-94-n-48","actionTypeId":"TRANSFORM_MOVE","config":{"delay":450,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".footer-phone-text.hover-effect-text","selectorGuids":["8ab5ba14-e2e2-641a-aeb5-773577812a9b","1cd0407d-9fd9-3363-87a8-3b2c1f791cf0"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1674864065949},"a-53":{"id":"a-53","title":"PAGE TRIGGER - WHO & WHAT PAGES - MOUSE MOVE","continuousParameterGroups":[{"id":"a-53-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-53-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ceo-background","selectorGuids":["debcd6b8-5b78-f76b-0a93-8977518f08ce"]},"xValue":-15,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-53-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".wrap-ceo-photo.scroll-t-p","selectorGuids":["1c0716e8-6a6d-2292-3f21-260177b67f41","5b9f8c36-6969-04bb-e4eb-79ac9fd80240"]},"xValue":-15,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-53-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".wrap-what-circle","selectorGuids":["24ff073a-ec4e-5863-f0d4-1c2bed3d1b43"]},"xValue":-15,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-53-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ceo-background","selectorGuids":["debcd6b8-5b78-f76b-0a93-8977518f08ce"]},"xValue":15,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-53-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".wrap-ceo-photo.scroll-t-p","selectorGuids":["1c0716e8-6a6d-2292-3f21-260177b67f41","5b9f8c36-6969-04bb-e4eb-79ac9fd80240"]},"xValue":15,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-53-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".wrap-what-circle","selectorGuids":["24ff073a-ec4e-5863-f0d4-1c2bed3d1b43"]},"xValue":15,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]},{"id":"a-53-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-53-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ceo-background","selectorGuids":["debcd6b8-5b78-f76b-0a93-8977518f08ce"]},"yValue":-15,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}},{"id":"a-53-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".wrap-ceo-photo.scroll-t-p","selectorGuids":["1c0716e8-6a6d-2292-3f21-260177b67f41","5b9f8c36-6969-04bb-e4eb-79ac9fd80240"]},"yValue":-15,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}},{"id":"a-53-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".wrap-what-circle","selectorGuids":["24ff073a-ec4e-5863-f0d4-1c2bed3d1b43"]},"yValue":-15,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-53-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ceo-background","selectorGuids":["debcd6b8-5b78-f76b-0a93-8977518f08ce"]},"yValue":15,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}},{"id":"a-53-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".wrap-ceo-photo.scroll-t-p","selectorGuids":["1c0716e8-6a6d-2292-3f21-260177b67f41","5b9f8c36-6969-04bb-e4eb-79ac9fd80240"]},"yValue":15,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}},{"id":"a-53-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".wrap-what-circle","selectorGuids":["24ff073a-ec4e-5863-f0d4-1c2bed3d1b43"]},"yValue":15,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}}]}]}],"createdOn":1675299466688},"a-55":{"id":"a-55","title":"99 WHO & WHAT - ON SCROLL - S1 CIRCLE - PHONE TABLET","continuousParameterGroups":[{"id":"a-55-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-55-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".wrap-ceo-photo.scroll-t-p","selectorGuids":["1c0716e8-6a6d-2292-3f21-260177b67f41","5b9f8c36-6969-04bb-e4eb-79ac9fd80240"]},"yValue":50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-55-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ceo-background","selectorGuids":["debcd6b8-5b78-f76b-0a93-8977518f08ce"]},"yValue":50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-55-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ceo-frame","selectorGuids":["2705bbf4-b3ea-19bf-e665-d3a93e6f12cc"]},"yValue":50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-55-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".wrap-what-circle","selectorGuids":["24ff073a-ec4e-5863-f0d4-1c2bed3d1b43"]},"yValue":50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-55-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".wrap-ceo-photo.scroll-t-p","selectorGuids":["1c0716e8-6a6d-2292-3f21-260177b67f41","5b9f8c36-6969-04bb-e4eb-79ac9fd80240"]},"yValue":-25,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-55-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ceo-background","selectorGuids":["debcd6b8-5b78-f76b-0a93-8977518f08ce"]},"yValue":-25,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-55-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ceo-frame","selectorGuids":["2705bbf4-b3ea-19bf-e665-d3a93e6f12cc"]},"yValue":-25,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-55-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".wrap-what-circle","selectorGuids":["24ff073a-ec4e-5863-f0d4-1c2bed3d1b43"]},"yValue":-25,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}]}],"createdOn":1675497607399},"a-24":{"id":"a-24","title":"PAGE SCROLL BAR","continuousParameterGroups":[{"id":"a-24-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-24-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.645,0.045,0.355,1],"duration":500,"target":{"id":"1f899373-8052-0fa4-2f5a-48c391d042f4"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-24-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.645,0.045,0.355,1],"duration":500,"target":{"id":"1f899373-8052-0fa4-2f5a-48c391d042f4"},"yValue":113,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}]}],"createdOn":1673978404269},"a-63":{"id":"a-63","title":"99 GLOBAL - CLICK - P TRANSITION","actionItemGroups":[{"actionItems":[{"id":"a-63-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".transition-bg-1","selectorGuids":["612418af-b570-6860-e347-aeb434fa759f"]},"heightValue":0,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-63-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".transition-bg-2","selectorGuids":["6ab95388-6ef6-06df-4498-d19bb1d9f7e5"]},"heightValue":0,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-63-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".transition-dot-1","selectorGuids":["73a914c0-3c94-0a5f-f302-05a15fb6c0a2"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-63-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".transition-dot-2","selectorGuids":["7bfa76f3-df24-8099-87b5-09bd6cb82d32"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-63-n-14","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".page-transition","selectorGuids":["9c8f7427-36d7-f40a-3569-b5fbafbcb143"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-63-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":1500,"target":{"selector":".transition-bg-1","selectorGuids":["612418af-b570-6860-e347-aeb434fa759f"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-63-n-9","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":2000,"target":{"selector":".transition-bg-2","selectorGuids":["6ab95388-6ef6-06df-4498-d19bb1d9f7e5"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-63-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1250,"easing":[0.165,0.84,0.44,1],"duration":1250,"target":{"selector":".transition-dot-1","selectorGuids":["73a914c0-3c94-0a5f-f302-05a15fb6c0a2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-63-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1500,"easing":[0.165,0.84,0.44,1],"duration":1250,"target":{"selector":".transition-dot-2","selectorGuids":["7bfa76f3-df24-8099-87b5-09bd6cb82d32"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676246992189},"a-64":{"id":"a-64","title":"99 WHO - ON LOAD - ALL WELCOME ANIMATIONS","actionItemGroups":[{"actionItems":[{"id":"a-64-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".heading-1.who-s1-ceo","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","def9b192-470c-cd71-f62e-3530acb2f6eb"]},"yValue":110,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-64-n-8","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".heading-1.who-s1-ceo","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","def9b192-470c-cd71-f62e-3530acb2f6eb"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-64-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".heading-1.who-s1-ceo","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","def9b192-470c-cd71-f62e-3530acb2f6eb"]},"value":0,"unit":""}},{"id":"a-64-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".small-heading.who-s1-ceo","selectorGuids":["9d57b287-e8df-c208-f3c7-9c2d4ab0bf20","d4c675c6-faec-53f6-ea4c-ddeb0f0ad96b"]},"value":0,"unit":""}},{"id":"a-64-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ceo-background","selectorGuids":["debcd6b8-5b78-f76b-0a93-8977518f08ce"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-64-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ceo-photo","selectorGuids":["c4231979-ee9e-1b02-d9cc-6a4e5dcfc5e6"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-64-n-19","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":2000,"target":{"selector":".ceo-photo","selectorGuids":["c4231979-ee9e-1b02-d9cc-6a4e5dcfc5e6"]},"xValue":0.8,"yValue":0.8,"locked":true}}]},{"actionItems":[{"id":"a-64-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":4750,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1.who-s1-ceo","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","def9b192-470c-cd71-f62e-3530acb2f6eb"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-64-n-11","actionTypeId":"TRANSFORM_SKEW","config":{"delay":4750,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1.who-s1-ceo","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","def9b192-470c-cd71-f62e-3530acb2f6eb"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-64-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":4750,"easing":"","duration":2500,"target":{"selector":".heading-1.who-s1-ceo","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","def9b192-470c-cd71-f62e-3530acb2f6eb"]},"value":1,"unit":""}},{"id":"a-64-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":4750,"easing":"","duration":2500,"target":{"selector":".small-heading.who-s1-ceo","selectorGuids":["9d57b287-e8df-c208-f3c7-9c2d4ab0bf20","d4c675c6-faec-53f6-ea4c-ddeb0f0ad96b"]},"value":1,"unit":""}},{"id":"a-64-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":5250,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"selector":".ceo-background","selectorGuids":["debcd6b8-5b78-f76b-0a93-8977518f08ce"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-64-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":5750,"easing":[0.77,0,0.175,1],"duration":2000,"target":{"selector":".ceo-photo","selectorGuids":["c4231979-ee9e-1b02-d9cc-6a4e5dcfc5e6"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-64-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":7250,"easing":[0.77,0,0.175,1],"duration":2000,"target":{"selector":".ceo-photo","selectorGuids":["c4231979-ee9e-1b02-d9cc-6a4e5dcfc5e6"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675470305037},"a-66":{"id":"a-66","title":"99 GLOBAL - CLICK - CLOSE SAY HELLO","actionItemGroups":[{"actionItems":[{"id":"a-66-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":1500,"target":{"selector":".say-hello-form-wrap","selectorGuids":["11fc64f0-acb8-b7ab-c2e9-470cbe3a11b1"]},"xValue":0.8,"yValue":0.8,"locked":true}},{"id":"a-66-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1500,"target":{"selector":".say-hello-form-wrap","selectorGuids":["11fc64f0-acb8-b7ab-c2e9-470cbe3a11b1"]},"value":0,"unit":""}},{"id":"a-66-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":1250,"target":{"selector":".email-field-wrap.form-style","selectorGuids":["951b85fb-26ee-b582-874d-7febca48dc55","4b3d8d39-b76b-ef05-695a-c2186b4a1544"]},"xValue":-101,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-66-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":1250,"target":{"selector":".phone-field-wrap.form-style","selectorGuids":["f6e29ad3-6805-2100-ffe6-b95e25b631e4","fcfb3232-81d1-1a14-a1f0-d2ab8e4fd72e"]},"xValue":101,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-66-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":500,"easing":[0.86,0,0.07,1],"duration":1500,"target":{"selector":".say-hello-form-bg","selectorGuids":["c1b55dee-ecbf-72b6-1514-87db6cbfc928"]},"heightValue":0,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-66-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":500,"easing":[0.86,0,0.07,1],"duration":2000,"target":{"selector":".say-hello-form","selectorGuids":["a8dc34d5-70c4-c33d-91d6-17b650a69728"]},"heightValue":0,"widthUnit":"PX","heightUnit":"vh","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1676492605230},"a-68":{"id":"a-68","title":"99 GLOBAL - CLICK - HIDE SAY HELLO BUTTON","actionItemGroups":[{"actionItems":[{"id":"a-68-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":1000,"easing":"","duration":0,"target":{"id":"d1842067-9892-963b-3411-d6935f448cab"},"value":"none"}},{"id":"a-68-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":1000,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","id":"e483deaf-08e2-77b7-15c9-04a81e21e046"},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1676500798589},"a-67":{"id":"a-67","title":"CLICK 2 - OPEN SAY HELLO FORM 2","actionItemGroups":[{"actionItems":[{"id":"a-67-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".say-hello-form-wrap","selectorGuids":["11fc64f0-acb8-b7ab-c2e9-470cbe3a11b1"]},"value":0.2,"unit":""}}]},{"actionItems":[{"id":"a-67-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":2000,"target":{"selector":".say-hello-form-bg","selectorGuids":["c1b55dee-ecbf-72b6-1514-87db6cbfc928"]},"heightValue":100,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-67-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":1500,"target":{"selector":".say-hello-form","selectorGuids":["a8dc34d5-70c4-c33d-91d6-17b650a69728"]},"heightValue":100,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-67-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1500,"easing":[0.23,1,0.32,1],"duration":1250,"target":{"selector":".phone-field-wrap.form-style","selectorGuids":["f6e29ad3-6805-2100-ffe6-b95e25b631e4","fcfb3232-81d1-1a14-a1f0-d2ab8e4fd72e"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-67-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1500,"easing":[0.23,1,0.32,1],"duration":1250,"target":{"selector":".email-field-wrap.form-style","selectorGuids":["951b85fb-26ee-b582-874d-7febca48dc55","4b3d8d39-b76b-ef05-695a-c2186b4a1544"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-67-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":1500,"easing":[0.23,1,0.32,1],"duration":1500,"target":{"selector":".say-hello-form-wrap","selectorGuids":["11fc64f0-acb8-b7ab-c2e9-470cbe3a11b1"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-67-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":1500,"easing":"","duration":1500,"target":{"selector":".say-hello-form-wrap","selectorGuids":["11fc64f0-acb8-b7ab-c2e9-470cbe3a11b1"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1676492605230},"a-69":{"id":"a-69","title":"99 GLOBAL - CLICK - Q1 TO Q2","actionItemGroups":[{"actionItems":[{"id":"a-69-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".heading-1-form.q2","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","97572708-9c92-1939-e087-2507a841c3de"]},"yValue":110,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-69-n-6","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".heading-1-form.q2","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","97572708-9c92-1939-e087-2507a841c3de"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-69-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".heading-1-form.q2","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","97572708-9c92-1939-e087-2507a841c3de"]},"value":0,"unit":""}},{"id":"a-69-n-11","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".form-field-underline.q2","selectorGuids":["9bc7e446-8044-46df-acfa-3bf47b51bbe7","f91a0bc1-348a-c488-5639-60151dba69d6"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-69-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".form-text-area","selectorGuids":["38af84cb-dfa2-dca6-a9df-336c89645ea9"]},"yValue":105,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-69-n-18","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".form-question-wrap.q2","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","ed00ea23-efb0-a772-e737-ac6e2d14fd4d"]},"value":"none"}},{"id":"a-69-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".form-q2-wrap-other","selectorGuids":["da01b71c-a537-0529-3a43-039738e008b5"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-69-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1250,"target":{"selector":".form-question-wrap.q1","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","da67fd2e-e706-5880-11da-81f7289af83e"]},"value":0,"unit":""}},{"id":"a-69-n-15","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":1250,"target":{"selector":".form-question-wrap.q1","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","da67fd2e-e706-5880-11da-81f7289af83e"]},"xValue":0.8,"yValue":0.8,"locked":true}},{"id":"a-69-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":1250,"easing":"","duration":0,"target":{"selector":".form-question-wrap.q1","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","da67fd2e-e706-5880-11da-81f7289af83e"]},"value":"none"}}]},{"actionItems":[{"id":"a-69-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"selector":".form-question-wrap.q2","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","ed00ea23-efb0-a772-e737-ac6e2d14fd4d"]},"value":"flex"}},{"id":"a-69-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1-form.q2","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","97572708-9c92-1939-e087-2507a841c3de"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-69-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"","duration":2500,"target":{"selector":".heading-1-form.q2","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","97572708-9c92-1939-e087-2507a841c3de"]},"value":1,"unit":""}},{"id":"a-69-n-9","actionTypeId":"TRANSFORM_SKEW","config":{"delay":200,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1-form.q2","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","97572708-9c92-1939-e087-2507a841c3de"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-69-n-12","actionTypeId":"STYLE_SIZE","config":{"delay":700,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"selector":".form-field-underline.q2","selectorGuids":["9bc7e446-8044-46df-acfa-3bf47b51bbe7","f91a0bc1-348a-c488-5639-60151dba69d6"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-69-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":700,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".form-text-area","selectorGuids":["38af84cb-dfa2-dca6-a9df-336c89645ea9"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-69-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":3200,"easing":"","duration":1250,"target":{"selector":".form-q2-wrap-other","selectorGuids":["da01b71c-a537-0529-3a43-039738e008b5"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676578481085},"a-71":{"id":"a-71","title":"99 GLOBAL - CLICK - Q3 TO Q4","actionItemGroups":[{"actionItems":[{"id":"a-71-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".heading-1-form.q4","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","7ae9c3a5-d2c8-8f2a-8a27-201a5870aa59"]},"yValue":110,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-71-n-2","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".heading-1-form.q4","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","7ae9c3a5-d2c8-8f2a-8a27-201a5870aa59"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-71-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".heading-1-form.q4","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","7ae9c3a5-d2c8-8f2a-8a27-201a5870aa59"]},"value":0,"unit":""}},{"id":"a-71-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".form-question-wrap.q4","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","a6a6ec9e-87a5-ec3b-f76e-580082ee011a"]},"value":"none"}},{"id":"a-71-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".form-checkbox-wrap.q4","selectorGuids":["7adf3a7b-eecf-c792-3aa2-79b2a9b8dd8c","b49a91c4-9c86-066a-fb2e-fc6c418e155b"]},"value":0,"unit":""}},{"id":"a-71-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".form-q4-wrap-other","selectorGuids":["ed6032f5-10ef-1159-7834-b7971dbac630"]},"value":0,"unit":""}},{"id":"a-71-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".form-radio-field.q4","selectorGuids":["b0c4038c-2d93-554e-90cc-64265ab62d6c","ec2c5d38-0eb4-6e0f-6802-2221a3657f84"]},"widthValue":50,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-71-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".radio-label.q4-radio-1","selectorGuids":["86be02ed-e283-f003-cac4-9cd932d2b137","3bd0fa8f-88cb-6310-698d-ec89dd9b5542"]},"value":0,"unit":""}},{"id":"a-71-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".radio-label.q4-radio-2","selectorGuids":["86be02ed-e283-f003-cac4-9cd932d2b137","56a89ed4-183a-d295-87b4-9377b4ad615c"]},"value":0,"unit":""}},{"id":"a-71-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".radio-label.q4-radio-3","selectorGuids":["86be02ed-e283-f003-cac4-9cd932d2b137","4e2e9bef-a04a-8b15-bb65-48a50cc07bc0"]},"value":0,"unit":""}},{"id":"a-71-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".radio-label.q4-radio-4","selectorGuids":["86be02ed-e283-f003-cac4-9cd932d2b137","c745e785-4202-7d21-7162-2a74120653df"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-71-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1250,"target":{"selector":".form-question-wrap.q3","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","c36af37a-04bc-2d80-abe6-69648a40bf88"]},"value":0,"unit":""}},{"id":"a-71-n-13","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":1250,"target":{"selector":".form-question-wrap.q3","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","c36af37a-04bc-2d80-abe6-69648a40bf88"]},"xValue":0.8,"yValue":0.8,"locked":true}},{"id":"a-71-n-14","actionTypeId":"GENERAL_DISPLAY","config":{"delay":1250,"easing":"","duration":0,"target":{"selector":".form-question-wrap.q3","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","c36af37a-04bc-2d80-abe6-69648a40bf88"]},"value":"none"}}]},{"actionItems":[{"id":"a-71-n-15","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"selector":".form-question-wrap.q4","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","a6a6ec9e-87a5-ec3b-f76e-580082ee011a"]},"value":"flex"}},{"id":"a-71-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1-form.q4","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","7ae9c3a5-d2c8-8f2a-8a27-201a5870aa59"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-71-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"","duration":2500,"target":{"selector":".heading-1-form.q4","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","7ae9c3a5-d2c8-8f2a-8a27-201a5870aa59"]},"value":1,"unit":""}},{"id":"a-71-n-18","actionTypeId":"TRANSFORM_SKEW","config":{"delay":200,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1-form.q4","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","7ae9c3a5-d2c8-8f2a-8a27-201a5870aa59"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-71-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"","duration":1000,"target":{"selector":".form-checkbox-wrap.q4","selectorGuids":["7adf3a7b-eecf-c792-3aa2-79b2a9b8dd8c","b49a91c4-9c86-066a-fb2e-fc6c418e155b"]},"value":1,"unit":""}},{"id":"a-71-n-20","actionTypeId":"STYLE_SIZE","config":{"delay":1200,"easing":[0.77,0,0.175,1],"duration":1500,"target":{"selector":".form-radio-field.q4","selectorGuids":["b0c4038c-2d93-554e-90cc-64265ab62d6c","ec2c5d38-0eb4-6e0f-6802-2221a3657f84"]},"widthValue":250,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-71-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":2700,"easing":"","duration":0,"target":{"selector":".radio-label.q4-radio-1","selectorGuids":["86be02ed-e283-f003-cac4-9cd932d2b137","3bd0fa8f-88cb-6310-698d-ec89dd9b5542"]},"value":1,"unit":""}},{"id":"a-71-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":2850,"easing":"","duration":0,"target":{"selector":".radio-label.q4-radio-2","selectorGuids":["86be02ed-e283-f003-cac4-9cd932d2b137","56a89ed4-183a-d295-87b4-9377b4ad615c"]},"value":1,"unit":""}},{"id":"a-71-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":3000,"easing":"","duration":0,"target":{"selector":".radio-label.q4-radio-3","selectorGuids":["86be02ed-e283-f003-cac4-9cd932d2b137","4e2e9bef-a04a-8b15-bb65-48a50cc07bc0"]},"value":1,"unit":""}},{"id":"a-71-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":3150,"easing":"","duration":0,"target":{"selector":".radio-label.q4-radio-4","selectorGuids":["86be02ed-e283-f003-cac4-9cd932d2b137","c745e785-4202-7d21-7162-2a74120653df"]},"value":1,"unit":""}},{"id":"a-71-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":3300,"easing":"","duration":1250,"target":{"selector":".form-q4-wrap-other","selectorGuids":["ed6032f5-10ef-1159-7834-b7971dbac630"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676578481085},"a-70":{"id":"a-70","title":"99 GLOBAL - CLICK - Q2 TO Q3","actionItemGroups":[{"actionItems":[{"id":"a-70-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".heading-1-form.q3","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","c015e8bd-ac65-547b-9c23-b30498335adb"]},"yValue":110,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-70-n-2","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".heading-1-form.q3","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","c015e8bd-ac65-547b-9c23-b30498335adb"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-70-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".heading-1-form.q3","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","c015e8bd-ac65-547b-9c23-b30498335adb"]},"value":0,"unit":""}},{"id":"a-70-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".form-question-wrap.q3","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","c36af37a-04bc-2d80-abe6-69648a40bf88"]},"value":"none"}},{"id":"a-70-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".form-checkbox-wrap.q3","selectorGuids":["7adf3a7b-eecf-c792-3aa2-79b2a9b8dd8c","c9126da9-2712-2e3d-a902-c1d86f1a5cc5"]},"value":0,"unit":""}},{"id":"a-70-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".form-q3-wrap-other","selectorGuids":["677bd23b-55c7-bc50-170a-d4f257f1fd94"]},"value":0,"unit":""}},{"id":"a-70-n-20","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".form-radio-field.q3","selectorGuids":["b0c4038c-2d93-554e-90cc-64265ab62d6c","dfdf5b3d-94d3-e4e2-89be-4ce4a4ab38e8"]},"widthValue":50,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-70-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".radio-label._5-10","selectorGuids":["86be02ed-e283-f003-cac4-9cd932d2b137","d3de2318-a47f-9893-b5e6-f14a1ff37d8c"]},"value":0,"unit":""}},{"id":"a-70-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".radio-label._10-20","selectorGuids":["86be02ed-e283-f003-cac4-9cd932d2b137","5c944601-3523-96ac-b5ad-3ffe327c2521"]},"value":0,"unit":""}},{"id":"a-70-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".radio-label._20-50","selectorGuids":["86be02ed-e283-f003-cac4-9cd932d2b137","bc614806-8287-6a29-9419-bece302a0ecb"]},"value":0,"unit":""}},{"id":"a-70-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".radio-label._100","selectorGuids":["86be02ed-e283-f003-cac4-9cd932d2b137","79428f56-2f3c-62ab-4ce2-df93729484f1"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-70-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1250,"target":{"selector":".form-question-wrap.q2","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","ed00ea23-efb0-a772-e737-ac6e2d14fd4d"]},"value":0,"unit":""}},{"id":"a-70-n-9","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":1250,"target":{"selector":".form-question-wrap.q2","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","ed00ea23-efb0-a772-e737-ac6e2d14fd4d"]},"xValue":0.8,"yValue":0.8,"locked":true}},{"id":"a-70-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":1250,"easing":"","duration":0,"target":{"selector":".form-question-wrap.q2","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","ed00ea23-efb0-a772-e737-ac6e2d14fd4d"]},"value":"none"}}]},{"actionItems":[{"id":"a-70-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"selector":".form-question-wrap.q3","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","c36af37a-04bc-2d80-abe6-69648a40bf88"]},"value":"flex"}},{"id":"a-70-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1-form.q3","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","c015e8bd-ac65-547b-9c23-b30498335adb"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-70-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"","duration":2500,"target":{"selector":".heading-1-form.q3","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","c015e8bd-ac65-547b-9c23-b30498335adb"]},"value":1,"unit":""}},{"id":"a-70-n-14","actionTypeId":"TRANSFORM_SKEW","config":{"delay":200,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1-form.q3","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","c015e8bd-ac65-547b-9c23-b30498335adb"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-70-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"","duration":1000,"target":{"selector":".form-checkbox-wrap.q3","selectorGuids":["7adf3a7b-eecf-c792-3aa2-79b2a9b8dd8c","c9126da9-2712-2e3d-a902-c1d86f1a5cc5"]},"value":1,"unit":""}},{"id":"a-70-n-21","actionTypeId":"STYLE_SIZE","config":{"delay":1200,"easing":[0.77,0,0.175,1],"duration":1500,"target":{"selector":".form-radio-field.q3","selectorGuids":["b0c4038c-2d93-554e-90cc-64265ab62d6c","dfdf5b3d-94d3-e4e2-89be-4ce4a4ab38e8"]},"widthValue":250,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-70-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":2700,"easing":"","duration":0,"target":{"selector":".radio-label._5-10","selectorGuids":["86be02ed-e283-f003-cac4-9cd932d2b137","d3de2318-a47f-9893-b5e6-f14a1ff37d8c"]},"value":1,"unit":""}},{"id":"a-70-n-27","actionTypeId":"STYLE_OPACITY","config":{"delay":2850,"easing":"","duration":0,"target":{"selector":".radio-label._10-20","selectorGuids":["86be02ed-e283-f003-cac4-9cd932d2b137","5c944601-3523-96ac-b5ad-3ffe327c2521"]},"value":1,"unit":""}},{"id":"a-70-n-28","actionTypeId":"STYLE_OPACITY","config":{"delay":3000,"easing":"","duration":0,"target":{"selector":".radio-label._20-50","selectorGuids":["86be02ed-e283-f003-cac4-9cd932d2b137","bc614806-8287-6a29-9419-bece302a0ecb"]},"value":1,"unit":""}},{"id":"a-70-n-29","actionTypeId":"STYLE_OPACITY","config":{"delay":3150,"easing":"","duration":0,"target":{"selector":".radio-label._100","selectorGuids":["86be02ed-e283-f003-cac4-9cd932d2b137","79428f56-2f3c-62ab-4ce2-df93729484f1"]},"value":1,"unit":""}},{"id":"a-70-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":3300,"easing":"","duration":1250,"target":{"selector":".form-q3-wrap-other","selectorGuids":["677bd23b-55c7-bc50-170a-d4f257f1fd94"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676578481085},"a-72":{"id":"a-72","title":"99 GLOBAL - CLICK - Q4 TO Q5","actionItemGroups":[{"actionItems":[{"id":"a-72-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".heading-1-form.q5","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","af9802e9-a92b-3234-4219-fb5c40ad6c10"]},"yValue":110,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-72-n-2","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".heading-1-form.q5","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","af9802e9-a92b-3234-4219-fb5c40ad6c10"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-72-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".heading-1-form.q5","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","af9802e9-a92b-3234-4219-fb5c40ad6c10"]},"value":0,"unit":""}},{"id":"a-72-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".form-question-wrap.q5","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","557ae5aa-3380-f32b-49d3-0d279bc749dc"]},"value":"none"}},{"id":"a-72-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".form-q5-wrap-other","selectorGuids":["096c8156-4abf-e617-1b13-3c71d80d1fc8"]},"value":0,"unit":""}},{"id":"a-72-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".form-email-field","selectorGuids":["ff6a40d0-277f-929f-d50d-62e3610c8f09"]},"yValue":105,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-72-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".form-phone-field","selectorGuids":["a5c866c1-1c3e-85e3-a1fc-7a6dbf2321e2"]},"yValue":105,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-72-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".form-name-field","selectorGuids":["4f480abf-bde5-2daa-6d8e-1337e1651b16"]},"yValue":105,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-72-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".form-field-underline.q5-line-1","selectorGuids":["9bc7e446-8044-46df-acfa-3bf47b51bbe7","dfc21151-6932-c3a5-b521-f21c5d3948fc"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-72-n-20","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".form-field-underline.q5-line-2","selectorGuids":["9bc7e446-8044-46df-acfa-3bf47b51bbe7","82115211-10ce-0b76-ddef-38f046fa071c"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-72-n-21","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".form-field-underline.q5-line-3","selectorGuids":["9bc7e446-8044-46df-acfa-3bf47b51bbe7","7739b3a2-446d-ac6e-7230-83da4061459d"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-72-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1250,"target":{"selector":".form-question-wrap.q4","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","a6a6ec9e-87a5-ec3b-f76e-580082ee011a"]},"value":0,"unit":""}},{"id":"a-72-n-9","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":1250,"target":{"selector":".form-question-wrap.q4","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","a6a6ec9e-87a5-ec3b-f76e-580082ee011a"]},"xValue":0.8,"yValue":0.8,"locked":true}},{"id":"a-72-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":1250,"easing":"","duration":0,"target":{"selector":".form-question-wrap.q4","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","a6a6ec9e-87a5-ec3b-f76e-580082ee011a"]},"value":"none"}}]},{"actionItems":[{"id":"a-72-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"selector":".form-question-wrap.q5","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","557ae5aa-3380-f32b-49d3-0d279bc749dc"]},"value":"flex"}},{"id":"a-72-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1-form.q5","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","af9802e9-a92b-3234-4219-fb5c40ad6c10"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-72-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"","duration":2500,"target":{"selector":".heading-1-form.q5","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","af9802e9-a92b-3234-4219-fb5c40ad6c10"]},"value":1,"unit":""}},{"id":"a-72-n-14","actionTypeId":"TRANSFORM_SKEW","config":{"delay":200,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1-form.q5","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","af9802e9-a92b-3234-4219-fb5c40ad6c10"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-72-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":700,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".form-name-field","selectorGuids":["4f480abf-bde5-2daa-6d8e-1337e1651b16"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-72-n-15","actionTypeId":"STYLE_SIZE","config":{"delay":700,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"selector":".form-field-underline.q5-line-1","selectorGuids":["9bc7e446-8044-46df-acfa-3bf47b51bbe7","dfc21151-6932-c3a5-b521-f21c5d3948fc"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-72-n-22","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".form-email-field","selectorGuids":["ff6a40d0-277f-929f-d50d-62e3610c8f09"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-72-n-24","actionTypeId":"STYLE_SIZE","config":{"delay":1000,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"selector":".form-field-underline.q5-line-2","selectorGuids":["9bc7e446-8044-46df-acfa-3bf47b51bbe7","82115211-10ce-0b76-ddef-38f046fa071c"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-72-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1300,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".form-phone-field","selectorGuids":["a5c866c1-1c3e-85e3-a1fc-7a6dbf2321e2"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-72-n-25","actionTypeId":"STYLE_SIZE","config":{"delay":1300,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"selector":".form-field-underline.q5-line-3","selectorGuids":["9bc7e446-8044-46df-acfa-3bf47b51bbe7","7739b3a2-446d-ac6e-7230-83da4061459d"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-72-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":3800,"easing":"","duration":1250,"target":{"selector":".form-q5-wrap-other","selectorGuids":["096c8156-4abf-e617-1b13-3c71d80d1fc8"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676578481085},"a-74":{"id":"a-74","title":"99 GLOBAL - ON LOAD - P PRELOADER","actionItemGroups":[{"actionItems":[{"id":"a-74-n-17","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".preloader","selectorGuids":["f928536e-d82c-8602-9ae1-ed8f01eb00a7"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}}]},{"actionItems":[{"id":"a-74-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":750,"easing":[0.77,0,0.175,1],"duration":1250,"target":{"selector":".preloader-dot-2","selectorGuids":["c8f3c0d6-d790-5803-5086-4b3c398234d4"]},"xValue":-11.25,"yValue":null,"xUnit":"px","yUnit":"%","zUnit":"PX"}},{"id":"a-74-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":750,"easing":[0.77,0,0.175,1],"duration":1250,"target":{"selector":".preloader-dot-1","selectorGuids":["192d1952-f980-7de7-6d10-80ac99f3ec90"]},"xValue":11.25,"yValue":null,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-74-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.645,0.045,0.355,1],"duration":1250,"target":{"selector":".preloader-dot-1","selectorGuids":["192d1952-f980-7de7-6d10-80ac99f3ec90"]},"xValue":null,"yValue":100,"xUnit":"px","yUnit":"%","zUnit":"PX"}},{"id":"a-74-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.645,0.045,0.355,1],"duration":1250,"target":{"selector":".preloader-dot-2","selectorGuids":["c8f3c0d6-d790-5803-5086-4b3c398234d4"]},"xValue":null,"yValue":100,"xUnit":"px","yUnit":"%","zUnit":"PX"}},{"id":"a-74-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":1250,"easing":"","duration":1500,"target":{"selector":".preloader","selectorGuids":["f928536e-d82c-8602-9ae1-ed8f01eb00a7"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-74-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".preloader","selectorGuids":["f928536e-d82c-8602-9ae1-ed8f01eb00a7"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676246992189},"a-77":{"id":"a-77","title":"99 GLOBAL - CURSOR HOVER","actionItemGroups":[{"actionItems":[{"id":"a-77-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":1000,"target":{"selector":".cursor-dot","selectorGuids":["f1a147a1-712e-f2f1-6d71-45a5472aa48d"]},"widthValue":50,"heightValue":50,"widthUnit":"px","heightUnit":"px","locked":true}},{"id":"a-77-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":1000,"target":{"selector":".cursor-dot-2","selectorGuids":["e4d19de7-a993-3ef3-f2d5-cf3c60f14ffe"]},"widthValue":50,"heightValue":50,"widthUnit":"px","heightUnit":"px","locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1677010967341},"a-78":{"id":"a-78","title":"99 GLOBAL - CURSOR HOVER OUT","actionItemGroups":[{"actionItems":[{"id":"a-78-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":1000,"target":{"selector":".cursor-dot","selectorGuids":["f1a147a1-712e-f2f1-6d71-45a5472aa48d"]},"widthValue":15,"heightValue":15,"widthUnit":"px","heightUnit":"px","locked":true}},{"id":"a-78-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":1000,"target":{"selector":".cursor-dot-2","selectorGuids":["e4d19de7-a993-3ef3-f2d5-cf3c60f14ffe"]},"widthValue":15,"heightValue":15,"widthUnit":"px","heightUnit":"px","locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1677010967341},"a-75":{"id":"a-75","title":"99 GLOBAL - CURSOR DOT","continuousParameterGroups":[{"id":"a-75-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-75-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".cursor-dot","selectorGuids":["f1a147a1-712e-f2f1-6d71-45a5472aa48d"]},"xValue":-50,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-75-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".cursor-dot","selectorGuids":["f1a147a1-712e-f2f1-6d71-45a5472aa48d"]},"xValue":50,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]},{"id":"a-75-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-75-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".cursor-dot","selectorGuids":["f1a147a1-712e-f2f1-6d71-45a5472aa48d"]},"yValue":-50,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-75-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".cursor-dot","selectorGuids":["f1a147a1-712e-f2f1-6d71-45a5472aa48d"]},"yValue":50,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}}]}]}],"createdOn":1677009063919},"a-76":{"id":"a-76","title":"99 GLOBAL - CURSOR DOT 2","continuousParameterGroups":[{"id":"a-76-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-76-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".cursor-dot-2","selectorGuids":["e4d19de7-a993-3ef3-f2d5-cf3c60f14ffe"]},"xValue":-50,"yValue":null,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-76-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".cursor-dot-2","selectorGuids":["e4d19de7-a993-3ef3-f2d5-cf3c60f14ffe"]},"xValue":50,"yValue":null,"xUnit":"vw","yUnit":"vw","zUnit":"PX"}}]}]},{"id":"a-76-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-76-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".cursor-dot-2","selectorGuids":["e4d19de7-a993-3ef3-f2d5-cf3c60f14ffe"]},"yValue":-50,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-76-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".cursor-dot-2","selectorGuids":["e4d19de7-a993-3ef3-f2d5-cf3c60f14ffe"]},"yValue":50,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}}]}]}],"createdOn":1677010629323},"a-80":{"id":"a-80","title":"99 WHO - PAGE TRIGGER - CEO FRAME","continuousParameterGroups":[{"id":"a-80-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-80-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ceo-frame","selectorGuids":["2705bbf4-b3ea-19bf-e665-d3a93e6f12cc"]},"xValue":-15,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-80-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ceo-frame","selectorGuids":["2705bbf4-b3ea-19bf-e665-d3a93e6f12cc"]},"xValue":15,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]},{"id":"a-80-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-80-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ceo-frame","selectorGuids":["2705bbf4-b3ea-19bf-e665-d3a93e6f12cc"]},"yValue":-15,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-80-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ceo-frame","selectorGuids":["2705bbf4-b3ea-19bf-e665-d3a93e6f12cc"]},"yValue":15,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}}]}]}],"createdOn":1677186867003},"a-82":{"id":"a-82","title":"99 GLOBAL - ON SCROLL - HEADINGS & PARAGRAPHS","actionItemGroups":[{"actionItems":[{"id":"a-82-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871"]},"yValue":120,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-82-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871"]},"value":0,"unit":""}},{"id":"a-82-n-3","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-82-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-1","selectorGuids":["d729621d-a328-ca18-29e8-e529b13a754e"]},"yValue":120,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-82-n-9","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-1","selectorGuids":["d729621d-a328-ca18-29e8-e529b13a754e"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-82-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-1","selectorGuids":["d729621d-a328-ca18-29e8-e529b13a754e"]},"value":0,"unit":""}},{"id":"a-82-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-2","selectorGuids":["ebb61687-0fad-86f2-ea62-e3689b092f7b"]},"yValue":120,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-82-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-2","selectorGuids":["ebb61687-0fad-86f2-ea62-e3689b092f7b"]},"value":0,"unit":""}},{"id":"a-82-n-14","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-2","selectorGuids":["ebb61687-0fad-86f2-ea62-e3689b092f7b"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-82-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-3","selectorGuids":["e2d4979a-5b62-c64e-7937-f01bbd7555b7"]},"yValue":120,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-82-n-21","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-3","selectorGuids":["e2d4979a-5b62-c64e-7937-f01bbd7555b7"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-82-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-3","selectorGuids":["e2d4979a-5b62-c64e-7937-f01bbd7555b7"]},"value":0,"unit":""}},{"id":"a-82-n-27","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".paragraph","selectorGuids":["a7217e76-e412-bc97-15ee-b27a7f1bc7e1"]},"value":0,"unit":""}},{"id":"a-82-n-30","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".paragraph-white-part","selectorGuids":["597e8b83-4ada-b0ea-8230-fb89074298d4"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}}]},{"actionItems":[{"id":"a-82-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-82-n-4","actionTypeId":"TRANSFORM_SKEW","config":{"delay":500,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-82-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":[0.25,0.25,0.75,0.75],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871"]},"value":1,"unit":""}},{"id":"a-82-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":700,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-1","selectorGuids":["d729621d-a328-ca18-29e8-e529b13a754e"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-82-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":700,"easing":[0.25,0.25,0.75,0.75],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-1","selectorGuids":["d729621d-a328-ca18-29e8-e529b13a754e"]},"value":1,"unit":""}},{"id":"a-82-n-11","actionTypeId":"TRANSFORM_SKEW","config":{"delay":700,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-1","selectorGuids":["d729621d-a328-ca18-29e8-e529b13a754e"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-82-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":900,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-2","selectorGuids":["ebb61687-0fad-86f2-ea62-e3689b092f7b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-82-n-18","actionTypeId":"TRANSFORM_SKEW","config":{"delay":900,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-2","selectorGuids":["ebb61687-0fad-86f2-ea62-e3689b092f7b"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-82-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":900,"easing":[0.25,0.25,0.75,0.75],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-2","selectorGuids":["ebb61687-0fad-86f2-ea62-e3689b092f7b"]},"value":1,"unit":""}},{"id":"a-82-n-23","actionTypeId":"TRANSFORM_SKEW","config":{"delay":1100,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-3","selectorGuids":["e2d4979a-5b62-c64e-7937-f01bbd7555b7"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-82-n-22","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1100,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-3","selectorGuids":["e2d4979a-5b62-c64e-7937-f01bbd7555b7"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-82-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":1100,"easing":[0.25,0.25,0.75,0.75],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".heading-1-3","selectorGuids":["e2d4979a-5b62-c64e-7937-f01bbd7555b7"]},"value":1,"unit":""}},{"id":"a-82-n-29","actionTypeId":"STYLE_OPACITY","config":{"delay":1500,"easing":"","duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".paragraph","selectorGuids":["a7217e76-e412-bc97-15ee-b27a7f1bc7e1"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-82-n-31","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":750,"target":{"useEventTarget":"CHILDREN","selector":".paragraph-white-part","selectorGuids":["597e8b83-4ada-b0ea-8230-fb89074298d4"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1677208647741},"a-83":{"id":"a-83","title":"99 HOME - ON SCROLL - SECTION LINE","actionItemGroups":[{"actionItems":[{"id":"a-83-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".line-left","selectorGuids":["744df40a-a3ad-86da-171a-b393ddb84ba4"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-83-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".line-left","selectorGuids":["744df40a-a3ad-86da-171a-b393ddb84ba4"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1677213836085},"a-84":{"id":"a-84","title":"99 HOME - ON LOAD - ALL WELCOME ANIMATIONS","actionItemGroups":[{"actionItems":[{"id":"a-84-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":1500,"target":{"selector":".header-bottom-line","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e968e"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-84-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".site-left-line","selectorGuids":["da56e2ae-1fcc-8795-6668-2227dbb4d9b0"]},"heightValue":0,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-84-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".scroll-bar","selectorGuids":["1b12c0a3-00ed-7621-6d1e-2023c9a069d1"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-84-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hamburger-line-1","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9697"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-84-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".hamburger-line-2","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e968c"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-84-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".plus-line-1","selectorGuids":["af4ff7ad-ca61-4f31-fa08-5f9c3165637c"]},"widthValue":0,"heightValue":1,"widthUnit":"px","heightUnit":"px","locked":false}},{"id":"a-84-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".plus-line-2","selectorGuids":["2f6e9ad8-6653-2fb9-3b1f-09f70b85f77b"]},"widthValue":1,"heightValue":0,"widthUnit":"px","heightUnit":"px","locked":false}},{"id":"a-84-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".color-switch-dot","selectorGuids":["eb13a3eb-f3ba-9822-cda1-9c6437ff6664"]},"value":0,"unit":""}},{"id":"a-84-n-9","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"selector":".site-right-line","selectorGuids":["0900156b-8c87-18a2-1cea-a5c8f8a4ccef"]},"heightValue":0,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-84-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".scroll-bar-dot","selectorGuids":["af8f48db-93ef-5fc0-dacc-2bf9ca7902ea"]},"value":0,"unit":""}},{"id":"a-84-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu-hamburger","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9691"]},"value":0,"unit":""}},{"id":"a-84-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".say-hello-button","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9695"]},"value":0,"unit":""}},{"id":"a-84-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".color-switch-frame","selectorGuids":["74aae00e-5371-c3be-f4ac-4a5de6347e9a"]},"value":0,"unit":""}},{"id":"a-84-n-14","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".say-hello-button","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9695"]},"widthValue":50,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-84-n-15","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".color-switch-frame","selectorGuids":["74aae00e-5371-c3be-f4ac-4a5de6347e9a"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-84-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".say-hello-text.hover-effect-text","selectorGuids":["e536cbb8-595a-2f41-884b-44cb78b2ecda","658089df-0d6e-9808-7bf1-c46af03f6765"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-84-n-17","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".say-hello-text.hover-effect-text","selectorGuids":["e536cbb8-595a-2f41-884b-44cb78b2ecda","658089df-0d6e-9808-7bf1-c46af03f6765"]},"xValue":0.7,"yValue":0.7,"locked":true}},{"id":"a-84-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".scroll-down-wrap","selectorGuids":["0ee03906-0769-07e5-416e-d5cad93015c6"]},"value":0,"unit":""}},{"id":"a-84-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".logo-circle-1","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9693"]},"xValue":11.5,"yValue":null,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-84-n-20","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".logo-circle-2","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e968f"]},"xValue":-11.5,"yValue":null,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-84-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".header-container-1","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9696"]},"value":0,"unit":""}},{"id":"a-84-n-67","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2500,"target":{"selector":".heading-1.home-s1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","ce1eb78f-fc54-450f-820d-ceefb44159f4"]},"value":0,"unit":""}},{"id":"a-84-n-69","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1.home-s1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","ce1eb78f-fc54-450f-820d-ceefb44159f4"]},"yValue":120,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-84-n-68","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1.home-s1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","ce1eb78f-fc54-450f-820d-ceefb44159f4"]},"xValue":null,"yValue":5,"xUnit":"deg","yUnit":"deg","zUnit":"DEG"}},{"id":"a-84-n-70","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2500,"target":{"selector":".heading-1-1.home-s1","selectorGuids":["d729621d-a328-ca18-29e8-e529b13a754e","0562d28e-2a42-2e63-b527-18adaca505a3"]},"value":0,"unit":""}},{"id":"a-84-n-72","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1-1.home-s1","selectorGuids":["d729621d-a328-ca18-29e8-e529b13a754e","0562d28e-2a42-2e63-b527-18adaca505a3"]},"xValue":null,"yValue":5,"xUnit":"deg","yUnit":"deg","zUnit":"DEG"}},{"id":"a-84-n-71","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1-1.home-s1","selectorGuids":["d729621d-a328-ca18-29e8-e529b13a754e","0562d28e-2a42-2e63-b527-18adaca505a3"]},"yValue":120,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-84-n-73","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2500,"target":{"id":"65c2286ce8952a148ef34efd|f18daffc-0a15-d55c-80dd-b44bd3858417"},"value":0,"unit":""}},{"id":"a-84-n-75","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"id":"65c2286ce8952a148ef34efd|f18daffc-0a15-d55c-80dd-b44bd3858417"},"yValue":120,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-84-n-74","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"id":"65c2286ce8952a148ef34efd|f18daffc-0a15-d55c-80dd-b44bd3858417"},"xValue":null,"yValue":5,"xUnit":"deg","yUnit":"deg","zUnit":"DEG"}},{"id":"a-84-n-76","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2500,"target":{"id":"65c2286ce8952a148ef34efd|6feaea32-3bbb-8b47-ba2a-ffba2a9506f3"},"value":0,"unit":""}},{"id":"a-84-n-78","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"id":"65c2286ce8952a148ef34efd|6feaea32-3bbb-8b47-ba2a-ffba2a9506f3"},"xValue":null,"yValue":5,"xUnit":"deg","yUnit":"deg","zUnit":"DEG"}},{"id":"a-84-n-77","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"id":"65c2286ce8952a148ef34efd|6feaea32-3bbb-8b47-ba2a-ffba2a9506f3"},"yValue":120,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-84-n-36","actionTypeId":"STYLE_OPACITY","config":{"delay":4750,"easing":"","duration":2500,"target":{"selector":".heading-1.home-s1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","ce1eb78f-fc54-450f-820d-ceefb44159f4"]},"value":1,"unit":""}},{"id":"a-84-n-34","actionTypeId":"TRANSFORM_SKEW","config":{"delay":4750,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1.home-s1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","ce1eb78f-fc54-450f-820d-ceefb44159f4"]},"xValue":null,"yValue":0,"xUnit":"deg","yUnit":"deg","zUnit":"DEG"}},{"id":"a-84-n-35","actionTypeId":"TRANSFORM_MOVE","config":{"delay":4750,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1.home-s1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","ce1eb78f-fc54-450f-820d-ceefb44159f4"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-84-n-39","actionTypeId":"TRANSFORM_MOVE","config":{"delay":4950,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1-1.home-s1","selectorGuids":["d729621d-a328-ca18-29e8-e529b13a754e","0562d28e-2a42-2e63-b527-18adaca505a3"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-84-n-37","actionTypeId":"TRANSFORM_SKEW","config":{"delay":4950,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1-1.home-s1","selectorGuids":["d729621d-a328-ca18-29e8-e529b13a754e","0562d28e-2a42-2e63-b527-18adaca505a3"]},"xValue":null,"yValue":0,"xUnit":"deg","yUnit":"deg","zUnit":"DEG"}},{"id":"a-84-n-38","actionTypeId":"STYLE_OPACITY","config":{"delay":4950,"easing":"","duration":2500,"target":{"selector":".heading-1-1.home-s1","selectorGuids":["d729621d-a328-ca18-29e8-e529b13a754e","0562d28e-2a42-2e63-b527-18adaca505a3"]},"value":1,"unit":""}},{"id":"a-84-n-40","actionTypeId":"STYLE_OPACITY","config":{"delay":5150,"easing":"","duration":2550,"target":{"id":"65c2286ce8952a148ef34efd|f18daffc-0a15-d55c-80dd-b44bd3858417"},"value":1,"unit":""}},{"id":"a-84-n-41","actionTypeId":"TRANSFORM_SKEW","config":{"delay":5150,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"id":"65c2286ce8952a148ef34efd|f18daffc-0a15-d55c-80dd-b44bd3858417"},"xValue":null,"yValue":0,"xUnit":"deg","yUnit":"deg","zUnit":"DEG"}},{"id":"a-84-n-42","actionTypeId":"TRANSFORM_MOVE","config":{"delay":5150,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"id":"65c2286ce8952a148ef34efd|f18daffc-0a15-d55c-80dd-b44bd3858417"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-84-n-43","actionTypeId":"TRANSFORM_SKEW","config":{"delay":5350,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"id":"65c2286ce8952a148ef34efd|6feaea32-3bbb-8b47-ba2a-ffba2a9506f3"},"xValue":null,"yValue":0,"xUnit":"deg","yUnit":"deg","zUnit":"DEG"}},{"id":"a-84-n-44","actionTypeId":"STYLE_OPACITY","config":{"delay":5350,"easing":"","duration":2500,"target":{"id":"65c2286ce8952a148ef34efd|6feaea32-3bbb-8b47-ba2a-ffba2a9506f3"},"value":1,"unit":""}},{"id":"a-84-n-45","actionTypeId":"TRANSFORM_MOVE","config":{"delay":5350,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"id":"65c2286ce8952a148ef34efd|6feaea32-3bbb-8b47-ba2a-ffba2a9506f3"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-84-n-53","actionTypeId":"STYLE_OPACITY","config":{"delay":6600,"easing":"","duration":0,"target":{"selector":".say-hello-button","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9695"]},"value":1,"unit":""}},{"id":"a-84-n-52","actionTypeId":"STYLE_OPACITY","config":{"delay":6800,"easing":"","duration":0,"target":{"selector":".menu-hamburger","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9691"]},"value":1,"unit":""}},{"id":"a-84-n-54","actionTypeId":"STYLE_OPACITY","config":{"delay":7000,"easing":"","duration":0,"target":{"selector":".color-switch-frame","selectorGuids":["74aae00e-5371-c3be-f4ac-4a5de6347e9a"]},"value":1,"unit":""}},{"id":"a-84-n-47","actionTypeId":"STYLE_SIZE","config":{"delay":7850,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"selector":".site-left-line","selectorGuids":["da56e2ae-1fcc-8795-6668-2227dbb4d9b0"]},"heightValue":100,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-84-n-48","actionTypeId":"STYLE_SIZE","config":{"delay":7850,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"selector":".site-right-line","selectorGuids":["0900156b-8c87-18a2-1cea-a5c8f8a4ccef"]},"heightValue":100,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-84-n-51","actionTypeId":"STYLE_SIZE","config":{"delay":7850,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"selector":".scroll-bar","selectorGuids":["1b12c0a3-00ed-7621-6d1e-2023c9a069d1"]},"heightValue":120,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-84-n-46","actionTypeId":"STYLE_SIZE","config":{"delay":7850,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"selector":".header-bottom-line","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e968e"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-84-n-49","actionTypeId":"STYLE_SIZE","config":{"delay":7850,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"selector":".plus-line-1","selectorGuids":["af4ff7ad-ca61-4f31-fa08-5f9c3165637c"]},"widthValue":1,"heightValue":25,"widthUnit":"px","heightUnit":"px","locked":false}},{"id":"a-84-n-50","actionTypeId":"STYLE_SIZE","config":{"delay":7850,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"selector":".plus-line-2","selectorGuids":["2f6e9ad8-6653-2fb9-3b1f-09f70b85f77b"]},"widthValue":25,"heightValue":1,"widthUnit":"px","heightUnit":"px","locked":false}},{"id":"a-84-n-58","actionTypeId":"STYLE_SIZE","config":{"delay":7850,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"selector":".hamburger-line-2","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e968c"]},"widthValue":30,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-84-n-59","actionTypeId":"STYLE_SIZE","config":{"delay":7850,"easing":[0.77,0,0.175,1],"duration":2500,"target":{"selector":".hamburger-line-1","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9697"]},"widthValue":30,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-84-n-56","actionTypeId":"STYLE_OPACITY","config":{"delay":9850,"easing":"","duration":0,"target":{"selector":".header-container-1","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9696"]},"value":1,"unit":""}},{"id":"a-84-n-55","actionTypeId":"STYLE_OPACITY","config":{"delay":10050,"easing":"","duration":0,"target":{"selector":".scroll-bar-dot","selectorGuids":["af8f48db-93ef-5fc0-dacc-2bf9ca7902ea"]},"value":1,"unit":""}},{"id":"a-84-n-57","actionTypeId":"STYLE_OPACITY","config":{"delay":10250,"easing":"","duration":0,"target":{"selector":".color-switch-dot","selectorGuids":["eb13a3eb-f3ba-9822-cda1-9c6437ff6664"]},"value":1,"unit":""}},{"id":"a-84-n-62","actionTypeId":"STYLE_OPACITY","config":{"delay":10450,"easing":"","duration":0,"target":{"selector":".scroll-down-wrap","selectorGuids":["0ee03906-0769-07e5-416e-d5cad93015c6"]},"value":1,"unit":""}},{"id":"a-84-n-63","actionTypeId":"TRANSFORM_MOVE","config":{"delay":10650,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"selector":".logo-circle-1","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9693"]},"xValue":0,"yValue":null,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-84-n-64","actionTypeId":"TRANSFORM_MOVE","config":{"delay":10650,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"selector":".logo-circle-2","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e968f"]},"xValue":0,"yValue":null,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-84-n-61","actionTypeId":"STYLE_SIZE","config":{"delay":10650,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"selector":".color-switch-frame","selectorGuids":["74aae00e-5371-c3be-f4ac-4a5de6347e9a"]},"widthValue":48,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-84-n-60","actionTypeId":"STYLE_SIZE","config":{"delay":10650,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"selector":".say-hello-button","selectorGuids":["a821f4e4-c42b-4f4a-4f22-942c0d7e9695"]},"widthValue":150,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-84-n-65","actionTypeId":"TRANSFORM_MOVE","config":{"delay":12650,"easing":[0.23,1,0.32,1],"duration":2000,"target":{"selector":".say-hello-text.hover-effect-text","selectorGuids":["e536cbb8-595a-2f41-884b-44cb78b2ecda","658089df-0d6e-9808-7bf1-c46af03f6765"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-84-n-66","actionTypeId":"TRANSFORM_SCALE","config":{"delay":14150,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".say-hello-text.hover-effect-text","selectorGuids":["e536cbb8-595a-2f41-884b-44cb78b2ecda","658089df-0d6e-9808-7bf1-c46af03f6765"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673571890376},"a-85":{"id":"a-85","title":"99 GLOBAL - MOUSE HOVER - LINKS / BUTTONS","actionItemGroups":[{"actionItems":[{"id":"a-85-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".hover-effect-text","selectorGuids":["081bb815-94b4-75a1-db1b-2535693fd57b"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1677221369409},"a-86":{"id":"a-86","title":"99 GLOBAL - MOUSE HOVER OUT - LINKS / BUTTONS","actionItemGroups":[{"actionItems":[{"id":"a-86-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":0,"target":{"useEventTarget":"CHILDREN","selector":".hover-effect-text","selectorGuids":["081bb815-94b4-75a1-db1b-2535693fd57b"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-86-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".hover-effect-text","selectorGuids":["081bb815-94b4-75a1-db1b-2535693fd57b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1677221369409},"a-87":{"id":"a-87","title":"99 HOME - ON SCROLL - SERVICE","actionItemGroups":[{"actionItems":[{"id":"a-87-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":1250,"target":{"useEventTarget":"CHILDREN","selector":".service-text","selectorGuids":["f02de5dc-6832-96dc-4269-e0b59ea41f87"]},"yValue":50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-87-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-dot","selectorGuids":["c509ac51-8ef0-49a3-aff5-dc5c78d78391"]},"yValue":50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-87-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".wrap-service-line","selectorGuids":["2a4ce674-f46a-7069-341a-ca12495dd690"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-87-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".wrap-service-no","selectorGuids":["99d7c16d-a46f-8ba3-25da-8a2984d0de9e"]},"yValue":50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-87-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-no-text","selectorGuids":["9147307b-d738-3a2a-7fc4-6b109c90171c"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-87-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".wrap-service-line","selectorGuids":["2a4ce674-f46a-7069-341a-ca12495dd690"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-87-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1500,"easing":[0.165,0.84,0.44,1],"duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".service-text","selectorGuids":["f02de5dc-6832-96dc-4269-e0b59ea41f87"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-87-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1500,"easing":[0.165,0.84,0.44,1],"duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".service-dot","selectorGuids":["c509ac51-8ef0-49a3-aff5-dc5c78d78391"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-87-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1500,"easing":[0.165,0.84,0.44,1],"duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".wrap-service-no","selectorGuids":["99d7c16d-a46f-8ba3-25da-8a2984d0de9e"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-87-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":3000,"easing":[0.77,0,0.175,1],"duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".service-no-text","selectorGuids":["9147307b-d738-3a2a-7fc4-6b109c90171c"]},"yValue":-50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1677459395098},"a-88":{"id":"a-88","title":"99 HOME - HOVER - SERVICE","actionItemGroups":[{"actionItems":[{"id":"a-88-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".service-line","selectorGuids":["ac1fecc9-d2d1-13d6-a764-12957352478d"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-88-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".service-dot","selectorGuids":["c509ac51-8ef0-49a3-aff5-dc5c78d78391"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-88-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".service-text","selectorGuids":["f02de5dc-6832-96dc-4269-e0b59ea41f87"]},"xValue":20,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1677460524331},"a-89":{"id":"a-89","title":"99 HOME - HOVER OUT - SERVICE","actionItemGroups":[{"actionItems":[{"id":"a-89-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".service-line","selectorGuids":["ac1fecc9-d2d1-13d6-a764-12957352478d"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-89-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".service-dot","selectorGuids":["c509ac51-8ef0-49a3-aff5-dc5c78d78391"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":1}},{"id":"a-89-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".service-text","selectorGuids":["f02de5dc-6832-96dc-4269-e0b59ea41f87"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1677460524331},"a-37":{"id":"a-37","title":"99 HOME - ON SCROLL - BIG CIRCLES","continuousParameterGroups":[{"id":"a-37-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-37-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".big-circle-home","selectorGuids":["0b65e5a7-eea0-2a6b-8c04-b0e0436c1774"]},"xValue":0,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-37-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".big-circle-home","selectorGuids":["0b65e5a7-eea0-2a6b-8c04-b0e0436c1774"]},"xValue":50,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1674624532525},"a-90":{"id":"a-90","title":"99 HOME - ON SCROLL - CLIENT","actionItemGroups":[{"actionItems":[{"id":"a-90-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":1250,"target":{"useEventTarget":"CHILDREN","selector":".client-text","selectorGuids":["bff8f34f-48f1-9d62-2bcd-2e0f7151bd12"]},"yValue":50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-90-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".wrap-client-line","selectorGuids":["a8f3c794-900b-d8dd-8158-9d401c53a1cb"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-90-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".client-no-text","selectorGuids":["6a7c5ba3-b979-de4a-e1ab-bb9de56155c6"]},"yValue":50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-90-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"useEventTarget":"CHILDREN","selector":".wrap-client-line","selectorGuids":["a8f3c794-900b-d8dd-8158-9d401c53a1cb"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-90-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1500,"easing":[0.165,0.84,0.44,1],"duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".client-text","selectorGuids":["bff8f34f-48f1-9d62-2bcd-2e0f7151bd12"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-90-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1500,"easing":[0.165,0.84,0.44,1],"duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".client-no-text","selectorGuids":["6a7c5ba3-b979-de4a-e1ab-bb9de56155c6"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1677459395098},"a-91":{"id":"a-91","title":"99 HOME - HOVER - CLIENT","actionItemGroups":[{"actionItems":[{"id":"a-91-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".client-no-text","selectorGuids":["6a7c5ba3-b979-de4a-e1ab-bb9de56155c6"]},"xValue":-40,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-91-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".client-line","selectorGuids":["1e300a5c-ad28-5f77-18a3-01601dd833ad"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-91-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".client-no-text","selectorGuids":["6a7c5ba3-b979-de4a-e1ab-bb9de56155c6"]},"xValue":20,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1677460524331},"a-92":{"id":"a-92","title":"99 HOME - HOVER OUT - CLIENT","actionItemGroups":[{"actionItems":[{"id":"a-92-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".client-line","selectorGuids":["1e300a5c-ad28-5f77-18a3-01601dd833ad"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-92-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".client-no-text","selectorGuids":["6a7c5ba3-b979-de4a-e1ab-bb9de56155c6"]},"xValue":-40,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1677460524331},"a-22":{"id":"a-22","title":"99 GLOBAL - CLICK - SM BUTTONS","actionItemGroups":[{"actionItems":[{"id":"a-22-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-1","selectorGuids":["6e4f8c3f-a67c-001d-0c69-3a39df33ed6c"]},"value":"none"}},{"id":"a-22-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-2","selectorGuids":["695a57b1-720c-4533-33c3-1aad58afa3b5"]},"value":"none"}},{"id":"a-22-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-1","selectorGuids":["6e4f8c3f-a67c-001d-0c69-3a39df33ed6c"]},"value":0,"unit":""}},{"id":"a-22-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-2","selectorGuids":["695a57b1-720c-4533-33c3-1aad58afa3b5"]},"value":0,"unit":""}},{"id":"a-22-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".sm-button-1","selectorGuids":["6e4f8c3f-a67c-001d-0c69-3a39df33ed6c"]},"yValue":-25,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-22-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-2","selectorGuids":["695a57b1-720c-4533-33c3-1aad58afa3b5"]},"yValue":-75,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-22-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-1","selectorGuids":["6e4f8c3f-a67c-001d-0c69-3a39df33ed6c"]},"yValue":-50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-22-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-plus","selectorGuids":["b76b74ae-cdc0-a44b-ed31-f8cc82343caa"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-22-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-1","selectorGuids":["6e4f8c3f-a67c-001d-0c69-3a39df33ed6c"]},"value":1,"unit":""}},{"id":"a-22-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-2","selectorGuids":["695a57b1-720c-4533-33c3-1aad58afa3b5"]},"value":"flex"}},{"id":"a-22-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-1","selectorGuids":["6e4f8c3f-a67c-001d-0c69-3a39df33ed6c"]},"value":"flex"}},{"id":"a-22-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":[0.165,0.84,0.44,1],"duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-2","selectorGuids":["695a57b1-720c-4533-33c3-1aad58afa3b5"]},"yValue":-100,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-22-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-2","selectorGuids":["695a57b1-720c-4533-33c3-1aad58afa3b5"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673847277214},"a-93":{"id":"a-93","title":"99 GLOBAL - CLICK 2 - SM BUTTONS","actionItemGroups":[{"actionItems":[{"id":"a-93-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-plus","selectorGuids":["b76b74ae-cdc0-a44b-ed31-f8cc82343caa"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-93-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-1","selectorGuids":["6e4f8c3f-a67c-001d-0c69-3a39df33ed6c"]},"value":0,"unit":""}},{"id":"a-93-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"","duration":700,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-2","selectorGuids":["695a57b1-720c-4533-33c3-1aad58afa3b5"]},"value":0,"unit":""}},{"id":"a-93-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":1000,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-2","selectorGuids":["695a57b1-720c-4533-33c3-1aad58afa3b5"]},"value":"none"}},{"id":"a-93-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":1000,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-1","selectorGuids":["6e4f8c3f-a67c-001d-0c69-3a39df33ed6c"]},"value":"none"}},{"id":"a-93-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-1","selectorGuids":["6e4f8c3f-a67c-001d-0c69-3a39df33ed6c"]},"yValue":-25,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-93-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sm-button-2","selectorGuids":["695a57b1-720c-4533-33c3-1aad58afa3b5"]},"yValue":-75,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1673847277214},"a-25":{"id":"a-25","title":"99 GLOBAL - CLICK - COLOR SWITCH","actionItemGroups":[{"actionItems":[{"id":"a-25-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".color-switch-dot","selectorGuids":["eb13a3eb-f3ba-9822-cda1-9c6437ff6664"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-25-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".color-switch-dot","selectorGuids":["eb13a3eb-f3ba-9822-cda1-9c6437ff6664"]},"xValue":24,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-25-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":[0.25,0.25,0.75,0.75],"duration":0,"target":{"selector":".body","selectorGuids":["a259177b-91a3-8516-4920-806add783b66"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-25-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":[0.25,0.25,0.75,0.75],"duration":0,"target":{"selector":".menu","selectorGuids":["1c8d1c17-cac3-e036-716f-c7d87c652e0f"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":1}},{"id":"a-25-n-7","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":[0.25,0.25,0.75,0.75],"duration":0,"target":{"selector":".menu-bg","selectorGuids":["a4650a2e-8b7e-465e-8ce9-8fd3aa8fea0d"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-25-n-6","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".header-bg","selectorGuids":["934c4a74-4061-ca59-8bcd-bdbd43e6e732"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-25-n-8","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".say-hello-form","selectorGuids":["a8dc34d5-70c4-c33d-91d6-17b650a69728"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":1}},{"id":"a-25-n-9","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".say-hello-form-bg","selectorGuids":["c1b55dee-ecbf-72b6-1514-87db6cbfc928"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-25-n-10","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".transition-bg-1","selectorGuids":["612418af-b570-6860-e347-aeb434fa759f"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":1}},{"id":"a-25-n-11","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".transition-bg-2","selectorGuids":["6ab95388-6ef6-06df-4498-d19bb1d9f7e5"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673995192085},"a-26":{"id":"a-26","title":"99 GLOBAL - CLICK 2 - COLOR SWITCH","actionItemGroups":[{"actionItems":[{"id":"a-26-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".body","selectorGuids":["a259177b-91a3-8516-4920-806add783b66"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":1}},{"id":"a-26-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.165,0.84,0.44,1],"duration":1500,"target":{"selector":".color-switch-dot","selectorGuids":["eb13a3eb-f3ba-9822-cda1-9c6437ff6664"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-26-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".menu","selectorGuids":["1c8d1c17-cac3-e036-716f-c7d87c652e0f"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-26-n-7","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".menu-bg","selectorGuids":["a4650a2e-8b7e-465e-8ce9-8fd3aa8fea0d"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":1}},{"id":"a-26-n-6","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".header-bg","selectorGuids":["934c4a74-4061-ca59-8bcd-bdbd43e6e732"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":1}},{"id":"a-26-n-8","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".say-hello-form","selectorGuids":["a8dc34d5-70c4-c33d-91d6-17b650a69728"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-26-n-9","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".say-hello-form-bg","selectorGuids":["c1b55dee-ecbf-72b6-1514-87db6cbfc928"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":1}},{"id":"a-26-n-10","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".transition-bg-1","selectorGuids":["612418af-b570-6860-e347-aeb434fa759f"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-26-n-11","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".transition-bg-2","selectorGuids":["6ab95388-6ef6-06df-4498-d19bb1d9f7e5"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1673995192085},"a-79":{"id":"a-79","title":"99 GLOBAL -  ON SCROLL - SCROLL BAR DOT","continuousParameterGroups":[{"id":"a-79-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-79-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.25,0.25,0.75,0.75],"duration":500,"target":{"selector":".scroll-bar-dot","selectorGuids":["af8f48db-93ef-5fc0-dacc-2bf9ca7902ea"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-79-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.25,0.25,0.75,0.75],"duration":500,"target":{"selector":".scroll-bar-dot","selectorGuids":["af8f48db-93ef-5fc0-dacc-2bf9ca7902ea"]},"yValue":112,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}]}],"createdOn":1673978404269},"a-65":{"id":"a-65","title":"99 GLOBAL - CLICK - OPEN SAY HELLO","actionItemGroups":[{"actionItems":[{"id":"a-65-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":1500,"target":{"selector":".say-hello-form","selectorGuids":["a8dc34d5-70c4-c33d-91d6-17b650a69728"]},"heightValue":0,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-65-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":1500,"target":{"selector":".say-hello-form-bg","selectorGuids":["c1b55dee-ecbf-72b6-1514-87db6cbfc928"]},"heightValue":0,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-65-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".say-hello-form-wrap","selectorGuids":["11fc64f0-acb8-b7ab-c2e9-470cbe3a11b1"]},"xValue":0.9,"yValue":0.9,"locked":true}},{"id":"a-65-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".heading-1-form.q1","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","dd6462d1-e7da-182d-d973-499b75219c0c"]},"yValue":110,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-65-n-9","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".heading-1-form.q1","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","dd6462d1-e7da-182d-d973-499b75219c0c"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-65-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".heading-1-form.q1","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","dd6462d1-e7da-182d-d973-499b75219c0c"]},"value":0,"unit":""}},{"id":"a-65-n-13","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".form-checkbox-field.q1","selectorGuids":["3829e01f-54e7-146f-6e96-2d1e0db31641","dde7447a-d3a2-32d4-b6b0-f94e0dd97f84"]},"widthValue":50,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-65-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".checkbox-label.branding.q1","selectorGuids":["b8de5be0-ad0a-a494-b34b-654f5d3f2463","20323fae-71f5-11bf-af83-06b53a94d9b0","672e8ae3-89c7-4235-edf4-945499b6e163"]},"value":0,"unit":""}},{"id":"a-65-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".checkbox-label.strategy.q1","selectorGuids":["b8de5be0-ad0a-a494-b34b-654f5d3f2463","a676de14-a4f5-4b49-5a92-f360119e4649","2f07dc4f-c299-0964-5a8d-c6a8530720c8"]},"value":0,"unit":""}},{"id":"a-65-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".checkbox-label.web-design.q1","selectorGuids":["b8de5be0-ad0a-a494-b34b-654f5d3f2463","3361b317-c8b8-3248-bfec-482fed9fc7ad","6f0608d1-3f82-cbda-7bbb-78ac5ead4d00"]},"value":0,"unit":""}},{"id":"a-65-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".checkbox-label.development.q1","selectorGuids":["b8de5be0-ad0a-a494-b34b-654f5d3f2463","39d66ffe-9566-78c9-2716-9f3799532102","6988b9f5-f2f0-3428-42f0-3523192ba67c"]},"value":0,"unit":""}},{"id":"a-65-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".checkbox-label.marketing.q1","selectorGuids":["b8de5be0-ad0a-a494-b34b-654f5d3f2463","3dc8477c-293e-8056-ac06-e118791cbeab","ccbd6725-5e45-e942-d27f-2b3abe123c2c"]},"value":0,"unit":""}},{"id":"a-65-n-17","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".form-link-next-wrap.q1","selectorGuids":["1d4c2cb9-da5d-f046-7408-4e5f05c59e3b","1b30a9e6-7c10-2101-4a98-7073db73be0b"]},"xValue":0.2,"yValue":0.2,"locked":true}},{"id":"a-65-n-27","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".form-page-no.q1","selectorGuids":["19fcd6d4-4910-6c0f-f59c-8ca76054a8fb","137a200e-baa8-6201-a842-35e33b110be1"]},"value":0,"unit":""}},{"id":"a-65-n-31","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".form-link-next-img.q1","selectorGuids":["ea9ca55b-f1da-7dd5-ac82-8b0507a05495","7ce10feb-d60f-f34d-b69e-3793b1678867"]},"value":0,"unit":""}},{"id":"a-65-n-33","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".form-link-close-wrap.q1.scroll-block-trigger","selectorGuids":["70ce4f50-76ea-01d1-4c03-5637555a34be","490914d6-4301-6f7b-baac-8839b5f7b645","f752f217-de4f-52a3-90f5-0cf613517e3d"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-65-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":1500,"target":{"selector":".say-hello-form","selectorGuids":["a8dc34d5-70c4-c33d-91d6-17b650a69728"]},"heightValue":100,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-65-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.86,0,0.07,1],"duration":2000,"target":{"selector":".say-hello-form-bg","selectorGuids":["c1b55dee-ecbf-72b6-1514-87db6cbfc928"]},"heightValue":100,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-65-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":1500,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".say-hello-form-wrap","selectorGuids":["11fc64f0-acb8-b7ab-c2e9-470cbe3a11b1"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-65-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1500,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1-form.q1","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","dd6462d1-e7da-182d-d973-499b75219c0c"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-65-n-10","actionTypeId":"TRANSFORM_SKEW","config":{"delay":1500,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1-form.q1","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","dd6462d1-e7da-182d-d973-499b75219c0c"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-65-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":1500,"easing":"","duration":2500,"target":{"selector":".heading-1-form.q1","selectorGuids":["d2db660d-ade1-096d-fa37-d9707509510f","dd6462d1-e7da-182d-d973-499b75219c0c"]},"value":1,"unit":""}},{"id":"a-65-n-14","actionTypeId":"STYLE_SIZE","config":{"delay":2000,"easing":[0.77,0,0.175,1],"duration":1500,"target":{"selector":".form-checkbox-field.q1","selectorGuids":["3829e01f-54e7-146f-6e96-2d1e0db31641","dde7447a-d3a2-32d4-b6b0-f94e0dd97f84"]},"widthValue":250,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-65-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":3250,"easing":"","duration":0,"target":{"selector":".checkbox-label.branding.q1","selectorGuids":["b8de5be0-ad0a-a494-b34b-654f5d3f2463","20323fae-71f5-11bf-af83-06b53a94d9b0","672e8ae3-89c7-4235-edf4-945499b6e163"]},"value":1,"unit":""}},{"id":"a-65-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":3400,"easing":"","duration":0,"target":{"selector":".checkbox-label.strategy.q1","selectorGuids":["b8de5be0-ad0a-a494-b34b-654f5d3f2463","a676de14-a4f5-4b49-5a92-f360119e4649","2f07dc4f-c299-0964-5a8d-c6a8530720c8"]},"value":1,"unit":""}},{"id":"a-65-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":3550,"easing":"","duration":0,"target":{"selector":".checkbox-label.web-design.q1","selectorGuids":["b8de5be0-ad0a-a494-b34b-654f5d3f2463","3361b317-c8b8-3248-bfec-482fed9fc7ad","6f0608d1-3f82-cbda-7bbb-78ac5ead4d00"]},"value":1,"unit":""}},{"id":"a-65-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":3700,"easing":"","duration":0,"target":{"selector":".checkbox-label.development.q1","selectorGuids":["b8de5be0-ad0a-a494-b34b-654f5d3f2463","39d66ffe-9566-78c9-2716-9f3799532102","6988b9f5-f2f0-3428-42f0-3523192ba67c"]},"value":1,"unit":""}},{"id":"a-65-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":3850,"easing":"","duration":0,"target":{"selector":".checkbox-label.marketing.q1","selectorGuids":["b8de5be0-ad0a-a494-b34b-654f5d3f2463","3dc8477c-293e-8056-ac06-e118791cbeab","ccbd6725-5e45-e942-d27f-2b3abe123c2c"]},"value":1,"unit":""}},{"id":"a-65-n-18","actionTypeId":"TRANSFORM_SCALE","config":{"delay":4000,"easing":[0.86,0,0.07,1],"duration":2500,"target":{"selector":".form-link-next-wrap.q1","selectorGuids":["1d4c2cb9-da5d-f046-7408-4e5f05c59e3b","1b30a9e6-7c10-2101-4a98-7073db73be0b"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-65-n-28","actionTypeId":"STYLE_OPACITY","config":{"delay":5250,"easing":"","duration":1250,"target":{"selector":".form-page-no.q1","selectorGuids":["19fcd6d4-4910-6c0f-f59c-8ca76054a8fb","137a200e-baa8-6201-a842-35e33b110be1"]},"value":1,"unit":""}},{"id":"a-65-n-32","actionTypeId":"STYLE_OPACITY","config":{"delay":5250,"easing":"","duration":1250,"target":{"selector":".form-link-next-img.q1","selectorGuids":["ea9ca55b-f1da-7dd5-ac82-8b0507a05495","7ce10feb-d60f-f34d-b69e-3793b1678867"]},"value":1,"unit":""}},{"id":"a-65-n-34","actionTypeId":"STYLE_OPACITY","config":{"delay":5250,"easing":"","duration":1250,"target":{"selector":".form-link-close-wrap.q1.scroll-block-trigger","selectorGuids":["70ce4f50-76ea-01d1-4c03-5637555a34be","490914d6-4301-6f7b-baac-8839b5f7b645","f752f217-de4f-52a3-90f5-0cf613517e3d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676446318146},"a-81":{"id":"a-81","title":"99 GLOBAL - PAGE LOAD  - PULSING DOTS","actionItemGroups":[{"actionItems":[{"id":"a-81-n-9","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":[0.455,0.03,0.515,0.955],"duration":1000,"target":{"selector":".pulsing-dot","selectorGuids":["c08f104f-2440-fbb5-3649-a76d984c23a2"]},"xValue":0.8,"yValue":0.8,"locked":true}}]},{"actionItems":[{"id":"a-81-n-10","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":[0.455,0.03,0.515,0.955],"duration":1000,"target":{"selector":".pulsing-dot","selectorGuids":["c08f104f-2440-fbb5-3649-a76d984c23a2"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1677188777424},"a-99":{"id":"a-99","title":"99 WHO - ON SCROLL - S5 NUMBERS","actionItemGroups":[{"actionItems":[{"id":"a-99-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":[0.165,0.84,0.44,1],"duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".heading-4.who-s5","selectorGuids":["5c8e7d8c-215f-2929-3a69-754d5727ab26","b3f3bf27-4240-b08d-300b-2239e64543b2"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678218500933},"a-28":{"id":"a-28","title":"99 HOME - ON SCROLL - LOOP SCROLL DOWN TEXT","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":2500,"easing":[0.77,0,0.175,1],"duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".scroll-down-text","selectorGuids":["72c6a177-be35-3561-a5d8-d4cc9c72a92b"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-28-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":2500,"easing":[0.77,0,0.175,1],"duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".scroll-down-text","selectorGuids":["72c6a177-be35-3561-a5d8-d4cc9c72a92b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1674154006283},"a-30":{"id":"a-30","title":"99 HOME - ON SCROLL - SCROLL DOWN TEXT","continuousParameterGroups":[{"id":"a-30-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-30-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".scroll-down-part-1","selectorGuids":["aa7e87d2-8411-88f6-0bae-ed7a5c52ea76"]},"value":1,"unit":""}}]},{"keyframe":44,"actionItems":[{"id":"a-30-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".scroll-down-part-1","selectorGuids":["aa7e87d2-8411-88f6-0bae-ed7a5c52ea76"]},"value":1,"unit":""}}]},{"keyframe":45,"actionItems":[{"id":"a-30-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".scroll-down-part-1","selectorGuids":["aa7e87d2-8411-88f6-0bae-ed7a5c52ea76"]},"value":0,"unit":""}}]},{"keyframe":46,"actionItems":[{"id":"a-30-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".scroll-down-text-so-you-are","selectorGuids":["60d2176c-f2c9-3c8e-e1a2-e2e9a436e931"]},"value":0,"unit":""}}]},{"keyframe":47,"actionItems":[{"id":"a-30-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".scroll-down-text-so-you-are","selectorGuids":["60d2176c-f2c9-3c8e-e1a2-e2e9a436e931"]},"value":1,"unit":""}}]},{"keyframe":100,"actionItems":[{"id":"a-30-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".scroll-down-text-so-you-are","selectorGuids":["60d2176c-f2c9-3c8e-e1a2-e2e9a436e931"]},"value":1,"unit":""}}]}]}],"createdOn":1674156576637},"a-100":{"id":"a-100","title":"PAGE SCROLL BAR 2","continuousParameterGroups":[{"id":"a-100-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-100-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.645,0.045,0.355,1],"duration":500,"target":{"id":"65c2286ce8952a148ef34f04|1f899373-8052-0fa4-2f5a-48c391d042f4"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-100-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.645,0.045,0.355,1],"duration":500,"target":{"id":"65c2286ce8952a148ef34f04|1f899373-8052-0fa4-2f5a-48c391d042f4"},"yValue":113,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}]}],"createdOn":1673978404269},"a-101":{"id":"a-101","title":"99 WHAT - ON SCROLL - CIRCLE JUMP","actionItemGroups":[{"actionItems":[{"id":"a-101-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":[0.77,0,0.175,1],"duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".what-circle-jump","selectorGuids":["ceb28eee-1bfb-3fd8-e6e3-8fed7fffc5ac"]},"xValue":33,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678304973165},"a-102":{"id":"a-102","title":"99 WHAT - ON LOAD - ALL WELCOME ANIMATIONS 2","actionItemGroups":[{"actionItems":[{"id":"a-102-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".heading-1.what-s1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","969098f5-d516-aebc-c5a8-312b7e011d3e"]},"yValue":110,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-102-n-2","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".heading-1.what-s1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","969098f5-d516-aebc-c5a8-312b7e011d3e"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-102-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".heading-1.what-s1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","969098f5-d516-aebc-c5a8-312b7e011d3e"]},"value":0,"unit":""}},{"id":"a-102-n-11","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":1500,"target":{"selector":".what-circle-color-filling","selectorGuids":["c5fb6c10-f918-9141-ce67-7eae144604b9"]},"heightValue":0,"widthUnit":"PX","heightUnit":"%","locked":false}}]},{"actionItems":[{"id":"a-102-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":4750,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1.what-s1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","969098f5-d516-aebc-c5a8-312b7e011d3e"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-102-n-9","actionTypeId":"TRANSFORM_SKEW","config":{"delay":4750,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1.what-s1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","969098f5-d516-aebc-c5a8-312b7e011d3e"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-102-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":4750,"easing":"","duration":2500,"target":{"selector":".heading-1.what-s1","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","969098f5-d516-aebc-c5a8-312b7e011d3e"]},"value":1,"unit":""}},{"id":"a-102-n-12","actionTypeId":"STYLE_SIZE","config":{"delay":4750,"easing":[0.86,0,0.07,1],"duration":3500,"target":{"selector":".what-circle-color-filling","selectorGuids":["c5fb6c10-f918-9141-ce67-7eae144604b9"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675470305037},"a-73":{"id":"a-73","title":"99 GLOBAL - CLICK - Q5 TO TNX","actionItemGroups":[{"actionItems":[{"id":"a-73-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".heading-1.success","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","a5889538-4732-8a5f-e40f-fea9bd979f6a"]},"yValue":110,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-73-n-2","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".heading-1.success","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","a5889538-4732-8a5f-e40f-fea9bd979f6a"]},"yValue":5,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-73-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".heading-1.success","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","a5889538-4732-8a5f-e40f-fea9bd979f6a"]},"value":0,"unit":""}},{"id":"a-73-n-26","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".email-field-wrap.form-style","selectorGuids":["951b85fb-26ee-b582-874d-7febca48dc55","4b3d8d39-b76b-ef05-695a-c2186b4a1544"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-73-n-27","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".phone-field-wrap.form-style","selectorGuids":["f6e29ad3-6805-2100-ffe6-b95e25b631e4","fcfb3232-81d1-1a14-a1f0-d2ab8e4fd72e"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-73-n-28","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".paragraph.success","selectorGuids":["a7217e76-e412-bc97-15ee-b27a7f1bc7e1","24388b8e-ca40-6653-3fbc-0b65a6f6131a"]},"value":0,"unit":""}},{"id":"a-73-n-40","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".paragraph-white-part","selectorGuids":["597e8b83-4ada-b0ea-8230-fb89074298d4"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}},{"id":"a-73-n-42","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".form-link-close-wrap.thank-you.scroll-block-trigger","selectorGuids":["70ce4f50-76ea-01d1-4c03-5637555a34be","6d149fbc-a1a0-b228-9972-c49daa3a9e5e","55f1ccde-ec36-c4bf-bfc3-c13838cd43ae"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-73-n-44","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1250,"target":{"selector":".form-question-wrap.q5","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","557ae5aa-3380-f32b-49d3-0d279bc749dc"]},"value":0,"unit":""}},{"id":"a-73-n-45","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":[0.23,1,0.32,1],"duration":1250,"target":{"selector":".form-question-wrap.q5","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","557ae5aa-3380-f32b-49d3-0d279bc749dc"]},"xValue":0.8,"yValue":0.8,"locked":true}},{"id":"a-73-n-46","actionTypeId":"GENERAL_DISPLAY","config":{"delay":1250,"easing":"","duration":0,"target":{"selector":".form-question-wrap.q5","selectorGuids":["6e672c1f-4179-3df0-1282-cc77b174e39d","557ae5aa-3380-f32b-49d3-0d279bc749dc"]},"value":"none"}}]},{"actionItems":[{"id":"a-73-n-15","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"selector":".success-message","selectorGuids":["4bfcfa0c-d525-06ab-af2b-5e465b2f0436"]},"value":"flex"}},{"id":"a-73-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1.success","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","a5889538-4732-8a5f-e40f-fea9bd979f6a"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-73-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"","duration":2500,"target":{"selector":".heading-1.success","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","a5889538-4732-8a5f-e40f-fea9bd979f6a"]},"value":1,"unit":""}},{"id":"a-73-n-18","actionTypeId":"TRANSFORM_SKEW","config":{"delay":200,"easing":[0.23,1,0.32,1],"duration":2500,"target":{"selector":".heading-1.success","selectorGuids":["424b28dc-6df2-2f6f-4cd7-2802d0c88871","a5889538-4732-8a5f-e40f-fea9bd979f6a"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-73-n-31","actionTypeId":"STYLE_OPACITY","config":{"delay":1700,"easing":"","duration":2500,"target":{"selector":".paragraph.success","selectorGuids":["a7217e76-e412-bc97-15ee-b27a7f1bc7e1","24388b8e-ca40-6653-3fbc-0b65a6f6131a"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-73-n-41","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":1000,"target":{"selector":".paragraph-white-part","selectorGuids":["597e8b83-4ada-b0ea-8230-fb89074298d4"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]},{"actionItems":[{"id":"a-73-n-36","actionTypeId":"TRANSFORM_SCALE","config":{"delay":2000,"easing":[0.23,1,0.32,1],"duration":1500,"target":{"selector":".say-hello-form-wrap","selectorGuids":["11fc64f0-acb8-b7ab-c2e9-470cbe3a11b1"]},"xValue":0.8,"yValue":0.8,"locked":true}},{"id":"a-73-n-37","actionTypeId":"STYLE_OPACITY","config":{"delay":2000,"easing":"","duration":1500,"target":{"selector":".say-hello-form-wrap","selectorGuids":["11fc64f0-acb8-b7ab-c2e9-470cbe3a11b1"]},"value":0,"unit":""}},{"id":"a-73-n-32","actionTypeId":"TRANSFORM_MOVE","config":{"delay":2000,"easing":[0.23,1,0.32,1],"duration":1250,"target":{"selector":".email-field-wrap.form-style","selectorGuids":["951b85fb-26ee-b582-874d-7febca48dc55","4b3d8d39-b76b-ef05-695a-c2186b4a1544"]},"xValue":-101,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-73-n-33","actionTypeId":"TRANSFORM_MOVE","config":{"delay":2000,"easing":[0.23,1,0.32,1],"duration":1250,"target":{"selector":".phone-field-wrap.form-style","selectorGuids":["f6e29ad3-6805-2100-ffe6-b95e25b631e4","fcfb3232-81d1-1a14-a1f0-d2ab8e4fd72e"]},"xValue":101,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-73-n-38","actionTypeId":"STYLE_SIZE","config":{"delay":2750,"easing":[0.86,0,0.07,1],"duration":1500,"target":{"selector":".say-hello-form-bg","selectorGuids":["c1b55dee-ecbf-72b6-1514-87db6cbfc928"]},"heightValue":0,"widthUnit":"PX","heightUnit":"vh","locked":false}},{"id":"a-73-n-39","actionTypeId":"STYLE_SIZE","config":{"delay":2750,"easing":[0.86,0,0.07,1],"duration":2000,"target":{"selector":".say-hello-form","selectorGuids":["a8dc34d5-70c4-c33d-91d6-17b650a69728"]},"heightValue":0,"widthUnit":"PX","heightUnit":"vh","locked":false}}]},{"actionItems":[{"id":"a-73-n-43","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".form-link-close-wrap.thank-you.scroll-block-trigger","selectorGuids":["70ce4f50-76ea-01d1-4c03-5637555a34be","6d149fbc-a1a0-b228-9972-c49daa3a9e5e","55f1ccde-ec36-c4bf-bfc3-c13838cd43ae"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1676578481085}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}
  );