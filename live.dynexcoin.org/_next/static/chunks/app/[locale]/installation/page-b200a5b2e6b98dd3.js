(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [264],
  {
    19019: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 7772, 23)),
        Promise.resolve().then(n.bind(n, 79342)),
        Promise.resolve().then(n.bind(n, 46146));
    },
    65506: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return m;
        },
      });
      var i = n(57437),
        s = n(16691),
        l = n.n(s),
        a = n(2265),
        o = n(50116),
        d = n(68200),
        c = n(28457),
        r = n(67025);
      let u = (e) =>
        "[DYNEX] \nAPI_ENDPOINT = "
          .concat(e.api_root_url, " \nAPI_KEY = ")
          .concat(e.api_key, " \nAPI_SECRET = ")
          .concat(e.api_secret, " \n\n[FTP_SOLUTION_FILES] \nftp_hostname = ")
          .concat(e.ftp_host, " \nftp_username = ")
          .concat(e.ftp_user, " \nftp_password = ")
          .concat(e.ftp_pass);
      var _ = n(84945),
        p = n.n(_);
      function m(e) {
        let { apiKey: t, withCopyScope: n } = e,
          s = (0, o.useTranslations)(),
          [_, m] = (0, a.useState)(t ? u(t) : ""),
          h = () => {
            if (!_) return;
            let e = document.createElement("a");
            e.setAttribute(
              "href",
              "data:text/plain;charset=utf-8,".concat(encodeURIComponent(_))
            ),
              e.setAttribute("download", "dynex.ini"),
              (e.style.display = "none"),
              document.body.appendChild(e),
              e.click(),
              document.body.removeChild(e);
          };
        return ((0, a.useEffect)(() => {
          t ||
            (0, d.n5)().then((e) => {
              let { data: t } = e;
              m(u(t));
            });
        }, []),
        n)
          ? (0, i.jsxs)("div", {
              className: p().ini,
              children: [
                (0, i.jsx)("div", {
                  className: p().title,
                  children: "DYNEX.INI",
                }),
                (0, i.jsx)(c.oA, { text: _ }),
                (0, i.jsxs)(c.zx, {
                  disabled: !_,
                  onClick: h,
                  children: [
                    (0, i.jsx)("div", { children: s("download") }),
                    (0, i.jsx)(l(), {
                      src: r.Z,
                      alt: "Download",
                      draggable: "false",
                    }),
                  ],
                }),
              ],
            })
          : (0, i.jsxs)(c.zx, {
              disabled: !_,
              onClick: h,
              children: [
                (0, i.jsx)("div", { children: s("download") }),
                (0, i.jsx)(l(), {
                  src: r.Z,
                  alt: "Download",
                  draggable: "false",
                }),
              ],
            });
      }
    },
    79342: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n(57437),
        s = n(61396),
        l = n.n(s),
        a = n(50116),
        o = n(28457),
        d = n(65506),
        c = n(39089),
        r = n.n(c);
      function u() {
        let e = (0, a.useTranslations)();
        return (0, i.jsxs)("div", {
          className: r().container,
          children: [
            (0, i.jsx)(o.gm, {
              text: e("installation.text"),
              words: 30,
              className: r().text,
              onlyMobile: !0,
            }),
            (0, i.jsxs)("div", {
              className: r().guide,
              children: [
                (0, i.jsx)(o.Uf, {
                  header: (0, i.jsx)("div", {
                    className: r().stepTitle,
                    children: "".concat(e("installation.step"), " 1"),
                  }),
                  initialOpened: !0,
                  children: (0, i.jsxs)("div", {
                    className: r().step,
                    children: [
                      (0, i.jsx)("div", { children: e("installation.step1") }),
                      (0, i.jsx)(o.oA, { text: "pip install dynex" }),
                    ],
                  }),
                }),
                (0, i.jsx)(o.Uf, {
                  header: (0, i.jsx)("div", {
                    className: r().stepTitle,
                    children: "".concat(e("installation.step"), " 2"),
                  }),
                  children: (0, i.jsxs)("div", {
                    className: r().step,
                    children: [
                      (0, i.jsx)("div", {
                        children: e("installation.step2_1"),
                      }),
                      (0, i.jsx)(d.F, {}),
                      (0, i.jsx)("div", {
                        children: e("installation.step2_2"),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(o.Uf, {
                  header: (0, i.jsx)("div", {
                    className: r().stepTitle,
                    children: "".concat(e("installation.step"), " 3"),
                  }),
                  children: (0, i.jsxs)("div", {
                    className: r().step,
                    children: [
                      (0, i.jsx)("div", {
                        children: e("installation.step3_1"),
                      }),
                      (0, i.jsx)(o.oA, { text: "import dynex\ndynex.test()" }),
                      (0, i.jsx)("div", {
                        children: e.rich("installation.step3_2", {
                          docs: (e) =>
                            (0, i.jsx)(l(), {
                              href: "https://docs.dynexcoin.org/",
                              target: "_blank",
                              className: r().link,
                              children: e,
                            }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(o.Uf, {
                  header: (0, i.jsx)("div", {
                    className: r().stepTitle,
                    children: "".concat(e("installation.step"), " 4"),
                  }),
                  children: (0, i.jsxs)("div", {
                    className: r().step,
                    children: [
                      (0, i.jsx)("div", { children: e("installation.step4") }),
                      (0, i.jsx)(o.oA, {
                        text: "import dynex\nimport dimod\nfrom pyqubo import Array\n\nN = 15\nK = 3\nnumbers = [4.8097315016016315, 4.325157567810298, 2.9877429101815127,\n  3.199880179616316, 0.5787939511978596, 1.2520928214246918,\n  2.262867466401502, 1.2300003067401255, 2.1601079352817925,\n  3.63753899583021, 4.598232793833491, 2.6215815162575646,\n  3.4227134835783364, 0.28254151584552023, 4.2548151473817075]\n\nq = Array.create('q', N, 'BINARY')\nH = sum(numbers[i] * q[i] for i in range(N)) + 5.0 * (sum(q) - K)**2\nmodel = H.compile()\nQ, offset = model.to_qubo(index_label=True)\n\n# Sample with dynex.sample_qubo():\nsamplesetq = dynex.sample_qubo(\n  Q,\n  offset,\n  mainnet=True,\n  description='Proton SDK job',\n  num_reads=5000,\n  annealing_time = 200\n);\n\nprint('Result:')\nprint(samplesetq)",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    46146: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var i = n(57437),
        s = n(61396),
        l = n.n(s),
        a = n(16691),
        o = n.n(a),
        d = {
          src: "/_next/static/media/youtube.e41478a6.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        c = n(64531);
      let r = [
        {
          url: "https://www.youtube.com/embed/hEVgsfAIS2Q?si=cxQ9Nav5N7ydRxbv",
          title: "Quantum computing-like efficiency without its limitations",
          duration: "01:19",
        },
        {
          url: "https://www.youtube.com/embed/V46_cOUb9Vo?si=sJjnhvsI1cf6mts6",
          title: 'Compute on Proton: "Hello, world" (using Github CodeSpace)',
          duration: "03:05",
        },
        {
          url: "https://www.youtube.com/embed/HNUOwEYyTJA?si=c2jccEK8ldc4iewS",
          title:
            'Tutorial: Compute on Proton: "Hello, world" (using pip install dynex)',
          duration: "01:49",
        },
      ];
      var u = n(47082),
        _ = n.n(u);
      function p() {
        return (0, i.jsx)("div", {
          className: _().container,
          children: r.map((e) =>
            (0, i.jsxs)(
              "div",
              {
                className: _().videoContainer,
                children: [
                  (0, i.jsx)("div", {
                    className: _().video,
                    children: (0, i.jsx)("iframe", {
                      src: e.url,
                      title: e.title,
                      allow:
                        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                      loading: "lazy",
                      allowFullScreen: !0,
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: _().info,
                    children: [
                      (0, i.jsx)("div", {
                        className: _().title,
                        children: e.title,
                      }),
                      (0, i.jsxs)("div", {
                        className: _().links,
                        children: [
                          (0, i.jsx)(l(), {
                            href: "https://www.youtube.com/@dynexcoin",
                            className: _().logo,
                            children: (0, i.jsx)(o(), {
                              src: c.Z,
                              alt: "Proton",
                              draggable: "false",
                            }),
                          }),
                          (0, i.jsx)("div", { className: _().separator }),
                          (0, i.jsx)(o(), {
                            src: d,
                            className: _().youtube,
                            alt: "youtube",
                            draggable: "false",
                          }),
                          (0, i.jsx)("div", {
                            className: _().time,
                            children: e.duration,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              e.title
            )
          ),
        });
      }
    },
    7772: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "InstallationPage_container__7cLwZ",
      };
    },
    84945: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        ini: "DownloadConfiguration_ini__N1Ycv",
        title: "DownloadConfiguration_title__CNf4P",
      };
    },
    39089: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "InstallationGuide_container__d17iD",
        text: "InstallationGuide_text__zDyNf",
        guide: "InstallationGuide_guide__DsmcW",
        stepTitle: "InstallationGuide_stepTitle__bLLoc",
        step: "InstallationGuide_step__TD5S0",
        link: "InstallationGuide_link__4SfKe",
      };
    },
    47082: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "InstallationVideos_container__Dkh0F",
        videoContainer: "InstallationVideos_videoContainer__khvJJ",
        video: "InstallationVideos_video__eRZWy",
        info: "InstallationVideos_info__nB532",
        title: "InstallationVideos_title__EYyCc",
        links: "InstallationVideos_links__oKG_u",
        logo: "InstallationVideos_logo__v56cz",
        separator: "InstallationVideos_separator__Df7O4",
        youtube: "InstallationVideos_youtube__Tu0WT",
        time: "InstallationVideos_time__S9L8G",
      };
    },
    67025: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/download.439fa967.svg",
        height: 20,
        width: 20,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    64531: function (e, t) {
      "use strict";
      t.Z = {
        src: "./_next/static/media/logo-full.d6dbbcdc.svg",
        height: 279,
        width: 990,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
  function (e) {
    e.O(0, [716, 990, 901, 906, 858, 457, 200, 971, 938, 744], function () {
      return e((e.s = 19019));
    }),
      (_N_E = e.O());
  },
]);
