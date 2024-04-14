(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [274],
  {
    77756: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 93794)),
        Promise.resolve().then(a.bind(a, 94548));
    },
    6892: function (e, t, a) {
      "use strict";
      a.d(t, {
        W: function () {
          return n;
        },
      });
      var s = a(2265);
      function n(e, t) {
        let a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 3e4,
          n = (0, s.useRef)(),
          i = () => {
            e(), clearTimeout(n.current), (n.current = setTimeout(i, a));
          };
        (0, s.useEffect)(
          () => (
            i(),
            () => {
              clearTimeout(n.current);
            }
          ),
          t
        );
      }
    },
    32036: function (e, t, a) {
      "use strict";
      a.d(t, {
        x: function () {
          return n;
        },
      });
      var s = a(2265);
      function n() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          [a, n] = (0, s.useState)(!1),
          [i, l] = (0, s.useState)(1),
          [r, o] = (0, s.useState)(e),
          [c, d] = (0, s.useState)(0),
          [u, h] = (0, s.useState)(1),
          [g, m] = (0, s.useState)(t),
          x = () => {
            i > 1 && l(i - 1);
          },
          b = () => {
            i < u && l(i + 1);
          },
          v = (e) => {
            l(e);
          };
        return {
          loading: a,
          infiniteScroll: (0, s.useMemo)(
            () => ({ page: i, perPage: r, totalPages: u, onNextPage: b }),
            [i, r, u]
          ),
          pagination: (0, s.useMemo)(
            () => ({
              page: i,
              perPage: r,
              totalPages: u,
              total: c,
              onNextPage: b,
              onPrevPage: x,
              onPageChange: v,
            }),
            [i, r, u]
          ),
          sorting: g,
          changePage: v,
          setLoading: n,
          setPerPage: o,
          setTotalPages: h,
          setSorting: m,
          setTotal: d,
        };
      }
    },
    93794: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return v;
          },
        });
      var s = a(57437),
        n = a(50116),
        i = a(2265),
        l = a(3216),
        r = a(34350),
        o = a(87282),
        c = a(31537),
        d = a(99763),
        u = a(79466),
        h = a(28457),
        g = a(32036),
        m = a(6892),
        x = a(28072),
        b = a.n(x);
      function v() {
        let e = (0, n.useTranslations)(),
          [t, { width: a }] = (0, r.Z)(),
          {
            loading: x,
            infiniteScroll: v,
            userJobs: _,
          } = (function () {
            let {
                loading: e,
                infiniteScroll: t,
                setLoading: a,
                setTotalPages: s,
              } = (0, g.x)(10),
              [n, l] = (0, i.useState)([]);
            return (
              (0, m.W)(() => {
                e ||
                  (a(!0),
                  (0, o.OI)({ limit: 10 * t.page + 1, offset: 0 })
                    .then((e) => {
                      l(e.slice(0, 10 * t.page)),
                        e.length < 10 * t.page + 1
                          ? s(t.page)
                          : s(t.totalPages + 2);
                    })
                    .catch(() => {
                      l([]);
                    })
                    .finally(() => {
                      a(!1);
                    }));
              }, [t.page]),
              { loading: e, infiniteScroll: t, userJobs: n }
            );
          })(),
          f = (0, i.useMemo)(
            () => [
              {
                header: e("usage.myJobs.type"),
                id: "type",
                accessorKey: "type",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return (0, s.jsx)("div", {
                    className: b().type,
                    children: o.No[t.original.type],
                  });
                },
              },
              {
                header: e("usage.myJobs.jobId"),
                id: "id",
                accessorKey: "id",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return (0, s.jsx)(c.Mc, {
                    href: {
                      pathname: "/my-job/[id]",
                      params: { id: t.original.id },
                    },
                    className: b().link,
                    children: t.original.id,
                  });
                },
              },
              {
                header: e("usage.myJobs.duration"),
                id: "duration",
                accessorKey: "duration",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return (0, u.bW)(t.original.duration);
                },
              },
              {
                header: e("usage.myJobs.description"),
                id: "description",
                accessorKey: "description",
                enableSorting: !1,
              },
              {
                header: e("usage.myJobs.fee"),
                id: "fee",
                accessorKey: "fee",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return "".concat((0, d.eL)(t.original.fee, 3, ","), " PRN");
                },
              },
              {
                header: e("usage.myJobs.reward"),
                id: "reward",
                accessorKey: "reward",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return "".concat(
                    (0, d.eL)(t.original.reward, 3, ","),
                    " PRN"
                  );
                },
              },
              {
                header: e("usage.myJobs.cancelReason"),
                id: "cancelReason",
                accessorKey: "cancelReason",
                enableSorting: !1,
                cell: (e) => {
                  var t;
                  let { row: a } = e;
                  return (0, s.jsx)("div", {
                    className: b().reason,
                    children:
                      (null === (t = a.original.cancelReason) || void 0 === t
                        ? void 0
                        : t.replaceAll("_", " ").toLowerCase()) || "-",
                  });
                },
              },
              {
                header: e("usage.myJobs.status"),
                id: "status",
                accessorKey: "status",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return (0, s.jsx)(h.JT, { status: t.original.status });
                },
              },
            ],
            [e]
          );
        return (0, s.jsx)(h.sX, {
          scopeRef: t,
          title: e("usage.myJobs.title"),
          children:
            (0 === _.length &&
              (0, s.jsx)(h.Jd, { text: e("usage.myJobs.noData") })) ||
            (a > 900
              ? (0, s.jsx)(h.DI, {
                  columns: f,
                  data: _,
                  rowId: "id",
                  infiniteScroll: v,
                  loading: x,
                  headerStyles: b().header,
                  rowStyles: b().row,
                })
              : (0, s.jsx)(h.hb, {
                  columns: f,
                  data: _,
                  rowId: "id",
                  infiniteScroll: v,
                  loading: x,
                  header: (e) => {
                    let {
                      type: t,
                      id: a,
                      status: n,
                    } = e._getAllCellsByColumnId();
                    return (0, s.jsxs)("div", {
                      className: b().mobileHeader,
                      children: [
                        (0, s.jsxs)("div", {
                          className: b().mobileHeader_row,
                          children: [
                            (0, s.jsx)("div", {
                              children: (0, l.ie)(
                                t.column.columnDef.cell,
                                t.getContext()
                              ),
                            }),
                            (0, s.jsx)("div", {
                              children: (0, l.ie)(
                                n.column.columnDef.cell,
                                n.getContext()
                              ),
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: b().mobileHeader_row,
                          children: (0, l.ie)(
                            a.column.columnDef.cell,
                            a.getContext()
                          ),
                        }),
                      ],
                    });
                  },
                  body: (e) => {
                    var t, a, n, i, r;
                    let {
                      duration: o,
                      description: c,
                      fee: d,
                      reward: u,
                      cancelReason: g,
                    } = e._getAllCellsByColumnId();
                    return (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(h.yB, {
                          label:
                            null === (t = o.column.columnDef.header) ||
                            void 0 === t
                              ? void 0
                              : t.toString(),
                          value: (0, l.ie)(
                            o.column.columnDef.cell,
                            o.getContext()
                          ),
                        }),
                        (0, s.jsx)(h.yB, {
                          label:
                            null === (a = c.column.columnDef.header) ||
                            void 0 === a
                              ? void 0
                              : a.toString(),
                          value: (0, l.ie)(
                            c.column.columnDef.cell,
                            c.getContext()
                          ),
                        }),
                        (0, s.jsx)(h.yB, {
                          label:
                            null === (n = d.column.columnDef.header) ||
                            void 0 === n
                              ? void 0
                              : n.toString(),
                          value: (0, l.ie)(
                            d.column.columnDef.cell,
                            d.getContext()
                          ),
                        }),
                        (0, s.jsx)(h.yB, {
                          label:
                            null === (i = u.column.columnDef.header) ||
                            void 0 === i
                              ? void 0
                              : i.toString(),
                          value: (0, l.ie)(
                            u.column.columnDef.cell,
                            u.getContext()
                          ),
                        }),
                        (0, s.jsx)(h.yB, {
                          label:
                            null === (r = g.column.columnDef.header) ||
                            void 0 === r
                              ? void 0
                              : r.toString(),
                          value: (0, l.ie)(
                            g.column.columnDef.cell,
                            g.getContext()
                          ),
                        }),
                      ],
                    });
                  },
                })),
        });
      }
    },
    94548: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return X;
          },
        });
      var s = a(57437),
        n = a(2265),
        i = a(68200),
        l = a(87282),
        r = a(6892),
        o = a(50116),
        c = a(62067),
        d = a.n(c),
        u = a(99763),
        h = a(28457),
        g = a(44027),
        m = a.n(g);
      function x(e) {
        let { stats: t } = e,
          a = (0, o.useTranslations)();
        return (0, s.jsxs)("div", {
          className: m().container,
          children: [
            (0, s.jsx)(h.fA, {
              title: a("usage.stats.jobs"),
              value: t ? (0, u.eL)(t.jobCount, 0, " ") : "-",
            }),
            (0, s.jsx)(h.fA, {
              title: a("usage.stats.avgComputeTime"),
              value: (null == t ? void 0 : t.averageComputeTime)
                ? d()(+d()() + t.averageComputeTime).fromNow(!0)
                : "-",
            }),
            (0, s.jsx)(h.fA, {
              title: a("usage.stats.costs"),
              value: t
                ? "".concat((0, u.eL)(t.totalCosts, 6, " "), " PRN")
                : "-",
            }),
          ],
        });
      }
      var b = a(71241),
        v = a.n(b);
      function _(e) {
        let { stats: t } = e,
          a = (0, o.useTranslations)();
        return (0, s.jsxs)(h.KT, {
          className: v().container,
          children: [
            (0, s.jsxs)("div", {
              className: v().item,
              children: [
                (0, s.jsx)("div", {
                  className: v().title,
                  children: a("usage.stats.avgChipsUsed"),
                }),
                (0, s.jsx)("div", {
                  className: v().value,
                  children: t ? (0, u.eL)(t.averageChips, 0, " ") : "-",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: v().item,
              children: [
                (0, s.jsx)("div", {
                  className: v().title,
                  children: a("usage.stats.totalChipsUsed"),
                }),
                (0, s.jsx)("div", {
                  className: v().value,
                  children: t ? (0, u.eL)(t.totalChipsRequired, 0, " ") : "-",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: v().item,
              children: [
                (0, s.jsx)("div", {
                  className: v().title,
                  children: a("usage.stats.avgSteps"),
                }),
                (0, s.jsx)("div", {
                  className: v().value,
                  children: t
                    ? (0, u.eL)(t.averageIntegrationSteps, 0, " ")
                    : "-",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: v().item,
              children: [
                (0, s.jsx)("div", {
                  className: v().title,
                  children: a("usage.stats.totalSteps"),
                }),
                (0, s.jsx)("div", {
                  className: v().value,
                  children: t
                    ? (0, u.eL)(t.totalIntegrationSteps, 0, " ")
                    : "-",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: v().item,
              children: [
                (0, s.jsx)("div", {
                  className: v().title,
                  children: a("usage.stats.computeUnitsUsed"),
                }),
                (0, s.jsx)("div", {
                  className: v().value,
                  children: t ? (0, u.eL)(t.totalUsedUnits, 0, " ") : "-",
                }),
              ],
            }),
          ],
        });
      }
      var f = a(45253),
        j = a(38227),
        p = a(16573),
        S = a(50039),
        C = a(19223),
        N = a(86812),
        y = a(31537),
        U = a(26181),
        J = a.n(U);
      function D(e) {
        let { chartData: t } = e,
          a = (0, o.useTranslations)(),
          l = (0, i.E_)(),
          r = (0, i.LM)((e) => e.createdAt),
          [c, g] = (0, n.useState)("jobCount");
        return (0, s.jsx)(h.sX, {
          title: a("usage.chart.title"),
          actions: (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(h.iR, {
                value: l.usageChartVariant,
                options: {
                  day: a("usage.chart.day"),
                  month: a("usage.chart.month"),
                  year: a("usage.chart.year"),
                },
                onChange: (e) => l.setUsageChartVariant(e),
              }),
              (0, s.jsx)(h.Qf, {
                value: c,
                options: {
                  averageComputeTime: a("usage.chart.averageComputeTime"),
                  averageJobCost: a("usage.chart.averageJobCost"),
                  maxJobCost: a("usage.chart.maxJobCost"),
                  jobCount: a("usage.chart.jobCount"),
                  totalCosts: a("usage.chart.totalCosts"),
                  averageChips: a("usage.chart.averageChips"),
                  averageIntegrationSteps: a(
                    "usage.chart.averageIntegrationSteps"
                  ),
                  totalChipsRequired: a("usage.chart.totalChipsRequired"),
                  totalIntegrationSteps: a("usage.chart.totalIntegrationSteps"),
                  totalUsedUnits: a("usage.chart.totalUsedUnits"),
                },
                onChange: (e) => e && g(e),
              }),
            ],
          }),
          actionsClassName: J().filters,
          children: (0, s.jsx)("div", {
            className: J().container,
            children:
              0 === t.length
                ? (0, s.jsxs)("div", {
                    className: J().noData,
                    children: [
                      (0, s.jsx)(h.Jd, { text: a("usage.chart.noData") }),
                      r > +d()() - 864e6 &&
                        (0, s.jsx)(y.Mc, {
                          href: "/billing",
                          children: (0, s.jsx)(h.zx, {
                            onClick: () => {},
                            children: a("usage.chart.depositToStart"),
                          }),
                        }),
                    ],
                  })
                : (0, s.jsx)(f.h, {
                    width: "100%",
                    height: "100%",
                    children: (0, s.jsxs)(j.w, {
                      data: t,
                      margin: { top: 10, bottom: 10, right: 10 },
                      children: [
                        (0, s.jsx)(p.q, {
                          stroke: "var(--contrast-color)",
                          vertical: !1,
                          strokeWidth: 0.1,
                        }),
                        (0, s.jsx)(S.B, {
                          tickLine: !1,
                          fontSize: 12,
                          fontWeight: 300,
                          fontFamily: "var(--rubik-font)",
                          color: "var(--contrast-color)",
                          tickMargin: 5,
                          tickFormatter: (e) => {
                            switch (c) {
                              case "averageComputeTime":
                                return d()(+d()() + e).fromNow(!0);
                              case "averageJobCost":
                              case "maxJobCost":
                              case "totalCosts":
                                return (0, u.eL)(e, 3);
                              default:
                                return e;
                            }
                          },
                        }),
                        (0, s.jsx)(C.x, {
                          type: "monotone",
                          dataKey: c,
                          stroke: "var(--primary)",
                          activeDot: { r: 3 },
                          dot: { r: 0 },
                        }),
                        (0, s.jsx)(N.u, {
                          content: (0, s.jsx)(h.h7, {
                            formatLabel: (e) =>
                              d()(e.time).format("DD MMM YYYY HH:mm"),
                            formatValue: (e) => {
                              let t = "";
                              switch (c) {
                                case "averageComputeTime":
                                  t = d()(+d()() + e[c]).fromNow(!0);
                                  break;
                                case "averageJobCost":
                                case "maxJobCost":
                                case "totalCosts":
                                  t = (0, u.eL)(e[c], 6);
                                  break;
                                default:
                                  t = e[c].toString();
                              }
                              return (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsxs)("div", {
                                    children: [
                                      a("usage.chart.".concat(c)),
                                      ":",
                                    ],
                                  }),
                                  (0, s.jsx)("div", { children: t }),
                                ],
                              });
                            },
                          }),
                        }),
                      ],
                    }),
                  }),
          }),
        });
      }
      var k = a(57703),
        w = a(28485),
        T = a(36612),
        L = a(36815),
        R = a(33253),
        K = a(58645),
        A = a(23443),
        I = a.n(A);
      function B(e) {
        let { stats: t } = e,
          a = (0, o.useTranslations)(),
          l = (0, i.LM)(),
          [c, d] = (0, n.useState)();
        return (
          (0, n.useEffect)(() => {
            l.updateBalance();
          }, []),
          (0, r.W)(() => {
            (0, i.D3)().then((e) => {
              d(e);
            });
          }, []),
          (0, s.jsxs)("div", {
            className: I().container,
            children: [
              (0, s.jsxs)(h.KT, {
                className: I().credit,
                children: [
                  (0, s.jsxs)("div", {
                    className: I().chart,
                    children: [
                      (0, s.jsxs)("div", {
                        className: I().chartSum,
                        children: [
                          (0, s.jsx)("div", {
                            children: (0, u.eL)(l.balance, 4, " "),
                          }),
                          (0, s.jsx)("div", { children: "PRN" }),
                        ],
                      }),
                      (0, s.jsx)(f.h, {
                        width: "100%",
                        height: "100%",
                        children: (0, s.jsxs)(k.u, {
                          children: [
                            (0, s.jsxs)(w.b, {
                              data: [
                                {
                                  name: a("billing.balance"),
                                  balance: l.balance,
                                },
                                {
                                  name: a("billing.totalSpentBalance"),
                                  balance: l.totalSpentBalance,
                                },
                              ],
                              dataKey: "balance",
                              innerRadius: "92%",
                              outerRadius: "100%",
                              strokeWidth: 0,
                              children: [
                                (0, s.jsx)(T.b, { fill: "var(--secondary)" }),
                                (0, s.jsx)(T.b, { fill: "var(--gray3)" }),
                              ],
                            }),
                            l.balance + l.totalSpentBalance === 0 &&
                              (0, s.jsx)(w.b, {
                                data: [{ balance: 1 }],
                                dataKey: "balance",
                                innerRadius: "92%",
                                outerRadius: "100%",
                                fill: "var(--gray1)",
                                strokeWidth: 0,
                              }),
                            (0, s.jsx)(N.u, {
                              content: (0, s.jsx)(h.h7, {
                                formatLabel: (e) => e.name,
                                formatValue: (e) =>
                                  "".concat(
                                    (0, u.eL)(e.balance, 6, " "),
                                    " PRN"
                                  ),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: I().creditInfo,
                    children: [
                      (0, s.jsx)("div", {
                        className: I().creditTitle,
                        children: a("usage.stats.remainingCredit"),
                      }),
                      (0, s.jsx)(y.Mc, {
                        href: "/billing",
                        className: I().funds,
                        children: (0, s.jsx)(h.zx, {
                          onClick: () => {},
                          children: a("usage.stats.addFunds"),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: I().cards,
                children: [
                  (0, s.jsx)(h.rJ, {
                    icon: L.Z,
                    secondaryTitle: a("usage.stats.accountLimits"),
                    values: [
                      [
                        a("usage.stats.max_chips"),
                        c ? (0, u.eL)(c.maxChips) : "-",
                      ],
                      [
                        a("usage.stats.max_steps"),
                        c ? (0, u.eL)(c.maxSteps) : "-",
                      ],
                      [
                        a("usage.stats.max_duration"),
                        (null == c ? void 0 : c.maxDuration)
                          ? a("usage.stats.duration", { count: c.maxDuration })
                          : "-",
                      ],
                    ],
                  }),
                  (0, s.jsx)(h.rJ, {
                    icon: R.Z,
                    text: a("usage.stats.highestRewardOffered"),
                    value: t
                      ? "".concat((0, u.eL)(t.maxJobCost, 5, " "), " PRN")
                      : "-",
                  }),
                  (0, s.jsx)(h.rJ, {
                    icon: K.Z,
                    text: a("usage.stats.averageJobCost"),
                    value: t
                      ? "".concat((0, u.eL)(t.averageJobCost, 5, " "), " PRN")
                      : "-",
                  }),
                ],
              }),
            ],
          })
        );
      }
      var P = a(4562),
        W = a.n(P);
      function X() {
        let e = (0, i.E_)((e) => e.usageChartVariant),
          [t, a] = (0, n.useState)(),
          [o, c] = (0, n.useState)([]);
        return (
          (0, r.W)(() => {
            (0, l._u)({ type: e }).then((e) => {
              a(e.stats), c(e.charts);
            });
          }, [e]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(x, { stats: t }),
              (0, s.jsxs)("div", {
                className: W().container,
                children: [
                  (0, s.jsxs)("div", {
                    className: W().left,
                    children: [
                      (0, s.jsx)(_, { stats: t }),
                      (0, s.jsx)("div", {
                        className: W().chartScope,
                        children: (0, s.jsx)(D, { chartData: o }),
                      }),
                    ],
                  }),
                  (0, s.jsx)(B, { stats: t }),
                ],
              }),
            ],
          })
        );
      }
    },
    28072: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        filters: "AllUserJobsTable_filters__S5BJ_",
        header: "AllUserJobsTable_header__etFRJ",
        row: "AllUserJobsTable_row__rSjLY",
        mobileHeader: "AllUserJobsTable_mobileHeader__9AL_d",
        mobileHeader_row: "AllUserJobsTable_mobileHeader_row__K4rKe",
        link: "AllUserJobsTable_link__25R_O",
        type: "AllUserJobsTable_type__tawYE",
        reason: "AllUserJobsTable_reason__RcVf9",
      };
    },
    26181: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        filters: "PouwUsageChart_filters__1L3C9",
        container: "PouwUsageChart_container__p_Ra_",
        noData: "PouwUsageChart_noData__XVjj5",
      };
    },
    4562: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "Usage_container__PkDUD",
        left: "Usage_left__iJJil",
        chartScope: "Usage_chartScope__w42SV",
      };
    },
    44027: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "UsageCards_container__7EbW6",
      };
    },
    23443: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "UsageSideStats_container__X4961",
        credit: "UsageSideStats_credit__RDDGi",
        chart: "UsageSideStats_chart__zCrhK",
        chartSum: "UsageSideStats_chartSum__xzdto",
        creditInfo: "UsageSideStats_creditInfo__tdhSZ",
        creditTitle: "UsageSideStats_creditTitle__mk0jp",
        funds: "UsageSideStats_funds__4jLGl",
        cards: "UsageSideStats_cards__kX8PS",
      };
    },
    71241: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "UsageStats_container__u_9pU",
        item: "UsageStats_item__bSrKk",
        title: "UsageStats_title__QNCmv",
        value: "UsageStats_value__dXaFR",
      };
    },
    36815: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/avatar.adcb5bcc.svg",
        height: 32,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    58645: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/coin.2d4f6450.svg",
        height: 32,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    33253: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/lightning.49dbd16c.svg",
        height: 32,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
  function (e) {
    e.O(
      0,
      [716, 990, 901, 906, 858, 443, 976, 571, 457, 200, 282, 971, 938, 744],
      function () {
        return e((e.s = 77756));
      }
    ),
      (_N_E = e.O());
  },
]);
