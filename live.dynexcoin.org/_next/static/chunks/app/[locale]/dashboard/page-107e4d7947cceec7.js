(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [631],
  {
    20199: function (e, t, a) {
      Promise.resolve().then(a.t.bind(a, 18574, 23)),
        Promise.resolve().then(a.bind(a, 39127)),
        Promise.resolve().then(a.bind(a, 86217)),
        Promise.resolve().then(a.bind(a, 83232)),
        Promise.resolve().then(a.bind(a, 68103)),
        Promise.resolve().then(a.bind(a, 35857)),
        Promise.resolve().then(a.bind(a, 19485));
    },
    18069: function (e, t, a) {
      "use strict";
      a.d(t, {
        N: function () {
          return l;
        },
        G: function () {
          return i;
        },
      });
      var s = a(57437),
        r = a(50116),
        o = a(87282),
        n = a(28457);
      function i(e) {
        let { status: t, disabled: a, onChange: i } = e,
          l = (0, r.useTranslations)();
        return (0, s.jsx)(n.Qf, {
          value: (null == t ? void 0 : t.toString()) || "",
          options: {
            0: l("all"),
            ...Object.fromEntries(
              Object.values(o.By)
                .filter((e) => !Number.isNaN(Number(e)))
                .map((e) => [e, l("status.".concat(o.By[+e]))])
            ),
          },
          placeholder: l("status.title"),
          disabled: a,
          onChange: (e) => {
            "0" === e ? i(void 0) : i(e ? +e : void 0);
          },
        });
      }
      function l(e) {
        let { status: t, disabled: a, onChange: i } = e,
          l = (0, r.useTranslations)();
        return (0, s.jsx)(n.Qf, {
          value: (null == t ? void 0 : t.toString()) || "",
          options: Object.fromEntries(
            Object.values(o.jx)
              .filter((e) => !Number.isNaN(Number(e)))
              .map((e) => [e, l("status.".concat(o.jx[+e]))])
          ),
          placeholder: l("status.title"),
          disabled: a,
          onChange: (e) => {
            i(e ? +e : void 0);
          },
        });
      }
    },
    6892: function (e, t, a) {
      "use strict";
      a.d(t, {
        W: function () {
          return r;
        },
      });
      var s = a(2265);
      function r(e, t) {
        let a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 3e4,
          r = (0, s.useRef)(),
          o = () => {
            e(), clearTimeout(r.current), (r.current = setTimeout(o, a));
          };
        (0, s.useEffect)(
          () => (
            o(),
            () => {
              clearTimeout(r.current);
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
          return r;
        },
      });
      var s = a(2265);
      function r() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          [a, r] = (0, s.useState)(!1),
          [o, n] = (0, s.useState)(1),
          [i, l] = (0, s.useState)(e),
          [d, c] = (0, s.useState)(0),
          [u, h] = (0, s.useState)(1),
          [m, b] = (0, s.useState)(t),
          x = () => {
            o > 1 && n(o - 1);
          },
          g = () => {
            o < u && n(o + 1);
          },
          p = (e) => {
            n(e);
          };
        return {
          loading: a,
          infiniteScroll: (0, s.useMemo)(
            () => ({ page: o, perPage: i, totalPages: u, onNextPage: g }),
            [o, i, u]
          ),
          pagination: (0, s.useMemo)(
            () => ({
              page: o,
              perPage: i,
              totalPages: u,
              total: d,
              onNextPage: g,
              onPrevPage: x,
              onPageChange: p,
            }),
            [o, i, u]
          ),
          sorting: m,
          changePage: p,
          setLoading: r,
          setPerPage: l,
          setTotalPages: h,
          setSorting: b,
          setTotal: c,
        };
      }
    },
    39127: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var s = a(57437),
        r = a(50116),
        o = a(28457),
        n = a(31537),
        i = {
          src: "./_next/static/media/unlock.5912db75.svg",
          height: 72,
          width: 72,
          blurWidth: 0,
          blurHeight: 0,
        },
        l = {
          src: "./_next/static/media/strategy.b53cf0f7.svg",
          height: 72,
          width: 72,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = a(74453),
        c = a.n(d);
      function u() {
        let e = (0, r.useTranslations)();
        return (0, s.jsxs)("div", {
          className: c().container,
          children: [
            (0, s.jsx)(o.WV, {
              title: e("dashboard.cards.compute.title"),
              text: e("dashboard.cards.compute.text"),
              icon: i,
              actions: (0, s.jsx)(n.Mc, {
                href: "/compute-on-dynex",
                children: (0, s.jsx)(o.zx, {
                  onClick: () => {},
                  children: e("compute-on-dynex.title"),
                }),
              }),
            }),
            (0, s.jsx)(o.WV, {
              title: e("dashboard.cards.earn.title"),
              text: e("dashboard.cards.earn.text"),
              icon: l,
              actions: (0, s.jsx)(n.Mc, {
                href: "/earn-with-dynex",
                children: (0, s.jsx)(o.zx, {
                  onClick: () => {},
                  children: e("earn-with-dynex.title"),
                }),
              }),
            }),
          ],
        });
      }
    },
    86217: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return j;
          },
        });
      var s = a(57437),
        r = a(2265),
        o = a(61396),
        n = a.n(o),
        i = a(50116),
        l = a(87282),
        d = a(99763),
        c = a(6892),
        u = a(28457),
        h = a(33253),
        m = a(36815),
        b = {
          src: "./_next/static/media/fork.d727b328.svg",
          height: 33,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        x = {
          src: "./_next/static/media/console.732376d8.svg",
          height: 33,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        g = a(58645),
        p = {
          src: "./_next/static/media/cube.252ee71f.svg",
          height: 800,
          width: 800,
          blurWidth: 0,
          blurHeight: 0,
        },
        f = {
          src: "./_next/static/media/people-3.f4fbb2ad.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        _ = a(29607),
        v = a.n(_);
      function j() {
        let e = (0, i.useTranslations)(),
          [t, a] = (0, r.useState)("payments"),
          [o, _] = (0, r.useState)(),
          [j, w] = (0, r.useState)(),
          [y, S] = (0, r.useState)(),
          [N, D] = (0, r.useState)(),
          [k, P] = (0, r.useState)();
        return (
          (0, c.W)(() => {
            (0, l.vG)().then((e) => {
              let { data: t } = e;
              return _(t);
            }),
              (0, l.A)().then((e) => {
                let { data: t } = e;
                return w(t);
              }),
              (0, l.I2)().then((e) => {
                let { data: t } = e;
                return D(t.averageBlockReward);
              }),
              (0, l.yT)().then((e) => {
                let { data: t } = e;
                return P(t.total_paid);
              });
          }, []),
          (0, c.W)(
            () => {
              (0, l.nw)().then((e) => {
                let { data: t } = e;
                return S(t.avg_fee);
              });
            },
            [],
            5e3
          ),
          (0, s.jsxs)("div", {
            className: v().container,
            children: [
              (0, s.jsx)(u.ks, {
                value: t,
                options: {
                  payments: e("dashboard.pouwPayments.title"),
                  network: e("dashboard.networkStatus.title"),
                },
                onChange: a,
              }),
              (0, s.jsx)("div", {
                className: v().cards,
                children:
                  "payments" === t
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(u.rJ, {
                            icon: h.Z,
                            value: o
                              ? "".concat((0, d.eL)(o.block_fee, 3), " PRN")
                              : "-",
                            tag: e("dashboard.pouwPayments.compute"),
                            text: e("dashboard.pouwPayments.totalBlockFees"),
                          }),
                          (0, s.jsx)(u.rJ, {
                            icon: m.Z,
                            value: o
                              ? "".concat((0, d.eL)(o.solution_fee, 3), " PRN")
                              : "-",
                            tag: e("dashboard.pouwPayments.optional"),
                            text: e("dashboard.pouwPayments.totalAmountPaid"),
                          }),
                          (0, s.jsx)(u.rJ, {
                            icon: b,
                            value: o
                              ? "".concat((0, d.eL)(o.dev_fee, 3), " PRN")
                              : "-",
                            text: e("dashboard.pouwPayments.totalDevFees"),
                          }),
                          (0, s.jsx)(u.rJ, {
                            icon: f,
                            value: k ? "".concat((0, d.eL)(k, 3), " PRN") : "-",
                            text: e.rich(
                              "dashboard.pouwPayments.totalDhipFees",
                              {
                                a: (e) =>
                                  (0, s.jsx)(n(), {
                                    href: "https://dhip.dynexcoin.org",
                                    className: v().link,
                                    target: "_blank",
                                    children: e,
                                  }),
                              }
                            ),
                          }),
                          (0, s.jsx)(u.rJ, {
                            icon: g.Z,
                            value: y ? "".concat((0, d.eL)(y, 3), " PRN") : "-",
                            text: e(
                              "dashboard.pouwPayments.payAsYouCompute.text"
                            ),
                          }),
                        ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(u.rJ, {
                            icon: h.Z,
                            value:
                              "number" ==
                              typeof (null == j ? void 0 : j.hashrate)
                                ? (0, d.KS)(j.hashrate, "H/s")
                                : "-",
                            text: e("dashboard.networkStatus.hashrate"),
                          }),
                          (0, s.jsx)(u.rJ, {
                            icon: m.Z,
                            value:
                              "number" == typeof (null == j ? void 0 : j.miners)
                                ? (0, d.eL)(j.miners, 0, " ")
                                : "-",
                            text: e("dashboard.networkStatus.connectedMiners"),
                          }),
                          (0, s.jsx)(u.rJ, {
                            icon: b,
                            value:
                              "number" == typeof (null == j ? void 0 : j.gpus)
                                ? (0, d.eL)(j.gpus, 0, " ")
                                : "-",
                            text: e("dashboard.networkStatus.gpuCount"),
                          }),
                          (0, s.jsx)(u.rJ, {
                            icon: x,
                            value:
                              "number" ==
                              typeof (null == j ? void 0 : j.difficulty)
                                ? (0, d.eL)(j.difficulty, 0, " ")
                                : "-",
                            text: e("dashboard.networkStatus.difficulty"),
                          }),
                          (0, s.jsx)(u.rJ, {
                            icon: p,
                            value:
                              void 0 !== N
                                ? "".concat((0, d.eL)(N, 3), " PRN")
                                : "-",
                            text: e("dashboard.networkStatus.avgBlockRewards"),
                          }),
                        ],
                      }),
              }),
            ],
          })
        );
      }
    },
    83232: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return G;
          },
        });
      var s = a(57437),
        r = a(2265),
        o = a(24033),
        n = a(45253),
        i = a(74542),
        l = a(24235),
        d = a(50039),
        c = a(31346),
        u = a(36612),
        h = a(19223),
        m = a(86812),
        b = a(50116),
        x = a(62067),
        g = a.n(x),
        p = a(87282),
        f = a(16691),
        _ = a.n(f),
        v = a(54887),
        j = a(3216),
        w = a(34350),
        y = a(99763),
        S = a(6892),
        N = a(28457),
        D = {
          src: "./_next/static/media/amd.dfdb18e5.svg",
          height: 12,
          width: 51,
          blurWidth: 0,
          blurHeight: 0,
        },
        k = {
          src: "./_next/static/media/nvidia.b1f54699.svg",
          height: 12,
          width: 65,
          blurWidth: 0,
          blurHeight: 0,
        },
        P = a(58554),
        C = {
          src: "./_next/static/media/indicators.aa76d121.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        H = a(36335),
        J = a(33253),
        M = {
          src: "./_next/static/media/bulb.8e072a16.svg",
          height: 33,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        T = {
          src: "./_next/static/media/warn.2521f32f.svg",
          height: 33,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        A = a(32036),
        R = a(88089);
      let W = () =>
        R.fA.get("/network/gpu_stats").then((e) => {
          let { data: t } = e;
          return {
            ...t,
            gpus: t.gpus.map((e) => ({
              ...e,
              manufacturer:
                (e.name.startsWith("NVIDIA") && "NVIDIA") ||
                (e.name.startsWith("AMD") && "AMD") ||
                "Other",
              name: e.name.replace(/^(NVIDIA|AMD) /i, ""),
              id: "".concat(e.name, "_").concat(e.vendor),
            })),
          };
        });
      var I = a(96493),
        L = a.n(I),
        B = () => {
          let e = (0, b.useTranslations)(),
            [t, { width: a }] = (0, w.Z)(),
            n = (0, o.usePathname)(),
            i = (0, o.useRouter)(),
            [l, d] = (0, r.useState)([]),
            [c, u] = (0, r.useState)(),
            [h, m] = (0, r.useState)(),
            [x, g] = (0, r.useState)(),
            [p, f] = (0, r.useState)(),
            [R, I] = (0, r.useState)(),
            B = "true" === (0, o.useSearchParams)().get("gpus"),
            {
              loading: K,
              sorting: X,
              filteredGPUs: Z,
              searchQuery: O,
              pagination: G,
              amd: Y,
              nvidia: E,
              setSorting: F,
              setAmd: V,
              setNvidia: U,
              setSearchQuery: z,
            } = (function (e) {
              let {
                  loading: t,
                  pagination: a,
                  sorting: s,
                  setSorting: o,
                  setTotal: n,
                  setTotalPages: i,
                  changePage: l,
                } = (0, A.x)(15),
                d = (0, r.useRef)(),
                c = (0, r.useRef)(!0),
                [u, h] = (0, r.useState)(""),
                [m, b] = (0, r.useState)(!0),
                [x, g] = (0, r.useState)(!0),
                [p, f] = (0, r.useState)([]),
                _ = () => {
                  let t = e;
                  u &&
                    (t = t.filter((e) =>
                      e.name.toLowerCase().includes(u.toLowerCase())
                    )),
                    m || (t = t.filter((e) => "AMD" !== e.manufacturer)),
                    x || (t = t.filter((e) => "NVIDIA" !== e.manufacturer)),
                    n(t.length),
                    i(Math.ceil(t.length / 15)),
                    f(t);
                };
              return (
                (0, r.useEffect)(() => {
                  _();
                }, [e]),
                (0, r.useEffect)(() => {
                  l(1), _();
                }, [m, x]),
                (0, r.useEffect)(() => {
                  if (c.current && !u) {
                    c.current = !1;
                    return;
                  }
                  clearTimeout(d.current),
                    (d.current = setTimeout(() => {
                      l(1), _();
                    }, 1e3));
                }, [u]),
                {
                  loading: t,
                  sorting: s,
                  filteredGPUs: p,
                  searchQuery: u,
                  pagination: a,
                  amd: m,
                  nvidia: x,
                  setSorting: o,
                  setAmd: b,
                  setNvidia: g,
                  setSearchQuery: h,
                }
              );
            })(l);
          (0, S.W)(() => {
            W().then((e) => {
              d(e.gpus),
                u(e.total_gpus),
                m(e.total_price),
                g(e.total_vram_gb),
                f(e.total_power_consumption_w),
                I(e.total_compute_performance_flops);
            });
          }, []);
          let Q = (0, r.useMemo)(
            () => [
              {
                header: e("gpu.manufacturer"),
                id: "manufacturer",
                accessorKey: "manufacturer",
                cell: (t) => {
                  let { row: a } = t;
                  return (
                    ("Other" === a.original.manufacturer && e("other")) ||
                    (0, s.jsx)(_(), {
                      src: "AMD" === a.original.manufacturer ? D : k,
                      className: L().icon,
                      alt: a.original.manufacturer,
                      draggable: "false",
                    })
                  );
                },
              },
              { header: e("gpu.name"), id: "name", accessorKey: "name" },
              { header: e("gpu.vendor"), id: "vendor", accessorKey: "vendor" },
              {
                header: e("gpu.price"),
                id: "price",
                accessorKey: "price",
                cell: (e) => {
                  let { row: t } = e;
                  return "".concat((0, y.eL)(t.original.price, 2, " "), " $");
                },
              },
              {
                header: e("gpu.total"),
                id: "total",
                accessorKey: "total",
                cell: (e) => {
                  let { row: t } = e;
                  return (0, y.eL)(t.original.total, 0, " ");
                },
              },
            ],
            [e]
          );
          return (
            B &&
            (0, v.createPortal)(
              (0, s.jsx)(N.u_, {
                header: (0, s.jsx)("div", {
                  className: L().header,
                  children: e("gpu.title"),
                }),
                className: L().modal,
                onClose: () => i.push(n, { scroll: !1 }),
                children: (0, s.jsxs)("div", {
                  ref: t,
                  className: L().container,
                  children: [
                    (0, s.jsxs)("div", {
                      className: L().stats,
                      children: [
                        (0, s.jsx)(N.rJ, {
                          icon: C,
                          value: void 0 !== c ? (0, y.eL)(c, 0, " ") : "-",
                          text: e("gpu.totalGPUs"),
                        }),
                        (0, s.jsx)(N.rJ, {
                          icon: H.Z,
                          value:
                            void 0 !== h
                              ? "".concat((0, y.eL)(h, 0, " "), " $")
                              : "-",
                          text: e("gpu.totalPrice"),
                        }),
                        (0, s.jsx)(N.rJ, {
                          icon: J.Z,
                          value: void 0 !== x ? (0, y.KS)(1e9 * x, "B") : "-",
                          text: e("gpu.totalVRAM"),
                        }),
                        (0, s.jsx)(N.rJ, {
                          icon: M,
                          value: void 0 !== p ? (0, y.KS)(p, "W") : "-",
                          text: e("gpu.totalEnergy"),
                        }),
                        (0, s.jsx)(N.rJ, {
                          icon: T,
                          value:
                            void 0 !== R ? (0, y.eL)(R / 1e6, 2, " ") : "-",
                          text: e("gpu.petaflops"),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: L().filters,
                      children: [
                        (0, s.jsx)(N.II, {
                          placeholder: e("search"),
                          value: O,
                          element: (0, s.jsx)(_(), {
                            src: P.Z,
                            alt: "Search",
                            draggable: "false",
                          }),
                          onChange: z,
                        }),
                        (0, s.jsx)(N.XZ, {
                          value: Y,
                          label: "AMD",
                          onChange: V,
                        }),
                        (0, s.jsx)(N.XZ, {
                          value: E,
                          label: "NVIDIA",
                          onChange: U,
                        }),
                      ],
                    }),
                    0 === Z.length
                      ? (0, s.jsx)(N.Jd, { text: e("gpu.noData") })
                      : (a > 1e3 &&
                          (0, s.jsx)(N.DI, {
                            columns: Q,
                            data: Z,
                            rowId: "id",
                            sorting: X,
                            loading: K,
                            headerStyles: L().header,
                            rowStyles: L().row,
                            pagination: G,
                            manualSorting: !1,
                            manualPagination: !1,
                            onSortingChange: F,
                          })) ||
                        (0, s.jsx)(N.hb, {
                          columns: Q,
                          data: Z,
                          rowId: "id",
                          sorting: X,
                          loading: K,
                          pagination: G,
                          manualSorting: !1,
                          manualPagination: !1,
                          onSortingChange: F,
                          header: (e) => {
                            let { manufacturer: t, name: a } =
                              e._getAllCellsByColumnId();
                            return (0, s.jsxs)("div", {
                              className: L().mobileHeader,
                              children: [
                                (0, s.jsx)("div", {
                                  children: (0, j.ie)(
                                    t.column.columnDef.cell,
                                    t.getContext()
                                  ),
                                }),
                                (0, s.jsx)("div", {
                                  children: (0, j.ie)(
                                    a.column.columnDef.cell,
                                    a.getContext()
                                  ),
                                }),
                              ],
                            });
                          },
                          body: (e) => {
                            var t, a, r;
                            let {
                              vendor: o,
                              total: n,
                              price: i,
                            } = e._getAllCellsByColumnId();
                            return (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)(N.yB, {
                                  label:
                                    null === (t = o.column.columnDef.header) ||
                                    void 0 === t
                                      ? void 0
                                      : t.toString(),
                                  value: (0, j.ie)(
                                    o.column.columnDef.cell,
                                    o.getContext()
                                  ),
                                }),
                                (0, s.jsx)(N.yB, {
                                  label:
                                    null === (a = n.column.columnDef.header) ||
                                    void 0 === a
                                      ? void 0
                                      : a.toString(),
                                  value: (0, j.ie)(
                                    n.column.columnDef.cell,
                                    n.getContext()
                                  ),
                                }),
                                (0, s.jsx)(N.yB, {
                                  label:
                                    null === (r = i.column.columnDef.header) ||
                                    void 0 === r
                                      ? void 0
                                      : r.toString(),
                                  value: (0, j.ie)(
                                    i.column.columnDef.cell,
                                    i.getContext()
                                  ),
                                }),
                              ],
                            });
                          },
                        }),
                  ],
                }),
              }),
              document.body
            )
          );
        },
        K = a(79466),
        X = a(70611),
        Z = a.n(X);
      let O = (e) => {
        let { cx: t, cy: a, payload: r, active: o } = e;
        return null === r.count
          ? null
          : (0, s.jsx)("circle", {
              cx: t,
              cy: a,
              r: o ? 5.5 : 4,
              fill: "var(--primary-hover)",
              stroke: "var(--contrast-color)",
            });
      };
      function G() {
        let e = (0, b.useTranslations)(),
          t = (0, o.usePathname)(),
          a = (0, o.useRouter)(),
          [x, f] = (0, r.useState)(),
          [_, v] = (0, r.useState)(),
          [j, w] = (0, r.useState)(),
          [D, k] = (0, r.useState)([]),
          [P, C] = (0, r.useState)();
        return (
          (0, S.W)(() => {
            (0, p.O1)().then((e) => {
              let { data: t } = e;
              f(t.summary.total_jobs_year),
                v(t.summary.total_jobs_month),
                w(t.summary.avg_duration_month / 1e6);
              let a = t.jobsChart.sort((e, t) => +g()(e.time) - +g()(t.time)),
                s = [],
                r = a[a.length - 1].time;
              [...Array(12 - a.length).keys()].forEach(() => {
                let e = g().utc(r).add(1, "month").toISOString();
                s.push({ time: e, count: null, dnx: null, usd: null }), (r = e);
              }),
                k([...a, ...s]);
            });
          }, []),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(B, {}),
              (0, s.jsx)(N.sX, {
                actions: (0, s.jsx)("div", {
                  className: Z().gpuLink,
                  onClick: () =>
                    a.push("".concat(t, "?gpus=true"), { scroll: !1 }),
                  children: e("dashboard.GPUsDashboard"),
                }),
                children: (0, s.jsxs)(N.KT, {
                  className: Z().container,
                  children: [
                    (0, s.jsx)("div", {
                      className: Z().title,
                      children: e("dashboard.pouwMetrics.title"),
                    }),
                    (0, s.jsxs)("div", {
                      className: Z().metrics,
                      children: [
                        (0, s.jsxs)("div", {
                          className: Z().metric,
                          children: [
                            (0, s.jsx)("div", {
                              className: Z().metricValue,
                              children: x || "-",
                            }),
                            (0, s.jsx)("div", {
                              className: Z().metricTitle,
                              children: e("dashboard.pouwMetrics.totalJobs"),
                            }),
                            (0, s.jsx)("div", {
                              className: Z().metricText,
                              children: e("dashboard.pouwMetrics.overall"),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: Z().metric,
                          children: [
                            (0, s.jsx)("div", {
                              className: Z().metricValue,
                              children: _ || "-",
                            }),
                            (0, s.jsx)("div", {
                              className: Z().metricTitle,
                              children: e("dashboard.pouwMetrics.totalJobs"),
                            }),
                            (0, s.jsx)("div", {
                              className: Z().metricText,
                              children: e("dashboard.pouwMetrics.month"),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: Z().metric,
                          children: [
                            (0, s.jsx)("div", {
                              className: Z().metricValue,
                              children: j ? (0, K.bW)(j) : "-",
                            }),
                            (0, s.jsx)("div", {
                              className: Z().metricTitle,
                              children: e("dashboard.pouwMetrics.avgDuration"),
                            }),
                            (0, s.jsx)("div", {
                              className: Z().metricText,
                              children: e("dashboard.pouwMetrics.month"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: Z().chart,
                      children: (0, s.jsx)(n.h, {
                        width: "100%",
                        height: "100%",
                        children: (0, s.jsxs)(i.c, {
                          data: D,
                          children: [
                            (0, s.jsx)(l.K, {
                              dataKey: "time",
                              tickLine: !1,
                              dy: 4,
                              angle: -45,
                              interval: 0,
                              fontSize: 12,
                              tickFormatter: (e) => g().utc(e).format("MMM"),
                            }),
                            (0, s.jsx)(d.B, {
                              yAxisId: "dnx",
                              domain: [0, "auto"],
                              hide: !0,
                            }),
                            (0, s.jsx)(d.B, {
                              yAxisId: "count",
                              domain: [0, (e) => 3.8 * e],
                              hide: !0,
                            }),
                            (0, s.jsx)(c.$, {
                              dataKey: "dnx",
                              yAxisId: "dnx",
                              barSize: 10,
                              children: D.map((e) =>
                                (0, s.jsx)(
                                  u.b,
                                  {
                                    fill: "var(--secondary)",
                                    fillOpacity:
                                      (null == P ? void 0 : P.time) === e.time
                                        ? 0.9
                                        : 0.7,
                                  },
                                  "".concat(e.time, "_1")
                                )
                              ),
                            }),
                            D.length > 0 &&
                              (0, s.jsx)(h.x, {
                                dataKey: "count",
                                yAxisId: "count",
                                type: "monotone",
                                stroke: "var(--primary-hover)",
                                strokeWidth: 3.5,
                                dot: (0, s.jsx)(O, {}),
                                activeDot: (0, s.jsx)(O, { active: !0 }),
                                animationDuration: 300,
                              }),
                            (0, s.jsx)(m.u, {
                              content: (0, s.jsx)(N.h7, {
                                hide: P && +g().utc(P.time) > +g().utc(),
                                formatLabel: (e) =>
                                  g().utc(e.time).format("MMM YYYY"),
                                formatValue: (t) =>
                                  (0, s.jsxs)("div", {
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className: Z().tooltipRow,
                                        children: [
                                          (0, s.jsxs)("div", {
                                            children: [
                                              e(
                                                "dashboard.pouwMetrics.spentOnCompute"
                                              ),
                                              ":",
                                            ],
                                          }),
                                          (0, s.jsx)("div", {
                                            children: t.dnx
                                              ? "".concat(
                                                  (0, y.eL)(t.dnx, 3, " "),
                                                  " PRN"
                                                )
                                              : "-",
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: Z().tooltipRow,
                                        children: [
                                          (0, s.jsxs)("div", {
                                            children: [
                                              e(
                                                "dashboard.pouwMetrics.spentOnCompute"
                                              ),
                                              " (USD):",
                                            ],
                                          }),
                                          (0, s.jsx)("div", {
                                            children: t.usd
                                              ? "".concat(
                                                  (0, y.eL)(t.usd, 3, " "),
                                                  " $"
                                                )
                                              : "-",
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: Z().tooltipRow,
                                        children: [
                                          (0, s.jsxs)("div", {
                                            children: [
                                              e(
                                                "dashboard.pouwMetrics.jobsCount"
                                              ),
                                              ":",
                                            ],
                                          }),
                                          (0, s.jsx)("div", {
                                            children: t.count
                                              ? (0, y.eL)(t.count, 0, " ")
                                              : "-",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                setActive: C,
                              }),
                              cursor: !1,
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    68103: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return k;
          },
        });
      var s = a(57437),
        r = a(61396),
        o = a.n(r),
        n = a(24033),
        i = a(50116),
        l = a(2265),
        d = a(3216),
        c = a(34350),
        u = a(62067),
        h = a.n(u),
        m = a(87282),
        b = a(28457);
      function x(e) {
        let { type: t, disabled: a, onChange: r } = e,
          o = (0, i.useTranslations)();
        return (0, s.jsx)(b.Qf, {
          value: t ? "".concat(t, "1") : "",
          options: {
            0: o("all"),
            ...Object.fromEntries(
              Object.values(m.No)
                .filter((e) => !Number.isNaN(Number(e)))
                .map((e) => ["".concat(e, "1"), m.No[+e]])
            ),
          },
          placeholder: o("type"),
          disabled: a,
          onChange: (e) => {
            "0" === e ? r(void 0) : r(e ? +e[0] : void 0);
          },
        });
      }
      var g = a(18069),
        p = a(99763),
        f = a(79466),
        _ = a(54887),
        v = a(6892),
        j = a(14776),
        w = a.n(j);
      function y() {
        let e = (0, i.useTranslations)(),
          t = (0, n.usePathname)(),
          a = (0, n.useRouter)(),
          r = (0, n.useSearchParams)().get("pouw_job"),
          [o, d] = (0, l.useState)(),
          c = () => {
            d(void 0), a.push(t, { scroll: !1 });
          };
        return ((0, v.W)(() => {
          r &&
            (0, m.Y5)(+r)
              .then((e) => {
                d(e);
              })
              .catch(() => {
                c();
              });
        }, [r]),
        o)
          ? (0, _.createPortal)(
              (0, s.jsx)(b.u_, {
                header: (0, s.jsx)("div", {
                  className: w().header,
                  children: e("jobInformation.titleWithId", { id: o.id }),
                }),
                className: w().modal,
                onClose: c,
                children: (0, s.jsx)("div", {
                  className: w().body,
                  children: (0, s.jsx)(m.Xe, { job: o }),
                }),
              }),
              document.body
            )
          : null;
      }
      var S = a(32036),
        N = a(89578),
        D = a.n(N);
      function k() {
        let e = (0, i.useTranslations)(),
          t = (0, n.usePathname)(),
          [a, { width: r }] = (0, c.Z)(),
          {
            loading: u,
            infiniteScroll: _,
            type: j,
            status: w,
            pouwJobs: N,
            updateStatus: k,
            updateType: P,
          } = (function () {
            let {
                loading: e,
                infiniteScroll: t,
                setLoading: a,
                setTotalPages: s,
                changePage: r,
              } = (0, S.x)(10),
              [o, n] = (0, l.useState)(),
              [i, d] = (0, l.useState)(),
              [c, u] = (0, l.useState)([]);
            return (
              (0, v.W)(() => {
                e ||
                  (a(!0),
                  (0, m.HL)({
                    job_type: o,
                    job_status: i,
                    offset: 0,
                    limit: 10 * t.page + 1,
                  })
                    .then((e) => {
                      u(e.slice(0, 10 * t.page)),
                        e.length < 10 * t.page + 1
                          ? s(t.page)
                          : s(t.totalPages + 2);
                    })
                    .catch(() => {
                      u([]);
                    })
                    .finally(() => {
                      a(!1);
                    }));
              }, [i, o, t.page]),
              {
                loading: e,
                infiniteScroll: t,
                type: o,
                status: i,
                pouwJobs: c,
                updateStatus: (e) => {
                  r(1), d(e);
                },
                updateType: (e) => {
                  r(1), n(e);
                },
              }
            );
          })(),
          C = (0, l.useMemo)(
            () => [
              {
                header: e("dashboard.pouwJobHistory.type"),
                id: "type",
                accessorKey: "type",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return (0, s.jsx)("div", {
                    className: D().type,
                    children: m.No[t.original.type],
                  });
                },
              },
              {
                header: e("dashboard.pouwJobHistory.jobId"),
                id: "id",
                accessorKey: "id",
                enableSorting: !1,
                cell: (e) => {
                  let { row: a } = e;
                  return (0, s.jsx)(o(), {
                    href: "".concat(t, "?pouw_job=").concat(a.original.id),
                    className: D().link,
                    scroll: !1,
                    children: a.original.id,
                  });
                },
              },
              {
                header: e("dashboard.pouwJobHistory.createdAt"),
                id: "createdAt",
                accessorKey: "createdAt",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return h()(t.original.createdAt).format(
                    "DD/MM/YYYY HH:mm:ss"
                  );
                },
              },
              {
                header: e("dashboard.pouwJobHistory.duration"),
                id: "duration",
                accessorKey: "duration",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return (0, f.bW)(t.original.duration);
                },
              },
              {
                header: e("dashboard.pouwJobHistory.chips"),
                id: "chipsRequired",
                accessorKey: "chipsRequired",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return ""
                    .concat((0, p.eL)(t.original.sumChips), " (")
                    .concat(
                      (0, p.eL)(
                        (t.original.sumChips / t.original.chipsRequired) * 100,
                        2,
                        ""
                      ),
                      "%)"
                    );
                },
              },
              {
                header: e("dashboard.pouwJobHistory.fee"),
                id: "fee",
                accessorKey: "fee",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return "".concat((0, p.eL)(t.original.fee, 3), " PRN");
                },
              },
              {
                header: e("dashboard.pouwJobHistory.reward"),
                id: "reward",
                accessorKey: "reward",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return "".concat((0, p.eL)(t.original.reward, 3), " PRN");
                },
              },
              {
                header: e("dashboard.pouwJobHistory.status"),
                id: "status",
                accessorKey: "status",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return t.original.status === m.By.complete
                    ? (0, s.jsx)(b.u, {
                        text: "".concat(
                          (0, p.eL)(t.original.totalJobCostUsd, 3),
                          " $"
                        ),
                        onHover: !0,
                        children: (0, s.jsx)(b.JT, {
                          text: "".concat(
                            (0, p.eL)(t.original.totalJobCost, 3),
                            " PRN"
                          ),
                          type: "success",
                        }),
                      })
                    : (0, s.jsx)(b.JT, { status: t.original.status });
                },
              },
            ],
            [e]
          );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(y, {}),
            (0, s.jsx)(b.sX, {
              scopeRef: a,
              title: e("dashboard.pouwJobHistory.title"),
              actions: (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(x, { type: j, onChange: P }),
                  (0, s.jsx)(g.G, { status: w, onChange: k }),
                ],
              }),
              actionsClassName: D().filters,
              children:
                (0 === N.length &&
                  (0, s.jsx)(b.Jd, {
                    text: e("dashboard.pouwJobHistory.noData"),
                  })) ||
                (r > 900
                  ? (0, s.jsx)(b.DI, {
                      columns: C,
                      data: N,
                      rowId: "id",
                      infiniteScroll: _,
                      loading: u,
                      headerStyles: D().header,
                      rowStyles: D().row,
                    })
                  : (0, s.jsx)(b.hb, {
                      columns: C,
                      data: N,
                      rowId: "id",
                      infiniteScroll: _,
                      loading: u,
                      header: (e) => {
                        let {
                          type: t,
                          id: a,
                          status: r,
                        } = e._getAllCellsByColumnId();
                        return (0, s.jsxs)("div", {
                          className: D().mobileHeader,
                          children: [
                            (0, s.jsxs)("div", {
                              className: D().mobileHeader_row,
                              children: [
                                (0, s.jsx)("div", {
                                  children: (0, d.ie)(
                                    t.column.columnDef.cell,
                                    t.getContext()
                                  ),
                                }),
                                (0, s.jsx)("div", {
                                  children: (0, d.ie)(
                                    r.column.columnDef.cell,
                                    r.getContext()
                                  ),
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className: D().mobileHeader_row,
                              children: (0, d.ie)(
                                a.column.columnDef.cell,
                                a.getContext()
                              ),
                            }),
                          ],
                        });
                      },
                      body: (e) => {
                        var t, a, r, o, n;
                        let {
                          duration: i,
                          chipsRequired: l,
                          fee: c,
                          reward: u,
                          createdAt: h,
                        } = e._getAllCellsByColumnId();
                        return (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(b.yB, {
                              label:
                                null === (t = i.column.columnDef.header) ||
                                void 0 === t
                                  ? void 0
                                  : t.toString(),
                              value: (0, d.ie)(
                                i.column.columnDef.cell,
                                i.getContext()
                              ),
                            }),
                            (0, s.jsx)(b.yB, {
                              label:
                                null === (a = l.column.columnDef.header) ||
                                void 0 === a
                                  ? void 0
                                  : a.toString(),
                              value: (0, d.ie)(
                                l.column.columnDef.cell,
                                l.getContext()
                              ),
                            }),
                            (0, s.jsx)(b.yB, {
                              label:
                                null === (r = c.column.columnDef.header) ||
                                void 0 === r
                                  ? void 0
                                  : r.toString(),
                              value: (0, d.ie)(
                                c.column.columnDef.cell,
                                c.getContext()
                              ),
                            }),
                            e.original.reward > 0 &&
                              (0, s.jsx)(b.yB, {
                                label:
                                  null === (o = u.column.columnDef.header) ||
                                  void 0 === o
                                    ? void 0
                                    : o.toString(),
                                value: (0, d.ie)(
                                  u.column.columnDef.cell,
                                  u.getContext()
                                ),
                              }),
                            (0, s.jsx)(b.yB, {
                              label:
                                null === (n = h.column.columnDef.header) ||
                                void 0 === n
                                  ? void 0
                                  : n.toString(),
                              value: (0, d.ie)(
                                h.column.columnDef.cell,
                                h.getContext()
                              ),
                            }),
                          ],
                        });
                      },
                    })),
            }),
          ],
        });
      }
    },
    35857: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return _;
          },
        });
      var s = a(57437),
        r = a(61396),
        o = a.n(r),
        n = a(2265),
        i = a(3216),
        l = a(34350),
        d = a(50116),
        c = a(62067),
        u = a.n(c),
        h = a(28457),
        m = a(99763),
        b = a(87282),
        x = a(6892),
        g = a(32036),
        p = a(12575),
        f = a.n(p);
      function _() {
        let e = (0, d.useTranslations)(),
          [t, { width: a }] = (0, l.Z)(),
          {
            loading: r,
            infiniteScroll: c,
            rewards: p,
            marketplaceAddress: _,
          } = (function () {
            let {
                loading: e,
                infiniteScroll: t,
                setLoading: a,
                setTotalPages: s,
              } = (0, g.x)(5),
              [r, o] = (0, n.useState)([]),
              [i, l] = (0, n.useState)();
            return (
              (0, x.W)(() => {
                e ||
                  (a(!0),
                  (0, b.fH)({ limit: 5, offset: 0 })
                    .then((e) => {
                      o(e.data), l(e.marketWallet), s(1);
                    })
                    .catch(() => {
                      o([]);
                    })
                    .finally(() => {
                      a(!1);
                    }));
              }, []),
              {
                loading: e,
                infiniteScroll: t,
                rewards: r,
                marketplaceAddress: i,
              }
            );
          })(),
          v = (0, n.useMemo)(
            () => [
              {
                header: e("dashboard.pouwRewards.date"),
                id: "createdAt",
                accessorKey: "createdAt",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return u()(t.original.createdAt).format(
                    "DD/MM/YYYY HH:mm:ss"
                  );
                },
              },
              {
                header: e("dashboard.pouwRewards.tx"),
                id: "txId",
                accessorKey: "txId",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return (0, s.jsx)(o(), {
                    href: ""
                      .concat("https://blockexplorer.dynexcoin.org/?tx=")
                      .concat(t.original.txId),
                    className: f().link,
                    target: "_blank",
                    children: (0, m.u7)(t.original.txId, "...", 8, 8),
                  });
                },
              },
              {
                header: e("dashboard.pouwRewards.address"),
                id: "addressTo",
                accessorKey: "addressTo",
                enableSorting: !1,
                cell: () =>
                  _
                    ? (0, s.jsx)(o(), {
                        href: ""
                          .concat(
                            "https://blockexplorer.dynexcoin.org/?wallet="
                          )
                          .concat(_),
                        className: f().link,
                        target: "_blank",
                        children: (0, m.u7)(_, "...", 8, 8),
                      })
                    : "-",
              },
              {
                header: e("dashboard.pouwRewards.amount"),
                id: "amount",
                accessorKey: "amount",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return (0, s.jsxs)("div", {
                    className: f().amount,
                    children: [(0, m.eL)(t.original.amount, 3), " PRN"],
                  });
                },
              },
              {
                header: e("dashboard.pouwRewards.fee"),
                id: "fee",
                accessorKey: "fee",
                enableSorting: !1,
                cell: (e) => {
                  let { row: t } = e;
                  return (0, s.jsxs)("div", {
                    className: f().fee,
                    children: [(0, m.eL)(t.original.fee, 3), " PRN"],
                  });
                },
              },
            ],
            [e, _]
          );
        return (0, s.jsx)(h.sX, {
          scopeRef: t,
          title: e("dashboard.pouwRewards.title"),
          children:
            (0 === p.length &&
              (0, s.jsx)(h.Jd, { text: e("dashboard.pouwRewards.noData") })) ||
            (a > 700
              ? (0, s.jsx)(h.DI, {
                  columns: v,
                  data: p,
                  rowId: "id",
                  infiniteScroll: c,
                  loading: r,
                  headerStyles: f().header,
                  rowStyles: f().row,
                })
              : (0, s.jsx)(h.hb, {
                  columns: v,
                  data: p,
                  rowId: "id",
                  infiniteScroll: c,
                  loading: r,
                  header: (t) => {
                    let {
                      createdAt: a,
                      txId: r,
                      addressTo: o,
                      amount: n,
                      fee: l,
                    } = t._getAllCellsByColumnId();
                    return (0, s.jsxs)("div", {
                      className: f().mobileHeader,
                      children: [
                        (0, s.jsxs)("div", {
                          className: f().mobileHeader_row,
                          children: [
                            (0, s.jsx)("div", {
                              children: (0, i.ie)(
                                a.column.columnDef.cell,
                                a.getContext()
                              ),
                            }),
                            (0, s.jsxs)("div", {
                              className: f().parts,
                              children: [
                                (0, s.jsxs)("div", {
                                  children: [
                                    e("dashboard.pouwRewards.amount"),
                                    ":",
                                  ],
                                }),
                                (0, s.jsx)("div", {
                                  className: f().mobileAmount,
                                  children: (0, i.ie)(
                                    n.column.columnDef.cell,
                                    n.getContext()
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: f().mobileHeader_row,
                          children: (0, s.jsxs)("div", {
                            className: f().parts,
                            children: [
                              (0, s.jsxs)("div", {
                                children: [e("dashboard.pouwRewards.tx"), ":"],
                              }),
                              (0, s.jsx)("div", {
                                children: (0, i.ie)(
                                  r.column.columnDef.cell,
                                  r.getContext()
                                ),
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className: f().mobileHeader_row,
                          children: [
                            (0, s.jsxs)("div", {
                              className: f().parts,
                              children: [
                                (0, s.jsxs)("div", {
                                  children: [
                                    e("dashboard.pouwRewards.to"),
                                    ":",
                                  ],
                                }),
                                (0, s.jsx)("div", {
                                  children: (0, i.ie)(
                                    o.column.columnDef.cell,
                                    o.getContext()
                                  ),
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              children: (0, i.ie)(
                                l.column.columnDef.cell,
                                l.getContext()
                              ),
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                })),
        });
      }
    },
    19485: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var s = a(57437),
        r = a(2265),
        o = a(50116),
        n = a(87282),
        i = a(6892),
        l = a(28457),
        d = a(49237),
        c = a.n(d);
      function u() {
        let e = (0, o.useTranslations)(),
          [t, a] = (0, r.useState)({});
        return (
          (0, i.W)(
            () => {
              (0, n.g3)().then((e) => {
                let t = {};
                e.forEach((e) => {
                  t[e.country_code] = e.count;
                }),
                  a(t);
              });
            },
            [],
            6e4
          ),
          (0, s.jsx)(l.sX, {
            title: e("dashboard.workersMap"),
            children: (0, s.jsx)(l.KT, {
              className: c().container,
              children: (0, s.jsx)(l.D5, {
                distribution: t,
                className: c().map,
              }),
            }),
          })
        );
      }
    },
    18574: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        mainScope: "DashboardPage_mainScope__kj_Th",
        tableScope: "DashboardPage_tableScope__RzCgy",
        stats: "DashboardPage_stats__YlBcP",
      };
    },
    74453: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "DashboardCards_container__4jZRp",
      };
    },
    29607: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "DashboardStats_container__MPWGf",
        cards: "DashboardStats_cards__OtXJ1",
        link: "DashboardStats_link__4rBTx",
      };
    },
    96493: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        modal: "GPUsDashboardModal_modal__N0G7z",
        header: "GPUsDashboardModal_header__yXzGw",
        container: "GPUsDashboardModal_container__f4iF5",
        stats: "GPUsDashboardModal_stats__4cJZi",
        filters: "GPUsDashboardModal_filters__AfaWf",
        row: "GPUsDashboardModal_row__5dhvT",
        mobileHeader: "GPUsDashboardModal_mobileHeader__wHkRE",
      };
    },
    70611: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "NetworkJobsStats_container__45X0z",
        title: "NetworkJobsStats_title__cDZPI",
        metrics: "NetworkJobsStats_metrics__h2B1k",
        metric: "NetworkJobsStats_metric__GwdlF",
        metricValue: "NetworkJobsStats_metricValue__Bs0Ni",
        metricTitle: "NetworkJobsStats_metricTitle__WftB8",
        metricText: "NetworkJobsStats_metricText__2k5XL",
        chart: "NetworkJobsStats_chart__Nj3tU",
        tooltipRow: "NetworkJobsStats_tooltipRow__A7NLl",
        gpuLink: "NetworkJobsStats_gpuLink__QvA4Y",
      };
    },
    89578: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        filters: "PouwJobHistoryTable_filters__GttN1",
        header: "PouwJobHistoryTable_header__5U6F9",
        row: "PouwJobHistoryTable_row__Q5HXh",
        mobileHeader: "PouwJobHistoryTable_mobileHeader__Yy6P7",
        mobileHeader_row: "PouwJobHistoryTable_mobileHeader_row__GEFN7",
        link: "PouwJobHistoryTable_link__683pZ",
        type: "PouwJobHistoryTable_type__l41g4",
      };
    },
    14776: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        modal: "PouwJobModal_modal__XFove",
        header: "PouwJobModal_header__0gasr",
        body: "PouwJobModal_body__W2nvo",
      };
    },
    12575: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        header: "PouwRewards_header___ohEu",
        row: "PouwRewards_row__2tyij",
        mobileHeader: "PouwRewards_mobileHeader__TorSO",
        mobileHeader_row: "PouwRewards_mobileHeader_row__XZp_V",
        mobileAmount: "PouwRewards_mobileAmount__XTO4A",
        link: "PouwRewards_link__gMRl5",
        parts: "PouwRewards_parts__OzqLj",
        fee: "PouwRewards_fee__gcWhS",
      };
    },
    49237: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "WorkersMap_container__ZZJOg",
      };
    },
    36815: function (e, t) {
      "use strict";
      t.Z = {
        src: "./_next/static/media/avatar.adcb5bcc.svg",
        height: 32,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    58645: function (e, t) {
      "use strict";
      t.Z = {
        src: "./_next/static/media/coin.2d4f6450.svg",
        height: 32,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    36335: function (e, t) {
      "use strict";
      t.Z = {
        src: "./_next/static/media/dollar.61869ae5.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    33253: function (e, t) {
      "use strict";
      t.Z = {
        src: "./_next/static/media/lightning.49dbd16c.svg",
        height: 32,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    58554: function (e, t) {
      "use strict";
      t.Z = {
        src: "./_next/static/media/search.2c2efb04.svg",
        height: 22,
        width: 22,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        716, 990, 901, 906, 858, 443, 976, 125, 542, 457, 200, 282, 971, 938,
        744,
      ],
      function () {
        return e((e.s = 20199));
      }
    ),
      (_N_E = e.O());
  },
]);
