(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [279],
  {
    27616: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 4833));
    },
    4833: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return x;
          },
        });
      var a = r(57437),
        o = r(61396),
        s = r.n(o),
        i = r(16691),
        c = r.n(i),
        n = r(50116),
        l = r(57042),
        d = r(28457),
        A = r(99763),
        u = r(11571),
        h = {
          src: "/_next/static/media/lock.c657b404.svg",
          height: 52,
          width: 52,
          blurWidth: 0,
          blurHeight: 0,
        },
        _ = {
          src: "/_next/static/media/app-store-badge.a2e763b8.svg",
          height: 40,
          width: 120,
          blurWidth: 0,
          blurHeight: 0,
        },
        g = {
          src: "/_next/static/media/google-play-badge.f11630d5.png",
          height: 168,
          width: 565,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAIVBMVEUuOEdBQUEkJCQJCQkoJiNGRkccHBw5RiUuLzBWNyFTU1Njha3dAAAABHRSTlP8/ubmgTSCeAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABpJREFUeJxjYGBn4WBhY2NmYOBkYeViZGUCAAKxAEvzVlMGAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 2,
        },
        m = {
          src: "/_next/static/media/mi-badge.01387eb8.png",
          height: 62,
          width: 195,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJFBMVEX9+/v/////7u7/dFf9/f39+PhMaXH/////Y0H/Y0X/aU3/j3QSSFDRAAAAC3RSTlNHDQn8OTIAG7CQh6tgYk0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAfSURBVHicY2DmYmRlZWFgYeDmYGcAA2ZONiZGRiZGAAUxAFTWsFerAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        },
        f = r(24033),
        p = r(2265),
        F = r(47713),
        v = r(68200),
        b = r(31537),
        k = r(53482),
        T = r.n(k);
      function x() {
        let e = (0, n.useTranslations)(),
          {
            loading: t,
            formIsValid: r,
            code: o,
            success: i,
            error: k,
            secret: x,
            qr: C,
            setCode: j,
            confirm: S,
          } = (function () {
            let e = (0, f.useRouter)(),
              t = (0, b.z)(),
              r = (0, v.LM)(),
              { refresh: a } = (0, v.ZU)(),
              [o, s] = (0, p.useState)(!1),
              [i, c] = (0, p.useState)(""),
              [n, l] = (0, p.useState)(),
              [d, A] = (0, p.useState)(),
              [u, h] = (0, p.useState)(),
              [_, g] = (0, p.useState)(),
              m = /[0-9]{6}/.test(i),
              k = () => {
                o ||
                  (s(!0),
                  l(void 0),
                  A(void 0),
                  (0, v.bk)()
                    .then((e) => {
                      let { data: t } = e;
                      h(t["2fa_secret"]), g(t["2fa_image"]);
                    })
                    .catch(() => {
                      c(""),
                        h(void 0),
                        g(void 0),
                        A("Error while receiving 2FA code");
                    })
                    .finally(() => {
                      s(!1);
                    }));
              },
              T = () => {
                m &&
                  !o &&
                  (s(!0),
                  l(void 0),
                  A(void 0),
                  (0, v.Gz)({ code: i })
                    .then((e) => {
                      let { data: a } = e;
                      if (a)
                        r.setTFA(!0),
                          l(!0),
                          setTimeout(() => t.push("/auth/completed"), 500);
                      else throw Error();
                    })
                    .catch((e) => {
                      var t, a;
                      r.setTFA(!1),
                        c(""),
                        A(
                          (null == e
                            ? void 0
                            : null === (a = e.response) || void 0 === a
                            ? void 0
                            : null === (t = a.data) || void 0 === t
                            ? void 0
                            : t.error) || "Verification error"
                        );
                    })
                    .finally(() => {
                      s(!1);
                    }));
              },
              x = () => {
                m &&
                  !o &&
                  (s(!0),
                  l(void 0),
                  A(void 0),
                  (0, v.zk)({ code: i })
                    .then((o) => {
                      let { data: s } = o;
                      if (s) {
                        let o = (0, F.getCookie)("NEXT_AUTH_REFRESH_TOKEN");
                        (0, v.Gl)(),
                          (0, v.ct)(s.token, o),
                          l(!0),
                          r.setRefreshTimeout(setTimeout(a, 3e5)),
                          setTimeout(() => {
                            let a = (0, v.aj)(s.token);
                            r.setAuthenticated(!0),
                              r.setAccountId(a.accountId),
                              r.setRole(a.accountType);
                            let o = (0, F.getCookie)("callback");
                            o
                              ? (e.push(o), (0, F.deleteCookie)("callback"))
                              : t.push("/dashboard");
                          }, 800);
                      } else throw Error();
                    })
                    .catch((e) => {
                      var t, r;
                      c(""),
                        A(
                          (null == e
                            ? void 0
                            : null === (r = e.response) || void 0 === r
                            ? void 0
                            : null === (t = r.data) || void 0 === t
                            ? void 0
                            : t.error) || "Wrong code"
                        );
                    })
                    .finally(() => {
                      s(!1);
                    }));
              },
              C = () => {
                r.tfa ? x() : T();
              };
            return (
              (0, p.useEffect)(() => {
                m && C();
              }, [m]),
              (0, p.useEffect)(() => {
                void 0 === r.kyc || void 0 === r.tfa
                  ? t.replace("/auth/login")
                  : r.kyc === v.eg.Approved
                  ? r.tfa || k()
                  : r.kyc === v.eg.Processing
                  ? r.tfa
                    ? t.replace("/auth/completed")
                    : k()
                  : t.replace("/auth/kyc");
              }, []),
              {
                loading: o,
                formIsValid: m,
                code: i,
                success: n,
                error: d,
                secret: u,
                qr: _,
                setCode: c,
                confirm: C,
              }
            );
          })();
        return (0, a.jsx)("div", {
          className: (0, l.Z)(
            T().container,
            k && T().container_error,
            i && T().container_success
          ),
          children: (0, a.jsxs)("div", {
            className: T().form,
            children: [
              (0, a.jsxs)("div", {
                className: T().header,
                children: [
                  (0, a.jsx)(c(), {
                    src: h,
                    className: (0, l.Z)(
                      T().lock,
                      k && T().lock_error,
                      i && T().lock_success
                    ),
                    alt: "Logo",
                    draggable: "false",
                  }),
                  (0, a.jsx)("div", {
                    className: T().titleContainer,
                    children: (0, a.jsx)("div", {
                      className: T().title,
                      children: e("auth.tfa.title"),
                    }),
                  }),
                ],
              }),
              C &&
                x &&
                (0, a.jsxs)("div", {
                  className: T().secretContainer,
                  children: [
                    (0, a.jsx)(c(), {
                      src: "data:image/png;base64,".concat(C),
                      className: T().qr,
                      width: 152,
                      height: 152,
                      alt: "Logo",
                      draggable: "false",
                    }),
                    (0, a.jsxs)("div", {
                      className: T().secret,
                      children: [
                        (0, a.jsx)("div", { children: (0, A.u7)(x) }),
                        (0, a.jsx)(d.h9, { toCopy: x }),
                      ],
                    }),
                  ],
                }),
              (0, a.jsx)(d.Jw, {
                code: o,
                error: k ? "" : void 0,
                success: i ? "" : void 0,
                disabled: t,
                focusIndex: k ? 0 : void 0,
                autoFocus: !0,
                setCode: j,
                onEnterPress: S,
              }),
              (0, a.jsx)("div", {
                className: T().actions,
                children: (0, a.jsxs)(d.zx, {
                  loading: t,
                  disabled: !r || i,
                  onClick: S,
                  children: [
                    (0, a.jsx)("div", {
                      children: e("auth.tfa.confirmButton"),
                    }),
                    (0, a.jsx)(c(), {
                      src: u.Z,
                      alt: "Arrow",
                      draggable: "false",
                    }),
                  ],
                }),
              }),
              x &&
                (0, a.jsxs)("div", {
                  className: T().apps,
                  children: [
                    (0, a.jsx)(s(), {
                      href: "https://apps.apple.com/us/app/google-authenticator/id388497605",
                      target: "_blank",
                      children: (0, a.jsx)(c(), {
                        src: _,
                        alt: "App Store",
                        draggable: "false",
                      }),
                    }),
                    (0, a.jsx)(s(), {
                      href: "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&pli=1",
                      target: "_blank",
                      children: (0, a.jsx)(c(), {
                        src: g,
                        alt: "Play Store",
                        draggable: "false",
                      }),
                    }),
                    (0, a.jsx)(s(), {
                      href: "https://app.mi.com/details?id=com.azure.authenticator",
                      target: "_blank",
                      children: (0, a.jsx)(c(), {
                        src: m,
                        alt: "Mi Store",
                        draggable: "false",
                      }),
                    }),
                  ],
                }),
            ],
          }),
        });
      }
    },
    99763: function (e, t, r) {
      "use strict";
      r.d(t, {
        KS: function () {
          return s;
        },
        eL: function () {
          return o;
        },
        u7: function () {
          return a;
        },
      });
      let a = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "....",
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 6,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 6;
          return "".concat(e.slice(0, r)).concat(t).concat(e.slice(-a));
        },
        o = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : ",",
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = 10 ** t,
            s = (Math.round(+e * o) / o).toString().split(".");
          return ""
            .concat(s[0].replace(/\B(?=(\d{3})+(?!\d))/g, r))
            .concat(s[1] || a ? ".".concat(s[1] || "0".repeat(t)) : "");
        },
        s = (e, t) => {
          if (e === 1 / 0) return "0";
          let r = 0,
            a = e;
          for (; a > 1e3; ) (a /= 1e3), (r += 1);
          return (
            "number" != typeof a && (a = 0),
            ""
              .concat(a.toFixed(2), " ")
              .concat(["", " k", " M", " G", " T", " P"][r])
              .concat(t)
          );
        };
    },
    53482: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "TFAForm_container__49pz_",
        container_error: "TFAForm_container_error__4sSd_",
        container_success: "TFAForm_container_success__9_VeT",
        form: "TFAForm_form__iXW7_",
        header: "TFAForm_header__AM_R4",
        lock: "TFAForm_lock__HWcw1",
        lock_error: "TFAForm_lock_error___s3M7",
        lock_success: "TFAForm_lock_success__HWyis",
        titleContainer: "TFAForm_titleContainer__90S06",
        title: "TFAForm_title__UNmKv",
        message: "TFAForm_message__2_2C3",
        secretContainer: "TFAForm_secretContainer__GOv_a",
        qr: "TFAForm_qr__pV_Ob",
        secret: "TFAForm_secret__PbhJ4",
        fields: "TFAForm_fields__bg_rU",
        actions: "TFAForm_actions__s0HF8",
        apps: "TFAForm_apps__H3auh",
      };
    },
  },
  function (e) {
    e.O(0, [716, 990, 901, 906, 858, 457, 200, 971, 938, 744], function () {
      return e((e.s = 27616));
    }),
      (_N_E = e.O());
  },
]);
