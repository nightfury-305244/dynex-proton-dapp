(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [203],
  {
    87580: function (e, i, t) {
      "use strict";
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var i = 1; i < arguments.length; i++) {
                var t = arguments[i];
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              }
              return e;
            }).apply(this, arguments);
      }
      t.r(i),
        t.d(i, {
          default: function () {
            return g;
          },
        });
      var n = t(61396),
        s = t.n(n),
        l = t(24033),
        r = t(2265),
        c = t(61278);
      let o = "locale";
      function d(e) {
        return "object" == typeof e
          ? null == e.host && null == e.hostname
          : !/^[a-z]+:/i.test(e);
      }
      function _(e, i) {
        let t;
        return (
          "string" == typeof e
            ? (t = h(i, e))
            : ((t = { ...e }), e.pathname && (t.pathname = h(i, e.pathname))),
          t
        );
      }
      function h(e, i) {
        let t = "/" + e;
        return /^\/(\?.*)?$/.test(i) && (i = i.slice(1)), (t += i);
      }
      let u = (0, r.forwardRef)(function (e, i) {
        let { href: t, locale: n, localePrefix: h, prefetch: u, ...g } = e,
          f = (0, l.usePathname)(),
          v = (function () {
            let e;
            let i = (0, l.useParams)();
            try {
              e = (0, c.useLocale)();
            } catch (t) {
              if ("string" != typeof (null == i ? void 0 : i[o])) throw t;
              e = i[o];
            }
            return e;
          })(),
          p = n !== v,
          [m, b] = (0, r.useState)(() =>
            d(t) && ("never" !== h || p) ? _(t, n) : t
          );
        return (
          (0, r.useEffect)(() => {
            f &&
              "never" !== h &&
              b(
                (function (e, i) {
                  let t =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : i,
                    a = arguments.length > 3 ? arguments[3] : void 0;
                  if (
                    !d(e) ||
                    (function (e) {
                      let i = "object" == typeof e ? e.pathname : e;
                      return null != i && !i.startsWith("/");
                    })(e)
                  )
                    return e;
                  let n = i !== t,
                    s =
                      null == i ||
                      (function (e, i) {
                        let t = "/".concat(e);
                        return i === t || i.startsWith("".concat(t, "/"));
                      })(i, a);
                  return (n || s) && null != i ? _(e, i) : e;
                })(t, n, v, null != f ? f : void 0)
              );
          }, [v, t, n, h, f]),
          p &&
            (u &&
              console.error(
                "The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"
              ),
            (u = !1)),
          r.createElement(s(), a({ ref: i, href: m, prefetch: u }, g))
        );
      });
      u.displayName = "ClientLink";
      var g = u;
    },
    70105: function (e, i, t) {
      Promise.resolve().then(t.bind(t, 87580)),
        Promise.resolve().then(t.t.bind(t, 41559, 23)),
        Promise.resolve().then(t.t.bind(t, 74694, 23)),
        Promise.resolve().then(t.t.bind(t, 2990, 23)),
        Promise.resolve().then(t.bind(t, 26129)),
        Promise.resolve().then(t.t.bind(t, 51882, 23)),
        Promise.resolve().then(t.bind(t, 86949));
    },
    26129: function (e, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return N;
          },
        });
      var a = t(57437),
        n = t(2265),
        s = t(50116),
        l = t(62067),
        r = t.n(l),
        c = t(87282),
        o = t(68200),
        d = t(6892),
        _ = t(12505);
      function h(e) {
        let { children: i } = e,
          t = (0, o.LM)(),
          a = (0, c.dU)((e) => e.setExperts);
        return (
          (0, n.useEffect)(() => {
            t.authenticated &&
              ((0, c.nJ)().then((e) => {
                let { data: i } = e;
                a(i.data);
              }),
              (0, _.p_)().then((e) => {
                let { data: i } = e;
                t.setIsExpert(i.is_expert),
                  t.setCreatedAt(+r()(i.created_at)),
                  t.setUsername(i.username);
              }),
              (0, _.um)().then((e) => {
                let { data: i } = e;
                t.setGithubStatus(i.github_status),
                  t.setGithubUsername(i.github_username),
                  t.setSlackStatus(i.slack_status),
                  t.setSlackUsername(i.github_username);
              }),
              (0, _.KF)().then((e) => {
                let { data: i } = e;
                t.setCountry(i.country);
              }),
              (0, _.DF)().then((e) => {
                let { data: i } = e;
                t.setPaymentID(i.payment_id),
                  t.setDepositWallet(i.wallet),
                  t.setWithdrawWallet(i.withdraw_wallet || null);
              }));
          }, [t.authenticated]),
          (0, d.W)(() => {
            t.authenticated &&
              (0, o.kH)().then((e) => {
                let { data: i } = e;
                t.setBalance(i.balance),
                  t.setUnconfirmedBalance(i.unconfirmed),
                  t.setLockedBalance(i.locked),
                  t.setTotalSpentBalance(i.total_spent);
              });
          }, [t.authenticated, t.balanceUpdater]),
          i
        );
      }
      var u = t(82749);
      function g(e) {
        let { children: i } = e,
          { refresh: t } = (0, o.ZU)();
        return (
          (0, n.useEffect)(() => {
            t();
          }, []),
          (0, a.jsx)(u.SessionProvider, { children: i })
        );
      }
      var f = t(24033),
        v = t(47713),
        p = t(31537),
        m = t(79466);
      let b = "PTN Marketplace";
      function x(e) {
        let { children: i } = e,
          t = (0, s.useTranslations)(),
          a = (0, f.usePathname)(),
          l = (0, f.useSelectedLayoutSegment)(),
          r = (0, p.z)(),
          c = (0, f.useSearchParams)(),
          d = (0, o.LM)((e) => e.authenticated),
          _ = (0, o.LM)((e) => e.initialized),
          h = (0, o.LM)((e) => e.role);
        return (
          (0, n.useEffect)(() => {
            if (
              (l
                ? (document.title = ""
                    .concat(b, " | ")
                    .concat(t("".concat(l, ".title"), (0, m.RF)(a, l))))
                : (document.title = b),
              _)
            ) {
              if (null === l) {
                return;
              }
              if (d)
                switch (l) {
                  case "admin":
                    if (h === o.i4.admin) break;
                    break;
                  case "auth":
                }
              else
                switch (l) {
                  case "auth":
                  case "terms-and-conditions":
                  case "privacy-policy":
                    break;
                  case "dashboard":
                    (0, v.deleteCookie)("callback");
                    break;
                  default:
                    (0, v.setCookie)(
                      "callback",
                      ""
                        .concat(a)
                        .concat(c.toString() ? "?".concat(c.toString()) : "")
                    )
                }
            }
          }, [t, l, _]),
          (0, n.useEffect)(() => {
            let e = c.get("affiliate_id");
            e && (0, v.setCookie)("affiliate_id", e, { maxAge: 31536e3 });
          }, [c]),
          i
        );
      }
      function N(e) {
        let { children: i, locale: t, dict: l } = e,
          [r, c] = (0, n.useState)(!1);
        return ((0, n.useEffect)(() => {
          c(!0);
        }, []),
        r)
          ? (0, a.jsx)(s.NextIntlClientProvider, {
              locale: t,
              messages: l,
              children: (0, a.jsx)(g, {
                children: (0, a.jsx)(h, {
                  children: (0, a.jsxs)(x, { children: [" ", i] }),
                }),
              }),
            })
          : null;
      }
    },
    6892: function (e, i, t) {
      "use strict";
      t.d(i, {
        W: function () {
          return n;
        },
      });
      var a = t(2265);
      function n(e, i) {
        let t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 3e4,
          n = (0, a.useRef)(),
          s = () => {
            e(), clearTimeout(n.current), (n.current = setTimeout(s, t));
          };
        (0, a.useEffect)(
          () => (
            s(),
            () => {
              clearTimeout(n.current);
            }
          ),
          i
        );
      }
    },
    86949: function (e, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return en;
          },
        });
      var a = t(57437),
        n = t(61396),
        s = t.n(n),
        l = t(16691),
        r = t.n(l),
        c = t(24033),
        o = t(2265),
        d = t(50116),
        _ = t(57042),
        h = t(68200),
        u = t(79466),
        g = t(36040),
        f = t(1044),
        v = t(47713),
        p = t(31537),
        m = t(27557),
        b = t.n(m),
        x = t(28457),
        N = t(80213),
        k = t.n(N);
      function j() {
        let e = (0, p.z)(),
          i = (0, c.usePathname)(),
          t = (0, p.dw)(),
          n = (0, c.useSelectedLayoutSegment)(),
          { width: s } = (0, f.Z)(),
          [l, r] = (0, o.useState)(!1),
          h = (0, d.useLocale)(),
          g = (a) => {
            (0, v.setCookie)("NEXT_LOCALE", a, { maxAge: 31536e3 }),
              n &&
                e.replace(
                  { pathname: t, params: (0, u.RF)(i, n) },
                  { locale: a }
                );
          };
        return (0, a.jsx)(x.GI, {
          anchor: (0, a.jsx)("div", {
            className: (0, _.Z)(k().button, l && k().button_open),
            onClick: () => r(!l),
            children: (0, a.jsx)(x.WN, {
              countryCode: p.u6[h][0],
              className: k().flag,
            }),
          }),
          show: l,
          direction: s <= +b().mobile ? "up" : "down",
          position: s <= +b().mobile ? "left" : "right",
          close: () => r(!1),
          children: (0, a.jsx)("div", {
            className: k().options,
            children: p.k1.map((e) =>
              (0, a.jsxs)(
                "div",
                {
                  className: (0, _.Z)(
                    k().language,
                    h === e && k().language_selected
                  ),
                  onClick: () => g(e),
                  children: [
                    (0, a.jsx)(x.WN, {
                      countryCode: p.u6[e][0],
                      className: k().flag,
                    }),
                    (0, a.jsx)("div", { children: p.u6[e][1] }),
                  ],
                },
                e
              )
            ),
          }),
        });
      }
      var y = {
          src: "/live.dynexcoin.org/_next/static/media/exit.c63a36d3.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        C = t(892),
        L = t.n(C);
      function w() {
        let e = (0, d.useTranslations)(),
          { logout: i } = (0, h.ZU)();
        return (0, a.jsxs)("div", {
          className: L().container,
          onClick: i,
          children: [
            (0, a.jsx)(r(), { src: y, alt: "Exit", draggable: "false" }),
            (0, a.jsx)("div", { children: e("navigation.logout") }),
          ],
        });
      }
      var O = t(99763),
        Z = {
          src: "/live.dynexcoin.org/_next/static/media/dynex-colored.cdfc93e9.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        M = {
          src: "/live.dynexcoin.org/_next/static/media/avatar-round.70f795e1.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        P = {
          src: "/live.dynexcoin.org/_next/static/media/card.1eb7ec1c.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        S = {
          src: "/live.dynexcoin.org/_next/static/media/key.2233ea47.svg",
          height: 800,
          width: 800,
          blurWidth: 0,
          blurHeight: 0,
        },
        W = {
          src: "/live.dynexcoin.org/_next/static/media/people.627f7fad.svg",
          height: 800,
          width: 800,
          blurWidth: 0,
          blurHeight: 0,
        },
        H = t(42016),
        E = t.n(H);
      function F() {
        let e = (0, d.useTranslations)(),
          { width: i } = (0, f.Z)(),
          t = (0, h.LM)(),
          [n, s] = (0, o.useState)(!1);
        return  (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(p.Mc, {
                  href: "/billing",
                  className: E().button,
                  children: (0, a.jsxs)("div", {
                    className: E().confirmed,
                    children: [
                      (0, a.jsxs)("div", {
                        className: E().currency,
                        children: [
                          (0, a.jsx)(r(), {
                            src: Z,
                            alt: "Coin",
                            draggable: "false",
                          }),
                          (0, a.jsx)("div", { children: "PTN" }),
                        ],
                      }),
                      (0, a.jsx)("div", { children: (0, O.eL)(t.balance, 3) }),
                    ],
                  }),
                }),
                (0, a.jsx)(x.GI, {
                  anchor: (0, a.jsx)("div", {
                    className: (0, _.Z)(E().button, n && E().button_open),
                    onClick: () => s(!n),
                    children: t.username,
                  }),
                  show: n,
                  direction: i <= +b().mobile ? "up" : "down",
                  position: i <= +b().mobile ? "left" : "right",
                  close: () => s(!1),
                  children: (0, a.jsxs)("div", {
                    className: E().container,
                    children: [
                      (0, a.jsxs)(p.Mc, {
                        href: "/billing",
                        className: E().confirmed,
                        onClick: () => s(!1),
                        children: [
                          (0, a.jsxs)("div", {
                            className: E().currency,
                            children: [
                              (0, a.jsx)(r(), {
                                src: Z,
                                alt: "Coin",
                                draggable: "false",
                              }),
                              (0, a.jsx)("div", { children: "PTN" }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            children: (0, O.eL)(t.balance, 3),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", { className: E().separator }),
                      (0, a.jsxs)(p.Mc, {
                        href: "/profile",
                        className: E().link,
                        onClick: () => s(!1),
                        children: [
                          (0, a.jsx)(r(), {
                            src: M,
                            alt: "User",
                            draggable: "false",
                          }),
                          (0, a.jsx)("div", {
                            children: e("navigation.userProfile"),
                          }),
                        ],
                      }),
                      (0, a.jsxs)(p.Mc, {
                        href: "/billing",
                        className: E().link,
                        onClick: () => s(!1),
                        children: [
                          (0, a.jsx)(r(), {
                            src: P,
                            alt: "Card",
                            draggable: "false",
                          }),
                          (0, a.jsx)("div", {
                            children: e("navigation.billingArea"),
                          }),
                        ],
                      }),
                      (0, a.jsxs)(p.Mc, {
                        href: "/affiliates",
                        className: E().link,
                        onClick: () => s(!1),
                        children: [
                          (0, a.jsx)(r(), {
                            src: W,
                            alt: "User",
                            draggable: "false",
                          }),
                          (0, a.jsx)("div", {
                            children: e("navigation.affiliates"),
                          }),
                        ],
                      }),
                      t.role === h.i4.admin &&
                        (0, a.jsxs)(p.Mc, {
                          href: "/admin",
                          className: E().link,
                          onClick: () => s(!1),
                          children: [
                            (0, a.jsx)(r(), {
                              src: S,
                              alt: "Key",
                              draggable: "false",
                            }),
                            (0, a.jsx)("div", {
                              children: e("navigation.admin"),
                            }),
                          ],
                        }),
                      (0, a.jsx)("div", { className: E().separator }),
                      (0, a.jsx)(w, {}),
                    ],
                  }),
                }),
              ],
            })
         
      }
      var R = {
          src: "/live.dynexcoin.org/_next/static/media/burger.3629a328.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        K = t(1588),
        T = t(64531),
        A = t(24122),
        U = t.n(A);
      function D() {
        let e = (0, d.useTranslations)(),
          i = (0, h.E_)(),
          { width: t } = (0, f.Z)();
        return (0, a.jsxs)("header", {
          className: U().header,
          children: [
            (0, a.jsxs)("div", {
              className: U().left,
              children: [
                (0, a.jsx)(p.Mc, {
                  href: "/dashboard",
                  children: (0, a.jsx)(r(), {
                    src: T.Z,
                    className: U().logo,
                    alt: "Logo",
                    draggable: "false",
                  }),
                }),
                (0, a.jsx)("div", {
                  className: (0, _.Z)(
                    U().marketplace,
                    i.isNavigationOpen && U().marketplace_open
                  ),
                  children: e("navigation.marketplace"),
                }),
              ],
            }),
            (0, a.jsx)(r(), {
              src: i.isMobileNavigationOpen ? K.Z : R,
              className: U().burger,
              alt: i.isMobileNavigationOpen ? "Close" : "Open",
              draggable: "false",
              onClick: () =>
                i.setMobileNavigationOpen(!i.isMobileNavigationOpen),
            }),
            t > +b().mobile &&
              (0, a.jsxs)("div", {
                className: U().desktopActions,
                children: [(0, a.jsx)(j, {}), (0, a.jsx)(F, {})],
              }),
          ],
        });
      }
      var q = {
          src: "/live.dynexcoin.org/_next/static/media/logo.1091de6e.svg",
          height: 32,
          width: 29,
          blurWidth: 0,
          blurHeight: 0,
        },
        z = {
          src: "/live.dynexcoin.org/_next/static/media/squares.13e7a25c.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        B = {
          src: "/live.dynexcoin.org/_next/static/media/cpu.64a0e25c.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        X = t(36335),
        G = {
          src: "/live.dynexcoin.org/_next/static/media/layers.fdbfc029.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        I = t(13207),
        J = {
          src: "/live.dynexcoin.org/_next/static/media/code.9a9935fc.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        V = {
          src: "/live.dynexcoin.org/_next/static/media/fox.44000ed5.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        Q = t(32215),
        Y = {
          src: "/live.dynexcoin.org/_next/static/media/arrow-left-filled.94ecdce4.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        $ = t(10001),
        ee = t.n($);
      function ei() {
        let e = (0, d.useTranslations)(),
          i = (0, c.useSelectedLayoutSegment)(),
          { width: t } = (0, f.Z)(),
          n = (0, h.E_)(),
          l = (0, h.LM)((e) => e.country);
        return (
          (0, o.useEffect)(() => {
            n.isMobileNavigationOpen && n.setMobileNavigationOpen(!1);
          }, [i]),
          (0, a.jsxs)("nav", {
            className: (0, _.Z)(
              ee().navigation,
              n.isNavigationOpen && ee().navigation_open,
              n.isMobileNavigationOpen && ee().navigation_mobileOpen
            ),
            children: [
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)("div", {
                    className: ee().logo,
                    children: (0, a.jsx)(p.Mc, {
                      href: "/dashboard",
                      children: (0, a.jsx)(r(), {
                        src: n.isNavigationOpen ? T.Z : q,
                        alt: "Logo",
                        draggable: "false",
                      }),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: (0, _.Z)(
                      ee().scope,
                      n.isNavigationOpen && ee().scope_open
                    ),
                    children: [
                      (0, a.jsxs)(p.Mc, {
                        href: "/dashboard",
                        className: (0, _.Z)(
                          ee().link,
                          "dashboard" === i && ee().link_current
                        ),
                        children: [
                          (0, a.jsx)(r(), {
                            src: z,
                            alt: "Squares",
                            draggable: "false",
                          }),
                          (0, a.jsx)("div", {
                            className: (0, _.Z)(
                              ee().link_title,
                              !n.isNavigationOpen && ee().link_title_closed
                            ),
                            children: e("dashboard.title"),
                          }),
                        ],
                      }),
                      (0, a.jsxs)(p.Mc, {
                        href: "/compute-on-dynex",
                        className: (0, _.Z)(
                          ee().link,
                          "compute-on-dynex" === i && ee().link_current
                        ),
                        children: [
                          (0, a.jsx)(r(), {
                            src: B,
                            alt: "CPU",
                            draggable: "false",
                          }),
                          (0, a.jsx)("div", {
                            className: (0, _.Z)(
                              ee().link_title,
                              !n.isNavigationOpen && ee().link_title_closed
                            ),
                            children: e("compute-on-dynex.title"),
                          }),
                        ],
                      }),
                      (0, a.jsxs)(p.Mc, {
                        href: "/earn-with-dynex",
                        className: (0, _.Z)(
                          ee().link,
                          "earn-with-dynex" === i && ee().link_current
                        ),
                        children: [
                          (0, a.jsx)(r(), {
                            src: X.Z,
                            alt: "Dollar",
                            draggable: "false",
                          }),
                          (0, a.jsx)("div", {
                            className: (0, _.Z)(
                              ee().link_title,
                              !n.isNavigationOpen && ee().link_title_closed
                            ),
                            children: e("earn-with-dynex.title"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: (0, _.Z)(
                      ee().scope,
                      n.isNavigationOpen && ee().scope_open
                    ),
                    children: [
                      (0, a.jsx)("div", {
                        className: (0, _.Z)(
                          ee().scope_title,
                          !n.isNavigationOpen && ee().scope_title_closed
                        ),
                        children: e("navigation.navigation"),
                      }),
                      (0, a.jsxs)(p.Mc, {
                        href: "/installation",
                        className: (0, _.Z)(
                          ee().link,
                          "installation" === i && ee().link_current
                        ),
                        children: [
                          (0, a.jsx)(r(), {
                            src: G,
                            alt: "Layers",
                            draggable: "false",
                          }),
                          (0, a.jsx)("div", {
                            className: (0, _.Z)(
                              ee().link_title,
                              !n.isNavigationOpen && ee().link_title_closed
                            ),
                            children: e("installation.title"),
                          }),
                        ],
                      }),
                      (0, a.jsxs)(p.Mc, {
                        href: "/usage",
                        className: (0, _.Z)(
                          ee().link,
                          "usage" === i && ee().link_current
                        ),
                        children: [
                          (0, a.jsx)(r(), {
                            src: I.Z,
                            alt: "Timer",
                            draggable: "false",
                          }),
                          (0, a.jsx)("div", {
                            className: (0, _.Z)(
                              ee().link_title,
                              !n.isNavigationOpen && ee().link_title_closed
                            ),
                            children: e("usage.title"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: (0, _.Z)(
                      ee().scope,
                      n.isNavigationOpen && ee().scope_open
                    ),
                    children: [
                      (0, a.jsx)("div", {
                        className: (0, _.Z)(
                          ee().scope_title,
                          !n.isNavigationOpen && ee().scope_title_closed
                        ),
                        children: e("navigation.externalLinks.title"),
                      }),
                      (0, a.jsxs)(s(), {
                        href: "https://protoncoin.tech/dynex-sdk",
                        className: ee().link,
                        target: "_blank",
                        children: [
                          (0, a.jsx)(r(), {
                            src: V,
                            alt: "Fox",
                            draggable: "false",
                          }),
                          (0, a.jsx)("div", {
                            className: (0, _.Z)(
                              ee().link_title,
                              !n.isNavigationOpen && ee().link_title_closed
                            ),
                            children: e("navigation.externalLinks.sdk"),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsxs)("div", {
                    className: (0, _.Z)(
                      ee().hide,
                      n.isNavigationOpen && ee().hide_open
                    ),
                    onClick: () => n.setNavigationOpen(!n.isNavigationOpen),
                    children: [
                      (0, a.jsx)(r(), {
                        src: Y,
                        alt: n.isNavigationOpen ? "Hide" : "Show",
                        draggable: "false",
                      }),
                      (0, a.jsx)("div", {
                        className: (0, _.Z)(
                          ee().link_title,
                          !n.isNavigationOpen && ee().link_title_closed
                        ),
                        children: e("navigation.hide"),
                      }),
                    ],
                  }),
                  t <= +b().mobile &&
                    (0, a.jsxs)("div", {
                      className: ee().mobileActions,
                      children: [(0, a.jsx)(j, {}), (0, a.jsx)(F, {})],
                    }),
                  (0, a.jsx)("div", {
                    className: (0, _.Z)(
                      ee().info,
                      n.isNavigationOpen && ee().info_open
                    ),
                    children: (0, a.jsxs)("div", {
                      className: ee().infoCard,
                      children: [
                        (0, a.jsxs)("div", {
                          className: ee().infoCard_title,
                          children: [
                            (0, a.jsx)("div", { children: "Proton Platform" }),
                            (0, a.jsx)("div", {
                              children: "Marketplace v.1.0.0",
                            }),
                            156 === l || 344 === l || 446 === l
                              ? (0, a.jsxs)("div", {
                                  className: ee().contacts,
                                  children: [
                                    (0, a.jsx)("div", {
                                      children: "Contact us:",
                                    }),
                                    (0, a.jsxs)("div", {
                                      children: [
                                        (0, a.jsx)("span", {
                                          children: "邮箱:",
                                        }),
                                        " ",
                                        "office@dynexcoin.top",
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      children: [
                                        (0, a.jsx)("span", {
                                          children: "微信:",
                                        }),
                                        " ",
                                        "DynexCN",
                                      ],
                                    }),
                                    (0, a.jsx)(s(), {
                                      href: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=7qPYYVCXAs_wUkCBBlb12c1aFq6RBEkj&authKey=X4fXGt3wsHzfJELmMK6sNWMEpCbTQuCvfnmOhXyjdA2rK38HKukL1cKVsJTONZCW&noverify=0&group_code=705867412",
                                      target: "_blank",
                                      children: "交流群",
                                    }),
                                  ],
                                })
                              : (0, a.jsxs)("div", {
                                  
                                }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: ee().infoCard_links,
                          children: [
                            (0, a.jsx)(p.Mc, {
                              href: "/terms-and-conditions",
                              className: ee().infoCardLink,
                              children: e("terms-and-conditions.title"),
                            }),
                            (0, a.jsx)(p.Mc, {
                              href: "/privacy-policy",
                              className: ee().infoCardLink,
                              children: e("privacy-policy.title"),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      var et = t(31561),
        ea = t.n(et);
      function en(e) {
        let { children: i } = e,
          t = (0, d.useTranslations)(),
          n = (0, d.useLocale)(),
          l = (0, c.usePathname)(),
          f = (0, h.LM)((e) => e.role),
          v = (0, h.LM)((e) => e.withdrawWallet),
          p = (0, h.LM)((e) => e.isExpert),
          m = (0, o.useRef)(null),
          b = (0, h.E_)(),
          x = (0, c.useSelectedLayoutSegment)(),
          [N, k] = (0, o.useState)("");
        return ((0, o.useEffect)(() => {
          var e;
          null === (e = m.current) || void 0 === e || e.scrollTo(0, 0),
            x ? k(t("".concat(x, ".title"), (0, u.RF)(l, x))) : k("");
        }, [x]),
        "auth" === x)
          ? i
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(D, {}),
                (0, a.jsx)(ei, {}),
                (0, a.jsx)("main", {
                  className: (0, _.Z)(
                    ea().mainScope,
                    b.isNavigationOpen && ea().mainScope_navigationOpen
                  ),
                  children: (0, a.jsx)("div", {
                    ref: m,
                    className: ea().scrollable,
                    children: (0, a.jsxs)("div", {
                      className: ea().main,
                      children: [
                        (0, a.jsx)("div", { className: ea().ellipseLeft }),
                        (0, a.jsx)("div", { className: ea().ellipseRight }),
                        null === v &&
                          (f === h.i4.affiliate || p) &&
                          (0, a.jsxs)("div", {
                            className: ea().warn,
                            children: [
                              (0, a.jsx)(r(), {
                                src: g.Z,
                                alt: "Exclamation",
                                draggable: "false",
                              }),
                              (0, a.jsx)("div", {
                                children: t.rich("billing.walletNotSet", {
                                  link: (e) =>
                                    (0, a.jsx)(s(), {
                                      href: "/".concat(n, "/billing?open=true"),
                                      className: ea().link,
                                      children: e,
                                    }),
                                }),
                              }),
                            ],
                          }),
                        N &&
                          (0, a.jsx)("div", {
                            className: ea().title,
                            children: N,
                          }),
                        i,
                      ],
                    }),
                  }),
                }),
              ],
            });
      }
    },
    51882: function () {},
    80213: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        button: "ChangeLanguage_button__0Kc12",
        button_open: "ChangeLanguage_button_open__kFKRi",
        options: "ChangeLanguage_options__8RRaE",
        language: "ChangeLanguage_language__iNO_1",
        language_selected: "ChangeLanguage_language_selected__P_v_F",
        flag: "ChangeLanguage_flag___lOKK",
      };
    },
    892: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "Logout_container__nyR9E",
      };
    },
    24122: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        header: "Header_header__zsCz5",
        left: "Header_left__wItom",
        logo: "Header_logo__KKv_i",
        marketplace: "Header_marketplace__HTtDG",
        marketplace_open: "Header_marketplace_open__Njpzb",
        burger: "Header_burger__NwwMe",
        desktopActions: "Header_desktopActions__iDKiG",
      };
    },
    10001: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        navigation: "Navigation_navigation__gljhC",
        navigation_open: "Navigation_navigation_open__0bVeR",
        navigation_mobileOpen: "Navigation_navigation_mobileOpen__feXlf",
        logo: "Navigation_logo__WhLPf",
        scope: "Navigation_scope__zeKrR",
        scope_title: "Navigation_scope_title__2JUnm",
        scope_title_closed: "Navigation_scope_title_closed__8RDKR",
        link: "Navigation_link__wJtMA",
        link_title: "Navigation_link_title__CT4Ro",
        link_title_closed: "Navigation_link_title_closed__45VBG",
        link_current: "Navigation_link_current__i30t0",
        hide: "Navigation_hide__xql5X",
        hide_open: "Navigation_hide_open__Cw1Nk",
        info: "Navigation_info__Au9Cu",
        info_open: "Navigation_info_open__SNET9",
        infoCard: "Navigation_infoCard__j_Esa",
        infoCard_title: "Navigation_infoCard_title__aS2HJ",
        infoCard_links: "Navigation_infoCard_links__WF76z",
        infoCardLink: "Navigation_infoCardLink__1lmfC",
        mobileActions: "Navigation_mobileActions__h1kOS",
        contacts: "Navigation_contacts__czLFH",
      };
    },
    31561: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        mainScope: "NavigationLayout_mainScope__i6Jjn",
        mainScope_navigationOpen:
          "NavigationLayout_mainScope_navigationOpen__SkMUp",
        scrollable: "NavigationLayout_scrollable__yNc2v",
        main: "NavigationLayout_main__91ci_",
        title: "NavigationLayout_title__P76mt",
        ellipseLeft: "NavigationLayout_ellipseLeft__GkHUs",
        ellipseRight: "NavigationLayout_ellipseRight__UAKkj",
        warn: "NavigationLayout_warn__9WIE1",
        link: "NavigationLayout_link__sXRvQ",
      };
    },
    42016: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        button: "ProfilePopup_button__2NPr5",
        button_open: "ProfilePopup_button_open__llTpD",
        container: "ProfilePopup_container__m0Jbq",
        confirmed: "ProfilePopup_confirmed__cyGSK",
        currency: "ProfilePopup_currency__Pt_3p",
        separator: "ProfilePopup_separator__YAKyI",
        link: "ProfilePopup_link__5_rKO",
      };
    },
    36335: function (e, i) {
      "use strict";
      i.Z = {
        src: "/live.dynexcoin.org/_next/static/media/dollar.61869ae5.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    36040: function (e, i) {
      "use strict";
      i.Z = {
        src: "/live.dynexcoin.org/_next/static/media/exclamation.38f7077b.svg",
        height: 800,
        width: 800,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    32215: function (e, i) {
      "use strict";
      i.Z = {
        src: "/live.dynexcoin.org/_next/static/media/question.8e3d64e3.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    13207: function (e, i) {
      "use strict";
      i.Z = {
        src: "/live.dynexcoin.org/_next/static/media/timer.6107923f.svg",
        height: 52,
        width: 52,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    64531: function (e, i) {
      "use strict";
      i.Z = {
        src: "/live.dynexcoin.org/_next/static/media/logo-full.d6dbbcdc.svg",
        height: 279,
        width: 990,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    2990: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__IBMPlexMonoFont_209945', '__IBMPlexMonoFont_Fallback_209945'",
          fontWeight: 300,
          fontStyle: "normal",
        },
        className: "__className_209945",
        variable: "__variable_209945",
      };
    },
    74694: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__RigidFont_084bfb', '__RigidFont_Fallback_084bfb'",
        },
        className: "__className_084bfb",
        variable: "__variable_084bfb",
      };
    },
    41559: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__RubikFont_b0d03b', '__RubikFont_Fallback_b0d03b'",
        },
        className: "__className_b0d03b",
        variable: "__variable_b0d03b",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [716, 990, 901, 906, 858, 749, 457, 200, 282, 971, 938, 744],
      function () {
        return e((e.s = 70105));
      }
    ),
      (_N_E = e.O());
  },
]);
