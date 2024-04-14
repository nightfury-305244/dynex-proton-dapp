(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [183],
  {
    70978: function (e, o, s) {
      Promise.resolve().then(s.bind(s, 78485));
    },
    78485: function (e, o, s) {
      "use strict";
      s.r(o),
        s.d(o, {
          default: function () {
            return m;
          },
        });
      var r = s(57437),
        n = s(16691),
        t = s.n(n),
        i = s(50116),
        a = s(57042),
        l = s(28457),
        d = s(31537),
        c = s(64531),
        u = s(11571),
        _ = s(2265),
        g = s(68200),
        h = s(90757),
        f = s.n(h);
      function m() {
        let e = (0, i.useTranslations)(),
          {
            loading: o,
            username: s,
            password: n,
            formIsValid: h,
            notFound: m,
            error: v,
            setUsername: x,
            setPassword: p,
            setNotFound: k,
            login: b,
          } = (function () {
            let e = (0, d.z)(),
              o = (0, g.LM)(),
              { logout: s } = (0, g.ZU)(),
              [r, n] = (0, _.useState)(!1),
              [t, i] = (0, _.useState)(""),
              [a, l] = (0, _.useState)(""),
              [c, u] = (0, _.useState)(),
              [h, f] = (0, _.useState)(!1),
              m = !!t.trim() && !!a.trim();
            return (
              (0, _.useEffect)(() => {
                s();
              }, []),
              {
                loading: r,
                username: t,
                password: a,
                formIsValid: m,
                error: c,
                notFound: h,
                setUsername: i,
                setPassword: l,
                login: () => {
                  m &&
                    !r &&
                    (n(!0),
                    u(void 0),
                    f(!1),
                    (0, g.lx)({ username: t.trim(), password: a.trim() })
                      .then((s) => {
                        let { data: r } = s;
                        o.setKYC(r.kyc_status),
                          o.setTFA(r.is_2fa_enabled),
                          r.kyc_status === g.eg.NeedToApply
                            ? ((0, g.MY)(r.access_token, r.refresh_token),
                              e.push("/auth/kyc"))
                            : r.kyc_status === g.eg.Processing &&
                              r.is_2fa_enabled
                            ? e.push("/auth/completed")
                            : ((0, g.MY)(r.access_token, r.refresh_token),
                              e.push("/auth/tfa"));
                      })
                      .catch((e) => {
                        var o, r, n, t;
                        u(
                          (null == e
                            ? void 0
                            : null === (r = e.response) || void 0 === r
                            ? void 0
                            : null === (o = r.data) || void 0 === o
                            ? void 0
                            : o.error) || "Invalid login or password"
                        ),
                          s(),
                          (null == e
                            ? void 0
                            : null === (t = e.response) || void 0 === t
                            ? void 0
                            : null === (n = t.data) || void 0 === n
                            ? void 0
                            : n.error) === "account not found or disabled" &&
                            f(!0);
                      })
                      .finally(() => {
                        n(!1);
                      }));
                },
                setNotFound: f,
              }
            );
          })(),
          j = (e) => {
            if (e && (null == e ? void 0 : e.tagName) !== "A") {
              var o;
              null === (o = e.getElementsByTagName("input")[0]) ||
                void 0 === o ||
                o.focus();
            } else b();
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            m &&
              (0, r.jsx)(l.xl, {
                title: e("auth.login.loginError"),
                text: e("auth.login.notFound"),
                variant: "error",
                onClose: () => k(!1),
              }),
            (0, r.jsx)("div", {
              className: (0, a.Z)(f().container, v && f().container_error),
              children: (0, r.jsxs)("div", {
                className: f().form,
                children: [
                  (0, r.jsx)(d.Mc, {
                    href: "/dashboard",
                    children: (0, r.jsx)(t(), {
                      src: c.Z,
                      className: f().logo,
                      alt: "Logo",
                      draggable: "false",
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: f().title,
                    children: e("auth.login.title"),
                  }),
                  (0, r.jsxs)("div", {
                    className: f().fields,
                    children: [
                      (0, r.jsx)(l.II, {
                        placeholder: e("auth.login.form.login"),
                        size: "l",
                        value: s,
                        error: v ? "" : void 0,
                        disabled: o,
                        onChange: x,
                        onEnterPress: j,
                      }),
                      (0, r.jsx)(l.II, {
                        placeholder: e("auth.login.form.password"),
                        size: "l",
                        value: n,
                        error: v ? "" : void 0,
                        disabled: o,
                        password: !0,
                        onChange: p,
                        onEnterPress: j,
                      }),
                      (0, r.jsx)(d.Mc, {
                        href: "/auth/recover",
                        className: f().forgotPassword,
                        children: e("auth.login.forgotPassword"),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: f().actions,
                    children: [
                      (0, r.jsxs)(l.zx, {
                        loading: o,
                        disabled: !h,
                        onClick: b,
                        children: [
                          (0, r.jsx)("div", {
                            children: e("auth.login.loginButton"),
                          }),
                          (0, r.jsx)(t(), {
                            src: u.Z,
                            alt: "Arrow",
                            draggable: "false",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: f().register,
                        children: [
                          (0, r.jsx)("div", {
                            children: e("auth.login.noAccount"),
                          }),
                          (0, r.jsx)(d.Mc, {
                            href: "/auth/register",
                            className: f().link,
                            children: e("auth.login.register"),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    90757: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "LoginForm_container__n0MNm",
        container_error: "LoginForm_container_error__XGJfv",
        form: "LoginForm_form__ad6BR",
        logo: "LoginForm_logo___c2o_",
        title: "LoginForm_title__1ITK1",
        fields: "LoginForm_fields__VPka_",
        eye: "LoginForm_eye__14xEu",
        eye_show: "LoginForm_eye_show__f9DzX",
        actions: "LoginForm_actions__ePkL2",
        register: "LoginForm_register__59Zp_",
        link: "LoginForm_link__KEAJw",
        forgotPassword: "LoginForm_forgotPassword__16rLA",
      };
    },
    64531: function (e, o) {
      "use strict";
      o.Z = {
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
      return e((e.s = 70978));
    }),
      (_N_E = e.O());
  },
]);
