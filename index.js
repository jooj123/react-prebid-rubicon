module.exports = (function(e) {
    var t = {};
    function r(n) {
        if (t[n]) return t[n].exports;
        var i = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
        (r.m = e),
        (r.c = t),
        (r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.t = function(e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
                (r.r(n),
                Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
            )
                for (var i in e)
                    r.d(
                        n,
                        i,
                        function(t) {
                            return e[t];
                        }.bind(null, i)
                    );
            return n;
        }),
        (r.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return r.d(t, 'a', t), t;
        }),
        (r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ''),
        r((r.s = 6))
    );
})([
    function(e, t) {
        e.exports = require('react');
    },
    function(e, t) {
        e.exports = require('prop-types');
    },
    function(e, t, r) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = o(r(1)),
            i = o(r(3));
        function o(e) {
            return e && e.__esModule ? e : { default: e };
        }
        t.default = n.default.shape({
            path: n.default.string,
            targeting: n.default.object,
            prebid: n.default.shape({
                debug: n.default.bool,
                bidderTimeout: n.default.number,
                enableSendAllBids: n.default.bool,
                bidderSequence: n.default.oneOf(['random', 'fixed']),
                publisherDomain: n.default.string,
                cookieSyncDelay: n.default.number,
                priceGranularity: n.default.oneOfType([
                    n.default.oneOf(['low', 'medium', 'high', 'auto', 'dense']),
                    n.default.shape({
                        buckets: n.default.arrayOf(
                            n.default.shape({
                                precision: n.default.number,
                                min: n.default.number.isRequired,
                                max: n.default.number.isRequired,
                                increment: n.default.number.isRequired
                            })
                        ).isRequired
                    })
                ]),
                mediaTypePriceGranularity: n.default.shape({
                    video: n.default.oneOfType([
                        n.default.oneOf(['low', 'medium', 'high', 'auto', 'dense']),
                        n.default.shape({
                            buckets: n.default.arrayOf(
                                n.default.shape({
                                    precision: n.default.number,
                                    min: n.default.number.isRequired,
                                    max: n.default.number.isRequired,
                                    increment: n.default.number.isRequired
                                })
                            ).isRequired
                        })
                    ]),
                    banner: n.default.oneOfType([
                        n.default.oneOf(['low', 'medium', 'high', 'auto', 'dense']),
                        n.default.shape({
                            buckets: n.default.arrayOf(
                                n.default.shape({
                                    precision: n.default.number,
                                    min: n.default.number.isRequired,
                                    max: n.default.number.isRequired,
                                    increment: n.default.number.isRequired
                                })
                            ).isRequired
                        })
                    ]),
                    native: n.default.oneOfType([
                        n.default.oneOf(['low', 'medium', 'high', 'auto', 'dense']),
                        n.default.shape({
                            buckets: n.default.arrayOf(
                                n.default.shape({
                                    precision: n.default.number,
                                    min: n.default.number.isRequired,
                                    max: n.default.number.isRequired,
                                    increment: n.default.number.isRequired
                                })
                            ).isRequired
                        })
                    ])
                }),
                sizeConfig: n.default.arrayOf(
                    n.default.shape({
                        mediaQuery: n.default.string.isRequired,
                        sizesSupported: n.default.arrayOf(
                            n.default.oneOfType([n.default.string, n.default.arrayOf(n.default.number)])
                        ),
                        labels: n.default.arrayOf(n.default.string)
                    })
                )
            }),
            sizeMappings: n.default.objectOf(
                n.default.arrayOf(
                    n.default.shape({
                        viewPortSize: n.default.arrayOf(n.default.number).isRequired,
                        sizes: n.default.arrayOf(
                            n.default.oneOfType([n.default.string, n.default.arrayOf(n.default.number)])
                        ).isRequired
                    })
                )
            ),
            slots: n.default.arrayOf(i.default),
            customEvents: n.default.objectOf(
                n.default.shape({ eventMessagePrefix: n.default.string.isRequired, divIdPrefix: n.default.string })
            )
        });
    },
    function(e, t, r) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n,
            i = r(1),
            o = (n = i) && n.__esModule ? n : { default: n };
        t.default = o.default.shape({
            id: o.default.string.isRequired,
            path: o.default.string,
            collapseEmptyDiv: o.default.arrayOf(o.default.bool),
            targeting: o.default.object,
            sizes: o.default.oneOfType([
                o.default.oneOfType([o.default.string, o.default.arrayOf(o.default.number)]),
                o.default.arrayOf(o.default.oneOfType([o.default.string, o.default.arrayOf(o.default.number)]))
            ]),
            sizeMappingName: o.default.string,
            prebid: o.default.arrayOf(
                o.default.shape({
                    mediaTypes: o.default.objectOf(
                        o.default.shape({ sizes: o.default.arrayOf(o.default.arrayOf(o.default.number)) })
                    ).isRequired,
                    bids: o.default.arrayOf(
                        o.default.shape({
                            bidder: o.default.string.isRequired,
                            params: o.default.object,
                            labelAny: o.default.arrayOf(o.default.string),
                            labelAll: o.default.arrayOf(o.default.string)
                        })
                    ).isRequired
                })
            )
        });
    },
    function(e, t, r) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n,
            i = r(0),
            o = (n = i) && n.__esModule ? n : { default: n };
        t.default = o.default.createContext(function() {});
    },
    function(e, t, r) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n =
                Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                    }
                    return e;
                },
            i = a(r(0)),
            o = a(r(4));
        function a(e) {
            return e && e.__esModule ? e : { default: e };
        }
        t.default = function(e) {
            return function(t) {
                return i.default.createElement(o.default.Consumer, null, function(r) {
                    return i.default.createElement(e, n({}, t, { activate: r }));
                });
            };
        };
    },
    function(e, t, r) {
        r(7), (e.exports = r(9));
    },
    function(e, t, r) {
        'use strict';
        (function(e) {
            var t =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function(e) {
                          return typeof e;
                      }
                    : function(e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e;
                      };
            !(function(r) {
                var n,
                    i = Object.prototype,
                    o = i.hasOwnProperty,
                    a = 'function' == typeof Symbol ? Symbol : {},
                    u = a.iterator || '@@iterator',
                    l = a.asyncIterator || '@@asyncIterator',
                    s = a.toStringTag || '@@toStringTag',
                    f = 'object' === t(e),
                    c = r.regeneratorRuntime;
                if (c) f && (e.exports = c);
                else {
                    (c = r.regeneratorRuntime = f ? e.exports : {}).wrap = O;
                    var d = 'suspendedStart',
                        p = 'suspendedYield',
                        h = 'executing',
                        y = 'completed',
                        v = {},
                        m = {};
                    m[u] = function() {
                        return this;
                    };
                    var b = Object.getPrototypeOf,
                        g = b && b(b(R([])));
                    g && g !== i && o.call(g, u) && (m = g);
                    var w = (E.prototype = S.prototype = Object.create(m));
                    (P.prototype = w.constructor = E),
                        (E.constructor = P),
                        (E[s] = P.displayName = 'GeneratorFunction'),
                        (c.isGeneratorFunction = function(e) {
                            var t = 'function' == typeof e && e.constructor;
                            return !!t && (t === P || 'GeneratorFunction' === (t.displayName || t.name));
                        }),
                        (c.mark = function(e) {
                            return (
                                Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, E)
                                    : ((e.__proto__ = E), s in e || (e[s] = 'GeneratorFunction')),
                                (e.prototype = Object.create(w)),
                                e
                            );
                        }),
                        (c.awrap = function(e) {
                            return { __await: e };
                        }),
                        _(x.prototype),
                        (x.prototype[l] = function() {
                            return this;
                        }),
                        (c.AsyncIterator = x),
                        (c.async = function(e, t, r, n) {
                            var i = new x(O(e, t, r, n));
                            return c.isGeneratorFunction(t)
                                ? i
                                : i.next().then(function(e) {
                                      return e.done ? e.value : i.next();
                                  });
                        }),
                        _(w),
                        (w[s] = 'Generator'),
                        (w[u] = function() {
                            return this;
                        }),
                        (w.toString = function() {
                            return '[object Generator]';
                        }),
                        (c.keys = function(e) {
                            var t = [];
                            for (var r in e) t.push(r);
                            return (
                                t.reverse(),
                                function r() {
                                    for (; t.length; ) {
                                        var n = t.pop();
                                        if (n in e) return (r.value = n), (r.done = !1), r;
                                    }
                                    return (r.done = !0), r;
                                }
                            );
                        }),
                        (c.values = R),
                        (M.prototype = {
                            constructor: M,
                            reset: function(e) {
                                if (
                                    ((this.prev = 0),
                                    (this.next = 0),
                                    (this.sent = this._sent = n),
                                    (this.done = !1),
                                    (this.delegate = null),
                                    (this.method = 'next'),
                                    (this.arg = n),
                                    this.tryEntries.forEach(T),
                                    !e)
                                )
                                    for (var t in this)
                                        't' === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n);
                            },
                            stop: function() {
                                this.done = !0;
                                var e = this.tryEntries[0].completion;
                                if ('throw' === e.type) throw e.arg;
                                return this.rval;
                            },
                            dispatchException: function(e) {
                                if (this.done) throw e;
                                var t = this;
                                function r(r, i) {
                                    return (
                                        (u.type = 'throw'),
                                        (u.arg = e),
                                        (t.next = r),
                                        i && ((t.method = 'next'), (t.arg = n)),
                                        !!i
                                    );
                                }
                                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var a = this.tryEntries[i],
                                        u = a.completion;
                                    if ('root' === a.tryLoc) return r('end');
                                    if (a.tryLoc <= this.prev) {
                                        var l = o.call(a, 'catchLoc'),
                                            s = o.call(a, 'finallyLoc');
                                        if (l && s) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                                        } else if (l) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                        } else {
                                            if (!s) throw new Error('try statement without catch or finally');
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                                        }
                                    }
                                }
                            },
                            abrupt: function(e, t) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var n = this.tryEntries[r];
                                    if (n.tryLoc <= this.prev && o.call(n, 'finallyLoc') && this.prev < n.finallyLoc) {
                                        var i = n;
                                        break;
                                    }
                                }
                                i &&
                                    ('break' === e || 'continue' === e) &&
                                    i.tryLoc <= t &&
                                    t <= i.finallyLoc &&
                                    (i = null);
                                var a = i ? i.completion : {};
                                return (
                                    (a.type = e),
                                    (a.arg = t),
                                    i ? ((this.method = 'next'), (this.next = i.finallyLoc), v) : this.complete(a)
                                );
                            },
                            complete: function(e, t) {
                                if ('throw' === e.type) throw e.arg;
                                return (
                                    'break' === e.type || 'continue' === e.type
                                        ? (this.next = e.arg)
                                        : 'return' === e.type
                                        ? ((this.rval = this.arg = e.arg),
                                          (this.method = 'return'),
                                          (this.next = 'end'))
                                        : 'normal' === e.type && t && (this.next = t),
                                    v
                                );
                            },
                            finish: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var r = this.tryEntries[t];
                                    if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), T(r), v;
                                }
                            },
                            catch: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var r = this.tryEntries[t];
                                    if (r.tryLoc === e) {
                                        var n = r.completion;
                                        if ('throw' === n.type) {
                                            var i = n.arg;
                                            T(r);
                                        }
                                        return i;
                                    }
                                }
                                throw new Error('illegal catch attempt');
                            },
                            delegateYield: function(e, t, r) {
                                return (
                                    (this.delegate = { iterator: R(e), resultName: t, nextLoc: r }),
                                    'next' === this.method && (this.arg = n),
                                    v
                                );
                            }
                        });
                }
                function O(e, t, r, n) {
                    var i = t && t.prototype instanceof S ? t : S,
                        o = Object.create(i.prototype),
                        a = new M(n || []);
                    return (
                        (o._invoke = (function(e, t, r) {
                            var n = d;
                            return function(i, o) {
                                if (n === h) throw new Error('Generator is already running');
                                if (n === y) {
                                    if ('throw' === i) throw o;
                                    return L();
                                }
                                for (r.method = i, r.arg = o; ; ) {
                                    var a = r.delegate;
                                    if (a) {
                                        var u = k(a, r);
                                        if (u) {
                                            if (u === v) continue;
                                            return u;
                                        }
                                    }
                                    if ('next' === r.method) r.sent = r._sent = r.arg;
                                    else if ('throw' === r.method) {
                                        if (n === d) throw ((n = y), r.arg);
                                        r.dispatchException(r.arg);
                                    } else 'return' === r.method && r.abrupt('return', r.arg);
                                    n = h;
                                    var l = j(e, t, r);
                                    if ('normal' === l.type) {
                                        if (((n = r.done ? y : p), l.arg === v)) continue;
                                        return { value: l.arg, done: r.done };
                                    }
                                    'throw' === l.type && ((n = y), (r.method = 'throw'), (r.arg = l.arg));
                                }
                            };
                        })(e, r, a)),
                        o
                    );
                }
                function j(e, t, r) {
                    try {
                        return { type: 'normal', arg: e.call(t, r) };
                    } catch (e) {
                        return { type: 'throw', arg: e };
                    }
                }
                function S() {}
                function P() {}
                function E() {}
                function _(e) {
                    ['next', 'throw', 'return'].forEach(function(t) {
                        e[t] = function(e) {
                            return this._invoke(t, e);
                        };
                    });
                }
                function x(e) {
                    var r;
                    this._invoke = function(n, i) {
                        function a() {
                            return new Promise(function(r, a) {
                                !(function r(n, i, a, u) {
                                    var l = j(e[n], e, i);
                                    if ('throw' !== l.type) {
                                        var s = l.arg,
                                            f = s.value;
                                        return f &&
                                            'object' === (void 0 === f ? 'undefined' : t(f)) &&
                                            o.call(f, '__await')
                                            ? Promise.resolve(f.__await).then(
                                                  function(e) {
                                                      r('next', e, a, u);
                                                  },
                                                  function(e) {
                                                      r('throw', e, a, u);
                                                  }
                                              )
                                            : Promise.resolve(f).then(function(e) {
                                                  (s.value = e), a(s);
                                              }, u);
                                    }
                                    u(l.arg);
                                })(n, i, r, a);
                            });
                        }
                        return (r = r ? r.then(a, a) : a());
                    };
                }
                function k(e, t) {
                    var r = e.iterator[t.method];
                    if (r === n) {
                        if (((t.delegate = null), 'throw' === t.method)) {
                            if (
                                e.iterator.return &&
                                ((t.method = 'return'), (t.arg = n), k(e, t), 'throw' === t.method)
                            )
                                return v;
                            (t.method = 'throw'),
                                (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
                        }
                        return v;
                    }
                    var i = j(r, e.iterator, t.arg);
                    if ('throw' === i.type) return (t.method = 'throw'), (t.arg = i.arg), (t.delegate = null), v;
                    var o = i.arg;
                    return o
                        ? o.done
                            ? ((t[e.resultName] = o.value),
                              (t.next = e.nextLoc),
                              'return' !== t.method && ((t.method = 'next'), (t.arg = n)),
                              (t.delegate = null),
                              v)
                            : o
                        : ((t.method = 'throw'),
                          (t.arg = new TypeError('iterator result is not an object')),
                          (t.delegate = null),
                          v);
                }
                function q(e) {
                    var t = { tryLoc: e[0] };
                    1 in e && (t.catchLoc = e[1]),
                        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                        this.tryEntries.push(t);
                }
                function T(e) {
                    var t = e.completion || {};
                    (t.type = 'normal'), delete t.arg, (e.completion = t);
                }
                function M(e) {
                    (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(q, this), this.reset(!0);
                }
                function R(e) {
                    if (e) {
                        var t = e[u];
                        if (t) return t.call(e);
                        if ('function' == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                i = function t() {
                                    for (; ++r < e.length; )
                                        if (o.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                                    return (t.value = n), (t.done = !0), t;
                                };
                            return (i.next = i);
                        }
                    }
                    return { next: L };
                }
                function L() {
                    return { value: n, done: !0 };
                }
            })(
                (function() {
                    return this;
                })() || Function('return this')()
            );
        }.call(this, r(8)(e)));
    },
    function(e, t, r) {
        'use strict';
        e.exports = function(e) {
            return (
                e.webpackPolyfill ||
                    ((e.deprecate = function() {}),
                    (e.paths = []),
                    e.children || (e.children = []),
                    Object.defineProperty(e, 'loaded', {
                        enumerable: !0,
                        get: function() {
                            return e.l;
                        }
                    }),
                    Object.defineProperty(e, 'id', {
                        enumerable: !0,
                        get: function() {
                            return e.i;
                        }
                    }),
                    (e.webpackPolyfill = 1)),
                e
            );
        };
    },
    function(e, t, r) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = r(10);
        Object.defineProperty(t, 'AdvertisingProvider', {
            enumerable: !0,
            get: function() {
                return l(n).default;
            }
        });
        var i = r(12);
        Object.defineProperty(t, 'AdvertisingSlot', {
            enumerable: !0,
            get: function() {
                return l(i).default;
            }
        });
        var o = r(5);
        Object.defineProperty(t, 'connectToAdServer', {
            enumerable: !0,
            get: function() {
                return l(o).default;
            }
        });
        var a = r(2);
        Object.defineProperty(t, 'AdvertisingConfigPropType', {
            enumerable: !0,
            get: function() {
                return l(a).default;
            }
        });
        var u = r(3);
        function l(e) {
            return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, 'AdvertisingSlotConfigPropType', {
            enumerable: !0,
            get: function() {
                return l(u).default;
            }
        });
    },
    function(e, t, r) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = (function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            'value' in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n);
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t;
                };
            })(),
            i = r(0),
            o = l(i),
            a = l(r(11)),
            u = (l(r(1)), l(r(2)), l(r(4)));
        function l(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var s = (function(e) {
            function t(e) {
                !(function(e, t) {
                    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, t);
                var r = (function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return (
                    (r.advertising = r.props.active ? new a.default(e.config, e.plugins) : null),
                    (r.activate = r.props.active ? r.advertising.activate.bind(r.advertising) : function() {}),
                    r
                );
            }
            return (
                (function(e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
                    })),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, i.Component),
                n(t, [
                    {
                        key: 'componentDidMount',
                        value: function() {
                            this.advertising && this.advertising.setup();
                        }
                    },
                    {
                        key: 'componentWillUnmount',
                        value: function() {
                            this.advertising && this.advertising.teardown();
                        }
                    },
                    {
                        key: 'render',
                        value: function() {
                            return o.default.createElement(
                                u.default.Provider,
                                { value: this.activate },
                                this.props.children
                            );
                        }
                    }
                ]),
                t
            );
        })();
        (t.default = s), (s.defaultProps = { active: !0 });
    },
    function(e, t, r) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = (function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e))
                        return (function(e, t) {
                            var r = [],
                                n = !0,
                                i = !1,
                                o = void 0;
                            try {
                                for (
                                    var a, u = e[Symbol.iterator]();
                                    !(n = (a = u.next()).done) && (r.push(a.value), !t || r.length !== t);
                                    n = !0
                                );
                            } catch (e) {
                                (i = !0), (o = e);
                            } finally {
                                try {
                                    !n && u.return && u.return();
                                } finally {
                                    if (i) throw o;
                                }
                            }
                            return r;
                        })(e, t);
                    throw new TypeError('Invalid attempt to destructure non-iterable instance');
                };
            })(),
            i = (function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            'value' in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n);
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t;
                };
            })();
        function o(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, r) {
                    return (function n(i, o) {
                        try {
                            var a = t[i](o),
                                u = a.value;
                        } catch (e) {
                            return void r(e);
                        }
                        if (!a.done)
                            return Promise.resolve(u).then(
                                function(e) {
                                    n('next', e);
                                },
                                function(e) {
                                    n('throw', e);
                                }
                            );
                        e(u);
                    })('next');
                });
            };
        }
        var a = Symbol('define GTP size mappings (private method)'),
            u = Symbol('get GPT size mapping (private method)'),
            l = Symbol('define slots (private method)'),
            s = Symbol('display slots (private method)'),
            f = Symbol('setup Prebid (private method)'),
            c = Symbol('teardown Prebid (private method)'),
            d = Symbol('setup GPT (private method)'),
            p = Symbol('teardown GPT (private method)'),
            h = Symbol('call DFP slots in setup (private method)'),
            y = Symbol('call DFP by activate (private method)'),
            v = Symbol('setup custom events (private method)'),
            m = Symbol('setup custom event (private method)'),
            b = Symbol('teardown custom events (private method)'),
            g = Symbol('with queue (private method)'),
            w = Symbol('queue for GPT (private method)'),
            O = Symbol('queue for Prebid (private method)'),
            j = Symbol('set default config (private method)'),
            S = Symbol('execute plugins (private method)'),
            P = (function() {
                function e(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    !(function(e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, e),
                        (this.config = t),
                        (this.slots = {}),
                        (this.plugins = r),
                        (this.gptSizeMappings = {}),
                        (this.customEventCallbacks = {}),
                        (this.customEventHandlers = {}),
                        (this.queue = []),
                        this[j]();
                }
                return (
                    i(
                        e,
                        [
                            {
                                key: 'setup',
                                value: (function() {
                                    var t = o(
                                        regeneratorRuntime.mark(function t() {
                                            var r,
                                                n,
                                                i,
                                                o,
                                                a,
                                                u,
                                                l,
                                                s,
                                                c,
                                                p,
                                                y = this;
                                            return regeneratorRuntime.wrap(
                                                function(t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                return (
                                                                    (r = this.slots),
                                                                    (n = this.queue),
                                                                    this[v](),
                                                                    (t.next = 4),
                                                                    Promise.all([
                                                                        e[O](this[f].bind(this)),
                                                                        e[w](this[d].bind(this))
                                                                    ])
                                                                );
                                                            case 4:
                                                                if (0 !== n.length) {
                                                                    t.next = 6;
                                                                    break;
                                                                }
                                                                return t.abrupt('return');
                                                            case 6:
                                                                for (
                                                                    i = function(e) {
                                                                        var t = e.id,
                                                                            r = e.customEventHandlers;
                                                                        Object.keys(r).forEach(function(e) {
                                                                            return (
                                                                                y.customEventCallbacks[e] ||
                                                                                    (y.customEventCallbacks[e] = {}),
                                                                                (y.customEventCallbacks[e][t] = r[e])
                                                                            );
                                                                        });
                                                                    },
                                                                        o = !0,
                                                                        a = !1,
                                                                        u = void 0,
                                                                        t.prev = 10,
                                                                        l = n[Symbol.iterator]();
                                                                    !(o = (s = l.next()).done);
                                                                    o = !0
                                                                )
                                                                    (c = s.value), i(c);
                                                                t.next = 18;
                                                                break;
                                                            case 14:
                                                                (t.prev = 14),
                                                                    (t.t0 = t.catch(10)),
                                                                    (a = !0),
                                                                    (u = t.t0);
                                                            case 18:
                                                                (t.prev = 18),
                                                                    (t.prev = 19),
                                                                    !o && l.return && l.return();
                                                            case 21:
                                                                if (((t.prev = 21), !a)) {
                                                                    t.next = 24;
                                                                    break;
                                                                }
                                                                throw u;
                                                            case 24:
                                                                return t.finish(21);
                                                            case 25:
                                                                return t.finish(18);
                                                            case 26:
                                                                n.map(function(e) {
                                                                    return e.id;
                                                                }),
                                                                    (p = n.map(function(e) {
                                                                        var t = e.id;
                                                                        return r[t];
                                                                    })),
                                                                    e[w](
                                                                        function() {
                                                                            return e[O](function() {
                                                                                return window.pbjs.rp.requestBids({
                                                                                    callback: y[h],
                                                                                    gptSlotObjects: p
                                                                                });
                                                                            });
                                                                        },
                                                                        setTimeout(function() {
                                                                            y[h](p);
                                                                        }, 2e3)
                                                                    );
                                                            case 29:
                                                            case 'end':
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this,
                                                [[10, 14, 18, 26], [19, , 21, 25]]
                                            );
                                        })
                                    );
                                    return function() {
                                        return t.apply(this, arguments);
                                    };
                                })()
                            },
                            {
                                key: 'teardown',
                                value: (function() {
                                    var t = o(
                                        regeneratorRuntime.mark(function t() {
                                            return regeneratorRuntime.wrap(
                                                function(t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                return (
                                                                    this[b](),
                                                                    (t.next = 3),
                                                                    Promise.all([
                                                                        e[O](this[c].bind(this)),
                                                                        e[w](this[p].bind(this))
                                                                    ])
                                                                );
                                                            case 3:
                                                                (this.slots = {}),
                                                                    (this.gptSizeMappings = {}),
                                                                    (this.queue = {});
                                                            case 6:
                                                            case 'end':
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this
                                            );
                                        })
                                    );
                                    return function() {
                                        return t.apply(this, arguments);
                                    };
                                })()
                            },
                            {
                                key: 'activate',
                                value: function(t) {
                                    var r = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        i = this.slots;
                                    0 !== Object.values(i).length
                                        ? (Object.keys(n).forEach(function(e) {
                                              return (
                                                  r.customEventCallbacks[e] || (r.customEventCallbacks[e] = {}),
                                                  (r.customEventCallbacks[e][t] = n[e])
                                              );
                                          }),
                                          e[w](
                                              function() {
                                                  return e[O](function() {
                                                      return window.pbjs.rp.requestBids({
                                                          callback: r[y],
                                                          gptSlotObjects: [i[t]]
                                                      });
                                                  });
                                              },
                                              setTimeout(function() {
                                                  r[y]([i[t]]);
                                              }, 2e3)
                                          ))
                                        : this.queue.push({ id: t, customEventHandlers: n });
                                }
                            },
                            {
                                key: h,
                                value: function(e) {
                                    window.pbjs.adserverRequestSent ||
                                        ((window.pbjs.adserverRequestSent = !0), window.googletag.pubads().refresh(e));
                                }
                            },
                            {
                                key: y,
                                value: function(e) {
                                    var t = e[0].getSlotElementId();
                                    window.pbjs[t] || ((window.pbjs[t] = !0), window.googletag.pubads().refresh(e));
                                }
                            },
                            {
                                key: v,
                                value: function() {
                                    var e = this;
                                    this.config.customEvents &&
                                        Object.keys(this.config.customEvents).forEach(function(t) {
                                            return e[m](t, e.config.customEvents[t]);
                                        });
                                }
                            },
                            {
                                key: m,
                                value: function(e, t) {
                                    var r = t.eventMessagePrefix,
                                        n = t.divIdPrefix,
                                        i = this.customEventCallbacks;
                                    (this.customEventHandlers[e] = function(t) {
                                        var o = t.data;
                                        if ('string' == typeof o && o.startsWith('' + r)) {
                                            var a = '' + (n || '') + o.substr(r.length),
                                                u = i[e];
                                            if (u) {
                                                var l = u[a];
                                                l && l();
                                            }
                                        }
                                    }),
                                        window.addEventListener('message', this.customEventHandlers[e]);
                                }
                            },
                            {
                                key: b,
                                value: function() {
                                    var e = this;
                                    this.config.customEvents &&
                                        Object.keys(this.config.customEvents).forEach(function(t) {
                                            return window.removeEventListener('message', e.customEventHandlers[t]);
                                        });
                                }
                            },
                            {
                                key: a,
                                value: function() {
                                    if (this.config.sizeMappings) {
                                        var e = !0,
                                            t = !1,
                                            r = void 0;
                                        try {
                                            for (
                                                var i, o = Object.entries(this.config.sizeMappings)[Symbol.iterator]();
                                                !(e = (i = o.next()).done);
                                                e = !0
                                            ) {
                                                var a = i.value,
                                                    u = n(a, 2),
                                                    l = u[0],
                                                    s = u[1],
                                                    f = window.googletag.sizeMapping(),
                                                    c = !0,
                                                    d = !1,
                                                    p = void 0;
                                                try {
                                                    for (
                                                        var h, y = s[Symbol.iterator]();
                                                        !(c = (h = y.next()).done);
                                                        c = !0
                                                    ) {
                                                        var v = h.value,
                                                            m = v.viewPortSize,
                                                            b = v.sizes;
                                                        f.addSize(m, b);
                                                    }
                                                } catch (e) {
                                                    (d = !0), (p = e);
                                                } finally {
                                                    try {
                                                        !c && y.return && y.return();
                                                    } finally {
                                                        if (d) throw p;
                                                    }
                                                }
                                                this.gptSizeMappings[l] = f.build();
                                            }
                                        } catch (e) {
                                            (t = !0), (r = e);
                                        } finally {
                                            try {
                                                !e && o.return && o.return();
                                            } finally {
                                                if (t) throw r;
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                key: u,
                                value: function(e) {
                                    return e && this.gptSizeMappings[e] ? this.gptSizeMappings[e] : null;
                                }
                            },
                            {
                                key: l,
                                value: function() {
                                    var e = this;
                                    this.config.slots.forEach(function(t) {
                                        var r = t.id,
                                            i = t.path,
                                            o = t.collapseEmptyDiv,
                                            a = t.targeting,
                                            l = void 0 === a ? {} : a,
                                            s = t.sizes,
                                            f = t.sizeMappingName,
                                            c = window.googletag.defineSlot(i || e.config.path, s, r),
                                            d = e[u](f);
                                        d && c.defineSizeMapping(d),
                                            o &&
                                                o.length &&
                                                o.length > 0 &&
                                                c.setCollapseEmptyDiv.apply(
                                                    c,
                                                    (function(e) {
                                                        if (Array.isArray(e)) {
                                                            for (var t = 0, r = Array(e.length); t < e.length; t++)
                                                                r[t] = e[t];
                                                            return r;
                                                        }
                                                        return Array.from(e);
                                                    })(o)
                                                );
                                        var p = !0,
                                            h = !1,
                                            y = void 0;
                                        try {
                                            for (
                                                var v, m = Object.entries(l)[Symbol.iterator]();
                                                !(p = (v = m.next()).done);
                                                p = !0
                                            ) {
                                                var b = v.value,
                                                    g = n(b, 2),
                                                    w = g[0],
                                                    O = g[1];
                                                c.setTargeting(w, O);
                                            }
                                        } catch (e) {
                                            (h = !0), (y = e);
                                        } finally {
                                            try {
                                                !p && m.return && m.return();
                                            } finally {
                                                if (h) throw y;
                                            }
                                        }
                                        c.addService(window.googletag.pubads()), (e.slots[r] = c);
                                    });
                                }
                            },
                            {
                                key: s,
                                value: function() {
                                    this[S]('displaySlots'),
                                        this.config.slots.forEach(function(e) {
                                            var t = e.id;
                                            return window.googletag.display(t);
                                        });
                                }
                            },
                            {
                                key: f,
                                value: function() {
                                    this[S]('setupPrebid');
                                }
                            },
                            {
                                key: c,
                                value: function() {
                                    this[S]('teardownPrebid');
                                }
                            },
                            {
                                key: d,
                                value: function() {
                                    this[S]('setupGpt');
                                    var e = window.googletag.pubads(),
                                        t = this.config.targeting;
                                    this[a](), this[l]();
                                    var r = !0,
                                        i = !1,
                                        o = void 0;
                                    try {
                                        for (
                                            var u, f = Object.entries(t)[Symbol.iterator]();
                                            !(r = (u = f.next()).done);
                                            r = !0
                                        ) {
                                            var c = u.value,
                                                d = n(c, 2),
                                                p = d[0],
                                                h = d[1];
                                            e.setTargeting(p, h);
                                        }
                                    } catch (e) {
                                        (i = !0), (o = e);
                                    } finally {
                                        try {
                                            !r && f.return && f.return();
                                        } finally {
                                            if (i) throw o;
                                        }
                                    }
                                    e.disableInitialLoad(),
                                        e.enableSingleRequest(),
                                        window.googletag.enableServices(),
                                        this[s]();
                                }
                            },
                            {
                                key: p,
                                value: function() {
                                    this[S]('teardownGpt'), window.googletag.destroySlots();
                                }
                            },
                            {
                                key: j,
                                value: function() {
                                    this.config.prebid || (this.config.prebid = {}),
                                        this.config.metaData || (this.config.metaData = {}),
                                        this.config.targeting || (this.config.targeting = {});
                                }
                            },
                            {
                                key: S,
                                value: function(e) {
                                    var t = !0,
                                        r = !1,
                                        n = void 0;
                                    try {
                                        for (
                                            var i, o = this.plugins[Symbol.iterator]();
                                            !(t = (i = o.next()).done);
                                            t = !0
                                        ) {
                                            var a = i.value[e];
                                            a && a.call(this);
                                        }
                                    } catch (e) {
                                        (r = !0), (n = e);
                                    } finally {
                                        try {
                                            !t && o.return && o.return();
                                        } finally {
                                            if (r) throw n;
                                        }
                                    }
                                }
                            }
                        ],
                        [
                            {
                                key: w,
                                value: function(t) {
                                    return e[g](window.googletag.cmd, t);
                                }
                            },
                            {
                                key: O,
                                value: function(t) {
                                    return e[g](window.pbjs.que, t);
                                }
                            },
                            {
                                key: g,
                                value: function(e, t) {
                                    return new Promise(function(r) {
                                        return e.push(function() {
                                            t(), r();
                                        });
                                    });
                                }
                            }
                        ]
                    ),
                    e
                );
            })();
        t.default = P;
    },
    function(e, t, r) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = (function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            'value' in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n);
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t;
                };
            })(),
            i = r(0),
            o = u(i),
            a = u(r(5));
        u(r(1));
        function u(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var l = (function(e) {
            function t() {
                return (
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, t),
                    (function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
                    })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                );
            }
            return (
                (function(e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
                    })),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, i.Component),
                n(t, [
                    {
                        key: 'componentDidMount',
                        value: function() {
                            var e = this.props;
                            (0, e.activate)(e.id, e.customEventHandlers);
                        }
                    },
                    {
                        key: 'render',
                        value: function() {
                            var e = this.props,
                                t = e.id,
                                r = e.style,
                                n = e.className,
                                i = e.children;
                            return o.default.createElement('div', { id: t, style: r, className: n, children: i });
                        }
                    }
                ]),
                t
            );
        })();
        (l.defaultProps = { customEventHandlers: {} }), (t.default = (0, a.default)(l));
    }
]);
