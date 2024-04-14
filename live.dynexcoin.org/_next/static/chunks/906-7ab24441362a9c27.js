(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [906],
  {
    47906: function (e, t, r) {
      "use strict";
      var n = r(58551),
        o = r(22935);
      n.default, (t.QZ = o.default);
    },
    66747: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(36916),
        o = r(2265),
        a = r(28804),
        l = r(28073),
        u = o && o.__esModule ? o : { default: o };
      let i = o.forwardRef(function (e, t) {
        let { locale: r, ...o } = e,
          i = a.default(),
          s = r || i;
        return u.default.createElement(
          l.default,
          n.extends({ ref: t, hrefLang: s, locale: s }, o)
        );
      });
      (i.displayName = "ClientLink"), (t.default = i);
    },
    44528: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(28804),
        o = r(21052);
      t.default = function (e) {
        let t;
        try {
          t = n.default();
        } catch (e) {
          throw Error(void 0);
        }
        for (
          var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), l = 1;
          l < r;
          l++
        )
          a[l - 1] = arguments[l];
        return o.default({ ...e, locale: t }, ...a);
      };
    },
    22935: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(36916),
        o = r(2265),
        a = r(28804),
        l = r(28595),
        u = r(66747),
        i = r(44528),
        s = r(86727),
        c = r(76605),
        f = o && o.__esModule ? o : { default: o };
      t.default = function (e) {
        function t() {
          let t = a.default();
          if (!e.locales.includes(t)) throw Error(void 0);
          return t;
        }
        let r = o.forwardRef(function (r, o) {
          let { href: a, locale: i, ...s } = r,
            c = t(),
            d = i || c;
          return f.default.createElement(
            u.default,
            n.extends(
              {
                ref: o,
                href: l.compileLocalizedPathname({
                  locale: d,
                  pathname: a,
                  params: "object" == typeof a ? a.params : void 0,
                  pathnames: e.pathnames,
                }),
                locale: i,
                localePrefix: e.localePrefix,
              },
              s
            )
          );
        });
        function d(t) {
          let { href: r, locale: n } = t;
          return l.compileLocalizedPathname({
            ...l.normalizeNameOrNameWithParams(r),
            locale: n,
            pathnames: e.pathnames,
          });
        }
        return (
          (r.displayName = "Link"),
          {
            Link: r,
            redirect: function (r) {
              let n = d({ href: r, locale: t() });
              for (
                var o = arguments.length, a = Array(o > 1 ? o - 1 : 0), l = 1;
                l < o;
                l++
              )
                a[l - 1] = arguments[l];
              return i.default({ ...e, pathname: n }, ...a);
            },
            usePathname: function () {
              let r = s.default(),
                n = t();
              return r
                ? l.getRoute({ pathname: r, locale: n, pathnames: e.pathnames })
                : r;
            },
            useRouter: function () {
              let e = c.default(),
                r = t();
              return {
                ...e,
                push(t) {
                  for (
                    var n,
                      o = arguments.length,
                      a = Array(o > 1 ? o - 1 : 0),
                      l = 1;
                    l < o;
                    l++
                  )
                    a[l - 1] = arguments[l];
                  let u = d({
                    href: t,
                    locale:
                      (null === (n = a[0]) || void 0 === n
                        ? void 0
                        : n.locale) || r,
                  });
                  return e.push(u, ...a);
                },
                replace(t) {
                  for (
                    var n,
                      o = arguments.length,
                      a = Array(o > 1 ? o - 1 : 0),
                      l = 1;
                    l < o;
                    l++
                  )
                    a[l - 1] = arguments[l];
                  let u = d({
                    href: t,
                    locale:
                      (null === (n = a[0]) || void 0 === n
                        ? void 0
                        : n.locale) || r,
                  });
                  return e.replace(u, ...a);
                },
                prefetch(t) {
                  for (
                    var n,
                      o = arguments.length,
                      a = Array(o > 1 ? o - 1 : 0),
                      l = 1;
                    l < o;
                    l++
                  )
                    a[l - 1] = arguments[l];
                  let u = d({
                    href: t,
                    locale:
                      (null === (n = a[0]) || void 0 === n
                        ? void 0
                        : n.locale) || r,
                  });
                  return e.prefetch(u, ...a);
                },
              };
            },
            getPathname: d,
          }
        );
      };
    },
    58551: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(36916),
        o = r(2265),
        a = r(66747),
        l = r(44528),
        u = r(86727),
        i = r(76605),
        s = o && o.__esModule ? o : { default: o };
      t.default = function (e) {
        let t = o.forwardRef(function (t, r) {
          return s.default.createElement(
            a.default,
            n.extends({ ref: r, localePrefix: e.localePrefix }, t)
          );
        });
        return (
          (t.displayName = "Link"),
          {
            Link: t,
            redirect: function (t) {
              for (
                var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              return l.default({ ...e, pathname: t }, ...n);
            },
            usePathname: function () {
              return u.default();
            },
            useRouter: i.default,
          }
        );
      };
    },
    86727: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(24033),
        o = r(2265),
        a = r(28804),
        l = r(31864);
      t.default = function () {
        let e = n.usePathname(),
          t = a.default();
        return o.useMemo(
          () =>
            e && l.hasPathnamePrefixed(t, e) ? l.unlocalizePathname(e, t) : e,
          [t, e]
        );
      };
    },
    76605: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(24033),
        o = r(2265),
        a = r(28804),
        l = r(31864);
      t.default = function () {
        let e = n.useRouter(),
          t = a.default();
        return o.useMemo(() => {
          function r(e, r) {
            return l.localizeHref(e, r || t, t, window.location.pathname);
          }
          return {
            ...e,
            push(t, n) {
              let { locale: o, ...a } = n || {},
                l = [r(t, o)];
              return Object.keys(a).length > 0 && l.push(a), e.push(...l);
            },
            replace(t, n) {
              let { locale: o, ...a } = n || {},
                l = [r(t, o)];
              return Object.keys(a).length > 0 && l.push(a), e.replace(...l);
            },
            prefetch(t, n) {
              let { locale: o, ...a } = n || {},
                l = [r(t, o)];
              return Object.keys(a).length > 0 && l.push(a), e.prefetch(...l);
            },
          };
        }, [t, e]);
      };
    },
    28073: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(36916),
        o = r(61396),
        a = r(24033),
        l = r(2265),
        u = r(28804),
        i = r(31864);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = s(o),
        f = s(l);
      let d = l.forwardRef(function (e, t) {
        let { href: r, locale: o, localePrefix: s, prefetch: d, ...p } = e,
          h = a.usePathname(),
          m = u.default(),
          g = o !== m,
          [y, b] = l.useState(() =>
            i.isLocalHref(r) && ("never" !== s || g) ? i.prefixHref(r, o) : r
          );
        return (
          l.useEffect(() => {
            h &&
              "never" !== s &&
              b(i.localizeHref(r, o, m, null != h ? h : void 0));
          }, [m, r, o, s, h]),
          g && (d = !1),
          f.default.createElement(
            c.default,
            n.extends({ ref: t, href: y, prefetch: d }, p)
          )
        );
      });
      (d.displayName = "ClientLink"), (t.default = d);
    },
    21052: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(24033),
        o = r(31864);
      t.default = function (e) {
        let t =
          "never" === e.localePrefix
            ? e.pathname
            : o.prefixPathname(e.locale, e.pathname);
        for (
          var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), l = 1;
          l < r;
          l++
        )
          a[l - 1] = arguments[l];
        return n.redirect(t, ...a);
      };
    },
    28595: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(31864);
      function o(e) {
        let t = new URLSearchParams();
        for (let [r, n] of Object.entries(e))
          Array.isArray(n)
            ? n.forEach((e) => {
                t.append(r, String(e));
              })
            : t.set(r, String(n));
        return "?" + t.toString();
      }
      (t.compileLocalizedPathname = function (e) {
        let { pathname: t, locale: r, params: n, pathnames: a, query: l } = e;
        function u(e) {
          let t = a[e];
          return t || (t = e), t;
        }
        function i(e) {
          let t = "string" == typeof e ? e : e[r];
          return (
            n &&
              Object.entries(n).forEach((e) => {
                let [r, n] = e;
                t = Array.isArray(n)
                  ? t.replace(
                      RegExp("(\\[)?\\[...".concat(r, "\\](\\])?"), "g"),
                      n.map((e) => String(e)).join("/")
                    )
                  : t.replace("[".concat(r, "]"), String(n));
              }),
            l && (t += o(l)),
            t
          );
        }
        if ("string" == typeof t) return i(u(t));
        {
          let { pathname: e, ...r } = t;
          return { ...r, pathname: i(u(e)) };
        }
      }),
        (t.getRoute = function (e) {
          var t;
          let { locale: r, pathname: o, pathnames: a } = e,
            l = n.unlocalizePathname(o, r),
            u =
              null ===
                (t = Object.entries(a).find((e) => {
                  let [, t] = e,
                    o = "string" != typeof t ? t[r] : t;
                  return n.matchesPathname(o, l);
                })) || void 0 === t
                ? void 0
                : t[0];
          return u || (u = o), u;
        }),
        (t.normalizeNameOrNameWithParams = function (e) {
          return "string" == typeof e ? { pathname: e } : e;
        }),
        (t.serializeSearchParams = o);
    },
    31864: function (e, t) {
      "use strict";
      function r(e) {
        let t = "object" == typeof e ? e.pathname : e;
        return null != t && !t.startsWith("/");
      }
      function n(e) {
        return "object" == typeof e
          ? null == e.host && null == e.hostname
          : !/^[a-z]+:/i.test(e);
      }
      function o(e, t) {
        let r;
        return (
          "string" == typeof e
            ? (r = a(t, e))
            : ((r = { ...e }), e.pathname && (r.pathname = a(t, e.pathname))),
          r
        );
      }
      function a(e, t) {
        let r = "/" + e;
        return /^\/(\?.*)?$/.test(t) && (t = t.slice(1)), (r += t);
      }
      function l(e, t) {
        let r = "/".concat(e);
        return t === r || t.startsWith("".concat(r, "/"));
      }
      function u(e) {
        let t = e
          .replace(/\[([^\]]+)\]/g, (e) =>
            e.startsWith("[...") || e.startsWith("[[...") ? "(.*)" : "([^/]+)"
          )
          .replaceAll("(.*)]", "(.*)");
        return new RegExp("^".concat(t, "$"));
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hasPathnamePrefixed = l),
        (t.isLocalHref = n),
        (t.isRelativeHref = r),
        (t.localizeHref = function (e, t) {
          let a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t,
            u = arguments.length > 3 ? arguments[3] : void 0;
          if (!n(e) || r(e)) return e;
          let i = t !== a,
            s = null == t || l(t, u);
          return (i || s) && null != t ? o(e, t) : e;
        }),
        (t.matchesPathname = function (e, t) {
          return u(e).test(t);
        }),
        (t.prefixHref = o),
        (t.prefixPathname = a),
        (t.templateToRegex = u),
        (t.unlocalizePathname = function (e, t) {
          return e.replace(new RegExp("^/".concat(t)), "") || "/";
        });
    },
    12956: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(82139);
      let n = function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    66406: function (e, t, r) {
      "use strict";
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(82139),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    25250: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let n = r(21024)._(r(2265)),
        o = r(14542),
        a = r(17434),
        l = r(11030),
        u = r(36874),
        i = r(12956),
        s = r(46993),
        c = r(38599),
        f = r(45291),
        d = r(66406),
        p = r(45786),
        h = r(91414),
        m = new Set();
      function g(e, t, r, n, o, l) {
        if (l || (0, a.isLocalURL)(t)) {
          if (!n.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (m.has(o)) return;
            m.add(o);
          }
          Promise.resolve(l ? e.prefetch(t, o) : e.prefetch(t, r, n)).catch(
            (e) => {}
          );
        }
      }
      function y(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e);
      }
      let b = n.default.forwardRef(function (e, t) {
        let r, l;
        let {
          href: m,
          as: b,
          children: v,
          prefetch: P = null,
          passHref: _,
          replace: R,
          shallow: O,
          scroll: j,
          locale: E,
          onClick: x,
          onMouseEnter: M,
          onTouchStart: S,
          legacyBehavior: w = !1,
          ...N
        } = e;
        (r = v),
          w &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = n.default.createElement("a", null, r));
        let k = n.default.useContext(s.RouterContext),
          C = n.default.useContext(c.AppRouterContext),
          L = null != k ? k : C,
          A = !k,
          I = !1 !== P,
          T = null === P ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
          { href: U, as: W } = n.default.useMemo(() => {
            if (!k) {
              let e = y(m);
              return { href: e, as: b ? y(b) : e };
            }
            let [e, t] = (0, o.resolveHref)(k, m, !0);
            return { href: e, as: b ? (0, o.resolveHref)(k, b) : t || e };
          }, [k, m, b]),
          z = n.default.useRef(U),
          D = n.default.useRef(W);
        w && (l = n.default.Children.only(r));
        let H = w ? l && "object" == typeof l && l.ref : t,
          [K, q, $] = (0, f.useIntersection)({ rootMargin: "200px" }),
          F = n.default.useCallback(
            (e) => {
              (D.current !== W || z.current !== U) &&
                ($(), (D.current = W), (z.current = U)),
                K(e),
                H &&
                  ("function" == typeof H
                    ? H(e)
                    : "object" == typeof H && (H.current = e));
            },
            [W, H, U, $, K]
          );
        n.default.useEffect(() => {
          L && q && I && g(L, U, W, { locale: E }, { kind: T }, A);
        }, [W, U, q, E, I, null == k ? void 0 : k.locale, L, A, T]);
        let B = {
          ref: F,
          onClick(e) {
            w || "function" != typeof x || x(e),
              w &&
                l.props &&
                "function" == typeof l.props.onClick &&
                l.props.onClick(e),
              L &&
                !e.defaultPrevented &&
                (function (e, t, r, o, l, u, i, s, c) {
                  let { nodeName: f } = e.currentTarget;
                  if (
                    "A" === f.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, a.isLocalURL)(r)))
                  )
                    return;
                  e.preventDefault();
                  let d = () => {
                    let e = null == i || i;
                    "beforePopState" in t
                      ? t[l ? "replace" : "push"](r, o, {
                          shallow: u,
                          locale: s,
                          scroll: e,
                        })
                      : t[l ? "replace" : "push"](o || r, { scroll: e });
                  };
                  c ? n.default.startTransition(d) : d();
                })(e, L, U, W, R, O, j, E, A);
          },
          onMouseEnter(e) {
            w || "function" != typeof M || M(e),
              w &&
                l.props &&
                "function" == typeof l.props.onMouseEnter &&
                l.props.onMouseEnter(e),
              L &&
                (I || !A) &&
                g(
                  L,
                  U,
                  W,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: T },
                  A
                );
          },
          onTouchStart(e) {
            w || "function" != typeof S || S(e),
              w &&
                l.props &&
                "function" == typeof l.props.onTouchStart &&
                l.props.onTouchStart(e),
              L &&
                (I || !A) &&
                g(
                  L,
                  U,
                  W,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: T },
                  A
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(W)) B.href = W;
        else if (!w || _ || ("a" === l.type && !("href" in l.props))) {
          let e = void 0 !== E ? E : null == k ? void 0 : k.locale,
            t =
              (null == k ? void 0 : k.isLocaleDomain) &&
              (0, d.getDomainLocale)(
                W,
                e,
                null == k ? void 0 : k.locales,
                null == k ? void 0 : k.domainLocales
              );
          B.href =
            t ||
            (0, p.addBasePath)(
              (0, i.addLocale)(W, e, null == k ? void 0 : k.defaultLocale)
            );
        }
        return w
          ? n.default.cloneElement(l, B)
          : n.default.createElement("a", { ...N, ...B }, r);
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    52185: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          requestIdleCallback: function () {
            return r;
          },
          cancelIdleCallback: function () {
            return n;
          },
        });
      let r =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    14542: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return f;
          },
        });
      let n = r(95770),
        o = r(11030),
        a = r(24544),
        l = r(36874),
        u = r(82139),
        i = r(17434),
        s = r(22360),
        c = r(96735);
      function f(e, t, r) {
        let f;
        let d = "string" == typeof t ? t : (0, o.formatWithValidation)(t),
          p = d.match(/^[a-zA-Z]{1,}:\/\//),
          h = p ? d.slice(p[0].length) : d;
        if ((h.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              d +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let t = (0, l.normalizeRepeatedSlashes)(h);
          d = (p ? p[0] : "") + t;
        }
        if (!(0, i.isLocalURL)(d)) return r ? [d] : d;
        try {
          f = new URL(d.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          f = new URL("/", "http://n");
        }
        try {
          let e = new URL(d, f);
          e.pathname = (0, u.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, s.isDynamicRoute)(e.pathname) && e.searchParams && r) {
            let r = (0, n.searchParamsToUrlQuery)(e.searchParams),
              { result: l, params: u } = (0, c.interpolateAs)(
                e.pathname,
                e.pathname,
                r
              );
            l &&
              (t = (0, o.formatWithValidation)({
                pathname: l,
                hash: e.hash,
                query: (0, a.omit)(r, u),
              }));
          }
          let l =
            e.origin === f.origin ? e.href.slice(e.origin.length) : e.href;
          return r ? [l, t || l] : l;
        } catch (e) {
          return r ? [d] : d;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    45291: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(2265),
        o = r(52185),
        a = "function" == typeof IntersectionObserver,
        l = new Map(),
        u = [];
      function i(e) {
        let { rootRef: t, rootMargin: r, disabled: i } = e,
          s = i || !a,
          [c, f] = (0, n.useState)(!1),
          d = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            d.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (a) {
              if (s || c) return;
              let e = d.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: a,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = u.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = l.get(n))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: o,
                      }),
                      u.push(r),
                      l.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    a.set(e, t),
                    o.observe(e),
                    function () {
                      if ((a.delete(e), o.unobserve(e), 0 === a.size)) {
                        o.disconnect(), l.delete(n);
                        let e = u.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && u.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && f(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!c) {
              let e = (0, o.requestIdleCallback)(() => f(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [s, r, t, c, d.current]),
          [
            p,
            c,
            (0, n.useCallback)(() => {
              f(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    22202: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
      function o(e) {
        return r.test(e) ? e.replace(n, "\\$&") : e;
      }
    },
    11030: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return a;
          },
          urlObjectKeys: function () {
            return l;
          },
          formatWithValidation: function () {
            return u;
          },
        });
      let n = r(68533)._(r(95770)),
        o = /https?|ftp|gopher|file/;
      function a(e) {
        let { auth: t, hostname: r } = e,
          a = e.protocol || "",
          l = e.pathname || "",
          u = e.hash || "",
          i = e.query || "",
          s = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (s = t + e.host)
            : r &&
              ((s = t + (~r.indexOf(":") ? "[" + r + "]" : r)),
              e.port && (s += ":" + e.port)),
          i &&
            "object" == typeof i &&
            (i = String(n.urlQueryToSearchParams(i)));
        let c = e.search || (i && "?" + i) || "";
        return (
          a && !a.endsWith(":") && (a += ":"),
          e.slashes || ((!a || o.test(a)) && !1 !== s)
            ? ((s = "//" + (s || "")), l && "/" !== l[0] && (l = "/" + l))
            : s || (s = ""),
          u && "#" !== u[0] && (u = "#" + u),
          c && "?" !== c[0] && (c = "?" + c),
          "" +
            a +
            s +
            (l = l.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace("#", "%23")) +
            u
        );
      }
      let l = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function u(e) {
        return a(e);
      }
    },
    22360: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getSortedRoutes: function () {
            return n.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return o.isDynamicRoute;
          },
        });
      let n = r(97409),
        o = r(11305);
    },
    96735: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(2395),
        o = r(19935);
      function a(e, t, r) {
        let a = "",
          l = (0, o.getRouteRegex)(e),
          u = l.groups,
          i = (t !== e ? (0, n.getRouteMatcher)(l)(t) : "") || r;
        a = e;
        let s = Object.keys(u);
        return (
          s.every((e) => {
            let t = i[e] || "",
              { repeat: r, optional: n } = u[e],
              o = "[" + (r ? "..." : "") + e + "]";
            return (
              n && (o = (t ? "" : "/") + "[" + o + "]"),
              r && !Array.isArray(t) && (t = [t]),
              (n || e in i) &&
                (a =
                  a.replace(
                    o,
                    r
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t)
                  ) || "/")
            );
          }) || (a = ""),
          { params: s, result: a }
        );
      }
    },
    11305: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(84507),
        o = /\/\[[^/]+?\](?=\/|$)/;
      function a(e) {
        return (
          (0, n.isInterceptionRouteAppPath)(e) &&
            (e = (0, n.extractInterceptionRouteInformation)(
              e
            ).interceptedRoute),
          o.test(e)
        );
      }
    },
    17434: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(36874),
        o = r(87379);
      function a(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, n.getLocationOrigin)(),
            r = new URL(e, t);
          return r.origin === t && (0, o.hasBasePath)(r.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    24544: function (e, t) {
      "use strict";
      function r(e, t) {
        let r = {};
        return (
          Object.keys(e).forEach((n) => {
            t.includes(n) || (r[n] = e[n]);
          }),
          r
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    95770: function (e, t) {
      "use strict";
      function r(e) {
        let t = {};
        return (
          e.forEach((e, r) => {
            void 0 === t[r]
              ? (t[r] = e)
              : Array.isArray(t[r])
              ? t[r].push(e)
              : (t[r] = [t[r], e]);
          }),
          t
        );
      }
      function n(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [r, o] = e;
            Array.isArray(o)
              ? o.forEach((e) => t.append(r, n(e)))
              : t.set(r, n(o));
          }),
          t
        );
      }
      function a(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return (
          r.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, r) => e.append(r, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
          assign: function () {
            return a;
          },
        });
    },
    2395: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(36874);
      function o(e) {
        let { re: t, groups: r } = e;
        return (e) => {
          let o = t.exec(e);
          if (!o) return !1;
          let a = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new n.DecodeError("failed to decode param");
              }
            },
            l = {};
          return (
            Object.keys(r).forEach((e) => {
              let t = r[e],
                n = o[t.pos];
              void 0 !== n &&
                (l[e] = ~n.indexOf("/")
                  ? n.split("/").map((e) => a(e))
                  : t.repeat
                  ? [a(n)]
                  : a(n));
            }),
            l
          );
        };
      }
    },
    19935: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getRouteRegex: function () {
            return i;
          },
          getNamedRouteRegex: function () {
            return f;
          },
          getNamedMiddlewareRegex: function () {
            return d;
          },
        });
      let n = r(84507),
        o = r(22202),
        a = r(95868);
      function l(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let r = e.startsWith("...");
        return r && (e = e.slice(3)), { key: e, repeat: r, optional: t };
      }
      function u(e) {
        let t = (0, a.removeTrailingSlash)(e).slice(1).split("/"),
          r = {},
          u = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = n.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                a = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && a) {
                let { key: e, optional: n, repeat: i } = l(a[1]);
                return (
                  (r[e] = { pos: u++, repeat: i, optional: n }),
                  "/" + (0, o.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!a) return "/" + (0, o.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: n } = l(a[1]);
                return (
                  (r[e] = { pos: u++, repeat: t, optional: n }),
                  t ? (n ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: r,
        };
      }
      function i(e) {
        let { parameterizedRoute: t, groups: r } = u(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: r };
      }
      function s(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: r,
            segment: n,
            routeKeys: a,
            keyPrefix: u,
          } = e,
          { key: i, optional: s, repeat: c } = l(n),
          f = i.replace(/\W/g, "");
        u && (f = "" + u + f);
        let d = !1;
        (0 === f.length || f.length > 30) && (d = !0),
          isNaN(parseInt(f.slice(0, 1))) || (d = !0),
          d && (f = r()),
          u ? (a[f] = "" + u + i) : (a[f] = i);
        let p = t ? (0, o.escapeStringRegexp)(t) : "";
        return c
          ? s
            ? "(?:/" + p + "(?<" + f + ">.+?))?"
            : "/" + p + "(?<" + f + ">.+?)"
          : "/" + p + "(?<" + f + ">[^/]+?)";
      }
      function c(e, t) {
        let r;
        let l = (0, a.removeTrailingSlash)(e).slice(1).split("/"),
          u =
            ((r = 0),
            () => {
              let e = "",
                t = ++r;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          i = {};
        return {
          namedParameterizedRoute: l
            .map((e) => {
              let r = n.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                a = e.match(/\[((?:\[.*\])|.+)\]/);
              if (r && a) {
                let [r] = e.split(a[0]);
                return s({
                  getSafeRouteKey: u,
                  interceptionMarker: r,
                  segment: a[1],
                  routeKeys: i,
                  keyPrefix: t ? "nxtI" : void 0,
                });
              }
              return a
                ? s({
                    getSafeRouteKey: u,
                    segment: a[1],
                    routeKeys: i,
                    keyPrefix: t ? "nxtP" : void 0,
                  })
                : "/" + (0, o.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: i,
        };
      }
      function f(e, t) {
        let r = c(e, t);
        return {
          ...i(e),
          namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
          routeKeys: r.routeKeys,
        };
      }
      function d(e, t) {
        let { parameterizedRoute: r } = u(e),
          { catchAll: n = !0 } = t;
        if ("/" === r) return { namedRegex: "^/" + (n ? ".*" : "") + "$" };
        let { namedParameterizedRoute: o } = c(e, !1);
        return { namedRegex: "^" + o + (n ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    97409: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      class r {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let r = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              r.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            r.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              r.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              r.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            r
          );
        }
        _insert(e, t, n) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (n) throw Error("Catch-all must be the last part of the URL.");
          let o = e[0];
          if (o.startsWith("[") && o.endsWith("]")) {
            let r = o.slice(1, -1),
              l = !1;
            if (
              (r.startsWith("[") &&
                r.endsWith("]") &&
                ((r = r.slice(1, -1)), (l = !0)),
              r.startsWith("...") && ((r = r.substring(3)), (n = !0)),
              r.startsWith("[") || r.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  r +
                  "')."
              );
            if (r.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  r +
                  "')."
              );
            function a(e, r) {
              if (null !== e && e !== r)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    r +
                    "')."
                );
              t.forEach((e) => {
                if (e === r)
                  throw Error(
                    'You cannot have the same slug name "' +
                      r +
                      '" repeat within a single dynamic path'
                  );
                if (e.replace(/\W/g, "") === o.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      r +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                t.push(r);
            }
            if (n) {
              if (l) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).'
                  );
                a(this.optionalRestSlugName, r),
                  (this.optionalRestSlugName = r),
                  (o = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").'
                  );
                a(this.restSlugName, r), (this.restSlugName = r), (o = "[...]");
              }
            } else {
              if (l)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").'
                );
              a(this.slugName, r), (this.slugName = r), (o = "[]");
            }
          }
          this.children.has(o) || this.children.set(o, new r()),
            this.children.get(o)._insert(e.slice(1), t, n);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function n(e) {
        let t = new r();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    36874: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          isAbsoluteUrl: function () {
            return a;
          },
          getLocationOrigin: function () {
            return l;
          },
          getURL: function () {
            return u;
          },
          getDisplayName: function () {
            return i;
          },
          isResSent: function () {
            return s;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          loadGetInitialProps: function () {
            return f;
          },
          SP: function () {
            return d;
          },
          ST: function () {
            return p;
          },
          DecodeError: function () {
            return h;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return g;
          },
          MissingStaticPage: function () {
            return y;
          },
          MiddlewareNotFoundError: function () {
            return b;
          },
          stringifyError: function () {
            return v;
          },
        });
      let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(e) {
        let t,
          r = !1;
        return function () {
          for (var n = arguments.length, o = Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return r || ((r = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        a = (e) => o.test(e);
      function l() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + "//" + t + (r ? ":" + r : "");
      }
      function u() {
        let { href: e } = window.location,
          t = l();
        return e.substring(t.length);
      }
      function i(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function s(e) {
        return e.finished || e.headersSent;
      }
      function c(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function f(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await f(t.Component, t.ctx) }
            : {};
        let n = await e.getInitialProps(t);
        if (r && s(r)) return n;
        if (!n)
          throw Error(
            '"' +
              i(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.'
          );
        return n;
      }
      let d = "undefined" != typeof performance,
        p =
          d &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class h extends Error {}
      class m extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class y extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class b extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function v(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    61396: function (e, t, r) {
      e.exports = r(25250);
    },
  },
]);
