(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [901],
  {
    69259: function (e, t, n) {
      "use strict";
      function r(e) {
        return "object" == typeof e && "length" in e ? e : Array.from(e);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    25329: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(67824),
        o = n(78797);
      function i(e) {
        var t = (0, r.Z)(e);
        return (
          t.local
            ? function (e) {
                return function () {
                  return this.ownerDocument.createElementNS(e.space, e.local);
                };
              }
            : function (e) {
                return function () {
                  var t = this.ownerDocument,
                    n = this.namespaceURI;
                  return n === o.P && t.documentElement.namespaceURI === o.P
                    ? t.createElement(e)
                    : t.createElementNS(n, e);
                };
              }
        )(t);
      }
    },
    15907: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          create: function () {
            return i;
          },
          creator: function () {
            return r.Z;
          },
          local: function () {
            return u;
          },
          matcher: function () {
            return s.Z;
          },
          namespace: function () {
            return c.Z;
          },
          namespaces: function () {
            return f.Z;
          },
          pointer: function () {
            return h.Z;
          },
          pointers: function () {
            return p;
          },
          select: function () {
            return o.Z;
          },
          selectAll: function () {
            return v;
          },
          selection: function () {
            return m.ZP;
          },
          selector: function () {
            return y.Z;
          },
          selectorAll: function () {
            return b.Z;
          },
          style: function () {
            return _.S;
          },
          window: function () {
            return w.Z;
          },
        });
      var r = n(25329),
        o = n(93716);
      function i(e) {
        return (0, o.Z)((0, r.Z)(e).call(document.documentElement));
      }
      var a = 0;
      function u() {
        return new l();
      }
      function l() {
        this._ = "@" + (++a).toString(36);
      }
      l.prototype = u.prototype = {
        constructor: l,
        get: function (e) {
          for (var t = this._; !(t in e); ) if (!(e = e.parentNode)) return;
          return e[t];
        },
        set: function (e, t) {
          return (e[this._] = t);
        },
        remove: function (e) {
          return this._ in e && delete e[this._];
        },
        toString: function () {
          return this._;
        },
      };
      var s = n(54775),
        c = n(67824),
        f = n(78797),
        h = n(96110),
        d = n(72119);
      function p(e, t) {
        return (
          e.target &&
            ((e = (0, d.Z)(e)),
            void 0 === t && (t = e.currentTarget),
            (e = e.touches || [e])),
          Array.from(e, (e) => (0, h.Z)(e, t))
        );
      }
      var g = n(69259),
        m = n(72042);
      function v(e) {
        return "string" == typeof e
          ? new m.Y1([document.querySelectorAll(e)], [document.documentElement])
          : new m.Y1([null == e ? [] : (0, g.Z)(e)], m.Jz);
      }
      var y = n(81059),
        b = n(87678),
        _ = n(12866),
        w = n(3776);
    },
    54775: function (e, t, n) {
      "use strict";
      function r(e) {
        return function () {
          return this.matches(e);
        };
      }
      function o(e) {
        return function (t) {
          return t.matches(e);
        };
      }
      n.d(t, {
        P: function () {
          return o;
        },
        Z: function () {
          return r;
        },
      });
    },
    67824: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(78797);
      function o(e) {
        var t = (e += ""),
          n = t.indexOf(":");
        return (
          n >= 0 && "xmlns" !== (t = e.slice(0, n)) && (e = e.slice(n + 1)),
          r.Z.hasOwnProperty(t) ? { space: r.Z[t], local: e } : e
        );
      }
    },
    78797: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return r;
        },
      });
      var r = "http://www.w3.org/1999/xhtml";
      t.Z = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: r,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      };
    },
    96110: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(72119);
      function o(e, t) {
        if (((e = (0, r.Z)(e)), void 0 === t && (t = e.currentTarget), t)) {
          var n = t.ownerSVGElement || t;
          if (n.createSVGPoint) {
            var o = n.createSVGPoint();
            return (
              (o.x = e.clientX),
              (o.y = e.clientY),
              [(o = o.matrixTransform(t.getScreenCTM().inverse())).x, o.y]
            );
          }
          if (t.getBoundingClientRect) {
            var i = t.getBoundingClientRect();
            return [
              e.clientX - i.left - t.clientLeft,
              e.clientY - i.top - t.clientTop,
            ];
          }
        }
        return [e.pageX, e.pageY];
      }
    },
    93716: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(72042);
      function o(e) {
        return "string" == typeof e
          ? new r.Y1([[document.querySelector(e)]], [document.documentElement])
          : new r.Y1([[e]], r.Jz);
      }
    },
    72042: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y1: function () {
          return j;
        },
        ZP: function () {
          return D;
        },
        Jz: function () {
          return H;
        },
      });
      var r = n(81059),
        o = n(69259),
        i = n(87678),
        a = n(54775),
        u = Array.prototype.find;
      function l() {
        return this.firstElementChild;
      }
      var s = Array.prototype.filter;
      function c() {
        return this.children;
      }
      function f(e) {
        return Array(e.length);
      }
      function h(e, t) {
        (this.ownerDocument = e.ownerDocument),
          (this.namespaceURI = e.namespaceURI),
          (this._next = null),
          (this._parent = e),
          (this.__data__ = t);
      }
      function d(e, t, n, r, o, i) {
        for (var a, u = 0, l = t.length, s = i.length; u < s; ++u)
          (a = t[u])
            ? ((a.__data__ = i[u]), (r[u] = a))
            : (n[u] = new h(e, i[u]));
        for (; u < l; ++u) (a = t[u]) && (o[u] = a);
      }
      function p(e, t, n, r, o, i, a) {
        var u,
          l,
          s,
          c = new Map(),
          f = t.length,
          d = i.length,
          p = Array(f);
        for (u = 0; u < f; ++u)
          (l = t[u]) &&
            ((p[u] = s = a.call(l, l.__data__, u, t) + ""),
            c.has(s) ? (o[u] = l) : c.set(s, l));
        for (u = 0; u < d; ++u)
          (s = a.call(e, i[u], u, i) + ""),
            (l = c.get(s))
              ? ((r[u] = l), (l.__data__ = i[u]), c.delete(s))
              : (n[u] = new h(e, i[u]));
        for (u = 0; u < f; ++u) (l = t[u]) && c.get(p[u]) === l && (o[u] = l);
      }
      function g(e) {
        return e.__data__;
      }
      function m(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
      }
      h.prototype = {
        constructor: h,
        appendChild: function (e) {
          return this._parent.insertBefore(e, this._next);
        },
        insertBefore: function (e, t) {
          return this._parent.insertBefore(e, t);
        },
        querySelector: function (e) {
          return this._parent.querySelector(e);
        },
        querySelectorAll: function (e) {
          return this._parent.querySelectorAll(e);
        },
      };
      var v = n(67824),
        y = n(12866);
      function b(e) {
        return e.trim().split(/^|\s+/);
      }
      function _(e) {
        return e.classList || new w(e);
      }
      function w(e) {
        (this._node = e), (this._names = b(e.getAttribute("class") || ""));
      }
      function E(e, t) {
        for (var n = _(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
      }
      function S(e, t) {
        for (var n = _(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
      }
      function C() {
        this.textContent = "";
      }
      function M() {
        this.innerHTML = "";
      }
      function P() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function R() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      w.prototype = {
        add: function (e) {
          0 > this._names.indexOf(e) &&
            (this._names.push(e),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (e) {
          var t = this._names.indexOf(e);
          t >= 0 &&
            (this._names.splice(t, 1),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (e) {
          return this._names.indexOf(e) >= 0;
        },
      };
      var A = n(25329);
      function x() {
        return null;
      }
      function I() {
        var e = this.parentNode;
        e && e.removeChild(this);
      }
      function N() {
        var e = this.cloneNode(!1),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function T() {
        var e = this.cloneNode(!0),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function k(e) {
        return function () {
          var t = this.__on;
          if (t) {
            for (var n, r = 0, o = -1, i = t.length; r < i; ++r)
              ((n = t[r]), (e.type && n.type !== e.type) || n.name !== e.name)
                ? (t[++o] = n)
                : this.removeEventListener(n.type, n.listener, n.options);
            ++o ? (t.length = o) : delete this.__on;
          }
        };
      }
      function O(e, t, n) {
        return function () {
          var r,
            o = this.__on,
            i = function (e) {
              t.call(this, e, this.__data__);
            };
          if (o) {
            for (var a = 0, u = o.length; a < u; ++a)
              if ((r = o[a]).type === e.type && r.name === e.name) {
                this.removeEventListener(r.type, r.listener, r.options),
                  this.addEventListener(
                    r.type,
                    (r.listener = i),
                    (r.options = n)
                  ),
                  (r.value = t);
                return;
              }
          }
          this.addEventListener(e.type, i, n),
            (r = {
              type: e.type,
              name: e.name,
              value: t,
              listener: i,
              options: n,
            }),
            o ? o.push(r) : (this.__on = [r]);
        };
      }
      var F = n(3776);
      function L(e, t, n) {
        var r = (0, F.Z)(e),
          o = r.CustomEvent;
        "function" == typeof o
          ? (o = new o(t, n))
          : ((o = r.document.createEvent("Event")),
            n
              ? (o.initEvent(t, n.bubbles, n.cancelable), (o.detail = n.detail))
              : o.initEvent(t, !1, !1)),
          e.dispatchEvent(o);
      }
      var H = [null];
      function j(e, t) {
        (this._groups = e), (this._parents = t);
      }
      function B() {
        return new j([[document.documentElement]], H);
      }
      j.prototype = B.prototype = {
        constructor: j,
        select: function (e) {
          "function" != typeof e && (e = (0, r.Z)(e));
          for (
            var t = this._groups, n = t.length, o = Array(n), i = 0;
            i < n;
            ++i
          )
            for (
              var a, u, l = t[i], s = l.length, c = (o[i] = Array(s)), f = 0;
              f < s;
              ++f
            )
              (a = l[f]) &&
                (u = e.call(a, a.__data__, f, l)) &&
                ("__data__" in a && (u.__data__ = a.__data__), (c[f] = u));
          return new j(o, this._parents);
        },
        selectAll: function (e) {
          if ("function" == typeof e) {
            var t;
            (t = e),
              (e = function () {
                var e = t.apply(this, arguments);
                return null == e ? [] : (0, o.Z)(e);
              });
          } else e = (0, i.Z)(e);
          for (
            var n = this._groups, r = n.length, a = [], u = [], l = 0;
            l < r;
            ++l
          )
            for (var s, c = n[l], f = c.length, h = 0; h < f; ++h)
              (s = c[h]) && (a.push(e.call(s, s.__data__, h, c)), u.push(s));
          return new j(a, u);
        },
        selectChild: function (e) {
          var t;
          return this.select(
            null == e
              ? l
              : ((t = "function" == typeof e ? e : (0, a.P)(e)),
                function () {
                  return u.call(this.children, t);
                })
          );
        },
        selectChildren: function (e) {
          var t;
          return this.selectAll(
            null == e
              ? c
              : ((t = "function" == typeof e ? e : (0, a.P)(e)),
                function () {
                  return s.call(this.children, t);
                })
          );
        },
        filter: function (e) {
          "function" != typeof e && (e = (0, a.Z)(e));
          for (
            var t = this._groups, n = t.length, r = Array(n), o = 0;
            o < n;
            ++o
          )
            for (
              var i, u = t[o], l = u.length, s = (r[o] = []), c = 0;
              c < l;
              ++c
            )
              (i = u[c]) && e.call(i, i.__data__, c, u) && s.push(i);
          return new j(r, this._parents);
        },
        data: function (e, t) {
          if (!arguments.length) return Array.from(this, g);
          var n = t ? p : d,
            r = this._parents,
            i = this._groups;
          "function" != typeof e &&
            ((w = e),
            (e = function () {
              return w;
            }));
          for (
            var a = i.length, u = Array(a), l = Array(a), s = Array(a), c = 0;
            c < a;
            ++c
          ) {
            var f = r[c],
              h = i[c],
              m = h.length,
              v = (0, o.Z)(e.call(f, f && f.__data__, c, r)),
              y = v.length,
              b = (l[c] = Array(y)),
              _ = (u[c] = Array(y));
            n(f, h, b, _, (s[c] = Array(m)), v, t);
            for (var w, E, S, C = 0, M = 0; C < y; ++C)
              if ((E = b[C])) {
                for (C >= M && (M = C + 1); !(S = _[M]) && ++M < y; );
                E._next = S || null;
              }
          }
          return ((u = new j(u, r))._enter = l), (u._exit = s), u;
        },
        enter: function () {
          return new j(this._enter || this._groups.map(f), this._parents);
        },
        exit: function () {
          return new j(this._exit || this._groups.map(f), this._parents);
        },
        join: function (e, t, n) {
          var r = this.enter(),
            o = this,
            i = this.exit();
          return (
            (r = "function" == typeof e ? e(r) : r.append(e + "")),
            null != t && (o = t(o)),
            null == n ? i.remove() : n(i),
            r && o ? r.merge(o).order() : o
          );
        },
        merge: function (e) {
          if (!(e instanceof j)) throw Error("invalid merge");
          for (
            var t = this._groups,
              n = e._groups,
              r = t.length,
              o = n.length,
              i = Math.min(r, o),
              a = Array(r),
              u = 0;
            u < i;
            ++u
          )
            for (
              var l,
                s = t[u],
                c = n[u],
                f = s.length,
                h = (a[u] = Array(f)),
                d = 0;
              d < f;
              ++d
            )
              (l = s[d] || c[d]) && (h[d] = l);
          for (; u < r; ++u) a[u] = t[u];
          return new j(a, this._parents);
        },
        selection: function () {
          return this;
        },
        order: function () {
          for (var e = this._groups, t = -1, n = e.length; ++t < n; )
            for (var r, o = e[t], i = o.length - 1, a = o[i]; --i >= 0; )
              (r = o[i]) &&
                (a &&
                  4 ^ r.compareDocumentPosition(a) &&
                  a.parentNode.insertBefore(r, a),
                (a = r));
          return this;
        },
        sort: function (e) {
          function t(t, n) {
            return t && n ? e(t.__data__, n.__data__) : !t - !n;
          }
          e || (e = m);
          for (
            var n = this._groups, r = n.length, o = Array(r), i = 0;
            i < r;
            ++i
          ) {
            for (
              var a, u = n[i], l = u.length, s = (o[i] = Array(l)), c = 0;
              c < l;
              ++c
            )
              (a = u[c]) && (s[c] = a);
            s.sort(t);
          }
          return new j(o, this._parents).order();
        },
        call: function () {
          var e = arguments[0];
          return (arguments[0] = this), e.apply(null, arguments), this;
        },
        nodes: function () {
          return Array.from(this);
        },
        node: function () {
          for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
            for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
              var a = r[o];
              if (a) return a;
            }
          return null;
        },
        size: function () {
          let e = 0;
          for (let t of this) ++e;
          return e;
        },
        empty: function () {
          return !this.node();
        },
        each: function (e) {
          for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
            for (var o, i = t[n], a = 0, u = i.length; a < u; ++a)
              (o = i[a]) && e.call(o, o.__data__, a, i);
          return this;
        },
        attr: function (e, t) {
          var n = (0, v.Z)(e);
          if (arguments.length < 2) {
            var r = this.node();
            return n.local
              ? r.getAttributeNS(n.space, n.local)
              : r.getAttribute(n);
          }
          return this.each(
            (null == t
              ? n.local
                ? function (e) {
                    return function () {
                      this.removeAttributeNS(e.space, e.local);
                    };
                  }
                : function (e) {
                    return function () {
                      this.removeAttribute(e);
                    };
                  }
              : "function" == typeof t
              ? n.local
                ? function (e, t) {
                    return function () {
                      var n = t.apply(this, arguments);
                      null == n
                        ? this.removeAttributeNS(e.space, e.local)
                        : this.setAttributeNS(e.space, e.local, n);
                    };
                  }
                : function (e, t) {
                    return function () {
                      var n = t.apply(this, arguments);
                      null == n
                        ? this.removeAttribute(e)
                        : this.setAttribute(e, n);
                    };
                  }
              : n.local
              ? function (e, t) {
                  return function () {
                    this.setAttributeNS(e.space, e.local, t);
                  };
                }
              : function (e, t) {
                  return function () {
                    this.setAttribute(e, t);
                  };
                })(n, t)
          );
        },
        style: y.Z,
        property: function (e, t) {
          return arguments.length > 1
            ? this.each(
                (null == t
                  ? function (e) {
                      return function () {
                        delete this[e];
                      };
                    }
                  : "function" == typeof t
                  ? function (e, t) {
                      return function () {
                        var n = t.apply(this, arguments);
                        null == n ? delete this[e] : (this[e] = n);
                      };
                    }
                  : function (e, t) {
                      return function () {
                        this[e] = t;
                      };
                    })(e, t)
              )
            : this.node()[e];
        },
        classed: function (e, t) {
          var n = b(e + "");
          if (arguments.length < 2) {
            for (var r = _(this.node()), o = -1, i = n.length; ++o < i; )
              if (!r.contains(n[o])) return !1;
            return !0;
          }
          return this.each(
            ("function" == typeof t
              ? function (e, t) {
                  return function () {
                    (t.apply(this, arguments) ? E : S)(this, e);
                  };
                }
              : t
              ? function (e) {
                  return function () {
                    E(this, e);
                  };
                }
              : function (e) {
                  return function () {
                    S(this, e);
                  };
                })(n, t)
          );
        },
        text: function (e) {
          return arguments.length
            ? this.each(
                null == e
                  ? C
                  : ("function" == typeof e
                      ? function (e) {
                          return function () {
                            var t = e.apply(this, arguments);
                            this.textContent = null == t ? "" : t;
                          };
                        }
                      : function (e) {
                          return function () {
                            this.textContent = e;
                          };
                        })(e)
              )
            : this.node().textContent;
        },
        html: function (e) {
          return arguments.length
            ? this.each(
                null == e
                  ? M
                  : ("function" == typeof e
                      ? function (e) {
                          return function () {
                            var t = e.apply(this, arguments);
                            this.innerHTML = null == t ? "" : t;
                          };
                        }
                      : function (e) {
                          return function () {
                            this.innerHTML = e;
                          };
                        })(e)
              )
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(P);
        },
        lower: function () {
          return this.each(R);
        },
        append: function (e) {
          var t = "function" == typeof e ? e : (0, A.Z)(e);
          return this.select(function () {
            return this.appendChild(t.apply(this, arguments));
          });
        },
        insert: function (e, t) {
          var n = "function" == typeof e ? e : (0, A.Z)(e),
            o = null == t ? x : "function" == typeof t ? t : (0, r.Z)(t);
          return this.select(function () {
            return this.insertBefore(
              n.apply(this, arguments),
              o.apply(this, arguments) || null
            );
          });
        },
        remove: function () {
          return this.each(I);
        },
        clone: function (e) {
          return this.select(e ? T : N);
        },
        datum: function (e) {
          return arguments.length
            ? this.property("__data__", e)
            : this.node().__data__;
        },
        on: function (e, t, n) {
          var r,
            o,
            i = (e + "")
              .trim()
              .split(/^|\s+/)
              .map(function (e) {
                var t = "",
                  n = e.indexOf(".");
                return (
                  n >= 0 && ((t = e.slice(n + 1)), (e = e.slice(0, n))),
                  { type: e, name: t }
                );
              }),
            a = i.length;
          if (arguments.length < 2) {
            var u = this.node().__on;
            if (u) {
              for (var l, s = 0, c = u.length; s < c; ++s)
                for (r = 0, l = u[s]; r < a; ++r)
                  if ((o = i[r]).type === l.type && o.name === l.name)
                    return l.value;
            }
            return;
          }
          for (r = 0, u = t ? O : k; r < a; ++r) this.each(u(i[r], t, n));
          return this;
        },
        dispatch: function (e, t) {
          return this.each(
            ("function" == typeof t
              ? function (e, t) {
                  return function () {
                    return L(this, e, t.apply(this, arguments));
                  };
                }
              : function (e, t) {
                  return function () {
                    return L(this, e, t);
                  };
                })(e, t)
          );
        },
        [Symbol.iterator]: function* () {
          for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
            for (var r, o = e[t], i = 0, a = o.length; i < a; ++i)
              (r = o[i]) && (yield r);
        },
      };
      var D = B;
    },
    12866: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return i;
        },
        Z: function () {
          return o;
        },
      });
      var r = n(3776);
      function o(e, t, n) {
        return arguments.length > 1
          ? this.each(
              (null == t
                ? function (e) {
                    return function () {
                      this.style.removeProperty(e);
                    };
                  }
                : "function" == typeof t
                ? function (e, t, n) {
                    return function () {
                      var r = t.apply(this, arguments);
                      null == r
                        ? this.style.removeProperty(e)
                        : this.style.setProperty(e, r, n);
                    };
                  }
                : function (e, t, n) {
                    return function () {
                      this.style.setProperty(e, t, n);
                    };
                  })(e, t, null == n ? "" : n)
            )
          : i(this.node(), e);
      }
      function i(e, t) {
        return (
          e.style.getPropertyValue(t) ||
          (0, r.Z)(e).getComputedStyle(e, null).getPropertyValue(t)
        );
      }
    },
    81059: function (e, t, n) {
      "use strict";
      function r() {}
      function o(e) {
        return null == e
          ? r
          : function () {
              return this.querySelector(e);
            };
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    87678: function (e, t, n) {
      "use strict";
      function r() {
        return [];
      }
      function o(e) {
        return null == e
          ? r
          : function () {
              return this.querySelectorAll(e);
            };
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    72119: function (e, t, n) {
      "use strict";
      function r(e) {
        let t;
        for (; (t = e.sourceEvent); ) e = t;
        return e;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    3776: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (e.ownerDocument && e.ownerDocument.defaultView) ||
          (e.document && e) ||
          e.defaultView
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    50477: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          zoom: function () {
            return eQ;
          },
          zoomIdentity: function () {
            return ez;
          },
          zoomTransform: function () {
            return eU;
          },
        });
      var r,
        o = { value: () => {} };
      function i() {
        for (var e, t = 0, n = arguments.length, r = {}; t < n; ++t) {
          if (!(e = arguments[t] + "") || e in r || /[\s.]/.test(e))
            throw Error("illegal type: " + e);
          r[e] = [];
        }
        return new a(r);
      }
      function a(e) {
        this._ = e;
      }
      function u(e, t, n) {
        for (var r = 0, i = e.length; r < i; ++r)
          if (e[r].name === t) {
            (e[r] = o), (e = e.slice(0, r).concat(e.slice(r + 1)));
            break;
          }
        return null != n && e.push({ name: t, value: n }), e;
      }
      a.prototype = i.prototype = {
        constructor: a,
        on: function (e, t) {
          var n,
            r = this._,
            o = (e + "")
              .trim()
              .split(/^|\s+/)
              .map(function (e) {
                var t = "",
                  n = e.indexOf(".");
                if (
                  (n >= 0 && ((t = e.slice(n + 1)), (e = e.slice(0, n))),
                  e && !r.hasOwnProperty(e))
                )
                  throw Error("unknown type: " + e);
                return { type: e, name: t };
              }),
            i = -1,
            a = o.length;
          if (arguments.length < 2) {
            for (; ++i < a; )
              if (
                (n = (e = o[i]).type) &&
                (n = (function (e, t) {
                  for (var n, r = 0, o = e.length; r < o; ++r)
                    if ((n = e[r]).name === t) return n.value;
                })(r[n], e.name))
              )
                return n;
            return;
          }
          if (null != t && "function" != typeof t)
            throw Error("invalid callback: " + t);
          for (; ++i < a; )
            if ((n = (e = o[i]).type)) r[n] = u(r[n], e.name, t);
            else if (null == t) for (n in r) r[n] = u(r[n], e.name, null);
          return this;
        },
        copy: function () {
          var e = {},
            t = this._;
          for (var n in t) e[n] = t[n].slice();
          return new a(e);
        },
        call: function (e, t) {
          if ((n = arguments.length - 2) > 0)
            for (var n, r, o = Array(n), i = 0; i < n; ++i)
              o[i] = arguments[i + 2];
          if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
          for (r = this._[e], i = 0, n = r.length; i < n; ++i)
            r[i].value.apply(t, o);
        },
        apply: function (e, t, n) {
          if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
          for (var r = this._[e], o = 0, i = r.length; o < i; ++o)
            r[o].value.apply(t, n);
        },
      };
      var l = n(93716);
      function s(e) {
        e.preventDefault(), e.stopImmediatePropagation();
      }
      function c(e) {
        return ((e = Math.exp(e)) + 1 / e) / 2;
      }
      var f,
        h,
        d = (function e(t, n, r) {
          function o(e, o) {
            var i,
              a,
              u = e[0],
              l = e[1],
              s = e[2],
              f = o[0],
              h = o[1],
              d = o[2],
              p = f - u,
              g = h - l,
              m = p * p + g * g;
            if (m < 1e-12)
              (a = Math.log(d / s) / t),
                (i = function (e) {
                  return [u + e * p, l + e * g, s * Math.exp(t * e * a)];
                });
            else {
              var v = Math.sqrt(m),
                y = (d * d - s * s + r * m) / (2 * s * n * v),
                b = (d * d - s * s - r * m) / (2 * d * n * v),
                _ = Math.log(Math.sqrt(y * y + 1) - y);
              (a = (Math.log(Math.sqrt(b * b + 1) - b) - _) / t),
                (i = function (e) {
                  var r,
                    o,
                    i = e * a,
                    f = c(_),
                    h =
                      (s / (n * v)) *
                      ((((r = Math.exp(2 * (r = t * i + _))) - 1) / (r + 1)) *
                        f -
                        ((o = Math.exp((o = _))) - 1 / o) / 2);
                  return [u + h * p, l + h * g, (s * f) / c(t * i + _)];
                });
            }
            return (i.duration = (1e3 * a * t) / Math.SQRT2), i;
          }
          return (
            (o.rho = function (t) {
              var n = Math.max(0.001, +t),
                r = n * n;
              return e(n, r, r * r);
            }),
            o
          );
        })(Math.SQRT2, 2, 4),
        p = n(96110),
        g = n(72042),
        m = 0,
        v = 0,
        y = 0,
        b = 0,
        _ = 0,
        w = 0,
        E =
          "object" == typeof performance && performance.now
            ? performance
            : Date,
        S =
          "object" == typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (e) {
                setTimeout(e, 17);
              };
      function C() {
        return _ || (S(M), (_ = E.now() + w));
      }
      function M() {
        _ = 0;
      }
      function P() {
        this._call = this._time = this._next = null;
      }
      function R(e, t, n) {
        var r = new P();
        return r.restart(e, t, n), r;
      }
      function A() {
        (_ = (b = E.now()) + w), (m = v = 0);
        try {
          !(function () {
            C(), ++m;
            for (var e, t = f; t; )
              (e = _ - t._time) >= 0 && t._call.call(null, e), (t = t._next);
            --m;
          })();
        } finally {
          (m = 0),
            (function () {
              for (var e, t, n = f, r = 1 / 0; n; )
                n._call
                  ? (r > n._time && (r = n._time), (e = n), (n = n._next))
                  : ((t = n._next),
                    (n._next = null),
                    (n = e ? (e._next = t) : (f = t)));
              (h = e), I(r);
            })(),
            (_ = 0);
        }
      }
      function x() {
        var e = E.now(),
          t = e - b;
        t > 1e3 && ((w -= t), (b = e));
      }
      function I(e) {
        !m &&
          (v && (v = clearTimeout(v)),
          e - _ > 24
            ? (e < 1 / 0 && (v = setTimeout(A, e - E.now() - w)),
              y && (y = clearInterval(y)))
            : (y || ((b = E.now()), (y = setInterval(x, 1e3))), (m = 1), S(A)));
      }
      function N(e, t, n) {
        var r = new P();
        return (
          (t = null == t ? 0 : +t),
          r.restart(
            (n) => {
              r.stop(), e(n + t);
            },
            t,
            n
          ),
          r
        );
      }
      P.prototype = R.prototype = {
        constructor: P,
        restart: function (e, t, n) {
          if ("function" != typeof e)
            throw TypeError("callback is not a function");
          (n = (null == n ? C() : +n) + (null == t ? 0 : +t)),
            this._next ||
              h === this ||
              (h ? (h._next = this) : (f = this), (h = this)),
            (this._call = e),
            (this._time = n),
            I();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), I());
        },
      };
      var T = i("start", "end", "cancel", "interrupt"),
        k = [];
      function O(e, t, n, r, o, i) {
        var a = e.__transition;
        if (a) {
          if (n in a) return;
        } else e.__transition = {};
        !(function (e, t, n) {
          var r,
            o = e.__transition;
          function i(l) {
            var s, c, f, h;
            if (1 !== n.state) return u();
            for (s in o)
              if ((h = o[s]).name === n.name) {
                if (3 === h.state) return N(i);
                4 === h.state
                  ? ((h.state = 6),
                    h.timer.stop(),
                    h.on.call("interrupt", e, e.__data__, h.index, h.group),
                    delete o[s])
                  : +s < t &&
                    ((h.state = 6),
                    h.timer.stop(),
                    h.on.call("cancel", e, e.__data__, h.index, h.group),
                    delete o[s]);
              }
            if (
              (N(function () {
                3 === n.state &&
                  ((n.state = 4), n.timer.restart(a, n.delay, n.time), a(l));
              }),
              (n.state = 2),
              n.on.call("start", e, e.__data__, n.index, n.group),
              2 === n.state)
            ) {
              for (
                s = 0, n.state = 3, r = Array((f = n.tween.length)), c = -1;
                s < f;
                ++s
              )
                (h = n.tween[s].value.call(e, e.__data__, n.index, n.group)) &&
                  (r[++c] = h);
              r.length = c + 1;
            }
          }
          function a(t) {
            for (
              var o =
                  t < n.duration
                    ? n.ease.call(null, t / n.duration)
                    : (n.timer.restart(u), (n.state = 5), 1),
                i = -1,
                a = r.length;
              ++i < a;

            )
              r[i].call(e, o);
            5 === n.state &&
              (n.on.call("end", e, e.__data__, n.index, n.group), u());
          }
          function u() {
            for (var r in ((n.state = 6), n.timer.stop(), delete o[t], o))
              return;
            delete e.__transition;
          }
          (o[t] = n),
            (n.timer = R(
              function (e) {
                (n.state = 1),
                  n.timer.restart(i, n.delay, n.time),
                  n.delay <= e && i(e - n.delay);
              },
              0,
              n.time
            ));
        })(e, n, {
          name: t,
          index: r,
          group: o,
          on: T,
          tween: k,
          time: i.time,
          delay: i.delay,
          duration: i.duration,
          ease: i.ease,
          timer: null,
          state: 0,
        });
      }
      function F(e, t) {
        var n = H(e, t);
        if (n.state > 0) throw Error("too late; already scheduled");
        return n;
      }
      function L(e, t) {
        var n = H(e, t);
        if (n.state > 3) throw Error("too late; already running");
        return n;
      }
      function H(e, t) {
        var n = e.__transition;
        if (!n || !(n = n[t])) throw Error("transition not found");
        return n;
      }
      function j(e, t) {
        var n,
          r,
          o,
          i = e.__transition,
          a = !0;
        if (i) {
          for (o in ((t = null == t ? null : t + ""), i)) {
            if ((n = i[o]).name !== t) {
              a = !1;
              continue;
            }
            (r = n.state > 2 && n.state < 5),
              (n.state = 6),
              n.timer.stop(),
              n.on.call(
                r ? "interrupt" : "cancel",
                e,
                e.__data__,
                n.index,
                n.group
              ),
              delete i[o];
          }
          a && delete e.__transition;
        }
      }
      function B(e, t) {
        return (
          (e = +e),
          (t = +t),
          function (n) {
            return e * (1 - n) + t * n;
          }
        );
      }
      var D = 180 / Math.PI,
        G = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        };
      function V(e, t, n, r, o, i) {
        var a, u, l;
        return (
          (a = Math.sqrt(e * e + t * t)) && ((e /= a), (t /= a)),
          (l = e * n + t * r) && ((n -= e * l), (r -= t * l)),
          (u = Math.sqrt(n * n + r * r)) && ((n /= u), (r /= u), (l /= u)),
          e * r < t * n && ((e = -e), (t = -t), (l = -l), (a = -a)),
          {
            translateX: o,
            translateY: i,
            rotate: Math.atan2(t, e) * D,
            skewX: Math.atan(l) * D,
            scaleX: a,
            scaleY: u,
          }
        );
      }
      function z(e, t, n, r) {
        function o(e) {
          return e.length ? e.pop() + " " : "";
        }
        return function (i, a) {
          var u,
            l,
            s,
            c,
            f = [],
            h = [];
          return (
            (i = e(i)),
            (a = e(a)),
            !(function (e, r, o, i, a, u) {
              if (e !== o || r !== i) {
                var l = a.push("translate(", null, t, null, n);
                u.push({ i: l - 4, x: B(e, o) }, { i: l - 2, x: B(r, i) });
              } else (o || i) && a.push("translate(" + o + t + i + n);
            })(i.translateX, i.translateY, a.translateX, a.translateY, f, h),
            (u = i.rotate) !== (l = a.rotate)
              ? (u - l > 180 ? (l += 360) : l - u > 180 && (u += 360),
                h.push({
                  i: f.push(o(f) + "rotate(", null, r) - 2,
                  x: B(u, l),
                }))
              : l && f.push(o(f) + "rotate(" + l + r),
            (s = i.skewX) !== (c = a.skewX)
              ? h.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: B(s, c) })
              : c && f.push(o(f) + "skewX(" + c + r),
            !(function (e, t, n, r, i, a) {
              if (e !== n || t !== r) {
                var u = i.push(o(i) + "scale(", null, ",", null, ")");
                a.push({ i: u - 4, x: B(e, n) }, { i: u - 2, x: B(t, r) });
              } else
                (1 !== n || 1 !== r) &&
                  i.push(o(i) + "scale(" + n + "," + r + ")");
            })(i.scaleX, i.scaleY, a.scaleX, a.scaleY, f, h),
            (i = a = null),
            function (e) {
              for (var t, n = -1, r = h.length; ++n < r; )
                f[(t = h[n]).i] = t.x(e);
              return f.join("");
            }
          );
        };
      }
      var U = z(
          function (e) {
            let t = new (
              "function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
            )(e + "");
            return t.isIdentity ? G : V(t.a, t.b, t.c, t.d, t.e, t.f);
          },
          "px, ",
          "px)",
          "deg)"
        ),
        Z = z(
          function (e) {
            return null == e
              ? G
              : (r ||
                  (r = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "g"
                  )),
                r.setAttribute("transform", e),
                (e = r.transform.baseVal.consolidate()))
              ? V((e = e.matrix).a, e.b, e.c, e.d, e.e, e.f)
              : G;
          },
          ", ",
          ")",
          ")"
        ),
        q = n(67824);
      function X(e, t, n) {
        var r = e._id;
        return (
          e.each(function () {
            var e = L(this, r);
            (e.value || (e.value = {}))[t] = n.apply(this, arguments);
          }),
          function (e) {
            return H(e, r).value[t];
          }
        );
      }
      function K(e, t, n) {
        (e.prototype = t.prototype = n), (n.constructor = e);
      }
      function Y(e, t) {
        var n = Object.create(e.prototype);
        for (var r in t) n[r] = t[r];
        return n;
      }
      function $() {}
      var W = "\\s*([+-]?\\d+)\\s*",
        J = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        Q = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        ee = /^#([0-9a-f]{3,8})$/,
        et = RegExp("^rgb\\(" + [W, W, W] + "\\)$"),
        en = RegExp("^rgb\\(" + [Q, Q, Q] + "\\)$"),
        er = RegExp("^rgba\\(" + [W, W, W, J] + "\\)$"),
        eo = RegExp("^rgba\\(" + [Q, Q, Q, J] + "\\)$"),
        ei = RegExp("^hsl\\(" + [J, Q, Q] + "\\)$"),
        ea = RegExp("^hsla\\(" + [J, Q, Q, J] + "\\)$"),
        eu = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function el() {
        return this.rgb().formatHex();
      }
      function es() {
        return this.rgb().formatRgb();
      }
      function ec(e) {
        var t, n;
        return (
          (e = (e + "").trim().toLowerCase()),
          (t = ee.exec(e))
            ? ((n = t[1].length),
              (t = parseInt(t[1], 16)),
              6 === n
                ? ef(t)
                : 3 === n
                ? new ep(
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (240 & t),
                    ((15 & t) << 4) | (15 & t),
                    1
                  )
                : 8 === n
                ? eh(
                    (t >> 24) & 255,
                    (t >> 16) & 255,
                    (t >> 8) & 255,
                    (255 & t) / 255
                  )
                : 4 === n
                ? eh(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (240 & t),
                    (((15 & t) << 4) | (15 & t)) / 255
                  )
                : null)
            : (t = et.exec(e))
            ? new ep(t[1], t[2], t[3], 1)
            : (t = en.exec(e))
            ? new ep(
                (255 * t[1]) / 100,
                (255 * t[2]) / 100,
                (255 * t[3]) / 100,
                1
              )
            : (t = er.exec(e))
            ? eh(t[1], t[2], t[3], t[4])
            : (t = eo.exec(e))
            ? eh(
                (255 * t[1]) / 100,
                (255 * t[2]) / 100,
                (255 * t[3]) / 100,
                t[4]
              )
            : (t = ei.exec(e))
            ? ey(t[1], t[2] / 100, t[3] / 100, 1)
            : (t = ea.exec(e))
            ? ey(t[1], t[2] / 100, t[3] / 100, t[4])
            : eu.hasOwnProperty(e)
            ? ef(eu[e])
            : "transparent" === e
            ? new ep(NaN, NaN, NaN, 0)
            : null
        );
      }
      function ef(e) {
        return new ep((e >> 16) & 255, (e >> 8) & 255, 255 & e, 1);
      }
      function eh(e, t, n, r) {
        return r <= 0 && (e = t = n = NaN), new ep(e, t, n, r);
      }
      function ed(e, t, n, r) {
        var o;
        return 1 == arguments.length
          ? ((o = e) instanceof $ || (o = ec(o)), o)
            ? new ep((o = o.rgb()).r, o.g, o.b, o.opacity)
            : new ep()
          : new ep(e, t, n, null == r ? 1 : r);
      }
      function ep(e, t, n, r) {
        (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
      }
      function eg() {
        return "#" + ev(this.r) + ev(this.g) + ev(this.b);
      }
      function em() {
        var e = this.opacity;
        return (
          (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)))
            ? "rgb("
            : "rgba(") +
          Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
          ", " +
          Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
          ", " +
          Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
          (1 === e ? ")" : ", " + e + ")")
        );
      }
      function ev(e) {
        return (
          ((e = Math.max(0, Math.min(255, Math.round(e) || 0))) < 16
            ? "0"
            : "") + e.toString(16)
        );
      }
      function ey(e, t, n, r) {
        return (
          r <= 0
            ? (e = t = n = NaN)
            : n <= 0 || n >= 1
            ? (e = t = NaN)
            : t <= 0 && (e = NaN),
          new e_(e, t, n, r)
        );
      }
      function eb(e) {
        if (e instanceof e_) return new e_(e.h, e.s, e.l, e.opacity);
        if ((e instanceof $ || (e = ec(e)), !e)) return new e_();
        if (e instanceof e_) return e;
        var t = (e = e.rgb()).r / 255,
          n = e.g / 255,
          r = e.b / 255,
          o = Math.min(t, n, r),
          i = Math.max(t, n, r),
          a = NaN,
          u = i - o,
          l = (i + o) / 2;
        return (
          u
            ? ((a =
                t === i
                  ? (n - r) / u + (n < r) * 6
                  : n === i
                  ? (r - t) / u + 2
                  : (t - n) / u + 4),
              (u /= l < 0.5 ? i + o : 2 - i - o),
              (a *= 60))
            : (u = l > 0 && l < 1 ? 0 : a),
          new e_(a, u, l, e.opacity)
        );
      }
      function e_(e, t, n, r) {
        (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
      }
      function ew(e, t, n) {
        return (
          (e < 60
            ? t + ((n - t) * e) / 60
            : e < 180
            ? n
            : e < 240
            ? t + ((n - t) * (240 - e)) / 60
            : t) * 255
        );
      }
      function eE(e, t, n, r, o) {
        var i = e * e,
          a = i * e;
        return (
          ((1 - 3 * e + 3 * i - a) * t +
            (4 - 6 * i + 3 * a) * n +
            (1 + 3 * e + 3 * i - 3 * a) * r +
            a * o) /
          6
        );
      }
      K($, ec, {
        copy: function (e) {
          return Object.assign(new this.constructor(), this, e);
        },
        displayable: function () {
          return this.rgb().displayable();
        },
        hex: el,
        formatHex: el,
        formatHsl: function () {
          return eb(this).formatHsl();
        },
        formatRgb: es,
        toString: es,
      }),
        K(
          ep,
          ed,
          Y($, {
            brighter: function (e) {
              return (
                (e =
                  null == e
                    ? 1.4285714285714286
                    : Math.pow(1.4285714285714286, e)),
                new ep(this.r * e, this.g * e, this.b * e, this.opacity)
              );
            },
            darker: function (e) {
              return (
                (e = null == e ? 0.7 : Math.pow(0.7, e)),
                new ep(this.r * e, this.g * e, this.b * e, this.opacity)
              );
            },
            rgb: function () {
              return this;
            },
            displayable: function () {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: eg,
            formatHex: eg,
            formatRgb: em,
            toString: em,
          })
        ),
        K(
          e_,
          function (e, t, n, r) {
            return 1 == arguments.length
              ? eb(e)
              : new e_(e, t, n, null == r ? 1 : r);
          },
          Y($, {
            brighter: function (e) {
              return (
                (e =
                  null == e
                    ? 1.4285714285714286
                    : Math.pow(1.4285714285714286, e)),
                new e_(this.h, this.s, this.l * e, this.opacity)
              );
            },
            darker: function (e) {
              return (
                (e = null == e ? 0.7 : Math.pow(0.7, e)),
                new e_(this.h, this.s, this.l * e, this.opacity)
              );
            },
            rgb: function () {
              var e = (this.h % 360) + (this.h < 0) * 360,
                t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < 0.5 ? n : 1 - n) * t,
                o = 2 * n - r;
              return new ep(
                ew(e >= 240 ? e - 240 : e + 120, o, r),
                ew(e, o, r),
                ew(e < 120 ? e + 240 : e - 120, o, r),
                this.opacity
              );
            },
            displayable: function () {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl: function () {
              var e = this.opacity;
              return (
                (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)))
                  ? "hsl("
                  : "hsla(") +
                (this.h || 0) +
                ", " +
                100 * (this.s || 0) +
                "%, " +
                100 * (this.l || 0) +
                "%" +
                (1 === e ? ")" : ", " + e + ")")
              );
            },
          })
        );
      var eS = (e) => () => e;
      function eC(e, t) {
        var n = t - e;
        return n
          ? function (t) {
              return e + t * n;
            }
          : eS(isNaN(e) ? t : e);
      }
      var eM = (function e(t) {
        var n,
          r =
            1 == (n = +(n = t))
              ? eC
              : function (e, t) {
                  var r, o, i;
                  return t - e
                    ? ((r = e),
                      (o = t),
                      (r = Math.pow(r, (i = n))),
                      (o = Math.pow(o, i) - r),
                      (i = 1 / i),
                      function (e) {
                        return Math.pow(r + e * o, i);
                      })
                    : eS(isNaN(e) ? t : e);
                };
        function o(e, t) {
          var n = r((e = ed(e)).r, (t = ed(t)).r),
            o = r(e.g, t.g),
            i = r(e.b, t.b),
            a = eC(e.opacity, t.opacity);
          return function (t) {
            return (
              (e.r = n(t)),
              (e.g = o(t)),
              (e.b = i(t)),
              (e.opacity = a(t)),
              e + ""
            );
          };
        }
        return (o.gamma = e), o;
      })(1);
      function eP(e) {
        return function (t) {
          var n,
            r,
            o = t.length,
            i = Array(o),
            a = Array(o),
            u = Array(o);
          for (n = 0; n < o; ++n)
            (r = ed(t[n])),
              (i[n] = r.r || 0),
              (a[n] = r.g || 0),
              (u[n] = r.b || 0);
          return (
            (i = e(i)),
            (a = e(a)),
            (u = e(u)),
            (r.opacity = 1),
            function (e) {
              return (r.r = i(e)), (r.g = a(e)), (r.b = u(e)), r + "";
            }
          );
        };
      }
      eP(function (e) {
        var t = e.length - 1;
        return function (n) {
          var r =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), t - 1) : Math.floor(n * t),
            o = e[r],
            i = e[r + 1],
            a = r > 0 ? e[r - 1] : 2 * o - i,
            u = r < t - 1 ? e[r + 2] : 2 * i - o;
          return eE((n - r / t) * t, a, o, i, u);
        };
      }),
        eP(function (e) {
          var t = e.length;
          return function (n) {
            var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t),
              o = e[(r + t - 1) % t],
              i = e[r % t],
              a = e[(r + 1) % t],
              u = e[(r + 2) % t];
            return eE((n - r / t) * t, o, i, a, u);
          };
        });
      var eR = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        eA = RegExp(eR.source, "g");
      function ex(e, t) {
        var n;
        return (
          "number" == typeof t
            ? B
            : t instanceof ec
            ? eM
            : (n = ec(t))
            ? ((t = n), eM)
            : function (e, t) {
                var n,
                  r,
                  o,
                  i,
                  a,
                  u = (eR.lastIndex = eA.lastIndex = 0),
                  l = -1,
                  s = [],
                  c = [];
                for (e += "", t += ""; (o = eR.exec(e)) && (i = eA.exec(t)); )
                  (a = i.index) > u &&
                    ((a = t.slice(u, a)), s[l] ? (s[l] += a) : (s[++l] = a)),
                    (o = o[0]) === (i = i[0])
                      ? s[l]
                        ? (s[l] += i)
                        : (s[++l] = i)
                      : ((s[++l] = null), c.push({ i: l, x: B(o, i) })),
                    (u = eA.lastIndex);
                return (
                  u < t.length &&
                    ((a = t.slice(u)), s[l] ? (s[l] += a) : (s[++l] = a)),
                  s.length < 2
                    ? c[0]
                      ? ((n = c[0].x),
                        function (e) {
                          return n(e) + "";
                        })
                      : ((r = t),
                        function () {
                          return r;
                        })
                    : ((t = c.length),
                      function (e) {
                        for (var n, r = 0; r < t; ++r) s[(n = c[r]).i] = n.x(e);
                        return s.join("");
                      })
                );
              }
        )(e, t);
      }
      var eI = n(54775),
        eN = n(81059),
        eT = n(87678),
        ek = g.ZP.prototype.constructor,
        eO = n(12866);
      function eF(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      var eL = 0;
      function eH(e, t, n, r) {
        (this._groups = e),
          (this._parents = t),
          (this._name = n),
          (this._id = r);
      }
      var ej = g.ZP.prototype;
      eH.prototype = function (e) {
        return (0, g.ZP)().transition(e);
      }.prototype = {
        constructor: eH,
        select: function (e) {
          var t = this._name,
            n = this._id;
          "function" != typeof e && (e = (0, eN.Z)(e));
          for (
            var r = this._groups, o = r.length, i = Array(o), a = 0;
            a < o;
            ++a
          )
            for (
              var u, l, s = r[a], c = s.length, f = (i[a] = Array(c)), h = 0;
              h < c;
              ++h
            )
              (u = s[h]) &&
                (l = e.call(u, u.__data__, h, s)) &&
                ("__data__" in u && (l.__data__ = u.__data__),
                (f[h] = l),
                O(f[h], t, n, h, f, H(u, n)));
          return new eH(i, this._parents, t, n);
        },
        selectAll: function (e) {
          var t = this._name,
            n = this._id;
          "function" != typeof e && (e = (0, eT.Z)(e));
          for (
            var r = this._groups, o = r.length, i = [], a = [], u = 0;
            u < o;
            ++u
          )
            for (var l, s = r[u], c = s.length, f = 0; f < c; ++f)
              if ((l = s[f])) {
                for (
                  var h,
                    d = e.call(l, l.__data__, f, s),
                    p = H(l, n),
                    g = 0,
                    m = d.length;
                  g < m;
                  ++g
                )
                  (h = d[g]) && O(h, t, n, g, d, p);
                i.push(d), a.push(l);
              }
          return new eH(i, a, t, n);
        },
        filter: function (e) {
          "function" != typeof e && (e = (0, eI.Z)(e));
          for (
            var t = this._groups, n = t.length, r = Array(n), o = 0;
            o < n;
            ++o
          )
            for (
              var i, a = t[o], u = a.length, l = (r[o] = []), s = 0;
              s < u;
              ++s
            )
              (i = a[s]) && e.call(i, i.__data__, s, a) && l.push(i);
          return new eH(r, this._parents, this._name, this._id);
        },
        merge: function (e) {
          if (e._id !== this._id) throw Error();
          for (
            var t = this._groups,
              n = e._groups,
              r = t.length,
              o = n.length,
              i = Math.min(r, o),
              a = Array(r),
              u = 0;
            u < i;
            ++u
          )
            for (
              var l,
                s = t[u],
                c = n[u],
                f = s.length,
                h = (a[u] = Array(f)),
                d = 0;
              d < f;
              ++d
            )
              (l = s[d] || c[d]) && (h[d] = l);
          for (; u < r; ++u) a[u] = t[u];
          return new eH(a, this._parents, this._name, this._id);
        },
        selection: function () {
          return new ek(this._groups, this._parents);
        },
        transition: function () {
          for (
            var e = this._name,
              t = this._id,
              n = ++eL,
              r = this._groups,
              o = r.length,
              i = 0;
            i < o;
            ++i
          )
            for (var a, u = r[i], l = u.length, s = 0; s < l; ++s)
              if ((a = u[s])) {
                var c = H(a, t);
                O(a, e, n, s, u, {
                  time: c.time + c.delay + c.duration,
                  delay: 0,
                  duration: c.duration,
                  ease: c.ease,
                });
              }
          return new eH(r, this._parents, e, n);
        },
        call: ej.call,
        nodes: ej.nodes,
        node: ej.node,
        size: ej.size,
        empty: ej.empty,
        each: ej.each,
        on: function (e, t) {
          var n,
            r,
            o,
            i = this._id;
          return arguments.length < 2
            ? H(this.node(), i).on.on(e)
            : this.each(
                ((o = (e + "")
                  .trim()
                  .split(/^|\s+/)
                  .every(function (e) {
                    var t = e.indexOf(".");
                    return t >= 0 && (e = e.slice(0, t)), !e || "start" === e;
                  })
                  ? F
                  : L),
                function () {
                  var a = o(this, i),
                    u = a.on;
                  u !== n && (r = (n = u).copy()).on(e, t), (a.on = r);
                })
              );
        },
        attr: function (e, t) {
          var n = (0, q.Z)(e),
            r = "transform" === n ? Z : ex;
          return this.attrTween(
            e,
            "function" == typeof t
              ? (n.local
                  ? function (e, t, n) {
                      var r, o, i;
                      return function () {
                        var a,
                          u,
                          l = n(this);
                        return null == l
                          ? void this.removeAttributeNS(e.space, e.local)
                          : (a = this.getAttributeNS(e.space, e.local)) ===
                            (u = l + "")
                          ? null
                          : a === r && u === o
                          ? i
                          : ((o = u), (i = t((r = a), l)));
                      };
                    }
                  : function (e, t, n) {
                      var r, o, i;
                      return function () {
                        var a,
                          u,
                          l = n(this);
                        return null == l
                          ? void this.removeAttribute(e)
                          : (a = this.getAttribute(e)) === (u = l + "")
                          ? null
                          : a === r && u === o
                          ? i
                          : ((o = u), (i = t((r = a), l)));
                      };
                    })(n, r, X(this, "attr." + e, t))
              : null == t
              ? (n.local
                  ? function (e) {
                      return function () {
                        this.removeAttributeNS(e.space, e.local);
                      };
                    }
                  : function (e) {
                      return function () {
                        this.removeAttribute(e);
                      };
                    })(n)
              : (n.local
                  ? function (e, t, n) {
                      var r,
                        o,
                        i = n + "";
                      return function () {
                        var a = this.getAttributeNS(e.space, e.local);
                        return a === i
                          ? null
                          : a === r
                          ? o
                          : (o = t((r = a), n));
                      };
                    }
                  : function (e, t, n) {
                      var r,
                        o,
                        i = n + "";
                      return function () {
                        var a = this.getAttribute(e);
                        return a === i
                          ? null
                          : a === r
                          ? o
                          : (o = t((r = a), n));
                      };
                    })(n, r, t)
          );
        },
        attrTween: function (e, t) {
          var n = "attr." + e;
          if (arguments.length < 2) return (n = this.tween(n)) && n._value;
          if (null == t) return this.tween(n, null);
          if ("function" != typeof t) throw Error();
          var r = (0, q.Z)(e);
          return this.tween(
            n,
            (r.local
              ? function (e, t) {
                  var n, r;
                  function o() {
                    var o = t.apply(this, arguments);
                    return (
                      o !== r &&
                        (n =
                          (r = o) &&
                          function (t) {
                            this.setAttributeNS(
                              e.space,
                              e.local,
                              o.call(this, t)
                            );
                          }),
                      n
                    );
                  }
                  return (o._value = t), o;
                }
              : function (e, t) {
                  var n, r;
                  function o() {
                    var o = t.apply(this, arguments);
                    return (
                      o !== r &&
                        (n =
                          (r = o) &&
                          function (t) {
                            this.setAttribute(e, o.call(this, t));
                          }),
                      n
                    );
                  }
                  return (o._value = t), o;
                })(r, t)
          );
        },
        style: function (e, t, n) {
          var r,
            o,
            i,
            a,
            u,
            l,
            s,
            c,
            f,
            h,
            d,
            p,
            g,
            m,
            v,
            y,
            b,
            _,
            w,
            E,
            S,
            C = "transform" == (e += "") ? U : ex;
          return null == t
            ? this.styleTween(
                e,
                ((r = e),
                function () {
                  var e = (0, eO.S)(this, r),
                    t = (this.style.removeProperty(r), (0, eO.S)(this, r));
                  return e === t
                    ? null
                    : e === o && t === i
                    ? a
                    : (a = C((o = e), (i = t)));
                })
              ).on("end.style." + e, eF(e))
            : "function" == typeof t
            ? this.styleTween(
                e,
                ((u = e),
                (l = X(this, "style." + e, t)),
                function () {
                  var e = (0, eO.S)(this, u),
                    t = l(this),
                    n = t + "";
                  return (
                    null == t &&
                      (this.style.removeProperty(u),
                      (n = t = (0, eO.S)(this, u))),
                    e === n
                      ? null
                      : e === s && n === c
                      ? f
                      : ((c = n), (f = C((s = e), t)))
                  );
                })
              ).each(
                ((h = this._id),
                (b = "end." + (y = "style." + (d = e))),
                function () {
                  var e = L(this, h),
                    t = e.on,
                    n = null == e.value[y] ? v || (v = eF(d)) : void 0;
                  (t !== p || m !== n) && (g = (p = t).copy()).on(b, (m = n)),
                    (e.on = g);
                })
              )
            : this.styleTween(
                e,
                ((_ = e),
                (S = t + ""),
                function () {
                  var e = (0, eO.S)(this, _);
                  return e === S ? null : e === w ? E : (E = C((w = e), t));
                }),
                n
              ).on("end.style." + e, null);
        },
        styleTween: function (e, t, n) {
          var r = "style." + (e += "");
          if (arguments.length < 2) return (r = this.tween(r)) && r._value;
          if (null == t) return this.tween(r, null);
          if ("function" != typeof t) throw Error();
          return this.tween(
            r,
            (function (e, t, n) {
              var r, o;
              function i() {
                var i = t.apply(this, arguments);
                return (
                  i !== o &&
                    (r =
                      (o = i) &&
                      function (t) {
                        this.style.setProperty(e, i.call(this, t), n);
                      }),
                  r
                );
              }
              return (i._value = t), i;
            })(e, t, null == n ? "" : n)
          );
        },
        text: function (e) {
          var t, n;
          return this.tween(
            "text",
            "function" == typeof e
              ? ((t = X(this, "text", e)),
                function () {
                  var e = t(this);
                  this.textContent = null == e ? "" : e;
                })
              : ((n = null == e ? "" : e + ""),
                function () {
                  this.textContent = n;
                })
          );
        },
        textTween: function (e) {
          var t = "text";
          if (arguments.length < 1) return (t = this.tween(t)) && t._value;
          if (null == e) return this.tween(t, null);
          if ("function" != typeof e) throw Error();
          return this.tween(
            t,
            (function (e) {
              var t, n;
              function r() {
                var r = e.apply(this, arguments);
                return (
                  r !== n &&
                    (t =
                      (n = r) &&
                      function (e) {
                        this.textContent = r.call(this, e);
                      }),
                  t
                );
              }
              return (r._value = e), r;
            })(e)
          );
        },
        remove: function () {
          var e;
          return this.on(
            "end.remove",
            ((e = this._id),
            function () {
              var t = this.parentNode;
              for (var n in this.__transition) if (+n !== e) return;
              t && t.removeChild(this);
            })
          );
        },
        tween: function (e, t) {
          var n = this._id;
          if (((e += ""), arguments.length < 2)) {
            for (
              var r, o = H(this.node(), n).tween, i = 0, a = o.length;
              i < a;
              ++i
            )
              if ((r = o[i]).name === e) return r.value;
            return null;
          }
          return this.each(
            (null == t
              ? function (e, t) {
                  var n, r;
                  return function () {
                    var o = L(this, e),
                      i = o.tween;
                    if (i !== n) {
                      r = n = i;
                      for (var a = 0, u = r.length; a < u; ++a)
                        if (r[a].name === t) {
                          (r = r.slice()).splice(a, 1);
                          break;
                        }
                    }
                    o.tween = r;
                  };
                }
              : function (e, t, n) {
                  var r, o;
                  if ("function" != typeof n) throw Error();
                  return function () {
                    var i = L(this, e),
                      a = i.tween;
                    if (a !== r) {
                      o = (r = a).slice();
                      for (
                        var u = { name: t, value: n }, l = 0, s = o.length;
                        l < s;
                        ++l
                      )
                        if (o[l].name === t) {
                          o[l] = u;
                          break;
                        }
                      l === s && o.push(u);
                    }
                    i.tween = o;
                  };
                })(n, e, t)
          );
        },
        delay: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(
                ("function" == typeof e
                  ? function (e, t) {
                      return function () {
                        F(this, e).delay = +t.apply(this, arguments);
                      };
                    }
                  : function (e, t) {
                      return (
                        (t = +t),
                        function () {
                          F(this, e).delay = t;
                        }
                      );
                    })(t, e)
              )
            : H(this.node(), t).delay;
        },
        duration: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(
                ("function" == typeof e
                  ? function (e, t) {
                      return function () {
                        L(this, e).duration = +t.apply(this, arguments);
                      };
                    }
                  : function (e, t) {
                      return (
                        (t = +t),
                        function () {
                          L(this, e).duration = t;
                        }
                      );
                    })(t, e)
              )
            : H(this.node(), t).duration;
        },
        ease: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(
                (function (e, t) {
                  if ("function" != typeof t) throw Error();
                  return function () {
                    L(this, e).ease = t;
                  };
                })(t, e)
              )
            : H(this.node(), t).ease;
        },
        easeVarying: function (e) {
          var t;
          if ("function" != typeof e) throw Error();
          return this.each(
            ((t = this._id),
            function () {
              var n = e.apply(this, arguments);
              if ("function" != typeof n) throw Error();
              L(this, t).ease = n;
            })
          );
        },
        end: function () {
          var e,
            t,
            n = this,
            r = n._id,
            o = n.size();
          return new Promise(function (i, a) {
            var u = { value: a },
              l = {
                value: function () {
                  0 == --o && i();
                },
              };
            n.each(function () {
              var n = L(this, r),
                o = n.on;
              o !== e &&
                ((t = (e = o).copy())._.cancel.push(u),
                t._.interrupt.push(u),
                t._.end.push(l)),
                (n.on = t);
            }),
              0 === o && i();
          });
        },
        [Symbol.iterator]: ej[Symbol.iterator],
      };
      var eB = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function (e) {
          return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
        },
      };
      (g.ZP.prototype.interrupt = function (e) {
        return this.each(function () {
          j(this, e);
        });
      }),
        (g.ZP.prototype.transition = function (e) {
          var t, n;
          e instanceof eH
            ? ((t = e._id), (e = e._name))
            : ((t = ++eL),
              ((n = eB).time = C()),
              (e = null == e ? null : e + ""));
          for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
            for (var a, u = r[i], l = u.length, s = 0; s < l; ++s)
              (a = u[s]) &&
                O(
                  a,
                  e,
                  t,
                  s,
                  u,
                  n ||
                    (function (e, t) {
                      for (var n; !(n = e.__transition) || !(n = n[t]); )
                        if (!(e = e.parentNode))
                          throw Error(`transition ${t} not found`);
                      return n;
                    })(a, t)
                );
          return new eH(r, this._parents, e, t);
        });
      var eD = (e) => () => e;
      function eG(e, { sourceEvent: t, target: n, transform: r, dispatch: o }) {
        Object.defineProperties(this, {
          type: { value: e, enumerable: !0, configurable: !0 },
          sourceEvent: { value: t, enumerable: !0, configurable: !0 },
          target: { value: n, enumerable: !0, configurable: !0 },
          transform: { value: r, enumerable: !0, configurable: !0 },
          _: { value: o },
        });
      }
      function eV(e, t, n) {
        (this.k = e), (this.x = t), (this.y = n);
      }
      eV.prototype = {
        constructor: eV,
        scale: function (e) {
          return 1 === e ? this : new eV(this.k * e, this.x, this.y);
        },
        translate: function (e, t) {
          return (0 === e) & (0 === t)
            ? this
            : new eV(this.k, this.x + this.k * e, this.y + this.k * t);
        },
        apply: function (e) {
          return [e[0] * this.k + this.x, e[1] * this.k + this.y];
        },
        applyX: function (e) {
          return e * this.k + this.x;
        },
        applyY: function (e) {
          return e * this.k + this.y;
        },
        invert: function (e) {
          return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
        },
        invertX: function (e) {
          return (e - this.x) / this.k;
        },
        invertY: function (e) {
          return (e - this.y) / this.k;
        },
        rescaleX: function (e) {
          return e
            .copy()
            .domain(e.range().map(this.invertX, this).map(e.invert, e));
        },
        rescaleY: function (e) {
          return e
            .copy()
            .domain(e.range().map(this.invertY, this).map(e.invert, e));
        },
        toString: function () {
          return (
            "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
          );
        },
      };
      var ez = new eV(1, 0, 0);
      function eU(e) {
        for (; !e.__zoom; ) if (!(e = e.parentNode)) return ez;
        return e.__zoom;
      }
      function eZ(e) {
        e.stopImmediatePropagation();
      }
      function eq(e) {
        e.preventDefault(), e.stopImmediatePropagation();
      }
      function eX(e) {
        return (!e.ctrlKey || "wheel" === e.type) && !e.button;
      }
      function eK() {
        var e = this;
        return e instanceof SVGElement
          ? (e = e.ownerSVGElement || e).hasAttribute("viewBox")
            ? [
                [(e = e.viewBox.baseVal).x, e.y],
                [e.x + e.width, e.y + e.height],
              ]
            : [
                [0, 0],
                [e.width.baseVal.value, e.height.baseVal.value],
              ]
          : [
              [0, 0],
              [e.clientWidth, e.clientHeight],
            ];
      }
      function eY() {
        return this.__zoom || ez;
      }
      function e$(e) {
        return (
          -e.deltaY *
          (1 === e.deltaMode ? 0.05 : e.deltaMode ? 1 : 0.002) *
          (e.ctrlKey ? 10 : 1)
        );
      }
      function eW() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function eJ(e, t, n) {
        var r = e.invertX(t[0][0]) - n[0][0],
          o = e.invertX(t[1][0]) - n[1][0],
          i = e.invertY(t[0][1]) - n[0][1],
          a = e.invertY(t[1][1]) - n[1][1];
        return e.translate(
          o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
          a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
        );
      }
      function eQ() {
        var e,
          t,
          n,
          r = eX,
          o = eK,
          a = eJ,
          u = e$,
          c = eW,
          f = [0, 1 / 0],
          h = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0],
          ],
          g = 250,
          m = d,
          v = i("start", "zoom", "end"),
          y = 0,
          b = 10;
        function _(e) {
          e.property("__zoom", eY)
            .on("wheel.zoom", R)
            .on("mousedown.zoom", A)
            .on("dblclick.zoom", x)
            .filter(c)
            .on("touchstart.zoom", I)
            .on("touchmove.zoom", N)
            .on("touchend.zoom touchcancel.zoom", T)
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function w(e, t) {
          return (t = Math.max(f[0], Math.min(f[1], t))) === e.k
            ? e
            : new eV(t, e.x, e.y);
        }
        function E(e, t, n) {
          var r = t[0] - n[0] * e.k,
            o = t[1] - n[1] * e.k;
          return r === e.x && o === e.y ? e : new eV(e.k, r, o);
        }
        function S(e) {
          return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2];
        }
        function C(e, t, n, r) {
          e.on("start.zoom", function () {
            M(this, arguments).event(r).start();
          })
            .on("interrupt.zoom end.zoom", function () {
              M(this, arguments).event(r).end();
            })
            .tween("zoom", function () {
              var e = arguments,
                i = M(this, e).event(r),
                a = o.apply(this, e),
                u =
                  null == n
                    ? S(a)
                    : "function" == typeof n
                    ? n.apply(this, e)
                    : n,
                l = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                s = this.__zoom,
                c = "function" == typeof t ? t.apply(this, e) : t,
                f = m(s.invert(u).concat(l / s.k), c.invert(u).concat(l / c.k));
              return function (e) {
                if (1 === e) e = c;
                else {
                  var t = f(e),
                    n = l / t[2];
                  e = new eV(n, u[0] - t[0] * n, u[1] - t[1] * n);
                }
                i.zoom(null, e);
              };
            });
        }
        function M(e, t, n) {
          return (!n && e.__zooming) || new P(e, t);
        }
        function P(e, t) {
          (this.that = e),
            (this.args = t),
            (this.active = 0),
            (this.sourceEvent = null),
            (this.extent = o.apply(e, t)),
            (this.taps = 0);
        }
        function R(e, ...t) {
          if (r.apply(this, arguments)) {
            var n = M(this, t).event(e),
              o = this.__zoom,
              i = Math.max(
                f[0],
                Math.min(f[1], o.k * Math.pow(2, u.apply(this, arguments)))
              ),
              l = (0, p.Z)(e);
            if (n.wheel)
              (n.mouse[0][0] !== l[0] || n.mouse[0][1] !== l[1]) &&
                (n.mouse[1] = o.invert((n.mouse[0] = l))),
                clearTimeout(n.wheel);
            else {
              if (o.k === i) return;
              (n.mouse = [l, o.invert(l)]), j(this), n.start();
            }
            eq(e),
              (n.wheel = setTimeout(function () {
                (n.wheel = null), n.end();
              }, 150)),
              n.zoom(
                "mouse",
                a(E(w(o, i), n.mouse[0], n.mouse[1]), n.extent, h)
              );
          }
        }
        function A(e, ...t) {
          if (!n && r.apply(this, arguments)) {
            var o,
              i,
              u,
              c = M(this, t, !0).event(e),
              f = (0, l.Z)(e.view)
                .on(
                  "mousemove.zoom",
                  function (e) {
                    if ((eq(e), !c.moved)) {
                      var t = e.clientX - m,
                        n = e.clientY - v;
                      c.moved = t * t + n * n > y;
                    }
                    c.event(e).zoom(
                      "mouse",
                      a(
                        E(
                          c.that.__zoom,
                          (c.mouse[0] = (0, p.Z)(e, g)),
                          c.mouse[1]
                        ),
                        c.extent,
                        h
                      )
                    );
                  },
                  !0
                )
                .on(
                  "mouseup.zoom",
                  function (e) {
                    var t, n, r, o;
                    f.on("mousemove.zoom mouseup.zoom", null),
                      (t = e.view),
                      (n = c.moved),
                      (r = t.document.documentElement),
                      (o = (0, l.Z)(t).on("dragstart.drag", null)),
                      n &&
                        (o.on("click.drag", s, !0),
                        setTimeout(function () {
                          o.on("click.drag", null);
                        }, 0)),
                      "onselectstart" in r
                        ? o.on("selectstart.drag", null)
                        : ((r.style.MozUserSelect = r.__noselect),
                          delete r.__noselect),
                      eq(e),
                      c.event(e).end();
                  },
                  !0
                ),
              d = (0, p.Z)(e, g),
              g = e.currentTarget,
              m = e.clientX,
              v = e.clientY;
            (i = (o = e.view).document.documentElement),
              (u = (0, l.Z)(o).on("dragstart.drag", s, !0)),
              "onselectstart" in i
                ? u.on("selectstart.drag", s, !0)
                : ((i.__noselect = i.style.MozUserSelect),
                  (i.style.MozUserSelect = "none")),
              eZ(e),
              (c.mouse = [d, this.__zoom.invert(d)]),
              j(this),
              c.start();
          }
        }
        function x(e, ...t) {
          if (r.apply(this, arguments)) {
            var n = this.__zoom,
              i = (0, p.Z)(e.changedTouches ? e.changedTouches[0] : e, this),
              u = n.invert(i),
              s = n.k * (e.shiftKey ? 0.5 : 2),
              c = a(E(w(n, s), i, u), o.apply(this, t), h);
            eq(e),
              g > 0
                ? (0, l.Z)(this).transition().duration(g).call(C, c, i, e)
                : (0, l.Z)(this).call(_.transform, c, i, e);
          }
        }
        function I(n, ...o) {
          if (r.apply(this, arguments)) {
            var i,
              a,
              u,
              l,
              s = n.touches,
              c = s.length,
              f = M(this, o, n.changedTouches.length === c).event(n);
            for (eZ(n), a = 0; a < c; ++a)
              (u = s[a]),
                (l = [
                  (l = (0, p.Z)(u, this)),
                  this.__zoom.invert(l),
                  u.identifier,
                ]),
                f.touch0
                  ? f.touch1 ||
                    f.touch0[2] === l[2] ||
                    ((f.touch1 = l), (f.taps = 0))
                  : ((f.touch0 = l), (i = !0), (f.taps = 1 + !!e));
            e && (e = clearTimeout(e)),
              i &&
                (f.taps < 2 &&
                  ((t = l[0]),
                  (e = setTimeout(function () {
                    e = null;
                  }, 500))),
                j(this),
                f.start());
          }
        }
        function N(e, ...t) {
          if (this.__zooming) {
            var n,
              r,
              o,
              i,
              u = M(this, t).event(e),
              l = e.changedTouches,
              s = l.length;
            for (eq(e), n = 0; n < s; ++n)
              (r = l[n]),
                (o = (0, p.Z)(r, this)),
                u.touch0 && u.touch0[2] === r.identifier
                  ? (u.touch0[0] = o)
                  : u.touch1 &&
                    u.touch1[2] === r.identifier &&
                    (u.touch1[0] = o);
            if (((r = u.that.__zoom), u.touch1)) {
              var c = u.touch0[0],
                f = u.touch0[1],
                d = u.touch1[0],
                g = u.touch1[1],
                m = (m = d[0] - c[0]) * m + (m = d[1] - c[1]) * m,
                v = (v = g[0] - f[0]) * v + (v = g[1] - f[1]) * v;
              (r = w(r, Math.sqrt(m / v))),
                (o = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2]),
                (i = [(f[0] + g[0]) / 2, (f[1] + g[1]) / 2]);
            } else {
              if (!u.touch0) return;
              (o = u.touch0[0]), (i = u.touch0[1]);
            }
            u.zoom("touch", a(E(r, o, i), u.extent, h));
          }
        }
        function T(e, ...r) {
          if (this.__zooming) {
            var o,
              i,
              a = M(this, r).event(e),
              u = e.changedTouches,
              s = u.length;
            for (
              eZ(e),
                n && clearTimeout(n),
                n = setTimeout(function () {
                  n = null;
                }, 500),
                o = 0;
              o < s;
              ++o
            )
              (i = u[o]),
                a.touch0 && a.touch0[2] === i.identifier
                  ? delete a.touch0
                  : a.touch1 && a.touch1[2] === i.identifier && delete a.touch1;
            if (
              (a.touch1 &&
                !a.touch0 &&
                ((a.touch0 = a.touch1), delete a.touch1),
              a.touch0)
            )
              a.touch0[1] = this.__zoom.invert(a.touch0[0]);
            else if (
              (a.end(),
              2 === a.taps &&
                ((i = (0, p.Z)(i, this)),
                Math.hypot(t[0] - i[0], t[1] - i[1]) < b))
            ) {
              var c = (0, l.Z)(this).on("dblclick.zoom");
              c && c.apply(this, arguments);
            }
          }
        }
        return (
          (_.transform = function (e, t, n, r) {
            var o = e.selection ? e.selection() : e;
            o.property("__zoom", eY),
              e !== o
                ? C(e, t, n, r)
                : o.interrupt().each(function () {
                    M(this, arguments)
                      .event(r)
                      .start()
                      .zoom(
                        null,
                        "function" == typeof t ? t.apply(this, arguments) : t
                      )
                      .end();
                  });
          }),
          (_.scaleBy = function (e, t, n, r) {
            _.scaleTo(
              e,
              function () {
                var e = this.__zoom.k,
                  n = "function" == typeof t ? t.apply(this, arguments) : t;
                return e * n;
              },
              n,
              r
            );
          }),
          (_.scaleTo = function (e, t, n, r) {
            _.transform(
              e,
              function () {
                var e = o.apply(this, arguments),
                  r = this.__zoom,
                  i =
                    null == n
                      ? S(e)
                      : "function" == typeof n
                      ? n.apply(this, arguments)
                      : n,
                  u = r.invert(i),
                  l = "function" == typeof t ? t.apply(this, arguments) : t;
                return a(E(w(r, l), i, u), e, h);
              },
              n,
              r
            );
          }),
          (_.translateBy = function (e, t, n, r) {
            _.transform(
              e,
              function () {
                return a(
                  this.__zoom.translate(
                    "function" == typeof t ? t.apply(this, arguments) : t,
                    "function" == typeof n ? n.apply(this, arguments) : n
                  ),
                  o.apply(this, arguments),
                  h
                );
              },
              null,
              r
            );
          }),
          (_.translateTo = function (e, t, n, r, i) {
            _.transform(
              e,
              function () {
                var e = o.apply(this, arguments),
                  i = this.__zoom,
                  u =
                    null == r
                      ? S(e)
                      : "function" == typeof r
                      ? r.apply(this, arguments)
                      : r;
                return a(
                  ez
                    .translate(u[0], u[1])
                    .scale(i.k)
                    .translate(
                      "function" == typeof t ? -t.apply(this, arguments) : -t,
                      "function" == typeof n ? -n.apply(this, arguments) : -n
                    ),
                  e,
                  h
                );
              },
              r,
              i
            );
          }),
          (P.prototype = {
            event: function (e) {
              return e && (this.sourceEvent = e), this;
            },
            start: function () {
              return (
                1 == ++this.active &&
                  ((this.that.__zooming = this), this.emit("start")),
                this
              );
            },
            zoom: function (e, t) {
              return (
                this.mouse &&
                  "mouse" !== e &&
                  (this.mouse[1] = t.invert(this.mouse[0])),
                this.touch0 &&
                  "touch" !== e &&
                  (this.touch0[1] = t.invert(this.touch0[0])),
                this.touch1 &&
                  "touch" !== e &&
                  (this.touch1[1] = t.invert(this.touch1[0])),
                (this.that.__zoom = t),
                this.emit("zoom"),
                this
              );
            },
            end: function () {
              return (
                0 == --this.active &&
                  (delete this.that.__zooming, this.emit("end")),
                this
              );
            },
            emit: function (e) {
              var t = (0, l.Z)(this.that).datum();
              v.call(
                e,
                this.that,
                new eG(e, {
                  sourceEvent: this.sourceEvent,
                  target: _,
                  type: e,
                  transform: this.that.__zoom,
                  dispatch: v,
                }),
                t
              );
            },
          }),
          (_.wheelDelta = function (e) {
            return arguments.length
              ? ((u = "function" == typeof e ? e : eD(+e)), _)
              : u;
          }),
          (_.filter = function (e) {
            return arguments.length
              ? ((r = "function" == typeof e ? e : eD(!!e)), _)
              : r;
          }),
          (_.touchable = function (e) {
            return arguments.length
              ? ((c = "function" == typeof e ? e : eD(!!e)), _)
              : c;
          }),
          (_.extent = function (e) {
            return arguments.length
              ? ((o =
                  "function" == typeof e
                    ? e
                    : eD([
                        [+e[0][0], +e[0][1]],
                        [+e[1][0], +e[1][1]],
                      ])),
                _)
              : o;
          }),
          (_.scaleExtent = function (e) {
            return arguments.length
              ? ((f[0] = +e[0]), (f[1] = +e[1]), _)
              : [f[0], f[1]];
          }),
          (_.translateExtent = function (e) {
            return arguments.length
              ? ((h[0][0] = +e[0][0]),
                (h[1][0] = +e[1][0]),
                (h[0][1] = +e[0][1]),
                (h[1][1] = +e[1][1]),
                _)
              : [
                  [h[0][0], h[0][1]],
                  [h[1][0], h[1][1]],
                ];
          }),
          (_.constrain = function (e) {
            return arguments.length ? ((a = e), _) : a;
          }),
          (_.duration = function (e) {
            return arguments.length ? ((g = +e), _) : g;
          }),
          (_.interpolate = function (e) {
            return arguments.length ? ((m = e), _) : m;
          }),
          (_.on = function () {
            var e = v.on.apply(v, arguments);
            return e === v ? _ : e;
          }),
          (_.clickDistance = function (e) {
            return arguments.length ? ((y = (e = +e) * e), _) : Math.sqrt(y);
          }),
          (_.tapDistance = function (e) {
            return arguments.length ? ((b = +e), _) : b;
          }),
          _
        );
      }
      eU.prototype = eV.prototype;
    },
    45839: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ErrorCode: function () {
            return d;
          },
          FormatError: function () {
            return em;
          },
          IntlMessageFormat: function () {
            return eS;
          },
          InvalidValueError: function () {
            return ev;
          },
          InvalidValueTypeError: function () {
            return ey;
          },
          MissingValueError: function () {
            return eb;
          },
          PART_TYPE: function () {
            return p;
          },
          default: function () {
            return eC;
          },
          formatToParts: function () {
            return ew;
          },
          isFormatXMLElementFn: function () {
            return e_;
          },
        });
      var r,
        o,
        i,
        a,
        u,
        l,
        s,
        c,
        f,
        h,
        d,
        p,
        g = function (e, t) {
          return (g =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        };
      function m(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        g(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var v = function () {
        return (v =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function y(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      function b(e) {
        return e.type === s.literal;
      }
      function _(e) {
        return e.type === s.number;
      }
      function w(e) {
        return e.type === s.date;
      }
      function E(e) {
        return e.type === s.time;
      }
      function S(e) {
        return e.type === s.select;
      }
      function C(e) {
        return e.type === s.plural;
      }
      function M(e) {
        return e.type === s.tag;
      }
      function P(e) {
        return !!(e && "object" == typeof e && e.type === c.number);
      }
      function R(e) {
        return !!(e && "object" == typeof e && e.type === c.dateTime);
      }
      "function" == typeof SuppressedError && SuppressedError,
        ((r = l || (l = {}))[(r.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] =
          "EXPECT_ARGUMENT_CLOSING_BRACE"),
        (r[(r.EMPTY_ARGUMENT = 2)] = "EMPTY_ARGUMENT"),
        (r[(r.MALFORMED_ARGUMENT = 3)] = "MALFORMED_ARGUMENT"),
        (r[(r.EXPECT_ARGUMENT_TYPE = 4)] = "EXPECT_ARGUMENT_TYPE"),
        (r[(r.INVALID_ARGUMENT_TYPE = 5)] = "INVALID_ARGUMENT_TYPE"),
        (r[(r.EXPECT_ARGUMENT_STYLE = 6)] = "EXPECT_ARGUMENT_STYLE"),
        (r[(r.INVALID_NUMBER_SKELETON = 7)] = "INVALID_NUMBER_SKELETON"),
        (r[(r.INVALID_DATE_TIME_SKELETON = 8)] = "INVALID_DATE_TIME_SKELETON"),
        (r[(r.EXPECT_NUMBER_SKELETON = 9)] = "EXPECT_NUMBER_SKELETON"),
        (r[(r.EXPECT_DATE_TIME_SKELETON = 10)] = "EXPECT_DATE_TIME_SKELETON"),
        (r[(r.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] =
          "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"),
        (r[(r.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] =
          "EXPECT_SELECT_ARGUMENT_OPTIONS"),
        (r[(r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
          "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"),
        (r[(r.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
          "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"),
        (r[(r.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] =
          "EXPECT_SELECT_ARGUMENT_SELECTOR"),
        (r[(r.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] =
          "EXPECT_PLURAL_ARGUMENT_SELECTOR"),
        (r[(r.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
          "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"),
        (r[(r.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
          "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"),
        (r[(r.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] =
          "INVALID_PLURAL_ARGUMENT_SELECTOR"),
        (r[(r.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
          "DUPLICATE_PLURAL_ARGUMENT_SELECTOR"),
        (r[(r.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
          "DUPLICATE_SELECT_ARGUMENT_SELECTOR"),
        (r[(r.MISSING_OTHER_CLAUSE = 22)] = "MISSING_OTHER_CLAUSE"),
        (r[(r.INVALID_TAG = 23)] = "INVALID_TAG"),
        (r[(r.INVALID_TAG_NAME = 25)] = "INVALID_TAG_NAME"),
        (r[(r.UNMATCHED_CLOSING_TAG = 26)] = "UNMATCHED_CLOSING_TAG"),
        (r[(r.UNCLOSED_TAG = 27)] = "UNCLOSED_TAG"),
        ((o = s || (s = {}))[(o.literal = 0)] = "literal"),
        (o[(o.argument = 1)] = "argument"),
        (o[(o.number = 2)] = "number"),
        (o[(o.date = 3)] = "date"),
        (o[(o.time = 4)] = "time"),
        (o[(o.select = 5)] = "select"),
        (o[(o.plural = 6)] = "plural"),
        (o[(o.pound = 7)] = "pound"),
        (o[(o.tag = 8)] = "tag"),
        ((i = c || (c = {}))[(i.number = 0)] = "number"),
        (i[(i.dateTime = 1)] = "dateTime");
      var A = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        x =
          /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
        I = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        N = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        T = /^(@+)?(\+|#+)?[rs]?$/g,
        k = /(\*)(0+)|(#+)(0+)|(0+)/g,
        O = /^(0+)$/;
      function F(e) {
        var t = {};
        return (
          "r" === e[e.length - 1]
            ? (t.roundingPriority = "morePrecision")
            : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"),
          e.replace(T, function (e, n, r) {
            return (
              "string" != typeof r
                ? ((t.minimumSignificantDigits = n.length),
                  (t.maximumSignificantDigits = n.length))
                : "+" === r
                ? (t.minimumSignificantDigits = n.length)
                : "#" === n[0]
                ? (t.maximumSignificantDigits = n.length)
                : ((t.minimumSignificantDigits = n.length),
                  (t.maximumSignificantDigits =
                    n.length + ("string" == typeof r ? r.length : 0))),
              ""
            );
          }),
          t
        );
      }
      function L(e) {
        switch (e) {
          case "sign-auto":
            return { signDisplay: "auto" };
          case "sign-accounting":
          case "()":
            return { currencySign: "accounting" };
          case "sign-always":
          case "+!":
            return { signDisplay: "always" };
          case "sign-accounting-always":
          case "()!":
            return { signDisplay: "always", currencySign: "accounting" };
          case "sign-except-zero":
          case "+?":
            return { signDisplay: "exceptZero" };
          case "sign-accounting-except-zero":
          case "()?":
            return { signDisplay: "exceptZero", currencySign: "accounting" };
          case "sign-never":
          case "+_":
            return { signDisplay: "never" };
        }
      }
      function H(e) {
        return L(e) || {};
      }
      var j = {
          AX: ["H"],
          BQ: ["H"],
          CP: ["H"],
          CZ: ["H"],
          DK: ["H"],
          FI: ["H"],
          ID: ["H"],
          IS: ["H"],
          ML: ["H"],
          NE: ["H"],
          RU: ["H"],
          SE: ["H"],
          SJ: ["H"],
          SK: ["H"],
          AS: ["h", "H"],
          BT: ["h", "H"],
          DJ: ["h", "H"],
          ER: ["h", "H"],
          GH: ["h", "H"],
          IN: ["h", "H"],
          LS: ["h", "H"],
          PG: ["h", "H"],
          PW: ["h", "H"],
          SO: ["h", "H"],
          TO: ["h", "H"],
          VU: ["h", "H"],
          WS: ["h", "H"],
          "001": ["H", "h"],
          AL: ["h", "H", "hB"],
          TD: ["h", "H", "hB"],
          "ca-ES": ["H", "h", "hB"],
          CF: ["H", "h", "hB"],
          CM: ["H", "h", "hB"],
          "fr-CA": ["H", "h", "hB"],
          "gl-ES": ["H", "h", "hB"],
          "it-CH": ["H", "h", "hB"],
          "it-IT": ["H", "h", "hB"],
          LU: ["H", "h", "hB"],
          NP: ["H", "h", "hB"],
          PF: ["H", "h", "hB"],
          SC: ["H", "h", "hB"],
          SM: ["H", "h", "hB"],
          SN: ["H", "h", "hB"],
          TF: ["H", "h", "hB"],
          VA: ["H", "h", "hB"],
          CY: ["h", "H", "hb", "hB"],
          GR: ["h", "H", "hb", "hB"],
          CO: ["h", "H", "hB", "hb"],
          DO: ["h", "H", "hB", "hb"],
          KP: ["h", "H", "hB", "hb"],
          KR: ["h", "H", "hB", "hb"],
          NA: ["h", "H", "hB", "hb"],
          PA: ["h", "H", "hB", "hb"],
          PR: ["h", "H", "hB", "hb"],
          VE: ["h", "H", "hB", "hb"],
          AC: ["H", "h", "hb", "hB"],
          AI: ["H", "h", "hb", "hB"],
          BW: ["H", "h", "hb", "hB"],
          BZ: ["H", "h", "hb", "hB"],
          CC: ["H", "h", "hb", "hB"],
          CK: ["H", "h", "hb", "hB"],
          CX: ["H", "h", "hb", "hB"],
          DG: ["H", "h", "hb", "hB"],
          FK: ["H", "h", "hb", "hB"],
          GB: ["H", "h", "hb", "hB"],
          GG: ["H", "h", "hb", "hB"],
          GI: ["H", "h", "hb", "hB"],
          IE: ["H", "h", "hb", "hB"],
          IM: ["H", "h", "hb", "hB"],
          IO: ["H", "h", "hb", "hB"],
          JE: ["H", "h", "hb", "hB"],
          LT: ["H", "h", "hb", "hB"],
          MK: ["H", "h", "hb", "hB"],
          MN: ["H", "h", "hb", "hB"],
          MS: ["H", "h", "hb", "hB"],
          NF: ["H", "h", "hb", "hB"],
          NG: ["H", "h", "hb", "hB"],
          NR: ["H", "h", "hb", "hB"],
          NU: ["H", "h", "hb", "hB"],
          PN: ["H", "h", "hb", "hB"],
          SH: ["H", "h", "hb", "hB"],
          SX: ["H", "h", "hb", "hB"],
          TA: ["H", "h", "hb", "hB"],
          ZA: ["H", "h", "hb", "hB"],
          "af-ZA": ["H", "h", "hB", "hb"],
          AR: ["H", "h", "hB", "hb"],
          CL: ["H", "h", "hB", "hb"],
          CR: ["H", "h", "hB", "hb"],
          CU: ["H", "h", "hB", "hb"],
          EA: ["H", "h", "hB", "hb"],
          "es-BO": ["H", "h", "hB", "hb"],
          "es-BR": ["H", "h", "hB", "hb"],
          "es-EC": ["H", "h", "hB", "hb"],
          "es-ES": ["H", "h", "hB", "hb"],
          "es-GQ": ["H", "h", "hB", "hb"],
          "es-PE": ["H", "h", "hB", "hb"],
          GT: ["H", "h", "hB", "hb"],
          HN: ["H", "h", "hB", "hb"],
          IC: ["H", "h", "hB", "hb"],
          KG: ["H", "h", "hB", "hb"],
          KM: ["H", "h", "hB", "hb"],
          LK: ["H", "h", "hB", "hb"],
          MA: ["H", "h", "hB", "hb"],
          MX: ["H", "h", "hB", "hb"],
          NI: ["H", "h", "hB", "hb"],
          PY: ["H", "h", "hB", "hb"],
          SV: ["H", "h", "hB", "hb"],
          UY: ["H", "h", "hB", "hb"],
          JP: ["H", "h", "K"],
          AD: ["H", "hB"],
          AM: ["H", "hB"],
          AO: ["H", "hB"],
          AT: ["H", "hB"],
          AW: ["H", "hB"],
          BE: ["H", "hB"],
          BF: ["H", "hB"],
          BJ: ["H", "hB"],
          BL: ["H", "hB"],
          BR: ["H", "hB"],
          CG: ["H", "hB"],
          CI: ["H", "hB"],
          CV: ["H", "hB"],
          DE: ["H", "hB"],
          EE: ["H", "hB"],
          FR: ["H", "hB"],
          GA: ["H", "hB"],
          GF: ["H", "hB"],
          GN: ["H", "hB"],
          GP: ["H", "hB"],
          GW: ["H", "hB"],
          HR: ["H", "hB"],
          IL: ["H", "hB"],
          IT: ["H", "hB"],
          KZ: ["H", "hB"],
          MC: ["H", "hB"],
          MD: ["H", "hB"],
          MF: ["H", "hB"],
          MQ: ["H", "hB"],
          MZ: ["H", "hB"],
          NC: ["H", "hB"],
          NL: ["H", "hB"],
          PM: ["H", "hB"],
          PT: ["H", "hB"],
          RE: ["H", "hB"],
          RO: ["H", "hB"],
          SI: ["H", "hB"],
          SR: ["H", "hB"],
          ST: ["H", "hB"],
          TG: ["H", "hB"],
          TR: ["H", "hB"],
          WF: ["H", "hB"],
          YT: ["H", "hB"],
          BD: ["h", "hB", "H"],
          PK: ["h", "hB", "H"],
          AZ: ["H", "hB", "h"],
          BA: ["H", "hB", "h"],
          BG: ["H", "hB", "h"],
          CH: ["H", "hB", "h"],
          GE: ["H", "hB", "h"],
          LI: ["H", "hB", "h"],
          ME: ["H", "hB", "h"],
          RS: ["H", "hB", "h"],
          UA: ["H", "hB", "h"],
          UZ: ["H", "hB", "h"],
          XK: ["H", "hB", "h"],
          AG: ["h", "hb", "H", "hB"],
          AU: ["h", "hb", "H", "hB"],
          BB: ["h", "hb", "H", "hB"],
          BM: ["h", "hb", "H", "hB"],
          BS: ["h", "hb", "H", "hB"],
          CA: ["h", "hb", "H", "hB"],
          DM: ["h", "hb", "H", "hB"],
          "en-001": ["h", "hb", "H", "hB"],
          FJ: ["h", "hb", "H", "hB"],
          FM: ["h", "hb", "H", "hB"],
          GD: ["h", "hb", "H", "hB"],
          GM: ["h", "hb", "H", "hB"],
          GU: ["h", "hb", "H", "hB"],
          GY: ["h", "hb", "H", "hB"],
          JM: ["h", "hb", "H", "hB"],
          KI: ["h", "hb", "H", "hB"],
          KN: ["h", "hb", "H", "hB"],
          KY: ["h", "hb", "H", "hB"],
          LC: ["h", "hb", "H", "hB"],
          LR: ["h", "hb", "H", "hB"],
          MH: ["h", "hb", "H", "hB"],
          MP: ["h", "hb", "H", "hB"],
          MW: ["h", "hb", "H", "hB"],
          NZ: ["h", "hb", "H", "hB"],
          SB: ["h", "hb", "H", "hB"],
          SG: ["h", "hb", "H", "hB"],
          SL: ["h", "hb", "H", "hB"],
          SS: ["h", "hb", "H", "hB"],
          SZ: ["h", "hb", "H", "hB"],
          TC: ["h", "hb", "H", "hB"],
          TT: ["h", "hb", "H", "hB"],
          UM: ["h", "hb", "H", "hB"],
          US: ["h", "hb", "H", "hB"],
          VC: ["h", "hb", "H", "hB"],
          VG: ["h", "hb", "H", "hB"],
          VI: ["h", "hb", "H", "hB"],
          ZM: ["h", "hb", "H", "hB"],
          BO: ["H", "hB", "h", "hb"],
          EC: ["H", "hB", "h", "hb"],
          ES: ["H", "hB", "h", "hb"],
          GQ: ["H", "hB", "h", "hb"],
          PE: ["H", "hB", "h", "hb"],
          AE: ["h", "hB", "hb", "H"],
          "ar-001": ["h", "hB", "hb", "H"],
          BH: ["h", "hB", "hb", "H"],
          DZ: ["h", "hB", "hb", "H"],
          EG: ["h", "hB", "hb", "H"],
          EH: ["h", "hB", "hb", "H"],
          HK: ["h", "hB", "hb", "H"],
          IQ: ["h", "hB", "hb", "H"],
          JO: ["h", "hB", "hb", "H"],
          KW: ["h", "hB", "hb", "H"],
          LB: ["h", "hB", "hb", "H"],
          LY: ["h", "hB", "hb", "H"],
          MO: ["h", "hB", "hb", "H"],
          MR: ["h", "hB", "hb", "H"],
          OM: ["h", "hB", "hb", "H"],
          PH: ["h", "hB", "hb", "H"],
          PS: ["h", "hB", "hb", "H"],
          QA: ["h", "hB", "hb", "H"],
          SA: ["h", "hB", "hb", "H"],
          SD: ["h", "hB", "hb", "H"],
          SY: ["h", "hB", "hb", "H"],
          TN: ["h", "hB", "hb", "H"],
          YE: ["h", "hB", "hb", "H"],
          AF: ["H", "hb", "hB", "h"],
          LA: ["H", "hb", "hB", "h"],
          CN: ["H", "hB", "hb", "h"],
          LV: ["H", "hB", "hb", "h"],
          TL: ["H", "hB", "hb", "h"],
          "zu-ZA": ["H", "hB", "hb", "h"],
          CD: ["hB", "H"],
          IR: ["hB", "H"],
          "hi-IN": ["hB", "h", "H"],
          "kn-IN": ["hB", "h", "H"],
          "ml-IN": ["hB", "h", "H"],
          "te-IN": ["hB", "h", "H"],
          KH: ["hB", "h", "H", "hb"],
          "ta-IN": ["hB", "h", "hb", "H"],
          BN: ["hb", "hB", "h", "H"],
          MY: ["hb", "hB", "h", "H"],
          ET: ["hB", "hb", "h", "H"],
          "gu-IN": ["hB", "hb", "h", "H"],
          "mr-IN": ["hB", "hb", "h", "H"],
          "pa-IN": ["hB", "hb", "h", "H"],
          TW: ["hB", "hb", "h", "H"],
          KE: ["hB", "hb", "H", "h"],
          MM: ["hB", "hb", "H", "h"],
          TZ: ["hB", "hb", "H", "h"],
          UG: ["hB", "hb", "H", "h"],
        },
        B = new RegExp("^".concat(A.source, "*")),
        D = new RegExp("".concat(A.source, "*$"));
      function G(e, t) {
        return { start: e, end: t };
      }
      var V = !!String.prototype.startsWith,
        z = !!String.fromCodePoint,
        U = !!Object.fromEntries,
        Z = !!String.prototype.codePointAt,
        q = !!String.prototype.trimStart,
        X = !!String.prototype.trimEnd,
        K = Number.isSafeInteger
          ? Number.isSafeInteger
          : function (e) {
              return (
                "number" == typeof e &&
                isFinite(e) &&
                Math.floor(e) === e &&
                9007199254740991 >= Math.abs(e)
              );
            },
        Y = !0;
      try {
        var $ = er("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Y =
          (null === (f = $.exec("a")) || void 0 === f ? void 0 : f[0]) === "a";
      } catch (e) {
        Y = !1;
      }
      var W = V
          ? function (e, t, n) {
              return e.startsWith(t, n);
            }
          : function (e, t, n) {
              return e.slice(n, n + t.length) === t;
            },
        J = z
          ? String.fromCodePoint
          : function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              for (var r = "", o = t.length, i = 0; o > i; ) {
                if ((e = t[i++]) > 1114111)
                  throw RangeError(e + " is not a valid code point");
                r +=
                  e < 65536
                    ? String.fromCharCode(e)
                    : String.fromCharCode(
                        ((e -= 65536) >> 10) + 55296,
                        (e % 1024) + 56320
                      );
              }
              return r;
            },
        Q = U
          ? Object.fromEntries
          : function (e) {
              for (var t = {}, n = 0; n < e.length; n++) {
                var r = e[n],
                  o = r[0],
                  i = r[1];
                t[o] = i;
              }
              return t;
            },
        ee = Z
          ? function (e, t) {
              return e.codePointAt(t);
            }
          : function (e, t) {
              var n,
                r = e.length;
              if (!(t < 0) && !(t >= r)) {
                var o = e.charCodeAt(t);
                return o < 55296 ||
                  o > 56319 ||
                  t + 1 === r ||
                  (n = e.charCodeAt(t + 1)) < 56320 ||
                  n > 57343
                  ? o
                  : ((o - 55296) << 10) + (n - 56320) + 65536;
              }
            },
        et = q
          ? function (e) {
              return e.trimStart();
            }
          : function (e) {
              return e.replace(B, "");
            },
        en = X
          ? function (e) {
              return e.trimEnd();
            }
          : function (e) {
              return e.replace(D, "");
            };
      function er(e, t) {
        return new RegExp(e, t);
      }
      if (Y) {
        var eo = er("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        h = function (e, t) {
          var n;
          return (
            (eo.lastIndex = t),
            null !== (n = eo.exec(e)[1]) && void 0 !== n ? n : ""
          );
        };
      } else
        h = function (e, t) {
          for (var n = []; ; ) {
            var r,
              o = ee(e, t);
            if (
              void 0 === o ||
              eu(o) ||
              ((r = o) >= 33 && r <= 35) ||
              36 === r ||
              (r >= 37 && r <= 39) ||
              40 === r ||
              41 === r ||
              42 === r ||
              43 === r ||
              44 === r ||
              45 === r ||
              (r >= 46 && r <= 47) ||
              (r >= 58 && r <= 59) ||
              (r >= 60 && r <= 62) ||
              (r >= 63 && r <= 64) ||
              91 === r ||
              92 === r ||
              93 === r ||
              94 === r ||
              96 === r ||
              123 === r ||
              124 === r ||
              125 === r ||
              126 === r ||
              161 === r ||
              (r >= 162 && r <= 165) ||
              166 === r ||
              167 === r ||
              169 === r ||
              171 === r ||
              172 === r ||
              174 === r ||
              176 === r ||
              177 === r ||
              182 === r ||
              187 === r ||
              191 === r ||
              215 === r ||
              247 === r ||
              (r >= 8208 && r <= 8213) ||
              (r >= 8214 && r <= 8215) ||
              8216 === r ||
              8217 === r ||
              8218 === r ||
              (r >= 8219 && r <= 8220) ||
              8221 === r ||
              8222 === r ||
              8223 === r ||
              (r >= 8224 && r <= 8231) ||
              (r >= 8240 && r <= 8248) ||
              8249 === r ||
              8250 === r ||
              (r >= 8251 && r <= 8254) ||
              (r >= 8257 && r <= 8259) ||
              8260 === r ||
              8261 === r ||
              8262 === r ||
              (r >= 8263 && r <= 8273) ||
              8274 === r ||
              8275 === r ||
              (r >= 8277 && r <= 8286) ||
              (r >= 8592 && r <= 8596) ||
              (r >= 8597 && r <= 8601) ||
              (r >= 8602 && r <= 8603) ||
              (r >= 8604 && r <= 8607) ||
              8608 === r ||
              (r >= 8609 && r <= 8610) ||
              8611 === r ||
              (r >= 8612 && r <= 8613) ||
              8614 === r ||
              (r >= 8615 && r <= 8621) ||
              8622 === r ||
              (r >= 8623 && r <= 8653) ||
              (r >= 8654 && r <= 8655) ||
              (r >= 8656 && r <= 8657) ||
              8658 === r ||
              8659 === r ||
              8660 === r ||
              (r >= 8661 && r <= 8691) ||
              (r >= 8692 && r <= 8959) ||
              (r >= 8960 && r <= 8967) ||
              8968 === r ||
              8969 === r ||
              8970 === r ||
              8971 === r ||
              (r >= 8972 && r <= 8991) ||
              (r >= 8992 && r <= 8993) ||
              (r >= 8994 && r <= 9e3) ||
              9001 === r ||
              9002 === r ||
              (r >= 9003 && r <= 9083) ||
              9084 === r ||
              (r >= 9085 && r <= 9114) ||
              (r >= 9115 && r <= 9139) ||
              (r >= 9140 && r <= 9179) ||
              (r >= 9180 && r <= 9185) ||
              (r >= 9186 && r <= 9254) ||
              (r >= 9255 && r <= 9279) ||
              (r >= 9280 && r <= 9290) ||
              (r >= 9291 && r <= 9311) ||
              (r >= 9472 && r <= 9654) ||
              9655 === r ||
              (r >= 9656 && r <= 9664) ||
              9665 === r ||
              (r >= 9666 && r <= 9719) ||
              (r >= 9720 && r <= 9727) ||
              (r >= 9728 && r <= 9838) ||
              9839 === r ||
              (r >= 9840 && r <= 10087) ||
              10088 === r ||
              10089 === r ||
              10090 === r ||
              10091 === r ||
              10092 === r ||
              10093 === r ||
              10094 === r ||
              10095 === r ||
              10096 === r ||
              10097 === r ||
              10098 === r ||
              10099 === r ||
              10100 === r ||
              10101 === r ||
              (r >= 10132 && r <= 10175) ||
              (r >= 10176 && r <= 10180) ||
              10181 === r ||
              10182 === r ||
              (r >= 10183 && r <= 10213) ||
              10214 === r ||
              10215 === r ||
              10216 === r ||
              10217 === r ||
              10218 === r ||
              10219 === r ||
              10220 === r ||
              10221 === r ||
              10222 === r ||
              10223 === r ||
              (r >= 10224 && r <= 10239) ||
              (r >= 10240 && r <= 10495) ||
              (r >= 10496 && r <= 10626) ||
              10627 === r ||
              10628 === r ||
              10629 === r ||
              10630 === r ||
              10631 === r ||
              10632 === r ||
              10633 === r ||
              10634 === r ||
              10635 === r ||
              10636 === r ||
              10637 === r ||
              10638 === r ||
              10639 === r ||
              10640 === r ||
              10641 === r ||
              10642 === r ||
              10643 === r ||
              10644 === r ||
              10645 === r ||
              10646 === r ||
              10647 === r ||
              10648 === r ||
              (r >= 10649 && r <= 10711) ||
              10712 === r ||
              10713 === r ||
              10714 === r ||
              10715 === r ||
              (r >= 10716 && r <= 10747) ||
              10748 === r ||
              10749 === r ||
              (r >= 10750 && r <= 11007) ||
              (r >= 11008 && r <= 11055) ||
              (r >= 11056 && r <= 11076) ||
              (r >= 11077 && r <= 11078) ||
              (r >= 11079 && r <= 11084) ||
              (r >= 11085 && r <= 11123) ||
              (r >= 11124 && r <= 11125) ||
              (r >= 11126 && r <= 11157) ||
              11158 === r ||
              (r >= 11159 && r <= 11263) ||
              (r >= 11776 && r <= 11777) ||
              11778 === r ||
              11779 === r ||
              11780 === r ||
              11781 === r ||
              (r >= 11782 && r <= 11784) ||
              11785 === r ||
              11786 === r ||
              11787 === r ||
              11788 === r ||
              11789 === r ||
              (r >= 11790 && r <= 11798) ||
              11799 === r ||
              (r >= 11800 && r <= 11801) ||
              11802 === r ||
              11803 === r ||
              11804 === r ||
              11805 === r ||
              (r >= 11806 && r <= 11807) ||
              11808 === r ||
              11809 === r ||
              11810 === r ||
              11811 === r ||
              11812 === r ||
              11813 === r ||
              11814 === r ||
              11815 === r ||
              11816 === r ||
              11817 === r ||
              (r >= 11818 && r <= 11822) ||
              11823 === r ||
              (r >= 11824 && r <= 11833) ||
              (r >= 11834 && r <= 11835) ||
              (r >= 11836 && r <= 11839) ||
              11840 === r ||
              11841 === r ||
              11842 === r ||
              (r >= 11843 && r <= 11855) ||
              (r >= 11856 && r <= 11857) ||
              11858 === r ||
              (r >= 11859 && r <= 11903) ||
              (r >= 12289 && r <= 12291) ||
              12296 === r ||
              12297 === r ||
              12298 === r ||
              12299 === r ||
              12300 === r ||
              12301 === r ||
              12302 === r ||
              12303 === r ||
              12304 === r ||
              12305 === r ||
              (r >= 12306 && r <= 12307) ||
              12308 === r ||
              12309 === r ||
              12310 === r ||
              12311 === r ||
              12312 === r ||
              12313 === r ||
              12314 === r ||
              12315 === r ||
              12316 === r ||
              12317 === r ||
              (r >= 12318 && r <= 12319) ||
              12320 === r ||
              12336 === r ||
              64830 === r ||
              64831 === r ||
              (r >= 65093 && r <= 65094)
            )
              break;
            n.push(o), (t += o >= 65536 ? 2 : 1);
          }
          return J.apply(void 0, n);
        };
      var ei = (function () {
        function e(e, t) {
          void 0 === t && (t = {}),
            (this.message = e),
            (this.position = { offset: 0, line: 1, column: 1 }),
            (this.ignoreTag = !!t.ignoreTag),
            (this.locale = t.locale),
            (this.requiresOtherClause = !!t.requiresOtherClause),
            (this.shouldParseSkeletons = !!t.shouldParseSkeletons);
        }
        return (
          (e.prototype.parse = function () {
            if (0 !== this.offset())
              throw Error("parser can only be used once");
            return this.parseMessage(0, "", !1);
          }),
          (e.prototype.parseMessage = function (e, t, n) {
            for (var r = []; !this.isEOF(); ) {
              var o = this.char();
              if (123 === o) {
                var i = this.parseArgument(e, n);
                if (i.err) return i;
                r.push(i.val);
              } else if (125 === o && e > 0) break;
              else if (35 === o && ("plural" === t || "selectordinal" === t)) {
                var a = this.clonePosition();
                this.bump(),
                  r.push({
                    type: s.pound,
                    location: G(a, this.clonePosition()),
                  });
              } else if (60 !== o || this.ignoreTag || 47 !== this.peek()) {
                if (60 === o && !this.ignoreTag && ea(this.peek() || 0)) {
                  var i = this.parseTag(e, t);
                  if (i.err) return i;
                  r.push(i.val);
                } else {
                  var i = this.parseLiteral(e, t);
                  if (i.err) return i;
                  r.push(i.val);
                }
              } else {
                if (!n)
                  return this.error(
                    l.UNMATCHED_CLOSING_TAG,
                    G(this.clonePosition(), this.clonePosition())
                  );
                break;
              }
            }
            return { val: r, err: null };
          }),
          (e.prototype.parseTag = function (e, t) {
            var n = this.clonePosition();
            this.bump();
            var r = this.parseTagName();
            if ((this.bumpSpace(), this.bumpIf("/>")))
              return {
                val: {
                  type: s.literal,
                  value: "<".concat(r, "/>"),
                  location: G(n, this.clonePosition()),
                },
                err: null,
              };
            if (!this.bumpIf(">"))
              return this.error(l.INVALID_TAG, G(n, this.clonePosition()));
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (!this.bumpIf("</"))
              return this.error(l.UNCLOSED_TAG, G(n, this.clonePosition()));
            if (this.isEOF() || !ea(this.char()))
              return this.error(l.INVALID_TAG, G(a, this.clonePosition()));
            var u = this.clonePosition();
            return r !== this.parseTagName()
              ? this.error(l.UNMATCHED_CLOSING_TAG, G(u, this.clonePosition()))
              : (this.bumpSpace(), this.bumpIf(">"))
              ? {
                  val: {
                    type: s.tag,
                    value: r,
                    children: i,
                    location: G(n, this.clonePosition()),
                  },
                  err: null,
                }
              : this.error(l.INVALID_TAG, G(a, this.clonePosition()));
          }),
          (e.prototype.parseTagName = function () {
            var e,
              t = this.offset();
            for (
              this.bump();
              !this.isEOF() &&
              (45 === (e = this.char()) ||
                46 === e ||
                (e >= 48 && e <= 57) ||
                95 === e ||
                (e >= 97 && e <= 122) ||
                (e >= 65 && e <= 90) ||
                183 == e ||
                (e >= 192 && e <= 214) ||
                (e >= 216 && e <= 246) ||
                (e >= 248 && e <= 893) ||
                (e >= 895 && e <= 8191) ||
                (e >= 8204 && e <= 8205) ||
                (e >= 8255 && e <= 8256) ||
                (e >= 8304 && e <= 8591) ||
                (e >= 11264 && e <= 12271) ||
                (e >= 12289 && e <= 55295) ||
                (e >= 63744 && e <= 64975) ||
                (e >= 65008 && e <= 65533) ||
                (e >= 65536 && e <= 983039));

            )
              this.bump();
            return this.message.slice(t, this.offset());
          }),
          (e.prototype.parseLiteral = function (e, t) {
            for (var n = this.clonePosition(), r = ""; ; ) {
              var o = this.tryParseQuote(t);
              if (o) {
                r += o;
                continue;
              }
              var i = this.tryParseUnquoted(e, t);
              if (i) {
                r += i;
                continue;
              }
              var a = this.tryParseLeftAngleBracket();
              if (a) {
                r += a;
                continue;
              }
              break;
            }
            var u = G(n, this.clonePosition());
            return {
              val: { type: s.literal, value: r, location: u },
              err: null,
            };
          }),
          (e.prototype.tryParseLeftAngleBracket = function () {
            var e;
            return this.isEOF() ||
              60 !== this.char() ||
              (!this.ignoreTag && (ea((e = this.peek() || 0)) || 47 === e))
              ? null
              : (this.bump(), "<");
          }),
          (e.prototype.tryParseQuote = function (e) {
            if (this.isEOF() || 39 !== this.char()) return null;
            switch (this.peek()) {
              case 39:
                return this.bump(), this.bump(), "'";
              case 123:
              case 60:
              case 62:
              case 125:
                break;
              case 35:
                if ("plural" === e || "selectordinal" === e) break;
                return null;
              default:
                return null;
            }
            this.bump();
            var t = [this.char()];
            for (this.bump(); !this.isEOF(); ) {
              var n = this.char();
              if (39 === n) {
                if (39 === this.peek()) t.push(39), this.bump();
                else {
                  this.bump();
                  break;
                }
              } else t.push(n);
              this.bump();
            }
            return J.apply(void 0, t);
          }),
          (e.prototype.tryParseUnquoted = function (e, t) {
            if (this.isEOF()) return null;
            var n = this.char();
            return 60 === n ||
              123 === n ||
              (35 === n && ("plural" === t || "selectordinal" === t)) ||
              (125 === n && e > 0)
              ? null
              : (this.bump(), J(n));
          }),
          (e.prototype.parseArgument = function (e, t) {
            var n = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
              return this.error(
                l.EXPECT_ARGUMENT_CLOSING_BRACE,
                G(n, this.clonePosition())
              );
            if (125 === this.char())
              return (
                this.bump(),
                this.error(l.EMPTY_ARGUMENT, G(n, this.clonePosition()))
              );
            var r = this.parseIdentifierIfPossible().value;
            if (!r)
              return this.error(
                l.MALFORMED_ARGUMENT,
                G(n, this.clonePosition())
              );
            if ((this.bumpSpace(), this.isEOF()))
              return this.error(
                l.EXPECT_ARGUMENT_CLOSING_BRACE,
                G(n, this.clonePosition())
              );
            switch (this.char()) {
              case 125:
                return (
                  this.bump(),
                  {
                    val: {
                      type: s.argument,
                      value: r,
                      location: G(n, this.clonePosition()),
                    },
                    err: null,
                  }
                );
              case 44:
                if ((this.bump(), this.bumpSpace(), this.isEOF()))
                  return this.error(
                    l.EXPECT_ARGUMENT_CLOSING_BRACE,
                    G(n, this.clonePosition())
                  );
                return this.parseArgumentOptions(e, t, r, n);
              default:
                return this.error(
                  l.MALFORMED_ARGUMENT,
                  G(n, this.clonePosition())
                );
            }
          }),
          (e.prototype.parseIdentifierIfPossible = function () {
            var e = this.clonePosition(),
              t = this.offset(),
              n = h(this.message, t),
              r = t + n.length;
            return (
              this.bumpTo(r), { value: n, location: G(e, this.clonePosition()) }
            );
          }),
          (e.prototype.parseArgumentOptions = function (e, t, n, r) {
            var o,
              i = this.clonePosition(),
              a = this.parseIdentifierIfPossible().value,
              u = this.clonePosition();
            switch (a) {
              case "":
                return this.error(l.EXPECT_ARGUMENT_TYPE, G(i, u));
              case "number":
              case "date":
              case "time":
                this.bumpSpace();
                var f = null;
                if (this.bumpIf(",")) {
                  this.bumpSpace();
                  var h = this.clonePosition(),
                    d = this.parseSimpleArgStyleIfPossible();
                  if (d.err) return d;
                  var p = en(d.val);
                  if (0 === p.length)
                    return this.error(
                      l.EXPECT_ARGUMENT_STYLE,
                      G(this.clonePosition(), this.clonePosition())
                    );
                  f = { style: p, styleLocation: G(h, this.clonePosition()) };
                }
                var g = this.tryParseArgumentClose(r);
                if (g.err) return g;
                var m = G(r, this.clonePosition());
                if (f && W(null == f ? void 0 : f.style, "::", 0)) {
                  var y,
                    b = et(f.style.slice(2));
                  if ("number" === a) {
                    var d = this.parseNumberSkeletonFromString(
                      b,
                      f.styleLocation
                    );
                    if (d.err) return d;
                    return {
                      val: {
                        type: s.number,
                        value: n,
                        location: m,
                        style: d.val,
                      },
                      err: null,
                    };
                  }
                  if (0 === b.length)
                    return this.error(l.EXPECT_DATE_TIME_SKELETON, m);
                  var _ = b;
                  this.locale &&
                    (_ = (function (e, t) {
                      for (var n = "", r = 0; r < e.length; r++) {
                        var o = e.charAt(r);
                        if ("j" === o) {
                          for (
                            var i = 0;
                            r + 1 < e.length && e.charAt(r + 1) === o;

                          )
                            i++, r++;
                          var a = 1 + (1 & i),
                            u = i < 2 ? 1 : 3 + (i >> 1),
                            l = (function (e) {
                              var t,
                                n = e.hourCycle;
                              if (
                                (void 0 === n &&
                                  e.hourCycles &&
                                  e.hourCycles.length &&
                                  (n = e.hourCycles[0]),
                                n)
                              )
                                switch (n) {
                                  case "h24":
                                    return "k";
                                  case "h23":
                                    return "H";
                                  case "h12":
                                    return "h";
                                  case "h11":
                                    return "K";
                                  default:
                                    throw Error("Invalid hourCycle");
                                }
                              var r = e.language;
                              return (
                                "root" !== r && (t = e.maximize().region),
                                (j[t || ""] ||
                                  j[r || ""] ||
                                  j["".concat(r, "-001")] ||
                                  j["001"])[0]
                              );
                            })(t);
                          for (("H" == l || "k" == l) && (u = 0); u-- > 0; )
                            n += "a";
                          for (; a-- > 0; ) n = l + n;
                        } else "J" === o ? (n += "H") : (n += o);
                      }
                      return n;
                    })(b, this.locale));
                  var p = {
                    type: c.dateTime,
                    pattern: _,
                    location: f.styleLocation,
                    parsedOptions: this.shouldParseSkeletons
                      ? ((y = {}),
                        _.replace(x, function (e) {
                          var t = e.length;
                          switch (e[0]) {
                            case "G":
                              y.era =
                                4 === t ? "long" : 5 === t ? "narrow" : "short";
                              break;
                            case "y":
                              y.year = 2 === t ? "2-digit" : "numeric";
                              break;
                            case "Y":
                            case "u":
                            case "U":
                            case "r":
                              throw RangeError(
                                "`Y/u/U/r` (year) patterns are not supported, use `y` instead"
                              );
                            case "q":
                            case "Q":
                              throw RangeError(
                                "`q/Q` (quarter) patterns are not supported"
                              );
                            case "M":
                            case "L":
                              y.month = [
                                "numeric",
                                "2-digit",
                                "short",
                                "long",
                                "narrow",
                              ][t - 1];
                              break;
                            case "w":
                            case "W":
                              throw RangeError(
                                "`w/W` (week) patterns are not supported"
                              );
                            case "d":
                              y.day = ["numeric", "2-digit"][t - 1];
                              break;
                            case "D":
                            case "F":
                            case "g":
                              throw RangeError(
                                "`D/F/g` (day) patterns are not supported, use `d` instead"
                              );
                            case "E":
                              y.weekday =
                                4 === t
                                  ? "short"
                                  : 5 === t
                                  ? "narrow"
                                  : "short";
                              break;
                            case "e":
                              if (t < 4)
                                throw RangeError(
                                  "`e..eee` (weekday) patterns are not supported"
                                );
                              y.weekday = ["short", "long", "narrow", "short"][
                                t - 4
                              ];
                              break;
                            case "c":
                              if (t < 4)
                                throw RangeError(
                                  "`c..ccc` (weekday) patterns are not supported"
                                );
                              y.weekday = ["short", "long", "narrow", "short"][
                                t - 4
                              ];
                              break;
                            case "a":
                              y.hour12 = !0;
                              break;
                            case "b":
                            case "B":
                              throw RangeError(
                                "`b/B` (period) patterns are not supported, use `a` instead"
                              );
                            case "h":
                              (y.hourCycle = "h12"),
                                (y.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "H":
                              (y.hourCycle = "h23"),
                                (y.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "K":
                              (y.hourCycle = "h11"),
                                (y.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "k":
                              (y.hourCycle = "h24"),
                                (y.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "j":
                            case "J":
                            case "C":
                              throw RangeError(
                                "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead"
                              );
                            case "m":
                              y.minute = ["numeric", "2-digit"][t - 1];
                              break;
                            case "s":
                              y.second = ["numeric", "2-digit"][t - 1];
                              break;
                            case "S":
                            case "A":
                              throw RangeError(
                                "`S/A` (second) patterns are not supported, use `s` instead"
                              );
                            case "z":
                              y.timeZoneName = t < 4 ? "short" : "long";
                              break;
                            case "Z":
                            case "O":
                            case "v":
                            case "V":
                            case "X":
                            case "x":
                              throw RangeError(
                                "`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead"
                              );
                          }
                          return "";
                        }),
                        y)
                      : {},
                  };
                  return {
                    val: {
                      type: "date" === a ? s.date : s.time,
                      value: n,
                      location: m,
                      style: p,
                    },
                    err: null,
                  };
                }
                return {
                  val: {
                    type:
                      "number" === a
                        ? s.number
                        : "date" === a
                        ? s.date
                        : s.time,
                    value: n,
                    location: m,
                    style:
                      null !== (o = null == f ? void 0 : f.style) &&
                      void 0 !== o
                        ? o
                        : null,
                  },
                  err: null,
                };
              case "plural":
              case "selectordinal":
              case "select":
                var w = this.clonePosition();
                if ((this.bumpSpace(), !this.bumpIf(",")))
                  return this.error(
                    l.EXPECT_SELECT_ARGUMENT_OPTIONS,
                    G(w, v({}, w))
                  );
                this.bumpSpace();
                var E = this.parseIdentifierIfPossible(),
                  S = 0;
                if ("select" !== a && "offset" === E.value) {
                  if (!this.bumpIf(":"))
                    return this.error(
                      l.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      G(this.clonePosition(), this.clonePosition())
                    );
                  this.bumpSpace();
                  var d = this.tryParseDecimalInteger(
                    l.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                    l.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE
                  );
                  if (d.err) return d;
                  this.bumpSpace(),
                    (E = this.parseIdentifierIfPossible()),
                    (S = d.val);
                }
                var C = this.tryParsePluralOrSelectOptions(e, a, t, E);
                if (C.err) return C;
                var g = this.tryParseArgumentClose(r);
                if (g.err) return g;
                var M = G(r, this.clonePosition());
                if ("select" === a)
                  return {
                    val: {
                      type: s.select,
                      value: n,
                      options: Q(C.val),
                      location: M,
                    },
                    err: null,
                  };
                return {
                  val: {
                    type: s.plural,
                    value: n,
                    options: Q(C.val),
                    offset: S,
                    pluralType: "plural" === a ? "cardinal" : "ordinal",
                    location: M,
                  },
                  err: null,
                };
              default:
                return this.error(l.INVALID_ARGUMENT_TYPE, G(i, u));
            }
          }),
          (e.prototype.tryParseArgumentClose = function (e) {
            return this.isEOF() || 125 !== this.char()
              ? this.error(
                  l.EXPECT_ARGUMENT_CLOSING_BRACE,
                  G(e, this.clonePosition())
                )
              : (this.bump(), { val: !0, err: null });
          }),
          (e.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var e = 0, t = this.clonePosition(); !this.isEOF(); )
              switch (this.char()) {
                case 39:
                  this.bump();
                  var n = this.clonePosition();
                  if (!this.bumpUntil("'"))
                    return this.error(
                      l.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                      G(n, this.clonePosition())
                    );
                  this.bump();
                  break;
                case 123:
                  (e += 1), this.bump();
                  break;
                case 125:
                  if (!(e > 0))
                    return {
                      val: this.message.slice(t.offset, this.offset()),
                      err: null,
                    };
                  e -= 1;
                  break;
                default:
                  this.bump();
              }
            return {
              val: this.message.slice(t.offset, this.offset()),
              err: null,
            };
          }),
          (e.prototype.parseNumberSkeletonFromString = function (e, t) {
            var n = [];
            try {
              n = (function (e) {
                if (0 === e.length)
                  throw Error("Number skeleton cannot be empty");
                for (
                  var t = e.split(I).filter(function (e) {
                      return e.length > 0;
                    }),
                    n = [],
                    r = 0;
                  r < t.length;
                  r++
                ) {
                  var o = t[r].split("/");
                  if (0 === o.length) throw Error("Invalid number skeleton");
                  for (var i = o[0], a = o.slice(1), u = 0; u < a.length; u++)
                    if (0 === a[u].length)
                      throw Error("Invalid number skeleton");
                  n.push({ stem: i, options: a });
                }
                return n;
              })(e);
            } catch (e) {
              return this.error(l.INVALID_NUMBER_SKELETON, t);
            }
            return {
              val: {
                type: c.number,
                tokens: n,
                location: t,
                parsedOptions: this.shouldParseSkeletons
                  ? (function (e) {
                      for (var t = {}, n = 0; n < e.length; n++) {
                        var r = e[n];
                        switch (r.stem) {
                          case "percent":
                          case "%":
                            t.style = "percent";
                            continue;
                          case "%x100":
                            (t.style = "percent"), (t.scale = 100);
                            continue;
                          case "currency":
                            (t.style = "currency"), (t.currency = r.options[0]);
                            continue;
                          case "group-off":
                          case ",_":
                            t.useGrouping = !1;
                            continue;
                          case "precision-integer":
                          case ".":
                            t.maximumFractionDigits = 0;
                            continue;
                          case "measure-unit":
                          case "unit":
                            (t.style = "unit"),
                              (t.unit = r.options[0].replace(/^(.*?)-/, ""));
                            continue;
                          case "compact-short":
                          case "K":
                            (t.notation = "compact"),
                              (t.compactDisplay = "short");
                            continue;
                          case "compact-long":
                          case "KK":
                            (t.notation = "compact"),
                              (t.compactDisplay = "long");
                            continue;
                          case "scientific":
                            t = v(
                              v(v({}, t), { notation: "scientific" }),
                              r.options.reduce(function (e, t) {
                                return v(v({}, e), L(t) || {});
                              }, {})
                            );
                            continue;
                          case "engineering":
                            t = v(
                              v(v({}, t), { notation: "engineering" }),
                              r.options.reduce(function (e, t) {
                                return v(v({}, e), L(t) || {});
                              }, {})
                            );
                            continue;
                          case "notation-simple":
                            t.notation = "standard";
                            continue;
                          case "unit-width-narrow":
                            (t.currencyDisplay = "narrowSymbol"),
                              (t.unitDisplay = "narrow");
                            continue;
                          case "unit-width-short":
                            (t.currencyDisplay = "code"),
                              (t.unitDisplay = "short");
                            continue;
                          case "unit-width-full-name":
                            (t.currencyDisplay = "name"),
                              (t.unitDisplay = "long");
                            continue;
                          case "unit-width-iso-code":
                            t.currencyDisplay = "symbol";
                            continue;
                          case "scale":
                            t.scale = parseFloat(r.options[0]);
                            continue;
                          case "integer-width":
                            if (r.options.length > 1)
                              throw RangeError(
                                "integer-width stems only accept a single optional option"
                              );
                            r.options[0].replace(
                              k,
                              function (e, n, r, o, i, a) {
                                if (n) t.minimumIntegerDigits = r.length;
                                else if (o && i)
                                  throw Error(
                                    "We currently do not support maximum integer digits"
                                  );
                                else if (a)
                                  throw Error(
                                    "We currently do not support exact integer digits"
                                  );
                                return "";
                              }
                            );
                            continue;
                        }
                        if (O.test(r.stem)) {
                          t.minimumIntegerDigits = r.stem.length;
                          continue;
                        }
                        if (N.test(r.stem)) {
                          if (r.options.length > 1)
                            throw RangeError(
                              "Fraction-precision stems only accept a single optional option"
                            );
                          r.stem.replace(N, function (e, n, r, o, i, a) {
                            return (
                              "*" === r
                                ? (t.minimumFractionDigits = n.length)
                                : o && "#" === o[0]
                                ? (t.maximumFractionDigits = o.length)
                                : i && a
                                ? ((t.minimumFractionDigits = i.length),
                                  (t.maximumFractionDigits =
                                    i.length + a.length))
                                : ((t.minimumFractionDigits = n.length),
                                  (t.maximumFractionDigits = n.length)),
                              ""
                            );
                          });
                          var o = r.options[0];
                          "w" === o
                            ? (t = v(v({}, t), {
                                trailingZeroDisplay: "stripIfInteger",
                              }))
                            : o && (t = v(v({}, t), F(o)));
                          continue;
                        }
                        if (T.test(r.stem)) {
                          t = v(v({}, t), F(r.stem));
                          continue;
                        }
                        var i = L(r.stem);
                        i && (t = v(v({}, t), i));
                        var a = (function (e) {
                          var t;
                          if (
                            ("E" === e[0] && "E" === e[1]
                              ? ((t = { notation: "engineering" }),
                                (e = e.slice(2)))
                              : "E" === e[0] &&
                                ((t = { notation: "scientific" }),
                                (e = e.slice(1))),
                            t)
                          ) {
                            var n = e.slice(0, 2);
                            if (
                              ("+!" === n
                                ? ((t.signDisplay = "always"), (e = e.slice(2)))
                                : "+?" === n &&
                                  ((t.signDisplay = "exceptZero"),
                                  (e = e.slice(2))),
                              !O.test(e))
                            )
                              throw Error(
                                "Malformed concise eng/scientific notation"
                              );
                            t.minimumIntegerDigits = e.length;
                          }
                          return t;
                        })(r.stem);
                        a && (t = v(v({}, t), a));
                      }
                      return t;
                    })(n)
                  : {},
              },
              err: null,
            };
          }),
          (e.prototype.tryParsePluralOrSelectOptions = function (e, t, n, r) {
            for (
              var o, i = !1, a = [], u = new Set(), s = r.value, c = r.location;
              ;

            ) {
              if (0 === s.length) {
                var f = this.clonePosition();
                if ("select" !== t && this.bumpIf("=")) {
                  var h = this.tryParseDecimalInteger(
                    l.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                    l.INVALID_PLURAL_ARGUMENT_SELECTOR
                  );
                  if (h.err) return h;
                  (c = G(f, this.clonePosition())),
                    (s = this.message.slice(f.offset, this.offset()));
                } else break;
              }
              if (u.has(s))
                return this.error(
                  "select" === t
                    ? l.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : l.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  c
                );
              "other" === s && (i = !0), this.bumpSpace();
              var d = this.clonePosition();
              if (!this.bumpIf("{"))
                return this.error(
                  "select" === t
                    ? l.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : l.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                  G(this.clonePosition(), this.clonePosition())
                );
              var p = this.parseMessage(e + 1, t, n);
              if (p.err) return p;
              var g = this.tryParseArgumentClose(d);
              if (g.err) return g;
              a.push([
                s,
                { value: p.val, location: G(d, this.clonePosition()) },
              ]),
                u.add(s),
                this.bumpSpace(),
                (s = (o = this.parseIdentifierIfPossible()).value),
                (c = o.location);
            }
            return 0 === a.length
              ? this.error(
                  "select" === t
                    ? l.EXPECT_SELECT_ARGUMENT_SELECTOR
                    : l.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  G(this.clonePosition(), this.clonePosition())
                )
              : this.requiresOtherClause && !i
              ? this.error(
                  l.MISSING_OTHER_CLAUSE,
                  G(this.clonePosition(), this.clonePosition())
                )
              : { val: a, err: null };
          }),
          (e.prototype.tryParseDecimalInteger = function (e, t) {
            var n = 1,
              r = this.clonePosition();
            this.bumpIf("+") || (this.bumpIf("-") && (n = -1));
            for (var o = !1, i = 0; !this.isEOF(); ) {
              var a = this.char();
              if (a >= 48 && a <= 57)
                (o = !0), (i = 10 * i + (a - 48)), this.bump();
              else break;
            }
            var u = G(r, this.clonePosition());
            return o
              ? K((i *= n))
                ? { val: i, err: null }
                : this.error(t, u)
              : this.error(e, u);
          }),
          (e.prototype.offset = function () {
            return this.position.offset;
          }),
          (e.prototype.isEOF = function () {
            return this.offset() === this.message.length;
          }),
          (e.prototype.clonePosition = function () {
            return {
              offset: this.position.offset,
              line: this.position.line,
              column: this.position.column,
            };
          }),
          (e.prototype.char = function () {
            var e = this.position.offset;
            if (e >= this.message.length) throw Error("out of bound");
            var t = ee(this.message, e);
            if (void 0 === t)
              throw Error(
                "Offset ".concat(e, " is at invalid UTF-16 code unit boundary")
              );
            return t;
          }),
          (e.prototype.error = function (e, t) {
            return {
              val: null,
              err: { kind: e, message: this.message, location: t },
            };
          }),
          (e.prototype.bump = function () {
            if (!this.isEOF()) {
              var e = this.char();
              10 === e
                ? ((this.position.line += 1),
                  (this.position.column = 1),
                  (this.position.offset += 1))
                : ((this.position.column += 1),
                  (this.position.offset += e < 65536 ? 1 : 2));
            }
          }),
          (e.prototype.bumpIf = function (e) {
            if (W(this.message, e, this.offset())) {
              for (var t = 0; t < e.length; t++) this.bump();
              return !0;
            }
            return !1;
          }),
          (e.prototype.bumpUntil = function (e) {
            var t = this.offset(),
              n = this.message.indexOf(e, t);
            return n >= 0
              ? (this.bumpTo(n), !0)
              : (this.bumpTo(this.message.length), !1);
          }),
          (e.prototype.bumpTo = function (e) {
            if (this.offset() > e)
              throw Error(
                "targetOffset "
                  .concat(
                    e,
                    " must be greater than or equal to the current offset "
                  )
                  .concat(this.offset())
              );
            for (e = Math.min(e, this.message.length); ; ) {
              var t = this.offset();
              if (t === e) break;
              if (t > e)
                throw Error(
                  "targetOffset ".concat(
                    e,
                    " is at invalid UTF-16 code unit boundary"
                  )
                );
              if ((this.bump(), this.isEOF())) break;
            }
          }),
          (e.prototype.bumpSpace = function () {
            for (; !this.isEOF() && eu(this.char()); ) this.bump();
          }),
          (e.prototype.peek = function () {
            if (this.isEOF()) return null;
            var e = this.char(),
              t = this.offset(),
              n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
            return null != n ? n : null;
          }),
          e
        );
      })();
      function ea(e) {
        return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
      }
      function eu(e) {
        return (
          (e >= 9 && e <= 13) ||
          32 === e ||
          133 === e ||
          (e >= 8206 && e <= 8207) ||
          8232 === e ||
          8233 === e
        );
      }
      function el(e, t) {
        void 0 === t && (t = {});
        var n = new ei(
          e,
          (t = v({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t))
        ).parse();
        if (n.err) {
          var r = SyntaxError(l[n.err.kind]);
          throw (
            ((r.location = n.err.location),
            (r.originalMessage = n.err.message),
            r)
          );
        }
        return (
          (null == t ? void 0 : t.captureLocation) ||
            (function e(t) {
              t.forEach(function (t) {
                if ((delete t.location, S(t) || C(t)))
                  for (var n in t.options)
                    delete t.options[n].location, e(t.options[n].value);
                else
                  _(t) && P(t.style)
                    ? delete t.style.location
                    : (w(t) || E(t)) && R(t.style)
                    ? delete t.style.location
                    : M(t) && e(t.children);
              });
            })(n.val),
          n.val
        );
      }
      function es(e, t) {
        var n = t && t.cache ? t.cache : ep,
          r = t && t.serializer ? t.serializer : eh;
        return (
          t && t.strategy
            ? t.strategy
            : function (e, t) {
                var n,
                  r,
                  o = 1 === e.length ? ec : ef;
                return (
                  (n = t.cache.create()),
                  (r = t.serializer),
                  o.bind(this, e, n, r)
                );
              }
        )(e, { cache: n, serializer: r });
      }
      function ec(e, t, n, r) {
        var o =
            null == r || "number" == typeof r || "boolean" == typeof r
              ? r
              : n(r),
          i = t.get(o);
        return void 0 === i && ((i = e.call(this, r)), t.set(o, i)), i;
      }
      function ef(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && ((i = e.apply(this, r)), t.set(o, i)), i;
      }
      var eh = function () {
        return JSON.stringify(arguments);
      };
      function ed() {
        this.cache = Object.create(null);
      }
      (ed.prototype.get = function (e) {
        return this.cache[e];
      }),
        (ed.prototype.set = function (e, t) {
          this.cache[e] = t;
        });
      var ep = {
          create: function () {
            return new ed();
          },
        },
        eg = {
          variadic: function (e, t) {
            var n, r;
            return (
              (n = t.cache.create()), (r = t.serializer), ef.bind(this, e, n, r)
            );
          },
        };
      ((a = d || (d = {})).MISSING_VALUE = "MISSING_VALUE"),
        (a.INVALID_VALUE = "INVALID_VALUE"),
        (a.MISSING_INTL_API = "MISSING_INTL_API");
      var em = (function (e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return (o.code = n), (o.originalMessage = r), o;
          }
          return (
            m(t, e),
            (t.prototype.toString = function () {
              return "[formatjs Error: "
                .concat(this.code, "] ")
                .concat(this.message);
            }),
            t
          );
        })(Error),
        ev = (function (e) {
          function t(t, n, r, o) {
            return (
              e.call(
                this,
                'Invalid values for "'
                  .concat(t, '": "')
                  .concat(n, '". Options are "')
                  .concat(Object.keys(r).join('", "'), '"'),
                d.INVALID_VALUE,
                o
              ) || this
            );
          }
          return m(t, e), t;
        })(em),
        ey = (function (e) {
          function t(t, n, r) {
            return (
              e.call(
                this,
                'Value for "'.concat(t, '" must be of type ').concat(n),
                d.INVALID_VALUE,
                r
              ) || this
            );
          }
          return m(t, e), t;
        })(em),
        eb = (function (e) {
          function t(t, n) {
            return (
              e.call(
                this,
                'The intl string context variable "'
                  .concat(t, '" was not provided to the string "')
                  .concat(n, '"'),
                d.MISSING_VALUE,
                n
              ) || this
            );
          }
          return m(t, e), t;
        })(em);
      function e_(e) {
        return "function" == typeof e;
      }
      function ew(e, t, n, r, o, i, a) {
        if (1 === e.length && b(e[0]))
          return [{ type: p.literal, value: e[0].value }];
        for (var u = [], l = 0; l < e.length; l++) {
          var c = e[l];
          if (b(c)) {
            u.push({ type: p.literal, value: c.value });
            continue;
          }
          if (c.type === s.pound) {
            "number" == typeof i &&
              u.push({
                type: p.literal,
                value: n.getNumberFormat(t).format(i),
              });
            continue;
          }
          var f = c.value;
          if (!(o && f in o)) throw new eb(f, a);
          var h = o[f];
          if (c.type === s.argument) {
            (h && "string" != typeof h && "number" != typeof h) ||
              (h =
                "string" == typeof h || "number" == typeof h ? String(h) : ""),
              u.push({
                type: "string" == typeof h ? p.literal : p.object,
                value: h,
              });
            continue;
          }
          if (w(c)) {
            var g =
              "string" == typeof c.style
                ? r.date[c.style]
                : R(c.style)
                ? c.style.parsedOptions
                : void 0;
            u.push({
              type: p.literal,
              value: n.getDateTimeFormat(t, g).format(h),
            });
            continue;
          }
          if (E(c)) {
            var g =
              "string" == typeof c.style
                ? r.time[c.style]
                : R(c.style)
                ? c.style.parsedOptions
                : r.time.medium;
            u.push({
              type: p.literal,
              value: n.getDateTimeFormat(t, g).format(h),
            });
            continue;
          }
          if (_(c)) {
            var g =
              "string" == typeof c.style
                ? r.number[c.style]
                : P(c.style)
                ? c.style.parsedOptions
                : void 0;
            g && g.scale && (h *= g.scale || 1),
              u.push({
                type: p.literal,
                value: n.getNumberFormat(t, g).format(h),
              });
            continue;
          }
          if (M(c)) {
            var m = c.children,
              v = c.value,
              y = o[v];
            if (!e_(y)) throw new ey(v, "function", a);
            var A = y(
              ew(m, t, n, r, o, i).map(function (e) {
                return e.value;
              })
            );
            Array.isArray(A) || (A = [A]),
              u.push.apply(
                u,
                A.map(function (e) {
                  return {
                    type: "string" == typeof e ? p.literal : p.object,
                    value: e,
                  };
                })
              );
          }
          if (S(c)) {
            var x = c.options[h] || c.options.other;
            if (!x) throw new ev(c.value, h, Object.keys(c.options), a);
            u.push.apply(u, ew(x.value, t, n, r, o));
            continue;
          }
          if (C(c)) {
            var x = c.options["=".concat(h)];
            if (!x) {
              if (!Intl.PluralRules)
                throw new em(
                  'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                  d.MISSING_INTL_API,
                  a
                );
              var I = n
                .getPluralRules(t, { type: c.pluralType })
                .select(h - (c.offset || 0));
              x = c.options[I] || c.options.other;
            }
            if (!x) throw new ev(c.value, h, Object.keys(c.options), a);
            u.push.apply(u, ew(x.value, t, n, r, o, h - (c.offset || 0)));
            continue;
          }
        }
        return u.length < 2
          ? u
          : u.reduce(function (e, t) {
              var n = e[e.length - 1];
              return (
                n && n.type === p.literal && t.type === p.literal
                  ? (n.value += t.value)
                  : e.push(t),
                e
              );
            }, []);
      }
      function eE(e) {
        return {
          create: function () {
            return {
              get: function (t) {
                return e[t];
              },
              set: function (t, n) {
                e[t] = n;
              },
            };
          },
        };
      }
      ((u = p || (p = {}))[(u.literal = 0)] = "literal"),
        (u[(u.object = 1)] = "object");
      var eS = (function () {
          function e(t, n, r, o) {
            var i,
              a,
              u = this;
            if (
              (void 0 === n && (n = e.defaultLocale),
              (this.formatterCache = {
                number: {},
                dateTime: {},
                pluralRules: {},
              }),
              (this.format = function (e) {
                var t = u.formatToParts(e);
                if (1 === t.length) return t[0].value;
                var n = t.reduce(function (e, t) {
                  return (
                    e.length &&
                    t.type === p.literal &&
                    "string" == typeof e[e.length - 1]
                      ? (e[e.length - 1] += t.value)
                      : e.push(t.value),
                    e
                  );
                }, []);
                return n.length <= 1 ? n[0] || "" : n;
              }),
              (this.formatToParts = function (e) {
                return ew(
                  u.ast,
                  u.locales,
                  u.formatters,
                  u.formats,
                  e,
                  void 0,
                  u.message
                );
              }),
              (this.resolvedOptions = function () {
                return { locale: u.resolvedLocale.toString() };
              }),
              (this.getAst = function () {
                return u.ast;
              }),
              (this.locales = n),
              (this.resolvedLocale = e.resolveLocale(n)),
              "string" == typeof t)
            ) {
              if (((this.message = t), !e.__parse))
                throw TypeError(
                  "IntlMessageFormat.__parse must be set to process `message` of type `string`"
                );
              this.ast = e.__parse(t, {
                ignoreTag: null == o ? void 0 : o.ignoreTag,
                locale: this.resolvedLocale,
              });
            } else this.ast = t;
            if (!Array.isArray(this.ast))
              throw TypeError("A message must be provided as a String or AST.");
            (this.formats =
              ((i = e.formats),
              r
                ? Object.keys(i).reduce(function (e, t) {
                    var n, o;
                    return (
                      (e[t] =
                        ((n = i[t]),
                        (o = r[t])
                          ? v(
                              v(v({}, n || {}), o || {}),
                              Object.keys(n).reduce(function (e, t) {
                                return (e[t] = v(v({}, n[t]), o[t] || {})), e;
                              }, {})
                            )
                          : n)),
                      e
                    );
                  }, v({}, i))
                : i)),
              (this.formatters =
                (o && o.formatters) ||
                (void 0 === (a = this.formatterCache) &&
                  (a = { number: {}, dateTime: {}, pluralRules: {} }),
                {
                  getNumberFormat: es(
                    function () {
                      for (var e, t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                      return new ((e = Intl.NumberFormat).bind.apply(
                        e,
                        y([void 0], t, !1)
                      ))();
                    },
                    { cache: eE(a.number), strategy: eg.variadic }
                  ),
                  getDateTimeFormat: es(
                    function () {
                      for (var e, t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                      return new ((e = Intl.DateTimeFormat).bind.apply(
                        e,
                        y([void 0], t, !1)
                      ))();
                    },
                    { cache: eE(a.dateTime), strategy: eg.variadic }
                  ),
                  getPluralRules: es(
                    function () {
                      for (var e, t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                      return new ((e = Intl.PluralRules).bind.apply(
                        e,
                        y([void 0], t, !1)
                      ))();
                    },
                    { cache: eE(a.pluralRules), strategy: eg.variadic }
                  ),
                }));
          }
          return (
            Object.defineProperty(e, "defaultLocale", {
              get: function () {
                return (
                  e.memoizedDefaultLocale ||
                    (e.memoizedDefaultLocale =
                      new Intl.NumberFormat().resolvedOptions().locale),
                  e.memoizedDefaultLocale
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.memoizedDefaultLocale = null),
            (e.resolveLocale = function (e) {
              var t = Intl.NumberFormat.supportedLocalesOf(e);
              return new Intl.Locale(
                t.length > 0 ? t[0] : "string" == typeof e ? e : e[0]
              );
            }),
            (e.__parse = el),
            (e.formats = {
              number: {
                integer: { maximumFractionDigits: 0 },
                currency: { style: "currency" },
                percent: { style: "percent" },
              },
              date: {
                short: { month: "numeric", day: "numeric", year: "2-digit" },
                medium: { month: "short", day: "numeric", year: "numeric" },
                long: { month: "long", day: "numeric", year: "numeric" },
                full: {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                },
              },
              time: {
                short: { hour: "numeric", minute: "numeric" },
                medium: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                },
                long: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  timeZoneName: "short",
                },
                full: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  timeZoneName: "short",
                },
              },
            }),
            e
          );
        })(),
        eC = eS;
    },
    36916: function (e, t) {
      "use strict";
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.extends = n);
    },
    50116: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(73404),
        o = n(28804),
        i = n(69484),
        a = n(23720);
      (t.useFormatter = r.useFormatter),
        (t.useTranslations = r.useTranslations),
        (t.useLocale = o.default),
        (t.NextIntlClientProvider = i.default),
        Object.keys(a).forEach(function (e) {
          "default" === e ||
            Object.prototype.hasOwnProperty.call(t, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            });
        });
    },
    73404: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(23720);
      function o(e, t) {
        return function () {
          try {
            return t(...arguments);
          } catch (e) {
            throw Error(void 0);
          }
        };
      }
      let i = o(0, r.useTranslations),
        a = o(0, r.useFormatter);
      (t.useFormatter = a),
        (t.useTranslations = i),
        Object.keys(r).forEach(function (e) {
          "default" === e ||
            Object.prototype.hasOwnProperty.call(t, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return r[e];
              },
            });
        });
    },
    28804: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(24033),
        o = n(50836),
        i = n(82606);
      t.default = function () {
        let e;
        let t = r.useParams();
        try {
          e = o.useLocale();
        } catch (n) {
          if (
            "string" != typeof (null == t ? void 0 : t[i.LOCALE_SEGMENT_NAME])
          )
            throw n;
          e = t[i.LOCALE_SEGMENT_NAME];
        }
        return e;
      };
    },
    69484: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(36916),
        o = n(2265),
        i = n(99849),
        a = o && o.__esModule ? o : { default: o };
      t.default = function (e) {
        let { locale: t, ...n } = e;
        if (!t) throw Error(void 0);
        return a.default.createElement(
          i.IntlProvider,
          r.extends({ locale: t }, n)
        );
      };
    },
    82606: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.COOKIE_LOCALE_NAME = "NEXT_LOCALE"),
        (t.HEADER_LOCALE_NAME = "X-NEXT-INTL-LOCALE"),
        (t.LOCALE_SEGMENT_NAME = "locale");
    },
    81749: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let r = n(21024),
        o = n(68533)._(n(2265)),
        i = r._(n(54887)),
        a = r._(n(42251)),
        u = n(38630),
        l = n(76906),
        s = n(60337);
      n(76184);
      let c = n(46993),
        f = r._(n(10536)),
        h = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function d(e, t, n, r, o, i) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    o = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function p(e) {
        let [t, n] = o.version.split(".", 2),
          r = parseInt(t, 10),
          i = parseInt(n, 10);
        return r > 18 || (18 === r && i >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      let g = (0, o.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: r,
          sizes: i,
          height: a,
          width: u,
          decoding: l,
          className: s,
          style: c,
          fetchPriority: f,
          placeholder: h,
          loading: g,
          unoptimized: m,
          fill: v,
          onLoadRef: y,
          onLoadingCompleteRef: b,
          setBlurComplete: _,
          setShowAltText: w,
          onLoad: E,
          onError: S,
          ...C
        } = e;
        return o.default.createElement("img", {
          ...C,
          ...p(f),
          loading: g,
          width: u,
          height: a,
          decoding: l,
          "data-nimg": v ? "fill" : "1",
          className: s,
          style: c,
          sizes: i,
          srcSet: r,
          src: n,
          ref: (0, o.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e && (S && (e.src = e.src), e.complete && d(e, h, y, b, _, m));
            },
            [n, h, y, b, _, S, m, t]
          ),
          onLoad: (e) => {
            d(e.currentTarget, h, y, b, _, m);
          },
          onError: (e) => {
            w(!0), "empty" !== h && _(!0), S && S(e);
          },
        });
      });
      function m(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...p(n.fetchPriority),
          };
        return t && i.default.preload
          ? (i.default.preload(n.src, r), null)
          : o.default.createElement(
              a.default,
              null,
              o.default.createElement("link", {
                key: "__nimg-" + n.src + n.srcSet + n.sizes,
                rel: "preload",
                href: n.srcSet ? void 0 : n.src,
                ...r,
              })
            );
      }
      let v = (0, o.forwardRef)((e, t) => {
        let n = (0, o.useContext)(c.RouterContext),
          r = (0, o.useContext)(s.ImageConfigContext),
          i = (0, o.useMemo)(() => {
            let e = h || r || l.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [r]),
          { onLoad: a, onLoadingComplete: d } = e,
          p = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          p.current = a;
        }, [a]);
        let v = (0, o.useRef)(d);
        (0, o.useEffect)(() => {
          v.current = d;
        }, [d]);
        let [y, b] = (0, o.useState)(!1),
          [_, w] = (0, o.useState)(!1),
          { props: E, meta: S } = (0, u.getImgProps)(e, {
            defaultLoader: f.default,
            imgConf: i,
            blurComplete: y,
            showAltText: _,
          });
        return o.default.createElement(
          o.default.Fragment,
          null,
          o.default.createElement(g, {
            ...E,
            unoptimized: S.unoptimized,
            placeholder: S.placeholder,
            fill: S.fill,
            onLoadRef: p,
            onLoadingCompleteRef: v,
            setBlurComplete: b,
            setShowAltText: w,
            ref: t,
          }),
          S.priority
            ? o.default.createElement(m, { isAppRouter: !n, imgAttributes: E })
            : null
        );
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2595: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(21024)._(n(2265)).default.createContext({});
    },
    43044: function (e, t) {
      "use strict";
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    38630: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }),
        n(76184);
      let r = n(67160),
        o = n(76906);
      function i(e) {
        return void 0 !== e.default;
      }
      function a(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function u(e, t) {
        var n;
        let u,
          l,
          s,
          {
            src: c,
            sizes: f,
            unoptimized: h = !1,
            priority: d = !1,
            loading: p,
            className: g,
            quality: m,
            width: v,
            height: y,
            fill: b = !1,
            style: _,
            onLoad: w,
            onLoadingComplete: E,
            placeholder: S = "empty",
            blurDataURL: C,
            fetchPriority: M,
            layout: P,
            objectFit: R,
            objectPosition: A,
            lazyBoundary: x,
            lazyRoot: I,
            ...N
          } = e,
          { imgConf: T, showAltText: k, blurComplete: O, defaultLoader: F } = t,
          L = T || o.imageConfigDefault;
        if ("allSizes" in L) u = L;
        else {
          let e = [...L.deviceSizes, ...L.imageSizes].sort((e, t) => e - t),
            t = L.deviceSizes.sort((e, t) => e - t);
          u = { ...L, allSizes: e, deviceSizes: t };
        }
        let H = N.loader || F;
        delete N.loader, delete N.srcSet;
        let j = "__next_img_default" in H;
        if (j) {
          if ("custom" === u.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = H;
          H = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (P) {
          "fill" === P && (b = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[P];
          e && (_ = { ..._, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[P];
          t && !f && (f = t);
        }
        let B = "",
          D = a(v),
          G = a(y);
        if ("object" == typeof (n = c) && (i(n) || void 0 !== n.src)) {
          let e = i(c) ? c.default : c;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((l = e.blurWidth),
            (s = e.blurHeight),
            (C = C || e.blurDataURL),
            (B = e.src),
            !b)
          ) {
            if (D || G) {
              if (D && !G) {
                let t = D / e.width;
                G = Math.round(e.height * t);
              } else if (!D && G) {
                let t = G / e.height;
                D = Math.round(e.width * t);
              }
            } else (D = e.width), (G = e.height);
          }
        }
        let V = !d && ("lazy" === p || void 0 === p);
        (!(c = "string" == typeof c ? c : B) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((h = !0), (V = !1)),
          u.unoptimized && (h = !0),
          j && c.endsWith(".svg") && !u.dangerouslyAllowSVG && (h = !0),
          d && (M = "high");
        let z = a(m),
          U = Object.assign(
            b
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: R,
                  objectPosition: A,
                }
              : {},
            k ? {} : { color: "transparent" },
            _
          ),
          Z =
            O || "empty" === S
              ? null
              : "blur" === S
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: D,
                  heightInt: G,
                  blurWidth: l,
                  blurHeight: s,
                  blurDataURL: C || "",
                  objectFit: U.objectFit,
                }) +
                '")'
              : 'url("' + S + '")',
          q = Z
            ? {
                backgroundSize: U.objectFit || "cover",
                backgroundPosition: U.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Z,
              }
            : {},
          X = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: o,
              quality: i,
              sizes: a,
              loader: u,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: s } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: o } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: o.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => o.find((t) => t >= e) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, o, a),
              c = l.length - 1;
            return {
              sizes: a || "w" !== s ? a : "100vw",
              srcSet: l
                .map(
                  (e, r) =>
                    u({ config: t, src: n, quality: i, width: e }) +
                    " " +
                    ("w" === s ? e : r + 1) +
                    s
                )
                .join(", "),
              src: u({ config: t, src: n, quality: i, width: l[c] }),
            };
          })({
            config: u,
            src: c,
            unoptimized: h,
            width: D,
            quality: z,
            sizes: f,
            loader: H,
          });
        return {
          props: {
            ...N,
            loading: V ? "lazy" : p,
            fetchPriority: M,
            width: D,
            height: G,
            decoding: "async",
            className: g,
            style: { ...U, ...q },
            sizes: X.sizes,
            srcSet: X.srcSet,
            src: X.src,
          },
          meta: { unoptimized: h, priority: d, placeholder: S, fill: b },
        };
      }
    },
    42251: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          defaultHead: function () {
            return s;
          },
          default: function () {
            return d;
          },
        });
      let r = n(21024),
        o = n(68533)._(n(2265)),
        i = r._(n(27392)),
        a = n(2595),
        u = n(27484),
        l = n(43044);
      function s(e) {
        void 0 === e && (e = !1);
        let t = [o.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              o.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function c(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      n(76184);
      let f = ["name", "httpEquiv", "charSet", "itemProp"];
      function h(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(c, [])
          .reverse()
          .concat(s(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (o) => {
                let i = !0,
                  a = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (i = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (i = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = f.length; e < t; e++) {
                      let t = f[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (i = !1) : n.add(t);
                        else {
                          let e = o.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !a) && n.has(e)
                            ? (i = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                o.default.cloneElement(e, t)
              );
            }
            return o.default.cloneElement(e, { key: r });
          });
      }
      let d = function (e) {
        let { children: t } = e,
          n = (0, o.useContext)(a.AmpStateContext),
          r = (0, o.useContext)(u.HeadManagerContext);
        return o.default.createElement(
          i.default,
          {
            reduceComponentsToState: h,
            headManager: r,
            inAmpMode: (0, l.isInAmpMode)(n),
          },
          t
        );
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    67160: function (e, t) {
      "use strict";
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: o,
            blurDataURL: i,
            objectFit: a,
          } = e,
          u = r ? 40 * r : t,
          l = o ? 40 * o : n,
          s = u && l ? "viewBox='0 0 " + u + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          s +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (s
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          i +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    60337: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(21024)._(n(2265)),
        o = n(76906),
        i = r.default.createContext(o.imageConfigDefault);
    },
    76906: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    67447: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          unstable_getImgProps: function () {
            return l;
          },
          default: function () {
            return s;
          },
        });
      let r = n(21024),
        o = n(38630),
        i = n(76184),
        a = n(81749),
        u = r._(n(10536)),
        l = (e) => {
          (0, i.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk."
          );
          let { props: t } = (0, o.getImgProps)(e, {
            defaultLoader: u.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
          return { props: t };
        },
        s = a.Image;
    },
    10536: function (e, t) {
      "use strict";
      function n(e) {
        let { config: t, src: n, width: r, quality: o } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(n) +
          "&w=" +
          r +
          "&q=" +
          (o || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    46993: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(21024)._(n(2265)).default.createContext(null);
    },
    27392: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(2265),
        o = r.useLayoutEffect,
        i = r.useEffect;
      function a(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function a() {
          if (t && t.mountedInstances) {
            let o = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(o, e));
          }
        }
        return (
          o(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = a),
              () => {
                t && (t._pendingUpdate = a);
              }
            )
          ),
          i(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    76184: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "warnOnce", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (e) => {};
    },
    40561: function () {},
    30622: function (e, t, n) {
      "use strict";
      var r = n(2265),
        o = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        u =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
      function s(e, t, n) {
        var r,
          i = {},
          s = null,
          c = null;
        for (r in (void 0 !== n && (s = "" + n),
        void 0 !== t.key && (s = "" + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          a.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: c,
          props: i,
          _owner: u.current,
        };
      }
      (t.Fragment = i), (t.jsx = s), (t.jsxs = s);
    },
    57437: function (e, t, n) {
      "use strict";
      e.exports = n(30622);
    },
    16691: function (e, t, n) {
      e.exports = n(67447);
    },
    24033: function (e, t, n) {
      e.exports = n(15313);
    },
    33018: function (e, t, n) {
      "use strict";
      var r = n(61289);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, n, o, i, a) {
            if (a !== r) {
              var u = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((u.name = "Invariant Violation"), u);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (n.PropTypes = n), n;
        });
    },
    74275: function (e, t, n) {
      e.exports = n(33018)();
    },
    61289: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    57945: function (e, t, n) {
      e.exports = n(59090);
    },
    59090: function (e, t, n) {
      "use strict";
      var r,
        o =
          (r = n(2265)) && "object" == typeof r && "default" in r
            ? r.default
            : r,
        i = n(54887);
      function a() {
        return (a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var l = function (e, t, n, r, o, i, a, u) {
        if (!e) {
          var l;
          if (void 0 === t)
            l = Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var s = [n, r, o, i, a, u],
              c = 0;
            (l = Error(
              t.replace(/%s/g, function () {
                return s[c++];
              })
            )).name = "Invariant Violation";
          }
          throw ((l.framesToPop = 1), l);
        }
      };
      function s(e, t, n) {
        if ("selectionStart" in e && "selectionEnd" in e)
          (e.selectionStart = t), (e.selectionEnd = n);
        else {
          var r = e.createTextRange();
          r.collapse(!0),
            r.moveStart("character", t),
            r.moveEnd("character", n - t),
            r.select();
        }
      }
      var c = { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" };
      function f(e, t, n) {
        var r = "",
          o = "",
          i = null,
          a = [];
        if (
          (void 0 === t && (t = "_"),
          null == n && (n = c),
          !e || "string" != typeof e)
        )
          return {
            maskChar: t,
            formatChars: n,
            mask: null,
            prefix: null,
            lastEditablePosition: null,
            permanents: [],
          };
        var u = !1;
        return (
          e.split("").forEach(function (e) {
            u =
              (!u && "\\" === e) ||
              (u || !n[e]
                ? (a.push(r.length), r.length === a.length - 1 && (o += e))
                : (i = r.length + 1),
              (r += e),
              !1);
          }),
          {
            maskChar: t,
            formatChars: n,
            prefix: o,
            mask: r,
            lastEditablePosition: i,
            permanents: a,
          }
        );
      }
      function h(e, t) {
        return -1 !== e.permanents.indexOf(t);
      }
      function d(e, t, n) {
        var r = e.mask,
          o = e.formatChars;
        return !!n && (h(e, t) ? r[t] === n : new RegExp(o[r[t]]).test(n));
      }
      function p(e, t) {
        return t.split("").every(function (t, n) {
          return h(e, n) || !d(e, n, t);
        });
      }
      function g(e, t) {
        var n = e.maskChar,
          r = e.prefix;
        if (!n) {
          for (; t.length > r.length && h(e, t.length - 1); )
            t = t.slice(0, t.length - 1);
          return t.length;
        }
        for (var o = r.length, i = t.length; i >= r.length; i--) {
          var a = t[i];
          if (!h(e, i) && d(e, i, a)) {
            o = i + 1;
            break;
          }
        }
        return o;
      }
      function m(e, t) {
        return g(e, t) === e.mask.length;
      }
      function v(e, t) {
        var n = e.maskChar,
          r = e.mask,
          o = e.prefix;
        if (!n) {
          for (
            (t = y(e, "", t, 0)).length < o.length && (t = o);
            t.length < r.length && h(e, t.length);

          )
            t += r[t.length];
          return t;
        }
        if (t) return y(e, v(e, ""), t, 0);
        for (var i = 0; i < r.length; i++) h(e, i) ? (t += r[i]) : (t += n);
        return t;
      }
      function y(e, t, n, r) {
        var o = e.mask,
          i = e.maskChar,
          a = e.prefix,
          u = n.split(""),
          l = m(e, t);
        return (
          !i && r > t.length && (t += o.slice(t.length, r)),
          u.every(function (n) {
            for (var u, s; h(e, (s = r)) && n !== o[s]; ) {
              if (
                (r >= t.length && (t += o[r]), (u = r), i && h(e, u) && n === i)
              )
                return !0;
              if (++r >= o.length) return !1;
            }
            return (
              (!d(e, r, n) && n !== i) ||
              (r < t.length
                ? (t =
                    i || l || r < a.length
                      ? t.slice(0, r) + n + t.slice(r + 1)
                      : v(e, (t = t.slice(0, r) + n + t.slice(r))))
                : i || (t += n),
              ++r < o.length)
            );
          }),
          t
        );
      }
      function b(e, t) {
        for (var n = e.mask, r = t; r < n.length; ++r) if (!h(e, r)) return r;
        return null;
      }
      function _(e) {
        return e || 0 === e ? e + "" : "";
      }
      function w(e) {
        return "function" == typeof e;
      }
      function E() {
        return (
          window.cancelAnimationFrame ||
          window.webkitCancelRequestAnimationFrame ||
          window.webkitCancelAnimationFrame ||
          window.mozCancelAnimationFrame
        );
      }
      function S(e) {
        return (
          E()
            ? window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame
            : function () {
                return setTimeout(e, 1e3 / 60);
              }
        )(e);
      }
      function C(e) {
        (E() || clearTimeout)(e);
      }
      var M = (function (e) {
        function t(t) {
          var n = e.call(this, t) || this;
          (n.focused = !1),
            (n.mounted = !1),
            (n.previousSelection = null),
            (n.selectionDeferId = null),
            (n.saveSelectionLoopDeferId = null),
            (n.saveSelectionLoop = function () {
              (n.previousSelection = n.getSelection()),
                (n.saveSelectionLoopDeferId = S(n.saveSelectionLoop));
            }),
            (n.runSaveSelectionLoop = function () {
              null === n.saveSelectionLoopDeferId && n.saveSelectionLoop();
            }),
            (n.stopSaveSelectionLoop = function () {
              null !== n.saveSelectionLoopDeferId &&
                (C(n.saveSelectionLoopDeferId),
                (n.saveSelectionLoopDeferId = null),
                (n.previousSelection = null));
            }),
            (n.getInputDOMNode = function () {
              if (!n.mounted) return null;
              var e = i.findDOMNode(u(u(n))),
                t = "undefined" != typeof window && e instanceof window.Element;
              if (e && !t) return null;
              if (
                ("INPUT" !== e.nodeName && (e = e.querySelector("input")), !e)
              )
                throw Error(
                  "react-input-mask: inputComponent doesn't contain input node"
                );
              return e;
            }),
            (n.getInputValue = function () {
              var e = n.getInputDOMNode();
              return e ? e.value : null;
            }),
            (n.setInputValue = function (e) {
              var t = n.getInputDOMNode();
              t && ((n.value = e), (t.value = e));
            }),
            (n.setCursorToEnd = function () {
              var e = g(n.maskOptions, n.value),
                t = b(n.maskOptions, e);
              null !== t && n.setCursorPosition(t);
            }),
            (n.setSelection = function (e, t, r) {
              void 0 === r && (r = {});
              var o = n.getInputDOMNode(),
                i = n.isFocused();
              o &&
                i &&
                (r.deferred || s(o, e, t),
                null !== n.selectionDeferId && C(n.selectionDeferId),
                (n.selectionDeferId = S(function () {
                  (n.selectionDeferId = null), s(o, e, t);
                })),
                (n.previousSelection = {
                  start: e,
                  end: t,
                  length: Math.abs(t - e),
                }));
            }),
            (n.getSelection = function () {
              return (function (e) {
                var t = 0,
                  n = 0;
                if ("selectionStart" in e && "selectionEnd" in e)
                  (t = e.selectionStart), (n = e.selectionEnd);
                else {
                  var r = document.selection.createRange();
                  r.parentElement() === e &&
                    ((t = -r.moveStart("character", -e.value.length)),
                    (n = -r.moveEnd("character", -e.value.length)));
                }
                return { start: t, end: n, length: n - t };
              })(n.getInputDOMNode());
            }),
            (n.getCursorPosition = function () {
              return n.getSelection().start;
            }),
            (n.setCursorPosition = function (e) {
              n.setSelection(e, e);
            }),
            (n.isFocused = function () {
              return n.focused;
            }),
            (n.getBeforeMaskedValueChangeConfig = function () {
              var e = n.maskOptions,
                t = e.mask,
                r = e.maskChar,
                o = e.permanents,
                i = e.formatChars;
              return {
                mask: t,
                maskChar: r,
                permanents: o,
                alwaysShowMask: !!n.props.alwaysShowMask,
                formatChars: i,
              };
            }),
            (n.isInputAutofilled = function (e, t, r, o) {
              var i = n.getInputDOMNode();
              try {
                if (i.matches(":-webkit-autofill")) return !0;
              } catch (e) {}
              return !n.focused || (o.end < r.length && t.end === e.length);
            }),
            (n.onChange = function (e) {
              var t,
                r,
                o,
                i,
                a,
                l,
                s,
                c,
                f,
                p,
                g,
                m,
                _,
                E,
                S,
                C,
                M,
                P,
                R,
                A = u(u(n)).beforePasteState,
                x = u(u(n)).previousSelection,
                I = n.props.beforeMaskedValueChange,
                N = n.getInputValue(),
                T = n.value,
                k = n.getSelection();
              n.isInputAutofilled(N, k, T, x) &&
                ((T = v(n.maskOptions, "")),
                (x = { start: 0, end: 0, length: 0 })),
                A &&
                  ((x = A.selection),
                  (T = A.value),
                  (k = {
                    start: x.start + N.length,
                    end: x.start + N.length,
                    length: 0,
                  }),
                  (N = T.slice(0, x.start) + N + T.slice(x.end)),
                  (n.beforePasteState = null));
              var O =
                  ((t = n.maskOptions),
                  (r = N),
                  (o = k),
                  (i = T),
                  (a = x),
                  (m = t.mask),
                  (_ = t.prefix),
                  (E = t.lastEditablePosition),
                  (S = r),
                  (C = ""),
                  (M = 0),
                  (P = 0),
                  (R = Math.min(a.start, o.start)),
                  o.end > a.start
                    ? ((l = C = S.slice(a.start, o.end)),
                      (s = R),
                      (c = t.mask),
                      (f = t.maskChar),
                      (p = l.split("")),
                      (g = s),
                      p.every(function (e) {
                        for (var n; h(t, (n = s)) && e !== c[n]; )
                          if (++s >= c.length) return !1;
                        return (d(t, s, e) || e === f) && s++, s < c.length;
                      }),
                      (P = (M = s - g) ? a.length : 0))
                    : S.length < i.length && (P = i.length - S.length),
                  (S = i),
                  P &&
                    (1 !== P ||
                      a.length ||
                      (R =
                        a.start === o.start
                          ? b(t, o.start)
                          : (function (e, t) {
                              for (var n = t; 0 <= n; --n)
                                if (!h(e, n)) return n;
                              return null;
                            })(t, o.start)),
                    (S = (function (e, t, n, r) {
                      var o = n + r,
                        i = e.maskChar,
                        a = e.mask,
                        u = e.prefix,
                        l = t.split("");
                      if (i)
                        return l
                          .map(function (t, r) {
                            return r < n || o <= r ? t : h(e, r) ? a[r] : i;
                          })
                          .join("");
                      for (var s = o; s < l.length; s++) h(e, s) && (l[s] = "");
                      return (
                        (n = Math.max(u.length, n)),
                        l.splice(n, o - n),
                        v(e, (t = l.join("")))
                      );
                    })(t, S, R, P))),
                  (S = y(t, S, C, R)),
                  (R += M) >= m.length
                    ? (R = m.length)
                    : R < _.length && !M
                    ? (R = _.length)
                    : R >= _.length && R < E && M && (R = b(t, R)),
                  C || (C = null),
                  {
                    value: (S = v(t, S)),
                    enteredString: C,
                    selection: { start: R, end: R },
                  }),
                F = O.enteredString,
                L = O.selection,
                H = O.value;
              if (w(I)) {
                var j = I(
                  { value: H, selection: L },
                  { value: T, selection: x },
                  F,
                  n.getBeforeMaskedValueChangeConfig()
                );
                (H = j.value), (L = j.selection);
              }
              n.setInputValue(H),
                w(n.props.onChange) && n.props.onChange(e),
                n.isWindowsPhoneBrowser
                  ? n.setSelection(L.start, L.end, { deferred: !0 })
                  : n.setSelection(L.start, L.end);
            }),
            (n.onFocus = function (e) {
              var t = n.props.beforeMaskedValueChange,
                r = n.maskOptions,
                o = r.mask,
                i = r.prefix;
              if (((n.focused = !0), (n.mounted = !0), o)) {
                if (n.value)
                  g(n.maskOptions, n.value) < n.maskOptions.mask.length &&
                    n.setCursorToEnd();
                else {
                  var a = v(n.maskOptions, i),
                    u = v(n.maskOptions, a),
                    l = g(n.maskOptions, u),
                    s = b(n.maskOptions, l),
                    c = { start: s, end: s };
                  if (w(t)) {
                    var f = t(
                      { value: u, selection: c },
                      { value: n.value, selection: null },
                      null,
                      n.getBeforeMaskedValueChangeConfig()
                    );
                    (u = f.value), (c = f.selection);
                  }
                  var h = u !== n.getInputValue();
                  h && n.setInputValue(u),
                    h && w(n.props.onChange) && n.props.onChange(e),
                    n.setSelection(c.start, c.end);
                }
                n.runSaveSelectionLoop();
              }
              w(n.props.onFocus) && n.props.onFocus(e);
            }),
            (n.onBlur = function (e) {
              var t = n.props.beforeMaskedValueChange,
                r = n.maskOptions.mask;
              if (
                (n.stopSaveSelectionLoop(),
                (n.focused = !1),
                r && !n.props.alwaysShowMask && p(n.maskOptions, n.value))
              ) {
                var o = "";
                w(t) &&
                  (o = t(
                    { value: o, selection: null },
                    { value: n.value, selection: n.previousSelection },
                    null,
                    n.getBeforeMaskedValueChangeConfig()
                  ).value);
                var i = o !== n.getInputValue();
                i && n.setInputValue(o),
                  i && w(n.props.onChange) && n.props.onChange(e);
              }
              w(n.props.onBlur) && n.props.onBlur(e);
            }),
            (n.onMouseDown = function (e) {
              !n.focused &&
                document.addEventListener &&
                ((n.mouseDownX = e.clientX),
                (n.mouseDownY = e.clientY),
                (n.mouseDownTime = new Date().getTime()),
                document.addEventListener("mouseup", function e(t) {
                  if ((document.removeEventListener("mouseup", e), n.focused)) {
                    var r = Math.max(
                        Math.abs(t.clientX - n.mouseDownX),
                        Math.abs(t.clientY - n.mouseDownY)
                      ),
                      o = new Date().getTime() - n.mouseDownTime;
                    ((r <= 10 && o <= 200) || (r <= 5 && o <= 300)) &&
                      n.setCursorToEnd();
                  }
                })),
                w(n.props.onMouseDown) && n.props.onMouseDown(e);
            }),
            (n.onPaste = function (e) {
              w(n.props.onPaste) && n.props.onPaste(e),
                e.defaultPrevented ||
                  ((n.beforePasteState = {
                    value: n.getInputValue(),
                    selection: n.getSelection(),
                  }),
                  n.setInputValue(""));
            }),
            (n.handleRef = function (e) {
              null == n.props.children &&
                w(n.props.inputRef) &&
                n.props.inputRef(e);
            });
          var r = t.mask,
            o = t.maskChar,
            a = t.formatChars,
            l = t.alwaysShowMask,
            c = t.beforeMaskedValueChange,
            m = t.defaultValue,
            E = t.value;
          (n.maskOptions = f(r, o, a)),
            null == m && (m = ""),
            null == E && (E = m);
          var M = _(E);
          if (
            n.maskOptions.mask &&
            (l || M) &&
            ((M = v(n.maskOptions, M)), w(c))
          ) {
            var P = t.value;
            null == t.value && (P = m),
              (M = c(
                { value: M, selection: null },
                { value: (P = _(P)), selection: null },
                null,
                n.getBeforeMaskedValueChangeConfig()
              ).value);
          }
          return (n.value = M), n;
        }
        (t.prototype = Object.create(e.prototype)),
          (function (e, t) {
            for (
              var n = Object.getOwnPropertyNames(t), r = 0;
              r < n.length;
              r++
            ) {
              var o = n[r],
                i = Object.getOwnPropertyDescriptor(t, o);
              i &&
                i.configurable &&
                void 0 === e[o] &&
                Object.defineProperty(e, o, i);
            }
          })((t.prototype.constructor = t), e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function () {
            var e;
            (this.mounted = !0),
              this.getInputDOMNode() &&
                ((this.isWindowsPhoneBrowser =
                  ((e = navigator.userAgent),
                  /windows/i.test(e) && /phone/i.test(e))),
                this.maskOptions.mask &&
                  this.getInputValue() !== this.value &&
                  this.setInputValue(this.value));
          }),
          (n.componentDidUpdate = function () {
            var e = this.previousSelection,
              t = this.props,
              n = t.beforeMaskedValueChange,
              r = t.alwaysShowMask,
              o = t.mask,
              i = t.maskChar,
              a = t.formatChars,
              u = this.maskOptions,
              l = r || this.isFocused(),
              s = null != this.props.value,
              c = s ? _(this.props.value) : this.value,
              h = e ? e.start : null;
            if (((this.maskOptions = f(o, i, a)), this.maskOptions.mask)) {
              !u.mask && this.isFocused() && this.runSaveSelectionLoop();
              var d = this.maskOptions.mask && this.maskOptions.mask !== u.mask;
              if (
                (u.mask || s || (c = this.getInputValue()),
                (d || (this.maskOptions.mask && (c || l))) &&
                  (c = v(this.maskOptions, c)),
                d)
              ) {
                var y = g(this.maskOptions, c);
                (null === h || y < h) &&
                  (h = m(this.maskOptions, c) ? y : b(this.maskOptions, y));
              }
              !this.maskOptions.mask ||
                !p(this.maskOptions, c) ||
                l ||
                (s && this.props.value) ||
                (c = "");
              var E = { start: h, end: h };
              if (w(n)) {
                var S = n(
                  { value: c, selection: E },
                  { value: this.value, selection: this.previousSelection },
                  null,
                  this.getBeforeMaskedValueChangeConfig()
                );
                (c = S.value), (E = S.selection);
              }
              this.value = c;
              var C = this.getInputValue() !== this.value;
              C
                ? (this.setInputValue(this.value), this.forceUpdate())
                : d && this.forceUpdate();
              var M = !1;
              null != E.start &&
                null != E.end &&
                (M = !e || e.start !== E.start || e.end !== E.end),
                (M || C) && this.setSelection(E.start, E.end);
            } else u.mask && (this.stopSaveSelectionLoop(), this.forceUpdate());
          }),
          (n.componentWillUnmount = function () {
            (this.mounted = !1),
              null !== this.selectionDeferId && C(this.selectionDeferId),
              this.stopSaveSelectionLoop();
          }),
          (n.render = function () {
            var e,
              t = this.props,
              n =
                (t.mask,
                t.alwaysShowMask,
                t.maskChar,
                t.formatChars,
                t.inputRef,
                t.beforeMaskedValueChange,
                t.children),
              r = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                  0 <= t.indexOf((n = i[r])) || (o[n] = e[n]);
                return o;
              })(t, [
                "mask",
                "alwaysShowMask",
                "maskChar",
                "formatChars",
                "inputRef",
                "beforeMaskedValueChange",
                "children",
              ]);
            if (n) {
              w(n) || l(!1);
              var i = [
                  "onChange",
                  "onPaste",
                  "onMouseDown",
                  "onFocus",
                  "onBlur",
                  "value",
                  "disabled",
                  "readOnly",
                ],
                u = a({}, r);
              i.forEach(function (e) {
                return delete u[e];
              }),
                (e = n(u)),
                i.filter(function (t) {
                  return null != e.props[t] && e.props[t] !== r[t];
                }).length && l(!1);
            } else e = o.createElement("input", a({ ref: this.handleRef }, r));
            var s = { onFocus: this.onFocus, onBlur: this.onBlur };
            return (
              this.maskOptions.mask &&
                (r.disabled ||
                  r.readOnly ||
                  ((s.onChange = this.onChange),
                  (s.onPaste = this.onPaste),
                  (s.onMouseDown = this.onMouseDown)),
                null != r.value && (s.value = this.value)),
              (e = o.cloneElement(e, s))
            );
          }),
          t
        );
      })(o.Component);
      e.exports = M;
    },
    15794: function (e, t, n) {
      e.exports = (function (e) {
        var t = {};
        function n(r) {
          if (t[r]) return t[r].exports;
          var o = (t[r] = { i: r, l: !1, exports: {} });
          return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, r) {
            n.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: r });
          }),
          (n.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (n.t = function (e, t) {
            if (
              (1 & t && (e = n(e)),
              8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
            )
              return e;
            var r = Object.create(null);
            if (
              (n.r(r),
              Object.defineProperty(r, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var o in e)
                n.d(
                  r,
                  o,
                  function (t) {
                    return e[t];
                  }.bind(null, o)
                );
            return r;
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, "a", t), t;
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ""),
          n((n.s = 9))
        );
      })([
        function (e, t) {
          e.exports = n(2265);
        },
        function (e, t, n) {
          var r;
          /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
            "use strict";
            var n = {}.hasOwnProperty;
            function o() {
              for (var e = [], t = 0; t < arguments.length; t++) {
                var r = arguments[t];
                if (r) {
                  var i = typeof r;
                  if ("string" === i || "number" === i) e.push(r);
                  else if (Array.isArray(r) && r.length) {
                    var a = o.apply(null, r);
                    a && e.push(a);
                  } else if ("object" === i)
                    for (var u in r) n.call(r, u) && r[u] && e.push(u);
                }
              }
              return e.join(" ");
            }
            e.exports
              ? ((o.default = o), (e.exports = o))
              : void 0 ===
                  (r = function () {
                    return o;
                  }.apply(t, [])) || (e.exports = r);
          })();
        },
        function (e, t, n) {
          (function (t) {
            var n = /^\s+|\s+$/g,
              r = /^[-+]0x[0-9a-f]+$/i,
              o = /^0b[01]+$/i,
              i = /^0o[0-7]+$/i,
              a = parseInt,
              u = "object" == typeof t && t && t.Object === Object && t,
              l =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              s = u || l || Function("return this")(),
              c = Object.prototype.toString,
              f = s.Symbol,
              h = f ? f.prototype : void 0,
              d = h ? h.toString : void 0;
            function p(e) {
              if ("string" == typeof e) return e;
              if (m(e)) return d ? d.call(e) : "";
              var t = e + "";
              return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
            }
            function g(e) {
              var t = typeof e;
              return !!e && ("object" == t || "function" == t);
            }
            function m(e) {
              return (
                "symbol" == typeof e ||
                (!!e && "object" == typeof e && "[object Symbol]" == c.call(e))
              );
            }
            e.exports = function (e, t, u) {
              var l, s, c, f, h, d;
              return (
                (e = null == (l = e) ? "" : p(l)),
                (d =
                  (h = (f = u)
                    ? (f = (function (e) {
                        if ("number" == typeof e) return e;
                        if (m(e)) return NaN;
                        if (g(e)) {
                          var t =
                            "function" == typeof e.valueOf ? e.valueOf() : e;
                          e = g(t) ? t + "" : t;
                        }
                        if ("string" != typeof e) return 0 === e ? e : +e;
                        e = e.replace(n, "");
                        var u = o.test(e);
                        return u || i.test(e)
                          ? a(e.slice(2), u ? 2 : 8)
                          : r.test(e)
                          ? NaN
                          : +e;
                      })(f)) ===
                        1 / 0 || f === -1 / 0
                      ? 17976931348623157e292 * (f < 0 ? -1 : 1)
                      : f == f
                      ? f
                      : 0
                    : 0 === f
                    ? f
                    : 0) % 1),
                (s = h == h ? (d ? h - d : h) : 0),
                (c = e.length),
                s == s &&
                  (void 0 !== c && (s = s <= c ? s : c), (s = s >= 0 ? s : 0)),
                (u = s),
                (t = p(t)),
                e.slice(u, u + t.length) == t
              );
            };
          }.call(this, n(3)));
        },
        function (e, t) {
          var n;
          n = (function () {
            return this;
          })();
          try {
            n = n || Function("return this")();
          } catch (e) {
            "object" == typeof window && (n = window);
          }
          e.exports = n;
        },
        function (e, t, n) {
          (function (t) {
            var n,
              r = /^\[object .+?Constructor\]$/,
              o = "object" == typeof t && t && t.Object === Object && t,
              i =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              a = o || i || Function("return this")(),
              u = Array.prototype,
              l = Function.prototype,
              s = Object.prototype,
              c = a["__core-js_shared__"],
              f = (n = /[^.]+$/.exec((c && c.keys && c.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + n
                : "",
              h = l.toString,
              d = s.hasOwnProperty,
              p = s.toString,
              g = RegExp(
                "^" +
                  h
                    .call(d)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              ),
              m = u.splice,
              v = C(a, "Map"),
              y = C(Object, "create");
            function b(e) {
              var t = -1,
                n = e ? e.length : 0;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function _(e) {
              var t = -1,
                n = e ? e.length : 0;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function w(e) {
              var t = -1,
                n = e ? e.length : 0;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function E(e, t) {
              for (var n, r = e.length; r--; )
                if ((n = e[r][0]) === t || (n != n && t != t)) return r;
              return -1;
            }
            function S(e, t) {
              var n,
                r = e.__data__;
              return (
                "string" == (n = typeof t) ||
                "number" == n ||
                "symbol" == n ||
                "boolean" == n
                  ? "__proto__" !== t
                  : null === t
              )
                ? r["string" == typeof t ? "string" : "hash"]
                : r.map;
            }
            function C(e, t) {
              var n,
                o,
                i = null == e ? void 0 : e[t];
              return !(!P((n = i)) || (f && f in n)) &&
                ("[object Function]" == (o = P(n) ? p.call(n) : "") ||
                "[object GeneratorFunction]" == o ||
                (function (e) {
                  var t = !1;
                  if (null != e && "function" != typeof e.toString)
                    try {
                      t = !!(e + "");
                    } catch (e) {}
                  return t;
                })(n)
                  ? g
                  : r
                ).test(
                  (function (e) {
                    if (null != e) {
                      try {
                        return h.call(e);
                      } catch (e) {}
                      try {
                        return e + "";
                      } catch (e) {}
                    }
                    return "";
                  })(n)
                )
                ? i
                : void 0;
            }
            function M(e, t) {
              if ("function" != typeof e || (t && "function" != typeof t))
                throw TypeError("Expected a function");
              var n = function () {
                var r = arguments,
                  o = t ? t.apply(this, r) : r[0],
                  i = n.cache;
                if (i.has(o)) return i.get(o);
                var a = e.apply(this, r);
                return (n.cache = i.set(o, a)), a;
              };
              return (n.cache = new (M.Cache || w)()), n;
            }
            function P(e) {
              var t = typeof e;
              return !!e && ("object" == t || "function" == t);
            }
            (b.prototype.clear = function () {
              this.__data__ = y ? y(null) : {};
            }),
              (b.prototype.delete = function (e) {
                return this.has(e) && delete this.__data__[e];
              }),
              (b.prototype.get = function (e) {
                var t = this.__data__;
                if (y) {
                  var n = t[e];
                  return "__lodash_hash_undefined__" === n ? void 0 : n;
                }
                return d.call(t, e) ? t[e] : void 0;
              }),
              (b.prototype.has = function (e) {
                var t = this.__data__;
                return y ? void 0 !== t[e] : d.call(t, e);
              }),
              (b.prototype.set = function (e, t) {
                return (
                  (this.__data__[e] =
                    y && void 0 === t ? "__lodash_hash_undefined__" : t),
                  this
                );
              }),
              (_.prototype.clear = function () {
                this.__data__ = [];
              }),
              (_.prototype.delete = function (e) {
                var t = this.__data__,
                  n = E(t, e);
                return (
                  !(n < 0) &&
                  (n == t.length - 1 ? t.pop() : m.call(t, n, 1), !0)
                );
              }),
              (_.prototype.get = function (e) {
                var t = this.__data__,
                  n = E(t, e);
                return n < 0 ? void 0 : t[n][1];
              }),
              (_.prototype.has = function (e) {
                return E(this.__data__, e) > -1;
              }),
              (_.prototype.set = function (e, t) {
                var n = this.__data__,
                  r = E(n, e);
                return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
              }),
              (w.prototype.clear = function () {
                this.__data__ = {
                  hash: new b(),
                  map: new (v || _)(),
                  string: new b(),
                };
              }),
              (w.prototype.delete = function (e) {
                return S(this, e).delete(e);
              }),
              (w.prototype.get = function (e) {
                return S(this, e).get(e);
              }),
              (w.prototype.has = function (e) {
                return S(this, e).has(e);
              }),
              (w.prototype.set = function (e, t) {
                return S(this, e).set(e, t), this;
              }),
              (M.Cache = w),
              (e.exports = M);
          }.call(this, n(3)));
        },
        function (e, t, n) {
          (function (t) {
            var n = /^\s+|\s+$/g,
              r = /^[-+]0x[0-9a-f]+$/i,
              o = /^0b[01]+$/i,
              i = /^0o[0-7]+$/i,
              a = parseInt,
              u = "object" == typeof t && t && t.Object === Object && t,
              l =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              s = u || l || Function("return this")(),
              c = Object.prototype.toString,
              f = Math.max,
              h = Math.min,
              d = function () {
                return s.Date.now();
              };
            function p(e) {
              var t = typeof e;
              return !!e && ("object" == t || "function" == t);
            }
            function g(e) {
              if ("number" == typeof e) return e;
              if (
                "symbol" == typeof (t = e) ||
                (t && "object" == typeof t && "[object Symbol]" == c.call(t))
              )
                return NaN;
              if (p(e)) {
                var t,
                  u = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = p(u) ? u + "" : u;
              }
              if ("string" != typeof e) return 0 === e ? e : +e;
              e = e.replace(n, "");
              var l = o.test(e);
              return l || i.test(e)
                ? a(e.slice(2), l ? 2 : 8)
                : r.test(e)
                ? NaN
                : +e;
            }
            e.exports = function (e, t, n) {
              var r,
                o,
                i,
                a,
                u,
                l,
                s = 0,
                c = !1,
                m = !1,
                v = !0;
              if ("function" != typeof e)
                throw TypeError("Expected a function");
              function y(t) {
                var n = r,
                  i = o;
                return (r = o = void 0), (s = t), (a = e.apply(i, n));
              }
              function b(e) {
                var n = e - l;
                return void 0 === l || n >= t || n < 0 || (m && e - s >= i);
              }
              function _() {
                var e,
                  n = d();
                if (b(n)) return w(n);
                u = setTimeout(
                  _,
                  ((e = t - (n - l)), m ? h(e, i - (n - s)) : e)
                );
              }
              function w(e) {
                return (u = void 0), v && r ? y(e) : ((r = o = void 0), a);
              }
              function E() {
                var e,
                  n = d(),
                  i = b(n);
                if (((r = arguments), (o = this), (l = n), i)) {
                  if (void 0 === u)
                    return (s = e = l), (u = setTimeout(_, t)), c ? y(e) : a;
                  if (m) return (u = setTimeout(_, t)), y(l);
                }
                return void 0 === u && (u = setTimeout(_, t)), a;
              }
              return (
                (t = g(t) || 0),
                p(n) &&
                  ((c = !!n.leading),
                  (i = (m = "maxWait" in n) ? f(g(n.maxWait) || 0, t) : i),
                  (v = "trailing" in n ? !!n.trailing : v)),
                (E.cancel = function () {
                  void 0 !== u && clearTimeout(u),
                    (s = 0),
                    (r = l = o = u = void 0);
                }),
                (E.flush = function () {
                  return void 0 === u ? a : w(d());
                }),
                E
              );
            };
          }.call(this, n(3)));
        },
        function (e, t, n) {
          (function (e, n) {
            var r = "[object Arguments]",
              o = "[object Map]",
              i = "[object Object]",
              a = "[object Set]",
              u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              l = /^\w*$/,
              s = /^\./,
              c =
                /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              f = /\\(\\)?/g,
              h = /^\[object .+?Constructor\]$/,
              d = /^(?:0|[1-9]\d*)$/,
              p = {};
            (p["[object Float32Array]"] =
              p["[object Float64Array]"] =
              p["[object Int8Array]"] =
              p["[object Int16Array]"] =
              p["[object Int32Array]"] =
              p["[object Uint8Array]"] =
              p["[object Uint8ClampedArray]"] =
              p["[object Uint16Array]"] =
              p["[object Uint32Array]"] =
                !0),
              (p[r] =
                p["[object Array]"] =
                p["[object ArrayBuffer]"] =
                p["[object Boolean]"] =
                p["[object DataView]"] =
                p["[object Date]"] =
                p["[object Error]"] =
                p["[object Function]"] =
                p[o] =
                p["[object Number]"] =
                p[i] =
                p["[object RegExp]"] =
                p[a] =
                p["[object String]"] =
                p["[object WeakMap]"] =
                  !1);
            var g = "object" == typeof e && e && e.Object === Object && e,
              m =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              v = g || m || Function("return this")(),
              y = t && !t.nodeType && t,
              b = y && "object" == typeof n && n && !n.nodeType && n,
              _ = b && b.exports === y && g.process,
              w = (function () {
                try {
                  return _ && _.binding("util");
                } catch (e) {}
              })(),
              E = w && w.isTypedArray;
            function S(e, t, n, r) {
              var o = -1,
                i = e ? e.length : 0;
              for (r && i && (n = e[++o]); ++o < i; ) n = t(n, e[o], o, e);
              return n;
            }
            function C(e, t, n, r, o) {
              return (
                o(e, function (e, o, i) {
                  n = r ? ((r = !1), e) : t(n, e, o, i);
                }),
                n
              );
            }
            function M(e) {
              var t = !1;
              if (null != e && "function" != typeof e.toString)
                try {
                  t = !!(e + "");
                } catch (e) {}
              return t;
            }
            function P(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e, r) {
                  n[++t] = [r, e];
                }),
                n
              );
            }
            function R(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e) {
                  n[++t] = e;
                }),
                n
              );
            }
            var A,
              x,
              I,
              N = Array.prototype,
              T = Function.prototype,
              k = Object.prototype,
              O = v["__core-js_shared__"],
              F = (A = /[^.]+$/.exec((O && O.keys && O.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + A
                : "",
              L = T.toString,
              H = k.hasOwnProperty,
              j = k.toString,
              B = RegExp(
                "^" +
                  L.call(H)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              ),
              D = v.Symbol,
              G = v.Uint8Array,
              V = k.propertyIsEnumerable,
              z = N.splice,
              U =
                ((x = Object.keys),
                (I = Object),
                function (e) {
                  return x(I(e));
                }),
              Z = eb(v, "DataView"),
              q = eb(v, "Map"),
              X = eb(v, "Promise"),
              K = eb(v, "Set"),
              Y = eb(v, "WeakMap"),
              $ = eb(Object, "create"),
              W = eP(Z),
              J = eP(q),
              Q = eP(X),
              ee = eP(K),
              et = eP(Y),
              en = D ? D.prototype : void 0,
              er = en ? en.valueOf : void 0,
              eo = en ? en.toString : void 0;
            function ei(e) {
              var t = -1,
                n = e ? e.length : 0;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function ea(e) {
              var t = -1,
                n = e ? e.length : 0;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function eu(e) {
              var t = -1,
                n = e ? e.length : 0;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function el(e) {
              var t = -1,
                n = e ? e.length : 0;
              for (this.__data__ = new eu(); ++t < n; ) this.add(e[t]);
            }
            function es(e) {
              this.__data__ = new ea(e);
            }
            function ec(e, t) {
              for (var n = e.length; n--; ) if (eA(e[n][0], t)) return n;
              return -1;
            }
            (ei.prototype.clear = function () {
              this.__data__ = $ ? $(null) : {};
            }),
              (ei.prototype.delete = function (e) {
                return this.has(e) && delete this.__data__[e];
              }),
              (ei.prototype.get = function (e) {
                var t = this.__data__;
                if ($) {
                  var n = t[e];
                  return "__lodash_hash_undefined__" === n ? void 0 : n;
                }
                return H.call(t, e) ? t[e] : void 0;
              }),
              (ei.prototype.has = function (e) {
                var t = this.__data__;
                return $ ? void 0 !== t[e] : H.call(t, e);
              }),
              (ei.prototype.set = function (e, t) {
                return (
                  (this.__data__[e] =
                    $ && void 0 === t ? "__lodash_hash_undefined__" : t),
                  this
                );
              }),
              (ea.prototype.clear = function () {
                this.__data__ = [];
              }),
              (ea.prototype.delete = function (e) {
                var t = this.__data__,
                  n = ec(t, e);
                return (
                  !(n < 0) &&
                  (n == t.length - 1 ? t.pop() : z.call(t, n, 1), !0)
                );
              }),
              (ea.prototype.get = function (e) {
                var t = this.__data__,
                  n = ec(t, e);
                return n < 0 ? void 0 : t[n][1];
              }),
              (ea.prototype.has = function (e) {
                return ec(this.__data__, e) > -1;
              }),
              (ea.prototype.set = function (e, t) {
                var n = this.__data__,
                  r = ec(n, e);
                return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
              }),
              (eu.prototype.clear = function () {
                this.__data__ = {
                  hash: new ei(),
                  map: new (q || ea)(),
                  string: new ei(),
                };
              }),
              (eu.prototype.delete = function (e) {
                return ey(this, e).delete(e);
              }),
              (eu.prototype.get = function (e) {
                return ey(this, e).get(e);
              }),
              (eu.prototype.has = function (e) {
                return ey(this, e).has(e);
              }),
              (eu.prototype.set = function (e, t) {
                return ey(this, e).set(e, t), this;
              }),
              (el.prototype.add = el.prototype.push =
                function (e) {
                  return (
                    this.__data__.set(e, "__lodash_hash_undefined__"), this
                  );
                }),
              (el.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (es.prototype.clear = function () {
                this.__data__ = new ea();
              }),
              (es.prototype.delete = function (e) {
                return this.__data__.delete(e);
              }),
              (es.prototype.get = function (e) {
                return this.__data__.get(e);
              }),
              (es.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (es.prototype.set = function (e, t) {
                var n = this.__data__;
                if (n instanceof ea) {
                  var r = n.__data__;
                  if (!q || r.length < 199) return r.push([e, t]), this;
                  n = this.__data__ = new eu(r);
                }
                return n.set(e, t), this;
              });
            var ef,
              eh = function (e, t) {
                if (null == e) return e;
                if (!eN(e)) return e && ed(e, t, ej);
                for (
                  var n = e.length, r = ef ? n : -1, o = Object(e);
                  (ef ? r-- : ++r < n) && !1 !== t(o[r], r, o);

                );
                return e;
              },
              ed = function (e, t, n) {
                for (var r = -1, o = Object(e), i = n(e), a = i.length; a--; ) {
                  var u = i[++r];
                  if (!1 === t(o[u], u, o)) break;
                }
                return e;
              };
            function ep(e, t) {
              for (
                var n,
                  r = 0,
                  o = (t = eE(t, e) ? [t] : eI((n = t)) ? n : eC(n)).length;
                null != e && r < o;

              )
                e = e[eM(t[r++])];
              return r && r == o ? e : void 0;
            }
            function eg(e, t) {
              return null != e && t in Object(e);
            }
            function em(e, t, n, u, l) {
              return (
                e === t ||
                (null != e && null != t && (eO(e) || eF(t))
                  ? (function (e, t, n, u, l, s) {
                      var c = eI(e),
                        f = eI(t),
                        h = "[object Array]",
                        d = "[object Array]";
                      c || (h = (h = e_(e)) == r ? i : h),
                        f || (d = (d = e_(t)) == r ? i : d);
                      var p = h == i && !M(e),
                        g = d == i && !M(t),
                        m = h == d;
                      if (m && !p)
                        return (
                          s || (s = new es()),
                          c || eH(e)
                            ? ev(e, t, n, u, l, s)
                            : (function (e, t, n, r, i, u, l) {
                                switch (n) {
                                  case "[object DataView]":
                                    if (
                                      e.byteLength != t.byteLength ||
                                      e.byteOffset != t.byteOffset
                                    )
                                      break;
                                    (e = e.buffer), (t = t.buffer);
                                  case "[object ArrayBuffer]":
                                    return !(
                                      e.byteLength != t.byteLength ||
                                      !r(new G(e), new G(t))
                                    );
                                  case "[object Boolean]":
                                  case "[object Date]":
                                  case "[object Number]":
                                    return eA(+e, +t);
                                  case "[object Error]":
                                    return (
                                      e.name == t.name && e.message == t.message
                                    );
                                  case "[object RegExp]":
                                  case "[object String]":
                                    return e == t + "";
                                  case o:
                                    var s = P;
                                  case a:
                                    var c = 2 & u;
                                    if ((s || (s = R), e.size != t.size && !c))
                                      break;
                                    var f = l.get(e);
                                    if (f) return f == t;
                                    (u |= 1), l.set(e, t);
                                    var h = ev(s(e), s(t), r, i, u, l);
                                    return l.delete(e), h;
                                  case "[object Symbol]":
                                    if (er) return er.call(e) == er.call(t);
                                }
                                return !1;
                              })(e, t, h, n, u, l, s)
                        );
                      if (!(2 & l)) {
                        var v = p && H.call(e, "__wrapped__"),
                          y = g && H.call(t, "__wrapped__");
                        if (v || y) {
                          var b = v ? e.value() : e,
                            _ = y ? t.value() : t;
                          return s || (s = new es()), n(b, _, u, l, s);
                        }
                      }
                      return (
                        !!m &&
                        (s || (s = new es()),
                        (function (e, t, n, r, o, i) {
                          var a = 2 & o,
                            u = ej(e),
                            l = u.length;
                          if (l != ej(t).length && !a) return !1;
                          for (var s = l; s--; ) {
                            var c = u[s];
                            if (!(a ? c in t : H.call(t, c))) return !1;
                          }
                          var f = i.get(e);
                          if (f && i.get(t)) return f == t;
                          var h = !0;
                          i.set(e, t), i.set(t, e);
                          for (var d = a; ++s < l; ) {
                            var p = e[(c = u[s])],
                              g = t[c];
                            if (r)
                              var m = a
                                ? r(g, p, c, t, e, i)
                                : r(p, g, c, e, t, i);
                            if (
                              !(void 0 === m ? p === g || n(p, g, r, o, i) : m)
                            ) {
                              h = !1;
                              break;
                            }
                            d || (d = "constructor" == c);
                          }
                          if (h && !d) {
                            var v = e.constructor,
                              y = t.constructor;
                            v == y ||
                              !("constructor" in e) ||
                              !("constructor" in t) ||
                              ("function" == typeof v &&
                                v instanceof v &&
                                "function" == typeof y &&
                                y instanceof y) ||
                              (h = !1);
                          }
                          return i.delete(e), i.delete(t), h;
                        })(e, t, n, u, l, s))
                      );
                    })(e, t, em, n, u, l)
                  : e != e && t != t)
              );
            }
            function ev(e, t, n, r, o, i) {
              var a = 2 & o,
                u = e.length,
                l = t.length;
              if (u != l && !(a && l > u)) return !1;
              var s = i.get(e);
              if (s && i.get(t)) return s == t;
              var c = -1,
                f = !0,
                h = 1 & o ? new el() : void 0;
              for (i.set(e, t), i.set(t, e); ++c < u; ) {
                var d = e[c],
                  p = t[c];
                if (r) var g = a ? r(p, d, c, t, e, i) : r(d, p, c, e, t, i);
                if (void 0 !== g) {
                  if (g) continue;
                  f = !1;
                  break;
                }
                if (h) {
                  if (
                    !(function (e, t) {
                      for (var n = -1, r = e ? e.length : 0; ++n < r; )
                        if (t(e[n], n, e)) return !0;
                      return !1;
                    })(t, function (e, t) {
                      if (!h.has(t) && (d === e || n(d, e, r, o, i)))
                        return h.add(t);
                    })
                  ) {
                    f = !1;
                    break;
                  }
                } else if (d !== p && !n(d, p, r, o, i)) {
                  f = !1;
                  break;
                }
              }
              return i.delete(e), i.delete(t), f;
            }
            function ey(e, t) {
              var n,
                r = e.__data__;
              return (
                "string" == (n = typeof t) ||
                "number" == n ||
                "symbol" == n ||
                "boolean" == n
                  ? "__proto__" !== t
                  : null === t
              )
                ? r["string" == typeof t ? "string" : "hash"]
                : r.map;
            }
            function eb(e, t) {
              var n = null == e ? void 0 : e[t];
              return !(!eO(n) || (F && F in n)) &&
                (eT(n) || M(n) ? B : h).test(eP(n))
                ? n
                : void 0;
            }
            var e_ = function (e) {
              return j.call(e);
            };
            function ew(e, t) {
              return (
                !!(t = null == t ? 9007199254740991 : t) &&
                ("number" == typeof e || d.test(e)) &&
                e > -1 &&
                e % 1 == 0 &&
                e < t
              );
            }
            function eE(e, t) {
              if (eI(e)) return !1;
              var n = typeof e;
              return (
                !(
                  "number" != n &&
                  "symbol" != n &&
                  "boolean" != n &&
                  null != e &&
                  !eL(e)
                ) ||
                l.test(e) ||
                !u.test(e) ||
                (null != t && e in Object(t))
              );
            }
            function eS(e, t) {
              return function (n) {
                return (
                  null != n && n[e] === t && (void 0 !== t || e in Object(n))
                );
              };
            }
            ((Z && "[object DataView]" != e_(new Z(new ArrayBuffer(1)))) ||
              (q && e_(new q()) != o) ||
              (X && "[object Promise]" != e_(X.resolve())) ||
              (K && e_(new K()) != a) ||
              (Y && "[object WeakMap]" != e_(new Y()))) &&
              (e_ = function (e) {
                var t = j.call(e),
                  n = t == i ? e.constructor : void 0,
                  r = n ? eP(n) : void 0;
                if (r)
                  switch (r) {
                    case W:
                      return "[object DataView]";
                    case J:
                      return o;
                    case Q:
                      return "[object Promise]";
                    case ee:
                      return a;
                    case et:
                      return "[object WeakMap]";
                  }
                return t;
              });
            var eC = eR(function (e) {
              e =
                null == (t = e)
                  ? ""
                  : (function (e) {
                      if ("string" == typeof e) return e;
                      if (eL(e)) return eo ? eo.call(e) : "";
                      var t = e + "";
                      return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                    })(t);
              var t,
                n = [];
              return (
                s.test(e) && n.push(""),
                e.replace(c, function (e, t, r, o) {
                  n.push(r ? o.replace(f, "$1") : t || e);
                }),
                n
              );
            });
            function eM(e) {
              if ("string" == typeof e || eL(e)) return e;
              var t = e + "";
              return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
            }
            function eP(e) {
              if (null != e) {
                try {
                  return L.call(e);
                } catch (e) {}
                try {
                  return e + "";
                } catch (e) {}
              }
              return "";
            }
            function eR(e, t) {
              if ("function" != typeof e || (t && "function" != typeof t))
                throw TypeError("Expected a function");
              var n = function () {
                var r = arguments,
                  o = t ? t.apply(this, r) : r[0],
                  i = n.cache;
                if (i.has(o)) return i.get(o);
                var a = e.apply(this, r);
                return (n.cache = i.set(o, a)), a;
              };
              return (n.cache = new (eR.Cache || eu)()), n;
            }
            function eA(e, t) {
              return e === t || (e != e && t != t);
            }
            function ex(e) {
              return (
                eF(e) &&
                eN(e) &&
                H.call(e, "callee") &&
                (!V.call(e, "callee") || j.call(e) == r)
              );
            }
            eR.Cache = eu;
            var eI = Array.isArray;
            function eN(e) {
              return null != e && ek(e.length) && !eT(e);
            }
            function eT(e) {
              var t = eO(e) ? j.call(e) : "";
              return (
                "[object Function]" == t || "[object GeneratorFunction]" == t
              );
            }
            function ek(e) {
              return (
                "number" == typeof e &&
                e > -1 &&
                e % 1 == 0 &&
                e <= 9007199254740991
              );
            }
            function eO(e) {
              var t = typeof e;
              return !!e && ("object" == t || "function" == t);
            }
            function eF(e) {
              return !!e && "object" == typeof e;
            }
            function eL(e) {
              return (
                "symbol" == typeof e ||
                (eF(e) && "[object Symbol]" == j.call(e))
              );
            }
            var eH = E
              ? function (e) {
                  return E(e);
                }
              : function (e) {
                  return eF(e) && ek(e.length) && !!p[j.call(e)];
                };
            function ej(e) {
              return eN(e)
                ? (function (e, t) {
                    var n =
                        eI(e) || ex(e)
                          ? (function (e, t) {
                              for (var n = -1, r = Array(e); ++n < e; )
                                r[n] = t(n);
                              return r;
                            })(e.length, String)
                          : [],
                      r = n.length,
                      o = !!r;
                    for (var i in e)
                      !H.call(e, i) ||
                        (o && ("length" == i || ew(i, r))) ||
                        n.push(i);
                    return n;
                  })(e)
                : (function (e) {
                    if (
                      ((n =
                        ("function" == typeof (t = e && e.constructor) &&
                          t.prototype) ||
                        k),
                      e !== n)
                    )
                      return U(e);
                    var t,
                      n,
                      r = [];
                    for (var o in Object(e))
                      H.call(e, o) && "constructor" != o && r.push(o);
                    return r;
                  })(e);
            }
            function eB(e) {
              return e;
            }
            n.exports = function (e, t, n) {
              var r,
                o,
                i,
                a,
                u,
                l = eI(e) ? S : C,
                s = arguments.length < 3;
              return l(
                e,
                "function" == typeof t
                  ? t
                  : null == t
                  ? eB
                  : "object" == typeof t
                  ? eI(t)
                    ? ((i = t[0]),
                      (a = t[1]),
                      eE(i) && (r = a) == r && !eO(r)
                        ? eS(eM(i), a)
                        : function (e) {
                            var t,
                              n =
                                void 0 === (t = null == e ? void 0 : ep(e, i))
                                  ? void 0
                                  : t;
                            return void 0 === n && n === a
                              ? null != e &&
                                  (function (e, t, n) {
                                    var r;
                                    t = eE(t, e)
                                      ? [t]
                                      : eI((r = t))
                                      ? r
                                      : eC(r);
                                    for (
                                      var o, i = -1, a = t.length;
                                      ++i < a;

                                    ) {
                                      var u = eM(t[i]);
                                      if (!(o = null != e && n(e, u))) break;
                                      e = e[u];
                                    }
                                    return (
                                      o ||
                                      (!!(a = e ? e.length : 0) &&
                                        ek(a) &&
                                        ew(u, a) &&
                                        (eI(e) || ex(e)))
                                    );
                                  })(e, i, eg)
                              : em(a, n, void 0, 3);
                          })
                    : 1 ==
                        (u = (function (e) {
                          for (var t = ej(e), n = t.length; n--; ) {
                            var r = t[n],
                              o = e[r];
                            t[n] = [r, o, o == o && !eO(o)];
                          }
                          return t;
                        })(t)).length && u[0][2]
                    ? eS(u[0][0], u[0][1])
                    : function (e) {
                        return (
                          e === t ||
                          (function (e, t, n, r) {
                            var o = n.length,
                              i = o,
                              a = !r;
                            if (null == e) return !i;
                            for (e = Object(e); o--; ) {
                              var u = n[o];
                              if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e))
                                return !1;
                            }
                            for (; ++o < i; ) {
                              var l = (u = n[o])[0],
                                s = e[l],
                                c = u[1];
                              if (a && u[2]) {
                                if (void 0 === s && !(l in e)) return !1;
                              } else {
                                var f = new es();
                                if (r) var h = r(s, c, l, e, t, f);
                                if (!(void 0 === h ? em(c, s, r, 3, f) : h))
                                  return !1;
                              }
                            }
                            return !0;
                          })(e, t, u)
                        );
                      }
                  : eE(t)
                  ? ((o = eM(t)),
                    function (e) {
                      return null == e ? void 0 : e[o];
                    })
                  : function (e) {
                      return ep(e, t);
                    },
                n,
                s,
                eh
              );
            };
          }.call(this, n(3), n(7)(e)));
        },
        function (e, t) {
          e.exports = function (e) {
            return (
              e.webpackPolyfill ||
                ((e.deprecate = function () {}),
                (e.paths = []),
                e.children || (e.children = []),
                Object.defineProperty(e, "loaded", {
                  enumerable: !0,
                  get: function () {
                    return e.l;
                  },
                }),
                Object.defineProperty(e, "id", {
                  enumerable: !0,
                  get: function () {
                    return e.i;
                  },
                }),
                (e.webpackPolyfill = 1)),
              e
            );
          };
        },
        function (e, t) {
          String.prototype.padEnd ||
            (String.prototype.padEnd = function (e, t) {
              return (
                (e >>= 0),
                (t = String(void 0 !== t ? t : " ")),
                this.length > e
                  ? String(this)
                  : ((e -= this.length) > t.length &&
                      (t += t.repeat(e / t.length)),
                    String(this) + t.slice(0, e))
              );
            });
        },
        function (e, t, n) {
          "use strict";
          function r(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          }
          function i(e) {
            return (
              (function (e) {
                if (Array.isArray(e)) {
                  for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                  return n;
                }
              })(e) ||
              o(e) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to spread non-iterable instance"
                );
              })()
            );
          }
          function a(e) {
            if (Array.isArray(e)) return e;
          }
          function u() {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          }
          function l(e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          }
          function s(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function c(e) {
            return (c =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function f(e) {
            return (f =
              "function" == typeof Symbol && "symbol" === c(Symbol.iterator)
                ? function (e) {
                    return c(e);
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : c(e);
                  })(e);
          }
          function h(e) {
            if (void 0 === e)
              throw ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function d(e) {
            return (d = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function p(e, t) {
            return (p =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          n.r(t);
          var g = n(0),
            m = n.n(g),
            v = n(5),
            y = n.n(v),
            b = n(4),
            _ = n.n(b),
            w = n(6),
            E = n.n(w),
            S = n(2),
            C = n.n(S),
            M = n(1),
            P = n.n(M);
          function R(e, t) {
            return (
              a(e) ||
              (function (e, t) {
                var n = [],
                  r = !0,
                  o = !1,
                  i = void 0;
                try {
                  for (
                    var a, u = e[Symbol.iterator]();
                    !(r = (a = u.next()).done) &&
                    (n.push(a.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  (o = !0), (i = e);
                } finally {
                  try {
                    r || null == u.return || u.return();
                  } finally {
                    if (o) throw i;
                  }
                }
                return n;
              })(e, t) ||
              u()
            );
          }
          n(8);
          var A = [
              ["Afghanistan", ["asia"], "af", "93"],
              ["Albania", ["europe"], "al", "355"],
              ["Algeria", ["africa", "north-africa"], "dz", "213"],
              ["Andorra", ["europe"], "ad", "376"],
              ["Angola", ["africa"], "ao", "244"],
              ["Antigua and Barbuda", ["america", "carribean"], "ag", "1268"],
              [
                "Argentina",
                ["america", "south-america"],
                "ar",
                "54",
                "(..) ........",
                0,
                [
                  "11",
                  "221",
                  "223",
                  "261",
                  "264",
                  "2652",
                  "280",
                  "2905",
                  "291",
                  "2920",
                  "2966",
                  "299",
                  "341",
                  "342",
                  "343",
                  "351",
                  "376",
                  "379",
                  "381",
                  "3833",
                  "385",
                  "387",
                  "388",
                ],
              ],
              ["Armenia", ["asia", "ex-ussr"], "am", "374", ".. ......"],
              ["Aruba", ["america", "carribean"], "aw", "297"],
              [
                "Australia",
                ["oceania"],
                "au",
                "61",
                "(..) .... ....",
                0,
                ["2", "3", "4", "7", "8", "02", "03", "04", "07", "08"],
              ],
              ["Austria", ["europe", "eu-union"], "at", "43"],
              [
                "Azerbaijan",
                ["asia", "ex-ussr"],
                "az",
                "994",
                "(..) ... .. ..",
              ],
              ["Bahamas", ["america", "carribean"], "bs", "1242"],
              ["Bahrain", ["middle-east"], "bh", "973"],
              ["Bangladesh", ["asia"], "bd", "880"],
              ["Barbados", ["america", "carribean"], "bb", "1246"],
              ["Belarus", ["europe", "ex-ussr"], "by", "375", "(..) ... .. .."],
              ["Belgium", ["europe", "eu-union"], "be", "32", "... .. .. .."],
              ["Belize", ["america", "central-america"], "bz", "501"],
              ["Benin", ["africa"], "bj", "229"],
              ["Bhutan", ["asia"], "bt", "975"],
              ["Bolivia", ["america", "south-america"], "bo", "591"],
              ["Bosnia and Herzegovina", ["europe", "ex-yugos"], "ba", "387"],
              ["Botswana", ["africa"], "bw", "267"],
              [
                "Brazil",
                ["america", "south-america"],
                "br",
                "55",
                "(..) .........",
              ],
              ["British Indian Ocean Territory", ["asia"], "io", "246"],
              ["Brunei", ["asia"], "bn", "673"],
              ["Bulgaria", ["europe", "eu-union"], "bg", "359"],
              ["Burkina Faso", ["africa"], "bf", "226"],
              ["Burundi", ["africa"], "bi", "257"],
              ["Cambodia", ["asia"], "kh", "855"],
              ["Cameroon", ["africa"], "cm", "237"],
              [
                "Canada",
                ["america", "north-america"],
                "ca",
                "1",
                "(...) ...-....",
                1,
                [
                  "204",
                  "226",
                  "236",
                  "249",
                  "250",
                  "289",
                  "306",
                  "343",
                  "365",
                  "387",
                  "403",
                  "416",
                  "418",
                  "431",
                  "437",
                  "438",
                  "450",
                  "506",
                  "514",
                  "519",
                  "548",
                  "579",
                  "581",
                  "587",
                  "604",
                  "613",
                  "639",
                  "647",
                  "672",
                  "705",
                  "709",
                  "742",
                  "778",
                  "780",
                  "782",
                  "807",
                  "819",
                  "825",
                  "867",
                  "873",
                  "902",
                  "905",
                ],
              ],
              ["Cape Verde", ["africa"], "cv", "238"],
              [
                "Caribbean Netherlands",
                ["america", "carribean"],
                "bq",
                "599",
                "",
                1,
              ],
              ["Central African Republic", ["africa"], "cf", "236"],
              ["Chad", ["africa"], "td", "235"],
              ["Chile", ["america", "south-america"], "cl", "56"],
              ["China", ["asia"], "cn", "86", "..-........."],
              [
                "Colombia",
                ["america", "south-america"],
                "co",
                "57",
                "... ... ....",
              ],
              ["Comoros", ["africa"], "km", "269"],
              ["Congo", ["africa"], "cd", "243"],
              ["Congo", ["africa"], "cg", "242"],
              [
                "Costa Rica",
                ["america", "central-america"],
                "cr",
                "506",
                "....-....",
              ],
              ["C\xf4te d’Ivoire", ["africa"], "ci", "225", ".. .. .. .."],
              ["Croatia", ["europe", "eu-union", "ex-yugos"], "hr", "385"],
              ["Cuba", ["america", "carribean"], "cu", "53"],
              ["Cura\xe7ao", ["america", "carribean"], "cw", "599", "", 0],
              ["Cyprus", ["europe", "eu-union"], "cy", "357", ".. ......"],
              [
                "Czech Republic",
                ["europe", "eu-union"],
                "cz",
                "420",
                "... ... ...",
              ],
              [
                "Denmark",
                ["europe", "eu-union", "baltic"],
                "dk",
                "45",
                ".. .. .. ..",
              ],
              ["Djibouti", ["africa"], "dj", "253"],
              ["Dominica", ["america", "carribean"], "dm", "1767"],
              [
                "Dominican Republic",
                ["america", "carribean"],
                "do",
                "1",
                "",
                2,
                ["809", "829", "849"],
              ],
              ["Ecuador", ["america", "south-america"], "ec", "593"],
              ["Egypt", ["africa", "north-africa"], "eg", "20"],
              [
                "El Salvador",
                ["america", "central-america"],
                "sv",
                "503",
                "....-....",
              ],
              ["Equatorial Guinea", ["africa"], "gq", "240"],
              ["Eritrea", ["africa"], "er", "291"],
              [
                "Estonia",
                ["europe", "eu-union", "ex-ussr", "baltic"],
                "ee",
                "372",
                ".... ......",
              ],
              ["Ethiopia", ["africa"], "et", "251"],
              ["Fiji", ["oceania"], "fj", "679"],
              [
                "Finland",
                ["europe", "eu-union", "baltic"],
                "fi",
                "358",
                ".. ... .. ..",
              ],
              ["France", ["europe", "eu-union"], "fr", "33", ". .. .. .. .."],
              ["French Guiana", ["america", "south-america"], "gf", "594"],
              ["French Polynesia", ["oceania"], "pf", "689"],
              ["Gabon", ["africa"], "ga", "241"],
              ["Gambia", ["africa"], "gm", "220"],
              ["Georgia", ["asia", "ex-ussr"], "ge", "995"],
              [
                "Germany",
                ["europe", "eu-union", "baltic"],
                "de",
                "49",
                ".... ........",
              ],
              ["Ghana", ["africa"], "gh", "233"],
              ["Greece", ["europe", "eu-union"], "gr", "30"],
              ["Grenada", ["america", "carribean"], "gd", "1473"],
              ["Guadeloupe", ["america", "carribean"], "gp", "590", "", 0],
              ["Guam", ["oceania"], "gu", "1671"],
              [
                "Guatemala",
                ["america", "central-america"],
                "gt",
                "502",
                "....-....",
              ],
              ["Guinea", ["africa"], "gn", "224"],
              ["Guinea-Bissau", ["africa"], "gw", "245"],
              ["Guyana", ["america", "south-america"], "gy", "592"],
              ["Haiti", ["america", "carribean"], "ht", "509", "....-...."],
              ["Honduras", ["america", "central-america"], "hn", "504"],
              ["Hong Kong", ["asia"], "hk", "852", ".... ...."],
              ["Hungary", ["europe", "eu-union"], "hu", "36"],
              ["Iceland", ["europe"], "is", "354", "... ...."],
              ["India", ["asia"], "in", "91", ".....-....."],
              ["Indonesia", ["asia"], "id", "62"],
              ["Iran", ["middle-east"], "ir", "98", "... ... ...."],
              ["Iraq", ["middle-east"], "iq", "964"],
              ["Ireland", ["europe", "eu-union"], "ie", "353", ".. ......."],
              ["Israel", ["middle-east"], "il", "972", "... ... ...."],
              ["Italy", ["europe", "eu-union"], "it", "39", "... .......", 0],
              ["Jamaica", ["america", "carribean"], "jm", "1876"],
              ["Japan", ["asia"], "jp", "81", ".. .... ...."],
              ["Jordan", ["middle-east"], "jo", "962"],
              [
                "Kazakhstan",
                ["asia", "ex-ussr"],
                "kz",
                "7",
                "... ...-..-..",
                1,
                [
                  "310",
                  "311",
                  "312",
                  "313",
                  "315",
                  "318",
                  "321",
                  "324",
                  "325",
                  "326",
                  "327",
                  "336",
                  "7172",
                  "73622",
                ],
              ],
              ["Kenya", ["africa"], "ke", "254"],
              ["Kiribati", ["oceania"], "ki", "686"],
              ["Kosovo", ["europe", "ex-yugos"], "xk", "383"],
              ["Kuwait", ["middle-east"], "kw", "965"],
              ["Kyrgyzstan", ["asia", "ex-ussr"], "kg", "996", "... ... ..."],
              ["Laos", ["asia"], "la", "856"],
              [
                "Latvia",
                ["europe", "eu-union", "ex-ussr", "baltic"],
                "lv",
                "371",
                ".. ... ...",
              ],
              ["Lebanon", ["middle-east"], "lb", "961"],
              ["Lesotho", ["africa"], "ls", "266"],
              ["Liberia", ["africa"], "lr", "231"],
              ["Libya", ["africa", "north-africa"], "ly", "218"],
              ["Liechtenstein", ["europe"], "li", "423"],
              [
                "Lithuania",
                ["europe", "eu-union", "ex-ussr", "baltic"],
                "lt",
                "370",
              ],
              ["Luxembourg", ["europe", "eu-union"], "lu", "352"],
              ["Macau", ["asia"], "mo", "853"],
              ["Macedonia", ["europe", "ex-yugos"], "mk", "389"],
              ["Madagascar", ["africa"], "mg", "261"],
              ["Malawi", ["africa"], "mw", "265"],
              ["Malaysia", ["asia"], "my", "60", "..-....-...."],
              ["Maldives", ["asia"], "mv", "960"],
              ["Mali", ["africa"], "ml", "223"],
              ["Malta", ["europe", "eu-union"], "mt", "356"],
              ["Marshall Islands", ["oceania"], "mh", "692"],
              ["Martinique", ["america", "carribean"], "mq", "596"],
              ["Mauritania", ["africa"], "mr", "222"],
              ["Mauritius", ["africa"], "mu", "230"],
              [
                "Mexico",
                ["america", "central-america"],
                "mx",
                "52",
                "... ... ....",
                0,
                ["55", "81", "33", "656", "664", "998", "774", "229"],
              ],
              ["Micronesia", ["oceania"], "fm", "691"],
              ["Moldova", ["europe"], "md", "373", "(..) ..-..-.."],
              ["Monaco", ["europe"], "mc", "377"],
              ["Mongolia", ["asia"], "mn", "976"],
              ["Montenegro", ["europe", "ex-yugos"], "me", "382"],
              ["Morocco", ["africa", "north-africa"], "ma", "212"],
              ["Mozambique", ["africa"], "mz", "258"],
              ["Myanmar", ["asia"], "mm", "95"],
              ["Namibia", ["africa"], "na", "264"],
              ["Nauru", ["africa"], "nr", "674"],
              ["Nepal", ["asia"], "np", "977"],
              [
                "Netherlands",
                ["europe", "eu-union"],
                "nl",
                "31",
                ".. ........",
              ],
              ["New Caledonia", ["oceania"], "nc", "687"],
              ["New Zealand", ["oceania"], "nz", "64", "...-...-...."],
              ["Nicaragua", ["america", "central-america"], "ni", "505"],
              ["Niger", ["africa"], "ne", "227"],
              ["Nigeria", ["africa"], "ng", "234"],
              ["North Korea", ["asia"], "kp", "850"],
              ["Norway", ["europe", "baltic"], "no", "47", "... .. ..."],
              ["Oman", ["middle-east"], "om", "968"],
              ["Pakistan", ["asia"], "pk", "92", "...-......."],
              ["Palau", ["oceania"], "pw", "680"],
              ["Palestine", ["middle-east"], "ps", "970"],
              ["Panama", ["america", "central-america"], "pa", "507"],
              ["Papua New Guinea", ["oceania"], "pg", "675"],
              ["Paraguay", ["america", "south-america"], "py", "595"],
              ["Peru", ["america", "south-america"], "pe", "51"],
              ["Philippines", ["asia"], "ph", "63", ".... ......."],
              [
                "Poland",
                ["europe", "eu-union", "baltic"],
                "pl",
                "48",
                "...-...-...",
              ],
              ["Portugal", ["europe", "eu-union"], "pt", "351"],
              [
                "Puerto Rico",
                ["america", "carribean"],
                "pr",
                "1",
                "",
                3,
                ["787", "939"],
              ],
              ["Qatar", ["middle-east"], "qa", "974"],
              ["R\xe9union", ["africa"], "re", "262"],
              ["Romania", ["europe", "eu-union"], "ro", "40"],
              [
                "Russia",
                ["europe", "asia", "ex-ussr", "baltic"],
                "ru",
                "7",
                "(...) ...-..-..",
                0,
              ],
              ["Rwanda", ["africa"], "rw", "250"],
              ["Saint Kitts and Nevis", ["america", "carribean"], "kn", "1869"],
              ["Saint Lucia", ["america", "carribean"], "lc", "1758"],
              [
                "Saint Vincent and the Grenadines",
                ["america", "carribean"],
                "vc",
                "1784",
              ],
              ["Samoa", ["oceania"], "ws", "685"],
              ["San Marino", ["europe"], "sm", "378"],
              ["S\xe3o Tom\xe9 and Pr\xedncipe", ["africa"], "st", "239"],
              ["Saudi Arabia", ["middle-east"], "sa", "966"],
              ["Senegal", ["africa"], "sn", "221"],
              ["Serbia", ["europe", "ex-yugos"], "rs", "381"],
              ["Seychelles", ["africa"], "sc", "248"],
              ["Sierra Leone", ["africa"], "sl", "232"],
              ["Singapore", ["asia"], "sg", "65", "....-...."],
              ["Slovakia", ["europe", "eu-union"], "sk", "421"],
              ["Slovenia", ["europe", "eu-union", "ex-yugos"], "si", "386"],
              ["Solomon Islands", ["oceania"], "sb", "677"],
              ["Somalia", ["africa"], "so", "252"],
              ["South Africa", ["africa"], "za", "27"],
              ["South Korea", ["asia"], "kr", "82", "... .... ...."],
              ["South Sudan", ["africa", "north-africa"], "ss", "211"],
              ["Spain", ["europe", "eu-union"], "es", "34", "... ... ..."],
              ["Sri Lanka", ["asia"], "lk", "94"],
              ["Sudan", ["africa"], "sd", "249"],
              ["Suriname", ["america", "south-america"], "sr", "597"],
              ["Swaziland", ["africa"], "sz", "268"],
              [
                "Sweden",
                ["europe", "eu-union", "baltic"],
                "se",
                "46",
                "(...) ...-...",
              ],
              ["Switzerland", ["europe"], "ch", "41", ".. ... .. .."],
              ["Syria", ["middle-east"], "sy", "963"],
              ["Taiwan", ["asia"], "tw", "886"],
              ["Tajikistan", ["asia", "ex-ussr"], "tj", "992"],
              ["Tanzania", ["africa"], "tz", "255"],
              ["Thailand", ["asia"], "th", "66"],
              ["Timor-Leste", ["asia"], "tl", "670"],
              ["Togo", ["africa"], "tg", "228"],
              ["Tonga", ["oceania"], "to", "676"],
              ["Trinidad and Tobago", ["america", "carribean"], "tt", "1868"],
              ["Tunisia", ["africa", "north-africa"], "tn", "216"],
              ["Turkey", ["europe"], "tr", "90", "... ... .. .."],
              ["Turkmenistan", ["asia", "ex-ussr"], "tm", "993"],
              ["Tuvalu", ["asia"], "tv", "688"],
              ["Uganda", ["africa"], "ug", "256"],
              ["Ukraine", ["europe", "ex-ussr"], "ua", "380", "(..) ... .. .."],
              ["United Arab Emirates", ["middle-east"], "ae", "971"],
              [
                "United Kingdom",
                ["europe", "eu-union"],
                "gb",
                "44",
                ".... ......",
              ],
              [
                "United States",
                ["america", "north-america"],
                "us",
                "1",
                "(...) ...-....",
                0,
                [
                  "907",
                  "205",
                  "251",
                  "256",
                  "334",
                  "479",
                  "501",
                  "870",
                  "480",
                  "520",
                  "602",
                  "623",
                  "928",
                  "209",
                  "213",
                  "310",
                  "323",
                  "408",
                  "415",
                  "510",
                  "530",
                  "559",
                  "562",
                  "619",
                  "626",
                  "650",
                  "661",
                  "707",
                  "714",
                  "760",
                  "805",
                  "818",
                  "831",
                  "858",
                  "909",
                  "916",
                  "925",
                  "949",
                  "951",
                  "303",
                  "719",
                  "970",
                  "203",
                  "860",
                  "202",
                  "302",
                  "239",
                  "305",
                  "321",
                  "352",
                  "386",
                  "407",
                  "561",
                  "727",
                  "772",
                  "813",
                  "850",
                  "863",
                  "904",
                  "941",
                  "954",
                  "229",
                  "404",
                  "478",
                  "706",
                  "770",
                  "912",
                  "808",
                  "319",
                  "515",
                  "563",
                  "641",
                  "712",
                  "208",
                  "217",
                  "309",
                  "312",
                  "618",
                  "630",
                  "708",
                  "773",
                  "815",
                  "847",
                  "219",
                  "260",
                  "317",
                  "574",
                  "765",
                  "812",
                  "316",
                  "620",
                  "785",
                  "913",
                  "270",
                  "502",
                  "606",
                  "859",
                  "225",
                  "318",
                  "337",
                  "504",
                  "985",
                  "413",
                  "508",
                  "617",
                  "781",
                  "978",
                  "301",
                  "410",
                  "207",
                  "231",
                  "248",
                  "269",
                  "313",
                  "517",
                  "586",
                  "616",
                  "734",
                  "810",
                  "906",
                  "989",
                  "218",
                  "320",
                  "507",
                  "612",
                  "651",
                  "763",
                  "952",
                  "314",
                  "417",
                  "573",
                  "636",
                  "660",
                  "816",
                  "228",
                  "601",
                  "662",
                  "406",
                  "252",
                  "336",
                  "704",
                  "828",
                  "910",
                  "919",
                  "701",
                  "308",
                  "402",
                  "603",
                  "201",
                  "609",
                  "732",
                  "856",
                  "908",
                  "973",
                  "505",
                  "575",
                  "702",
                  "775",
                  "212",
                  "315",
                  "516",
                  "518",
                  "585",
                  "607",
                  "631",
                  "716",
                  "718",
                  "845",
                  "914",
                  "216",
                  "330",
                  "419",
                  "440",
                  "513",
                  "614",
                  "740",
                  "937",
                  "405",
                  "580",
                  "918",
                  "503",
                  "541",
                  "215",
                  "412",
                  "570",
                  "610",
                  "717",
                  "724",
                  "814",
                  "401",
                  "803",
                  "843",
                  "864",
                  "605",
                  "423",
                  "615",
                  "731",
                  "865",
                  "901",
                  "931",
                  "210",
                  "214",
                  "254",
                  "281",
                  "325",
                  "361",
                  "409",
                  "432",
                  "512",
                  "713",
                  "806",
                  "817",
                  "830",
                  "903",
                  "915",
                  "936",
                  "940",
                  "956",
                  "972",
                  "979",
                  "435",
                  "801",
                  "276",
                  "434",
                  "540",
                  "703",
                  "757",
                  "804",
                  "802",
                  "206",
                  "253",
                  "360",
                  "425",
                  "509",
                  "262",
                  "414",
                  "608",
                  "715",
                  "920",
                  "304",
                  "307",
                ],
              ],
              ["Uruguay", ["america", "south-america"], "uy", "598"],
              ["Uzbekistan", ["asia", "ex-ussr"], "uz", "998", ".. ... .. .."],
              ["Vanuatu", ["oceania"], "vu", "678"],
              ["Vatican City", ["europe"], "va", "39", ".. .... ....", 1],
              ["Venezuela", ["america", "south-america"], "ve", "58"],
              ["Vietnam", ["asia"], "vn", "84"],
              ["Yemen", ["middle-east"], "ye", "967"],
              ["Zambia", ["africa"], "zm", "260"],
              ["Zimbabwe", ["africa"], "zw", "263"],
            ],
            x = [
              ["American Samoa", ["oceania"], "as", "1684"],
              ["Anguilla", ["america", "carribean"], "ai", "1264"],
              ["Bermuda", ["america", "north-america"], "bm", "1441"],
              [
                "British Virgin Islands",
                ["america", "carribean"],
                "vg",
                "1284",
              ],
              ["Cayman Islands", ["america", "carribean"], "ky", "1345"],
              ["Cook Islands", ["oceania"], "ck", "682"],
              ["Falkland Islands", ["america", "south-america"], "fk", "500"],
              ["Faroe Islands", ["europe"], "fo", "298"],
              ["Gibraltar", ["europe"], "gi", "350"],
              ["Greenland", ["america"], "gl", "299"],
              ["Jersey", ["europe", "eu-union"], "je", "44", ".... ......"],
              ["Montserrat", ["america", "carribean"], "ms", "1664"],
              ["Niue", ["asia"], "nu", "683"],
              ["Norfolk Island", ["oceania"], "nf", "672"],
              ["Northern Mariana Islands", ["oceania"], "mp", "1670"],
              [
                "Saint Barth\xe9lemy",
                ["america", "carribean"],
                "bl",
                "590",
                "",
                1,
              ],
              ["Saint Helena", ["africa"], "sh", "290"],
              ["Saint Martin", ["america", "carribean"], "mf", "590", "", 2],
              [
                "Saint Pierre and Miquelon",
                ["america", "north-america"],
                "pm",
                "508",
              ],
              ["Sint Maarten", ["america", "carribean"], "sx", "1721"],
              ["Tokelau", ["oceania"], "tk", "690"],
              [
                "Turks and Caicos Islands",
                ["america", "carribean"],
                "tc",
                "1649",
              ],
              ["U.S. Virgin Islands", ["america", "carribean"], "vi", "1340"],
              ["Wallis and Futuna", ["oceania"], "wf", "681"],
            ];
          function I(e, t, n, o, a) {
            var u,
              l,
              s = [];
            return (
              (l = !0 === t),
              [
                (u = []).concat.apply(
                  u,
                  i(
                    e.map(function (e) {
                      var i,
                        u,
                        c = {
                          name: e[0],
                          regions: e[1],
                          iso2: e[2],
                          countryCode: e[3],
                          dialCode: e[3],
                          format:
                            ((i = e[3]),
                            (u = e[4]) && !a
                              ? n + "".padEnd(i.length, ".") + " " + u
                              : n + "".padEnd(i.length, ".") + " " + o),
                          priority: e[5] || 0,
                        },
                        f = [];
                      return (
                        e[6] &&
                          e[6].map(function (t) {
                            var n = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var n =
                                    null != arguments[t] ? arguments[t] : {},
                                  o = Object.keys(n);
                                "function" ==
                                  typeof Object.getOwnPropertySymbols &&
                                  (o = o.concat(
                                    Object.getOwnPropertySymbols(n).filter(
                                      function (e) {
                                        return Object.getOwnPropertyDescriptor(
                                          n,
                                          e
                                        ).enumerable;
                                      }
                                    )
                                  )),
                                  o.forEach(function (t) {
                                    r(e, t, n[t]);
                                  });
                              }
                              return e;
                            })({}, c);
                            (n.dialCode = e[3] + t),
                              (n.isAreaCode = !0),
                              (n.areaCodeLength = t.length),
                              f.push(n);
                          }),
                        f.length > 0
                          ? ((c.mainCode = !0),
                            l ||
                            ("Array" === t.constructor.name && t.includes(e[2]))
                              ? ((c.hasAreaCodes = !0), [c].concat(f))
                              : ((s = s.concat(f)), [c]))
                          : [c]
                      );
                    })
                  )
                ),
                s,
              ]
            );
          }
          function N(e, t, n, r) {
            if (null !== n) {
              var o = Object.keys(n),
                i = Object.values(n);
              o.forEach(function (n, o) {
                if (r) return e.push([n, i[o]]);
                var a = e.findIndex(function (e) {
                  return e[0] === n;
                });
                if (-1 === a) {
                  var u = [n];
                  (u[t] = i[o]), e.push(u);
                } else e[a][t] = i[o];
              });
            }
          }
          function T(e, t) {
            return 0 === t.length
              ? e
              : e.map(function (e) {
                  var n = t.findIndex(function (t) {
                    return t[0] === e[2];
                  });
                  if (-1 === n) return e;
                  var r = t[n];
                  return (
                    r[1] && (e[4] = r[1]),
                    r[3] && (e[5] = r[3]),
                    r[2] && (e[6] = r[2]),
                    e
                  );
                });
          }
          var k = function e(t, n, r, o, a, u, s, c, f, h, d, p, g, m) {
              l(this, e),
                (this.filterRegions = function (e, t) {
                  return "string" == typeof e
                    ? t.filter(function (t) {
                        return t.regions.some(function (t) {
                          return t === e;
                        });
                      })
                    : t.filter(function (t) {
                        return e
                          .map(function (e) {
                            return t.regions.some(function (t) {
                              return t === e;
                            });
                          })
                          .some(function (e) {
                            return e;
                          });
                      });
                }),
                (this.sortTerritories = function (e, t) {
                  var n = [].concat(i(e), i(t));
                  return (
                    n.sort(function (e, t) {
                      return e.name < t.name ? -1 : e.name > t.name ? 1 : 0;
                    }),
                    n
                  );
                }),
                (this.getFilteredCountryList = function (e, t, n) {
                  return 0 === e.length
                    ? t
                    : n
                    ? e
                        .map(function (e) {
                          var n = t.find(function (t) {
                            return t.iso2 === e;
                          });
                          if (n) return n;
                        })
                        .filter(function (e) {
                          return e;
                        })
                    : t.filter(function (t) {
                        return e.some(function (e) {
                          return e === t.iso2;
                        });
                      });
                }),
                (this.localizeCountries = function (e, t, n) {
                  for (var r = 0; r < e.length; r++)
                    void 0 !== t[e[r].iso2]
                      ? (e[r].localName = t[e[r].iso2])
                      : void 0 !== t[e[r].name] &&
                        (e[r].localName = t[e[r].name]);
                  return (
                    n ||
                      e.sort(function (e, t) {
                        return e.localName < t.localName
                          ? -1
                          : e.localName > t.localName
                          ? 1
                          : 0;
                      }),
                    e
                  );
                }),
                (this.getCustomAreas = function (e, t) {
                  for (var n = [], r = 0; r < t.length; r++) {
                    var o = JSON.parse(JSON.stringify(e));
                    (o.dialCode += t[r]), n.push(o);
                  }
                  return n;
                }),
                (this.excludeCountries = function (e, t) {
                  return 0 === t.length
                    ? e
                    : e.filter(function (e) {
                        return !t.includes(e.iso2);
                      });
                });
              var v,
                y = (N((v = []), 1, c, !0), N(v, 3, f), N(v, 2, h), v),
                b = T(JSON.parse(JSON.stringify(A)), y),
                _ = T(JSON.parse(JSON.stringify(x)), y),
                w = R(I(b, t, p, g, m), 2),
                E = w[0],
                S = w[1];
              if (n) {
                var C = R(I(_, t, p, g, m), 2),
                  M = C[0];
                C[1], (E = this.sortTerritories(M, E));
              }
              r && (E = this.filterRegions(r, E)),
                (this.onlyCountries = this.localizeCountries(
                  this.excludeCountries(
                    this.getFilteredCountryList(
                      o,
                      E,
                      s.includes("onlyCountries")
                    ),
                    u
                  ),
                  d,
                  s.includes("onlyCountries")
                )),
                (this.preferredCountries =
                  0 === a.length
                    ? []
                    : this.localizeCountries(
                        this.getFilteredCountryList(
                          a,
                          E,
                          s.includes("preferredCountries")
                        ),
                        d,
                        s.includes("preferredCountries")
                      )),
                (this.hiddenAreaCodes = this.excludeCountries(
                  this.getFilteredCountryList(o, S),
                  u
                ));
            },
            O = (function (e) {
              var t, n;
              function c(e) {
                l(this, c),
                  ((n =
                    (t = d(c).call(this, e)) &&
                    ("object" === f(t) || "function" == typeof t)
                      ? t
                      : h(this)).getProbableCandidate = _()(function (e) {
                    return e && 0 !== e.length
                      ? n.state.onlyCountries.filter(function (t) {
                          return C()(t.name.toLowerCase(), e.toLowerCase());
                        }, h(h(n)))[0]
                      : null;
                  })),
                  (n.guessSelectedCountry = _()(function (e, t, r, o) {
                    if (
                      !1 === n.props.enableAreaCodes &&
                      (o.some(function (t) {
                        if (C()(e, t.dialCode))
                          return (
                            r.some(function (e) {
                              if (t.iso2 === e.iso2 && e.mainCode)
                                return (i = e), !0;
                            }),
                            !0
                          );
                      }),
                      i)
                    )
                      return i;
                    var i,
                      a = r.find(function (e) {
                        return e.iso2 == t;
                      });
                    if ("" === e.trim()) return a;
                    var u = r.reduce(
                      function (t, n) {
                        return C()(e, n.dialCode) &&
                          (n.dialCode.length > t.dialCode.length ||
                            (n.dialCode.length === t.dialCode.length &&
                              n.priority < t.priority))
                          ? n
                          : t;
                      },
                      { dialCode: "", priority: 10001 },
                      h(h(n))
                    );
                    return u.name ? u : a;
                  })),
                  (n.updateCountry = function (e) {
                    var t,
                      r = n.state.onlyCountries;
                    (t =
                      e.indexOf(0) >= "0" && "9" >= e.indexOf(0)
                        ? r.find(function (t) {
                            return t.dialCode == +e;
                          })
                        : r.find(function (t) {
                            return t.iso2 == e;
                          })) &&
                      t.dialCode &&
                      n.setState({
                        selectedCountry: t,
                        formattedNumber: n.props.disableCountryCode
                          ? ""
                          : n.formatNumber(t.dialCode, t),
                      });
                  }),
                  (n.scrollTo = function (e, t) {
                    if (e) {
                      var r = n.dropdownRef;
                      if (r && document.body) {
                        var o = r.offsetHeight,
                          i =
                            r.getBoundingClientRect().top +
                            document.body.scrollTop,
                          a = e.getBoundingClientRect(),
                          u = e.offsetHeight,
                          l = a.top + document.body.scrollTop,
                          s = l - i + r.scrollTop,
                          c = o / 2 - u / 2;
                        (n.props.enableSearch ? l < i + 32 : l < i)
                          ? (t && (s -= c), (r.scrollTop = s))
                          : l + u > i + o &&
                            (t && (s += c), (r.scrollTop = s - (o - u)));
                      }
                    }
                  }),
                  (n.scrollToTop = function () {
                    var e = n.dropdownRef;
                    e && document.body && (e.scrollTop = 0);
                  }),
                  (n.formatNumber = function (e, t) {
                    if (!t) return e;
                    var r,
                      i = t.format,
                      l = n.props,
                      s = l.disableCountryCode,
                      c = l.enableAreaCodeStretch,
                      f = l.enableLongNumbers,
                      h = l.autoFormat;
                    if (
                      (s
                        ? ((r = i.split(" ")).shift(), (r = r.join(" ")))
                        : c && t.isAreaCode
                        ? (((r = i.split(" "))[1] = r[1].replace(
                            /\.+/,
                            "".padEnd(t.areaCodeLength, ".")
                          )),
                          (r = r.join(" ")))
                        : (r = i),
                      !e || 0 === e.length)
                    )
                      return s ? "" : n.props.prefix;
                    if ((e && e.length < 2) || !r || !h)
                      return s ? e : n.props.prefix + e;
                    var d,
                      p = E()(
                        r,
                        function (e, t) {
                          if (0 === e.remainingText.length) return e;
                          if ("." !== t)
                            return {
                              formattedText: e.formattedText + t,
                              remainingText: e.remainingText,
                            };
                          var n,
                            r = a((n = e.remainingText)) || o(n) || u(),
                            i = r[0],
                            l = r.slice(1);
                          return {
                            formattedText: e.formattedText + i,
                            remainingText: l,
                          };
                        },
                        { formattedText: "", remainingText: e.split("") }
                      );
                    return (
                      (d = f
                        ? p.formattedText + p.remainingText.join("")
                        : p.formattedText).includes("(") &&
                        !d.includes(")") &&
                        (d += ")"),
                      d
                    );
                  }),
                  (n.cursorToEnd = function () {
                    var e = n.numberInputRef;
                    if (document.activeElement === e) {
                      e.focus();
                      var t = e.value.length;
                      ")" === e.value.charAt(t - 1) && (t -= 1),
                        e.setSelectionRange(t, t);
                    }
                  }),
                  (n.getElement = function (e) {
                    return n["flag_no_".concat(e)];
                  }),
                  (n.getCountryData = function () {
                    return n.state.selectedCountry
                      ? {
                          name: n.state.selectedCountry.name || "",
                          dialCode: n.state.selectedCountry.dialCode || "",
                          countryCode: n.state.selectedCountry.iso2 || "",
                          format: n.state.selectedCountry.format || "",
                        }
                      : {};
                  }),
                  (n.handleFlagDropdownClick = function (e) {
                    if (
                      (e.preventDefault(),
                      n.state.showDropdown || !n.props.disabled)
                    ) {
                      var t = n.state,
                        r = t.preferredCountries,
                        o = t.onlyCountries,
                        i = t.selectedCountry,
                        a = n
                          .concatPreferredCountries(r, o)
                          .findIndex(function (e) {
                            return (
                              e.dialCode === i.dialCode && e.iso2 === i.iso2
                            );
                          });
                      n.setState(
                        {
                          showDropdown: !n.state.showDropdown,
                          highlightCountryIndex: a,
                        },
                        function () {
                          n.state.showDropdown &&
                            n.scrollTo(
                              n.getElement(n.state.highlightCountryIndex)
                            );
                        }
                      );
                    }
                  }),
                  (n.handleInput = function (e) {
                    var t = e.target.value,
                      r = n.props,
                      o = r.prefix,
                      i = r.onChange,
                      a = n.props.disableCountryCode ? "" : o,
                      u = n.state.selectedCountry,
                      l = n.state.freezeSelection;
                    if (!n.props.countryCodeEditable) {
                      var s =
                        o +
                        (u.hasAreaCodes
                          ? n.state.onlyCountries.find(function (e) {
                              return e.iso2 === u.iso2 && e.mainCode;
                            }).dialCode
                          : u.dialCode);
                      if (t.slice(0, s.length) !== s) return;
                    }
                    if (t === o)
                      return (
                        i && i("", n.getCountryData(), e, ""),
                        n.setState({ formattedNumber: "" })
                      );
                    if (
                      (!(t.replace(/\D/g, "").length > 15) ||
                        (!1 !== n.props.enableLongNumbers &&
                          ("number" != typeof n.props.enableLongNumbers ||
                            !(
                              t.replace(/\D/g, "").length >
                              n.props.enableLongNumbers
                            )))) &&
                      t !== n.state.formattedNumber
                    ) {
                      e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1);
                      var c = n.props.country,
                        f = n.state,
                        h = f.onlyCountries,
                        d = f.selectedCountry,
                        p = f.hiddenAreaCodes;
                      if ((i && e.persist(), t.length > 0)) {
                        var g = t.replace(/\D/g, "");
                        (!n.state.freezeSelection ||
                          (d && d.dialCode.length > g.length)) &&
                          ((u = n.props.disableCountryGuess
                            ? d
                            : n.guessSelectedCountry(
                                g.substring(0, 6),
                                c,
                                h,
                                p
                              ) || d),
                          (l = !1)),
                          (a = n.formatNumber(g, u)),
                          (u = u.dialCode ? u : d);
                      }
                      var m = e.target.selectionStart,
                        v = e.target.selectionStart,
                        y = n.state.formattedNumber,
                        b = a.length - y.length;
                      n.setState(
                        {
                          formattedNumber: a,
                          freezeSelection: l,
                          selectedCountry: u,
                        },
                        function () {
                          b > 0 && (v -= b),
                            ")" == a.charAt(a.length - 1)
                              ? n.numberInputRef.setSelectionRange(
                                  a.length - 1,
                                  a.length - 1
                                )
                              : v > 0 && y.length >= a.length
                              ? n.numberInputRef.setSelectionRange(v, v)
                              : m < y.length &&
                                n.numberInputRef.setSelectionRange(m, m),
                            i &&
                              i(
                                a.replace(/[^0-9]+/g, ""),
                                n.getCountryData(),
                                e,
                                a
                              );
                        }
                      );
                    }
                  }),
                  (n.handleInputClick = function (e) {
                    n.setState({ showDropdown: !1 }),
                      n.props.onClick && n.props.onClick(e, n.getCountryData());
                  }),
                  (n.handleDoubleClick = function (e) {
                    var t = e.target.value.length;
                    e.target.setSelectionRange(0, t);
                  }),
                  (n.handleFlagItemClick = function (e, t) {
                    var r = n.state.selectedCountry,
                      o = n.state.onlyCountries.find(function (t) {
                        return t == e;
                      });
                    if (o) {
                      var i = n.state.formattedNumber
                          .replace(" ", "")
                          .replace("(", "")
                          .replace(")", "")
                          .replace("-", ""),
                        a =
                          i.length > 1
                            ? i.replace(r.dialCode, o.dialCode)
                            : o.dialCode,
                        u = n.formatNumber(a.replace(/\D/g, ""), o);
                      n.setState(
                        {
                          showDropdown: !1,
                          selectedCountry: o,
                          freezeSelection: !0,
                          formattedNumber: u,
                          searchValue: "",
                        },
                        function () {
                          n.cursorToEnd(),
                            n.props.onChange &&
                              n.props.onChange(
                                u.replace(/[^0-9]+/g, ""),
                                n.getCountryData(),
                                t,
                                u
                              );
                        }
                      );
                    }
                  }),
                  (n.handleInputFocus = function (e) {
                    n.numberInputRef &&
                      n.numberInputRef.value === n.props.prefix &&
                      n.state.selectedCountry &&
                      !n.props.disableCountryCode &&
                      n.setState(
                        {
                          formattedNumber:
                            n.props.prefix + n.state.selectedCountry.dialCode,
                        },
                        function () {
                          n.props.jumpCursorToEnd &&
                            setTimeout(n.cursorToEnd, 0);
                        }
                      ),
                      n.setState({ placeholder: "" }),
                      n.props.onFocus && n.props.onFocus(e, n.getCountryData()),
                      n.props.jumpCursorToEnd && setTimeout(n.cursorToEnd, 0);
                  }),
                  (n.handleInputBlur = function (e) {
                    e.target.value ||
                      n.setState({ placeholder: n.props.placeholder }),
                      n.props.onBlur && n.props.onBlur(e, n.getCountryData());
                  }),
                  (n.handleInputCopy = function (e) {
                    if (n.props.copyNumbersOnly) {
                      var t = window
                        .getSelection()
                        .toString()
                        .replace(/[^0-9]+/g, "");
                      e.clipboardData.setData("text/plain", t),
                        e.preventDefault();
                    }
                  }),
                  (n.getHighlightCountryIndex = function (e) {
                    var t = n.state.highlightCountryIndex + e;
                    return t < 0 ||
                      t >=
                        n.state.onlyCountries.length +
                          n.state.preferredCountries.length
                      ? t - e
                      : n.props.enableSearch &&
                        t > n.getSearchFilteredCountries().length
                      ? 0
                      : t;
                  }),
                  (n.searchCountry = function () {
                    var e =
                        n.getProbableCandidate(n.state.queryString) ||
                        n.state.onlyCountries[0],
                      t =
                        n.state.onlyCountries.findIndex(function (t) {
                          return t == e;
                        }) + n.state.preferredCountries.length;
                    n.scrollTo(n.getElement(t), !0),
                      n.setState({ queryString: "", highlightCountryIndex: t });
                  }),
                  (n.handleKeydown = function (e) {
                    var t = n.props.keys,
                      r = e.target.className;
                    if (
                      r.includes("selected-flag") &&
                      e.which === t.ENTER &&
                      !n.state.showDropdown
                    )
                      return n.handleFlagDropdownClick(e);
                    if (
                      r.includes("form-control") &&
                      (e.which === t.ENTER || e.which === t.ESC)
                    )
                      return e.target.blur();
                    if (
                      n.state.showDropdown &&
                      !n.props.disabled &&
                      (!r.includes("search-box") ||
                        e.which === t.UP ||
                        e.which === t.DOWN ||
                        e.which === t.ENTER ||
                        (e.which === t.ESC && "" === e.target.value))
                    ) {
                      e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1);
                      var o = function (e) {
                        n.setState(
                          {
                            highlightCountryIndex:
                              n.getHighlightCountryIndex(e),
                          },
                          function () {
                            n.scrollTo(
                              n.getElement(n.state.highlightCountryIndex),
                              !0
                            );
                          }
                        );
                      };
                      switch (e.which) {
                        case t.DOWN:
                          o(1);
                          break;
                        case t.UP:
                          o(-1);
                          break;
                        case t.ENTER:
                          n.props.enableSearch
                            ? n.handleFlagItemClick(
                                n.getSearchFilteredCountries()[
                                  n.state.highlightCountryIndex
                                ] || n.getSearchFilteredCountries()[0],
                                e
                              )
                            : n.handleFlagItemClick(
                                [].concat(
                                  i(n.state.preferredCountries),
                                  i(n.state.onlyCountries)
                                )[n.state.highlightCountryIndex],
                                e
                              );
                          break;
                        case t.ESC:
                        case t.TAB:
                          n.setState({ showDropdown: !1 }, n.cursorToEnd);
                          break;
                        default:
                          ((e.which >= t.A && e.which <= t.Z) ||
                            e.which === t.SPACE) &&
                            n.setState(
                              {
                                queryString:
                                  n.state.queryString +
                                  String.fromCharCode(e.which),
                              },
                              n.state.debouncedQueryStingSearcher
                            );
                      }
                    }
                  }),
                  (n.handleInputKeyDown = function (e) {
                    var t = n.props,
                      r = t.keys,
                      o = t.onEnterKeyPress,
                      i = t.onKeyDown;
                    e.which === r.ENTER && o && o(e), i && i(e);
                  }),
                  (n.handleClickOutside = function (e) {
                    n.dropdownRef &&
                      !n.dropdownContainerRef.contains(e.target) &&
                      n.state.showDropdown &&
                      n.setState({ showDropdown: !1 });
                  }),
                  (n.handleSearchChange = function (e) {
                    var t = e.currentTarget.value,
                      r = n.state,
                      o = r.preferredCountries,
                      i = r.selectedCountry,
                      a = 0;
                    if ("" === t && i) {
                      var u = n.state.onlyCountries;
                      (a = n
                        .concatPreferredCountries(o, u)
                        .findIndex(function (e) {
                          return e == i;
                        })),
                        setTimeout(function () {
                          return n.scrollTo(n.getElement(a));
                        }, 100);
                    }
                    n.setState({ searchValue: t, highlightCountryIndex: a });
                  }),
                  (n.concatPreferredCountries = function (e, t) {
                    return e.length > 0 ? i(new Set(e.concat(t))) : t;
                  }),
                  (n.getDropdownCountryName = function (e) {
                    return e.localName || e.name;
                  }),
                  (n.getSearchFilteredCountries = function () {
                    var e = n.state,
                      t = e.preferredCountries,
                      r = e.onlyCountries,
                      o = e.searchValue,
                      a = n.props.enableSearch,
                      u = n.concatPreferredCountries(t, r),
                      l = o.trim().toLowerCase().replace("+", "");
                    if (a && l) {
                      if (/^\d+$/.test(l))
                        return u.filter(function (e) {
                          var t = e.dialCode;
                          return ["".concat(t)].some(function (e) {
                            return e.toLowerCase().includes(l);
                          });
                        });
                      var s = u.filter(function (e) {
                          var t = e.iso2;
                          return ["".concat(t)].some(function (e) {
                            return e.toLowerCase().includes(l);
                          });
                        }),
                        c = u.filter(function (e) {
                          var t = e.name,
                            n = e.localName;
                          return (
                            e.iso2,
                            ["".concat(t), "".concat(n || "")].some(function (
                              e
                            ) {
                              return e.toLowerCase().includes(l);
                            })
                          );
                        });
                      return n.scrollToTop(), i(new Set([].concat(s, c)));
                    }
                    return u;
                  }),
                  (n.getCountryDropdownList = function () {
                    var e = n.state,
                      t = e.preferredCountries,
                      o = e.highlightCountryIndex,
                      i = e.showDropdown,
                      a = e.searchValue,
                      u = n.props,
                      l = u.disableDropdown,
                      s = u.prefix,
                      c = n.props,
                      f = c.enableSearch,
                      h = c.searchNotFound,
                      d = c.disableSearchIcon,
                      p = c.searchClass,
                      g = c.searchStyle,
                      v = c.searchPlaceholder,
                      y = c.autocompleteSearch,
                      b = n.getSearchFilteredCountries().map(function (e, t) {
                        var r = o === t,
                          i = P()({
                            country: !0,
                            preferred: "us" === e.iso2 || "gb" === e.iso2,
                            active: "us" === e.iso2,
                            highlight: r,
                          }),
                          a = "flag ".concat(e.iso2);
                        return m.a.createElement(
                          "li",
                          Object.assign(
                            {
                              ref: function (e) {
                                return (n["flag_no_".concat(t)] = e);
                              },
                              key: "flag_no_".concat(t),
                              "data-flag-key": "flag_no_".concat(t),
                              className: i,
                              "data-dial-code": "1",
                              tabIndex: l ? "-1" : "0",
                              "data-country-code": e.iso2,
                              onClick: function (t) {
                                return n.handleFlagItemClick(e, t);
                              },
                              role: "option",
                            },
                            r ? { "aria-selected": !0 } : {}
                          ),
                          m.a.createElement("div", { className: a }),
                          m.a.createElement(
                            "span",
                            { className: "country-name" },
                            n.getDropdownCountryName(e)
                          ),
                          m.a.createElement(
                            "span",
                            { className: "dial-code" },
                            e.format
                              ? n.formatNumber(e.dialCode, e)
                              : s + e.dialCode
                          )
                        );
                      }),
                      _ = m.a.createElement("li", {
                        key: "dashes",
                        className: "divider",
                      });
                    t.length > 0 &&
                      (!f || (f && !a.trim())) &&
                      b.splice(t.length, 0, _);
                    var w = P()(
                      r(
                        { "country-list": !0, hide: !i },
                        n.props.dropdownClass,
                        !0
                      )
                    );
                    return m.a.createElement(
                      "ul",
                      {
                        ref: function (e) {
                          return !f && e && e.focus(), (n.dropdownRef = e);
                        },
                        className: w,
                        style: n.props.dropdownStyle,
                        role: "listbox",
                        tabIndex: "0",
                      },
                      f &&
                        m.a.createElement(
                          "li",
                          { className: P()(r({ search: !0 }, p, p)) },
                          !d &&
                            m.a.createElement(
                              "span",
                              {
                                className: P()(
                                  r(
                                    { "search-emoji": !0 },
                                    "".concat(p, "-emoji"),
                                    p
                                  )
                                ),
                                role: "img",
                                "aria-label": "Magnifying glass",
                              },
                              "\uD83D\uDD0E"
                            ),
                          m.a.createElement("input", {
                            className: P()(
                              r({ "search-box": !0 }, "".concat(p, "-box"), p)
                            ),
                            style: g,
                            type: "search",
                            placeholder: v,
                            autoFocus: !0,
                            autoComplete: y ? "on" : "off",
                            value: a,
                            onChange: n.handleSearchChange,
                          })
                        ),
                      b.length > 0
                        ? b
                        : m.a.createElement(
                            "li",
                            { className: "no-entries-message" },
                            m.a.createElement("span", null, h)
                          )
                    );
                  });
                var t,
                  n,
                  s,
                  p = new k(
                    e.enableAreaCodes,
                    e.enableTerritories,
                    e.regions,
                    e.onlyCountries,
                    e.preferredCountries,
                    e.excludeCountries,
                    e.preserveOrder,
                    e.masks,
                    e.priority,
                    e.areaCodes,
                    e.localization,
                    e.prefix,
                    e.defaultMask,
                    e.alwaysDefaultMask
                  ),
                  g = p.onlyCountries,
                  v = p.preferredCountries,
                  b = p.hiddenAreaCodes,
                  w = e.value ? e.value.replace(/\D/g, "") : "";
                s = e.disableInitialCountryGuess
                  ? 0
                  : w.length > 1
                  ? n.guessSelectedCountry(
                      w.substring(0, 6),
                      e.country,
                      g,
                      b
                    ) || 0
                  : (e.country &&
                      g.find(function (t) {
                        return t.iso2 == e.country;
                      })) ||
                    0;
                var S,
                  M =
                    w.length < 2 && s && !C()(w, s.dialCode) ? s.dialCode : "";
                S =
                  "" === w && 0 === s
                    ? ""
                    : n.formatNumber(
                        (e.disableCountryCode ? "" : M) + w,
                        s.name ? s : void 0
                      );
                var R = g.findIndex(function (e) {
                  return e == s;
                });
                return (
                  (n.state = {
                    showDropdown: e.showDropdown,
                    formattedNumber: S,
                    onlyCountries: g,
                    preferredCountries: v,
                    hiddenAreaCodes: b,
                    selectedCountry: s,
                    highlightCountryIndex: R,
                    queryString: "",
                    freezeSelection: !1,
                    debouncedQueryStingSearcher: y()(n.searchCountry, 250),
                    searchValue: "",
                  }),
                  n
                );
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    t && p(e, t);
                })(c, e),
                (t = [
                  {
                    key: "componentDidMount",
                    value: function () {
                      document.addEventListener &&
                        this.props.enableClickOutside &&
                        document.addEventListener(
                          "mousedown",
                          this.handleClickOutside
                        ),
                        this.props.onMount &&
                          this.props.onMount(
                            this.state.formattedNumber.replace(/[^0-9]+/g, ""),
                            this.getCountryData(),
                            this.state.formattedNumber
                          );
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      document.removeEventListener &&
                        this.props.enableClickOutside &&
                        document.removeEventListener(
                          "mousedown",
                          this.handleClickOutside
                        );
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e, t, n) {
                      e.country !== this.props.country
                        ? this.updateCountry(this.props.country)
                        : e.value !== this.props.value &&
                          this.updateFormattedNumber(this.props.value);
                    },
                  },
                  {
                    key: "updateFormattedNumber",
                    value: function (e) {
                      if (null === e)
                        return this.setState({
                          selectedCountry: 0,
                          formattedNumber: "",
                        });
                      var t = this.state,
                        n = t.onlyCountries,
                        r = t.selectedCountry,
                        o = t.hiddenAreaCodes,
                        i = this.props,
                        a = i.country,
                        u = i.prefix;
                      if ("" === e)
                        return this.setState({
                          selectedCountry: r,
                          formattedNumber: "",
                        });
                      var l,
                        s,
                        c = e.replace(/\D/g, "");
                      if (r && C()(e, u + r.dialCode))
                        (s = this.formatNumber(c, r)),
                          this.setState({ formattedNumber: s });
                      else {
                        var f =
                          (l = this.props.disableCountryGuess
                            ? r
                            : this.guessSelectedCountry(
                                c.substring(0, 6),
                                a,
                                n,
                                o
                              ) || r) && C()(c, u + l.dialCode)
                            ? l.dialCode
                            : "";
                        (s = this.formatNumber(
                          (this.props.disableCountryCode ? "" : f) + c,
                          l || void 0
                        )),
                          this.setState({
                            selectedCountry: l,
                            formattedNumber: s,
                          });
                      }
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e,
                        t,
                        n,
                        o = this,
                        i = this.state,
                        a = i.onlyCountries,
                        u = i.selectedCountry,
                        l = i.showDropdown,
                        s = i.formattedNumber,
                        c = i.hiddenAreaCodes,
                        f = this.props,
                        h = f.disableDropdown,
                        d = f.renderStringAsFlag,
                        p = f.isValid,
                        g = f.defaultErrorMessage,
                        v = f.specialLabel;
                      if ("boolean" == typeof p) t = p;
                      else {
                        var y = p(s.replace(/\D/g, ""), u, a, c);
                        "boolean" == typeof y
                          ? !1 === (t = y) && (n = g)
                          : ((t = !1), (n = y));
                      }
                      var b = P()(
                          (r((e = {}), this.props.containerClass, !0),
                          r(e, "react-tel-input", !0),
                          e)
                        ),
                        _ = P()({ arrow: !0, up: l }),
                        w = P()(
                          r(
                            {
                              "form-control": !0,
                              "invalid-number": !t,
                              open: l,
                            },
                            this.props.inputClass,
                            !0
                          )
                        ),
                        E = P()({ "selected-flag": !0, open: l }),
                        S = P()(
                          r(
                            {
                              "flag-dropdown": !0,
                              "invalid-number": !t,
                              open: l,
                            },
                            this.props.buttonClass,
                            !0
                          )
                        ),
                        C = "flag ".concat(u && u.iso2);
                      return m.a.createElement(
                        "div",
                        {
                          className: ""
                            .concat(b, " ")
                            .concat(this.props.className),
                          style: this.props.style || this.props.containerStyle,
                          onKeyDown: this.handleKeydown,
                        },
                        v &&
                          m.a.createElement(
                            "div",
                            { className: "special-label" },
                            v
                          ),
                        n &&
                          m.a.createElement(
                            "div",
                            { className: "invalid-number-message" },
                            n
                          ),
                        m.a.createElement(
                          "input",
                          Object.assign(
                            {
                              className: w,
                              style: this.props.inputStyle,
                              onChange: this.handleInput,
                              onClick: this.handleInputClick,
                              onDoubleClick: this.handleDoubleClick,
                              onFocus: this.handleInputFocus,
                              onBlur: this.handleInputBlur,
                              onCopy: this.handleInputCopy,
                              value: s,
                              onKeyDown: this.handleInputKeyDown,
                              placeholder: this.props.placeholder,
                              disabled: this.props.disabled,
                              type: "tel",
                            },
                            this.props.inputProps,
                            {
                              ref: function (e) {
                                (o.numberInputRef = e),
                                  "function" == typeof o.props.inputProps.ref
                                    ? o.props.inputProps.ref(e)
                                    : "object" ==
                                        typeof o.props.inputProps.ref &&
                                      (o.props.inputProps.ref.current = e);
                              },
                            }
                          )
                        ),
                        m.a.createElement(
                          "div",
                          {
                            className: S,
                            style: this.props.buttonStyle,
                            ref: function (e) {
                              return (o.dropdownContainerRef = e);
                            },
                          },
                          d
                            ? m.a.createElement("div", { className: E }, d)
                            : m.a.createElement(
                                "div",
                                {
                                  onClick: h
                                    ? void 0
                                    : this.handleFlagDropdownClick,
                                  className: E,
                                  title: u
                                    ? ""
                                        .concat(u.localName || u.name, ": + ")
                                        .concat(u.dialCode)
                                    : "",
                                  tabIndex: h ? "-1" : "0",
                                  role: "button",
                                  "aria-haspopup": "listbox",
                                  "aria-expanded": !!l || void 0,
                                },
                                m.a.createElement(
                                  "div",
                                  { className: C },
                                  !h &&
                                    m.a.createElement("div", { className: _ })
                                )
                              ),
                          l && this.getCountryDropdownList()
                        )
                      );
                    },
                  },
                ]),
                s(c.prototype, t),
                n && s(c, n),
                c
              );
            })(m.a.Component);
          (O.defaultProps = {
            country: "",
            value: "",
            onlyCountries: [],
            preferredCountries: [],
            excludeCountries: [],
            placeholder: "1 (702) 123-4567",
            searchPlaceholder: "search",
            searchNotFound: "No entries to show",
            flagsImagePath: "./flags.png",
            disabled: !1,
            containerStyle: {},
            inputStyle: {},
            buttonStyle: {},
            dropdownStyle: {},
            searchStyle: {},
            containerClass: "",
            inputClass: "",
            buttonClass: "",
            dropdownClass: "",
            searchClass: "",
            className: "",
            autoFormat: !0,
            enableAreaCodes: !1,
            enableTerritories: !1,
            disableCountryCode: !1,
            disableDropdown: !1,
            enableLongNumbers: !1,
            countryCodeEditable: !0,
            enableSearch: !1,
            disableSearchIcon: !1,
            disableInitialCountryGuess: !1,
            disableCountryGuess: !1,
            regions: "",
            inputProps: {},
            localization: {},
            masks: null,
            priority: null,
            areaCodes: null,
            preserveOrder: [],
            defaultMask: "... ... ... ... ..",
            alwaysDefaultMask: !1,
            prefix: "+",
            copyNumbersOnly: !0,
            renderStringAsFlag: "",
            autocompleteSearch: !1,
            jumpCursorToEnd: !0,
            enableAreaCodeStretch: !1,
            enableClickOutside: !0,
            showDropdown: !1,
            isValid: !0,
            defaultErrorMessage: "",
            specialLabel: "Phone",
            onEnterKeyPress: null,
            keys: {
              UP: 38,
              DOWN: 40,
              RIGHT: 39,
              LEFT: 37,
              ENTER: 13,
              ESC: 27,
              PLUS: 43,
              A: 65,
              Z: 90,
              SPACE: 32,
              TAB: 9,
            },
          }),
            (t.default = O);
        },
      ]);
    },
    29778: function (e, t, n) {
      !(function (e, t, n, r, o, i, a) {
        "use strict";
        function u(e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        }
        var l = u(t),
          s = u(n),
          c = (function (e) {
            if (e && e.__esModule) return e;
            var t = Object.create(null);
            return (
              e &&
                Object.keys(e).forEach(function (n) {
                  if ("default" !== n) {
                    var r = Object.getOwnPropertyDescriptor(e, n);
                    Object.defineProperty(
                      t,
                      n,
                      r.get
                        ? r
                        : {
                            enumerable: !0,
                            get: function () {
                              return e[n];
                            },
                          }
                    );
                  }
                }),
              (t.default = e),
              Object.freeze(t)
            );
          })(r);
        function f(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function h(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? f(Object(n), !0).forEach(function (t) {
                  var r;
                  (r = n[t]),
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = r);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function d(e) {
          return (d =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function p() {
          return (p = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }).apply(this, arguments);
        }
        function g(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++)
                (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (o[n] = e[n]));
          }
          return o;
        }
        function m(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  o,
                  i = [],
                  a = !0,
                  u = !1;
                try {
                  for (
                    n = n.call(e);
                    !(a = (r = n.next()).done) &&
                    (i.push(r.value), !t || i.length !== t);
                    a = !0
                  );
                } catch (e) {
                  (u = !0), (o = e);
                } finally {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (u) throw o;
                  }
                }
                return i;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return v(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n)
                )
                  return Array.from(e);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return v(e, t);
              }
            })(e, t) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function v(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var y = ["width", "height", "projection", "projectionConfig"],
          b = c.geoPath,
          _ = g(c, ["geoPath"]),
          w = t.createContext(),
          E = function (e) {
            var n = e.width,
              r = e.height,
              o = e.projection,
              i = e.projectionConfig,
              a = g(e, y),
              u = m(i.center || [], 2),
              s = u[0],
              c = u[1],
              f = m(i.rotate || [], 3),
              h = f[0],
              d = f[1],
              v = f[2],
              E = m(i.parallels || [], 2),
              S = E[0],
              C = E[1],
              M = i.scale || null,
              P = t.useMemo(
                function () {
                  return (function (e) {
                    var t = e.projectionConfig,
                      n = void 0 === t ? {} : t,
                      r = e.projection,
                      o = void 0 === r ? "geoEqualEarth" : r,
                      i = e.width,
                      a = e.height;
                    if ("function" == typeof o) return o;
                    var u = _[o]().translate([
                      (void 0 === i ? 800 : i) / 2,
                      (void 0 === a ? 600 : a) / 2,
                    ]);
                    return (
                      [
                        u.center ? "center" : null,
                        u.rotate ? "rotate" : null,
                        u.scale ? "scale" : null,
                        u.parallels ? "parallels" : null,
                      ].forEach(function (e) {
                        e && (u = u[e](n[e] || u[e]()));
                      }),
                      u
                    );
                  })({
                    projectionConfig: {
                      center: s || 0 === s || c || 0 === c ? [s, c] : null,
                      rotate: h || 0 === h || d || 0 === d ? [h, d, v] : null,
                      parallels: S || 0 === S || C || 0 === C ? [S, C] : null,
                      scale: M,
                    },
                    projection: o,
                    width: n,
                    height: r,
                  });
                },
                [n, r, o, s, c, h, d, v, S, C, M]
              ),
              R = t.useCallback(P, [P]),
              A = t.useMemo(
                function () {
                  return {
                    width: n,
                    height: r,
                    projection: R,
                    path: b().projection(R),
                  };
                },
                [n, r, R]
              );
            return l.default.createElement(w.Provider, p({ value: A }, a));
          };
        E.propTypes = {
          width: s.default.number,
          height: s.default.number,
          projection: s.default.oneOfType([s.default.string, s.default.func]),
          projectionConfig: s.default.object,
        };
        var S = [
            "width",
            "height",
            "projection",
            "projectionConfig",
            "className",
          ],
          C = t.forwardRef(function (e, t) {
            var n = e.width,
              r = void 0 === n ? 800 : n,
              o = e.height,
              i = void 0 === o ? 600 : o,
              a = e.projection,
              u = e.projectionConfig,
              s = e.className,
              c = g(e, S);
            return l.default.createElement(
              E,
              {
                width: r,
                height: i,
                projection: void 0 === a ? "geoEqualEarth" : a,
                projectionConfig: void 0 === u ? {} : u,
              },
              l.default.createElement(
                "svg",
                p(
                  {
                    ref: t,
                    viewBox: "0 0 ".concat(r, " ").concat(i),
                    className: "rsm-svg ".concat(void 0 === s ? "" : s),
                  },
                  c
                )
              )
            );
          });
        function M(e, t, n) {
          var r = (e * n.k - e) / 2,
            o = (t * n.k - t) / 2;
          return [e / 2 - (r + n.x) / n.k, t / 2 - (o + n.y) / n.k];
        }
        function P(e, t) {
          if ("Topology" !== e.type)
            return t ? t(e.features || e) : e.features || e;
          var n = o.feature(e, e.objects[Object.keys(e.objects)[0]]).features;
          return t ? t(n) : n;
        }
        function R(e) {
          return "Topology" === e.type
            ? {
                outline: o.mesh(
                  e,
                  e.objects[Object.keys(e.objects)[0]],
                  function (e, t) {
                    return e === t;
                  }
                ),
                borders: o.mesh(
                  e,
                  e.objects[Object.keys(e.objects)[0]],
                  function (e, t) {
                    return e !== t;
                  }
                ),
              }
            : null;
        }
        function A(e) {
          var n = e.geography,
            r = e.parseGeographies,
            o = t.useContext(w).path,
            i = m(t.useState({}), 2),
            a = i[0],
            u = i[1];
          t.useEffect(
            function () {
              "undefined" !==
                ("undefined" == typeof window ? "undefined" : d(window)) &&
                n &&
                ("string" == typeof n
                  ? fetch(n)
                      .then(function (e) {
                        if (!e.ok) throw Error(e.statusText);
                        return e.json();
                      })
                      .catch(function (e) {
                        console.log(
                          "There was a problem when fetching the data: ",
                          e
                        );
                      })
                      .then(function (e) {
                        e && u({ geographies: P(e, r), mesh: R(e) });
                      })
                  : u({ geographies: P(n, r), mesh: R(n) }));
            },
            [n, r]
          );
          var l = t.useMemo(
            function () {
              var e,
                t,
                n,
                r = a.mesh || {},
                i =
                  ((e = r.outline),
                  (t = r.borders),
                  e && t
                    ? {
                        outline: h(
                          h({}, e),
                          {},
                          { rsmKey: "outline", svgPath: o(e) }
                        ),
                        borders: h(
                          h({}, t),
                          {},
                          { rsmKey: "borders", svgPath: o(t) }
                        ),
                      }
                    : {});
              return {
                geographies: (n = a.geographies)
                  ? n.map(function (e, t) {
                      return h(
                        h({}, e),
                        {},
                        { rsmKey: "geo-".concat(t), svgPath: o(e) }
                      );
                    })
                  : [],
                outline: i.outline,
                borders: i.borders,
              };
            },
            [a, o]
          );
          return {
            geographies: l.geographies,
            outline: l.outline,
            borders: l.borders,
          };
        }
        (C.displayName = "ComposableMap"),
          (C.propTypes = {
            width: s.default.number,
            height: s.default.number,
            projection: s.default.oneOfType([s.default.string, s.default.func]),
            projectionConfig: s.default.object,
            className: s.default.string,
          });
        var x = ["geography", "children", "parseGeographies", "className"],
          I = t.forwardRef(function (e, n) {
            var r = e.geography,
              o = e.children,
              i = e.parseGeographies,
              a = e.className,
              u = g(e, x),
              s = t.useContext(w),
              c = s.path,
              f = s.projection,
              h = A({ geography: r, parseGeographies: i }),
              d = h.geographies,
              m = h.outline,
              v = h.borders;
            return l.default.createElement(
              "g",
              p(
                {
                  ref: n,
                  className: "rsm-geographies ".concat(void 0 === a ? "" : a),
                },
                u
              ),
              d &&
                d.length > 0 &&
                o({
                  geographies: d,
                  outline: m,
                  borders: v,
                  path: c,
                  projection: f,
                })
            );
          });
        (I.displayName = "Geographies"),
          (I.propTypes = {
            geography: s.default.oneOfType([
              s.default.string,
              s.default.object,
              s.default.array,
            ]),
            children: s.default.func,
            parseGeographies: s.default.func,
            className: s.default.string,
          });
        var N = [
            "geography",
            "onMouseEnter",
            "onMouseLeave",
            "onMouseDown",
            "onMouseUp",
            "onFocus",
            "onBlur",
            "style",
            "className",
          ],
          T = t.forwardRef(function (e, n) {
            var r = e.geography,
              o = e.onMouseEnter,
              i = e.onMouseLeave,
              a = e.onMouseDown,
              u = e.onMouseUp,
              s = e.onFocus,
              c = e.onBlur,
              f = e.style,
              h = e.className,
              d = g(e, N),
              v = m(t.useState(!1), 2),
              y = v[0],
              b = v[1],
              _ = m(t.useState(!1), 2),
              w = _[0],
              E = _[1];
            return l.default.createElement(
              "path",
              p(
                {
                  ref: n,
                  tabIndex: "0",
                  className: "rsm-geography ".concat(void 0 === h ? "" : h),
                  d: r.svgPath,
                  onMouseEnter: function (e) {
                    E(!0), o && o(e);
                  },
                  onMouseLeave: function (e) {
                    E(!1), y && b(!1), i && i(e);
                  },
                  onFocus: function (e) {
                    E(!0), s && s(e);
                  },
                  onBlur: function (e) {
                    E(!1), y && b(!1), c && c(e);
                  },
                  onMouseDown: function (e) {
                    b(!0), a && a(e);
                  },
                  onMouseUp: function (e) {
                    b(!1), u && u(e);
                  },
                  style: (void 0 === f ? {} : f)[
                    y || w ? (y ? "pressed" : "hover") : "default"
                  ],
                },
                d
              )
            );
          });
        (T.displayName = "Geography"),
          (T.propTypes = {
            geography: s.default.object,
            onMouseEnter: s.default.func,
            onMouseLeave: s.default.func,
            onMouseDown: s.default.func,
            onMouseUp: s.default.func,
            onFocus: s.default.func,
            onBlur: s.default.func,
            style: s.default.object,
            className: s.default.string,
          });
        var k = t.memo(T),
          O = ["fill", "stroke", "step", "className"],
          F = t.forwardRef(function (e, n) {
            var o = e.fill,
              i = e.stroke,
              a = e.step,
              u = e.className,
              s = g(e, O),
              c = t.useContext(w).path;
            return l.default.createElement(
              "path",
              p(
                {
                  ref: n,
                  d: c(r.geoGraticule().step(void 0 === a ? [10, 10] : a)()),
                  fill: void 0 === o ? "transparent" : o,
                  stroke: void 0 === i ? "currentcolor" : i,
                  className: "rsm-graticule ".concat(void 0 === u ? "" : u),
                },
                s
              )
            );
          });
        (F.displayName = "Graticule"),
          (F.propTypes = {
            fill: s.default.string,
            stroke: s.default.string,
            step: s.default.array,
            className: s.default.string,
          });
        var L = t.memo(F),
          H = ["value"],
          j = t.createContext(),
          B = { x: 0, y: 0, k: 1, transformString: "translate(0 0) scale(1)" },
          D = function (e) {
            var t = e.value,
              n = void 0 === t ? B : t,
              r = g(e, H);
            return l.default.createElement(j.Provider, p({ value: n }, r));
          };
        function G(e) {
          var n = e.center,
            r = e.filterZoomEvent,
            o = e.onMoveStart,
            u = e.onMoveEnd,
            l = e.onMove,
            s = e.translateExtent,
            c = e.scaleExtent,
            f = e.zoom,
            h = void 0 === f ? 1 : f,
            d = t.useContext(w),
            p = d.width,
            g = d.height,
            v = d.projection,
            y = m(n, 2),
            b = y[0],
            _ = y[1],
            E = m(t.useState({ x: 0, y: 0, k: 1 }), 2),
            S = E[0],
            C = E[1],
            P = t.useRef({ x: 0, y: 0, k: 1 }),
            R = t.useRef(),
            A = t.useRef(),
            x = t.useRef(!1),
            I = m(
              void 0 === s
                ? [
                    [-1 / 0, -1 / 0],
                    [1 / 0, 1 / 0],
                  ]
                : s,
              2
            ),
            N = I[0],
            T = I[1],
            k = m(N, 2),
            O = k[0],
            F = k[1],
            L = m(T, 2),
            H = L[0],
            j = L[1],
            B = m(void 0 === c ? [1, 8] : c, 2),
            D = B[0],
            G = B[1];
          return (
            t.useEffect(
              function () {
                var e = a.select(R.current),
                  t = i
                    .zoom()
                    .filter(function (e) {
                      return r ? r(e) : !!e && !e.ctrlKey && !e.button;
                    })
                    .scaleExtent([D, G])
                    .translateExtent([
                      [O, F],
                      [H, j],
                    ])
                    .on("start", function (e) {
                      o &&
                        !x.current &&
                        o(
                          {
                            coordinates: v.invert(M(p, g, e.transform)),
                            zoom: e.transform.k,
                          },
                          e
                        );
                    })
                    .on("zoom", function (e) {
                      if (!x.current) {
                        var t = e.transform,
                          n = e.sourceEvent;
                        C({ x: t.x, y: t.y, k: t.k, dragging: n }),
                          l && l({ x: t.x, y: t.y, zoom: t.k, dragging: n }, e);
                      }
                    })
                    .on("end", function (e) {
                      if (x.current) x.current = !1;
                      else {
                        var t = m(v.invert(M(p, g, e.transform)), 2),
                          n = t[0],
                          r = t[1];
                        (P.current = { x: n, y: r, k: e.transform.k }),
                          u &&
                            u({ coordinates: [n, r], zoom: e.transform.k }, e);
                      }
                    });
                (A.current = t), e.call(t);
              },
              [p, g, O, F, H, j, D, G, v, o, l, u, r]
            ),
            t.useEffect(
              function () {
                if (
                  b !== P.current.x ||
                  _ !== P.current.y ||
                  h !== P.current.k
                ) {
                  var e = v([b, _]),
                    t = e[0] * h,
                    n = e[1] * h,
                    r = a.select(R.current);
                  (x.current = !0),
                    r.call(
                      A.current.transform,
                      i.zoomIdentity.translate(p / 2 - t, g / 2 - n).scale(h)
                    ),
                    C({ x: p / 2 - t, y: g / 2 - n, k: h }),
                    (P.current = { x: b, y: _, k: h });
                }
              },
              [b, _, h, p, g, v]
            ),
            {
              mapRef: R,
              position: S,
              transformString: "translate("
                .concat(S.x, " ")
                .concat(S.y, ") scale(")
                .concat(S.k, ")"),
            }
          );
        }
        D.propTypes = {
          x: s.default.number,
          y: s.default.number,
          k: s.default.number,
          transformString: s.default.string,
        };
        var V = [
            "center",
            "zoom",
            "minZoom",
            "maxZoom",
            "translateExtent",
            "filterZoomEvent",
            "onMoveStart",
            "onMove",
            "onMoveEnd",
            "className",
          ],
          z = t.forwardRef(function (e, n) {
            var r = e.center,
              o = e.zoom,
              i = e.minZoom,
              a = e.maxZoom,
              u = e.translateExtent,
              s = e.filterZoomEvent,
              c = e.onMoveStart,
              f = e.onMove,
              h = e.onMoveEnd,
              d = e.className,
              m = g(e, V),
              v = t.useContext(w),
              y = v.width,
              b = v.height,
              _ = G({
                center: void 0 === r ? [0, 0] : r,
                filterZoomEvent: s,
                onMoveStart: c,
                onMove: f,
                onMoveEnd: h,
                scaleExtent: [void 0 === i ? 1 : i, void 0 === a ? 8 : a],
                translateExtent: u,
                zoom: void 0 === o ? 1 : o,
              }),
              E = _.mapRef,
              S = _.transformString,
              C = _.position;
            return l.default.createElement(
              D,
              { value: { x: C.x, y: C.y, k: C.k, transformString: S } },
              l.default.createElement(
                "g",
                { ref: E },
                l.default.createElement("rect", {
                  width: y,
                  height: b,
                  fill: "transparent",
                }),
                l.default.createElement(
                  "g",
                  p(
                    {
                      ref: n,
                      transform: S,
                      className: "rsm-zoomable-group ".concat(d),
                    },
                    m
                  )
                )
              )
            );
          });
        (z.displayName = "ZoomableGroup"),
          (z.propTypes = {
            center: s.default.array,
            zoom: s.default.number,
            minZoom: s.default.number,
            maxZoom: s.default.number,
            translateExtent: s.default.arrayOf(s.default.array),
            onMoveStart: s.default.func,
            onMove: s.default.func,
            onMoveEnd: s.default.func,
            className: s.default.string,
          });
        var U = ["id", "fill", "stroke", "strokeWidth", "className"],
          Z = t.forwardRef(function (e, n) {
            var r = e.id,
              o = e.fill,
              i = e.stroke,
              a = e.strokeWidth,
              u = e.className,
              s = g(e, U),
              c = t.useContext(w).path,
              f = t.useMemo(
                function () {
                  return c({ type: "Sphere" });
                },
                [c]
              );
            return l.default.createElement(
              t.Fragment,
              null,
              l.default.createElement(
                "defs",
                null,
                l.default.createElement(
                  "clipPath",
                  { id: void 0 === r ? "rsm-sphere" : r },
                  l.default.createElement("path", { d: f })
                )
              ),
              l.default.createElement(
                "path",
                p(
                  {
                    ref: n,
                    d: f,
                    fill: void 0 === o ? "transparent" : o,
                    stroke: void 0 === i ? "currentcolor" : i,
                    strokeWidth: void 0 === a ? 0.5 : a,
                    style: { pointerEvents: "none" },
                    className: "rsm-sphere ".concat(void 0 === u ? "" : u),
                  },
                  s
                )
              )
            );
          });
        (Z.displayName = "Sphere"),
          (Z.propTypes = {
            id: s.default.string,
            fill: s.default.string,
            stroke: s.default.string,
            strokeWidth: s.default.number,
            className: s.default.string,
          });
        var q = t.memo(Z),
          X = [
            "coordinates",
            "children",
            "onMouseEnter",
            "onMouseLeave",
            "onMouseDown",
            "onMouseUp",
            "onFocus",
            "onBlur",
            "style",
            "className",
          ],
          K = t.forwardRef(function (e, n) {
            var r = e.coordinates,
              o = e.children,
              i = e.onMouseEnter,
              a = e.onMouseLeave,
              u = e.onMouseDown,
              s = e.onMouseUp,
              c = e.onFocus,
              f = e.onBlur,
              h = e.style,
              d = e.className,
              v = g(e, X),
              y = t.useContext(w).projection,
              b = m(t.useState(!1), 2),
              _ = b[0],
              E = b[1],
              S = m(t.useState(!1), 2),
              C = S[0],
              M = S[1],
              P = m(y(r), 2),
              R = P[0],
              A = P[1];
            return l.default.createElement(
              "g",
              p(
                {
                  ref: n,
                  transform: "translate(".concat(R, ", ").concat(A, ")"),
                  className: "rsm-marker ".concat(void 0 === d ? "" : d),
                  onMouseEnter: function (e) {
                    M(!0), i && i(e);
                  },
                  onMouseLeave: function (e) {
                    M(!1), _ && E(!1), a && a(e);
                  },
                  onFocus: function (e) {
                    M(!0), c && c(e);
                  },
                  onBlur: function (e) {
                    M(!1), _ && E(!1), f && f(e);
                  },
                  onMouseDown: function (e) {
                    E(!0), u && u(e);
                  },
                  onMouseUp: function (e) {
                    E(!1), s && s(e);
                  },
                  style: (void 0 === h ? {} : h)[
                    _ || C ? (_ ? "pressed" : "hover") : "default"
                  ],
                },
                v
              ),
              o
            );
          });
        (K.displayName = "Marker"),
          (K.propTypes = {
            coordinates: s.default.array,
            children: s.default.oneOfType([
              s.default.node,
              s.default.arrayOf(s.default.node),
            ]),
            onMouseEnter: s.default.func,
            onMouseLeave: s.default.func,
            onMouseDown: s.default.func,
            onMouseUp: s.default.func,
            onFocus: s.default.func,
            onBlur: s.default.func,
            style: s.default.object,
            className: s.default.string,
          });
        var Y = [
            "from",
            "to",
            "coordinates",
            "stroke",
            "strokeWidth",
            "fill",
            "className",
          ],
          $ = t.forwardRef(function (e, n) {
            var r = e.from,
              o = e.to,
              i = e.coordinates,
              a = e.stroke,
              u = e.strokeWidth,
              s = e.fill,
              c = e.className,
              f = g(e, Y),
              h = t.useContext(w).path;
            return l.default.createElement(
              "path",
              p(
                {
                  ref: n,
                  d: h({
                    type: "LineString",
                    coordinates: i || [
                      void 0 === r ? [0, 0] : r,
                      void 0 === o ? [0, 0] : o,
                    ],
                  }),
                  className: "rsm-line ".concat(void 0 === c ? "" : c),
                  stroke: void 0 === a ? "currentcolor" : a,
                  strokeWidth: void 0 === u ? 3 : u,
                  fill: void 0 === s ? "transparent" : s,
                },
                f
              )
            );
          });
        ($.displayName = "Line"),
          ($.propTypes = {
            from: s.default.array,
            to: s.default.array,
            coordinates: s.default.array,
            stroke: s.default.string,
            strokeWidth: s.default.number,
            fill: s.default.string,
            className: s.default.string,
          });
        var W = [
            "subject",
            "children",
            "connectorProps",
            "dx",
            "dy",
            "curve",
            "className",
          ],
          J = t.forwardRef(function (e, n) {
            var r = e.subject,
              o = e.children,
              i = e.connectorProps,
              a = e.dx,
              u = void 0 === a ? 30 : a,
              s = e.dy,
              c = void 0 === s ? 30 : s,
              f = e.curve,
              h = e.className,
              d = g(e, W),
              v = m((0, t.useContext(w).projection)(r), 2),
              y = v[0],
              b = v[1],
              _ = (function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 30,
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 30,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0.5,
                  r = Array.isArray(n) ? n : [n, n],
                  o = (e / 2) * r[0],
                  i = (t / 2) * r[1];
                return "M"
                  .concat(0, ",", 0, " Q", -e / 2 - o, ",")
                  .concat(-t / 2 + i, " ")
                  .concat(-e, ",")
                  .concat(-t);
              })(u, c, void 0 === f ? 0 : f);
            return l.default.createElement(
              "g",
              p(
                {
                  ref: n,
                  transform: "translate("
                    .concat(y + u, ", ")
                    .concat(b + c, ")"),
                  className: "rsm-annotation ".concat(void 0 === h ? "" : h),
                },
                d
              ),
              l.default.createElement(
                "path",
                p({ d: _, fill: "transparent", stroke: "#000" }, i)
              ),
              o
            );
          });
        (J.displayName = "Annotation"),
          (J.propTypes = {
            subject: s.default.array,
            children: s.default.oneOfType([
              s.default.node,
              s.default.arrayOf(s.default.node),
            ]),
            dx: s.default.number,
            dy: s.default.number,
            curve: s.default.number,
            connectorProps: s.default.object,
            className: s.default.string,
          }),
          (e.Annotation = J),
          (e.ComposableMap = C),
          (e.Geographies = I),
          (e.Geography = k),
          (e.Graticule = L),
          (e.Line = $),
          (e.MapContext = w),
          (e.MapProvider = E),
          (e.Marker = K),
          (e.Sphere = q),
          (e.ZoomPanContext = j),
          (e.ZoomPanProvider = D),
          (e.ZoomableGroup = z),
          (e.useGeographies = A),
          (e.useMapContext = function () {
            return t.useContext(w);
          }),
          (e.useZoomPan = G),
          (e.useZoomPanContext = function () {
            return t.useContext(j);
          }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t, n(2265), n(74275), n(27369), n(7398), n(50477), n(15907));
    },
    27369: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          geoAlbers: function () {
            return nz;
          },
          geoAlbersUsa: function () {
            return nU;
          },
          geoArea: function () {
            return U;
          },
          geoAzimuthalEqualArea: function () {
            return nK;
          },
          geoAzimuthalEqualAreaRaw: function () {
            return nX;
          },
          geoAzimuthalEquidistant: function () {
            return n$;
          },
          geoAzimuthalEquidistantRaw: function () {
            return nY;
          },
          geoBounds: function () {
            return es;
          },
          geoCentroid: function () {
            return ew;
          },
          geoCircle: function () {
            return eT;
          },
          geoClipAntimeridian: function () {
            return eU;
          },
          geoClipCircle: function () {
            return eZ;
          },
          geoClipExtent: function () {
            return eX;
          },
          geoClipRectangle: function () {
            return eq;
          },
          geoConicConformal: function () {
            return n2;
          },
          geoConicConformalRaw: function () {
            return n1;
          },
          geoConicEqualArea: function () {
            return nV;
          },
          geoConicEqualAreaRaw: function () {
            return nG;
          },
          geoConicEquidistant: function () {
            return n9;
          },
          geoConicEquidistantRaw: function () {
            return n5;
          },
          geoContains: function () {
            return e7;
          },
          geoDistance: function () {
            return e1;
          },
          geoEqualEarth: function () {
            return n7;
          },
          geoEqualEarthRaw: function () {
            return n4;
          },
          geoEquirectangular: function () {
            return n3;
          },
          geoEquirectangularRaw: function () {
            return n6;
          },
          geoGnomonic: function () {
            return rt;
          },
          geoGnomonicRaw: function () {
            return re;
          },
          geoGraticule: function () {
            return tr;
          },
          geoGraticule10: function () {
            return to;
          },
          geoIdentity: function () {
            return rn;
          },
          geoInterpolate: function () {
            return ti;
          },
          geoLength: function () {
            return eJ;
          },
          geoMercator: function () {
            return nJ;
          },
          geoMercatorRaw: function () {
            return nW;
          },
          geoNaturalEarth1: function () {
            return ro;
          },
          geoNaturalEarth1Raw: function () {
            return rr;
          },
          geoOrthographic: function () {
            return ra;
          },
          geoOrthographicRaw: function () {
            return ri;
          },
          geoPath: function () {
            return nM;
          },
          geoProjection: function () {
            return nj;
          },
          geoProjectionMutator: function () {
            return nB;
          },
          geoRotation: function () {
            return ex;
          },
          geoStereographic: function () {
            return rl;
          },
          geoStereographicRaw: function () {
            return ru;
          },
          geoStream: function () {
            return N;
          },
          geoTransform: function () {
            return nP;
          },
          geoTransverseMercator: function () {
            return rc;
          },
          geoTransverseMercatorRaw: function () {
            return rs;
          },
        });
      class r {
        constructor() {
          (this._partials = new Float64Array(32)), (this._n = 0);
        }
        add(e) {
          let t = this._partials,
            n = 0;
          for (let r = 0; r < this._n && r < 32; r++) {
            let o = t[r],
              i = e + o,
              a = Math.abs(e) < Math.abs(o) ? e - (i - o) : o - (i - e);
            a && (t[n++] = a), (e = i);
          }
          return (t[n] = e), (this._n = n + 1), this;
        }
        valueOf() {
          let e = this._partials,
            t = this._n,
            n,
            r,
            o,
            i = 0;
          if (t > 0) {
            for (
              i = e[--t];
              t > 0 && ((i = (n = i) + (r = e[--t])), !(o = r - (i - n)));

            );
            t > 0 &&
              ((o < 0 && e[t - 1] < 0) || (o > 0 && e[t - 1] > 0)) &&
              ((n = i + (r = 2 * o)), r == n - i && (i = n));
          }
          return i;
        }
      }
      var o = Math.PI,
        i = o / 2,
        a = o / 4,
        u = 2 * o,
        l = 180 / o,
        s = o / 180,
        c = Math.abs,
        f = Math.atan,
        h = Math.atan2,
        d = Math.cos,
        p = Math.ceil,
        g = Math.exp,
        m = Math.hypot,
        v = Math.log,
        y = Math.pow,
        b = Math.sin,
        _ =
          Math.sign ||
          function (e) {
            return e > 0 ? 1 : e < 0 ? -1 : 0;
          },
        w = Math.sqrt,
        E = Math.tan;
      function S(e) {
        return e > 1 ? 0 : e < -1 ? o : Math.acos(e);
      }
      function C(e) {
        return e > 1 ? i : e < -1 ? -i : Math.asin(e);
      }
      function M() {}
      function P(e, t) {
        e && A.hasOwnProperty(e.type) && A[e.type](e, t);
      }
      var R = {
          Feature: function (e, t) {
            P(e.geometry, t);
          },
          FeatureCollection: function (e, t) {
            for (var n = e.features, r = -1, o = n.length; ++r < o; )
              P(n[r].geometry, t);
          },
        },
        A = {
          Sphere: function (e, t) {
            t.sphere();
          },
          Point: function (e, t) {
            (e = e.coordinates), t.point(e[0], e[1], e[2]);
          },
          MultiPoint: function (e, t) {
            for (var n = e.coordinates, r = -1, o = n.length; ++r < o; )
              (e = n[r]), t.point(e[0], e[1], e[2]);
          },
          LineString: function (e, t) {
            x(e.coordinates, t, 0);
          },
          MultiLineString: function (e, t) {
            for (var n = e.coordinates, r = -1, o = n.length; ++r < o; )
              x(n[r], t, 0);
          },
          Polygon: function (e, t) {
            I(e.coordinates, t);
          },
          MultiPolygon: function (e, t) {
            for (var n = e.coordinates, r = -1, o = n.length; ++r < o; )
              I(n[r], t);
          },
          GeometryCollection: function (e, t) {
            for (var n = e.geometries, r = -1, o = n.length; ++r < o; )
              P(n[r], t);
          },
        };
      function x(e, t, n) {
        var r,
          o = -1,
          i = e.length - n;
        for (t.lineStart(); ++o < i; ) (r = e[o]), t.point(r[0], r[1], r[2]);
        t.lineEnd();
      }
      function I(e, t) {
        var n = -1,
          r = e.length;
        for (t.polygonStart(); ++n < r; ) x(e[n], t, 1);
        t.polygonEnd();
      }
      function N(e, t) {
        e && R.hasOwnProperty(e.type) ? R[e.type](e, t) : P(e, t);
      }
      var T,
        k,
        O,
        F,
        L,
        H = new r(),
        j = new r(),
        B = {
          point: M,
          lineStart: M,
          lineEnd: M,
          polygonStart: function () {
            (H = new r()), (B.lineStart = D), (B.lineEnd = G);
          },
          polygonEnd: function () {
            var e = +H;
            j.add(e < 0 ? u + e : e),
              (this.lineStart = this.lineEnd = this.point = M);
          },
          sphere: function () {
            j.add(u);
          },
        };
      function D() {
        B.point = V;
      }
      function G() {
        z(T, k);
      }
      function V(e, t) {
        (B.point = z),
          (T = e),
          (k = t),
          (e *= s),
          (t *= s),
          (O = e),
          (F = d((t = t / 2 + a))),
          (L = b(t));
      }
      function z(e, t) {
        (e *= s), (t *= s);
        var n = e - O,
          r = n >= 0 ? 1 : -1,
          o = r * n,
          i = d((t = t / 2 + a)),
          u = b(t),
          l = L * u,
          c = F * i + l * d(o),
          f = l * r * b(o);
        H.add(h(f, c)), (O = e), (F = i), (L = u);
      }
      function U(e) {
        return (j = new r()), N(e, B), 2 * j;
      }
      function Z(e) {
        return [h(e[1], e[0]), C(e[2])];
      }
      function q(e) {
        var t = e[0],
          n = e[1],
          r = d(n);
        return [r * d(t), r * b(t), b(n)];
      }
      function X(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
      }
      function K(e, t) {
        return [
          e[1] * t[2] - e[2] * t[1],
          e[2] * t[0] - e[0] * t[2],
          e[0] * t[1] - e[1] * t[0],
        ];
      }
      function Y(e, t) {
        (e[0] += t[0]), (e[1] += t[1]), (e[2] += t[2]);
      }
      function $(e, t) {
        return [e[0] * t, e[1] * t, e[2] * t];
      }
      function W(e) {
        var t = w(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
        (e[0] /= t), (e[1] /= t), (e[2] /= t);
      }
      var J = {
        point: Q,
        lineStart: et,
        lineEnd: en,
        polygonStart: function () {
          (J.point = er),
            (J.lineStart = eo),
            (J.lineEnd = ei),
            (tp = new r()),
            B.polygonStart();
        },
        polygonEnd: function () {
          B.polygonEnd(),
            (J.point = Q),
            (J.lineStart = et),
            (J.lineEnd = en),
            H < 0
              ? ((ta = -(tl = 180)), (tu = -(ts = 90)))
              : tp > 1e-6
              ? (ts = 90)
              : tp < -0.000001 && (tu = -90),
            (tm[0] = ta),
            (tm[1] = tl);
        },
        sphere: function () {
          (ta = -(tl = 180)), (tu = -(ts = 90));
        },
      };
      function Q(e, t) {
        tg.push((tm = [(ta = e), (tl = e)])),
          t < tu && (tu = t),
          t > ts && (ts = t);
      }
      function ee(e, t) {
        var n = q([e * s, t * s]);
        if (td) {
          var r = K(td, n),
            o = K([r[1], -r[0], 0], r);
          W(o), (o = Z(o));
          var i,
            a = e - tc,
            u = a > 0 ? 1 : -1,
            f = o[0] * l * u,
            h = c(a) > 180;
          h ^ (u * tc < f && f < u * e)
            ? (i = o[1] * l) > ts && (ts = i)
            : h ^ (u * tc < (f = ((f + 360) % 360) - 180) && f < u * e)
            ? (i = -o[1] * l) < tu && (tu = i)
            : (t < tu && (tu = t), t > ts && (ts = t)),
            h
              ? e < tc
                ? ea(ta, e) > ea(ta, tl) && (tl = e)
                : ea(e, tl) > ea(ta, tl) && (ta = e)
              : tl >= ta
              ? (e < ta && (ta = e), e > tl && (tl = e))
              : e > tc
              ? ea(ta, e) > ea(ta, tl) && (tl = e)
              : ea(e, tl) > ea(ta, tl) && (ta = e);
        } else tg.push((tm = [(ta = e), (tl = e)]));
        t < tu && (tu = t), t > ts && (ts = t), (td = n), (tc = e);
      }
      function et() {
        J.point = ee;
      }
      function en() {
        (tm[0] = ta), (tm[1] = tl), (J.point = Q), (td = null);
      }
      function er(e, t) {
        if (td) {
          var n = e - tc;
          tp.add(c(n) > 180 ? n + (n > 0 ? 360 : -360) : n);
        } else (tf = e), (th = t);
        B.point(e, t), ee(e, t);
      }
      function eo() {
        B.lineStart();
      }
      function ei() {
        er(tf, th),
          B.lineEnd(),
          c(tp) > 1e-6 && (ta = -(tl = 180)),
          (tm[0] = ta),
          (tm[1] = tl),
          (td = null);
      }
      function ea(e, t) {
        return (t -= e) < 0 ? t + 360 : t;
      }
      function eu(e, t) {
        return e[0] - t[0];
      }
      function el(e, t) {
        return e[0] <= e[1] ? e[0] <= t && t <= e[1] : t < e[0] || e[1] < t;
      }
      function es(e) {
        var t, n, r, o, i, a, u;
        if (
          ((ts = tl = -(ta = tu = 1 / 0)), (tg = []), N(e, J), (n = tg.length))
        ) {
          for (tg.sort(eu), t = 1, i = [(r = tg[0])]; t < n; ++t)
            el(r, (o = tg[t])[0]) || el(r, o[1])
              ? (ea(r[0], o[1]) > ea(r[0], r[1]) && (r[1] = o[1]),
                ea(o[0], r[1]) > ea(r[0], r[1]) && (r[0] = o[0]))
              : i.push((r = o));
          for (
            a = -1 / 0, n = i.length - 1, t = 0, r = i[n];
            t <= n;
            r = o, ++t
          )
            (o = i[t]),
              (u = ea(r[1], o[0])) > a && ((a = u), (ta = o[0]), (tl = r[1]));
        }
        return (
          (tg = tm = null),
          ta === 1 / 0 || tu === 1 / 0
            ? [
                [NaN, NaN],
                [NaN, NaN],
              ]
            : [
                [ta, tu],
                [tl, ts],
              ]
        );
      }
      var ec = {
        sphere: M,
        point: ef,
        lineStart: ed,
        lineEnd: em,
        polygonStart: function () {
          (ec.lineStart = ev), (ec.lineEnd = ey);
        },
        polygonEnd: function () {
          (ec.lineStart = ed), (ec.lineEnd = em);
        },
      };
      function ef(e, t) {
        e *= s;
        var n = d((t *= s));
        eh(n * d(e), n * b(e), b(t));
      }
      function eh(e, t, n) {
        ++tv,
          (tb += (e - tb) / tv),
          (t_ += (t - t_) / tv),
          (tw += (n - tw) / tv);
      }
      function ed() {
        ec.point = ep;
      }
      function ep(e, t) {
        e *= s;
        var n = d((t *= s));
        (tI = n * d(e)),
          (tN = n * b(e)),
          (tT = b(t)),
          (ec.point = eg),
          eh(tI, tN, tT);
      }
      function eg(e, t) {
        e *= s;
        var n = d((t *= s)),
          r = n * d(e),
          o = n * b(e),
          i = b(t),
          a = h(
            w(
              (a = tN * i - tT * o) * a +
                (a = tT * r - tI * i) * a +
                (a = tI * o - tN * r) * a
            ),
            tI * r + tN * o + tT * i
          );
        (ty += a),
          (tE += a * (tI + (tI = r))),
          (tS += a * (tN + (tN = o))),
          (tC += a * (tT + (tT = i))),
          eh(tI, tN, tT);
      }
      function em() {
        ec.point = ef;
      }
      function ev() {
        ec.point = eb;
      }
      function ey() {
        e_(tA, tx), (ec.point = ef);
      }
      function eb(e, t) {
        (tA = e), (tx = t), (e *= s), (t *= s), (ec.point = e_);
        var n = d(t);
        (tI = n * d(e)), (tN = n * b(e)), (tT = b(t)), eh(tI, tN, tT);
      }
      function e_(e, t) {
        e *= s;
        var n = d((t *= s)),
          r = n * d(e),
          o = n * b(e),
          i = b(t),
          a = tN * i - tT * o,
          u = tT * r - tI * i,
          l = tI * o - tN * r,
          c = m(a, u, l),
          f = C(c),
          h = c && -f / c;
        tM.add(h * a),
          tP.add(h * u),
          tR.add(h * l),
          (ty += f),
          (tE += f * (tI + (tI = r))),
          (tS += f * (tN + (tN = o))),
          (tC += f * (tT + (tT = i))),
          eh(tI, tN, tT);
      }
      function ew(e) {
        (tv = ty = tb = t_ = tw = tE = tS = tC = 0),
          (tM = new r()),
          (tP = new r()),
          (tR = new r()),
          N(e, ec);
        var t = +tM,
          n = +tP,
          o = +tR,
          i = m(t, n, o);
        return i < 1e-12 &&
          ((t = tE),
          (n = tS),
          (o = tC),
          ty < 1e-6 && ((t = tb), (n = t_), (o = tw)),
          (i = m(t, n, o)) < 1e-12)
          ? [NaN, NaN]
          : [h(n, t) * l, C(o / i) * l];
      }
      function eE(e) {
        return function () {
          return e;
        };
      }
      function eS(e, t) {
        function n(n, r) {
          return t((n = e(n, r))[0], n[1]);
        }
        return (
          e.invert &&
            t.invert &&
            (n.invert = function (n, r) {
              return (n = t.invert(n, r)) && e.invert(n[0], n[1]);
            }),
          n
        );
      }
      function eC(e, t) {
        return [c(e) > o ? e + Math.round(-e / u) * u : e, t];
      }
      function eM(e, t, n) {
        return (e %= u)
          ? t || n
            ? eS(eR(e), eA(t, n))
            : eR(e)
          : t || n
          ? eA(t, n)
          : eC;
      }
      function eP(e) {
        return function (t, n) {
          return [(t += e) > o ? t - u : t < -o ? t + u : t, n];
        };
      }
      function eR(e) {
        var t = eP(e);
        return (t.invert = eP(-e)), t;
      }
      function eA(e, t) {
        var n = d(e),
          r = b(e),
          o = d(t),
          i = b(t);
        function a(e, t) {
          var a = d(t),
            u = d(e) * a,
            l = b(e) * a,
            s = b(t),
            c = s * n + u * r;
          return [h(l * o - c * i, u * n - s * r), C(c * o + l * i)];
        }
        return (
          (a.invert = function (e, t) {
            var a = d(t),
              u = d(e) * a,
              l = b(e) * a,
              s = b(t),
              c = s * o - l * i;
            return [h(l * o + s * i, u * n + c * r), C(c * n - u * r)];
          }),
          a
        );
      }
      function ex(e) {
        function t(t) {
          return (t = e(t[0] * s, t[1] * s)), (t[0] *= l), (t[1] *= l), t;
        }
        return (
          (e = eM(e[0] * s, e[1] * s, e.length > 2 ? e[2] * s : 0)),
          (t.invert = function (t) {
            return (
              (t = e.invert(t[0] * s, t[1] * s)), (t[0] *= l), (t[1] *= l), t
            );
          }),
          t
        );
      }
      function eI(e, t, n, r, o, i) {
        if (n) {
          var a = d(t),
            l = b(t),
            s = r * n;
          null == o
            ? ((o = t + r * u), (i = t - s / 2))
            : ((o = eN(a, o)),
              (i = eN(a, i)),
              (r > 0 ? o < i : o > i) && (o += r * u));
          for (var c, f = o; r > 0 ? f > i : f < i; f -= s)
            (c = Z([a, -l * d(f), -l * b(f)])), e.point(c[0], c[1]);
        }
      }
      function eN(e, t) {
        (t = q(t)), (t[0] -= e), W(t);
        var n = S(-t[1]);
        return ((0 > -t[2] ? -n : n) + u - 1e-6) % u;
      }
      function eT() {
        var e,
          t,
          n = eE([0, 0]),
          r = eE(90),
          o = eE(6),
          i = {
            point: function (n, r) {
              e.push((n = t(n, r))), (n[0] *= l), (n[1] *= l);
            },
          };
        function a() {
          var a = n.apply(this, arguments),
            u = r.apply(this, arguments) * s,
            l = o.apply(this, arguments) * s;
          return (
            (e = []),
            (t = eM(-a[0] * s, -a[1] * s, 0).invert),
            eI(i, u, l, 1),
            (a = { type: "Polygon", coordinates: [e] }),
            (e = t = null),
            a
          );
        }
        return (
          (a.center = function (e) {
            return arguments.length
              ? ((n = "function" == typeof e ? e : eE([+e[0], +e[1]])), a)
              : n;
          }),
          (a.radius = function (e) {
            return arguments.length
              ? ((r = "function" == typeof e ? e : eE(+e)), a)
              : r;
          }),
          (a.precision = function (e) {
            return arguments.length
              ? ((o = "function" == typeof e ? e : eE(+e)), a)
              : o;
          }),
          a
        );
      }
      function ek() {
        var e,
          t = [];
        return {
          point: function (t, n, r) {
            e.push([t, n, r]);
          },
          lineStart: function () {
            t.push((e = []));
          },
          lineEnd: M,
          rejoin: function () {
            t.length > 1 && t.push(t.pop().concat(t.shift()));
          },
          result: function () {
            var n = t;
            return (t = []), (e = null), n;
          },
        };
      }
      function eO(e, t) {
        return 1e-6 > c(e[0] - t[0]) && 1e-6 > c(e[1] - t[1]);
      }
      function eF(e, t, n, r) {
        (this.x = e),
          (this.z = t),
          (this.o = n),
          (this.e = r),
          (this.v = !1),
          (this.n = this.p = null);
      }
      function eL(e, t, n, r, o) {
        var i,
          a,
          u = [],
          l = [];
        if (
          (e.forEach(function (e) {
            if (!((t = e.length - 1) <= 0)) {
              var t,
                n,
                r = e[0],
                a = e[t];
              if (eO(r, a)) {
                if (!r[2] && !a[2]) {
                  for (o.lineStart(), i = 0; i < t; ++i)
                    o.point((r = e[i])[0], r[1]);
                  o.lineEnd();
                  return;
                }
                a[0] += 2e-6;
              }
              u.push((n = new eF(r, e, null, !0))),
                l.push((n.o = new eF(r, null, n, !1))),
                u.push((n = new eF(a, e, null, !1))),
                l.push((n.o = new eF(a, null, n, !0)));
            }
          }),
          u.length)
        ) {
          for (l.sort(t), eH(u), eH(l), i = 0, a = l.length; i < a; ++i)
            l[i].e = n = !n;
          for (var s, c, f = u[0]; ; ) {
            for (var h = f, d = !0; h.v; ) if ((h = h.n) === f) return;
            (s = h.z), o.lineStart();
            do {
              if (((h.v = h.o.v = !0), h.e)) {
                if (d)
                  for (i = 0, a = s.length; i < a; ++i)
                    o.point((c = s[i])[0], c[1]);
                else r(h.x, h.n.x, 1, o);
                h = h.n;
              } else {
                if (d)
                  for (i = (s = h.p.z).length - 1; i >= 0; --i)
                    o.point((c = s[i])[0], c[1]);
                else r(h.x, h.p.x, -1, o);
                h = h.p;
              }
              (s = (h = h.o).z), (d = !d);
            } while (!h.v);
            o.lineEnd();
          }
        }
      }
      function eH(e) {
        if ((t = e.length)) {
          for (var t, n, r = 0, o = e[0]; ++r < t; )
            (o.n = n = e[r]), (n.p = o), (o = n);
          (o.n = n = e[0]), (n.p = o);
        }
      }
      function ej(e) {
        return c(e[0]) <= o ? e[0] : _(e[0]) * (((c(e[0]) + o) % u) - o);
      }
      function eB(e, t) {
        var n = ej(t),
          l = t[1],
          s = b(l),
          c = [b(n), -d(n), 0],
          f = 0,
          p = 0,
          g = new r();
        1 === s ? (l = i + 1e-6) : -1 === s && (l = -i - 1e-6);
        for (var m = 0, v = e.length; m < v; ++m)
          if ((_ = (y = e[m]).length))
            for (
              var y,
                _,
                w = y[_ - 1],
                E = ej(w),
                S = w[1] / 2 + a,
                M = b(S),
                P = d(S),
                R = 0;
              R < _;
              ++R, E = x, M = N, P = T, w = A
            ) {
              var A = y[R],
                x = ej(A),
                I = A[1] / 2 + a,
                N = b(I),
                T = d(I),
                k = x - E,
                O = k >= 0 ? 1 : -1,
                F = O * k,
                L = F > o,
                H = M * N;
              if (
                (g.add(h(H * O * b(F), P * T + H * d(F))),
                (f += L ? k + O * u : k),
                L ^ (E >= n) ^ (x >= n))
              ) {
                var j = K(q(w), q(A));
                W(j);
                var B = K(c, j);
                W(B);
                var D = (L ^ (k >= 0) ? -1 : 1) * C(B[2]);
                (l > D || (l === D && (j[0] || j[1]))) &&
                  (p += L ^ (k >= 0) ? 1 : -1);
              }
            }
        return (f < -0.000001 || (f < 1e-6 && g < -0.000000000001)) ^ (1 & p);
      }
      function eD(e) {
        return Array.from(
          (function* (e) {
            for (let t of e) yield* t;
          })(e)
        );
      }
      function eG(e, t, n, r) {
        return function (o) {
          var i,
            a,
            u,
            l = t(o),
            s = ek(),
            c = t(s),
            f = !1,
            h = {
              point: d,
              lineStart: g,
              lineEnd: m,
              polygonStart: function () {
                (h.point = v),
                  (h.lineStart = y),
                  (h.lineEnd = b),
                  (a = []),
                  (i = []);
              },
              polygonEnd: function () {
                (h.point = d), (h.lineStart = g), (h.lineEnd = m), (a = eD(a));
                var e = eB(i, r);
                a.length
                  ? (f || (o.polygonStart(), (f = !0)), eL(a, ez, e, n, o))
                  : e &&
                    (f || (o.polygonStart(), (f = !0)),
                    o.lineStart(),
                    n(null, null, 1, o),
                    o.lineEnd()),
                  f && (o.polygonEnd(), (f = !1)),
                  (a = i = null);
              },
              sphere: function () {
                o.polygonStart(),
                  o.lineStart(),
                  n(null, null, 1, o),
                  o.lineEnd(),
                  o.polygonEnd();
              },
            };
          function d(t, n) {
            e(t, n) && o.point(t, n);
          }
          function p(e, t) {
            l.point(e, t);
          }
          function g() {
            (h.point = p), l.lineStart();
          }
          function m() {
            (h.point = d), l.lineEnd();
          }
          function v(e, t) {
            u.push([e, t]), c.point(e, t);
          }
          function y() {
            c.lineStart(), (u = []);
          }
          function b() {
            v(u[0][0], u[0][1]), c.lineEnd();
            var e,
              t,
              n,
              r,
              l = c.clean(),
              h = s.result(),
              d = h.length;
            if ((u.pop(), i.push(u), (u = null), d)) {
              if (1 & l) {
                if ((t = (n = h[0]).length - 1) > 0) {
                  for (
                    f || (o.polygonStart(), (f = !0)), o.lineStart(), e = 0;
                    e < t;
                    ++e
                  )
                    o.point((r = n[e])[0], r[1]);
                  o.lineEnd();
                }
                return;
              }
              d > 1 && 2 & l && h.push(h.pop().concat(h.shift())),
                a.push(h.filter(eV));
            }
          }
          return h;
        };
      }
      function eV(e) {
        return e.length > 1;
      }
      function ez(e, t) {
        return (
          ((e = e.x)[0] < 0 ? e[1] - i - 1e-6 : i - e[1]) -
          ((t = t.x)[0] < 0 ? t[1] - i - 1e-6 : i - t[1])
        );
      }
      eC.invert = eC;
      var eU = eG(
        function () {
          return !0;
        },
        function (e) {
          var t,
            n = NaN,
            r = NaN,
            a = NaN;
          return {
            lineStart: function () {
              e.lineStart(), (t = 1);
            },
            point: function (u, l) {
              var s,
                h,
                p,
                g,
                m,
                v,
                y = u > 0 ? o : -o,
                _ = c(u - n);
              1e-6 > c(_ - o)
                ? (e.point(n, (r = (r + l) / 2 > 0 ? i : -i)),
                  e.point(a, r),
                  e.lineEnd(),
                  e.lineStart(),
                  e.point(y, r),
                  e.point(u, r),
                  (t = 0))
                : a !== y &&
                  _ >= o &&
                  (1e-6 > c(n - a) && (n -= 1e-6 * a),
                  1e-6 > c(u - y) && (u -= 1e-6 * y),
                  (s = n),
                  (h = r),
                  (r =
                    c((v = b(s - (p = u)))) > 1e-6
                      ? f(
                          (b(h) * (m = d(l)) * b(p) -
                            b(l) * (g = d(h)) * b(s)) /
                            (g * m * v)
                        )
                      : (h + l) / 2),
                  e.point(a, r),
                  e.lineEnd(),
                  e.lineStart(),
                  e.point(y, r),
                  (t = 0)),
                e.point((n = u), (r = l)),
                (a = y);
            },
            lineEnd: function () {
              e.lineEnd(), (n = r = NaN);
            },
            clean: function () {
              return 2 - t;
            },
          };
        },
        function (e, t, n, r) {
          var a;
          if (null == e)
            (a = n * i),
              r.point(-o, a),
              r.point(0, a),
              r.point(o, a),
              r.point(o, 0),
              r.point(o, -a),
              r.point(0, -a),
              r.point(-o, -a),
              r.point(-o, 0),
              r.point(-o, a);
          else if (c(e[0] - t[0]) > 1e-6) {
            var u = e[0] < t[0] ? o : -o;
            (a = (n * u) / 2), r.point(-u, a), r.point(0, a), r.point(u, a);
          } else r.point(t[0], t[1]);
        },
        [-o, -i]
      );
      function eZ(e) {
        var t = d(e),
          n = 6 * s,
          r = t > 0,
          i = c(t) > 1e-6;
        function a(e, n) {
          return d(e) * d(n) > t;
        }
        function u(e, n, r) {
          var i = q(e),
            a = q(n),
            u = [1, 0, 0],
            l = K(i, a),
            s = X(l, l),
            f = l[0],
            h = s - f * f;
          if (!h) return !r && e;
          var d = K(u, l),
            p = $(u, (t * s) / h);
          Y(p, $(l, (-t * f) / h));
          var g = X(p, d),
            m = X(d, d),
            v = g * g - m * (X(p, p) - 1);
          if (!(v < 0)) {
            var y = w(v),
              b = $(d, (-g - y) / m);
            if ((Y(b, p), (b = Z(b)), !r)) return b;
            var _,
              E = e[0],
              S = n[0],
              C = e[1],
              M = n[1];
            S < E && ((_ = E), (E = S), (S = _));
            var P = S - E,
              R = 1e-6 > c(P - o);
            if (
              (!R && M < C && ((_ = C), (C = M), (M = _)),
              R || P < 1e-6
                ? R
                  ? (C + M > 0) ^ (b[1] < (1e-6 > c(b[0] - E) ? C : M))
                  : C <= b[1] && b[1] <= M
                : (P > o) ^ (E <= b[0] && b[0] <= S))
            ) {
              var A = $(d, (-g + y) / m);
              return Y(A, p), [b, Z(A)];
            }
          }
        }
        function l(t, n) {
          var i = r ? e : o - e,
            a = 0;
          return (
            t < -i ? (a |= 1) : t > i && (a |= 2),
            n < -i ? (a |= 4) : n > i && (a |= 8),
            a
          );
        }
        return eG(
          a,
          function (e) {
            var t, n, s, c, f;
            return {
              lineStart: function () {
                (c = s = !1), (f = 1);
              },
              point: function (h, d) {
                var p,
                  g,
                  m = [h, d],
                  v = a(h, d),
                  y = r
                    ? v
                      ? 0
                      : l(h, d)
                    : v
                    ? l(h + (h < 0 ? o : -o), d)
                    : 0;
                !t && (c = s = v) && e.lineStart(),
                  v !== s &&
                    (!(g = u(t, m)) || eO(t, g) || eO(m, g)) &&
                    (m[2] = 1),
                  v !== s
                    ? ((f = 0),
                      v
                        ? (e.lineStart(), (g = u(m, t)), e.point(g[0], g[1]))
                        : ((g = u(t, m)), e.point(g[0], g[1], 2), e.lineEnd()),
                      (t = g))
                    : i &&
                      t &&
                      r ^ v &&
                      !(y & n) &&
                      (p = u(m, t, !0)) &&
                      ((f = 0),
                      r
                        ? (e.lineStart(),
                          e.point(p[0][0], p[0][1]),
                          e.point(p[1][0], p[1][1]),
                          e.lineEnd())
                        : (e.point(p[1][0], p[1][1]),
                          e.lineEnd(),
                          e.lineStart(),
                          e.point(p[0][0], p[0][1], 3))),
                  !v || (t && eO(t, m)) || e.point(m[0], m[1]),
                  (t = m),
                  (s = v),
                  (n = y);
              },
              lineEnd: function () {
                s && e.lineEnd(), (t = null);
              },
              clean: function () {
                return f | ((c && s) << 1);
              },
            };
          },
          function (t, r, o, i) {
            eI(i, e, n, o, t, r);
          },
          r ? [0, -e] : [-o, e - o]
        );
      }
      function eq(e, t, n, r) {
        function o(o, i) {
          return e <= o && o <= n && t <= i && i <= r;
        }
        function i(o, i, u, s) {
          var c = 0,
            f = 0;
          if (
            null == o ||
            (c = a(o, u)) !== (f = a(i, u)) ||
            (0 > l(o, i)) ^ (u > 0)
          )
            do s.point(0 === c || 3 === c ? e : n, c > 1 ? r : t);
            while ((c = (c + u + 4) % 4) !== f);
          else s.point(i[0], i[1]);
        }
        function a(r, o) {
          return 1e-6 > c(r[0] - e)
            ? o > 0
              ? 0
              : 3
            : 1e-6 > c(r[0] - n)
            ? o > 0
              ? 2
              : 1
            : 1e-6 > c(r[1] - t)
            ? o > 0
              ? 1
              : 0
            : o > 0
            ? 3
            : 2;
        }
        function u(e, t) {
          return l(e.x, t.x);
        }
        function l(e, t) {
          var n = a(e, 1),
            r = a(t, 1);
          return n !== r
            ? n - r
            : 0 === n
            ? t[1] - e[1]
            : 1 === n
            ? e[0] - t[0]
            : 2 === n
            ? e[1] - t[1]
            : t[0] - e[0];
        }
        return function (a) {
          var l,
            s,
            c,
            f,
            h,
            d,
            p,
            g,
            m,
            v,
            y,
            b = a,
            _ = ek(),
            w = {
              point: E,
              lineStart: function () {
                (w.point = S),
                  s && s.push((c = [])),
                  (v = !0),
                  (m = !1),
                  (p = g = NaN);
              },
              lineEnd: function () {
                l && (S(f, h), d && m && _.rejoin(), l.push(_.result())),
                  (w.point = E),
                  m && b.lineEnd();
              },
              polygonStart: function () {
                (b = _), (l = []), (s = []), (y = !0);
              },
              polygonEnd: function () {
                var t = (function () {
                    for (var t = 0, n = 0, o = s.length; n < o; ++n)
                      for (
                        var i,
                          a,
                          u = s[n],
                          l = 1,
                          c = u.length,
                          f = u[0],
                          h = f[0],
                          d = f[1];
                        l < c;
                        ++l
                      )
                        (i = h),
                          (a = d),
                          (h = (f = u[l])[0]),
                          (d = f[1]),
                          a <= r
                            ? d > r &&
                              (h - i) * (r - a) > (d - a) * (e - i) &&
                              ++t
                            : d <= r &&
                              (h - i) * (r - a) < (d - a) * (e - i) &&
                              --t;
                    return t;
                  })(),
                  n = y && t,
                  o = (l = eD(l)).length;
                (n || o) &&
                  (a.polygonStart(),
                  n && (a.lineStart(), i(null, null, 1, a), a.lineEnd()),
                  o && eL(l, u, t, i, a),
                  a.polygonEnd()),
                  (b = a),
                  (l = s = c = null);
              },
            };
          function E(e, t) {
            o(e, t) && b.point(e, t);
          }
          function S(i, a) {
            var u = o(i, a);
            if ((s && c.push([i, a]), v))
              (f = i),
                (h = a),
                (d = u),
                (v = !1),
                u && (b.lineStart(), b.point(i, a));
            else if (u && m) b.point(i, a);
            else {
              var l = [
                  (p = Math.max(-1e9, Math.min(1e9, p))),
                  (g = Math.max(-1e9, Math.min(1e9, g))),
                ],
                _ = [
                  (i = Math.max(-1e9, Math.min(1e9, i))),
                  (a = Math.max(-1e9, Math.min(1e9, a))),
                ];
              !(function (e, t, n, r, o, i) {
                var a,
                  u = e[0],
                  l = e[1],
                  s = t[0],
                  c = t[1],
                  f = 0,
                  h = 1,
                  d = s - u,
                  p = c - l;
                if (((a = n - u), d || !(a > 0))) {
                  if (((a /= d), d < 0)) {
                    if (a < f) return;
                    a < h && (h = a);
                  } else if (d > 0) {
                    if (a > h) return;
                    a > f && (f = a);
                  }
                  if (((a = o - u), d || !(a < 0))) {
                    if (((a /= d), d < 0)) {
                      if (a > h) return;
                      a > f && (f = a);
                    } else if (d > 0) {
                      if (a < f) return;
                      a < h && (h = a);
                    }
                    if (((a = r - l), p || !(a > 0))) {
                      if (((a /= p), p < 0)) {
                        if (a < f) return;
                        a < h && (h = a);
                      } else if (p > 0) {
                        if (a > h) return;
                        a > f && (f = a);
                      }
                      if (((a = i - l), p || !(a < 0))) {
                        if (((a /= p), p < 0)) {
                          if (a > h) return;
                          a > f && (f = a);
                        } else if (p > 0) {
                          if (a < f) return;
                          a < h && (h = a);
                        }
                        return (
                          f > 0 && ((e[0] = u + f * d), (e[1] = l + f * p)),
                          h < 1 && ((t[0] = u + h * d), (t[1] = l + h * p)),
                          !0
                        );
                      }
                    }
                  }
                }
              })(l, _, e, t, n, r)
                ? u && (b.lineStart(), b.point(i, a), (y = !1))
                : (m || (b.lineStart(), b.point(l[0], l[1])),
                  b.point(_[0], _[1]),
                  u || b.lineEnd(),
                  (y = !1));
            }
            (p = i), (g = a), (m = u);
          }
          return w;
        };
      }
      function eX() {
        var e,
          t,
          n,
          r = 0,
          o = 0,
          i = 960,
          a = 500;
        return (n = {
          stream: function (n) {
            return e && t === n ? e : (e = eq(r, o, i, a)((t = n)));
          },
          extent: function (u) {
            return arguments.length
              ? ((r = +u[0][0]),
                (o = +u[0][1]),
                (i = +u[1][0]),
                (a = +u[1][1]),
                (e = t = null),
                n)
              : [
                  [r, o],
                  [i, a],
                ];
          },
        });
      }
      var eK = {
        sphere: M,
        point: M,
        lineStart: function () {
          (eK.point = e$), (eK.lineEnd = eY);
        },
        lineEnd: M,
        polygonStart: M,
        polygonEnd: M,
      };
      function eY() {
        eK.point = eK.lineEnd = M;
      }
      function e$(e, t) {
        (e *= s), (t *= s), (tO = e), (tF = b(t)), (tL = d(t)), (eK.point = eW);
      }
      function eW(e, t) {
        e *= s;
        var n = b((t *= s)),
          r = d(t),
          o = c(e - tO),
          i = d(o),
          a = r * b(o),
          u = tL * n - tF * r * i,
          l = tF * n + tL * r * i;
        tk.add(h(w(a * a + u * u), l)), (tO = e), (tF = n), (tL = r);
      }
      function eJ(e) {
        return (tk = new r()), N(e, eK), +tk;
      }
      var eQ = [null, null],
        e0 = { type: "LineString", coordinates: eQ };
      function e1(e, t) {
        return (eQ[0] = e), (eQ[1] = t), eJ(e0);
      }
      var e2 = {
          Feature: function (e, t) {
            return e3(e.geometry, t);
          },
          FeatureCollection: function (e, t) {
            for (var n = e.features, r = -1, o = n.length; ++r < o; )
              if (e3(n[r].geometry, t)) return !0;
            return !1;
          },
        },
        e6 = {
          Sphere: function () {
            return !0;
          },
          Point: function (e, t) {
            return 0 === e1(e.coordinates, t);
          },
          MultiPoint: function (e, t) {
            for (var n = e.coordinates, r = -1, o = n.length; ++r < o; )
              if (0 === e1(n[r], t)) return !0;
            return !1;
          },
          LineString: function (e, t) {
            return e5(e.coordinates, t);
          },
          MultiLineString: function (e, t) {
            for (var n = e.coordinates, r = -1, o = n.length; ++r < o; )
              if (e5(n[r], t)) return !0;
            return !1;
          },
          Polygon: function (e, t) {
            return e9(e.coordinates, t);
          },
          MultiPolygon: function (e, t) {
            for (var n = e.coordinates, r = -1, o = n.length; ++r < o; )
              if (e9(n[r], t)) return !0;
            return !1;
          },
          GeometryCollection: function (e, t) {
            for (var n = e.geometries, r = -1, o = n.length; ++r < o; )
              if (e3(n[r], t)) return !0;
            return !1;
          },
        };
      function e3(e, t) {
        return !!(e && e6.hasOwnProperty(e.type)) && e6[e.type](e, t);
      }
      function e5(e, t) {
        for (var n, r, o, i = 0, a = e.length; i < a; i++) {
          if (
            0 === (r = e1(e[i], t)) ||
            (i > 0 &&
              (o = e1(e[i], e[i - 1])) > 0 &&
              n <= o &&
              r <= o &&
              (n + r - o) * (1 - Math.pow((n - r) / o, 2)) < 1e-12 * o)
          )
            return !0;
          n = r;
        }
        return !1;
      }
      function e9(e, t) {
        return !!eB(e.map(e8), e4(t));
      }
      function e8(e) {
        return (e = e.map(e4)).pop(), e;
      }
      function e4(e) {
        return [e[0] * s, e[1] * s];
      }
      function e7(e, t) {
        return (e && e2.hasOwnProperty(e.type) ? e2[e.type] : e3)(e, t);
      }
      function te(e, t, n) {
        (e = +e),
          (t = +t),
          (n =
            (o = arguments.length) < 2
              ? ((t = e), (e = 0), 1)
              : o < 3
              ? 1
              : +n);
        for (
          var r = -1, o = 0 | Math.max(0, Math.ceil((t - e) / n)), i = Array(o);
          ++r < o;

        )
          i[r] = e + r * n;
        return i;
      }
      function tt(e, t, n) {
        var r = te(e, t - 1e-6, n).concat(t);
        return function (e) {
          return r.map(function (t) {
            return [e, t];
          });
        };
      }
      function tn(e, t, n) {
        var r = te(e, t - 1e-6, n).concat(t);
        return function (e) {
          return r.map(function (t) {
            return [t, e];
          });
        };
      }
      function tr() {
        var e,
          t,
          n,
          r,
          o,
          i,
          a,
          u,
          l,
          s,
          f,
          h,
          d = 10,
          g = 10,
          m = 90,
          v = 360,
          y = 2.5;
        function b() {
          return { type: "MultiLineString", coordinates: _() };
        }
        function _() {
          return te(p(r / m) * m, n, m)
            .map(f)
            .concat(te(p(u / v) * v, a, v).map(h))
            .concat(
              te(p(t / d) * d, e, d)
                .filter(function (e) {
                  return c(e % m) > 1e-6;
                })
                .map(l)
            )
            .concat(
              te(p(i / g) * g, o, g)
                .filter(function (e) {
                  return c(e % v) > 1e-6;
                })
                .map(s)
            );
        }
        return (
          (b.lines = function () {
            return _().map(function (e) {
              return { type: "LineString", coordinates: e };
            });
          }),
          (b.outline = function () {
            return {
              type: "Polygon",
              coordinates: [
                f(r).concat(
                  h(a).slice(1),
                  f(n).reverse().slice(1),
                  h(u).reverse().slice(1)
                ),
              ],
            };
          }),
          (b.extent = function (e) {
            return arguments.length
              ? b.extentMajor(e).extentMinor(e)
              : b.extentMinor();
          }),
          (b.extentMajor = function (e) {
            return arguments.length
              ? ((r = +e[0][0]),
                (n = +e[1][0]),
                (u = +e[0][1]),
                (a = +e[1][1]),
                r > n && ((e = r), (r = n), (n = e)),
                u > a && ((e = u), (u = a), (a = e)),
                b.precision(y))
              : [
                  [r, u],
                  [n, a],
                ];
          }),
          (b.extentMinor = function (n) {
            return arguments.length
              ? ((t = +n[0][0]),
                (e = +n[1][0]),
                (i = +n[0][1]),
                (o = +n[1][1]),
                t > e && ((n = t), (t = e), (e = n)),
                i > o && ((n = i), (i = o), (o = n)),
                b.precision(y))
              : [
                  [t, i],
                  [e, o],
                ];
          }),
          (b.step = function (e) {
            return arguments.length
              ? b.stepMajor(e).stepMinor(e)
              : b.stepMinor();
          }),
          (b.stepMajor = function (e) {
            return arguments.length ? ((m = +e[0]), (v = +e[1]), b) : [m, v];
          }),
          (b.stepMinor = function (e) {
            return arguments.length ? ((d = +e[0]), (g = +e[1]), b) : [d, g];
          }),
          (b.precision = function (c) {
            return arguments.length
              ? ((y = +c),
                (l = tt(i, o, 90)),
                (s = tn(t, e, y)),
                (f = tt(u, a, 90)),
                (h = tn(r, n, y)),
                b)
              : y;
          }),
          b
            .extentMajor([
              [-180, -89.999999],
              [180, 89.999999],
            ])
            .extentMinor([
              [-180, -80.000001],
              [180, 80.000001],
            ])
        );
      }
      function to() {
        return tr()();
      }
      function ti(e, t) {
        var n,
          r,
          o = e[0] * s,
          i = e[1] * s,
          a = t[0] * s,
          u = t[1] * s,
          c = d(i),
          f = b(i),
          p = d(u),
          g = b(u),
          m = c * d(o),
          v = c * b(o),
          y = p * d(a),
          _ = p * b(a),
          E =
            2 *
            C(
              w(
                (n = b((n = u - i) / 2)) * n +
                  c * p * ((r = b((r = a - o) / 2)) * r)
              )
            ),
          S = b(E),
          M = E
            ? function (e) {
                var t = b((e *= E)) / S,
                  n = b(E - e) / S,
                  r = n * m + t * y,
                  o = n * v + t * _;
                return [h(o, r) * l, h(n * f + t * g, w(r * r + o * o)) * l];
              }
            : function () {
                return [o * l, i * l];
              };
        return (M.distance = E), M;
      }
      var ta,
        tu,
        tl,
        ts,
        tc,
        tf,
        th,
        td,
        tp,
        tg,
        tm,
        tv,
        ty,
        tb,
        t_,
        tw,
        tE,
        tS,
        tC,
        tM,
        tP,
        tR,
        tA,
        tx,
        tI,
        tN,
        tT,
        tk,
        tO,
        tF,
        tL,
        tH,
        tj,
        tB,
        tD,
        tG = (e) => e,
        tV = new r(),
        tz = new r(),
        tU = {
          point: M,
          lineStart: M,
          lineEnd: M,
          polygonStart: function () {
            (tU.lineStart = tZ), (tU.lineEnd = tK);
          },
          polygonEnd: function () {
            (tU.lineStart = tU.lineEnd = tU.point = M),
              tV.add(c(tz)),
              (tz = new r());
          },
          result: function () {
            var e = tV / 2;
            return (tV = new r()), e;
          },
        };
      function tZ() {
        tU.point = tq;
      }
      function tq(e, t) {
        (tU.point = tX), (tH = tB = e), (tj = tD = t);
      }
      function tX(e, t) {
        tz.add(tD * e - tB * t), (tB = e), (tD = t);
      }
      function tK() {
        tX(tH, tj);
      }
      var tY,
        t$,
        tW,
        tJ,
        tQ = 1 / 0,
        t0 = 1 / 0,
        t1 = -1 / 0,
        t2 = t1,
        t6 = {
          point: function (e, t) {
            e < tQ && (tQ = e),
              e > t1 && (t1 = e),
              t < t0 && (t0 = t),
              t > t2 && (t2 = t);
          },
          lineStart: M,
          lineEnd: M,
          polygonStart: M,
          polygonEnd: M,
          result: function () {
            var e = [
              [tQ, t0],
              [t1, t2],
            ];
            return (t1 = t2 = -(t0 = tQ = 1 / 0)), e;
          },
        },
        t3 = 0,
        t5 = 0,
        t9 = 0,
        t8 = 0,
        t4 = 0,
        t7 = 0,
        ne = 0,
        nt = 0,
        nn = 0,
        nr = {
          point: no,
          lineStart: ni,
          lineEnd: nl,
          polygonStart: function () {
            (nr.lineStart = ns), (nr.lineEnd = nc);
          },
          polygonEnd: function () {
            (nr.point = no), (nr.lineStart = ni), (nr.lineEnd = nl);
          },
          result: function () {
            var e = nn
              ? [ne / nn, nt / nn]
              : t7
              ? [t8 / t7, t4 / t7]
              : t9
              ? [t3 / t9, t5 / t9]
              : [NaN, NaN];
            return (t3 = t5 = t9 = t8 = t4 = t7 = ne = nt = nn = 0), e;
          },
        };
      function no(e, t) {
        (t3 += e), (t5 += t), ++t9;
      }
      function ni() {
        nr.point = na;
      }
      function na(e, t) {
        (nr.point = nu), no((tW = e), (tJ = t));
      }
      function nu(e, t) {
        var n = e - tW,
          r = t - tJ,
          o = w(n * n + r * r);
        (t8 += (o * (tW + e)) / 2),
          (t4 += (o * (tJ + t)) / 2),
          (t7 += o),
          no((tW = e), (tJ = t));
      }
      function nl() {
        nr.point = no;
      }
      function ns() {
        nr.point = nf;
      }
      function nc() {
        nh(tY, t$);
      }
      function nf(e, t) {
        (nr.point = nh), no((tY = tW = e), (t$ = tJ = t));
      }
      function nh(e, t) {
        var n = e - tW,
          r = t - tJ,
          o = w(n * n + r * r);
        (t8 += (o * (tW + e)) / 2),
          (t4 += (o * (tJ + t)) / 2),
          (t7 += o),
          (ne += (o = tJ * e - tW * t) * (tW + e)),
          (nt += o * (tJ + t)),
          (nn += 3 * o),
          no((tW = e), (tJ = t));
      }
      function nd(e) {
        this._context = e;
      }
      nd.prototype = {
        _radius: 4.5,
        pointRadius: function (e) {
          return (this._radius = e), this;
        },
        polygonStart: function () {
          this._line = 0;
        },
        polygonEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          0 === this._line && this._context.closePath(), (this._point = NaN);
        },
        point: function (e, t) {
          switch (this._point) {
            case 0:
              this._context.moveTo(e, t), (this._point = 1);
              break;
            case 1:
              this._context.lineTo(e, t);
              break;
            default:
              this._context.moveTo(e + this._radius, t),
                this._context.arc(e, t, this._radius, 0, u);
          }
        },
        result: M,
      };
      var np,
        ng,
        nm,
        nv,
        ny,
        nb = new r(),
        n_ = {
          point: M,
          lineStart: function () {
            n_.point = nw;
          },
          lineEnd: function () {
            np && nE(ng, nm), (n_.point = M);
          },
          polygonStart: function () {
            np = !0;
          },
          polygonEnd: function () {
            np = null;
          },
          result: function () {
            var e = +nb;
            return (nb = new r()), e;
          },
        };
      function nw(e, t) {
        (n_.point = nE), (ng = nv = e), (nm = ny = t);
      }
      function nE(e, t) {
        (nv -= e), (ny -= t), nb.add(w(nv * nv + ny * ny)), (nv = e), (ny = t);
      }
      function nS() {
        this._string = [];
      }
      function nC(e) {
        return (
          "m0," +
          e +
          "a" +
          e +
          "," +
          e +
          " 0 1,1 0," +
          -2 * e +
          "a" +
          e +
          "," +
          e +
          " 0 1,1 0," +
          2 * e +
          "z"
        );
      }
      function nM(e, t) {
        var n,
          r,
          o = 4.5;
        function i(e) {
          return (
            e &&
              ("function" == typeof o &&
                r.pointRadius(+o.apply(this, arguments)),
              N(e, n(r))),
            r.result()
          );
        }
        return (
          (i.area = function (e) {
            return N(e, n(tU)), tU.result();
          }),
          (i.measure = function (e) {
            return N(e, n(n_)), n_.result();
          }),
          (i.bounds = function (e) {
            return N(e, n(t6)), t6.result();
          }),
          (i.centroid = function (e) {
            return N(e, n(nr)), nr.result();
          }),
          (i.projection = function (t) {
            return arguments.length
              ? ((n = null == t ? ((e = null), tG) : (e = t).stream), i)
              : e;
          }),
          (i.context = function (e) {
            return arguments.length
              ? ((r = null == e ? ((t = null), new nS()) : new nd((t = e))),
                "function" != typeof o && r.pointRadius(o),
                i)
              : t;
          }),
          (i.pointRadius = function (e) {
            return arguments.length
              ? ((o = "function" == typeof e ? e : (r.pointRadius(+e), +e)), i)
              : o;
          }),
          i.projection(e).context(t)
        );
      }
      function nP(e) {
        return { stream: nR(e) };
      }
      function nR(e) {
        return function (t) {
          var n = new nA();
          for (var r in e) n[r] = e[r];
          return (n.stream = t), n;
        };
      }
      function nA() {}
      function nx(e, t, n) {
        var r = e.clipExtent && e.clipExtent();
        return (
          e.scale(150).translate([0, 0]),
          null != r && e.clipExtent(null),
          N(n, e.stream(t6)),
          t(t6.result()),
          null != r && e.clipExtent(r),
          e
        );
      }
      function nI(e, t, n) {
        return nx(
          e,
          function (n) {
            var r = t[1][0] - t[0][0],
              o = t[1][1] - t[0][1],
              i = Math.min(r / (n[1][0] - n[0][0]), o / (n[1][1] - n[0][1])),
              a = +t[0][0] + (r - i * (n[1][0] + n[0][0])) / 2,
              u = +t[0][1] + (o - i * (n[1][1] + n[0][1])) / 2;
            e.scale(150 * i).translate([a, u]);
          },
          n
        );
      }
      function nN(e, t, n) {
        return nI(e, [[0, 0], t], n);
      }
      function nT(e, t, n) {
        return nx(
          e,
          function (n) {
            var r = +t,
              o = r / (n[1][0] - n[0][0]),
              i = (r - o * (n[1][0] + n[0][0])) / 2,
              a = -o * n[0][1];
            e.scale(150 * o).translate([i, a]);
          },
          n
        );
      }
      function nk(e, t, n) {
        return nx(
          e,
          function (n) {
            var r = +t,
              o = r / (n[1][1] - n[0][1]),
              i = -o * n[0][0],
              a = (r - o * (n[1][1] + n[0][1])) / 2;
            e.scale(150 * o).translate([i, a]);
          },
          n
        );
      }
      (nS.prototype = {
        _radius: 4.5,
        _circle: nC(4.5),
        pointRadius: function (e) {
          return (
            (e = +e) !== this._radius &&
              ((this._radius = e), (this._circle = null)),
            this
          );
        },
        polygonStart: function () {
          this._line = 0;
        },
        polygonEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          0 === this._line && this._string.push("Z"), (this._point = NaN);
        },
        point: function (e, t) {
          switch (this._point) {
            case 0:
              this._string.push("M", e, ",", t), (this._point = 1);
              break;
            case 1:
              this._string.push("L", e, ",", t);
              break;
            default:
              null == this._circle && (this._circle = nC(this._radius)),
                this._string.push("M", e, ",", t, this._circle);
          }
        },
        result: function () {
          if (!this._string.length) return null;
          var e = this._string.join("");
          return (this._string = []), e;
        },
      }),
        (nA.prototype = {
          constructor: nA,
          point: function (e, t) {
            this.stream.point(e, t);
          },
          sphere: function () {
            this.stream.sphere();
          },
          lineStart: function () {
            this.stream.lineStart();
          },
          lineEnd: function () {
            this.stream.lineEnd();
          },
          polygonStart: function () {
            this.stream.polygonStart();
          },
          polygonEnd: function () {
            this.stream.polygonEnd();
          },
        });
      var nO = d(30 * s);
      function nF(e, t) {
        return +t
          ? (function (e, t) {
              function n(r, o, i, a, u, l, s, f, d, p, g, m, v, y) {
                var b = s - r,
                  _ = f - o,
                  E = b * b + _ * _;
                if (E > 4 * t && v--) {
                  var S = a + p,
                    M = u + g,
                    P = l + m,
                    R = w(S * S + M * M + P * P),
                    A = C((P /= R)),
                    x =
                      1e-6 > c(c(P) - 1) || 1e-6 > c(i - d)
                        ? (i + d) / 2
                        : h(M, S),
                    I = e(x, A),
                    N = I[0],
                    T = I[1],
                    k = N - r,
                    O = T - o,
                    F = _ * k - b * O;
                  ((F * F) / E > t ||
                    c((b * k + _ * O) / E - 0.5) > 0.3 ||
                    a * p + u * g + l * m < nO) &&
                    (n(r, o, i, a, u, l, N, T, x, (S /= R), (M /= R), P, v, y),
                    y.point(N, T),
                    n(N, T, x, S, M, P, s, f, d, p, g, m, v, y));
                }
              }
              return function (t) {
                var r,
                  o,
                  i,
                  a,
                  u,
                  l,
                  s,
                  c,
                  f,
                  h,
                  d,
                  p,
                  g = {
                    point: m,
                    lineStart: v,
                    lineEnd: b,
                    polygonStart: function () {
                      t.polygonStart(), (g.lineStart = _);
                    },
                    polygonEnd: function () {
                      t.polygonEnd(), (g.lineStart = v);
                    },
                  };
                function m(n, r) {
                  (n = e(n, r)), t.point(n[0], n[1]);
                }
                function v() {
                  (c = NaN), (g.point = y), t.lineStart();
                }
                function y(r, o) {
                  var i = q([r, o]),
                    a = e(r, o);
                  n(
                    c,
                    f,
                    s,
                    h,
                    d,
                    p,
                    (c = a[0]),
                    (f = a[1]),
                    (s = r),
                    (h = i[0]),
                    (d = i[1]),
                    (p = i[2]),
                    16,
                    t
                  ),
                    t.point(c, f);
                }
                function b() {
                  (g.point = m), t.lineEnd();
                }
                function _() {
                  v(), (g.point = w), (g.lineEnd = E);
                }
                function w(e, t) {
                  y((r = e), t),
                    (o = c),
                    (i = f),
                    (a = h),
                    (u = d),
                    (l = p),
                    (g.point = y);
                }
                function E() {
                  n(c, f, s, h, d, p, o, i, r, a, u, l, 16, t),
                    (g.lineEnd = b),
                    b();
                }
                return g;
              };
            })(e, t)
          : nR({
              point: function (t, n) {
                (t = e(t, n)), this.stream.point(t[0], t[1]);
              },
            });
      }
      var nL = nR({
        point: function (e, t) {
          this.stream.point(e * s, t * s);
        },
      });
      function nH(e, t, n, r, o, i) {
        if (!i)
          return (function (e, t, n, r, o) {
            function i(i, a) {
              return [t + e * (i *= r), n - e * (a *= o)];
            }
            return (
              (i.invert = function (i, a) {
                return [((i - t) / e) * r, ((n - a) / e) * o];
              }),
              i
            );
          })(e, t, n, r, o);
        var a = d(i),
          u = b(i),
          l = a * e,
          s = u * e,
          c = a / e,
          f = u / e,
          h = (u * n - a * t) / e,
          p = (u * t + a * n) / e;
        function g(e, i) {
          return [l * (e *= r) - s * (i *= o) + t, n - s * e - l * i];
        }
        return (
          (g.invert = function (e, t) {
            return [r * (c * e - f * t + h), o * (p - f * e - c * t)];
          }),
          g
        );
      }
      function nj(e) {
        return nB(function () {
          return e;
        })();
      }
      function nB(e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          u,
          c,
          f,
          h,
          d = 150,
          p = 480,
          g = 250,
          m = 0,
          v = 0,
          y = 0,
          b = 0,
          _ = 0,
          E = 0,
          S = 1,
          C = 1,
          M = null,
          P = eU,
          R = null,
          A = tG,
          x = 0.5;
        function I(e) {
          return c(e[0] * s, e[1] * s);
        }
        function N(e) {
          return (e = c.invert(e[0], e[1])) && [e[0] * l, e[1] * l];
        }
        function T() {
          var e = nH(d, 0, 0, S, C, E).apply(null, t(m, v)),
            r = nH(d, p - e[0], g - e[1], S, C, E);
          return (
            (n = eM(y, b, _)),
            (u = eS(t, r)),
            (c = eS(n, u)),
            (a = nF(u, x)),
            k()
          );
        }
        function k() {
          return (f = h = null), I;
        }
        return (
          (I.stream = function (e) {
            var t;
            return f && h === e
              ? f
              : (f = nL(
                  ((t = n),
                  nR({
                    point: function (e, n) {
                      var r = t(e, n);
                      return this.stream.point(r[0], r[1]);
                    },
                  }))(P(a(A((h = e)))))
                ));
          }),
          (I.preclip = function (e) {
            return arguments.length ? ((P = e), (M = void 0), k()) : P;
          }),
          (I.postclip = function (e) {
            return arguments.length
              ? ((A = e), (R = r = o = i = null), k())
              : A;
          }),
          (I.clipAngle = function (e) {
            return arguments.length
              ? ((P = +e ? eZ((M = e * s)) : ((M = null), eU)), k())
              : M * l;
          }),
          (I.clipExtent = function (e) {
            return arguments.length
              ? ((A =
                  null == e
                    ? ((R = r = o = i = null), tG)
                    : eq(
                        (R = +e[0][0]),
                        (r = +e[0][1]),
                        (o = +e[1][0]),
                        (i = +e[1][1])
                      )),
                k())
              : null == R
              ? null
              : [
                  [R, r],
                  [o, i],
                ];
          }),
          (I.scale = function (e) {
            return arguments.length ? ((d = +e), T()) : d;
          }),
          (I.translate = function (e) {
            return arguments.length ? ((p = +e[0]), (g = +e[1]), T()) : [p, g];
          }),
          (I.center = function (e) {
            return arguments.length
              ? ((m = (e[0] % 360) * s), (v = (e[1] % 360) * s), T())
              : [m * l, v * l];
          }),
          (I.rotate = function (e) {
            return arguments.length
              ? ((y = (e[0] % 360) * s),
                (b = (e[1] % 360) * s),
                (_ = e.length > 2 ? (e[2] % 360) * s : 0),
                T())
              : [y * l, b * l, _ * l];
          }),
          (I.angle = function (e) {
            return arguments.length ? ((E = (e % 360) * s), T()) : E * l;
          }),
          (I.reflectX = function (e) {
            return arguments.length ? ((S = e ? -1 : 1), T()) : S < 0;
          }),
          (I.reflectY = function (e) {
            return arguments.length ? ((C = e ? -1 : 1), T()) : C < 0;
          }),
          (I.precision = function (e) {
            return arguments.length ? ((a = nF(u, (x = e * e))), k()) : w(x);
          }),
          (I.fitExtent = function (e, t) {
            return nI(I, e, t);
          }),
          (I.fitSize = function (e, t) {
            return nN(I, e, t);
          }),
          (I.fitWidth = function (e, t) {
            return nT(I, e, t);
          }),
          (I.fitHeight = function (e, t) {
            return nk(I, e, t);
          }),
          function () {
            return (
              (t = e.apply(this, arguments)), (I.invert = t.invert && N), T()
            );
          }
        );
      }
      function nD(e) {
        var t = 0,
          n = o / 3,
          r = nB(e),
          i = r(t, n);
        return (
          (i.parallels = function (e) {
            return arguments.length
              ? r((t = e[0] * s), (n = e[1] * s))
              : [t * l, n * l];
          }),
          i
        );
      }
      function nG(e, t) {
        var n = b(e),
          r = (n + b(t)) / 2;
        if (1e-6 > c(r))
          return (function (e) {
            var t = d(e);
            function n(e, n) {
              return [e * t, b(n) / t];
            }
            return (
              (n.invert = function (e, n) {
                return [e / t, C(n * t)];
              }),
              n
            );
          })(e);
        var i = 1 + n * (2 * r - n),
          a = w(i) / r;
        function u(e, t) {
          var n = w(i - 2 * r * b(t)) / r;
          return [n * b((e *= r)), a - n * d(e)];
        }
        return (
          (u.invert = function (e, t) {
            var n = a - t,
              u = h(e, c(n)) * _(n);
            return (
              n * r < 0 && (u -= o * _(e) * _(n)),
              [u / r, C((i - (e * e + n * n) * r * r) / (2 * r))]
            );
          }),
          u
        );
      }
      function nV() {
        return nD(nG).scale(155.424).center([0, 33.6442]);
      }
      function nz() {
        return nV()
          .parallels([29.5, 45.5])
          .scale(1070)
          .translate([480, 250])
          .rotate([96, 0])
          .center([-0.6, 38.7]);
      }
      function nU() {
        var e,
          t,
          n,
          r,
          o,
          i,
          a = nz(),
          u = nV().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
          l = nV().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
          s = {
            point: function (e, t) {
              i = [e, t];
            },
          };
        function c(e) {
          var t = e[0],
            a = e[1];
          return (
            (i = null),
            n.point(t, a),
            i || (r.point(t, a), i) || (o.point(t, a), i)
          );
        }
        function f() {
          return (e = t = null), c;
        }
        return (
          (c.invert = function (e) {
            var t = a.scale(),
              n = a.translate(),
              r = (e[0] - n[0]) / t,
              o = (e[1] - n[1]) / t;
            return (
              o >= 0.12 && o < 0.234 && r >= -0.425 && r < -0.214
                ? u
                : o >= 0.166 && o < 0.234 && r >= -0.214 && r < -0.115
                ? l
                : a
            ).invert(e);
          }),
          (c.stream = function (n) {
            var r, o;
            return e && t === n
              ? e
              : ((o = (r = [a.stream((t = n)), u.stream(n), l.stream(n)])
                  .length),
                (e = {
                  point: function (e, t) {
                    for (var n = -1; ++n < o; ) r[n].point(e, t);
                  },
                  sphere: function () {
                    for (var e = -1; ++e < o; ) r[e].sphere();
                  },
                  lineStart: function () {
                    for (var e = -1; ++e < o; ) r[e].lineStart();
                  },
                  lineEnd: function () {
                    for (var e = -1; ++e < o; ) r[e].lineEnd();
                  },
                  polygonStart: function () {
                    for (var e = -1; ++e < o; ) r[e].polygonStart();
                  },
                  polygonEnd: function () {
                    for (var e = -1; ++e < o; ) r[e].polygonEnd();
                  },
                }));
          }),
          (c.precision = function (e) {
            return arguments.length
              ? (a.precision(e), u.precision(e), l.precision(e), f())
              : a.precision();
          }),
          (c.scale = function (e) {
            return arguments.length
              ? (a.scale(e),
                u.scale(0.35 * e),
                l.scale(e),
                c.translate(a.translate()))
              : a.scale();
          }),
          (c.translate = function (e) {
            if (!arguments.length) return a.translate();
            var t = a.scale(),
              i = +e[0],
              c = +e[1];
            return (
              (n = a
                .translate(e)
                .clipExtent([
                  [i - 0.455 * t, c - 0.238 * t],
                  [i + 0.455 * t, c + 0.238 * t],
                ])
                .stream(s)),
              (r = u
                .translate([i - 0.307 * t, c + 0.201 * t])
                .clipExtent([
                  [i - 0.425 * t + 1e-6, c + 0.12 * t + 1e-6],
                  [i - 0.214 * t - 1e-6, c + 0.234 * t - 1e-6],
                ])
                .stream(s)),
              (o = l
                .translate([i - 0.205 * t, c + 0.212 * t])
                .clipExtent([
                  [i - 0.214 * t + 1e-6, c + 0.166 * t + 1e-6],
                  [i - 0.115 * t - 1e-6, c + 0.234 * t - 1e-6],
                ])
                .stream(s)),
              f()
            );
          }),
          (c.fitExtent = function (e, t) {
            return nI(c, e, t);
          }),
          (c.fitSize = function (e, t) {
            return nN(c, e, t);
          }),
          (c.fitWidth = function (e, t) {
            return nT(c, e, t);
          }),
          (c.fitHeight = function (e, t) {
            return nk(c, e, t);
          }),
          c.scale(1070)
        );
      }
      function nZ(e) {
        return function (t, n) {
          var r = d(t),
            o = d(n),
            i = e(r * o);
          return i === 1 / 0 ? [2, 0] : [i * o * b(t), i * b(n)];
        };
      }
      function nq(e) {
        return function (t, n) {
          var r = w(t * t + n * n),
            o = e(r),
            i = b(o);
          return [h(t * i, r * d(o)), C(r && (n * i) / r)];
        };
      }
      var nX = nZ(function (e) {
        return w(2 / (1 + e));
      });
      function nK() {
        return nj(nX).scale(124.75).clipAngle(179.999);
      }
      nX.invert = nq(function (e) {
        return 2 * C(e / 2);
      });
      var nY = nZ(function (e) {
        return (e = S(e)) && e / b(e);
      });
      function n$() {
        return nj(nY).scale(79.4188).clipAngle(179.999);
      }
      function nW(e, t) {
        return [e, v(E((i + t) / 2))];
      }
      function nJ() {
        return nQ(nW).scale(961 / u);
      }
      function nQ(e) {
        var t,
          n,
          r,
          i = nj(e),
          a = i.center,
          u = i.scale,
          l = i.translate,
          s = i.clipExtent,
          c = null;
        function f() {
          var a = o * u(),
            l = i(ex(i.rotate()).invert([0, 0]));
          return s(
            null == c
              ? [
                  [l[0] - a, l[1] - a],
                  [l[0] + a, l[1] + a],
                ]
              : e === nW
              ? [
                  [Math.max(l[0] - a, c), t],
                  [Math.min(l[0] + a, n), r],
                ]
              : [
                  [c, Math.max(l[1] - a, t)],
                  [n, Math.min(l[1] + a, r)],
                ]
          );
        }
        return (
          (i.scale = function (e) {
            return arguments.length ? (u(e), f()) : u();
          }),
          (i.translate = function (e) {
            return arguments.length ? (l(e), f()) : l();
          }),
          (i.center = function (e) {
            return arguments.length ? (a(e), f()) : a();
          }),
          (i.clipExtent = function (e) {
            return arguments.length
              ? (null == e
                  ? (c = t = n = r = null)
                  : ((c = +e[0][0]),
                    (t = +e[0][1]),
                    (n = +e[1][0]),
                    (r = +e[1][1])),
                f())
              : null == c
              ? null
              : [
                  [c, t],
                  [n, r],
                ];
          }),
          f()
        );
      }
      function n0(e) {
        return E((i + e) / 2);
      }
      function n1(e, t) {
        var n = d(e),
          r = e === t ? b(e) : v(n / d(t)) / v(n0(t) / n0(e)),
          a = (n * y(n0(e), r)) / r;
        if (!r) return nW;
        function u(e, t) {
          a > 0
            ? t < -i + 1e-6 && (t = -i + 1e-6)
            : t > i - 1e-6 && (t = i - 1e-6);
          var n = a / y(n0(t), r);
          return [n * b(r * e), a - n * d(r * e)];
        }
        return (
          (u.invert = function (e, t) {
            var n = a - t,
              u = _(r) * w(e * e + n * n),
              l = h(e, c(n)) * _(n);
            return (
              n * r < 0 && (l -= o * _(e) * _(n)),
              [l / r, 2 * f(y(a / u, 1 / r)) - i]
            );
          }),
          u
        );
      }
      function n2() {
        return nD(n1).scale(109.5).parallels([30, 30]);
      }
      function n6(e, t) {
        return [e, t];
      }
      function n3() {
        return nj(n6).scale(152.63);
      }
      function n5(e, t) {
        var n = d(e),
          r = e === t ? b(e) : (n - d(t)) / (t - e),
          i = n / r + e;
        if (1e-6 > c(r)) return n6;
        function a(e, t) {
          var n = i - t,
            o = r * e;
          return [n * b(o), i - n * d(o)];
        }
        return (
          (a.invert = function (e, t) {
            var n = i - t,
              a = h(e, c(n)) * _(n);
            return (
              n * r < 0 && (a -= o * _(e) * _(n)),
              [a / r, i - _(r) * w(e * e + n * n)]
            );
          }),
          a
        );
      }
      function n9() {
        return nD(n5).scale(131.154).center([0, 13.9389]);
      }
      (nY.invert = nq(function (e) {
        return e;
      })),
        (nW.invert = function (e, t) {
          return [e, 2 * f(g(t)) - i];
        }),
        (n6.invert = n6);
      var n8 = w(3) / 2;
      function n4(e, t) {
        var n = C(n8 * b(t)),
          r = n * n,
          o = r * r * r;
        return [
          (e * d(n)) /
            (n8 *
              (1.340264 +
                -0.24331799999999998 * r +
                o * (0.0062510000000000005 + 0.034164 * r))),
          n * (1.340264 + -0.081106 * r + o * (893e-6 + 0.003796 * r)),
        ];
      }
      function n7() {
        return nj(n4).scale(177.158);
      }
      function re(e, t) {
        var n = d(t),
          r = d(e) * n;
        return [(n * b(e)) / r, b(t) / r];
      }
      function rt() {
        return nj(re).scale(144.049).clipAngle(60);
      }
      function rn() {
        var e,
          t,
          n,
          r,
          o,
          i,
          a,
          u = 1,
          c = 0,
          f = 0,
          h = 1,
          p = 1,
          g = 0,
          m = null,
          v = 1,
          y = 1,
          _ = nR({
            point: function (e, t) {
              var n = S([e, t]);
              this.stream.point(n[0], n[1]);
            },
          }),
          w = tG;
        function E() {
          return (v = u * h), (y = u * p), (i = a = null), S;
        }
        function S(n) {
          var r = n[0] * v,
            o = n[1] * y;
          if (g) {
            var i = o * e - r * t;
            (r = r * e + o * t), (o = i);
          }
          return [r + c, o + f];
        }
        return (
          (S.invert = function (n) {
            var r = n[0] - c,
              o = n[1] - f;
            if (g) {
              var i = o * e + r * t;
              (r = r * e - o * t), (o = i);
            }
            return [r / v, o / y];
          }),
          (S.stream = function (e) {
            return i && a === e ? i : (i = _(w((a = e))));
          }),
          (S.postclip = function (e) {
            return arguments.length
              ? ((w = e), (m = n = r = o = null), E())
              : w;
          }),
          (S.clipExtent = function (e) {
            return arguments.length
              ? ((w =
                  null == e
                    ? ((m = n = r = o = null), tG)
                    : eq(
                        (m = +e[0][0]),
                        (n = +e[0][1]),
                        (r = +e[1][0]),
                        (o = +e[1][1])
                      )),
                E())
              : null == m
              ? null
              : [
                  [m, n],
                  [r, o],
                ];
          }),
          (S.scale = function (e) {
            return arguments.length ? ((u = +e), E()) : u;
          }),
          (S.translate = function (e) {
            return arguments.length ? ((c = +e[0]), (f = +e[1]), E()) : [c, f];
          }),
          (S.angle = function (n) {
            return arguments.length
              ? ((t = b((g = (n % 360) * s))), (e = d(g)), E())
              : g * l;
          }),
          (S.reflectX = function (e) {
            return arguments.length ? ((h = e ? -1 : 1), E()) : h < 0;
          }),
          (S.reflectY = function (e) {
            return arguments.length ? ((p = e ? -1 : 1), E()) : p < 0;
          }),
          (S.fitExtent = function (e, t) {
            return nI(S, e, t);
          }),
          (S.fitSize = function (e, t) {
            return nN(S, e, t);
          }),
          (S.fitWidth = function (e, t) {
            return nT(S, e, t);
          }),
          (S.fitHeight = function (e, t) {
            return nk(S, e, t);
          }),
          S
        );
      }
      function rr(e, t) {
        var n = t * t,
          r = n * n;
        return [
          e *
            (0.8707 -
              0.131979 * n +
              r * (-0.013791 + r * (0.003971 * n - 0.001529 * r))),
          t *
            (1.007226 +
              n * (0.015085 + r * (-0.044475 + 0.028874 * n - 0.005916 * r))),
        ];
      }
      function ro() {
        return nj(rr).scale(175.295);
      }
      function ri(e, t) {
        return [d(t) * b(e), b(t)];
      }
      function ra() {
        return nj(ri).scale(249.5).clipAngle(90.000001);
      }
      function ru(e, t) {
        var n = d(t),
          r = 1 + d(e) * n;
        return [(n * b(e)) / r, b(t) / r];
      }
      function rl() {
        return nj(ru).scale(250).clipAngle(142);
      }
      function rs(e, t) {
        return [v(E((i + t) / 2)), -e];
      }
      function rc() {
        var e = nQ(rs),
          t = e.center,
          n = e.rotate;
        return (
          (e.center = function (e) {
            return arguments.length ? t([-e[1], e[0]]) : [(e = t())[1], -e[0]];
          }),
          (e.rotate = function (e) {
            return arguments.length
              ? n([e[0], e[1], e.length > 2 ? e[2] + 90 : 90])
              : [(e = n())[0], e[1], e[2] - 90];
          }),
          n([0, 0, 90]).scale(159.155)
        );
      }
      (n4.invert = function (e, t) {
        for (
          var n, r, o = t, i = o * o, a = i * i * i, u = 0;
          u < 12 &&
          ((r =
            o * (1.340264 + -0.081106 * i + a * (893e-6 + 0.003796 * i)) - t),
          (o -= n =
            r /
            (1.340264 +
              -0.24331799999999998 * i +
              a * (0.0062510000000000005 + 0.034164 * i))),
          (a = (i = o * o) * i * i),
          !(1e-12 > c(n)));
          ++u
        );
        return [
          (n8 *
            e *
            (1.340264 +
              -0.24331799999999998 * i +
              a * (0.0062510000000000005 + 0.034164 * i))) /
            d(o),
          C(b(o) / n8),
        ];
      }),
        (re.invert = nq(f)),
        (rr.invert = function (e, t) {
          var n,
            r = t,
            o = 25;
          do {
            var i = r * r,
              a = i * i;
            r -= n =
              (r *
                (1.007226 +
                  i *
                    (0.015085 +
                      a * (-0.044475 + 0.028874 * i - 0.005916 * a))) -
                t) /
              (1.007226 +
                i *
                  (0.045255 +
                    a * (-0.311325 + 0.259866 * i - 0.005916 * 11 * a)));
          } while (c(n) > 1e-6 && --o > 0);
          return [
            e /
              (0.8707 +
                (i = r * r) *
                  (-0.131979 +
                    i * (-0.013791 + i * i * i * (0.003971 - 0.001529 * i)))),
            r,
          ];
        }),
        (ri.invert = nq(C)),
        (ru.invert = nq(function (e) {
          return 2 * f(e);
        })),
        (rs.invert = function (e, t) {
          return [-t, 2 * f(g(e)) - i];
        });
    },
    66169: function (e, t, n) {
      "use strict";
      n.d(t, {
        S1: function () {
          return i;
        },
        ZT: function () {
          return r;
        },
        jU: function () {
          return a;
        },
        on: function () {
          return o;
        },
      });
      var r = function () {};
      function o(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        e && e.addEventListener && e.addEventListener.apply(e, t);
      }
      function i(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        e && e.removeEventListener && e.removeEventListener.apply(e, t);
      }
      var a = "undefined" != typeof window;
    },
    51937: function (e, t, n) {
      "use strict";
      var r = n(2265),
        o = n(66169),
        i = ["mousedown", "touchstart"];
      t.Z = function (e, t, n) {
        void 0 === n && (n = i);
        var a = (0, r.useRef)(t);
        (0, r.useEffect)(
          function () {
            a.current = t;
          },
          [t]
        ),
          (0, r.useEffect)(
            function () {
              for (
                var t = function (t) {
                    var n = e.current;
                    n && !n.contains(t.target) && a.current(t);
                  },
                  r = 0,
                  i = n;
                r < i.length;
                r++
              ) {
                var u = i[r];
                (0, o.on)(document, u, t);
              }
              return function () {
                for (var e = 0, r = n; e < r.length; e++) {
                  var i = r[e];
                  (0, o.S1)(document, i, t);
                }
              };
            },
            [n, e]
          );
      };
    },
    1044: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(2265),
        o = function (e) {
          (0, r.useEffect)(e, []);
        },
        i = function (e) {
          var t = (0, r.useRef)(e);
          (t.current = e),
            o(function () {
              return function () {
                return t.current();
              };
            });
        },
        a = function (e) {
          var t = (0, r.useRef)(0),
            n = (0, r.useState)(e),
            o = n[0],
            a = n[1],
            u = (0, r.useCallback)(function (e) {
              cancelAnimationFrame(t.current),
                (t.current = requestAnimationFrame(function () {
                  a(e);
                }));
            }, []);
          return (
            i(function () {
              cancelAnimationFrame(t.current);
            }),
            [o, u]
          );
        },
        u = n(66169),
        l = function (e, t) {
          void 0 === e && (e = 1 / 0), void 0 === t && (t = 1 / 0);
          var n = a({
              width: u.jU ? window.innerWidth : e,
              height: u.jU ? window.innerHeight : t,
            }),
            o = n[0],
            i = n[1];
          return (
            (0, r.useEffect)(function () {
              if (u.jU) {
                var e = function () {
                  i({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  (0, u.on)(window, "resize", e),
                  function () {
                    (0, u.S1)(window, "resize", e);
                  }
                );
              }
            }, []),
            o
          );
        };
    },
    7398: function (e, t, n) {
      "use strict";
      function r(e) {
        return e;
      }
      function o(e) {
        if (null == e) return r;
        var t,
          n,
          o = e.scale[0],
          i = e.scale[1],
          a = e.translate[0],
          u = e.translate[1];
        return function (e, r) {
          r || (t = n = 0);
          var l = 2,
            s = e.length,
            c = Array(s);
          for (c[0] = (t += e[0]) * o + a, c[1] = (n += e[1]) * i + u; l < s; )
            (c[l] = e[l]), ++l;
          return c;
        };
      }
      function i(e) {
        var t,
          n = o(e.transform),
          r = 1 / 0,
          i = 1 / 0,
          a = -1 / 0,
          u = -1 / 0;
        function l(e) {
          (e = n(e))[0] < r && (r = e[0]),
            e[0] > a && (a = e[0]),
            e[1] < i && (i = e[1]),
            e[1] > u && (u = e[1]);
        }
        for (t in (e.arcs.forEach(function (e) {
          for (var t, o = -1, l = e.length; ++o < l; )
            (t = n(e[o], o))[0] < r && (r = t[0]),
              t[0] > a && (a = t[0]),
              t[1] < i && (i = t[1]),
              t[1] > u && (u = t[1]);
        }),
        e.objects))
          !(function e(t) {
            switch (t.type) {
              case "GeometryCollection":
                t.geometries.forEach(e);
                break;
              case "Point":
                l(t.coordinates);
                break;
              case "MultiPoint":
                t.coordinates.forEach(l);
            }
          })(e.objects[t]);
        return [r, i, a, u];
      }
      function a(e, t) {
        return (
          "string" == typeof t && (t = e.objects[t]),
          "GeometryCollection" === t.type
            ? {
                type: "FeatureCollection",
                features: t.geometries.map(function (t) {
                  return u(e, t);
                }),
              }
            : u(e, t)
        );
      }
      function u(e, t) {
        var n = t.id,
          r = t.bbox,
          o = null == t.properties ? {} : t.properties,
          i = l(e, t);
        return null == n && null == r
          ? { type: "Feature", properties: o, geometry: i }
          : null == r
          ? { type: "Feature", id: n, properties: o, geometry: i }
          : { type: "Feature", id: n, bbox: r, properties: o, geometry: i };
      }
      function l(e, t) {
        var n = o(e.transform),
          r = e.arcs;
        function i(e) {
          return n(e);
        }
        function a(e) {
          for (var t = [], o = 0, i = e.length; o < i; ++o)
            !(function (e, t) {
              t.length && t.pop();
              for (var o = r[e < 0 ? ~e : e], i = 0, a = o.length; i < a; ++i)
                t.push(n(o[i], i));
              e < 0 &&
                (function (e, t) {
                  for (var n, r = e.length, o = r - t; o < --r; )
                    (n = e[o]), (e[o++] = e[r]), (e[r] = n);
                })(t, a);
            })(e[o], t);
          return t.length < 2 && t.push(t[0]), t;
        }
        function u(e) {
          for (var t = a(e); t.length < 4; ) t.push(t[0]);
          return t;
        }
        function l(e) {
          return e.map(u);
        }
        return (function e(t) {
          var n,
            r = t.type;
          switch (r) {
            case "GeometryCollection":
              return { type: r, geometries: t.geometries.map(e) };
            case "Point":
              n = i(t.coordinates);
              break;
            case "MultiPoint":
              n = t.coordinates.map(i);
              break;
            case "LineString":
              n = a(t.arcs);
              break;
            case "MultiLineString":
              n = t.arcs.map(a);
              break;
            case "Polygon":
              n = l(t.arcs);
              break;
            case "MultiPolygon":
              n = t.arcs.map(l);
              break;
            default:
              return null;
          }
          return { type: r, coordinates: n };
        })(t);
      }
      function s(e, t) {
        var n = {},
          r = {},
          o = {},
          i = [],
          a = -1;
        function u(e, t) {
          for (var r in e) {
            var o = e[r];
            delete t[o.start],
              delete o.start,
              delete o.end,
              o.forEach(function (e) {
                n[e < 0 ? ~e : e] = 1;
              }),
              i.push(o);
          }
        }
        return (
          t.forEach(function (n, r) {
            var o,
              i = e.arcs[n < 0 ? ~n : n];
            !(i.length < 3) ||
              i[1][0] ||
              i[1][1] ||
              ((o = t[++a]), (t[a] = n), (t[r] = o));
          }),
          t.forEach(function (t) {
            var n,
              i,
              a,
              u,
              l,
              s =
                ((a = (i = e.arcs[t < 0 ? ~t : t])[0]),
                e.transform
                  ? ((n = [0, 0]),
                    i.forEach(function (e) {
                      (n[0] += e[0]), (n[1] += e[1]);
                    }))
                  : (n = i[i.length - 1]),
                t < 0 ? [n, a] : [a, n]),
              c = s[0],
              f = s[1];
            if ((u = o[c])) {
              if ((delete o[u.end], u.push(t), (u.end = f), (l = r[f]))) {
                delete r[l.start];
                var h = l === u ? u : u.concat(l);
                r[(h.start = u.start)] = o[(h.end = l.end)] = h;
              } else r[u.start] = o[u.end] = u;
            } else if ((u = r[f])) {
              if (
                (delete r[u.start], u.unshift(t), (u.start = c), (l = o[c]))
              ) {
                delete o[l.end];
                var d = l === u ? u : l.concat(u);
                r[(d.start = l.start)] = o[(d.end = u.end)] = d;
              } else r[u.start] = o[u.end] = u;
            } else r[((u = [t]).start = c)] = o[(u.end = f)] = u;
          }),
          u(o, r),
          u(r, o),
          t.forEach(function (e) {
            n[e < 0 ? ~e : e] || i.push([e]);
          }),
          i
        );
      }
      function c(e) {
        return l(e, f.apply(this, arguments));
      }
      function f(e, t, n) {
        var r, o, i;
        if (arguments.length > 1)
          r = (function (e, t, n) {
            var r,
              o = [],
              i = [];
            function a(e) {
              var t = e < 0 ? ~e : e;
              (i[t] || (i[t] = [])).push({ i: e, g: r });
            }
            function u(e) {
              e.forEach(a);
            }
            function l(e) {
              e.forEach(u);
            }
            return (
              !(function e(t) {
                switch (((r = t), t.type)) {
                  case "GeometryCollection":
                    t.geometries.forEach(e);
                    break;
                  case "LineString":
                    u(t.arcs);
                    break;
                  case "MultiLineString":
                  case "Polygon":
                    l(t.arcs);
                    break;
                  case "MultiPolygon":
                    !(function (e) {
                      e.forEach(l);
                    })(t.arcs);
                }
              })(t),
              i.forEach(
                null == n
                  ? function (e) {
                      o.push(e[0].i);
                    }
                  : function (e) {
                      n(e[0].g, e[e.length - 1].g) && o.push(e[0].i);
                    }
              ),
              o
            );
          })(0, t, n);
        else for (o = 0, r = Array((i = e.arcs.length)); o < i; ++o) r[o] = o;
        return { type: "MultiLineString", arcs: s(e, r) };
      }
      function h(e) {
        return l(e, d.apply(this, arguments));
      }
      function d(e, t) {
        var n = {},
          r = [],
          o = [];
        function i(e) {
          e.forEach(function (t) {
            t.forEach(function (t) {
              (n[(t = t < 0 ? ~t : t)] || (n[t] = [])).push(e);
            });
          }),
            r.push(e);
        }
        function a(t) {
          return (function (e) {
            for (var t, n = -1, r = e.length, o = e[r - 1], i = 0; ++n < r; )
              (t = o), (o = e[n]), (i += t[0] * o[1] - t[1] * o[0]);
            return Math.abs(i);
          })(l(e, { type: "Polygon", arcs: [t] }).coordinates[0]);
        }
        return (
          t.forEach(function e(t) {
            switch (t.type) {
              case "GeometryCollection":
                t.geometries.forEach(e);
                break;
              case "Polygon":
                i(t.arcs);
                break;
              case "MultiPolygon":
                t.arcs.forEach(i);
            }
          }),
          r.forEach(function (e) {
            if (!e._) {
              var t = [],
                r = [e];
              for (e._ = 1, o.push(t); (e = r.pop()); )
                t.push(e),
                  e.forEach(function (e) {
                    e.forEach(function (e) {
                      n[e < 0 ? ~e : e].forEach(function (e) {
                        e._ || ((e._ = 1), r.push(e));
                      });
                    });
                  });
            }
          }),
          r.forEach(function (e) {
            delete e._;
          }),
          {
            type: "MultiPolygon",
            arcs: o
              .map(function (t) {
                var r,
                  o = [];
                if (
                  (t.forEach(function (e) {
                    e.forEach(function (e) {
                      e.forEach(function (e) {
                        n[e < 0 ? ~e : e].length < 2 && o.push(e);
                      });
                    });
                  }),
                  (r = (o = s(e, o)).length) > 1)
                )
                  for (var i, u, l = 1, c = a(o[0]); l < r; ++l)
                    (i = a(o[l])) > c &&
                      ((u = o[0]), (o[0] = o[l]), (o[l] = u), (c = i));
                return o;
              })
              .filter(function (e) {
                return e.length > 0;
              }),
          }
        );
      }
      function p(e, t) {
        for (var n = 0, r = e.length; n < r; ) {
          var o = (n + r) >>> 1;
          e[o] < t ? (n = o + 1) : (r = o);
        }
        return n;
      }
      function g(e) {
        var t = {},
          n = e.map(function () {
            return [];
          });
        function r(e, n) {
          e.forEach(function (e) {
            e < 0 && (e = ~e);
            var r = t[e];
            r ? r.push(n) : (t[e] = [n]);
          });
        }
        function o(e, t) {
          e.forEach(function (e) {
            r(e, t);
          });
        }
        var i = {
          LineString: r,
          MultiLineString: o,
          Polygon: o,
          MultiPolygon: function (e, t) {
            e.forEach(function (e) {
              o(e, t);
            });
          },
        };
        for (var a in (e.forEach(function e(t, n) {
          "GeometryCollection" === t.type
            ? t.geometries.forEach(function (t) {
                e(t, n);
              })
            : t.type in i && i[t.type](t.arcs, n);
        }),
        t))
          for (var u = t[a], l = u.length, s = 0; s < l; ++s)
            for (var c = s + 1; c < l; ++c) {
              var f,
                h = u[s],
                d = u[c];
              (f = n[h])[(a = p(f, d))] !== d && f.splice(a, 0, d),
                (f = n[d])[(a = p(f, h))] !== h && f.splice(a, 0, h);
            }
        return n;
      }
      function m(e) {
        if (null == e) return r;
        var t,
          n,
          o = e.scale[0],
          i = e.scale[1],
          a = e.translate[0],
          u = e.translate[1];
        return function (e, r) {
          r || (t = n = 0);
          var l = 2,
            s = e.length,
            c = Array(s),
            f = Math.round((e[0] - a) / o),
            h = Math.round((e[1] - u) / i);
          for (c[0] = f - t, t = f, c[1] = h - n, n = h; l < s; )
            (c[l] = e[l]), ++l;
          return c;
        };
      }
      function v(e, t) {
        if (e.transform) throw Error("already quantized");
        if (t && t.scale) l = e.bbox;
        else {
          if (!((n = Math.floor(t)) >= 2)) throw Error("n must be ≥2");
          var n,
            r = (l = e.bbox || i(e))[0],
            o = l[1],
            a = l[2],
            u = l[3];
          t = {
            scale: [
              a - r ? (a - r) / (n - 1) : 1,
              u - o ? (u - o) / (n - 1) : 1,
            ],
            translate: [r, o],
          };
        }
        var l,
          s,
          c = m(t),
          f = e.objects,
          h = {};
        function d(e) {
          return c(e);
        }
        for (s in f)
          h[s] = (function e(t) {
            var n;
            switch (t.type) {
              case "GeometryCollection":
                n = {
                  type: "GeometryCollection",
                  geometries: t.geometries.map(e),
                };
                break;
              case "Point":
                n = { type: "Point", coordinates: d(t.coordinates) };
                break;
              case "MultiPoint":
                n = { type: "MultiPoint", coordinates: t.coordinates.map(d) };
                break;
              default:
                return t;
            }
            return (
              null != t.id && (n.id = t.id),
              null != t.bbox && (n.bbox = t.bbox),
              null != t.properties && (n.properties = t.properties),
              n
            );
          })(f[s]);
        return {
          type: "Topology",
          bbox: l,
          transform: t,
          objects: h,
          arcs: e.arcs.map(function (e) {
            var t,
              n = 0,
              r = 1,
              o = e.length,
              i = Array(o);
            for (i[0] = c(e[0], 0); ++n < o; )
              ((t = c(e[n], n))[0] || t[1]) && (i[r++] = t);
            return 1 === r && (i[r++] = [0, 0]), (i.length = r), i;
          }),
        };
      }
      n.r(t),
        n.d(t, {
          bbox: function () {
            return i;
          },
          feature: function () {
            return a;
          },
          merge: function () {
            return h;
          },
          mergeArcs: function () {
            return d;
          },
          mesh: function () {
            return c;
          },
          meshArcs: function () {
            return f;
          },
          neighbors: function () {
            return g;
          },
          quantize: function () {
            return v;
          },
          transform: function () {
            return o;
          },
          untransform: function () {
            return m;
          },
        });
    },
    99849: function (e, t, n) {
      "use strict";
      e.exports = n(40923);
    },
    50836: function (e, t, n) {
      "use strict";
      e.exports = n(61278);
    },
    23720: function (e, t, n) {
      "use strict";
      e.exports = n(69440);
    },
    3098: function (e, t, n) {
      "use strict";
      var r = n(2265).createContext(void 0);
      t.IntlContext = r;
    },
    40923: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(2265),
        o = n(81616),
        i = n(3098),
        a = r && r.__esModule ? r : { default: r };
      t.IntlProvider = function (e) {
        let {
            children: t,
            defaultTranslationValues: n,
            formats: u,
            getMessageFallback: l,
            locale: s,
            messages: c,
            now: f,
            onError: h,
            timeZone: d,
          } = e,
          [p] = r.useState(() => new Map()),
          g = r.useMemo(
            () => ({
              ...o.initializeConfig({
                locale: s,
                defaultTranslationValues: n,
                formats: u,
                getMessageFallback: l,
                messages: c,
                now: f,
                onError: h,
                timeZone: d,
              }),
              messageFormatCache: p,
            }),
            [n, u, l, s, p, c, f, h, d]
          );
        return a.default.createElement(i.IntlContext.Provider, { value: g }, t);
      };
    },
    11987: function (e, t, n) {
      "use strict";
      var r = n(2265),
        o = n(3098);
      function i() {
        let e = r.useContext(o.IntlContext);
        if (!e) throw Error(void 0);
        return e;
      }
      (t.useIntlContext = i),
        (t.useLocale = function () {
          return i().locale;
        });
    },
    61278: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(11987);
      n(2265), n(3098), (t.useLocale = r.useLocale);
    },
    91266: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1133),
        o = n(81616);
      n(45839),
        n(2265),
        (t.IntlError = r.IntlError),
        (t.IntlErrorCode = r.IntlErrorCode),
        (t.createFormatter = r.createFormatter),
        (t.initializeConfig = o.initializeConfig),
        (t.createTranslator = function (e) {
          let {
            getMessageFallback: t = o.defaultGetMessageFallback,
            messages: n,
            namespace: i,
            onError: a = o.defaultOnError,
            ...u
          } = e;
          return (function (e, t) {
            let {
              getMessageFallback: n,
              messages: o,
              namespace: i,
              onError: a,
              ...u
            } = e;
            return (
              (o = o[t]),
              (i = r.resolveNamespace(i, t)),
              r.createBaseTranslator({
                ...u,
                onError: a,
                getMessageFallback: n,
                messages: o,
                namespace: i,
              })
            );
          })(
            {
              ...u,
              onError: a,
              getMessageFallback: t,
              messages: { "!": n },
              namespace: i ? "!.".concat(i) : "!",
            },
            "!"
          );
        });
    },
    1133: function (e, t, n) {
      "use strict";
      var r,
        o = n(45839),
        i = n(2265),
        a = n(81616),
        u = o && o.__esModule ? o : { default: o };
      function l(e, t, n) {
        var r;
        return (
          (t =
            "symbol" ==
            typeof (r = (function (e, t) {
              if ("object" != typeof e || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != typeof r) return r;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(t, "string"))
              ? r
              : String(r)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let s =
        (((r = {}).MISSING_MESSAGE = "MISSING_MESSAGE"),
        (r.MISSING_FORMAT = "MISSING_FORMAT"),
        (r.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK"),
        (r.INSUFFICIENT_PATH = "INSUFFICIENT_PATH"),
        (r.INVALID_MESSAGE = "INVALID_MESSAGE"),
        (r.INVALID_KEY = "INVALID_KEY"),
        (r.FORMATTING_ERROR = "FORMATTING_ERROR"),
        r);
      class c extends Error {
        constructor(e, t) {
          let n = e;
          t && (n += ": " + t),
            super(n),
            l(this, "code", void 0),
            l(this, "originalMessage", void 0),
            (this.code = e),
            t && (this.originalMessage = t);
        }
      }
      function f(e, t) {
        return e
          ? Object.keys(e).reduce(
              (n, r) => ((n[r] = { timeZone: t, ...e[r] }), n),
              {}
            )
          : e;
      }
      function h(e, t, n) {
        let r = a.joinPath(n, t);
        if (!e) throw Error(r);
        let o = e;
        return (
          t.split(".").forEach((e) => {
            let t = o[e];
            if (null == e || null == t) throw Error(r);
            o = t;
          }),
          o
        );
      }
      let d = (365 / 12) * 86400,
        p = {
          second: 1,
          seconds: 1,
          minute: 60,
          minutes: 60,
          hour: 3600,
          hours: 3600,
          day: 86400,
          days: 86400,
          week: 604800,
          weeks: 604800,
          month: (365 / 12) * 86400,
          months: (365 / 12) * 86400,
          quarter: (365 / 12) * 259200,
          quarters: (365 / 12) * 259200,
          year: 31536e3,
          years: 31536e3,
        };
      (t.IntlError = c),
        (t.IntlErrorCode = s),
        (t.createBaseTranslator = function (e) {
          let t = (function (e) {
            let {
              messages: t,
              namespace: n,
              onError: r = a.defaultOnError,
            } = e;
            try {
              if (!t) throw Error(void 0);
              let e = n ? h(t, n) : t;
              if (!e) throw Error(n);
              return e;
            } catch (t) {
              let e = new c(s.MISSING_MESSAGE, t.message);
              return r(e), e;
            }
          })({
            messages: e.messages,
            namespace: e.namespace,
            onError: e.onError,
          });
          return (function (e) {
            let {
              defaultTranslationValues: t,
              formats: n,
              getMessageFallback: r = a.defaultGetMessageFallback,
              locale: o,
              messageFormatCache: l,
              messagesOrError: d,
              namespace: p,
              onError: g,
              timeZone: m,
            } = e;
            function v(e, t, n) {
              let o = new c(t, n);
              return g(o), r({ error: o, key: e, namespace: p });
            }
            function y(e, g, y) {
              let b, _;
              if (d instanceof c) return r({ error: d, key: e, namespace: p });
              try {
                b = h(d, e, p);
              } catch (t) {
                return v(e, s.MISSING_MESSAGE, t.message);
              }
              let w = a.joinPath(o, p, e, String(b));
              if (null != l && l.has(w)) _ = l.get(w);
              else {
                if ("object" == typeof b) {
                  let t;
                  return v(
                    e,
                    Array.isArray(b) ? s.INVALID_MESSAGE : s.INSUFFICIENT_PATH,
                    t
                  );
                }
                let t = (function (e, t) {
                  if (t) return;
                  let n = e.replace(/'([{}])/gi, "$1");
                  return /<|{/.test(n) ? void 0 : n;
                })(b, g);
                if (t) return t;
                try {
                  _ = new u.default(
                    b,
                    o,
                    (function (e, t) {
                      let n = t ? { ...e, dateTime: f(e.dateTime, t) } : e,
                        r = u.default.formats.date,
                        o = t ? f(r, t) : r,
                        i = u.default.formats.time,
                        a = t ? f(i, t) : i;
                      return {
                        ...n,
                        date: { ...o, ...(null == n ? void 0 : n.dateTime) },
                        time: { ...a, ...(null == n ? void 0 : n.dateTime) },
                      };
                    })({ ...n, ...y }, m)
                  );
                } catch (t) {
                  return v(e, s.INVALID_MESSAGE, t.message);
                }
                null == l || l.set(w, _);
              }
              try {
                let e = _.format(
                  (function (e) {
                    if (0 === Object.keys(e).length) return;
                    let t = {};
                    return (
                      Object.keys(e).forEach((n) => {
                        let r,
                          o = 0,
                          a = e[n];
                        (r =
                          "function" == typeof a
                            ? (e) => {
                                let t = a(e);
                                return i.isValidElement(t)
                                  ? i.cloneElement(t, { key: n + o++ })
                                  : t;
                              }
                            : a),
                          (t[n] = r);
                      }),
                      t
                    );
                  })({ ...t, ...g })
                );
                if (null == e) throw Error(void 0);
                return i.isValidElement(e) ||
                  Array.isArray(e) ||
                  "string" == typeof e
                  ? e
                  : String(e);
              } catch (t) {
                return v(e, s.FORMATTING_ERROR, t.message);
              }
            }
            function b(e, t, n) {
              let r = y(e, t, n);
              return "string" != typeof r ? v(e, s.INVALID_MESSAGE, void 0) : r;
            }
            return (
              (b.rich = y),
              (b.markup = (e, t, n) => {
                let o = y(e, t, n);
                if ("string" != typeof o) {
                  let t = new c(s.FORMATTING_ERROR, void 0);
                  return g(t), r({ error: t, key: e, namespace: p });
                }
                return o;
              }),
              (b.raw = (e) => {
                if (d instanceof c)
                  return r({ error: d, key: e, namespace: p });
                try {
                  return h(d, e, p);
                } catch (t) {
                  return v(e, s.MISSING_MESSAGE, t.message);
                }
              }),
              b
            );
          })({ ...e, messagesOrError: t });
        }),
        (t.createFormatter = function (e) {
          let {
            formats: t,
            locale: n,
            now: r,
            onError: o = a.defaultOnError,
            timeZone: i,
          } = e;
          function u(e, t, n, r) {
            let i;
            try {
              i = (function (e, t) {
                let n;
                if ("string" == typeof t) {
                  if (!(n = null == e ? void 0 : e[t])) {
                    let e = new c(s.MISSING_FORMAT, void 0);
                    throw (o(e), e);
                  }
                } else n = t;
                return n;
              })(n, t);
            } catch (t) {
              return String(e);
            }
            try {
              return r(i);
            } catch (t) {
              return o(new c(s.FORMATTING_ERROR, t.message)), String(e);
            }
          }
          return {
            dateTime: function (e, r) {
              return u(e, r, null == t ? void 0 : t.dateTime, (t) => {
                var r;
                return (
                  (null !== (r = t) && void 0 !== r && r.timeZone) ||
                    (i
                      ? (t = { ...t, timeZone: i })
                      : o(new c(s.ENVIRONMENT_FALLBACK, void 0))),
                  new Intl.DateTimeFormat(n, t).format(e)
                );
              });
            },
            number: function (e, r) {
              return u(e, r, null == t ? void 0 : t.number, (t) =>
                new Intl.NumberFormat(n, t).format(e)
              );
            },
            relativeTime: function (e, t) {
              try {
                let i = new Date(e),
                  a =
                    t instanceof Date || "number" == typeof t
                      ? new Date(t)
                      : void 0 !== (null == t ? void 0 : t.now)
                      ? new Date(t.now)
                      : r ||
                        (o(new c(s.ENVIRONMENT_FALLBACK, void 0)), new Date()),
                  u = (i.getTime() - a.getTime()) / 1e3,
                  l =
                    "number" == typeof t ||
                    t instanceof Date ||
                    void 0 === (null == t ? void 0 : t.unit)
                      ? (function (e) {
                          let t = Math.abs(e);
                          return t < 60
                            ? "second"
                            : t < 3600
                            ? "minute"
                            : t < 86400
                            ? "hour"
                            : t < 604800
                            ? "day"
                            : t < d
                            ? "week"
                            : t < 31536e3
                            ? "month"
                            : "year";
                        })(u)
                      : t.unit,
                  f = Math.round(u / p[l]);
                return new Intl.RelativeTimeFormat(n, {
                  numeric: "auto",
                }).format(f, l);
              } catch (t) {
                return o(new c(s.FORMATTING_ERROR, t.message)), String(e);
              }
            },
            list: function (e, r) {
              return u(e, r, null == t ? void 0 : t.list, (t) =>
                new Intl.ListFormat(n, t).format(e)
              );
            },
          };
        }),
        (t.resolveNamespace = function (e, t) {
          return e === t ? void 0 : e.slice((t + ".").length);
        });
    },
    69440: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1133),
        o = n(91266),
        i = n(81616),
        a = n(40923),
        u = n(78107),
        l = n(11987);
      n(45839),
        n(2265),
        n(3098),
        (t.IntlError = r.IntlError),
        (t.IntlErrorCode = r.IntlErrorCode),
        (t.createFormatter = r.createFormatter),
        (t.createTranslator = o.createTranslator),
        (t.initializeConfig = i.initializeConfig),
        (t.IntlProvider = a.IntlProvider),
        (t.useFormatter = u.useFormatter),
        (t.useMessages = u.useMessages),
        (t.useNow = u.useNow),
        (t.useTimeZone = u.useTimeZone),
        (t.useTranslations = u.useTranslations),
        (t.useLocale = l.useLocale);
    },
    81616: function (e, t) {
      "use strict";
      function n() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.filter(Boolean).join(".");
      }
      function r(e) {
        return n(e.namespace, e.key);
      }
      function o(e) {
        console.error(e);
      }
      (t.defaultGetMessageFallback = r),
        (t.defaultOnError = o),
        (t.initializeConfig = function (e) {
          let { getMessageFallback: t, messages: n, onError: i, ...a } = e;
          return {
            ...a,
            messages: n,
            onError: i || o,
            getMessageFallback: t || r,
          };
        }),
        (t.joinPath = n);
    },
    78107: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(40923),
        o = n(11987),
        i = n(2265),
        a = n(1133);
      n(81616), n(3098), n(45839);
      let u = !1,
        l = "undefined" == typeof window;
      (t.IntlProvider = r.IntlProvider),
        (t.useLocale = o.useLocale),
        (t.useFormatter = function () {
          let {
            formats: e,
            locale: t,
            now: n,
            onError: r,
            timeZone: u,
          } = o.useIntlContext();
          return i.useMemo(
            () =>
              a.createFormatter({
                formats: e,
                locale: t,
                now: n,
                onError: r,
                timeZone: u,
              }),
            [e, n, t, r, u]
          );
        }),
        (t.useMessages = function () {
          let e = o.useIntlContext();
          if (!e.messages) throw Error(void 0);
          return e.messages;
        }),
        (t.useNow = function (e) {
          let t = null == e ? void 0 : e.updateInterval,
            { now: n } = o.useIntlContext(),
            [r, a] = i.useState(n || new Date());
          return (
            i.useEffect(() => {
              if (!t) return;
              let e = setInterval(() => {
                a(new Date());
              }, t);
              return () => {
                clearInterval(e);
              };
            }, [n, t]),
            r
          );
        }),
        (t.useTimeZone = function () {
          return o.useIntlContext().timeZone;
        }),
        (t.useTranslations = function (e) {
          return (function (e, t, n) {
            let {
              defaultTranslationValues: r,
              formats: s,
              getMessageFallback: c,
              locale: f,
              messageFormatCache: h,
              onError: d,
              timeZone: p,
            } = o.useIntlContext();
            return (
              (e = e[n]),
              (t = a.resolveNamespace(t, n)),
              p ||
                u ||
                !l ||
                ((u = !0),
                d(
                  new a.IntlError(a.IntlErrorCode.ENVIRONMENT_FALLBACK, void 0)
                )),
              i.useMemo(
                () =>
                  a.createBaseTranslator({
                    messageFormatCache: h,
                    getMessageFallback: c,
                    messages: e,
                    defaultTranslationValues: r,
                    namespace: t,
                    onError: d,
                    formats: s,
                    locale: f,
                    timeZone: p,
                  }),
                [h, c, e, t, d, r, s, f, p]
              )
            );
          })(
            { "!": o.useIntlContext().messages },
            e ? "!.".concat(e) : "!",
            "!"
          );
        });
    },
    3216: function (e, t, n) {
      "use strict";
      n.d(t, {
        b7: function () {
          return a;
        },
        ie: function () {
          return i;
        },
      });
      var r = n(2265),
        o = n(7660);
      /**
       * react-table
       *
       * Copyright (c) TanStack
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */ function i(e, t) {
        return e
          ? ("function" == typeof e &&
              (() => {
                let t = Object.getPrototypeOf(e);
                return t.prototype && t.prototype.isReactComponent;
              })()) ||
            "function" == typeof e ||
            ("object" == typeof e &&
              "symbol" == typeof e.$$typeof &&
              ["react.memo", "react.forward_ref"].includes(
                e.$$typeof.description
              ))
            ? r.createElement(e, t)
            : e
          : null;
      }
      function a(e) {
        let t = {
            state: {},
            onStateChange: () => {},
            renderFallbackValue: null,
            ...e,
          },
          [n] = r.useState(() => ({ current: (0, o.W_)(t) })),
          [i, a] = r.useState(() => n.current.initialState);
        return (
          n.current.setOptions((t) => ({
            ...t,
            ...e,
            state: { ...i, ...e.state },
            onStateChange: (t) => {
              a(t), null == e.onStateChange || e.onStateChange(t);
            },
          })),
          n.current
        );
      }
    },
    7660: function (e, t, n) {
      "use strict";
      /**
       * table-core
       *
       * Copyright (c) TanStack
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */ function r(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function o(e, t) {
        return (n) => {
          t.setState((t) => ({ ...t, [e]: r(n, t[e]) }));
        };
      }
      function i(e) {
        return e instanceof Function;
      }
      function a(e, t) {
        let n = [],
          r = (e) => {
            e.forEach((e) => {
              n.push(e);
              let o = t(e);
              null != o && o.length && r(o);
            });
          };
        return r(e), n;
      }
      function u(e, t, n) {
        let r,
          o = [];
        return () => {
          let i, a;
          n.key && n.debug && (i = Date.now());
          let u = e();
          if (!(u.length !== o.length || u.some((e, t) => o[t] !== e)))
            return r;
          if (
            ((o = u),
            n.key && n.debug && (a = Date.now()),
            (r = t(...u)),
            null == n || null == n.onChange || n.onChange(r),
            n.key && n.debug && null != n && n.debug())
          ) {
            let e = Math.round((Date.now() - i) * 100) / 100,
              t = Math.round((Date.now() - a) * 100) / 100,
              r = t / 16,
              o = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              `%c⏱ ${o(t, 5)} /${o(e, 5)} ms`,
              `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
              0,
              Math.min(120 - 120 * r, 120)
            )}deg 100% 31%);`,
              null == n ? void 0 : n.key
            );
          }
          return r;
        };
      }
      function l(e, t, n) {
        var r;
        let o = {
          id: null != (r = n.id) ? r : t.id,
          column: t,
          index: n.index,
          isPlaceholder: !!n.isPlaceholder,
          placeholderId: n.placeholderId,
          depth: n.depth,
          subHeaders: [],
          colSpan: 0,
          rowSpan: 0,
          headerGroup: null,
          getLeafHeaders: () => {
            let e = [],
              t = (n) => {
                n.subHeaders && n.subHeaders.length && n.subHeaders.map(t),
                  e.push(n);
              };
            return t(o), e;
          },
          getContext: () => ({ table: e, header: o, column: t }),
        };
        return (
          e._features.forEach((t) => {
            null == t.createHeader || t.createHeader(o, e);
          }),
          o
        );
      }
      function s(e, t, n, r) {
        var o, i;
        let a = 0,
          u = function (e, t) {
            void 0 === t && (t = 1),
              (a = Math.max(a, t)),
              e
                .filter((e) => e.getIsVisible())
                .forEach((e) => {
                  var n;
                  null != (n = e.columns) && n.length && u(e.columns, t + 1);
                }, 0);
          };
        u(e);
        let s = [],
          c = (e, t) => {
            let o = {
                depth: t,
                id: [r, `${t}`].filter(Boolean).join("_"),
                headers: [],
              },
              i = [];
            e.forEach((e) => {
              let a;
              let u = [...i].reverse()[0],
                s = e.column.depth === o.depth,
                c = !1;
              if (
                (s && e.column.parent
                  ? (a = e.column.parent)
                  : ((a = e.column), (c = !0)),
                u && (null == u ? void 0 : u.column) === a)
              )
                u.subHeaders.push(e);
              else {
                let o = l(n, a, {
                  id: [r, t, a.id, null == e ? void 0 : e.id]
                    .filter(Boolean)
                    .join("_"),
                  isPlaceholder: c,
                  placeholderId: c
                    ? `${i.filter((e) => e.column === a).length}`
                    : void 0,
                  depth: t,
                  index: i.length,
                });
                o.subHeaders.push(e), i.push(o);
              }
              o.headers.push(e), (e.headerGroup = o);
            }),
              s.push(o),
              t > 0 && c(i, t - 1);
          };
        c(
          t.map((e, t) => l(n, e, { depth: a, index: t })),
          a - 1
        ),
          s.reverse();
        let f = (e) =>
          e
            .filter((e) => e.column.getIsVisible())
            .map((e) => {
              let t = 0,
                n = 0,
                r = [0];
              return (
                e.subHeaders && e.subHeaders.length
                  ? ((r = []),
                    f(e.subHeaders).forEach((e) => {
                      let { colSpan: n, rowSpan: o } = e;
                      (t += n), r.push(o);
                    }))
                  : (t = 1),
                (n += Math.min(...r)),
                (e.colSpan = t),
                (e.rowSpan = n),
                { colSpan: t, rowSpan: n }
              );
            });
        return (
          f(null != (o = null == (i = s[0]) ? void 0 : i.headers) ? o : []), s
        );
      }
      n.d(t, {
        G_: function () {
          return X;
        },
        W_: function () {
          return D;
        },
        qe: function () {
          return U;
        },
        rV: function () {
          return Z;
        },
        sC: function () {
          return V;
        },
        tj: function () {
          return z;
        },
      });
      let c = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
        f = () => ({
          startOffset: null,
          startSize: null,
          deltaOffset: null,
          deltaPercentage: null,
          isResizingColumn: !1,
          columnSizingStart: [],
        }),
        h = null;
      function d(e) {
        return "touchstart" === e.type;
      }
      let p = (e, t, n) => {
        var r;
        let o = n.toLowerCase();
        return !!(null == (r = e.getValue(t)) ||
        null == (r = r.toString()) ||
        null == (r = r.toLowerCase())
          ? void 0
          : r.includes(o));
      };
      p.autoRemove = (e) => C(e);
      let g = (e, t, n) => {
        var r;
        return !!(null == (r = e.getValue(t)) || null == (r = r.toString())
          ? void 0
          : r.includes(n));
      };
      g.autoRemove = (e) => C(e);
      let m = (e, t, n) => {
        var r;
        return (
          (null == (r = e.getValue(t)) || null == (r = r.toString())
            ? void 0
            : r.toLowerCase()) === (null == n ? void 0 : n.toLowerCase())
        );
      };
      m.autoRemove = (e) => C(e);
      let v = (e, t, n) => {
        var r;
        return null == (r = e.getValue(t)) ? void 0 : r.includes(n);
      };
      v.autoRemove = (e) => C(e) || !(null != e && e.length);
      let y = (e, t, n) =>
        !n.some((n) => {
          var r;
          return !(null != (r = e.getValue(t)) && r.includes(n));
        });
      y.autoRemove = (e) => C(e) || !(null != e && e.length);
      let b = (e, t, n) =>
        n.some((n) => {
          var r;
          return null == (r = e.getValue(t)) ? void 0 : r.includes(n);
        });
      b.autoRemove = (e) => C(e) || !(null != e && e.length);
      let _ = (e, t, n) => e.getValue(t) === n;
      _.autoRemove = (e) => C(e);
      let w = (e, t, n) => e.getValue(t) == n;
      w.autoRemove = (e) => C(e);
      let E = (e, t, n) => {
        let [r, o] = n,
          i = e.getValue(t);
        return i >= r && i <= o;
      };
      (E.resolveFilterValue = (e) => {
        let [t, n] = e,
          r = "number" != typeof t ? parseFloat(t) : t,
          o = "number" != typeof n ? parseFloat(n) : n,
          i = null === t || Number.isNaN(r) ? -1 / 0 : r,
          a = null === n || Number.isNaN(o) ? 1 / 0 : o;
        if (i > a) {
          let e = i;
          (i = a), (a = e);
        }
        return [i, a];
      }),
        (E.autoRemove = (e) => C(e) || (C(e[0]) && C(e[1])));
      let S = {
        includesString: p,
        includesStringSensitive: g,
        equalsString: m,
        arrIncludes: v,
        arrIncludesAll: y,
        arrIncludesSome: b,
        equals: _,
        weakEquals: w,
        inNumberRange: E,
      };
      function C(e) {
        return null == e || "" === e;
      }
      function M(e, t, n) {
        return (
          (!!e && !!e.autoRemove && e.autoRemove(t, n)) ||
          void 0 === t ||
          ("string" == typeof t && !t)
        );
      }
      let P = {
          sum: (e, t, n) =>
            n.reduce((t, n) => {
              let r = n.getValue(e);
              return t + ("number" == typeof r ? r : 0);
            }, 0),
          min: (e, t, n) => {
            let r;
            return (
              n.forEach((t) => {
                let n = t.getValue(e);
                null != n && (r > n || (void 0 === r && n >= n)) && (r = n);
              }),
              r
            );
          },
          max: (e, t, n) => {
            let r;
            return (
              n.forEach((t) => {
                let n = t.getValue(e);
                null != n && (r < n || (void 0 === r && n >= n)) && (r = n);
              }),
              r
            );
          },
          extent: (e, t, n) => {
            let r, o;
            return (
              n.forEach((t) => {
                let n = t.getValue(e);
                null != n &&
                  (void 0 === r
                    ? n >= n && (r = o = n)
                    : (r > n && (r = n), o < n && (o = n)));
              }),
              [r, o]
            );
          },
          mean: (e, t) => {
            let n = 0,
              r = 0;
            if (
              (t.forEach((t) => {
                let o = t.getValue(e);
                null != o && (o = +o) >= o && (++n, (r += o));
              }),
              n)
            )
              return r / n;
          },
          median: (e, t) => {
            if (!t.length) return;
            let n = t.map((t) => t.getValue(e));
            if (!(Array.isArray(n) && n.every((e) => "number" == typeof e)))
              return;
            if (1 === n.length) return n[0];
            let r = Math.floor(n.length / 2),
              o = n.sort((e, t) => e - t);
            return n.length % 2 != 0 ? o[r] : (o[r - 1] + o[r]) / 2;
          },
          unique: (e, t) =>
            Array.from(new Set(t.map((t) => t.getValue(e))).values()),
          uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
          count: (e, t) => t.length,
        },
        R = () => ({ pageIndex: 0, pageSize: 10 }),
        A = () => ({ left: [], right: [] }),
        x = () => ({ top: [], bottom: [] }),
        I = (e, t, n, r, o) => {
          var i;
          let a = o.getRow(t);
          n
            ? (a.getCanMultiSelect() ||
                Object.keys(e).forEach((t) => delete e[t]),
              a.getCanSelect() && (e[t] = !0))
            : delete e[t],
            r &&
              null != (i = a.subRows) &&
              i.length &&
              a.getCanSelectSubRows() &&
              a.subRows.forEach((t) => I(e, t.id, n, r, o));
        };
      function N(e, t) {
        let n = e.getState().rowSelection,
          r = [],
          o = {},
          i = function (e, t) {
            return e
              .map((e) => {
                var t;
                let a = T(e, n);
                if (
                  (a && (r.push(e), (o[e.id] = e)),
                  null != (t = e.subRows) &&
                    t.length &&
                    (e = { ...e, subRows: i(e.subRows) }),
                  a)
                )
                  return e;
              })
              .filter(Boolean);
          };
        return { rows: i(t.rows), flatRows: r, rowsById: o };
      }
      function T(e, t) {
        var n;
        return null != (n = t[e.id]) && n;
      }
      function k(e, t, n) {
        var r;
        if (!(null != (r = e.subRows) && r.length)) return !1;
        let o = !0,
          i = !1;
        return (
          e.subRows.forEach((e) => {
            if (
              (!i || o) &&
              (e.getCanSelect() && (T(e, t) ? (i = !0) : (o = !1)),
              e.subRows && e.subRows.length)
            ) {
              let n = k(e, t);
              "all" === n ? (i = !0) : ("some" === n && (i = !0), (o = !1));
            }
          }),
          o ? "all" : !!i && "some"
        );
      }
      let O = /([0-9]+)/gm;
      function F(e, t) {
        return e === t ? 0 : e > t ? 1 : -1;
      }
      function L(e) {
        return "number" == typeof e
          ? isNaN(e) || e === 1 / 0 || e === -1 / 0
            ? ""
            : String(e)
          : "string" == typeof e
          ? e
          : "";
      }
      function H(e, t) {
        let n = e.split(O).filter(Boolean),
          r = t.split(O).filter(Boolean);
        for (; n.length && r.length; ) {
          let e = n.shift(),
            t = r.shift(),
            o = parseInt(e, 10),
            i = parseInt(t, 10),
            a = [o, i].sort();
          if (isNaN(a[0])) {
            if (e > t) return 1;
            if (t > e) return -1;
            continue;
          }
          if (isNaN(a[1])) return isNaN(o) ? -1 : 1;
          if (o > i) return 1;
          if (i > o) return -1;
        }
        return n.length - r.length;
      }
      let j = {
          alphanumeric: (e, t, n) =>
            H(L(e.getValue(n)).toLowerCase(), L(t.getValue(n)).toLowerCase()),
          alphanumericCaseSensitive: (e, t, n) =>
            H(L(e.getValue(n)), L(t.getValue(n))),
          text: (e, t, n) =>
            F(L(e.getValue(n)).toLowerCase(), L(t.getValue(n)).toLowerCase()),
          textCaseSensitive: (e, t, n) => F(L(e.getValue(n)), L(t.getValue(n))),
          datetime: (e, t, n) => {
            let r = e.getValue(n),
              o = t.getValue(n);
            return r > o ? 1 : r < o ? -1 : 0;
          },
          basic: (e, t, n) => F(e.getValue(n), t.getValue(n)),
        },
        B = [
          {
            createTable: (e) => {
              (e.getHeaderGroups = u(
                () => [
                  e.getAllColumns(),
                  e.getVisibleLeafColumns(),
                  e.getState().columnPinning.left,
                  e.getState().columnPinning.right,
                ],
                (t, n, r, o) => {
                  var i, a;
                  let u =
                      null !=
                      (i =
                        null == r
                          ? void 0
                          : r
                              .map((e) => n.find((t) => t.id === e))
                              .filter(Boolean))
                        ? i
                        : [],
                    l =
                      null !=
                      (a =
                        null == o
                          ? void 0
                          : o
                              .map((e) => n.find((t) => t.id === e))
                              .filter(Boolean))
                        ? a
                        : [];
                  return s(
                    t,
                    [
                      ...u,
                      ...n.filter(
                        (e) =>
                          !(null != r && r.includes(e.id)) &&
                          !(null != o && o.includes(e.id))
                      ),
                      ...l,
                    ],
                    e
                  );
                },
                {
                  key: !1,
                  debug: () => {
                    var t;
                    return null != (t = e.options.debugAll)
                      ? t
                      : e.options.debugHeaders;
                  },
                }
              )),
                (e.getCenterHeaderGroups = u(
                  () => [
                    e.getAllColumns(),
                    e.getVisibleLeafColumns(),
                    e.getState().columnPinning.left,
                    e.getState().columnPinning.right,
                  ],
                  (t, n, r, o) =>
                    s(
                      t,
                      (n = n.filter(
                        (e) =>
                          !(null != r && r.includes(e.id)) &&
                          !(null != o && o.includes(e.id))
                      )),
                      e,
                      "center"
                    ),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    },
                  }
                )),
                (e.getLeftHeaderGroups = u(
                  () => [
                    e.getAllColumns(),
                    e.getVisibleLeafColumns(),
                    e.getState().columnPinning.left,
                  ],
                  (t, n, r) => {
                    var o;
                    return s(
                      t,
                      null !=
                        (o =
                          null == r
                            ? void 0
                            : r
                                .map((e) => n.find((t) => t.id === e))
                                .filter(Boolean))
                        ? o
                        : [],
                      e,
                      "left"
                    );
                  },
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    },
                  }
                )),
                (e.getRightHeaderGroups = u(
                  () => [
                    e.getAllColumns(),
                    e.getVisibleLeafColumns(),
                    e.getState().columnPinning.right,
                  ],
                  (t, n, r) => {
                    var o;
                    return s(
                      t,
                      null !=
                        (o =
                          null == r
                            ? void 0
                            : r
                                .map((e) => n.find((t) => t.id === e))
                                .filter(Boolean))
                        ? o
                        : [],
                      e,
                      "right"
                    );
                  },
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    },
                  }
                )),
                (e.getFooterGroups = u(
                  () => [e.getHeaderGroups()],
                  (e) => [...e].reverse(),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    },
                  }
                )),
                (e.getLeftFooterGroups = u(
                  () => [e.getLeftHeaderGroups()],
                  (e) => [...e].reverse(),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    },
                  }
                )),
                (e.getCenterFooterGroups = u(
                  () => [e.getCenterHeaderGroups()],
                  (e) => [...e].reverse(),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    },
                  }
                )),
                (e.getRightFooterGroups = u(
                  () => [e.getRightHeaderGroups()],
                  (e) => [...e].reverse(),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    },
                  }
                )),
                (e.getFlatHeaders = u(
                  () => [e.getHeaderGroups()],
                  (e) => e.map((e) => e.headers).flat(),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    },
                  }
                )),
                (e.getLeftFlatHeaders = u(
                  () => [e.getLeftHeaderGroups()],
                  (e) => e.map((e) => e.headers).flat(),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    },
                  }
                )),
                (e.getCenterFlatHeaders = u(
                  () => [e.getCenterHeaderGroups()],
                  (e) => e.map((e) => e.headers).flat(),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    },
                  }
                )),
                (e.getRightFlatHeaders = u(
                  () => [e.getRightHeaderGroups()],
                  (e) => e.map((e) => e.headers).flat(),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    },
                  }
                )),
                (e.getCenterLeafHeaders = u(
                  () => [e.getCenterFlatHeaders()],
                  (e) =>
                    e.filter((e) => {
                      var t;
                      return !(null != (t = e.subHeaders) && t.length);
                    }),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    },
                  }
                )),
                (e.getLeftLeafHeaders = u(
                  () => [e.getLeftFlatHeaders()],
                  (e) =>
                    e.filter((e) => {
                      var t;
                      return !(null != (t = e.subHeaders) && t.length);
                    }),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    },
                  }
                )),
                (e.getRightLeafHeaders = u(
                  () => [e.getRightFlatHeaders()],
                  (e) =>
                    e.filter((e) => {
                      var t;
                      return !(null != (t = e.subHeaders) && t.length);
                    }),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    },
                  }
                )),
                (e.getLeafHeaders = u(
                  () => [
                    e.getLeftHeaderGroups(),
                    e.getCenterHeaderGroups(),
                    e.getRightHeaderGroups(),
                  ],
                  (e, t, n) => {
                    var r, o, i, a, u, l;
                    return [
                      ...(null != (r = null == (o = e[0]) ? void 0 : o.headers)
                        ? r
                        : []),
                      ...(null != (i = null == (a = t[0]) ? void 0 : a.headers)
                        ? i
                        : []),
                      ...(null != (u = null == (l = n[0]) ? void 0 : l.headers)
                        ? u
                        : []),
                    ]
                      .map((e) => e.getLeafHeaders())
                      .flat();
                  },
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugHeaders;
                    },
                  }
                ));
            },
          },
          {
            getInitialState: (e) => ({ columnVisibility: {}, ...e }),
            getDefaultOptions: (e) => ({
              onColumnVisibilityChange: o("columnVisibility", e),
            }),
            createColumn: (e, t) => {
              (e.toggleVisibility = (n) => {
                e.getCanHide() &&
                  t.setColumnVisibility((t) => ({
                    ...t,
                    [e.id]: null != n ? n : !e.getIsVisible(),
                  }));
              }),
                (e.getIsVisible = () => {
                  var n, r;
                  return (
                    null ==
                      (n =
                        null == (r = t.getState().columnVisibility)
                          ? void 0
                          : r[e.id]) || n
                  );
                }),
                (e.getCanHide = () => {
                  var n, r;
                  return (
                    (null == (n = e.columnDef.enableHiding) || n) &&
                    (null == (r = t.options.enableHiding) || r)
                  );
                }),
                (e.getToggleVisibilityHandler = () => (t) => {
                  null == e.toggleVisibility ||
                    e.toggleVisibility(t.target.checked);
                });
            },
            createRow: (e, t) => {
              (e._getAllVisibleCells = u(
                () => [e.getAllCells(), t.getState().columnVisibility],
                (e) => e.filter((e) => e.column.getIsVisible()),
                {
                  key: "row._getAllVisibleCells",
                  debug: () => {
                    var e;
                    return null != (e = t.options.debugAll)
                      ? e
                      : t.options.debugRows;
                  },
                }
              )),
                (e.getVisibleCells = u(
                  () => [
                    e.getLeftVisibleCells(),
                    e.getCenterVisibleCells(),
                    e.getRightVisibleCells(),
                  ],
                  (e, t, n) => [...e, ...t, ...n],
                  {
                    key: !1,
                    debug: () => {
                      var e;
                      return null != (e = t.options.debugAll)
                        ? e
                        : t.options.debugRows;
                    },
                  }
                ));
            },
            createTable: (e) => {
              let t = (t, n) =>
                u(
                  () => [
                    n(),
                    n()
                      .filter((e) => e.getIsVisible())
                      .map((e) => e.id)
                      .join("_"),
                  ],
                  (e) =>
                    e.filter((e) =>
                      null == e.getIsVisible ? void 0 : e.getIsVisible()
                    ),
                  {
                    key: t,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugColumns;
                    },
                  }
                );
              (e.getVisibleFlatColumns = t("getVisibleFlatColumns", () =>
                e.getAllFlatColumns()
              )),
                (e.getVisibleLeafColumns = t("getVisibleLeafColumns", () =>
                  e.getAllLeafColumns()
                )),
                (e.getLeftVisibleLeafColumns = t(
                  "getLeftVisibleLeafColumns",
                  () => e.getLeftLeafColumns()
                )),
                (e.getRightVisibleLeafColumns = t(
                  "getRightVisibleLeafColumns",
                  () => e.getRightLeafColumns()
                )),
                (e.getCenterVisibleLeafColumns = t(
                  "getCenterVisibleLeafColumns",
                  () => e.getCenterLeafColumns()
                )),
                (e.setColumnVisibility = (t) =>
                  null == e.options.onColumnVisibilityChange
                    ? void 0
                    : e.options.onColumnVisibilityChange(t)),
                (e.resetColumnVisibility = (t) => {
                  var n;
                  e.setColumnVisibility(
                    t
                      ? {}
                      : null != (n = e.initialState.columnVisibility)
                      ? n
                      : {}
                  );
                }),
                (e.toggleAllColumnsVisible = (t) => {
                  var n;
                  (t = null != (n = t) ? n : !e.getIsAllColumnsVisible()),
                    e.setColumnVisibility(
                      e
                        .getAllLeafColumns()
                        .reduce(
                          (e, n) => ({
                            ...e,
                            [n.id]:
                              t || !(null != n.getCanHide && n.getCanHide()),
                          }),
                          {}
                        )
                    );
                }),
                (e.getIsAllColumnsVisible = () =>
                  !e
                    .getAllLeafColumns()
                    .some(
                      (e) => !(null != e.getIsVisible && e.getIsVisible())
                    )),
                (e.getIsSomeColumnsVisible = () =>
                  e
                    .getAllLeafColumns()
                    .some((e) =>
                      null == e.getIsVisible ? void 0 : e.getIsVisible()
                    )),
                (e.getToggleAllColumnsVisibilityHandler = () => (t) => {
                  var n;
                  e.toggleAllColumnsVisible(
                    null == (n = t.target) ? void 0 : n.checked
                  );
                });
            },
          },
          {
            getInitialState: (e) => ({ columnOrder: [], ...e }),
            getDefaultOptions: (e) => ({
              onColumnOrderChange: o("columnOrder", e),
            }),
            createTable: (e) => {
              (e.setColumnOrder = (t) =>
                null == e.options.onColumnOrderChange
                  ? void 0
                  : e.options.onColumnOrderChange(t)),
                (e.resetColumnOrder = (t) => {
                  var n;
                  e.setColumnOrder(
                    t ? [] : null != (n = e.initialState.columnOrder) ? n : []
                  );
                }),
                (e._getOrderColumnsFn = u(
                  () => [
                    e.getState().columnOrder,
                    e.getState().grouping,
                    e.options.groupedColumnMode,
                  ],
                  (e, t, n) => (r) => {
                    let o = [];
                    if (null != e && e.length) {
                      let t = [...e],
                        n = [...r];
                      for (; n.length && t.length; ) {
                        let e = t.shift(),
                          r = n.findIndex((t) => t.id === e);
                        r > -1 && o.push(n.splice(r, 1)[0]);
                      }
                      o = [...o, ...n];
                    } else o = r;
                    return (function (e, t, n) {
                      if (!(null != t && t.length) || !n) return e;
                      let r = e.filter((e) => !t.includes(e.id));
                      return "remove" === n
                        ? r
                        : [
                            ...t
                              .map((t) => e.find((e) => e.id === t))
                              .filter(Boolean),
                            ...r,
                          ];
                    })(o, t, n);
                  },
                  { key: !1 }
                ));
            },
          },
          {
            getInitialState: (e) => ({
              columnPinning: A(),
              rowPinning: x(),
              ...e,
            }),
            getDefaultOptions: (e) => ({
              onColumnPinningChange: o("columnPinning", e),
              onRowPinningChange: o("rowPinning", e),
            }),
            createColumn: (e, t) => {
              (e.pin = (n) => {
                let r = e
                  .getLeafColumns()
                  .map((e) => e.id)
                  .filter(Boolean);
                t.setColumnPinning((e) => {
                  var t, o, i, a, u, l;
                  return "right" === n
                    ? {
                        left: (null != (i = null == e ? void 0 : e.left)
                          ? i
                          : []
                        ).filter((e) => !(null != r && r.includes(e))),
                        right: [
                          ...(null != (a = null == e ? void 0 : e.right)
                            ? a
                            : []
                          ).filter((e) => !(null != r && r.includes(e))),
                          ...r,
                        ],
                      }
                    : "left" === n
                    ? {
                        left: [
                          ...(null != (u = null == e ? void 0 : e.left)
                            ? u
                            : []
                          ).filter((e) => !(null != r && r.includes(e))),
                          ...r,
                        ],
                        right: (null != (l = null == e ? void 0 : e.right)
                          ? l
                          : []
                        ).filter((e) => !(null != r && r.includes(e))),
                      }
                    : {
                        left: (null != (t = null == e ? void 0 : e.left)
                          ? t
                          : []
                        ).filter((e) => !(null != r && r.includes(e))),
                        right: (null != (o = null == e ? void 0 : e.right)
                          ? o
                          : []
                        ).filter((e) => !(null != r && r.includes(e))),
                      };
                });
              }),
                (e.getCanPin = () =>
                  e.getLeafColumns().some((e) => {
                    var n, r, o;
                    return (
                      (null == (n = e.columnDef.enablePinning) || n) &&
                      (null ==
                        (r =
                          null != (o = t.options.enableColumnPinning)
                            ? o
                            : t.options.enablePinning) ||
                        r)
                    );
                  })),
                (e.getIsPinned = () => {
                  let n = e.getLeafColumns().map((e) => e.id),
                    { left: r, right: o } = t.getState().columnPinning,
                    i = n.some((e) => (null == r ? void 0 : r.includes(e))),
                    a = n.some((e) => (null == o ? void 0 : o.includes(e)));
                  return i ? "left" : !!a && "right";
                }),
                (e.getPinnedIndex = () => {
                  var n, r;
                  let o = e.getIsPinned();
                  return o
                    ? null !=
                      (n =
                        null == (r = t.getState().columnPinning) ||
                        null == (r = r[o])
                          ? void 0
                          : r.indexOf(e.id))
                      ? n
                      : -1
                    : 0;
                });
            },
            createRow: (e, t) => {
              (e.pin = (n, r, o) => {
                let i = r
                    ? e.getLeafRows().map((e) => {
                        let { id: t } = e;
                        return t;
                      })
                    : [],
                  a = o
                    ? e.getParentRows().map((e) => {
                        let { id: t } = e;
                        return t;
                      })
                    : [],
                  u = new Set([...a, e.id, ...i]);
                t.setRowPinning((e) => {
                  var t, r, o, i, a, l;
                  return "bottom" === n
                    ? {
                        top: (null != (o = null == e ? void 0 : e.top)
                          ? o
                          : []
                        ).filter((e) => !(null != u && u.has(e))),
                        bottom: [
                          ...(null != (i = null == e ? void 0 : e.bottom)
                            ? i
                            : []
                          ).filter((e) => !(null != u && u.has(e))),
                          ...Array.from(u),
                        ],
                      }
                    : "top" === n
                    ? {
                        top: [
                          ...(null != (a = null == e ? void 0 : e.top)
                            ? a
                            : []
                          ).filter((e) => !(null != u && u.has(e))),
                          ...Array.from(u),
                        ],
                        bottom: (null != (l = null == e ? void 0 : e.bottom)
                          ? l
                          : []
                        ).filter((e) => !(null != u && u.has(e))),
                      }
                    : {
                        top: (null != (t = null == e ? void 0 : e.top)
                          ? t
                          : []
                        ).filter((e) => !(null != u && u.has(e))),
                        bottom: (null != (r = null == e ? void 0 : e.bottom)
                          ? r
                          : []
                        ).filter((e) => !(null != u && u.has(e))),
                      };
                });
              }),
                (e.getCanPin = () => {
                  var n;
                  let { enableRowPinning: r, enablePinning: o } = t.options;
                  return "function" == typeof r
                    ? r(e)
                    : null == (n = null != r ? r : o) || n;
                }),
                (e.getIsPinned = () => {
                  let n = [e.id],
                    { top: r, bottom: o } = t.getState().rowPinning,
                    i = n.some((e) => (null == r ? void 0 : r.includes(e))),
                    a = n.some((e) => (null == o ? void 0 : o.includes(e)));
                  return i ? "top" : !!a && "bottom";
                }),
                (e.getPinnedIndex = () => {
                  var n, r;
                  let o = e.getIsPinned();
                  if (!o) return -1;
                  let i =
                    null == (n = t._getPinnedRows(o))
                      ? void 0
                      : n.map((e) => {
                          let { id: t } = e;
                          return t;
                        });
                  return null != (r = null == i ? void 0 : i.indexOf(e.id))
                    ? r
                    : -1;
                }),
                (e.getCenterVisibleCells = u(
                  () => [
                    e._getAllVisibleCells(),
                    t.getState().columnPinning.left,
                    t.getState().columnPinning.right,
                  ],
                  (e, t, n) => {
                    let r = [...(null != t ? t : []), ...(null != n ? n : [])];
                    return e.filter((e) => !r.includes(e.column.id));
                  },
                  {
                    key: !1,
                    debug: () => {
                      var e;
                      return null != (e = t.options.debugAll)
                        ? e
                        : t.options.debugRows;
                    },
                  }
                )),
                (e.getLeftVisibleCells = u(
                  () => [
                    e._getAllVisibleCells(),
                    t.getState().columnPinning.left,
                    ,
                  ],
                  (e, t) =>
                    (null != t ? t : [])
                      .map((t) => e.find((e) => e.column.id === t))
                      .filter(Boolean)
                      .map((e) => ({ ...e, position: "left" })),
                  {
                    key: !1,
                    debug: () => {
                      var e;
                      return null != (e = t.options.debugAll)
                        ? e
                        : t.options.debugRows;
                    },
                  }
                )),
                (e.getRightVisibleCells = u(
                  () => [
                    e._getAllVisibleCells(),
                    t.getState().columnPinning.right,
                  ],
                  (e, t) =>
                    (null != t ? t : [])
                      .map((t) => e.find((e) => e.column.id === t))
                      .filter(Boolean)
                      .map((e) => ({ ...e, position: "right" })),
                  {
                    key: !1,
                    debug: () => {
                      var e;
                      return null != (e = t.options.debugAll)
                        ? e
                        : t.options.debugRows;
                    },
                  }
                ));
            },
            createTable: (e) => {
              (e.setColumnPinning = (t) =>
                null == e.options.onColumnPinningChange
                  ? void 0
                  : e.options.onColumnPinningChange(t)),
                (e.resetColumnPinning = (t) => {
                  var n, r;
                  return e.setColumnPinning(
                    t
                      ? A()
                      : null !=
                        (n =
                          null == (r = e.initialState)
                            ? void 0
                            : r.columnPinning)
                      ? n
                      : A()
                  );
                }),
                (e.getIsSomeColumnsPinned = (t) => {
                  var n, r, o;
                  let i = e.getState().columnPinning;
                  return t
                    ? !!(null == (n = i[t]) ? void 0 : n.length)
                    : !!(
                        (null == (r = i.left) ? void 0 : r.length) ||
                        (null == (o = i.right) ? void 0 : o.length)
                      );
                }),
                (e.getLeftLeafColumns = u(
                  () => [
                    e.getAllLeafColumns(),
                    e.getState().columnPinning.left,
                  ],
                  (e, t) =>
                    (null != t ? t : [])
                      .map((t) => e.find((e) => e.id === t))
                      .filter(Boolean),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugColumns;
                    },
                  }
                )),
                (e.getRightLeafColumns = u(
                  () => [
                    e.getAllLeafColumns(),
                    e.getState().columnPinning.right,
                  ],
                  (e, t) =>
                    (null != t ? t : [])
                      .map((t) => e.find((e) => e.id === t))
                      .filter(Boolean),
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugColumns;
                    },
                  }
                )),
                (e.getCenterLeafColumns = u(
                  () => [
                    e.getAllLeafColumns(),
                    e.getState().columnPinning.left,
                    e.getState().columnPinning.right,
                  ],
                  (e, t, n) => {
                    let r = [...(null != t ? t : []), ...(null != n ? n : [])];
                    return e.filter((e) => !r.includes(e.id));
                  },
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugColumns;
                    },
                  }
                )),
                (e.setRowPinning = (t) =>
                  null == e.options.onRowPinningChange
                    ? void 0
                    : e.options.onRowPinningChange(t)),
                (e.resetRowPinning = (t) => {
                  var n, r;
                  return e.setRowPinning(
                    t
                      ? x()
                      : null !=
                        (n =
                          null == (r = e.initialState) ? void 0 : r.rowPinning)
                      ? n
                      : x()
                  );
                }),
                (e.getIsSomeRowsPinned = (t) => {
                  var n, r, o;
                  let i = e.getState().rowPinning;
                  return t
                    ? !!(null == (n = i[t]) ? void 0 : n.length)
                    : !!(
                        (null == (r = i.top) ? void 0 : r.length) ||
                        (null == (o = i.bottom) ? void 0 : o.length)
                      );
                }),
                (e._getPinnedRows = (t) =>
                  u(
                    () => [e.getRowModel().rows, e.getState().rowPinning[t]],
                    (n, r) => {
                      var o;
                      return (
                        null == (o = e.options.keepPinnedRows) || o
                          ? (null != r ? r : []).map((t) => {
                              let n = e.getRow(t, !0);
                              return n.getIsAllParentsExpanded() ? n : null;
                            })
                          : (null != r ? r : []).map((e) =>
                              n.find((t) => t.id === e)
                            )
                      )
                        .filter(Boolean)
                        .map((e) => ({ ...e, position: t }));
                    },
                    {
                      key: !1,
                      debug: () => {
                        var t;
                        return null != (t = e.options.debugAll)
                          ? t
                          : e.options.debugRows;
                      },
                    }
                  )()),
                (e.getTopRows = () => e._getPinnedRows("top")),
                (e.getBottomRows = () => e._getPinnedRows("bottom")),
                (e.getCenterRows = u(
                  () => [
                    e.getRowModel().rows,
                    e.getState().rowPinning.top,
                    e.getState().rowPinning.bottom,
                  ],
                  (e, t, n) => {
                    let r = new Set([
                      ...(null != t ? t : []),
                      ...(null != n ? n : []),
                    ]);
                    return e.filter((e) => !r.has(e.id));
                  },
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugRows;
                    },
                  }
                ));
            },
          },
          {
            getDefaultColumnDef: () => ({ filterFn: "auto" }),
            getInitialState: (e) => ({
              columnFilters: [],
              globalFilter: void 0,
              ...e,
            }),
            getDefaultOptions: (e) => ({
              onColumnFiltersChange: o("columnFilters", e),
              onGlobalFilterChange: o("globalFilter", e),
              filterFromLeafRows: !1,
              maxLeafRowFilterDepth: 100,
              globalFilterFn: "auto",
              getColumnCanGlobalFilter: (t) => {
                var n;
                let r =
                  null == (n = e.getCoreRowModel().flatRows[0]) ||
                  null == (n = n._getAllCellsByColumnId()[t.id])
                    ? void 0
                    : n.getValue();
                return "string" == typeof r || "number" == typeof r;
              },
            }),
            createColumn: (e, t) => {
              (e.getAutoFilterFn = () => {
                let n = t.getCoreRowModel().flatRows[0],
                  r = null == n ? void 0 : n.getValue(e.id);
                return "string" == typeof r
                  ? S.includesString
                  : "number" == typeof r
                  ? S.inNumberRange
                  : "boolean" == typeof r ||
                    (null !== r && "object" == typeof r)
                  ? S.equals
                  : Array.isArray(r)
                  ? S.arrIncludes
                  : S.weakEquals;
              }),
                (e.getFilterFn = () => {
                  var n, r;
                  return i(e.columnDef.filterFn)
                    ? e.columnDef.filterFn
                    : "auto" === e.columnDef.filterFn
                    ? e.getAutoFilterFn()
                    : null !=
                      (n =
                        null == (r = t.options.filterFns)
                          ? void 0
                          : r[e.columnDef.filterFn])
                    ? n
                    : S[e.columnDef.filterFn];
                }),
                (e.getCanFilter = () => {
                  var n, r, o;
                  return (
                    (null == (n = e.columnDef.enableColumnFilter) || n) &&
                    (null == (r = t.options.enableColumnFilters) || r) &&
                    (null == (o = t.options.enableFilters) || o) &&
                    !!e.accessorFn
                  );
                }),
                (e.getCanGlobalFilter = () => {
                  var n, r, o, i;
                  return (
                    (null == (n = e.columnDef.enableGlobalFilter) || n) &&
                    (null == (r = t.options.enableGlobalFilter) || r) &&
                    (null == (o = t.options.enableFilters) || o) &&
                    (null ==
                      (i =
                        null == t.options.getColumnCanGlobalFilter
                          ? void 0
                          : t.options.getColumnCanGlobalFilter(e)) ||
                      i) &&
                    !!e.accessorFn
                  );
                }),
                (e.getIsFiltered = () => e.getFilterIndex() > -1),
                (e.getFilterValue = () => {
                  var n;
                  return null == (n = t.getState().columnFilters) ||
                    null == (n = n.find((t) => t.id === e.id))
                    ? void 0
                    : n.value;
                }),
                (e.getFilterIndex = () => {
                  var n, r;
                  return null !=
                    (n =
                      null == (r = t.getState().columnFilters)
                        ? void 0
                        : r.findIndex((t) => t.id === e.id))
                    ? n
                    : -1;
                }),
                (e.setFilterValue = (n) => {
                  t.setColumnFilters((t) => {
                    var o, i;
                    let a = e.getFilterFn(),
                      u = null == t ? void 0 : t.find((t) => t.id === e.id),
                      l = r(n, u ? u.value : void 0);
                    if (M(a, l, e))
                      return null !=
                        (o =
                          null == t ? void 0 : t.filter((t) => t.id !== e.id))
                        ? o
                        : [];
                    let s = { id: e.id, value: l };
                    return u
                      ? null !=
                        (i =
                          null == t
                            ? void 0
                            : t.map((t) => (t.id === e.id ? s : t)))
                        ? i
                        : []
                      : null != t && t.length
                      ? [...t, s]
                      : [s];
                  });
                }),
                (e._getFacetedRowModel =
                  t.options.getFacetedRowModel &&
                  t.options.getFacetedRowModel(t, e.id)),
                (e.getFacetedRowModel = () =>
                  e._getFacetedRowModel
                    ? e._getFacetedRowModel()
                    : t.getPreFilteredRowModel()),
                (e._getFacetedUniqueValues =
                  t.options.getFacetedUniqueValues &&
                  t.options.getFacetedUniqueValues(t, e.id)),
                (e.getFacetedUniqueValues = () =>
                  e._getFacetedUniqueValues
                    ? e._getFacetedUniqueValues()
                    : new Map()),
                (e._getFacetedMinMaxValues =
                  t.options.getFacetedMinMaxValues &&
                  t.options.getFacetedMinMaxValues(t, e.id)),
                (e.getFacetedMinMaxValues = () => {
                  if (e._getFacetedMinMaxValues)
                    return e._getFacetedMinMaxValues();
                });
            },
            createRow: (e, t) => {
              (e.columnFilters = {}), (e.columnFiltersMeta = {});
            },
            createTable: (e) => {
              (e.getGlobalAutoFilterFn = () => S.includesString),
                (e.getGlobalFilterFn = () => {
                  var t, n;
                  let { globalFilterFn: r } = e.options;
                  return i(r)
                    ? r
                    : "auto" === r
                    ? e.getGlobalAutoFilterFn()
                    : null !=
                      (t = null == (n = e.options.filterFns) ? void 0 : n[r])
                    ? t
                    : S[r];
                }),
                (e.setColumnFilters = (t) => {
                  let n = e.getAllLeafColumns();
                  null == e.options.onColumnFiltersChange ||
                    e.options.onColumnFiltersChange((e) => {
                      var o;
                      return null == (o = r(t, e))
                        ? void 0
                        : o.filter((e) => {
                            let t = n.find((t) => t.id === e.id);
                            return !(t && M(t.getFilterFn(), e.value, t));
                          });
                    });
                }),
                (e.setGlobalFilter = (t) => {
                  null == e.options.onGlobalFilterChange ||
                    e.options.onGlobalFilterChange(t);
                }),
                (e.resetGlobalFilter = (t) => {
                  e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
                }),
                (e.resetColumnFilters = (t) => {
                  var n, r;
                  e.setColumnFilters(
                    t
                      ? []
                      : null !=
                        (n =
                          null == (r = e.initialState)
                            ? void 0
                            : r.columnFilters)
                      ? n
                      : []
                  );
                }),
                (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
                (e.getFilteredRowModel = () =>
                  (!e._getFilteredRowModel &&
                    e.options.getFilteredRowModel &&
                    (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
                  e.options.manualFiltering || !e._getFilteredRowModel)
                    ? e.getPreFilteredRowModel()
                    : e._getFilteredRowModel()),
                (e._getGlobalFacetedRowModel =
                  e.options.getFacetedRowModel &&
                  e.options.getFacetedRowModel(e, "__global__")),
                (e.getGlobalFacetedRowModel = () =>
                  e.options.manualFiltering || !e._getGlobalFacetedRowModel
                    ? e.getPreFilteredRowModel()
                    : e._getGlobalFacetedRowModel()),
                (e._getGlobalFacetedUniqueValues =
                  e.options.getFacetedUniqueValues &&
                  e.options.getFacetedUniqueValues(e, "__global__")),
                (e.getGlobalFacetedUniqueValues = () =>
                  e._getGlobalFacetedUniqueValues
                    ? e._getGlobalFacetedUniqueValues()
                    : new Map()),
                (e._getGlobalFacetedMinMaxValues =
                  e.options.getFacetedMinMaxValues &&
                  e.options.getFacetedMinMaxValues(e, "__global__")),
                (e.getGlobalFacetedMinMaxValues = () => {
                  if (e._getGlobalFacetedMinMaxValues)
                    return e._getGlobalFacetedMinMaxValues();
                });
            },
          },
          {
            getInitialState: (e) => ({ sorting: [], ...e }),
            getDefaultColumnDef: () => ({
              sortingFn: "auto",
              sortUndefined: 1,
            }),
            getDefaultOptions: (e) => ({
              onSortingChange: o("sorting", e),
              isMultiSortEvent: (e) => e.shiftKey,
            }),
            createColumn: (e, t) => {
              (e.getAutoSortingFn = () => {
                let n = t.getFilteredRowModel().flatRows.slice(10),
                  r = !1;
                for (let t of n) {
                  let n = null == t ? void 0 : t.getValue(e.id);
                  if ("[object Date]" === Object.prototype.toString.call(n))
                    return j.datetime;
                  if ("string" == typeof n && ((r = !0), n.split(O).length > 1))
                    return j.alphanumeric;
                }
                return r ? j.text : j.basic;
              }),
                (e.getAutoSortDir = () => {
                  let n = t.getFilteredRowModel().flatRows[0];
                  return "string" ==
                    typeof (null == n ? void 0 : n.getValue(e.id))
                    ? "asc"
                    : "desc";
                }),
                (e.getSortingFn = () => {
                  var n, r;
                  if (!e) throw Error();
                  return i(e.columnDef.sortingFn)
                    ? e.columnDef.sortingFn
                    : "auto" === e.columnDef.sortingFn
                    ? e.getAutoSortingFn()
                    : null !=
                      (n =
                        null == (r = t.options.sortingFns)
                          ? void 0
                          : r[e.columnDef.sortingFn])
                    ? n
                    : j[e.columnDef.sortingFn];
                }),
                (e.toggleSorting = (n, r) => {
                  let o = e.getNextSortingOrder(),
                    i = null != n;
                  t.setSorting((a) => {
                    let u;
                    let l = null == a ? void 0 : a.find((t) => t.id === e.id),
                      s =
                        null == a ? void 0 : a.findIndex((t) => t.id === e.id),
                      c = [],
                      f = i ? n : "desc" === o;
                    if (
                      ("toggle" !=
                        (u =
                          null != a && a.length && e.getCanMultiSort() && r
                            ? l
                              ? "toggle"
                              : "add"
                            : null != a && a.length && s !== a.length - 1
                            ? "replace"
                            : l
                            ? "toggle"
                            : "replace") ||
                        i ||
                        o ||
                        (u = "remove"),
                      "add" === u)
                    ) {
                      var h;
                      (c = [...a, { id: e.id, desc: f }]).splice(
                        0,
                        c.length -
                          (null != (h = t.options.maxMultiSortColCount)
                            ? h
                            : Number.MAX_SAFE_INTEGER)
                      );
                    } else
                      c =
                        "toggle" === u
                          ? a.map((t) =>
                              t.id === e.id ? { ...t, desc: f } : t
                            )
                          : "remove" === u
                          ? a.filter((t) => t.id !== e.id)
                          : [{ id: e.id, desc: f }];
                    return c;
                  });
                }),
                (e.getFirstSortDir = () => {
                  var n, r;
                  return (
                    null !=
                    (n =
                      null != (r = e.columnDef.sortDescFirst)
                        ? r
                        : t.options.sortDescFirst)
                      ? n
                      : "desc" === e.getAutoSortDir()
                  )
                    ? "desc"
                    : "asc";
                }),
                (e.getNextSortingOrder = (n) => {
                  var r, o;
                  let i = e.getFirstSortDir(),
                    a = e.getIsSorted();
                  return a
                    ? (a === i ||
                        (null != (r = t.options.enableSortingRemoval) && !r) ||
                        (!!n &&
                          null != (o = t.options.enableMultiRemove) &&
                          !o)) &&
                        ("desc" === a ? "asc" : "desc")
                    : i;
                }),
                (e.getCanSort = () => {
                  var n, r;
                  return (
                    (null == (n = e.columnDef.enableSorting) || n) &&
                    (null == (r = t.options.enableSorting) || r) &&
                    !!e.accessorFn
                  );
                }),
                (e.getCanMultiSort = () => {
                  var n, r;
                  return null !=
                    (n =
                      null != (r = e.columnDef.enableMultiSort)
                        ? r
                        : t.options.enableMultiSort)
                    ? n
                    : !!e.accessorFn;
                }),
                (e.getIsSorted = () => {
                  var n;
                  let r =
                    null == (n = t.getState().sorting)
                      ? void 0
                      : n.find((t) => t.id === e.id);
                  return !!r && (r.desc ? "desc" : "asc");
                }),
                (e.getSortIndex = () => {
                  var n, r;
                  return null !=
                    (n =
                      null == (r = t.getState().sorting)
                        ? void 0
                        : r.findIndex((t) => t.id === e.id))
                    ? n
                    : -1;
                }),
                (e.clearSorting = () => {
                  t.setSorting((t) =>
                    null != t && t.length ? t.filter((t) => t.id !== e.id) : []
                  );
                }),
                (e.getToggleSortingHandler = () => {
                  let n = e.getCanSort();
                  return (r) => {
                    n &&
                      (null == r.persist || r.persist(),
                      null == e.toggleSorting ||
                        e.toggleSorting(
                          void 0,
                          !!e.getCanMultiSort() &&
                            (null == t.options.isMultiSortEvent
                              ? void 0
                              : t.options.isMultiSortEvent(r))
                        ));
                  };
                });
            },
            createTable: (e) => {
              (e.setSorting = (t) =>
                null == e.options.onSortingChange
                  ? void 0
                  : e.options.onSortingChange(t)),
                (e.resetSorting = (t) => {
                  var n, r;
                  e.setSorting(
                    t
                      ? []
                      : null !=
                        (n = null == (r = e.initialState) ? void 0 : r.sorting)
                      ? n
                      : []
                  );
                }),
                (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
                (e.getSortedRowModel = () =>
                  (!e._getSortedRowModel &&
                    e.options.getSortedRowModel &&
                    (e._getSortedRowModel = e.options.getSortedRowModel(e)),
                  e.options.manualSorting || !e._getSortedRowModel)
                    ? e.getPreSortedRowModel()
                    : e._getSortedRowModel());
            },
          },
          {
            getDefaultColumnDef: () => ({
              aggregatedCell: (e) => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getValue()) || null == n.toString
                      ? void 0
                      : n.toString())
                  ? t
                  : null;
              },
              aggregationFn: "auto",
            }),
            getInitialState: (e) => ({ grouping: [], ...e }),
            getDefaultOptions: (e) => ({
              onGroupingChange: o("grouping", e),
              groupedColumnMode: "reorder",
            }),
            createColumn: (e, t) => {
              (e.toggleGrouping = () => {
                t.setGrouping((t) =>
                  null != t && t.includes(e.id)
                    ? t.filter((t) => t !== e.id)
                    : [...(null != t ? t : []), e.id]
                );
              }),
                (e.getCanGroup = () => {
                  var n, r, o, i;
                  return null !=
                    (n =
                      null ==
                        (r =
                          null !=
                          (o = null == (i = e.columnDef.enableGrouping) || i)
                            ? o
                            : t.options.enableGrouping) || r)
                    ? n
                    : !!e.accessorFn;
                }),
                (e.getIsGrouped = () => {
                  var n;
                  return null == (n = t.getState().grouping)
                    ? void 0
                    : n.includes(e.id);
                }),
                (e.getGroupedIndex = () => {
                  var n;
                  return null == (n = t.getState().grouping)
                    ? void 0
                    : n.indexOf(e.id);
                }),
                (e.getToggleGroupingHandler = () => {
                  let t = e.getCanGroup();
                  return () => {
                    t && e.toggleGrouping();
                  };
                }),
                (e.getAutoAggregationFn = () => {
                  let n = t.getCoreRowModel().flatRows[0],
                    r = null == n ? void 0 : n.getValue(e.id);
                  return "number" == typeof r
                    ? P.sum
                    : "[object Date]" === Object.prototype.toString.call(r)
                    ? P.extent
                    : void 0;
                }),
                (e.getAggregationFn = () => {
                  var n, r;
                  if (!e) throw Error();
                  return i(e.columnDef.aggregationFn)
                    ? e.columnDef.aggregationFn
                    : "auto" === e.columnDef.aggregationFn
                    ? e.getAutoAggregationFn()
                    : null !=
                      (n =
                        null == (r = t.options.aggregationFns)
                          ? void 0
                          : r[e.columnDef.aggregationFn])
                    ? n
                    : P[e.columnDef.aggregationFn];
                });
            },
            createTable: (e) => {
              (e.setGrouping = (t) =>
                null == e.options.onGroupingChange
                  ? void 0
                  : e.options.onGroupingChange(t)),
                (e.resetGrouping = (t) => {
                  var n, r;
                  e.setGrouping(
                    t
                      ? []
                      : null !=
                        (n = null == (r = e.initialState) ? void 0 : r.grouping)
                      ? n
                      : []
                  );
                }),
                (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
                (e.getGroupedRowModel = () =>
                  (!e._getGroupedRowModel &&
                    e.options.getGroupedRowModel &&
                    (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
                  e.options.manualGrouping || !e._getGroupedRowModel)
                    ? e.getPreGroupedRowModel()
                    : e._getGroupedRowModel());
            },
            createRow: (e, t) => {
              (e.getIsGrouped = () => !!e.groupingColumnId),
                (e.getGroupingValue = (n) => {
                  if (e._groupingValuesCache.hasOwnProperty(n))
                    return e._groupingValuesCache[n];
                  let r = t.getColumn(n);
                  return null != r && r.columnDef.getGroupingValue
                    ? ((e._groupingValuesCache[n] =
                        r.columnDef.getGroupingValue(e.original)),
                      e._groupingValuesCache[n])
                    : e.getValue(n);
                }),
                (e._groupingValuesCache = {});
            },
            createCell: (e, t, n, r) => {
              (e.getIsGrouped = () =>
                t.getIsGrouped() && t.id === n.groupingColumnId),
                (e.getIsPlaceholder = () =>
                  !e.getIsGrouped() && t.getIsGrouped()),
                (e.getIsAggregated = () => {
                  var t;
                  return (
                    !e.getIsGrouped() &&
                    !e.getIsPlaceholder() &&
                    !!(null != (t = n.subRows) && t.length)
                  );
                });
            },
          },
          {
            getInitialState: (e) => ({ expanded: {}, ...e }),
            getDefaultOptions: (e) => ({
              onExpandedChange: o("expanded", e),
              paginateExpandedRows: !0,
            }),
            createTable: (e) => {
              let t = !1,
                n = !1;
              (e._autoResetExpanded = () => {
                var r, o;
                if (!t) {
                  e._queue(() => {
                    t = !0;
                  });
                  return;
                }
                if (
                  null !=
                  (r =
                    null != (o = e.options.autoResetAll)
                      ? o
                      : e.options.autoResetExpanded)
                    ? r
                    : !e.options.manualExpanding
                ) {
                  if (n) return;
                  (n = !0),
                    e._queue(() => {
                      e.resetExpanded(), (n = !1);
                    });
                }
              }),
                (e.setExpanded = (t) =>
                  null == e.options.onExpandedChange
                    ? void 0
                    : e.options.onExpandedChange(t)),
                (e.toggleAllRowsExpanded = (t) => {
                  (null != t ? t : !e.getIsAllRowsExpanded())
                    ? e.setExpanded(!0)
                    : e.setExpanded({});
                }),
                (e.resetExpanded = (t) => {
                  var n, r;
                  e.setExpanded(
                    t
                      ? {}
                      : null !=
                        (n = null == (r = e.initialState) ? void 0 : r.expanded)
                      ? n
                      : {}
                  );
                }),
                (e.getCanSomeRowsExpand = () =>
                  e
                    .getPrePaginationRowModel()
                    .flatRows.some((e) => e.getCanExpand())),
                (e.getToggleAllRowsExpandedHandler = () => (t) => {
                  null == t.persist || t.persist(), e.toggleAllRowsExpanded();
                }),
                (e.getIsSomeRowsExpanded = () => {
                  let t = e.getState().expanded;
                  return !0 === t || Object.values(t).some(Boolean);
                }),
                (e.getIsAllRowsExpanded = () => {
                  let t = e.getState().expanded;
                  return "boolean" == typeof t
                    ? !0 === t
                    : !(
                        !Object.keys(t).length ||
                        e.getRowModel().flatRows.some((e) => !e.getIsExpanded())
                      );
                }),
                (e.getExpandedDepth = () => {
                  let t = 0;
                  return (
                    (!0 === e.getState().expanded
                      ? Object.keys(e.getRowModel().rowsById)
                      : Object.keys(e.getState().expanded)
                    ).forEach((e) => {
                      let n = e.split(".");
                      t = Math.max(t, n.length);
                    }),
                    t
                  );
                }),
                (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
                (e.getExpandedRowModel = () =>
                  (!e._getExpandedRowModel &&
                    e.options.getExpandedRowModel &&
                    (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
                  e.options.manualExpanding || !e._getExpandedRowModel)
                    ? e.getPreExpandedRowModel()
                    : e._getExpandedRowModel());
            },
            createRow: (e, t) => {
              (e.toggleExpanded = (n) => {
                t.setExpanded((r) => {
                  var o;
                  let i = !0 === r || !!(null != r && r[e.id]),
                    a = {};
                  if (
                    (!0 === r
                      ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
                          a[e] = !0;
                        })
                      : (a = r),
                    (n = null != (o = n) ? o : !i),
                    !i && n)
                  )
                    return { ...a, [e.id]: !0 };
                  if (i && !n) {
                    let { [e.id]: t, ...n } = a;
                    return n;
                  }
                  return r;
                });
              }),
                (e.getIsExpanded = () => {
                  var n;
                  let r = t.getState().expanded;
                  return !!(null !=
                  (n =
                    null == t.options.getIsRowExpanded
                      ? void 0
                      : t.options.getIsRowExpanded(e))
                    ? n
                    : !0 === r || (null == r ? void 0 : r[e.id]));
                }),
                (e.getCanExpand = () => {
                  var n, r, o;
                  return null !=
                    (n =
                      null == t.options.getRowCanExpand
                        ? void 0
                        : t.options.getRowCanExpand(e))
                    ? n
                    : (null == (r = t.options.enableExpanding) || r) &&
                        !!(null != (o = e.subRows) && o.length);
                }),
                (e.getIsAllParentsExpanded = () => {
                  let n = !0,
                    r = e;
                  for (; n && r.parentId; )
                    n = (r = t.getRow(r.parentId, !0)).getIsExpanded();
                  return n;
                }),
                (e.getToggleExpandedHandler = () => {
                  let t = e.getCanExpand();
                  return () => {
                    t && e.toggleExpanded();
                  };
                });
            },
          },
          {
            getInitialState: (e) => ({
              ...e,
              pagination: { ...R(), ...(null == e ? void 0 : e.pagination) },
            }),
            getDefaultOptions: (e) => ({
              onPaginationChange: o("pagination", e),
            }),
            createTable: (e) => {
              let t = !1,
                n = !1;
              (e._autoResetPageIndex = () => {
                var r, o;
                if (!t) {
                  e._queue(() => {
                    t = !0;
                  });
                  return;
                }
                if (
                  null !=
                  (r =
                    null != (o = e.options.autoResetAll)
                      ? o
                      : e.options.autoResetPageIndex)
                    ? r
                    : !e.options.manualPagination
                ) {
                  if (n) return;
                  (n = !0),
                    e._queue(() => {
                      e.resetPageIndex(), (n = !1);
                    });
                }
              }),
                (e.setPagination = (t) =>
                  null == e.options.onPaginationChange
                    ? void 0
                    : e.options.onPaginationChange((e) => r(t, e))),
                (e.resetPagination = (t) => {
                  var n;
                  e.setPagination(
                    t ? R() : null != (n = e.initialState.pagination) ? n : R()
                  );
                }),
                (e.setPageIndex = (t) => {
                  e.setPagination((n) => {
                    let o = r(t, n.pageIndex);
                    return (
                      (o = Math.max(
                        0,
                        Math.min(
                          o,
                          void 0 === e.options.pageCount ||
                            -1 === e.options.pageCount
                            ? Number.MAX_SAFE_INTEGER
                            : e.options.pageCount - 1
                        )
                      )),
                      { ...n, pageIndex: o }
                    );
                  });
                }),
                (e.resetPageIndex = (t) => {
                  var n, r;
                  e.setPageIndex(
                    t
                      ? 0
                      : null !=
                        (n =
                          null == (r = e.initialState) ||
                          null == (r = r.pagination)
                            ? void 0
                            : r.pageIndex)
                      ? n
                      : 0
                  );
                }),
                (e.resetPageSize = (t) => {
                  var n, r;
                  e.setPageSize(
                    t
                      ? 10
                      : null !=
                        (n =
                          null == (r = e.initialState) ||
                          null == (r = r.pagination)
                            ? void 0
                            : r.pageSize)
                      ? n
                      : 10
                  );
                }),
                (e.setPageSize = (t) => {
                  e.setPagination((e) => {
                    let n = Math.max(1, r(t, e.pageSize)),
                      o = e.pageSize * e.pageIndex;
                    return { ...e, pageIndex: Math.floor(o / n), pageSize: n };
                  });
                }),
                (e.setPageCount = (t) =>
                  e.setPagination((n) => {
                    var o;
                    let i = r(t, null != (o = e.options.pageCount) ? o : -1);
                    return (
                      "number" == typeof i && (i = Math.max(-1, i)),
                      { ...n, pageCount: i }
                    );
                  })),
                (e.getPageOptions = u(
                  () => [e.getPageCount()],
                  (e) => {
                    let t = [];
                    return (
                      e &&
                        e > 0 &&
                        (t = [...Array(e)].fill(null).map((e, t) => t)),
                      t
                    );
                  },
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugTable;
                    },
                  }
                )),
                (e.getCanPreviousPage = () =>
                  e.getState().pagination.pageIndex > 0),
                (e.getCanNextPage = () => {
                  let { pageIndex: t } = e.getState().pagination,
                    n = e.getPageCount();
                  return -1 === n || (0 !== n && t < n - 1);
                }),
                (e.previousPage = () => e.setPageIndex((e) => e - 1)),
                (e.nextPage = () => e.setPageIndex((e) => e + 1)),
                (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
                (e.getPaginationRowModel = () =>
                  (!e._getPaginationRowModel &&
                    e.options.getPaginationRowModel &&
                    (e._getPaginationRowModel =
                      e.options.getPaginationRowModel(e)),
                  e.options.manualPagination || !e._getPaginationRowModel)
                    ? e.getPrePaginationRowModel()
                    : e._getPaginationRowModel()),
                (e.getPageCount = () => {
                  var t;
                  return null != (t = e.options.pageCount)
                    ? t
                    : Math.ceil(
                        e.getPrePaginationRowModel().rows.length /
                          e.getState().pagination.pageSize
                      );
                });
            },
          },
          {
            getInitialState: (e) => ({ rowSelection: {}, ...e }),
            getDefaultOptions: (e) => ({
              onRowSelectionChange: o("rowSelection", e),
              enableRowSelection: !0,
              enableMultiRowSelection: !0,
              enableSubRowSelection: !0,
            }),
            createTable: (e) => {
              (e.setRowSelection = (t) =>
                null == e.options.onRowSelectionChange
                  ? void 0
                  : e.options.onRowSelectionChange(t)),
                (e.resetRowSelection = (t) => {
                  var n;
                  return e.setRowSelection(
                    t ? {} : null != (n = e.initialState.rowSelection) ? n : {}
                  );
                }),
                (e.toggleAllRowsSelected = (t) => {
                  e.setRowSelection((n) => {
                    t = void 0 !== t ? t : !e.getIsAllRowsSelected();
                    let r = { ...n },
                      o = e.getPreGroupedRowModel().flatRows;
                    return (
                      t
                        ? o.forEach((e) => {
                            e.getCanSelect() && (r[e.id] = !0);
                          })
                        : o.forEach((e) => {
                            delete r[e.id];
                          }),
                      r
                    );
                  });
                }),
                (e.toggleAllPageRowsSelected = (t) =>
                  e.setRowSelection((n) => {
                    let r = void 0 !== t ? t : !e.getIsAllPageRowsSelected(),
                      o = { ...n };
                    return (
                      e.getRowModel().rows.forEach((t) => {
                        I(o, t.id, r, !0, e);
                      }),
                      o
                    );
                  })),
                (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
                (e.getSelectedRowModel = u(
                  () => [e.getState().rowSelection, e.getCoreRowModel()],
                  (t, n) =>
                    Object.keys(t).length
                      ? N(e, n)
                      : { rows: [], flatRows: [], rowsById: {} },
                  {
                    key: !1,
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugTable;
                    },
                  }
                )),
                (e.getFilteredSelectedRowModel = u(
                  () => [e.getState().rowSelection, e.getFilteredRowModel()],
                  (t, n) =>
                    Object.keys(t).length
                      ? N(e, n)
                      : { rows: [], flatRows: [], rowsById: {} },
                  {
                    key: "getFilteredSelectedRowModel",
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugTable;
                    },
                  }
                )),
                (e.getGroupedSelectedRowModel = u(
                  () => [e.getState().rowSelection, e.getSortedRowModel()],
                  (t, n) =>
                    Object.keys(t).length
                      ? N(e, n)
                      : { rows: [], flatRows: [], rowsById: {} },
                  {
                    key: "getGroupedSelectedRowModel",
                    debug: () => {
                      var t;
                      return null != (t = e.options.debugAll)
                        ? t
                        : e.options.debugTable;
                    },
                  }
                )),
                (e.getIsAllRowsSelected = () => {
                  let t = e.getFilteredRowModel().flatRows,
                    { rowSelection: n } = e.getState(),
                    r = !!(t.length && Object.keys(n).length);
                  return (
                    r &&
                      t.some((e) => e.getCanSelect() && !n[e.id]) &&
                      (r = !1),
                    r
                  );
                }),
                (e.getIsAllPageRowsSelected = () => {
                  let t = e
                      .getPaginationRowModel()
                      .flatRows.filter((e) => e.getCanSelect()),
                    { rowSelection: n } = e.getState(),
                    r = !!t.length;
                  return r && t.some((e) => !n[e.id]) && (r = !1), r;
                }),
                (e.getIsSomeRowsSelected = () => {
                  var t;
                  let n = Object.keys(
                    null != (t = e.getState().rowSelection) ? t : {}
                  ).length;
                  return n > 0 && n < e.getFilteredRowModel().flatRows.length;
                }),
                (e.getIsSomePageRowsSelected = () => {
                  let t = e.getPaginationRowModel().flatRows;
                  return (
                    !e.getIsAllPageRowsSelected() &&
                    t
                      .filter((e) => e.getCanSelect())
                      .some((e) => e.getIsSelected() || e.getIsSomeSelected())
                  );
                }),
                (e.getToggleAllRowsSelectedHandler = () => (t) => {
                  e.toggleAllRowsSelected(t.target.checked);
                }),
                (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
                  e.toggleAllPageRowsSelected(t.target.checked);
                });
            },
            createRow: (e, t) => {
              (e.toggleSelected = (n, r) => {
                let o = e.getIsSelected();
                t.setRowSelection((i) => {
                  var a;
                  if (
                    ((n = void 0 !== n ? n : !o), e.getCanSelect() && o === n)
                  )
                    return i;
                  let u = { ...i };
                  return (
                    I(
                      u,
                      e.id,
                      n,
                      null == (a = null == r ? void 0 : r.selectChildren) || a,
                      t
                    ),
                    u
                  );
                });
              }),
                (e.getIsSelected = () => {
                  let { rowSelection: n } = t.getState();
                  return T(e, n);
                }),
                (e.getIsSomeSelected = () => {
                  let { rowSelection: n } = t.getState();
                  return "some" === k(e, n);
                }),
                (e.getIsAllSubRowsSelected = () => {
                  let { rowSelection: n } = t.getState();
                  return "all" === k(e, n);
                }),
                (e.getCanSelect = () => {
                  var n;
                  return "function" == typeof t.options.enableRowSelection
                    ? t.options.enableRowSelection(e)
                    : null == (n = t.options.enableRowSelection) || n;
                }),
                (e.getCanSelectSubRows = () => {
                  var n;
                  return "function" == typeof t.options.enableSubRowSelection
                    ? t.options.enableSubRowSelection(e)
                    : null == (n = t.options.enableSubRowSelection) || n;
                }),
                (e.getCanMultiSelect = () => {
                  var n;
                  return "function" == typeof t.options.enableMultiRowSelection
                    ? t.options.enableMultiRowSelection(e)
                    : null == (n = t.options.enableMultiRowSelection) || n;
                }),
                (e.getToggleSelectedHandler = () => {
                  let t = e.getCanSelect();
                  return (n) => {
                    var r;
                    t &&
                      e.toggleSelected(
                        null == (r = n.target) ? void 0 : r.checked
                      );
                  };
                });
            },
          },
          {
            getDefaultColumnDef: () => c,
            getInitialState: (e) => ({
              columnSizing: {},
              columnSizingInfo: f(),
              ...e,
            }),
            getDefaultOptions: (e) => ({
              columnResizeMode: "onEnd",
              onColumnSizingChange: o("columnSizing", e),
              onColumnSizingInfoChange: o("columnSizingInfo", e),
            }),
            createColumn: (e, t) => {
              (e.getSize = () => {
                var n, r, o;
                let i = t.getState().columnSizing[e.id];
                return Math.min(
                  Math.max(
                    null != (n = e.columnDef.minSize) ? n : c.minSize,
                    null != (r = null != i ? i : e.columnDef.size) ? r : c.size
                  ),
                  null != (o = e.columnDef.maxSize) ? o : c.maxSize
                );
              }),
                (e.getStart = (n) => {
                  let r = n
                      ? "left" === n
                        ? t.getLeftVisibleLeafColumns()
                        : t.getRightVisibleLeafColumns()
                      : t.getVisibleLeafColumns(),
                    o = r.findIndex((t) => t.id === e.id);
                  if (o > 0) {
                    let e = r[o - 1];
                    return e.getStart(n) + e.getSize();
                  }
                  return 0;
                }),
                (e.resetSize = () => {
                  t.setColumnSizing((t) => {
                    let { [e.id]: n, ...r } = t;
                    return r;
                  });
                }),
                (e.getCanResize = () => {
                  var n, r;
                  return (
                    (null == (n = e.columnDef.enableResizing) || n) &&
                    (null == (r = t.options.enableColumnResizing) || r)
                  );
                }),
                (e.getIsResizing = () =>
                  t.getState().columnSizingInfo.isResizingColumn === e.id);
            },
            createHeader: (e, t) => {
              (e.getSize = () => {
                let t = 0,
                  n = (e) => {
                    if (e.subHeaders.length) e.subHeaders.forEach(n);
                    else {
                      var r;
                      t += null != (r = e.column.getSize()) ? r : 0;
                    }
                  };
                return n(e), t;
              }),
                (e.getStart = () => {
                  if (e.index > 0) {
                    let t = e.headerGroup.headers[e.index - 1];
                    return t.getStart() + t.getSize();
                  }
                  return 0;
                }),
                (e.getResizeHandler = () => {
                  let n = t.getColumn(e.column.id),
                    r = null == n ? void 0 : n.getCanResize();
                  return (o) => {
                    if (
                      !n ||
                      !r ||
                      (null == o.persist || o.persist(),
                      d(o) && o.touches && o.touches.length > 1)
                    )
                      return;
                    let i = e.getSize(),
                      a = e
                        ? e
                            .getLeafHeaders()
                            .map((e) => [e.column.id, e.column.getSize()])
                        : [[n.id, n.getSize()]],
                      u = d(o) ? Math.round(o.touches[0].clientX) : o.clientX,
                      l = {},
                      s = (e, n) => {
                        "number" == typeof n &&
                          (t.setColumnSizingInfo((e) => {
                            var t, r;
                            let o =
                                n -
                                (null !=
                                (t = null == e ? void 0 : e.startOffset)
                                  ? t
                                  : 0),
                              i = Math.max(
                                o /
                                  (null !=
                                  (r = null == e ? void 0 : e.startSize)
                                    ? r
                                    : 0),
                                -0.999999
                              );
                            return (
                              e.columnSizingStart.forEach((e) => {
                                let [t, n] = e;
                                l[t] =
                                  Math.round(100 * Math.max(n + n * i, 0)) /
                                  100;
                              }),
                              { ...e, deltaOffset: o, deltaPercentage: i }
                            );
                          }),
                          ("onChange" === t.options.columnResizeMode ||
                            "end" === e) &&
                            t.setColumnSizing((e) => ({ ...e, ...l })));
                      },
                      c = (e) => s("move", e),
                      f = (e) => {
                        s("end", e),
                          t.setColumnSizingInfo((e) => ({
                            ...e,
                            isResizingColumn: !1,
                            startOffset: null,
                            startSize: null,
                            deltaOffset: null,
                            deltaPercentage: null,
                            columnSizingStart: [],
                          }));
                      },
                      p = {
                        moveHandler: (e) => c(e.clientX),
                        upHandler: (e) => {
                          document.removeEventListener(
                            "mousemove",
                            p.moveHandler
                          ),
                            document.removeEventListener(
                              "mouseup",
                              p.upHandler
                            ),
                            f(e.clientX);
                        },
                      },
                      g = {
                        moveHandler: (e) => (
                          e.cancelable &&
                            (e.preventDefault(), e.stopPropagation()),
                          c(e.touches[0].clientX),
                          !1
                        ),
                        upHandler: (e) => {
                          var t;
                          document.removeEventListener(
                            "touchmove",
                            g.moveHandler
                          ),
                            document.removeEventListener(
                              "touchend",
                              g.upHandler
                            ),
                            e.cancelable &&
                              (e.preventDefault(), e.stopPropagation()),
                            f(null == (t = e.touches[0]) ? void 0 : t.clientX);
                        },
                      },
                      m = !!(function () {
                        if ("boolean" == typeof h) return h;
                        let e = !1;
                        try {
                          let t = () => {};
                          window.addEventListener("test", t, {
                            get passive() {
                              return (e = !0), !1;
                            },
                          }),
                            window.removeEventListener("test", t);
                        } catch (t) {
                          e = !1;
                        }
                        return (h = e);
                      })() && { passive: !1 };
                    d(o)
                      ? (document.addEventListener(
                          "touchmove",
                          g.moveHandler,
                          m
                        ),
                        document.addEventListener("touchend", g.upHandler, m))
                      : (document.addEventListener(
                          "mousemove",
                          p.moveHandler,
                          m
                        ),
                        document.addEventListener("mouseup", p.upHandler, m)),
                      t.setColumnSizingInfo((e) => ({
                        ...e,
                        startOffset: u,
                        startSize: i,
                        deltaOffset: 0,
                        deltaPercentage: 0,
                        columnSizingStart: a,
                        isResizingColumn: n.id,
                      }));
                  };
                });
            },
            createTable: (e) => {
              (e.setColumnSizing = (t) =>
                null == e.options.onColumnSizingChange
                  ? void 0
                  : e.options.onColumnSizingChange(t)),
                (e.setColumnSizingInfo = (t) =>
                  null == e.options.onColumnSizingInfoChange
                    ? void 0
                    : e.options.onColumnSizingInfoChange(t)),
                (e.resetColumnSizing = (t) => {
                  var n;
                  e.setColumnSizing(
                    t ? {} : null != (n = e.initialState.columnSizing) ? n : {}
                  );
                }),
                (e.resetHeaderSizeInfo = (t) => {
                  var n;
                  e.setColumnSizingInfo(
                    t
                      ? f()
                      : null != (n = e.initialState.columnSizingInfo)
                      ? n
                      : f()
                  );
                }),
                (e.getTotalSize = () => {
                  var t, n;
                  return null !=
                    (t =
                      null == (n = e.getHeaderGroups()[0])
                        ? void 0
                        : n.headers.reduce((e, t) => e + t.getSize(), 0))
                    ? t
                    : 0;
                }),
                (e.getLeftTotalSize = () => {
                  var t, n;
                  return null !=
                    (t =
                      null == (n = e.getLeftHeaderGroups()[0])
                        ? void 0
                        : n.headers.reduce((e, t) => e + t.getSize(), 0))
                    ? t
                    : 0;
                }),
                (e.getCenterTotalSize = () => {
                  var t, n;
                  return null !=
                    (t =
                      null == (n = e.getCenterHeaderGroups()[0])
                        ? void 0
                        : n.headers.reduce((e, t) => e + t.getSize(), 0))
                    ? t
                    : 0;
                }),
                (e.getRightTotalSize = () => {
                  var t, n;
                  return null !=
                    (t =
                      null == (n = e.getRightHeaderGroups()[0])
                        ? void 0
                        : n.headers.reduce((e, t) => e + t.getSize(), 0))
                    ? t
                    : 0;
                });
            },
          },
        ];
      function D(e) {
        var t;
        (e.debugAll || e.debugTable) &&
          console.info("Creating Table Instance...");
        let n = { _features: B },
          o = n._features.reduce(
            (e, t) =>
              Object.assign(
                e,
                null == t.getDefaultOptions ? void 0 : t.getDefaultOptions(n)
              ),
            {}
          ),
          i = (e) =>
            n.options.mergeOptions
              ? n.options.mergeOptions(o, e)
              : { ...o, ...e },
          a = { ...(null != (t = e.initialState) ? t : {}) };
        n._features.forEach((e) => {
          var t;
          a =
            null !=
            (t = null == e.getInitialState ? void 0 : e.getInitialState(a))
              ? t
              : a;
        });
        let l = [],
          s = !1,
          c = {
            _features: B,
            options: { ...o, ...e },
            initialState: a,
            _queue: (e) => {
              l.push(e),
                s ||
                  ((s = !0),
                  Promise.resolve()
                    .then(() => {
                      for (; l.length; ) l.shift()();
                      s = !1;
                    })
                    .catch((e) =>
                      setTimeout(() => {
                        throw e;
                      })
                    ));
            },
            reset: () => {
              n.setState(n.initialState);
            },
            setOptions: (e) => {
              let t = r(e, n.options);
              n.options = i(t);
            },
            getState: () => n.options.state,
            setState: (e) => {
              null == n.options.onStateChange || n.options.onStateChange(e);
            },
            _getRowId: (e, t, r) => {
              var o;
              return null !=
                (o =
                  null == n.options.getRowId
                    ? void 0
                    : n.options.getRowId(e, t, r))
                ? o
                : `${r ? [r.id, t].join(".") : t}`;
            },
            getCoreRowModel: () => (
              n._getCoreRowModel ||
                (n._getCoreRowModel = n.options.getCoreRowModel(n)),
              n._getCoreRowModel()
            ),
            getRowModel: () => n.getPaginationRowModel(),
            getRow: (e, t) => {
              let r = (t ? n.getCoreRowModel() : n.getRowModel()).rowsById[e];
              if (!r) throw Error();
              return r;
            },
            _getDefaultColumnDef: u(
              () => [n.options.defaultColumn],
              (e) => {
                var t;
                return (
                  (e = null != (t = e) ? t : {}),
                  {
                    header: (e) => {
                      let t = e.header.column.columnDef;
                      return t.accessorKey
                        ? t.accessorKey
                        : t.accessorFn
                        ? t.id
                        : null;
                    },
                    cell: (e) => {
                      var t, n;
                      return null !=
                        (t =
                          null == (n = e.renderValue()) || null == n.toString
                            ? void 0
                            : n.toString())
                        ? t
                        : null;
                    },
                    ...n._features.reduce(
                      (e, t) =>
                        Object.assign(
                          e,
                          null == t.getDefaultColumnDef
                            ? void 0
                            : t.getDefaultColumnDef()
                        ),
                      {}
                    ),
                    ...e,
                  }
                );
              },
              {
                debug: () => {
                  var e;
                  return null != (e = n.options.debugAll)
                    ? e
                    : n.options.debugColumns;
                },
                key: !1,
              }
            ),
            _getColumnDefs: () => n.options.columns,
            getAllColumns: u(
              () => [n._getColumnDefs()],
              (e) => {
                let t = function (e, r, o) {
                  return (
                    void 0 === o && (o = 0),
                    e.map((e) => {
                      let i = (function (e, t, n, r) {
                        var o, i;
                        let a;
                        let l = { ...e._getDefaultColumnDef(), ...t },
                          s = l.accessorKey,
                          c =
                            null !=
                            (o =
                              null != (i = l.id)
                                ? i
                                : s
                                ? s.replace(".", "_")
                                : void 0)
                              ? o
                              : "string" == typeof l.header
                              ? l.header
                              : void 0;
                        if (
                          (l.accessorFn
                            ? (a = l.accessorFn)
                            : s &&
                              (a = s.includes(".")
                                ? (e) => {
                                    let t = e;
                                    for (let e of s.split(".")) {
                                      var n;
                                      t = null == (n = t) ? void 0 : n[e];
                                    }
                                    return t;
                                  }
                                : (e) => e[l.accessorKey]),
                          !c)
                        )
                          throw Error();
                        let f = {
                          id: `${String(c)}`,
                          accessorFn: a,
                          parent: r,
                          depth: n,
                          columnDef: l,
                          columns: [],
                          getFlatColumns: u(
                            () => [!0],
                            () => {
                              var e;
                              return [
                                f,
                                ...(null == (e = f.columns)
                                  ? void 0
                                  : e.flatMap((e) => e.getFlatColumns())),
                              ];
                            },
                            {
                              key: "column.getFlatColumns",
                              debug: () => {
                                var t;
                                return null != (t = e.options.debugAll)
                                  ? t
                                  : e.options.debugColumns;
                              },
                            }
                          ),
                          getLeafColumns: u(
                            () => [e._getOrderColumnsFn()],
                            (e) => {
                              var t;
                              return null != (t = f.columns) && t.length
                                ? e(
                                    f.columns.flatMap((e) => e.getLeafColumns())
                                  )
                                : [f];
                            },
                            {
                              key: "column.getLeafColumns",
                              debug: () => {
                                var t;
                                return null != (t = e.options.debugAll)
                                  ? t
                                  : e.options.debugColumns;
                              },
                            }
                          ),
                        };
                        for (let t of e._features)
                          null == t.createColumn || t.createColumn(f, e);
                        return f;
                      })(n, e, o, r);
                      return (
                        (i.columns = e.columns ? t(e.columns, i, o + 1) : []), i
                      );
                    })
                  );
                };
                return t(e);
              },
              {
                key: !1,
                debug: () => {
                  var e;
                  return null != (e = n.options.debugAll)
                    ? e
                    : n.options.debugColumns;
                },
              }
            ),
            getAllFlatColumns: u(
              () => [n.getAllColumns()],
              (e) => e.flatMap((e) => e.getFlatColumns()),
              {
                key: !1,
                debug: () => {
                  var e;
                  return null != (e = n.options.debugAll)
                    ? e
                    : n.options.debugColumns;
                },
              }
            ),
            _getAllFlatColumnsById: u(
              () => [n.getAllFlatColumns()],
              (e) => e.reduce((e, t) => ((e[t.id] = t), e), {}),
              {
                key: !1,
                debug: () => {
                  var e;
                  return null != (e = n.options.debugAll)
                    ? e
                    : n.options.debugColumns;
                },
              }
            ),
            getAllLeafColumns: u(
              () => [n.getAllColumns(), n._getOrderColumnsFn()],
              (e, t) => t(e.flatMap((e) => e.getLeafColumns())),
              {
                key: !1,
                debug: () => {
                  var e;
                  return null != (e = n.options.debugAll)
                    ? e
                    : n.options.debugColumns;
                },
              }
            ),
            getColumn: (e) => n._getAllFlatColumnsById()[e],
          };
        Object.assign(n, c);
        for (let e = 0; e < n._features.length; e++) {
          let t = n._features[e];
          null == t || null == t.createTable || t.createTable(n);
        }
        return n;
      }
      let G = (e, t, n, r, o, i, l) => {
        let s = {
          id: t,
          index: r,
          original: n,
          depth: o,
          parentId: l,
          _valuesCache: {},
          _uniqueValuesCache: {},
          getValue: (t) => {
            if (s._valuesCache.hasOwnProperty(t)) return s._valuesCache[t];
            let n = e.getColumn(t);
            if (null != n && n.accessorFn)
              return (
                (s._valuesCache[t] = n.accessorFn(s.original, r)),
                s._valuesCache[t]
              );
          },
          getUniqueValues: (t) => {
            if (s._uniqueValuesCache.hasOwnProperty(t))
              return s._uniqueValuesCache[t];
            let n = e.getColumn(t);
            return null != n && n.accessorFn
              ? (n.columnDef.getUniqueValues
                  ? (s._uniqueValuesCache[t] = n.columnDef.getUniqueValues(
                      s.original,
                      r
                    ))
                  : (s._uniqueValuesCache[t] = [s.getValue(t)]),
                s._uniqueValuesCache[t])
              : void 0;
          },
          renderValue: (t) => {
            var n;
            return null != (n = s.getValue(t))
              ? n
              : e.options.renderFallbackValue;
          },
          subRows: null != i ? i : [],
          getLeafRows: () => a(s.subRows, (e) => e.subRows),
          getParentRow: () => (s.parentId ? e.getRow(s.parentId, !0) : void 0),
          getParentRows: () => {
            let e = [],
              t = s;
            for (;;) {
              let n = t.getParentRow();
              if (!n) break;
              e.push(n), (t = n);
            }
            return e.reverse();
          },
          getAllCells: u(
            () => [e.getAllLeafColumns()],
            (t) =>
              t.map((t) =>
                (function (e, t, n, r) {
                  let o = {
                    id: `${t.id}_${n.id}`,
                    row: t,
                    column: n,
                    getValue: () => t.getValue(r),
                    renderValue: () => {
                      var t;
                      return null != (t = o.getValue())
                        ? t
                        : e.options.renderFallbackValue;
                    },
                    getContext: u(
                      () => [e, n, t, o],
                      (e, t, n, r) => ({
                        table: e,
                        column: t,
                        row: n,
                        cell: r,
                        getValue: r.getValue,
                        renderValue: r.renderValue,
                      }),
                      { key: !1, debug: () => e.options.debugAll }
                    ),
                  };
                  return (
                    e._features.forEach((r) => {
                      null == r.createCell || r.createCell(o, n, t, e);
                    }, {}),
                    o
                  );
                })(e, s, t, t.id)
              ),
            {
              key: !1,
              debug: () => {
                var t;
                return null != (t = e.options.debugAll)
                  ? t
                  : e.options.debugRows;
              },
            }
          ),
          _getAllCellsByColumnId: u(
            () => [s.getAllCells()],
            (e) => e.reduce((e, t) => ((e[t.column.id] = t), e), {}),
            {
              key: "row.getAllCellsByColumnId",
              debug: () => {
                var t;
                return null != (t = e.options.debugAll)
                  ? t
                  : e.options.debugRows;
              },
            }
          ),
        };
        for (let t = 0; t < e._features.length; t++) {
          let n = e._features[t];
          null == n || null == n.createRow || n.createRow(s, e);
        }
        return s;
      };
      function V() {
        return (e) =>
          u(
            () => [e.options.data],
            (t) => {
              let n = { rows: [], flatRows: [], rowsById: {} },
                r = function (t, o, i) {
                  void 0 === o && (o = 0);
                  let a = [];
                  for (let l = 0; l < t.length; l++) {
                    let s = G(
                      e,
                      e._getRowId(t[l], l, i),
                      t[l],
                      l,
                      o,
                      void 0,
                      null == i ? void 0 : i.id
                    );
                    if (
                      (n.flatRows.push(s),
                      (n.rowsById[s.id] = s),
                      a.push(s),
                      e.options.getSubRows)
                    ) {
                      var u;
                      (s.originalSubRows = e.options.getSubRows(t[l], l)),
                        null != (u = s.originalSubRows) &&
                          u.length &&
                          (s.subRows = r(s.originalSubRows, o + 1, s));
                    }
                  }
                  return a;
                };
              return (n.rows = r(t)), n;
            },
            {
              key: !1,
              debug: () => {
                var t;
                return null != (t = e.options.debugAll)
                  ? t
                  : e.options.debugTable;
              },
              onChange: () => {
                e._autoResetPageIndex();
              },
            }
          );
      }
      function z() {
        return (e) =>
          u(
            () => [e.getState().sorting, e.getPreSortedRowModel()],
            (t, n) => {
              if (!n.rows.length || !(null != t && t.length)) return n;
              let r = e.getState().sorting,
                o = [],
                i = r.filter((t) => {
                  var n;
                  return null == (n = e.getColumn(t.id))
                    ? void 0
                    : n.getCanSort();
                }),
                a = {};
              i.forEach((t) => {
                let n = e.getColumn(t.id);
                n &&
                  (a[t.id] = {
                    sortUndefined: n.columnDef.sortUndefined,
                    invertSorting: n.columnDef.invertSorting,
                    sortingFn: n.getSortingFn(),
                  });
              });
              let u = (e) => {
                let t = e.map((e) => ({ ...e }));
                return (
                  t.sort((e, t) => {
                    for (let r = 0; r < i.length; r += 1) {
                      var n;
                      let o = i[r],
                        u = a[o.id],
                        l = null != (n = null == o ? void 0 : o.desc) && n,
                        s = 0;
                      if (u.sortUndefined) {
                        let n = e.getValue(o.id),
                          r = t.getValue(o.id),
                          i = void 0 === n,
                          a = void 0 === r;
                        (i || a) &&
                          (s =
                            i && a
                              ? 0
                              : i
                              ? u.sortUndefined
                              : -u.sortUndefined);
                      }
                      if ((0 === s && (s = u.sortingFn(e, t, o.id)), 0 !== s))
                        return l && (s *= -1), u.invertSorting && (s *= -1), s;
                    }
                    return e.index - t.index;
                  }),
                  t.forEach((e) => {
                    var t;
                    o.push(e),
                      null != (t = e.subRows) &&
                        t.length &&
                        (e.subRows = u(e.subRows));
                  }),
                  t
                );
              };
              return { rows: u(n.rows), flatRows: o, rowsById: n.rowsById };
            },
            {
              key: !1,
              debug: () => {
                var t;
                return null != (t = e.options.debugAll)
                  ? t
                  : e.options.debugTable;
              },
              onChange: () => {
                e._autoResetPageIndex();
              },
            }
          );
      }
      function U() {
        return (e) =>
          u(
            () => [e.getState().grouping, e.getPreGroupedRowModel()],
            (t, n) => {
              if (!n.rows.length || !t.length) return n;
              let r = t.filter((t) => e.getColumn(t)),
                o = [],
                i = {},
                u = function (t, n, l) {
                  if ((void 0 === n && (n = 0), n >= r.length))
                    return t.map(
                      (e) => (
                        (e.depth = n),
                        o.push(e),
                        (i[e.id] = e),
                        e.subRows && (e.subRows = u(e.subRows, n + 1, e.id)),
                        e
                      )
                    );
                  let s = r[n];
                  return Array.from(
                    (function (e, t) {
                      let n = new Map();
                      return e.reduce((e, n) => {
                        let r = `${n.getGroupingValue(t)}`,
                          o = e.get(r);
                        return o ? o.push(n) : e.set(r, [n]), e;
                      }, n);
                    })(t, s).entries()
                  ).map((t, c) => {
                    let [f, h] = t,
                      d = `${s}:${f}`;
                    d = l ? `${l}>${d}` : d;
                    let p = u(h, n + 1, d),
                      g = n ? a(h, (e) => e.subRows) : h,
                      m = G(e, d, g[0].original, c, n, void 0, l);
                    return (
                      Object.assign(m, {
                        groupingColumnId: s,
                        groupingValue: f,
                        subRows: p,
                        leafRows: g,
                        getValue: (t) => {
                          if (r.includes(t)) {
                            if (m._valuesCache.hasOwnProperty(t))
                              return m._valuesCache[t];
                            if (h[0]) {
                              var n;
                              m._valuesCache[t] =
                                null != (n = h[0].getValue(t)) ? n : void 0;
                            }
                            return m._valuesCache[t];
                          }
                          if (m._groupingValuesCache.hasOwnProperty(t))
                            return m._groupingValuesCache[t];
                          let o = e.getColumn(t),
                            i = null == o ? void 0 : o.getAggregationFn();
                          if (i)
                            return (
                              (m._groupingValuesCache[t] = i(t, g, h)),
                              m._groupingValuesCache[t]
                            );
                        },
                      }),
                      p.forEach((e) => {
                        o.push(e), (i[e.id] = e);
                      }),
                      m
                    );
                  });
                },
                l = u(n.rows, 0);
              return (
                l.forEach((e) => {
                  o.push(e), (i[e.id] = e);
                }),
                { rows: l, flatRows: o, rowsById: i }
              );
            },
            {
              key: !1,
              debug: () => {
                var t;
                return null != (t = e.options.debugAll)
                  ? t
                  : e.options.debugTable;
              },
              onChange: () => {
                e._queue(() => {
                  e._autoResetExpanded(), e._autoResetPageIndex();
                });
              },
            }
          );
      }
      function Z() {
        return (e) =>
          u(
            () => [
              e.getState().expanded,
              e.getPreExpandedRowModel(),
              e.options.paginateExpandedRows,
            ],
            (e, t, n) =>
              t.rows.length &&
              (!0 === e || Object.keys(null != e ? e : {}).length) &&
              n
                ? q(t)
                : t,
            {
              key: !1,
              debug: () => {
                var t;
                return null != (t = e.options.debugAll)
                  ? t
                  : e.options.debugTable;
              },
            }
          );
      }
      function q(e) {
        let t = [],
          n = (e) => {
            var r;
            t.push(e),
              null != (r = e.subRows) &&
                r.length &&
                e.getIsExpanded() &&
                e.subRows.forEach(n);
          };
        return (
          e.rows.forEach(n),
          { rows: t, flatRows: e.flatRows, rowsById: e.rowsById }
        );
      }
      function X(e) {
        return (e) =>
          u(
            () => [
              e.getState().pagination,
              e.getPrePaginationRowModel(),
              e.options.paginateExpandedRows ? void 0 : e.getState().expanded,
            ],
            (t, n) => {
              let r;
              if (!n.rows.length) return n;
              let { pageSize: o, pageIndex: i } = t,
                { rows: a, flatRows: u, rowsById: l } = n,
                s = o * i;
              (a = a.slice(s, s + o)),
                ((r = e.options.paginateExpandedRows
                  ? { rows: a, flatRows: u, rowsById: l }
                  : q({ rows: a, flatRows: u, rowsById: l })).flatRows = []);
              let c = (e) => {
                r.flatRows.push(e), e.subRows.length && e.subRows.forEach(c);
              };
              return r.rows.forEach(c), r;
            },
            {
              key: !1,
              debug: () => {
                var t;
                return null != (t = e.options.debugAll)
                  ? t
                  : e.options.debugTable;
              },
            }
          );
      }
    },
    57042: function (e, t, n) {
      "use strict";
      t.Z = function () {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                r,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                else for (n in t) t[n] && (o && (o += " "), (o += n));
              }
              return o;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      };
    },
    46504: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return null == e || null == t
          ? NaN
          : e < t
          ? -1
          : e > t
          ? 1
          : e >= t
          ? 0
          : NaN;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    49766: function (e, t, n) {
      "use strict";
      var r = n(46504),
        o = n(75355),
        i = n(41624);
      let a = (0, o.Z)(r.Z),
        u = a.right;
      a.left, (0, o.Z)(i.Z).center, (t.ZP = u);
    },
    75355: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(46504);
      function o(e, t) {
        return null == e || null == t
          ? NaN
          : t < e
          ? -1
          : t > e
          ? 1
          : t >= e
          ? 0
          : NaN;
      }
      function i(e) {
        let t, n, i;
        function u(e, r, o = 0, i = e.length) {
          if (o < i) {
            if (0 !== t(r, r)) return i;
            do {
              let t = (o + i) >>> 1;
              0 > n(e[t], r) ? (o = t + 1) : (i = t);
            } while (o < i);
          }
          return o;
        }
        return (
          2 !== e.length
            ? ((t = r.Z),
              (n = (t, n) => (0, r.Z)(e(t), n)),
              (i = (t, n) => e(t) - n))
            : ((t = e === r.Z || e === o ? e : a), (n = e), (i = e)),
          {
            left: u,
            center: function (e, t, n = 0, r = e.length) {
              let o = u(e, t, n, r - 1);
              return o > n && i(e[o - 1], t) > -i(e[o], t) ? o - 1 : o;
            },
            right: function (e, r, o = 0, i = e.length) {
              if (o < i) {
                if (0 !== t(r, r)) return i;
                do {
                  let t = (o + i) >>> 1;
                  0 >= n(e[t], r) ? (o = t + 1) : (i = t);
                } while (o < i);
              }
              return o;
            },
          }
        );
      }
      function a() {
        return 0;
      }
    },
    41624: function (e, t, n) {
      "use strict";
      function r(e) {
        return null === e ? NaN : +e;
      }
      function* o(e, t) {
        if (void 0 === t)
          for (let t of e) null != t && (t = +t) >= t && (yield t);
        else {
          let n = -1;
          for (let r of e)
            null != (r = t(r, ++n, e)) && (r = +r) >= r && (yield r);
        }
      }
      n.d(t, {
        K: function () {
          return o;
        },
        Z: function () {
          return r;
        },
      });
    },
    27773: function (e, t, n) {
      "use strict";
      function r(e, t) {
        let n;
        if (void 0 === t)
          for (let t of e)
            null != t && (n < t || (void 0 === n && t >= t)) && (n = t);
        else {
          let r = -1;
          for (let o of e)
            null != (o = t(o, ++r, e)) &&
              (n < o || (void 0 === n && o >= o)) &&
              (n = o);
        }
        return n;
      }
      function o(e, t) {
        let n;
        if (void 0 === t)
          for (let t of e)
            null != t && (n > t || (void 0 === n && t >= t)) && (n = t);
        else {
          let r = -1;
          for (let o of e)
            null != (o = t(o, ++r, e)) &&
              (n > o || (void 0 === n && o >= o)) &&
              (n = o);
        }
        return n;
      }
      n.d(t, {
        ZP: function () {
          return s;
        },
        s7: function () {
          return c;
        },
      });
      var i = n(46504);
      function a(e, t) {
        return (
          (null == e || !(e >= e)) - (null == t || !(t >= t)) ||
          (e < t ? -1 : e > t ? 1 : 0)
        );
      }
      function u(e, t, n) {
        let r = e[t];
        (e[t] = e[n]), (e[n] = r);
      }
      var l = n(41624);
      function s(e, t, n) {
        if (
          !(
            !(s = (e = Float64Array.from((0, l.K)(e, n))).length) ||
            isNaN((t = +t))
          )
        ) {
          if (t <= 0 || s < 2) return o(e);
          if (t >= 1) return r(e);
          var s,
            c = (s - 1) * t,
            f = Math.floor(c),
            h = r(
              (function e(t, n, r = 0, o = 1 / 0, l) {
                if (
                  ((n = Math.floor(n)),
                  (r = Math.floor(Math.max(0, r))),
                  (o = Math.floor(Math.min(t.length - 1, o))),
                  !(r <= n && n <= o))
                )
                  return t;
                for (
                  l =
                    void 0 === l
                      ? a
                      : (function (e = i.Z) {
                          if (e === i.Z) return a;
                          if ("function" != typeof e)
                            throw TypeError("compare is not a function");
                          return (t, n) => {
                            let r = e(t, n);
                            return r || 0 === r
                              ? r
                              : (0 === e(n, n)) - (0 === e(t, t));
                          };
                        })(l);
                  o > r;

                ) {
                  if (o - r > 600) {
                    let i = o - r + 1,
                      a = n - r + 1,
                      u = Math.log(i),
                      s = 0.5 * Math.exp((2 * u) / 3),
                      c =
                        0.5 *
                        Math.sqrt((u * s * (i - s)) / i) *
                        (a - i / 2 < 0 ? -1 : 1),
                      f = Math.max(r, Math.floor(n - (a * s) / i + c)),
                      h = Math.min(o, Math.floor(n + ((i - a) * s) / i + c));
                    e(t, n, f, h, l);
                  }
                  let i = t[n],
                    a = r,
                    s = o;
                  for (u(t, r, n), l(t[o], i) > 0 && u(t, r, o); a < s; ) {
                    for (u(t, a, s), ++a, --s; 0 > l(t[a], i); ) ++a;
                    for (; l(t[s], i) > 0; ) --s;
                  }
                  0 === l(t[r], i) ? u(t, r, s) : u(t, ++s, o),
                    s <= n && (r = s + 1),
                    n <= s && (o = s - 1);
                }
                return t;
              })(e, f).subarray(0, f + 1)
            );
          return h + (o(e.subarray(f + 1)) - h) * (c - f);
        }
      }
      function c(e, t, n = l.Z) {
        if (!(!(r = e.length) || isNaN((t = +t)))) {
          if (t <= 0 || r < 2) return +n(e[0], 0, e);
          if (t >= 1) return +n(e[r - 1], r - 1, e);
          var r,
            o = (r - 1) * t,
            i = Math.floor(o),
            a = +n(e[i], i, e);
          return a + (+n(e[i + 1], i + 1, e) - a) * (o - i);
        }
      }
    },
    25742: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return en;
        },
      });
      class r {
        constructor() {
          (this._partials = new Float64Array(32)), (this._n = 0);
        }
        add(e) {
          let t = this._partials,
            n = 0;
          for (let r = 0; r < this._n && r < 32; r++) {
            let o = t[r],
              i = e + o,
              a = Math.abs(e) < Math.abs(o) ? e - (i - o) : o - (i - e);
            a && (t[n++] = a), (e = i);
          }
          return (t[n] = e), (this._n = n + 1), this;
        }
        valueOf() {
          let e = this._partials,
            t = this._n,
            n,
            r,
            o,
            i = 0;
          if (t > 0) {
            for (
              i = e[--t];
              t > 0 && ((i = (n = i) + (r = e[--t])), !(o = r - (i - n)));

            );
            t > 0 &&
              ((o < 0 && e[t - 1] < 0) || (o > 0 && e[t - 1] > 0)) &&
              ((n = i + (r = 2 * o)), r == n - i && (i = n));
          }
          return i;
        }
      }
      var o = Math.PI,
        i = o / 2,
        a = o / 4,
        u = 2 * o,
        l = 180 / o,
        s = o / 180,
        c = Math.abs,
        f = Math.atan2,
        h = Math.cos,
        d = Math.sin,
        p = Math.sqrt;
      function g() {}
      var m,
        v,
        y,
        b,
        _,
        w,
        E,
        S,
        C,
        M,
        P,
        R,
        A,
        x,
        I,
        N,
        T = new r(),
        k = new r(),
        O = {
          point: g,
          lineStart: g,
          lineEnd: g,
          polygonStart: function () {
            (T = new r()), (O.lineStart = F), (O.lineEnd = L);
          },
          polygonEnd: function () {
            var e = +T;
            k.add(e < 0 ? u + e : e),
              (this.lineStart = this.lineEnd = this.point = g);
          },
          sphere: function () {
            k.add(u);
          },
        };
      function F() {
        O.point = H;
      }
      function L() {
        j(R, A);
      }
      function H(e, t) {
        (O.point = j),
          (R = e),
          (A = t),
          (e *= s),
          (t *= s),
          (x = e),
          (I = h((t = t / 2 + a))),
          (N = d(t));
      }
      function j(e, t) {
        (e *= s), (t *= s);
        var n = e - x,
          r = n >= 0 ? 1 : -1,
          o = r * n,
          i = h((t = t / 2 + a)),
          u = d(t),
          l = N * u,
          c = I * i + l * h(o),
          p = l * r * d(o);
        T.add(f(p, c)), (x = e), (I = i), (N = u);
      }
      function B(e, t) {
        return [
          e[1] * t[2] - e[2] * t[1],
          e[2] * t[0] - e[0] * t[2],
          e[0] * t[1] - e[1] * t[0],
        ];
      }
      function D(e, t) {
        e && V.hasOwnProperty(e.type) && V[e.type](e, t);
      }
      var G = {
          Feature: function (e, t) {
            D(e.geometry, t);
          },
          FeatureCollection: function (e, t) {
            for (var n = e.features, r = -1, o = n.length; ++r < o; )
              D(n[r].geometry, t);
          },
        },
        V = {
          Sphere: function (e, t) {
            t.sphere();
          },
          Point: function (e, t) {
            (e = e.coordinates), t.point(e[0], e[1], e[2]);
          },
          MultiPoint: function (e, t) {
            for (var n = e.coordinates, r = -1, o = n.length; ++r < o; )
              (e = n[r]), t.point(e[0], e[1], e[2]);
          },
          LineString: function (e, t) {
            z(e.coordinates, t, 0);
          },
          MultiLineString: function (e, t) {
            for (var n = e.coordinates, r = -1, o = n.length; ++r < o; )
              z(n[r], t, 0);
          },
          Polygon: function (e, t) {
            U(e.coordinates, t);
          },
          MultiPolygon: function (e, t) {
            for (var n = e.coordinates, r = -1, o = n.length; ++r < o; )
              U(n[r], t);
          },
          GeometryCollection: function (e, t) {
            for (var n = e.geometries, r = -1, o = n.length; ++r < o; )
              D(n[r], t);
          },
        };
      function z(e, t, n) {
        var r,
          o = -1,
          i = e.length - n;
        for (t.lineStart(); ++o < i; ) (r = e[o]), t.point(r[0], r[1], r[2]);
        t.lineEnd();
      }
      function U(e, t) {
        var n = -1,
          r = e.length;
        for (t.polygonStart(); ++n < r; ) z(e[n], t, 1);
        t.polygonEnd();
      }
      var Z = {
        point: q,
        lineStart: K,
        lineEnd: Y,
        polygonStart: function () {
          (Z.point = $),
            (Z.lineStart = W),
            (Z.lineEnd = J),
            (C = new r()),
            O.polygonStart();
        },
        polygonEnd: function () {
          O.polygonEnd(),
            (Z.point = q),
            (Z.lineStart = K),
            (Z.lineEnd = Y),
            T < 0
              ? ((m = -(y = 180)), (v = -(b = 90)))
              : C > 1e-6
              ? (b = 90)
              : C < -0.000001 && (v = -90),
            (P[0] = m),
            (P[1] = y);
        },
        sphere: function () {
          (m = -(y = 180)), (v = -(b = 90));
        },
      };
      function q(e, t) {
        M.push((P = [(m = e), (y = e)])), t < v && (v = t), t > b && (b = t);
      }
      function X(e, t) {
        var n =
          ((u = (a = [e * s, t * s])[0]),
          [(w = h((g = a[1]))) * h(u), w * d(u), d(g)]);
        if (S) {
          var r = B(S, n),
            o = B([r[1], -r[0], 0], r);
          (C = p((E = o)[0] * E[0] + E[1] * E[1] + E[2] * E[2])),
            (E[0] /= C),
            (E[1] /= C),
            (E[2] /= C),
            (o = [
              f((R = o)[1], R[0]),
              (A = R[2]) > 1 ? i : A < -1 ? -i : Math.asin(A),
            ]);
          var a,
            u,
            g,
            w,
            E,
            C,
            R,
            A,
            x,
            I = e - _,
            N = I > 0 ? 1 : -1,
            T = o[0] * l * N,
            k = c(I) > 180;
          k ^ (N * _ < T && T < N * e)
            ? (x = o[1] * l) > b && (b = x)
            : k ^ (N * _ < (T = ((T + 360) % 360) - 180) && T < N * e)
            ? (x = -o[1] * l) < v && (v = x)
            : (t < v && (v = t), t > b && (b = t)),
            k
              ? e < _
                ? Q(m, e) > Q(m, y) && (y = e)
                : Q(e, y) > Q(m, y) && (m = e)
              : y >= m
              ? (e < m && (m = e), e > y && (y = e))
              : e > _
              ? Q(m, e) > Q(m, y) && (y = e)
              : Q(e, y) > Q(m, y) && (m = e);
        } else M.push((P = [(m = e), (y = e)]));
        t < v && (v = t), t > b && (b = t), (S = n), (_ = e);
      }
      function K() {
        Z.point = X;
      }
      function Y() {
        (P[0] = m), (P[1] = y), (Z.point = q), (S = null);
      }
      function $(e, t) {
        if (S) {
          var n = e - _;
          C.add(c(n) > 180 ? n + (n > 0 ? 360 : -360) : n);
        } else (w = e), (E = t);
        O.point(e, t), X(e, t);
      }
      function W() {
        O.lineStart();
      }
      function J() {
        $(w, E),
          O.lineEnd(),
          c(C) > 1e-6 && (m = -(y = 180)),
          (P[0] = m),
          (P[1] = y),
          (S = null);
      }
      function Q(e, t) {
        return (t -= e) < 0 ? t + 360 : t;
      }
      function ee(e, t) {
        return e[0] - t[0];
      }
      function et(e, t) {
        return e[0] <= e[1] ? e[0] <= t && t <= e[1] : t < e[0] || e[1] < t;
      }
      function en(e) {
        var t, n, r, o, i, a, u;
        if (
          ((b = y = -(m = v = 1 / 0)),
          (M = []),
          e && G.hasOwnProperty(e.type) ? G[e.type](e, Z) : D(e, Z),
          (n = M.length))
        ) {
          for (M.sort(ee), t = 1, i = [(r = M[0])]; t < n; ++t)
            et(r, (o = M[t])[0]) || et(r, o[1])
              ? (Q(r[0], o[1]) > Q(r[0], r[1]) && (r[1] = o[1]),
                Q(o[0], r[1]) > Q(r[0], r[1]) && (r[0] = o[0]))
              : i.push((r = o));
          for (
            a = -1 / 0, n = i.length - 1, t = 0, r = i[n];
            t <= n;
            r = o, ++t
          )
            (o = i[t]),
              (u = Q(r[1], o[0])) > a && ((a = u), (m = o[0]), (y = r[1]));
        }
        return (
          (M = P = null),
          m === 1 / 0 || v === 1 / 0
            ? [
                [NaN, NaN],
                [NaN, NaN],
              ]
            : [
                [m, v],
                [y, b],
              ]
        );
      }
    },
    63757: function (e, t, n) {
      "use strict";
      function r(e, t) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(e);
            break;
          default:
            this.range(t).domain(e);
        }
        return this;
      }
      function o(e, t) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            "function" == typeof e ? this.interpolator(e) : this.range(e);
            break;
          default:
            this.domain(e),
              "function" == typeof t ? this.interpolator(t) : this.range(t);
        }
        return this;
      }
      n.d(t, {
        O: function () {
          return o;
        },
        o: function () {
          return r;
        },
      });
    },
    75358: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return function e() {
            var t,
              n = [],
              u = [],
              l = [];
            function s() {
              var e = 0,
                t = Math.max(1, u.length);
              for (l = Array(t - 1); ++e < t; ) l[e - 1] = (0, r.s7)(n, e / t);
              return c;
            }
            function c(e) {
              return null == e || isNaN((e = +e)) ? t : u[(0, o.ZP)(l, e)];
            }
            return (
              (c.invertExtent = function (e) {
                var t = u.indexOf(e);
                return t < 0
                  ? [NaN, NaN]
                  : [
                      t > 0 ? l[t - 1] : n[0],
                      t < l.length ? l[t] : n[n.length - 1],
                    ];
              }),
              (c.domain = function (e) {
                if (!arguments.length) return n.slice();
                for (let t of ((n = []), e))
                  null == t || isNaN((t = +t)) || n.push(t);
                return n.sort(i.Z), s();
              }),
              (c.range = function (e) {
                return arguments.length
                  ? ((u = Array.from(e)), s())
                  : u.slice();
              }),
              (c.unknown = function (e) {
                return arguments.length ? ((t = e), c) : t;
              }),
              (c.quantiles = function () {
                return l.slice();
              }),
              (c.copy = function () {
                return e().domain(n).range(u).unknown(t);
              }),
              a.o.apply(c, arguments)
            );
          };
        },
      });
      var r = n(27773),
        o = n(49766),
        i = n(46504),
        a = n(63757);
    },
  },
]);
