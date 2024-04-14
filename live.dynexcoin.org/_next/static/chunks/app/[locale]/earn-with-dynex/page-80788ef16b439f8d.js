(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [732],
  {
    30894: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 19099)),
        Promise.resolve().then(s.bind(s, 64177));
    },
    81446: function (e, t, s) {
      "use strict";
      s.d(t, {
        D: function () {
          return b;
        },
      });
      var n = s(57437),
        o = s(61396),
        a = s.n(o),
        i = s(2265),
        l = s(54887),
        c = s(82749),
        r = s(50116),
        d = s(68200),
        u = s(28457),
        h = s(73568),
        m = s.n(h);
      function b(e) {
        let { variant: t = "text", nestedOpen: s, setNestedOpen: o } = e,
          h = (0, r.useTranslations)(),
          b = (0, i.useRef)(!1),
          { data: x } = (0, c.useSession)(),
          g = (0, d.LM)(),
          [_, f] = (0, i.useState)(!1),
          [p, j] = (0, i.useState)(!1),
          [k, v] = (0, i.useState)(!1),
          [S, w] = (0, i.useState)(!1),
          N = () => {
            var e;
            let t = null == x ? void 0 : x.id,
              s =
                null == x
                  ? void 0
                  : null === (e = x.user) || void 0 === e
                  ? void 0
                  : e.name;
            s &&
              t &&
              !k &&
              (f(!1),
              j(!1),
              v(!0),
              (b.current = !1),
              (0, d.zn)({ username: s, id: t })
                .then((e) => {
                  let { data: t } = e;
                  if (t) j(!0), g.setSlackUsername(s);
                  else throw Error();
                })
                .catch(() => {
                  f(!0), g.setSlackStatus(!1), g.setSlackUsername(null);
                })
                .finally(() => {
                  v(!1);
                }));
          };
        (0, i.useEffect)(() => {
          b.current && !g.slackStatus && !p && (s || S) && N();
        }, [x]),
          (0, i.useEffect)(
            () => () => {
              o && o(!1);
            },
            []
          );
        let y = () => {
            (0, c.signOut)({ redirect: !1 }), (b.current = !0);
          },
          P = () => {
            o && o(!0), w(!0);
          };
        return g.slackStatus
          ? (0, n.jsx)("div", {
              className: m().connected,
              children: h("profile.socialOptions.connected"),
            })
          : (0, n.jsxs)(n.Fragment, {
              children: [
                "text" === t
                  ? (0, n.jsx)("div", {
                      className: m().connect,
                      onClick: P,
                      children: h("profile.socialOptions.connect"),
                    })
                  : (0, n.jsx)(u.zx, {
                      onClick: P,
                      children: h("profile.socialOptions.connectSlack"),
                    }),
                (s || S) &&
                  (0, l.createPortal)(
                    (0, n.jsxs)(u.u_, {
                      header: (0, n.jsx)("div", {
                        className: m().header,
                        children: h("profile.socialOptions.connectSlack"),
                      }),
                      className: m().modal,
                      preventClose: !!_,
                      onClose: () => {
                        o && o(!1), (b.current = !1), w(!1);
                      },
                      children: [
                        p &&
                          (0, n.jsx)(u.xl, {
                            variant: "success",
                            title: h("actionComplete"),
                            text: h("profile.socialOptions.slackConnected"),
                            onClose: () => {
                              j(!1), g.setSlackStatus(!0);
                            },
                          }),
                        _ &&
                          (0, n.jsx)(u.xl, {
                            variant: "warn",
                            title: h("actionNotComplete"),
                            text: h("profile.socialOptions.slackNotConnected"),
                            onClose: () => f(!1),
                          }),
                        (0, n.jsxs)("div", {
                          className: m().form,
                          children: [
                            (0, n.jsxs)("div", {
                              className: m().step,
                              children: [
                                (0, n.jsx)("div", {
                                  className: m().stepNumber,
                                  children: "1",
                                }),
                                (0, n.jsx)("div", {
                                  className: m().stepText,
                                  children: h(
                                    "profile.socialOptions.joinDynexWorkspace"
                                  ),
                                }),
                              ],
                            }),
                            (0, n.jsx)(a(), {
                              href: "https://dynex-workspace.slack.com/join/shared_invite/zt-22eb1n4mo-aXS5zsUBoPs613Dofi8Q4A#/shared-invite/email",
                              target: "_blank",
                              className: m().button,
                              children: (0, n.jsx)(u.zx, {
                                onClick: () => {},
                                children: h("profile.socialOptions.join"),
                              }),
                            }),
                            (0, n.jsxs)("div", {
                              className: m().step,
                              children: [
                                (0, n.jsx)("div", {
                                  className: m().stepNumber,
                                  children: "2",
                                }),
                                (0, n.jsx)("div", {
                                  className: m().stepText,
                                  children: h(
                                    "profile.socialOptions.pressConnectSlack"
                                  ),
                                }),
                              ],
                            }),
                            (0, n.jsx)(a(), {
                              href: "/api/auth/signin/slack",
                              target: "_blank",
                              className: m().button,
                              onClick: y,
                              onAuxClick: y,
                              children: (0, n.jsx)(u.zx, {
                                onClick: () => {},
                                children: h(
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
    6892: function (e, t, s) {
      "use strict";
      s.d(t, {
        W: function () {
          return o;
        },
      });
      var n = s(2265);
      function o(e, t) {
        let s =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 3e4,
          o = (0, n.useRef)(),
          a = () => {
            e(), clearTimeout(o.current), (o.current = setTimeout(a, s));
          };
        (0, n.useEffect)(
          () => (
            a(),
            () => {
              clearTimeout(o.current);
            }
          ),
          t
        );
      }
    },
    32036: function (e, t, s) {
      "use strict";
      s.d(t, {
        x: function () {
          return o;
        },
      });
      var n = s(2265);
      function o() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          [s, o] = (0, n.useState)(!1),
          [a, i] = (0, n.useState)(1),
          [l, c] = (0, n.useState)(e),
          [r, d] = (0, n.useState)(0),
          [u, h] = (0, n.useState)(1),
          [m, b] = (0, n.useState)(t),
          x = () => {
            a > 1 && i(a - 1);
          },
          g = () => {
            a < u && i(a + 1);
          },
          _ = (e) => {
            i(e);
          };
        return {
          loading: s,
          infiniteScroll: (0, n.useMemo)(
            () => ({ page: a, perPage: l, totalPages: u, onNextPage: g }),
            [a, l, u]
          ),
          pagination: (0, n.useMemo)(
            () => ({
              page: a,
              perPage: l,
              totalPages: u,
              total: r,
              onNextPage: g,
              onPrevPage: x,
              onPageChange: _,
            }),
            [a, l, u]
          ),
          sorting: m,
          changePage: _,
          setLoading: o,
          setPerPage: c,
          setTotalPages: h,
          setSorting: b,
          setTotal: d,
        };
      }
    },
    19099: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return A;
          },
        });
      var n = s(57437),
        o = s(16691),
        a = s.n(o),
        i = s(24033),
        l = s(2265),
        c = s(34350),
        r = s(50116),
        d = s(62067),
        u = s.n(d),
        h = s(57042),
        m = s(68200),
        b = s(28457),
        x = s(22549),
        g = s(61396),
        _ = s.n(g),
        f = s(54887),
        p = s(87282),
        j = s(81446),
        k = s(7804),
        v = s.n(k);
      function S(e) {
        let { jobPosting: t } = e,
          s = (0, r.useTranslations)(),
          o = (0, i.usePathname)(),
          a = (0, i.useRouter)(),
          c = (0, m.LM)((e) => e.slackStatus),
          [d, u] = (0, l.useState)(!1);
        return (0, f.createPortal)(
          (0, n.jsx)(b.u_, {
            header: (0, n.jsx)("div", {
              className: v().header,
              children: s("compute-on-dynex.jobPosting.view", { id: t.id }),
            }),
            className: v().modal,
            preventClose: d,
            large: !0,
            onClose: () => a.push(o, { scroll: !1 }),
            children: (0, n.jsxs)("div", {
              className: v().container,
              children: [
                (0, n.jsx)(p.$o, { jobPosting: t }),
                t.customerSlackId &&
                  (0, n.jsx)("div", {
                    className: v().actions,
                    children: c
                      ? (0, n.jsx)(_(), {
                          href: ""
                            .concat(
                              "https://dynex-workspace.slack.com/team",
                              "/"
                            )
                            .concat(t.customerSlackId),
                          target: "_blank",
                          children: (0, n.jsx)(b.zx, {
                            onClick: () => {},
                            children: s("getInTouch"),
                          }),
                        })
                      : (0, n.jsx)(j.D, {
                          variant: "button",
                          nestedOpen: d,
                          setNestedOpen: u,
                        }),
                  }),
              ],
            }),
          }),
          document.body
        );
      }
      var w = s(92173),
        N = s(32036),
        y = s(6892),
        P = s(80738),
        C = s.n(P);
      function A() {
        let e = (0, r.useTranslations)(),
          t = (0, i.usePathname)(),
          s = (0, i.useRouter)(),
          o = (0, m.LM)((e) => e.authenticated),
          d = (0, i.useSearchParams)().get("posting_id"),
          [g, { width: _ }] = (0, c.Z)(),
          {
            loading: f,
            infiniteScroll: j,
            postings: k,
            allPostings: v,
          } = (function () {
            let {
                loading: e,
                infiniteScroll: t,
                setLoading: s,
                setTotalPages: n,
              } = (0, N.x)(10),
              o = (0, p.dU)((e) => e.setPostingFee),
              [a, i] = (0, l.useState)();
            return (
              (0, y.W)(() => {
                e ||
                  (s(!0),
                  w.Z.all([
                    (0, p.HS)({ status: p.jx.created }),
                    (0, p.HS)({ status: p.jx.processing }),
                    (0, p.HS)({ status: p.jx.finished }),
                  ])
                    .then(
                      w.Z.spread((e, t, s) => {
                        let a = e.data.sort(
                            (e, t) => t.createdAt - e.createdAt
                          ),
                          l = t.data.sort((e, t) => t.createdAt - e.createdAt),
                          c = s.data.sort((e, t) => t.createdAt - e.createdAt);
                        o(e.postingFee),
                          i([...a, ...l, ...c]),
                          n(Math.ceil((a.length + l.length + c.length) / 10));
                      })
                    )
                    .catch(() => {
                      i([]);
                    })
                    .finally(() => {
                      s(!1);
                    }));
              }, []),
              {
                loading: e,
                infiniteScroll: t,
                allPostings: a,
                postings: (a || []).slice(0, 10 * t.page),
              }
            );
          })(),
          [P, A] = (0, l.useState)(),
          T = (0, l.useMemo)(
            () => [
              {
                header: e("compute-on-dynex.myJobPostings.date"),
                id: "createdAt",
                accessorKey: "createdAt",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return u()(t.original.createdAt).format("DD/MM/YYYY");
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
                  (0, n.jsx)(a(), {
                    src: x.Z,
                    className: C().check,
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
                  return "".concat(t.original.budget, " PRN");
                },
              },
              {
                header: e("compute-on-dynex.myJobPostings.status"),
                id: "status",
                accessorKey: "status",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return (0, n.jsx)(b.TO, { status: t.original.status });
                },
              },
            ],
            [e]
          );
        (0, l.useEffect)(() => {
          if (v && o) {
            if (d) {
              let e = v.find((e) => e.id === +d);
              A(e), e || s.replace(t, { scroll: !1 });
            } else A(void 0);
          }
        }, [v, d]);
        let J = (0, l.useCallback)((e) => {
          s.push("".concat(t, "?posting_id=").concat(e.id), { scroll: !1 });
        }, []);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            P && (0, n.jsx)(S, { jobPosting: P }),
            (0, n.jsx)(b.sX, {
              scopeRef: g,
              title: e("earn-with-dynex.jobPostings.title"),
              children:
                (0 === k.length &&
                  (0, n.jsx)(b.Jd, {
                    text: e("earn-with-dynex.jobPostings.noData"),
                  })) ||
                (_ > 700
                  ? (0, n.jsx)(b.DI, {
                      columns: T,
                      data: k,
                      rowId: "id",
                      infiniteScroll: j,
                      loading: f,
                      onRowClick: J,
                      headerStyles: C().header,
                      rowStyles: C().row,
                    })
                  : (0, n.jsx)(b.hb, {
                      columns: T,
                      data: k,
                      rowId: "id",
                      infiniteScroll: j,
                      loading: f,
                      onCardClick: J,
                      header: (t) =>
                        (0, n.jsxs)("div", {
                          className: C().mobileHeader,
                          children: [
                            (0, n.jsxs)("div", {
                              className: C().mobileHeader_row,
                              children: [
                                (0, n.jsx)("div", {
                                  className: C().mobileDate,
                                  children: u()(t.original.createdAt).format(
                                    "DD/MM/YYYY"
                                  ),
                                }),
                                (0, n.jsx)(b.TO, { status: t.original.status }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: (0, h.Z)(
                                C().mobileHeader_row,
                                C().mobileName
                              ),
                              children: t.original.name,
                            }),
                            (0, n.jsxs)("div", {
                              className: C().mobileHeader_row,
                              children: [
                                (0, n.jsxs)("div", {
                                  className: C().mobileEscrow,
                                  children: [
                                    (0, n.jsx)(a(), {
                                      src: x.Z,
                                      className: C().check,
                                      alt: "Yes",
                                      draggable: "false",
                                    }),
                                    (0, n.jsx)("div", {
                                      children: e(
                                        "compute-on-dynex.myJobPostings.escrow"
                                      ),
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("div", {
                                  className: C().mobileBudget,
                                  children: "".concat(
                                    t.original.budget,
                                    " PRN"
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                    })),
            }),
          ],
        });
      }
    },
    64177: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var n = s(57437),
        o = s(50116),
        a = s(28457),
        i = s(31537),
        l = {
          src: "/_next/static/media/box.42002002.svg",
          height: 72,
          width: 72,
          blurWidth: 0,
          blurHeight: 0,
        },
        c = {
          src: "/_next/static/media/hat.09a7ebd8.svg",
          height: 72,
          width: 72,
          blurWidth: 0,
          blurHeight: 0,
        },
        r = s(77390),
        d = s.n(r);
      function u() {
        let e = (0, o.useTranslations)();
        return (0, n.jsxs)("div", {
          className: d().cards,
          children: [
            (0, n.jsx)(a.WV, {
              title: e("earn-with-dynex.createAndSell.title"),
              text: e("earn-with-dynex.createAndSell.text"),
              icon: l,
              actions: (0, n.jsx)(i.Mc, {
                href: "/code-library",
                children: (0, n.jsx)(a.zx, {
                  onClick: () => {},
                  children: e("earn-with-dynex.createAndSell.button"),
                }),
              }),
            }),
            (0, n.jsx)(a.WV, {
              title: e("earn-with-dynex.becomeAnExpert.title"),
              text: e("earn-with-dynex.becomeAnExpert.text"),
              icon: c,
              actions: (0, n.jsx)(i.Mc, {
                href: "/compute-on-dynex",
                children: (0, n.jsx)(a.zx, {
                  onClick: () => {},
                  children: e("earn-with-dynex.becomeAnExpert.button"),
                }),
              }),
            }),
          ],
        });
      }
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
    80738: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        header: "AllJobPostingsTable_header__ewLeR",
        row: "AllJobPostingsTable_row__QC6iF",
        check: "AllJobPostingsTable_check__b0taZ",
        mobileHeader: "AllJobPostingsTable_mobileHeader__5tL3X",
        mobileHeader_row: "AllJobPostingsTable_mobileHeader_row__LXH3g",
        mobileDate: "AllJobPostingsTable_mobileDate__xtEVO",
        mobileName: "AllJobPostingsTable_mobileName__dBF_R",
        mobileEscrow: "AllJobPostingsTable_mobileEscrow__LmRH9",
        mobileBudget: "AllJobPostingsTable_mobileBudget__m6ReP",
      };
    },
    7804: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        header: "JobPostingModal_header___pJ31",
        modal: "JobPostingModal_modal__9pkPR",
        container: "JobPostingModal_container__Q0sL4",
        actions: "JobPostingModal_actions__iOIf2",
      };
    },
    77390: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        cards: "EarnWithDynexCards_cards__7Lu1P",
      };
    },
    22549: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/check-in-circle.a2811b5b.svg",
        height: 16,
        width: 16,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    34350: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = s(2265),
        o = s(66169),
        a = o.jU ? n.useLayoutEffect : n.useEffect,
        i = {
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
          o.jU && void 0 !== window.ResizeObserver
            ? function () {
                var e = (0, n.useState)(null),
                  t = e[0],
                  s = e[1],
                  o = (0, n.useState)(i),
                  l = o[0],
                  c = o[1],
                  r = (0, n.useMemo)(function () {
                    return new window.ResizeObserver(function (e) {
                      if (e[0]) {
                        var t = e[0].contentRect;
                        c({
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
                  a(
                    function () {
                      if (t)
                        return (
                          r.observe(t),
                          function () {
                            r.disconnect();
                          }
                        );
                    },
                    [t]
                  ),
                  [s, l]
                );
              }
            : function () {
                return [o.ZT, i];
              };
    },
  },
  function (e) {
    e.O(
      0,
      [716, 990, 901, 906, 858, 749, 457, 200, 282, 971, 938, 744],
      function () {
        return e((e.s = 30894));
      }
    ),
      (_N_E = e.O());
  },
]);
