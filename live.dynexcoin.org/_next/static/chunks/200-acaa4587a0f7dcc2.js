(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [200],
  {
    12505: function (e, t, n) {
      "use strict";
      n.d(t, {
        D3: function () {
          return C;
        },
        DF: function () {
          return _;
        },
        DL: function () {
          return o;
        },
        Gz: function () {
          return l;
        },
        KF: function () {
          return s;
        },
        Qf: function () {
          return P;
        },
        Uj: function () {
          return y;
        },
        bk: function () {
          return u;
        },
        ch: function () {
          return k;
        },
        dt: function () {
          return d;
        },
        kH: function () {
          return m;
        },
        mY: function () {
          return T;
        },
        n5: function () {
          return p;
        },
        pJ: function () {
          return h;
        },
        p_: function () {
          return x;
        },
        qF: function () {
          return f;
        },
        re: function () {
          return v;
        },
        um: function () {
          return g;
        },
        xR: function () {
          return w;
        },
        zk: function () {
          return c;
        },
        zn: function () {
          return b;
        },
      });
      var a = n(62067),
        r = n.n(a),
        i = n(88089);
      function o(e) {
        return i.iJ.post("/account/kyc/apply", e);
      }
      function s() {
        return i.ZP.get("/account/kyc/show");
      }
      function u() {
        return i.iJ.post("/account/2fa/enable");
      }
      function c(e) {
        return i.iJ.post("/account/2fa/pass", e);
      }
      function l(e) {
        return i.iJ.post("/account/2fa/verify_setup", e);
      }
      function d(e) {
        return i.ZP.post("/account/security/change_password", e);
      }
      function f(e) {
        return i.ZP.post("/account/security/delete", e);
      }
      function p() {
        return i.ZP.get("/account/sdk/api_key");
      }
      function _() {
        return i.ZP.get("/account/billing");
      }
      function m() {
        return i.ZP.get("/account/billing/balance");
      }
      function h(e) {
        return i.ZP.get(
          void 0 === e
            ? "/account/billing/history"
            : "/account/billing/job/".concat(e)
        ).then((e) => {
          let { data: t } = e;
          return t.data.map((e) => ({
            hash: e.tx_hash || "",
            amount: e.total_amount,
            status: e.status,
            type: e.type,
            timestamp: +r()(e.time),
            dest: e.dest,
            jobId: e.job_id,
            jobPostingId: e.job_post_id,
          }));
        });
      }
      function g() {
        return i.ZP.get("/account/social");
      }
      function v(e) {
        return i.ZP.post("/account/social/github", e);
      }
      function b(e) {
        return i.ZP.post("/account/social/slack", e);
      }
      function k() {
        return i.ZP.get("/account/affiliate").then((e) => {
          let { data: t } = e;
          return {
            referralCode: t.referral_code,
            subReferralCode: t.sub_referral_code || "-",
            affiliateMetrics: {
              allTimeRegsCount: t.affiliate_metrics.all_time_regs_count,
              newRegsCountThisMonth:
                t.affiliate_metrics.new_regs_count_this_month,
              allTimeRevenue: t.affiliate_metrics.all_time_revenue,
              revenueFromStartOfMonth:
                t.affiliate_metrics.revenue_from_start_of_month,
            },
            affiliateFee: t.affiliate_fee,
            data: t.data.map((e) => ({
              id: e.id,
              username: e.username,
              type: e.type,
              isActive: e.is_active,
              kycStatus: e.kyc_status,
              isTfaEnabled: e.is_2fa_enabled,
              isExpert: e.is_expert,
              createdAt: +r()(e.created_at),
              updatedAt: e.updated_at ? +r()(e.updated_at) : null,
              confirmedBalance: e.confirmed_balance,
              unconfirmedBalance: e.unconfirmed_balance,
              lockedBalance: e.locked_balance,
              totalSpent: e.total_spent,
              referrerId: e.referrer_id,
              referrerUsername: e.refferer_username,
              depositedThisMonth: e.deposited_this_month,
              spentOnComputing: e.spent_on_computing,
              spentOnComputingThisMonth: e.spent_on_computing_this_month,
              spentOnJobPosting: e.spent_on_job_posting,
              spentOnJobPostingThisMonth: e.spent_on_job_posting_this_month,
              spentThisMonth: e.spent_this_month,
              totalDeposited: e.total_deposited,
              totalWithdrawn: e.total_withdrawn,
            })),
          };
        });
      }
      function y(e) {
        return i.ZP.get("/account/affiliate/".concat(e.id)).then((e) => {
          let { data: t } = e;
          return {
            referralCode: t.referral_code,
            subReferralCode: t.sub_referral_code || "-",
            affiliateMetrics: {
              allTimeRegsCount: t.affiliate_metrics.all_time_regs_count,
              newRegsCountThisMonth:
                t.affiliate_metrics.new_regs_count_this_month,
              allTimeRevenue: t.affiliate_metrics.all_time_revenue,
              revenueFromStartOfMonth:
                t.affiliate_metrics.revenue_from_start_of_month,
            },
            data: t.data.map((e) => ({
              id: e.id,
              username: e.username,
              type: e.type,
              isActive: e.is_active,
              kycStatus: e.kyc_status,
              isTfaEnabled: e.is_2fa_enabled,
              isExpert: e.is_expert,
              createdAt: +r()(e.created_at),
              updatedAt: e.updated_at ? +r()(e.updated_at) : null,
              confirmedBalance: e.confirmed_balance,
              unconfirmedBalance: e.unconfirmed_balance,
              lockedBalance: e.locked_balance,
              totalSpent: e.total_spent,
              referrerId: e.referrer_id,
              referrerUsername: e.refferer_username,
              depositedThisMonth: e.deposited_this_month,
              spentOnComputing: e.spent_on_computing,
              spentOnComputingThisMonth: e.spent_on_computing_this_month,
              spentOnJobPosting: e.spent_on_job_posting,
              spentOnJobPostingThisMonth: e.spent_on_job_posting_this_month,
              spentThisMonth: e.spent_this_month,
              totalDeposited: e.total_deposited,
              totalWithdrawn: e.total_withdrawn,
            })),
          };
        });
      }
      function x() {
        return i.ZP.get("/account");
      }
      function C() {
        return i.ZP.get("/account/usage/limit").then((e) => {
          let { data: t } = e;
          return {
            maxChips: t.max_chips,
            maxSteps: t.max_steps,
            maxDuration: t.max_duration,
          };
        });
      }
      function w(e) {
        return i.ZP.post("/account/billing/set_wallet", e);
      }
      function P(e) {
        return i.ZP.get("/account/billing/withdraw", { params: e }).then(
          (e) => {
            let { data: t } = e;
            return (t.dtos || []).map((e) => ({
              id: e.id,
              sdkAccountId: e.sdk_account_id,
              txId: e.txid,
              type: e.type,
              addressTo: e.address_to,
              amount: e.amount,
              fee: e.fee,
              createdAt: +r()(e.created_at),
            }));
          }
        );
      }
      function T(e) {
        return i.ZP.post("/account/billing/withdraw", e);
      }
    },
    68200: function (e, t, n) {
      "use strict";
      n.d(t, {
        u0: function () {
          return d;
        },
        rs: function () {
          return f;
        },
        ck: function () {
          return p;
        },
        tD: function () {
          return ei;
        },
        eg: function () {
          return c;
        },
        wG: function () {
          return ed;
        },
        HK: function () {
          return eu;
        },
        i4: function () {
          return l;
        },
        DL: function () {
          return x.DL;
        },
        jQ: function () {
          return Z;
        },
        re: function () {
          return x.re;
        },
        zn: function () {
          return x.zn;
        },
        qF: function () {
          return x.qF;
        },
        Pz: function () {
          return j;
        },
        o6: function () {
          return S;
        },
        bk: function () {
          return x.bk;
        },
        Gl: function () {
          return H;
        },
        NJ: function () {
          return A;
        },
        P7: function () {
          return N;
        },
        D3: function () {
          return x.D3;
        },
        Uj: function () {
          return x.Uj;
        },
        xg: function () {
          return P;
        },
        n5: function () {
          return x.n5;
        },
        kH: function () {
          return x.kH;
        },
        pJ: function () {
          return x.pJ;
        },
        KF: function () {
          return x.KF;
        },
        gT: function () {
          return O;
        },
        ch: function () {
          return x.ch;
        },
        Qf: function () {
          return x.Qf;
        },
        lx: function () {
          return v;
        },
        aj: function () {
          return L;
        },
        zk: function () {
          return x.zk;
        },
        zq: function () {
          return T;
        },
        Js: function () {
          return y;
        },
        WF: function () {
          return k;
        },
        qL: function () {
          return b;
        },
        MY: function () {
          return J;
        },
        ct: function () {
          return Y;
        },
        c5: function () {
          return I;
        },
        tp: function () {
          return E;
        },
        _N: function () {
          return z;
        },
        xR: function () {
          return x.xR;
        },
        E_: function () {
          return Q;
        },
        ZU: function () {
          return B;
        },
        LM: function () {
          return X;
        },
        Gz: function () {
          return x.Gz;
        },
        mY: function () {
          return x.mY;
        },
      });
      var a,
        r,
        i,
        o,
        s,
        u,
        c,
        l,
        d,
        f,
        p,
        _,
        m = n(88089),
        h = n(92173);
      let g = "https://api.market.dynexcoin.org/api/v2";
      function v(e) {
        return h.Z.post("".concat(g, "/auth/login"), e);
      }
      function b(e) {
        return h.Z.post("".concat(g, "/auth/register"), e);
      }
      function k(e) {
        return m.ZP.post("/auth/refresh_token", e);
      }
      function y(e) {
        return h.Z.post("".concat(g, "/auth/recovery"), e);
      }
      var x = n(12505),
        C = n(62067),
        w = n.n(C);
      function P(e) {
        return m.ZP.get("/admin/account", { params: e }).then((e) => {
          let { data: t } = e;
          return t.data.map((e) => ({
            id: e.id,
            username: e.username,
            role: e.type,
            kycStatus: e.kyc_status,
            isActive: e.is_active,
            isTfaEnabled: e.is_2fa_enabled,
            createdAt: +w()(e.created_at),
            updatedAt: +w()(e.updated_at),
            totalSpent: e.total_spent,
            confirmedBalance: e.confirmed_balance,
            unconfirmedBalance: e.unconfirmed_balance,
            lockedBalance: e.locked_balance,
            referrerUsername: e.referrer_username || null,
            referrerId: e.referrer_id || null,
            withdrawWallet: e.wallet || null,
            affiliateFee: Math.round(1e5 * (e.affiliate_fee || 0)) / 1e3,
          }));
        });
      }
      function T(e) {
        return m.ZP.post("/admin/account/kyc/process", e);
      }
      function j(e) {
        return m.ZP.post("/admin/account/status", e);
      }
      function A(e) {
        return m.ZP.get("/admin/account/show", { params: e }).then((e) => {
          let { data: t } = e;
          return {
            account: {
              id: t.account.id,
              username: t.account.username,
              role: t.account.type,
              kycStatus: t.account.kyc_status,
              isActive: t.account.is_active,
              isTfaEnabled: t.account.is_2fa_enabled,
              createdAt: +w()(t.account.created_at),
              updatedAt: +w()(t.account.updated_at),
              totalSpent: t.account.total_spent,
              confirmedBalance: t.account.confirmed_balance,
              unconfirmedBalance: t.account.unconfirmed_balance,
              lockedBalance: t.account.locked_balance,
              referrerUsername: t.account.referrer_username || null,
              referrerId: t.account.referrer_id || null,
              withdrawWallet: t.account.wallet || null,
              affiliateFee:
                Math.round(1e5 * (t.account.affiliate_fee || 0)) / 1e3,
            },
            accountKyc: t.account_kyc,
            accountReferrals:
              t.account_referrals && t.account_referrals.length > 0
                ? t.account_referrals.map((e) => ({
                    id: e.id,
                    username: e.username,
                    type: e.type,
                    totalSpent: e.total_usage,
                    kycStatus: e.kyc_status,
                    isActive: e.is_active,
                    isExpert: e.is_expert,
                    createdAt: +w()(e.created_at),
                    updatedAt: e.updated_at ? +w()(e.updated_at) : null,
                  }))
                : [],
          };
        });
      }
      function N(e) {
        return m.ZP.get("/admin/account/limit", { params: e }).then((e) => {
          let { data: t } = e;
          return {
            maxChips: t.max_chips,
            maxSteps: t.max_steps,
            maxDuration: t.max_duration,
          };
        });
      }
      function I(e) {
        return m.ZP.post("/admin/account/limit/update", e);
      }
      function E(e) {
        return m.ZP.post("/admin/account/referrer", e);
      }
      function S(e) {
        return m.ZP.post("/admin/account/kyc/edit", e);
      }
      function Z(e) {
        return m.ZP.post("/admin/account/type", e);
      }
      function z(e) {
        return m.ZP.post("/admin/account/affiliate_fee", e);
      }
      function O(e) {
        return m.ZP.get("/admin/account/registrations", { params: e }).then(
          (e) => {
            let { data: t } = e;
            return t.entries
              .map((e) => ({ ...e, date: +w().utc(e.date) }))
              .reverse();
          }
        );
      }
      var U = n(47713),
        R = n(31537);
      function B() {
        let e = (0, R.z)(),
          t = X(),
          n = () => {
            H(),
              clearTimeout(t.refreshTimeout),
              t.reset(),
              /^\/([a-z]{2}\/)?(auth(\/[a-z]+)?|dashboard|terms-and-conditions|privacy-policy)$/i.test(
                window.location.pathname
              );
          },
          a = () => {
            let e = (0, U.getCookie)("NEXT_REFRESH_TOKEN");
            e
              ? k({ refresh_token: e })
                  .then((e) => {
                    let { data: n } = e;
                    if (n) {
                      let e = L(n.access_token);
                      clearTimeout(t.refreshTimeout),
                        t.setRefreshTimeout(setTimeout(a, 3e5)),
                        Y(n.access_token),
                        t.setInitialized(!0),
                        t.setAuthenticated(!0),
                        t.setAccountId(e.accountId),
                        t.setRole(e.accountType);
                    } else throw Error();
                  })
                  .catch(() => {
                    n();
                  })
              : n();
          };
        return { refresh: a, logout: n };
      }
      let K = "NEXT_ACCESS_TOKEN",
        M = "NEXT_REFRESH_TOKEN",
        D = "NEXT_AUTH_ACCESS_TOKEN",
        F = "NEXT_AUTH_REFRESH_TOKEN",
        J = (e, t) => {
          (0, U.setCookie)(D, e, { expires: new Date(1e3 * L(e).exp) }),
            t && (0, U.setCookie)(F, t, { expires: new Date(1e3 * L(e).exp) });
        },
        Y = (e, t) => {
          (0, U.setCookie)(K, e, { expires: new Date(1e3 * L(e).exp) }),
            t &&
              (0, U.setCookie)(M, t, {
                expires: new Date(new Date().getTime() + 432e7),
              });
        },
        H = () => {
          (0, U.setCookie)(K, ""),
            (0, U.setCookie)(M, ""),
            (0, U.setCookie)(D, ""),
            (0, U.setCookie)(F, ""),
            (0, U.deleteCookie)(K),
            (0, U.deleteCookie)(M),
            (0, U.deleteCookie)(D),
            (0, U.deleteCookie)(F);
        },
        L = (e) =>
          JSON.parse(
            atob(e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))
          );
      var W = n(94660),
        q = n(74810);
      let G = {
          initialized: !1,
          refreshTimeout: void 0,
          authenticated: !1,
          accountId: -1,
          role: 0,
          country: 0,
          balance: 0,
          unconfirmedBalance: 0,
          lockedBalance: 0,
          balanceUpdater: 0,
          billingsUpdater: 0,
          totalSpentBalance: 0,
          isExpert: !1,
          createdAt: 0,
          username: "",
          githubStatus: !1,
          githubUsername: null,
          slackStatus: !1,
          slackUsername: null,
          depositWallet: null,
          paymentID: null,
        },
        X = (0, W.Ue)((e) => ({
          ...G,
          reset: () => e({ ...G, initialized: !0 }),
          setRefreshTimeout: (t) => e({ refreshTimeout: t }),
          setAccountId: (t) => e({ accountId: t }),
          setInitialized: (t) => e({ initialized: t }),
          setAuthenticated: (t) => e({ authenticated: t }),
          setRole: (t) => e({ role: t }),
          setCountry: (t) => e({ country: t }),
          setBalance: (t) => e({ balance: t }),
          setUnconfirmedBalance: (t) => e({ unconfirmedBalance: t }),
          setLockedBalance: (t) => e({ lockedBalance: t }),
          setTotalSpentBalance: (t) => e({ totalSpentBalance: t }),
          updateBalance: () =>
            e((e) => ({ balanceUpdater: e.balanceUpdater + 1 })),
          updateBillings: () =>
            e((e) => ({ billingsUpdater: e.billingsUpdater + 1 })),
          setIsExpert: (t) => e({ isExpert: t }),
          setCreatedAt: (t) => e({ createdAt: t }),
          setUsername: (t) => e({ username: t }),
          setGithubStatus: (t) => e({ githubStatus: t }),
          setGithubUsername: (t) => e({ githubUsername: t }),
          setSlackStatus: (t) => e({ slackStatus: t }),
          setSlackUsername: (t) => e({ slackUsername: t }),
          setPaymentID: (t) => e({ paymentID: t }),
          setDepositWallet: (t) => e({ depositWallet: t }),
          setWithdrawWallet: (t) => e({ withdrawWallet: t }),
          setKYC: (t) => e({ kyc: t }),
          setTFA: (t) => e({ tfa: t }),
        })),
        V = {
          isNavigationOpen: !0,
          isMobileNavigationOpen: !1,
          usageChartVariant: "month",
        },
        Q = (0, W.Ue)()(
          (0, q.tJ)(
            (e) => ({
              ...V,
              setNavigationOpen: (t) => e({ isNavigationOpen: t }),
              setMobileNavigationOpen: (t) => e({ isMobileNavigationOpen: t }),
              setUsageChartVariant: (t) => e({ usageChartVariant: t }),
            }),
            {
              name: "layout",
              partialize: (e) => ({
                isNavigationOpen: e.isNavigationOpen,
                usageChartVariant: e.usageChartVariant,
              }),
            }
          )
        );
      ((a = c || (c = {}))[(a.NeedToApply = 0)] = "NeedToApply"),
        (a[(a.Processing = 1)] = "Processing"),
        (a[(a.Approved = 2)] = "Approved"),
        ((r = l || (l = {}))[(r.user = 0)] = "user"),
        (r[(r.admin = 1)] = "admin"),
        (r[(r.affiliate = 10)] = "affiliate"),
        (r[(r.subaffiliate = 11)] = "subaffiliate"),
        ((i = d || (d = {}))[(i.income = 1)] = "income"),
        (i[(i.expense = 2)] = "expense"),
        ((o = f || (f = {}))[(o.unconfirmed = 0)] = "unconfirmed"),
        (o[(o.confirmed = 1)] = "confirmed"),
        ((s = p || (p = {}))[(s.deposit = 1)] = "deposit"),
        (s[(s.billingJob = 2)] = "billingJob"),
        (s[(s.jobPosting = 3)] = "jobPosting"),
        (s[(s.refund = 4)] = "refund"),
        (s[(s.affiliate = 5)] = "affiliate"),
        (s[(s.withdraw = 6)] = "withdraw"),
        ((u = _ || (_ = {}))[(u.withdraw = 1)] = "withdraw");
      var $ = n(57437),
        ee = n(50116),
        et = n(57042),
        en = n(28457),
        ea = n(10656),
        er = n.n(ea);
      function ei(e) {
        let { kyc: t } = e,
          n = (0, ee.useTranslations)();
        return (0, $.jsxs)("div", {
          className: (0, et.Z)(
            er().container,
            (null == t ? void 0 : t.country) !== 840 && er().container_hide
          ),
          children: [
            (0, $.jsx)(en.II, {
              placeholder: n("profile.settings.details.firstName"),
              value: (null == t ? void 0 : t.first_name) || "",
              size: "l",
              disabled: !0,
              onChange: () => {},
            }),
            (0, $.jsx)(en.II, {
              placeholder: n("profile.settings.details.lastName"),
              value: (null == t ? void 0 : t.last_name) || "",
              size: "l",
              disabled: !0,
              onChange: () => {},
            }),
            (0, $.jsx)(en.II, {
              placeholder: n("profile.settings.details.email"),
              value: (null == t ? void 0 : t.email) || "",
              size: "l",
              disabled: !0,
              onChange: () => {},
            }),
            (0, $.jsx)(en.II, {
              placeholder: n("profile.settings.details.phone"),
              value: (null == t ? void 0 : t.phone) || "",
              size: "l",
              phoneNumber: !0,
              disabled: !0,
              onChange: () => {},
            }),
            (0, $.jsx)(en.II, {
              placeholder: n("profile.settings.details.country"),
              value: (null == t ? void 0 : t.country)
                ? n("countries.".concat(t.country))
                : "",
              size: "l",
              disabled: !0,
              onChange: () => {},
            }),
            (0, $.jsx)("div", {
              className: (0, et.Z)(
                er().state,
                (null == t ? void 0 : t.country) !== 840 && er().state_hide
              ),
              children:
                (null == t ? void 0 : t.country) === 840 &&
                (0, $.jsx)(en.II, {
                  placeholder: n("profile.settings.details.state"),
                  value: (null == t ? void 0 : t.state) || "",
                  size: "l",
                  disabled: !0,
                  onChange: () => {},
                }),
            }),
            (0, $.jsx)(en.II, {
              placeholder: n("profile.settings.details.city"),
              value: (null == t ? void 0 : t.city) || "",
              size: "l",
              disabled: !0,
              onChange: () => {},
            }),
            (0, $.jsx)(en.II, {
              placeholder: n("profile.settings.details.zip"),
              value: (null == t ? void 0 : t.zip) || "",
              size: "l",
              disabled: !0,
              onChange: () => {},
            }),
            (0, $.jsx)(en.II, {
              placeholder: n("profile.settings.details.address1"),
              value: (null == t ? void 0 : t.address1) || "",
              size: "l",
              disabled: !0,
              onChange: () => {},
            }),
            (0, $.jsx)(en.II, {
              placeholder: n("profile.settings.details.address2"),
              value: (null == t ? void 0 : t.address2) || "",
              size: "l",
              disabled: !0,
              onChange: () => {},
            }),
            (0, $.jsx)(en.II, {
              placeholder: n("profile.settings.details.company"),
              value: (null == t ? void 0 : t.company_name) || "",
              size: "l",
              disabled: !0,
              onChange: () => {},
            }),
            (0, $.jsx)(en.II, {
              placeholder: n("profile.settings.details.tax"),
              value: (null == t ? void 0 : t.company_tax) || "",
              size: "l",
              disabled: !0,
              onChange: () => {},
            }),
          ],
        });
      }
      var eo = n(18986),
        es = n.n(eo);
      function eu() {
        let e = (0, ee.useTranslations)(),
          t = X((e) => e.role),
          n = X((e) => e.createdAt);
        return (0, $.jsxs)(en.KT, {
          className: es().container,
          children: [
            (0, $.jsxs)("div", {
              className: es().titleContainer,
              children: [
                (0, $.jsx)("div", {
                  className: es().title,
                  children: e("profile.profileOverview.title"),
                }),
                (0, $.jsx)("div", {
                  className: es().role,
                  children: e("profile.profileOverview.role.".concat(l[t])),
                }),
              ],
            }),
            (0, $.jsxs)("div", {
              className: es().row,
              children: [
                (0, $.jsx)("div", {
                  children: e("profile.profileOverview.status.title"),
                }),
                (0, $.jsx)("div", {
                  className: es().status,
                  children: e("profile.profileOverview.status.confirmed"),
                }),
              ],
            }),
            (0, $.jsxs)("div", {
              className: es().row,
              children: [
                (0, $.jsx)("div", {
                  children: e("profile.profileOverview.registration"),
                }),
                (0, $.jsx)("div", {
                  children: n ? w()(n).format("YYYY-MM-DD HH:mm:ss") : "-",
                }),
              ],
            }),
          ],
        });
      }
      var ec = n(47027),
        el = n.n(ec);
      function ed(e) {
        let { status: t } = e,
          n = (0, ee.useTranslations)();
        return (0, $.jsx)("div", {
          className: el()[c[t]],
          children: n("kycStatus.".concat(c[t])),
        });
      }
    },
    88089: function (e, t, n) {
      "use strict";
      n.d(t, {
        fA: function () {
          return u;
        },
        iJ: function () {
          return o;
        },
      });
      var a = n(92173),
        r = n(47713);
      let i = "NEXT_ACCESS_TOKEN",
        o = a.Z.create({ baseURL: "https://api.market.dynexcoin.org/api/v2" });
      o.interceptors.request.use(
        (e) => {
          let t = (0, r.getCookie)("NEXT_AUTH_ACCESS_TOKEN");
          return t
            ? {
                ...e,
                headers: { ...e.headers, Authorization: "Bearer ".concat(t) },
              }
            : Promise.reject();
        },
        (e) => Promise.reject(e)
      );
      let s = a.Z.create({
        baseURL: "https://api.market.dynexcoin.org/api/v2",
      });
      s.interceptors.request.use(
        (e) => {
          let t = (0, r.getCookie)(i);
          return t
            ? {
                ...e,
                headers: { ...e.headers, Authorization: "Bearer ".concat(t) },
              }
            : Promise.reject();
        },
        (e) => Promise.reject(e)
      );
      let u = a.Z.create({
        baseURL: "https://api.market.dynexcoin.org/api/v2",
      });
      u.interceptors.request.use(
        (e) => {
          let t = (0, r.getCookie)(i);
          return t
            ? {
                ...e,
                headers: { ...e.headers, Authorization: "Bearer ".concat(t) },
              }
            : e;
        },
        (e) => Promise.reject(e)
      ),
        (t.ZP = s);
    },
    31537: function (e, t, n) {
      "use strict";
      n.d(t, {
        Mc: function () {
          return o;
        },
        dw: function () {
          return u;
        },
        k1: function () {
          return r;
        },
        u6: function () {
          return i;
        },
        z: function () {
          return c;
        },
      });
      var a = n(47906);
      let r = ["en", "cn"],
        i = { en: ["US", "English"], cn: ["CN", "中文"] },
        {
          Link: o,
          redirect: s,
          usePathname: u,
          useRouter: c,
        } = (0, a.QZ)({
          locales: r,
          pathnames: {
            "/": "/",
            "/admin": "/admin",
            "/admin/accounts": "/admin/accounts",
            "/admin/stats": "/admin/stats",
            "/auth": "/auth",
            "/auth/login": "/auth/login",
            "/auth/recover": "/auth/recover",
            "/auth/kyc": "/auth/kyc",
            "/auth/tfa": "/auth/tfa",
            "/auth/register": "/auth/register",
            "/auth/completed": "/auth/completed",
            "/billing": "/billing",
            "/code-library": "/code-library",
            "/compute-on-dynex": "/compute-on-dynex",
            "/dashboard": "/dashboard",
            "/earn-with-dynex": "/earn-with-dynex",
            "/installation": "/installation",
            "/profile": "/profile",
            "/usage": "/usage",
            "/terms-and-conditions": "/terms-and-conditions",
            "/privacy-policy": "/privacy-policy",
            "/affiliates": "/affiliates",
            "/my-job/[id]": "/my-job/[id]",
          },
        });
    },
    10656: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "KYC_container__x4AS8",
        container_hide: "KYC_container_hide__xuef1",
        state_hide: "KYC_state_hide__KRl6z",
      };
    },
    47027: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        NeedToApply: "KYCStatusPlate_NeedToApply___8vvn",
        Processing: "KYCStatusPlate_Processing__MNKG2",
        Approved: "KYCStatusPlate_Approved__IniuI",
      };
    },
    18986: function (e) {
      e.exports = {
        "desktop-l": "2500",
        "desktop-s": "1600",
        tablet: "1280",
        "tablet-s": "900",
        mobile: "680",
        container: "ProfileOverview_container__3WREL",
        titleContainer: "ProfileOverview_titleContainer__syqVu",
        title: "ProfileOverview_title__FErdn",
        role: "ProfileOverview_role__WoVKO",
        row: "ProfileOverview_row__umxP4",
        status: "ProfileOverview_status__p1KOO",
      };
    },
  },
]);
