(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [40],
  {
    39940: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 40922, 23)),
        Promise.resolve().then(n.bind(n, 7359)),
        Promise.resolve().then(n.bind(n, 80050)),
        Promise.resolve().then(n.bind(n, 91906));
    },
    14877: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return _;
        },
      });
      var o = n(57437),
        s = n(16691),
        i = n.n(s),
        a = n(2265),
        l = n(54887),
        r = n(50116),
        c = n(62067),
        d = n.n(c),
        u = n(68200),
        x = n(87282),
        m = n(81446),
        p = n(28457),
        b = n(99763),
        h = n(1588),
        g = n(93158),
        j = n.n(g);
      function _(e) {
        let { onClose: t } = e,
          n = (0, r.useTranslations)(),
          s = (0, a.useRef)(null),
          c = (0, u.LM)((e) => e.slackStatus),
          g = (0, x.dU)((e) => e.postingFee),
          [_, v] = (0, a.useState)(!1),
          [f, C] = (0, a.useState)(!1),
          {
            loading: y,
            formIsValid: k,
            name: P,
            budget: N,
            deadline: S,
            description: J,
            files: w,
            error: E,
            errorMessage: T,
            successMessage: D,
            setName: O,
            setBudget: z,
            setDeadline: U,
            setFiles: A,
            setDescription: I,
            setErrorMessage: M,
            setSuccessMessage: R,
            create: Y,
          } = (function () {
            let e = (0, r.useTranslations)(),
              t = (0, x.dU)((e) => e.updateUserJobPostings),
              [n, o] = (0, a.useState)(!1),
              [s, i] = (0, a.useState)(""),
              [l, c] = (0, a.useState)(),
              [u, m] = (0, a.useState)(""),
              [p, b] = (0, a.useState)(),
              [h, g] = (0, a.useState)(),
              [j, _] = (0, a.useState)(!1),
              [v, f] = (0, a.useState)(),
              [C, y] = (0, a.useState)(),
              k = !!s.trim() && !!l && !!u.trim() && !!p && p > +d()();
            return {
              loading: n,
              formIsValid: k,
              name: s,
              budget: l,
              deadline: p,
              description: u,
              files: h,
              error: j,
              errorMessage: v,
              successMessage: C,
              setName: i,
              setBudget: c,
              setDeadline: b,
              setDescription: m,
              setFiles: g,
              setErrorMessage: f,
              setSuccessMessage: y,
              create: () => {
                if (k && !n) {
                  o(!0), _(!1), f(void 0), y(void 0);
                  let n = new FormData();
                  n.append("name", s.trim()),
                    n.append("description", u.trim()),
                    n.append("budget", l.toString()),
                    n.append("deadline", p.toString()),
                    (null == h ? void 0 : h[0]) && n.append("file", h[0]),
                    (0, x.kD)(n)
                      .then((n) => {
                        let { data: o } = n;
                        if (o)
                          y(e("compute-on-dynex.jobPosting.jobPostingCreated")),
                            t();
                        else throw Error();
                      })
                      .catch((t) => {
                        var n, o;
                        _(!0),
                          f(
                            e(
                              "compute-on-dynex.jobPosting.".concat(
                                (null == t
                                  ? void 0
                                  : null === (o = t.response) || void 0 === o
                                  ? void 0
                                  : null === (n = o.data) || void 0 === n
                                  ? void 0
                                  : n.error) || "jobPostingNotCreated"
                              )
                            )
                          );
                      })
                      .finally(() => {
                        o(!1);
                      });
                }
              },
            };
          })(),
          W = (e) => {
            if (e) {
              var t, n;
              null === (t = e.getElementsByTagName("input")[0]) ||
                void 0 === t ||
                t.focus(),
                null === (n = e.getElementsByTagName("textarea")[0]) ||
                  void 0 === n ||
                  n.focus();
            } else c && Y();
          },
          H = () => {
            c ? Y() : v(!0);
          };
        return (0, l.createPortal)(
          (0, o.jsx)(p.u_, {
            header: (0, o.jsx)("div", {
              className: j().header,
              children: n("compute-on-dynex.jobPosting.post"),
            }),
            className: j().modal,
            preventClose: _ || f || !!T,
            large: !0,
            onClose: t,
            children: (0, o.jsxs)("div", {
              className: j().container,
              children: [
                D &&
                  (0, o.jsx)(p.xl, {
                    variant: "success",
                    title: n("actionComplete"),
                    text: D,
                    onClose: () => R(void 0),
                  }),
                T &&
                  (0, o.jsx)(p.xl, {
                    variant: "warn",
                    title: n("actionNotComplete"),
                    text: T,
                    onClose: () => M(void 0),
                  }),
                _ &&
                  (0, o.jsx)(p.xl, {
                    variant: c ? "success" : "warn",
                    title: n(
                      c
                        ? "compute-on-dynex.jobPosting.slackConnected"
                        : "compute-on-dynex.jobPosting.connectSlackTitle"
                    ),
                    text: n(
                      c
                        ? "compute-on-dynex.jobPosting.createPosting"
                        : "compute-on-dynex.jobPosting.connectSlackText"
                    ),
                    actions: c
                      ? (0, o.jsx)(p.zx, {
                          disabled: !k,
                          loading: y,
                          onClick: H,
                          children: n("create"),
                        })
                      : (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)(p.zx, {
                              onClick: () => v(!1),
                              children: n("cancel"),
                            }),
                            (0, o.jsx)(m.D, {
                              variant: "button",
                              nestedOpen: f,
                              setNestedOpen: C,
                            }),
                          ],
                        }),
                    preventClose: f || !!T,
                    onClose: () => v(!1),
                  }),
                (0, o.jsxs)("div", {
                  className: j().form,
                  children: [
                    (0, o.jsx)(p.II, {
                      placeholder: n("compute-on-dynex.jobPosting.name"),
                      value: P,
                      size: "l",
                      error: E ? "" : void 0,
                      disabled: y,
                      onChange: O,
                      onEnterPress: W,
                    }),
                    (0, o.jsxs)("div", {
                      className: j().row,
                      children: [
                        (0, o.jsx)(p.II, {
                          placeholder: n("compute-on-dynex.jobPosting.budget"),
                          value: N || "",
                          type: "number",
                          size: "l",
                          error: E ? "" : void 0,
                          hint: N
                            ? n("compute-on-dynex.jobPosting.expertReceive", {
                                amount: (0, b.eL)(N - g * N, 3),
                              })
                            : void 0,
                          disabled: y,
                          element: (0, o.jsx)("div", {
                            className: j().dnx,
                            children: "PTN",
                          }),
                          onChange: (e) => z(+e),
                          onEnterPress: W,
                        }),
                        (0, o.jsx)(p.JQ, {
                          placeholder: n(
                            "compute-on-dynex.jobPosting.deadline"
                          ),
                          datetime: S,
                          positionY: "down",
                          positionX: "right",
                          size: "l",
                          error:
                            S && S <= +d()()
                              ? n("compute-on-dynex.jobPosting.invalidDate", {
                                  datetime: d()().format("DD/MM/YYYY HH:mm"),
                                })
                              : void 0,
                          setDatetime: U,
                        }),
                      ],
                    }),
                    (0, o.jsx)("div", {
                      className: j().area,
                      children: (0, o.jsx)(p.II, {
                        placeholder: n(
                          "compute-on-dynex.jobPosting.description"
                        ),
                        value: J,
                        size: "l",
                        error: E ? "" : void 0,
                        lines: 20,
                        disabled: y,
                        onChange: I,
                      }),
                    }),
                    (0, o.jsxs)("div", {
                      className: j().files,
                      children: [
                        (0, o.jsx)("div", {
                          children:
                            (null == w ? void 0 : w.length) === 1
                              ? w[0].name
                              : n("attachedFiles", {
                                  count: (null == w ? void 0 : w.length) || 0,
                                }),
                        }),
                        w &&
                          w.length > 0 &&
                          (0, o.jsx)(i(), {
                            src: h.Z,
                            alt: "Remove",
                            draggable: "false",
                            onClick: () => A(void 0),
                          }),
                      ],
                    }),
                    (0, o.jsx)("input", {
                      ref: s,
                      type: "file",
                      style: { display: "none" },
                      onChange: (e) => {
                        e.stopPropagation(),
                          e.preventDefault(),
                          e.target.files &&
                            e.target.files.length > 0 &&
                            A(e.target.files);
                      },
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: j().actions,
                  children: [
                    (0, o.jsx)(p.zx, {
                      loading: y,
                      onClick: () => {
                        var e;
                        return null === (e = s.current) || void 0 === e
                          ? void 0
                          : e.click();
                      },
                      children: n("attachFile"),
                    }),
                    (0, o.jsx)(p.zx, {
                      disabled: !k,
                      loading: y,
                      onClick: H,
                      children: n("create"),
                    }),
                  ],
                }),
              ],
            }),
          }),
          document.body
        );
      }
    },
    18069: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return r;
        },
        G: function () {
          return l;
        },
      });
      var o = n(57437),
        s = n(50116),
        i = n(87282),
        a = n(28457);
      function l(e) {
        let { status: t, disabled: n, onChange: l } = e,
          r = (0, s.useTranslations)();
        return (0, o.jsx)(a.Qf, {
          value: (null == t ? void 0 : t.toString()) || "",
          options: {
            0: r("all"),
            ...Object.fromEntries(
              Object.values(i.By)
                .filter((e) => !Number.isNaN(Number(e)))
                .map((e) => [e, r("status.".concat(i.By[+e]))])
            ),
          },
          placeholder: r("status.title"),
          disabled: n,
          onChange: (e) => {
            "0" === e ? l(void 0) : l(e ? +e : void 0);
          },
        });
      }
      function r(e) {
        let { status: t, disabled: n, onChange: l } = e,
          r = (0, s.useTranslations)();
        return (0, o.jsx)(a.Qf, {
          value: (null == t ? void 0 : t.toString()) || "",
          options: Object.fromEntries(
            Object.values(i.jx)
              .filter((e) => !Number.isNaN(Number(e)))
              .map((e) => [e, r("status.".concat(i.jx[+e]))])
          ),
          placeholder: r("status.title"),
          disabled: n,
          onChange: (e) => {
            l(e ? +e : void 0);
          },
        });
      }
    },
    81446: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return p;
        },
      });
      var o = n(57437),
        s = n(61396),
        i = n.n(s),
        a = n(2265),
        l = n(54887),
        r = n(82749),
        c = n(50116),
        d = n(68200),
        u = n(28457),
        x = n(73568),
        m = n.n(x);
      function p(e) {
        let { variant: t = "text", nestedOpen: n, setNestedOpen: s } = e,
          x = (0, c.useTranslations)(),
          p = (0, a.useRef)(!1),
          { data: b } = (0, r.useSession)(),
          h = (0, d.LM)(),
          [g, j] = (0, a.useState)(!1),
          [_, v] = (0, a.useState)(!1),
          [f, C] = (0, a.useState)(!1),
          [y, k] = (0, a.useState)(!1),
          P = () => {
            var e;
            let t = null == b ? void 0 : b.id,
              n =
                null == b
                  ? void 0
                  : null === (e = b.user) || void 0 === e
                  ? void 0
                  : e.name;
            n &&
              t &&
              !f &&
              (j(!1),
              v(!1),
              C(!0),
              (p.current = !1),
              (0, d.zn)({ username: n, id: t })
                .then((e) => {
                  let { data: t } = e;
                  if (t) v(!0), h.setSlackUsername(n);
                  else throw Error();
                })
                .catch(() => {
                  j(!0), h.setSlackStatus(!1), h.setSlackUsername(null);
                })
                .finally(() => {
                  C(!1);
                }));
          };
        (0, a.useEffect)(() => {
          p.current && !h.slackStatus && !_ && (n || y) && P();
        }, [b]),
          (0, a.useEffect)(
            () => () => {
              s && s(!1);
            },
            []
          );
        let N = () => {
            (0, r.signOut)({ redirect: !1 }), (p.current = !0);
          },
          S = () => {
            s && s(!0), k(!0);
          };
        return h.slackStatus
          ? (0, o.jsx)("div", {
              className: m().connected,
              children: x("profile.socialOptions.connected"),
            })
          : (0, o.jsxs)(o.Fragment, {
              children: [
                "text" === t
                  ? (0, o.jsx)("div", {
                      className: m().connect,
                      onClick: S,
                      children: x("profile.socialOptions.connect"),
                    })
                  : (0, o.jsx)(u.zx, {
                      onClick: S,
                      children: x("profile.socialOptions.connectSlack"),
                    }),
                (n || y) &&
                  (0, l.createPortal)(
                    (0, o.jsxs)(u.u_, {
                      header: (0, o.jsx)("div", {
                        className: m().header,
                        children: x("profile.socialOptions.connectSlack"),
                      }),
                      className: m().modal,
                      preventClose: !!g,
                      onClose: () => {
                        s && s(!1), (p.current = !1), k(!1);
                      },
                      children: [
                        _ &&
                          (0, o.jsx)(u.xl, {
                            variant: "success",
                            title: x("actionComplete"),
                            text: x("profile.socialOptions.slackConnected"),
                            onClose: () => {
                              v(!1), h.setSlackStatus(!0);
                            },
                          }),
                        g &&
                          (0, o.jsx)(u.xl, {
                            variant: "warn",
                            title: x("actionNotComplete"),
                            text: x("profile.socialOptions.slackNotConnected"),
                            onClose: () => j(!1),
                          }),
                        (0, o.jsxs)("div", {
                          className: m().form,
                          children: [
                            (0, o.jsxs)("div", {
                              className: m().step,
                              children: [
                                (0, o.jsx)("div", {
                                  className: m().stepNumber,
                                  children: "1",
                                }),
                                (0, o.jsx)("div", {
                                  className: m().stepText,
                                  children: x(
                                    "profile.socialOptions.joinDynexWorkspace"
                                  ),
                                }),
                              ],
                            }),
                            (0, o.jsx)(i(), {
                              href: "https://dynex-workspace.slack.com/join/shared_invite/zt-22eb1n4mo-aXS5zsUBoPs613Dofi8Q4A#/shared-invite/email",
                              target: "_blank",
                              className: m().button,
                              children: (0, o.jsx)(u.zx, {
                                onClick: () => {},
                                children: x("profile.socialOptions.join"),
                              }),
                            }),
                            (0, o.jsxs)("div", {
                              className: m().step,
                              children: [
                                (0, o.jsx)("div", {
                                  className: m().stepNumber,
                                  children: "2",
                                }),
                                (0, o.jsx)("div", {
                                  className: m().stepText,
                                  children: x(
                                    "profile.socialOptions.pressConnectSlack"
                                  ),
                                }),
                              ],
                            }),
                            (0, o.jsx)(i(), {
                              href: "/api/auth/signin/slack",
                              target: "_blank",
                              className: m().button,
                              onClick: N,
                              onAuxClick: N,
                              children: (0, o.jsx)(u.zx, {
                                onClick: () => {},
                                children: x(
                                  "profile.socialOptions.connectSlack"
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    document.body
                  ),
              ],
            });
      }
    },
    6892: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return s;
        },
      });
      var o = n(2265);
      function s(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 3e4,
          s = (0, o.useRef)(),
          i = () => {
            e(), clearTimeout(s.current), (s.current = setTimeout(i, n));
          };
        (0, o.useEffect)(
          () => (
            i(),
            () => {
              clearTimeout(s.current);
            }
          ),
          t
        );
      }
    },
    32036: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return s;
        },
      });
      var o = n(2265);
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          [n, s] = (0, o.useState)(!1),
          [i, a] = (0, o.useState)(1),
          [l, r] = (0, o.useState)(e),
          [c, d] = (0, o.useState)(0),
          [u, x] = (0, o.useState)(1),
          [m, p] = (0, o.useState)(t),
          b = () => {
            i > 1 && a(i - 1);
          },
          h = () => {
            i < u && a(i + 1);
          },
          g = (e) => {
            a(e);
          };
        return {
          loading: n,
          infiniteScroll: (0, o.useMemo)(
            () => ({ page: i, perPage: l, totalPages: u, onNextPage: h }),
            [i, l, u]
          ),
          pagination: (0, o.useMemo)(
            () => ({
              page: i,
              perPage: l,
              totalPages: u,
              total: c,
              onNextPage: h,
              onPrevPage: b,
              onPageChange: g,
            }),
            [i, l, u]
          ),
          sorting: m,
          changePage: g,
          setLoading: s,
          setPerPage: r,
          setTotalPages: x,
          setSorting: p,
          setTotal: d,
        };
      }
    },
    7359: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        });
      var o = n(57437),
        s = n(61396),
        i = n.n(s),
        a = n(16691),
        l = n.n(a),
        r = n(2265),
        c = n(50116),
        d = n(14877),
        u = n(28457),
        x = n(31537),
        m = {
          src: "/live.protoncoin.org/_next/static/media/hosted.d9ccb248.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        p = {
          src: "/live.protoncoin.org/_next/static/media/atom-green.4e5e63da.svg",
          height: 195,
          width: 476,
          blurWidth: 0,
          blurHeight: 0,
        },
        b = n(2159),
        h = n.n(b);
      function g() {
        let e = (0, c.useTranslations)(),
          [t, n] = (0, r.useState)(!1);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            t && (0, o.jsx)(d.W, { onClose: () => n(!1) }),
            (0, o.jsxs)("div", {
              className: h().container,
              children: [
                (0, o.jsxs)("div", {
                  className: h().textContainer,
                  children: [
                    (0, o.jsx)(u.gm, {
                      text: e("compute-on-dynex.text"),
                      words: 70,
                      onlyMobile: !0,
                    }),
                    (0, o.jsx)(l(), {
                      src: p,
                      alt: "Atom",
                      draggable: "false",
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: h().cards,
                  children: [
                    (0, o.jsx)(u.WV, {
                      title: e("compute-on-dynex.dynexSdk.title"),
                      text: e("compute-on-dynex.dynexSdk.text"),
                      actions: (0, o.jsxs)("div", {
                        className: h().sdkActions,
                        children: [
                          (0, o.jsx)(i(), {
                            href: "https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=708384870",
                            target: "_blank",
                            children: (0, o.jsxs)("div", {
                              className: h().hosted,
                              children: [
                                (0, o.jsx)(l(), {
                                  src: m,
                                  alt: "Hosted",
                                  draggable: "false",
                                }),
                                (0, o.jsx)("div", {
                                  children: e(
                                    "compute-on-dynex.dynexSdk.hostedCodespace"
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, o.jsx)(x.Mc, {
                            href: "/installation",
                            children: (0, o.jsx)(u.zx, {
                              onClick: () => {},
                              children: e("compute-on-dynex.dynexSdk.button"),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, o.jsx)(u.WV, {
                      title: e("compute-on-dynex.useDynexTemplates.title"),
                      text: e("compute-on-dynex.useDynexTemplates.text"),
                      actions: (0, o.jsx)(x.Mc, {
                        href: "/code-library",
                        children: (0, o.jsx)(u.zx, {
                          onClick: () => {},
                          children: e(
                            "compute-on-dynex.useDynexTemplates.button"
                          ),
                        }),
                      }),
                    }),
                    (0, o.jsx)(u.WV, {
                      title: e("compute-on-dynex.hireAnExpert.title"),
                      text: e("compute-on-dynex.hireAnExpert.text"),
                      actions: (0, o.jsx)(u.zx, {
                        onClick: () => n(!0),
                        children: e("compute-on-dynex.hireAnExpert.button"),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    80050: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var o = n(57437),
        s = n(2265),
        i = n(50116),
        a = n(87282),
        l = n(6892),
        r = n(99763),
        c = n(28457),
        d = n(58645);
      function u() {
        let e = (0, i.useTranslations)(),
          [t, n] = (0, s.useState)();
        return (
          (0, l.W)(
            () => {
              (0, a.nw)().then((e) => {
                let { data: t } = e;
                return n(t.avg_fee);
              });
            },
            [],
            5e3
          ),
          (0, o.jsx)(c.rJ, {
            icon: d.Z,
            value: t ? "".concat((0, r.eL)(t, 3), " PTN") : "-",
            title: e("compute-on-dynex.payAsYouCompute.title"),
            text: e("compute-on-dynex.payAsYouCompute.text"),
          })
        );
      }
    },
    91906: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var o = n(57437),
        s = n(16691),
        i = n.n(s),
        a = n(2265),
        l = n(34350),
        r = n(50116),
        c = n(62067),
        d = n.n(c),
        u = n(57042),
        x = n(18069),
        m = n(14877),
        p = n(54887),
        b = n(87282),
        h = n(61396),
        g = n.n(h),
        j = n(28457),
        _ = n(2510),
        v = n.n(_);
      function f(e) {
        let {
            expertId: t,
            disabled: n,
            direction: s = "down",
            onChange: i,
          } = e,
          a = (0, r.useTranslations)(),
          l = (0, b.dU)((e) => e.experts);
        return (0, o.jsx)(j.Qf, {
          value: (null == t ? void 0 : t.toString()) || "",
          options: Object.fromEntries(
            l.map((e) => [
              e.id,
              (0, o.jsxs)("div", {
                className: v().expert,
                children: [
                  (0, o.jsx)("div", { children: e.username }),
                  e.slack_id &&
                    (0, o.jsx)("div", {
                      children: (0, o.jsx)(g(), {
                        href: ""
                          .concat("https://dynex-workspace.slack.com/team", "/")
                          .concat(e.slack_id),
                        target: "_blank",
                        children: a("getInTouch"),
                      }),
                    }),
                ],
              }),
            ])
          ),
          placeholder: a("expert"),
          direction: s,
          disabled: n,
          onChange: (e) => {
            i(e ? +e : void 0);
          },
          valueRenderFn: (e) => (e ? l.find((t) => t.id === +e).username : ""),
        });
      }
      var C = n(68200),
        y = n(45529),
        k = n.n(y);
      function P(e) {
        let { jobPosting: t, updateJobPosting: n, onClose: s } = e,
          i = (0, r.useTranslations)(),
          [l, c] = (0, a.useState)(!1),
          [d, u] = (0, a.useState)(!1),
          {
            localJobPosting: x,
            loading: m,
            expert: h,
            errorMessage: g,
            successMessage: _,
            allowAssignExpert: v,
            allowCancel: y,
            allowComplete: P,
            allowAppeal: N,
            setErrorMessage: S,
            setSuccessMessage: J,
            setExpert: w,
            cancelJob: E,
            assignExpertToJob: T,
            completeJob: D,
            appealJob: O,
          } = (function (e, t, n) {
            let o = (0, r.useTranslations)(),
              s = (0, C.LM)((e) => e.accountId),
              [i, l] = (0, a.useState)(e),
              [c, d] = (0, a.useState)(!1),
              [u, x] = (0, a.useState)(),
              [m, p] = (0, a.useState)(),
              [h, g] = (0, a.useState)(),
              j =
                i.customerId === s && !i.expertId && i.status === b.jx.created,
              _ =
                i.customerId === s && !i.expertId && i.status === b.jx.created,
              v =
                i.customerId === s &&
                i.expertId &&
                i.status === b.jx.processing,
              f = i.expertId === s && i.status === b.jx.processing;
            return {
              localJobPosting: i,
              loading: c,
              expert: u,
              errorMessage: m,
              successMessage: h,
              allowAssignExpert: j,
              allowCancel: _,
              allowComplete: v,
              allowAppeal: f,
              setErrorMessage: p,
              setSuccessMessage: g,
              setExpert: x,
              cancelJob: () => {
                _ &&
                  !c &&
                  (d(!0),
                  p(void 0),
                  g(void 0),
                  (0, b.u$)({ id: i.id })
                    .then((e) => {
                      let { data: s } = e;
                      if (s) {
                        let e = { ...i, status: b.jx.canceled };
                        g(o("compute-on-dynex.jobPosting.jobRemoved")),
                          t(e),
                          l(e),
                          n();
                      } else throw Error();
                    })
                    .catch(() => {
                      p(o("compute-on-dynex.jobPosting.jobNotRemoved"));
                    })
                    .finally(() => {
                      d(!1);
                    }));
              },
              assignExpertToJob: () => {
                j &&
                  u &&
                  !c &&
                  (d(!0),
                  p(void 0),
                  g(void 0),
                  (0, b.YS)({ job_id: i.id, expert_id: u })
                    .then((e) => {
                      let { data: n } = e;
                      if (n) {
                        let e = { ...i, expertId: u, status: b.jx.processing };
                        g(o("compute-on-dynex.jobPosting.jobAssigned")),
                          t(e),
                          l(e);
                      } else throw Error();
                    })
                    .catch(() => {
                      p(o("compute-on-dynex.jobPosting.jobNotAssigned"));
                    })
                    .finally(() => {
                      d(!1);
                    }));
              },
              completeJob: () => {
                v &&
                  !c &&
                  (d(!0),
                  p(void 0),
                  g(void 0),
                  (0, b.RR)({ job_id: i.id })
                    .then((e) => {
                      let { data: n } = e;
                      if (n) {
                        let e = { ...i, status: b.jx.finished };
                        g(o("compute-on-dynex.jobPosting.jobCompleted")),
                          t(e),
                          l(e);
                      } else throw Error();
                    })
                    .catch(() => {
                      p(o("compute-on-dynex.jobPosting.jobNotCompleted"));
                    })
                    .finally(() => {
                      d(!1);
                    }));
              },
              appealJob: () => {
                f &&
                  !c &&
                  (d(!0),
                  p(void 0),
                  g(void 0),
                  (0, b.j7)({ job_id: i.id })
                    .then((e) => {
                      let { data: n } = e;
                      if (n) {
                        let e = { ...i, status: b.jx.appeal };
                        g(o("compute-on-dynex.jobPosting.jobAppealed")),
                          t(e),
                          l(e);
                      } else throw Error();
                    })
                    .catch(() => {
                      p(o("compute-on-dynex.jobPosting.jobNotAppealed"));
                    })
                    .finally(() => {
                      d(!1);
                    }));
              },
            };
          })(t, n, s);
        return (0, p.createPortal)(
          (0, o.jsx)(j.u_, {
            header: (0, o.jsx)("div", {
              className: k().header,
              children: i("compute-on-dynex.jobPosting.view", { id: x.id }),
            }),
            className: k().modal,
            preventClose: l || d || !!g || !!_,
            large: !0,
            onClose: s,
            children: (0, o.jsxs)("div", {
              className: k().container,
              children: [
                _ &&
                  (0, o.jsx)(j.xl, {
                    variant: "success",
                    title: i("actionComplete"),
                    text: _,
                    onClose: () => J(void 0),
                  }),
                g &&
                  (0, o.jsx)(j.xl, {
                    variant: "warn",
                    title: i("actionNotComplete"),
                    text: g,
                    onClose: () => S(void 0),
                  }),
                l &&
                  (0, o.jsx)(j.xl, {
                    variant: "error",
                    title: i("compute-on-dynex.jobPosting.removeJobTitle", {
                      id: x.id,
                    }),
                    text: i(
                      "compute-on-dynex.jobPosting.removeJobConfirmation"
                    ),
                    actions: (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)("div", {
                          className: k().delete,
                          children: (0, o.jsx)(j.zx, {
                            loading: m,
                            onClick: E,
                            children: i("remove"),
                          }),
                        }),
                        (0, o.jsx)(j.zx, {
                          onClick: () => c(!1),
                          children: i("cancel"),
                        }),
                      ],
                    }),
                    onClose: () => c(!1),
                  }),
                d &&
                  (0, o.jsx)(j.xl, {
                    variant: "error",
                    title: i("compute-on-dynex.jobPosting.appealJobTitle", {
                      id: x.id,
                    }),
                    text: i(
                      "compute-on-dynex.jobPosting.appealJobConfirmation"
                    ),
                    actions: (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)("div", {
                          className: k().appeal,
                          children: (0, o.jsx)(j.zx, {
                            loading: m,
                            onClick: O,
                            children: i("appeal"),
                          }),
                        }),
                        (0, o.jsx)(j.zx, {
                          onClick: () => u(!1),
                          children: i("cancel"),
                        }),
                      ],
                    }),
                    onClose: () => u(!1),
                  }),
                (0, o.jsxs)("div", {
                  className: k().form,
                  children: [
                    (0, o.jsx)(b.$o, { jobPosting: x }),
                    v &&
                      (0, o.jsx)("div", {
                        className: k().experts,
                        children: (0, o.jsx)(f, {
                          expertId: h,
                          disabled: m,
                          direction: "up",
                          onChange: w,
                        }),
                      }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: k().actions,
                  children: [
                    v &&
                      (0, o.jsx)(j.zx, {
                        disabled: !h,
                        loading: m,
                        onClick: T,
                        children: i("save"),
                      }),
                    y &&
                      (0, o.jsx)("div", {
                        className: k().delete,
                        children: (0, o.jsx)(j.zx, {
                          onClick: () => c(!0),
                          children: i("remove"),
                        }),
                      }),
                    P &&
                      (0, o.jsx)(j.zx, {
                        loading: m,
                        onClick: D,
                        children: i("finish"),
                      }),
                    N &&
                      (0, o.jsx)("div", {
                        className: k().appeal,
                        children: (0, o.jsx)(j.zx, {
                          loading: m,
                          onClick: () => u(!0),
                          children: i("appeal"),
                        }),
                      }),
                  ],
                }),
              ],
            }),
          }),
          document.body
        );
      }
      var N = n(22549),
        S = n(32036),
        J = n(6892),
        w = n(90781),
        E = n.n(w);
      function T() {
        let e = (0, r.useTranslations)(),
          [t, { width: n }] = (0, l.Z)(),
          {
            loading: s,
            infiniteScroll: c,
            status: p,
            postings: h,
            setStatus: g,
            updateJobPosting: _,
          } = (function () {
            let {
                loading: e,
                infiniteScroll: t,
                setLoading: n,
                setTotalPages: o,
              } = (0, S.x)(10),
              s = (0, b.dU)((e) => e.userJobPostingsUpdater),
              i = (0, b.dU)((e) => e.setPostingFee),
              [l, r] = (0, a.useState)(),
              [c, d] = (0, a.useState)([]),
              [u, x] = (0, a.useState)([]);
            return (
              (0, J.W)(() => {
                e ||
                  (n(!0),
                  (0, b.YP)()
                    .then((e) => {
                      i(e.postingFee),
                        d(e.data),
                        o(Math.ceil(e.data.length / 10));
                    })
                    .catch(() => {
                      d([]);
                    })
                    .finally(() => {
                      n(!1);
                    }));
              }, [s]),
              (0, a.useEffect)(() => {
                let e = c;
                void 0 !== l && (e = e.filter((e) => e.status === l)),
                  e.sort((e, t) => t.createdAt - e.createdAt),
                  x(e);
              }, [c, l]),
              {
                loading: e,
                infiniteScroll: t,
                status: l,
                postings: u.slice(0, (t.page - 1) * 10 + 10),
                setStatus: r,
                updateJobPosting: (e) => {
                  let t = c.findIndex((t) => t.id === e.id);
                  if (-1 === t) return;
                  let n = [...c];
                  (n[t] = e), d(n);
                },
              }
            );
          })(),
          [v, f] = (0, a.useState)(),
          [C, y] = (0, a.useState)(!1),
          k = (0, a.useMemo)(
            () => [
              {
                header: e("compute-on-dynex.myJobPostings.date"),
                id: "createdAt",
                accessorKey: "createdAt",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return d()(t.original.createdAt).format("DD/MM/YYYY");
                },
              },
              {
                header: e("compute-on-dynex.myJobPostings.jobName"),
                id: "name",
                accessorKey: "name",
                enableSorting: !1,
              },
              {
                header: e("compute-on-dynex.myJobPostings.escrow"),
                accessorKey: "id",
                enableSorting: !1,
                cell: () =>
                  (0, o.jsx)(i(), {
                    src: N.Z,
                    className: E().check,
                    alt: "Yes",
                    draggable: "false",
                  }),
              },
              {
                header: e("compute-on-dynex.myJobPostings.budget"),
                id: "budget",
                accessorKey: "budget",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return "".concat(t.original.budget, " PTN");
                },
              },
              {
                header: e("compute-on-dynex.myJobPostings.status"),
                id: "status",
                accessorKey: "status",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return (0, o.jsx)(j.TO, { status: t.original.status });
                },
              },
            ],
            [e]
          );
        return (0, o.jsxs)(o.Fragment, {
          children: [
            C && (0, o.jsx)(m.W, { onClose: () => y(!1) }),
            v &&
              (0, o.jsx)(P, {
                jobPosting: v,
                updateJobPosting: _,
                onClose: () => f(void 0),
              }),
            (0, o.jsx)(j.sX, {
              scopeRef: t,
              title: e("compute-on-dynex.myJobPostings.title"),
              actions: (0, o.jsx)(x.N, { status: p, onChange: g }),
              actionsClassName: E().filters,
              children:
                (0 === h.length &&
                  (0, o.jsxs)("div", {
                    className: E().noData,
                    children: [
                      (0, o.jsx)(j.Jd, {
                        text: e("compute-on-dynex.myJobPostings.noData"),
                      }),
                      (0, o.jsx)(j.zx, {
                        onClick: () => y(!0),
                        children: e("compute-on-dynex.hireAnExpert.button"),
                      }),
                    ],
                  })) ||
                (n > 700
                  ? (0, o.jsx)(j.DI, {
                      columns: k,
                      data: h,
                      rowId: "id",
                      infiniteScroll: c,
                      loading: s,
                      onRowClick: f,
                      headerStyles: E().header,
                      rowStyles: E().row,
                    })
                  : (0, o.jsx)(j.hb, {
                      columns: k,
                      data: h,
                      rowId: "id",
                      infiniteScroll: c,
                      loading: s,
                      header: (t) =>
                        (0, o.jsxs)("div", {
                          className: E().mobileHeader,
                          children: [
                            (0, o.jsxs)("div", {
                              className: E().mobileHeader_row,
                              children: [
                                (0, o.jsx)("div", {
                                  className: E().mobileDate,
                                  children: d()(t.original.createdAt).format(
                                    "DD/MM/YYYY"
                                  ),
                                }),
                                (0, o.jsx)(j.TO, { status: t.original.status }),
                              ],
                            }),
                            (0, o.jsx)("div", {
                              className: (0, u.Z)(
                                E().mobileHeader_row,
                                E().mobileName
                              ),
                              children: t.original.name,
                            }),
                            (0, o.jsxs)("div", {
                              className: E().mobileHeader_row,
                              children: [
                                (0, o.jsxs)("div", {
                                  className: E().mobileEscrow,
                                  children: [
                                    (0, o.jsx)(i(), {
                                      src: N.Z,
                                      className: E().check,
                                      alt: "Yes",
                                      draggable: "false",
                                    }),
                                    (0, o.jsx)("div", {
                                      children: e(
                                        "compute-on-dynex.myJobPostings.escrow"
                                      ),
                                    }),
                                  ],
                                }),
                                (0, o.jsx)("div", {
                                  className: E().mobileBudget,
                                  children: "".concat(
                                    t.original.budget,
                                    " PTN"
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      onCardClick: f,
                    })),
            }),
          ],
        });
      }
    },
    40922: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "ComputeOnDynexPage_container__VO9Ti",
        tableScope: "ComputeOnDynexPage_tableScope__rnXOX",
      };
    },
    93158: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        header: "CreateJobPosting_header__qvuQT",
        modal: "CreateJobPosting_modal__9RU8i",
        container: "CreateJobPosting_container__I33Kc",
        form: "CreateJobPosting_form__sdMDz",
        row: "CreateJobPosting_row__TxEh9",
        area: "CreateJobPosting_area__nh9WG",
        actions: "CreateJobPosting_actions__zMJ_1",
        dnx: "CreateJobPosting_dnx__jENq5",
        files: "CreateJobPosting_files__hvryd",
      };
    },
    45529: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        header: "EditJobPosting_header__BhMNt",
        modal: "EditJobPosting_modal__P_dWK",
        container: "EditJobPosting_container__ORC25",
        form: "EditJobPosting_form__xNopy",
        dnx: "EditJobPosting_dnx__pNo2G",
        actions: "EditJobPosting_actions__6nJPm",
        appeal: "EditJobPosting_appeal__V82G6",
        delete: "EditJobPosting_delete__dujA4",
        normal: "EditJobPosting_normal__evule",
        experts: "EditJobPosting_experts__7JAX4",
      };
    },
    2510: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        expert: "SelectExpert_expert__wzHb3",
      };
    },
    73568: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        header: "ConnectSlack_header__tfVy3",
        modal: "ConnectSlack_modal__ro9iJ",
        form: "ConnectSlack_form__kUrM3",
        connected: "ConnectSlack_connected__t09CI",
        connect: "ConnectSlack_connect__1Kjss",
        step: "ConnectSlack_step__49wtO",
        stepNumber: "ConnectSlack_stepNumber__vT7Zz",
        stepText: "ConnectSlack_stepText__ZXXk4",
        button: "ConnectSlack_button__rMq_M",
      };
    },
    2159: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "ComputeOnDynexCards_container__IU4xO",
        textContainer: "ComputeOnDynexCards_textContainer__R65iN",
        bold: "ComputeOnDynexCards_bold__vRH9R",
        cards: "ComputeOnDynexCards_cards__0DERO",
        sdkActions: "ComputeOnDynexCards_sdkActions__Bbwct",
        hosted: "ComputeOnDynexCards_hosted__EkBYg",
      };
    },
    90781: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        filters: "UserJobPostingsTable_filters__YnvJC",
        noData: "UserJobPostingsTable_noData__Xrarx",
        header: "UserJobPostingsTable_header__Vs_IV",
        row: "UserJobPostingsTable_row__mRYtu",
        check: "UserJobPostingsTable_check___aVry",
        mobileHeader: "UserJobPostingsTable_mobileHeader__moWLE",
        mobileHeader_row: "UserJobPostingsTable_mobileHeader_row__tAe6U",
        mobileDate: "UserJobPostingsTable_mobileDate__uW7vE",
        mobileName: "UserJobPostingsTable_mobileName__fRthe",
        mobileEscrow: "UserJobPostingsTable_mobileEscrow__qfWGp",
        mobileBudget: "UserJobPostingsTable_mobileBudget__Qlv7M",
      };
    },
    22549: function (e, t) {
      "use strict";
      t.Z = {
        src: "/live.protoncoin.org/_next/static/media/check-in-circle.a2811b5b.svg",
        height: 16,
        width: 16,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    58645: function (e, t) {
      "use strict";
      t.Z = {
        src: "/live.protoncoin.org/_next/static/media/coin.2d4f6450.svg",
        height: 32,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    34350: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var o = n(2265),
        s = n(66169),
        i = s.jU ? o.useLayoutEffect : o.useEffect,
        a = {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        },
        l =
          s.jU && void 0 !== window.ResizeObserver
            ? function () {
                var e = (0, o.useState)(null),
                  t = e[0],
                  n = e[1],
                  s = (0, o.useState)(a),
                  l = s[0],
                  r = s[1],
                  c = (0, o.useMemo)(function () {
                    return new window.ResizeObserver(function (e) {
                      if (e[0]) {
                        var t = e[0].contentRect;
                        r({
                          x: t.x,
                          y: t.y,
                          width: t.width,
                          height: t.height,
                          top: t.top,
                          left: t.left,
                          bottom: t.bottom,
                          right: t.right,
                        });
                      }
                    });
                  }, []);
                return (
                  i(
                    function () {
                      if (t)
                        return (
                          c.observe(t),
                          function () {
                            c.disconnect();
                          }
                        );
                    },
                    [t]
                  ),
                  [n, l]
                );
              }
            : function () {
                return [s.ZT, a];
              };
    },
  },
  function (e) {
    e.O(
      0,
      [716, 990, 901, 906, 858, 749, 457, 200, 282, 971, 938, 744],
      function () {
        return e((e.s = 39940));
      }
    ),
      (_N_E = e.O());
  },
]);
