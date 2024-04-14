(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [790],
  {
    92323: function (e, r, a) {
      Promise.resolve().then(a.bind(a, 67376));
    },
    67376: function (e, r, a) {
      "use strict";
      a.r(r),
        a.d(r, {
          default: function () {
            return U;
          },
        });
      var i = a(57437),
        s = a(2265),
        l = a(92173),
        t = a(50116),
        n = a(87282),
        o = a(28457),
        c = {
          src: "/_next/static/media/tag.fb80f0c3.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = {
          src: "/_next/static/media/coffee.184e3a80.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        b = {
          src: "/_next/static/media/check-medal.32e6d70d.svg",
          height: 33,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        h = a(74365),
        u = a.n(h);
      function _(e) {
        let { repos: r } = e,
          a = (0, t.useTranslations)(),
          s = (0, n.dU)((e) => e.experts);
        return (0, i.jsxs)("div", {
          className: u().container,
          children: [
            (0, i.jsx)(o.rJ, {
              icon: c,
              text: a("code-library.totalCodes"),
              value: r.length,
            }),
            (0, i.jsx)(o.rJ, {
              icon: d,
              text: a("code-library.freeCodes"),
              value: r.filter((e) => "free" === e.price).length,
            }),
            (0, i.jsx)(o.rJ, {
              icon: b,
              text: a("code-library.experts"),
              value: s.length,
            }),
          ],
        });
      }
      var g = a(61396),
        m = a.n(g),
        f = a(16691),
        p = a.n(f),
        x = a(3216),
        y = a(34350),
        j = a(57042);
      let v = (e) => {
        let r = new Set();
        return e.forEach((e) => e.tags.forEach((e) => r.add(e))), [...r];
      };
      var C = a(93127),
        k = a(41226),
        T = a.n(k);
      function w(e) {
        let { repos: r } = e,
          a = (0, t.useTranslations)(),
          [l, { width: n }] = (0, y.Z)(),
          [c, d] = (0, s.useState)([]),
          [b, h] = (0, s.useState)(""),
          [u, _] = (0, s.useState)([]),
          g = (e) => {
            c.includes(e) ? d(c.filter((r) => r !== e)) : d([...c, e]);
          };
        (0, s.useEffect)(() => {
          let e = r;
          b &&
            (e = e.filter((e) =>
              e.name.toLowerCase().includes(b.toLocaleLowerCase())
            )),
            c.length > 0 &&
              (e = e.filter((e) => c.some((r) => e.tags.includes(r)))),
            _(e);
        }, [r, c, b]);
        let f = (0, s.useMemo)(
          () => [
            {
              header: a("code-library.name"),
              id: "name",
              accessorKey: "name",
              enableSorting: !1,
              cell: (e) => {
                let { row: r } = e;
                return (0, i.jsx)(m(), {
                  href: r.original.githubUrl,
                  className: T().name,
                  target: "_blank",
                  children: r.original.name,
                });
              },
            },
            {
              header: a("code-library.description"),
              id: "description",
              accessorKey: "description",
              enableSorting: !1,
              cell: (e) => {
                let { row: r } = e;
                return (0, i.jsxs)("div", {
                  className: T().description,
                  children: [
                    (0, i.jsx)("div", { children: r.original.description }),
                    (0, i.jsx)("div", {
                      className: T().tableTags,
                      children: r.original.tags.map((e) =>
                        (0, i.jsx)(
                          "div",
                          { className: T().tableTag, children: e },
                          e
                        )
                      ),
                    }),
                  ],
                });
              },
            },
            {
              header: a("code-library.price"),
              id: "price",
              accessorKey: "price",
              enableSorting: !1,
              cell: (e) => {
                let { row: r } = e;
                return (0, i.jsx)("div", {
                  className: "free" === r.original.price ? T().free : T().paid,
                  children: r.original.price,
                });
              },
            },
            {
              header: "README",
              id: "readmeUrl",
              accessorKey: "readmeUrl",
              enableSorting: !1,
              cell: (e) => {
                let { row: r } = e;
                return (0, i.jsx)(m(), {
                  href: r.original.readmeUrl,
                  className: T().arrowLink,
                  target: "_blank",
                  children: (0, i.jsx)(p(), {
                    src: C.Z,
                    alt: "Readme",
                    draggable: "false",
                  }),
                });
              },
            },
            {
              header: "GITHUB",
              id: "githubUrl",
              accessorKey: "githubUrl",
              enableSorting: !1,
              cell: (e) => {
                let { row: r } = e;
                return (0, i.jsx)(m(), {
                  href: r.original.githubUrl,
                  className: T().arrowLink,
                  target: "_blank",
                  children: (0, i.jsx)(p(), {
                    src: C.Z,
                    alt: "Github",
                    draggable: "false",
                  }),
                });
              },
            },
            {
              header: "CODESPACE",
              id: "codespaceUrl",
              accessorKey: "codespaceUrl",
              enableSorting: !1,
              cell: (e) => {
                let { row: r } = e;
                return (0, i.jsx)(m(), {
                  href: r.original.codespaceUrl,
                  className: T().arrowLink,
                  target: "_blank",
                  children: (0, i.jsx)(p(), {
                    src: C.Z,
                    alt: "Codespace",
                    draggable: "false",
                  }),
                });
              },
            },
            {
              header: a("code-library.forks"),
              id: "forks",
              accessorKey: "forks",
              enableSorting: !1,
            },
            {
              header: a("code-library.issues"),
              id: "issues",
              accessorKey: "issues",
              enableSorting: !1,
            },
          ],
          [a]
        );
        return (0, i.jsxs)("div", {
          ref: l,
          className: T().container,
          children: [
            (0, i.jsxs)("div", {
              className: T().filters,
              children: [
                (0, i.jsx)("div", {
                  className: T().search,
                  children: (0, i.jsx)(o.II, {
                    placeholder: a("search"),
                    value: b,
                    onChange: h,
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: T().tags,
                  children: [
                    (0, i.jsx)("div", {
                      className: (0, j.Z)(
                        T().tag,
                        0 === c.length && T().tag_selected
                      ),
                      onClick: () => d([]),
                      children: a("all"),
                    }),
                    v(r).map((e) =>
                      (0, i.jsx)(
                        "div",
                        {
                          className: (0, j.Z)(
                            T().tag,
                            c.includes(e) && T().tag_selected
                          ),
                          onClick: () => g(e),
                          children: e,
                        },
                        e
                      )
                    ),
                  ],
                }),
              ],
            }),
            (0 === u.length &&
              (0, i.jsx)(o.Jd, { text: a("code-library.noData") })) ||
              (n > 900
                ? (0, i.jsx)(o.DI, {
                    columns: f,
                    data: u,
                    rowId: "id",
                    headerStyles: T().header,
                    rowStyles: T().row,
                  })
                : (0, i.jsx)(o.hb, {
                    columns: f,
                    data: u,
                    rowId: "id",
                    header: (e) => {
                      let { name: r, price: a } = e._getAllCellsByColumnId();
                      return (0, i.jsxs)("div", {
                        className: T().mobileHeader,
                        children: [
                          (0, i.jsxs)("div", {
                            className: T().mobileHeader_row,
                            children: [
                              (0, i.jsx)("div", {
                                className: T().tableTags,
                                children: e.original.tags.map((e) =>
                                  (0, i.jsx)(
                                    "div",
                                    { className: T().tableTag, children: e },
                                    e
                                  )
                                ),
                              }),
                              (0, i.jsx)("div", {
                                children: (0, x.ie)(
                                  a.column.columnDef.cell,
                                  a.getContext()
                                ),
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: T().mobileHeader_row,
                            children: (0, x.ie)(
                              r.column.columnDef.cell,
                              r.getContext()
                            ),
                          }),
                          (0, i.jsx)("div", {
                            className: (0, j.Z)(
                              T().mobileHeader_row,
                              T().mobileDescription
                            ),
                            children: e.original.description,
                          }),
                        ],
                      });
                    },
                    body: (e) =>
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(o.yB, {
                            label: a("code-library.forks"),
                            value: e.original.forks,
                          }),
                          (0, i.jsx)(o.yB, {
                            label: a("code-library.issues"),
                            value: e.original.issues,
                          }),
                          (0, i.jsxs)("div", {
                            className: T().mobileLinks,
                            children: [
                              (0, i.jsx)(m(), {
                                href: e.original.readmeUrl,
                                className: T().link,
                                children: "Readme",
                              }),
                              (0, i.jsx)(m(), {
                                href: e.original.githubUrl,
                                className: T().link,
                                children: "Github",
                              }),
                              (0, i.jsx)(m(), {
                                href: e.original.codespaceUrl,
                                className: T().link,
                                children: "Codespace",
                              }),
                            ],
                          }),
                        ],
                      }),
                  })),
          ],
        });
      }
      var L = a(47704),
        N = a.n(L);
      function U() {
        let [e, r] = (0, s.useState)([]);
        return (
          (0, s.useEffect)(() => {
            l.Z.get("https://api.github.com/users/DynexMarketplace/repos")
              .then((e) => {
                let { data: r } = e;
                return r.map((e) => ({
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  tags: e.topics,
                  price: e.topics.includes("free") ? "free" : "paid",
                  readmeUrl: "".concat(e.svn_url, "/blob/main/README.md"),
                  githubUrl: e.svn_url,
                  codespaceUrl:
                    "https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=".concat(
                      e.id
                    ),
                  forks: e.forks,
                  issues: e.open_issues_count,
                }));
              })
              .then((e) => {
                r(e);
              })
              .catch(() => {
                r([]);
              });
          }, []),
          (0, i.jsxs)("div", {
            className: N().container,
            children: [
              (0, i.jsx)(_, { repos: e }),
              (0, i.jsx)(w, { repos: e }),
            ],
          })
        );
      }
    },
    47704: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "CodeLibrary_container__uS2Ev",
      };
    },
    74365: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "CodeLibraryCards_container__7ix6j",
      };
    },
    41226: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "CodeLibraryTable_container__FDDl_",
        filters: "CodeLibraryTable_filters___XPA2",
        tags: "CodeLibraryTable_tags__lZQfH",
        tableTags: "CodeLibraryTable_tableTags__DzYDV",
        tag: "CodeLibraryTable_tag__2jCub",
        tableTag: "CodeLibraryTable_tableTag__KmnTK",
        tag_selected: "CodeLibraryTable_tag_selected__OC_TT",
        search: "CodeLibraryTable_search__bUF3a",
        name: "CodeLibraryTable_name__Ns2HJ",
        description: "CodeLibraryTable_description__zfZtc",
        free: "CodeLibraryTable_free__4Ror4",
        paid: "CodeLibraryTable_paid__ikjiw",
        arrowLink: "CodeLibraryTable_arrowLink__HZut5",
        header: "CodeLibraryTable_header__oazAe",
        row: "CodeLibraryTable_row__RXgPT",
        mobileHeader: "CodeLibraryTable_mobileHeader__4zEFo",
        mobileHeader_row: "CodeLibraryTable_mobileHeader_row__7aZuY",
        mobileDescription: "CodeLibraryTable_mobileDescription__X4NkT",
        mobileLinks: "CodeLibraryTable_mobileLinks__7MR1i",
        link: "CodeLibraryTable_link__MPTBO",
      };
    },
    34350: function (e, r, a) {
      "use strict";
      a.d(r, {
        Z: function () {
          return n;
        },
      });
      var i = a(2265),
        s = a(66169),
        l = s.jU ? i.useLayoutEffect : i.useEffect,
        t = {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        },
        n =
          s.jU && void 0 !== window.ResizeObserver
            ? function () {
                var e = (0, i.useState)(null),
                  r = e[0],
                  a = e[1],
                  s = (0, i.useState)(t),
                  n = s[0],
                  o = s[1],
                  c = (0, i.useMemo)(function () {
                    return new window.ResizeObserver(function (e) {
                      if (e[0]) {
                        var r = e[0].contentRect;
                        o({
                          x: r.x,
                          y: r.y,
                          width: r.width,
                          height: r.height,
                          top: r.top,
                          left: r.left,
                          bottom: r.bottom,
                          right: r.right,
                        });
                      }
                    });
                  }, []);
                return (
                  l(
                    function () {
                      if (r)
                        return (
                          c.observe(r),
                          function () {
                            c.disconnect();
                          }
                        );
                    },
                    [r]
                  ),
                  [a, n]
                );
              }
            : function () {
                return [s.ZT, t];
              };
    },
  },
  function (e) {
    e.O(
      0,
      [716, 990, 901, 906, 858, 457, 200, 282, 971, 938, 744],
      function () {
        return e((e.s = 92323));
      }
    ),
      (_N_E = e.O());
  },
]);
