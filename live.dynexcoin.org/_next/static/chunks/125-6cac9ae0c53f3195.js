"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [125],
  {
    51125: function (t, e, n) {
      n.d(e, {
        u: function () {
          return I;
        },
      });
      var r = n(2265),
        a = n(57042),
        i = n(85234),
        o = n(28293),
        l = n.n(o),
        c = n(68412),
        s = n.n(c),
        u = n(52727),
        p = n.n(u),
        f = n(49027),
        y = n.n(f),
        h = n(42077),
        d = n.n(h),
        m = n(79431),
        v = n(14304),
        b = n(88357),
        g = n(561),
        A = n(3841),
        x = n(97281),
        O = n(61586),
        P = n(43843),
        j = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"];
      function k(t) {
        return (k =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function E() {
        return (E = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function w(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function S(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? w(Object(n), !0).forEach(function (e) {
                R(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function L(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, B(r.key), r);
        }
      }
      function D(t, e) {
        return (D = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function M(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function N(t) {
        return (N = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function R(t, e, n) {
        return (
          (e = B(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function B(t) {
        var e = (function (t, e) {
          if ("object" !== k(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== k(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === k(e) ? e : String(e);
      }
      var I = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && D(t, e);
        })(u, t);
        var e,
          n,
          o,
          c =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = N(u);
              if (e) {
                var r = N(this).constructor;
                t = Reflect.construct(n, arguments, r);
              } else t = n.apply(this, arguments);
              return (function (t, e) {
                if (e && ("object" === k(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return M(t);
              })(this, t);
            });
        function u() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, u);
          for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            R(M((t = c.call.apply(c, [this].concat(n)))), "state", {
              isAnimationFinished: !0,
            }),
            R(M(t), "id", (0, x.EL)("recharts-area-")),
            R(M(t), "handleAnimationEnd", function () {
              var e = t.props.onAnimationEnd;
              t.setState({ isAnimationFinished: !0 }), l()(e) && e();
            }),
            R(M(t), "handleAnimationStart", function () {
              var e = t.props.onAnimationStart;
              t.setState({ isAnimationFinished: !1 }), l()(e) && e();
            }),
            t
          );
        }
        return (
          (n = [
            {
              key: "renderDots",
              value: function (t, e, n) {
                var a = this.props.isAnimationActive,
                  i = this.state.isAnimationFinished;
                if (a && !i) return null;
                var o = this.props,
                  l = o.dot,
                  c = o.points,
                  s = o.dataKey,
                  p = (0, P.L6)(this.props),
                  f = (0, P.L6)(l, !0),
                  y = c.map(function (t, e) {
                    var n = S(
                      S(S({ key: "dot-".concat(e), r: 3 }, p), f),
                      {},
                      {
                        dataKey: s,
                        cx: t.x,
                        cy: t.y,
                        index: e,
                        value: t.value,
                        payload: t.payload,
                      }
                    );
                    return u.renderDotItem(l, n);
                  }),
                  h = {
                    clipPath: t
                      ? "url(#clipPath-".concat(e ? "" : "dots-").concat(n, ")")
                      : null,
                  };
                return r.createElement(
                  b.m,
                  E({ className: "recharts-area-dots" }, h),
                  y
                );
              },
            },
            {
              key: "renderHorizontalRect",
              value: function (t) {
                var e = this.props,
                  n = e.baseLine,
                  a = e.points,
                  i = e.strokeWidth,
                  o = a[0].x,
                  l = a[a.length - 1].x,
                  c = t * Math.abs(o - l),
                  u = s()(
                    a.map(function (t) {
                      return t.y || 0;
                    })
                  );
                return ((0, x.hj)(n) && "number" == typeof n
                  ? (u = Math.max(n, u))
                  : n &&
                    Array.isArray(n) &&
                    n.length &&
                    (u = Math.max(
                      s()(
                        n.map(function (t) {
                          return t.y || 0;
                        })
                      ),
                      u
                    )),
                (0, x.hj)(u))
                  ? r.createElement("rect", {
                      x: o < l ? o : o - c,
                      y: 0,
                      width: c,
                      height: Math.floor(
                        u + (i ? parseInt("".concat(i), 10) : 1)
                      ),
                    })
                  : null;
              },
            },
            {
              key: "renderVerticalRect",
              value: function (t) {
                var e = this.props,
                  n = e.baseLine,
                  a = e.points,
                  i = e.strokeWidth,
                  o = a[0].y,
                  l = a[a.length - 1].y,
                  c = t * Math.abs(o - l),
                  u = s()(
                    a.map(function (t) {
                      return t.x || 0;
                    })
                  );
                return ((0, x.hj)(n) && "number" == typeof n
                  ? (u = Math.max(n, u))
                  : n &&
                    Array.isArray(n) &&
                    n.length &&
                    (u = Math.max(
                      s()(
                        n.map(function (t) {
                          return t.x || 0;
                        })
                      ),
                      u
                    )),
                (0, x.hj)(u))
                  ? r.createElement("rect", {
                      x: 0,
                      y: o < l ? o : o - c,
                      width: u + (i ? parseInt("".concat(i), 10) : 1),
                      height: Math.floor(c),
                    })
                  : null;
              },
            },
            {
              key: "renderClipRect",
              value: function (t) {
                return "vertical" === this.props.layout
                  ? this.renderVerticalRect(t)
                  : this.renderHorizontalRect(t);
              },
            },
            {
              key: "renderAreaStatically",
              value: function (t, e, n, a) {
                var i = this.props,
                  o = i.layout,
                  l = i.type,
                  c = i.stroke,
                  s = i.connectNulls,
                  u = i.isRange,
                  p =
                    (i.ref,
                    (function (t, e) {
                      if (null == t) return {};
                      var n,
                        r,
                        a = (function (t, e) {
                          if (null == t) return {};
                          var n,
                            r,
                            a = {},
                            i = Object.keys(t);
                          for (r = 0; r < i.length; r++)
                            (n = i[r]), e.indexOf(n) >= 0 || (a[n] = t[n]);
                          return a;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(t);
                        for (r = 0; r < i.length; r++)
                          (n = i[r]),
                            !(e.indexOf(n) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                t,
                                n
                              ) &&
                              (a[n] = t[n]);
                      }
                      return a;
                    })(i, j));
                return r.createElement(
                  b.m,
                  { clipPath: n ? "url(#clipPath-".concat(a, ")") : null },
                  r.createElement(
                    m.H,
                    E({}, (0, P.L6)(p, !0), {
                      points: t,
                      connectNulls: s,
                      type: l,
                      baseLine: e,
                      layout: o,
                      stroke: "none",
                      className: "recharts-area-area",
                    })
                  ),
                  "none" !== c &&
                    r.createElement(
                      m.H,
                      E({}, (0, P.L6)(this.props), {
                        className: "recharts-area-curve",
                        layout: o,
                        type: l,
                        connectNulls: s,
                        fill: "none",
                        points: t,
                      })
                    ),
                  "none" !== c &&
                    u &&
                    r.createElement(
                      m.H,
                      E({}, (0, P.L6)(this.props), {
                        className: "recharts-area-curve",
                        layout: o,
                        type: l,
                        connectNulls: s,
                        fill: "none",
                        points: e,
                      })
                    )
                );
              },
            },
            {
              key: "renderAreaWithAnimation",
              value: function (t, e) {
                var n = this,
                  a = this.props,
                  o = a.points,
                  l = a.baseLine,
                  c = a.isAnimationActive,
                  s = a.animationBegin,
                  u = a.animationDuration,
                  f = a.animationEasing,
                  h = a.animationId,
                  d = this.state,
                  m = d.prevPoints,
                  v = d.prevBaseLine;
                return r.createElement(
                  i.ZP,
                  {
                    begin: s,
                    duration: u,
                    isActive: c,
                    easing: f,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "area-".concat(h),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (a) {
                    var i = a.t;
                    if (m) {
                      var c,
                        s = m.length / o.length,
                        u = o.map(function (t, e) {
                          var n = Math.floor(e * s);
                          if (m[n]) {
                            var r = m[n],
                              a = (0, x.k4)(r.x, t.x),
                              o = (0, x.k4)(r.y, t.y);
                            return S(S({}, t), {}, { x: a(i), y: o(i) });
                          }
                          return t;
                        });
                      return (
                        (c =
                          (0, x.hj)(l) && "number" == typeof l
                            ? (0, x.k4)(v, l)(i)
                            : p()(l) || y()(l)
                            ? (0, x.k4)(v, 0)(i)
                            : l.map(function (t, e) {
                                var n = Math.floor(e * s);
                                if (v[n]) {
                                  var r = v[n],
                                    a = (0, x.k4)(r.x, t.x),
                                    o = (0, x.k4)(r.y, t.y);
                                  return S(S({}, t), {}, { x: a(i), y: o(i) });
                                }
                                return t;
                              })),
                        n.renderAreaStatically(u, c, t, e)
                      );
                    }
                    return r.createElement(
                      b.m,
                      null,
                      r.createElement(
                        "defs",
                        null,
                        r.createElement(
                          "clipPath",
                          { id: "animationClipPath-".concat(e) },
                          n.renderClipRect(i)
                        )
                      ),
                      r.createElement(
                        b.m,
                        { clipPath: "url(#animationClipPath-".concat(e, ")") },
                        n.renderAreaStatically(o, l, t, e)
                      )
                    );
                  }
                );
              },
            },
            {
              key: "renderArea",
              value: function (t, e) {
                var n = this.props,
                  r = n.points,
                  a = n.baseLine,
                  i = n.isAnimationActive,
                  o = this.state,
                  l = o.prevPoints,
                  c = o.prevBaseLine,
                  s = o.totalLength;
                return i &&
                  r &&
                  r.length &&
                  ((!l && s > 0) || !d()(l, r) || !d()(c, a))
                  ? this.renderAreaWithAnimation(t, e)
                  : this.renderAreaStatically(r, a, t, e);
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e = this.props,
                  n = e.hide,
                  i = e.dot,
                  o = e.points,
                  l = e.className,
                  c = e.top,
                  s = e.left,
                  u = e.xAxis,
                  f = e.yAxis,
                  y = e.width,
                  h = e.height,
                  d = e.isAnimationActive,
                  m = e.id;
                if (n || !o || !o.length) return null;
                var v = this.state.isAnimationFinished,
                  A = 1 === o.length,
                  x = (0, a.Z)("recharts-area", l),
                  O = u && u.allowDataOverflow,
                  j = f && f.allowDataOverflow,
                  k = O || j,
                  E = p()(m) ? this.id : m,
                  w =
                    null !== (t = (0, P.L6)(i)) && void 0 !== t
                      ? t
                      : { r: 3, strokeWidth: 2 },
                  S = w.r,
                  L = w.strokeWidth,
                  D = ((0, P.$k)(i) ? i : {}).clipDot,
                  M = void 0 === D || D,
                  N = 2 * (void 0 === S ? 3 : S) + (void 0 === L ? 2 : L);
                return r.createElement(
                  b.m,
                  { className: x },
                  O || j
                    ? r.createElement(
                        "defs",
                        null,
                        r.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(E) },
                          r.createElement("rect", {
                            x: O ? s : s - y / 2,
                            y: j ? c : c - h / 2,
                            width: O ? y : 2 * y,
                            height: j ? h : 2 * h,
                          })
                        ),
                        !M &&
                          r.createElement(
                            "clipPath",
                            { id: "clipPath-dots-".concat(E) },
                            r.createElement("rect", {
                              x: s - N / 2,
                              y: c - N / 2,
                              width: y + N,
                              height: h + N,
                            })
                          )
                      )
                    : null,
                  A ? null : this.renderArea(k, E),
                  (i || A) && this.renderDots(k, M, E),
                  (!d || v) && g.e.renderCallByParent(this.props, o)
                );
              },
            },
          ]),
          (o = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                return t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curPoints: t.points,
                      curBaseLine: t.baseLine,
                      prevPoints: e.curPoints,
                      prevBaseLine: e.curBaseLine,
                    }
                  : t.points !== e.curPoints || t.baseLine !== e.curBaseLine
                  ? { curPoints: t.points, curBaseLine: t.baseLine }
                  : null;
              },
            },
          ]),
          n && L(u.prototype, n),
          o && L(u, o),
          Object.defineProperty(u, "prototype", { writable: !1 }),
          u
        );
      })(r.PureComponent);
      R(I, "displayName", "Area"),
        R(I, "defaultProps", {
          stroke: "#3182bd",
          fill: "#3182bd",
          fillOpacity: 0.6,
          xAxisId: 0,
          yAxisId: 0,
          legendType: "line",
          connectNulls: !1,
          points: [],
          dot: !1,
          activeDot: !0,
          hide: !1,
          isAnimationActive: !A.x.isSsr,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        }),
        R(I, "getBaseValue", function (t, e, n, r) {
          var a = t.layout,
            i = t.baseValue,
            o = e.props.baseValue,
            l = null != o ? o : i;
          if ((0, x.hj)(l) && "number" == typeof l) return l;
          var c = "horizontal" === a ? r : n,
            s = c.scale.domain();
          if ("number" === c.type) {
            var u = Math.max(s[0], s[1]),
              p = Math.min(s[0], s[1]);
            return "dataMin" === l
              ? p
              : "dataMax" === l
              ? u
              : u < 0
              ? u
              : Math.max(Math.min(s[0], s[1]), 0);
          }
          return "dataMin" === l ? s[0] : "dataMax" === l ? s[1] : s[0];
        }),
        R(I, "getComposedData", function (t) {
          var e,
            n = t.props,
            r = t.item,
            a = t.xAxis,
            i = t.yAxis,
            o = t.xAxisTicks,
            l = t.yAxisTicks,
            c = t.bandSize,
            s = t.dataKey,
            u = t.stackedData,
            p = t.dataStartIndex,
            f = t.displayedData,
            y = t.offset,
            h = n.layout,
            d = u && u.length,
            m = I.getBaseValue(n, r, a, i),
            v = "horizontal" === h,
            b = !1,
            g = f.map(function (t, e) {
              d
                ? (n = u[p + e])
                : Array.isArray((n = (0, O.F$)(t, s)))
                ? (b = !0)
                : (n = [m, n]);
              var n,
                r = null == n[1] || (d && null == (0, O.F$)(t, s));
              return v
                ? {
                    x: (0, O.Hv)({
                      axis: a,
                      ticks: o,
                      bandSize: c,
                      entry: t,
                      index: e,
                    }),
                    y: r ? null : i.scale(n[1]),
                    value: n,
                    payload: t,
                  }
                : {
                    x: r ? null : a.scale(n[1]),
                    y: (0, O.Hv)({
                      axis: i,
                      ticks: l,
                      bandSize: c,
                      entry: t,
                      index: e,
                    }),
                    value: n,
                    payload: t,
                  };
            });
          return (
            (e =
              d || b
                ? g.map(function (t) {
                    var e = Array.isArray(t.value) ? t.value[0] : null;
                    return v
                      ? {
                          x: t.x,
                          y: null != e && null != t.y ? i.scale(e) : null,
                        }
                      : { x: null != e ? a.scale(e) : null, y: t.y };
                  })
                : v
                ? i.scale(m)
                : a.scale(m)),
            S({ points: g, baseLine: e, layout: h, isRange: b }, y)
          );
        }),
        R(I, "renderDotItem", function (t, e) {
          return r.isValidElement(t)
            ? r.cloneElement(t, e)
            : l()(t)
            ? t(e)
            : r.createElement(
                v.o,
                E({}, e, { className: "recharts-area-dot" })
              );
        });
    },
  },
]);
