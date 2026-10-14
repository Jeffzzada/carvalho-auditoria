const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/routes-B4SEGGHR.js", "assets/Sections-CSoAk-uj.js", "assets/como-funciona-DA5kYY2P.js", "assets/perguntas-frequentes-CLEJY_lm.js", "assets/segmentos-D2gk6S5I.js", "assets/servicos-BLcBpXYK.js", "assets/sobre-C5Wgbzis.js"]))) => i.map(i => d[i]);
var e = Object.create
  , t = Object.defineProperty
  , n = Object.getOwnPropertyDescriptor
  , r = Object.getOwnPropertyNames
  , i = Object.getPrototypeOf
  , a = Object.prototype.hasOwnProperty
  , o = (e, t) => () => (t || (e((t = {
    exports: {}
}).exports, t),
e = null),
t.exports)
  , s = (e, i, o, s) => {
    if (i && typeof i == `object` || typeof i == `function`)
        for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
            d = c[l],
            !a.call(e, d) && d !== o && t(e, d, {
                get: (e => i[e]).bind(null, d),
                enumerable: !(s = n(i, d)) || s.enumerable
            });
    return e
}
  , c = (n, r, o) => (o = n == null ? {} : e(i(n)),
s(r || !n || !n.__esModule || !a.call(n, `default`) ? t(o, `default`, {
    value: n,
    enumerable: !0
}) : o, n))
  , l = o((e => {
    var t = Symbol.for(`react.transitional.element`)
      , n = Symbol.for(`react.portal`)
      , r = Symbol.for(`react.fragment`)
      , i = Symbol.for(`react.strict_mode`)
      , a = Symbol.for(`react.profiler`)
      , o = Symbol.for(`react.consumer`)
      , s = Symbol.for(`react.context`)
      , c = Symbol.for(`react.forward_ref`)
      , l = Symbol.for(`react.suspense`)
      , u = Symbol.for(`react.memo`)
      , d = Symbol.for(`react.lazy`)
      , f = Symbol.for(`react.activity`)
      , p = Symbol.iterator;
    function m(e) {
        return typeof e != `object` || !e ? null : (e = p && e[p] || e[`@@iterator`],
        typeof e == `function` ? e : null)
    }
    var h = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , g = Object.assign
      , _ = {};
    function v(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = _,
        this.updater = n || h
    }
    v.prototype.isReactComponent = {},
    v.prototype.setState = function(e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
            throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
        this.updater.enqueueSetState(this, e, t, `setState`)
    }
    ,
    v.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`)
    }
    ;
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = _,
        this.updater = n || h
    }
    var x = b.prototype = new y;
    x.constructor = b,
    g(x, v.prototype),
    x.isPureReactComponent = !0;
    var S = Array.isArray;
    function C() {}
    var w = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , T = Object.prototype.hasOwnProperty;
    function ee(e, n, r) {
        var i = r.ref;
        return {
            $$typeof: t,
            type: e,
            key: n,
            ref: i === void 0 ? null : i,
            props: r
        }
    }
    function te(e, t) {
        return ee(e.type, t, e.props)
    }
    function E(e) {
        return typeof e == `object` && !!e && e.$$typeof === t
    }
    function ne(e) {
        var t = {
            "=": `=0`,
            ":": `=2`
        };
        return `$` + e.replace(/[=:]/g, function(e) {
            return t[e]
        })
    }
    var re = /\/+/g;
    function ie(e, t) {
        return typeof e == `object` && e && e.key != null ? ne(`` + e.key) : t.toString(36)
    }
    function ae(e) {
        switch (e.status) {
        case `fulfilled`:
            return e.value;
        case `rejected`:
            throw e.reason;
        default:
            switch (typeof e.status == `string` ? e.then(C, C) : (e.status = `pending`,
            e.then(function(t) {
                e.status === `pending` && (e.status = `fulfilled`,
                e.value = t)
            }, function(t) {
                e.status === `pending` && (e.status = `rejected`,
                e.reason = t)
            })),
            e.status) {
            case `fulfilled`:
                return e.value;
            case `rejected`:
                throw e.reason
            }
        }
        throw e
    }
    function oe(e, r, i, a, o) {
        var s = typeof e;
        (s === `undefined` || s === `boolean`) && (e = null);
        var c = !1;
        if (e === null)
            c = !0;
        else
            switch (s) {
            case `bigint`:
            case `string`:
            case `number`:
                c = !0;
                break;
            case `object`:
                switch (e.$$typeof) {
                case t:
                case n:
                    c = !0;
                    break;
                case d:
                    return c = e._init,
                    oe(c(e._payload), r, i, a, o)
                }
            }
        if (c)
            return o = o(e),
            c = a === `` ? `.` + ie(e, 0) : a,
            S(o) ? (i = ``,
            c != null && (i = c.replace(re, `$&/`) + `/`),
            oe(o, r, i, ``, function(e) {
                return e
            })) : o != null && (E(o) && (o = te(o, i + (o.key == null || e && e.key === o.key ? `` : (`` + o.key).replace(re, `$&/`) + `/`) + c)),
            r.push(o)),
            1;
        c = 0;
        var l = a === `` ? `.` : a + `:`;
        if (S(e))
            for (var u = 0; u < e.length; u++)
                a = e[u],
                s = l + ie(a, u),
                c += oe(a, r, i, s, o);
        else if (u = m(e),
        typeof u == `function`)
            for (e = u.call(e),
            u = 0; !(a = e.next()).done; )
                a = a.value,
                s = l + ie(a, u++),
                c += oe(a, r, i, s, o);
        else if (s === `object`) {
            if (typeof e.then == `function`)
                return oe(ae(e), r, i, a, o);
            throw r = String(e),
            Error(`Objects are not valid as a React child (found: ` + (r === `[object Object]` ? `object with keys {` + Object.keys(e).join(`, `) + `}` : r) + `). If you meant to render a collection of children, use an array instead.`)
        }
        return c
    }
    function se(e, t, n) {
        if (e == null)
            return e;
        var r = []
          , i = 0;
        return oe(e, r, ``, ``, function(e) {
            return t.call(n, e, i++)
        }),
        r
    }
    function ce(e) {
        if (e._status === -1) {
            var t = e._result;
            t = t(),
            t.then(function(t) {
                (e._status === 0 || e._status === -1) && (e._status = 1,
                e._result = t)
            }, function(t) {
                (e._status === 0 || e._status === -1) && (e._status = 2,
                e._result = t)
            }),
            e._status === -1 && (e._status = 0,
            e._result = t)
        }
        if (e._status === 1)
            return e._result.default;
        throw e._result
    }
    var D = typeof reportError == `function` ? reportError : function(e) {
        if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
            var t = new window.ErrorEvent(`error`,{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == `object` && typeof process.emit == `function`) {
            process.emit(`uncaughtException`, e);
            return
        }
        console.error(e)
    }
      , O = {
        map: se,
        forEach: function(e, t, n) {
            se(e, function() {
                t.apply(this, arguments)
            }, n)
        },
        count: function(e) {
            var t = 0;
            return se(e, function() {
                t++
            }),
            t
        },
        toArray: function(e) {
            return se(e, function(e) {
                return e
            }) || []
        },
        only: function(e) {
            if (!E(e))
                throw Error(`React.Children.only expected to receive a single React element child.`);
            return e
        }
    };
    e.Activity = f,
    e.Children = O,
    e.Component = v,
    e.Fragment = r,
    e.Profiler = a,
    e.PureComponent = b,
    e.StrictMode = i,
    e.Suspense = l,
    e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w,
    e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(e) {
            return w.H.useMemoCache(e)
        }
    },
    e.cache = function(e) {
        return function() {
            return e.apply(null, arguments)
        }
    }
    ,
    e.cacheSignal = function() {
        return null
    }
    ,
    e.cloneElement = function(e, t, n) {
        if (e == null)
            throw Error(`The argument must be a React element, but you passed ` + e + `.`);
        var r = g({}, e.props)
          , i = e.key;
        if (t != null)
            for (a in t.key !== void 0 && (i = `` + t.key),
            t)
                !T.call(t, a) || a === `key` || a === `__self` || a === `__source` || a === `ref` && t.ref === void 0 || (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1)
            r.children = n;
        else if (1 < a) {
            for (var o = Array(a), s = 0; s < a; s++)
                o[s] = arguments[s + 2];
            r.children = o
        }
        return ee(e.type, i, r)
    }
    ,
    e.createContext = function(e) {
        return e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        e.Provider = e,
        e.Consumer = {
            $$typeof: o,
            _context: e
        },
        e
    }
    ,
    e.createElement = function(e, t, n) {
        var r, i = {}, a = null;
        if (t != null)
            for (r in t.key !== void 0 && (a = `` + t.key),
            t)
                T.call(t, r) && r !== `key` && r !== `__self` && r !== `__source` && (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1)
            i.children = n;
        else if (1 < o) {
            for (var s = Array(o), c = 0; c < o; c++)
                s[c] = arguments[c + 2];
            i.children = s
        }
        if (e && e.defaultProps)
            for (r in o = e.defaultProps,
            o)
                i[r] === void 0 && (i[r] = o[r]);
        return ee(e, a, i)
    }
    ,
    e.createRef = function() {
        return {
            current: null
        }
    }
    ,
    e.forwardRef = function(e) {
        return {
            $$typeof: c,
            render: e
        }
    }
    ,
    e.isValidElement = E,
    e.lazy = function(e) {
        return {
            $$typeof: d,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: ce
        }
    }
    ,
    e.memo = function(e, t) {
        return {
            $$typeof: u,
            type: e,
            compare: t === void 0 ? null : t
        }
    }
    ,
    e.startTransition = function(e) {
        var t = w.T
          , n = {};
        w.T = n;
        try {
            var r = e()
              , i = w.S;
            i !== null && i(n, r),
            typeof r == `object` && r && typeof r.then == `function` && r.then(C, D)
        } catch (e) {
            D(e)
        } finally {
            t !== null && n.types !== null && (t.types = n.types),
            w.T = t
        }
    }
    ,
    e.unstable_useCacheRefresh = function() {
        return w.H.useCacheRefresh()
    }
    ,
    e.use = function(e) {
        return w.H.use(e)
    }
    ,
    e.useActionState = function(e, t, n) {
        return w.H.useActionState(e, t, n)
    }
    ,
    e.useCallback = function(e, t) {
        return w.H.useCallback(e, t)
    }
    ,
    e.useContext = function(e) {
        return w.H.useContext(e)
    }
    ,
    e.useDebugValue = function() {}
    ,
    e.useDeferredValue = function(e, t) {
        return w.H.useDeferredValue(e, t)
    }
    ,
    e.useEffect = function(e, t) {
        return w.H.useEffect(e, t)
    }
    ,
    e.useEffectEvent = function(e) {
        return w.H.useEffectEvent(e)
    }
    ,
    e.useId = function() {
        return w.H.useId()
    }
    ,
    e.useImperativeHandle = function(e, t, n) {
        return w.H.useImperativeHandle(e, t, n)
    }
    ,
    e.useInsertionEffect = function(e, t) {
        return w.H.useInsertionEffect(e, t)
    }
    ,
    e.useLayoutEffect = function(e, t) {
        return w.H.useLayoutEffect(e, t)
    }
    ,
    e.useMemo = function(e, t) {
        return w.H.useMemo(e, t)
    }
    ,
    e.useOptimistic = function(e, t) {
        return w.H.useOptimistic(e, t)
    }
    ,
    e.useReducer = function(e, t, n) {
        return w.H.useReducer(e, t, n)
    }
    ,
    e.useRef = function(e) {
        return w.H.useRef(e)
    }
    ,
    e.useState = function(e) {
        return w.H.useState(e)
    }
    ,
    e.useSyncExternalStore = function(e, t, n) {
        return w.H.useSyncExternalStore(e, t, n)
    }
    ,
    e.useTransition = function() {
        return w.H.useTransition()
    }
    ,
    e.version = `19.2.8`
}
))
  , u = o(( (e, t) => {
    t.exports = l()
}
))
  , d = o((e => {
    function t(e, t) {
        var n = e.length;
        e.push(t);
        a: for (; 0 < n; ) {
            var r = n - 1 >>> 1
              , a = e[r];
            if (0 < i(a, t))
                e[r] = t,
                e[n] = a,
                n = r;
            else
                break a
        }
    }
    function n(e) {
        return e.length === 0 ? null : e[0]
    }
    function r(e) {
        if (e.length === 0)
            return null;
        var t = e[0]
          , n = e.pop();
        if (n !== t) {
            e[0] = n;
            a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
                var s = 2 * (r + 1) - 1
                  , c = e[s]
                  , l = s + 1
                  , u = e[l];
                if (0 > i(c, n))
                    l < a && 0 > i(u, c) ? (e[r] = u,
                    e[l] = n,
                    r = l) : (e[r] = c,
                    e[s] = n,
                    r = s);
                else if (l < a && 0 > i(u, n))
                    e[r] = u,
                    e[l] = n,
                    r = l;
                else
                    break a
            }
        }
        return t
    }
    function i(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return n === 0 ? e.id - t.id : n
    }
    if (e.unstable_now = void 0,
    typeof performance == `object` && typeof performance.now == `function`) {
        var a = performance;
        e.unstable_now = function() {
            return a.now()
        }
    } else {
        var o = Date
          , s = o.now();
        e.unstable_now = function() {
            return o.now() - s
        }
    }
    var c = []
      , l = []
      , u = 1
      , d = null
      , f = 3
      , p = !1
      , m = !1
      , h = !1
      , g = !1
      , _ = typeof setTimeout == `function` ? setTimeout : null
      , v = typeof clearTimeout == `function` ? clearTimeout : null
      , y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
        for (var i = n(l); i !== null; ) {
            if (i.callback === null)
                r(l);
            else if (i.startTime <= e)
                r(l),
                i.sortIndex = i.expirationTime,
                t(c, i);
            else
                break;
            i = n(l)
        }
    }
    function x(e) {
        if (h = !1,
        b(e),
        !m)
            if (n(c) !== null)
                m = !0,
                S || (S = !0,
                E());
            else {
                var t = n(l);
                t !== null && ie(x, t.startTime - e)
            }
    }
    var S = !1
      , C = -1
      , w = 5
      , T = -1;
    function ee() {
        return g ? !0 : !(e.unstable_now() - T < w)
    }
    function te() {
        if (g = !1,
        S) {
            var t = e.unstable_now();
            T = t;
            var i = !0;
            try {
                a: {
                    m = !1,
                    h && (h = !1,
                    v(C),
                    C = -1),
                    p = !0;
                    var a = f;
                    try {
                        b: {
                            for (b(t),
                            d = n(c); d !== null && !(d.expirationTime > t && ee()); ) {
                                var o = d.callback;
                                if (typeof o == `function`) {
                                    d.callback = null,
                                    f = d.priorityLevel;
                                    var s = o(d.expirationTime <= t);
                                    if (t = e.unstable_now(),
                                    typeof s == `function`) {
                                        d.callback = s,
                                        b(t),
                                        i = !0;
                                        break b
                                    }
                                    d === n(c) && r(c),
                                    b(t)
                                } else
                                    r(c);
                                d = n(c)
                            }
                            if (d !== null)
                                i = !0;
                            else {
                                var u = n(l);
                                u !== null && ie(x, u.startTime - t),
                                i = !1
                            }
                        }
                        break a
                    } finally {
                        d = null,
                        f = a,
                        p = !1
                    }
                }
            } finally {
                i ? E() : S = !1
            }
        }
    }
    var E;
    if (typeof y == `function`)
        E = function() {
            y(te)
        }
        ;
    else if (typeof MessageChannel < `u`) {
        var ne = new MessageChannel
          , re = ne.port2;
        ne.port1.onmessage = te,
        E = function() {
            re.postMessage(null)
        }
    } else
        E = function() {
            _(te, 0)
        }
        ;
    function ie(t, n) {
        C = _(function() {
            t(e.unstable_now())
        }, n)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(e) {
        e.callback = null
    }
    ,
    e.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : w = 0 < e ? Math.floor(1e3 / e) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_next = function(e) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var t = 3;
            break;
        default:
            t = f
        }
        var n = f;
        f = t;
        try {
            return e()
        } finally {
            f = n
        }
    }
    ,
    e.unstable_requestPaint = function() {
        g = !0
    }
    ,
    e.unstable_runWithPriority = function(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            e = 3
        }
        var n = f;
        f = e;
        try {
            return t()
        } finally {
            f = n
        }
    }
    ,
    e.unstable_scheduleCallback = function(r, i, a) {
        var o = e.unstable_now();
        switch (typeof a == `object` && a ? (a = a.delay,
        a = typeof a == `number` && 0 < a ? o + a : o) : a = o,
        r) {
        case 1:
            var s = -1;
            break;
        case 2:
            s = 250;
            break;
        case 5:
            s = 1073741823;
            break;
        case 4:
            s = 1e4;
            break;
        default:
            s = 5e3
        }
        return s = a + s,
        r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1
        },
        a > o ? (r.sortIndex = a,
        t(l, r),
        n(c) === null && r === n(l) && (h ? (v(C),
        C = -1) : h = !0,
        ie(x, a - o))) : (r.sortIndex = s,
        t(c, r),
        m || p || (m = !0,
        S || (S = !0,
        E()))),
        r
    }
    ,
    e.unstable_shouldYield = ee,
    e.unstable_wrapCallback = function(e) {
        var t = f;
        return function() {
            var n = f;
            f = t;
            try {
                return e.apply(this, arguments)
            } finally {
                f = n
            }
        }
    }
}
))
  , f = o(( (e, t) => {
    t.exports = d()
}
))
  , p = o((e => {
    var t = u();
    function n(e) {
        var t = `https://react.dev/errors/` + e;
        if (1 < arguments.length) {
            t += `?args[]=` + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                t += `&args[]=` + encodeURIComponent(arguments[n])
        }
        return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
    }
    function r() {}
    var i = {
        d: {
            f: r,
            r: function() {
                throw Error(n(522))
            },
            D: r,
            C: r,
            L: r,
            m: r,
            X: r,
            S: r,
            M: r
        },
        p: 0,
        findDOMNode: null
    }
      , a = Symbol.for(`react.portal`);
    function o(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: a,
            key: r == null ? null : `` + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function c(e, t) {
        if (e === `font`)
            return ``;
        if (typeof t == `string`)
            return t === `use-credentials` ? t : ``
    }
    e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i,
    e.createPortal = function(e, t) {
        var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
            throw Error(n(299));
        return o(e, t, null, r)
    }
    ,
    e.flushSync = function(e) {
        var t = s.T
          , n = i.p;
        try {
            if (s.T = null,
            i.p = 2,
            e)
                return e()
        } finally {
            s.T = t,
            i.p = n,
            i.d.f()
        }
    }
    ,
    e.preconnect = function(e, t) {
        typeof e == `string` && (t ? (t = t.crossOrigin,
        t = typeof t == `string` ? t === `use-credentials` ? t : `` : void 0) : t = null,
        i.d.C(e, t))
    }
    ,
    e.prefetchDNS = function(e) {
        typeof e == `string` && i.d.D(e)
    }
    ,
    e.preinit = function(e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
            var n = t.as
              , r = c(n, t.crossOrigin)
              , a = typeof t.integrity == `string` ? t.integrity : void 0
              , o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
            n === `style` ? i.d.S(e, typeof t.precedence == `string` ? t.precedence : void 0, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o
            }) : n === `script` && i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0
            })
        }
    }
    ,
    e.preinitModule = function(e, t) {
        if (typeof e == `string`)
            if (typeof t == `object` && t) {
                if (t.as == null || t.as === `script`) {
                    var n = c(t.as, t.crossOrigin);
                    i.d.M(e, {
                        crossOrigin: n,
                        integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                        nonce: typeof t.nonce == `string` ? t.nonce : void 0
                    })
                }
            } else
                t ?? i.d.M(e)
    }
    ,
    e.preload = function(e, t) {
        if (typeof e == `string` && typeof t == `object` && t && typeof t.as == `string`) {
            var n = t.as
              , r = c(n, t.crossOrigin);
            i.d.L(e, n, {
                crossOrigin: r,
                integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
                type: typeof t.type == `string` ? t.type : void 0,
                fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
                referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
                imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
                imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
                media: typeof t.media == `string` ? t.media : void 0
            })
        }
    }
    ,
    e.preloadModule = function(e, t) {
        if (typeof e == `string`)
            if (t) {
                var n = c(t.as, t.crossOrigin);
                i.d.m(e, {
                    as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
                    crossOrigin: n,
                    integrity: typeof t.integrity == `string` ? t.integrity : void 0
                })
            } else
                i.d.m(e)
    }
    ,
    e.requestFormReset = function(e) {
        i.d.r(e)
    }
    ,
    e.unstable_batchedUpdates = function(e, t) {
        return e(t)
    }
    ,
    e.useFormState = function(e, t, n) {
        return s.H.useFormState(e, t, n)
    }
    ,
    e.useFormStatus = function() {
        return s.H.useHostTransitionStatus()
    }
    ,
    e.version = `19.2.8`
}
))
  , m = o(( (e, t) => {
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (e) {
                console.error(e)
            }
    }
    n(),
    t.exports = p()
}
))
  , h = o((e => {
    var t = f()
      , n = u()
      , r = m();
    function i(e) {
        var t = `https://react.dev/errors/` + e;
        if (1 < arguments.length) {
            t += `?args[]=` + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                t += `&args[]=` + encodeURIComponent(arguments[n])
        }
        return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
    }
    function a(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function o(e) {
        var t = e
          , n = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                t.flags & 4098 && (n = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? n : null
    }
    function s(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function c(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function l(e) {
        if (o(e) !== e)
            throw Error(i(188))
    }
    function d(e) {
        var t = e.alternate;
        if (!t) {
            if (t = o(e),
            t === null)
                throw Error(i(188));
            return t === e ? e : null
        }
        for (var n = e, r = t; ; ) {
            var a = n.return;
            if (a === null)
                break;
            var s = a.alternate;
            if (s === null) {
                if (r = a.return,
                r !== null) {
                    n = r;
                    continue
                }
                break
            }
            if (a.child === s.child) {
                for (s = a.child; s; ) {
                    if (s === n)
                        return l(a),
                        e;
                    if (s === r)
                        return l(a),
                        t;
                    s = s.sibling
                }
                throw Error(i(188))
            }
            if (n.return !== r.return)
                n = a,
                r = s;
            else {
                for (var c = !1, u = a.child; u; ) {
                    if (u === n) {
                        c = !0,
                        n = a,
                        r = s;
                        break
                    }
                    if (u === r) {
                        c = !0,
                        r = a,
                        n = s;
                        break
                    }
                    u = u.sibling
                }
                if (!c) {
                    for (u = s.child; u; ) {
                        if (u === n) {
                            c = !0,
                            n = s,
                            r = a;
                            break
                        }
                        if (u === r) {
                            c = !0,
                            r = s,
                            n = a;
                            break
                        }
                        u = u.sibling
                    }
                    if (!c)
                        throw Error(i(189))
                }
            }
            if (n.alternate !== r)
                throw Error(i(190))
        }
        if (n.tag !== 3)
            throw Error(i(188));
        return n.stateNode.current === n ? e : t
    }
    function p(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = p(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var h = Object.assign
      , g = Symbol.for(`react.element`)
      , _ = Symbol.for(`react.transitional.element`)
      , v = Symbol.for(`react.portal`)
      , y = Symbol.for(`react.fragment`)
      , b = Symbol.for(`react.strict_mode`)
      , x = Symbol.for(`react.profiler`)
      , S = Symbol.for(`react.consumer`)
      , C = Symbol.for(`react.context`)
      , w = Symbol.for(`react.forward_ref`)
      , T = Symbol.for(`react.suspense`)
      , ee = Symbol.for(`react.suspense_list`)
      , te = Symbol.for(`react.memo`)
      , E = Symbol.for(`react.lazy`)
      , ne = Symbol.for(`react.activity`)
      , re = Symbol.for(`react.memo_cache_sentinel`)
      , ie = Symbol.iterator;
    function ae(e) {
        return typeof e != `object` || !e ? null : (e = ie && e[ie] || e[`@@iterator`],
        typeof e == `function` ? e : null)
    }
    var oe = Symbol.for(`react.client.reference`);
    function se(e) {
        if (e == null)
            return null;
        if (typeof e == `function`)
            return e.$$typeof === oe ? null : e.displayName || e.name || null;
        if (typeof e == `string`)
            return e;
        switch (e) {
        case y:
            return `Fragment`;
        case x:
            return `Profiler`;
        case b:
            return `StrictMode`;
        case T:
            return `Suspense`;
        case ee:
            return `SuspenseList`;
        case ne:
            return `Activity`
        }
        if (typeof e == `object`)
            switch (e.$$typeof) {
            case v:
                return `Portal`;
            case C:
                return e.displayName || `Context`;
            case S:
                return (e._context.displayName || `Context`) + `.Consumer`;
            case w:
                var t = e.render;
                return e = e.displayName,
                e ||= (e = t.displayName || t.name || ``,
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`),
                e;
            case te:
                return t = e.displayName || null,
                t === null ? se(e.type) || `Memo` : t;
            case E:
                t = e._payload,
                e = e._init;
                try {
                    return se(e(t))
                } catch {}
            }
        return null
    }
    var ce = Array.isArray
      , D = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , O = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , le = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , ue = []
      , de = -1;
    function fe(e) {
        return {
            current: e
        }
    }
    function k(e) {
        0 > de || (e.current = ue[de],
        ue[de] = null,
        de--)
    }
    function A(e, t) {
        de++,
        ue[de] = e.current,
        e.current = t
    }
    var pe = fe(null)
      , me = fe(null)
      , he = fe(null)
      , ge = fe(null);
    function _e(e, t) {
        switch (A(he, t),
        A(me, e),
        A(pe, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? $d(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = $d(t),
                e = ef(t, e);
            else
                switch (e) {
                case `svg`:
                    e = 1;
                    break;
                case `math`:
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        k(pe),
        A(pe, e)
    }
    function ve() {
        k(pe),
        k(me),
        k(he)
    }
    function ye(e) {
        e.memoizedState !== null && A(ge, e);
        var t = pe.current
          , n = ef(t, e.type);
        t !== n && (A(me, e),
        A(pe, n))
    }
    function be(e) {
        me.current === e && (k(pe),
        k(me)),
        ge.current === e && (k(ge),
        sp._currentValue = le)
    }
    var xe, Se;
    function Ce(e) {
        if (xe === void 0)
            try {
                throw Error()
            } catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                xe = t && t[1] || ``,
                Se = -1 < e.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e.stack.indexOf(`@`) ? `@unknown:0:0` : ``
            }
        return `
` + xe + e + Se
    }
    var we = !1;
    function Te(e, t) {
        if (!e || we)
            return ``;
        we = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var r = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var n = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(n.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == `object` && Reflect.construct) {
                                try {
                                    Reflect.construct(n, [])
                                } catch (e) {
                                    var r = e
                                }
                                Reflect.construct(e, [], n)
                            } else {
                                try {
                                    n.call()
                                } catch (e) {
                                    r = e
                                }
                                e.call(n.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (e) {
                                r = e
                            }
                            (n = e()) && typeof n.catch == `function` && n.catch(function() {})
                        }
                    } catch (e) {
                        if (e && r && typeof e.stack == `string`)
                            return [e.stack, r.stack]
                    }
                    return [null, null]
                }
            };
            r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
            var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`);
            i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: `DetermineComponentFrameRoot`
            });
            var a = r.DetermineComponentFrameRoot()
              , o = a[0]
              , s = a[1];
            if (o && s) {
                var c = o.split(`
`)
                  , l = s.split(`
`);
                for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`); )
                    r++;
                for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`); )
                    i++;
                if (r === c.length || i === l.length)
                    for (r = c.length - 1,
                    i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i]; )
                        i--;
                for (; 1 <= r && 0 <= i; r--,
                i--)
                    if (c[r] !== l[i]) {
                        if (r !== 1 || i !== 1)
                            do
                                if (r--,
                                i--,
                                0 > i || c[r] !== l[i]) {
                                    var u = `
` + c[r].replace(` at new `, ` at `);
                                    return e.displayName && u.includes(`<anonymous>`) && (u = u.replace(`<anonymous>`, e.displayName)),
                                    u
                                }
                            while (1 <= r && 0 <= i);
                        break
                    }
            }
        } finally {
            we = !1,
            Error.prepareStackTrace = n
        }
        return (n = e ? e.displayName || e.name : ``) ? Ce(n) : ``
    }
    function Ee(e, t) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return Ce(e.type);
        case 16:
            return Ce(`Lazy`);
        case 13:
            return e.child !== t && t !== null ? Ce(`Suspense Fallback`) : Ce(`Suspense`);
        case 19:
            return Ce(`SuspenseList`);
        case 0:
        case 15:
            return Te(e.type, !1);
        case 11:
            return Te(e.type.render, !1);
        case 1:
            return Te(e.type, !0);
        case 31:
            return Ce(`Activity`);
        default:
            return ``
        }
    }
    function De(e) {
        try {
            var t = ``
              , n = null;
            do
                t += Ee(e, n),
                n = e,
                e = e.return;
            while (e);
            return t
        } catch (e) {
            return `
Error generating stack: ` + e.message + `
` + e.stack
        }
    }
    var Oe = Object.prototype.hasOwnProperty
      , ke = t.unstable_scheduleCallback
      , Ae = t.unstable_cancelCallback
      , je = t.unstable_shouldYield
      , Me = t.unstable_requestPaint
      , Ne = t.unstable_now
      , Pe = t.unstable_getCurrentPriorityLevel
      , Fe = t.unstable_ImmediatePriority
      , Ie = t.unstable_UserBlockingPriority
      , Le = t.unstable_NormalPriority
      , Re = t.unstable_LowPriority
      , ze = t.unstable_IdlePriority
      , Be = t.log
      , Ve = t.unstable_setDisableYieldValue
      , He = null
      , Ue = null;
    function We(e) {
        if (typeof Be == `function` && Ve(e),
        Ue && typeof Ue.setStrictMode == `function`)
            try {
                Ue.setStrictMode(He, e)
            } catch {}
    }
    var Ge = Math.clz32 ? Math.clz32 : Je
      , Ke = Math.log
      , qe = Math.LN2;
    function Je(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (Ke(e) / qe | 0) | 0
    }
    var Ye = 256
      , Xe = 262144
      , Ze = 4194304;
    function Qe(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function $e(e, t, n) {
        var r = e.pendingLanes;
        if (r === 0)
            return 0;
        var i = 0
          , a = e.suspendedLanes
          , o = e.pingedLanes;
        e = e.warmLanes;
        var s = r & 134217727;
        return s === 0 ? (s = r & ~a,
        s === 0 ? o === 0 ? n || (n = r & ~e,
        n !== 0 && (i = Qe(n))) : i = Qe(o) : i = Qe(s)) : (r = s & ~a,
        r === 0 ? (o &= s,
        o === 0 ? n || (n = s & ~e,
        n !== 0 && (i = Qe(n))) : i = Qe(o)) : i = Qe(r)),
        i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i,
        n = t & -t,
        a >= n || a === 32 && n & 4194048) ? t : i
    }
    function et(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function tt(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function nt() {
        var e = Ze;
        return Ze <<= 1,
        !(Ze & 62914560) && (Ze = 4194304),
        e
    }
    function rt(e) {
        for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
        return t
    }
    function it(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function at(e, t, n, r, i, a) {
        var o = e.pendingLanes;
        e.pendingLanes = n,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= n,
        e.entangledLanes &= n,
        e.errorRecoveryDisabledLanes &= n,
        e.shellSuspendCounter = 0;
        var s = e.entanglements
          , c = e.expirationTimes
          , l = e.hiddenUpdates;
        for (n = o & ~n; 0 < n; ) {
            var u = 31 - Ge(n)
              , d = 1 << u;
            s[u] = 0,
            c[u] = -1;
            var f = l[u];
            if (f !== null)
                for (l[u] = null,
                u = 0; u < f.length; u++) {
                    var p = f[u];
                    p !== null && (p.lane &= -536870913)
                }
            n &= ~d
        }
        r !== 0 && ot(e, r, 0),
        a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t))
    }
    function ot(e, t, n) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var r = 31 - Ge(t);
        e.entangledLanes |= t,
        e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930
    }
    function st(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n; ) {
            var r = 31 - Ge(n)
              , i = 1 << r;
            i & t | e[r] & t && (e[r] |= t),
            n &= ~i
        }
    }
    function ct(e, t) {
        var n = t & -t;
        return n = n & 42 ? 1 : lt(n),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
    }
    function lt(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function ut(e) {
        return e &= -e,
        2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2
    }
    function dt() {
        var e = O.p;
        return e === 0 ? (e = window.event,
        e === void 0 ? 32 : bp(e.type)) : e
    }
    function ft(e, t) {
        var n = O.p;
        try {
            return O.p = e,
            t()
        } finally {
            O.p = n
        }
    }
    var pt = Math.random().toString(36).slice(2)
      , mt = `__reactFiber$` + pt
      , ht = `__reactProps$` + pt
      , gt = `__reactContainer$` + pt
      , _t = `__reactEvents$` + pt
      , vt = `__reactListeners$` + pt
      , yt = `__reactHandles$` + pt
      , bt = `__reactResources$` + pt
      , xt = `__reactMarker$` + pt;
    function St(e) {
        delete e[mt],
        delete e[ht],
        delete e[_t],
        delete e[vt],
        delete e[yt]
    }
    function Ct(e) {
        var t = e[mt];
        if (t)
            return t;
        for (var n = e.parentNode; n; ) {
            if (t = n[gt] || n[mt]) {
                if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                    for (e = Sf(e); e !== null; ) {
                        if (n = e[mt])
                            return n;
                        e = Sf(e)
                    }
                return t
            }
            e = n,
            n = e.parentNode
        }
        return null
    }
    function wt(e) {
        if (e = e[mt] || e[gt]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function Tt(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(i(33))
    }
    function Et(e) {
        var t = e[bt];
        return t ||= e[bt] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        },
        t
    }
    function Dt(e) {
        e[xt] = !0
    }
    var Ot = new Set
      , kt = {};
    function At(e, t) {
        jt(e, t),
        jt(e + `Capture`, t)
    }
    function jt(e, t) {
        for (kt[e] = t,
        e = 0; e < t.length; e++)
            Ot.add(t[e])
    }
    var Mt = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`)
      , Nt = {}
      , Pt = {};
    function Ft(e) {
        return Oe.call(Pt, e) ? !0 : Oe.call(Nt, e) ? !1 : Mt.test(e) ? Pt[e] = !0 : (Nt[e] = !0,
        !1)
    }
    function It(e, t, n) {
        if (Ft(t))
            if (n === null)
                e.removeAttribute(t);
            else {
                switch (typeof n) {
                case `undefined`:
                case `function`:
                case `symbol`:
                    e.removeAttribute(t);
                    return;
                case `boolean`:
                    var r = t.toLowerCase().slice(0, 5);
                    if (r !== `data-` && r !== `aria-`) {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, `` + n)
            }
    }
    function Lt(e, t, n) {
        if (n === null)
            e.removeAttribute(t);
        else {
            switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
            case `boolean`:
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, `` + n)
        }
    }
    function Rt(e, t, n, r) {
        if (r === null)
            e.removeAttribute(n);
        else {
            switch (typeof r) {
            case `undefined`:
            case `function`:
            case `symbol`:
            case `boolean`:
                e.removeAttribute(n);
                return
            }
            e.setAttributeNS(t, n, `` + r)
        }
    }
    function zt(e) {
        switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
            return e;
        case `object`:
            return e;
        default:
            return ``
        }
    }
    function Bt(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`)
    }
    function Vt(e, t, n) {
        var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == `function` && typeof r.set == `function`) {
            var i = r.get
              , a = r.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return i.call(this)
                },
                set: function(e) {
                    n = `` + e,
                    a.call(this, e)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: r.enumerable
            }),
            {
                getValue: function() {
                    return n
                },
                setValue: function(e) {
                    n = `` + e
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function Ht(e) {
        if (!e._valueTracker) {
            var t = Bt(e) ? `checked` : `value`;
            e._valueTracker = Vt(e, t, `` + e[t])
        }
    }
    function Ut(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var n = t.getValue()
          , r = ``;
        return e && (r = Bt(e) ? e.checked ? `true` : `false` : e.value),
        e = r,
        e !== n && (t.setValue(e),
        !0)
    }
    function Wt(e) {
        if (e ||= typeof document < `u` ? document : void 0,
        e === void 0)
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var Gt = /[\n"\\]/g;
    function Kt(e) {
        return e.replace(Gt, function(e) {
            return `\\` + e.charCodeAt(0).toString(16) + ` `
        })
    }
    function qt(e, t, n, r, i, a, o, s) {
        e.name = ``,
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` ? e.type = o : e.removeAttribute(`type`),
        t == null ? o !== `submit` && o !== `reset` || e.removeAttribute(`value`) : o === `number` ? (t === 0 && e.value === `` || e.value != t) && (e.value = `` + zt(t)) : e.value !== `` + zt(t) && (e.value = `` + zt(t)),
        t == null ? n == null ? r != null && e.removeAttribute(`value`) : Yt(e, o, zt(n)) : Yt(e, o, zt(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean` ? e.name = `` + zt(s) : e.removeAttribute(`name`)
    }
    function Jt(e, t, n, r, i, a, o, s) {
        if (a != null && typeof a != `function` && typeof a != `symbol` && typeof a != `boolean` && (e.type = a),
        t != null || n != null) {
            if (!(a !== `submit` && a !== `reset` || t != null)) {
                Ht(e);
                return
            }
            n = n == null ? `` : `` + zt(n),
            t = t == null ? n : `` + zt(t),
            s || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        r ??= i,
        r = typeof r != `function` && typeof r != `symbol` && !!r,
        e.checked = s ? e.checked : !!r,
        e.defaultChecked = !!r,
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` && (e.name = o),
        Ht(e)
    }
    function Yt(e, t, n) {
        t === `number` && Wt(e.ownerDocument) === e || e.defaultValue === `` + n || (e.defaultValue = `` + n)
    }
    function Xt(e, t, n, r) {
        if (e = e.options,
        t) {
            t = {};
            for (var i = 0; i < n.length; i++)
                t[`$` + n[i]] = !0;
            for (n = 0; n < e.length; n++)
                i = t.hasOwnProperty(`$` + e[n].value),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0)
        } else {
            for (n = `` + zt(n),
            t = null,
            i = 0; i < e.length; i++) {
                if (e[i].value === n) {
                    e[i].selected = !0,
                    r && (e[i].defaultSelected = !0);
                    return
                }
                t !== null || e[i].disabled || (t = e[i])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Zt(e, t, n) {
        if (t != null && (t = `` + zt(t),
        t !== e.value && (e.value = t),
        n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = n == null ? `` : `` + zt(n)
    }
    function Qt(e, t, n, r) {
        if (t == null) {
            if (r != null) {
                if (n != null)
                    throw Error(i(92));
                if (ce(r)) {
                    if (1 < r.length)
                        throw Error(i(93));
                    r = r[0]
                }
                n = r
            }
            n ??= ``,
            t = n
        }
        n = zt(t),
        e.defaultValue = n,
        r = e.textContent,
        r === n && r !== `` && r !== null && (e.value = r),
        Ht(e)
    }
    function $t(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var en = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
    function tn(e, t, n) {
        var r = t.indexOf(`--`) === 0;
        n == null || typeof n == `boolean` || n === `` ? r ? e.setProperty(t, ``) : t === `float` ? e.cssFloat = `` : e[t] = `` : r ? e.setProperty(t, n) : typeof n != `number` || n === 0 || en.has(t) ? t === `float` ? e.cssFloat = n : e[t] = (`` + n).trim() : e[t] = n + `px`
    }
    function nn(e, t, n) {
        if (t != null && typeof t != `object`)
            throw Error(i(62));
        if (e = e.style,
        n != null) {
            for (var r in n)
                !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf(`--`) === 0 ? e.setProperty(r, ``) : r === `float` ? e.cssFloat = `` : e[r] = ``);
            for (var a in t)
                r = t[a],
                t.hasOwnProperty(a) && n[a] !== r && tn(e, a, r)
        } else
            for (var o in t)
                t.hasOwnProperty(o) && tn(e, o, t[o])
    }
    function rn(e) {
        if (e.indexOf(`-`) === -1)
            return !1;
        switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
            return !1;
        default:
            return !0
        }
    }
    var an = new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]])
      , on = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function sn(e) {
        return on.test(`` + e) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e
    }
    function cn() {}
    var ln = null;
    function un(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var dn = null
      , fn = null;
    function pn(e) {
        var t = wt(e);
        if (t && (e = t.stateNode)) {
            var n = e[ht] || null;
            a: switch (e = t.stateNode,
            t.type) {
            case `input`:
                if (qt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                t = n.name,
                n.type === `radio` && t != null) {
                    for (n = e; n.parentNode; )
                        n = n.parentNode;
                    for (n = n.querySelectorAll(`input[name="` + Kt(`` + t) + `"][type="radio"]`),
                    t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = r[ht] || null;
                            if (!a)
                                throw Error(i(90));
                            qt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name)
                        }
                    }
                    for (t = 0; t < n.length; t++)
                        r = n[t],
                        r.form === e.form && Ut(r)
                }
                break a;
            case `textarea`:
                Zt(e, n.value, n.defaultValue);
                break a;
            case `select`:
                t = n.value,
                t != null && Xt(e, !!n.multiple, t, !1)
            }
        }
    }
    var mn = !1;
    function hn(e, t, n) {
        if (mn)
            return e(t, n);
        mn = !0;
        try {
            return e(t)
        } finally {
            if (mn = !1,
            (dn !== null || fn !== null) && (ju(),
            dn && (t = dn,
            e = fn,
            fn = dn = null,
            pn(t),
            e)))
                for (t = 0; t < e.length; t++)
                    pn(e[t])
        }
    }
    function gn(e, t) {
        var n = e.stateNode;
        if (n === null)
            return null;
        var r = n[ht] || null;
        if (r === null)
            return null;
        n = r[t];
        a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
            (r = !r.disabled) || (e = e.type,
            r = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`),
            e = !r;
            break a;
        default:
            e = !1
        }
        if (e)
            return null;
        if (n && typeof n != `function`)
            throw Error(i(231, t, typeof n));
        return n
    }
    var _n = !(typeof window > `u` || window.document === void 0 || window.document.createElement === void 0)
      , vn = !1;
    if (_n)
        try {
            var yn = {};
            Object.defineProperty(yn, "passive", {
                get: function() {
                    vn = !0
                }
            }),
            window.addEventListener(`test`, yn, yn),
            window.removeEventListener(`test`, yn, yn)
        } catch {
            vn = !1
        }
    var bn = null
      , xn = null
      , Sn = null;
    function Cn() {
        if (Sn)
            return Sn;
        var e, t = xn, n = t.length, r, i = `value` in bn ? bn.value : bn.textContent, a = i.length;
        for (e = 0; e < n && t[e] === i[e]; e++)
            ;
        var o = n - e;
        for (r = 1; r <= o && t[n - r] === i[a - r]; r++)
            ;
        return Sn = i.slice(e, 1 < r ? 1 - r : void 0)
    }
    function wn(e) {
        var t = e.keyCode;
        return `charCode` in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Tn() {
        return !0
    }
    function En() {
        return !1
    }
    function Dn(e) {
        function t(t, n, r, i, a) {
            for (var o in this._reactName = t,
            this._targetInst = r,
            this.type = n,
            this.nativeEvent = i,
            this.target = a,
            this.currentTarget = null,
            e)
                e.hasOwnProperty(o) && (t = e[o],
                this[o] = t ? t(i) : i[o]);
            return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Tn : En,
            this.isPropagationStopped = En,
            this
        }
        return h(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != `unknown` && (e.returnValue = !1),
                this.isDefaultPrevented = Tn)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
                this.isPropagationStopped = Tn)
            },
            persist: function() {},
            isPersistent: Tn
        }),
        t
    }
    var On = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, kn = Dn(On), An = h({}, On, {
        view: 0,
        detail: 0
    }), jn = Dn(An), Mn, Nn, Pn, Fn = h({}, An, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Kn,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return `movementX` in e ? e.movementX : (e !== Pn && (Pn && e.type === `mousemove` ? (Mn = e.screenX - Pn.screenX,
            Nn = e.screenY - Pn.screenY) : Nn = Mn = 0,
            Pn = e),
            Mn)
        },
        movementY: function(e) {
            return `movementY` in e ? e.movementY : Nn
        }
    }), In = Dn(Fn), Ln = Dn(h({}, Fn, {
        dataTransfer: 0
    })), Rn = Dn(h({}, An, {
        relatedTarget: 0
    })), zn = Dn(h({}, On, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })), Bn = Dn(h({}, On, {
        clipboardData: function(e) {
            return `clipboardData` in e ? e.clipboardData : window.clipboardData
        }
    })), Vn = Dn(h({}, On, {
        data: 0
    })), Hn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`
    }, Un = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`
    }, Wn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`
    };
    function Gn(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Wn[e]) ? !!t[e] : !1
    }
    function Kn() {
        return Gn
    }
    var qn = Dn(h({}, An, {
        key: function(e) {
            if (e.key) {
                var t = Hn[e.key] || e.key;
                if (t !== `Unidentified`)
                    return t
            }
            return e.type === `keypress` ? (e = wn(e),
            e === 13 ? `Enter` : String.fromCharCode(e)) : e.type === `keydown` || e.type === `keyup` ? Un[e.keyCode] || `Unidentified` : ``
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Kn,
        charCode: function(e) {
            return e.type === `keypress` ? wn(e) : 0
        },
        keyCode: function(e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === `keypress` ? wn(e) : e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0
        }
    }))
      , Jn = Dn(h({}, Fn, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }))
      , Yn = Dn(h({}, An, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Kn
    }))
      , Xn = Dn(h({}, On, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }))
      , Zn = Dn(h({}, Fn, {
        deltaX: function(e) {
            return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return `deltaY` in e ? e.deltaY : `wheelDeltaY` in e ? -e.wheelDeltaY : `wheelDelta` in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }))
      , Qn = Dn(h({}, On, {
        newState: 0,
        oldState: 0
    }))
      , $n = [9, 13, 27, 32]
      , er = _n && `CompositionEvent` in window
      , tr = null;
    _n && `documentMode` in document && (tr = document.documentMode);
    var nr = _n && `TextEvent` in window && !tr
      , rr = _n && (!er || tr && 8 < tr && 11 >= tr)
      , ir = ` `
      , ar = !1;
    function or(e, t) {
        switch (e) {
        case `keyup`:
            return $n.indexOf(t.keyCode) !== -1;
        case `keydown`:
            return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
            return !0;
        default:
            return !1
        }
    }
    function sr(e) {
        return e = e.detail,
        typeof e == `object` && `data` in e ? e.data : null
    }
    var cr = !1;
    function lr(e, t) {
        switch (e) {
        case `compositionend`:
            return sr(t);
        case `keypress`:
            return t.which === 32 ? (ar = !0,
            ir) : null;
        case `textInput`:
            return e = t.data,
            e === ir && ar ? null : e;
        default:
            return null
        }
    }
    function ur(e, t) {
        if (cr)
            return e === `compositionend` || !er && or(e, t) ? (e = Cn(),
            Sn = xn = bn = null,
            cr = !1,
            e) : null;
        switch (e) {
        case `paste`:
            return null;
        case `keypress`:
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case `compositionend`:
            return rr && t.locale !== `ko` ? null : t.data;
        default:
            return null
        }
    }
    var dr = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function j(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === `input` ? !!dr[e.type] : t === `textarea`
    }
    function fr(e, t, n, r) {
        dn ? fn ? fn.push(r) : fn = [r] : dn = r,
        t = Rd(t, `onChange`),
        0 < t.length && (n = new kn(`onChange`,`change`,null,n,r),
        e.push({
            event: n,
            listeners: t
        }))
    }
    var pr = null
      , mr = null;
    function hr(e) {
        jd(e, 0)
    }
    function gr(e) {
        if (Ut(Tt(e)))
            return e
    }
    function _r(e, t) {
        if (e === `change`)
            return t
    }
    var vr = !1;
    if (_n) {
        var yr;
        if (_n) {
            var br = `oninput` in document;
            if (!br) {
                var xr = document.createElement(`div`);
                xr.setAttribute(`oninput`, `return;`),
                br = typeof xr.oninput == `function`
            }
            yr = br
        } else
            yr = !1;
        vr = yr && (!document.documentMode || 9 < document.documentMode)
    }
    function Sr() {
        pr && (pr.detachEvent(`onpropertychange`, Cr),
        mr = pr = null)
    }
    function Cr(e) {
        if (e.propertyName === `value` && gr(mr)) {
            var t = [];
            fr(t, mr, e, un(e)),
            hn(hr, t)
        }
    }
    function wr(e, t, n) {
        e === `focusin` ? (Sr(),
        pr = t,
        mr = n,
        pr.attachEvent(`onpropertychange`, Cr)) : e === `focusout` && Sr()
    }
    function Tr(e) {
        if (e === `selectionchange` || e === `keyup` || e === `keydown`)
            return gr(mr)
    }
    function Er(e, t) {
        if (e === `click`)
            return gr(t)
    }
    function Dr(e, t) {
        if (e === `input` || e === `change`)
            return gr(t)
    }
    function Or(e, t) {
        return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t
    }
    var kr = typeof Object.is == `function` ? Object.is : Or;
    function Ar(e, t) {
        if (kr(e, t))
            return !0;
        if (typeof e != `object` || !e || typeof t != `object` || !t)
            return !1;
        var n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!Oe.call(t, i) || !kr(e[i], t[i]))
                return !1
        }
        return !0
    }
    function jr(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function Mr(e, t) {
        var n = jr(e);
        e = 0;
        for (var r; n; ) {
            if (n.nodeType === 3) {
                if (r = e + n.textContent.length,
                e <= t && r >= t)
                    return {
                        node: n,
                        offset: t - e
                    };
                e = r
            }
            a: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break a
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = jr(n)
        }
    }
    function Nr(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Nr(e, t.parentNode) : `contains` in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Pr(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = Wt(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == `string`
            } catch {
                n = !1
            }
            if (n)
                e = t.contentWindow;
            else
                break;
            t = Wt(e.document)
        }
        return t
    }
    function Fr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === `input` && (e.type === `text` || e.type === `search` || e.type === `tel` || e.type === `url` || e.type === `password`) || t === `textarea` || e.contentEditable === `true`)
    }
    var Ir = _n && `documentMode` in document && 11 >= document.documentMode
      , Lr = null
      , Rr = null
      , zr = null
      , Br = !1;
    function Vr(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Br || Lr == null || Lr !== Wt(r) || (r = Lr,
        `selectionStart` in r && Fr(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
        r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }),
        zr && Ar(zr, r) || (zr = r,
        r = Rd(Rr, `onSelect`),
        0 < r.length && (t = new kn(`onSelect`,`select`,null,t,n),
        e.push({
            event: t,
            listeners: r
        }),
        t.target = Lr)))
    }
    function Hr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n[`Webkit` + e] = `webkit` + t,
        n[`Moz` + e] = `moz` + t,
        n
    }
    var Ur = {
        animationend: Hr(`Animation`, `AnimationEnd`),
        animationiteration: Hr(`Animation`, `AnimationIteration`),
        animationstart: Hr(`Animation`, `AnimationStart`),
        transitionrun: Hr(`Transition`, `TransitionRun`),
        transitionstart: Hr(`Transition`, `TransitionStart`),
        transitioncancel: Hr(`Transition`, `TransitionCancel`),
        transitionend: Hr(`Transition`, `TransitionEnd`)
    }
      , Wr = {}
      , Gr = {};
    _n && (Gr = document.createElement(`div`).style,
    `AnimationEvent` in window || (delete Ur.animationend.animation,
    delete Ur.animationiteration.animation,
    delete Ur.animationstart.animation),
    `TransitionEvent` in window || delete Ur.transitionend.transition);
    function Kr(e) {
        if (Wr[e])
            return Wr[e];
        if (!Ur[e])
            return e;
        var t = Ur[e], n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in Gr)
                return Wr[e] = t[n];
        return e
    }
    var qr = Kr(`animationend`)
      , Jr = Kr(`animationiteration`)
      , Yr = Kr(`animationstart`)
      , Xr = Kr(`transitionrun`)
      , Zr = Kr(`transitionstart`)
      , Qr = Kr(`transitioncancel`)
      , $r = Kr(`transitionend`)
      , ei = new Map
      , ti = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
    ti.push(`scrollEnd`);
    function ni(e, t) {
        ei.set(e, t),
        At(t, [e])
    }
    var ri = typeof reportError == `function` ? reportError : function(e) {
        if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
            var t = new window.ErrorEvent(`error`,{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == `object` && typeof process.emit == `function`) {
            process.emit(`uncaughtException`, e);
            return
        }
        console.error(e)
    }
      , ii = []
      , ai = 0
      , oi = 0;
    function si() {
        for (var e = ai, t = oi = ai = 0; t < e; ) {
            var n = ii[t];
            ii[t++] = null;
            var r = ii[t];
            ii[t++] = null;
            var i = ii[t];
            ii[t++] = null;
            var a = ii[t];
            if (ii[t++] = null,
            r !== null && i !== null) {
                var o = r.pending;
                o === null ? i.next = i : (i.next = o.next,
                o.next = i),
                r.pending = i
            }
            a !== 0 && di(n, i, a)
        }
    }
    function ci(e, t, n, r) {
        ii[ai++] = e,
        ii[ai++] = t,
        ii[ai++] = n,
        ii[ai++] = r,
        oi |= r,
        e.lanes |= r,
        e = e.alternate,
        e !== null && (e.lanes |= r)
    }
    function li(e, t, n, r) {
        return ci(e, t, n, r),
        fi(e)
    }
    function ui(e, t) {
        return ci(e, null, null, t),
        fi(e)
    }
    function di(e, t, n) {
        e.lanes |= n;
        var r = e.alternate;
        r !== null && (r.lanes |= n);
        for (var i = !1, a = e.return; a !== null; )
            a.childLanes |= n,
            r = a.alternate,
            r !== null && (r.childLanes |= n),
            a.tag === 22 && (e = a.stateNode,
            e === null || e._visibility & 1 || (i = !0)),
            e = a,
            a = a.return;
        return e.tag === 3 ? (a = e.stateNode,
        i && t !== null && (i = 31 - Ge(n),
        e = a.hiddenUpdates,
        r = e[i],
        r === null ? e[i] = [t] : r.push(t),
        t.lane = n | 536870912),
        a) : null
    }
    function fi(e) {
        if (50 < Su)
            throw Su = 0,
            Cu = null,
            Error(i(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var pi = {};
    function mi(e, t, n, r) {
        this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function hi(e, t, n, r) {
        return new mi(e,t,n,r)
    }
    function gi(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function _i(e, t) {
        var n = e.alternate;
        return n === null ? (n = hi(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
        n.type = e.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = e.flags & 65011712,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n.refCleanup = e.refCleanup,
        n
    }
    function vi(e, t) {
        e.flags &= 65011714;
        var n = e.alternate;
        return n === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = n.childLanes,
        e.lanes = n.lanes,
        e.child = n.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = n.memoizedProps,
        e.memoizedState = n.memoizedState,
        e.updateQueue = n.updateQueue,
        e.type = n.type,
        t = n.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function yi(e, t, n, r, a, o) {
        var s = 0;
        if (r = e,
        typeof e == `function`)
            gi(e) && (s = 1);
        else if (typeof e == `string`)
            s = Qf(e, n, pe.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
        else
            a: switch (e) {
            case ne:
                return e = hi(31, n, t, a),
                e.elementType = ne,
                e.lanes = o,
                e;
            case y:
                return bi(n.children, a, o, t);
            case b:
                s = 8,
                a |= 24;
                break;
            case x:
                return e = hi(12, n, t, a | 2),
                e.elementType = x,
                e.lanes = o,
                e;
            case T:
                return e = hi(13, n, t, a),
                e.elementType = T,
                e.lanes = o,
                e;
            case ee:
                return e = hi(19, n, t, a),
                e.elementType = ee,
                e.lanes = o,
                e;
            default:
                if (typeof e == `object` && e)
                    switch (e.$$typeof) {
                    case C:
                        s = 10;
                        break a;
                    case S:
                        s = 9;
                        break a;
                    case w:
                        s = 11;
                        break a;
                    case te:
                        s = 14;
                        break a;
                    case E:
                        s = 16,
                        r = null;
                        break a
                    }
                s = 29,
                n = Error(i(130, e === null ? `null` : typeof e, ``)),
                r = null
            }
        return t = hi(s, n, t, a),
        t.elementType = e,
        t.type = r,
        t.lanes = o,
        t
    }
    function bi(e, t, n, r) {
        return e = hi(7, e, r, t),
        e.lanes = n,
        e
    }
    function xi(e, t, n) {
        return e = hi(6, e, null, t),
        e.lanes = n,
        e
    }
    function Si(e) {
        var t = hi(18, null, null, 0);
        return t.stateNode = e,
        t
    }
    function Ci(e, t, n) {
        return t = hi(4, e.children === null ? [] : e.children, e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var wi = new WeakMap;
    function Ti(e, t) {
        if (typeof e == `object` && e) {
            var n = wi.get(e);
            return n === void 0 ? (t = {
                value: e,
                source: t,
                stack: De(t)
            },
            wi.set(e, t),
            t) : n
        }
        return {
            value: e,
            source: t,
            stack: De(t)
        }
    }
    var Ei = []
      , Di = 0
      , Oi = null
      , ki = 0
      , Ai = []
      , ji = 0
      , Mi = null
      , Ni = 1
      , Pi = ``;
    function Fi(e, t) {
        Ei[Di++] = ki,
        Ei[Di++] = Oi,
        Oi = e,
        ki = t
    }
    function Ii(e, t, n) {
        Ai[ji++] = Ni,
        Ai[ji++] = Pi,
        Ai[ji++] = Mi,
        Mi = e;
        var r = Ni;
        e = Pi;
        var i = 32 - Ge(r) - 1;
        r &= ~(1 << i),
        n += 1;
        var a = 32 - Ge(t) + i;
        if (30 < a) {
            var o = i - i % 5;
            a = (r & (1 << o) - 1).toString(32),
            r >>= o,
            i -= o,
            Ni = 1 << 32 - Ge(t) + i | n << i | r,
            Pi = a + e
        } else
            Ni = 1 << a | n << i | r,
            Pi = e
    }
    function Li(e) {
        e.return !== null && (Fi(e, 1),
        Ii(e, 1, 0))
    }
    function Ri(e) {
        for (; e === Oi; )
            Oi = Ei[--Di],
            Ei[Di] = null,
            ki = Ei[--Di],
            Ei[Di] = null;
        for (; e === Mi; )
            Mi = Ai[--ji],
            Ai[ji] = null,
            Pi = Ai[--ji],
            Ai[ji] = null,
            Ni = Ai[--ji],
            Ai[ji] = null
    }
    function zi(e, t) {
        Ai[ji++] = Ni,
        Ai[ji++] = Pi,
        Ai[ji++] = Mi,
        Ni = t.id,
        Pi = t.overflow,
        Mi = e
    }
    var Bi = null
      , Vi = null
      , M = !1
      , Hi = null
      , Ui = !1
      , N = Error(i(519));
    function Wi(e) {
        throw Xi(Ti(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e)),
        N
    }
    function Gi(e) {
        var t = e.stateNode
          , n = e.type
          , r = e.memoizedProps;
        switch (t[mt] = e,
        t[ht] = r,
        n) {
        case `dialog`:
            B(`cancel`, t),
            B(`close`, t);
            break;
        case `iframe`:
        case `object`:
        case `embed`:
            B(`load`, t);
            break;
        case `video`:
        case `audio`:
            for (n = 0; n < kd.length; n++)
                B(kd[n], t);
            break;
        case `source`:
            B(`error`, t);
            break;
        case `img`:
        case `image`:
        case `link`:
            B(`error`, t),
            B(`load`, t);
            break;
        case `details`:
            B(`toggle`, t);
            break;
        case `input`:
            B(`invalid`, t),
            Jt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
            break;
        case `select`:
            B(`invalid`, t);
            break;
        case `textarea`:
            B(`invalid`, t),
            Qt(t, r.value, r.defaultValue, r.children)
        }
        n = r.children,
        typeof n != `string` && typeof n != `number` && typeof n != `bigint` || t.textContent === `` + n || !0 === r.suppressHydrationWarning || Wd(t.textContent, n) ? (r.popover != null && (B(`beforetoggle`, t),
        B(`toggle`, t)),
        r.onScroll != null && B(`scroll`, t),
        r.onScrollEnd != null && B(`scrollend`, t),
        r.onClick != null && (t.onclick = cn),
        t = !0) : t = !1,
        t || Wi(e, !0)
    }
    function Ki(e) {
        for (Bi = e.return; Bi; )
            switch (Bi.tag) {
            case 5:
            case 31:
            case 13:
                Ui = !1;
                return;
            case 27:
            case 3:
                Ui = !0;
                return;
            default:
                Bi = Bi.return
            }
    }
    function qi(e) {
        if (e !== Bi)
            return !1;
        if (!M)
            return Ki(e),
            M = !0,
            !1;
        var t = e.tag, n;
        if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type,
        n = n === `form` || n === `button` || tf(e.type, e.memoizedProps)),
        n = !n),
        n && Vi && Wi(e),
        Ki(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e === null ? null : e.dehydrated,
            !e)
                throw Error(i(317));
            Vi = xf(e)
        } else if (t === 31) {
            if (e = e.memoizedState,
            e = e === null ? null : e.dehydrated,
            !e)
                throw Error(i(317));
            Vi = xf(e)
        } else
            t === 27 ? (t = Vi,
            uf(e.type) ? (e = bf,
            bf = null,
            Vi = e) : Vi = t) : Vi = Bi ? yf(e.stateNode.nextSibling) : null;
        return !0
    }
    function Ji() {
        Vi = Bi = null,
        M = !1
    }
    function Yi() {
        var e = Hi;
        return e !== null && (cu === null ? cu = e : cu.push.apply(cu, e),
        Hi = null),
        e
    }
    function Xi(e) {
        Hi === null ? Hi = [e] : Hi.push(e)
    }
    var Zi = fe(null)
      , Qi = null
      , $i = null;
    function ea(e, t, n) {
        A(Zi, t._currentValue),
        t._currentValue = n
    }
    function ta(e) {
        e._currentValue = Zi.current,
        k(Zi)
    }
    function na(e, t, n) {
        for (; e !== null; ) {
            var r = e.alternate;
            if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t,
            r !== null && (r.childLanes |= t)),
            e === n)
                break;
            e = e.return
        }
    }
    function ra(e, t, n, r) {
        var a = e.child;
        for (a !== null && (a.return = e); a !== null; ) {
            var o = a.dependencies;
            if (o !== null) {
                var s = a.child;
                o = o.firstContext;
                a: for (; o !== null; ) {
                    var c = o;
                    o = a;
                    for (var l = 0; l < t.length; l++)
                        if (c.context === t[l]) {
                            o.lanes |= n,
                            c = o.alternate,
                            c !== null && (c.lanes |= n),
                            na(o.return, n, e),
                            r || (s = null);
                            break a
                        }
                    o = c.next
                }
            } else if (a.tag === 18) {
                if (s = a.return,
                s === null)
                    throw Error(i(341));
                s.lanes |= n,
                o = s.alternate,
                o !== null && (o.lanes |= n),
                na(s, n, e),
                s = null
            } else
                s = a.child;
            if (s !== null)
                s.return = a;
            else
                for (s = a; s !== null; ) {
                    if (s === e) {
                        s = null;
                        break
                    }
                    if (a = s.sibling,
                    a !== null) {
                        a.return = s.return,
                        s = a;
                        break
                    }
                    s = s.return
                }
            a = s
        }
    }
    function ia(e, t, n, r) {
        e = null;
        for (var a = t, o = !1; a !== null; ) {
            if (!o) {
                if (a.flags & 524288)
                    o = !0;
                else if (a.flags & 262144)
                    break
            }
            if (a.tag === 10) {
                var s = a.alternate;
                if (s === null)
                    throw Error(i(387));
                if (s = s.memoizedProps,
                s !== null) {
                    var c = a.type;
                    kr(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c))
                }
            } else if (a === ge.current) {
                if (s = a.alternate,
                s === null)
                    throw Error(i(387));
                s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [sp] : e.push(sp))
            }
            a = a.return
        }
        e !== null && ra(t, e, n, r),
        t.flags |= 262144
    }
    function aa(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!kr(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function oa(e) {
        Qi = e,
        $i = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function sa(e) {
        return la(Qi, e)
    }
    function ca(e, t) {
        return Qi === null && oa(e),
        la(e, t)
    }
    function la(e, t) {
        var n = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: n,
            next: null
        },
        $i === null) {
            if (e === null)
                throw Error(i(308));
            $i = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            $i = $i.next = t;
        return n
    }
    var ua = typeof AbortController < `u` ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(t, n) {
                e.push(n)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(e) {
                return e()
            })
        }
    }
      , da = t.unstable_scheduleCallback
      , fa = t.unstable_NormalPriority
      , pa = {
        $$typeof: C,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function ma() {
        return {
            controller: new ua,
            data: new Map,
            refCount: 0
        }
    }
    function ha(e) {
        e.refCount--,
        e.refCount === 0 && da(fa, function() {
            e.controller.abort()
        })
    }
    var ga = null
      , _a = 0
      , va = 0
      , ya = null;
    function ba(e, t) {
        if (ga === null) {
            var n = ga = [];
            _a = 0,
            va = Cd(),
            ya = {
                status: `pending`,
                value: void 0,
                then: function(e) {
                    n.push(e)
                }
            }
        }
        return _a++,
        t.then(xa, xa),
        t
    }
    function xa() {
        if (--_a === 0 && ga !== null) {
            ya !== null && (ya.status = `fulfilled`);
            var e = ga;
            ga = null,
            va = 0,
            ya = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function Sa(e, t) {
        var n = []
          , r = {
            status: `pending`,
            value: null,
            reason: null,
            then: function(e) {
                n.push(e)
            }
        };
        return e.then(function() {
            r.status = `fulfilled`,
            r.value = t;
            for (var e = 0; e < n.length; e++)
                (0,
                n[e])(t)
        }, function(e) {
            for (r.status = `rejected`,
            r.reason = e,
            e = 0; e < n.length; e++)
                (0,
                n[e])(void 0)
        }),
        r
    }
    var Ca = D.S;
    D.S = function(e, t) {
        du = Ne(),
        typeof t == `object` && t && typeof t.then == `function` && ba(e, t),
        Ca !== null && Ca(e, t)
    }
    ;
    var wa = fe(null);
    function Ta() {
        var e = wa.current;
        return e === null ? Jl.pooledCache : e
    }
    function Ea(e, t) {
        t === null ? A(wa, wa.current) : A(wa, t.pool)
    }
    function Da() {
        var e = Ta();
        return e === null ? null : {
            parent: pa._currentValue,
            pool: e
        }
    }
    var Oa = Error(i(460))
      , ka = Error(i(474))
      , Aa = Error(i(542))
      , ja = {
        then: function() {}
    };
    function Ma(e) {
        return e = e.status,
        e === `fulfilled` || e === `rejected`
    }
    function Na(e, t, n) {
        switch (n = e[n],
        n === void 0 ? e.push(t) : n !== t && (t.then(cn, cn),
        t = n),
        t.status) {
        case `fulfilled`:
            return t.value;
        case `rejected`:
            throw e = t.reason,
            La(e),
            e;
        default:
            if (typeof t.status == `string`)
                t.then(cn, cn);
            else {
                if (e = Jl,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(i(482));
                e = t,
                e.status = `pending`,
                e.then(function(e) {
                    if (t.status === `pending`) {
                        var n = t;
                        n.status = `fulfilled`,
                        n.value = e
                    }
                }, function(e) {
                    if (t.status === `pending`) {
                        var n = t;
                        n.status = `rejected`,
                        n.reason = e
                    }
                })
            }
            switch (t.status) {
            case `fulfilled`:
                return t.value;
            case `rejected`:
                throw e = t.reason,
                La(e),
                e
            }
            throw Fa = t,
            Oa
        }
    }
    function Pa(e) {
        try {
            var t = e._init;
            return t(e._payload)
        } catch (e) {
            throw typeof e == `object` && e && typeof e.then == `function` ? (Fa = e,
            Oa) : e
        }
    }
    var Fa = null;
    function Ia() {
        if (Fa === null)
            throw Error(i(459));
        var e = Fa;
        return Fa = null,
        e
    }
    function La(e) {
        if (e === Oa || e === Aa)
            throw Error(i(483))
    }
    var Ra = null
      , za = 0;
    function Ba(e) {
        var t = za;
        return za += 1,
        Ra === null && (Ra = []),
        Na(Ra, e, t)
    }
    function Va(e, t) {
        t = t.props.ref,
        e.ref = t === void 0 ? null : t
    }
    function Ha(e, t) {
        throw t.$$typeof === g ? Error(i(525)) : (e = Object.prototype.toString.call(t),
        Error(i(31, e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e)))
    }
    function Ua(e) {
        function t(t, n) {
            if (e) {
                var r = t.deletions;
                r === null ? (t.deletions = [n],
                t.flags |= 16) : r.push(n)
            }
        }
        function n(n, r) {
            if (!e)
                return null;
            for (; r !== null; )
                t(n, r),
                r = r.sibling;
            return null
        }
        function r(e) {
            for (var t = new Map; e !== null; )
                e.key === null ? t.set(e.index, e) : t.set(e.key, e),
                e = e.sibling;
            return t
        }
        function a(e, t) {
            return e = _i(e, t),
            e.index = 0,
            e.sibling = null,
            e
        }
        function o(t, n, r) {
            return t.index = r,
            e ? (r = t.alternate,
            r === null ? (t.flags |= 67108866,
            n) : (r = r.index,
            r < n ? (t.flags |= 67108866,
            n) : r)) : (t.flags |= 1048576,
            n)
        }
        function s(t) {
            return e && t.alternate === null && (t.flags |= 67108866),
            t
        }
        function c(e, t, n, r) {
            return t === null || t.tag !== 6 ? (t = xi(n, e.mode, r),
            t.return = e,
            t) : (t = a(t, n),
            t.return = e,
            t)
        }
        function l(e, t, n, r) {
            var i = n.type;
            return i === y ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == `object` && i && i.$$typeof === E && Pa(i) === t.type) ? (t = a(t, n.props),
            Va(t, n),
            t.return = e,
            t) : (t = yi(n.type, n.key, n.props, null, e.mode, r),
            Va(t, n),
            t.return = e,
            t)
        }
        function u(e, t, n, r) {
            return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Ci(n, e.mode, r),
            t.return = e,
            t) : (t = a(t, n.children || []),
            t.return = e,
            t)
        }
        function d(e, t, n, r, i) {
            return t === null || t.tag !== 7 ? (t = bi(n, e.mode, r, i),
            t.return = e,
            t) : (t = a(t, n),
            t.return = e,
            t)
        }
        function f(e, t, n) {
            if (typeof t == `string` && t !== `` || typeof t == `number` || typeof t == `bigint`)
                return t = xi(`` + t, e.mode, n),
                t.return = e,
                t;
            if (typeof t == `object` && t) {
                switch (t.$$typeof) {
                case _:
                    return n = yi(t.type, t.key, t.props, null, e.mode, n),
                    Va(n, t),
                    n.return = e,
                    n;
                case v:
                    return t = Ci(t, e.mode, n),
                    t.return = e,
                    t;
                case E:
                    return t = Pa(t),
                    f(e, t, n)
                }
                if (ce(t) || ae(t))
                    return t = bi(t, e.mode, n, null),
                    t.return = e,
                    t;
                if (typeof t.then == `function`)
                    return f(e, Ba(t), n);
                if (t.$$typeof === C)
                    return f(e, ca(e, t), n);
                Ha(e, t)
            }
            return null
        }
        function p(e, t, n, r) {
            var i = t === null ? null : t.key;
            if (typeof n == `string` && n !== `` || typeof n == `number` || typeof n == `bigint`)
                return i === null ? c(e, t, `` + n, r) : null;
            if (typeof n == `object` && n) {
                switch (n.$$typeof) {
                case _:
                    return n.key === i ? l(e, t, n, r) : null;
                case v:
                    return n.key === i ? u(e, t, n, r) : null;
                case E:
                    return n = Pa(n),
                    p(e, t, n, r)
                }
                if (ce(n) || ae(n))
                    return i === null ? d(e, t, n, r, null) : null;
                if (typeof n.then == `function`)
                    return p(e, t, Ba(n), r);
                if (n.$$typeof === C)
                    return p(e, t, ca(e, n), r);
                Ha(e, n)
            }
            return null
        }
        function m(e, t, n, r, i) {
            if (typeof r == `string` && r !== `` || typeof r == `number` || typeof r == `bigint`)
                return e = e.get(n) || null,
                c(t, e, `` + r, i);
            if (typeof r == `object` && r) {
                switch (r.$$typeof) {
                case _:
                    return e = e.get(r.key === null ? n : r.key) || null,
                    l(t, e, r, i);
                case v:
                    return e = e.get(r.key === null ? n : r.key) || null,
                    u(t, e, r, i);
                case E:
                    return r = Pa(r),
                    m(e, t, n, r, i)
                }
                if (ce(r) || ae(r))
                    return e = e.get(n) || null,
                    d(t, e, r, i, null);
                if (typeof r.then == `function`)
                    return m(e, t, n, Ba(r), i);
                if (r.$$typeof === C)
                    return m(e, t, n, ca(t, r), i);
                Ha(t, r)
            }
            return null
        }
        function h(i, a, s, c) {
            for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
                d.index > h ? (g = d,
                d = null) : g = d.sibling;
                var _ = p(i, d, s[h], c);
                if (_ === null) {
                    d === null && (d = g);
                    break
                }
                e && d && _.alternate === null && t(i, d),
                a = o(_, a, h),
                u === null ? l = _ : u.sibling = _,
                u = _,
                d = g
            }
            if (h === s.length)
                return n(i, d),
                M && Fi(i, h),
                l;
            if (d === null) {
                for (; h < s.length; h++)
                    d = f(i, s[h], c),
                    d !== null && (a = o(d, a, h),
                    u === null ? l = d : u.sibling = d,
                    u = d);
                return M && Fi(i, h),
                l
            }
            for (d = r(d); h < s.length; h++)
                g = m(d, i, h, s[h], c),
                g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key),
                a = o(g, a, h),
                u === null ? l = g : u.sibling = g,
                u = g);
            return e && d.forEach(function(e) {
                return t(i, e)
            }),
            M && Fi(i, h),
            l
        }
        function g(a, s, c, l) {
            if (c == null)
                throw Error(i(151));
            for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++,
            v = c.next()) {
                h.index > g ? (_ = h,
                h = null) : _ = h.sibling;
                var y = p(a, h, v.value, l);
                if (y === null) {
                    h === null && (h = _);
                    break
                }
                e && h && y.alternate === null && t(a, h),
                s = o(y, s, g),
                d === null ? u = y : d.sibling = y,
                d = y,
                h = _
            }
            if (v.done)
                return n(a, h),
                M && Fi(a, g),
                u;
            if (h === null) {
                for (; !v.done; g++,
                v = c.next())
                    v = f(a, v.value, l),
                    v !== null && (s = o(v, s, g),
                    d === null ? u = v : d.sibling = v,
                    d = v);
                return M && Fi(a, g),
                u
            }
            for (h = r(h); !v.done; g++,
            v = c.next())
                v = m(h, a, g, v.value, l),
                v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key),
                s = o(v, s, g),
                d === null ? u = v : d.sibling = v,
                d = v);
            return e && h.forEach(function(e) {
                return t(a, e)
            }),
            M && Fi(a, g),
            u
        }
        function b(e, r, o, c) {
            if (typeof o == `object` && o && o.type === y && o.key === null && (o = o.props.children),
            typeof o == `object` && o) {
                switch (o.$$typeof) {
                case _:
                    a: {
                        for (var l = o.key; r !== null; ) {
                            if (r.key === l) {
                                if (l = o.type,
                                l === y) {
                                    if (r.tag === 7) {
                                        n(e, r.sibling),
                                        c = a(r, o.props.children),
                                        c.return = e,
                                        e = c;
                                        break a
                                    }
                                } else if (r.elementType === l || typeof l == `object` && l && l.$$typeof === E && Pa(l) === r.type) {
                                    n(e, r.sibling),
                                    c = a(r, o.props),
                                    Va(c, o),
                                    c.return = e,
                                    e = c;
                                    break a
                                }
                                n(e, r);
                                break
                            }
                            t(e, r),
                            r = r.sibling
                        }
                        o.type === y ? (c = bi(o.props.children, e.mode, c, o.key),
                        c.return = e,
                        e = c) : (c = yi(o.type, o.key, o.props, null, e.mode, c),
                        Va(c, o),
                        c.return = e,
                        e = c)
                    }
                    return s(e);
                case v:
                    a: {
                        for (l = o.key; r !== null; ) {
                            if (r.key === l)
                                if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                    n(e, r.sibling),
                                    c = a(r, o.children || []),
                                    c.return = e,
                                    e = c;
                                    break a
                                } else {
                                    n(e, r);
                                    break
                                }
                            t(e, r),
                            r = r.sibling
                        }
                        c = Ci(o, e.mode, c),
                        c.return = e,
                        e = c
                    }
                    return s(e);
                case E:
                    return o = Pa(o),
                    b(e, r, o, c)
                }
                if (ce(o))
                    return h(e, r, o, c);
                if (ae(o)) {
                    if (l = ae(o),
                    typeof l != `function`)
                        throw Error(i(150));
                    return o = l.call(o),
                    g(e, r, o, c)
                }
                if (typeof o.then == `function`)
                    return b(e, r, Ba(o), c);
                if (o.$$typeof === C)
                    return b(e, r, ca(e, o), c);
                Ha(e, o)
            }
            return typeof o == `string` && o !== `` || typeof o == `number` || typeof o == `bigint` ? (o = `` + o,
            r !== null && r.tag === 6 ? (n(e, r.sibling),
            c = a(r, o),
            c.return = e,
            e = c) : (n(e, r),
            c = xi(o, e.mode, c),
            c.return = e,
            e = c),
            s(e)) : n(e, r)
        }
        return function(e, t, n, r) {
            try {
                za = 0;
                var i = b(e, t, n, r);
                return Ra = null,
                i
            } catch (t) {
                if (t === Oa || t === Aa)
                    throw t;
                var a = hi(29, t, null, e.mode);
                return a.lanes = r,
                a.return = e,
                a
            }
        }
    }
    var Wa = Ua(!0)
      , Ga = Ua(!1)
      , Ka = !1;
    function qa(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Ja(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function Ya(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Xa(e, t, n) {
        var r = e.updateQueue;
        if (r === null)
            return null;
        if (r = r.shared,
        L & 2) {
            var i = r.pending;
            return i === null ? t.next = t : (t.next = i.next,
            i.next = t),
            r.pending = t,
            t = fi(e),
            di(e, null, n),
            t
        }
        return ci(e, r, t, n),
        fi(e)
    }
    function Za(e, t, n) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        n & 4194048)) {
            var r = t.lanes;
            r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            st(e, n)
        }
    }
    function Qa(e, t) {
        var n = e.updateQueue
          , r = e.alternate;
        if (r !== null && (r = r.updateQueue,
        n === r)) {
            var i = null
              , a = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var o = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    a === null ? i = a = o : a = a.next = o,
                    n = n.next
                } while (n !== null);
                a === null ? i = a = t : a = a.next = t
            } else
                i = a = t;
            n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: r.shared,
                callbacks: r.callbacks
            },
            e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
    }
    var $a = !1;
    function eo() {
        if ($a) {
            var e = ya;
            if (e !== null)
                throw e
        }
    }
    function to(e, t, n, r) {
        $a = !1;
        var i = e.updateQueue;
        Ka = !1;
        var a = i.firstBaseUpdate
          , o = i.lastBaseUpdate
          , s = i.shared.pending;
        if (s !== null) {
            i.shared.pending = null;
            var c = s
              , l = c.next;
            c.next = null,
            o === null ? a = l : o.next = l,
            o = c;
            var u = e.alternate;
            u !== null && (u = u.updateQueue,
            s = u.lastBaseUpdate,
            s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l,
            u.lastBaseUpdate = c))
        }
        if (a !== null) {
            var d = i.baseState;
            o = 0,
            u = l = c = null,
            s = a;
            do {
                var f = s.lane & -536870913
                  , p = f !== s.lane;
                if (p ? (z & f) === f : (r & f) === f) {
                    f !== 0 && f === va && ($a = !0),
                    u !== null && (u = u.next = {
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: null,
                        next: null
                    });
                    a: {
                        var m = e
                          , g = s;
                        f = t;
                        var _ = n;
                        switch (g.tag) {
                        case 1:
                            if (m = g.payload,
                            typeof m == `function`) {
                                d = m.call(_, d, f);
                                break a
                            }
                            d = m;
                            break a;
                        case 3:
                            m.flags = m.flags & -65537 | 128;
                        case 0:
                            if (m = g.payload,
                            f = typeof m == `function` ? m.call(_, d, f) : m,
                            f == null)
                                break a;
                            d = h({}, d, f);
                            break a;
                        case 2:
                            Ka = !0
                        }
                    }
                    f = s.callback,
                    f !== null && (e.flags |= 64,
                    p && (e.flags |= 8192),
                    p = i.callbacks,
                    p === null ? i.callbacks = [f] : p.push(f))
                } else
                    p = {
                        lane: f,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    },
                    u === null ? (l = u = p,
                    c = d) : u = u.next = p,
                    o |= f;
                if (s = s.next,
                s === null) {
                    if (s = i.shared.pending,
                    s === null)
                        break;
                    p = s,
                    s = p.next,
                    p.next = null,
                    i.lastBaseUpdate = p,
                    i.shared.pending = null
                }
            } while (1);
            u === null && (c = d),
            i.baseState = c,
            i.firstBaseUpdate = l,
            i.lastBaseUpdate = u,
            a === null && (i.shared.lanes = 0),
            nu |= o,
            e.lanes = o,
            e.memoizedState = d
        }
    }
    function no(e, t) {
        if (typeof e != `function`)
            throw Error(i(191, e));
        e.call(t)
    }
    function ro(e, t) {
        var n = e.callbacks;
        if (n !== null)
            for (e.callbacks = null,
            e = 0; e < n.length; e++)
                no(n[e], t)
    }
    var io = fe(null)
      , ao = fe(0);
    function oo(e, t) {
        e = eu,
        A(ao, e),
        A(io, t),
        eu = e | t.baseLanes
    }
    function so() {
        A(ao, eu),
        A(io, io.current)
    }
    function co() {
        eu = ao.current,
        k(io),
        k(ao)
    }
    var lo = fe(null)
      , uo = null;
    function fo(e) {
        var t = e.alternate;
        A(_o, _o.current & 1),
        A(lo, e),
        uo === null && (t === null || io.current !== null || t.memoizedState !== null) && (uo = e)
    }
    function po(e) {
        A(_o, _o.current),
        A(lo, e),
        uo === null && (uo = e)
    }
    function mo(e) {
        e.tag === 22 ? (A(_o, _o.current),
        A(lo, e),
        uo === null && (uo = e)) : ho(e)
    }
    function ho() {
        A(_o, _o.current),
        A(lo, lo.current)
    }
    function go(e) {
        k(lo),
        uo === e && (uo = null),
        k(_o)
    }
    var _o = fe(0);
    function vo(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || gf(n) || _f(n)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === `forwards` || t.memoizedProps.revealOrder === `backwards` || t.memoizedProps.revealOrder === `unstable_legacy-backwards` || t.memoizedProps.revealOrder === `together`)) {
                if (t.flags & 128)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var yo = 0
      , P = null
      , bo = null
      , xo = null
      , So = !1
      , Co = !1
      , wo = !1
      , To = 0
      , Eo = 0
      , Do = null
      , Oo = 0;
    function ko() {
        throw Error(i(321))
    }
    function Ao(e, t) {
        if (t === null)
            return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!kr(e[n], t[n]))
                return !1;
        return !0
    }
    function jo(e, t, n, r, i, a) {
        return yo = a,
        P = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        D.H = e === null || e.memoizedState === null ? qs : Js,
        wo = !1,
        a = n(r, i),
        wo = !1,
        Co && (a = No(t, n, r, i)),
        Mo(e),
        a
    }
    function Mo(e) {
        D.H = F;
        var t = bo !== null && bo.next !== null;
        if (yo = 0,
        xo = bo = P = null,
        So = !1,
        Eo = 0,
        Do = null,
        t)
            throw Error(i(300));
        e === null || uc || (e = e.dependencies,
        e !== null && aa(e) && (uc = !0))
    }
    function No(e, t, n, r) {
        P = e;
        var a = 0;
        do {
            if (Co && (Do = null),
            Eo = 0,
            Co = !1,
            25 <= a)
                throw Error(i(301));
            if (a += 1,
            xo = bo = null,
            e.updateQueue != null) {
                var o = e.updateQueue;
                o.lastEffect = null,
                o.events = null,
                o.stores = null,
                o.memoCache != null && (o.memoCache.index = 0)
            }
            D.H = Ys,
            o = t(n, r)
        } while (Co);
        return o
    }
    function Po() {
        var e = D.H
          , t = e.useState()[0];
        return t = typeof t.then == `function` ? Vo(t) : t,
        e = e.useState()[0],
        (bo === null ? null : bo.memoizedState) !== e && (P.flags |= 1024),
        t
    }
    function Fo() {
        var e = To !== 0;
        return To = 0,
        e
    }
    function Io(e, t, n) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~n
    }
    function Lo(e) {
        if (So) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            So = !1
        }
        yo = 0,
        xo = bo = P = null,
        Co = !1,
        Eo = To = 0,
        Do = null
    }
    function Ro() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return xo === null ? P.memoizedState = xo = e : xo = xo.next = e,
        xo
    }
    function zo() {
        if (bo === null) {
            var e = P.alternate;
            e = e === null ? null : e.memoizedState
        } else
            e = bo.next;
        var t = xo === null ? P.memoizedState : xo.next;
        if (t !== null)
            xo = t,
            bo = e;
        else {
            if (e === null)
                throw P.alternate === null ? Error(i(467)) : Error(i(310));
            bo = e,
            e = {
                memoizedState: bo.memoizedState,
                baseState: bo.baseState,
                baseQueue: bo.baseQueue,
                queue: bo.queue,
                next: null
            },
            xo === null ? P.memoizedState = xo = e : xo = xo.next = e
        }
        return xo
    }
    function Bo() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Vo(e) {
        var t = Eo;
        return Eo += 1,
        Do === null && (Do = []),
        e = Na(Do, e, t),
        t = P,
        (xo === null ? t.memoizedState : xo.next) === null && (t = t.alternate,
        D.H = t === null || t.memoizedState === null ? qs : Js),
        e
    }
    function Ho(e) {
        if (typeof e == `object` && e) {
            if (typeof e.then == `function`)
                return Vo(e);
            if (e.$$typeof === C)
                return sa(e)
        }
        throw Error(i(438, String(e)))
    }
    function Uo(e) {
        var t = null
          , n = P.updateQueue;
        if (n !== null && (t = n.memoCache),
        t == null) {
            var r = P.alternate;
            r !== null && (r = r.updateQueue,
            r !== null && (r = r.memoCache,
            r != null && (t = {
                data: r.data.map(function(e) {
                    return e.slice()
                }),
                index: 0
            })))
        }
        if (t ??= {
            data: [],
            index: 0
        },
        n === null && (n = Bo(),
        P.updateQueue = n),
        n.memoCache = t,
        n = t.data[t.index],
        n === void 0)
            for (n = t.data[t.index] = Array(e),
            r = 0; r < e; r++)
                n[r] = re;
        return t.index++,
        n
    }
    function Wo(e, t) {
        return typeof t == `function` ? t(e) : t
    }
    function Go(e) {
        return Ko(zo(), bo, e)
    }
    function Ko(e, t, n) {
        var r = e.queue;
        if (r === null)
            throw Error(i(311));
        r.lastRenderedReducer = n;
        var a = e.baseQueue
          , o = r.pending;
        if (o !== null) {
            if (a !== null) {
                var s = a.next;
                a.next = o.next,
                o.next = s
            }
            t.baseQueue = a = o,
            r.pending = null
        }
        if (o = e.baseState,
        a === null)
            e.memoizedState = o;
        else {
            t = a.next;
            var c = s = null
              , l = null
              , u = t
              , d = !1;
            do {
                var f = u.lane & -536870913;
                if (f === u.lane ? (yo & f) === f : (z & f) === f) {
                    var p = u.revertLane;
                    if (p === 0)
                        l !== null && (l = l.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null
                        }),
                        f === va && (d = !0);
                    else if ((yo & p) === p) {
                        u = u.next,
                        p === va && (d = !0);
                        continue
                    } else
                        f = {
                            lane: 0,
                            revertLane: u.revertLane,
                            gesture: null,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null
                        },
                        l === null ? (c = l = f,
                        s = o) : l = l.next = f,
                        P.lanes |= p,
                        nu |= p;
                    f = u.action,
                    wo && n(o, f),
                    o = u.hasEagerState ? u.eagerState : n(o, f)
                } else
                    p = {
                        lane: f,
                        revertLane: u.revertLane,
                        gesture: u.gesture,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null
                    },
                    l === null ? (c = l = p,
                    s = o) : l = l.next = p,
                    P.lanes |= f,
                    nu |= f;
                u = u.next
            } while (u !== null && u !== t);
            if (l === null ? s = o : l.next = c,
            !kr(o, e.memoizedState) && (uc = !0,
            d && (n = ya,
            n !== null)))
                throw n;
            e.memoizedState = o,
            e.baseState = s,
            e.baseQueue = l,
            r.lastRenderedState = o
        }
        return a === null && (r.lanes = 0),
        [e.memoizedState, r.dispatch]
    }
    function qo(e) {
        var t = zo()
          , n = t.queue;
        if (n === null)
            throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch
          , a = n.pending
          , o = t.memoizedState;
        if (a !== null) {
            n.pending = null;
            var s = a = a.next;
            do
                o = e(o, s.action),
                s = s.next;
            while (s !== a);
            kr(o, t.memoizedState) || (uc = !0),
            t.memoizedState = o,
            t.baseQueue === null && (t.baseState = o),
            n.lastRenderedState = o
        }
        return [o, r]
    }
    function Jo(e, t, n) {
        var r = P
          , a = zo()
          , o = M;
        if (o) {
            if (n === void 0)
                throw Error(i(407));
            n = n()
        } else
            n = t();
        var s = !kr((bo || a).memoizedState, n);
        if (s && (a.memoizedState = n,
        uc = !0),
        a = a.queue,
        ys(Zo.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || xo !== null && xo.memoizedState.tag & 1) {
            if (r.flags |= 2048,
            ms(9, {
                destroy: void 0
            }, Xo.bind(null, r, a, n, t), null),
            Jl === null)
                throw Error(i(349));
            o || yo & 127 || Yo(r, t, n)
        }
        return n
    }
    function Yo(e, t, n) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = P.updateQueue,
        t === null ? (t = Bo(),
        P.updateQueue = t,
        t.stores = [e]) : (n = t.stores,
        n === null ? t.stores = [e] : n.push(e))
    }
    function Xo(e, t, n, r) {
        t.value = n,
        t.getSnapshot = r,
        Qo(t) && $o(e)
    }
    function Zo(e, t, n) {
        return n(function() {
            Qo(t) && $o(e)
        })
    }
    function Qo(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !kr(e, n)
        } catch {
            return !0
        }
    }
    function $o(e) {
        var t = ui(e, 2);
        t !== null && Eu(t, e, 2)
    }
    function es(e) {
        var t = Ro();
        if (typeof e == `function`) {
            var n = e;
            if (e = n(),
            wo) {
                We(!0);
                try {
                    n()
                } finally {
                    We(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Wo,
            lastRenderedState: e
        },
        t
    }
    function ts(e, t, n, r) {
        return e.baseState = n,
        Ko(e, bo, typeof r == `function` ? r : Wo)
    }
    function ns(e, t, n, r, a) {
        if (Ws(e))
            throw Error(i(485));
        if (e = t.action,
        e !== null) {
            var o = {
                payload: a,
                action: e,
                next: null,
                isTransition: !0,
                status: `pending`,
                value: null,
                reason: null,
                listeners: [],
                then: function(e) {
                    o.listeners.push(e)
                }
            };
            D.T === null ? o.isTransition = !1 : n(!0),
            r(o),
            n = t.pending,
            n === null ? (o.next = t.pending = o,
            rs(t, o)) : (o.next = n.next,
            t.pending = n.next = o)
        }
    }
    function rs(e, t) {
        var n = t.action
          , r = t.payload
          , i = e.state;
        if (t.isTransition) {
            var a = D.T
              , o = {};
            D.T = o;
            try {
                var s = n(i, r)
                  , c = D.S;
                c !== null && c(o, s),
                is(e, t, s)
            } catch (n) {
                os(e, t, n)
            } finally {
                a !== null && o.types !== null && (a.types = o.types),
                D.T = a
            }
        } else
            try {
                a = n(i, r),
                is(e, t, a)
            } catch (n) {
                os(e, t, n)
            }
    }
    function is(e, t, n) {
        typeof n == `object` && n && typeof n.then == `function` ? n.then(function(n) {
            as(e, t, n)
        }, function(n) {
            return os(e, t, n)
        }) : as(e, t, n)
    }
    function as(e, t, n) {
        t.status = `fulfilled`,
        t.value = n,
        ss(t),
        e.state = n,
        t = e.pending,
        t !== null && (n = t.next,
        n === t ? e.pending = null : (n = n.next,
        t.next = n,
        rs(e, n)))
    }
    function os(e, t, n) {
        var r = e.pending;
        if (e.pending = null,
        r !== null) {
            r = r.next;
            do
                t.status = `rejected`,
                t.reason = n,
                ss(t),
                t = t.next;
            while (t !== r)
        }
        e.action = null
    }
    function ss(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function cs(e, t) {
        return t
    }
    function ls(e, t) {
        if (M) {
            var n = Jl.formState;
            if (n !== null) {
                a: {
                    var r = P;
                    if (M) {
                        if (Vi) {
                            b: {
                                for (var i = Vi, a = Ui; i.nodeType !== 8; ) {
                                    if (!a) {
                                        i = null;
                                        break b
                                    }
                                    if (i = yf(i.nextSibling),
                                    i === null) {
                                        i = null;
                                        break b
                                    }
                                }
                                a = i.data,
                                i = a === `F!` || a === `F` ? i : null
                            }
                            if (i) {
                                Vi = yf(i.nextSibling),
                                r = i.data === `F!`;
                                break a
                            }
                        }
                        Wi(r)
                    }
                    r = !1
                }
                r && (t = n[0])
            }
        }
        return n = Ro(),
        n.memoizedState = n.baseState = t,
        r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: cs,
            lastRenderedState: t
        },
        n.queue = r,
        n = Vs.bind(null, P, r),
        r.dispatch = n,
        r = es(!1),
        a = Us.bind(null, P, !1, r.queue),
        r = Ro(),
        i = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        r.queue = i,
        n = ns.bind(null, P, i, a, n),
        i.dispatch = n,
        r.memoizedState = e,
        [t, n, !1]
    }
    function us(e) {
        return ds(zo(), bo, e)
    }
    function ds(e, t, n) {
        if (t = Ko(e, t, cs)[0],
        e = Go(Wo)[0],
        typeof t == `object` && t && typeof t.then == `function`)
            try {
                var r = Vo(t)
            } catch (e) {
                throw e === Oa ? Aa : e
            }
        else
            r = t;
        t = zo();
        var i = t.queue
          , a = i.dispatch;
        return n !== t.memoizedState && (P.flags |= 2048,
        ms(9, {
            destroy: void 0
        }, fs.bind(null, i, n), null)),
        [r, a, e]
    }
    function fs(e, t) {
        e.action = t
    }
    function ps(e) {
        var t = zo()
          , n = bo;
        if (n !== null)
            return ds(t, n, e);
        zo(),
        t = t.memoizedState,
        n = zo();
        var r = n.queue.dispatch;
        return n.memoizedState = e,
        [t, r, !1]
    }
    function ms(e, t, n, r) {
        return e = {
            tag: e,
            create: n,
            deps: r,
            inst: t,
            next: null
        },
        t = P.updateQueue,
        t === null && (t = Bo(),
        P.updateQueue = t),
        n = t.lastEffect,
        n === null ? t.lastEffect = e.next = e : (r = n.next,
        n.next = e,
        e.next = r,
        t.lastEffect = e),
        e
    }
    function hs() {
        return zo().memoizedState
    }
    function gs(e, t, n, r) {
        var i = Ro();
        P.flags |= e,
        i.memoizedState = ms(1 | t, {
            destroy: void 0
        }, n, r === void 0 ? null : r)
    }
    function _s(e, t, n, r) {
        var i = zo();
        r = r === void 0 ? null : r;
        var a = i.memoizedState.inst;
        bo !== null && r !== null && Ao(r, bo.memoizedState.deps) ? i.memoizedState = ms(t, a, n, r) : (P.flags |= e,
        i.memoizedState = ms(1 | t, a, n, r))
    }
    function vs(e, t) {
        gs(8390656, 8, e, t)
    }
    function ys(e, t) {
        _s(2048, 8, e, t)
    }
    function bs(e) {
        P.flags |= 4;
        var t = P.updateQueue;
        if (t === null)
            t = Bo(),
            P.updateQueue = t,
            t.events = [e];
        else {
            var n = t.events;
            n === null ? t.events = [e] : n.push(e)
        }
    }
    function xs(e) {
        var t = zo().memoizedState;
        return bs({
            ref: t,
            nextImpl: e
        }),
        function() {
            if (L & 2)
                throw Error(i(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function Ss(e, t) {
        return _s(4, 2, e, t)
    }
    function Cs(e, t) {
        return _s(4, 4, e, t)
    }
    function ws(e, t) {
        if (typeof t == `function`) {
            e = e();
            var n = t(e);
            return function() {
                typeof n == `function` ? n() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function Ts(e, t, n) {
        n = n == null ? null : n.concat([e]),
        _s(4, 4, ws.bind(null, t, e), n)
    }
    function Es() {}
    function Ds(e, t) {
        var n = zo();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return t !== null && Ao(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
        e)
    }
    function Os(e, t) {
        var n = zo();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        if (t !== null && Ao(t, r[1]))
            return r[0];
        if (r = e(),
        wo) {
            We(!0);
            try {
                e()
            } finally {
                We(!1)
            }
        }
        return n.memoizedState = [r, t],
        r
    }
    function ks(e, t, n) {
        return n === void 0 || yo & 1073741824 && !(z & 261930) ? e.memoizedState = t : (e.memoizedState = n,
        e = Tu(),
        P.lanes |= e,
        nu |= e,
        n)
    }
    function As(e, t, n, r) {
        return kr(n, t) ? n : io.current === null ? !(yo & 42) || yo & 1073741824 && !(z & 261930) ? (uc = !0,
        e.memoizedState = n) : (e = Tu(),
        P.lanes |= e,
        nu |= e,
        t) : (e = ks(e, n, r),
        kr(e, t) || (uc = !0),
        e)
    }
    function js(e, t, n, r, i) {
        var a = O.p;
        O.p = a !== 0 && 8 > a ? a : 8;
        var o = D.T
          , s = {};
        D.T = s,
        Us(e, !1, t, n);
        try {
            var c = i()
              , l = D.S;
            l !== null && l(s, c),
            typeof c == `object` && c && typeof c.then == `function` ? Hs(e, t, Sa(c, r), wu(e)) : Hs(e, t, r, wu(e))
        } catch (n) {
            Hs(e, t, {
                then: function() {},
                status: `rejected`,
                reason: n
            }, wu())
        } finally {
            O.p = a,
            o !== null && s.types !== null && (o.types = s.types),
            D.T = o
        }
    }
    function Ms() {}
    function Ns(e, t, n, r) {
        if (e.tag !== 5)
            throw Error(i(476));
        var a = Ps(e).queue;
        js(e, a, t, le, n === null ? Ms : function() {
            return Fs(e),
            n(r)
        }
        )
    }
    function Ps(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: le,
            baseState: le,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Wo,
                lastRenderedState: le
            },
            next: null
        };
        var n = {};
        return t.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Wo,
                lastRenderedState: n
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function Fs(e) {
        var t = Ps(e);
        t.next === null && (t = e.alternate.memoizedState),
        Hs(e, t.next.queue, {}, wu())
    }
    function Is() {
        return sa(sp)
    }
    function Ls() {
        return zo().memoizedState
    }
    function Rs() {
        return zo().memoizedState
    }
    function zs(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var n = wu();
                e = Ya(n);
                var r = Xa(t, e, n);
                r !== null && (Eu(r, t, n),
                Za(r, t, n)),
                t = {
                    cache: ma()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function Bs(e, t, n) {
        var r = wu();
        n = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Ws(e) ? Gs(t, n) : (n = li(e, t, n, r),
        n !== null && (Eu(n, e, r),
        Ks(n, t, r)))
    }
    function Vs(e, t, n) {
        Hs(e, t, n, wu())
    }
    function Hs(e, t, n, r) {
        var i = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Ws(e))
            Gs(t, i);
        else {
            var a = e.alternate;
            if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer,
            a !== null))
                try {
                    var o = t.lastRenderedState
                      , s = a(o, n);
                    if (i.hasEagerState = !0,
                    i.eagerState = s,
                    kr(s, o))
                        return ci(e, t, i, 0),
                        Jl === null && si(),
                        !1
                } catch {}
            if (n = li(e, t, i, r),
            n !== null)
                return Eu(n, e, r),
                Ks(n, t, r),
                !0
        }
        return !1
    }
    function Us(e, t, n, r) {
        if (r = {
            lane: 2,
            revertLane: Cd(),
            gesture: null,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Ws(e)) {
            if (t)
                throw Error(i(479))
        } else
            t = li(e, n, r, 2),
            t !== null && Eu(t, e, 2)
    }
    function Ws(e) {
        var t = e.alternate;
        return e === P || t !== null && t === P
    }
    function Gs(e, t) {
        Co = So = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
    }
    function Ks(e, t, n) {
        if (n & 4194048) {
            var r = t.lanes;
            r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            st(e, n)
        }
    }
    var F = {
        readContext: sa,
        use: Ho,
        useCallback: ko,
        useContext: ko,
        useEffect: ko,
        useImperativeHandle: ko,
        useLayoutEffect: ko,
        useInsertionEffect: ko,
        useMemo: ko,
        useReducer: ko,
        useRef: ko,
        useState: ko,
        useDebugValue: ko,
        useDeferredValue: ko,
        useTransition: ko,
        useSyncExternalStore: ko,
        useId: ko,
        useHostTransitionStatus: ko,
        useFormState: ko,
        useActionState: ko,
        useOptimistic: ko,
        useMemoCache: ko,
        useCacheRefresh: ko
    };
    F.useEffectEvent = ko;
    var qs = {
        readContext: sa,
        use: Ho,
        useCallback: function(e, t) {
            return Ro().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: sa,
        useEffect: vs,
        useImperativeHandle: function(e, t, n) {
            n = n == null ? null : n.concat([e]),
            gs(4194308, 4, ws.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return gs(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            gs(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Ro();
            t = t === void 0 ? null : t;
            var r = e();
            if (wo) {
                We(!0);
                try {
                    e()
                } finally {
                    We(!1)
                }
            }
            return n.memoizedState = [r, t],
            r
        },
        useReducer: function(e, t, n) {
            var r = Ro();
            if (n !== void 0) {
                var i = n(t);
                if (wo) {
                    We(!0);
                    try {
                        n(t)
                    } finally {
                        We(!1)
                    }
                }
            } else
                i = t;
            return r.memoizedState = r.baseState = i,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: i
            },
            r.queue = e,
            e = e.dispatch = Bs.bind(null, P, e),
            [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Ro();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = es(e);
            var t = e.queue
              , n = Vs.bind(null, P, t);
            return t.dispatch = n,
            [e.memoizedState, n]
        },
        useDebugValue: Es,
        useDeferredValue: function(e, t) {
            return ks(Ro(), e, t)
        },
        useTransition: function() {
            var e = es(!1);
            return e = js.bind(null, P, e.queue, !0, !1),
            Ro().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, n) {
            var r = P
              , a = Ro();
            if (M) {
                if (n === void 0)
                    throw Error(i(407));
                n = n()
            } else {
                if (n = t(),
                Jl === null)
                    throw Error(i(349));
                z & 127 || Yo(r, t, n)
            }
            a.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return a.queue = o,
            vs(Zo.bind(null, r, o, e), [e]),
            r.flags |= 2048,
            ms(9, {
                destroy: void 0
            }, Xo.bind(null, r, o, n, t), null),
            n
        },
        useId: function() {
            var e = Ro()
              , t = Jl.identifierPrefix;
            if (M) {
                var n = Pi
                  , r = Ni;
                n = (r & ~(1 << 32 - Ge(r) - 1)).toString(32) + n,
                t = `_` + t + `R_` + n,
                n = To++,
                0 < n && (t += `H` + n.toString(32)),
                t += `_`
            } else
                n = Oo++,
                t = `_` + t + `r_` + n.toString(32) + `_`;
            return e.memoizedState = t
        },
        useHostTransitionStatus: Is,
        useFormState: ls,
        useActionState: ls,
        useOptimistic: function(e) {
            var t = Ro();
            t.memoizedState = t.baseState = e;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = n,
            t = Us.bind(null, P, !0, n),
            n.dispatch = t,
            [e, t]
        },
        useMemoCache: Uo,
        useCacheRefresh: function() {
            return Ro().memoizedState = zs.bind(null, P)
        },
        useEffectEvent: function(e) {
            var t = Ro()
              , n = {
                impl: e
            };
            return t.memoizedState = n,
            function() {
                if (L & 2)
                    throw Error(i(440));
                return n.impl.apply(void 0, arguments)
            }
        }
    }
      , Js = {
        readContext: sa,
        use: Ho,
        useCallback: Ds,
        useContext: sa,
        useEffect: ys,
        useImperativeHandle: Ts,
        useInsertionEffect: Ss,
        useLayoutEffect: Cs,
        useMemo: Os,
        useReducer: Go,
        useRef: hs,
        useState: function() {
            return Go(Wo)
        },
        useDebugValue: Es,
        useDeferredValue: function(e, t) {
            return As(zo(), bo.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Go(Wo)[0]
              , t = zo().memoizedState;
            return [typeof e == `boolean` ? e : Vo(e), t]
        },
        useSyncExternalStore: Jo,
        useId: Ls,
        useHostTransitionStatus: Is,
        useFormState: us,
        useActionState: us,
        useOptimistic: function(e, t) {
            return ts(zo(), bo, e, t)
        },
        useMemoCache: Uo,
        useCacheRefresh: Rs
    };
    Js.useEffectEvent = xs;
    var Ys = {
        readContext: sa,
        use: Ho,
        useCallback: Ds,
        useContext: sa,
        useEffect: ys,
        useImperativeHandle: Ts,
        useInsertionEffect: Ss,
        useLayoutEffect: Cs,
        useMemo: Os,
        useReducer: qo,
        useRef: hs,
        useState: function() {
            return qo(Wo)
        },
        useDebugValue: Es,
        useDeferredValue: function(e, t) {
            var n = zo();
            return bo === null ? ks(n, e, t) : As(n, bo.memoizedState, e, t)
        },
        useTransition: function() {
            var e = qo(Wo)[0]
              , t = zo().memoizedState;
            return [typeof e == `boolean` ? e : Vo(e), t]
        },
        useSyncExternalStore: Jo,
        useId: Ls,
        useHostTransitionStatus: Is,
        useFormState: ps,
        useActionState: ps,
        useOptimistic: function(e, t) {
            var n = zo();
            return bo === null ? (n.baseState = e,
            [e, n.queue.dispatch]) : ts(n, bo, e, t)
        },
        useMemoCache: Uo,
        useCacheRefresh: Rs
    };
    Ys.useEffectEvent = xs;
    function Xs(e, t, n, r) {
        t = e.memoizedState,
        n = n(r, t),
        n = n == null ? t : h({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var I = {
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = wu()
              , i = Ya(r);
            i.payload = t,
            n != null && (i.callback = n),
            t = Xa(e, i, r),
            t !== null && (Eu(t, e, r),
            Za(t, e, r))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = wu()
              , i = Ya(r);
            i.tag = 1,
            i.payload = t,
            n != null && (i.callback = n),
            t = Xa(e, i, r),
            t !== null && (Eu(t, e, r),
            Za(t, e, r))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = wu()
              , r = Ya(n);
            r.tag = 2,
            t != null && (r.callback = t),
            t = Xa(e, r, n),
            t !== null && (Eu(t, e, n),
            Za(t, e, n))
        }
    };
    function Zs(e, t, n, r, i, a, o) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == `function` ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Ar(n, r) || !Ar(i, a) : !0
    }
    function Qs(e, t, n, r) {
        e = t.state,
        typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && I.enqueueReplaceState(t, t.state, null)
    }
    function $s(e, t) {
        var n = t;
        if (`ref` in t)
            for (var r in n = {},
            t)
                r !== `ref` && (n[r] = t[r]);
        if (e = e.defaultProps)
            for (var i in n === t && (n = h({}, n)),
            e)
                n[i] === void 0 && (n[i] = e[i]);
        return n
    }
    function ec(e) {
        ri(e)
    }
    function tc(e) {
        console.error(e)
    }
    function nc(e) {
        ri(e)
    }
    function rc(e, t) {
        try {
            var n = e.onUncaughtError;
            n(t.value, {
                componentStack: t.stack
            })
        } catch (e) {
            setTimeout(function() {
                throw e
            })
        }
    }
    function ic(e, t, n) {
        try {
            var r = e.onCaughtError;
            r(n.value, {
                componentStack: n.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (e) {
            setTimeout(function() {
                throw e
            })
        }
    }
    function ac(e, t, n) {
        return n = Ya(n),
        n.tag = 3,
        n.payload = {
            element: null
        },
        n.callback = function() {
            rc(e, t)
        }
        ,
        n
    }
    function oc(e) {
        return e = Ya(e),
        e.tag = 3,
        e
    }
    function sc(e, t, n, r) {
        var i = n.type.getDerivedStateFromError;
        if (typeof i == `function`) {
            var a = r.value;
            e.payload = function() {
                return i(a)
            }
            ,
            e.callback = function() {
                ic(t, n, r)
            }
        }
        var o = n.stateNode;
        o !== null && typeof o.componentDidCatch == `function` && (e.callback = function() {
            ic(t, n, r),
            typeof i != `function` && (mu === null ? mu = new Set([this]) : mu.add(this));
            var e = r.stack;
            this.componentDidCatch(r.value, {
                componentStack: e === null ? `` : e
            })
        }
        )
    }
    function cc(e, t, n, r, a) {
        if (n.flags |= 32768,
        typeof r == `object` && r && typeof r.then == `function`) {
            if (t = n.alternate,
            t !== null && ia(t, n, a, !0),
            n = lo.current,
            n !== null) {
                switch (n.tag) {
                case 31:
                case 13:
                    return uo === null ? Ru() : n.alternate === null && tu === 0 && (tu = 3),
                    n.flags &= -257,
                    n.flags |= 65536,
                    n.lanes = a,
                    r === ja ? n.flags |= 16384 : (t = n.updateQueue,
                    t === null ? n.updateQueue = new Set([r]) : t.add(r),
                    rd(e, r, a)),
                    !1;
                case 22:
                    return n.flags |= 65536,
                    r === ja ? n.flags |= 16384 : (t = n.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([r])
                    },
                    n.updateQueue = t) : (n = t.retryQueue,
                    n === null ? t.retryQueue = new Set([r]) : n.add(r)),
                    rd(e, r, a)),
                    !1
                }
                throw Error(i(435, n.tag))
            }
            return rd(e, r, a),
            Ru(),
            !1
        }
        if (M)
            return t = lo.current,
            t === null ? (r !== N && (t = Error(i(423), {
                cause: r
            }),
            Xi(Ti(t, n))),
            e = e.current.alternate,
            e.flags |= 65536,
            a &= -a,
            e.lanes |= a,
            r = Ti(r, n),
            a = ac(e.stateNode, r, a),
            Qa(e, a),
            tu !== 4 && (tu = 2)) : (!(t.flags & 65536) && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = a,
            r !== N && (e = Error(i(422), {
                cause: r
            }),
            Xi(Ti(e, n)))),
            !1;
        var o = Error(i(520), {
            cause: r
        });
        if (o = Ti(o, n),
        su === null ? su = [o] : su.push(o),
        tu !== 4 && (tu = 2),
        t === null)
            return !0;
        r = Ti(r, n),
        n = t;
        do {
            switch (n.tag) {
            case 3:
                return n.flags |= 65536,
                e = a & -a,
                n.lanes |= e,
                e = ac(n.stateNode, r, e),
                Qa(n, e),
                !1;
            case 1:
                if (t = n.type,
                o = n.stateNode,
                !(n.flags & 128) && (typeof t.getDerivedStateFromError == `function` || o !== null && typeof o.componentDidCatch == `function` && (mu === null || !mu.has(o))))
                    return n.flags |= 65536,
                    a &= -a,
                    n.lanes |= a,
                    a = oc(a),
                    sc(a, e, n, r),
                    Qa(n, a),
                    !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var lc = Error(i(461))
      , uc = !1;
    function dc(e, t, n, r) {
        t.child = e === null ? Ga(t, null, n, r) : Wa(t, e.child, n, r)
    }
    function fc(e, t, n, r, i) {
        n = n.render;
        var a = t.ref;
        if (`ref` in r) {
            var o = {};
            for (var s in r)
                s !== `ref` && (o[s] = r[s])
        } else
            o = r;
        return oa(t),
        r = jo(e, t, n, o, a, i),
        s = Fo(),
        e !== null && !uc ? (Io(e, t, i),
        Ic(e, t, i)) : (M && s && Li(t),
        t.flags |= 1,
        dc(e, t, r, i),
        t.child)
    }
    function pc(e, t, n, r, i) {
        if (e === null) {
            var a = n.type;
            return typeof a == `function` && !gi(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15,
            t.type = a,
            mc(e, t, a, r, i)) : (e = yi(n.type, null, r, t, t.mode, i),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (a = e.child,
        !Lc(e, i)) {
            var o = a.memoizedProps;
            if (n = n.compare,
            n = n === null ? Ar : n,
            n(o, r) && e.ref === t.ref)
                return Ic(e, t, i)
        }
        return t.flags |= 1,
        e = _i(a, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function mc(e, t, n, r, i) {
        if (e !== null) {
            var a = e.memoizedProps;
            if (Ar(a, r) && e.ref === t.ref)
                if (uc = !1,
                t.pendingProps = r = a,
                Lc(e, i))
                    e.flags & 131072 && (uc = !0);
                else
                    return t.lanes = e.lanes,
                    Ic(e, t, i)
        }
        return Sc(e, t, n, r, i)
    }
    function hc(e, t, n, r) {
        var i = r.children
          , a = e === null ? null : e.memoizedState;
        if (e === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        r.mode === `hidden`) {
            if (t.flags & 128) {
                if (a = a === null ? n : a.baseLanes | n,
                e !== null) {
                    for (r = t.child = e.child,
                    i = 0; r !== null; )
                        i = i | r.lanes | r.childLanes,
                        r = r.sibling;
                    r = i & ~a
                } else
                    r = 0,
                    t.child = null;
                return _c(e, t, a, n, r)
            }
            if (n & 536870912)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && Ea(t, a === null ? null : a.cachePool),
                a === null ? so() : oo(t, a),
                mo(t);
            else
                return r = t.lanes = 536870912,
                _c(e, t, a === null ? n : a.baseLanes | n, n, r)
        } else
            a === null ? (e !== null && Ea(t, null),
            so(),
            ho(t)) : (Ea(t, a.cachePool),
            oo(t, a),
            ho(t),
            t.memoizedState = null);
        return dc(e, t, i, n),
        t.child
    }
    function gc(e, t) {
        return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function _c(e, t, n, r, i) {
        var a = Ta();
        return a = a === null ? null : {
            parent: pa._currentValue,
            pool: a
        },
        t.memoizedState = {
            baseLanes: n,
            cachePool: a
        },
        e !== null && Ea(t, null),
        so(),
        mo(t),
        e !== null && ia(e, t, r, !0),
        t.childLanes = i,
        null
    }
    function vc(e, t) {
        return t = jc({
            mode: t.mode,
            children: t.children
        }, e.mode),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function yc(e, t, n) {
        return Wa(t, e.child, null, n),
        e = vc(t, t.pendingProps),
        e.flags |= 2,
        go(t),
        t.memoizedState = null,
        e
    }
    function bc(e, t, n) {
        var r = t.pendingProps
          , a = !!(t.flags & 128);
        if (t.flags &= -129,
        e === null) {
            if (M) {
                if (r.mode === `hidden`)
                    return e = vc(t, r),
                    t.lanes = 536870912,
                    gc(null, e);
                if (po(t),
                (e = Vi) ? (e = hf(e, Ui),
                e = e !== null && e.data === `&` ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: Mi === null ? null : {
                        id: Ni,
                        overflow: Pi
                    },
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = Si(e),
                n.return = t,
                t.child = n,
                Bi = t,
                Vi = null)) : e = null,
                e === null)
                    throw Wi(t);
                return t.lanes = 536870912,
                null
            }
            return vc(t, r)
        }
        var o = e.memoizedState;
        if (o !== null) {
            var s = o.dehydrated;
            if (po(t),
            a)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = yc(e, t, n);
                else if (t.memoizedState !== null)
                    t.child = e.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(i(558));
            else if (uc || ia(e, t, n, !1),
            a = (n & e.childLanes) !== 0,
            uc || a) {
                if (r = Jl,
                r !== null && (s = ct(r, n),
                s !== 0 && s !== o.retryLane))
                    throw o.retryLane = s,
                    ui(e, s),
                    Eu(r, e, s),
                    lc;
                Ru(),
                t = yc(e, t, n)
            } else
                e = o.treeContext,
                Vi = yf(s.nextSibling),
                Bi = t,
                M = !0,
                Hi = null,
                Ui = !1,
                e !== null && zi(t, e),
                t = vc(t, r),
                t.flags |= 4096;
            return t
        }
        return e = _i(e.child, {
            mode: r.mode,
            children: r.children
        }),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function xc(e, t) {
        var n = t.ref;
        if (n === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof n != `function` && typeof n != `object`)
                throw Error(i(284));
            (e === null || e.ref !== n) && (t.flags |= 4194816)
        }
    }
    function Sc(e, t, n, r, i) {
        return oa(t),
        n = jo(e, t, n, r, void 0, i),
        r = Fo(),
        e !== null && !uc ? (Io(e, t, i),
        Ic(e, t, i)) : (M && r && Li(t),
        t.flags |= 1,
        dc(e, t, n, i),
        t.child)
    }
    function Cc(e, t, n, r, i, a) {
        return oa(t),
        t.updateQueue = null,
        n = No(t, r, n, i),
        Mo(e),
        r = Fo(),
        e !== null && !uc ? (Io(e, t, a),
        Ic(e, t, a)) : (M && r && Li(t),
        t.flags |= 1,
        dc(e, t, n, a),
        t.child)
    }
    function wc(e, t, n, r, i) {
        if (oa(t),
        t.stateNode === null) {
            var a = pi
              , o = n.contextType;
            typeof o == `object` && o && (a = sa(o)),
            a = new n(r,a),
            t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null,
            a.updater = I,
            t.stateNode = a,
            a._reactInternals = t,
            a = t.stateNode,
            a.props = r,
            a.state = t.memoizedState,
            a.refs = {},
            qa(t),
            o = n.contextType,
            a.context = typeof o == `object` && o ? sa(o) : pi,
            a.state = t.memoizedState,
            o = n.getDerivedStateFromProps,
            typeof o == `function` && (Xs(t, n, o, r),
            a.state = t.memoizedState),
            typeof n.getDerivedStateFromProps == `function` || typeof a.getSnapshotBeforeUpdate == `function` || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function` || (o = a.state,
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(),
            o !== a.state && I.enqueueReplaceState(a, a.state, null),
            to(t, r, a, i),
            eo(),
            a.state = t.memoizedState),
            typeof a.componentDidMount == `function` && (t.flags |= 4194308),
            r = !0
        } else if (e === null) {
            a = t.stateNode;
            var s = t.memoizedProps
              , c = $s(n, s);
            a.props = c;
            var l = a.context
              , u = n.contextType;
            o = pi,
            typeof u == `object` && u && (o = sa(u));
            var d = n.getDerivedStateFromProps;
            u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`,
            s = t.pendingProps !== s,
            u || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function` || (s || l !== o) && Qs(t, a, r, o),
            Ka = !1;
            var f = t.memoizedState;
            a.state = f,
            to(t, r, a, i),
            eo(),
            l = t.memoizedState,
            s || f !== l || Ka ? (typeof d == `function` && (Xs(t, n, d, r),
            l = t.memoizedState),
            (c = Ka || Zs(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function` || (typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount()),
            typeof a.componentDidMount == `function` && (t.flags |= 4194308)) : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
            t.memoizedProps = r,
            t.memoizedState = l),
            a.props = r,
            a.state = l,
            a.context = o,
            r = c) : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
            r = !1)
        } else {
            a = t.stateNode,
            Ja(e, t),
            o = t.memoizedProps,
            u = $s(n, o),
            a.props = u,
            d = t.pendingProps,
            f = a.context,
            l = n.contextType,
            c = pi,
            typeof l == `object` && l && (c = sa(l)),
            s = n.getDerivedStateFromProps,
            (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function` || (o !== d || f !== c) && Qs(t, a, r, c),
            Ka = !1,
            f = t.memoizedState,
            a.state = f,
            to(t, r, a, i),
            eo();
            var p = t.memoizedState;
            o !== d || f !== p || Ka || e !== null && e.dependencies !== null && aa(e.dependencies) ? (typeof s == `function` && (Xs(t, n, s, r),
            p = t.memoizedState),
            (u = Ka || Zs(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && aa(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != `function` && typeof a.componentWillUpdate != `function` || (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c),
            typeof a.UNSAFE_componentWillUpdate == `function` && a.UNSAFE_componentWillUpdate(r, p, c)),
            typeof a.componentDidUpdate == `function` && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024)) : (typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = r,
            t.memoizedState = p),
            a.props = r,
            a.state = p,
            a.context = c,
            r = u) : (typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
            r = !1)
        }
        return a = r,
        xc(e, t),
        r = !!(t.flags & 128),
        a || r ? (a = t.stateNode,
        n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render(),
        t.flags |= 1,
        e !== null && r ? (t.child = Wa(t, e.child, null, i),
        t.child = Wa(t, null, n, i)) : dc(e, t, n, i),
        t.memoizedState = a.state,
        e = t.child) : e = Ic(e, t, i),
        e
    }
    function Tc(e, t, n, r) {
        return Ji(),
        t.flags |= 256,
        dc(e, t, n, r),
        t.child
    }
    var Ec = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Dc(e) {
        return {
            baseLanes: e,
            cachePool: Da()
        }
    }
    function Oc(e, t, n) {
        return e = e === null ? 0 : e.childLanes & ~n,
        t && (e |= au),
        e
    }
    function kc(e, t, n) {
        var r = t.pendingProps, a = !1, o = !!(t.flags & 128), s;
        if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : !!(_o.current & 2)),
        s && (a = !0,
        t.flags &= -129),
        s = !!(t.flags & 32),
        t.flags &= -33,
        e === null) {
            if (M) {
                if (a ? fo(t) : ho(t),
                (e = Vi) ? (e = hf(e, Ui),
                e = e !== null && e.data !== `&` ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: Mi === null ? null : {
                        id: Ni,
                        overflow: Pi
                    },
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = Si(e),
                n.return = t,
                t.child = n,
                Bi = t,
                Vi = null)) : e = null,
                e === null)
                    throw Wi(t);
                return _f(e) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var c = r.children;
            return r = r.fallback,
            a ? (ho(t),
            a = t.mode,
            c = jc({
                mode: `hidden`,
                children: c
            }, a),
            r = bi(r, a, n, null),
            c.return = t,
            r.return = t,
            c.sibling = r,
            t.child = c,
            r = t.child,
            r.memoizedState = Dc(n),
            r.childLanes = Oc(e, s, n),
            t.memoizedState = Ec,
            gc(null, r)) : (fo(t),
            Ac(t, c))
        }
        var l = e.memoizedState;
        if (l !== null && (c = l.dehydrated,
        c !== null)) {
            if (o)
                t.flags & 256 ? (fo(t),
                t.flags &= -257,
                t = Mc(e, t, n)) : t.memoizedState === null ? (ho(t),
                c = r.fallback,
                a = t.mode,
                r = jc({
                    mode: `visible`,
                    children: r.children
                }, a),
                c = bi(c, a, n, null),
                c.flags |= 2,
                r.return = t,
                c.return = t,
                r.sibling = c,
                t.child = r,
                Wa(t, e.child, null, n),
                r = t.child,
                r.memoizedState = Dc(n),
                r.childLanes = Oc(e, s, n),
                t.memoizedState = Ec,
                t = gc(null, r)) : (ho(t),
                t.child = e.child,
                t.flags |= 128,
                t = null);
            else if (fo(t),
            _f(c)) {
                if (s = c.nextSibling && c.nextSibling.dataset,
                s)
                    var u = s.dgst;
                s = u,
                r = Error(i(419)),
                r.stack = ``,
                r.digest = s,
                Xi({
                    value: r,
                    source: null,
                    stack: null
                }),
                t = Mc(e, t, n)
            } else if (uc || ia(e, t, n, !1),
            s = (n & e.childLanes) !== 0,
            uc || s) {
                if (s = Jl,
                s !== null && (r = ct(s, n),
                r !== 0 && r !== l.retryLane))
                    throw l.retryLane = r,
                    ui(e, r),
                    Eu(s, e, r),
                    lc;
                gf(c) || Ru(),
                t = Mc(e, t, n)
            } else
                gf(c) ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = l.treeContext,
                Vi = yf(c.nextSibling),
                Bi = t,
                M = !0,
                Hi = null,
                Ui = !1,
                e !== null && zi(t, e),
                t = Ac(t, r.children),
                t.flags |= 4096);
            return t
        }
        return a ? (ho(t),
        c = r.fallback,
        a = t.mode,
        l = e.child,
        u = l.sibling,
        r = _i(l, {
            mode: `hidden`,
            children: r.children
        }),
        r.subtreeFlags = l.subtreeFlags & 65011712,
        u === null ? (c = bi(c, a, n, null),
        c.flags |= 2) : c = _i(u, c),
        c.return = t,
        r.return = t,
        r.sibling = c,
        t.child = r,
        gc(null, r),
        r = t.child,
        c = e.child.memoizedState,
        c === null ? c = Dc(n) : (a = c.cachePool,
        a === null ? a = Da() : (l = pa._currentValue,
        a = a.parent === l ? a : {
            parent: l,
            pool: l
        }),
        c = {
            baseLanes: c.baseLanes | n,
            cachePool: a
        }),
        r.memoizedState = c,
        r.childLanes = Oc(e, s, n),
        t.memoizedState = Ec,
        gc(e.child, r)) : (fo(t),
        n = e.child,
        e = n.sibling,
        n = _i(n, {
            mode: `visible`,
            children: r.children
        }),
        n.return = t,
        n.sibling = null,
        e !== null && (s = t.deletions,
        s === null ? (t.deletions = [e],
        t.flags |= 16) : s.push(e)),
        t.child = n,
        t.memoizedState = null,
        n)
    }
    function Ac(e, t) {
        return t = jc({
            mode: `visible`,
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function jc(e, t) {
        return e = hi(22, e, null, t),
        e.lanes = 0,
        e
    }
    function Mc(e, t, n) {
        return Wa(t, e.child, null, n),
        e = Ac(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function Nc(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t),
        na(e.return, t, n)
    }
    function Pc(e, t, n, r, i, a) {
        var o = e.memoizedState;
        o === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a
        } : (o.isBackwards = t,
        o.rendering = null,
        o.renderingStartTime = 0,
        o.last = r,
        o.tail = n,
        o.tailMode = i,
        o.treeForkCount = a)
    }
    function Fc(e, t, n) {
        var r = t.pendingProps
          , i = r.revealOrder
          , a = r.tail;
        r = r.children;
        var o = _o.current
          , s = !!(o & 2);
        if (s ? (o = o & 1 | 2,
        t.flags |= 128) : o &= 1,
        A(_o, o),
        dc(e, t, r, n),
        r = M ? ki : 0,
        !s && e !== null && e.flags & 128)
            a: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Nc(e, n, t);
                else if (e.tag === 19)
                    Nc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break a;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break a;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        switch (i) {
        case `forwards`:
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && vo(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Pc(t, !1, i, n, a, r);
            break;
        case `backwards`:
        case `unstable_legacy-backwards`:
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && vo(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Pc(t, !0, n, null, a, r);
            break;
        case `together`:
            Pc(t, !1, null, null, void 0, r);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Ic(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies),
        nu |= t.lanes,
        (n & t.childLanes) === 0)
            if (e !== null) {
                if (ia(e, t, n, !1),
                (n & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(i(153));
        if (t.child !== null) {
            for (e = t.child,
            n = _i(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null; )
                e = e.sibling,
                n = n.sibling = _i(e, e.pendingProps),
                n.return = t;
            n.sibling = null
        }
        return t.child
    }
    function Lc(e, t) {
        return (e.lanes & t) !== 0 || (e = e.dependencies,
        !!(e !== null && aa(e)))
    }
    function Rc(e, t, n) {
        switch (t.tag) {
        case 3:
            _e(t, t.stateNode.containerInfo),
            ea(t, pa, e.memoizedState.cache),
            Ji();
            break;
        case 27:
        case 5:
            ye(t);
            break;
        case 4:
            _e(t, t.stateNode.containerInfo);
            break;
        case 10:
            ea(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                po(t),
                null;
            break;
        case 13:
            var r = t.memoizedState;
            if (r !== null)
                return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (fo(t),
                e = Ic(e, t, n),
                e === null ? null : e.sibling) : kc(e, t, n) : (fo(t),
                t.flags |= 128,
                null);
            fo(t);
            break;
        case 19:
            var i = !!(e.flags & 128);
            if (r = (n & t.childLanes) !== 0,
            r ||= (ia(e, t, n, !1),
            (n & t.childLanes) !== 0),
            i) {
                if (r)
                    return Fc(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState,
            i !== null && (i.rendering = null,
            i.tail = null,
            i.lastEffect = null),
            A(_o, _o.current),
            r)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            hc(e, t, n, t.pendingProps);
        case 24:
            ea(t, pa, e.memoizedState.cache)
        }
        return Ic(e, t, n)
    }
    function zc(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                uc = !0;
            else {
                if (!Lc(e, n) && !(t.flags & 128))
                    return uc = !1,
                    Rc(e, t, n);
                uc = !!(e.flags & 131072)
            }
        else
            uc = !1,
            M && t.flags & 1048576 && Ii(t, ki, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            a: {
                var r = t.pendingProps;
                if (e = Pa(t.elementType),
                t.type = e,
                typeof e == `function`)
                    gi(e) ? (r = $s(e, r),
                    t.tag = 1,
                    t = wc(null, t, e, r, n)) : (t.tag = 0,
                    t = Sc(null, t, e, r, n));
                else {
                    if (e != null) {
                        var a = e.$$typeof;
                        if (a === w) {
                            t.tag = 11,
                            t = fc(null, t, e, r, n);
                            break a
                        }
                        if (a === te) {
                            t.tag = 14,
                            t = pc(null, t, e, r, n);
                            break a
                        }
                    }
                    throw t = se(e) || e,
                    Error(i(306, t, ``))
                }
            }
            return t;
        case 0:
            return Sc(e, t, t.type, t.pendingProps, n);
        case 1:
            return r = t.type,
            a = $s(r, t.pendingProps),
            wc(e, t, r, a, n);
        case 3:
            a: {
                if (_e(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(i(387));
                r = t.pendingProps;
                var o = t.memoizedState;
                a = o.element,
                Ja(e, t),
                to(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.cache,
                ea(t, pa, r),
                r !== o.cache && ra(t, [pa], n, !0),
                eo(),
                r = s.element,
                o.isDehydrated)
                    if (o = {
                        element: r,
                        isDehydrated: !1,
                        cache: s.cache
                    },
                    t.updateQueue.baseState = o,
                    t.memoizedState = o,
                    t.flags & 256) {
                        t = Tc(e, t, r, n);
                        break a
                    } else if (r !== a) {
                        a = Ti(Error(i(424)), t),
                        Xi(a),
                        t = Tc(e, t, r, n);
                        break a
                    } else {
                        switch (e = t.stateNode.containerInfo,
                        e.nodeType) {
                        case 9:
                            e = e.body;
                            break;
                        default:
                            e = e.nodeName === `HTML` ? e.ownerDocument.body : e
                        }
                        for (Vi = yf(e.firstChild),
                        Bi = t,
                        M = !0,
                        Hi = null,
                        Ui = !0,
                        n = Ga(t, null, r, n),
                        t.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling
                    }
                else {
                    if (Ji(),
                    r === a) {
                        t = Ic(e, t, n);
                        break a
                    }
                    dc(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 26:
            return xc(e, t),
            e === null ? (n = Rf(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : M || (n = t.type,
            e = t.pendingProps,
            r = Qd(he.current).createElement(n),
            r[mt] = t,
            r[ht] = e,
            Kd(r, n, e),
            Dt(r),
            t.stateNode = r) : t.memoizedState = Rf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return ye(t),
            e === null && M && (r = t.stateNode = Cf(t.type, t.pendingProps, he.current),
            Bi = t,
            Ui = !0,
            a = Vi,
            uf(t.type) ? (bf = a,
            Vi = yf(r.firstChild)) : Vi = a),
            dc(e, t, t.pendingProps.children, n),
            xc(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && M && ((a = r = Vi) && (r = mf(r, t.type, t.pendingProps, Ui),
            r === null ? a = !1 : (t.stateNode = r,
            Bi = t,
            Vi = yf(r.firstChild),
            Ui = !1,
            a = !0)),
            a || Wi(t)),
            ye(t),
            a = t.type,
            o = t.pendingProps,
            s = e === null ? null : e.memoizedProps,
            r = o.children,
            tf(a, o) ? r = null : s !== null && tf(a, s) && (t.flags |= 32),
            t.memoizedState !== null && (a = jo(e, t, Po, null, null, n),
            sp._currentValue = a),
            xc(e, t),
            dc(e, t, r, n),
            t.child;
        case 6:
            return e === null && M && ((e = n = Vi) && (n = H(n, t.pendingProps, Ui),
            n === null ? e = !1 : (t.stateNode = n,
            Bi = t,
            Vi = null,
            e = !0)),
            e || Wi(t)),
            null;
        case 13:
            return kc(e, t, n);
        case 4:
            return _e(t, t.stateNode.containerInfo),
            r = t.pendingProps,
            e === null ? t.child = Wa(t, null, r, n) : dc(e, t, r, n),
            t.child;
        case 11:
            return fc(e, t, t.type, t.pendingProps, n);
        case 7:
            return dc(e, t, t.pendingProps, n),
            t.child;
        case 8:
            return dc(e, t, t.pendingProps.children, n),
            t.child;
        case 12:
            return dc(e, t, t.pendingProps.children, n),
            t.child;
        case 10:
            return r = t.pendingProps,
            ea(t, t.type, r.value),
            dc(e, t, r.children, n),
            t.child;
        case 9:
            return a = t.type._context,
            r = t.pendingProps.children,
            oa(t),
            a = sa(a),
            r = r(a),
            t.flags |= 1,
            dc(e, t, r, n),
            t.child;
        case 14:
            return pc(e, t, t.type, t.pendingProps, n);
        case 15:
            return mc(e, t, t.type, t.pendingProps, n);
        case 19:
            return Fc(e, t, n);
        case 31:
            return bc(e, t, n);
        case 22:
            return hc(e, t, n, t.pendingProps);
        case 24:
            return oa(t),
            r = sa(pa),
            e === null ? (a = Ta(),
            a === null && (a = Jl,
            o = ma(),
            a.pooledCache = o,
            o.refCount++,
            o !== null && (a.pooledCacheLanes |= n),
            a = o),
            t.memoizedState = {
                parent: r,
                cache: a
            },
            qa(t),
            ea(t, pa, a)) : ((e.lanes & n) !== 0 && (Ja(e, t),
            to(t, null, null, n),
            eo()),
            a = e.memoizedState,
            o = t.memoizedState,
            a.parent === r ? (r = o.cache,
            ea(t, pa, r),
            r !== a.cache && ra(t, [pa], n, !0)) : (a = {
                parent: r,
                cache: r
            },
            t.memoizedState = a,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
            ea(t, pa, r))),
            dc(e, t, t.pendingProps.children, n),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(i(156, t.tag))
    }
    function Bc(e) {
        e.flags |= 4
    }
    function Vc(e, t, n, r, i) {
        if ((t = !!(e.mode & 32)) && (t = !1),
        t) {
            if (e.flags |= 16777216,
            (i & 335544128) === i)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if (Fu())
                    e.flags |= 8192;
                else
                    throw Fa = ja,
                    ka
        } else
            e.flags &= -16777217
    }
    function Hc(e, t) {
        if (t.type !== `stylesheet` || t.state.loading & 4)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !$f(t))
            if (Fu())
                e.flags |= 8192;
            else
                throw Fa = ja,
                ka
    }
    function Uc(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag === 22 ? 536870912 : nt(),
        e.lanes |= t,
        ou |= t)
    }
    function Wc(e, t) {
        if (!M)
            switch (e.tailMode) {
            case `hidden`:
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t),
                    t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case `collapsed`:
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n),
                    n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
            }
    }
    function Gc(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , n = 0
          , r = 0;
        if (t)
            for (var i = e.child; i !== null; )
                n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags & 65011712,
                r |= i.flags & 65011712,
                i.return = e,
                i = i.sibling;
        else
            for (i = e.child; i !== null; )
                n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags,
                r |= i.flags,
                i.return = e,
                i = i.sibling;
        return e.subtreeFlags |= r,
        e.childLanes = n,
        t
    }
    function Kc(e, t, n) {
        var r = t.pendingProps;
        switch (Ri(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Gc(t),
            null;
        case 1:
            return Gc(t),
            null;
        case 3:
            return n = t.stateNode,
            r = null,
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            ta(pa),
            ve(),
            n.pendingContext && (n.context = n.pendingContext,
            n.pendingContext = null),
            (e === null || e.child === null) && (qi(t) ? Bc(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
            Yi())),
            Gc(t),
            null;
        case 26:
            var a = t.type
              , o = t.memoizedState;
            return e === null ? (Bc(t),
            o === null ? (Gc(t),
            Vc(t, a, null, r, n)) : (Gc(t),
            Hc(t, o))) : o ? o === e.memoizedState ? (Gc(t),
            t.flags &= -16777217) : (Bc(t),
            Gc(t),
            Hc(t, o)) : (e = e.memoizedProps,
            e !== r && Bc(t),
            Gc(t),
            Vc(t, a, e, r, n)),
            null;
        case 27:
            if (be(t),
            n = he.current,
            a = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== r && Bc(t);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(i(166));
                    return Gc(t),
                    null
                }
                e = pe.current,
                qi(t) ? Gi(t, e) : (e = Cf(a, r, n),
                t.stateNode = e,
                Bc(t))
            }
            return Gc(t),
            null;
        case 5:
            if (be(t),
            a = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== r && Bc(t);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(i(166));
                    return Gc(t),
                    null
                }
                if (o = pe.current,
                qi(t))
                    Gi(t, o);
                else {
                    var s = Qd(he.current);
                    switch (o) {
                    case 1:
                        o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                        break;
                    case 2:
                        o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
                        break;
                    default:
                        switch (a) {
                        case `svg`:
                            o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                            break;
                        case `math`:
                            o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
                            break;
                        case `script`:
                            o = s.createElement(`div`),
                            o.innerHTML = `<script><\/script>`,
                            o = o.removeChild(o.firstChild);
                            break;
                        case `select`:
                            o = typeof r.is == `string` ? s.createElement(`select`, {
                                is: r.is
                            }) : s.createElement(`select`),
                            r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
                            break;
                        default:
                            o = typeof r.is == `string` ? s.createElement(a, {
                                is: r.is
                            }) : s.createElement(a)
                        }
                    }
                    o[mt] = t,
                    o[ht] = r;
                    a: for (s = t.child; s !== null; ) {
                        if (s.tag === 5 || s.tag === 6)
                            o.appendChild(s.stateNode);
                        else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                            s.child.return = s,
                            s = s.child;
                            continue
                        }
                        if (s === t)
                            break a;
                        for (; s.sibling === null; ) {
                            if (s.return === null || s.return === t)
                                break a;
                            s = s.return
                        }
                        s.sibling.return = s.return,
                        s = s.sibling
                    }
                    t.stateNode = o;
                    a: switch (Kd(o, a, r),
                    a) {
                    case `button`:
                    case `input`:
                    case `select`:
                    case `textarea`:
                        r = !!r.autoFocus;
                        break a;
                    case `img`:
                        r = !0;
                        break a;
                    default:
                        r = !1
                    }
                    r && Bc(t)
                }
            }
            return Gc(t),
            Vc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== r && Bc(t);
            else {
                if (typeof r != `string` && t.stateNode === null)
                    throw Error(i(166));
                if (e = he.current,
                qi(t)) {
                    if (e = t.stateNode,
                    n = t.memoizedProps,
                    r = null,
                    a = Bi,
                    a !== null)
                        switch (a.tag) {
                        case 27:
                        case 5:
                            r = a.memoizedProps
                        }
                    e[mt] = t,
                    e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || Wd(e.nodeValue, n)),
                    e || Wi(t, !0)
                } else
                    e = Qd(e).createTextNode(r),
                    e[mt] = t,
                    t.stateNode = e
            }
            return Gc(t),
            null;
        case 31:
            if (n = t.memoizedState,
            e === null || e.memoizedState !== null) {
                if (r = qi(t),
                n !== null) {
                    if (e === null) {
                        if (!r)
                            throw Error(i(318));
                        if (e = t.memoizedState,
                        e = e === null ? null : e.dehydrated,
                        !e)
                            throw Error(i(557));
                        e[mt] = t
                    } else
                        Ji(),
                        !(t.flags & 128) && (t.memoizedState = null),
                        t.flags |= 4;
                    Gc(t),
                    e = !1
                } else
                    n = Yi(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                    e = !0;
                if (!e)
                    return t.flags & 256 ? (go(t),
                    t) : (go(t),
                    null);
                if (t.flags & 128)
                    throw Error(i(558))
            }
            return Gc(t),
            null;
        case 13:
            if (r = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (a = qi(t),
                r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!a)
                            throw Error(i(318));
                        if (a = t.memoizedState,
                        a = a === null ? null : a.dehydrated,
                        !a)
                            throw Error(i(317));
                        a[mt] = t
                    } else
                        Ji(),
                        !(t.flags & 128) && (t.memoizedState = null),
                        t.flags |= 4;
                    Gc(t),
                    a = !1
                } else
                    a = Yi(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
                    a = !0;
                if (!a)
                    return t.flags & 256 ? (go(t),
                    t) : (go(t),
                    null)
            }
            return go(t),
            t.flags & 128 ? (t.lanes = n,
            t) : (n = r !== null,
            e = e !== null && e.memoizedState !== null,
            n && (r = t.child,
            a = null,
            r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool),
            o = null,
            r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool),
            o !== a && (r.flags |= 2048)),
            n !== e && n && (t.child.flags |= 8192),
            Uc(t, t.updateQueue),
            Gc(t),
            null);
        case 4:
            return ve(),
            e === null && Pd(t.stateNode.containerInfo),
            Gc(t),
            null;
        case 10:
            return ta(t.type),
            Gc(t),
            null;
        case 19:
            if (k(_o),
            r = t.memoizedState,
            r === null)
                return Gc(t),
                null;
            if (a = !!(t.flags & 128),
            o = r.rendering,
            o === null)
                if (a)
                    Wc(r, !1);
                else {
                    if (tu !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null; ) {
                            if (o = vo(e),
                            o !== null) {
                                for (t.flags |= 128,
                                Wc(r, !1),
                                e = o.updateQueue,
                                t.updateQueue = e,
                                Uc(t, e),
                                t.subtreeFlags = 0,
                                e = n,
                                n = t.child; n !== null; )
                                    vi(n, e),
                                    n = n.sibling;
                                return A(_o, _o.current & 1 | 2),
                                M && Fi(t, r.treeForkCount),
                                t.child
                            }
                            e = e.sibling
                        }
                    r.tail !== null && Ne() > fu && (t.flags |= 128,
                    a = !0,
                    Wc(r, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!a)
                    if (e = vo(o),
                    e !== null) {
                        if (t.flags |= 128,
                        a = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        Uc(t, e),
                        Wc(r, !0),
                        r.tail === null && r.tailMode === `hidden` && !o.alternate && !M)
                            return Gc(t),
                            null
                    } else
                        2 * Ne() - r.renderingStartTime > fu && n !== 536870912 && (t.flags |= 128,
                        a = !0,
                        Wc(r, !1),
                        t.lanes = 4194304);
                r.isBackwards ? (o.sibling = t.child,
                t.child = o) : (e = r.last,
                e === null ? t.child = o : e.sibling = o,
                r.last = o)
            }
            return r.tail === null ? (Gc(t),
            null) : (e = r.tail,
            r.rendering = e,
            r.tail = e.sibling,
            r.renderingStartTime = Ne(),
            e.sibling = null,
            n = _o.current,
            A(_o, a ? n & 1 | 2 : n & 1),
            M && Fi(t, r.treeForkCount),
            e);
        case 22:
        case 23:
            return go(t),
            co(),
            r = t.memoizedState !== null,
            e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192),
            r ? n & 536870912 && !(t.flags & 128) && (Gc(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Gc(t),
            n = t.updateQueue,
            n !== null && Uc(t, n.retryQueue),
            n = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
            r = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && k(wa),
            null;
        case 24:
            return n = null,
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            ta(pa),
            Gc(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(i(156, t.tag))
    }
    function qc(e, t) {
        switch (Ri(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return ta(pa),
            ve(),
            e = t.flags,
            e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return be(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (go(t),
                t.alternate === null)
                    throw Error(i(340));
                Ji()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 13:
            if (go(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(i(340));
                Ji()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return k(_o),
            null;
        case 4:
            return ve(),
            null;
        case 10:
            return ta(t.type),
            null;
        case 22:
        case 23:
            return go(t),
            co(),
            e !== null && k(wa),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return ta(pa),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Jc(e, t) {
        switch (Ri(t),
        t.tag) {
        case 3:
            ta(pa),
            ve();
            break;
        case 26:
        case 27:
        case 5:
            be(t);
            break;
        case 4:
            ve();
            break;
        case 31:
            t.memoizedState !== null && go(t);
            break;
        case 13:
            go(t);
            break;
        case 19:
            k(_o);
            break;
        case 10:
            ta(t.type);
            break;
        case 22:
        case 23:
            go(t),
            co(),
            e !== null && k(wa);
            break;
        case 24:
            ta(pa)
        }
    }
    function Yc(e, t) {
        try {
            var n = t.updateQueue
              , r = n === null ? null : n.lastEffect;
            if (r !== null) {
                var i = r.next;
                n = i;
                do {
                    if ((n.tag & e) === e) {
                        r = void 0;
                        var a = n.create
                          , o = n.inst;
                        r = a(),
                        o.destroy = r
                    }
                    n = n.next
                } while (n !== i)
            }
        } catch (e) {
            nd(t, t.return, e)
        }
    }
    function Xc(e, t, n) {
        try {
            var r = t.updateQueue
              , i = r === null ? null : r.lastEffect;
            if (i !== null) {
                var a = i.next;
                r = a;
                do {
                    if ((r.tag & e) === e) {
                        var o = r.inst
                          , s = o.destroy;
                        if (s !== void 0) {
                            o.destroy = void 0,
                            i = t;
                            var c = n
                              , l = s;
                            try {
                                l()
                            } catch (e) {
                                nd(i, c, e)
                            }
                        }
                    }
                    r = r.next
                } while (r !== a)
            }
        } catch (e) {
            nd(t, t.return, e)
        }
    }
    function Zc(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var n = e.stateNode;
            try {
                ro(t, n)
            } catch (t) {
                nd(e, e.return, t)
            }
        }
    }
    function Qc(e, t, n) {
        n.props = $s(e.type, e.memoizedProps),
        n.state = e.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (n) {
            nd(e, t, n)
        }
    }
    function $c(e, t) {
        try {
            var n = e.ref;
            if (n !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var r = e.stateNode;
                    break;
                case 30:
                    r = e.stateNode;
                    break;
                default:
                    r = e.stateNode
                }
                typeof n == `function` ? e.refCleanup = n(r) : n.current = r
            }
        } catch (n) {
            nd(e, t, n)
        }
    }
    function el(e, t) {
        var n = e.ref
          , r = e.refCleanup;
        if (n !== null)
            if (typeof r == `function`)
                try {
                    r()
                } catch (n) {
                    nd(e, t, n)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof n == `function`)
                try {
                    n(null)
                } catch (n) {
                    nd(e, t, n)
                }
            else
                n.current = null
    }
    function tl(e) {
        var t = e.type
          , n = e.memoizedProps
          , r = e.stateNode;
        try {
            a: switch (t) {
            case `button`:
            case `input`:
            case `select`:
            case `textarea`:
                n.autoFocus && r.focus();
                break a;
            case `img`:
                n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet)
            }
        } catch (t) {
            nd(e, e.return, t)
        }
    }
    function nl(e, t, n) {
        try {
            var r = e.stateNode;
            qd(r, e.type, n, t),
            r[ht] = t
        } catch (t) {
            nd(e, e.return, t)
        }
    }
    function rl(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && uf(e.type) || e.tag === 4
    }
    function il(e) {
        a: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || rl(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && uf(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue a;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function al(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
            t ? (n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n,
            t.appendChild(e),
            n = n._reactRootContainer,
            n != null || t.onclick !== null || (t.onclick = cn));
        else if (r !== 4 && (r === 27 && uf(e.type) && (n = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (al(e, t, n),
            e = e.sibling; e !== null; )
                al(e, t, n),
                e = e.sibling
    }
    function ol(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (r === 27 && uf(e.type) && (n = e.stateNode),
        e = e.child,
        e !== null))
            for (ol(e, t, n),
            e = e.sibling; e !== null; )
                ol(e, t, n),
                e = e.sibling
    }
    function sl(e) {
        var t = e.stateNode
          , n = e.memoizedProps;
        try {
            for (var r = e.type, i = t.attributes; i.length; )
                t.removeAttributeNode(i[0]);
            Kd(t, r, n),
            t[mt] = e,
            t[ht] = n
        } catch (t) {
            nd(e, e.return, t)
        }
    }
    var cl = !1
      , ll = !1
      , ul = !1
      , dl = typeof WeakSet == `function` ? WeakSet : Set
      , fl = null;
    function pl(e, t) {
        if (e = e.containerInfo,
        Xd = G,
        e = Pr(e),
        Fr(e)) {
            if (`selectionStart` in e)
                var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                a: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var r = n.getSelection && n.getSelection();
                    if (r && r.rangeCount !== 0) {
                        n = r.anchorNode;
                        var a = r.anchorOffset
                          , o = r.focusNode;
                        r = r.focusOffset;
                        try {
                            n.nodeType,
                            o.nodeType
                        } catch {
                            n = null;
                            break a
                        }
                        var s = 0
                          , c = -1
                          , l = -1
                          , u = 0
                          , d = 0
                          , f = e
                          , p = null;
                        b: for (; ; ) {
                            for (var m; f !== n || a !== 0 && f.nodeType !== 3 || (c = s + a),
                            f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r),
                            f.nodeType === 3 && (s += f.nodeValue.length),
                            (m = f.firstChild) !== null; )
                                p = f,
                                f = m;
                            for (; ; ) {
                                if (f === e)
                                    break b;
                                if (p === n && ++u === a && (c = s),
                                p === o && ++d === r && (l = s),
                                (m = f.nextSibling) !== null)
                                    break;
                                f = p,
                                p = f.parentNode
                            }
                            f = m
                        }
                        n = c === -1 || l === -1 ? null : {
                            start: c,
                            end: l
                        }
                    } else
                        n = null
                }
            n ||= {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (Zd = {
            focusedElem: e,
            selectionRange: n
        },
        G = !1,
        fl = t; fl !== null; )
            if (t = fl,
            e = t.child,
            t.subtreeFlags & 1028 && e !== null)
                e.return = t,
                fl = e;
            else
                for (; fl !== null; ) {
                    switch (t = fl,
                    o = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        if (e & 4 && (e = t.updateQueue,
                        e = e === null ? null : e.events,
                        e !== null))
                            for (n = 0; n < e.length; n++)
                                a = e[n],
                                a.ref.impl = a.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (e & 1024 && o !== null) {
                            e = void 0,
                            n = t,
                            a = o.memoizedProps,
                            o = o.memoizedState,
                            r = n.stateNode;
                            try {
                                var h = $s(n.type, a);
                                e = r.getSnapshotBeforeUpdate(h, o),
                                r.__reactInternalSnapshotBeforeUpdate = e
                            } catch (e) {
                                nd(n, n.return, e)
                            }
                        }
                        break;
                    case 3:
                        if (e & 1024) {
                            if (e = t.stateNode.containerInfo,
                            n = e.nodeType,
                            n === 9)
                                pf(e);
                            else if (n === 1)
                                switch (e.nodeName) {
                                case `HEAD`:
                                case `HTML`:
                                case `BODY`:
                                    pf(e);
                                    break;
                                default:
                                    e.textContent = ``
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if (e & 1024)
                            throw Error(i(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        fl = e;
                        break
                    }
                    fl = t.return
                }
    }
    function ml(e, t, n) {
        var r = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            kl(e, n),
            r & 4 && Yc(5, n);
            break;
        case 1:
            if (kl(e, n),
            r & 4)
                if (e = n.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (e) {
                        nd(n, n.return, e)
                    }
                else {
                    var i = $s(n.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (e) {
                        nd(n, n.return, e)
                    }
                }
            r & 64 && Zc(n),
            r & 512 && $c(n, n.return);
            break;
        case 3:
            if (kl(e, n),
            r & 64 && (e = n.updateQueue,
            e !== null)) {
                if (t = null,
                n.child !== null)
                    switch (n.child.tag) {
                    case 27:
                    case 5:
                        t = n.child.stateNode;
                        break;
                    case 1:
                        t = n.child.stateNode
                    }
                try {
                    ro(e, t)
                } catch (e) {
                    nd(n, n.return, e)
                }
            }
            break;
        case 27:
            t === null && r & 4 && sl(n);
        case 26:
        case 5:
            kl(e, n),
            t === null && r & 4 && tl(n),
            r & 512 && $c(n, n.return);
            break;
        case 12:
            kl(e, n);
            break;
        case 31:
            kl(e, n),
            r & 4 && bl(e, n);
            break;
        case 13:
            kl(e, n),
            r & 4 && xl(e, n),
            r & 64 && (e = n.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (n = od.bind(null, n),
            vf(e, n))));
            break;
        case 22:
            if (r = n.memoizedState !== null || cl,
            !r) {
                t = t !== null && t.memoizedState !== null || ll,
                i = cl;
                var a = ll;
                cl = r,
                (ll = t) && !a ? jl(e, n, !!(n.subtreeFlags & 8772)) : kl(e, n),
                cl = i,
                ll = a
            }
            break;
        case 30:
            break;
        default:
            kl(e, n)
        }
    }
    function hl(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        hl(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && St(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var gl = null
      , _l = !1;
    function vl(e, t, n) {
        for (n = n.child; n !== null; )
            yl(e, t, n),
            n = n.sibling
    }
    function yl(e, t, n) {
        if (Ue && typeof Ue.onCommitFiberUnmount == `function`)
            try {
                Ue.onCommitFiberUnmount(He, n)
            } catch {}
        switch (n.tag) {
        case 26:
            ll || el(n, t),
            vl(e, t, n),
            n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
            n.parentNode.removeChild(n));
            break;
        case 27:
            ll || el(n, t);
            var r = gl
              , i = _l;
            uf(n.type) && (gl = n.stateNode,
            _l = !1),
            vl(e, t, n),
            wf(n.stateNode),
            gl = r,
            _l = i;
            break;
        case 5:
            ll || el(n, t);
        case 6:
            if (r = gl,
            i = _l,
            gl = null,
            vl(e, t, n),
            gl = r,
            _l = i,
            gl !== null)
                if (_l)
                    try {
                        (gl.nodeType === 9 ? gl.body : gl.nodeName === `HTML` ? gl.ownerDocument.body : gl).removeChild(n.stateNode)
                    } catch (e) {
                        nd(n, t, e)
                    }
                else
                    try {
                        gl.removeChild(n.stateNode)
                    } catch (e) {
                        nd(n, t, e)
                    }
            break;
        case 18:
            gl !== null && (_l ? (e = gl,
            df(e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e, n.stateNode),
            Pp(e)) : df(gl, n.stateNode));
            break;
        case 4:
            r = gl,
            i = _l,
            gl = n.stateNode.containerInfo,
            _l = !0,
            vl(e, t, n),
            gl = r,
            _l = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Xc(2, n, t),
            ll || Xc(4, n, t),
            vl(e, t, n);
            break;
        case 1:
            ll || (el(n, t),
            r = n.stateNode,
            typeof r.componentWillUnmount == `function` && Qc(n, t, r)),
            vl(e, t, n);
            break;
        case 21:
            vl(e, t, n);
            break;
        case 22:
            ll = (r = ll) || n.memoizedState !== null,
            vl(e, t, n),
            ll = r;
            break;
        default:
            vl(e, t, n)
        }
    }
    function bl(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null))) {
            e = e.dehydrated;
            try {
                Pp(e)
            } catch (e) {
                nd(t, t.return, e)
            }
        }
    }
    function xl(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                Pp(e)
            } catch (e) {
                nd(t, t.return, e)
            }
    }
    function Sl(e) {
        switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new dl),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new dl),
            t;
        default:
            throw Error(i(435, e.tag))
        }
    }
    function Cl(e, t) {
        var n = Sl(e);
        t.forEach(function(t) {
            if (!n.has(t)) {
                n.add(t);
                var r = sd.bind(null, e, t);
                t.then(r, r)
            }
        })
    }
    function wl(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var r = 0; r < n.length; r++) {
                var a = n[r]
                  , o = e
                  , s = t
                  , c = s;
                a: for (; c !== null; ) {
                    switch (c.tag) {
                    case 27:
                        if (uf(c.type)) {
                            gl = c.stateNode,
                            _l = !1;
                            break a
                        }
                        break;
                    case 5:
                        gl = c.stateNode,
                        _l = !1;
                        break a;
                    case 3:
                    case 4:
                        gl = c.stateNode.containerInfo,
                        _l = !0;
                        break a
                    }
                    c = c.return
                }
                if (gl === null)
                    throw Error(i(160));
                yl(o, s, a),
                gl = null,
                _l = !1,
                o = a.alternate,
                o !== null && (o.return = null),
                a.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                El(t, e),
                t = t.sibling
    }
    var Tl = null;
    function El(e, t) {
        var n = e.alternate
          , r = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            wl(t, e),
            Dl(e),
            r & 4 && (Xc(3, e, e.return),
            Yc(3, e),
            Xc(5, e, e.return));
            break;
        case 1:
            wl(t, e),
            Dl(e),
            r & 512 && (ll || n === null || el(n, n.return)),
            r & 64 && cl && (e = e.updateQueue,
            e !== null && (r = e.callbacks,
            r !== null && (n = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
            break;
        case 26:
            var a = Tl;
            if (wl(t, e),
            Dl(e),
            r & 512 && (ll || n === null || el(n, n.return)),
            r & 4) {
                var o = n === null ? null : n.memoizedState;
                if (r = e.memoizedState,
                n === null)
                    if (r === null)
                        if (e.stateNode === null) {
                            a: {
                                r = e.type,
                                n = e.memoizedProps,
                                a = a.ownerDocument || a;
                                b: switch (r) {
                                case `title`:
                                    o = a.getElementsByTagName(`title`)[0],
                                    (!o || o[xt] || o[mt] || o.namespaceURI === `http://www.w3.org/2000/svg` || o.hasAttribute(`itemprop`)) && (o = a.createElement(r),
                                    a.head.insertBefore(o, a.querySelector(`head > title`))),
                                    Kd(o, r, n),
                                    o[mt] = e,
                                    Dt(o),
                                    r = o;
                                    break a;
                                case `link`:
                                    var s = Xf(`link`, `href`, a).get(r + (n.href || ``));
                                    if (s) {
                                        for (var c = 0; c < s.length; c++)
                                            if (o = s[c],
                                            o.getAttribute(`href`) === (n.href == null || n.href === `` ? null : n.href) && o.getAttribute(`rel`) === (n.rel == null ? null : n.rel) && o.getAttribute(`title`) === (n.title == null ? null : n.title) && o.getAttribute(`crossorigin`) === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                s.splice(c, 1);
                                                break b
                                            }
                                    }
                                    o = a.createElement(r),
                                    Kd(o, r, n),
                                    a.head.appendChild(o);
                                    break;
                                case `meta`:
                                    if (s = Xf(`meta`, `content`, a).get(r + (n.content || ``))) {
                                        for (c = 0; c < s.length; c++)
                                            if (o = s[c],
                                            o.getAttribute(`content`) === (n.content == null ? null : `` + n.content) && o.getAttribute(`name`) === (n.name == null ? null : n.name) && o.getAttribute(`property`) === (n.property == null ? null : n.property) && o.getAttribute(`http-equiv`) === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute(`charset`) === (n.charSet == null ? null : n.charSet)) {
                                                s.splice(c, 1);
                                                break b
                                            }
                                    }
                                    o = a.createElement(r),
                                    Kd(o, r, n),
                                    a.head.appendChild(o);
                                    break;
                                default:
                                    throw Error(i(468, r))
                                }
                                o[mt] = e,
                                Dt(o),
                                r = o
                            }
                            e.stateNode = r
                        } else
                            Zf(a, e.type, e.stateNode);
                    else
                        e.stateNode = Gf(a, r, e.memoizedProps);
                else
                    o === r ? r === null && e.stateNode !== null && nl(e, e.memoizedProps, n.memoizedProps) : (o === null ? n.stateNode !== null && (n = n.stateNode,
                    n.parentNode.removeChild(n)) : o.count--,
                    r === null ? Zf(a, e.type, e.stateNode) : Gf(a, r, e.memoizedProps))
            }
            break;
        case 27:
            wl(t, e),
            Dl(e),
            r & 512 && (ll || n === null || el(n, n.return)),
            n !== null && r & 4 && nl(e, e.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if (wl(t, e),
            Dl(e),
            r & 512 && (ll || n === null || el(n, n.return)),
            e.flags & 32) {
                a = e.stateNode;
                try {
                    $t(a, ``)
                } catch (t) {
                    nd(e, e.return, t)
                }
            }
            r & 4 && e.stateNode != null && (a = e.memoizedProps,
            nl(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (ul = !0);
            break;
        case 6:
            if (wl(t, e),
            Dl(e),
            r & 4) {
                if (e.stateNode === null)
                    throw Error(i(162));
                r = e.memoizedProps,
                n = e.stateNode;
                try {
                    n.nodeValue = r
                } catch (t) {
                    nd(e, e.return, t)
                }
            }
            break;
        case 3:
            if (Yf = null,
            a = Tl,
            Tl = Ef(t.containerInfo),
            wl(t, e),
            Tl = a,
            Dl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Pp(t.containerInfo)
                } catch (t) {
                    nd(e, e.return, t)
                }
            ul && (ul = !1,
            Ol(e));
            break;
        case 4:
            r = Tl,
            Tl = Ef(e.stateNode.containerInfo),
            wl(t, e),
            Dl(e),
            Tl = r;
            break;
        case 12:
            wl(t, e),
            Dl(e);
            break;
        case 31:
            wl(t, e),
            Dl(e),
            r & 4 && (r = e.updateQueue,
            r !== null && (e.updateQueue = null,
            Cl(e, r)));
            break;
        case 13:
            wl(t, e),
            Dl(e),
            e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (uu = Ne()),
            r & 4 && (r = e.updateQueue,
            r !== null && (e.updateQueue = null,
            Cl(e, r)));
            break;
        case 22:
            a = e.memoizedState !== null;
            var l = n !== null && n.memoizedState !== null
              , u = cl
              , d = ll;
            if (cl = u || a,
            ll = d || l,
            wl(t, e),
            ll = d,
            cl = u,
            Dl(e),
            r & 8192)
                a: for (t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || cl || ll || Al(e)),
                n = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (n === null) {
                            l = n = t;
                            try {
                                if (o = l.stateNode,
                                a)
                                    s = o.style,
                                    typeof s.setProperty == `function` ? s.setProperty(`display`, `none`, `important`) : s.display = `none`;
                                else {
                                    c = l.stateNode;
                                    var f = l.memoizedProps.style
                                      , p = f != null && f.hasOwnProperty(`display`) ? f.display : null;
                                    c.style.display = p == null || typeof p == `boolean` ? `` : (`` + p).trim()
                                }
                            } catch (e) {
                                nd(l, l.return, e)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (n === null) {
                            l = t;
                            try {
                                l.stateNode.nodeValue = a ? `` : l.memoizedProps
                            } catch (e) {
                                nd(l, l.return, e)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (n === null) {
                            l = t;
                            try {
                                var m = l.stateNode;
                                a ? ff(m, !0) : ff(l.stateNode, !1)
                            } catch (e) {
                                nd(l, l.return, e)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break a;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break a;
                        n === t && (n = null),
                        t = t.return
                    }
                    n === t && (n = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            r & 4 && (r = e.updateQueue,
            r !== null && (n = r.retryQueue,
            n !== null && (r.retryQueue = null,
            Cl(e, n))));
            break;
        case 19:
            wl(t, e),
            Dl(e),
            r & 4 && (r = e.updateQueue,
            r !== null && (e.updateQueue = null,
            Cl(e, r)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            wl(t, e),
            Dl(e)
        }
    }
    function Dl(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var n, r = e.return; r !== null; ) {
                    if (rl(r)) {
                        n = r;
                        break
                    }
                    r = r.return
                }
                if (n == null)
                    throw Error(i(160));
                switch (n.tag) {
                case 27:
                    var a = n.stateNode;
                    ol(e, il(e), a);
                    break;
                case 5:
                    var o = n.stateNode;
                    n.flags & 32 && ($t(o, ``),
                    n.flags &= -33),
                    ol(e, il(e), o);
                    break;
                case 3:
                case 4:
                    var s = n.stateNode.containerInfo;
                    al(e, il(e), s);
                    break;
                default:
                    throw Error(i(161))
                }
            } catch (t) {
                nd(e, e.return, t)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function Ol(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                Ol(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function kl(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                ml(e, t.alternate, t),
                t = t.sibling
    }
    function Al(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Xc(4, t, t.return),
                Al(t);
                break;
            case 1:
                el(t, t.return);
                var n = t.stateNode;
                typeof n.componentWillUnmount == `function` && Qc(t, t.return, n),
                Al(t);
                break;
            case 27:
                wf(t.stateNode);
            case 26:
            case 5:
                el(t, t.return),
                Al(t);
                break;
            case 22:
                t.memoizedState === null && Al(t);
                break;
            case 30:
                Al(t);
                break;
            default:
                Al(t)
            }
            e = e.sibling
        }
    }
    function jl(e, t, n) {
        for (n &&= !!(t.subtreeFlags & 8772),
        t = t.child; t !== null; ) {
            var r = t.alternate
              , i = e
              , a = t
              , o = a.flags;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                jl(i, a, n),
                Yc(4, a);
                break;
            case 1:
                if (jl(i, a, n),
                r = a,
                i = r.stateNode,
                typeof i.componentDidMount == `function`)
                    try {
                        i.componentDidMount()
                    } catch (e) {
                        nd(r, r.return, e)
                    }
                if (r = a,
                i = r.updateQueue,
                i !== null) {
                    var s = r.stateNode;
                    try {
                        var c = i.shared.hiddenCallbacks;
                        if (c !== null)
                            for (i.shared.hiddenCallbacks = null,
                            i = 0; i < c.length; i++)
                                no(c[i], s)
                    } catch (e) {
                        nd(r, r.return, e)
                    }
                }
                n && o & 64 && Zc(a),
                $c(a, a.return);
                break;
            case 27:
                sl(a);
            case 26:
            case 5:
                jl(i, a, n),
                n && r === null && o & 4 && tl(a),
                $c(a, a.return);
                break;
            case 12:
                jl(i, a, n);
                break;
            case 31:
                jl(i, a, n),
                n && o & 4 && bl(i, a);
                break;
            case 13:
                jl(i, a, n),
                n && o & 4 && xl(i, a);
                break;
            case 22:
                a.memoizedState === null && jl(i, a, n),
                $c(a, a.return);
                break;
            case 30:
                break;
            default:
                jl(i, a, n)
            }
            t = t.sibling
        }
    }
    function Ml(e, t) {
        var n = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++,
        n != null && ha(n))
    }
    function Nl(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && ha(e))
    }
    function Pl(e, t, n, r) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Fl(e, t, n, r),
                t = t.sibling
    }
    function Fl(e, t, n, r) {
        var i = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Pl(e, t, n, r),
            i & 2048 && Yc(9, t);
            break;
        case 1:
            Pl(e, t, n, r);
            break;
        case 3:
            Pl(e, t, n, r),
            i & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && ha(e)));
            break;
        case 12:
            if (i & 2048) {
                Pl(e, t, n, r),
                e = t.stateNode;
                try {
                    var a = t.memoizedProps
                      , o = a.id
                      , s = a.onPostCommit;
                    typeof s == `function` && s(o, t.alternate === null ? `mount` : `update`, e.passiveEffectDuration, -0)
                } catch (e) {
                    nd(t, t.return, e)
                }
            } else
                Pl(e, t, n, r);
            break;
        case 31:
            Pl(e, t, n, r);
            break;
        case 13:
            Pl(e, t, n, r);
            break;
        case 23:
            break;
        case 22:
            a = t.stateNode,
            o = t.alternate,
            t.memoizedState === null ? a._visibility & 2 ? Pl(e, t, n, r) : (a._visibility |= 2,
            Il(e, t, n, r, !!(t.subtreeFlags & 10256) || !1)) : a._visibility & 2 ? Pl(e, t, n, r) : Ll(e, t),
            i & 2048 && Ml(o, t);
            break;
        case 24:
            Pl(e, t, n, r),
            i & 2048 && Nl(t.alternate, t);
            break;
        default:
            Pl(e, t, n, r)
        }
    }
    function Il(e, t, n, r, i) {
        for (i &&= !!(t.subtreeFlags & 10256) || !1,
        t = t.child; t !== null; ) {
            var a = e
              , o = t
              , s = n
              , c = r
              , l = o.flags;
            switch (o.tag) {
            case 0:
            case 11:
            case 15:
                Il(a, o, s, c, i),
                Yc(8, o);
                break;
            case 23:
                break;
            case 22:
                var u = o.stateNode;
                o.memoizedState === null ? (u._visibility |= 2,
                Il(a, o, s, c, i)) : u._visibility & 2 ? Il(a, o, s, c, i) : Ll(a, o),
                i && l & 2048 && Ml(o.alternate, o);
                break;
            case 24:
                Il(a, o, s, c, i),
                i && l & 2048 && Nl(o.alternate, o);
                break;
            default:
                Il(a, o, s, c, i)
            }
            t = t.sibling
        }
    }
    function Ll(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var n = e
                  , r = t
                  , i = r.flags;
                switch (r.tag) {
                case 22:
                    Ll(n, r),
                    i & 2048 && Ml(r.alternate, r);
                    break;
                case 24:
                    Ll(n, r),
                    i & 2048 && Nl(r.alternate, r);
                    break;
                default:
                    Ll(n, r)
                }
                t = t.sibling
            }
    }
    var Rl = 8192;
    function zl(e, t, n) {
        if (e.subtreeFlags & Rl)
            for (e = e.child; e !== null; )
                Bl(e, t, n),
                e = e.sibling
    }
    function Bl(e, t, n) {
        switch (e.tag) {
        case 26:
            zl(e, t, n),
            e.flags & Rl && e.memoizedState !== null && ep(n, Tl, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            zl(e, t, n);
            break;
        case 3:
        case 4:
            var r = Tl;
            Tl = Ef(e.stateNode.containerInfo),
            zl(e, t, n),
            Tl = r;
            break;
        case 22:
            e.memoizedState === null && (r = e.alternate,
            r !== null && r.memoizedState !== null ? (r = Rl,
            Rl = 16777216,
            zl(e, t, n),
            Rl = r) : zl(e, t, n));
            break;
        default:
            zl(e, t, n)
        }
    }
    function Vl(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function Hl(e) {
        var t = e.deletions;
        if (e.flags & 16) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    fl = r,
                    Gl(r, e)
                }
            Vl(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Ul(e),
                e = e.sibling
    }
    function Ul(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Hl(e),
            e.flags & 2048 && Xc(9, e, e.return);
            break;
        case 3:
            Hl(e);
            break;
        case 12:
            Hl(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            Wl(e)) : Hl(e);
            break;
        default:
            Hl(e)
        }
    }
    function Wl(e) {
        var t = e.deletions;
        if (e.flags & 16) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    fl = r,
                    Gl(r, e)
                }
            Vl(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                Xc(8, t, t.return),
                Wl(t);
                break;
            case 22:
                n = t.stateNode,
                n._visibility & 2 && (n._visibility &= -3,
                Wl(t));
                break;
            default:
                Wl(t)
            }
            e = e.sibling
        }
    }
    function Gl(e, t) {
        for (; fl !== null; ) {
            var n = fl;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Xc(8, n, t);
                break;
            case 23:
            case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                    var r = n.memoizedState.cachePool.pool;
                    r != null && r.refCount++
                }
                break;
            case 24:
                ha(n.memoizedState.cache)
            }
            if (r = n.child,
            r !== null)
                r.return = n,
                fl = r;
            else
                a: for (n = e; fl !== null; ) {
                    r = fl;
                    var i = r.sibling
                      , a = r.return;
                    if (hl(r),
                    r === n) {
                        fl = null;
                        break a
                    }
                    if (i !== null) {
                        i.return = a,
                        fl = i;
                        break a
                    }
                    fl = a
                }
        }
    }
    var Kl = {
        getCacheForType: function(e) {
            var t = sa(pa)
              , n = t.data.get(e);
            return n === void 0 && (n = e(),
            t.data.set(e, n)),
            n
        },
        cacheSignal: function() {
            return sa(pa).controller.signal
        }
    }
      , ql = typeof WeakMap == `function` ? WeakMap : Map
      , L = 0
      , Jl = null
      , R = null
      , z = 0
      , Yl = 0
      , Xl = null
      , Zl = !1
      , Ql = !1
      , $l = !1
      , eu = 0
      , tu = 0
      , nu = 0
      , ru = 0
      , iu = 0
      , au = 0
      , ou = 0
      , su = null
      , cu = null
      , lu = !1
      , uu = 0
      , du = 0
      , fu = 1 / 0
      , pu = null
      , mu = null
      , hu = 0
      , gu = null
      , _u = null
      , vu = 0
      , yu = 0
      , bu = null
      , xu = null
      , Su = 0
      , Cu = null;
    function wu() {
        return L & 2 && z !== 0 ? z & -z : D.T === null ? dt() : Cd()
    }
    function Tu() {
        if (au === 0)
            if (!(z & 536870912) || M) {
                var e = Xe;
                Xe <<= 1,
                !(Xe & 3932160) && (Xe = 262144),
                au = e
            } else
                au = 536870912;
        return e = lo.current,
        e !== null && (e.flags |= 32),
        au
    }
    function Eu(e, t, n) {
        (e === Jl && (Yl === 2 || Yl === 9) || e.cancelPendingCommit !== null) && (Nu(e, 0),
        Au(e, z, au, !1)),
        it(e, n),
        (!(L & 2) || e !== Jl) && (e === Jl && (!(L & 2) && (ru |= n),
        tu === 4 && Au(e, z, au, !1)),
        hd(e))
    }
    function Du(e, t, n) {
        if (L & 6)
            throw Error(i(327));
        var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || et(e, t)
          , a = r ? Vu(e, t) : zu(e, t, !0)
          , o = r;
        do {
            if (a === 0) {
                Ql && !r && Au(e, t, 0, !1);
                break
            }
            if (n = e.current.alternate,
            o && !ku(n)) {
                a = zu(e, t, !1),
                o = !1;
                continue
            }
            if (a === 2) {
                if (o = t,
                e.errorRecoveryDisabledLanes & o)
                    var s = 0;
                else
                    s = e.pendingLanes & -536870913,
                    s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
                if (s !== 0) {
                    t = s;
                    a: {
                        var c = e;
                        a = su;
                        var l = c.current.memoizedState.isDehydrated;
                        if (l && (Nu(c, s).flags |= 256),
                        s = zu(c, s, !1),
                        s !== 2) {
                            if ($l && !l) {
                                c.errorRecoveryDisabledLanes |= o,
                                ru |= o,
                                a = 4;
                                break a
                            }
                            o = cu,
                            cu = a,
                            o !== null && (cu === null ? cu = o : cu.push.apply(cu, o))
                        }
                        a = s
                    }
                    if (o = !1,
                    a !== 2)
                        continue
                }
            }
            if (a === 1) {
                Nu(e, 0),
                Au(e, t, 0, !0);
                break
            }
            a: {
                switch (r = e,
                o = a,
                o) {
                case 0:
                case 1:
                    throw Error(i(345));
                case 4:
                    if ((t & 4194048) !== t)
                        break;
                case 6:
                    Au(r, t, au, !Zl);
                    break a;
                case 2:
                    cu = null;
                    break;
                case 3:
                case 5:
                    break;
                default:
                    throw Error(i(329))
                }
                if ((t & 62914560) === t && (a = uu + 300 - Ne(),
                10 < a)) {
                    if (Au(r, t, au, !Zl),
                    $e(r, 0, !0) !== 0)
                        break a;
                    vu = t,
                    r.timeoutHandle = af(Ou.bind(null, r, n, cu, pu, lu, t, au, ru, ou, Zl, o, `Throttled`, -0, 0), a);
                    break a
                }
                Ou(r, n, cu, pu, lu, t, au, ru, ou, Zl, o, null, -0, 0)
            }
            break
        } while (1);
        hd(e)
    }
    function Ou(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
        if (e.timeoutHandle = -1,
        d = t.subtreeFlags,
        d & 8192 || (d & 16785408) == 16785408) {
            d = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: cn
            },
            Bl(t, a, d);
            var m = (a & 62914560) === a ? uu - Ne() : (a & 4194048) === a ? du - Ne() : 0;
            if (m = np(d, m),
            m !== null) {
                vu = a,
                e.cancelPendingCommit = m(Ju.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)),
                Au(e, a, o, !l);
                return
            }
        }
        Ju(e, t, a, n, r, i, o, s, c)
    }
    function ku(e) {
        for (var t = e; ; ) {
            var n = t.tag;
            if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue,
            n !== null && (n = n.stores,
            n !== null)))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , a = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!kr(a(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
                n.return = t,
                t = n;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Au(e, t, n, r) {
        t &= ~iu,
        t &= ~ru,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        r && (e.warmLanes |= t),
        r = e.expirationTimes;
        for (var i = t; 0 < i; ) {
            var a = 31 - Ge(i)
              , o = 1 << a;
            r[a] = -1,
            i &= ~o
        }
        n !== 0 && ot(e, n, t)
    }
    function ju() {
        return L & 6 ? !0 : (gd(0, !1),
        !1)
    }
    function Mu() {
        if (R !== null) {
            if (Yl === 0)
                var e = R.return;
            else
                e = R,
                $i = Qi = null,
                Lo(e),
                Ra = null,
                za = 0,
                e = R;
            for (; e !== null; )
                Jc(e.alternate, e),
                e = e.return;
            R = null
        }
    }
    function Nu(e, t) {
        var n = e.timeoutHandle;
        n !== -1 && (e.timeoutHandle = -1,
        of(n)),
        n = e.cancelPendingCommit,
        n !== null && (e.cancelPendingCommit = null,
        n()),
        vu = 0,
        Mu(),
        Jl = e,
        R = n = _i(e.current, null),
        z = t,
        Yl = 0,
        Xl = null,
        Zl = !1,
        Ql = et(e, t),
        $l = !1,
        ou = au = iu = ru = nu = tu = 0,
        cu = su = null,
        lu = !1,
        t & 8 && (t |= t & 32);
        var r = e.entangledLanes;
        if (r !== 0)
            for (e = e.entanglements,
            r &= t; 0 < r; ) {
                var i = 31 - Ge(r)
                  , a = 1 << i;
                t |= e[i],
                r &= ~a
            }
        return eu = t,
        si(),
        n
    }
    function Pu(e, t) {
        P = null,
        D.H = F,
        t === Oa || t === Aa ? (t = Ia(),
        Yl = 3) : t === ka ? (t = Ia(),
        Yl = 4) : Yl = t === lc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1,
        Xl = t,
        R === null && (tu = 1,
        rc(e, Ti(t, e.current)))
    }
    function Fu() {
        var e = lo.current;
        return e === null ? !0 : (z & 4194048) === z ? uo === null : (z & 62914560) === z || z & 536870912 ? e === uo : !1
    }
    function Iu() {
        var e = D.H;
        return D.H = F,
        e === null ? F : e
    }
    function Lu() {
        var e = D.A;
        return D.A = Kl,
        e
    }
    function Ru() {
        tu = 4,
        Zl || (z & 4194048) !== z && lo.current !== null || (Ql = !0),
        !(nu & 134217727) && !(ru & 134217727) || Jl === null || Au(Jl, z, au, !1)
    }
    function zu(e, t, n) {
        var r = L;
        L |= 2;
        var i = Iu()
          , a = Lu();
        (Jl !== e || z !== t) && (pu = null,
        Nu(e, t)),
        t = !1;
        var o = tu;
        a: do
            try {
                if (Yl !== 0 && R !== null) {
                    var s = R
                      , c = Xl;
                    switch (Yl) {
                    case 8:
                        Mu(),
                        o = 6;
                        break a;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        lo.current === null && (t = !0);
                        var l = Yl;
                        if (Yl = 0,
                        Xl = null,
                        Gu(e, s, c, l),
                        n && Ql) {
                            o = 0;
                            break a
                        }
                        break;
                    default:
                        l = Yl,
                        Yl = 0,
                        Xl = null,
                        Gu(e, s, c, l)
                    }
                }
                Bu(),
                o = tu;
                break
            } catch (t) {
                Pu(e, t)
            }
        while (1);
        return t && e.shellSuspendCounter++,
        $i = Qi = null,
        L = r,
        D.H = i,
        D.A = a,
        R === null && (Jl = null,
        z = 0,
        si()),
        o
    }
    function Bu() {
        for (; R !== null; )
            Uu(R)
    }
    function Vu(e, t) {
        var n = L;
        L |= 2;
        var r = Iu()
          , a = Lu();
        Jl !== e || z !== t ? (pu = null,
        fu = Ne() + 500,
        Nu(e, t)) : Ql = et(e, t);
        a: do
            try {
                if (Yl !== 0 && R !== null) {
                    t = R;
                    var o = Xl;
                    b: switch (Yl) {
                    case 1:
                        Yl = 0,
                        Xl = null,
                        Gu(e, t, o, 1);
                        break;
                    case 2:
                    case 9:
                        if (Ma(o)) {
                            Yl = 0,
                            Xl = null,
                            Wu(t);
                            break
                        }
                        t = function() {
                            Yl !== 2 && Yl !== 9 || Jl !== e || (Yl = 7),
                            hd(e)
                        }
                        ,
                        o.then(t, t);
                        break a;
                    case 3:
                        Yl = 7;
                        break a;
                    case 4:
                        Yl = 5;
                        break a;
                    case 7:
                        Ma(o) ? (Yl = 0,
                        Xl = null,
                        Wu(t)) : (Yl = 0,
                        Xl = null,
                        Gu(e, t, o, 7));
                        break;
                    case 5:
                        var s = null;
                        switch (R.tag) {
                        case 26:
                            s = R.memoizedState;
                        case 5:
                        case 27:
                            var c = R;
                            if (s ? $f(s) : c.stateNode.complete) {
                                Yl = 0,
                                Xl = null;
                                var l = c.sibling;
                                if (l !== null)
                                    R = l;
                                else {
                                    var u = c.return;
                                    u === null ? R = null : (R = u,
                                    Ku(u))
                                }
                                break b
                            }
                        }
                        Yl = 0,
                        Xl = null,
                        Gu(e, t, o, 5);
                        break;
                    case 6:
                        Yl = 0,
                        Xl = null,
                        Gu(e, t, o, 6);
                        break;
                    case 8:
                        Mu(),
                        tu = 6;
                        break a;
                    default:
                        throw Error(i(462))
                    }
                }
                Hu();
                break
            } catch (t) {
                Pu(e, t)
            }
        while (1);
        return $i = Qi = null,
        D.H = r,
        D.A = a,
        L = n,
        R === null ? (Jl = null,
        z = 0,
        si(),
        tu) : 0
    }
    function Hu() {
        for (; R !== null && !je(); )
            Uu(R)
    }
    function Uu(e) {
        var t = zc(e.alternate, e, eu);
        e.memoizedProps = e.pendingProps,
        t === null ? Ku(e) : R = t
    }
    function Wu(e) {
        var t = e
          , n = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = Cc(n, t, t.pendingProps, t.type, void 0, z);
            break;
        case 11:
            t = Cc(n, t, t.pendingProps, t.type.render, t.ref, z);
            break;
        case 5:
            Lo(t);
        default:
            Jc(n, t),
            t = R = vi(t, eu),
            t = zc(n, t, eu)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? Ku(e) : R = t
    }
    function Gu(e, t, n, r) {
        $i = Qi = null,
        Lo(t),
        Ra = null,
        za = 0;
        var i = t.return;
        try {
            if (cc(e, i, t, n, z)) {
                tu = 1,
                rc(e, Ti(n, e.current)),
                R = null;
                return
            }
        } catch (t) {
            if (i !== null)
                throw R = i,
                t;
            tu = 1,
            rc(e, Ti(n, e.current)),
            R = null;
            return
        }
        t.flags & 32768 ? (M || r === 1 ? e = !0 : Ql || z & 536870912 ? e = !1 : (Zl = e = !0,
        (r === 2 || r === 9 || r === 3 || r === 6) && (r = lo.current,
        r !== null && r.tag === 13 && (r.flags |= 16384))),
        qu(t, e)) : Ku(t)
    }
    function Ku(e) {
        var t = e;
        do {
            if (t.flags & 32768) {
                qu(t, Zl);
                return
            }
            e = t.return;
            var n = Kc(t.alternate, t, eu);
            if (n !== null) {
                R = n;
                return
            }
            if (t = t.sibling,
            t !== null) {
                R = t;
                return
            }
            R = t = e
        } while (t !== null);
        tu === 0 && (tu = 5)
    }
    function qu(e, t) {
        do {
            var n = qc(e.alternate, e);
            if (n !== null) {
                n.flags &= 32767,
                R = n;
                return
            }
            if (n = e.return,
            n !== null && (n.flags |= 32768,
            n.subtreeFlags = 0,
            n.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                R = e;
                return
            }
            R = e = n
        } while (e !== null);
        tu = 6,
        R = null
    }
    function Ju(e, t, n, r, a, o, s, c, l) {
        e.cancelPendingCommit = null;
        do
            $u();
        while (hu !== 0);
        if (L & 6)
            throw Error(i(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(i(177));
            if (o = t.lanes | t.childLanes,
            o |= oi,
            at(e, n, o, s, c, l),
            e === Jl && (R = Jl = null,
            z = 0),
            _u = t,
            gu = e,
            vu = n,
            yu = o,
            bu = a,
            xu = r,
            t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            cd(Le, function() {
                return ed(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            r = !!(t.flags & 13878),
            t.subtreeFlags & 13878 || r) {
                r = D.T,
                D.T = null,
                a = O.p,
                O.p = 2,
                s = L,
                L |= 4;
                try {
                    pl(e, t, n)
                } finally {
                    L = s,
                    O.p = a,
                    D.T = r
                }
            }
            hu = 1,
            Yu(),
            Xu(),
            Zu()
        }
    }
    function Yu() {
        if (hu === 1) {
            hu = 0;
            var e = gu
              , t = _u
              , n = !!(t.flags & 13878);
            if (t.subtreeFlags & 13878 || n) {
                n = D.T,
                D.T = null;
                var r = O.p;
                O.p = 2;
                var i = L;
                L |= 4;
                try {
                    El(t, e);
                    var a = Zd
                      , o = Pr(e.containerInfo)
                      , s = a.focusedElem
                      , c = a.selectionRange;
                    if (o !== s && s && s.ownerDocument && Nr(s.ownerDocument.documentElement, s)) {
                        if (c !== null && Fr(s)) {
                            var l = c.start
                              , u = c.end;
                            if (u === void 0 && (u = l),
                            `selectionStart` in s)
                                s.selectionStart = l,
                                s.selectionEnd = Math.min(u, s.value.length);
                            else {
                                var d = s.ownerDocument || document
                                  , f = d && d.defaultView || window;
                                if (f.getSelection) {
                                    var p = f.getSelection()
                                      , m = s.textContent.length
                                      , h = Math.min(c.start, m)
                                      , g = c.end === void 0 ? h : Math.min(c.end, m);
                                    !p.extend && h > g && (o = g,
                                    g = h,
                                    h = o);
                                    var _ = Mr(s, h)
                                      , v = Mr(s, g);
                                    if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
                                        var y = d.createRange();
                                        y.setStart(_.node, _.offset),
                                        p.removeAllRanges(),
                                        h > g ? (p.addRange(y),
                                        p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset),
                                        p.addRange(y))
                                    }
                                }
                            }
                        }
                        for (d = [],
                        p = s; p = p.parentNode; )
                            p.nodeType === 1 && d.push({
                                element: p,
                                left: p.scrollLeft,
                                top: p.scrollTop
                            });
                        for (typeof s.focus == `function` && s.focus(),
                        s = 0; s < d.length; s++) {
                            var b = d[s];
                            b.element.scrollLeft = b.left,
                            b.element.scrollTop = b.top
                        }
                    }
                    G = !!Xd,
                    Zd = Xd = null
                } finally {
                    L = i,
                    O.p = r,
                    D.T = n
                }
            }
            e.current = t,
            hu = 2
        }
    }
    function Xu() {
        if (hu === 2) {
            hu = 0;
            var e = gu
              , t = _u
              , n = !!(t.flags & 8772);
            if (t.subtreeFlags & 8772 || n) {
                n = D.T,
                D.T = null;
                var r = O.p;
                O.p = 2;
                var i = L;
                L |= 4;
                try {
                    ml(e, t.alternate, t)
                } finally {
                    L = i,
                    O.p = r,
                    D.T = n
                }
            }
            hu = 3
        }
    }
    function Zu() {
        if (hu === 4 || hu === 3) {
            hu = 0,
            Me();
            var e = gu
              , t = _u
              , n = vu
              , r = xu;
            t.subtreeFlags & 10256 || t.flags & 10256 ? hu = 5 : (hu = 0,
            _u = gu = null,
            Qu(e, e.pendingLanes));
            var i = e.pendingLanes;
            if (i === 0 && (mu = null),
            ut(n),
            t = t.stateNode,
            Ue && typeof Ue.onCommitFiberRoot == `function`)
                try {
                    Ue.onCommitFiberRoot(He, t, void 0, (t.current.flags & 128) == 128)
                } catch {}
            if (r !== null) {
                t = D.T,
                i = O.p,
                O.p = 2,
                D.T = null;
                try {
                    for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
                        var s = r[o];
                        a(s.value, {
                            componentStack: s.stack
                        })
                    }
                } finally {
                    D.T = t,
                    O.p = i
                }
            }
            vu & 3 && $u(),
            hd(e),
            i = e.pendingLanes,
            n & 261930 && i & 42 ? e === Cu ? Su++ : (Su = 0,
            Cu = e) : Su = 0,
            gd(0, !1)
        }
    }
    function Qu(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        ha(t)))
    }
    function $u() {
        return Yu(),
        Xu(),
        Zu(),
        ed()
    }
    function ed() {
        if (hu !== 5)
            return !1;
        var e = gu
          , t = yu;
        yu = 0;
        var n = ut(vu)
          , r = D.T
          , a = O.p;
        try {
            O.p = 32 > n ? 32 : n,
            D.T = null,
            n = bu,
            bu = null;
            var o = gu
              , s = vu;
            if (hu = 0,
            _u = gu = null,
            vu = 0,
            L & 6)
                throw Error(i(331));
            var c = L;
            if (L |= 4,
            Ul(o.current),
            Fl(o, o.current, s, n),
            L = c,
            gd(0, !1),
            Ue && typeof Ue.onPostCommitFiberRoot == `function`)
                try {
                    Ue.onPostCommitFiberRoot(He, o)
                } catch {}
            return !0
        } finally {
            O.p = a,
            D.T = r,
            Qu(e, t)
        }
    }
    function td(e, t, n) {
        t = Ti(n, t),
        t = ac(e.stateNode, t, 2),
        e = Xa(e, t, 2),
        e !== null && (it(e, 2),
        hd(e))
    }
    function nd(e, t, n) {
        if (e.tag === 3)
            td(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    td(t, e, n);
                    break
                }
                if (t.tag === 1) {
                    var r = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == `function` || typeof r.componentDidCatch == `function` && (mu === null || !mu.has(r))) {
                        e = Ti(n, e),
                        n = oc(2),
                        r = Xa(t, n, 2),
                        r !== null && (sc(n, r, t, e),
                        it(r, 2),
                        hd(r));
                        break
                    }
                }
                t = t.return
            }
    }
    function rd(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new ql;
            var i = new Set;
            r.set(t, i)
        } else
            i = r.get(t),
            i === void 0 && (i = new Set,
            r.set(t, i));
        i.has(n) || ($l = !0,
        i.add(n),
        e = id.bind(null, e, t, n),
        t.then(e, e))
    }
    function id(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t),
        e.pingedLanes |= e.suspendedLanes & n,
        e.warmLanes &= ~n,
        Jl === e && (z & n) === n && (tu === 4 || tu === 3 && (z & 62914560) === z && 300 > Ne() - uu ? !(L & 2) && Nu(e, 0) : iu |= n,
        ou === z && (ou = 0)),
        hd(e)
    }
    function ad(e, t) {
        t === 0 && (t = nt()),
        e = ui(e, t),
        e !== null && (it(e, t),
        hd(e))
    }
    function od(e) {
        var t = e.memoizedState
          , n = 0;
        t !== null && (n = t.retryLane),
        ad(e, n)
    }
    function sd(e, t) {
        var n = 0;
        switch (e.tag) {
        case 31:
        case 13:
            var r = e.stateNode
              , a = e.memoizedState;
            a !== null && (n = a.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        case 22:
            r = e.stateNode._retryCache;
            break;
        default:
            throw Error(i(314))
        }
        r !== null && r.delete(t),
        ad(e, n)
    }
    function cd(e, t) {
        return ke(e, t)
    }
    var ld = null
      , ud = null
      , dd = !1
      , fd = !1
      , pd = !1
      , md = 0;
    function hd(e) {
        e !== ud && e.next === null && (ud === null ? ld = ud = e : ud = ud.next = e),
        fd = !0,
        dd || (dd = !0,
        Sd())
    }
    function gd(e, t) {
        if (!pd && fd) {
            pd = !0;
            do
                for (var n = !1, r = ld; r !== null; ) {
                    if (!t)
                        if (e !== 0) {
                            var i = r.pendingLanes;
                            if (i === 0)
                                var a = 0;
                            else {
                                var o = r.suspendedLanes
                                  , s = r.pingedLanes;
                                a = (1 << 31 - Ge(42 | e) + 1) - 1,
                                a &= i & ~(o & ~s),
                                a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0
                            }
                            a !== 0 && (n = !0,
                            xd(r, a))
                        } else
                            a = z,
                            a = $e(r, r === Jl ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1),
                            !(a & 3) || et(r, a) || (n = !0,
                            xd(r, a));
                    r = r.next
                }
            while (n);
            pd = !1
        }
    }
    function _d() {
        vd()
    }
    function vd() {
        fd = dd = !1;
        var e = 0;
        md !== 0 && rf() && (e = md);
        for (var t = Ne(), n = null, r = ld; r !== null; ) {
            var i = r.next
              , a = yd(r, t);
            a === 0 ? (r.next = null,
            n === null ? ld = i : n.next = i,
            i === null && (ud = n)) : (n = r,
            (e !== 0 || a & 3) && (fd = !0)),
            r = i
        }
        hu !== 0 && hu !== 5 || gd(e, !1),
        md !== 0 && (md = 0)
    }
    function yd(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a; ) {
            var o = 31 - Ge(a)
              , s = 1 << o
              , c = i[o];
            c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = tt(s, t)) : c <= t && (e.expiredLanes |= s),
            a &= ~s
        }
        if (t = Jl,
        n = z,
        n = $e(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        r = e.callbackNode,
        n === 0 || e === t && (Yl === 2 || Yl === 9) || e.cancelPendingCommit !== null)
            return r !== null && r !== null && Ae(r),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if (!(n & 3) || et(e, n)) {
            if (t = n & -n,
            t === e.callbackPriority)
                return t;
            switch (r !== null && Ae(r),
            ut(n)) {
            case 2:
            case 8:
                n = Ie;
                break;
            case 32:
                n = Le;
                break;
            case 268435456:
                n = ze;
                break;
            default:
                n = Le
            }
            return r = bd.bind(null, e),
            n = ke(n, r),
            e.callbackPriority = t,
            e.callbackNode = n,
            t
        }
        return r !== null && r !== null && Ae(r),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function bd(e, t) {
        if (hu !== 0 && hu !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var n = e.callbackNode;
        if ($u() && e.callbackNode !== n)
            return null;
        var r = z;
        return r = $e(e, e === Jl ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        r === 0 ? null : (Du(e, r, t),
        yd(e, Ne()),
        e.callbackNode != null && e.callbackNode === n ? bd.bind(null, e) : null)
    }
    function xd(e, t) {
        if ($u())
            return null;
        Du(e, t, !0)
    }
    function Sd() {
        cf(function() {
            L & 6 ? ke(Fe, _d) : vd()
        })
    }
    function Cd() {
        if (md === 0) {
            var e = va;
            e === 0 && (e = Ye,
            Ye <<= 1,
            !(Ye & 261888) && (Ye = 256)),
            md = e
        }
        return md
    }
    function wd(e) {
        return e == null || typeof e == `symbol` || typeof e == `boolean` ? null : typeof e == `function` ? e : sn(`` + e)
    }
    function Td(e, t) {
        var n = t.ownerDocument.createElement(`input`);
        return n.name = t.name,
        n.value = t.value,
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        e = new FormData(e),
        n.parentNode.removeChild(n),
        e
    }
    function Ed(e, t, n, r, i) {
        if (t === `submit` && n && n.stateNode === i) {
            var a = wd((i[ht] || null).action)
              , o = r.submitter;
            o && (t = (t = o[ht] || null) ? wd(t.formAction) : o.getAttribute(`formAction`),
            t !== null && (a = t,
            o = null));
            var s = new kn(`action`,`action`,null,r,i);
            e.push({
                event: s,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (r.defaultPrevented) {
                            if (md !== 0) {
                                var e = o ? Td(i, o) : new FormData(i);
                                Ns(n, {
                                    pending: !0,
                                    data: e,
                                    method: i.method,
                                    action: a
                                }, null, e)
                            }
                        } else
                            typeof a == `function` && (s.preventDefault(),
                            e = o ? Td(i, o) : new FormData(i),
                            Ns(n, {
                                pending: !0,
                                data: e,
                                method: i.method,
                                action: a
                            }, a, e))
                    },
                    currentTarget: i
                }]
            })
        }
    }
    for (var Dd = 0; Dd < ti.length; Dd++) {
        var Od = ti[Dd];
        ni(Od.toLowerCase(), `on` + (Od[0].toUpperCase() + Od.slice(1)))
    }
    ni(qr, `onAnimationEnd`),
    ni(Jr, `onAnimationIteration`),
    ni(Yr, `onAnimationStart`),
    ni(`dblclick`, `onDoubleClick`),
    ni(`focusin`, `onFocus`),
    ni(`focusout`, `onBlur`),
    ni(Xr, `onTransitionRun`),
    ni(Zr, `onTransitionStart`),
    ni(Qr, `onTransitionCancel`),
    ni($r, `onTransitionEnd`),
    jt(`onMouseEnter`, [`mouseout`, `mouseover`]),
    jt(`onMouseLeave`, [`mouseout`, `mouseover`]),
    jt(`onPointerEnter`, [`pointerout`, `pointerover`]),
    jt(`onPointerLeave`, [`pointerout`, `pointerover`]),
    At(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)),
    At(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),
    At(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
    At(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)),
    At(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)),
    At(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
    var kd = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `)
      , Ad = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(kd));
    function jd(e, t) {
        t = !!(t & 4);
        for (var n = 0; n < e.length; n++) {
            var r = e[n]
              , i = r.event;
            r = r.listeners;
            a: {
                var a = void 0;
                if (t)
                    for (var o = r.length - 1; 0 <= o; o--) {
                        var s = r[o]
                          , c = s.instance
                          , l = s.currentTarget;
                        if (s = s.listener,
                        c !== a && i.isPropagationStopped())
                            break a;
                        a = s,
                        i.currentTarget = l;
                        try {
                            a(i)
                        } catch (e) {
                            ri(e)
                        }
                        i.currentTarget = null,
                        a = c
                    }
                else
                    for (o = 0; o < r.length; o++) {
                        if (s = r[o],
                        c = s.instance,
                        l = s.currentTarget,
                        s = s.listener,
                        c !== a && i.isPropagationStopped())
                            break a;
                        a = s,
                        i.currentTarget = l;
                        try {
                            a(i)
                        } catch (e) {
                            ri(e)
                        }
                        i.currentTarget = null,
                        a = c
                    }
            }
        }
    }
    function B(e, t) {
        var n = t[_t];
        n === void 0 && (n = t[_t] = new Set);
        var r = e + `__bubble`;
        n.has(r) || (Fd(t, e, 2, !1),
        n.add(r))
    }
    function Md(e, t, n) {
        var r = 0;
        t && (r |= 4),
        Fd(n, e, r, t)
    }
    var Nd = `_reactListening` + Math.random().toString(36).slice(2);
    function Pd(e) {
        if (!e[Nd]) {
            e[Nd] = !0,
            Ot.forEach(function(t) {
                t !== `selectionchange` && (Ad.has(t) || Md(t, !1, e),
                Md(t, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Nd] || (t[Nd] = !0,
            Md(`selectionchange`, !1, t))
        }
    }
    function Fd(e, t, n, r) {
        switch (bp(t)) {
        case 2:
            var i = gp;
            break;
        case 8:
            i = K;
            break;
        default:
            i = _p
        }
        n = i.bind(null, t, n, e),
        i = void 0,
        !vn || t !== `touchstart` && t !== `touchmove` && t !== `wheel` || (i = !0),
        r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
            capture: !0,
            passive: i
        }) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, {
            passive: i
        })
    }
    function Id(e, t, n, r, i) {
        var a = r;
        if (!(t & 1) && !(t & 2) && r !== null)
            a: for (; ; ) {
                if (r === null)
                    return;
                var s = r.tag;
                if (s === 3 || s === 4) {
                    var c = r.stateNode.containerInfo;
                    if (c === i)
                        break;
                    if (s === 4)
                        for (s = r.return; s !== null; ) {
                            var l = s.tag;
                            if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                                return;
                            s = s.return
                        }
                    for (; c !== null; ) {
                        if (s = Ct(c),
                        s === null)
                            return;
                        if (l = s.tag,
                        l === 5 || l === 6 || l === 26 || l === 27) {
                            r = a = s;
                            continue a
                        }
                        c = c.parentNode
                    }
                }
                r = r.return
            }
        hn(function() {
            var r = a
              , i = un(n)
              , s = [];
            a: {
                var c = ei.get(e);
                if (c !== void 0) {
                    var l = kn
                      , u = e;
                    switch (e) {
                    case `keypress`:
                        if (wn(n) === 0)
                            break a;
                    case `keydown`:
                    case `keyup`:
                        l = qn;
                        break;
                    case `focusin`:
                        u = `focus`,
                        l = Rn;
                        break;
                    case `focusout`:
                        u = `blur`,
                        l = Rn;
                        break;
                    case `beforeblur`:
                    case `afterblur`:
                        l = Rn;
                        break;
                    case `click`:
                        if (n.button === 2)
                            break a;
                    case `auxclick`:
                    case `dblclick`:
                    case `mousedown`:
                    case `mousemove`:
                    case `mouseup`:
                    case `mouseout`:
                    case `mouseover`:
                    case `contextmenu`:
                        l = In;
                        break;
                    case `drag`:
                    case `dragend`:
                    case `dragenter`:
                    case `dragexit`:
                    case `dragleave`:
                    case `dragover`:
                    case `dragstart`:
                    case `drop`:
                        l = Ln;
                        break;
                    case `touchcancel`:
                    case `touchend`:
                    case `touchmove`:
                    case `touchstart`:
                        l = Yn;
                        break;
                    case qr:
                    case Jr:
                    case Yr:
                        l = zn;
                        break;
                    case $r:
                        l = Xn;
                        break;
                    case `scroll`:
                    case `scrollend`:
                        l = jn;
                        break;
                    case `wheel`:
                        l = Zn;
                        break;
                    case `copy`:
                    case `cut`:
                    case `paste`:
                        l = Bn;
                        break;
                    case `gotpointercapture`:
                    case `lostpointercapture`:
                    case `pointercancel`:
                    case `pointerdown`:
                    case `pointermove`:
                    case `pointerout`:
                    case `pointerover`:
                    case `pointerup`:
                        l = Jn;
                        break;
                    case `toggle`:
                    case `beforetoggle`:
                        l = Qn
                    }
                    var d = !!(t & 4)
                      , f = !d && (e === `scroll` || e === `scrollend`)
                      , p = d ? c === null ? null : c + `Capture` : c;
                    d = [];
                    for (var m = r, h; m !== null; ) {
                        var g = m;
                        if (h = g.stateNode,
                        g = g.tag,
                        g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = gn(m, p),
                        g != null && d.push(Ld(m, g, h))),
                        f)
                            break;
                        m = m.return
                    }
                    0 < d.length && (c = new l(c,u,null,n,i),
                    s.push({
                        event: c,
                        listeners: d
                    }))
                }
            }
            if (!(t & 7)) {
                a: {
                    if (c = e === `mouseover` || e === `pointerover`,
                    l = e === `mouseout` || e === `pointerout`,
                    c && n !== ln && (u = n.relatedTarget || n.fromElement) && (Ct(u) || u[gt]))
                        break a;
                    if ((l || c) && (c = i.window === i ? i : (c = i.ownerDocument) ? c.defaultView || c.parentWindow : window,
                    l ? (u = n.relatedTarget || n.toElement,
                    l = r,
                    u = u ? Ct(u) : null,
                    u !== null && (f = o(u),
                    d = u.tag,
                    u !== f || d !== 5 && d !== 27 && d !== 6) && (u = null)) : (l = null,
                    u = r),
                    l !== u)) {
                        if (d = In,
                        g = `onMouseLeave`,
                        p = `onMouseEnter`,
                        m = `mouse`,
                        (e === `pointerout` || e === `pointerover`) && (d = Jn,
                        g = `onPointerLeave`,
                        p = `onPointerEnter`,
                        m = `pointer`),
                        f = l == null ? c : Tt(l),
                        h = u == null ? c : Tt(u),
                        c = new d(g,m + `leave`,l,n,i),
                        c.target = f,
                        c.relatedTarget = h,
                        g = null,
                        Ct(i) === r && (d = new d(p,m + `enter`,u,n,i),
                        d.target = h,
                        d.relatedTarget = f,
                        g = d),
                        f = g,
                        l && u)
                            b: {
                                for (d = zd,
                                p = l,
                                m = u,
                                h = 0,
                                g = p; g; g = d(g))
                                    h++;
                                g = 0;
                                for (var _ = m; _; _ = d(_))
                                    g++;
                                for (; 0 < h - g; )
                                    p = d(p),
                                    h--;
                                for (; 0 < g - h; )
                                    m = d(m),
                                    g--;
                                for (; h--; ) {
                                    if (p === m || m !== null && p === m.alternate) {
                                        d = p;
                                        break b
                                    }
                                    p = d(p),
                                    m = d(m)
                                }
                                d = null
                            }
                        else
                            d = null;
                        l !== null && Bd(s, c, l, d, !1),
                        u !== null && f !== null && Bd(s, f, u, d, !0)
                    }
                }
                a: {
                    if (c = r ? Tt(r) : window,
                    l = c.nodeName && c.nodeName.toLowerCase(),
                    l === `select` || l === `input` && c.type === `file`)
                        var v = _r;
                    else if (j(c))
                        if (vr)
                            v = Dr;
                        else {
                            v = Tr;
                            var y = wr
                        }
                    else
                        l = c.nodeName,
                        !l || l.toLowerCase() !== `input` || c.type !== `checkbox` && c.type !== `radio` ? r && rn(r.elementType) && (v = _r) : v = Er;
                    if (v &&= v(e, r)) {
                        fr(s, v, n, i);
                        break a
                    }
                    y && y(e, c, r),
                    e === `focusout` && r && c.type === `number` && r.memoizedProps.value != null && Yt(c, `number`, c.value)
                }
                switch (y = r ? Tt(r) : window,
                e) {
                case `focusin`:
                    (j(y) || y.contentEditable === `true`) && (Lr = y,
                    Rr = r,
                    zr = null);
                    break;
                case `focusout`:
                    zr = Rr = Lr = null;
                    break;
                case `mousedown`:
                    Br = !0;
                    break;
                case `contextmenu`:
                case `mouseup`:
                case `dragend`:
                    Br = !1,
                    Vr(s, n, i);
                    break;
                case `selectionchange`:
                    if (Ir)
                        break;
                case `keydown`:
                case `keyup`:
                    Vr(s, n, i)
                }
                var b;
                if (er)
                    b: {
                        switch (e) {
                        case `compositionstart`:
                            var x = `onCompositionStart`;
                            break b;
                        case `compositionend`:
                            x = `onCompositionEnd`;
                            break b;
                        case `compositionupdate`:
                            x = `onCompositionUpdate`;
                            break b
                        }
                        x = void 0
                    }
                else
                    cr ? or(e, n) && (x = `onCompositionEnd`) : e === `keydown` && n.keyCode === 229 && (x = `onCompositionStart`);
                x && (rr && n.locale !== `ko` && (cr || x !== `onCompositionStart` ? x === `onCompositionEnd` && cr && (b = Cn()) : (bn = i,
                xn = `value` in bn ? bn.value : bn.textContent,
                cr = !0)),
                y = Rd(r, x),
                0 < y.length && (x = new Vn(x,e,null,n,i),
                s.push({
                    event: x,
                    listeners: y
                }),
                b ? x.data = b : (b = sr(n),
                b !== null && (x.data = b)))),
                (b = nr ? lr(e, n) : ur(e, n)) && (x = Rd(r, `onBeforeInput`),
                0 < x.length && (y = new Vn(`onBeforeInput`,`beforeinput`,null,n,i),
                s.push({
                    event: y,
                    listeners: x
                }),
                y.data = b)),
                Ed(s, e, r, n, i)
            }
            jd(s, t)
        })
    }
    function Ld(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }
    function Rd(e, t) {
        for (var n = t + `Capture`, r = []; e !== null; ) {
            var i = e
              , a = i.stateNode;
            if (i = i.tag,
            i !== 5 && i !== 26 && i !== 27 || a === null || (i = gn(e, n),
            i != null && r.unshift(Ld(e, i, a)),
            i = gn(e, t),
            i != null && r.push(Ld(e, i, a))),
            e.tag === 3)
                return r;
            e = e.return
        }
        return []
    }
    function zd(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function Bd(e, t, n, r, i) {
        for (var a = t._reactName, o = []; n !== null && n !== r; ) {
            var s = n
              , c = s.alternate
              , l = s.stateNode;
            if (s = s.tag,
            c !== null && c === r)
                break;
            s !== 5 && s !== 26 && s !== 27 || l === null || (c = l,
            i ? (l = gn(n, a),
            l != null && o.unshift(Ld(n, l, c))) : i || (l = gn(n, a),
            l != null && o.push(Ld(n, l, c)))),
            n = n.return
        }
        o.length !== 0 && e.push({
            event: t,
            listeners: o
        })
    }
    var Vd = /\r\n?/g
      , Hd = /\u0000|\uFFFD/g;
    function Ud(e) {
        return (typeof e == `string` ? e : `` + e).replace(Vd, `
`).replace(Hd, ``)
    }
    function Wd(e, t) {
        return t = Ud(t),
        Ud(e) === t
    }
    function V(e, t, n, r, a, o) {
        switch (n) {
        case `children`:
            typeof r == `string` ? t === `body` || t === `textarea` && r === `` || $t(e, r) : (typeof r == `number` || typeof r == `bigint`) && t !== `body` && $t(e, `` + r);
            break;
        case `className`:
            Lt(e, `class`, r);
            break;
        case `tabIndex`:
            Lt(e, `tabindex`, r);
            break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
            Lt(e, n, r);
            break;
        case `style`:
            nn(e, r, o);
            break;
        case `data`:
            if (t !== `object`) {
                Lt(e, `data`, r);
                break
            }
        case `src`:
        case `href`:
            if (r === `` && (t !== `a` || n !== `href`)) {
                e.removeAttribute(n);
                break
            }
            if (r == null || typeof r == `function` || typeof r == `symbol` || typeof r == `boolean`) {
                e.removeAttribute(n);
                break
            }
            r = sn(`` + r),
            e.setAttribute(n, r);
            break;
        case `action`:
        case `formAction`:
            if (typeof r == `function`) {
                e.setAttribute(n, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
                break
            }
            if (typeof o == `function` && (n === `formAction` ? (t !== `input` && V(e, t, `name`, a.name, a, null),
            V(e, t, `formEncType`, a.formEncType, a, null),
            V(e, t, `formMethod`, a.formMethod, a, null),
            V(e, t, `formTarget`, a.formTarget, a, null)) : (V(e, t, `encType`, a.encType, a, null),
            V(e, t, `method`, a.method, a, null),
            V(e, t, `target`, a.target, a, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`) {
                e.removeAttribute(n);
                break
            }
            r = sn(`` + r),
            e.setAttribute(n, r);
            break;
        case `onClick`:
            r != null && (e.onclick = cn);
            break;
        case `onScroll`:
            r != null && B(`scroll`, e);
            break;
        case `onScrollEnd`:
            r != null && B(`scrollend`, e);
            break;
        case `dangerouslySetInnerHTML`:
            if (r != null) {
                if (typeof r != `object` || !(`__html` in r))
                    throw Error(i(61));
                if (n = r.__html,
                n != null) {
                    if (a.children != null)
                        throw Error(i(60));
                    e.innerHTML = n
                }
            }
            break;
        case `multiple`:
            e.multiple = r && typeof r != `function` && typeof r != `symbol`;
            break;
        case `muted`:
            e.muted = r && typeof r != `function` && typeof r != `symbol`;
            break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
            break;
        case `autoFocus`:
            break;
        case `xlinkHref`:
            if (r == null || typeof r == `function` || typeof r == `boolean` || typeof r == `symbol`) {
                e.removeAttribute(`xlink:href`);
                break
            }
            n = sn(`` + r),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n);
            break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
            r != null && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, `` + r) : e.removeAttribute(n);
            break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
            r && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, ``) : e.removeAttribute(n);
            break;
        case `capture`:
        case `download`:
            !0 === r ? e.setAttribute(n, ``) : !1 !== r && r != null && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, r) : e.removeAttribute(n);
            break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
            r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
            break;
        case `rowSpan`:
        case `start`:
            r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
            break;
        case `popover`:
            B(`beforetoggle`, e),
            B(`toggle`, e),
            It(e, `popover`, r);
            break;
        case `xlinkActuate`:
            Rt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
            break;
        case `xlinkArcrole`:
            Rt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
            break;
        case `xlinkRole`:
            Rt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
            break;
        case `xlinkShow`:
            Rt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
            break;
        case `xlinkTitle`:
            Rt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
            break;
        case `xlinkType`:
            Rt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
            break;
        case `xmlBase`:
            Rt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
            break;
        case `xmlLang`:
            Rt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
            break;
        case `xmlSpace`:
            Rt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
            break;
        case `is`:
            It(e, `is`, r);
            break;
        case `innerText`:
        case `textContent`:
            break;
        default:
            (!(2 < n.length) || n[0] !== `o` && n[0] !== `O` || n[1] !== `n` && n[1] !== `N`) && (n = an.get(n) || n,
            It(e, n, r))
        }
    }
    function Gd(e, t, n, r, a, o) {
        switch (n) {
        case `style`:
            nn(e, r, o);
            break;
        case `dangerouslySetInnerHTML`:
            if (r != null) {
                if (typeof r != `object` || !(`__html` in r))
                    throw Error(i(61));
                if (n = r.__html,
                n != null) {
                    if (a.children != null)
                        throw Error(i(60));
                    e.innerHTML = n
                }
            }
            break;
        case `children`:
            typeof r == `string` ? $t(e, r) : (typeof r == `number` || typeof r == `bigint`) && $t(e, `` + r);
            break;
        case `onScroll`:
            r != null && B(`scroll`, e);
            break;
        case `onScrollEnd`:
            r != null && B(`scrollend`, e);
            break;
        case `onClick`:
            r != null && (e.onclick = cn);
            break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
            break;
        case `innerText`:
        case `textContent`:
            break;
        default:
            if (!kt.hasOwnProperty(n))
                a: {
                    if (n[0] === `o` && n[1] === `n` && (a = n.endsWith(`Capture`),
                    t = n.slice(2, a ? n.length - 7 : void 0),
                    o = e[ht] || null,
                    o = o == null ? null : o[n],
                    typeof o == `function` && e.removeEventListener(t, o, a),
                    typeof r == `function`)) {
                        typeof o != `function` && o !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)),
                        e.addEventListener(t, r, a);
                        break a
                    }
                    n in e ? e[n] = r : !0 === r ? e.setAttribute(n, ``) : It(e, n, r)
                }
        }
    }
    function Kd(e, t, n) {
        switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
            break;
        case `img`:
            B(`error`, e),
            B(`load`, e);
            var r = !1, a = !1, o;
            for (o in n)
                if (n.hasOwnProperty(o)) {
                    var s = n[o];
                    if (s != null)
                        switch (o) {
                        case `src`:
                            r = !0;
                            break;
                        case `srcSet`:
                            a = !0;
                            break;
                        case `children`:
                        case `dangerouslySetInnerHTML`:
                            throw Error(i(137, t));
                        default:
                            V(e, t, o, s, n, null)
                        }
                }
            a && V(e, t, `srcSet`, n.srcSet, n, null),
            r && V(e, t, `src`, n.src, n, null);
            return;
        case `input`:
            B(`invalid`, e);
            var c = o = s = a = null
              , l = null
              , u = null;
            for (r in n)
                if (n.hasOwnProperty(r)) {
                    var d = n[r];
                    if (d != null)
                        switch (r) {
                        case `name`:
                            a = d;
                            break;
                        case `type`:
                            s = d;
                            break;
                        case `checked`:
                            l = d;
                            break;
                        case `defaultChecked`:
                            u = d;
                            break;
                        case `value`:
                            o = d;
                            break;
                        case `defaultValue`:
                            c = d;
                            break;
                        case `children`:
                        case `dangerouslySetInnerHTML`:
                            if (d != null)
                                throw Error(i(137, t));
                            break;
                        default:
                            V(e, t, r, d, n, null)
                        }
                }
            Jt(e, o, c, l, u, s, a, !1);
            return;
        case `select`:
            for (a in B(`invalid`, e),
            r = s = o = null,
            n)
                if (n.hasOwnProperty(a) && (c = n[a],
                c != null))
                    switch (a) {
                    case `value`:
                        o = c;
                        break;
                    case `defaultValue`:
                        s = c;
                        break;
                    case `multiple`:
                        r = c;
                    default:
                        V(e, t, a, c, n, null)
                    }
            t = o,
            n = s,
            e.multiple = !!r,
            t == null ? n != null && Xt(e, !!r, n, !0) : Xt(e, !!r, t, !1);
            return;
        case `textarea`:
            for (s in B(`invalid`, e),
            o = a = r = null,
            n)
                if (n.hasOwnProperty(s) && (c = n[s],
                c != null))
                    switch (s) {
                    case `value`:
                        r = c;
                        break;
                    case `defaultValue`:
                        a = c;
                        break;
                    case `children`:
                        o = c;
                        break;
                    case `dangerouslySetInnerHTML`:
                        if (c != null)
                            throw Error(i(91));
                        break;
                    default:
                        V(e, t, s, c, n, null)
                    }
            Qt(e, r, a, o);
            return;
        case `option`:
            for (l in n)
                if (n.hasOwnProperty(l) && (r = n[l],
                r != null))
                    switch (l) {
                    case `selected`:
                        e.selected = r && typeof r != `function` && typeof r != `symbol`;
                        break;
                    default:
                        V(e, t, l, r, n, null)
                    }
            return;
        case `dialog`:
            B(`beforetoggle`, e),
            B(`toggle`, e),
            B(`cancel`, e),
            B(`close`, e);
            break;
        case `iframe`:
        case `object`:
            B(`load`, e);
            break;
        case `video`:
        case `audio`:
            for (r = 0; r < kd.length; r++)
                B(kd[r], e);
            break;
        case `image`:
            B(`error`, e),
            B(`load`, e);
            break;
        case `details`:
            B(`toggle`, e);
            break;
        case `embed`:
        case `source`:
        case `link`:
            B(`error`, e),
            B(`load`, e);
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
            for (u in n)
                if (n.hasOwnProperty(u) && (r = n[u],
                r != null))
                    switch (u) {
                    case `children`:
                    case `dangerouslySetInnerHTML`:
                        throw Error(i(137, t));
                    default:
                        V(e, t, u, r, n, null)
                    }
            return;
        default:
            if (rn(t)) {
                for (d in n)
                    n.hasOwnProperty(d) && (r = n[d],
                    r !== void 0 && Gd(e, t, d, r, n, void 0));
                return
            }
        }
        for (c in n)
            n.hasOwnProperty(c) && (r = n[c],
            r != null && V(e, t, c, r, n, null))
    }
    function qd(e, t, n, r) {
        switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
            break;
        case `input`:
            var a = null
              , o = null
              , s = null
              , c = null
              , l = null
              , u = null
              , d = null;
            for (m in n) {
                var f = n[m];
                if (n.hasOwnProperty(m) && f != null)
                    switch (m) {
                    case `checked`:
                        break;
                    case `value`:
                        break;
                    case `defaultValue`:
                        l = f;
                    default:
                        r.hasOwnProperty(m) || V(e, t, m, null, r, f)
                    }
            }
            for (var p in r) {
                var m = r[p];
                if (f = n[p],
                r.hasOwnProperty(p) && (m != null || f != null))
                    switch (p) {
                    case `type`:
                        o = m;
                        break;
                    case `name`:
                        a = m;
                        break;
                    case `checked`:
                        u = m;
                        break;
                    case `defaultChecked`:
                        d = m;
                        break;
                    case `value`:
                        s = m;
                        break;
                    case `defaultValue`:
                        c = m;
                        break;
                    case `children`:
                    case `dangerouslySetInnerHTML`:
                        if (m != null)
                            throw Error(i(137, t));
                        break;
                    default:
                        m !== f && V(e, t, p, m, r, f)
                    }
            }
            qt(e, s, c, l, u, d, o, a);
            return;
        case `select`:
            for (o in m = s = c = p = null,
            n)
                if (l = n[o],
                n.hasOwnProperty(o) && l != null)
                    switch (o) {
                    case `value`:
                        break;
                    case `multiple`:
                        m = l;
                    default:
                        r.hasOwnProperty(o) || V(e, t, o, null, r, l)
                    }
            for (a in r)
                if (o = r[a],
                l = n[a],
                r.hasOwnProperty(a) && (o != null || l != null))
                    switch (a) {
                    case `value`:
                        p = o;
                        break;
                    case `defaultValue`:
                        c = o;
                        break;
                    case `multiple`:
                        s = o;
                    default:
                        o !== l && V(e, t, a, o, r, l)
                    }
            t = c,
            n = s,
            r = m,
            p == null ? !!r != !!n && (t == null ? Xt(e, !!n, n ? [] : ``, !1) : Xt(e, !!n, t, !0)) : Xt(e, !!n, p, !1);
            return;
        case `textarea`:
            for (c in m = p = null,
            n)
                if (a = n[c],
                n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
                    switch (c) {
                    case `value`:
                        break;
                    case `children`:
                        break;
                    default:
                        V(e, t, c, null, r, a)
                    }
            for (s in r)
                if (a = r[s],
                o = n[s],
                r.hasOwnProperty(s) && (a != null || o != null))
                    switch (s) {
                    case `value`:
                        p = a;
                        break;
                    case `defaultValue`:
                        m = a;
                        break;
                    case `children`:
                        break;
                    case `dangerouslySetInnerHTML`:
                        if (a != null)
                            throw Error(i(91));
                        break;
                    default:
                        a !== o && V(e, t, s, a, r, o)
                    }
            Zt(e, p, m);
            return;
        case `option`:
            for (var h in n)
                if (p = n[h],
                n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
                    switch (h) {
                    case `selected`:
                        e.selected = !1;
                        break;
                    default:
                        V(e, t, h, null, r, p)
                    }
            for (l in r)
                if (p = r[l],
                m = n[l],
                r.hasOwnProperty(l) && p !== m && (p != null || m != null))
                    switch (l) {
                    case `selected`:
                        e.selected = p && typeof p != `function` && typeof p != `symbol`;
                        break;
                    default:
                        V(e, t, l, p, r, m)
                    }
            return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
            for (var g in n)
                p = n[g],
                n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && V(e, t, g, null, r, p);
            for (u in r)
                if (p = r[u],
                m = n[u],
                r.hasOwnProperty(u) && p !== m && (p != null || m != null))
                    switch (u) {
                    case `children`:
                    case `dangerouslySetInnerHTML`:
                        if (p != null)
                            throw Error(i(137, t));
                        break;
                    default:
                        V(e, t, u, p, r, m)
                    }
            return;
        default:
            if (rn(t)) {
                for (var _ in n)
                    p = n[_],
                    n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && Gd(e, t, _, void 0, r, p);
                for (d in r)
                    p = r[d],
                    m = n[d],
                    !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || Gd(e, t, d, p, r, m);
                return
            }
        }
        for (var v in n)
            p = n[v],
            n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && V(e, t, v, null, r, p);
        for (f in r)
            p = r[f],
            m = n[f],
            !r.hasOwnProperty(f) || p === m || p == null && m == null || V(e, t, f, p, r, m)
    }
    function Jd(e) {
        switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
            return !0;
        default:
            return !1
        }
    }
    function Yd() {
        if (typeof performance.getEntriesByType == `function`) {
            for (var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0; r < n.length; r++) {
                var i = n[r]
                  , a = i.transferSize
                  , o = i.initiatorType
                  , s = i.duration;
                if (a && s && Jd(o)) {
                    for (o = 0,
                    s = i.responseEnd,
                    r += 1; r < n.length; r++) {
                        var c = n[r]
                          , l = c.startTime;
                        if (l > s)
                            break;
                        var u = c.transferSize
                          , d = c.initiatorType;
                        u && Jd(d) && (c = c.responseEnd,
                        o += u * (c < s ? 1 : (s - l) / (c - l)))
                    }
                    if (--r,
                    t += 8 * (a + o) / (i.duration / 1e3),
                    e++,
                    10 < e)
                        break
                }
            }
            if (0 < e)
                return t / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink,
        typeof e == `number`) ? e : 5
    }
    var Xd = null
      , Zd = null;
    function Qd(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function $d(e) {
        switch (e) {
        case `http://www.w3.org/2000/svg`:
            return 1;
        case `http://www.w3.org/1998/Math/MathML`:
            return 2;
        default:
            return 0
        }
    }
    function ef(e, t) {
        if (e === 0)
            switch (t) {
            case `svg`:
                return 1;
            case `math`:
                return 2;
            default:
                return 0
            }
        return e === 1 && t === `foreignObject` ? 0 : e
    }
    function tf(e, t) {
        return e === `textarea` || e === `noscript` || typeof t.children == `string` || typeof t.children == `number` || typeof t.children == `bigint` || typeof t.dangerouslySetInnerHTML == `object` && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var nf = null;
    function rf() {
        var e = window.event;
        return e && e.type === `popstate` ? e !== nf && (nf = e,
        !0) : (nf = null,
        !1)
    }
    var af = typeof setTimeout == `function` ? setTimeout : void 0
      , of = typeof clearTimeout == `function` ? clearTimeout : void 0
      , sf = typeof Promise == `function` ? Promise : void 0
      , cf = typeof queueMicrotask == `function` ? queueMicrotask : sf === void 0 ? af : function(e) {
        return sf.resolve(null).then(e).catch(lf)
    }
    ;
    function lf(e) {
        setTimeout(function() {
            throw e
        })
    }
    function uf(e) {
        return e === `head`
    }
    function df(e, t) {
        var n = t
          , r = 0;
        do {
            var i = n.nextSibling;
            if (e.removeChild(n),
            i && i.nodeType === 8)
                if (n = i.data,
                n === `/$` || n === `/&`) {
                    if (r === 0) {
                        e.removeChild(i),
                        Pp(t);
                        return
                    }
                    r--
                } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`)
                    r++;
                else if (n === `html`)
                    wf(e.ownerDocument.documentElement);
                else if (n === `head`) {
                    n = e.ownerDocument.head,
                    wf(n);
                    for (var a = n.firstChild; a; ) {
                        var o = a.nextSibling
                          , s = a.nodeName;
                        a[xt] || s === `SCRIPT` || s === `STYLE` || s === `LINK` && a.rel.toLowerCase() === `stylesheet` || n.removeChild(a),
                        a = o
                    }
                } else
                    n === `body` && wf(e.ownerDocument.body);
            n = i
        } while (n);
        Pp(t)
    }
    function ff(e, t) {
        var n = e;
        e = 0;
        do {
            var r = n.nextSibling;
            if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display,
            n.style.display = `none`) : (n.style.display = n._stashedDisplay || ``,
            n.getAttribute(`style`) === `` && n.removeAttribute(`style`)) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue,
            n.nodeValue = ``) : n.nodeValue = n._stashedText || ``),
            r && r.nodeType === 8)
                if (n = r.data,
                n === `/$`) {
                    if (e === 0)
                        break;
                    e--
                } else
                    n !== `$` && n !== `$?` && n !== `$~` && n !== `$!` || e++;
            n = r
        } while (n)
    }
    function pf(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var n = t;
            switch (t = t.nextSibling,
            n.nodeName) {
            case `HTML`:
            case `HEAD`:
            case `BODY`:
                pf(n),
                St(n);
                continue;
            case `SCRIPT`:
            case `STYLE`:
                continue;
            case `LINK`:
                if (n.rel.toLowerCase() === `stylesheet`)
                    continue
            }
            e.removeChild(n)
        }
    }
    function mf(e, t, n, r) {
        for (; e.nodeType === 1; ) {
            var i = n;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`))
                    break
            } else if (!r)
                if (t === `input` && e.type === `hidden`) {
                    var a = i.name == null ? null : `` + i.name;
                    if (i.type === `hidden` && e.getAttribute(`name`) === a)
                        return e
                } else
                    return e;
            else if (!e[xt])
                switch (t) {
                case `meta`:
                    if (!e.hasAttribute(`itemprop`))
                        break;
                    return e;
                case `link`:
                    if (a = e.getAttribute(`rel`),
                    a === `stylesheet` && e.hasAttribute(`data-precedence`) || a !== i.rel || e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute(`title`) !== (i.title == null ? null : i.title))
                        break;
                    return e;
                case `style`:
                    if (e.hasAttribute(`data-precedence`))
                        break;
                    return e;
                case `script`:
                    if (a = e.getAttribute(`src`),
                    (a !== (i.src == null ? null : i.src) || e.getAttribute(`type`) !== (i.type == null ? null : i.type) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute(`async`) && !e.hasAttribute(`itemprop`))
                        break;
                    return e;
                default:
                    return e
                }
            if (e = yf(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function H(e, t, n) {
        if (t === ``)
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n || (e = yf(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function hf(e, t) {
        for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t || (e = yf(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function gf(e) {
        return e.data === `$?` || e.data === `$~`
    }
    function _f(e) {
        return e.data === `$!` || e.data === `$?` && e.ownerDocument.readyState !== `loading`
    }
    function vf(e, t) {
        var n = e.ownerDocument;
        if (e.data === `$~`)
            e._reactRetry = t;
        else if (e.data !== `$?` || n.readyState !== `loading`)
            t();
        else {
            var r = function() {
                t(),
                n.removeEventListener(`DOMContentLoaded`, r)
            };
            n.addEventListener(`DOMContentLoaded`, r),
            e._reactRetry = r
        }
    }
    function yf(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === `$` || t === `$!` || t === `$?` || t === `$~` || t === `&` || t === `F!` || t === `F`)
                    break;
                if (t === `/$` || t === `/&`)
                    return null
            }
        }
        return e
    }
    var bf = null;
    function xf(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === `/$` || n === `/&`) {
                    if (t === 0)
                        return yf(e.nextSibling);
                    t--
                } else
                    n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&` || t++
            }
            e = e.nextSibling
        }
        return null
    }
    function Sf(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
                    if (t === 0)
                        return e;
                    t--
                } else
                    n !== `/$` && n !== `/&` || t++
            }
            e = e.previousSibling
        }
        return null
    }
    function Cf(e, t, n) {
        switch (t = Qd(n),
        e) {
        case `html`:
            if (e = t.documentElement,
            !e)
                throw Error(i(452));
            return e;
        case `head`:
            if (e = t.head,
            !e)
                throw Error(i(453));
            return e;
        case `body`:
            if (e = t.body,
            !e)
                throw Error(i(454));
            return e;
        default:
            throw Error(i(451))
        }
    }
    function wf(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        St(e)
    }
    var Tf = new Map
      , U = new Set;
    function Ef(e) {
        return typeof e.getRootNode == `function` ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var Df = O.d;
    O.d = {
        f: Of,
        r: kf,
        D: Mf,
        C: W,
        L: Nf,
        m: Pf,
        X: If,
        S: Ff,
        M: Lf
    };
    function Of() {
        var e = Df.f()
          , t = ju();
        return e || t
    }
    function kf(e) {
        var t = wt(e);
        t !== null && t.tag === 5 && t.type === `form` ? Fs(t) : Df.r(e)
    }
    var Af = typeof document > `u` ? null : document;
    function jf(e, t, n) {
        var r = Af;
        if (r && typeof t == `string` && t) {
            var i = Kt(t);
            i = `link[rel="` + e + `"][href="` + i + `"]`,
            typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
            U.has(i) || (U.add(i),
            e = {
                rel: e,
                crossOrigin: n,
                href: t
            },
            r.querySelector(i) === null && (t = r.createElement(`link`),
            Kd(t, `link`, e),
            Dt(t),
            r.head.appendChild(t)))
        }
    }
    function Mf(e) {
        Df.D(e),
        jf(`dns-prefetch`, e, null)
    }
    function W(e, t) {
        Df.C(e, t),
        jf(`preconnect`, e, t)
    }
    function Nf(e, t, n) {
        Df.L(e, t, n);
        var r = Af;
        if (r && e && t) {
            var i = `link[rel="preload"][as="` + Kt(t) + `"]`;
            t === `image` && n && n.imageSrcSet ? (i += `[imagesrcset="` + Kt(n.imageSrcSet) + `"]`,
            typeof n.imageSizes == `string` && (i += `[imagesizes="` + Kt(n.imageSizes) + `"]`)) : i += `[href="` + Kt(e) + `"]`;
            var a = i;
            switch (t) {
            case `style`:
                a = zf(e);
                break;
            case `script`:
                a = Uf(e)
            }
            Tf.has(a) || (e = h({
                rel: `preload`,
                href: t === `image` && n && n.imageSrcSet ? void 0 : e,
                as: t
            }, n),
            Tf.set(a, e),
            r.querySelector(i) !== null || t === `style` && r.querySelector(Bf(a)) || t === `script` && r.querySelector(Wf(a)) || (t = r.createElement(`link`),
            Kd(t, `link`, e),
            Dt(t),
            r.head.appendChild(t)))
        }
    }
    function Pf(e, t) {
        Df.m(e, t);
        var n = Af;
        if (n && e) {
            var r = t && typeof t.as == `string` ? t.as : `script`
              , i = `link[rel="modulepreload"][as="` + Kt(r) + `"][href="` + Kt(e) + `"]`
              , a = i;
            switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
                a = Uf(e)
            }
            if (!Tf.has(a) && (e = h({
                rel: `modulepreload`,
                href: e
            }, t),
            Tf.set(a, e),
            n.querySelector(i) === null)) {
                switch (r) {
                case `audioworklet`:
                case `paintworklet`:
                case `serviceworker`:
                case `sharedworker`:
                case `worker`:
                case `script`:
                    if (n.querySelector(Wf(a)))
                        return
                }
                r = n.createElement(`link`),
                Kd(r, `link`, e),
                Dt(r),
                n.head.appendChild(r)
            }
        }
    }
    function Ff(e, t, n) {
        Df.S(e, t, n);
        var r = Af;
        if (r && e) {
            var i = Et(r).hoistableStyles
              , a = zf(e);
            t ||= `default`;
            var o = i.get(a);
            if (!o) {
                var s = {
                    loading: 0,
                    preload: null
                };
                if (o = r.querySelector(Bf(a)))
                    s.loading = 5;
                else {
                    e = h({
                        rel: `stylesheet`,
                        href: e,
                        "data-precedence": t
                    }, n),
                    (n = Tf.get(a)) && qf(e, n);
                    var c = o = r.createElement(`link`);
                    Dt(c),
                    Kd(c, `link`, e),
                    c._p = new Promise(function(e, t) {
                        c.onload = e,
                        c.onerror = t
                    }
                    ),
                    c.addEventListener(`load`, function() {
                        s.loading |= 1
                    }),
                    c.addEventListener(`error`, function() {
                        s.loading |= 2
                    }),
                    s.loading |= 4,
                    Kf(o, t, r)
                }
                o = {
                    type: `stylesheet`,
                    instance: o,
                    count: 1,
                    state: s
                },
                i.set(a, o)
            }
        }
    }
    function If(e, t) {
        Df.X(e, t);
        var n = Af;
        if (n && e) {
            var r = Et(n).hoistableScripts
              , i = Uf(e)
              , a = r.get(i);
            a || (a = n.querySelector(Wf(i)),
            a || (e = h({
                src: e,
                async: !0
            }, t),
            (t = Tf.get(i)) && Jf(e, t),
            a = n.createElement(`script`),
            Dt(a),
            Kd(a, `link`, e),
            n.head.appendChild(a)),
            a = {
                type: `script`,
                instance: a,
                count: 1,
                state: null
            },
            r.set(i, a))
        }
    }
    function Lf(e, t) {
        Df.M(e, t);
        var n = Af;
        if (n && e) {
            var r = Et(n).hoistableScripts
              , i = Uf(e)
              , a = r.get(i);
            a || (a = n.querySelector(Wf(i)),
            a || (e = h({
                src: e,
                async: !0,
                type: `module`
            }, t),
            (t = Tf.get(i)) && Jf(e, t),
            a = n.createElement(`script`),
            Dt(a),
            Kd(a, `link`, e),
            n.head.appendChild(a)),
            a = {
                type: `script`,
                instance: a,
                count: 1,
                state: null
            },
            r.set(i, a))
        }
    }
    function Rf(e, t, n, r) {
        var a = (a = he.current) ? Ef(a) : null;
        if (!a)
            throw Error(i(446));
        switch (e) {
        case `meta`:
        case `title`:
            return null;
        case `style`:
            return typeof n.precedence == `string` && typeof n.href == `string` ? (t = zf(n.href),
            n = Et(a).hoistableStyles,
            r = n.get(t),
            r || (r = {
                type: `style`,
                instance: null,
                count: 0,
                state: null
            },
            n.set(t, r)),
            r) : {
                type: `void`,
                instance: null,
                count: 0,
                state: null
            };
        case `link`:
            if (n.rel === `stylesheet` && typeof n.href == `string` && typeof n.precedence == `string`) {
                e = zf(n.href);
                var o = Et(a).hoistableStyles
                  , s = o.get(e);
                if (s || (a = a.ownerDocument || a,
                s = {
                    type: `stylesheet`,
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                o.set(e, s),
                (o = a.querySelector(Bf(e))) && !o._p && (s.instance = o,
                s.state.loading = 5),
                Tf.has(e) || (n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy
                },
                Tf.set(e, n),
                o || Hf(a, e, n, s.state))),
                t && r === null)
                    throw Error(i(528, ``));
                return s
            }
            if (t && r !== null)
                throw Error(i(529, ``));
            return null;
        case `script`:
            return t = n.async,
            n = n.src,
            typeof n == `string` && t && typeof t != `function` && typeof t != `symbol` ? (t = Uf(n),
            n = Et(a).hoistableScripts,
            r = n.get(t),
            r || (r = {
                type: `script`,
                instance: null,
                count: 0,
                state: null
            },
            n.set(t, r)),
            r) : {
                type: `void`,
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(i(444, e))
        }
    }
    function zf(e) {
        return `href="` + Kt(e) + `"`
    }
    function Bf(e) {
        return `link[rel="stylesheet"][` + e + `]`
    }
    function Vf(e) {
        return h({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function Hf(e, t, n, r) {
        e.querySelector(`link[rel="preload"][as="style"][` + t + `]`) ? r.loading = 1 : (t = e.createElement(`link`),
        r.preload = t,
        t.addEventListener(`load`, function() {
            return r.loading |= 1
        }),
        t.addEventListener(`error`, function() {
            return r.loading |= 2
        }),
        Kd(t, `link`, n),
        Dt(t),
        e.head.appendChild(t))
    }
    function Uf(e) {
        return `[src="` + Kt(e) + `"]`
    }
    function Wf(e) {
        return `script[async]` + e
    }
    function Gf(e, t, n) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case `style`:
                var r = e.querySelector(`style[data-href~="` + Kt(n.href) + `"]`);
                if (r)
                    return t.instance = r,
                    Dt(r),
                    r;
                var a = h({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return r = (e.ownerDocument || e).createElement(`style`),
                Dt(r),
                Kd(r, `style`, a),
                Kf(r, n.precedence, e),
                t.instance = r;
            case `stylesheet`:
                a = zf(n.href);
                var o = e.querySelector(Bf(a));
                if (o)
                    return t.state.loading |= 4,
                    t.instance = o,
                    Dt(o),
                    o;
                r = Vf(n),
                (a = Tf.get(a)) && qf(r, a),
                o = (e.ownerDocument || e).createElement(`link`),
                Dt(o);
                var s = o;
                return s._p = new Promise(function(e, t) {
                    s.onload = e,
                    s.onerror = t
                }
                ),
                Kd(o, `link`, r),
                t.state.loading |= 4,
                Kf(o, n.precedence, e),
                t.instance = o;
            case `script`:
                return o = Uf(n.src),
                (a = e.querySelector(Wf(o))) ? (t.instance = a,
                Dt(a),
                a) : (r = n,
                (a = Tf.get(o)) && (r = h({}, n),
                Jf(r, a)),
                e = e.ownerDocument || e,
                a = e.createElement(`script`),
                Dt(a),
                Kd(a, `link`, r),
                e.head.appendChild(a),
                t.instance = a);
            case `void`:
                return null;
            default:
                throw Error(i(443, t.type))
            }
        else
            t.type === `stylesheet` && !(t.state.loading & 4) && (r = t.instance,
            t.state.loading |= 4,
            Kf(r, n.precedence, e));
        return t.instance
    }
    function Kf(e, t, n) {
        for (var r = n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
            var s = r[o];
            if (s.dataset.precedence === t)
                a = s;
            else if (a !== i)
                break
        }
        a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n,
        t.insertBefore(e, t.firstChild))
    }
    function qf(e, t) {
        e.crossOrigin ??= t.crossOrigin,
        e.referrerPolicy ??= t.referrerPolicy,
        e.title ??= t.title
    }
    function Jf(e, t) {
        e.crossOrigin ??= t.crossOrigin,
        e.referrerPolicy ??= t.referrerPolicy,
        e.integrity ??= t.integrity
    }
    var Yf = null;
    function Xf(e, t, n) {
        if (Yf === null) {
            var r = new Map
              , i = Yf = new Map;
            i.set(n, r)
        } else
            i = Yf,
            r = i.get(n),
            r || (r = new Map,
            i.set(n, r));
        if (r.has(e))
            return r;
        for (r.set(e, null),
        n = n.getElementsByTagName(e),
        i = 0; i < n.length; i++) {
            var a = n[i];
            if (!(a[xt] || a[mt] || e === `link` && a.getAttribute(`rel`) === `stylesheet`) && a.namespaceURI !== `http://www.w3.org/2000/svg`) {
                var o = a.getAttribute(t) || ``;
                o = e + o;
                var s = r.get(o);
                s ? s.push(a) : r.set(o, [a])
            }
        }
        return r
    }
    function Zf(e, t, n) {
        e = e.ownerDocument || e,
        e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null)
    }
    function Qf(e, t, n) {
        if (n === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case `meta`:
        case `title`:
            return !0;
        case `style`:
            if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``)
                break;
            return !0;
        case `link`:
            if (typeof t.rel != `string` || typeof t.href != `string` || t.href === `` || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case `stylesheet`:
                return e = t.disabled,
                typeof t.precedence == `string` && e == null;
            default:
                return !0
            }
        case `script`:
            if (t.async && typeof t.async != `function` && typeof t.async != `symbol` && !t.onLoad && !t.onError && t.src && typeof t.src == `string`)
                return !0
        }
        return !1
    }
    function $f(e) {
        return !(e.type === `stylesheet` && !(e.state.loading & 3))
    }
    function ep(e, t, n, r) {
        if (n.type === `stylesheet` && (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
            if (n.instance === null) {
                var i = zf(r.href)
                  , a = t.querySelector(Bf(i));
                if (a) {
                    t = a._p,
                    typeof t == `object` && t && typeof t.then == `function` && (e.count++,
                    e = rp.bind(e),
                    t.then(e, e)),
                    n.state.loading |= 4,
                    n.instance = a,
                    Dt(a);
                    return
                }
                a = t.ownerDocument || t,
                r = Vf(r),
                (i = Tf.get(i)) && qf(r, i),
                a = a.createElement(`link`),
                Dt(a);
                var o = a;
                o._p = new Promise(function(e, t) {
                    o.onload = e,
                    o.onerror = t
                }
                ),
                Kd(a, `link`, r),
                n.instance = a
            }
            e.stylesheets === null && (e.stylesheets = new Map),
            e.stylesheets.set(n, t),
            (t = n.state.preload) && !(n.state.loading & 3) && (e.count++,
            n = rp.bind(e),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n))
        }
    }
    var tp = 0;
    function np(e, t) {
        return e.stylesheets && e.count === 0 && ap(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount ? function(n) {
            var r = setTimeout(function() {
                if (e.stylesheets && ap(e, e.stylesheets),
                e.unsuspend) {
                    var t = e.unsuspend;
                    e.unsuspend = null,
                    t()
                }
            }, 6e4 + t);
            0 < e.imgBytes && tp === 0 && (tp = 62500 * Yd());
            var i = setTimeout(function() {
                if (e.waitingForImages = !1,
                e.count === 0 && (e.stylesheets && ap(e, e.stylesheets),
                e.unsuspend)) {
                    var t = e.unsuspend;
                    e.unsuspend = null,
                    t()
                }
            }, (e.imgBytes > tp ? 50 : 800) + t);
            return e.unsuspend = n,
            function() {
                e.unsuspend = null,
                clearTimeout(r),
                clearTimeout(i)
            }
        }
        : null
    }
    function rp() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                ap(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var ip = null;
    function ap(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        ip = new Map,
        t.forEach(op, e),
        ip = null,
        rp.call(e))
    }
    function op(e, t) {
        if (!(t.state.loading & 4)) {
            var n = ip.get(e);
            if (n)
                var r = n.get(null);
            else {
                n = new Map,
                ip.set(e, n);
                for (var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0; a < i.length; a++) {
                    var o = i[a];
                    (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) && (n.set(o.dataset.precedence, o),
                    r = o)
                }
                r && n.set(null, r)
            }
            i = t.instance,
            o = i.getAttribute(`data-precedence`),
            a = n.get(o) || r,
            a === r && n.set(null, i),
            n.set(o, i),
            this.count++,
            r = rp.bind(this),
            i.addEventListener(`load`, r),
            i.addEventListener(`error`, r),
            a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(i, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var sp = {
        $$typeof: C,
        Provider: null,
        Consumer: null,
        _currentValue: le,
        _currentValue2: le,
        _threadCount: 0
    };
    function cp(e, t, n, r, i, a, o, s, c) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = rt(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = rt(0),
        this.hiddenUpdates = rt(null),
        this.identifierPrefix = r,
        this.onUncaughtError = i,
        this.onCaughtError = a,
        this.onRecoverableError = o,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = c,
        this.incompleteTransitions = new Map
    }
    function lp(e, t, n, r, i, a, o, s, c, l, u, d) {
        return e = new cp(e,t,n,o,c,l,u,d,s),
        t = 1,
        !0 === a && (t |= 24),
        a = hi(3, null, null, t),
        e.current = a,
        a.stateNode = e,
        t = ma(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        a.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: t
        },
        qa(a),
        e
    }
    function up(e) {
        return e ? (e = pi,
        e) : pi
    }
    function dp(e, t, n, r, i, a) {
        i = up(i),
        r.context === null ? r.context = i : r.pendingContext = i,
        r = Ya(t),
        r.payload = {
            element: n
        },
        a = a === void 0 ? null : a,
        a !== null && (r.callback = a),
        n = Xa(e, r, t),
        n !== null && (Eu(n, e, t),
        Za(n, e, t))
    }
    function fp(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }
    function pp(e, t) {
        fp(e, t),
        (e = e.alternate) && fp(e, t)
    }
    function mp(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = ui(e, 67108864);
            t !== null && Eu(t, e, 67108864),
            pp(e, 67108864)
        }
    }
    function hp(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = wu();
            t = lt(t);
            var n = ui(e, t);
            n !== null && Eu(n, e, t),
            pp(e, t)
        }
    }
    var G = !0;
    function gp(e, t, n, r) {
        var i = D.T;
        D.T = null;
        var a = O.p;
        try {
            O.p = 2,
            _p(e, t, n, r)
        } finally {
            O.p = a,
            D.T = i
        }
    }
    function K(e, t, n, r) {
        var i = D.T;
        D.T = null;
        var a = O.p;
        try {
            O.p = 8,
            _p(e, t, n, r)
        } finally {
            O.p = a,
            D.T = i
        }
    }
    function _p(e, t, n, r) {
        if (G) {
            var i = q(r);
            if (i === null)
                Id(e, t, r, vp, n),
                Dp(e, r);
            else if (kp(i, e, t, n, r))
                r.stopPropagation();
            else if (Dp(e, r),
            t & 4 && -1 < Ep.indexOf(e)) {
                for (; i !== null; ) {
                    var a = wt(i);
                    if (a !== null)
                        switch (a.tag) {
                        case 3:
                            if (a = a.stateNode,
                            a.current.memoizedState.isDehydrated) {
                                var o = Qe(a.pendingLanes);
                                if (o !== 0) {
                                    var s = a;
                                    for (s.pendingLanes |= 2,
                                    s.entangledLanes |= 2; o; ) {
                                        var c = 1 << 31 - Ge(o);
                                        s.entanglements[1] |= c,
                                        o &= ~c
                                    }
                                    hd(a),
                                    !(L & 6) && (fu = Ne() + 500,
                                    gd(0, !1))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            s = ui(a, 2),
                            s !== null && Eu(s, a, 2),
                            ju(),
                            pp(a, 2)
                        }
                    if (a = q(r),
                    a === null && Id(e, t, r, vp, n),
                    a === i)
                        break;
                    i = a
                }
                i !== null && r.stopPropagation()
            } else
                Id(e, t, r, null, n)
        }
    }
    function q(e) {
        return e = un(e),
        yp(e)
    }
    var vp = null;
    function yp(e) {
        if (vp = null,
        e = Ct(e),
        e !== null) {
            var t = o(e);
            if (t === null)
                e = null;
            else {
                var n = t.tag;
                if (n === 13) {
                    if (e = s(t),
                    e !== null)
                        return e;
                    e = null
                } else if (n === 31) {
                    if (e = c(t),
                    e !== null)
                        return e;
                    e = null
                } else if (n === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return vp = e,
        null
    }
    function bp(e) {
        switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
            return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
            return 8;
        case `message`:
            switch (Pe()) {
            case Fe:
                return 2;
            case Ie:
                return 8;
            case Le:
            case Re:
                return 32;
            case ze:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var xp = !1
      , Sp = null
      , J = null
      , Cp = null
      , Y = new Map
      , wp = new Map
      , Tp = []
      , Ep = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
    function Dp(e, t) {
        switch (e) {
        case `focusin`:
        case `focusout`:
            Sp = null;
            break;
        case `dragenter`:
        case `dragleave`:
            J = null;
            break;
        case `mouseover`:
        case `mouseout`:
            Cp = null;
            break;
        case `pointerover`:
        case `pointerout`:
            Y.delete(t.pointerId);
            break;
        case `gotpointercapture`:
        case `lostpointercapture`:
            wp.delete(t.pointerId)
        }
    }
    function Op(e, t, n, r, i, a) {
        return e === null || e.nativeEvent !== a ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i]
        },
        t !== null && (t = wt(t),
        t !== null && mp(t)),
        e) : (e.eventSystemFlags |= r,
        t = e.targetContainers,
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e)
    }
    function kp(e, t, n, r, i) {
        switch (t) {
        case `focusin`:
            return Sp = Op(Sp, e, t, n, r, i),
            !0;
        case `dragenter`:
            return J = Op(J, e, t, n, r, i),
            !0;
        case `mouseover`:
            return Cp = Op(Cp, e, t, n, r, i),
            !0;
        case `pointerover`:
            var a = i.pointerId;
            return Y.set(a, Op(Y.get(a) || null, e, t, n, r, i)),
            !0;
        case `gotpointercapture`:
            return a = i.pointerId,
            wp.set(a, Op(wp.get(a) || null, e, t, n, r, i)),
            !0
        }
        return !1
    }
    function X(e) {
        var t = Ct(e.target);
        if (t !== null) {
            var n = o(t);
            if (n !== null) {
                if (t = n.tag,
                t === 13) {
                    if (t = s(n),
                    t !== null) {
                        e.blockedOn = t,
                        ft(e.priority, function() {
                            hp(n)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = c(n),
                    t !== null) {
                        e.blockedOn = t,
                        ft(e.priority, function() {
                            hp(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Ap(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = q(e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type,n);
                ln = r,
                n.target.dispatchEvent(r),
                ln = null
            } else
                return t = wt(n),
                t !== null && mp(t),
                e.blockedOn = n,
                !1;
            t.shift()
        }
        return !0
    }
    function jp(e, t, n) {
        Ap(e) && n.delete(t)
    }
    function Z() {
        xp = !1,
        Sp !== null && Ap(Sp) && (Sp = null),
        J !== null && Ap(J) && (J = null),
        Cp !== null && Ap(Cp) && (Cp = null),
        Y.forEach(jp),
        wp.forEach(jp)
    }
    function Q(e, n) {
        e.blockedOn === n && (e.blockedOn = null,
        xp || (xp = !0,
        t.unstable_scheduleCallback(t.unstable_NormalPriority, Z)))
    }
    var Mp = null;
    function Np(e) {
        Mp !== e && (Mp = e,
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
            Mp === e && (Mp = null);
            for (var t = 0; t < e.length; t += 3) {
                var n = e[t]
                  , r = e[t + 1]
                  , i = e[t + 2];
                if (typeof r != `function`) {
                    if (yp(r || n) === null)
                        continue;
                    break
                }
                var a = wt(n);
                a !== null && (e.splice(t, 3),
                t -= 3,
                Ns(a, {
                    pending: !0,
                    data: i,
                    method: n.method,
                    action: r
                }, r, i))
            }
        }))
    }
    function Pp(e) {
        function t(t) {
            return Q(t, e)
        }
        Sp !== null && Q(Sp, e),
        J !== null && Q(J, e),
        Cp !== null && Q(Cp, e),
        Y.forEach(t),
        wp.forEach(t);
        for (var n = 0; n < Tp.length; n++) {
            var r = Tp[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
        for (; 0 < Tp.length && (n = Tp[0],
        n.blockedOn === null); )
            X(n),
            n.blockedOn === null && Tp.shift();
        if (n = (e.ownerDocument || e).$$reactFormReplay,
        n != null)
            for (r = 0; r < n.length; r += 3) {
                var i = n[r]
                  , a = n[r + 1]
                  , o = i[ht] || null;
                if (typeof a == `function`)
                    o || Np(n);
                else if (o) {
                    var s = null;
                    if (a && a.hasAttribute(`formAction`)) {
                        if (i = a,
                        o = a[ht] || null)
                            s = o.formAction;
                        else if (yp(i) !== null)
                            continue
                    } else
                        s = o.action;
                    typeof s == `function` ? n[r + 1] = s : (n.splice(r, 3),
                    r -= 3),
                    Np(n)
                }
            }
    }
    function Fp() {
        function e(e) {
            e.canIntercept && e.info === `react-transition` && e.intercept({
                handler: function() {
                    return new Promise(function(e) {
                        return i = e
                    }
                    )
                },
                focusReset: `manual`,
                scroll: `manual`
            })
        }
        function t() {
            i !== null && (i(),
            i = null),
            r || setTimeout(n, 20)
        }
        function n() {
            if (!r && !navigation.transition) {
                var e = navigation.currentEntry;
                e && e.url != null && navigation.navigate(e.url, {
                    state: e.getState(),
                    info: `react-transition`,
                    history: `replace`
                })
            }
        }
        if (typeof navigation == `object`) {
            var r = !1
              , i = null;
            return navigation.addEventListener(`navigate`, e),
            navigation.addEventListener(`navigatesuccess`, t),
            navigation.addEventListener(`navigateerror`, t),
            setTimeout(n, 100),
            function() {
                r = !0,
                navigation.removeEventListener(`navigate`, e),
                navigation.removeEventListener(`navigatesuccess`, t),
                navigation.removeEventListener(`navigateerror`, t),
                i !== null && (i(),
                i = null)
            }
        }
    }
    function Ip(e) {
        this._internalRoot = e
    }
    Lp.prototype.render = Ip.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(i(409));
        var n = t.current;
        dp(n, wu(), e, t, null, null)
    }
    ,
    Lp.prototype.unmount = Ip.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            dp(e.current, 2, null, e, null, null),
            ju(),
            t[gt] = null
        }
    }
    ;
    function Lp(e) {
        this._internalRoot = e
    }
    Lp.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = dt();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < Tp.length && t !== 0 && t < Tp[n].priority; n++)
                ;
            Tp.splice(n, 0, e),
            n === 0 && X(e)
        }
    }
    ;
    var Rp = n.version;
    if (Rp !== `19.2.8`)
        throw Error(i(527, Rp, `19.2.8`));
    O.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == `function` ? Error(i(188)) : (e = Object.keys(e).join(`,`),
            Error(i(268, e)));
        return e = d(t),
        e = e === null ? null : p(e),
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var zp = {
        bundleType: 0,
        version: `19.2.8`,
        rendererPackageName: `react-dom`,
        currentDispatcherRef: D,
        reconcilerVersion: `19.2.8`
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
        var Bp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Bp.isDisabled && Bp.supportsFiber)
            try {
                He = Bp.inject(zp),
                Ue = Bp
            } catch {}
    }
    e.hydrateRoot = function(e, t, n) {
        if (!a(e))
            throw Error(i(299));
        var r = !1
          , o = ``
          , s = ec
          , c = tc
          , l = nc
          , u = null;
        return n != null && (!0 === n.unstable_strictMode && (r = !0),
        n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
        n.onCaughtError !== void 0 && (c = n.onCaughtError),
        n.onRecoverableError !== void 0 && (l = n.onRecoverableError),
        n.formState !== void 0 && (u = n.formState)),
        t = lp(e, 1, !0, t, n ?? null, r, o, u, s, c, l, Fp),
        t.context = up(null),
        n = t.current,
        r = wu(),
        r = lt(r),
        o = Ya(r),
        o.callback = null,
        Xa(n, o, r),
        n = r,
        t.current.lanes = n,
        it(t, n),
        hd(t),
        e[gt] = t.current,
        Pd(e),
        new Lp(t)
    }
}
))
  , g = o(( (e, t) => {
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (e) {
                console.error(e)
            }
    }
    n(),
    t.exports = h()
}
))
  , _ = `__TSS_CONTEXT`
  , v = Symbol.for(`TSS_SERVER_FUNCTION`)
  , y = `application/x-tss-framed`;
`${y}`;
var b = () => window.__TSS_START_OPTIONS__;
function x(e) {
    return e?.isNotFound === !0
}
function S(e) {
    e.statusCode = e.statusCode || e.code || 307;
    let t = new Headers(e.headers);
    e.href && t.get(`Location`) === null && t.set(`Location`, e.href);
    let n = new Response(null,{
        status: e.statusCode,
        headers: t
    });
    if (n.options = e,
    e.throw)
        throw n;
    return n
}
function C(e) {
    return e instanceof Response && !!e.options
}
function w(e) {
    if (typeof e == `object` && e && e.isSerializedRedirect)
        return S(e)
}
function T(e) {
    return e.replaceAll(`\0`, `/`).replaceAll(`�`, `/`).replace(/~([~0r])/g, (e, t) => t === `0` ? `\0` : t === `r` ? `�` : t)
}
function ee(e) {
    return e[e.length - 1]
}
function te(e, t) {
    return typeof e == `function` ? e(t) : e
}
var E = Object.prototype.hasOwnProperty;
function ne(e) {
    for (let t in e)
        if (E.call(e, t))
            return !0;
    return !1
}
var re = () => Object.create(null)
  , ie = (e, t) => ae(e, t, !0);
function ae(e, t, n, r=0) {
    if (e === t)
        return e;
    if (r++ > 500)
        return t;
    let i = Array.isArray(e) && Array.isArray(t);
    if (!i && !(oe(e) && oe(t)))
        return t;
    let a = Object.keys(e)
      , o = a.length
      , s = Object.keys(t)
      , c = s.length;
    if (i ? o !== e.length || c !== t.length || o && ee(a) !== `${o - 1}` || c && ee(s) !== `${c - 1}` : o !== Object.getOwnPropertyNames(e).length || c !== Object.getOwnPropertyNames(t).length || Object.getOwnPropertySymbols(t).length)
        return t;
    let l = 0, u, d, f;
    if (i) {
        for (; l < c && (f = l,
        d = e[f],
        u = t[f],
        u = d === u ? d : typeof d == `object` ? ae(d, u, n, r) : u,
        u === d); l++)
            ;
        if (l === c && o === c)
            return e
    } else {
        let i = o === c
          , p = !0;
        for (; l < c; l++) {
            f = s[l],
            d = e[f];
            let o = t[f];
            u = d === o ? d : typeof d == `object` ? ae(d, o, n, r) : o,
            i &&= u === d && (a[l] === f || E.call(e, f)),
            p &&= Object.is(u, o),
            a[l] = u
        }
        if (i)
            return Object.getOwnPropertySymbols(e).length ? t : e;
        if (p)
            return t
    }
    let p = i ? s.fill(0) : n ? re() : {};
    for (let o = 0; o < c; o++)
        f = i ? o : s[o],
        i ? (d = e[f],
        o > l && (u = t[f],
        u = d === u ? d : typeof d == `object` ? ae(d, u, n, r) : u),
        p[f] = o < l ? d : u) : p[f] = a[o];
    return p
}
function oe(e) {
    return !e || typeof e != `object` ? !1 : (Object.getPrototypeOf(e)?.constructor ?? Object) === Object
}
function se(e, t, n, r) {
    if (e === t)
        return !0;
    if (Array.isArray(e) && Array.isArray(t)) {
        if (e.length !== t.length)
            return !1;
        for (let i = 0, a = e.length; i < a; i++) {
            let a = e[i]
              , o = t[i];
            if (a !== o && !se(a, o, n, r))
                return !1
        }
        return !0
    }
    if (oe(e) && oe(t)) {
        if (n) {
            for (let i in t)
                if ((r || t[i] !== void 0) && !se(e[i], t[i], n, r))
                    return !1;
            return !0
        }
        let i = 0;
        if (r)
            i = Object.keys(e).length;
        else
            for (let t in e)
                e[t] !== void 0 && i++;
        for (let a in t)
            if ((r || t[a] !== void 0) && (i-- === 0 || !se(e[a], t[a], n, r)))
                return !1;
        return i === 0
    }
    return !1
}
function ce(e) {
    return typeof e?.message == `string` ? e.message.startsWith(`Failed to fetch dynamically imported module`) || e.message.startsWith(`error loading dynamically imported module`) || e.message.startsWith(`Importing a module script failed`) : !1
}
var D = /[\x00-\x1f\x7f"<>`{}]/g;
function O(e) {
    return e.replace(D, e => `%` + e.charCodeAt(0).toString(16).toUpperCase().padStart(2, `0`))
}
function le(e) {
    let t;
    try {
        t = decodeURI(e)
    } catch {
        t = e.replaceAll(/%[0-9A-F]{2}/gi, e => {
            try {
                return decodeURI(e)
            } catch {
                return e
            }
        }
        )
    }
    return O(t)
}
var ue = [`http:`, `https:`, `mailto:`, `tel:`];
function de(e) {
    if (e[0] !== `/` && e.includes(`:`))
        return /^[\x00-\x20]*([a-z][a-z\d+.\t\n\r-]*:)/i.exec(e)?.[1]?.replace(/[\t\n\r]/g, ``).toLowerCase()
}
var fe = /^[\x00-\x20]*[\\/][\t\n\r]*[\\/]/;
function k(e, t) {
    if (!e)
        return !1;
    if (fe.test(e))
        return !0;
    let n = de(e);
    return n ? !t.has(n) : !1
}
var A = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`
}
  , pe = /[&><\u2028\u2029]/g;
function me(e) {
    return e.replace(pe, e => A[e])
}
function he(e) {
    if (!e)
        return e;
    let t = e;
    if (/[%\\\x00-\x1f\x7f]/.test(e)) {
        let n = /%25|%5C/gi, r = 0, i;
        for (t = ``; (i = n.exec(e)) !== null; )
            t += le(e.slice(r, i.index)) + i[0],
            r = n.lastIndex;
        t += le(r ? e.slice(r) : e)
    }
    return t
}
function ge(e) {
    return /[\s\u0080-\uFFFF]/.test(e) ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : e
}
function _e(e, t) {
    if (e === t)
        return !0;
    if (e.length !== t.length)
        return !1;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t[n])
            return !1;
    return !0
}
function ve(e) {
    return e.replace(/\/{2,}/g, `/`)
}
function ye(e) {
    return e === `/` ? e : e.replace(/^\/+/, ``)
}
function be(e) {
    let t = e.length;
    return t > 1 && e[t - 1] === `/` ? e.replace(/\/+$/, ``) : e
}
function xe(e) {
    return be(ye(e))
}
function Se(e, t) {
    return e?.endsWith(`/`) && e !== `/` && e !== `${t}/` ? e.slice(0, -1) : e
}
function Ce(e, t, n=`never`, r) {
    if (t.includes(`//`) && (t = ve(t)),
    t.startsWith(`/`))
        return t.length === 1 || n === `preserve` ? t : n === `always` ? t.endsWith(`/`) ? t : `${t}/` : t.endsWith(`/`) ? t.slice(0, -1) : t;
    let i = t === `.`, a;
    if (r) {
        a = i ? e : e + `\0` + t;
        let n = r.get(a);
        if (n)
            return n
    }
    let o;
    if (i)
        o = e.split(`/`);
    else {
        for (e.includes(`//`) && (e = ve(e)),
        o = e.split(`/`); o.length > 1 && ee(o) === ``; )
            o.pop();
        let n = t.split(`/`);
        for (let e = 0, t = n.length; e < t; e++) {
            let r = n[e];
            r === `` ? e ? e === t - 1 && o.push(r) : o = [r] : r === `..` ? o.length > 1 ? o.pop() : o = [``] : r === `.` || o.push(r)
        }
    }
    o.length > 1 && (ee(o) === `` ? n === `never` && o.pop() : n === `always` && o.push(``));
    let s = o.join(`/`)
      , c = (i ? ve(s) : s) || `/`;
    return a && r && r.set(a, c),
    c
}
function we(e) {
    let t = new Map(e.map(e => [encodeURIComponent(e), e]))
      , n = new RegExp([...t.keys()].join(`|`).replace(/[.*()]/g, `\\$&`),`g`);
    return e => e.replace(n, e => t.get(e) ?? e)
}
function Te(e) {
    return e == null || e === ``
}
function Ee(e, t, n) {
    if (typeof t != `string`)
        return `` + (t ?? void 0);
    let r = e === `_splat`;
    if (r && (!t || /^[a-zA-Z0-9\-._~!/]*$/.test(t)))
        return t;
    let i = encodeURIComponent(t);
    return r && (i = i.replaceAll(`%2F`, `/`)),
    n ? n(i) : i
}
function De(e, t, n, r, i) {
    let a = e.endsWith(`/`) ? `/` : ``
      , o = ``;
    for (let e of t) {
        if (typeof e == `string`) {
            o += e;
            continue
        }
        let[t,s,c,l] = e
          , u = t === 2
          , d = u && l !== void 0 ? l + a : l
          , f = n[s];
        if (t !== 3 || f != null) {
            if (i && (i[s] = f,
            u && (i[`*`] = f)),
            u && Te(f)) {
                if (c === `/` && !d)
                    continue;
                f = ``
            }
            o += c + Ee(s, f, r) + (d || ``)
        }
    }
    return o + a || `/`
}
function Oe(e) {
    let t = new Map, n, r;
    return {
        get(e) {
            let n = t.get(e);
            if (n)
                return n.visited = !0,
                n.value
        },
        set(i, a) {
            let o = t.get(i);
            if (o) {
                o.value = a;
                return
            }
            if (t.size >= e) {
                let e = n?.next().value;
                for (; !e || e.visited; )
                    e ? e.visited = !1 : n = t.values(),
                    e = n.next().value;
                e === r && (n = void 0),
                t.delete(e.key)
            }
            let s = {
                key: i,
                value: a,
                visited: !1
            };
            r = s,
            t.set(i, s)
        },
        clear() {
            t.clear(),
            n = void 0,
            r = void 0
        }
    }
}
function ke() {
    throw Error(`Invariant failed`)
}
var Ae = 4
  , je = 5;
function Me(e) {
    let t = e.names;
    if (t)
        return t;
    let n = [];
    for (let t of e)
        typeof t != `string` && n.push(t[1]);
    return e.names = n
}
function Ne(e, t, n) {
    let r = e.substring(t, n);
    if (r.charCodeAt(0) === 36)
        return r.length === 1 ? [2, `_splat`, ``, void 0] : [1, r.substring(1), ``, ``];
    let i = r.indexOf(`{`);
    if (i >= 0) {
        let a = r.indexOf(`}`, i)
          , o = r.charCodeAt(i + 1) === 45
          , s = i + (o ? 3 : 2);
        if (a >= 0 && r.charCodeAt(s - 1) === 36 && (!o || s < a)) {
            let c = r.substring(s, a);
            return [o ? 3 : c ? 1 : 2, c || `_splat`, r.substring(0, i), e.substring(t + a + 1, c ? n : e.length)]
        }
    }
    return r
}
function Pe(e, t, n, r, i, a) {
    let o = n, s = t.fullPath ?? t.from, c = t.options, l = s.length, u = s.endsWith(`/`) ? l - 1 : l, d = c?.caseSensitive ?? e, f = c?.params?.parse ?? c?.parseParams, p, m = a ? n - 1 : 0;
    if (!r || s.includes(`$`)) {
        p = a?.slice() ?? [];
        let e = ee(p);
        e && typeof e != `string` && e[0] === 2 && (p[p.length - 1] = [e[0], e[1], e[2], e[3] === void 0 ? void 0 : e[3] + s.substring(n - (s[n - 2] === `/` ? 2 : 1), u)],
        m = l)
    }
    for (; o < l; ) {
        let e = o
          , t = s.indexOf(`/`, e)
          , n = t === -1 ? l : t
          , a = Ne(s, e, n);
        o = n + 1;
        let c;
        if (typeof a == `string`) {
            if (!r)
                continue;
            let e = a, t;
            d ? t = r.static ??= new Map : (e = a.toLowerCase(),
            t = r.staticInsensitive ??= new Map);
            let n = t.get(e);
            if (n)
                c = n;
            else {
                let n = Ie(r);
                c = n,
                t.set(e, n)
            }
        } else {
            let t = a[0]
              , h = a[2]
              , g = a[3] ?? ``;
            if (t === 2 && (n = l,
            o = n + 1),
            p && m < n && (m < e - 1 && p.push(s.substring(m, e - 1)),
            a[2] = `/` + h,
            t === 2 && a[3] !== void 0 && u < l && (a[3] = g.slice(0, -1)),
            p.push(a),
            m = n),
            !r)
                continue;
            let _ = d && !!(h || g);
            d || (h = h.toLowerCase(),
            g = g.toLowerCase());
            let v = t === 1 ? r.dynamic ??= [] : t === 3 ? r.optional ??= [] : r.wildcard ??= []
              , y = t !== 2 && !f && v.find(e => !e.parse && e.caseSensitive === _ && e.prefix === h && e.suffix === g);
            if (y)
                c = y;
            else {
                let e = Ie(r, t, _, h, g);
                c = e,
                v.push(e),
                v.length === 2 && i?.push(v)
            }
        }
        r = c
    }
    p && m < u && p.push(s.substring(m, u));
    let h = p?.slice();
    if (!r)
        return h;
    if (f && t.children && !t.isRoot && t.id && t.id.charCodeAt(t.id.lastIndexOf(`/`) + 1) === 95) {
        let e = Ie(r, je);
        (r.pathless ??= []).push(e),
        r = e
    }
    let g = (t.path || !t.children) && !t.isRoot;
    if (g && u < l) {
        let e = Ie(r, Ae);
        r.index = e,
        r = e
    }
    return r.parse = f ?? null,
    r.priority = c?.params?.priority ?? 0,
    r.route || (r.data = h,
    g && (r.route = t)),
    [r, o, h]
}
function Fe(e, t) {
    if (e.parse && !t.parse)
        return -1;
    if (!e.parse && t.parse)
        return 1;
    if (e.parse && t.parse && (e.priority || t.priority))
        return t.priority - e.priority;
    if (e.prefix && t.prefix && e.prefix !== t.prefix) {
        if (e.prefix.startsWith(t.prefix))
            return -1;
        if (t.prefix.startsWith(e.prefix))
            return 1
    }
    if (e.suffix && t.suffix && e.suffix !== t.suffix) {
        if (e.suffix.endsWith(t.suffix))
            return -1;
        if (t.suffix.endsWith(e.suffix))
            return 1
    }
    return e.prefix && !t.prefix ? -1 : !e.prefix && t.prefix ? 1 : e.suffix && !t.suffix ? -1 : !e.suffix && t.suffix ? 1 : e.caseSensitive && !t.caseSensitive ? -1 : !e.caseSensitive && t.caseSensitive ? 1 : 0
}
function Ie(e, t=0, n, r, i) {
    return {
        kind: t,
        depth: e ? e.depth + 1 : 0,
        pathless: null,
        index: null,
        static: null,
        staticInsensitive: null,
        dynamic: null,
        optional: null,
        wildcard: null,
        route: null,
        data: void 0,
        parent: e,
        parse: null,
        priority: 0,
        caseSensitive: n,
        prefix: r,
        suffix: i
    }
}
function Le(e, t) {
    let n = Ie()
      , r = [];
    function i(e, t, n, a) {
        let[o,s,c] = Pe(!1, e, t, n, r, a);
        if (e.children)
            for (let t of e.children)
                i(t, s, o, c)
    }
    for (let t of e)
        i(t, 1, n);
    for (let e of r)
        e.sort(Fe);
    t.masksTree = n,
    t.flatCache = Oe(1e3)
}
function Re(e, t) {
    e ||= `/`;
    let n = t.flatCache.get(e);
    if (n !== void 0)
        return n;
    let r = He(e, t.masksTree);
    return t.flatCache.set(e, r),
    r
}
function ze(e, t, n, r, i) {
    e ||= `/`,
    r ||= `/`;
    let a = t ? `case\0${e}` : e
      , o = i.singleCache.get(a);
    return o || (o = Ie(),
    Pe(t, {
        from: e
    }, 1, o),
    i.singleCache.set(a, o)),
    He(r, o, n)
}
function Be(e, t, n=!1) {
    let r = n ? e : `nofuzz\0${e}`
      , i = t.matchCache.get(r);
    if (i !== void 0)
        return i;
    e ||= `/`;
    let a;
    try {
        a = He(e, t.segmentTree, n)
    } catch (e) {
        if (e instanceof URIError)
            a = null;
        else
            throw e
    }
    return a && (a.branch = We(a.route)),
    t.matchCache.set(r, a),
    a
}
function Ve(e, t=!1) {
    let n = Ie()
      , r = []
      , i = {}
      , a = {}
      , o = 0;
    function s(e, n, c, l) {
        if (e.init(o),
        e.id in i && ke(),
        i[e.id] = e,
        o !== 0 && e.path) {
            let t = be(e.fullPath);
            (!a[t] || e.fullPath.endsWith(`/`)) && (a[t] = e)
        }
        o++;
        let[u,d,f] = Pe(t, e, n, c, r, l);
        if (e._interpolation = f,
        e.children)
            for (let t of e.children)
                s(t, d, u, f)
    }
    s(e, 1, n);
    for (let e of r)
        e.sort(Fe);
    return {
        processedTree: {
            segmentTree: n,
            singleCache: Oe(1e3),
            matchCache: Oe(1e3),
            flatCache: null,
            masksTree: null
        },
        routesById: i,
        routesByPath: a
    }
}
function He(e, t, n=!1) {
    let r = e.split(`/`)
      , i = Ke(e, r, t, n);
    if (!i)
        return null;
    let[a] = Ue(e, r, i);
    return {
        route: i.node.route,
        rawParams: a
    }
}
function Ue(e, t, n) {
    let r = Ge(n.node)
      , i = n.node.data && Me(n.node.data)
      , a = Object.create(null)
      , o = n.extract?.part ?? 0
      , s = n.extract?.node ?? 0
      , c = n.extract?.path ?? 0
      , l = n.extract?.param ?? 0;
    for (; s < r.length; o++,
    s++,
    c++) {
        let u = r[s];
        if (u.kind === Ae)
            break;
        if (u.kind === je) {
            o--,
            c--;
            continue
        }
        let d = t[o]
          , f = c;
        if (d && (c += d.length),
        u.kind === 1 || u.kind === 3) {
            let e = i[l++];
            if (u.kind === 3 && n.skipped & 1 << s) {
                o--,
                c = f - 1;
                continue
            }
            let t = u.suffix || u.prefix ? d.substring(u.prefix.length, d.length - u.suffix.length) : d;
            (t || u.kind === 1) && (a[e] = decodeURIComponent(t))
        } else if (u.kind === 2) {
            let t = u
              , n = e.substring(f + t.prefix.length, e.length - t.suffix.length)
              , r = decodeURIComponent(n);
            a[`*`] = r,
            a._splat = r;
            break
        }
    }
    return n.rawParams && Object.assign(a, n.rawParams),
    [a, {
        part: o,
        node: s,
        path: c,
        param: l
    }]
}
function We(e) {
    let t = [e];
    for (; e.parentRoute; )
        e = e.parentRoute,
        t.push(e);
    return t.reverse(),
    t
}
function Ge(e) {
    let t = Array(e.depth + 1);
    do
        t[e.depth] = e,
        e = e.parent;
    while (e);
    return t
}
function Ke(e, t, n, r) {
    if (e === `/` && n.index)
        return {
            node: n.index,
            skipped: 0
        };
    let i = !ee(t)
      , a = i && e !== `/`
      , o = t.length - +!!i
      , s = [{
        node: n,
        index: 1,
        skipped: 0,
        statics: 0,
        dynamics: 0,
        optionals: 0
    }]
      , c = null
      , l = null;
    for (; s.length; ) {
        let n = s.pop()
          , {node: i, index: u, skipped: d, statics: f, dynamics: p, optionals: m} = n
          , {extract: h, rawParams: g} = n;
        if (i.kind === 2 && i.route && !Xe(l, n))
            continue;
        if (i.parse) {
            if (!Ye(e, t, n))
                continue;
            g = n.rawParams,
            h = n.extract
        }
        r && i.route && i.kind !== Ae && Xe(c, n) && (c = n);
        let _ = u === o;
        if (_ && (i.route && (!a || i.kind === Ae || i.kind === 2) && Xe(l, n) && (l = n),
        !i.optional && !i.wildcard && !i.index && !i.pathless))
            continue;
        let v = _ ? void 0 : t[u], y;
        if (_ && i.index) {
            let n = {
                node: i.index,
                index: u,
                skipped: d,
                statics: f,
                dynamics: p,
                optionals: m,
                extract: h,
                rawParams: g
            }
              , r = !0;
            if (i.index.parse && (Ye(e, t, n) || (r = !1)),
            r) {
                if (!p && !m && !d && Je(f, o))
                    return n;
                Xe(l, n) && (l = n)
            }
        }
        if (i.wildcard)
            for (let e = i.wildcard.length - 1; e >= 0; e--) {
                let n = i.wildcard[e]
                  , {prefix: r, suffix: a} = n;
                if (!(r && (_ || !(n.caseSensitive ? v : y ??= v.toLowerCase()).startsWith(r)))) {
                    if (a) {
                        if (_)
                            continue;
                        let e = t.slice(u).join(`/`)
                          , i = e.slice(-a.length);
                        if ((n.caseSensitive ? i : i.toLowerCase()) !== a || e.length - a.length < r.length)
                            continue
                    }
                    s.push({
                        node: n,
                        index: o,
                        skipped: d,
                        statics: f,
                        dynamics: p,
                        optionals: m,
                        extract: h,
                        rawParams: g
                    })
                }
            }
        if (i.optional) {
            let e = d | 1 << i.depth + 1;
            for (let t = i.optional.length - 1; t >= 0; t--) {
                let n = i.optional[t];
                s.push({
                    node: n,
                    index: u,
                    skipped: e,
                    statics: f,
                    dynamics: p,
                    optionals: m,
                    extract: h,
                    rawParams: g
                })
            }
            if (!_)
                for (let e = i.optional.length - 1; e >= 0; e--) {
                    let t = i.optional[e]
                      , {prefix: n, suffix: r} = t;
                    if (n || r) {
                        let e = t.caseSensitive ? v : y ??= v.toLowerCase();
                        if (n && !e.startsWith(n) || r && e.indexOf(r, e.length - r.length) < n.length)
                            continue
                    }
                    s.push({
                        node: t,
                        index: u + 1,
                        skipped: d,
                        statics: f,
                        dynamics: p,
                        optionals: m + qe(o, u),
                        extract: h,
                        rawParams: g
                    })
                }
        }
        if (!_ && i.dynamic && v)
            for (let e = i.dynamic.length - 1; e >= 0; e--) {
                let t = i.dynamic[e]
                  , {prefix: n, suffix: r} = t;
                if (n || r) {
                    let e = t.caseSensitive ? v : y ??= v.toLowerCase();
                    if (n && !e.startsWith(n) || r && e.indexOf(r, e.length - r.length) < n.length)
                        continue
                }
                s.push({
                    node: t,
                    index: u + 1,
                    skipped: d,
                    statics: f,
                    dynamics: p + qe(o, u),
                    optionals: m,
                    extract: h,
                    rawParams: g
                })
            }
        if (!_ && i.staticInsensitive) {
            let e = i.staticInsensitive.get(y ??= v.toLowerCase());
            e && s.push({
                node: e,
                index: u + 1,
                skipped: d,
                statics: f + qe(o, u),
                dynamics: p,
                optionals: m,
                extract: h,
                rawParams: g
            })
        }
        if (!_ && i.static) {
            let e = i.static.get(v);
            e && s.push({
                node: e,
                index: u + 1,
                skipped: d,
                statics: f + qe(o, u),
                dynamics: p,
                optionals: m,
                extract: h,
                rawParams: g
            })
        }
        if (i.pathless)
            for (let e = i.pathless.length - 1; e >= 0; e--) {
                let t = i.pathless[e];
                s.push({
                    node: t,
                    index: u,
                    skipped: d,
                    statics: f,
                    dynamics: p,
                    optionals: m,
                    extract: h,
                    rawParams: g
                })
            }
    }
    if (l)
        return l;
    if (r && c) {
        let n = c.index;
        for (let e = 0; e < c.index; e++)
            n += t[e].length;
        let r = n === e.length ? `/` : e.slice(n);
        return c.rawParams ??= Object.create(null),
        c.rawParams[`**`] = decodeURIComponent(r),
        c
    }
    return null
}
function qe(e, t) {
    return 2 ** (e - t - 1)
}
function Je(e, t) {
    return e === 2 ** (t - 1) - 1
}
function Ye(e, t, n) {
    let r, i;
    try {
        [r,i] = Ue(e, t, n)
    } catch {
        return null
    }
    if (n.rawParams = r,
    n.extract = i,
    !n.node.parse)
        return !0;
    try {
        if (n.node.parse(r) === !1)
            return null
    } catch {}
    return !0
}
function Xe(e, t) {
    return !e || t.statics > e.statics || t.statics === e.statics && (t.dynamics > e.dynamics || t.dynamics === e.dynamics && (t.optionals > e.optionals || t.optionals === e.optionals && ((t.node.kind === Ae) > (e.node.kind === Ae) || t.node.kind === Ae == (e.node.kind === Ae) && t.node.depth > e.node.depth)))
}
function Ze() {
    try {
        return sessionStorage
    } catch {
        return
    }
}
var Qe = `tsr-scroll-restoration-v1_3`
  , $e = Ze();
function et() {
    try {
        return JSON.parse($e?.getItem(`tsr-scroll-restoration-v1_3`) || `{}`)
    } catch {
        return {}
    }
}
var tt = et()
  , nt = `data-scroll-restoration-id`
  , rt = e => e.state.__TSR_key || e.href;
function it(e) {
    let t = e.getAttribute(nt);
    if (t)
        return `[${nt}="${t}"]`;
    let n = ``, r = e, i;
    for (; i = r.parentNode; ) {
        let e = 1
          , t = r;
        for (; t = t.previousElementSibling; )
            e++;
        let a = `${r.localName}:nth-child(${e})`;
        n = n ? `${a} > ${n}` : a,
        r = i
    }
    return n
}
var at = !1
  , ot = `window`;
function st(e) {
    try {
        return typeof e == `function` ? e() : document.querySelector(e)
    } catch {}
}
function ct(e) {
    let t = new Set;
    for (let n of e) {
        if (n === ot)
            continue;
        let e = st(n);
        e && t.add(e)
    }
    return t
}
function lt(e, t) {
    let n = t ?? e.options.scrollRestoration
      , r = e._scroll;
    n && (r.e = !0);
    let i = e.options.getScrollRestorationKey || rt
      , a = new Set
      , o = e => {
        let t = tt[e] ||= {};
        for (let e of a)
            e === document ? t[ot] = {
                scrollX,
                scrollY
            } : e.isConnected && (t[it(e)] = {
                scrollX: e.scrollLeft,
                scrollY: e.scrollTop
            })
    }
    ;
    n && !r.s && (r.s = !0,
    at = !1,
    history.scrollRestoration = `manual`,
    document.addEventListener(`scroll`, e => {
        at || a.add(e.target)
    }
    , !0),
    e.subscribe(`onBeforeLoad`, e => {
        e.fromLocation && o(i(e.fromLocation)),
        a.clear()
    }
    ),
    addEventListener(`pagehide`, () => {
        history.scrollRestoration = `auto`,
        o(i(e.stores.resolvedLocation.get() ?? e.stores.location.get()));
        try {
            $e?.setItem(Qe, JSON.stringify(tt))
        } catch {}
    }
    ),
    addEventListener(`pageshow`, e => {
        e.persisted && (history.scrollRestoration = `manual`)
    }
    )),
    !r.r && (r.r = !0,
    e.subscribe(`onRendered`, t => {
        let n = e.options.scrollRestorationBehavior, o = e.options.scrollToTopSelectors, s = r.n, c = r.h, l;
        if (a.clear(),
        r.n = !0,
        r.h = !1,
        typeof e.options.scrollRestoration == `function` && !e.options.scrollRestoration({
            location: e.latestLocation
        }))
            return;
        let u = i(t.toLocation)
          , d = t.fromLocation && i(t.fromLocation);
        if (r.e && d && d !== u) {
            let e = tt[d];
            if (e) {
                let t = tt[u];
                for (let n in e) {
                    if (n === ot) {
                        if (s)
                            continue
                    } else {
                        let e = st(n);
                        if (!e || s && o && (l ??= ct(o),
                        l.has(e)))
                            continue
                    }
                    t ||= tt[u] = {},
                    t[n] ??= e[n]
                }
            }
        }
        at = !0;
        try {
            let e = t.toLocation.hash
              , i = t.toLocation.state.__hashScrollIntoViewOptions ?? !0
              , a = !1;
            if (s) {
                !e && o && (l ??= ct(o));
                let t = e && i && c
                  , s = r.e ? tt[u] : void 0;
                if (s)
                    for (let e in s) {
                        let {scrollX: r, scrollY: i} = s[e];
                        if (e === ot) {
                            if (t)
                                continue;
                            scrollTo({
                                top: i,
                                left: r,
                                behavior: n
                            }),
                            a = !0
                        } else {
                            let t = st(e);
                            t && (t.scrollLeft = r,
                            t.scrollTop = i,
                            l?.delete(t))
                        }
                    }
                if (!e) {
                    let e = {
                        top: 0,
                        left: 0,
                        behavior: n
                    };
                    if (a || scrollTo(e),
                    l)
                        for (let t of l)
                            t.scrollTo(e)
                }
            }
            !a && e && i && document.getElementById(e)?.scrollIntoView(i)
        } finally {
            at = !1
        }
    }
    ))
}
function ut(e, t=String) {
    let n;
    for (let r in e) {
        let i = e[r];
        i !== void 0 && (n ||= new URLSearchParams).set(r, t(i))
    }
    return n ? n.toString() : ``
}
function dt(e) {
    return e ? e === `false` ? !1 : e === `true` ? !0 : e * 0 == 0 && +e + `` === e ? +e : e : ``
}
function ft(e) {
    let t = new URLSearchParams(e)
      , n = Object.create(null);
    for (let[e,r] of t.entries()) {
        let t = n[e];
        t == null ? n[e] = dt(r) : Array.isArray(t) ? t.push(dt(r)) : n[e] = [t, dt(r)]
    }
    return n
}
var pt = /^(?:\s|["[{\d-]|fa|nu|tr)/
  , mt = gt(JSON.parse)
  , ht = _t(JSON.stringify, JSON.parse);
function gt(e) {
    let t = e === JSON.parse;
    return n => {
        n[0] === `?` && (n = n.substring(1));
        let r = ft(n);
        for (let n in r) {
            let i = r[n];
            if (typeof i == `string`) {
                if (t && !pt.test(i))
                    continue;
                try {
                    r[n] = e(i)
                } catch {}
            }
        }
        return r
    }
}
function _t(e, t) {
    let n = t === JSON.parse;
    function r(r) {
        if (r && typeof r == `object`)
            try {
                return e(r)
            } catch {}
        else if (t && typeof r == `string`) {
            if (n && !pt.test(r))
                return r;
            try {
                return t(r),
                e(r)
            } catch {}
        }
        return r
    }
    return e => {
        let t = ut(e, r);
        return t ? `?${t}` : ``
    }
}
var vt = `__root__`;
function yt(e, t, n) {
    let r = xe(e)
      , i = `/${r}`
      , a = t ? i : i.toLowerCase()
      , o = `${a}/`
      , s = {
        input: ({url: e}) => {
            let n = t ? e.pathname : e.pathname.toLowerCase();
            return n === a ? e.pathname = `/` : n.startsWith(o) && (e.pathname = e.pathname.slice(i.length)),
            e
        }
        ,
        output: ({url: e}) => (e.pathname = ve(`/${r}${e.pathname}`),
        e)
    };
    return n ? {
        input: ({url: e}) => bt(n, s.input({
            url: e
        })),
        output: ({url: e}) => s.output({
            url: xt(n, e)
        })
    } : s
}
function bt(e, t) {
    let n = e?.input?.({
        url: t
    });
    if (n) {
        if (typeof n == `string`)
            return new URL(n);
        if (n instanceof URL)
            return n
    }
    return t
}
function xt(e, t) {
    let n = e?.output?.({
        url: t
    });
    if (n) {
        if (typeof n == `string`)
            return new URL(n);
        if (n instanceof URL)
            return n
    }
    return t
}
function St(e, t) {
    let {createMutableStore: n, createReadonlyStore: r, batch: i} = t
      , a = new Map
      , o = n(`idle`)
      , s = n(e)
      , c = n(void 0)
      , l = n([])
      , u = r( () => l.get().map(e => a.get(e).get()))
      , d = r( () => ({
        status: o.get(),
        isLoading: o.get() === `pending`,
        matches: u.get(),
        location: s.get(),
        resolvedLocation: c.get()
    }));
    function f(e) {
        let t = a.get(e);
        return t || (t = n(void 0),
        a.set(e, t)),
        t
    }
    let p = {
        status: o,
        location: s,
        resolvedLocation: c,
        ids: l,
        matches: u,
        byRoute: a,
        __store: d,
        getMatchStore: f,
        setMatches: m
    };
    function m(e) {
        let t = l.get()
          , n = e.map(e => e.routeId);
        i( () => {
            _e(t, n) || l.set(n);
            for (let e of t)
                n.includes(e) || a.get(e).set( () => void 0);
            for (let t of e) {
                let e = f(t.routeId);
                e.get() !== t && e.set(t)
            }
        }
        )
    }
    return p
}
var Ct = `__TSR_index`
  , wt = `popstate`
  , Tt = `beforeunload`
  , Et = /^[\x00-\x20]*(?:[\\/][\t\n\r]*){2,}/;
function Dt(e) {
    let t = Et.exec(e);
    return t ? `/` + e.slice(t[0].length) : e
}
function Ot(e) {
    return /[\x00-\x1f\x7f]/.test(e) && (e = e.replace(/[\x00-\x1f\x7f]/g, e => `	
\r`.includes(e) ? `` : encodeURIComponent(e))),
    Dt(e)
}
function kt(e) {
    let t = e.getLocation()
      , n = new Set
      , r = r => {
        t = e.getLocation(),
        n.forEach(e => e({
            location: t,
            action: r
        }))
    }
      , i = n => {
        e.notifyOnIndexChange ?? !0 ? r(n) : t = e.getLocation()
    }
      , a = async ({task: n, navigateOpts: r, ...i}) => {
        if (r?.ignoreBlocker ?? !1) {
            n();
            return
        }
        let a = e.getBlockers?.() ?? []
          , o = i.type === `PUSH` || i.type === `REPLACE`;
        if (typeof document < `u` && a.length && o)
            for (let n of a) {
                let r = Mt(i.path, i.state);
                if (await n.blockerFn({
                    currentLocation: t,
                    nextLocation: r,
                    action: i.type
                })) {
                    e.onBlocked?.();
                    return
                }
            }
        n()
    }
    ;
    return {
        get location() {
            return t
        },
        get length() {
            return e.getLength()
        },
        subscribers: n,
        subscribe: e => (n.add(e),
        () => {
            n.delete(e)
        }
        ),
        push: (n, i, o) => {
            let s = t.state[Ct];
            i = At(s + 1, i),
            a({
                task: () => {
                    e.pushState(n, i),
                    r({
                        type: `PUSH`
                    })
                }
                ,
                navigateOpts: o,
                type: `PUSH`,
                path: n,
                state: i
            })
        }
        ,
        replace: (n, i, o) => {
            let s = t.state[Ct];
            i = At(s, i),
            a({
                task: () => {
                    e.replaceState(n, i),
                    r({
                        type: `REPLACE`
                    })
                }
                ,
                navigateOpts: o,
                type: `REPLACE`,
                path: n,
                state: i
            })
        }
        ,
        go: (t, n) => {
            a({
                task: () => {
                    e.go(t, n?.ignoreBlocker ?? !1),
                    i({
                        type: `GO`,
                        index: t
                    })
                }
                ,
                navigateOpts: n,
                type: `GO`
            })
        }
        ,
        back: t => {
            a({
                task: () => {
                    e.back(t?.ignoreBlocker ?? !1),
                    i({
                        type: `BACK`
                    })
                }
                ,
                navigateOpts: t,
                type: `BACK`
            })
        }
        ,
        forward: t => {
            a({
                task: () => {
                    e.forward(t?.ignoreBlocker ?? !1),
                    i({
                        type: `FORWARD`
                    })
                }
                ,
                navigateOpts: t,
                type: `FORWARD`
            })
        }
        ,
        canGoBack: () => t.state[Ct] !== 0,
        createHref: t => e.createHref(t),
        block: t => {
            if (!e.setBlockers)
                return () => {}
                ;
            let n = e.getBlockers?.() ?? [];
            return e.setBlockers([...n, t]),
            () => {
                let n = e.getBlockers?.() ?? [];
                e.setBlockers?.(n.filter(e => e !== t))
            }
        }
        ,
        flush: () => e.flush?.(),
        destroy: () => e.destroy?.(),
        notify: r,
        _getBlockers: () => e.getBlockers?.() ?? []
    }
}
function At(e, t) {
    let n = Nt();
    return {
        ...t,
        key: n,
        __TSR_key: n,
        [Ct]: e
    }
}
function jt(e) {
    let t = e?.window ?? (typeof document < `u` ? window : void 0)
      , n = t.history.pushState
      , r = t.history.replaceState
      , i = []
      , a = () => i
      , o = e => i = e
      , s = t => Ot(e?.createHref ? e.createHref(t) : t)
      , c = e?.parseLocation ?? ( () => Mt(`${t.location.pathname}${t.location.search}${t.location.hash}`, t.history.state));
    if (!t.history.state?.__TSR_key && !t.history.state?.key) {
        let e = Nt();
        t.history.replaceState({
            [Ct]: 0,
            key: e,
            __TSR_key: e
        }, ``)
    }
    let l = c(), u, d = !1, f = !1, p = !1, m = !1, h = () => l, g, _ = () => {
        g && (S._ignoreSubscribers = !0,
        (g[2] ? t.history.pushState : t.history.replaceState)(g[1], ``, g[0]),
        S._ignoreSubscribers = !1,
        g = void 0,
        u = void 0)
    }
    , v = (t, n, r) => {
        let i = e?.createHref ? s(n) : void 0
          , a = !!g;
        a || (u = l),
        l = Mt(n, r),
        g = [i ?? l.href, r, g?.[2] || t],
        a || queueMicrotask( () => _())
    }
    , y = e => {
        l = c(),
        S.notify({
            type: e
        })
    }
    , b = async () => {
        if (m = !1,
        f) {
            f = !1;
            return
        }
        let e = c()
          , n = e.state[Ct] - l.state[Ct]
          , r = n === 1
          , i = n === -1
          , o = !r && !i || d;
        d = !1;
        let s = o ? `GO` : i ? `BACK` : `FORWARD`
          , u = o ? {
            type: `GO`,
            index: n
        } : {
            type: i ? `BACK` : `FORWARD`
        };
        if (p)
            p = !1;
        else {
            let r = a();
            if (typeof document < `u` && r.length) {
                for (let i of r)
                    if (await i.blockerFn({
                        currentLocation: l,
                        nextLocation: e,
                        action: s
                    })) {
                        f = !0,
                        t.history.go(-n),
                        S.notify(u);
                        return
                    }
            }
        }
        l = c(),
        S.notify(u)
    }
    , x = e => {
        if (m) {
            m = !1;
            return
        }
        let t = !1
          , n = a();
        if (typeof document < `u` && n.length)
            for (let e of n) {
                let n = e.enableBeforeUnload ?? !0;
                if (n === !0) {
                    t = !0;
                    break
                }
                if (typeof n == `function` && n() === !0) {
                    t = !0;
                    break
                }
            }
        if (t)
            return e.preventDefault(),
            e.returnValue = ``
    }
    , S = kt({
        getLocation: h,
        getLength: () => t.history.length,
        pushState: (e, t) => v(!0, e, t),
        replaceState: (e, t) => v(!1, e, t),
        back: e => (e && (p = !0,
        m = !0),
        t.history.back()),
        forward: e => {
            e && (p = !0,
            m = !0),
            t.history.forward()
        }
        ,
        go: (e, n) => {
            d = !0,
            n && (p = !0,
            m = !0),
            t.history.go(e)
        }
        ,
        createHref: e => s(e),
        flush: _,
        destroy: () => {
            t.history.pushState = n,
            t.history.replaceState = r,
            t.removeEventListener(Tt, x, {
                capture: !0
            }),
            t.removeEventListener(wt, b)
        }
        ,
        onBlocked: () => {
            u && l !== u && (l = u)
        }
        ,
        getBlockers: a,
        setBlockers: o,
        notifyOnIndexChange: !1
    });
    return S._ignoreNextBeforeUnload = e => {
        m = !1;
        try {
            e = new URL(e,t.document.baseURI).href,
            m = /^https?:/.test(e) && (!e.includes(`#`) || e.split(`#`)[0] !== t.location.href.split(`#`)[0])
        } catch {}
    }
    ,
    t.addEventListener(Tt, x, {
        capture: !0
    }),
    t.addEventListener(wt, b),
    t.history.pushState = function(...e) {
        let r = n.apply(t.history, e);
        return S._ignoreSubscribers || y(`PUSH`),
        r
    }
    ,
    t.history.replaceState = function(...e) {
        let n = r.apply(t.history, e);
        return S._ignoreSubscribers || y(`REPLACE`),
        n
    }
    ,
    S
}
function Mt(e, t) {
    let n = Ot(e)
      , r = n.indexOf(`#`)
      , i = n.indexOf(`?`);
    if (!t) {
        let e = Nt();
        t = {
            [Ct]: 0,
            key: e,
            __TSR_key: e
        }
    }
    return {
        href: n,
        pathname: n.substring(0, r > 0 ? i > 0 ? Math.min(r, i) : r : i > 0 ? i : n.length),
        hash: r > -1 ? n.substring(r) : ``,
        search: i > -1 ? n.slice(i, r === -1 ? void 0 : r) : ``,
        state: t
    }
}
function Nt() {
    return (Math.random() + 1).toString(36).substring(7)
}
function Pt(e, t) {
    return e.protocol !== `http:` && e.protocol !== `https:` || e.origin !== t || !!e.username || !!e.password
}
function Ft(e) {
    return e.pathname + e.search + e.hash
}
function It(e) {
    return e.options.loader || e.options.beforeLoad || e.lazyFn || e.options.component?.preload || e.options.pendingComponent?.preload
}
function Lt(e) {
    return e instanceof Error ? {
        name: e.name,
        message: e.message
    } : {
        data: e
    }
}
function Rt(e, t) {
    return {
        fromLocation: t,
        toLocation: e,
        pathChanged: t?.pathname !== e.pathname,
        hrefChanged: t?.href !== e.href,
        hashChanged: t?.hash !== e.hash
    }
}
function zt({key: e, __TSR_key: t, __TSR_index: n, __hashScrollIntoViewOptions: r, ...i}) {
    return i
}
function Bt(e) {
    return e.findIndex(e => e.status === `error` || e.status === `notFound` || e._notFound) + 1
}
function Vt(e, t, n, r, i, a) {
    r && (t = t.slice(0, r)),
    i && (n = n.slice(0, i));
    for (let r of t) {
        if (a && e._tx !== a)
            return;
        n.some(e => e.routeId === r.routeId) || e.routesById[r.routeId].options.onLeave?.(r)
    }
    for (let r of n) {
        if (a && e._tx !== a)
            return;
        e.routesById[r.routeId].options[t.some(e => e.routeId === r.routeId) ? `onStay` : `onEnter`]?.(r)
    }
}
var Ht = class {
    constructor(e, t) {
        this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`,
        this._scroll = {
            n: !0
        },
        this.subscribers = new Set,
        this._cache = new Map,
        this._committed = [],
        this.startTransition = async e => (e(),
        !1),
        this.update = e => {
            let t = this.options;
            this.options = {
                ...t,
                ...e
            },
            this.isServer = this.options.isServer ?? !1 ?? typeof document > `u`,
            this.staticLocations = new WeakMap,
            this.protocolAllowlist = new Set(this.options.protocolAllowlist),
            (!this.history || this.options.history && this.options.history !== this.history) && (this.history = this.options.history ? this.options.history : jt()),
            this.origin = this.options.origin,
            this.origin ||= window?.origin && window.origin !== `null` ? window.origin : `http://localhost`;
            let n = this.options.basepath ?? `/`
              , r = this.options.rewrite
              , i = this.basepath !== n || t?.rewrite !== r || t?.caseSensitive !== this.options.caseSensitive;
            if (i && (this.basepath = n,
            this.rewrite = n !== `/` && xe(n) ? yt(n, this.options.caseSensitive, r) : r),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree) {
                this.routeTree = this.options.routeTree;
                let e;
                e = this.buildRouteTree(),
                this.setRoutes(e)
            }
            if (this.stores)
                i && this.stores.location.set(this.latestLocation);
            else if (this.latestLocation) {
                let e = this.getStoreConfig(this);
                this.batch = e.batch,
                this.stores = St(this.latestLocation, e),
                lt(this)
            }
        }
        ,
        this.updateLatestLocation = () => {
            this.latestLocation = this.parseLocation(this.history.location, this.latestLocation)
        }
        ,
        this.buildRouteTree = () => {
            let e = Ve(this.routeTree, this.options.caseSensitive);
            return this.options.routeMasks && Le(this.options.routeMasks, e.processedTree),
            {
                ...e,
                resolvePathCache: Oe(1e3)
            }
        }
        ,
        this.subscribe = (e, t) => {
            let n = {
                eventType: e,
                fn: t
            };
            return this.subscribers.add(n),
            () => {
                this.subscribers.delete(n)
            }
        }
        ,
        this.emit = e => {
            for (let t of this.subscribers)
                if (t.eventType === e.type)
                    try {
                        t.fn(e)
                    } catch (e) {
                        console.error(e)
                    }
        }
        ,
        this.parseLocation = (e, t) => {
            let n = ({pathname: e, search: n, hash: r, href: i}, a) => {
                if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(e)) {
                    let i = this.options.parseSearch(n)
                      , o = this.options.stringifySearch(i);
                    return {
                        href: e + o + r,
                        publicHref: e + o + r,
                        pathname: he(e),
                        external: !1,
                        searchStr: o,
                        search: ie(t?.search, i),
                        hash: he(r.slice(1)),
                        state: ae(t?.state, a)
                    }
                }
                let o = bt(this.rewrite, new URL(i,this.origin))
                  , s = this.options.parseSearch(o.search)
                  , c = this.options.stringifySearch(s);
                return o.search = c,
                {
                    href: o.href.replace(o.origin, ``),
                    publicHref: i,
                    pathname: he(Dt(o.pathname)),
                    external: !!this.rewrite && Pt(o, this.origin),
                    searchStr: c,
                    search: ie(t?.search, s),
                    hash: he(o.hash.slice(1)),
                    state: ae(t?.state, a)
                }
            }
              , r = n(e, e.state)
              , {__tempLocation: i, __tempKey: a} = r.state;
            if (i && (!a || a === this.tempLocationKey)) {
                let e = n(i, {
                    ...i.state,
                    __tempLocation: void 0,
                    key: r.state.key,
                    __TSR_key: r.state.__TSR_key
                });
                return e.maskedLocation = r,
                e
            }
            return r
        }
        ,
        this.matchRoutes = (e, t, n) => typeof e == `string` ? this.matchRoutesInternal({
            pathname: e,
            search: t
        }, n) : this.matchRoutesInternal(e, t),
        this.getMatchedRoutes = e => {
            let t = Object.create(null)
              , n = Be(be(e), this.processedTree, !0);
            return n && Object.assign(t, n.rawParams),
            [n?.branch || [this.routesById.__root__], t, n?.route]
        }
        ,
        this.buildLocation = e => {
            {
                let t = this.staticLocations.get(e);
                if (t)
                    return t
            }
            let t = !1
              , n = (n={}) => {
                if (n.href) {
                    let e = Mt(n.href, {});
                    n = {
                        ...n,
                        to: bt(this.rewrite, new URL(e.pathname,this.origin)).pathname,
                        search: this.options.parseSearch(e.search),
                        hash: e.hash.slice(1)
                    }
                }
                let r = n._fromLocation || this._pendingLocation || this.latestLocation, i, a = () => (t = !0,
                r), o = () => (t = !0,
                i ??= this.matchRoutesLightweight(r)), s = n.to ? `${n.to}` : `.`, c = Ce(s[0] === `/` ? `` : n.unsafeRelative === `path` ? a().pathname : n.from ?? o()[1], s, this.options.trailingSlash, this.resolvePathCache), l = this.routesByPath[be(c)], u = c.includes(`$`), d;
                if (l)
                    d = l._branch ??= We(l);
                else if (u)
                    d = [];
                else {
                    let[e,t,n] = this.getMatchedRoutes(c);
                    d = e,
                    this.options.notFoundRoute && (!n || n.path !== `/` && t[`**`]) && (d = [...d, this.options.notFoundRoute])
                }
                let f = u ? l?._interpolation ?? Pe(!1, {
                    fullPath: c
                }, 0) : void 0, p;
                for (let e of d) {
                    let t = e.options.params?.stringify ?? e.options.stringifyParams;
                    if (t) {
                        let e = o()[3];
                        if (p ??= qt(n.params, e),
                        !ne(p))
                            break;
                        p === e && (p = Object.assign(re(), p));
                        try {
                            Object.assign(p, t(p))
                        } catch {}
                    }
                }
                p ??= qt(n.params, Jt(n.params, f) ? o()[3] : Yt);
                let m = e.leaveParams ? c : Dt(he(f ? De(c, f, p, this.pathParamsDecoder) : c)), h = Xt(d, e._includeValidateSearch), g = () => {
                    let t = o()[2];
                    if (e._includeValidateSearch && this.options.search?.strict) {
                        let e = {};
                        d.forEach(n => {
                            if (n.options.validateSearch)
                                try {
                                    Object.assign(e, Kt(n.options.validateSearch, {
                                        ...e,
                                        ...t
                                    }))
                                } catch {}
                        }
                        ),
                        t = e
                    }
                    return t
                }
                , _ = h.length ? Zt(h, g(), n) : n.search === !0 ? g() : typeof n.search == `function` ? n.search(g()) : n.search || Yt, v = this.options.stringifySearch(_), y = n.hash === !0 ? a().hash : typeof n.hash == `function` ? n.hash(a().hash) : n.hash || void 0, b = y ? `#${y}` : ``, x = n.state ? n.state === !0 ? a().state : typeof n.state == `function` ? n.state(a().state) : n.state : Yt, S = `${m}${v}${b}`, C, w, T = !1;
                if (this.rewrite) {
                    let e = new URL(S,this.origin)
                      , t = e.origin
                      , n = xt(this.rewrite, e);
                    C = Ft(e),
                    Pt(n, t) ? (w = n.href,
                    T = !0) : w = Dt(Ft(n))
                } else
                    C = ge(S),
                    w = C;
                return {
                    publicHref: w,
                    href: C,
                    pathname: m,
                    search: _,
                    searchStr: v,
                    state: x,
                    hash: y ?? ``,
                    external: T,
                    unmaskOnReload: n.unmaskOnReload
                }
            }
              , r = n(e);
            if (e.mask)
                r.maskedLocation = n({
                    from: e.from,
                    ...e.mask
                });
            else if (this.options.routeMasks) {
                let t = Re(r.pathname, this.processedTree);
                if (t) {
                    let i = Object.assign(re(), t.rawParams)
                      , {from: a, params: o, ...s} = t.route
                      , c = qt(o, i);
                    r.maskedLocation = n({
                        from: e.from,
                        ...s,
                        params: c
                    })
                }
            }
            return !t && e._fromLocation && !r.maskedLocation && this.staticLocations.set(e, r),
            r
        }
        ,
        this.commitLocation = async ({viewTransition: e, ignoreBlocker: t, ...n}) => {
            let r = n.maskedLocation ?? n;
            if (r.external)
                return Ut(this, r.publicHref, {
                    replace: n.replace,
                    ignoreBlocker: t
                });
            let i, a = be(this.latestLocation.href) === be(n.href) && se(zt(n.state), zt(this.latestLocation.state)), o = this._commitPromise, s, c = new Promise(e => {
                s = e
            }
            );
            if (c.resolve = () => {
                s(),
                o?.resolve()
            }
            ,
            this._commitPromise = c,
            a)
                this.load();
            else {
                let {maskedLocation: r, hashScrollIntoView: a, ...o} = n;
                r && (o = {
                    ...r,
                    state: {
                        ...r.state,
                        __tempKey: void 0,
                        __tempLocation: {
                            ...o,
                            search: o.searchStr,
                            state: {
                                ...o.state,
                                __tempKey: void 0,
                                __tempLocation: void 0,
                                __TSR_key: void 0,
                                key: void 0
                            }
                        }
                    }
                },
                (o.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) && (o.state.__tempKey = this.tempLocationKey)),
                o.state = {
                    ...o.state,
                    __hashScrollIntoViewOptions: a ?? this.options.defaultHashScrollIntoView ?? !0
                },
                this.shouldViewTransition = e,
                i = n.replace ? `REPLACE` : `PUSH`,
                this.history[i === `REPLACE` ? `replace` : `push`](o.publicHref, o.state, {
                    ignoreBlocker: t
                }),
                this.history.subscribers.size || this.load({
                    action: {
                        type: i
                    }
                })
            }
            return this._scroll.n = n.resetScroll ?? !0,
            this._commitPromise
        }
        ,
        this.buildAndCommitLocation = ({replace: e, resetScroll: t, hashScrollIntoView: n, viewTransition: r, ignoreBlocker: i, ...a}={}) => {
            let o = this.buildLocation({
                ...a,
                _includeValidateSearch: !0
            });
            this._pendingLocation = o;
            let s = this.commitLocation({
                ...o,
                viewTransition: r,
                replace: e,
                resetScroll: t,
                hashScrollIntoView: n,
                ignoreBlocker: i
            });
            return queueMicrotask( () => {
                this._pendingLocation === o && (this._pendingLocation = void 0)
            }
            ),
            s
        }
        ,
        this.navigate = async ({to: e, reloadDocument: t, href: n, publicHref: r, ...i}) => {
            let a = n ? de(n) : void 0;
            if (a || t) {
                if (e !== void 0 || !n) {
                    let t = this.buildLocation({
                        to: e,
                        ...i
                    })
                      , a = t.maskedLocation ?? t;
                    n ??= a.publicHref,
                    r ??= a.publicHref
                }
                let t = !a && r ? r : n;
                return Ut(this, t, i)
            }
            return this.buildAndCommitLocation({
                ...i,
                href: n,
                to: e,
                _isNavigate: !0
            })
        }
        ,
        this.load = async e => {
            this.updateLatestLocation(),
            e?.action && (this._scroll.h = e.action.type === `PUSH` || e.action.type === `REPLACE`),
            await Gn(this, e)
        }
        ,
        this.startViewTransition = e => {
            let t = this.shouldViewTransition ?? this.options.defaultViewTransition;
            if (this.shouldViewTransition = void 0,
            t && typeof document.startViewTransition == `function`) {
                let n;
                if (typeof t == `object` && window.CSS?.supports?.(`selector(:active-view-transition-type(a))`)) {
                    let r = this.latestLocation
                      , i = this.stores.resolvedLocation.get()
                      , a = typeof t.types == `function` ? t.types(Rt(r, i)) : t.types;
                    if (a === !1)
                        return e();
                    n = {
                        update: e,
                        types: a
                    }
                } else
                    n = e;
                return document.startViewTransition(n).updateCallbackDone
            }
            return e()
        }
        ,
        this.invalidate = e => {
            let t = this._committed
              , n = e?.filter
              , r = this._preloads
              , i = new Set
              , a = e => {
                (!n || n(e)) && i.add(e.id)
            }
            ;
            t.forEach(a),
            this._cache.forEach(a),
            r?.forEach(e => e.forEach(a)),
            this._tx?.[3].forEach(a);
            let o = [];
            for (let[e,t] of r ?? [])
                t.some(e => i.has(e.id)) && (r.delete(e),
                o.push(e));
            let s = t => {
                if (i.has(t.id)) {
                    let n = this.routesById[t.routeId]
                      , r = {
                        ...t,
                        invalid: !0,
                        ...(e?.forcePending || t.status === `error` || t.status === `notFound`) && It(n) ? {
                            status: `pending`,
                            error: void 0
                        } : void 0
                    };
                    return t._flight = void 0,
                    r
                }
                return t
            }
            ;
            this._committed = t.map(s);
            for (let[t,n] of this._cache)
                i.has(t) && (n.invalid = !0,
                e?.forcePending && (n.status = `pending`));
            for (let e of i) {
                let t = this._flights?.get(e);
                this._flights?.delete(e),
                t && !t[2] && o.push(t[1])
            }
            for (let e of o)
                e.abort();
            return this.shouldViewTransition = !1,
            this.load({
                sync: e?.sync
            })
        }
        ,
        this.resolveRedirect = e => {
            let t = e.options
              , n = e.headers.get(`Location`) || t.href;
            if (!n) {
                let e = this.buildLocation(t);
                n = (e.maskedLocation ?? e).publicHref || `/`
            }
            let r;
            if (fe.test(n) || (r = de(n)) && !this.protocolAllowlist.has(r))
                throw Error(`Redirect blocked: unsafe protocol`);
            if (r === `http:` || r === `https:`) {
                let e = new URL(n);
                e.pathname.startsWith(`//`) ? n = e.href : Pt(e, this.origin) || (n = Ft(e),
                r = void 0)
            }
            return r && (t.reloadDocument = !0),
            t.href = n,
            e.headers.set(`Location`, n),
            e
        }
        ,
        this.clearCache = e => {
            let t = this._cache
              , n = this._preloads
              , r = e?.filter
              , i = []
              , a = [];
            for (let[e,n] of t)
                (!r || r(n)) && (a.push(e),
                i.push(n));
            let o = [];
            for (let[e,t] of n ?? [])
                (!r || t.some(r)) && (o.push(e),
                i.push(...t));
            for (let e of a)
                t.delete(e);
            for (let e of o)
                n.delete(e);
            for (let e of i) {
                let t = e._flight;
                e._flight = void 0,
                t && !--t[2] && (this._flights?.get(e.id) === t && this._flights.delete(e.id),
                o.push(t[1]))
            }
            for (let e of o)
                e.abort()
        }
        ,
        this.loadRouteChunk = nn,
        this.preloadRoute = e => Kn(this, e),
        this.matchRoute = (e, t) => {
            let n = {
                ...e,
                to: e.to ? Ce(e.from || ``, e.to, this.options.trailingSlash, this.resolvePathCache) : void 0,
                params: e.params || {},
                leaveParams: !0
            }
              , r = this.buildLocation(n)
              , i = this.stores.status.get() === `pending`;
            if (t?.pending && !i)
                return !1;
            let a = t?.pending ?? !i ? this.latestLocation : this.stores.resolvedLocation.get() || this.stores.location.get()
              , o = ze(r.pathname, t?.caseSensitive ?? !1, t?.fuzzy ?? !1, a.pathname, this.processedTree);
            return !o || e.params && !se(o.rawParams, e.params, !0) ? !1 : t?.includeSearch ?? !0 ? se(a.search, r.search, !0) ? o.rawParams : !1 : o.rawParams
        }
        ,
        this.getStoreConfig = t,
        e.pathParamsAllowedCharacters?.length && (this.pathParamsDecoder = we(e.pathParamsAllowedCharacters)),
        this.update({
            defaultPreloadDelay: 50,
            defaultPendingMs: 1e3,
            defaultPendingMinMs: 500,
            context: void 0,
            ...e,
            caseSensitive: e.caseSensitive ?? !1,
            notFoundMode: e.notFoundMode ?? `fuzzy`,
            stringifySearch: e.stringifySearch ?? ht,
            parseSearch: e.parseSearch ?? mt,
            protocolAllowlist: e.protocolAllowlist ?? ue
        }),
        self.__TSR_ROUTER__ = this
    }
    isShell() {
        return !!this.options.isShell
    }
    get state() {
        return this.stores.__store.get()
    }
    setRoutes(e) {
        Object.assign(this, e),
        this.lightweightCache = new WeakMap,
        this.staticLocations = new WeakMap;
        let t = this.options.notFoundRoute;
        t && (t.init(99999999999),
        this.routesById[t.id] !== t && (t._interpolation = Pe(!1, t, 0)),
        this.routesById[t.id] = t)
    }
    matchRoutesInternal(e, t) {
        let[n,r,i] = this.getMatchedRoutes(e.pathname)
          , a = n
          , o = !1;
        (i ? i.path !== `/` && r[`**`] : be(e.pathname)) && (this.options.notFoundRoute ? a = [...a, this.options.notFoundRoute] : o = !0);
        let s = o ? Qt(this.options.notFoundMode, a) : void 0, c = Array(a.length), l = this._committed, u = (e, t) => {
            let n = l[t];
            return n?.routeId === e.id ? n : e === this.options.notFoundRoute ? l.find(t => t.routeId === e.id) : void 0
        }
        , d;
        for (let n = 0; n < a.length; n++) {
            let i = a[n], o = c[n - 1], l, f, p;
            {
                let n = o?.search ?? e.search
                  , r = o?._strictSearch ?? void 0;
                try {
                    let e = Kt(i.options.validateSearch, {
                        ...n
                    }) ?? void 0;
                    l = {
                        ...n,
                        ...e
                    },
                    f = {
                        ...r,
                        ...e
                    }
                } catch (e) {
                    let r = e;
                    if (e instanceof Wt || (r = new Wt(e.message,{
                        cause: e
                    })),
                    t?.throwOnError)
                        throw r;
                    l = n,
                    f = {},
                    p = r
                }
            }
            let m = ``
              , h = ``;
            try {
                m = i.options.loaderDeps?.({
                    search: l
                }) ?? ``,
                h = m && JSON.stringify(m) || ``
            } catch (e) {
                if (t?.throwOnError)
                    throw e;
                p ??= e
            }
            let g = re()
              , _ = i._interpolation ? De(i.fullPath, i._interpolation, r, this.pathParamsDecoder, g) : i.fullPath
              , v = i.id + _ + h
              , y = u(i, n)
              , b = this._cache.get(v) ?? (y?.id === v ? y : void 0);
            d = b?._strictParams ?? Object.assign(g, d);
            let S;
            if (!b)
                try {
                    $t(i, d)
                } catch (e) {
                    if (S = x(e) || C(e) ? e : new Gt(e.message,{
                        cause: e
                    }),
                    t?.throwOnError)
                        throw S
                }
            let w = y ? `stay` : `enter`, T;
            if (b)
                T = {
                    ...b,
                    cause: w,
                    search: ie(y ? y.search : b.search, l),
                    _strictSearch: f,
                    searchError: p
                };
            else {
                let e = It(i) ? `pending` : `success`;
                T = {
                    id: v,
                    ssr: i.options.ssr,
                    index: n,
                    routeId: i.id,
                    params: y?.params ?? d,
                    _strictParams: d,
                    pathname: _,
                    updatedAt: Date.now(),
                    search: y ? ie(y.search, l) : l,
                    _strictSearch: f,
                    searchError: p,
                    status: e,
                    isFetching: !1,
                    error: void 0,
                    paramsError: S,
                    context: {},
                    abortController: t?._controller ?? new AbortController,
                    cause: w,
                    loaderDeps: y ? ae(y.loaderDeps, m) : m,
                    invalid: !1,
                    preload: !1,
                    staticData: i.options.staticData || {},
                    fullPath: i.fullPath
                }
            }
            let ee = s === i.id;
            T._notFound && !ee && (T.error = void 0),
            T._notFound = ee,
            c[n] = T
        }
        for (let e = 0; e < c.length; e++) {
            let n = c[e];
            n.params = n.cause === `stay` ? ie(n.params, d) : d,
            t?._controller && (n.context = {})
        }
        return c
    }
    matchRoutesLightweight(e) {
        let t = ee(this.stores.ids.get())
          , n = t ? this.stores.byRoute.get(t).get() : void 0
          , r = n?.id
          , i = this.lightweightCache.get(e);
        if (i && i[0] === r)
            return i[1];
        let[a,o] = this.getMatchedRoutes(e.pathname)
          , s = ee(a)
          , c = {
            ...e.search
        };
        for (let e of a)
            try {
                Object.assign(c, Kt(e.options.validateSearch, c))
            } catch {}
        let l = n && n.routeId === s.id && n.pathname === e.pathname, u;
        if (l)
            u = n.params;
        else {
            let e = o;
            for (let t of a)
                try {
                    $t(t, e)
                } catch {}
            u = e
        }
        let d = [a, s.fullPath, c, u];
        return this.lightweightCache.set(e, [r, d]),
        d
    }
}
;
async function Ut(e, t, {replace: n, ignoreBlocker: r}) {
    if (!k(t, e.protocolAllowlist)) {
        if (!r) {
            let t = e.history._getBlockers();
            for (let r of t)
                if (r?.blockerFn && await r.blockerFn({
                    currentLocation: e.history.location,
                    nextLocation: e.history.location,
                    action: n ? `REPLACE` : `PUSH`
                }))
                    return
        }
        e.history._ignoreNextBeforeUnload?.(t),
        n ? window.location.replace(t) : window.location.href = t
    }
}
var Wt = class extends Error {
}
  , Gt = class extends Error {
}
;
function Kt(e, t) {
    if (e == null)
        return {};
    if (`~standard` in e) {
        let n = e[`~standard`].validate(t);
        if (n instanceof Promise)
            throw new Wt(`Async validation not supported`);
        if (n.issues)
            throw new Wt(JSON.stringify(n.issues, void 0, 2),{
                cause: n
            });
        return n.value
    }
    return `parse` in e ? e.parse(t) : typeof e == `function` ? e(t) : {}
}
function qt(e, t) {
    if (e === void 0 || e === !0)
        return t;
    let n = Object.create(null);
    return e === !1 || e === null ? n : typeof e == `function` ? (Object.assign(n, t),
    Object.assign(n, e(n))) : Object.assign(n, t, e)
}
function Jt(e, t) {
    return typeof e == `function` ? !0 : !t || e === !1 || e === null ? !1 : e === void 0 || e === !0 || t.some(t => typeof t != `string` && !E.call(e, t[1]))
}
var Yt = Object.freeze({});
function Xt(e, t) {
    let n = [];
    for (let r = 0; r < e.length; r++) {
        let i = e[r].options;
        `search` in i ? i.search?.middlewares && n.push(...i.search.middlewares) : (i.preSearchFilters || i.postSearchFilters) && n.push( ({search: e, next: t}) => {
            let n = t(i.preSearchFilters ? i.preSearchFilters.reduce( (e, t) => t(e), e) : e);
            return i.postSearchFilters ? i.postSearchFilters.reduce( (e, t) => t(e), n) : n
        }
        );
        let a = i.validateSearch;
        t && a && n.push( ({search: e, next: t, meta: n}) => {
            let r = t(e);
            try {
                let e = Kt(a, r);
                if (n && e)
                    for (let t in e)
                        t in r || (n.defaulted ||= new Map).set(t, e[t]);
                return {
                    ...r,
                    ...e
                }
            } catch {}
            return r
        }
        )
    }
    return n
}
function Zt(e, t, n) {
    let r = (t, i, a) => {
        if (t >= e.length) {
            if (!n.search)
                return {};
            if (n.search === !0)
                return i;
            let e = te(n.search, i);
            return a && (a.explicit = e),
            e
        }
        return e[t]({
            search: i,
            next: (e, n) => {
                if (n) {
                    let n = a || {};
                    return {
                        search: r(t + 1, e, n),
                        meta: n
                    }
                }
                return r(t + 1, e, a)
            }
            ,
            meta: a
        })
    }
    ;
    return r(0, t)
}
function Qt(e, t) {
    if (e !== `root`) {
        let e;
        for (let n = t.length - 1; n >= 0; n--) {
            let r = t[n];
            if (r.options.notFoundComponent)
                return r.id;
            e ||= r.children && r.id
        }
        if (e)
            return e
    }
    return vt
}
function $t(e, t) {
    let n = e.options.params?.parse ?? e.options.parseParams;
    n && Object.assign(t, n(t))
}
function en(e, t) {
    return e.options[t]?.preload?.()
}
function tn(e, t) {
    let n = en(e, `component`)
      , r = en(e, `pendingComponent`);
    return t && (r ? r = r.then(t) : t()),
    n && r ? Promise.all([n, r]).then( () => {}
    ) : n ?? r
}
function nn(e, t, n) {
    let r = () => t === !1 ? void 0 : t ? en(e, t) : tn(e, n)
      , i = e._lazy;
    if (i)
        return i === !0 ? r() : i.then(r);
    if (!e.lazyFn)
        return r();
    let a = e.lazyFn().then(t => {
        {
            let {id: n, ...r} = t.options;
            Object.assign(e.options, r),
            e._lazy = !0
        }
    }
    , t => {
        throw e._lazy = void 0,
        t
    }
    );
    return e._lazy = a,
    a.then(r)
}
function rn(e) {
    let t = e.findIndex(e => e.status !== `success` || e._notFound) + 1;
    return t && t < e.length ? e.slice(0, t) : e
}
function an(e) {
    let t = e.length;
    for (let n = 0; n < t; n++) {
        let r = e[n];
        if (r._assetEnd !== void 0) {
            t = Math.min(t, Math.max(n + 1, r._assetEnd));
            continue
        }
        if (r.status !== `success` || r._notFound) {
            t = n + 1;
            break
        }
    }
    return t < e.length ? e.slice(0, t) : e
}
var on = 0
  , sn = 1
  , cn = 2
  , ln = 3
  , un = [4];
function dn(e) {
    return typeof e[0] == `number`
}
function fn(e, t) {
    return t.aborted ? Promise.race([Promise.reject(t), e]) : new Promise( (n, r) => {
        let i = () => r(t);
        t.addEventListener(`abort`, i, {
            once: !0
        }),
        Promise.resolve(e).then(n, r).then( () => t.removeEventListener(`abort`, i))
    }
    )
}
function pn(e, t) {
    return e.routesById[t.routeId]
}
function mn(e, t, n) {
    return C(e) ? [ln, e] : x(e) ? (e.routeId ||= n,
    [cn, e]) : t ? (typeof e?.then == `function` && (e = Error(`A Promise was thrown`, {
        cause: e
    })),
    [sn, e]) : [on, e]
}
function hn(e, t) {
    let n = mn(t, !0, e.id);
    if (n[0] !== sn)
        return n;
    try {
        e.options.onError?.(n[1])
    } catch (t) {
        n = mn(t, !0, e.id)
    }
    return n
}
function gn(e, t, n, r, i) {
    return i[0].signal.aborted ? un : Mn(e, t, n, hn(n, r), i)
}
async function _n(e, t, n, r, i, a) {
    let[o,s] = t
      , c = n[0].signal
      , l = !!n[3];
    for (let i = n[6] ?? 0; i < r; i++) {
        let r = s[i]
          , u = pn(e, r);
        r.abortController = n[0];
        let d = s[i - 1]?.context ?? e.options.context ?? {}
          , f = {
            params: r.params,
            location: o,
            navigate: t => e.navigate({
                ...t,
                _fromLocation: o
            }),
            buildLocation: e.buildLocation,
            cause: l ? `preload` : r.cause,
            abortController: n[0],
            preload: l,
            matches: s,
            routeId: u.id
        };
        try {
            let e = r._ctx ||= u.options.context ? u.options.context({
                ...f,
                deps: r.loaderDeps,
                context: d
            }) || {} : void 0;
            r.context = {
                ...d,
                ...e
            }
        } catch (a) {
            return yn(e, r),
            [i, gn(e, t, u, a, n)]
        }
        if (c.aborted)
            return [i, un];
        let p = r.paramsError ?? r.searchError;
        if (p !== void 0)
            return yn(e, r),
            [i, gn(e, t, u, p, n)];
        let m = u.options.beforeLoad;
        if (!m)
            continue;
        let h = r.status;
        i >= a && (r.status = `pending`,
        n[7]?.());
        try {
            Sn(e, r, `beforeLoad`, n[0]);
            let a = m({
                ...f,
                search: r.search,
                context: r.context,
                ...e.options.additionalContext
            })
              , o = await (typeof a?.then == `function` ? fn(a, c) : a);
            if (c.aborted)
                return [i, un];
            let s = Mn(e, t, u, mn(o, !1, u.id), n);
            if (s[0] !== on)
                return yn(e, r),
                [i, s];
            r.context = {
                ...r.context,
                ...o
            }
        } catch (a) {
            return yn(e, r),
            [i, gn(e, t, u, a, n)]
        } finally {
            r.status = h,
            Sn(e, r, !1, n[0])
        }
    }
    i()
}
function vn(e, t, n) {
    if (!(!n || --n[2])) {
        if (e._flights?.get(t.id) === n) {
            let n = e._tx;
            if (n && !n[0].signal.aborted && !n[3].includes(t) && n[3].some(e => e.id === t.id) && n[3].some(e => e.isFetching === `beforeLoad`))
                return;
            e._flights.delete(t.id)
        }
        return n[1]
    }
}
function yn(e, t) {
    let n = t._flight;
    t._flight = void 0,
    vn(e, t, n)?.abort()
}
function bn(e, t, n, r) {
    let i = [];
    for (let a of t)
        if (!n?.includes(a)) {
            let t = a._flight;
            if (a._flight = void 0,
            r && t?.[2] === 1 && e._flights?.get(a.id) === t && n?.some(e => e.id === a.id))
                t[2] = 0;
            else {
                let n = vn(e, a, t);
                n && i.push(n)
            }
        }
    for (let e of i)
        e.abort()
}
function xn(e) {
    for (let t of e) {
        let e = t._flight;
        e && e[2]++
    }
}
function Sn(e, t, n, r) {
    if (t.isFetching = n,
    r && e._tx?.[0] !== r)
        return;
    let i = e.stores.byRoute.get(t.routeId)
      , a = i?.get();
    a?.id === t.id && i.set({
        ...a,
        isFetching: n
    })
}
function Cn(e, t, n, r, i, a, o) {
    let s = t[0];
    return {
        params: n.params,
        location: s,
        navigate: t => e.navigate({
            ...t,
            _fromLocation: s
        }),
        cause: o ? `preload` : n.cause,
        abortController: i,
        preload: o,
        deps: n.loaderDeps,
        parentMatchPromise: a,
        context: n.context,
        route: r,
        ...e.options.additionalContext
    }
}
async function wn(e, t, n, r, i, a, o) {
    let s = o[0]
      , c = s.signal;
    if (c.aborted)
        return un;
    if (!i)
        return [on, void 0];
    let l = n._flight;
    Sn(e, n, `loader`, s);
    try {
        if (!l) {
            let s = new AbortController;
            l = [Promise.resolve().then( () => i(Cn(e, t, n, r, s, a, !!o[3]))).then(e => mn(e, !1, r.id), e => mn(e, !0, r.id)).then(t => (t[0] !== on && e._flights?.get(n.id) === l && (e._flights.delete(n.id),
            l[2] || s.abort()),
            t[0] === sn && l[2] ? hn(r, t[1]) : t)), s, 1],
            (e._flights ??= new Map).set(n.id, l)
        }
        return n._flight = l,
        n.abortController = l[1],
        Mn(e, t, r, await fn(l[0], c), o)
    } catch (t) {
        if (t !== c || !c.aborted)
            throw t;
        return yn(e, n),
        un
    } finally {
        Sn(e, n, !1, s)
    }
}
function Tn(e, t, n) {
    t[0] !== ln && (e.status = `success`,
    e.error = void 0,
    t[0] === on ? (e.loaderData = t[1],
    e.invalid = !1,
    e.updatedAt = Date.now(),
    e.preload = n) : e.invalid = !0)
}
function En(e, t, n) {
    let r = e._cache.get(t.id);
    if (r !== n || e._committed.some(e => e.id === t.id && e._flight === t._flight))
        return;
    let i = {
        ...t,
        _notFound: void 0,
        context: {}
    };
    i._flight && i._flight[2]++,
    e._cache.set(t.id, i),
    r && yn(e, r)
}
function Dn(e, t) {
    return t[0] === sn || t[0] === cn ? {
        ...e,
        status: t[0] === sn ? `error` : `notFound`,
        error: t[1],
        _flight: void 0
    } : e
}
function On(e, t, n, r, i, a, o) {
    let s = t[1][n], c = pn(e, s), l = !!a[3], u = e._cache.get(s.id), d, f = !1, p;
    try {
        if (s.status === `success` && (d = c.options.shouldReload,
        typeof d == `function` && (d = d(Cn(e, t, s, c, a[0], i, l))),
        a[0].signal.aborted && (p = un)),
        !p)
            if (s.status !== `success`)
                f = !0;
            else {
                let t = l || s.preload ? c.options.preloadStaleTime ?? e.options.defaultPreloadStaleTime ?? 3e4 : c.options.staleTime ?? e.options.defaultStaleTime ?? 0;
                f = !!(s.invalid || d || d === void 0 && Date.now() - s.updatedAt >= t && (a[5] || s.cause === `enter` || a[2].some(e => e.routeId === s.routeId && e.id !== s.id)))
            }
    } catch (n) {
        s.invalid = !0,
        yn(e, s),
        p = gn(e, t, c, n, a)
    }
    let m = c.options.loader
      , h = typeof m == `function`
      , g = h ? m : m?.handler
      , _ = !l || c.options.preload !== !1
      , v = _ && m ? e._flights?.get(s.id) : void 0;
    v === s._flight || p ? v = void 0 : v && !f && !l && d === void 0 ? f = !0 : f || (v = void 0);
    let y = !!(m && f && s.status === `success` && !l && !a[4] && ((h ? void 0 : m.staleReloadMode) ?? e.options.defaultStaleReloadMode) !== `blocking`)
      , b = f && _
      , x = b && !y && (s.status !== `success` || !!m)
      , S = n >= o ? a[7] : void 0
      , C = c.lazyFn && c._lazy !== !0 ? S : void 0;
    if (b && !m && (s.invalid = !1,
    s.updatedAt = Date.now()),
    v && v[2]++,
    x) {
        let t = s._flight;
        s._flight = v,
        vn(e, s, t)?.abort(),
        n >= o && (s.status = `pending`),
        S?.()
    }
    b || (s.isFetching = !1);
    let w = !p && x ? wn(e, t, s, c, g, i, a).then(t => (Tn(s, t, l),
    t[0] === on && (m && !a[0].signal.aborted && En(e, s, u),
    n >= o && (s.status = `pending`)),
    t)) : Promise.resolve(p ?? [on, s.loaderData])
      , T = (async () => {
        try {
            let e = nn(c, void 0, C);
            e && await fn(e, a[0].signal)
        } catch (r) {
            if (!t[1].some( (e, t) => t <= n && (e.status === `error` || e.status === `notFound` || e._notFound)))
                return [n, gn(e, t, c, r, a)]
        }
        let r = await w;
        x && r[0] === on && s.status === `pending` && !a[0].signal.aborted && (s.status = `success`,
        S?.())
    }
    )();
    if (r.push([n, w, T]),
    !y)
        return w.then(e => Dn(s, e));
    let ee = {
        ...s,
        status: `pending`,
        preload: !1,
        _flight: v
    };
    s.invalid = !1,
    s.isFetching = `loader`;
    let te = wn(e, t, ee, c, g, i, a).then(e => (s.isFetching = !1,
    Tn(ee, e, !1),
    e));
    return (t[2] ??= []).push([n, te, T, ee]),
    te.then(e => Dn(ee, e))
}
async function kn(e, t, n, r, i=0) {
    let a = n?.[1][1]
      , o = a?.routeId ? t.findIndex(e => e.routeId === a.routeId) : n?.[0] ?? t.length - 1;
    o < 0 && (o = 0);
    for (let n = o; n >= 0; n--) {
        let i = pn(e, t[n]);
        try {
            let e = nn(i, !1);
            e && await fn(e, r)
        } catch (e) {
            if (e === r && r.aborted)
                throw e
        }
        if (i.options.notFoundComponent)
            return n
    }
    return a?.routeId ? o : i
}
function An(e, t) {
    t[2] &&= (bn(e, t[2].map(e => e[3])),
    void 0)
}
async function jn(e, t, n, r) {
    let i;
    try {
        await Promise.all(e.map(e => e[1].then(async t => {
            let a = e[0];
            if (!(r && a >= await r)) {
                if (t[0] >= ln)
                    throw [a, t];
                !i && t[0] !== on && (i = [a, t],
                await Promise.all((n ?? []).map(e => {
                    if (!(e[0] <= a))
                        return e[1].then(t => {
                            if (t[0] === ln)
                                throw [e[0], t]
                        }
                        )
                }
                )))
            }
        }
        )))
    } catch (e) {
        return e
    }
    return t ?? i
}
function Mn(e, t, n, r, i, a) {
    for (; r[0] === ln; ) {
        let o = r[1]
          , s = o.options;
        try {
            if ((s.href || o.headers.has(`Location`)) && (e.resolveRedirect(o),
            s.reloadDocument) || (s.reloadDocument ? i[3] : i[1] >= 20))
                return r;
            let n = e.buildLocation({
                ...s,
                _fromLocation: t[0],
                _includeValidateSearch: !0
            })
              , a = n.maskedLocation ?? n;
            if (a.external) {
                let t = o.clone();
                return t.options = {
                    ...s
                },
                t.headers.set(`Location`, a.publicHref),
                e.resolveRedirect(t),
                i[3] ? [ln, t] : [ln, t, a]
            }
            return [ln, o, n]
        } catch (e) {
            r = a ? [sn, e] : hn(n, e),
            a = !0
        }
    }
    return r
}
async function Nn(e, t, n, r, i, a) {
    let o = t[1]
      , s = await i
      , c = !1
      , l = o.findIndex(e => e._notFound)
      , u = t => t[1][0] === cn ? kn(e, o, t, r.signal) : t[0]
      , d = l < 0 ? o.length : l;
    if ((s?.[1][0] ?? 0) >= ln)
        d = 0;
    else if (s) {
        d = s[2] ??= await u(s);
        for (let e of n) {
            if (e[0] >= d)
                break;
            let t = await e[1];
            if (t[0] !== on && t[0] < ln && !(`loaderData` in o[e[0]])) {
                s = [e[0], t],
                d = s[2] = await u(s);
                break
            }
        }
    }
    for (let e of n) {
        if (e[0] >= d)
            break;
        let t = await e[2];
        if (t) {
            s = t;
            break
        }
    }
    if ((s?.[1][0] ?? 0) >= ln) {
        let n = s[1];
        if (n[0] !== ln || n[1].options.reloadDocument || n[2])
            return An(e, t),
            n;
        c = !0,
        s = [0, [sn, Error(`Too many redirects`)]]
    }
    let f = s ? s[2] ?? await u(s) : l;
    if (f >= 0) {
        let i = s?.[1]
          , l = i?.[0]
          , u = o[f]
          , d = i?.[1]
          , p = () => {
            i && (u._notFound = void 0,
            l === sn ? u.status = `error` : (d.routeId = u.routeId,
            u.routeId === e.routeTree.id ? (u.status = `success`,
            u._notFound = !0) : u.status = `notFound`),
            u.error = d,
            u.isFetching = !1)
        }
        ;
        p(),
        i || a?.();
        let m = pn(e, u);
        try {
            await fn(i ? Promise.resolve().then( () => nn(m, l === sn ? `errorComponent` : `notFoundComponent`)) : Promise.all([nn(m), nn(m, `notFoundComponent`)]), r.signal)
        } catch (n) {
            if (n === r.signal && r.signal.aborted)
                return An(e, t),
                un
        }
        i ? c && (r.abort(),
        await Promise.all([...n.map(e => e[1]), ...n.map(e => e[2]), ...(t[2] ?? []).map(e => e[1])]),
        An(e, t),
        bn(e, o),
        p()) : u.status = `success`
    }
    return t
}
async function Pn(e, t, n, r=0, i=t[1].length) {
    let a = t[1];
    for (let t = r; t < i; t++) {
        let r = a[t]
          , i = pn(e, r).options;
        if (i.head || i.scripts)
            try {
                let t = {
                    ssr: e.options.ssr,
                    matches: a,
                    match: r,
                    params: r.params,
                    loaderData: r.loaderData
                }
                  , [o,s] = await fn(Promise.all([i.head?.(t), i.scripts?.(t)]), n);
                r.meta = o?.meta,
                r.links = o?.links,
                r.headScripts = o?.scripts,
                r.styles = o?.styles,
                r.scripts = s
            } catch (e) {
                if (e === n && n.aborted)
                    break;
                console.error(e)
            }
        if (r.status !== `success` || r._notFound)
            break
    }
    return t
}
async function Fn(e, t, n, r) {
    let i = [t, n], a = r[0].signal, o;
    try {
        let t = e.stores.matches.get()
          , s = n.findIndex(e => e._notFound);
        if (e.options.notFoundMode !== `root` && s >= 0) {
            let t = await kn(e, n, void 0, a, s);
            n[s]._notFound = void 0,
            n[t]._notFound = !0,
            s = t
        }
        let c = s < 0 ? n.length : s + 1
          , l = 0;
        for (; l < c && l !== s; ) {
            let e = n[l]
              , i = r[2][l]
              , a = t[l];
            if (i?.id !== e.id || i.status !== `success` || e.preload || a?.id !== e.id || a.status !== `success` || (l++,
            i._notFound || a._notFound))
                break
        }
        let u = []
          , d = r[6] ?? 0
          , f = d ? Promise.resolve(n[d - 1]) : void 0
          , p = () => {
            for (let t = d; t < c && !a.aborted; t++)
                f = On(e, i, t, u, f, r, l)
        }
          , m = await _n(e, i, r, c, p, l);
        if (m) {
            if (r[4] = !0,
            c = m[0],
            m[1][0] === cn) {
                let t = await kn(e, n, m, a);
                m[2] = t,
                c = Math.min(c, t + 1)
            } else
                m[1][0] >= ln && (c = 0);
            p()
        }
        if (!a.aborted && !r[3]) {
            let t = [];
            for (let[n,r] of e._flights ?? [])
                r[2] || (e._flights.delete(n),
                t.push(r[1]));
            for (let e of t)
                e.abort()
        }
        let h = Nn(e, i, u, r[0], jn(u, m, i[2]), r[7]);
        i[2]?.length && (i[3] = jn(i[2], void 0, void 0, h.then(e => dn(e) ? 0 : rn(n).length, () => 0))),
        o = await h
    } catch (t) {
        if (An(e, i),
        t === a && a.aborted)
            return un;
        throw t
    }
    return dn(o) ? o : Pn(e, o, a, r[6] === n.length ? r[6] : 0)
}
function In(e, t) {
    if (e._tx !== t)
        return;
    let n = t[3]
      , r = e.stores.matches.get()
      , i = e._pending;
    for (let a = 0; a < n.length; a++) {
        let o = n[a]
          , s = o.status === `success` && !o._notFound
          , c = r[a]?.id === o.id && r[a]?.status === `pending`;
        if (s && !c)
            continue;
        let l = pn(e, o)
          , u = s || o.invalid ? 0 : l.options.pendingMs ?? e.options.defaultPendingMs
          , d = l.options.pendingComponent ?? e.options.defaultPendingComponent;
        if (!d || typeof u != `number` || u === 1 / 0) {
            i && (i[0] = t,
            i[2] = 0,
            i[4] = !0);
            return
        }
        let f = l.options.pendingMinMs ?? e.options.defaultPendingMinMs ?? 0
          , p = !1;
        if (i?.[1] === o.id ? (p = i[0] !== t,
        i[0] = t) : (clearTimeout(i?.[3]),
        e._pending = i = void 0),
        i || (e._pending = i = [t, o.id, c ? Date.now() + f : t[4] + u, void 0, c || void 0, d]),
        i[4] && !p && i[5] === d)
            return;
        if (i[5] = d,
        !i[4]) {
            clearTimeout(i[3]);
            let n = i[2] - Date.now();
            if (n > 0) {
                i[3] = setTimeout( () => In(e, t), n);
                return
            }
            i[2] = 0
        }
        let m = n.map(e => ({
            ...e,
            _flight: void 0
        }));
        m[a].status = `pending`;
        let h = i[4] = e.startTransition( () => e.stores.setMatches(m), m).then(t => (t && e._pending === i && i[4] === h && !i[2] && (i[2] = Date.now() + f),
        t));
        return
    }
}
function Ln(e, t) {
    let n = e._pending;
    (e._tx === t || !e._tx?.[3].some(e => e.id === n?.[1])) && (clearTimeout(n?.[3]),
    e._pending = void 0)
}
async function Rn(e, t) {
    let n = e._pending;
    if (!n)
        return;
    clearTimeout(n[3]);
    let r = n[2] - Date.now();
    if (!n[4] || r <= 0 || !rn(t[3]).some(e => e.id === n[1]))
        return;
    let i;
    try {
        await fn(new Promise(e => {
            i = setTimeout(e, r)
        }
        ), t[0].signal)
    } catch {}
    clearTimeout(i)
}
function zn(e, t) {
    e._committed = t,
    e.stores.setMatches(t)
}
function Bn(e, t, n, r) {
    let i = e._committed
      , a = e._lifecycleEnd
      , o = e._cache;
    for (let e of n)
        e.preload = !1,
        r && (e._assetEnd = void 0);
    let s = rn(n).length
      , c = new Map;
    {
        let t = Date.now()
          , r = new Set;
        for (let e = 0; e < n.length; e++) {
            let t = n[e];
            (e < s || t.status === `success`) && r.add(t.id)
        }
        for (let n of [...i, ...o.values()]) {
            if (n.status !== `success` || r.has(n.id))
                continue;
            let i = pn(e, n);
            !i.options.loader || t - n.updatedAt >= (n.preload ? i.options.preloadGcTime ?? e.options.defaultPreloadGcTime ?? 3e5 : i.options.gcTime ?? e.options.defaultGcTime ?? 3e5) || c.set(n.id, o.get(n.id) === n ? n : {
                ...n,
                _flight: void 0,
                isFetching: !1,
                context: {}
            })
        }
    }
    t[3] = [],
    e._cache = c;
    let l = e._lifecycleEnd = Bt(n);
    zn(e, n),
    bn(e, [...o.values(), ...i].filter(e => e._flight && c.get(e.id) !== e), n),
    Vt(e, i, n, a, l, t)
}
async function Vn(e, t) {
    let n = e._tx;
    for (; n && n !== t; )
        t = n,
        await n[5],
        n = e._tx
}
function Hn(e, t, n) {
    let r = n[1].options
      , i = n[2];
    if (!i)
        return e.navigate({
            ...r,
            replace: !0,
            ignoreBlocker: !0
        });
    if (r.reloadDocument)
        return e.navigate({
            href: (i.maskedLocation ?? i).publicHref,
            reloadDocument: !0,
            replace: !0,
            ignoreBlocker: !0
        });
    i._redirects = t[1] + 1,
    e._pendingLocation = i;
    let a = e.commitLocation({
        ...i,
        viewTransition: r.viewTransition,
        replace: !0,
        resetScroll: r.resetScroll,
        hashScrollIntoView: r.hashScrollIntoView,
        ignoreBlocker: !0
    });
    return queueMicrotask( () => {
        e._pendingLocation === i && (e._pendingLocation = void 0)
    }
    ),
    a
}
async function Un(e, t, n, r, i) {
    let a = n.map(e => ({
        ...e
    }));
    xn(a);
    for (let t of r)
        yn(e, a[t[0]]),
        a[t[0]] = t[3];
    let o = [t[2], a], s;
    try {
        s = await Nn(e, o, r, t[0], i)
    } catch (t) {
        throw bn(e, a),
        t
    }
    if (dn(s)) {
        bn(e, a),
        s[0] === ln && e._tx === t && e._committed === n && await Hn(e, t, s);
        return
    }
    if (await Pn(e, s, t[0].signal),
    e._tx !== t || e._committed !== n) {
        bn(e, a);
        return
    }
    for (let t of a) {
        let n = e._cache.get(t.id);
        n?._flight && n._flight === t._flight && (e._cache.delete(t.id),
        yn(e, n))
    }
    zn(e, a),
    bn(e, n, a)
}
async function Wn(e, t, n, r, i, a) {
    let o = await Fn(e, t[2], t[3], [t[0], t[1], e._committed, void 0, i, n, a, r]);
    if (dn(o)) {
        let n = o[0] === ln && e._tx === t;
        if ((!n || o[1].options.reloadDocument) && Ln(e, t),
        bn(e, t[3]),
        t[3] = [],
        !n)
            return;
        if (e._tx !== t) {
            Ln(e, t);
            return
        }
        await Hn(e, t, o);
        return
    }
    let s = o[1];
    if (e._tx === t && await Rn(e, t),
    e._tx !== t) {
        Ln(e, t),
        bn(e, s),
        An(e, o);
        return
    }
    let c = t[2]
      , l = Rt(c, e.stores.resolvedLocation.get())
      , u = o[2];
    await e.startViewTransition(async () => {
        if (e._tx === t && await Rn(e, t),
        e._tx !== t) {
            Ln(e, t),
            bn(e, s),
            An(e, o);
            return
        }
        let n = await e.startTransition( () => {
            Ln(e, t),
            Bn(e, t, s, a),
            e._tx === t && (e.emit({
                type: `onLoad`,
                ...l
            }),
            e._tx === t && e.emit({
                type: `onBeforeRouteMount`,
                ...l
            }))
        }
        , s);
        if (e._tx !== t) {
            An(e, o);
            return
        }
        u?.length && Un(e, t, s, u, o[3]).catch(console.error),
        e.batch( () => {
            e.stores.resolvedLocation.set(c),
            e.stores.status.set(`idle`),
            e._tx === t && e.emit({
                type: `onResolved`,
                ...l
            }),
            n && e._tx === t && e.emit({
                type: `onRendered`,
                ...l
            })
        }
        ),
        e._tx === t && (e._commitPromise?.resolve(),
        e._commitPromise = void 0)
    }
    )
}
async function Gn(e, t) {
    let n = e._tx
      , r = e.stores.resolvedLocation.get()
      , i = r ?? e.stores.location.get()
      , a = e.latestLocation
      , o = e._pendingLocation
      , s = o?.href === a.href ? o._redirects ?? 0 : 0
      , c = e._handoff
      , l = c?.[0]()
      , u = new AbortController
      , d = e._preflight;
    if (e._preflight = u,
    l || c?.[1](),
    d?.abort(),
    !u.signal.aborted) {
        let t = Rt(a, r);
        e.emit({
            type: `onBeforeNavigate`,
            ...t
        }),
        u.signal.aborted || e.emit({
            type: `onBeforeLoad`,
            ...t
        })
    }
    if (u.signal.aborted) {
        await Vn(e, n);
        return
    }
    let f = i.href === a.href
      , p = u
      , m = e.matchRoutes(a, {
        _controller: u
    });
    xn(m);
    let h = l ? c[1](m) : void 0;
    if (h ? p = l : l?.abort(),
    u.signal.aborted) {
        bn(e, m),
        await Vn(e, n);
        return
    }
    e._preflight = void 0;
    let g, _ = () => Wn(e, y, f, () => In(e, y), t?.sync, h), v = t?.sync ? new Promise(e => g = e) : Promise.resolve().then(_), y = [p, s, a, m, Date.now(), v.then( () => Vn(e, y))];
    if (e._tx = y,
    n) {
        for (let t of e.stores.matches.get()) {
            if (e._tx !== y)
                break;
            t.isFetching && Sn(e, t, !1)
        }
        n[0].abort(),
        bn(e, n[3], y[3], !0)
    }
    if (e._tx !== y) {
        bn(e, y[3]),
        y[3] = [],
        g?.(),
        await Vn(e, y);
        return
    }
    e.batch( () => {
        e.stores.status.set(`pending`),
        e.stores.location.set(a)
    }
    ),
    (h || !e._committed.length && m[0]?.status !== `success` && !m.some(e => e._notFound)) && In(e, y),
    g?.(_()),
    await y[5]
}
async function Kn(e, t) {
    let n = e.buildLocation(t);
    for (let t = 0; ; t++) {
        let r = e._committed, i = new AbortController, a, o, s;
        try {
            try {
                a = e.matchRoutes(n, {
                    _controller: i
                }),
                xn(a),
                o = (e._preloads ??= new Map).set(i, a),
                s = await Fn(e, n, a, [i, t, r, !0])
            } finally {
                o && (o = o.delete(i),
                bn(e, a)),
                i.abort()
            }
            if (!dn(s))
                return s[1];
            if (!o || s.length < 3)
                return;
            n = s[2]
        } catch (e) {
            x(e) || console.error(e);
            return
        }
    }
}
async function qn(e) {
    let t = window.$_TSR
      , n = e.options.serializationAdapters;
    n?.length && (t.t = new Map(n.map(e => [e.key, e.fromSerializable])),
    t.buffer.forEach(e => e())),
    t.initialized = !0;
    let r = t.router;
    e.ssr = {
        manifest: r.manifest
    },
    e.options.ssr = {
        nonce: document.querySelector(`meta[property="csp-nonce"]`)?.content
    };
    let i = r.matches
      , a = new AbortController
      , o = e._preflight;
    e._preflight = a,
    o?.abort();
    let s = () => e._preflight === a, c, l, u, d;
    try {
        if (await fn(e.options.hydrate?.(r.dehydratedData), a.signal),
        !s())
            return;
        let t = e.history.location;
        u = t.href,
        d = t.state,
        e.updateLatestLocation(),
        c = e.latestLocation,
        e.stores.location.set(c),
        l = e.matchRoutes(c, {
            _controller: a
        })
    } catch (t) {
        if (s() && (e._preflight = void 0),
        a.abort(t),
        t !== a.signal)
            throw t
    }
    if (!s())
        return;
    let f = [], p, m = 0, h = t => {
        m = Math.min(m, t + 1);
        let n = f.splice(t);
        for (let t of n)
            pn(e, t).options.loader && (t.status === `success` || !t.invalid && `loaderData` in t) && En(e, {
                ...t,
                status: `success`,
                error: void 0,
                preload: !0
            }, e._cache.get(t.id));
        bn(e, n)
    }
    , g = i.length > l.length ? l.findIndex(e => e._notFound) + 1 : i.length, _ = !1;
    for (let t = 0; t < g; t++) {
        let n = l[t]
          , r = i[t];
        if (typeof r.i != `string` || T(r.i) !== n.id) {
            p ??= t;
            break
        }
        m = t + 1;
        let a = pn(e, n);
        if ((`l` in r || r.s === `success` && r.e === void 0 && a.options.loader) && (n.loaderData = r.l),
        n.status = r.s,
        n.ssr = r.ssr,
        a.options.ssr = n.ssr,
        n.updatedAt = r.u,
        n.error = r.e,
        n._notFound ||= r.g,
        n.status === `error` || n.status === `notFound` || n._notFound) {
            _ = !0,
            f.push(n),
            (n.ssr === !1 || n.ssr === `data-only`) && (p ??= t);
            break
        }
        if (n.status === `pending`) {
            p ??= t;
            break
        }
        f.push(n),
        n.ssr === `data-only` && (p ??= t)
    }
    !_ && f.length === g && g < l.length && (p = g);
    let v = f.map(async t => {
        try {
            let n = pn(e, t);
            return await (t._notFound ? Promise.all([nn(n), nn(n, `notFoundComponent`)]) : nn(n, t.status === `error` ? `errorComponent` : t.status === `notFound` ? `notFoundComponent` : void 0)),
            !0
        } catch {
            return !1
        }
    }
    )
      , y = 0;
    try {
        for (; y < v.length && await fn(v[y], a.signal); )
            y++
    } catch {
        return
    }
    if (!s())
        return;
    y < f.length && h(y);
    let b = Math.max(p === f.length ? f.length + 1 : f.length, y < v.length ? y : m);
    for (let t = 0; t < b; t++) {
        let n = l[t], r = pn(e, n), o = l[t - 1]?.context ?? e.options.context ?? {}, u;
        if (r.options.context) {
            try {
                u = n._ctx = r.options.context({
                    deps: n.loaderDeps,
                    params: n.params,
                    context: o,
                    location: c,
                    navigate: t => e.navigate({
                        ...t,
                        _fromLocation: c
                    }),
                    buildLocation: e.buildLocation,
                    cause: n.cause,
                    abortController: a,
                    preload: !1,
                    matches: l,
                    routeId: r.id
                }) || {}
            } catch {
                if (!s())
                    return;
                if (n.status !== `error` && n.status !== `notFound` && !n._notFound) {
                    p = Math.min(p ?? t, t),
                    h(t);
                    break
                }
            }
            if (!s())
                return
        }
        n.context = {
            ...o,
            ...u,
            ...f[t] && i[t].b
        }
    }
    if (await Pn(e, [c, l], a.signal, 0, m),
    !s())
        return;
    let x = p !== void 0 || f.length < g, S = _ && f.length === g ? l : f, C = x ? l : S, w;
    if (x && p !== void 0) {
        let e = C[p];
        w = e.ssr === `data-only` && m > p + 1 ? m : void 0,
        C = C.slice(),
        C[p] = {
            ...e,
            status: `pending`,
            ssr: e.ssr === `data-only` && `data-only`,
            _assetEnd: w
        }
    }
    let ee = () => {
        let t = e.history.location;
        return x && !e._tx && t.href === u && t.state === d && e._committed === S && S.length && !a.signal.aborted ? a : void 0
    }
      , te = [ee, t => {
        if (e._handoff !== te)
            return;
        e._handoff = void 0;
        let n = S.length;
        if (!t || !ee() || S.some( (e, n) => e.id !== t[n]?.id)) {
            a.abort();
            return
        }
        let r = w;
        if (r !== void 0) {
            for (let e = n; e < r; e++)
                if (l[e]?.id !== t[e]?.id) {
                    r = e > p + 1 ? e : void 0;
                    break
                }
        }
        let i = S.map(e => ({
            ...e
        }));
        r !== void 0 && (i[p]._assetEnd = r),
        bn(e, t.splice(0, n, ...i));
        for (let e = n; e < t.length; e++) {
            let n = t[e]
              , r = l[e];
            r?.id === n.id && r._ctx && (n._ctx = r._ctx),
            n.abortController = a
        }
        return n
    }
    ];
    e._committed = S,
    e._lifecycleEnd = Bt(S),
    e._handoff = te,
    e._preflight = void 0,
    e.batch( () => {
        e.stores.setMatches(C),
        e.stores.status.set(`idle`),
        x || e.stores.resolvedLocation.set(e.stores.location.get())
    }
    )
}
var Jn = Symbol.asyncIterator
  , Yn = Symbol.hasInstance
  , Xn = Symbol.isConcatSpreadable
  , Zn = Symbol.iterator
  , Qn = Symbol.match
  , $n = Symbol.matchAll
  , er = Symbol.replace
  , tr = Symbol.search
  , nr = Symbol.species
  , rr = Symbol.split
  , ir = Symbol.toPrimitive
  , ar = Symbol.toStringTag
  , or = Symbol.unscopables
  , sr = {
    [Jn]: 0,
    [Yn]: 1,
    [Xn]: 2,
    [Zn]: 3,
    [Qn]: 4,
    [$n]: 5,
    [er]: 6,
    [tr]: 7,
    [nr]: 8,
    [rr]: 9,
    [ir]: 10,
    [ar]: 11,
    [or]: 12
}
  , cr = {
    0: Jn,
    1: Yn,
    2: Xn,
    3: Zn,
    4: Qn,
    5: $n,
    6: er,
    7: tr,
    8: nr,
    9: rr,
    10: ir,
    11: ar,
    12: or
}
  , lr = {
    2: !0,
    3: !1,
    1: void 0,
    0: null,
    4: -0,
    5: 1 / 0,
    6: -1 / 0,
    7: NaN
}
  , ur = {
    0: `Error`,
    1: `EvalError`,
    2: `RangeError`,
    3: `ReferenceError`,
    4: `SyntaxError`,
    5: `TypeError`,
    6: `URIError`
}
  , dr = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError
};
function j(e, t, n, r, i, a, o, s, c, l, u, d) {
    return {
        t: e,
        i: t,
        s: n,
        c: r,
        m: i,
        p: a,
        e: o,
        a: s,
        f: c,
        b: l,
        o: u,
        l: d
    }
}
function fr(e) {
    return j(2, void 0, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}
var pr = fr(2)
  , mr = fr(3)
  , hr = fr(1)
  , gr = fr(0)
  , _r = fr(4)
  , vr = fr(5)
  , yr = fr(6)
  , br = fr(7)
  , xr = 64
  , Sr = /[\x00-\x07\x0b\x0e-\x1f<\u2028\u2029\ud800-\udfff]/;
function Cr(e) {
    switch (e) {
    case `"`:
        return `\\"`;
    case `\\`:
        return `\\\\`;
    case `
`:
        return `\\n`;
    case `\r`:
        return `\\r`;
    case `\b`:
        return `\\b`;
    case `	`:
        return `\\t`;
    case `\f`:
        return `\\f`;
    case `<`:
        return `\\x3C`;
    case `\u2028`:
        return `\\u2028`;
    case `\u2029`:
        return `\\u2029`;
    default:
        return
    }
}
function wr(e) {
    if (e.length >= xr && !Sr.test(e))
        return JSON.stringify(e).slice(1, -1);
    let t = ``, n = 0, r;
    for (let i = 0, a = e.length; i < a; i++)
        r = Cr(e[i]),
        r && (t += e.slice(n, i) + r,
        n = i + 1);
    return n === 0 ? t = e : t += e.slice(n),
    t
}
function Tr(e) {
    switch (e) {
    case `\\\\`:
        return `\\`;
    case `\\"`:
        return `"`;
    case `\\n`:
        return `
`;
    case `\\r`:
        return `\r`;
    case `\\b`:
        return `\b`;
    case `\\t`:
        return `	`;
    case `\\f`:
        return `\f`;
    case `\\x3C`:
        return `<`;
    case `\\u2028`:
        return `\u2028`;
    case `\\u2029`:
        return `\u2029`;
    default:
        return e
    }
}
function Er(e) {
    return typeof e == `string` && !e.includes(`\\`) ? e : e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, Tr)
}
var {toString: Dr} = Object.prototype
  , Or = {
    parsing: 1,
    serialization: 2,
    deserialization: 3
};
function kr(e) {
    return `Seroval Error (step: ${Or[e]})`
}
var Ar = (e, t) => kr(e)
  , jr = class extends Error {
    constructor(e, t) {
        super(Ar(e, t)),
        this.cause = t
    }
}
  , Mr = class extends jr {
    constructor(e) {
        super(`parsing`, e)
    }
}
  , Nr = class extends jr {
    constructor(e) {
        super(`deserialization`, e)
    }
}
;
function Pr(e) {
    return `Seroval Error (specific: ${e})`
}
var Fr = class extends Error {
    constructor(e) {
        super(Pr(1)),
        this.value = e
    }
}
  , Ir = class extends Error {
    constructor(e) {
        super(Pr(2))
    }
}
  , Lr = class extends Error {
    constructor(e) {
        super(Pr(3))
    }
}
  , Rr = class extends Error {
    constructor(e) {
        super(Pr(4))
    }
}
  , zr = class extends Error {
    constructor(e) {
        super(Pr(5)),
        this.value = e
    }
}
  , Br = class extends Error {
    constructor(e) {
        super(Pr(6))
    }
}
  , Vr = class extends Error {
    constructor(e) {
        super(Pr(7))
    }
}
  , Hr = class extends Error {
    constructor(e) {
        super(Pr(8))
    }
}
  , Ur = class extends Error {
    constructor(e) {
        super(Pr(9))
    }
}
  , Wr = `__SEROVAL_REFS__`
  , Gr = new Map
  , Kr = new Map;
function qr(e) {
    return Gr.has(e)
}
function Jr(e) {
    return Kr.has(e)
}
function Yr(e) {
    if (qr(e))
        return Gr.get(e);
    throw new zr(e)
}
function Xr(e) {
    if (Jr(e))
        return Kr.get(e);
    throw new Br(e)
}
typeof globalThis < `u` ? Object.defineProperty(globalThis, Wr, {
    value: Kr,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof window < `u` ? Object.defineProperty(window, Wr, {
    value: Kr,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof self < `u` ? Object.defineProperty(self, Wr, {
    value: Kr,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof global < `u` && Object.defineProperty(global, Wr, {
    value: Kr,
    configurable: !0,
    writable: !1,
    enumerable: !1
});
function Zr(e) {
    return e instanceof EvalError ? 1 : e instanceof RangeError ? 2 : e instanceof ReferenceError ? 3 : e instanceof SyntaxError ? 4 : e instanceof TypeError ? 5 : e instanceof URIError ? 6 : 0
}
function Qr(e) {
    let t = ur[Zr(e)];
    return e.name === t ? e.constructor.name === t ? {} : {
        name: e.constructor.name
    } : {
        name: e.name
    }
}
function $r(e, t) {
    let n = Qr(e)
      , r = Object.getOwnPropertyNames(e);
    for (let i = 0, a = r.length, o; i < a; i++)
        o = r[i],
        o !== `name` && o !== `message` && (o === `stack` ? t & 4 && (n ||= {},
        n[o] = e[o]) : (n ||= {},
        n[o] = e[o]));
    return n
}
function ei(e) {
    return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : +!Object.isExtensible(e)
}
function ti(e) {
    switch (e) {
    case 1 / 0:
        return vr;
    case -1 / 0:
        return yr
    }
    return e === e ? Object.is(e, -0) ? _r : j(0, void 0, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0) : br
}
function ni(e) {
    return j(1, void 0, wr(e), void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}
function ri(e) {
    return j(3, void 0, `` + e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}
function ii(e) {
    return j(4, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}
function ai(e, t) {
    let n = t.valueOf();
    return j(5, e, n === n ? t.toISOString() : ``, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}
function oi(e, t, n) {
    return j(36, e, n.toString(), t, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}
function si(e, t) {
    return j(6, e, void 0, wr(t.source), t.flags, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}
function ci(e, t) {
    return j(17, e, sr[t], void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}
function li(e, t) {
    return j(18, e, wr(Yr(t)), void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}
function ui(e, t, n) {
    return j(25, e, n, wr(t), void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}
function di(e, t, n) {
    return j(9, e, void 0, void 0, void 0, void 0, void 0, n, void 0, void 0, ei(t), void 0)
}
function fi(e, t) {
    return j(21, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0)
}
var pi = 1e6;
function mi(e, t, n) {
    if (t.length > pi)
        throw new Fr(t);
    return j(15, e, void 0, t.constructor.name, void 0, void 0, void 0, void 0, n, t.byteOffset, void 0, t.length)
}
function hi(e, t, n) {
    if (t.length > pi)
        throw new Fr(t);
    return j(16, e, void 0, t.constructor.name, void 0, void 0, void 0, void 0, n, t.byteOffset, void 0, t.length)
}
function gi(e, t, n) {
    if (t.byteLength > pi)
        throw new Fr(t);
    return j(20, e, void 0, void 0, void 0, void 0, void 0, void 0, n, t.byteOffset, void 0, t.byteLength)
}
function _i(e, t, n) {
    return j(13, e, Zr(t), void 0, wr(t.message), n, void 0, void 0, void 0, void 0, void 0, void 0)
}
function vi(e, t, n) {
    return j(14, e, Zr(t), void 0, wr(t.message), n, void 0, void 0, void 0, void 0, void 0, void 0)
}
function yi(e, t) {
    return j(7, e, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0, void 0)
}
function bi(e, t) {
    return j(28, void 0, void 0, void 0, void 0, void 0, void 0, [e, t], void 0, void 0, void 0, void 0)
}
function xi(e, t) {
    return j(30, void 0, void 0, void 0, void 0, void 0, void 0, [e, t], void 0, void 0, void 0, void 0)
}
function Si(e, t, n) {
    return j(31, e, void 0, void 0, void 0, void 0, void 0, n, t, void 0, void 0, void 0)
}
function Ci(e, t) {
    return j(32, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0)
}
function wi(e, t) {
    return j(33, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0)
}
function Ti(e, t) {
    return j(34, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0)
}
function Ei(e, t, n, r) {
    return j(35, e, n, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0, r)
}
var Di = class {
    constructor(e, t) {
        this.value = e,
        this.replacement = t
    }
}
  , Oi = () => {
    let e = {
        p: 0,
        s: 0,
        f: 0
    };
    return e.p = new Promise( (t, n) => {
        e.s = t,
        e.f = n
    }
    ),
    e
}
  , ki = e => t => () => {
    let n = 0
      , r = {
        [e]() {
            return r
        },
        next() {
            if (n > t.d)
                return {
                    done: !0,
                    value: void 0
                };
            let e = n++
              , r = t.v[e];
            if (e === t.t)
                throw r;
            return {
                done: e === t.d,
                value: r
            }
        }
    };
    return r
}
  , Ai = (e, t) => n => () => {
    let r = 0
      , i = -1
      , a = !1
      , o = []
      , s = []
      , c = {
        finalize(e=0, t=s.length) {
            for (; e < t; e++)
                s[e].s({
                    done: !0,
                    value: void 0
                })
        }
    };
    n.on({
        next(e) {
            let t = s.shift();
            t && t.s({
                done: !1,
                value: e
            }),
            o.push(e)
        },
        throw(e) {
            let t = s.shift();
            t && t.f(e),
            c.finalize(),
            i = o.length,
            a = !0,
            o.push(e)
        },
        return(e) {
            let t = s.shift();
            t && t.s({
                done: !0,
                value: e
            }),
            c.finalize(),
            i = o.length,
            o.push(e)
        }
    });
    let l = {
        [e]() {
            return l
        },
        next() {
            if (i === -1) {
                let e = r++;
                if (e >= o.length) {
                    let e = t();
                    return s.push(e),
                    e.p
                }
                return {
                    done: !1,
                    value: o[e]
                }
            }
            if (r > i)
                return {
                    done: !0,
                    value: void 0
                };
            let e = r++
              , n = o[e];
            if (e !== i)
                return {
                    done: !1,
                    value: n
                };
            if (a)
                throw n;
            return {
                done: !0,
                value: n
            }
        }
    };
    return l
}
  , ji = e => {
    let t = atob(e)
      , n = t.length
      , r = new Uint8Array(n);
    for (let e = 0; e < n; e++)
        r[e] = t.charCodeAt(e);
    return r.buffer
}
  , Mi = class {
    constructor(e, t, n) {
        this.v = e,
        this.t = t,
        this.d = n
    }
}
;
function Ni(e) {
    return e instanceof Mi
}
function Pi(e, t, n) {
    return new Mi(e,t,n)
}
function Fi(e) {
    let t = []
      , n = -1
      , r = -1
      , i = e[Zn]();
    for (; ; )
        try {
            let e = i.next();
            if (t.push(e.value),
            e.done) {
                r = t.length - 1;
                break
            }
        } catch (e) {
            n = t.length,
            r = n,
            t.push(e);
            break
        }
    return Pi(t, n, r)
}
var Ii = ki(Zn);
function Li(e) {
    return Ii(e)
}
var Ri = {}
  , zi = {}
  , Bi = {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {}
};
function Vi(e, t) {
    if (t.has(e))
        throw TypeError(`Cannot initialize the same private elements twice on an object`)
}
function M(e, t) {
    Vi(e, t),
    t.add(e)
}
function Hi(e, t, n) {
    Vi(e, t),
    t.set(e, n)
}
function Ui(e, t, n) {
    if (typeof e == `function` ? e === t : e.has(t))
        return arguments.length < 3 ? t : n;
    throw TypeError(`Private element is not present on this object`)
}
function N(e, t) {
    return e.get(Ui(e, t))
}
function Wi(e, t, n) {
    return e.set(Ui(e, t), n),
    n
}
var Gi = new WeakMap
  , Ki = new WeakMap
  , qi = new WeakMap
  , Ji = new WeakMap
  , Yi = new WeakMap
  , Xi = new WeakSet
  , Zi = class {
    constructor() {
        M(this, Xi),
        Hi(this, Gi, []),
        Hi(this, Ki, []),
        Hi(this, qi, !0),
        Hi(this, Ji, !1),
        Hi(this, Yi, 0)
    }
    on(e) {
        let t = N(qi, this)
          , n = 0;
        if (t) {
            for (; n < N(Yi, this) && N(Ki, this)[n]; n++)
                ;
            if (n === N(Yi, this)) {
                var r;
                Wi(Yi, this, (r = N(Yi, this),
                r++,
                r))
            }
            N(Ki, this)[n] = e
        }
        return Ui(Xi, this, $i).call(this, e),
        () => {
            if (N(qi, this) && t) {
                for (t = !1,
                N(Ki, this)[n] = void 0; N(Yi, this) > 0 && !N(Ki, this)[N(Yi, this) - 1]; ) {
                    var e;
                    Wi(Yi, this, (e = N(Yi, this),
                    e--,
                    e))
                }
                N(Ki, this).length = N(Yi, this)
            }
        }
    }
    next(e) {
        N(qi, this) && (N(Gi, this).push(e),
        Ui(Xi, this, Qi).call(this, e, `next`))
    }
    throw(e) {
        N(qi, this) && (N(Gi, this).push(e),
        Ui(Xi, this, Qi).call(this, e, `throw`),
        Wi(qi, this, !1),
        Wi(Ji, this, !1),
        N(Ki, this).length = 0)
    }
    return(e) {
        N(qi, this) && (N(Gi, this).push(e),
        Ui(Xi, this, Qi).call(this, e, `return`),
        Wi(qi, this, !1),
        Wi(Ji, this, !0),
        N(Ki, this).length = 0)
    }
}
;
function Qi(e, t) {
    for (let r = 0; r < N(Yi, this); r++) {
        var n;
        (n = N(Ki, this)[r]) == null || n[t](e)
    }
}
function $i(e) {
    for (let t = 0, n = N(Gi, this).length; t < n; t++) {
        let r = N(Gi, this)[t];
        !N(qi, this) && t === n - 1 ? e[N(Ji, this) ? `return` : `throw`](r) : e.next(r)
    }
}
function ea(e) {
    return e instanceof Zi
}
function ta() {
    return new Zi
}
function na(e, t) {
    let n = ta()
      , r = e[Jn]()
      , i = !1
      , a = !1;
    t?.push( () => {
        a || i || (i = !0,
        Promise.resolve().then( () => r.return?.call(r)).catch( () => {}
        ))
    }
    );
    async function o() {
        try {
            for (; !i; ) {
                let e = await r.next();
                if (i)
                    return;
                if (e.done) {
                    a = !0,
                    n.return(e.value);
                    break
                }
                n.next(e.value)
            }
        } catch (e) {
            a = !0,
            i || n.throw(e)
        }
    }
    return o().catch( () => {}
    ),
    n
}
var ra = Ai(Jn, Oi);
function ia(e) {
    return ra(e)
}
async function aa(e) {
    try {
        return [1, await e]
    } catch (e) {
        return [0, e]
    }
}
function oa(e, t) {
    return {
        plugins: t.plugins,
        mode: e,
        marked: new Set,
        features: 127 ^ (t.disabledFeatures || 0),
        refs: t.refs || new Map,
        depthLimit: t.depthLimit || 1e3,
        compactArrayBufferViews: t.compactArrayBufferViews ?? !1
    }
}
function sa(e, t) {
    e.marked.add(t)
}
function ca(e, t) {
    let n = e.refs.size;
    return e.refs.set(t, n),
    n
}
function la(e, t) {
    let n = e.refs.get(t);
    return n == null ? {
        type: 0,
        value: ca(e, t)
    } : (sa(e, n),
    {
        type: 1,
        value: ii(n)
    })
}
function ua(e, t) {
    let n = la(e, t);
    return n.type === 1 ? n : qr(t) ? {
        type: 2,
        value: li(n.value, t)
    } : n
}
function da(e, t) {
    let n = ua(e, t);
    if (n.type !== 0)
        return n.value;
    if (t in sr)
        return ci(n.value, t);
    throw new Fr(t)
}
function fa(e, t) {
    let n = la(e, Bi[t]);
    return n.type === 1 ? n.value : j(26, n.value, t, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}
function pa(e) {
    let t = la(e, Ri);
    return t.type === 1 ? t.value : j(27, t.value, void 0, void 0, void 0, void 0, void 0, void 0, da(e, Zn), void 0, void 0, void 0)
}
function ma(e) {
    let t = la(e, zi);
    return t.type === 1 ? t.value : j(29, t.value, void 0, void 0, void 0, void 0, void 0, [fa(e, 1), da(e, Jn)], void 0, void 0, void 0, void 0)
}
function ha(e, t, n, r) {
    return j(n ? 11 : 10, e, void 0, void 0, void 0, r, void 0, void 0, void 0, void 0, ei(t), void 0)
}
function ga(e, t, n, r) {
    return j(8, t, void 0, void 0, void 0, void 0, {
        k: n,
        v: r
    }, void 0, fa(e, 0), void 0, void 0, void 0)
}
function _a(e, t) {
    if (!e.compactArrayBufferViews)
        return t;
    let n = new Uint8Array(t.buffer,t.byteOffset,t.byteLength).slice().buffer
      , r = t.constructor;
    return new r(n)
}
function va(e) {
    if (typeof Buffer < `u`)
        return Buffer.from(e).toString(`base64`);
    let t = new Uint8Array(e);
    if (typeof t.toBase64 == `function`)
        return t.toBase64();
    let n = ``;
    for (let e = 0, r = t.length; e < r; e++)
        n += String.fromCharCode(t[e]);
    return btoa(n)
}
function ya(e, t, n) {
    return j(19, t, va(n), void 0, void 0, void 0, void 0, void 0, fa(e, 5), void 0, void 0, void 0)
}
function ba(e, t) {
    return {
        base: oa(e, t),
        child: void 0
    }
}
var xa = class {
    constructor(e, t) {
        this._p = e,
        this.depth = t
    }
    parse(e) {
        return Va(this._p, this.depth, e)
    }
}
;
async function Sa(e, t, n) {
    let r = [];
    for (let i = 0, a = n.length; i < a; i++)
        i in n ? r[i] = await Va(e, t, n[i]) : r[i] = 0;
    return r
}
async function Ca(e, t, n, r) {
    return di(n, r, await Sa(e, t, r))
}
async function wa(e, t, n) {
    let r = Object.entries(n)
      , i = []
      , a = [];
    for (let n = 0, o = r.length; n < o; n++)
        i.push(wr(r[n][0])),
        a.push(await Va(e, t, r[n][1]));
    return Zn in n && (i.push(da(e.base, Zn)),
    a.push(bi(pa(e.base), await Va(e, t, Fi(n))))),
    Jn in n && (i.push(da(e.base, Jn)),
    a.push(xi(ma(e.base), await Va(e, t, na(n))))),
    ar in n && (i.push(da(e.base, ar)),
    a.push(ni(n[ar]))),
    Xn in n && (i.push(da(e.base, Xn)),
    a.push(n[Xn] ? pr : mr)),
    {
        k: i,
        v: a
    }
}
async function Ta(e, t, n, r, i) {
    return ha(n, r, i, await wa(e, t, r))
}
async function Ea(e, t, n, r) {
    return fi(n, await Va(e, t, r.valueOf()))
}
async function Da(e, t, n, r) {
    return r = _a(e.base, r),
    mi(n, r, await Va(e, t, r.buffer))
}
async function Oa(e, t, n, r) {
    return r = _a(e.base, r),
    hi(n, r, await Va(e, t, r.buffer))
}
async function ka(e, t, n, r) {
    return r = _a(e.base, r),
    gi(n, r, await Va(e, t, r.buffer))
}
async function Aa(e, t, n, r) {
    let i = $r(r, e.base.features);
    return _i(n, r, i ? await wa(e, t, i) : void 0)
}
async function ja(e, t, n, r) {
    let i = $r(r, e.base.features);
    return vi(n, r, i ? await wa(e, t, i) : void 0)
}
async function Ma(e, t, n, r) {
    let i = []
      , a = [];
    for (let[n,o] of r.entries())
        i.push(await Va(e, t, n)),
        a.push(await Va(e, t, o));
    return ga(e.base, n, i, a)
}
async function Na(e, t, n, r) {
    let i = [];
    for (let n of r.keys())
        i.push(await Va(e, t, n));
    return yi(n, i)
}
async function Pa(e, t, n, r) {
    let i = e.base.plugins;
    if (i)
        for (let a = 0, o = i.length; a < o; a++) {
            let o = i[a];
            if (o.parse.async && o.test(r))
                return ui(n, o.tag, await o.parse.async(r, new xa(e,t), {
                    id: n
                }))
        }
}
async function Fa(e, t, n, r) {
    let[i,a] = await aa(r);
    return j(12, n, i, void 0, void 0, void 0, void 0, void 0, await Va(e, t, a), void 0, void 0, void 0)
}
function Ia(e, t, n, r, i) {
    let a = []
      , o = n.on({
        next: n => {
            sa(this.base, t),
            Va(this, e, n).then(e => {
                a.push(Ci(t, e))
            }
            , e => {
                i(e),
                o()
            }
            )
        }
        ,
        throw: n => {
            sa(this.base, t),
            Va(this, e, n).then(e => {
                a.push(wi(t, e)),
                r(a),
                o()
            }
            , e => {
                i(e),
                o()
            }
            )
        }
        ,
        return: n => {
            sa(this.base, t),
            Va(this, e, n).then(e => {
                a.push(Ti(t, e)),
                r(a),
                o()
            }
            , e => {
                i(e),
                o()
            }
            )
        }
    })
}
async function La(e, t, n, r) {
    return Si(n, fa(e.base, 4), await new Promise(Ia.bind(e, t, n, r)))
}
async function Ra(e, t, n, r) {
    let i = [];
    for (let n = 0, a = r.v.length; n < a; n++)
        i[n] = await Va(e, t, r.v[n]);
    return Ei(n, i, r.t, r.d)
}
async function za(e, t, n, r) {
    if (Array.isArray(r))
        return Ca(e, t, n, r);
    if (ea(r))
        return La(e, t, n, r);
    if (Ni(r))
        return Ra(e, t, n, r);
    let i = r.constructor;
    if (i !== void 0 && typeof i != `function`) {
        let e = Object.getPrototypeOf(r);
        i = e === null ? void 0 : e.constructor
    }
    if (i === Di)
        return Va(e, t, r.replacement);
    let a = await Pa(e, t, n, r);
    if (a)
        return a;
    switch (i) {
    case Object:
        return Ta(e, t, n, r, !1);
    case void 0:
        return Ta(e, t, n, r, !0);
    case Date:
        return ai(n, r);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
        return Aa(e, t, n, r);
    case Number:
    case Boolean:
    case String:
    case BigInt:
        return Ea(e, t, n, r);
    case ArrayBuffer:
        return ya(e.base, n, r);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
        return Da(e, t, n, r);
    case DataView:
        return ka(e, t, n, r);
    case Map:
        return Ma(e, t, n, r);
    case Set:
        return Na(e, t, n, r)
    }
    if (i === Promise || r instanceof Promise)
        return Fa(e, t, n, r);
    let o = e.base.features;
    if (o & 32 && i === RegExp)
        return si(n, r);
    if (o & 16)
        switch (i) {
        case BigInt64Array:
        case BigUint64Array:
            return Oa(e, t, n, r)
        }
    if (o & 1 && typeof AggregateError < `u` && (i === AggregateError || r instanceof AggregateError))
        return ja(e, t, n, r);
    if (o & 64 && typeof Temporal < `u`)
        switch (i) {
        case Temporal.Instant:
            return oi(n, 0, r);
        case Temporal.Duration:
            return oi(n, 1, r);
        case Temporal.PlainDate:
            return oi(n, 2, r);
        case Temporal.PlainDateTime:
            return oi(n, 3, r);
        case Temporal.PlainMonthDay:
            return oi(n, 4, r);
        case Temporal.PlainTime:
            return oi(n, 5, r);
        case Temporal.PlainYearMonth:
            return oi(n, 6, r);
        case Temporal.ZonedDateTime:
            return oi(n, 7, r)
        }
    if (r instanceof Error)
        return Aa(e, t, n, r);
    if (Zn in r || Jn in r)
        return Ta(e, t, n, r, !!i);
    throw new Fr(r)
}
async function Ba(e, t, n) {
    let r = ua(e.base, n);
    if (r.type !== 0)
        return r.value;
    let i = await Pa(e, t, r.value, n);
    if (i)
        return i;
    throw new Fr(n)
}
async function Va(e, t, n) {
    if (t >= e.base.depthLimit)
        throw new Ur(e.base.depthLimit);
    switch (typeof n) {
    case `boolean`:
        return n ? pr : mr;
    case `undefined`:
        return hr;
    case `string`:
        return ni(n);
    case `number`:
        return ti(n);
    case `bigint`:
        return ri(n);
    case `object`:
        if (n) {
            let r = ua(e.base, n);
            return r.type === 0 ? await za(e, t + 1, r.value, n) : r.value
        }
        return gr;
    case `symbol`:
        return da(e.base, n);
    case `function`:
        return Ba(e, t, n);
    default:
        throw new Fr(n)
    }
}
async function Ha(e, t) {
    try {
        return await Va(e, 0, t)
    } catch (e) {
        throw e instanceof Mr ? e : new Mr(e)
    }
}
function Ua(e) {
    return e
}
function Wa(e, t) {
    for (let n = 0, r = t.length; n < r; n++) {
        let r = t[n];
        e.has(r) || (e.add(r),
        r.extends && Wa(e, r.extends))
    }
}
function Ga(e) {
    if (e) {
        let t = new Set;
        return Wa(t, e),
        [...t]
    }
}
function Ka(e) {
    switch (e) {
    case `Int8Array`:
        return Int8Array;
    case `Int16Array`:
        return Int16Array;
    case `Int32Array`:
        return Int32Array;
    case `Uint8Array`:
        return Uint8Array;
    case `Uint16Array`:
        return Uint16Array;
    case `Uint32Array`:
        return Uint32Array;
    case `Uint8ClampedArray`:
        return Uint8ClampedArray;
    case `Float32Array`:
        return Float32Array;
    case `Float64Array`:
        return Float64Array;
    case `BigInt64Array`:
        return BigInt64Array;
    case `BigUint64Array`:
        return BigUint64Array;
    default:
        throw new Vr(e)
    }
}
function qa(e) {
    switch (e) {
    case `constructor`:
    case `__proto__`:
    case `prototype`:
    case `__defineGetter__`:
    case `__defineSetter__`:
    case `__lookupGetter__`:
    case `__lookupSetter__`:
        return !1;
    default:
        return !0
    }
}
function Ja(e) {
    switch (e) {
    case Jn:
    case Xn:
    case ar:
    case Zn:
        return !0;
    default:
        return !1
    }
}
var Ya = 1e6
  , Xa = 512
  , Za = 1e4
  , Qa = 2e4;
function $a(e, t) {
    switch (t) {
    case 3:
        return Object.freeze(e);
    case 1:
        return Object.preventExtensions(e);
    case 2:
        return Object.seal(e);
    default:
        return e
    }
}
var eo = 1e3;
function to(e, t) {
    let n = t.maxBase64Length ?? Ya;
    if (!Number.isSafeInteger(n) || n < 0)
        throw RangeError(`maxBase64Length must be a non-negative safe integer`);
    let r = t.refs || new Map;
    return `types` in r || Object.assign(r, {
        types: new Map
    }),
    {
        mode: e,
        plugins: t.plugins,
        refs: r,
        features: t.features ?? 127 ^ (t.disabledFeatures || 0),
        depthLimit: t.depthLimit || eo,
        maxBase64Length: n
    }
}
function no(e) {
    return {
        mode: 2,
        base: to(2, e),
        child: void 0
    }
}
var ro = class {
    constructor(e, t) {
        this._p = e,
        this.depth = t
    }
    deserialize(e) {
        return Go(this._p, this.depth, e)
    }
}
;
function io(e, t) {
    if (t < 0 || !Number.isFinite(t) || !Number.isInteger(t))
        throw new Hr({
            t: 4,
            i: t
        });
    if (e.refs.has(t))
        throw Error(`Conflicted ref id: ` + t)
}
function ao(e) {
    return !!e && (typeof e == `object` || typeof e == `function`) && `then` in e && typeof e.then == `function`
}
function oo(e, t, n) {
    return io(e.base, t),
    e.state.marked.has(t) && e.base.refs.set(t, n),
    n
}
function so(e, t, n) {
    return io(e.base, t),
    e.base.refs.set(t, n),
    n
}
function co(e, t, n) {
    return e.mode === 1 ? oo(e, t, n) : so(e, t, n)
}
function lo(e, t, n) {
    if (Object.hasOwn(t, n))
        return t[n];
    throw new Hr(e)
}
function uo(e, t) {
    return co(e, t.i, Xr(Er(t.s)))
}
function fo(e, t) {
    if (!Array.isArray(t))
        throw new Hr(e)
}
function po(e, t, n) {
    let r = n.a;
    fo(n, r);
    let i = r.length
      , a = co(e, n.i, Array(i));
    for (let n = 0, o; n < i; n++)
        o = r[n],
        o && (a[n] = Go(e, t, o));
    return $a(a, n.o),
    a
}
function mo(e, t, n) {
    qa(t) ? e[t] = n : Object.defineProperty(e, t, {
        value: n,
        configurable: !0,
        enumerable: !0,
        writable: !0
    })
}
function ho(e, t, n, r, i) {
    if (typeof r == `string`)
        mo(n, Er(r), Go(e, t, i));
    else {
        let a = Go(e, t, r);
        switch (typeof a) {
        case `string`:
            mo(n, a, Go(e, t, i));
            break;
        case `symbol`:
            Ja(a) && (n[a] = Go(e, t, i));
            break;
        default:
            throw new Hr(r)
        }
    }
}
function go(e, t, n) {
    e.base.refs.types.set(t, n)
}
function _o(e, t, n, r) {
    if (e.base.refs.types.get(n) !== r)
        throw new Hr(t)
}
function vo(e, t, n, r) {
    let i = n.k;
    if (fo(n, i),
    fo(n, n.v),
    i.length > 0)
        for (let a = 0, o = n.v, s = i.length; a < s; a++)
            ho(e, t, r, i[a], o[a]);
    return r
}
function yo(e, t, n) {
    let r = co(e, n.i, n.t === 10 ? {} : Object.create(null));
    return vo(e, t, n.p, r),
    $a(r, n.o),
    r
}
function P(e, t) {
    return co(e, t.i, new Date(t.s))
}
function bo(e, t) {
    if (!(e.base.features & 64))
        throw new Ir(t);
    let n;
    switch (t.c) {
    case 0:
        n = Temporal.Instant.from(t.s);
        break;
    case 1:
        n = Temporal.Duration.from(t.s);
        break;
    case 2:
        n = Temporal.PlainDate.from(t.s);
        break;
    case 3:
        n = Temporal.PlainDateTime.from(t.s);
        break;
    case 4:
        n = Temporal.PlainMonthDay.from(t.s);
        break;
    case 5:
        n = Temporal.PlainTime.from(t.s);
        break;
    case 6:
        n = Temporal.PlainYearMonth.from(t.s);
        break;
    case 7:
        n = Temporal.ZonedDateTime.from(t.s);
        break;
    default:
        throw new Hr(t)
    }
    return co(e, t.i, n)
}
function xo(e, t) {
    if (e.base.features & 32) {
        let n = Er(t.c);
        if (n.length > Qa)
            throw new Hr(t);
        return co(e, t.i, new RegExp(n,t.m))
    }
    throw new Ir(t)
}
function So(e, t, n) {
    let r = co(e, n.i, new Set);
    fo(n, n.a);
    for (let i = 0, a = n.a, o = a.length; i < o; i++)
        r.add(Go(e, t, a[i]));
    return r
}
function Co(e, t, n) {
    let r = co(e, n.i, new Map);
    fo(n, n.e.k),
    fo(n, n.e.v);
    for (let i = 0, a = n.e.k, o = n.e.v, s = a.length; i < s; i++)
        r.set(Go(e, t, a[i]), Go(e, t, o[i]));
    return r
}
function wo(e, t) {
    if (typeof t.s != `string`)
        throw new Hr(t);
    if (t.s.length > e.base.maxBase64Length)
        throw RangeError(`ArrayBuffer exceeds maxBase64Length (` + e.base.maxBase64Length + `)`);
    let n = Er(t.s), r;
    if (n.length < Xa || typeof Buffer > `u`)
        r = ji(n);
    else {
        let e = atob(n);
        r = new ArrayBuffer(e.length),
        Buffer.from(r).write(e, `latin1`)
    }
    return co(e, t.i, r)
}
function To(e, t, n) {
    let r = Ka(n.c)
      , i = Go(e, t, n.f);
    if (!(i instanceof ArrayBuffer))
        throw new Hr(n);
    let a = n.b ?? 0;
    if (a < 0 || a > i.byteLength)
        throw new Hr(n);
    return co(e, n.i, new r(i,a,n.l))
}
function Eo(e, t, n) {
    let r = Go(e, t, n.f);
    if (!(r instanceof ArrayBuffer))
        throw new Hr(n);
    let i = n.b ?? 0;
    if (i < 0 || i > r.byteLength)
        throw new Hr(n);
    return co(e, n.i, new DataView(r,i,n.l))
}
function Do(e, t, n, r) {
    if (n.p) {
        let i = vo(e, t, n.p, {});
        Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
    }
    return r
}
function Oo(e, t, n) {
    return Do(e, t, n, co(e, n.i, AggregateError([], Er(n.m))))
}
function ko(e, t, n) {
    let r = lo(n, dr, n.s);
    return Do(e, t, n, co(e, n.i, new r(Er(n.m))))
}
function Ao(e, t, n) {
    let r = Oi()
      , i = co(e, n.i, r.p)
      , a = Go(e, t, n.f);
    if (ao(a))
        throw new Hr(n.f);
    return n.s ? r.s(a) : r.f(a),
    i
}
function jo(e, t, n) {
    return co(e, n.i, Object(Go(e, t, n.f)))
}
function Mo(e, t, n) {
    let r = e.base.plugins;
    if (r) {
        let i = Er(n.c);
        for (let a = 0, o = r.length; a < o; a++) {
            let o = r[a];
            if (o.tag === i)
                return co(e, n.i, o.deserialize(n.s, new ro(e,t), {
                    id: n.i
                }))
        }
    }
    throw new Lr(n.c)
}
function No(e, t) {
    let n = co(e, t.i, co(e, t.s, Oi()).p);
    return go(e, t.s, 22),
    n
}
function Po(e, t, n) {
    let r = e.base.refs.get(n.i);
    if (r) {
        _o(e, n, n.i, 22);
        let i = Go(e, t, n.a[1]);
        if (ao(i))
            throw new Hr(n.a[1]);
        n.t === 23 ? r.s(i) : r.f(i);
        return
    }
    throw new Rr(`Promise`)
}
function Fo(e, t, n) {
    Go(e, t, n.a[0]);
    let r = Go(e, t, n.a[1]);
    if (!Ni(r))
        throw new Hr(n.a[1]);
    return Li(r)
}
function Io(e, t, n) {
    Go(e, t, n.a[0]);
    let r = Go(e, t, n.a[1]);
    if (!ea(r))
        throw new Hr(n.a[1]);
    return ia(r)
}
function Lo(e, t, n) {
    let r = co(e, n.i, ta());
    go(e, n.i, 31);
    let i = n.a;
    fo(n, i);
    let a = i.length;
    if (a)
        for (let n = 0; n < a; n++)
            Go(e, t, i[n]);
    return r
}
function Ro(e, t, n) {
    let r = e.base.refs.get(n.i);
    if (r) {
        _o(e, n, n.i, 31),
        r.next(Go(e, t, n.f));
        return
    }
    throw new Rr(`Stream`)
}
function zo(e, t, n) {
    let r = e.base.refs.get(n.i);
    if (r) {
        _o(e, n, n.i, 31),
        r.throw(Go(e, t, n.f));
        return
    }
    throw new Rr(`Stream`)
}
function Bo(e, t, n) {
    let r = e.base.refs.get(n.i);
    if (r) {
        _o(e, n, n.i, 31),
        r.return(Go(e, t, n.f));
        return
    }
    throw new Rr(`Stream`)
}
function Vo(e, t, n) {
    Go(e, t, n.f)
}
function Ho(e, t, n) {
    Go(e, t, n.a[1])
}
function Uo(e, t) {
    return Number.isInteger(e) && e >= -1 && e < t
}
function Wo(e, t, n) {
    fo(n, n.a);
    let r = n.a.length;
    if (!(Uo(n.s, r) && Uo(n.l, r)))
        throw new Hr(n);
    let i = co(e, n.i, Pi([], n.s, n.l));
    for (let a = 0; a < r; a++)
        i.v[a] = Go(e, t, n.a[a]);
    return i
}
function Go(e, t, n) {
    if (t > e.base.depthLimit)
        throw new Ur(e.base.depthLimit);
    switch (t += 1,
    n.t) {
    case 2:
        return lo(n, lr, n.s);
    case 0:
        return Number(n.s);
    case 1:
        return Er(String(n.s));
    case 3:
        if (String(n.s).length > Za)
            throw new Hr(n);
        return BigInt(n.s);
    case 4:
        return e.base.refs.get(n.i);
    case 18:
        return uo(e, n);
    case 9:
        return po(e, t, n);
    case 10:
    case 11:
        return yo(e, t, n);
    case 5:
        return P(e, n);
    case 6:
        return xo(e, n);
    case 7:
        return So(e, t, n);
    case 8:
        return Co(e, t, n);
    case 19:
        return wo(e, n);
    case 16:
    case 15:
        return To(e, t, n);
    case 20:
        return Eo(e, t, n);
    case 14:
        return Oo(e, t, n);
    case 13:
        return ko(e, t, n);
    case 12:
        return Ao(e, t, n);
    case 17:
        return lo(n, cr, n.s);
    case 21:
        return jo(e, t, n);
    case 25:
        return Mo(e, t, n);
    case 22:
        return No(e, n);
    case 23:
    case 24:
        return Po(e, t, n);
    case 28:
        return Fo(e, t, n);
    case 30:
        return Io(e, t, n);
    case 31:
        return Lo(e, t, n);
    case 32:
        return Ro(e, t, n);
    case 33:
        return zo(e, t, n);
    case 34:
        return Bo(e, t, n);
    case 27:
        return Vo(e, t, n);
    case 29:
        return Ho(e, t, n);
    case 35:
        return Wo(e, t, n);
    case 36:
        return bo(e, n);
    default:
        throw new Ir(n)
    }
}
function Ko(e, t) {
    try {
        return Go(e, 0, t)
    } catch (e) {
        throw new Nr(e)
    }
}
function qo(e, t) {
    let n = Ga(t.plugins);
    return Ko(no({
        maxBase64Length: t.maxBase64Length,
        plugins: n,
        refs: t.refs,
        features: t.features,
        disabledFeatures: t.disabledFeatures,
        depthLimit: t.depthLimit
    }), e)
}
async function Jo(e, t={}) {
    let n = Ga(t.plugins)
      , r = ba(1, {
        compactArrayBufferViews: t.compactArrayBufferViews,
        plugins: n,
        disabledFeatures: t.disabledFeatures
    });
    return {
        t: await Ha(r, e),
        f: r.base.features,
        m: Array.from(r.base.marked)
    }
}
function Yo(e) {
    return Ua({
        tag: `$TSR/t/` + e.key,
        test: e.test,
        parse: {
            sync(t, n) {
                return {
                    v: n.parse(e.toSerializable(t))
                }
            },
            async async(t, n) {
                return {
                    v: await n.parse(e.toSerializable(t))
                }
            },
            stream(t, n) {
                return {
                    v: n.parse(e.toSerializable(t))
                }
            }
        },
        serialize: void 0,
        deserialize(t, n) {
            return e.fromSerializable(n.deserialize(t.v))
        }
    })
}
var Xo = Ua({
    tag: `$TSR/Error`,
    test(e) {
        return e instanceof Error
    },
    parse: {
        sync(e, t) {
            return {
                message: t.parse(e.message)
            }
        },
        async async(e, t) {
            return {
                message: await t.parse(e.message)
            }
        },
        stream(e, t) {
            return {
                message: t.parse(e.message)
            }
        }
    },
    serialize(e, t) {
        return `new Error(` + t.serialize(e.message) + `)`
    },
    deserialize(e, t) {
        return Error(t.deserialize(e.message))
    }
})
  , Zo = class {
    constructor(e, t) {
        this.stream = e,
        this.hint = t?.hint ?? `binary`
    }
}
;
function Qo(e) {
    let t = [];
    for (let n = 0; n < e.length; n += 32768)
        t.push(String.fromCharCode.apply(null, e.subarray(n, n + 32768)));
    return btoa(t.join(``))
}
var $o = new TextDecoder(`utf-8`,{
    fatal: !0,
    ignoreBOM: !0
});
function es(e) {
    try {
        return `t` + $o.decode(e)
    } catch {
        return `b` + Qo(e)
    }
}
function ts(e, t, n) {
    n?.throwIfAborted();
    let r = ta()
      , i = e.getReader()
      , a = !0
      , o = () => {
        a = !1,
        n?.removeEventListener(`abort`, c),
        i.releaseLock()
    }
      , s = e => a ? (i.cancel(e).catch( () => {}
    ),
    o(),
    !0) : !1
      , c = () => {
        s(n.reason) && r.throw(n.reason)
    }
    ;
    return n?.addEventListener(`abort`, c),
    (async () => {
        try {
            for (; a; ) {
                let {done: e, value: n} = await i.read();
                if (!a)
                    return;
                if (e) {
                    o(),
                    r.return(void 0);
                    return
                }
                r.next(t(n))
            }
        } catch (e) {
            s(e) && r.throw(e)
        }
    }
    )(),
    [r, s]
}
function ns(e) {
    return Ua({
        tag: `tss/RawStream`,
        test: e => e instanceof Zo,
        parse: {
            async: async (t, n) => {
                let r = await n.parse(t.hint === `text`)
                  , [i] = ts(t.stream, t.hint === `text` ? es : Qo, e);
                return {
                    text: r,
                    stream: await n.parse(i)
                }
            }
        },
        serialize: void 0,
        deserialize: void 0
    })
}
var rs = ns()
  , is = {}
  , as = e => new ReadableStream({
    start(t) {
        e.on({
            next(e) {
                try {
                    t.enqueue(e)
                } catch {}
            },
            throw(e) {
                t.error(e)
            },
            return() {
                try {
                    t.close()
                } catch {}
            }
        })
    }
})
  , os = Ua({
    tag: `seroval-plugins/web/ReadableStreamFactory`,
    test(e) {
        return e === is
    },
    parse: {
        sync() {
            return is
        },
        async async() {
            return await Promise.resolve(is)
        },
        stream() {
            return is
        }
    },
    serialize() {
        return as.toString()
    },
    deserialize() {
        return is
    }
});
async function ss(e, t) {
    try {
        for (; ; ) {
            let n = await t.read();
            if (n.done) {
                e.return(n.value),
                t.releaseLock();
                break
            }
            e.next(n.value)
        }
    } catch (n) {
        t.releaseLock(),
        e.throw(n)
    }
}
function cs(e) {
    e.cancel().catch( () => {}
    ),
    e.releaseLock()
}
function ls(e) {
    let t = ta()
      , n = e.getReader()
      , r = cs.bind(null, n);
    return ss(t, n).catch(r),
    [t, r]
}
var us = Ua({
    tag: `seroval/plugins/web/ReadableStream`,
    extends: [os],
    test(e) {
        return typeof ReadableStream > `u` ? !1 : e instanceof ReadableStream
    },
    parse: {
        sync(e, t) {
            return {
                factory: t.parse(is),
                stream: t.parse(ta())
            }
        },
        async async(e, t) {
            return {
                factory: await t.parse(is),
                stream: await t.parse(ls(e)[0])
            }
        },
        stream(e, t) {
            let[n,r] = ls(e);
            return t.addCleanup(r),
            {
                factory: t.parse(is),
                stream: t.parse(n)
            }
        }
    },
    serialize(e, t) {
        return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`
    },
    deserialize(e, t) {
        let n = t.deserialize(e.stream);
        if (!n || typeof n != `object` || !ea(n))
            throw Error(`Expected a stream source.`);
        return as(n)
    }
});
function ds(e) {
    return [Xo, e ? ns(e) : rs, us]
}
[...ds()];
function fs(e) {
    return Ua({
        tag: `tss/RawStream`,
        test: () => !1,
        parse: {},
        serialize: void 0,
        deserialize(t, n) {
            return e(n.deserialize(t.streamId))
        }
    })
}
function ps(e) {
    return [...(b()?.serializationAdapters)?.map(Yo) ?? [], ...e]
}
function ms(e) {
    return ps(ds(e))
}
var hs = new TextDecoder
  , gs = new Uint8Array
  , _s = new ByteLengthQueuingStrategy({
    highWaterMark: 0
});
function vs(e) {
    let t = e.getReader(), n = new Map, r = 0, i, a, o = () => {
        i?.(),
        i = void 0
    }
    , s = (e, t) => {
        let n = e[1];
        e[1] = !1,
        n && (t === 1 ? n.close() : n.error(t[0]))
    }
    , c = new ReadableStream({
        start(e) {
            a = e
        },
        pull: o,
        cancel(e) {
            let i = [e === void 0 ? Error(`Framed response cancelled`) : e];
            r = i,
            o(),
            t.cancel(e).catch( () => {}
            );
            for (let e of n.values())
                s(e, i)
        }
    });
    function l(e) {
        let t = n.get(e);
        if (t)
            return t;
        if (n.size >= 1024)
            throw Error(`Too many raw streams`);
        let i, a = [new ReadableStream({
            start(e) {
                i = e
            },
            cancel() {
                a[1] !== !1 && (a[1] = null)
            }
        },_s), i];
        return n.set(e, a),
        r !== 0 && s(a, r),
        a
    }
    function u(e) {
        if (e === 0 || e >>> 0 !== e)
            throw RangeError(`Invalid raw stream ID`);
        return l(e)[0]
    }
    return (async () => {
        let e = gs
          , o = 0;
        async function c() {
            for (; o === e.byteLength; ) {
                e = gs,
                o = 0;
                let n = await t.read();
                if (r !== 0 || n.done)
                    return !1;
                e = n.value
            }
            return !0
        }
        async function u(t, n) {
            if (t === 0)
                return gs;
            if (!await c()) {
                if (n)
                    return;
                throw Error(`Incomplete frame`)
            }
            if (e.byteLength - o >= t) {
                let n = e.subarray(o, o + t);
                return o += t,
                o === e.byteLength && (e = gs,
                o = 0),
                n
            }
            let r = new Uint8Array(t)
              , i = 0;
            for (; i < t; ) {
                if (!await c())
                    throw Error(`Incomplete frame`);
                let n = Math.min(t - i, e.byteLength - o);
                r.set(e.subarray(o, o + n), i),
                o += n,
                i += n
            }
            return o === e.byteLength && (e = gs,
            o = 0),
            r
        }
        try {
            for (; r === 0; ) {
                let e = await u(9, !0);
                if (r !== 0)
                    return;
                if (!e) {
                    for (let e of n.values())
                        if (e[1])
                            throw Error(`Incomplete raw stream`);
                    r = 1,
                    a.close();
                    return
                }
                let t = e[0]
                  , o = (e[1] << 24 | e[2] << 16 | e[3] << 8 | e[4]) >>> 0
                  , c = (e[5] << 24 | e[6] << 16 | e[7] << 8 | e[8]) >>> 0;
                if (e = gs,
                t > 3 || t === 0 != (o === 0) || c > 16777216 || t === 2 && c !== 0)
                    throw Error(`Invalid frame`);
                let d = t === 0 ? void 0 : l(o);
                if (d?.[1] === !1)
                    throw Error(`Raw stream already ended`);
                let f = await u(c);
                if (r !== 0)
                    return;
                if (!d) {
                    let e = hs.decode(f);
                    for (f = gs,
                    a.enqueue(e); r === 0 && a.desiredSize <= 0; )
                        await new Promise(e => {
                            i = e
                        }
                        );
                    continue
                }
                if (t === 1) {
                    let e = d[1];
                    if (e) {
                        if (-e.desiredSize > 134217728) {
                            e.error(Error(`Raw stream ${o} has too many unread bytes`)),
                            d[1] = null,
                            f = gs;
                            continue
                        }
                        let t = f.byteLength * 4 < f.buffer.byteLength ? f.slice() : f;
                        f = gs,
                        e.enqueue(t)
                    }
                } else
                    s(d, t === 2 ? 1 : [Error(hs.decode(f))])
            }
        } catch (e) {
            if (r === 0) {
                let i = [e];
                r = i,
                t.cancel(e).catch( () => {}
                ),
                a.error(e);
                for (let e of n.values())
                    s(e, i)
            }
        } finally {
            e = gs,
            t.releaseLock()
        }
    }
    )(),
    [c, u]
}
var ys = Symbol.for(`TSR_DEFERRED_PROMISE`);
function bs(e, t) {
    let n = e;
    return n[ys] ? n : (n[ys] = {
        status: `pending`
    },
    n.then(e => {
        n[ys].status = `success`,
        n[ys].data = e
    }
    ).catch(e => {
        n[ys].status = `error`,
        n[ys].error = {
            data: (t?.serializeError ?? Lt)(e),
            __isServerError: !0
        }
    }
    ),
    n)
}
var xs = `Error preloading route! ☝️`;
function Ss(e, t) {
    if (e)
        return typeof e == `string` ? e : e[t]
}
function Cs(e) {
    return e?.scriptFormat ?? `module`
}
function ws(e, t, n) {
    let r = Ts(t)
      , i = Ss(n, `script`) ?? r.crossOrigin;
    return {
        ...Cs(e) === `iife` ? {
            rel: `preload`,
            as: `script`
        } : {
            rel: `modulepreload`
        },
        href: r.href,
        ...i ? {
            crossOrigin: i
        } : {}
    }
}
function Ts(e) {
    return typeof e == `string` ? {
        href: e,
        crossOrigin: void 0
    } : e
}
function Es(e, t) {
    if (t.length === 0)
        return;
    if (t.length === 1) {
        e.push(t[0]);
        return
    }
    let n = new Set;
    for (let r of t) {
        let t = JSON.stringify(r);
        n.has(t) || (n.add(t),
        e.push(r))
    }
}
function Ds(e) {
    return typeof e == `string` ? {
        href: e,
        crossOrigin: void 0
    } : e
}
function Os(e, t, n, r) {
    let i = an(e)
      , a = []
      , o = [];
    for (let e of i)
        for (let t of Array.isArray(e.scripts) ? e.scripts : []) {
            if (!t)
                continue;
            let {children: e, ...i} = t;
            a.push({
                tag: `script`,
                attrs: {
                    ...i,
                    ...r,
                    nonce: n
                },
                children: e
            })
        }
    if (t)
        for (let e of i)
            for (let r of t.routes[e.routeId]?.scripts ?? [])
                o.push({
                    tag: `script`,
                    attrs: {
                        ...r.attrs,
                        nonce: n
                    },
                    children: r.children
                });
    return [a, o]
}
function ks([e,t], n) {
    return n ? [...n.before, ...e, ...t, n.boundary] : [...e, ...t]
}
var As = class {
    get to() {
        return this._to
    }
    get id() {
        return this._id
    }
    get path() {
        return this._path
    }
    get fullPath() {
        return this._fullPath
    }
    constructor(e) {
        if (this.init = e => {
            this.originalIndex = e,
            this._branch = void 0;
            let t = this.options
              , n = !t?.path && !t?.id;
            this.parentRoute = this.options.getParentRoute?.(),
            n ? this._path = vt : this.parentRoute || ke();
            let r = n ? vt : t?.path;
            r && r !== `/` && (r = ye(r));
            let i = t?.id || r
              , a = n ? vt : ve((this.parentRoute.id === `__root__` ? `` : this.parentRoute.id) + `/` + (i ?? ``));
            r === `__root__` && (r = `/`);
            let o = a === `__root__` ? `/` : r === void 0 ? this.parentRoute.fullPath : ve(this.parentRoute.fullPath + `/` + r);
            this._path = r,
            this._id = a,
            this._fullPath = o,
            this._to = be(o)
        }
        ,
        this.addChildren = e => this._addFileChildren(e),
        this._addFileChildren = e => (Array.isArray(e) && (this.children = e),
        typeof e == `object` && e && (this.children = Object.values(e)),
        this),
        this._addFileTypes = () => this,
        this.updateLoader = e => (Object.assign(this.options, e),
        this),
        this.update = e => (Object.assign(this.options, e),
        this),
        this.lazy = e => (this.lazyFn = e,
        this),
        this.redirect = e => S({
            from: this.fullPath,
            ...e
        }),
        this.options = e || {},
        this.isRoot = !e?.getParentRoute,
        e?.id && e?.path)
            throw Error(`Route cannot have both an 'id' and a 'path' option.`)
    }
}
  , js = class extends As {
    constructor(e) {
        super(e)
    }
}
;
function Ms(e) {
    return e
}
var Ns;
function Ps(e, t, n) {
    try {
        return qo(e, t)
    } catch (e) {
        throw Is(n),
        e
    }
}
async function Fs(e) {
    e.length > 0 && (await Promise.allSettled(e),
    e.length = 0)
}
function Is(e) {
    for (let t of e)
        t.catch( () => {}
        );
    e.length = 0
}
var Ls = Object.prototype.hasOwnProperty;
function Rs(e) {
    for (let t in e)
        if (Ls.call(e, t))
            return !0;
    return !1
}
async function zs(e, t, n) {
    Ns ||= ms();
    let r = t[0]
      , i = r.fetch ?? n
      , a = r.data instanceof FormData
      , o = new Headers(r.headers);
    if (o.set(`x-tsr-serverFn`, `true`),
    a || o.set(`accept`, `${y}, application/x-ndjson, application/json`),
    r.method === `GET`) {
        if (a)
            throw Error(`FormData is not supported with GET requests`);
        let t = await Bs(r);
        if (t !== void 0) {
            let n = ut({
                payload: t
            });
            e.includes(`?`) ? e += `&${n}` : e += `?${n}`
        }
    }
    let s;
    return r.method === `POST` && (s = await Hs(r),
    typeof s == `string` && o.set(`content-type`, `application/json`)),
    Us( () => i(e, {
        method: r.method,
        headers: o,
        signal: r.signal,
        body: s
    }))
}
async function Bs(e) {
    let t;
    return e.data !== void 0 && (t = {
        data: e.data
    }),
    e.context && Rs(e.context) && ((t ??= {}).context = e.context),
    t ? Vs(t, e.signal) : void 0
}
async function Vs(e, t) {
    t?.throwIfAborted();
    let n;
    try {
        n = await Jo(e, {
            plugins: t ? ms(t) : Ns
        })
    } finally {
        t?.throwIfAborted()
    }
    return JSON.stringify(n)
}
async function Hs(e) {
    if (e.data instanceof FormData) {
        let t;
        return e.context && Rs(e.context) && (t = await Vs(e.context, e.signal)),
        t !== void 0 && e.data.set(_, t),
        e.data
    }
    return Bs(e)
}
async function Us(e) {
    let t;
    try {
        t = await e()
    } catch (e) {
        if (e instanceof Response)
            t = e;
        else
            throw e
    }
    if (t.headers.get(`x-tss-raw`) === `true`)
        return t;
    let n = t.headers.get(`content-type`);
    if (n || ke(),
    t.headers.get(`x-tss-serialized`)) {
        let e;
        if (n.includes(`application/x-tss-framed`)) {
            let r = /;\s*v=(\d+)/.exec(n)?.[1];
            if (r && +r != 1)
                throw Error(`Unsupported framed protocol version ${r}`);
            if (!t.body)
                throw Error(`No response body for framed response`);
            let[i,a] = vs(t.body);
            e = await Ws(i, [fs(a), ...Ns])
        } else if (n.includes(`application/json`)) {
            let n = await t.json()
              , r = [];
            e = Ps(n, {
                plugins: Ns
            }, r),
            await Fs(r)
        }
        if (e || ke(),
        e instanceof Error)
            throw e;
        return e
    }
    if (n.includes(`application/json`)) {
        let e = await t.json()
          , n = w(e);
        if (n)
            throw n;
        if (x(e))
            throw e;
        return e
    }
    if (!t.ok)
        throw Error(await t.text());
    return t
}
async function Ws(e, t) {
    let n = e.getReader(), r = {
        refs: new Map,
        plugins: t
    }, i = e => {
        n.cancel(e).catch( () => {}
        )
    }
    , a, o = [];
    try {
        let e = await n.read();
        if (e.done)
            throw Error(`Stream ended before first object`);
        a = Ps(JSON.parse(e.value), r, o)
    } catch (e) {
        throw i(e),
        n.releaseLock(),
        e
    }
    return (async () => {
        let e = [];
        try {
            for (; ; ) {
                let t = await n.read();
                if (t.done)
                    return;
                Ps(JSON.parse(t.value), r, e),
                Is(e)
            }
        } catch (e) {
            i(e),
            console.error(`Stream processing error:`, e)
        } finally {
            n.releaseLock()
        }
    }
    )(),
    await Fs(o),
    a
}
function Gs(e) {
    let t = `/_serverFn/` + e;
    return Object.assign( (...e) => {
        let n = b()?.serverFns?.fetch;
        return zs(t, e, n ?? fetch)
    }
    , {
        url: t,
        serverFnMeta: {
            id: e
        },
        [v]: !0
    })
}
var Ks = Ms({
    key: `$TSS/serverfn`,
    test: e => typeof e != `function` || !(v in e) ? !1 : !!e[v],
    toSerializable: ({serverFnMeta: e}) => ({
        functionId: e.id
    }),
    fromSerializable: ({functionId: e}) => Gs(e)
})
  , F = c(u(), 1)
  , qs = F.use
  , Js = F.useLayoutEffect
  , Ys = o((e => {
    var t = Symbol.for(`react.transitional.element`)
      , n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
        var i = null;
        if (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
            for (var a in r = {},
            n)
                a !== `key` && (r[a] = n[a]);
        else
            r = n;
        return n = r.ref,
        {
            $$typeof: t,
            type: e,
            key: i,
            ref: n === void 0 ? null : n,
            props: r
        }
    }
    e.Fragment = n,
    e.jsx = r,
    e.jsxs = r
}
))
  , Xs = o(( (e, t) => {
    t.exports = Ys()
}
))
  , I = Xs();
function Zs({promise: e}) {
    if (qs)
        return qs(e);
    let t = bs(e);
    if (t[ys].status === `pending`)
        throw t;
    if (t[ys].status === `error`)
        throw t[ys].error;
    return t[ys].data
}
function Qs(e) {
    let t = (0,
    I.jsx)($s, {
        ...e
    });
    return e.fallback ? (0,
    I.jsx)(F.Suspense, {
        fallback: e.fallback,
        children: t
    }) : t
}
function $s(e) {
    let t = Zs(e);
    return e.children(t)
}
var ec = class extends F.Component {
    constructor(...e) {
        super(...e),
        this.state = {
            error: 0
        },
        this.reset = () => {
            this.setState({
                error: 0
            })
        }
    }
    static getDerivedStateFromProps(e, t) {
        let n = e.getResetKey();
        return t.error && t.resetKey !== n ? {
            resetKey: n,
            error: 0
        } : {
            resetKey: n
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: [e]
        }
    }
    componentDidCatch(e, t) {
        this.props.onCatch?.(e, t)
    }
    render() {
        let e = this.state.error;
        return e ? F.createElement(this.props.errorComponent ?? tc, {
            error: e[0],
            reset: this.reset
        }) : this.props.children
    }
}
;
function tc({error: e}) {
    let[t,n] = F.useState(!1);
    return (0,
    I.jsxs)(`div`, {
        style: {
            padding: `.5rem`,
            maxWidth: `100%`
        },
        children: [(0,
        I.jsxs)(`div`, {
            style: {
                display: `flex`,
                alignItems: `center`,
                gap: `.5rem`
            },
            children: [(0,
            I.jsx)(`strong`, {
                style: {
                    fontSize: `1rem`
                },
                children: `Something went wrong!`
            }), (0,
            I.jsx)(`button`, {
                style: {
                    appearance: `none`,
                    fontSize: `.6em`,
                    border: `1px solid currentColor`,
                    padding: `.1rem .2rem`,
                    fontWeight: `bold`,
                    borderRadius: `.25rem`
                },
                onClick: () => n(e => !e),
                children: t ? `Hide Error` : `Show Error`
            })]
        }), (0,
        I.jsx)(`div`, {
            style: {
                height: `.25rem`
            }
        }), t ? (0,
        I.jsx)(`div`, {
            children: (0,
            I.jsx)(`pre`, {
                style: {
                    fontSize: `.7em`,
                    border: `1px solid red`,
                    borderRadius: `.25rem`,
                    padding: `.3rem`,
                    color: `red`,
                    overflow: `auto`
                },
                children: e?.message ? (0,
                I.jsx)(`code`, {
                    children: e.message
                }) : null
            })
        }) : null]
    })
}
var nc = () => !0
  , rc = () => !1;
function ic({children: e, fallback: t=null}) {
    return (0,
    I.jsx)(F.Fragment, {
        children: ac() ? e : t
    })
}
function ac(e=!0) {
    return F.useSyncExternalStore(oc, nc, e ? rc : nc)
}
function oc() {
    return () => {}
}
var sc = F.createContext(null);
function cc(e) {
    return F.useContext(sc)
}
var lc = F.createContext(void 0)
  , uc = F.createContext(void 0);
function dc({update: e, notify: t, unwatched: n}) {
    return {
        link: r,
        unlink: i,
        propagate: a,
        checkDirty: o,
        shallowPropagate: s
    };
    function r(e, t, n) {
        let r = t.depsTail;
        if (r !== void 0 && r.dep === e)
            return;
        let i = r === void 0 ? t.deps : r.nextDep;
        if (i !== void 0 && i.dep === e) {
            i.version = n,
            t.depsTail = i;
            return
        }
        let a = e.subsTail;
        if (a !== void 0 && a.version === n && a.sub === t)
            return;
        let o = t.depsTail = e.subsTail = {
            version: n,
            dep: e,
            sub: t,
            prevDep: r,
            nextDep: i,
            prevSub: a,
            nextSub: void 0
        };
        i !== void 0 && (i.prevDep = o),
        r === void 0 ? t.deps = o : r.nextDep = o,
        a === void 0 ? e.subs = o : a.nextSub = o
    }
    function i(e, t=e.sub) {
        let r = e.dep
          , i = e.prevDep
          , a = e.nextDep
          , o = e.nextSub
          , s = e.prevSub;
        return a === void 0 ? t.depsTail = i : a.prevDep = i,
        i === void 0 ? t.deps = a : i.nextDep = a,
        o === void 0 ? r.subsTail = s : o.prevSub = s,
        s === void 0 ? (r.subs = o) === void 0 && n(r) : s.nextSub = o,
        a
    }
    function a(e) {
        let n = e.nextSub, r;
        top: do {
            let i = e.sub
              , a = i.flags;
            if (a & 60 ? a & 12 ? a & 4 ? !(a & 48) && c(e, i) ? (i.flags = a | 40,
            a &= 1) : a = 0 : i.flags = a & -9 | 32 : a = 0 : i.flags = a | 32,
            a & 2 && t(i),
            a & 1) {
                let t = i.subs;
                if (t !== void 0) {
                    let i = (e = t).nextSub;
                    i !== void 0 && (r = {
                        value: n,
                        prev: r
                    },
                    n = i);
                    continue
                }
            }
            if ((e = n) !== void 0) {
                n = e.nextSub;
                continue
            }
            for (; r !== void 0; )
                if (e = r.value,
                r = r.prev,
                e !== void 0) {
                    n = e.nextSub;
                    continue top
                }
            break
        } while (!0)
    }
    function o(t, n) {
        let r, i = 0, a = !1;
        top: do {
            let o = t.dep
              , c = o.flags;
            if (n.flags & 16)
                a = !0;
            else if ((c & 17) == 17) {
                if (e(o)) {
                    let e = o.subs;
                    e.nextSub !== void 0 && s(e),
                    a = !0
                }
            } else if ((c & 33) == 33) {
                (t.nextSub !== void 0 || t.prevSub !== void 0) && (r = {
                    value: t,
                    prev: r
                }),
                t = o.deps,
                n = o,
                ++i;
                continue
            }
            if (!a) {
                let e = t.nextDep;
                if (e !== void 0) {
                    t = e;
                    continue
                }
            }
            for (; i--; ) {
                let i = n.subs
                  , o = i.nextSub !== void 0;
                if (o ? (t = r.value,
                r = r.prev) : t = i,
                a) {
                    if (e(n)) {
                        o && s(i),
                        n = t.sub;
                        continue
                    }
                    a = !1
                } else
                    n.flags &= -33;
                n = t.sub;
                let c = t.nextDep;
                if (c !== void 0) {
                    t = c;
                    continue top
                }
            }
            return a
        } while (!0)
    }
    function s(e) {
        do {
            let n = e.sub
              , r = n.flags;
            (r & 48) == 32 && (n.flags = r | 16,
            (r & 6) == 2 && t(n))
        } while ((e = e.nextSub) !== void 0)
    }
    function c(e, t) {
        let n = t.depsTail;
        for (; n !== void 0; ) {
            if (n === e)
                return !0;
            n = n.prevDep
        }
        return !1
    }
}
function fc(e, t, n) {
    let r = typeof e == `object`
      , i = r ? e : void 0;
    return {
        next: (r ? e.next : e)?.bind(i),
        error: (r ? e.error : t)?.bind(i),
        complete: (r ? e.complete : n)?.bind(i)
    }
}
var pc = [], mc = 0, {link: hc, unlink: gc, propagate: _c, checkDirty: vc, shallowPropagate: yc} = dc({
    update(e) {
        return e._update()
    },
    notify(e) {
        pc[xc++] = e,
        e.flags &= -3
    },
    unwatched(e) {
        e.depsTail !== void 0 && (e.depsTail = void 0,
        e.flags = 17,
        Tc(e))
    }
}), bc = 0, xc = 0, Sc, Cc = 0;
function wc(e) {
    try {
        ++Cc,
        e()
    } finally {
        --Cc || Ec()
    }
}
function Tc(e) {
    let t = e.depsTail
      , n = t === void 0 ? e.deps : t.nextDep;
    for (; n !== void 0; )
        n = gc(n, e)
}
function Ec() {
    if (!(Cc > 0)) {
        for (; bc < xc; ) {
            let e = pc[bc];
            pc[bc++] = void 0,
            e.notify()
        }
        bc = 0,
        xc = 0
    }
}
function Dc(e, t) {
    let n = typeof e == `function`
      , r = e
      , i = {
        _snapshot: n ? void 0 : e,
        subs: void 0,
        subsTail: void 0,
        deps: void 0,
        depsTail: void 0,
        flags: +!n,
        get() {
            return Sc !== void 0 && hc(i, Sc, mc),
            i._snapshot
        },
        subscribe(e) {
            let t = fc(e)
              , n = {
                current: !1
            }
              , r = Oc( () => {
                i.get(),
                n.current ? (Sc = void 0,
                t.next?.(i._snapshot)) : n.current = !0
            }
            );
            return {
                unsubscribe: () => {
                    r.stop()
                }
            }
        },
        _update(e) {
            let a = Sc
              , o = t?.compare ?? Object.is;
            if (n)
                Sc = i,
                ++mc,
                i.depsTail = void 0;
            else if (e === void 0)
                return !1;
            n && (i.flags = 5);
            try {
                let t = i._snapshot
                  , a = typeof e == `function` ? e(t) : e === void 0 && n ? r(t) : e;
                return t === void 0 || !o(t, a) ? (i._snapshot = a,
                !0) : !1
            } finally {
                Sc = a,
                n && (i.flags &= -5),
                Tc(i)
            }
        }
    };
    return n ? (i.flags = 17,
    i.get = function() {
        let e = i.flags;
        if (e & 16 || e & 32 && vc(i.deps, i)) {
            if (i._update()) {
                let e = i.subs;
                e !== void 0 && yc(e)
            }
        } else
            e & 32 && (i.flags = e & -33);
        return Sc !== void 0 && hc(i, Sc, mc),
        i._snapshot
    }
    ) : i.set = function(e) {
        if (i._update(e)) {
            let e = i.subs;
            e !== void 0 && (_c(e),
            yc(e),
            Ec())
        }
    }
    ,
    i
}
function Oc(e) {
    let t = () => {
        let t = Sc;
        Sc = n,
        ++mc,
        n.depsTail = void 0,
        n.flags = 6;
        try {
            return e()
        } finally {
            Sc = t,
            n.flags &= -5,
            Tc(n)
        }
    }
      , n = {
        deps: void 0,
        depsTail: void 0,
        subs: void 0,
        subsTail: void 0,
        flags: 6,
        notify() {
            let e = this.flags;
            e & 16 || e & 32 && vc(this.deps, this) ? t() : this.flags = 2
        },
        stop() {
            this.flags = 0,
            this.depsTail = void 0,
            Tc(this)
        }
    };
    return t(),
    n
}
var kc = o((e => {
    var t = u();
    function n(e, t) {
        return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t
    }
    var r = typeof Object.is == `function` ? Object.is : n
      , i = t.useState
      , a = t.useEffect
      , o = t.useLayoutEffect
      , s = t.useDebugValue;
    function c(e, t) {
        var n = t()
          , r = i({
            inst: {
                value: n,
                getSnapshot: t
            }
        })
          , c = r[0].inst
          , u = r[1];
        return o(function() {
            c.value = n,
            c.getSnapshot = t,
            l(c) && u({
                inst: c
            })
        }, [e, n, t]),
        a(function() {
            return l(c) && u({
                inst: c
            }),
            e(function() {
                l(c) && u({
                    inst: c
                })
            })
        }, [e]),
        s(n),
        n
    }
    function l(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !r(e, n)
        } catch {
            return !0
        }
    }
    function d(e, t) {
        return t()
    }
    var f = typeof window > `u` || window.document === void 0 || window.document.createElement === void 0 ? d : c;
    e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore
}
))
  , Ac = o(( (e, t) => {
    t.exports = kc()
}
))
  , jc = o((e => {
    var t = u()
      , n = Ac();
    function r(e, t) {
        return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t
    }
    var i = typeof Object.is == `function` ? Object.is : r
      , a = n.useSyncExternalStore
      , o = t.useRef
      , s = t.useEffect
      , c = t.useMemo
      , l = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function(e, t, n, r, u) {
        var d = o(null);
        if (d.current === null) {
            var f = {
                hasValue: !1,
                value: null
            };
            d.current = f
        } else
            f = d.current;
        d = c(function() {
            function e(e) {
                if (!a) {
                    if (a = !0,
                    o = e,
                    e = r(e),
                    u !== void 0 && f.hasValue) {
                        var t = f.value;
                        if (u(t, e))
                            return s = t
                    }
                    return s = e
                }
                if (t = s,
                i(o, e))
                    return t;
                var n = r(e);
                return u !== void 0 && u(t, n) ? (o = e,
                t) : (o = e,
                s = n)
            }
            var a = !1, o, s, c = n === void 0 ? null : n;
            return [function() {
                return e(t())
            }
            , c === null ? void 0 : function() {
                return e(c())
            }
            ]
        }, [t, n, r, u]);
        var p = a(e, d[0], d[1]);
        return s(function() {
            f.hasValue = !0,
            f.value = p
        }, [p]),
        l(p),
        p
    }
}
))
  , Mc = o(( (e, t) => {
    t.exports = jc()
}
))();
function Nc(e, t) {
    return e === t
}
function Pc(e, t=e => e, n) {
    let r = n?.compare ?? Nc
      , i = (0,
    F.useCallback)(t => {
        let {unsubscribe: n} = e.subscribe(t);
        return n
    }
    , [e])
      , a = (0,
    F.useCallback)( () => e.get(), [e]);
    return (0,
    Mc.useSyncExternalStoreWithSelector)(i, a, a, t, r)
}
var Fc = {};
function Ic(e, t) {
    let n = F.useRef();
    return r => {
        let i = e?.select ? e.select(r) : r;
        return e?.structuralSharing ?? t.options.defaultStructuralSharing ? n.current = ae(n.current, i) : i
    }
}
function Lc(e) {
    let t = cc()
      , n = F.useContext(e.from ? uc : lc)
      , r = e.from ?? n
      , i = t.stores.getMatchStore(r)
      , a = Ic(e, t)
      , o = Pc(i, e => e ? a(e) : Fc);
    if (o !== Fc)
        return o;
    (e.shouldThrow ?? !0) && ke()
}
function Rc(e) {
    return Lc({
        from: e.from,
        strict: e.strict,
        structuralSharing: e.structuralSharing,
        select: t => e.select ? e.select(t.loaderData) : t.loaderData
    })
}
function zc(e) {
    let {select: t, ...n} = e;
    return Lc({
        ...n,
        select: e => t ? t(e.loaderDeps) : e.loaderDeps
    })
}
function Bc(e) {
    return Lc({
        from: e.from,
        shouldThrow: e.shouldThrow,
        structuralSharing: e.structuralSharing,
        strict: e.strict,
        select: t => {
            let n = e.strict === !1 ? t.params : t._strictParams;
            return e.select ? e.select(n) : n
        }
    })
}
function Vc(e) {
    return Lc({
        from: e.from,
        strict: e.strict,
        shouldThrow: e.shouldThrow,
        structuralSharing: e.structuralSharing,
        select: t => e.select ? e.select(t.search) : t.search
    })
}
function Hc(e) {
    let t = cc();
    return F.useCallback(n => t.navigate({
        ...n,
        from: n.from ?? e?.from
    }), [e?.from, t])
}
function Uc(e) {
    return Lc({
        ...e,
        select: t => e.select ? e.select(t.context) : t.context
    })
}
function Wc(...e) {
    let t = F.useRef(e)
      , n = t.current;
    return e.forEach( (e, t) => {
        se(n[t], e, !1, !0) || (n[t] = e)
    }
    ),
    t.current
}
function Gc(e, t) {
    e.preloadRoute(t).catch(e => {
        console.warn(e),
        console.warn(xs)
    }
    )
}
var Kc = {
    compare: (e, t) => e[0] === t[0] && e[1] === t[1]
};
function qc(e, t) {
    let n = typeof e == `string` && de(e);
    if (n)
        return t.has(n) ? e : null
}
function Jc(e, t, n, r, i) {
    let a = Se(e.pathname, r)
      , o = Se(t.pathname, r);
    return (n?.exact ? a !== o : !(a.startsWith(o) && (a.length === o.length || a[o.length] === `/`))) || (n?.includeSearch ?? !0) && !se(e.search, t.search, !n?.exact, n?.explicitUndefined) ? !1 : !n?.includeHash || i && e.hash === t.hash
}
function Yc(e, t, n) {
    let r = cc()
      , i = F.useRef(null)
      , a = F.useCallback(e => {
        if (i.current = e,
        typeof t == `function`)
            return t(e);
        t && (t.current = e)
    }
    , [t])
      , {activeOptions: o, to: s, preload: c, preloadDelay: l, hashScrollIntoView: u, replace: d, startTransition: f, resetScroll: p, viewTransition: m, ignoreBlocker: h, disabled: g, target: _, onClick: v, onBlur: y, onFocus: b, onMouseEnter: x, onMouseLeave: S, onTouchStart: C} = e
      , w = ac(!!o?.includeHash)
      , [T,ee,te] = Wc(e.search, e.params, o)
      , [E,ne] = F.useMemo( () => [e, {
        ...e
    }], [r, e.from, e._fromLocation, e.hash, e.to, T, ee, e.state, e.mask, e.unsafeRelative])
      , re = F.useMemo( () => {
        let e = qc(s, r.protocolAllowlist);
        if (e !== void 0) {
            let t = [e ?? void 0];
            return () => t
        }
        let t, n;
        return e => {
            E._fromLocation || (ne._fromLocation = e);
            let i = r.buildLocation(ne)
              , a = il(i, r, g);
            return (!t || t[0] !== a) && (t = [a, !(g || a && !de(a)) && void 0],
            n = [a, !0]),
            t[1] !== void 0 && Jc(e, i, te, r.basepath, w) ? n : t
        }
    }
    , [te, g, w, E, ne, r, s])
      , [ie,ae] = Pc(r.stores.location, re, Kc)
      , oe = ae === void 0 && ie
      , se = g || ie === void 0
      , ce = F.useRef(!1)
      , D = e.reloadDocument || oe || se ? !1 : c ?? r.options.defaultPreload
      , O = l ?? r.options.defaultPreloadDelay ?? 0
      , le = F.useCallback(e => {
        let t = e?.isIntersecting;
        if (!(t ?? D === `intent`)) {
            t === !1 && nl(i);
            return
        }
        if (!O) {
            Gc(r, E);
            return
        }
        tl.has(i) || tl.set(i, setTimeout( () => {
            tl.delete(i),
            Gc(r, E)
        }
        , O))
    }
    , [r, E, i, D, O]);
    F.useEffect( () => {
        if (!D)
            return;
        D === `render` && !ce.current && (ce.current = !0,
        Gc(r, E));
        let e = !0, t;
        return D === `viewport` && i.current && typeof IntersectionObserver == `function` && (t = new IntersectionObserver(t => {
            e && le(t.pop())
        }
        ,{
            rootMargin: `100px`
        }),
        t.observe(i.current)),
        () => {
            e = !1,
            t?.disconnect(),
            nl(i)
        }
    }
    , [r, E, D, le, i]);
    let ue = $c(e, n);
    if (ue.ref = t ? a : i,
    oe)
        return ue.href = oe,
        ue;
    let fe = e => {
        let t = _ ?? e.currentTarget.getAttribute(`target`);
        !se && !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (!t || t === `_self`) && e.button === 0 && (e.preventDefault(),
        r.navigate({
            ...E,
            replace: d,
            resetScroll: p,
            hashScrollIntoView: u,
            startTransition: f,
            viewTransition: m,
            ignoreBlocker: h
        }))
    }
      , k = () => {
        D === `intent` && Gc(r, E)
    }
      , A = () => {
        D === `intent` && nl(i)
    }
    ;
    return ue.onClick = rl(v, fe),
    ue.onBlur = rl(y, A),
    ue.onFocus = rl(b, le),
    ue.onMouseEnter = rl(x, le),
    ue.onMouseLeave = rl(S, A),
    ue.onTouchStart = rl(C, k),
    el(ue, e, ae, ie, se, n)
}
var Xc = {}
  , Zc = {
    className: `active`
}
  , Qc = new Set([`to`, `params`, `search`, `hash`, `state`, `mask`, `from`, `unsafeRelative`, `_fromLocation`, `reloadDocument`, `preload`, `preloadDelay`, `preloadIntentProximity`, `hashScrollIntoView`, `replace`, `startTransition`, `resetScroll`, `viewTransition`, `ignoreBlocker`, `activeProps`, `inactiveProps`, `activeOptions`, `_asChild`]);
function $c(e, t) {
    let n = {};
    for (let r in e)
        Qc.has(r) || r === `type` && t !== void 0 || r === `disabled` && t === `a` || (n[r] = e[r]);
    return n
}
function el(e, t, n, r, i, a) {
    let {activeProps: o, inactiveProps: s, className: c, style: l, target: u} = t
      , d = te(n ? o : s, {}) ?? (n ? Zc : Xc);
    Object.assign(e, d),
    e.href = r,
    a !== `a` && (e.disabled = i),
    e.target = u;
    let f = d.style;
    (l || f) && (e.style = l && f ? {
        ...l,
        ...f
    } : l || f);
    let p = d.className;
    return (c || p) && (e.className = c ? p ? `${c} ${p}` : c : p),
    i && (e.role = `link`,
    e[`aria-disabled`] = !0),
    n && (e[`data-status`] = `active`,
    e[`aria-current`] = `page`),
    e
}
var tl = new WeakMap
  , nl = e => {
    clearTimeout(tl.get(e)),
    tl.delete(e)
}
  , rl = (e, t) => e ? n => n.defaultPrevented || (e(n),
n.defaultPrevented || t(n)) : t;
function il(e, t, n) {
    if (n)
        return;
    let r = e.maskedLocation ?? e
      , i = r.external ? r.publicHref : t.history.createHref(r.publicHref) || `/`;
    if (!((r.external || i !== r.publicHref) && k(i, t.protocolAllowlist)))
        return i
}
var al = F.memo(F.forwardRef( (e, t) => {
    let n = e._asChild || `a`
      , r = Yc(e, t, n)
      , i = typeof e.children == `function` ? e.children({
        isActive: r[`data-status`] === `active`
    }) : e.children;
    return F.createElement(n, r, i)
}
), ol);
function ol(e, t) {
    let n = 0;
    for (let r in t)
        if (n++,
        e[r] !== t[r] && (!Qc.has(r) || !se(e[r], t[r], !1, !0)))
            return !1;
    for (let t in e)
        n--;
    return n === 0
}
var sl = class extends As {
    constructor(e) {
        super(e),
        this.useMatch = e => Lc({
            ...e,
            from: this.id
        }),
        this.useRouteContext = e => Uc({
            ...e,
            from: this.id
        }),
        this.useSearch = e => Vc({
            ...e,
            from: this.id
        }),
        this.useParams = e => Bc({
            ...e,
            from: this.id
        }),
        this.useLoaderDeps = e => zc({
            ...e,
            from: this.id
        }),
        this.useLoaderData = e => Rc({
            ...e,
            from: this.id
        }),
        this.useNavigate = () => Hc({
            from: this.fullPath
        }),
        this.Link = F.forwardRef( (e, t) => (0,
        I.jsx)(al, {
            ref: t,
            from: this.fullPath,
            ...e
        }))
    }
}
;
function cl(e) {
    return new sl(e)
}
function ll() {
    return e => dl(e)
}
var ul = class extends js {
    constructor(e) {
        super(e),
        this.useMatch = e => Lc({
            ...e,
            from: this.id
        }),
        this.useRouteContext = e => Uc({
            ...e,
            from: this.id
        }),
        this.useSearch = e => Vc({
            ...e,
            from: this.id
        }),
        this.useParams = e => Bc({
            ...e,
            from: this.id
        }),
        this.useLoaderDeps = e => zc({
            ...e,
            from: this.id
        }),
        this.useLoaderData = e => Rc({
            ...e,
            from: this.id
        }),
        this.useNavigate = () => Hc({
            from: this.fullPath
        }),
        this.Link = F.forwardRef( (e, t) => (0,
        I.jsx)(al, {
            ref: t,
            from: this.fullPath,
            ...e
        }))
    }
}
;
function dl(e) {
    return new ul(e)
}
function fl(e) {
    return e => {
        let t = cl(e);
        return t.isRoot = !1,
        t
    }
}
function pl(e, t) {
    let n, r, i, a = () => (n ||= (i = void 0,
    e().then(e => {
        n = void 0,
        o.preload = void 0,
        r = e[t ?? `default`]
    }
    ).catch(e => {
        n = void 0,
        i = e
    }
    )),
    n), o = function(e) {
        if (i) {
            if (ce(i) && typeof sessionStorage < `u`) {
                let e = `tanstack_router_reload:${i.message}`;
                if (!sessionStorage.getItem(e))
                    throw sessionStorage.setItem(e, `1`),
                    window.location.reload(),
                    new Promise( () => {}
                    )
            }
            throw i
        }
        if (!r)
            if (qs)
                qs(a());
            else
                throw a();
        return F.createElement(r, e)
    };
    return o.preload = a,
    o
}
function ml(e) {
    let t = cc()
      , n = `not-found-${Pc(t.stores.location, e => e.pathname)}-${Pc(t.stores.status)}`;
    return (0,
    I.jsx)(ec, {
        getResetKey: () => n,
        onCatch: (t, n) => {
            if (x(t))
                e.onCatch?.(t, n);
            else
                throw t
        }
        ,
        errorComponent: ({error: t}) => {
            if (x(t))
                return e.fallback?.(t);
            throw t
        }
        ,
        children: e.children
    })
}
function hl() {
    return (0,
    I.jsx)(`p`, {
        children: `Not Found`
    })
}
function gl(e, t, n) {
    return t.options.notFoundComponent ? (0,
    I.jsx)(t.options.notFoundComponent, {
        ...n
    }) : e.options.defaultNotFoundComponent ? (0,
    I.jsx)(e.options.defaultNotFoundComponent, {
        ...n
    }) : (0,
    I.jsx)(hl, {})
}
function _l(e, t) {
    let n = t?.options.pendingComponent ?? e.options.defaultPendingComponent;
    return n ? (0,
    I.jsx)(n, {}) : null
}
var vl = (e, t) => e[0] === t[0] && e[1] === t[1]
  , yl = (e, t, n) => !t.isRoot || t.options.shellComponent || t.options.wrapInSuspense || n === !1 || n === `data-only` || !e.ssr
  , bl = F.memo(function({routeId: e}) {
    let t = cc();
    return (0,
    I.jsx)(xl, {
        router: t,
        match: Pc(t.stores.getMatchStore(e))
    })
});
function xl({router: e, match: t}) {
    let n = e.routesById[t.routeId]
      , r = _l(e, n)
      , i = n.options.errorComponent ?? e.options.defaultErrorComponent
      , a = n.options.onCatch ?? e.options.defaultOnCatch
      , o = n.isRoot ? n.options.notFoundComponent ?? e.options.notFoundRoute?.options.component : n.options.notFoundComponent
      , s = t.ssr === !1 || t.ssr === `data-only`
      , c = yl(e, n, t.ssr) && (n.options.wrapInSuspense ?? r ?? (n.options.errorComponent?.preload || s))
      , l = (0,
    I.jsx)(Sl, {
        match: t
    });
    s && (l = (0,
    I.jsx)(ic, {
        fallback: r,
        children: l
    })),
    o && (l = (0,
    I.jsx)(ml, {
        fallback: e => {
            if (e.routeId ??= t.routeId,
            e.routeId !== t.routeId)
                throw e;
            return F.createElement(o, e)
        }
        ,
        children: l
    })),
    i && (l = (0,
    I.jsx)(ec, {
        getResetKey: () => t,
        errorComponent: i,
        onCatch: (e, n) => {
            if (x(e))
                throw e.routeId ??= t.routeId,
                e;
            a?.(e, n)
        }
        ,
        children: l
    })),
    c && (l = (0,
    I.jsx)(F.Suspense, {
        fallback: r,
        children: l
    }));
    let u = n.isRoot ? n.options.shellComponent : void 0;
    return (0,
    I.jsx)(lc.Provider, {
        value: t.routeId,
        children: u ? (0,
        I.jsxs)(u, {
            children: [l, null]
        }) : (0,
        I.jsxs)(I.Fragment, {
            children: [l, null]
        })
    })
}
var Sl = F.memo(function({match: e}) {
    let t = cc()
      , n = e.routeId
      , r = t.routesById[n]
      , i = F.useMemo( () => {
        let i = (r.options.remountDeps ?? t.options.defaultRemountDeps)?.({
            routeId: n,
            loaderDeps: e.loaderDeps,
            params: e._strictParams,
            search: e._strictSearch
        });
        return i ? JSON.stringify(i) : void 0
    }
    , [n, e.loaderDeps, e._strictParams, e._strictSearch, r.options.remountDeps, t.options.defaultRemountDeps])
      , a = F.useMemo( () => {
        let e = r.options.component ?? t.options.defaultComponent;
        return e ? (0,
        I.jsx)(e, {}, i) : (0,
        I.jsx)(Cl, {})
    }
    , [i, r.options.component, t.options.defaultComponent]);
    if (e.status === `pending`) {
        if (t.ssr && !yl(t, r, e.ssr))
            return a;
        if (t._tx)
            throw t._tx[5];
        return _l(t, r)
    }
    if (e.status === `notFound`)
        return gl(t, r, e.error);
    if (e.status === `error`)
        throw e.error;
    return a
})
  , Cl = F.memo(function() {
    let e = cc(), t = F.useContext(lc), n, r, i;
    {
        let a = e.stores.getMatchStore(t);
        [n,r] = Pc(a, e => [!!e._notFound, e.error], {
            compare: vl
        }),
        i = Pc(e.stores.ids, e => e[e.indexOf(t) + 1])
    }
    if (n)
        return gl(e, e.routesById[t], r);
    if (!i)
        return null;
    let a = (0,
    I.jsx)(bl, {
        routeId: i
    });
    return t === `__root__` ? (0,
    I.jsx)(F.Suspense, {
        fallback: _l(e),
        children: a
    }) : a
});
function wl(e, t) {
    let n = e[1];
    e.length = 0,
    n?.(t)
}
function Tl({t: e}) {
    let t = cc()
      , n = t._rendered ??= [];
    return t.startTransition = (r, i) => new Promise(a => {
        wl(n, !1),
        n.push(i, a),
        e(t),
        F.startTransition(r)
    }
    ),
    Js( () => {
        let e = t.history.subscribe(t.load);
        t.updateLatestLocation();
        let r = t.latestLocation
          , i = t.buildLocation({
            to: r.pathname,
            search: !0,
            params: !0,
            hash: !0,
            state: !0,
            _includeValidateSearch: !0
        });
        if (be(r.publicHref) !== be(i.publicHref))
            return t.commitLocation({
                ...i,
                replace: !0,
                ignoreBlocker: !0
            }),
            e;
        let a = t.stores.resolvedLocation.get();
        return a?.href === r.href && a.state.__TSR_key === r.state.__TSR_key ? n.push(t.stores.matches.get(), e => {
            e && t.emit({
                type: `onRendered`,
                ...Rt(a, a)
            })
        }
        ) : t._tx || t.load({
            sync: !0
        }).catch(console.error),
        e
    }
    , [t, t.history]),
    null
}
function El() {
    let e = cc()
      , t = e.routesById[vt]
      , n = _l(e, t)
      , r = (0,
    I.jsxs)(I.Fragment, {
        children: [(0,
        I.jsx)(Tl, {
            t: F.useState()[1]
        }), e.ssr ? (0,
        I.jsx)(Dl, {}) : (0,
        I.jsx)(F.Suspense, {
            fallback: n,
            children: (0,
            I.jsx)(Dl, {})
        })]
    });
    return e.options.InnerWrap ? (0,
    I.jsx)(e.options.InnerWrap, {
        children: r
    }) : r
}
function Dl() {
    let e = cc()
      , t = e._rendered
      , n = Pc(e.stores.matches, e => t[0] ?? e)
      , r = n[0]
      , i = r?.routeId;
    Js( () => {
        t[0] === n && wl(t, !0)
    }
    , [t, n]);
    let a = i ? (0,
    I.jsx)(bl, {
        routeId: i
    }) : null;
    return e.options.disableGlobalCatchBoundary ? a : (0,
    I.jsx)(ec, {
        getResetKey: () => r,
        onCatch: void 0,
        children: a
    })
}
var Ol = e => ({
    createMutableStore: Dc,
    createReadonlyStore: Dc,
    batch: wc
})
  , kl = e => new Al(e)
  , Al = class extends Ht {
    constructor(e) {
        super(e, Ol)
    }
}
;
function jl({router: e, children: t, ...n}) {
    ne(n) && e.update({
        ...e.options,
        ...n,
        context: {
            ...e.options.context,
            ...n.context
        }
    });
    let r = (0,
    I.jsx)(sc.Provider, {
        value: e,
        children: t
    });
    return e.options.Wrap ? (0,
    I.jsx)(e.options.Wrap, {
        children: r
    }) : r
}
function Ml({router: e, ...t}) {
    return (0,
    I.jsx)(jl, {
        router: e,
        ...t,
        children: (0,
        I.jsx)(El, {})
    })
}
function Nl(e, t) {
    if (t)
        for (let[n,r] of Object.entries(t))
            n !== `suppressHydrationWarning` && r !== void 0 && r !== !1 && e.setAttribute(n, typeof r == `boolean` ? `` : String(r))
}
function Pl(e) {
    let {attrs: t, children: n, nonce: r, preventScriptHoist: i} = e
      , a = F.useMemo( () => n === void 0 ? void 0 : {
        __html: n
    }, [n]);
    switch (e.tag) {
    case `title`:
        return (0,
        I.jsx)(`title`, {
            ...t,
            suppressHydrationWarning: !0,
            children: n
        });
    case `meta`:
        return (0,
        I.jsx)(`meta`, {
            ...t,
            suppressHydrationWarning: !0
        });
    case `link`:
        return (0,
        I.jsx)(`link`, {
            ...t,
            precedence: t?.precedence ?? (t?.rel === `stylesheet` ? `default` : void 0),
            nonce: r,
            suppressHydrationWarning: !0
        });
    case `style`:
        return e.inlineCss,
        (0,
        I.jsx)(`style`, {
            ...t,
            dangerouslySetInnerHTML: a,
            nonce: r
        });
    case `script`:
        return (0,
        I.jsx)(Fl, {
            attrs: t,
            preventScriptHoist: i,
            children: n
        });
    default:
        return null
    }
}
function Fl({attrs: e, children: t, preventScriptHoist: n}) {
    cc();
    let r = ac()
      , i = F.useMemo( () => t === void 0 ? void 0 : {
        __html: t
    }, [t])
      , a = typeof e?.type == `string` && e.type !== `` && e.type !== `text/javascript` && e.type !== `module`;
    if (F.useEffect( () => {
        if (!a) {
            if (e?.src) {
                let t = document.createElement(`a`);
                t.href = e.src;
                let n = t.href;
                for (let e of document.scripts)
                    if (e.src === n)
                        return;
                let r = document.createElement(`script`);
                return Nl(r, e),
                document.head.appendChild(r),
                () => r.remove()
            }
            if (typeof t == `string`) {
                let n = typeof e?.type == `string` ? e.type : `text/javascript`
                  , r = typeof e?.nonce == `string` ? e.nonce : void 0;
                for (let e of document.scripts) {
                    if (e.hasAttribute(`src`))
                        continue;
                    let i = e.getAttribute(`type`) ?? `text/javascript`
                      , a = e.getAttribute(`nonce`) ?? void 0;
                    if (e.textContent === t && i === n && a === r)
                        return
                }
                let i = document.createElement(`script`);
                return i.textContent = t,
                Nl(i, e),
                document.head.appendChild(i),
                () => i.remove()
            }
        }
    }
    , [e, t, a]),
    a && typeof t == `string`)
        return (0,
        I.jsx)(`script`, {
            ...e,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: i
        });
    if (!r) {
        if (e?.src)
            return (0,
            I.jsx)(`script`, {
                ...e,
                suppressHydrationWarning: !0
            });
        if (typeof t == `string`)
            return (0,
            I.jsx)(`script`, {
                ...e,
                dangerouslySetInnerHTML: i,
                suppressHydrationWarning: !0
            })
    }
    return null
}
function Il(e, t, n, r) {
    n = an(n);
    let i = n.map(e => e.meta).filter(e => e !== void 0), a = [], o = {}, s;
    for (let e = i.length - 1; e >= 0; e--) {
        let n = i[e];
        for (let e = n.length - 1; e >= 0; e--) {
            let r = n[e];
            if (r)
                if (r.title)
                    s ||= {
                        tag: `title`,
                        children: r.title
                    };
                else if (`script:ld+json` in r)
                    try {
                        let e = JSON.stringify(r[`script:ld+json`]);
                        a.push({
                            tag: `script`,
                            attrs: {
                                type: `application/ld+json`
                            },
                            children: me(e)
                        })
                    } catch {}
                else {
                    let e = r.name ?? r.property;
                    if (e) {
                        if (o[e])
                            continue;
                        o[e] = !0
                    }
                    a.push({
                        tag: `meta`,
                        attrs: {
                            ...r,
                            nonce: t
                        }
                    })
                }
        }
    }
    s && a.push(s),
    t && a.push({
        tag: `meta`,
        attrs: {
            property: `csp-nonce`,
            content: t
        }
    }),
    a.reverse();
    let c = n.flatMap(e => e.links ?? []).filter(e => e !== void 0).map(e => ({
        tag: `link`,
        attrs: {
            ...e,
            nonce: t
        }
    }))
      , l = e.ssr?.manifest
      , u = [];
    l && (n.forEach(e => {
        (l.routes[e.routeId]?.css)?.forEach(e => {
            let n = Ds(e);
            u.push({
                tag: `link`,
                attrs: {
                    rel: `stylesheet`,
                    ...n,
                    crossOrigin: Ss(r, `stylesheet`) ?? n.crossOrigin,
                    suppressHydrationWarning: !0,
                    nonce: t
                }
            })
        }
        )
    }
    ),
    l.inlineStyle && u.push({
        tag: `style`,
        attrs: {
            ...l.inlineStyle.attrs,
            nonce: t
        },
        children: l.inlineStyle.children,
        inlineCss: !0
    }));
    let d = [];
    l && n.forEach(e => {
        l.routes[e.routeId]?.preloads?.forEach(e => {
            d.push({
                tag: `link`,
                attrs: {
                    ...ws(l, e, r),
                    nonce: t
                }
            })
        }
        )
    }
    );
    let f = n.flatMap(e => e.styles ?? []).filter(e => e !== void 0).map( ({children: e, ...n}) => ({
        tag: `style`,
        attrs: {
            ...n,
            nonce: t
        },
        children: e
    }))
      , p = n.flatMap(e => e.headScripts ?? []).filter(e => e !== void 0).map( ({children: e, ...n}) => ({
        tag: `script`,
        attrs: {
            ...n,
            nonce: t
        },
        children: e
    }))
      , m = [];
    return Es(m, a),
    m.push(...d),
    Es(m, c),
    m.push(...u),
    Es(m, f),
    Es(m, p),
    m
}
var Ll = e => {
    let t = cc()
      , n = t.options.ssr?.nonce
      , r = F.useCallback(r => Il(t, n, r, e), [e, n, t]);
    return Pc(t.stores.matches, r, {
        compare: se
    })
}
;
function Rl(e) {
    let t = Ll(e.assetCrossOrigin)
      , n = cc().options.ssr?.nonce;
    return (0,
    I.jsx)(I.Fragment, {
        children: t.map(e => (0,
        F.createElement)(Pl, {
            ...e,
            key: `tsr-meta-${JSON.stringify(e)}`,
            nonce: n
        }))
    })
}
var zl = {
    suppressHydrationWarning: !0
}
  , Bl = () => {
    let e = cc()
      , t = e.options.ssr?.nonce
      , n = n => {
        let r = Os(n, e.ssr?.manifest, t, zl);
        for (let e of r[1])
            if (typeof e.attrs?.src == `string`) {
                let t = e;
                t.preventScriptHoist = !0
            }
        return r
    }
    ;
    return Vl(Pc(e.stores.matches, e => ks(n(e)), {
        compare: se
    }))
}
;
function Vl(e) {
    return (0,
    I.jsx)(I.Fragment, {
        children: e.map( (e, t) => (0,
        F.createElement)(Pl, {
            ...e,
            key: `tsr-scripts-${e.tag}-${t}`
        }))
    })
}
var Hl = (e, t) => {
    let n = {
        type: `request`,
        ...t || e
    }
      , r = e => Hl({}, Object.assign(n, {
        validator: e,
        inputValidator: e
    }));
    return {
        options: n,
        middleware: e => Hl({}, Object.assign(n, {
            middleware: e
        })),
        validator: r,
        inputValidator: r,
        client: e => Hl({}, Object.assign(n, {
            client: e
        })),
        server: e => Hl({}, Object.assign(n, {
            server: e
        }))
    }
}
;
function Ul(e, t) {
    for (let n = 0, r = t.length; n < r; n++) {
        let r = t[n];
        e.has(r) || (e.add(r),
        r.extends && Ul(e, r.extends))
    }
}
var Wl = e => ({
    getOptions: async () => {
        let t = await e();
        if (t.serializationAdapters) {
            let e = new Set;
            Ul(e, t.serializationAdapters),
            t.serializationAdapters = Array.from(e)
        }
        return t
    }
    ,
    createMiddleware: Hl
})
  , Gl = Hl()
  , Kl = void 0
  , ql = Wl( () => ({
    requestMiddleware: [Gl, Kl]
}))
  , L = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Jl = new class extends L {
    #e;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = e => {
            if (typeof window < `u` && window.addEventListener) {
                let t = () => e();
                return window.addEventListener(`visibilitychange`, t, !1),
                () => {
                    window.removeEventListener(`visibilitychange`, t)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(e) {
        this.#n = e,
        this.#t?.(),
        this.#t = e(e => {
            typeof e == `boolean` ? this.setFocused(e) : this.onFocus()
        }
        )
    }
    setFocused(e) {
        this.#e !== e && (this.#e = e,
        this.onFocus())
    }
    onFocus() {
        let e = this.isFocused();
        this.listeners.forEach(t => {
            t(e)
        }
        )
    }
    isFocused() {
        return typeof this.#e == `boolean` ? this.#e : globalThis.document?.visibilityState !== `hidden`
    }
}
  , R = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: e => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: e => clearInterval(e)
}
  , z = new class {
    #e = R;
    setTimeoutProvider(e) {
        this.#e = e
    }
    setTimeout(e, t) {
        return this.#e.setTimeout(e, t)
    }
    clearTimeout(e) {
        this.#e.clearTimeout(e)
    }
    setInterval(e, t) {
        return this.#e.setInterval(e, t)
    }
    clearInterval(e) {
        this.#e.clearInterval(e)
    }
}
;
function Yl(e) {
    setTimeout(e, 0)
}
var Xl = typeof window > `u` || `Deno` in globalThis;
function Zl() {}
function Ql(e, t) {
    return typeof e == `function` ? e(t) : e
}
function $l(e) {
    return typeof e == `number` && e >= 0 && e !== 1 / 0
}
function eu(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function tu(e, t) {
    return typeof e == `function` ? e(t) : e
}
function nu(e, t) {
    return typeof e == `function` ? e(t) : e
}
function ru(e, t) {
    let {type: n=`all`, exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s} = e;
    if (o) {
        if (r) {
            if (t.queryHash !== au(o, t.options))
                return !1
        } else if (!su(t.queryKey, o))
            return !1
    }
    if (n !== `all`) {
        let e = t.isActive();
        if (n === `active` && !e || n === `inactive` && e)
            return !1
    }
    return !(typeof s == `boolean` && t.isStale() !== s || i && i !== t.state.fetchStatus || a && !a(t))
}
function iu(e, t) {
    let {exact: n, status: r, predicate: i, mutationKey: a} = e;
    if (a) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (ou(t.options.mutationKey) !== ou(a))
                return !1
        } else if (!su(t.options.mutationKey, a))
            return !1
    }
    return !(r && t.state.status !== r || i && !i(t))
}
function au(e, t) {
    return (t?.queryKeyHashFn || ou)(e)
}
function ou(e) {
    return JSON.stringify(e, (e, t) => du(t) ? Object.keys(t).sort().reduce( (e, n) => (e[n] = t[n],
    e), {}) : t)
}
function su(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (e && t && typeof e == `object` && typeof t == `object`) {
        if (Array.isArray(e) && Array.isArray(t)) {
            for (let n = 0; n < t.length; n++)
                if (!su(e[n], t[n]))
                    return !1;
            return !0
        }
        let n = Object.keys(t);
        for (let r of n)
            if (!su(e[r], t[r]))
                return !1;
        return !0
    }
    return !1
}
var cu = Object.prototype.hasOwnProperty;
function lu(e, t, n=0) {
    if (e === t)
        return e;
    if (n > 500)
        return t;
    let r = uu(e) && uu(t);
    if (!r && !(du(e) && du(t)))
        return t;
    let i = (r ? e : Object.keys(e)).length
      , a = r ? t : Object.keys(t)
      , o = a.length
      , s = r ? Array(o) : {}
      , c = 0;
    for (let l = 0; l < o; l++) {
        let o = r ? l : a[l]
          , u = e[o]
          , d = t[o];
        if (u === d) {
            s[o] = u,
            (r ? l < i : cu.call(e, o)) && c++;
            continue
        }
        if (u === null || d === null || typeof u != `object` || typeof d != `object`) {
            s[o] = d;
            continue
        }
        let f = lu(u, d, n + 1);
        s[o] = f,
        f === u && c++
    }
    return i === o && c === i ? e : s
}
function uu(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function du(e) {
    if (!fu(e))
        return !1;
    let t = e.constructor;
    if (t === void 0)
        return !0;
    let n = t.prototype;
    return !(!fu(n) || !n.hasOwnProperty(`isPrototypeOf`) || Object.getPrototypeOf(e) !== Object.prototype)
}
function fu(e) {
    return Object.prototype.toString.call(e) === `[object Object]`
}
function pu(e) {
    return new Promise(t => {
        z.setTimeout(t, e)
    }
    )
}
function mu(e, t, n) {
    return typeof n.structuralSharing == `function` ? n.structuralSharing(e, t) : n.structuralSharing === !1 ? t : lu(e, t)
}
function hu(e, t, n=0) {
    let r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function gu(e, t, n=0) {
    let r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var _u = Symbol();
function vu(e, t) {
    return !e.queryFn && t?.initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === _u ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
function yu(e, t, n) {
    let r = !1, i;
    return Object.defineProperty(e, "signal", {
        enumerable: !0,
        get: () => (i ??= t(),
        r ? i : (r = !0,
        i.aborted ? n() : i.addEventListener(`abort`, n, {
            once: !0
        }),
        i))
    }),
    e
}
var bu = ( () => {
    let e = () => Xl;
    return {
        isServer() {
            return e()
        },
        setIsServer(t) {
            e = t
        }
    }
}
)();
function xu() {
    let e, t, n = new Promise( (n, r) => {
        e = n,
        t = r
    }
    );
    n.status = `pending`,
    n.catch( () => {}
    );
    function r(e) {
        Object.assign(n, e),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = t => {
        r({
            status: `fulfilled`,
            value: t
        }),
        e(t)
    }
    ,
    n.reject = e => {
        r({
            status: `rejected`,
            reason: e
        }),
        t(e)
    }
    ,
    n
}
var Su = Yl;
function Cu() {
    let e = []
      , t = 0
      , n = e => {
        e()
    }
      , r = e => {
        e()
    }
      , i = Su
      , a = r => {
        t ? e.push(r) : i( () => {
            n(r)
        }
        )
    }
      , o = () => {
        let t = e;
        e = [],
        t.length && i( () => {
            r( () => {
                t.forEach(e => {
                    n(e)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: e => {
            let n;
            t++;
            try {
                n = e()
            } finally {
                t--,
                t || o()
            }
            return n
        }
        ,
        batchCalls: e => (...t) => {
            a( () => {
                e(...t)
            }
            )
        }
        ,
        schedule: a,
        setNotifyFunction: e => {
            n = e
        }
        ,
        setBatchNotifyFunction: e => {
            r = e
        }
        ,
        setScheduler: e => {
            i = e
        }
    }
}
var wu = Cu()
  , Tu = new class extends L {
    #e = !0;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = e => {
            if (typeof window < `u` && window.addEventListener) {
                let t = () => e(!0)
                  , n = () => e(!1);
                return window.addEventListener(`online`, t, !1),
                window.addEventListener(`offline`, n, !1),
                () => {
                    window.removeEventListener(`online`, t),
                    window.removeEventListener(`offline`, n)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(e) {
        this.#n = e,
        this.#t?.(),
        this.#t = e(this.setOnline.bind(this))
    }
    setOnline(e) {
        this.#e !== e && (this.#e = e,
        this.listeners.forEach(t => {
            t(e)
        }
        ))
    }
    isOnline() {
        return this.#e
    }
}
;
function Eu(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Du(e) {
    return (e ?? `online`) !== `online` || Tu.isOnline()
}
var Ou = class extends Error {
    constructor(e) {
        super(`CancelledError`),
        this.revert = e?.revert,
        this.silent = e?.silent
    }
}
;
function ku(e) {
    let t = !1, n = 0, r, i = xu(), a = () => i.status !== `pending`, o = t => {
        if (!a()) {
            let n = new Ou(t);
            f(n),
            e.onCancel?.(n)
        }
    }
    , s = () => {
        t = !0
    }
    , c = () => {
        t = !1
    }
    , l = () => Jl.isFocused() && (e.networkMode === `always` || Tu.isOnline()) && e.canRun(), u = () => Du(e.networkMode) && e.canRun(), d = e => {
        a() || (r?.(),
        i.resolve(e))
    }
    , f = e => {
        a() || (r?.(),
        i.reject(e))
    }
    , p = () => new Promise(t => {
        r = e => {
            (a() || l()) && t(e)
        }
        ,
        e.onPause?.()
    }
    ).then( () => {
        r = void 0,
        a() || e.onContinue?.()
    }
    ), m = () => {
        if (a())
            return;
        let r, i = n === 0 ? e.initialPromise : void 0;
        try {
            r = i ?? e.fn()
        } catch (e) {
            r = Promise.reject(e)
        }
        Promise.resolve(r).then(d).catch(r => {
            if (a())
                return;
            let i = e.retry ?? (bu.isServer() ? 0 : 3)
              , o = e.retryDelay ?? Eu
              , s = typeof o == `function` ? o(n, r) : o
              , c = i === !0 || typeof i == `number` && n < i || typeof i == `function` && i(n, r);
            if (t || !c) {
                f(r);
                return
            }
            n++,
            e.onFail?.(n, r),
            pu(s).then( () => l() ? void 0 : p()).then( () => {
                t ? f(r) : m()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        status: () => i.status,
        cancel: o,
        continue: () => (r?.(),
        i),
        cancelRetry: s,
        continueRetry: c,
        canStart: u,
        start: () => (u() ? m() : p().then(m),
        i)
    }
}
var Au = class {
    #e;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        $l(this.gcTime) && (this.#e = z.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (bu.isServer() ? 1 / 0 : 3e5))
    }
    clearGcTimeout() {
        this.#e !== void 0 && (z.clearTimeout(this.#e),
        this.#e = void 0)
    }
}
;
function ju(e) {
    return {
        onFetch: (t, n) => {
            let r = t.options
              , i = t.fetchOptions?.meta?.fetchMore?.direction
              , a = t.state.data?.pages || []
              , o = t.state.data?.pageParams || []
              , s = {
                pages: [],
                pageParams: []
            }
              , c = 0
              , l = async () => {
                let n = !1
                  , l = e => {
                    yu(e, () => t.signal, () => n = !0)
                }
                  , u = vu(t.options, t.fetchOptions)
                  , d = async (e, r, i) => {
                    if (n)
                        return Promise.reject(t.signal.reason);
                    if (r == null && e.pages.length)
                        return Promise.resolve(e);
                    let a = ( () => {
                        let e = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: r,
                            direction: i ? `backward` : `forward`,
                            meta: t.options.meta
                        };
                        return l(e),
                        e
                    }
                    )()
                      , o = await u(a)
                      , {maxPages: s} = t.options
                      , c = i ? gu : hu;
                    return {
                        pages: c(e.pages, o, s),
                        pageParams: c(e.pageParams, r, s)
                    }
                }
                ;
                if (i && a.length) {
                    let e = i === `backward`
                      , t = e ? Nu : Mu
                      , n = {
                        pages: a,
                        pageParams: o
                    };
                    s = await d(n, t(r, n), e)
                } else {
                    let t = e ?? a.length;
                    do {
                        let e = c === 0 ? o[0] ?? r.initialPageParam : Mu(r, s);
                        if (c > 0 && e == null)
                            break;
                        s = await d(s, e),
                        c++
                    } while (c < t)
                }
                return s
            }
            ;
            t.fetchFn = t.options.persister ? () => t.options.persister?.(l, {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal
            }, n) : l
        }
    }
}
function Mu(e, {pages: t, pageParams: n}) {
    let r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function Nu(e, {pages: t, pageParams: n}) {
    return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0
}
var Pu = class extends Au {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e) {
        super(),
        this.#s = !1,
        this.#o = e.defaultOptions,
        this.setOptions(e.options),
        this.observers = [],
        this.#i = e.client,
        this.#r = this.#i.getQueryCache(),
        this.queryKey = e.queryKey,
        this.queryHash = e.queryHash,
        this.#t = Lu(this.options),
        this.state = e.state ?? this.#t,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get queryType() {
        return this.#e
    }
    get promise() {
        return this.#a?.promise
    }
    setOptions(e) {
        if (this.options = {
            ...this.#o,
            ...e
        },
        e?._type && (this.#e = e._type),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            let e = Lu(this.options);
            e.data !== void 0 && (this.setState(Iu(e.data, e.dataUpdatedAt)),
            this.#t = e)
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === `idle` && this.#r.remove(this)
    }
    setData(e, t) {
        let n = mu(this.state.data, e, this.options);
        return this.#l({
            data: n,
            type: `success`,
            dataUpdatedAt: t?.updatedAt,
            manual: t?.manual
        }),
        n
    }
    setState(e) {
        this.#l({
            type: `setState`,
            state: e
        })
    }
    cancel(e) {
        let t = this.#a?.promise;
        return this.#a?.cancel(e),
        t ? t.then(Zl).catch(Zl) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    get resetState() {
        return this.#t
    }
    reset() {
        this.destroy(),
        this.setState(this.resetState)
    }
    isActive() {
        return this.observers.some(e => nu(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === _u || !this.isFetched()
    }
    isFetched() {
        return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
    }
    isStatic() {
        return this.getObserversCount() > 0 && this.observers.some(e => tu(e.options.staleTime, this) === `static`)
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(e=0) {
        return this.state.data === void 0 ? !0 : e === `static` ? !1 : this.state.isInvalidated ? !0 : !eu(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        this.observers.find(e => e.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }),
        this.#a?.continue()
    }
    onOnline() {
        this.observers.find(e => e.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }),
        this.#a?.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        this.#r.notify({
            type: `observerAdded`,
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e),
        this.observers.length || (this.#a && (this.#s || this.#c() ? this.#a.cancel({
            revert: !0
        }) : this.#a.cancelRetry()),
        this.scheduleGc()),
        this.#r.notify({
            type: `observerRemoved`,
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    #c() {
        return this.state.fetchStatus === `paused` && this.state.status === `pending`
    }
    invalidate() {
        this.state.isInvalidated || this.#l({
            type: `invalidate`
        })
    }
    async fetch(e, t) {
        if (this.state.fetchStatus !== `idle` && this.#a?.status() !== `rejected`) {
            if (this.state.data !== void 0 && t?.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.#a)
                return this.#a.continueRetry(),
                this.#a.promise
        }
        if (e && this.setOptions(e),
        !this.options.queryFn) {
            let e = this.observers.find(e => e.options.queryFn);
            e && this.setOptions(e.options)
        }
        let n = new AbortController
          , r = e => {
            Object.defineProperty(e, "signal", {
                enumerable: !0,
                get: () => (this.#s = !0,
                n.signal)
            })
        }
          , i = () => {
            let e = vu(this.options, t)
              , n = ( () => {
                let e = {
                    client: this.#i,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return r(e),
                e
            }
            )();
            return this.#s = !1,
            this.options.persister ? this.options.persister(e, n, this) : e(n)
        }
          , a = ( () => {
            let e = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#i,
                state: this.state,
                fetchFn: i
            };
            return r(e),
            e
        }
        )();
        (this.#e === `infinite` ? ju(this.options.pages) : this.options.behavior)?.onFetch(a, this),
        this.#n = this.state,
        (this.state.fetchStatus === `idle` || this.state.fetchMeta !== a.fetchOptions?.meta) && this.#l({
            type: `fetch`,
            meta: a.fetchOptions?.meta
        }),
        this.#a = ku({
            initialPromise: t?.initialPromise,
            fn: a.fetchFn,
            onCancel: e => {
                e instanceof Ou && e.revert && this.setState({
                    ...this.#n,
                    fetchStatus: `idle`
                }),
                n.abort()
            }
            ,
            onFail: (e, t) => {
                this.#l({
                    type: `failed`,
                    failureCount: e,
                    error: t
                })
            }
            ,
            onPause: () => {
                this.#l({
                    type: `pause`
                })
            }
            ,
            onContinue: () => {
                this.#l({
                    type: `continue`
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        });
        try {
            let e = await this.#a.start();
            if (e === void 0)
                throw Error(`${this.queryHash} data is undefined`);
            return this.setData(e),
            this.#r.config.onSuccess?.(e, this),
            this.#r.config.onSettled?.(e, this.state.error, this),
            e
        } catch (e) {
            if (e instanceof Ou) {
                if (e.silent)
                    return this.#a.promise;
                if (e.revert) {
                    if (this.state.data === void 0)
                        throw e;
                    return this.state.data
                }
            }
            throw this.#l({
                type: `error`,
                error: e
            }),
            this.#r.config.onError?.(e, this),
            this.#r.config.onSettled?.(this.state.data, e, this),
            e
        } finally {
            this.scheduleGc()
        }
    }
    #l(e) {
        let t = t => {
            switch (e.type) {
            case `failed`:
                return {
                    ...t,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error
                };
            case `pause`:
                return {
                    ...t,
                    fetchStatus: `paused`
                };
            case `continue`:
                return {
                    ...t,
                    fetchStatus: `fetching`
                };
            case `fetch`:
                return {
                    ...t,
                    ...Fu(t.data, this.options),
                    fetchMeta: e.meta ?? null
                };
            case `success`:
                let n = {
                    ...t,
                    ...Iu(e.data, e.dataUpdatedAt),
                    dataUpdateCount: t.dataUpdateCount + 1,
                    ...!e.manual && {
                        fetchStatus: `idle`,
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
                return this.#n = e.manual ? n : void 0,
                n;
            case `error`:
                let r = e.error;
                return {
                    ...t,
                    error: r,
                    errorUpdateCount: t.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: t.fetchFailureCount + 1,
                    fetchFailureReason: r,
                    fetchStatus: `idle`,
                    status: `error`,
                    isInvalidated: !0
                };
            case `invalidate`:
                return {
                    ...t,
                    isInvalidated: !0
                };
            case `setState`:
                return {
                    ...t,
                    ...e.state
                }
            }
        }
        ;
        this.state = t(this.state),
        wu.batch( () => {
            this.observers.forEach(e => {
                e.onQueryUpdate()
            }
            ),
            this.#r.notify({
                query: this,
                type: `updated`,
                action: e
            })
        }
        )
    }
}
;
function Fu(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Du(t.networkMode) ? `fetching` : `paused`,
        ...e === void 0 && {
            error: null,
            status: `pending`
        }
    }
}
function Iu(e, t) {
    return {
        data: e,
        dataUpdatedAt: t ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: `success`
    }
}
function Lu(e) {
    let t = typeof e.initialData == `function` ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == `function` ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? `success` : `pending`,
        fetchStatus: `idle`
    }
}
var Ru = class extends Au {
    #e;
    #t;
    #n;
    #r;
    constructor(e) {
        super(),
        this.#e = e.client,
        this.mutationId = e.mutationId,
        this.#n = e.mutationCache,
        this.#t = [],
        this.state = e.state || zu(),
        this.setOptions(e.options),
        this.scheduleGc()
    }
    setOptions(e) {
        this.options = e,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        this.#t.includes(e) || (this.#t.push(e),
        this.clearGcTimeout(),
        this.#n.notify({
            type: `observerAdded`,
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.#t = this.#t.filter(t => t !== e),
        this.scheduleGc(),
        this.#n.notify({
            type: `observerRemoved`,
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        this.#t.length || (this.state.status === `pending` ? this.scheduleGc() : this.#n.remove(this))
    }
    continue() {
        return this.#r?.continue() ?? this.execute(this.state.variables)
    }
    async execute(e) {
        let t = () => {
            this.#i({
                type: `continue`
            })
        }
          , n = {
            client: this.#e,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        this.#r = ku({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, n) : Promise.reject(Error(`No mutationFn found`)),
            onFail: (e, t) => {
                this.#i({
                    type: `failed`,
                    failureCount: e,
                    error: t
                })
            }
            ,
            onPause: () => {
                this.#i({
                    type: `pause`
                })
            }
            ,
            onContinue: t,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#n.canRun(this)
        });
        let r = this.state.status === `pending`
          , i = !this.#r.canStart();
        try {
            if (r)
                t();
            else {
                this.#i({
                    type: `pending`,
                    variables: e,
                    isPaused: i
                }),
                this.#n.config.onMutate && await this.#n.config.onMutate(e, this, n);
                let t = await this.options.onMutate?.(e, n);
                t !== this.state.context && this.#i({
                    type: `pending`,
                    context: t,
                    variables: e,
                    isPaused: i
                })
            }
            let a = await this.#r.start();
            return await this.#n.config.onSuccess?.(a, e, this.state.context, this, n),
            await this.options.onSuccess?.(a, e, this.state.context, n),
            await this.#n.config.onSettled?.(a, null, this.state.variables, this.state.context, this, n),
            await this.options.onSettled?.(a, null, e, this.state.context, n),
            this.#i({
                type: `success`,
                data: a
            }),
            a
        } catch (t) {
            try {
                await this.#n.config.onError?.(t, e, this.state.context, this, n)
            } catch (e) {
                Promise.reject(e)
            }
            try {
                await this.options.onError?.(t, e, this.state.context, n)
            } catch (e) {
                Promise.reject(e)
            }
            try {
                await this.#n.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this, n)
            } catch (e) {
                Promise.reject(e)
            }
            try {
                await this.options.onSettled?.(void 0, t, e, this.state.context, n)
            } catch (e) {
                Promise.reject(e)
            }
            throw this.#i({
                type: `error`,
                error: t
            }),
            t
        } finally {
            this.#n.runNext(this)
        }
    }
    #i(e) {
        let t = t => {
            switch (e.type) {
            case `failed`:
                return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error
                };
            case `pause`:
                return {
                    ...t,
                    isPaused: !0
                };
            case `continue`:
                return {
                    ...t,
                    isPaused: !1
                };
            case `pending`:
                return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: `pending`,
                    variables: e.variables,
                    submittedAt: Date.now()
                };
            case `success`:
                return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: `success`,
                    isPaused: !1
                };
            case `error`:
                return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: `error`
                }
            }
        }
        ;
        this.state = t(this.state),
        wu.batch( () => {
            this.#t.forEach(t => {
                t.onMutationUpdate(e)
            }
            ),
            this.#n.notify({
                mutation: this,
                type: `updated`,
                action: e
            })
        }
        )
    }
}
;
function zu() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: `idle`,
        variables: void 0,
        submittedAt: 0
    }
}
var Bu = class extends L {
    constructor(e={}) {
        super(),
        this.config = e,
        this.#e = new Set,
        this.#t = new Map,
        this.#n = 0
    }
    #e;
    #t;
    #n;
    build(e, t, n) {
        let r = new Ru({
            client: e,
            mutationCache: this,
            mutationId: ++this.#n,
            options: e.defaultMutationOptions(t),
            state: n
        });
        return this.add(r),
        r
    }
    add(e) {
        this.#e.add(e);
        let t = Vu(e);
        if (typeof t == `string`) {
            let n = this.#t.get(t);
            n ? n.push(e) : this.#t.set(t, [e])
        }
        this.notify({
            type: `added`,
            mutation: e
        })
    }
    remove(e) {
        if (this.#e.delete(e)) {
            let t = Vu(e);
            if (typeof t == `string`) {
                let n = this.#t.get(t);
                if (n)
                    if (n.length > 1) {
                        let t = n.indexOf(e);
                        t !== -1 && n.splice(t, 1)
                    } else
                        n[0] === e && this.#t.delete(t)
            }
        }
        this.notify({
            type: `removed`,
            mutation: e
        })
    }
    canRun(e) {
        let t = Vu(e);
        if (typeof t == `string`) {
            let n = this.#t.get(t)?.find(e => e.state.status === `pending`);
            return !n || n === e
        }
        return !0
    }
    runNext(e) {
        let t = Vu(e);
        return typeof t == `string` ? (this.#t.get(t)?.find(t => t !== e && t.state.isPaused))?.continue() ?? Promise.resolve() : Promise.resolve()
    }
    clear() {
        wu.batch( () => {
            this.#e.forEach(e => {
                this.notify({
                    type: `removed`,
                    mutation: e
                })
            }
            ),
            this.#e.clear(),
            this.#t.clear()
        }
        )
    }
    getAll() {
        return Array.from(this.#e)
    }
    find(e) {
        let t = {
            exact: !0,
            ...e
        };
        return this.getAll().find(e => iu(t, e))
    }
    findAll(e={}) {
        return this.getAll().filter(t => iu(e, t))
    }
    notify(e) {
        wu.batch( () => {
            this.listeners.forEach(t => {
                t(e)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        let e = this.getAll().filter(e => e.state.isPaused);
        return wu.batch( () => Promise.all(e.map(e => e.continue().catch(Zl))))
    }
}
;
function Vu(e) {
    return e.options.scope?.id
}
var Hu = class extends L {
    constructor(e={}) {
        super(),
        this.config = e,
        this.#e = new Map
    }
    #e;
    build(e, t, n) {
        let r = t.queryKey
          , i = t.queryHash ?? au(r, t)
          , a = this.get(i);
        return a || (a = new Pu({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r)
        }),
        this.add(a)),
        a
    }
    add(e) {
        this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e),
        this.notify({
            type: `added`,
            query: e
        }))
    }
    remove(e) {
        let t = this.#e.get(e.queryHash);
        t && (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({
            type: `removed`,
            query: e
        }))
    }
    clear() {
        wu.batch( () => {
            this.getAll().forEach(e => {
                this.remove(e)
            }
            )
        }
        )
    }
    get(e) {
        return this.#e.get(e)
    }
    getAll() {
        return [...this.#e.values()]
    }
    find(e) {
        let t = {
            exact: !0,
            ...e
        };
        return this.getAll().find(e => ru(t, e))
    }
    findAll(e={}) {
        let t = this.getAll();
        return Object.keys(e).length > 0 ? t.filter(t => ru(e, t)) : t
    }
    notify(e) {
        wu.batch( () => {
            this.listeners.forEach(t => {
                t(e)
            }
            )
        }
        )
    }
    onFocus() {
        wu.batch( () => {
            this.getAll().forEach(e => {
                e.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        wu.batch( () => {
            this.getAll().forEach(e => {
                e.onOnline()
            }
            )
        }
        )
    }
}
  , Uu = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e={}) {
        this.#e = e.queryCache || new Hu,
        this.#t = e.mutationCache || new Bu,
        this.#n = e.defaultOptions || {},
        this.#r = new Map,
        this.#i = new Map,
        this.#a = 0
    }
    mount() {
        this.#a++,
        this.#a === 1 && (this.#o = Jl.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            this.#e.onFocus())
        }
        ),
        this.#s = Tu.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            this.#e.onOnline())
        }
        ))
    }
    unmount() {
        this.#a--,
        this.#a === 0 && (this.#o?.(),
        this.#o = void 0,
        this.#s?.(),
        this.#s = void 0)
    }
    isFetching(e) {
        return this.#e.findAll({
            ...e,
            fetchStatus: `fetching`
        }).length
    }
    isMutating(e) {
        return this.#t.findAll({
            ...e,
            status: `pending`
        }).length
    }
    getQueryData(e) {
        let t = this.defaultQueryOptions({
            queryKey: e
        });
        return this.#e.get(t.queryHash)?.state.data
    }
    ensureQueryData(e) {
        let t = this.defaultQueryOptions(e)
          , n = this.#e.build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(tu(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return this.#e.findAll(e).map( ({queryKey: e, state: t}) => [e, t.data])
    }
    setQueryData(e, t, n) {
        let r = this.defaultQueryOptions({
            queryKey: e
        })
          , i = this.#e.get(r.queryHash)?.state.data
          , a = Ql(t, i);
        if (a !== void 0)
            return this.#e.build(this, r).setData(a, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return wu.batch( () => this.#e.findAll(e).map( ({queryKey: e}) => [e, this.setQueryData(e, t, n)]))
    }
    getQueryState(e) {
        let t = this.defaultQueryOptions({
            queryKey: e
        });
        return this.#e.get(t.queryHash)?.state
    }
    removeQueries(e) {
        let t = this.#e;
        wu.batch( () => {
            t.findAll(e).forEach(e => {
                t.remove(e)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        let n = this.#e;
        return wu.batch( () => (n.findAll(e).forEach(e => {
            e.reset()
        }
        ),
        this.refetchQueries({
            type: `active`,
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        let n = {
            revert: !0,
            ...t
        }
          , r = wu.batch( () => this.#e.findAll(e).map(e => e.cancel(n)));
        return Promise.all(r).then(Zl).catch(Zl)
    }
    invalidateQueries(e, t={}) {
        return wu.batch( () => (this.#e.findAll(e).forEach(e => {
            e.invalidate()
        }
        ),
        e?.refetchType === `none` ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: e?.refetchType ?? e?.type ?? `active`
        }, t)))
    }
    refetchQueries(e, t={}) {
        let n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = wu.batch( () => this.#e.findAll(e).filter(e => !e.isDisabled() && !e.isStatic()).map(e => {
            let t = e.fetch(void 0, n);
            return n.throwOnError || (t = t.catch(Zl)),
            e.state.fetchStatus === `paused` ? Promise.resolve() : t
        }
        ));
        return Promise.all(r).then(Zl)
    }
    fetchQuery(e) {
        let t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        let n = this.#e.build(this, t);
        return n.isStaleByTime(tu(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Zl).catch(Zl)
    }
    fetchInfiniteQuery(e) {
        return e._type = `infinite`,
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Zl).catch(Zl)
    }
    ensureInfiniteQueryData(e) {
        return e._type = `infinite`,
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Tu.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return this.#e
    }
    getMutationCache() {
        return this.#t
    }
    getDefaultOptions() {
        return this.#n
    }
    setDefaultOptions(e) {
        this.#n = e
    }
    setQueryDefaults(e, t) {
        this.#r.set(ou(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        let t = [...this.#r.values()]
          , n = {};
        return t.forEach(t => {
            su(e, t.queryKey) && Object.assign(n, t.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        this.#i.set(ou(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        let t = [...this.#i.values()]
          , n = {};
        return t.forEach(t => {
            su(e, t.mutationKey) && Object.assign(n, t.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        let t = {
            ...this.#n.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash ||= au(t.queryKey, t),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === _u && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e?._defaulted ? e : {
            ...this.#n.mutations,
            ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        this.#e.clear(),
        this.#t.clear()
    }
}
  , Wu = F.createContext(void 0)
  , Gu = ({client: e, children: t}) => (F.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
(0,
I.jsx)(Wu.Provider, {
    value: e,
    children: t
}))
  , Ku = `/assets/styles-MzYFWnH1.css`;
function qu(e, t={}) {
    if (typeof window > `u`)
        return;
    window.__lovableEvents?.captureException?.(e, {
        source: `react_error_boundary`,
        route: window.location.pathname,
        ...t
    }, {
        mechanism: `react_error_boundary`,
        handled: !1,
        severity: `error`
    });
    let n = e instanceof Error ? e.stack : void 0;
    window.__lovableReportRuntimeError?.({
        message: Yu(e),
        ...n !== void 0 && {
            stack: n
        },
        filename: window.location.pathname
    })
}
var Ju = 2e3;
function Yu(e) {
    if (e instanceof Response)
        return `Response ${e.status}${e.url ? ` at ${e.url}` : ``}`;
    if (e instanceof Error)
        return e.message;
    if (typeof e == `string`)
        return e;
    let {message: t} = e ?? {};
    if (typeof t == `string` && t.length > 0)
        return t;
    try {
        return JSON.stringify(e)?.slice(0, Ju) ?? String(e)
    } catch {
        return String(e)
    }
}
var Xu = {
    version: 1,
    asset_id: `92e190f2-4db7-4a1f-9624-c092dbfb269f`,
    project_id: `e98ad624-18df-5f05-8534-faeb9c2faf6a`,
    url: `/__l5e/assets-v1/92e190f2-4db7-4a1f-9624-c092dbfb269f/logo-carvalho.jpg`,
    r2_key: `a/v1/e98ad624-18df-5f05-8534-faeb9c2faf6a/92e190f2-4db7-4a1f-9624-c092dbfb269f/logo-carvalho.jpg`,
    original_filename: `logo-carvalho.jpg`,
    size: 93964,
    content_type: `image/jpeg`,
    created_at: `2026-10-14T00:31:44Z`
}
  , Zu = (...e) => e.filter( (e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t).join(` `).trim()
  , Qu = e => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase()
  , $u = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase())
  , ed = e => {
    let t = $u(e);
    return t.charAt(0).toUpperCase() + t.slice(1)
}
  , td = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`
}
  , nd = e => {
    for (let t in e)
        if (t.startsWith(`aria-`) || t === `role` || t === `title`)
            return !0;
    return !1
}
  , rd = (0,
F.forwardRef)( ({color: e=`currentColor`, size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: i=``, children: a, iconNode: o, ...s}, c) => (0,
F.createElement)(`svg`, {
    ref: c,
    ...td,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Zu(`lucide`, i),
    ...!a && !nd(s) && {
        "aria-hidden": `true`
    },
    ...s
}, [...o.map( ([e,t]) => (0,
F.createElement)(e, t)), ...Array.isArray(a) ? a : [a]]))
  , id = (e, t) => {
    let n = (0,
    F.forwardRef)( ({className: n, ...r}, i) => (0,
    F.createElement)(rd, {
        ref: i,
        iconNode: t,
        className: Zu(`lucide-${Qu(ed(e))}`, `lucide-${e}`, n),
        ...r
    }));
    return n.displayName = ed(e),
    n
}
  , ad = id(`clipboard-list`, [[`rect`, {
    width: `8`,
    height: `4`,
    x: `8`,
    y: `2`,
    rx: `1`,
    ry: `1`,
    key: `tgr4d6`
}], [`path`, {
    d: `M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,
    key: `116196`
}], [`path`, {
    d: `M12 11h4`,
    key: `1jrz19`
}], [`path`, {
    d: `M12 16h4`,
    key: `n85exb`
}], [`path`, {
    d: `M8 11h.01`,
    key: `1dfujw`
}], [`path`, {
    d: `M8 16h.01`,
    key: `18s6g9`
}]])
  , od = id(`database`, [[`ellipse`, {
    cx: `12`,
    cy: `5`,
    rx: `9`,
    ry: `3`,
    key: `msslwz`
}], [`path`, {
    d: `M3 5V19A9 3 0 0 0 21 19V5`,
    key: `1wlel7`
}], [`path`, {
    d: `M3 12A9 3 0 0 0 21 12`,
    key: `mv7ke4`
}]])
  , sd = id(`file-text`, [[`path`, {
    d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
    key: `1oefj6`
}], [`path`, {
    d: `M14 2v5a1 1 0 0 0 1 1h5`,
    key: `wfsgrz`
}], [`path`, {
    d: `M10 9H8`,
    key: `b1mrlr`
}], [`path`, {
    d: `M16 13H8`,
    key: `t4e002`
}], [`path`, {
    d: `M16 17H8`,
    key: `z1uh3a`
}]])
  , cd = id(`menu`, [[`path`, {
    d: `M4 5h16`,
    key: `1tepv9`
}], [`path`, {
    d: `M4 12h16`,
    key: `1lakjw`
}], [`path`, {
    d: `M4 19h16`,
    key: `1djgab`
}]])
  , ld = id(`scale`, [[`path`, {
    d: `M12 3v18`,
    key: `108xh3`
}], [`path`, {
    d: `m19 8 3 8a5 5 0 0 1-6 0zV7`,
    key: `zcdpyk`
}], [`path`, {
    d: `M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1`,
    key: `1yorad`
}], [`path`, {
    d: `m5 8 3 8a5 5 0 0 1-6 0zV7`,
    key: `eua70x`
}], [`path`, {
    d: `M7 21h10`,
    key: `1b0cd5`
}]])
  , ud = id(`search-check`, [[`path`, {
    d: `m8 11 2 2 4-4`,
    key: `1sed1v`
}], [`circle`, {
    cx: `11`,
    cy: `11`,
    r: `8`,
    key: `4ej97u`
}], [`path`, {
    d: `m21 21-4.3-4.3`,
    key: `1qie3q`
}]])
  , dd = id(`shield-check`, [[`path`, {
    d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
    key: `oel41y`
}], [`path`, {
    d: `m9 12 2 2 4-4`,
    key: `dzmm74`
}]])
  , fd = id(`x`, [[`path`, {
    d: `M18 6 6 18`,
    key: `1bl5f8`
}], [`path`, {
    d: `m6 6 12 12`,
    key: `d8bk6v`
}]])
  , pd = [{
    icon: ad,
    title: `Levantamento físico patrimonial`,
    text: `Verificação física dos bens patrimoniais, com identificação, localização e confronto com as informações disponibilizadas pela organização.`,
    message: `Olá! Acessei o site da Carvalho Soluções em Auditoria e gostaria de informações sobre o serviço de levantamento físico patrimonial.`
}, {
    icon: ld,
    title: `Conciliação físico-contábil`,
    text: `Comparação entre os bens identificados fisicamente e os respectivos registros contábeis e patrimoniais, visando identificar divergências e inconsistências.`,
    message: `Olá! Gostaria de conhecer melhor o serviço de conciliação físico-contábil oferecido pela Carvalho Soluções em Auditoria.`
}, {
    icon: od,
    title: `Análise cadastral do ativo imobilizado`,
    text: `Verificação dos cadastros patrimoniais e das informações disponíveis para apoiar a consistência e a organização da base de bens.`,
    message: `Olá! Acessei o site da Carvalho Soluções em Auditoria e gostaria de informações sobre o serviço de análise cadastral do ativo imobilizado.`
}, {
    icon: ud,
    title: `Identificação de divergências patrimoniais`,
    text: `Levantamento de diferenças entre os registros existentes e as informações verificadas durante os procedimentos contratados.`,
    message: `Olá! Acessei o site da Carvalho Soluções em Auditoria e gostaria de informações sobre o serviço de identificação de divergências patrimoniais.`
}, {
    icon: dd,
    title: `Apoio ao controle patrimonial`,
    text: `Contribuição para o aprimoramento dos processos de controle, identificação, acompanhamento e organização dos bens.`,
    message: `Olá! Acessei o site da Carvalho Soluções em Auditoria e gostaria de informações sobre o apoio ao controle patrimonial.`
}, {
    icon: sd,
    title: `Relatórios e apresentação de resultados`,
    text: `Organização dos resultados dos procedimentos executados, com apresentação dos apontamentos identificados e das informações pertinentes ao escopo contratado.`,
    message: `Olá! Acessei o site da Carvalho Soluções em Auditoria e gostaria de informações sobre relatórios e apresentação de resultados.`
}]
  , md = [`Precisão técnica`, `Transparência`, `Organização`, `Confidencialidade`, `Compromisso com a qualidade`, `Atendimento profissional`]
  , hd = [`Análise estruturada das informações patrimoniais.`, `Procedimentos alinhados ao escopo contratado.`, `Comunicação clara durante o atendimento.`, `Organização dos apontamentos identificados.`, `Atenção à confidencialidade das informações.`, `Atendimento direcionado às necessidades da organização.`]
  , gd = [{
    n: `01`,
    title: `Primeiro contato`,
    text: `O cliente apresenta sua necessidade inicial pelo WhatsApp.`
}, {
    n: `02`,
    title: `Entendimento da demanda`,
    text: `A equipe busca compreender as características do patrimônio, as informações disponíveis e os objetivos pretendidos.`
}, {
    n: `03`,
    title: `Proposta e definição do escopo`,
    text: `São alinhados os serviços, os procedimentos, os prazos, os documentos necessários e as condições comerciais.`
}, {
    n: `04`,
    title: `Execução dos serviços`,
    text: `Os procedimentos são realizados conforme o escopo acordado, com apresentação dos resultados previstos na contratação.`
}]
  , _d = [{
    q: `O que é auditoria de ativo imobilizado?`,
    a: `É um conjunto de procedimentos voltados à verificação e análise de informações relacionadas aos bens de uma organização, conforme o objetivo e o escopo do trabalho contratado.`
}, {
    q: `Qual a diferença entre levantamento físico e conciliação físico-contábil?`,
    a: `O levantamento físico envolve a identificação e verificação dos bens. A conciliação físico-contábil compara os resultados dessa verificação com os registros contábeis e patrimoniais disponíveis.`
}, {
    q: `A empresa atende organizações públicas e privadas?`,
    a: `O site está direcionado aos dois segmentos. A possibilidade de atendimento de cada demanda deverá ser confirmada conforme os requisitos e as condições aplicáveis à contratação.`
}, {
    q: `Como solicitar uma proposta?`,
    a: `Entre em contato pelo WhatsApp e apresente brevemente a necessidade da sua organização. A equipe poderá orientar sobre as informações necessárias para avaliar a demanda.`
}, {
    q: `Quanto custa uma auditoria de ativo imobilizado?`,
    a: `O valor depende de fatores como quantidade e distribuição dos bens, complexidade da operação, informações disponíveis, procedimentos necessários e prazo solicitado. Entre em contato para discutir as características da sua demanda.`
}]
  , vd = [{
    to: `/`,
    label: `Início`
}, {
    to: `/sobre`,
    label: `Sobre`
}, {
    to: `/servicos`,
    label: `Serviços`
}, {
    to: `/como-funciona`,
    label: `Como funciona`
}, {
    to: `/segmentos`,
    label: `Segmentos`
}, {
    to: `/perguntas-frequentes`,
    label: `FAQ`
}, {
    to: `/contato`,
    label: `Contato`
}]
  , yd = `5571984501950`
  , bd = `servicos@carvalho.auditoria.com`
  , xd = `Olá! Acessei o site da Carvalho Soluções em Auditoria e gostaria de obter informações sobre os serviços de auditoria de ativo imobilizado.`
  , Sd = `Olá! Represento uma instituição pública e gostaria de informações sobre os serviços patrimoniais oferecidos pela Carvalho Soluções em Auditoria.`
  , Cd = `Olá! Represento uma empresa privada e gostaria de informações sobre os serviços patrimoniais oferecidos pela Carvalho Soluções em Auditoria.`;
function wd(e=xd) {
    return `https://wa.me/${yd.replace(/\D/g, ``)}?text=${encodeURIComponent(e)}`
}
function Td(e) {
    var t, n, r = ``;
    if (typeof e == `string` || typeof e == `number`)
        r += e;
    else if (typeof e == `object`)
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++)
                e[t] && (n = Td(e[t])) && (r && (r += ` `),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += ` `),
                r += n);
    return r
}
function Ed() {
    for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
        (e = arguments[n]) && (t = Td(e)) && (r && (r += ` `),
        r += t);
    return r
}
var Dd = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++)
        n[t] = e[t];
    for (let r = 0; r < t.length; r++)
        n[e.length + r] = t[r];
    return n
}
  , Od = (e, t) => ({
    classGroupId: e,
    validator: t
})
  , kd = (e=new Map, t=null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n
})
  , Ad = `-`
  , jd = []
  , B = `arbitrary..`
  , Md = e => {
    let t = Fd(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: e => {
            if (e.startsWith(`[`) && e.endsWith(`]`))
                return Pd(e);
            let n = e.split(Ad);
            return Nd(n, +(n[0] === `` && n.length > 1), t)
        }
        ,
        getConflictingClassGroupIds: (e, t) => {
            if (t) {
                let t = r[e]
                  , i = n[e];
                return t ? i ? Dd(i, t) : t : i || jd
            }
            return n[e] || jd
        }
    }
}
  , Nd = (e, t, n) => {
    if (e.length - t === 0)
        return n.classGroupId;
    let r = e[t]
      , i = n.nextPart.get(r);
    if (i) {
        let n = Nd(e, t + 1, i);
        if (n)
            return n
    }
    let a = n.validators;
    if (a === null)
        return;
    let o = t === 0 ? e.join(Ad) : e.slice(t).join(Ad)
      , s = a.length;
    for (let e = 0; e < s; e++) {
        let t = a[e];
        if (t.validator(o))
            return t.classGroupId
    }
}
  , Pd = e => e.slice(1, -1).indexOf(`:`) === -1 ? void 0 : ( () => {
    let t = e.slice(1, -1)
      , n = t.indexOf(`:`)
      , r = t.slice(0, n);
    return r ? B + r : void 0
}
)()
  , Fd = e => {
    let {theme: t, classGroups: n} = e;
    return Id(n, t)
}
  , Id = (e, t) => {
    let n = kd();
    for (let r in e) {
        let i = e[r];
        Ld(i, n, r, t)
    }
    return n
}
  , Ld = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
        let i = e[a];
        Rd(i, t, n, r)
    }
}
  , Rd = (e, t, n, r) => {
    if (typeof e == `string`) {
        zd(e, t, n);
        return
    }
    if (typeof e == `function`) {
        Bd(e, t, n, r);
        return
    }
    Vd(e, t, n, r)
}
  , zd = (e, t, n) => {
    let r = e === `` ? t : Hd(t, e);
    r.classGroupId = n
}
  , Bd = (e, t, n, r) => {
    if (Ud(e)) {
        Ld(e(r), t, n, r);
        return
    }
    t.validators === null && (t.validators = []),
    t.validators.push(Od(n, e))
}
  , Vd = (e, t, n, r) => {
    let i = Object.entries(e)
      , a = i.length;
    for (let e = 0; e < a; e++) {
        let[a,o] = i[e];
        Ld(o, Hd(t, a), n, r)
    }
}
  , Hd = (e, t) => {
    let n = e
      , r = t.split(Ad)
      , i = r.length;
    for (let e = 0; e < i; e++) {
        let t = r[e]
          , i = n.nextPart.get(t);
        i || (i = kd(),
        n.nextPart.set(t, i)),
        n = i
    }
    return n
}
  , Ud = e => `isThemeGetter` in e && e.isThemeGetter === !0
  , Wd = e => {
    if (e < 1)
        return {
            get: () => void 0,
            set: () => {}
        };
    let t = 0
      , n = Object.create(null)
      , r = Object.create(null)
      , i = (i, a) => {
        n[i] = a,
        t++,
        t > e && (t = 0,
        r = n,
        n = Object.create(null))
    }
    ;
    return {
        get(e) {
            let t = n[e];
            if (t !== void 0)
                return t;
            if ((t = r[e]) !== void 0)
                return i(e, t),
                t
        },
        set(e, t) {
            e in n ? n[e] = t : i(e, t)
        }
    }
}
  , V = `!`
  , Gd = `:`
  , Kd = []
  , qd = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i
})
  , Jd = e => {
    let {prefix: t, experimentalParseClassName: n} = e
      , r = e => {
        let t = [], n = 0, r = 0, i = 0, a, o = e.length;
        for (let s = 0; s < o; s++) {
            let o = e[s];
            if (n === 0 && r === 0) {
                if (o === Gd) {
                    t.push(e.slice(i, s)),
                    i = s + 1;
                    continue
                }
                if (o === `/`) {
                    a = s;
                    continue
                }
            }
            o === `[` ? n++ : o === `]` ? n-- : o === `(` ? r++ : o === `)` && r--
        }
        let s = t.length === 0 ? e : e.slice(i)
          , c = s
          , l = !1;
        s.endsWith(V) ? (c = s.slice(0, -1),
        l = !0) : s.startsWith(V) && (c = s.slice(1),
        l = !0);
        let u = a && a > i ? a - i : void 0;
        return qd(t, l, c, u)
    }
    ;
    if (t) {
        let e = t + Gd
          , n = r;
        r = t => t.startsWith(e) ? n(t.slice(e.length)) : qd(Kd, !1, t, void 0, !0)
    }
    if (n) {
        let e = r;
        r = t => n({
            className: t,
            parseClassName: e
        })
    }
    return r
}
  , Yd = e => {
    let t = new Map;
    return e.orderSensitiveModifiers.forEach( (e, n) => {
        t.set(e, 1e6 + n)
    }
    ),
    e => {
        let n = []
          , r = [];
        for (let i = 0; i < e.length; i++) {
            let a = e[i]
              , o = a[0] === `[`
              , s = t.has(a);
            o || s ? (r.length > 0 && (r.sort(),
            n.push(...r),
            r = []),
            n.push(a)) : r.push(a)
        }
        return r.length > 0 && (r.sort(),
        n.push(...r)),
        n
    }
}
  , Xd = e => ({
    cache: Wd(e.cacheSize),
    parseClassName: Jd(e),
    sortModifiers: Yd(e),
    postfixLookupClassGroupIds: Zd(e),
    ...Md(e)
})
  , Zd = e => {
    let t = Object.create(null)
      , n = e.postfixLookupClassGroups;
    if (n)
        for (let e = 0; e < n.length; e++)
            t[n[e]] = !0;
    return t
}
  , Qd = /\s+/
  , $d = (e, t) => {
    let {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o} = t
      , s = []
      , c = e.trim().split(Qd)
      , l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
        let t = c[e]
          , {isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m} = n(t);
        if (u) {
            l = t + (l.length > 0 ? ` ` + l : l);
            continue
        }
        let h = !!m, g;
        if (h) {
            g = r(p.substring(0, m));
            let e = g && o[g] ? r(p) : void 0;
            e && e !== g && (g = e,
            h = !1)
        } else
            g = r(p);
        if (!g) {
            if (!h) {
                l = t + (l.length > 0 ? ` ` + l : l);
                continue
            }
            if (g = r(p),
            !g) {
                l = t + (l.length > 0 ? ` ` + l : l);
                continue
            }
            h = !1
        }
        let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`)
          , v = f ? _ + V : _
          , y = v + g;
        if (s.indexOf(y) > -1)
            continue;
        s.push(y);
        let b = i(g, h);
        for (let e = 0; e < b.length; ++e) {
            let t = b[e];
            s.push(v + t)
        }
        l = t + (l.length > 0 ? ` ` + l : l)
    }
    return l
}
  , ef = (...e) => {
    let t = 0, n, r, i = ``;
    for (; t < e.length; )
        (n = e[t++]) && (r = tf(n)) && (i && (i += ` `),
        i += r);
    return i
}
  , tf = e => {
    if (typeof e == `string`)
        return e;
    let t, n = ``;
    for (let r = 0; r < e.length; r++)
        e[r] && (t = tf(e[r])) && (n && (n += ` `),
        n += t);
    return n
}
  , nf = (e, ...t) => {
    let n, r, i, a, o = o => (n = Xd(t.reduce( (e, t) => t(e), e())),
    r = n.cache.get,
    i = n.cache.set,
    a = s,
    s(o)), s = e => {
        let t = r(e);
        if (t)
            return t;
        let a = $d(e, n);
        return i(e, a),
        a
    }
    ;
    return a = o,
    (...e) => a(ef(...e))
}
  , rf = []
  , af = e => {
    let t = t => t[e] || rf;
    return t.isThemeGetter = !0,
    t
}
  , of = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , sf = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , cf = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/
  , lf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , uf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , df = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , ff = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , pf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , mf = e => cf.test(e)
  , H = e => !!e && !Number.isNaN(Number(e))
  , hf = e => !!e && Number.isInteger(Number(e))
  , gf = e => e.endsWith(`%`) && H(e.slice(0, -1))
  , _f = e => lf.test(e)
  , vf = () => !0
  , yf = e => uf.test(e) && !df.test(e)
  , bf = () => !1
  , xf = e => ff.test(e)
  , Sf = e => pf.test(e)
  , Cf = e => !U(e) && !W(e)
  , wf = e => e.startsWith(`@container`) && (e[10] === `/` && e[11] !== void 0 || e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10) || e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))
  , Tf = e => Bf(e, Wf, bf)
  , U = e => of.test(e)
  , Ef = e => Bf(e, Gf, yf)
  , Df = e => Bf(e, Kf, H)
  , Of = e => Bf(e, Jf, vf)
  , kf = e => Bf(e, qf, bf)
  , Af = e => Bf(e, Hf, bf)
  , jf = e => Bf(e, Uf, Sf)
  , Mf = e => Bf(e, Yf, xf)
  , W = e => sf.test(e)
  , Nf = e => Vf(e, Gf)
  , Pf = e => Vf(e, qf)
  , Ff = e => Vf(e, Hf)
  , If = e => Vf(e, Wf)
  , Lf = e => Vf(e, Uf)
  , Rf = e => Vf(e, Yf, !0)
  , zf = e => Vf(e, Jf, !0)
  , Bf = (e, t, n) => {
    let r = of.exec(e);
    return r ? r[1] ? t(r[1]) : n(r[2]) : !1
}
  , Vf = (e, t, n=!1) => {
    let r = sf.exec(e);
    return r ? r[1] ? t(r[1]) : n : !1
}
  , Hf = e => e === `position` || e === `percentage`
  , Uf = e => e === `image` || e === `url`
  , Wf = e => e === `length` || e === `size` || e === `bg-size`
  , Gf = e => e === `length`
  , Kf = e => e === `number`
  , qf = e => e === `family-name`
  , Jf = e => e === `number` || e === `weight`
  , Yf = e => e === `shadow`
  , Xf = nf( () => {
    let e = af(`color`)
      , t = af(`font`)
      , n = af(`text`)
      , r = af(`font-weight`)
      , i = af(`tracking`)
      , a = af(`leading`)
      , o = af(`breakpoint`)
      , s = af(`container`)
      , c = af(`spacing`)
      , l = af(`radius`)
      , u = af(`shadow`)
      , d = af(`inset-shadow`)
      , f = af(`text-shadow`)
      , p = af(`drop-shadow`)
      , m = af(`blur`)
      , h = af(`perspective`)
      , g = af(`aspect`)
      , _ = af(`ease`)
      , v = af(`animate`)
      , y = () => [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`]
      , b = () => [`center`, `top`, `bottom`, `left`, `right`, `top-left`, `left-top`, `top-right`, `right-top`, `bottom-right`, `right-bottom`, `bottom-left`, `left-bottom`]
      , x = () => [...b(), W, U]
      , S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`]
      , C = () => [`auto`, `contain`, `none`]
      , w = () => [W, U, c]
      , T = () => [mf, `full`, `auto`, ...w()]
      , ee = () => [hf, `none`, `subgrid`, W, U]
      , te = () => [`auto`, {
        span: [`full`, hf, W, U]
    }, hf, W, U]
      , E = () => [hf, `auto`, W, U]
      , ne = () => [`auto`, `min`, `max`, `fr`, W, U]
      , re = () => [`start`, `end`, `center`, `between`, `around`, `evenly`, `stretch`, `baseline`, `center-safe`, `end-safe`]
      , ie = () => [`start`, `end`, `center`, `stretch`, `center-safe`, `end-safe`]
      , ae = () => [`auto`, ...w()]
      , oe = () => [mf, `auto`, `full`, `dvw`, `dvh`, `lvw`, `lvh`, `svw`, `svh`, `min`, `max`, `fit`, ...w()]
      , se = () => [mf, `screen`, `full`, `dvw`, `lvw`, `svw`, `min`, `max`, `fit`, ...w()]
      , ce = () => [mf, `screen`, `full`, `lh`, `dvh`, `lvh`, `svh`, `min`, `max`, `fit`, ...w()]
      , D = () => [e, W, U]
      , O = () => [...b(), Ff, Af, {
        position: [W, U]
    }]
      , le = () => [`no-repeat`, {
        repeat: [``, `x`, `y`, `space`, `round`]
    }]
      , ue = () => [`auto`, `cover`, `contain`, If, Tf, {
        size: [W, U]
    }]
      , de = () => [gf, Nf, Ef]
      , fe = () => [``, `none`, `full`, l, W, U]
      , k = () => [``, H, Nf, Ef]
      , A = () => [`solid`, `dashed`, `dotted`, `double`]
      , pe = () => [`normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`]
      , me = () => [H, gf, Ff, Af]
      , he = () => [``, `none`, m, W, U]
      , ge = () => [`none`, H, W, U]
      , _e = () => [`none`, H, W, U]
      , ve = () => [H, W, U]
      , ye = () => [mf, `full`, ...w()];
    return {
        cacheSize: 500,
        theme: {
            animate: [`spin`, `ping`, `pulse`, `bounce`],
            aspect: [`video`],
            blur: [_f],
            breakpoint: [_f],
            color: [vf],
            container: [_f],
            "drop-shadow": [_f],
            ease: [`in`, `out`, `in-out`],
            font: [Cf],
            "font-weight": [`thin`, `extralight`, `light`, `normal`, `medium`, `semibold`, `bold`, `extrabold`, `black`],
            "inset-shadow": [_f],
            leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
            perspective: [`dramatic`, `near`, `normal`, `midrange`, `distant`, `none`],
            radius: [_f],
            shadow: [_f],
            spacing: [`px`, H],
            text: [_f],
            "text-shadow": [_f],
            tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`]
        },
        classGroups: {
            aspect: [{
                aspect: [`auto`, `square`, mf, U, W, g]
            }],
            container: [`container`],
            "container-type": [{
                "@container": [``, `normal`, `size`, W, U]
            }],
            "container-named": [wf],
            columns: [{
                columns: [H, U, W, s]
            }],
            "break-after": [{
                "break-after": y()
            }],
            "break-before": [{
                "break-before": y()
            }],
            "break-inside": [{
                "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`]
            }],
            "box-decoration": [{
                "box-decoration": [`slice`, `clone`]
            }],
            box: [{
                box: [`border`, `content`]
            }],
            display: [`block`, `inline-block`, `inline`, `flex`, `inline-flex`, `table`, `inline-table`, `table-caption`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row-group`, `table-row`, `flow-root`, `grid`, `inline-grid`, `contents`, `list-item`, `hidden`],
            sr: [`sr-only`, `not-sr-only`],
            float: [{
                float: [`right`, `left`, `none`, `start`, `end`]
            }],
            clear: [{
                clear: [`left`, `right`, `both`, `none`, `start`, `end`]
            }],
            isolation: [`isolate`, `isolation-auto`],
            "object-fit": [{
                object: [`contain`, `cover`, `fill`, `none`, `scale-down`]
            }],
            "object-position": [{
                object: x()
            }],
            overflow: [{
                overflow: S()
            }],
            "overflow-x": [{
                "overflow-x": S()
            }],
            "overflow-y": [{
                "overflow-y": S()
            }],
            overscroll: [{
                overscroll: C()
            }],
            "overscroll-x": [{
                "overscroll-x": C()
            }],
            "overscroll-y": [{
                "overscroll-y": C()
            }],
            position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
            inset: [{
                inset: T()
            }],
            "inset-x": [{
                "inset-x": T()
            }],
            "inset-y": [{
                "inset-y": T()
            }],
            start: [{
                "inset-s": T(),
                start: T()
            }],
            end: [{
                "inset-e": T(),
                end: T()
            }],
            "inset-bs": [{
                "inset-bs": T()
            }],
            "inset-be": [{
                "inset-be": T()
            }],
            top: [{
                top: T()
            }],
            right: [{
                right: T()
            }],
            bottom: [{
                bottom: T()
            }],
            left: [{
                left: T()
            }],
            visibility: [`visible`, `invisible`, `collapse`],
            z: [{
                z: [hf, `auto`, W, U]
            }],
            basis: [{
                basis: [mf, `full`, `auto`, s, ...w()]
            }],
            "flex-direction": [{
                flex: [`row`, `row-reverse`, `col`, `col-reverse`]
            }],
            "flex-wrap": [{
                flex: [`nowrap`, `wrap`, `wrap-reverse`]
            }],
            flex: [{
                flex: [H, mf, `auto`, `initial`, `none`, U]
            }],
            grow: [{
                grow: [``, H, W, U]
            }],
            shrink: [{
                shrink: [``, H, W, U]
            }],
            order: [{
                order: [hf, `first`, `last`, `none`, W, U]
            }],
            "grid-cols": [{
                "grid-cols": ee()
            }],
            "col-start-end": [{
                col: te()
            }],
            "col-start": [{
                "col-start": E()
            }],
            "col-end": [{
                "col-end": E()
            }],
            "grid-rows": [{
                "grid-rows": ee()
            }],
            "row-start-end": [{
                row: te()
            }],
            "row-start": [{
                "row-start": E()
            }],
            "row-end": [{
                "row-end": E()
            }],
            "grid-flow": [{
                "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`]
            }],
            "auto-cols": [{
                "auto-cols": ne()
            }],
            "auto-rows": [{
                "auto-rows": ne()
            }],
            gap: [{
                gap: w()
            }],
            "gap-x": [{
                "gap-x": w()
            }],
            "gap-y": [{
                "gap-y": w()
            }],
            "justify-content": [{
                justify: [...re(), `normal`]
            }],
            "justify-items": [{
                "justify-items": [...ie(), `normal`]
            }],
            "justify-self": [{
                "justify-self": [`auto`, ...ie()]
            }],
            "align-content": [{
                content: [`normal`, ...re()]
            }],
            "align-items": [{
                items: [...ie(), {
                    baseline: [``, `last`]
                }]
            }],
            "align-self": [{
                self: [`auto`, ...ie(), {
                    baseline: [``, `last`]
                }]
            }],
            "place-content": [{
                "place-content": re()
            }],
            "place-items": [{
                "place-items": [...ie(), `baseline`]
            }],
            "place-self": [{
                "place-self": [`auto`, ...ie()]
            }],
            p: [{
                p: w()
            }],
            px: [{
                px: w()
            }],
            py: [{
                py: w()
            }],
            ps: [{
                ps: w()
            }],
            pe: [{
                pe: w()
            }],
            pbs: [{
                pbs: w()
            }],
            pbe: [{
                pbe: w()
            }],
            pt: [{
                pt: w()
            }],
            pr: [{
                pr: w()
            }],
            pb: [{
                pb: w()
            }],
            pl: [{
                pl: w()
            }],
            m: [{
                m: ae()
            }],
            mx: [{
                mx: ae()
            }],
            my: [{
                my: ae()
            }],
            ms: [{
                ms: ae()
            }],
            me: [{
                me: ae()
            }],
            mbs: [{
                mbs: ae()
            }],
            mbe: [{
                mbe: ae()
            }],
            mt: [{
                mt: ae()
            }],
            mr: [{
                mr: ae()
            }],
            mb: [{
                mb: ae()
            }],
            ml: [{
                ml: ae()
            }],
            "space-x": [{
                "space-x": w()
            }],
            "space-x-reverse": [`space-x-reverse`],
            "space-y": [{
                "space-y": w()
            }],
            "space-y-reverse": [`space-y-reverse`],
            size: [{
                size: oe()
            }],
            "inline-size": [{
                inline: [`auto`, ...se()]
            }],
            "min-inline-size": [{
                "min-inline": [`auto`, ...se()]
            }],
            "max-inline-size": [{
                "max-inline": [`none`, ...se()]
            }],
            "block-size": [{
                block: [`auto`, ...ce()]
            }],
            "min-block-size": [{
                "min-block": [`auto`, ...ce()]
            }],
            "max-block-size": [{
                "max-block": [`none`, ...ce()]
            }],
            w: [{
                w: [s, `screen`, ...oe()]
            }],
            "min-w": [{
                "min-w": [s, `screen`, `none`, ...oe()]
            }],
            "max-w": [{
                "max-w": [s, `screen`, `none`, `prose`, {
                    screen: [o]
                }, ...oe()]
            }],
            h: [{
                h: [`screen`, `lh`, ...oe()]
            }],
            "min-h": [{
                "min-h": [`screen`, `lh`, `none`, ...oe()]
            }],
            "max-h": [{
                "max-h": [`screen`, `lh`, ...oe()]
            }],
            "font-size": [{
                text: [`base`, n, Nf, Ef]
            }],
            "font-smoothing": [`antialiased`, `subpixel-antialiased`],
            "font-style": [`italic`, `not-italic`],
            "font-weight": [{
                font: [r, zf, Of]
            }],
            "font-stretch": [{
                "font-stretch": [`ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`, gf, U]
            }],
            "font-family": [{
                font: [Pf, kf, t]
            }],
            "font-features": [{
                "font-features": [U]
            }],
            "fvn-normal": [`normal-nums`],
            "fvn-ordinal": [`ordinal`],
            "fvn-slashed-zero": [`slashed-zero`],
            "fvn-figure": [`lining-nums`, `oldstyle-nums`],
            "fvn-spacing": [`proportional-nums`, `tabular-nums`],
            "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
            tracking: [{
                tracking: [i, W, U]
            }],
            "line-clamp": [{
                "line-clamp": [H, `none`, W, Df]
            }],
            leading: [{
                leading: [a, ...w()]
            }],
            "list-image": [{
                "list-image": [`none`, W, U]
            }],
            "list-style-position": [{
                list: [`inside`, `outside`]
            }],
            "list-style-type": [{
                list: [`disc`, `decimal`, `none`, W, U]
            }],
            "text-alignment": [{
                text: [`left`, `center`, `right`, `justify`, `start`, `end`]
            }],
            "placeholder-color": [{
                placeholder: D()
            }],
            "text-color": [{
                text: D()
            }],
            "text-decoration": [`underline`, `overline`, `line-through`, `no-underline`],
            "text-decoration-style": [{
                decoration: [...A(), `wavy`]
            }],
            "text-decoration-thickness": [{
                decoration: [H, `from-font`, `auto`, W, Ef]
            }],
            "text-decoration-color": [{
                decoration: D()
            }],
            "underline-offset": [{
                "underline-offset": [H, `auto`, W, U]
            }],
            "text-transform": [`uppercase`, `lowercase`, `capitalize`, `normal-case`],
            "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
            "text-wrap": [{
                text: [`wrap`, `nowrap`, `balance`, `pretty`]
            }],
            indent: [{
                indent: w()
            }],
            "tab-size": [{
                tab: [hf, W, U]
            }],
            "vertical-align": [{
                align: [`baseline`, `top`, `middle`, `bottom`, `text-top`, `text-bottom`, `sub`, `super`, W, U]
            }],
            whitespace: [{
                whitespace: [`normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`]
            }],
            break: [{
                break: [`normal`, `words`, `all`, `keep`]
            }],
            wrap: [{
                wrap: [`break-word`, `anywhere`, `normal`]
            }],
            hyphens: [{
                hyphens: [`none`, `manual`, `auto`]
            }],
            content: [{
                content: [`none`, W, U]
            }],
            "bg-attachment": [{
                bg: [`fixed`, `local`, `scroll`]
            }],
            "bg-clip": [{
                "bg-clip": [`border`, `padding`, `content`, `text`]
            }],
            "bg-origin": [{
                "bg-origin": [`border`, `padding`, `content`]
            }],
            "bg-position": [{
                bg: O()
            }],
            "bg-repeat": [{
                bg: le()
            }],
            "bg-size": [{
                bg: ue()
            }],
            "bg-image": [{
                bg: [`none`, {
                    linear: [{
                        to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`]
                    }, hf, W, U],
                    radial: [``, W, U],
                    conic: [hf, W, U]
                }, Lf, jf]
            }],
            "bg-color": [{
                bg: D()
            }],
            "gradient-from-pos": [{
                from: de()
            }],
            "gradient-via-pos": [{
                via: de()
            }],
            "gradient-to-pos": [{
                to: de()
            }],
            "gradient-from": [{
                from: D()
            }],
            "gradient-via": [{
                via: D()
            }],
            "gradient-to": [{
                to: D()
            }],
            rounded: [{
                rounded: fe()
            }],
            "rounded-s": [{
                "rounded-s": fe()
            }],
            "rounded-e": [{
                "rounded-e": fe()
            }],
            "rounded-t": [{
                "rounded-t": fe()
            }],
            "rounded-r": [{
                "rounded-r": fe()
            }],
            "rounded-b": [{
                "rounded-b": fe()
            }],
            "rounded-l": [{
                "rounded-l": fe()
            }],
            "rounded-ss": [{
                "rounded-ss": fe()
            }],
            "rounded-se": [{
                "rounded-se": fe()
            }],
            "rounded-ee": [{
                "rounded-ee": fe()
            }],
            "rounded-es": [{
                "rounded-es": fe()
            }],
            "rounded-tl": [{
                "rounded-tl": fe()
            }],
            "rounded-tr": [{
                "rounded-tr": fe()
            }],
            "rounded-br": [{
                "rounded-br": fe()
            }],
            "rounded-bl": [{
                "rounded-bl": fe()
            }],
            "border-w": [{
                border: k()
            }],
            "border-w-x": [{
                "border-x": k()
            }],
            "border-w-y": [{
                "border-y": k()
            }],
            "border-w-s": [{
                "border-s": k()
            }],
            "border-w-e": [{
                "border-e": k()
            }],
            "border-w-bs": [{
                "border-bs": k()
            }],
            "border-w-be": [{
                "border-be": k()
            }],
            "border-w-t": [{
                "border-t": k()
            }],
            "border-w-r": [{
                "border-r": k()
            }],
            "border-w-b": [{
                "border-b": k()
            }],
            "border-w-l": [{
                "border-l": k()
            }],
            "divide-x": [{
                "divide-x": k()
            }],
            "divide-x-reverse": [`divide-x-reverse`],
            "divide-y": [{
                "divide-y": k()
            }],
            "divide-y-reverse": [`divide-y-reverse`],
            "border-style": [{
                border: [...A(), `hidden`, `none`]
            }],
            "divide-style": [{
                divide: [...A(), `hidden`, `none`]
            }],
            "border-color": [{
                border: D()
            }],
            "border-color-x": [{
                "border-x": D()
            }],
            "border-color-y": [{
                "border-y": D()
            }],
            "border-color-s": [{
                "border-s": D()
            }],
            "border-color-e": [{
                "border-e": D()
            }],
            "border-color-bs": [{
                "border-bs": D()
            }],
            "border-color-be": [{
                "border-be": D()
            }],
            "border-color-t": [{
                "border-t": D()
            }],
            "border-color-r": [{
                "border-r": D()
            }],
            "border-color-b": [{
                "border-b": D()
            }],
            "border-color-l": [{
                "border-l": D()
            }],
            "divide-color": [{
                divide: D()
            }],
            "outline-style": [{
                outline: [...A(), `none`, `hidden`]
            }],
            "outline-offset": [{
                "outline-offset": [H, W, U]
            }],
            "outline-w": [{
                outline: [``, H, Nf, Ef]
            }],
            "outline-color": [{
                outline: D()
            }],
            shadow: [{
                shadow: [``, `none`, u, Rf, Mf]
            }],
            "shadow-color": [{
                shadow: D()
            }],
            "inset-shadow": [{
                "inset-shadow": [`none`, d, Rf, Mf]
            }],
            "inset-shadow-color": [{
                "inset-shadow": D()
            }],
            "ring-w": [{
                ring: k()
            }],
            "ring-w-inset": [`ring-inset`],
            "ring-color": [{
                ring: D()
            }],
            "ring-offset-w": [{
                "ring-offset": [H, Ef]
            }],
            "ring-offset-color": [{
                "ring-offset": D()
            }],
            "inset-ring-w": [{
                "inset-ring": k()
            }],
            "inset-ring-color": [{
                "inset-ring": D()
            }],
            "text-shadow": [{
                "text-shadow": [`none`, f, Rf, Mf]
            }],
            "text-shadow-color": [{
                "text-shadow": D()
            }],
            opacity: [{
                opacity: [H, W, U]
            }],
            "mix-blend": [{
                "mix-blend": [...pe(), `plus-darker`, `plus-lighter`]
            }],
            "bg-blend": [{
                "bg-blend": pe()
            }],
            "mask-clip": [{
                "mask-clip": [`border`, `padding`, `content`, `fill`, `stroke`, `view`]
            }, `mask-no-clip`],
            "mask-composite": [{
                mask: [`add`, `subtract`, `intersect`, `exclude`]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [H]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": me()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": me()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": D()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": D()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": me()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": me()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": D()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": D()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": me()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": me()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": D()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": D()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": me()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": me()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": D()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": D()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": me()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": me()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": D()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": D()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": me()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": me()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": D()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": D()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": me()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": me()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": D()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": D()
            }],
            "mask-image-radial": [{
                "mask-radial": [W, U]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": me()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": me()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": D()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": D()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": [`circle`, `ellipse`]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: [`side`, `corner`],
                    farthest: [`side`, `corner`]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": b()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [H]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": me()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": me()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": D()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": D()
            }],
            "mask-mode": [{
                mask: [`alpha`, `luminance`, `match`]
            }],
            "mask-origin": [{
                "mask-origin": [`border`, `padding`, `content`, `fill`, `stroke`, `view`]
            }],
            "mask-position": [{
                mask: O()
            }],
            "mask-repeat": [{
                mask: le()
            }],
            "mask-size": [{
                mask: ue()
            }],
            "mask-type": [{
                "mask-type": [`alpha`, `luminance`]
            }],
            "mask-image": [{
                mask: [`none`, W, U]
            }],
            filter: [{
                filter: [``, `none`, W, U]
            }],
            blur: [{
                blur: he()
            }],
            brightness: [{
                brightness: [H, W, U]
            }],
            contrast: [{
                contrast: [H, W, U]
            }],
            "drop-shadow": [{
                "drop-shadow": [``, `none`, p, Rf, Mf]
            }],
            "drop-shadow-color": [{
                "drop-shadow": D()
            }],
            grayscale: [{
                grayscale: [``, H, W, U]
            }],
            "hue-rotate": [{
                "hue-rotate": [H, W, U]
            }],
            invert: [{
                invert: [``, H, W, U]
            }],
            saturate: [{
                saturate: [H, W, U]
            }],
            sepia: [{
                sepia: [``, H, W, U]
            }],
            "backdrop-filter": [{
                "backdrop-filter": [``, `none`, W, U]
            }],
            "backdrop-blur": [{
                "backdrop-blur": he()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [H, W, U]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [H, W, U]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [``, H, W, U]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [H, W, U]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [``, H, W, U]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [H, W, U]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [H, W, U]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [``, H, W, U]
            }],
            "border-collapse": [{
                border: [`collapse`, `separate`]
            }],
            "border-spacing": [{
                "border-spacing": w()
            }],
            "border-spacing-x": [{
                "border-spacing-x": w()
            }],
            "border-spacing-y": [{
                "border-spacing-y": w()
            }],
            "table-layout": [{
                table: [`auto`, `fixed`]
            }],
            caption: [{
                caption: [`top`, `bottom`]
            }],
            transition: [{
                transition: [``, `all`, `colors`, `opacity`, `shadow`, `transform`, `none`, W, U]
            }],
            "transition-behavior": [{
                transition: [`normal`, `discrete`]
            }],
            duration: [{
                duration: [H, `initial`, W, U]
            }],
            ease: [{
                ease: [`linear`, `initial`, _, W, U]
            }],
            delay: [{
                delay: [H, W, U]
            }],
            animate: [{
                animate: [`none`, v, W, U]
            }],
            backface: [{
                backface: [`hidden`, `visible`]
            }],
            perspective: [{
                perspective: [h, W, U]
            }],
            "perspective-origin": [{
                "perspective-origin": x()
            }],
            rotate: [{
                rotate: ge()
            }],
            "rotate-x": [{
                "rotate-x": ge()
            }],
            "rotate-y": [{
                "rotate-y": ge()
            }],
            "rotate-z": [{
                "rotate-z": ge()
            }],
            scale: [{
                scale: _e()
            }],
            "scale-x": [{
                "scale-x": _e()
            }],
            "scale-y": [{
                "scale-y": _e()
            }],
            "scale-z": [{
                "scale-z": _e()
            }],
            "scale-3d": [`scale-3d`],
            skew: [{
                skew: ve()
            }],
            "skew-x": [{
                "skew-x": ve()
            }],
            "skew-y": [{
                "skew-y": ve()
            }],
            transform: [{
                transform: [W, U, ``, `none`, `gpu`, `cpu`]
            }],
            "transform-origin": [{
                origin: x()
            }],
            "transform-style": [{
                transform: [`3d`, `flat`]
            }],
            translate: [{
                translate: ye()
            }],
            "translate-x": [{
                "translate-x": ye()
            }],
            "translate-y": [{
                "translate-y": ye()
            }],
            "translate-z": [{
                "translate-z": ye()
            }],
            "translate-none": [`translate-none`],
            zoom: [{
                zoom: [hf, W, U]
            }],
            accent: [{
                accent: D()
            }],
            appearance: [{
                appearance: [`none`, `auto`]
            }],
            "caret-color": [{
                caret: D()
            }],
            "color-scheme": [{
                scheme: [`normal`, `dark`, `light`, `light-dark`, `only-dark`, `only-light`]
            }],
            cursor: [{
                cursor: [`auto`, `default`, `pointer`, `wait`, `text`, `move`, `help`, `not-allowed`, `none`, `context-menu`, `progress`, `cell`, `crosshair`, `vertical-text`, `alias`, `copy`, `no-drop`, `grab`, `grabbing`, `all-scroll`, `col-resize`, `row-resize`, `n-resize`, `e-resize`, `s-resize`, `w-resize`, `ne-resize`, `nw-resize`, `se-resize`, `sw-resize`, `ew-resize`, `ns-resize`, `nesw-resize`, `nwse-resize`, `zoom-in`, `zoom-out`, W, U]
            }],
            "field-sizing": [{
                "field-sizing": [`fixed`, `content`]
            }],
            "pointer-events": [{
                "pointer-events": [`auto`, `none`]
            }],
            resize: [{
                resize: [`none`, ``, `y`, `x`]
            }],
            "scroll-behavior": [{
                scroll: [`auto`, `smooth`]
            }],
            "scrollbar-thumb-color": [{
                "scrollbar-thumb": D()
            }],
            "scrollbar-track-color": [{
                "scrollbar-track": D()
            }],
            "scrollbar-gutter": [{
                "scrollbar-gutter": [`auto`, `stable`, `both`]
            }],
            "scrollbar-w": [{
                scrollbar: [`auto`, `thin`, `none`]
            }],
            "scroll-m": [{
                "scroll-m": w()
            }],
            "scroll-mx": [{
                "scroll-mx": w()
            }],
            "scroll-my": [{
                "scroll-my": w()
            }],
            "scroll-ms": [{
                "scroll-ms": w()
            }],
            "scroll-me": [{
                "scroll-me": w()
            }],
            "scroll-mbs": [{
                "scroll-mbs": w()
            }],
            "scroll-mbe": [{
                "scroll-mbe": w()
            }],
            "scroll-mt": [{
                "scroll-mt": w()
            }],
            "scroll-mr": [{
                "scroll-mr": w()
            }],
            "scroll-mb": [{
                "scroll-mb": w()
            }],
            "scroll-ml": [{
                "scroll-ml": w()
            }],
            "scroll-p": [{
                "scroll-p": w()
            }],
            "scroll-px": [{
                "scroll-px": w()
            }],
            "scroll-py": [{
                "scroll-py": w()
            }],
            "scroll-ps": [{
                "scroll-ps": w()
            }],
            "scroll-pe": [{
                "scroll-pe": w()
            }],
            "scroll-pbs": [{
                "scroll-pbs": w()
            }],
            "scroll-pbe": [{
                "scroll-pbe": w()
            }],
            "scroll-pt": [{
                "scroll-pt": w()
            }],
            "scroll-pr": [{
                "scroll-pr": w()
            }],
            "scroll-pb": [{
                "scroll-pb": w()
            }],
            "scroll-pl": [{
                "scroll-pl": w()
            }],
            "snap-align": [{
                snap: [`start`, `end`, `center`, `align-none`]
            }],
            "snap-stop": [{
                snap: [`normal`, `always`]
            }],
            "snap-type": [{
                snap: [`none`, `x`, `y`, `both`]
            }],
            "snap-strictness": [{
                snap: [`mandatory`, `proximity`]
            }],
            touch: [{
                touch: [`auto`, `none`, `manipulation`]
            }],
            "touch-x": [{
                "touch-pan": [`x`, `left`, `right`]
            }],
            "touch-y": [{
                "touch-pan": [`y`, `up`, `down`]
            }],
            "touch-pz": [`touch-pinch-zoom`],
            select: [{
                select: [`none`, `text`, `all`, `auto`]
            }],
            "will-change": [{
                "will-change": [`auto`, `scroll`, `contents`, `transform`, W, U]
            }],
            fill: [{
                fill: [`none`, ...D()]
            }],
            "stroke-w": [{
                stroke: [H, Nf, Ef, Df]
            }],
            stroke: [{
                stroke: [`none`, ...D()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": [`auto`, `none`]
            }]
        },
        conflictingClassGroups: {
            "container-named": [`container-type`],
            overflow: [`overflow-x`, `overflow-y`],
            overscroll: [`overscroll-x`, `overscroll-y`],
            inset: [`inset-x`, `inset-y`, `inset-bs`, `inset-be`, `start`, `end`, `top`, `right`, `bottom`, `left`],
            "inset-x": [`right`, `left`],
            "inset-y": [`top`, `bottom`],
            flex: [`basis`, `grow`, `shrink`],
            gap: [`gap-x`, `gap-y`],
            p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
            px: [`pr`, `pl`],
            py: [`pt`, `pb`],
            m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
            mx: [`mr`, `ml`],
            my: [`mt`, `mb`],
            size: [`w`, `h`],
            "font-size": [`leading`],
            "fvn-normal": [`fvn-ordinal`, `fvn-slashed-zero`, `fvn-figure`, `fvn-spacing`, `fvn-fraction`],
            "fvn-ordinal": [`fvn-normal`],
            "fvn-slashed-zero": [`fvn-normal`],
            "fvn-figure": [`fvn-normal`],
            "fvn-spacing": [`fvn-normal`],
            "fvn-fraction": [`fvn-normal`],
            "line-clamp": [`display`, `overflow`],
            rounded: [`rounded-s`, `rounded-e`, `rounded-t`, `rounded-r`, `rounded-b`, `rounded-l`, `rounded-ss`, `rounded-se`, `rounded-ee`, `rounded-es`, `rounded-tl`, `rounded-tr`, `rounded-br`, `rounded-bl`],
            "rounded-s": [`rounded-ss`, `rounded-es`],
            "rounded-e": [`rounded-se`, `rounded-ee`],
            "rounded-t": [`rounded-tl`, `rounded-tr`],
            "rounded-r": [`rounded-tr`, `rounded-br`],
            "rounded-b": [`rounded-br`, `rounded-bl`],
            "rounded-l": [`rounded-tl`, `rounded-bl`],
            "border-spacing": [`border-spacing-x`, `border-spacing-y`],
            "border-w": [`border-w-x`, `border-w-y`, `border-w-s`, `border-w-e`, `border-w-bs`, `border-w-be`, `border-w-t`, `border-w-r`, `border-w-b`, `border-w-l`],
            "border-w-x": [`border-w-r`, `border-w-l`],
            "border-w-y": [`border-w-t`, `border-w-b`],
            "border-color": [`border-color-x`, `border-color-y`, `border-color-s`, `border-color-e`, `border-color-bs`, `border-color-be`, `border-color-t`, `border-color-r`, `border-color-b`, `border-color-l`],
            "border-color-x": [`border-color-r`, `border-color-l`],
            "border-color-y": [`border-color-t`, `border-color-b`],
            translate: [`translate-x`, `translate-y`, `translate-none`],
            "translate-none": [`translate`, `translate-x`, `translate-y`, `translate-z`],
            "scroll-m": [`scroll-mx`, `scroll-my`, `scroll-ms`, `scroll-me`, `scroll-mbs`, `scroll-mbe`, `scroll-mt`, `scroll-mr`, `scroll-mb`, `scroll-ml`],
            "scroll-mx": [`scroll-mr`, `scroll-ml`],
            "scroll-my": [`scroll-mt`, `scroll-mb`],
            "scroll-p": [`scroll-px`, `scroll-py`, `scroll-ps`, `scroll-pe`, `scroll-pbs`, `scroll-pbe`, `scroll-pt`, `scroll-pr`, `scroll-pb`, `scroll-pl`],
            "scroll-px": [`scroll-pr`, `scroll-pl`],
            "scroll-py": [`scroll-pt`, `scroll-pb`],
            touch: [`touch-x`, `touch-y`, `touch-pz`],
            "touch-x": [`touch`],
            "touch-y": [`touch`],
            "touch-pz": [`touch`]
        },
        conflictingClassGroupModifiers: {
            "font-size": [`leading`]
        },
        postfixLookupClassGroups: [`container-type`],
        orderSensitiveModifiers: [`*`, `**`, `after`, `backdrop`, `before`, `details-content`, `file`, `first-letter`, `first-line`, `marker`, `placeholder`, `selection`]
    }
}
);
function Zf(...e) {
    return Xf(Ed(e))
}
function Qf({className: e}) {
    return (0,
    I.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        "aria-hidden": `true`,
        className: e,
        children: (0,
        I.jsx)(`path`, {
            d: `M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.2 4.24-9.44 9.45-9.44a9.4 9.4 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.33 11.33 0 0 0 5.37 1.37h.01c6.26 0 11.36-5.1 11.36-11.37a11.3 11.3 0 0 0-3.33-8.04`
        })
    })
}
function $f({message: e, label: t=`Fale com nossa equipe`, variant: n=`primary`, className: r, full: i}) {
    return (0,
    I.jsxs)(`a`, {
        href: wd(e),
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: Zf(`btn`, n === `primary` && `btn-primary`, n === `outline` && `btn-outline`, n === `light` && `btn-light`, i && `w-full`, r),
        children: [(0,
        I.jsx)(Qf, {
            className: `h-5 w-5 shrink-0`
        }), (0,
        I.jsx)(`span`, {
            children: t
        })]
    })
}
function ep() {
    return (0,
    I.jsx)(`a`, {
        href: wd(),
        target: `_blank`,
        rel: `noopener noreferrer`,
        "aria-label": `Conversar pelo WhatsApp`,
        className: `fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50`,
        children: (0,
        I.jsx)(Qf, {
            className: `h-7 w-7`
        })
    })
}
function tp({light: e}) {
    return (0,
    I.jsx)(`span`, {
        className: e ? `inline-block rounded-lg bg-background px-3 py-2` : `inline-block`,
        children: (0,
        I.jsx)(`img`, {
            src: Xu.url,
            alt: `Carvalho Soluções em Auditoria`,
            width: 1410,
            height: 450,
            className: `h-10 w-auto sm:h-12`
        })
    })
}
function np() {
    let[e,t] = (0,
    F.useState)(!1);
    return (0,
    I.jsxs)(`header`, {
        className: `sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur`,
        children: [(0,
        I.jsxs)(`div`, {
            className: `container-site flex h-18 items-center justify-between gap-6 py-3`,
            children: [(0,
            I.jsx)(al, {
                to: `/`,
                "aria-label": `Carvalho Soluções em Auditoria — Início`,
                onClick: () => t(!1),
                children: (0,
                I.jsx)(tp, {})
            }), (0,
            I.jsx)(`nav`, {
                "aria-label": `Principal`,
                className: `hidden lg:block`,
                children: (0,
                I.jsx)(`ul`, {
                    className: `flex items-center gap-1`,
                    children: vd.slice(1).map(e => (0,
                    I.jsx)(`li`, {
                        children: (0,
                        I.jsx)(al, {
                            to: e.to,
                            className: `nav-link`,
                            activeProps: {
                                className: `nav-link nav-link-active`
                            },
                            children: e.label
                        })
                    }, e.to))
                })
            }), (0,
            I.jsx)(`div`, {
                className: `hidden lg:block`,
                children: (0,
                I.jsx)($f, {
                    label: `Fale conosco`,
                    className: `!py-2.5`
                })
            }), (0,
            I.jsx)(`button`, {
                className: `flex h-11 w-11 items-center justify-center rounded-md text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden`,
                "aria-label": e ? `Fechar menu` : `Abrir menu`,
                "aria-expanded": e,
                onClick: () => t(e => !e),
                children: e ? (0,
                I.jsx)(fd, {}) : (0,
                I.jsx)(cd, {})
            })]
        }), e && (0,
        I.jsx)(`nav`, {
            "aria-label": `Menu móvel`,
            className: `border-t border-border bg-background lg:hidden`,
            children: (0,
            I.jsxs)(`ul`, {
                className: `container-site flex flex-col py-3`,
                children: [vd.map(e => (0,
                I.jsx)(`li`, {
                    children: (0,
                    I.jsx)(al, {
                        to: e.to,
                        onClick: () => t(!1),
                        className: `block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted`,
                        activeProps: {
                            className: `block rounded-md px-3 py-3 text-base font-semibold text-primary bg-muted`
                        },
                        activeOptions: {
                            exact: !0
                        },
                        children: e.label
                    })
                }, e.to)), (0,
                I.jsx)(`li`, {
                    className: `pt-3 pb-2`,
                    children: (0,
                    I.jsx)($f, {
                        full: !0
                    })
                })]
            })
        })]
    })
}
function rp() {
    let e = new Date().getFullYear();
    return (0,
    I.jsxs)(`footer`, {
        className: `bg-deep text-primary-foreground`,
        children: [(0,
        I.jsxs)(`div`, {
            className: `container-site grid gap-10 py-16 md:grid-cols-3`,
            children: [(0,
            I.jsxs)(`div`, {
                children: [(0,
                I.jsx)(tp, {
                    light: !0
                }), (0,
                I.jsx)(`p`, {
                    className: `mt-4 max-w-xs text-sm text-primary-foreground/70`,
                    children: `Soluções em auditoria de ativo imobilizado.`
                })]
            }), (0,
            I.jsxs)(`nav`, {
                "aria-label": `Rodapé`,
                children: [(0,
                I.jsx)(`h2`, {
                    className: `eyebrow text-gold`,
                    children: `Navegação`
                }), (0,
                I.jsx)(`ul`, {
                    className: `mt-4 grid grid-cols-2 gap-2 text-sm`,
                    children: vd.map(e => (0,
                    I.jsx)(`li`, {
                        children: (0,
                        I.jsx)(al, {
                            to: e.to,
                            className: `text-primary-foreground/75 hover:text-primary-foreground`,
                            children: e.label
                        })
                    }, e.to))
                })]
            }), (0,
            I.jsxs)(`div`, {
                children: [(0,
                I.jsx)(`h2`, {
                    className: `eyebrow text-gold`,
                    children: `Contato`
                }), (0,
                I.jsxs)(`ul`, {
                    className: `mt-4 space-y-2 text-sm`,
                    children: [(0,
                    I.jsx)(`li`, {
                        children: (0,
                        I.jsx)(`a`, {
                            href: wd(),
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            className: `text-primary-foreground/75 hover:text-primary-foreground`,
                            children: `Atendimento pelo WhatsApp`
                        })
                    }), (0,
                    I.jsx)(`li`, {
                        children: (0,
                        I.jsx)(`a`, {
                            href: `mailto:servicos@carvalho.auditoria.com`,
                            className: `text-primary-foreground/75 hover:text-primary-foreground`,
                            children: `servicos@carvalho.auditoria.com`
                        })
                    })]
                })]
            })]
        }), (0,
        I.jsx)(`div`, {
            className: `border-t border-primary-foreground/10`,
            children: (0,
            I.jsxs)(`div`, {
                className: `container-site flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 md:flex-row md:justify-between`,
                children: [(0,
                I.jsxs)(`p`, {
                    children: [`© `, e, ` Carvalho Soluções em Auditoria. Todos os direitos reservados.`]
                }), (0,
                I.jsx)(`p`, {
                    children: `Privacidade: as informações compartilhadas pelo WhatsApp são utilizadas exclusivamente para o atendimento da sua solicitação.`
                })]
            })
        })]
    })
}
function ip() {
    return (0,
    I.jsx)(`div`, {
        className: `flex min-h-screen items-center justify-center bg-background px-4`,
        children: (0,
        I.jsxs)(`div`, {
            className: `max-w-md text-center`,
            children: [(0,
            I.jsx)(`h1`, {
                className: `text-7xl font-bold text-foreground`,
                children: `404`
            }), (0,
            I.jsx)(`h2`, {
                className: `mt-4 text-xl font-semibold text-foreground`,
                children: `Página não encontrada`
            }), (0,
            I.jsx)(`p`, {
                className: `mt-2 text-sm text-muted-foreground`,
                children: `A página que você procura não existe ou foi movida.`
            }), (0,
            I.jsx)(`div`, {
                className: `mt-6`,
                children: (0,
                I.jsx)(al, {
                    to: `/`,
                    className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
                    children: `Voltar ao início`
                })
            })]
        })
    })
}
function ap({error: e, reset: t}) {
    console.error(e);
    let n = cc();
    return (0,
    F.useEffect)( () => {
        qu(e, {
            boundary: `tanstack_root_error_component`
        })
    }
    , [e]),
    (0,
    I.jsx)(`div`, {
        className: `flex min-h-screen items-center justify-center bg-background px-4`,
        children: (0,
        I.jsxs)(`div`, {
            className: `max-w-md text-center`,
            children: [(0,
            I.jsx)(`h1`, {
                className: `text-xl font-semibold tracking-tight text-foreground`,
                children: `This page didn't load`
            }), (0,
            I.jsx)(`p`, {
                className: `mt-2 text-sm text-muted-foreground`,
                children: `Something went wrong on our end. You can try refreshing or head back home.`
            }), (0,
            I.jsxs)(`div`, {
                className: `mt-6 flex flex-wrap justify-center gap-2`,
                children: [(0,
                I.jsx)(`button`, {
                    onClick: () => {
                        n.invalidate(),
                        t()
                    }
                    ,
                    className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
                    children: `Try again`
                }), (0,
                I.jsx)(`a`, {
                    href: `/`,
                    className: `inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent`,
                    children: `Voltar ao início`
                })]
            })]
        })
    })
}
var op = ll()({
    head: () => ({
        meta: [{
            charSet: `utf-8`
        }, {
            name: `viewport`,
            content: `width=device-width, initial-scale=1`
        }, {
            title: `Carvalho Soluções em Auditoria | Auditoria de Ativo Imobilizado`
        }, {
            name: `description`,
            content: `Conheça os serviços da Carvalho Soluções em Auditoria relacionados à auditoria de ativo imobilizado, levantamento físico patrimonial e conciliação físico-contábil.`
        }, {
            property: `og:type`,
            content: `website`
        }, {
            property: `og:locale`,
            content: `pt_BR`
        }, {
            name: `twitter:card`,
            content: `summary_large_image`
        }],
        links: [{
            rel: `stylesheet`,
            href: Ku
        }, {
            rel: `icon`,
            href: `/favicon.png`,
            type: `image/png`
        }, {
            rel: `preconnect`,
            href: `https://fonts.googleapis.com`
        }, {
            rel: `preconnect`,
            href: `https://fonts.gstatic.com`,
            crossOrigin: `anonymous`
        }, {
            rel: `stylesheet`,
            href: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@500;600;700;800&display=swap`
        }]
    }),
    shellComponent: sp,
    component: cp,
    notFoundComponent: ip,
    errorComponent: ap
});
function sp({children: e}) {
    return (0,
    I.jsxs)(`html`, {
        lang: `pt-BR`,
        children: [(0,
        I.jsx)(`head`, {
            children: (0,
            I.jsx)(Rl, {})
        }), (0,
        I.jsxs)(`body`, {
            children: [e, (0,
            I.jsx)(Bl, {})]
        })]
    })
}
function cp() {
    let {queryClient: e} = op.useRouteContext();
    return (0,
    I.jsxs)(Gu, {
        client: e,
        children: [(0,
        I.jsx)(`a`, {
            href: `#conteudo`,
            className: `sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground`,
            children: `Pular para o conteúdo`
        }), (0,
        I.jsx)(np, {}), (0,
        I.jsx)(`main`, {
            id: `conteudo`,
            children: (0,
            I.jsx)(Cl, {})
        }), (0,
        I.jsx)(rp, {}), (0,
        I.jsx)(ep, {})]
    })
}
function lp(e, t) {
    return {
        meta: [{
            title: e
        }, {
            name: `description`,
            content: t
        }, {
            property: `og:title`,
            content: e
        }, {
            property: `og:description`,
            content: t
        }, {
            property: `og:type`,
            content: `website`
        }, {
            name: `twitter:card`,
            content: `summary_large_image`
        }]
    }
}
var up = `modulepreload`, dp = function(e) {
    return `/` + e
}, fp = {}, pp = function(e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
        let e = document.getElementsByTagName(`link`)
          , i = document.querySelector(`meta[property=csp-nonce]`)
          , a = i?.nonce || i?.getAttribute(`nonce`);
        function o(e) {
            return Promise.all(e.map(e => Promise.resolve(e).then(e => ({
                status: `fulfilled`,
                value: e
            }), e => ({
                status: `rejected`,
                reason: e
            }))))
        }
        function s(e) {
            return import.meta.resolve ? import.meta.resolve(e) : new URL(e,import.meta.url).href
        }
        r = o(t.map(t => {
            if (t = dp(t, n),
            t = s(t),
            t in fp)
                return;
            fp[t] = !0;
            let r = t.endsWith(`.css`);
            for (let n = e.length - 1; n >= 0; n--) {
                let i = e[n];
                if (i.href === t && (!r || i.rel === `stylesheet`))
                    return
            }
            let i = document.createElement(`link`);
            if (i.rel = r ? `stylesheet` : up,
            r || (i.as = `script`),
            i.crossOrigin = ``,
            i.href = t,
            a && i.setAttribute(`nonce`, a),
            document.head.appendChild(i),
            r)
                return new Promise( (e, n) => {
                    i.addEventListener(`load`, e),
                    i.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`)))
                }
                )
        }
        ))
    }
    function i(e) {
        let t = new Event(`vite:preloadError`,{
            cancelable: !0
        });
        if (t.payload = e,
        window.dispatchEvent(t),
        !t.defaultPrevented)
            throw e
    }
    return r.then(t => {
        for (let e of t || [])
            e.status === `rejected` && i(e.reason);
        return e().catch(i)
    }
    )
}, mp = fl(`/`)({
    head: () => lp(`Carvalho Soluções em Auditoria | Auditoria de Ativo Imobilizado`, `Conheça os serviços da Carvalho Soluções em Auditoria relacionados à auditoria de ativo imobilizado, levantamento físico patrimonial e conciliação físico-contábil.`),
    component: pl( () => pp( () => import(`./routes-B4SEGGHR.js`), __vite__mapDeps([0, 1])), `component`)
}), hp = fl(`/como-funciona`)({
    head: () => lp(`Como Funciona | Carvalho Soluções em Auditoria`, `Do primeiro contato à entrega dos resultados: entenda as etapas de atendimento em auditoria de ativo imobilizado.`),
    component: pl( () => pp( () => import(`./como-funciona-DA5kYY2P.js`), __vite__mapDeps([2, 1])), `component`)
}), G;
(function(e) {
    e.assertEqual = e => {}
    ;
    function t(e) {}
    e.assertIs = t;
    function n(e) {
        throw Error()
    }
    e.assertNever = n,
    e.arrayToEnum = e => {
        let t = {};
        for (let n of e)
            t[n] = n;
        return t
    }
    ,
    e.getValidEnumValues = t => {
        let n = e.objectKeys(t).filter(e => typeof t[t[e]] != `number`)
          , r = {};
        for (let e of n)
            r[e] = t[e];
        return e.objectValues(r)
    }
    ,
    e.objectValues = t => e.objectKeys(t).map(function(e) {
        return t[e]
    }),
    e.objectKeys = typeof Object.keys == `function` ? e => Object.keys(e) : e => {
        let t = [];
        for (let n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        return t
    }
    ,
    e.find = (e, t) => {
        for (let n of e)
            if (t(n))
                return n
    }
    ,
    e.isInteger = typeof Number.isInteger == `function` ? e => Number.isInteger(e) : e => typeof e == `number` && Number.isFinite(e) && Math.floor(e) === e;
    function r(e, t=` | `) {
        return e.map(e => typeof e == `string` ? `'${e}'` : e).join(t)
    }
    e.joinValues = r,
    e.jsonStringifyReplacer = (e, t) => typeof t == `bigint` ? t.toString() : t
}
)(G ||= {});
var gp;
(function(e) {
    e.mergeShapes = (e, t) => ({
        ...e,
        ...t
    })
}
)(gp ||= {});
var K = G.arrayToEnum([`string`, `nan`, `number`, `integer`, `float`, `boolean`, `date`, `bigint`, `symbol`, `function`, `undefined`, `null`, `array`, `object`, `unknown`, `promise`, `void`, `never`, `map`, `set`])
  , _p = e => {
    switch (typeof e) {
    case `undefined`:
        return K.undefined;
    case `string`:
        return K.string;
    case `number`:
        return Number.isNaN(e) ? K.nan : K.number;
    case `boolean`:
        return K.boolean;
    case `function`:
        return K.function;
    case `bigint`:
        return K.bigint;
    case `symbol`:
        return K.symbol;
    case `object`:
        return Array.isArray(e) ? K.array : e === null ? K.null : e.then && typeof e.then == `function` && e.catch && typeof e.catch == `function` ? K.promise : typeof Map < `u` && e instanceof Map ? K.map : typeof Set < `u` && e instanceof Set ? K.set : typeof Date < `u` && e instanceof Date ? K.date : K.object;
    default:
        return K.unknown
    }
}
  , q = G.arrayToEnum([`invalid_type`, `invalid_literal`, `custom`, `invalid_union`, `invalid_union_discriminator`, `invalid_enum_value`, `unrecognized_keys`, `invalid_arguments`, `invalid_return_type`, `invalid_date`, `invalid_string`, `too_small`, `too_big`, `invalid_intersection_types`, `not_multiple_of`, `not_finite`])
  , vp = class e extends Error {
    get errors() {
        return this.issues
    }
    constructor(e) {
        super(),
        this.issues = [],
        this.addIssue = e => {
            this.issues = [...this.issues, e]
        }
        ,
        this.addIssues = (e=[]) => {
            this.issues = [...this.issues, ...e]
        }
        ;
        let t = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t,
        this.name = `ZodError`,
        this.issues = e
    }
    format(e) {
        let t = e || function(e) {
            return e.message
        }
          , n = {
            _errors: []
        }
          , r = e => {
            for (let i of e.issues)
                if (i.code === `invalid_union`)
                    i.unionErrors.map(r);
                else if (i.code === `invalid_return_type`)
                    r(i.returnTypeError);
                else if (i.code === `invalid_arguments`)
                    r(i.argumentsError);
                else if (i.path.length === 0)
                    n._errors.push(t(i));
                else {
                    let e = n
                      , r = 0;
                    for (; r < i.path.length; ) {
                        let n = i.path[r];
                        r === i.path.length - 1 ? (e[n] = e[n] || {
                            _errors: []
                        },
                        e[n]._errors.push(t(i))) : e[n] = e[n] || {
                            _errors: []
                        },
                        e = e[n],
                        r++
                    }
                }
        }
        ;
        return r(this),
        n
    }
    static assert(t) {
        if (!(t instanceof e))
            throw Error(`Not a ZodError: ${t}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, G.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(e=e => e.message) {
        let t = {}
          , n = [];
        for (let r of this.issues)
            if (r.path.length > 0) {
                let n = r.path[0];
                t[n] = t[n] || [],
                t[n].push(e(r))
            } else
                n.push(e(r));
        return {
            formErrors: n,
            fieldErrors: t
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
;
vp.create = e => new vp(e);
var yp = (e, t) => {
    let n;
    switch (e.code) {
    case q.invalid_type:
        n = e.received === K.undefined ? `Required` : `Expected ${e.expected}, received ${e.received}`;
        break;
    case q.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(e.expected, G.jsonStringifyReplacer)}`;
        break;
    case q.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${G.joinValues(e.keys, `, `)}`;
        break;
    case q.invalid_union:
        n = `Invalid input`;
        break;
    case q.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${G.joinValues(e.options)}`;
        break;
    case q.invalid_enum_value:
        n = `Invalid enum value. Expected ${G.joinValues(e.options)}, received '${e.received}'`;
        break;
    case q.invalid_arguments:
        n = `Invalid function arguments`;
        break;
    case q.invalid_return_type:
        n = `Invalid function return type`;
        break;
    case q.invalid_date:
        n = `Invalid date`;
        break;
    case q.invalid_string:
        typeof e.validation == `object` ? `includes` in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`,
        typeof e.validation.position == `number` && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : `startsWith` in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : `endsWith` in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : G.assertNever(e.validation) : n = e.validation === `regex` ? `Invalid` : `Invalid ${e.validation}`;
        break;
    case q.too_small:
        n = e.type === `array` ? `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at least` : `more than`} ${e.minimum} element(s)` : e.type === `string` ? `String must contain ${e.exact ? `exactly` : e.inclusive ? `at least` : `over`} ${e.minimum} character(s)` : e.type === `number` || e.type === `bigint` ? `Number must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${e.minimum}` : e.type === `date` ? `Date must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(e.minimum))}` : `Invalid input`;
        break;
    case q.too_big:
        n = e.type === `array` ? `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `less than`} ${e.maximum} element(s)` : e.type === `string` ? `String must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `under`} ${e.maximum} character(s)` : e.type === `number` ? `Number must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}` : e.type === `bigint` ? `BigInt must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}` : e.type === `date` ? `Date must be ${e.exact ? `exactly` : e.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(e.maximum))}` : `Invalid input`;
        break;
    case q.custom:
        n = `Invalid input`;
        break;
    case q.invalid_intersection_types:
        n = `Intersection results could not be merged`;
        break;
    case q.not_multiple_of:
        n = `Number must be a multiple of ${e.multipleOf}`;
        break;
    case q.not_finite:
        n = `Number must be finite`;
        break;
    default:
        n = t.defaultError,
        G.assertNever(e)
    }
    return {
        message: n
    }
}
  , bp = yp;
function xp() {
    return bp
}
var Sp = e => {
    let {data: t, path: n, errorMaps: r, issueData: i} = e
      , a = [...n, ...i.path || []]
      , o = {
        ...i,
        path: a
    };
    if (i.message !== void 0)
        return {
            ...i,
            path: a,
            message: i.message
        };
    let s = ``
      , c = r.filter(e => !!e).slice().reverse();
    for (let e of c)
        s = e(o, {
            data: t,
            defaultError: s
        }).message;
    return {
        ...i,
        path: a,
        message: s
    }
}
;
function J(e, t) {
    let n = xp()
      , r = Sp({
        issueData: t,
        data: e.data,
        path: e.path,
        errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === yp ? void 0 : yp].filter(e => !!e)
    });
    e.common.issues.push(r)
}
var Cp = class e {
    constructor() {
        this.value = `valid`
    }
    dirty() {
        this.value === `valid` && (this.value = `dirty`)
    }
    abort() {
        this.value !== `aborted` && (this.value = `aborted`)
    }
    static mergeArray(e, t) {
        let n = [];
        for (let r of t) {
            if (r.status === `aborted`)
                return Y;
            r.status === `dirty` && e.dirty(),
            n.push(r.value)
        }
        return {
            status: e.value,
            value: n
        }
    }
    static async mergeObjectAsync(t, n) {
        let r = [];
        for (let e of n) {
            let t = await e.key
              , n = await e.value;
            r.push({
                key: t,
                value: n
            })
        }
        return e.mergeObjectSync(t, r)
    }
    static mergeObjectSync(e, t) {
        let n = {};
        for (let r of t) {
            let {key: t, value: i} = r;
            if (t.status === `aborted` || i.status === `aborted`)
                return Y;
            t.status === `dirty` && e.dirty(),
            i.status === `dirty` && e.dirty(),
            t.value !== `__proto__` && (i.value !== void 0 || r.alwaysSet) && (n[t.value] = i.value)
        }
        return {
            status: e.value,
            value: n
        }
    }
}
, Y = Object.freeze({
    status: `aborted`
}), wp = e => ({
    status: `dirty`,
    value: e
}), Tp = e => ({
    status: `valid`,
    value: e
}), Ep = e => e.status === `aborted`, Dp = e => e.status === `dirty`, Op = e => e.status === `valid`, kp = e => typeof Promise < `u` && e instanceof Promise, X;
(function(e) {
    e.errToObj = e => typeof e == `string` ? {
        message: e
    } : e || {},
    e.toString = e => typeof e == `string` ? e : e?.message
}
)(X ||= {});
var Ap = class {
    constructor(e, t, n, r) {
        this._cachedPath = [],
        this.parent = e,
        this.data = t,
        this._path = n,
        this._key = r
    }
    get path() {
        return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
    }
}
  , jp = (e, t) => {
    if (Op(t))
        return {
            success: !0,
            data: t.value
        };
    if (!e.common.issues.length)
        throw Error(`Validation failed but no issues detected.`);
    return {
        success: !1,
        get error() {
            if (this._error)
                return this._error;
            let t = new vp(e.common.issues);
            return this._error = t,
            this._error
        }
    }
}
;
function Z(e) {
    if (!e)
        return {};
    let {errorMap: t, invalid_type_error: n, required_error: r, description: i} = e;
    if (t && (n || r))
        throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return t ? {
        errorMap: t,
        description: i
    } : {
        errorMap: (t, i) => {
            let {message: a} = e;
            return t.code === `invalid_enum_value` ? {
                message: a ?? i.defaultError
            } : i.data === void 0 ? {
                message: a ?? r ?? i.defaultError
            } : t.code === `invalid_type` ? {
                message: a ?? n ?? i.defaultError
            } : {
                message: i.defaultError
            }
        }
        ,
        description: i
    }
}
var Q = class {
    get description() {
        return this._def.description
    }
    _getType(e) {
        return _p(e.data)
    }
    _getOrReturnCtx(e, t) {
        return t || {
            common: e.parent.common,
            data: e.data,
            parsedType: _p(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        }
    }
    _processInputParams(e) {
        return {
            status: new Cp,
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: _p(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        }
    }
    _parseSync(e) {
        let t = this._parse(e);
        if (kp(t))
            throw Error(`Synchronous parse encountered promise.`);
        return t
    }
    _parseAsync(e) {
        let t = this._parse(e);
        return Promise.resolve(t)
    }
    parse(e, t) {
        let n = this.safeParse(e, t);
        if (n.success)
            return n.data;
        throw n.error
    }
    safeParse(e, t) {
        let n = {
            common: {
                issues: [],
                async: t?.async ?? !1,
                contextualErrorMap: t?.errorMap
            },
            path: t?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: _p(e)
        };
        return jp(n, this._parseSync({
            data: e,
            path: n.path,
            parent: n
        }))
    }
    "~validate"(e) {
        let t = {
            common: {
                issues: [],
                async: !!this[`~standard`].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: _p(e)
        };
        if (!this[`~standard`].async)
            try {
                let n = this._parseSync({
                    data: e,
                    path: [],
                    parent: t
                });
                return Op(n) ? {
                    value: n.value
                } : {
                    issues: t.common.issues
                }
            } catch (e) {
                e?.message?.toLowerCase()?.includes(`encountered`) && (this[`~standard`].async = !0),
                t.common = {
                    issues: [],
                    async: !0
                }
            }
        return this._parseAsync({
            data: e,
            path: [],
            parent: t
        }).then(e => Op(e) ? {
            value: e.value
        } : {
            issues: t.common.issues
        })
    }
    async parseAsync(e, t) {
        let n = await this.safeParseAsync(e, t);
        if (n.success)
            return n.data;
        throw n.error
    }
    async safeParseAsync(e, t) {
        let n = {
            common: {
                issues: [],
                contextualErrorMap: t?.errorMap,
                async: !0
            },
            path: t?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: _p(e)
        }
          , r = this._parse({
            data: e,
            path: n.path,
            parent: n
        });
        return jp(n, await (kp(r) ? r : Promise.resolve(r)))
    }
    refine(e, t) {
        let n = e => typeof t == `string` || t === void 0 ? {
            message: t
        } : typeof t == `function` ? t(e) : t;
        return this._refinement( (t, r) => {
            let i = e(t)
              , a = () => r.addIssue({
                code: q.custom,
                ...n(t)
            });
            return typeof Promise < `u` && i instanceof Promise ? i.then(e => e ? !0 : (a(),
            !1)) : i ? !0 : (a(),
            !1)
        }
        )
    }
    refinement(e, t) {
        return this._refinement( (n, r) => e(n) ? !0 : (r.addIssue(typeof t == `function` ? t(n, r) : t),
        !1))
    }
    _refinement(e) {
        return new Pm({
            schema: this,
            typeName: $.ZodEffects,
            effect: {
                type: `refinement`,
                refinement: e
            }
        })
    }
    superRefine(e) {
        return this._refinement(e)
    }
    constructor(e) {
        this.spa = this.safeParseAsync,
        this._def = e,
        this.parse = this.parse.bind(this),
        this.safeParse = this.safeParse.bind(this),
        this.parseAsync = this.parseAsync.bind(this),
        this.safeParseAsync = this.safeParseAsync.bind(this),
        this.spa = this.spa.bind(this),
        this.refine = this.refine.bind(this),
        this.refinement = this.refinement.bind(this),
        this.superRefine = this.superRefine.bind(this),
        this.optional = this.optional.bind(this),
        this.nullable = this.nullable.bind(this),
        this.nullish = this.nullish.bind(this),
        this.array = this.array.bind(this),
        this.promise = this.promise.bind(this),
        this.or = this.or.bind(this),
        this.and = this.and.bind(this),
        this.transform = this.transform.bind(this),
        this.brand = this.brand.bind(this),
        this.default = this.default.bind(this),
        this.catch = this.catch.bind(this),
        this.describe = this.describe.bind(this),
        this.pipe = this.pipe.bind(this),
        this.readonly = this.readonly.bind(this),
        this.isNullable = this.isNullable.bind(this),
        this.isOptional = this.isOptional.bind(this),
        this[`~standard`] = {
            version: 1,
            vendor: `zod`,
            validate: e => this[`~validate`](e)
        }
    }
    optional() {
        return Fm.create(this, this._def)
    }
    nullable() {
        return Im.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return hm.create(this)
    }
    promise() {
        return Nm.create(this, this._def)
    }
    or(e) {
        return vm.create([this, e], this._def)
    }
    and(e) {
        return Sm.create(this, e, this._def)
    }
    transform(e) {
        return new Pm({
            ...Z(this._def),
            schema: this,
            typeName: $.ZodEffects,
            effect: {
                type: `transform`,
                transform: e
            }
        })
    }
    default(e) {
        let t = typeof e == `function` ? e : () => e;
        return new Lm({
            ...Z(this._def),
            innerType: this,
            defaultValue: t,
            typeName: $.ZodDefault
        })
    }
    brand() {
        return new Bm({
            typeName: $.ZodBranded,
            type: this,
            ...Z(this._def)
        })
    }
    catch(e) {
        let t = typeof e == `function` ? e : () => e;
        return new Rm({
            ...Z(this._def),
            innerType: this,
            catchValue: t,
            typeName: $.ZodCatch
        })
    }
    describe(e) {
        let t = this.constructor;
        return new t({
            ...this._def,
            description: e
        })
    }
    pipe(e) {
        return Vm.create(this, e)
    }
    readonly() {
        return Hm.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
, Mp = /^c[^\s-]{8,}$/i, Np = /^[0-9a-z]+$/, Pp = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Fp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Ip = /^[a-z0-9_-]{21}$/i, Lp = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Rp = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, zp = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Bp = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`, Vp, Hp = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Up = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Wp = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Gp = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Kp = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, qp = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Jp = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`, Yp = RegExp(`^${Jp}$`);
function Xp(e) {
    let t = `[0-5]\\d`;
    e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision ?? (t = `${t}(\\.\\d+)?`);
    let n = e.precision ? `+` : `?`;
    return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`
}
function Zp(e) {
    return RegExp(`^${Xp(e)}$`)
}
function Qp(e) {
    let t = `${Jp}T${Xp(e)}`
      , n = [];
    return n.push(e.local ? `Z?` : `Z`),
    e.offset && n.push(`([+-]\\d{2}:?\\d{2})`),
    t = `${t}(${n.join(`|`)})`,
    RegExp(`^${t}$`)
}
function $p(e, t) {
    return !!((t === `v4` || !t) && Hp.test(e) || (t === `v6` || !t) && Wp.test(e))
}
function em(e, t) {
    if (!Lp.test(e))
        return !1;
    try {
        let[n] = e.split(`.`);
        if (!n)
            return !1;
        let r = n.replace(/-/g, `+`).replace(/_/g, `/`).padEnd(n.length + (4 - n.length % 4) % 4, `=`)
          , i = JSON.parse(atob(r));
        return !(typeof i != `object` || !i || `typ` in i && i?.typ !== `JWT` || !i.alg || t && i.alg !== t)
    } catch {
        return !1
    }
}
function tm(e, t) {
    return !!((t === `v4` || !t) && Up.test(e) || (t === `v6` || !t) && Gp.test(e))
}
var nm = class e extends Q {
    _parse(e) {
        if (this._def.coerce && (e.data = String(e.data)),
        this._getType(e) !== K.string) {
            let t = this._getOrReturnCtx(e);
            return J(t, {
                code: q.invalid_type,
                expected: K.string,
                received: t.parsedType
            }),
            Y
        }
        let t = new Cp, n;
        for (let r of this._def.checks)
            if (r.kind === `min`)
                e.data.length < r.value && (n = this._getOrReturnCtx(e, n),
                J(n, {
                    code: q.too_small,
                    minimum: r.value,
                    type: `string`,
                    inclusive: !0,
                    exact: !1,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `max`)
                e.data.length > r.value && (n = this._getOrReturnCtx(e, n),
                J(n, {
                    code: q.too_big,
                    maximum: r.value,
                    type: `string`,
                    inclusive: !0,
                    exact: !1,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `length`) {
                let i = e.data.length > r.value
                  , a = e.data.length < r.value;
                (i || a) && (n = this._getOrReturnCtx(e, n),
                i ? J(n, {
                    code: q.too_big,
                    maximum: r.value,
                    type: `string`,
                    inclusive: !0,
                    exact: !0,
                    message: r.message
                }) : a && J(n, {
                    code: q.too_small,
                    minimum: r.value,
                    type: `string`,
                    inclusive: !0,
                    exact: !0,
                    message: r.message
                }),
                t.dirty())
            } else if (r.kind === `email`)
                zp.test(e.data) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    validation: `email`,
                    code: q.invalid_string,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `emoji`)
                Vp ||= new RegExp(Bp,`u`),
                Vp.test(e.data) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    validation: `emoji`,
                    code: q.invalid_string,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `uuid`)
                Fp.test(e.data) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    validation: `uuid`,
                    code: q.invalid_string,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `nanoid`)
                Ip.test(e.data) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    validation: `nanoid`,
                    code: q.invalid_string,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `cuid`)
                Mp.test(e.data) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    validation: `cuid`,
                    code: q.invalid_string,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `cuid2`)
                Np.test(e.data) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    validation: `cuid2`,
                    code: q.invalid_string,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `ulid`)
                Pp.test(e.data) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    validation: `ulid`,
                    code: q.invalid_string,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `url`)
                try {
                    new URL(e.data)
                } catch {
                    n = this._getOrReturnCtx(e, n),
                    J(n, {
                        validation: `url`,
                        code: q.invalid_string,
                        message: r.message
                    }),
                    t.dirty()
                }
            else
                r.kind === `regex` ? (r.regex.lastIndex = 0,
                r.regex.test(e.data) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    validation: `regex`,
                    code: q.invalid_string,
                    message: r.message
                }),
                t.dirty())) : r.kind === `trim` ? e.data = e.data.trim() : r.kind === `includes` ? e.data.includes(r.value, r.position) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    code: q.invalid_string,
                    validation: {
                        includes: r.value,
                        position: r.position
                    },
                    message: r.message
                }),
                t.dirty()) : r.kind === `toLowerCase` ? e.data = e.data.toLowerCase() : r.kind === `toUpperCase` ? e.data = e.data.toUpperCase() : r.kind === `startsWith` ? e.data.startsWith(r.value) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    code: q.invalid_string,
                    validation: {
                        startsWith: r.value
                    },
                    message: r.message
                }),
                t.dirty()) : r.kind === `endsWith` ? e.data.endsWith(r.value) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    code: q.invalid_string,
                    validation: {
                        endsWith: r.value
                    },
                    message: r.message
                }),
                t.dirty()) : r.kind === `datetime` ? Qp(r).test(e.data) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    code: q.invalid_string,
                    validation: `datetime`,
                    message: r.message
                }),
                t.dirty()) : r.kind === `date` ? Yp.test(e.data) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    code: q.invalid_string,
                    validation: `date`,
                    message: r.message
                }),
                t.dirty()) : r.kind === `time` ? Zp(r).test(e.data) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    code: q.invalid_string,
                    validation: `time`,
                    message: r.message
                }),
                t.dirty()) : r.kind === `duration` ? Rp.test(e.data) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    validation: `duration`,
                    code: q.invalid_string,
                    message: r.message
                }),
                t.dirty()) : r.kind === `ip` ? $p(e.data, r.version) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    validation: `ip`,
                    code: q.invalid_string,
                    message: r.message
                }),
                t.dirty()) : r.kind === `jwt` ? em(e.data, r.alg) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    validation: `jwt`,
                    code: q.invalid_string,
                    message: r.message
                }),
                t.dirty()) : r.kind === `cidr` ? tm(e.data, r.version) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    validation: `cidr`,
                    code: q.invalid_string,
                    message: r.message
                }),
                t.dirty()) : r.kind === `base64` ? Kp.test(e.data) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    validation: `base64`,
                    code: q.invalid_string,
                    message: r.message
                }),
                t.dirty()) : r.kind === `base64url` ? qp.test(e.data) || (n = this._getOrReturnCtx(e, n),
                J(n, {
                    validation: `base64url`,
                    code: q.invalid_string,
                    message: r.message
                }),
                t.dirty()) : G.assertNever(r);
        return {
            status: t.value,
            value: e.data
        }
    }
    _regex(e, t, n) {
        return this.refinement(t => e.test(t), {
            validation: t,
            code: q.invalid_string,
            ...X.errToObj(n)
        })
    }
    _addCheck(t) {
        return new e({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    email(e) {
        return this._addCheck({
            kind: `email`,
            ...X.errToObj(e)
        })
    }
    url(e) {
        return this._addCheck({
            kind: `url`,
            ...X.errToObj(e)
        })
    }
    emoji(e) {
        return this._addCheck({
            kind: `emoji`,
            ...X.errToObj(e)
        })
    }
    uuid(e) {
        return this._addCheck({
            kind: `uuid`,
            ...X.errToObj(e)
        })
    }
    nanoid(e) {
        return this._addCheck({
            kind: `nanoid`,
            ...X.errToObj(e)
        })
    }
    cuid(e) {
        return this._addCheck({
            kind: `cuid`,
            ...X.errToObj(e)
        })
    }
    cuid2(e) {
        return this._addCheck({
            kind: `cuid2`,
            ...X.errToObj(e)
        })
    }
    ulid(e) {
        return this._addCheck({
            kind: `ulid`,
            ...X.errToObj(e)
        })
    }
    base64(e) {
        return this._addCheck({
            kind: `base64`,
            ...X.errToObj(e)
        })
    }
    base64url(e) {
        return this._addCheck({
            kind: `base64url`,
            ...X.errToObj(e)
        })
    }
    jwt(e) {
        return this._addCheck({
            kind: `jwt`,
            ...X.errToObj(e)
        })
    }
    ip(e) {
        return this._addCheck({
            kind: `ip`,
            ...X.errToObj(e)
        })
    }
    cidr(e) {
        return this._addCheck({
            kind: `cidr`,
            ...X.errToObj(e)
        })
    }
    datetime(e) {
        return typeof e == `string` ? this._addCheck({
            kind: `datetime`,
            precision: null,
            offset: !1,
            local: !1,
            message: e
        }) : this._addCheck({
            kind: `datetime`,
            precision: e?.precision === void 0 ? null : e?.precision,
            offset: e?.offset ?? !1,
            local: e?.local ?? !1,
            ...X.errToObj(e?.message)
        })
    }
    date(e) {
        return this._addCheck({
            kind: `date`,
            message: e
        })
    }
    time(e) {
        return typeof e == `string` ? this._addCheck({
            kind: `time`,
            precision: null,
            message: e
        }) : this._addCheck({
            kind: `time`,
            precision: e?.precision === void 0 ? null : e?.precision,
            ...X.errToObj(e?.message)
        })
    }
    duration(e) {
        return this._addCheck({
            kind: `duration`,
            ...X.errToObj(e)
        })
    }
    regex(e, t) {
        return this._addCheck({
            kind: `regex`,
            regex: e,
            ...X.errToObj(t)
        })
    }
    includes(e, t) {
        return this._addCheck({
            kind: `includes`,
            value: e,
            position: t?.position,
            ...X.errToObj(t?.message)
        })
    }
    startsWith(e, t) {
        return this._addCheck({
            kind: `startsWith`,
            value: e,
            ...X.errToObj(t)
        })
    }
    endsWith(e, t) {
        return this._addCheck({
            kind: `endsWith`,
            value: e,
            ...X.errToObj(t)
        })
    }
    min(e, t) {
        return this._addCheck({
            kind: `min`,
            value: e,
            ...X.errToObj(t)
        })
    }
    max(e, t) {
        return this._addCheck({
            kind: `max`,
            value: e,
            ...X.errToObj(t)
        })
    }
    length(e, t) {
        return this._addCheck({
            kind: `length`,
            value: e,
            ...X.errToObj(t)
        })
    }
    nonempty(e) {
        return this.min(1, X.errToObj(e))
    }
    trim() {
        return new e({
            ...this._def,
            checks: [...this._def.checks, {
                kind: `trim`
            }]
        })
    }
    toLowerCase() {
        return new e({
            ...this._def,
            checks: [...this._def.checks, {
                kind: `toLowerCase`
            }]
        })
    }
    toUpperCase() {
        return new e({
            ...this._def,
            checks: [...this._def.checks, {
                kind: `toUpperCase`
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(e => e.kind === `datetime`)
    }
    get isDate() {
        return !!this._def.checks.find(e => e.kind === `date`)
    }
    get isTime() {
        return !!this._def.checks.find(e => e.kind === `time`)
    }
    get isDuration() {
        return !!this._def.checks.find(e => e.kind === `duration`)
    }
    get isEmail() {
        return !!this._def.checks.find(e => e.kind === `email`)
    }
    get isURL() {
        return !!this._def.checks.find(e => e.kind === `url`)
    }
    get isEmoji() {
        return !!this._def.checks.find(e => e.kind === `emoji`)
    }
    get isUUID() {
        return !!this._def.checks.find(e => e.kind === `uuid`)
    }
    get isNANOID() {
        return !!this._def.checks.find(e => e.kind === `nanoid`)
    }
    get isCUID() {
        return !!this._def.checks.find(e => e.kind === `cuid`)
    }
    get isCUID2() {
        return !!this._def.checks.find(e => e.kind === `cuid2`)
    }
    get isULID() {
        return !!this._def.checks.find(e => e.kind === `ulid`)
    }
    get isIP() {
        return !!this._def.checks.find(e => e.kind === `ip`)
    }
    get isCIDR() {
        return !!this._def.checks.find(e => e.kind === `cidr`)
    }
    get isBase64() {
        return !!this._def.checks.find(e => e.kind === `base64`)
    }
    get isBase64url() {
        return !!this._def.checks.find(e => e.kind === `base64url`)
    }
    get minLength() {
        let e = null;
        for (let t of this._def.checks)
            t.kind === `min` && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxLength() {
        let e = null;
        for (let t of this._def.checks)
            t.kind === `max` && (e === null || t.value < e) && (e = t.value);
        return e
    }
}
;
nm.create = e => new nm({
    checks: [],
    typeName: $.ZodString,
    coerce: e?.coerce ?? !1,
    ...Z(e)
});
function rm(e, t) {
    let n = (e.toString().split(`.`)[1] || ``).length
      , r = (t.toString().split(`.`)[1] || ``).length
      , i = n > r ? n : r;
    return Number.parseInt(e.toFixed(i).replace(`.`, ``)) % Number.parseInt(t.toFixed(i).replace(`.`, ``)) / 10 ** i
}
var im = class e extends Q {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte,
        this.step = this.multipleOf
    }
    _parse(e) {
        if (this._def.coerce && (e.data = Number(e.data)),
        this._getType(e) !== K.number) {
            let t = this._getOrReturnCtx(e);
            return J(t, {
                code: q.invalid_type,
                expected: K.number,
                received: t.parsedType
            }),
            Y
        }
        let t, n = new Cp;
        for (let r of this._def.checks)
            r.kind === `int` ? G.isInteger(e.data) || (t = this._getOrReturnCtx(e, t),
            J(t, {
                code: q.invalid_type,
                expected: `integer`,
                received: `float`,
                message: r.message
            }),
            n.dirty()) : r.kind === `min` ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (t = this._getOrReturnCtx(e, t),
            J(t, {
                code: q.too_small,
                minimum: r.value,
                type: `number`,
                inclusive: r.inclusive,
                exact: !1,
                message: r.message
            }),
            n.dirty()) : r.kind === `max` ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (t = this._getOrReturnCtx(e, t),
            J(t, {
                code: q.too_big,
                maximum: r.value,
                type: `number`,
                inclusive: r.inclusive,
                exact: !1,
                message: r.message
            }),
            n.dirty()) : r.kind === `multipleOf` ? rm(e.data, r.value) !== 0 && (t = this._getOrReturnCtx(e, t),
            J(t, {
                code: q.not_multiple_of,
                multipleOf: r.value,
                message: r.message
            }),
            n.dirty()) : r.kind === `finite` ? Number.isFinite(e.data) || (t = this._getOrReturnCtx(e, t),
            J(t, {
                code: q.not_finite,
                message: r.message
            }),
            n.dirty()) : G.assertNever(r);
        return {
            status: n.value,
            value: e.data
        }
    }
    gte(e, t) {
        return this.setLimit(`min`, e, !0, X.toString(t))
    }
    gt(e, t) {
        return this.setLimit(`min`, e, !1, X.toString(t))
    }
    lte(e, t) {
        return this.setLimit(`max`, e, !0, X.toString(t))
    }
    lt(e, t) {
        return this.setLimit(`max`, e, !1, X.toString(t))
    }
    setLimit(t, n, r, i) {
        return new e({
            ...this._def,
            checks: [...this._def.checks, {
                kind: t,
                value: n,
                inclusive: r,
                message: X.toString(i)
            }]
        })
    }
    _addCheck(t) {
        return new e({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    int(e) {
        return this._addCheck({
            kind: `int`,
            message: X.toString(e)
        })
    }
    positive(e) {
        return this._addCheck({
            kind: `min`,
            value: 0,
            inclusive: !1,
            message: X.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: `max`,
            value: 0,
            inclusive: !1,
            message: X.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: `max`,
            value: 0,
            inclusive: !0,
            message: X.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: `min`,
            value: 0,
            inclusive: !0,
            message: X.toString(e)
        })
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: `multipleOf`,
            value: e,
            message: X.toString(t)
        })
    }
    finite(e) {
        return this._addCheck({
            kind: `finite`,
            message: X.toString(e)
        })
    }
    safe(e) {
        return this._addCheck({
            kind: `min`,
            inclusive: !0,
            value: -(2 ** 53 - 1),
            message: X.toString(e)
        })._addCheck({
            kind: `max`,
            inclusive: !0,
            value: 2 ** 53 - 1,
            message: X.toString(e)
        })
    }
    get minValue() {
        let e = null;
        for (let t of this._def.checks)
            t.kind === `min` && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (let t of this._def.checks)
            t.kind === `max` && (e === null || t.value < e) && (e = t.value);
        return e
    }
    get isInt() {
        return !!this._def.checks.find(e => e.kind === `int` || e.kind === `multipleOf` && G.isInteger(e.value))
    }
    get isFinite() {
        let e = null
          , t = null;
        for (let n of this._def.checks)
            if (n.kind === `finite` || n.kind === `int` || n.kind === `multipleOf`)
                return !0;
            else
                n.kind === `min` ? (t === null || n.value > t) && (t = n.value) : n.kind === `max` && (e === null || n.value < e) && (e = n.value);
        return Number.isFinite(t) && Number.isFinite(e)
    }
}
;
im.create = e => new im({
    checks: [],
    typeName: $.ZodNumber,
    coerce: e?.coerce || !1,
    ...Z(e)
});
var am = class e extends Q {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte
    }
    _parse(e) {
        if (this._def.coerce)
            try {
                e.data = BigInt(e.data)
            } catch {
                return this._getInvalidInput(e)
            }
        if (this._getType(e) !== K.bigint)
            return this._getInvalidInput(e);
        let t, n = new Cp;
        for (let r of this._def.checks)
            r.kind === `min` ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (t = this._getOrReturnCtx(e, t),
            J(t, {
                code: q.too_small,
                type: `bigint`,
                minimum: r.value,
                inclusive: r.inclusive,
                message: r.message
            }),
            n.dirty()) : r.kind === `max` ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (t = this._getOrReturnCtx(e, t),
            J(t, {
                code: q.too_big,
                type: `bigint`,
                maximum: r.value,
                inclusive: r.inclusive,
                message: r.message
            }),
            n.dirty()) : r.kind === `multipleOf` ? e.data % r.value !== BigInt(0) && (t = this._getOrReturnCtx(e, t),
            J(t, {
                code: q.not_multiple_of,
                multipleOf: r.value,
                message: r.message
            }),
            n.dirty()) : G.assertNever(r);
        return {
            status: n.value,
            value: e.data
        }
    }
    _getInvalidInput(e) {
        let t = this._getOrReturnCtx(e);
        return J(t, {
            code: q.invalid_type,
            expected: K.bigint,
            received: t.parsedType
        }),
        Y
    }
    gte(e, t) {
        return this.setLimit(`min`, e, !0, X.toString(t))
    }
    gt(e, t) {
        return this.setLimit(`min`, e, !1, X.toString(t))
    }
    lte(e, t) {
        return this.setLimit(`max`, e, !0, X.toString(t))
    }
    lt(e, t) {
        return this.setLimit(`max`, e, !1, X.toString(t))
    }
    setLimit(t, n, r, i) {
        return new e({
            ...this._def,
            checks: [...this._def.checks, {
                kind: t,
                value: n,
                inclusive: r,
                message: X.toString(i)
            }]
        })
    }
    _addCheck(t) {
        return new e({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    positive(e) {
        return this._addCheck({
            kind: `min`,
            value: BigInt(0),
            inclusive: !1,
            message: X.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: `max`,
            value: BigInt(0),
            inclusive: !1,
            message: X.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: `max`,
            value: BigInt(0),
            inclusive: !0,
            message: X.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: `min`,
            value: BigInt(0),
            inclusive: !0,
            message: X.toString(e)
        })
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: `multipleOf`,
            value: e,
            message: X.toString(t)
        })
    }
    get minValue() {
        let e = null;
        for (let t of this._def.checks)
            t.kind === `min` && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (let t of this._def.checks)
            t.kind === `max` && (e === null || t.value < e) && (e = t.value);
        return e
    }
}
;
am.create = e => new am({
    checks: [],
    typeName: $.ZodBigInt,
    coerce: e?.coerce ?? !1,
    ...Z(e)
});
var om = class extends Q {
    _parse(e) {
        if (this._def.coerce && (e.data = !!e.data),
        this._getType(e) !== K.boolean) {
            let t = this._getOrReturnCtx(e);
            return J(t, {
                code: q.invalid_type,
                expected: K.boolean,
                received: t.parsedType
            }),
            Y
        }
        return Tp(e.data)
    }
}
;
om.create = e => new om({
    typeName: $.ZodBoolean,
    coerce: e?.coerce || !1,
    ...Z(e)
});
var sm = class e extends Q {
    _parse(e) {
        if (this._def.coerce && (e.data = new Date(e.data)),
        this._getType(e) !== K.date) {
            let t = this._getOrReturnCtx(e);
            return J(t, {
                code: q.invalid_type,
                expected: K.date,
                received: t.parsedType
            }),
            Y
        }
        if (Number.isNaN(e.data.getTime()))
            return J(this._getOrReturnCtx(e), {
                code: q.invalid_date
            }),
            Y;
        let t = new Cp, n;
        for (let r of this._def.checks)
            r.kind === `min` ? e.data.getTime() < r.value && (n = this._getOrReturnCtx(e, n),
            J(n, {
                code: q.too_small,
                message: r.message,
                inclusive: !0,
                exact: !1,
                minimum: r.value,
                type: `date`
            }),
            t.dirty()) : r.kind === `max` ? e.data.getTime() > r.value && (n = this._getOrReturnCtx(e, n),
            J(n, {
                code: q.too_big,
                message: r.message,
                inclusive: !0,
                exact: !1,
                maximum: r.value,
                type: `date`
            }),
            t.dirty()) : G.assertNever(r);
        return {
            status: t.value,
            value: new Date(e.data.getTime())
        }
    }
    _addCheck(t) {
        return new e({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    min(e, t) {
        return this._addCheck({
            kind: `min`,
            value: e.getTime(),
            message: X.toString(t)
        })
    }
    max(e, t) {
        return this._addCheck({
            kind: `max`,
            value: e.getTime(),
            message: X.toString(t)
        })
    }
    get minDate() {
        let e = null;
        for (let t of this._def.checks)
            t.kind === `min` && (e === null || t.value > e) && (e = t.value);
        return e == null ? null : new Date(e)
    }
    get maxDate() {
        let e = null;
        for (let t of this._def.checks)
            t.kind === `max` && (e === null || t.value < e) && (e = t.value);
        return e == null ? null : new Date(e)
    }
}
;
sm.create = e => new sm({
    checks: [],
    coerce: e?.coerce || !1,
    typeName: $.ZodDate,
    ...Z(e)
});
var cm = class extends Q {
    _parse(e) {
        if (this._getType(e) !== K.symbol) {
            let t = this._getOrReturnCtx(e);
            return J(t, {
                code: q.invalid_type,
                expected: K.symbol,
                received: t.parsedType
            }),
            Y
        }
        return Tp(e.data)
    }
}
;
cm.create = e => new cm({
    typeName: $.ZodSymbol,
    ...Z(e)
});
var lm = class extends Q {
    _parse(e) {
        if (this._getType(e) !== K.undefined) {
            let t = this._getOrReturnCtx(e);
            return J(t, {
                code: q.invalid_type,
                expected: K.undefined,
                received: t.parsedType
            }),
            Y
        }
        return Tp(e.data)
    }
}
;
lm.create = e => new lm({
    typeName: $.ZodUndefined,
    ...Z(e)
});
var um = class extends Q {
    _parse(e) {
        if (this._getType(e) !== K.null) {
            let t = this._getOrReturnCtx(e);
            return J(t, {
                code: q.invalid_type,
                expected: K.null,
                received: t.parsedType
            }),
            Y
        }
        return Tp(e.data)
    }
}
;
um.create = e => new um({
    typeName: $.ZodNull,
    ...Z(e)
});
var dm = class extends Q {
    constructor() {
        super(...arguments),
        this._any = !0
    }
    _parse(e) {
        return Tp(e.data)
    }
}
;
dm.create = e => new dm({
    typeName: $.ZodAny,
    ...Z(e)
});
var fm = class extends Q {
    constructor() {
        super(...arguments),
        this._unknown = !0
    }
    _parse(e) {
        return Tp(e.data)
    }
}
;
fm.create = e => new fm({
    typeName: $.ZodUnknown,
    ...Z(e)
});
var pm = class extends Q {
    _parse(e) {
        let t = this._getOrReturnCtx(e);
        return J(t, {
            code: q.invalid_type,
            expected: K.never,
            received: t.parsedType
        }),
        Y
    }
}
;
pm.create = e => new pm({
    typeName: $.ZodNever,
    ...Z(e)
});
var mm = class extends Q {
    _parse(e) {
        if (this._getType(e) !== K.undefined) {
            let t = this._getOrReturnCtx(e);
            return J(t, {
                code: q.invalid_type,
                expected: K.void,
                received: t.parsedType
            }),
            Y
        }
        return Tp(e.data)
    }
}
;
mm.create = e => new mm({
    typeName: $.ZodVoid,
    ...Z(e)
});
var hm = class e extends Q {
    _parse(e) {
        let {ctx: t, status: n} = this._processInputParams(e)
          , r = this._def;
        if (t.parsedType !== K.array)
            return J(t, {
                code: q.invalid_type,
                expected: K.array,
                received: t.parsedType
            }),
            Y;
        if (r.exactLength !== null) {
            let e = t.data.length > r.exactLength.value
              , i = t.data.length < r.exactLength.value;
            (e || i) && (J(t, {
                code: e ? q.too_big : q.too_small,
                minimum: i ? r.exactLength.value : void 0,
                maximum: e ? r.exactLength.value : void 0,
                type: `array`,
                inclusive: !0,
                exact: !0,
                message: r.exactLength.message
            }),
            n.dirty())
        }
        if (r.minLength !== null && t.data.length < r.minLength.value && (J(t, {
            code: q.too_small,
            minimum: r.minLength.value,
            type: `array`,
            inclusive: !0,
            exact: !1,
            message: r.minLength.message
        }),
        n.dirty()),
        r.maxLength !== null && t.data.length > r.maxLength.value && (J(t, {
            code: q.too_big,
            maximum: r.maxLength.value,
            type: `array`,
            inclusive: !0,
            exact: !1,
            message: r.maxLength.message
        }),
        n.dirty()),
        t.common.async)
            return Promise.all([...t.data].map( (e, n) => r.type._parseAsync(new Ap(t,e,t.path,n)))).then(e => Cp.mergeArray(n, e));
        let i = [...t.data].map( (e, n) => r.type._parseSync(new Ap(t,e,t.path,n)));
        return Cp.mergeArray(n, i)
    }
    get element() {
        return this._def.type
    }
    min(t, n) {
        return new e({
            ...this._def,
            minLength: {
                value: t,
                message: X.toString(n)
            }
        })
    }
    max(t, n) {
        return new e({
            ...this._def,
            maxLength: {
                value: t,
                message: X.toString(n)
            }
        })
    }
    length(t, n) {
        return new e({
            ...this._def,
            exactLength: {
                value: t,
                message: X.toString(n)
            }
        })
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
;
hm.create = (e, t) => new hm({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: $.ZodArray,
    ...Z(t)
});
function gm(e) {
    if (e instanceof _m) {
        let t = {};
        for (let n in e.shape) {
            let r = e.shape[n];
            t[n] = Fm.create(gm(r))
        }
        return new _m({
            ...e._def,
            shape: () => t
        })
    }
    return e instanceof hm ? new hm({
        ...e._def,
        type: gm(e.element)
    }) : e instanceof Fm ? Fm.create(gm(e.unwrap())) : e instanceof Im ? Im.create(gm(e.unwrap())) : e instanceof Cm ? Cm.create(e.items.map(e => gm(e))) : e
}
var _m = class e extends Q {
    constructor() {
        super(...arguments),
        this._cached = null,
        this.nonstrict = this.passthrough,
        this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        let e = this._def.shape()
          , t = G.objectKeys(e);
        return this._cached = {
            shape: e,
            keys: t
        },
        this._cached
    }
    _parse(e) {
        if (this._getType(e) !== K.object) {
            let t = this._getOrReturnCtx(e);
            return J(t, {
                code: q.invalid_type,
                expected: K.object,
                received: t.parsedType
            }),
            Y
        }
        let {status: t, ctx: n} = this._processInputParams(e)
          , {shape: r, keys: i} = this._getCached()
          , a = [];
        if (!(this._def.catchall instanceof pm && this._def.unknownKeys === `strip`))
            for (let e in n.data)
                i.includes(e) || a.push(e);
        let o = [];
        for (let e of i) {
            let t = r[e]
              , i = n.data[e];
            o.push({
                key: {
                    status: `valid`,
                    value: e
                },
                value: t._parse(new Ap(n,i,n.path,e)),
                alwaysSet: e in n.data
            })
        }
        if (this._def.catchall instanceof pm) {
            let e = this._def.unknownKeys;
            if (e === `passthrough`)
                for (let e of a)
                    o.push({
                        key: {
                            status: `valid`,
                            value: e
                        },
                        value: {
                            status: `valid`,
                            value: n.data[e]
                        }
                    });
            else if (e === `strict`)
                a.length > 0 && (J(n, {
                    code: q.unrecognized_keys,
                    keys: a
                }),
                t.dirty());
            else if (e !== `strip`)
                throw Error(`Internal ZodObject error: invalid unknownKeys value.`)
        } else {
            let e = this._def.catchall;
            for (let t of a) {
                let r = n.data[t];
                o.push({
                    key: {
                        status: `valid`,
                        value: t
                    },
                    value: e._parse(new Ap(n,r,n.path,t)),
                    alwaysSet: t in n.data
                })
            }
        }
        return n.common.async ? Promise.resolve().then(async () => {
            let e = [];
            for (let t of o) {
                let n = await t.key
                  , r = await t.value;
                e.push({
                    key: n,
                    value: r,
                    alwaysSet: t.alwaysSet
                })
            }
            return e
        }
        ).then(e => Cp.mergeObjectSync(t, e)) : Cp.mergeObjectSync(t, o)
    }
    get shape() {
        return this._def.shape()
    }
    strict(t) {
        return X.errToObj,
        new e({
            ...this._def,
            unknownKeys: `strict`,
            ...t === void 0 ? {} : {
                errorMap: (e, n) => {
                    let r = this._def.errorMap?.(e, n).message ?? n.defaultError;
                    return e.code === `unrecognized_keys` ? {
                        message: X.errToObj(t).message ?? r
                    } : {
                        message: r
                    }
                }
            }
        })
    }
    strip() {
        return new e({
            ...this._def,
            unknownKeys: `strip`
        })
    }
    passthrough() {
        return new e({
            ...this._def,
            unknownKeys: `passthrough`
        })
    }
    extend(t) {
        return new e({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...t
            })
        })
    }
    merge(t) {
        return new e({
            unknownKeys: t._def.unknownKeys,
            catchall: t._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...t._def.shape()
            }),
            typeName: $.ZodObject
        })
    }
    setKey(e, t) {
        return this.augment({
            [e]: t
        })
    }
    catchall(t) {
        return new e({
            ...this._def,
            catchall: t
        })
    }
    pick(t) {
        let n = {};
        for (let e of G.objectKeys(t))
            t[e] && this.shape[e] && (n[e] = this.shape[e]);
        return new e({
            ...this._def,
            shape: () => n
        })
    }
    omit(t) {
        let n = {};
        for (let e of G.objectKeys(this.shape))
            t[e] || (n[e] = this.shape[e]);
        return new e({
            ...this._def,
            shape: () => n
        })
    }
    deepPartial() {
        return gm(this)
    }
    partial(t) {
        let n = {};
        for (let e of G.objectKeys(this.shape)) {
            let r = this.shape[e];
            n[e] = t && !t[e] ? r : r.optional()
        }
        return new e({
            ...this._def,
            shape: () => n
        })
    }
    required(t) {
        let n = {};
        for (let e of G.objectKeys(this.shape))
            if (t && !t[e])
                n[e] = this.shape[e];
            else {
                let t = this.shape[e];
                for (; t instanceof Fm; )
                    t = t._def.innerType;
                n[e] = t
            }
        return new e({
            ...this._def,
            shape: () => n
        })
    }
    keyof() {
        return Am(G.objectKeys(this.shape))
    }
}
;
_m.create = (e, t) => new _m({
    shape: () => e,
    unknownKeys: `strip`,
    catchall: pm.create(),
    typeName: $.ZodObject,
    ...Z(t)
}),
_m.strictCreate = (e, t) => new _m({
    shape: () => e,
    unknownKeys: `strict`,
    catchall: pm.create(),
    typeName: $.ZodObject,
    ...Z(t)
}),
_m.lazycreate = (e, t) => new _m({
    shape: e,
    unknownKeys: `strip`,
    catchall: pm.create(),
    typeName: $.ZodObject,
    ...Z(t)
});
var vm = class extends Q {
    _parse(e) {
        let {ctx: t} = this._processInputParams(e)
          , n = this._def.options;
        function r(e) {
            for (let t of e)
                if (t.result.status === `valid`)
                    return t.result;
            for (let n of e)
                if (n.result.status === `dirty`)
                    return t.common.issues.push(...n.ctx.common.issues),
                    n.result;
            let n = e.map(e => new vp(e.ctx.common.issues));
            return J(t, {
                code: q.invalid_union,
                unionErrors: n
            }),
            Y
        }
        if (t.common.async)
            return Promise.all(n.map(async e => {
                let n = {
                    ...t,
                    common: {
                        ...t.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await e._parseAsync({
                        data: t.data,
                        path: t.path,
                        parent: n
                    }),
                    ctx: n
                }
            }
            )).then(r);
        {
            let e, r = [];
            for (let i of n) {
                let n = {
                    ...t,
                    common: {
                        ...t.common,
                        issues: []
                    },
                    parent: null
                }
                  , a = i._parseSync({
                    data: t.data,
                    path: t.path,
                    parent: n
                });
                if (a.status === `valid`)
                    return a;
                a.status === `dirty` && !e && (e = {
                    result: a,
                    ctx: n
                }),
                n.common.issues.length && r.push(n.common.issues)
            }
            if (e)
                return t.common.issues.push(...e.ctx.common.issues),
                e.result;
            let i = r.map(e => new vp(e));
            return J(t, {
                code: q.invalid_union,
                unionErrors: i
            }),
            Y
        }
    }
    get options() {
        return this._def.options
    }
}
;
vm.create = (e, t) => new vm({
    options: e,
    typeName: $.ZodUnion,
    ...Z(t)
});
var ym = e => e instanceof Om ? ym(e.schema) : e instanceof Pm ? ym(e.innerType()) : e instanceof km ? [e.value] : e instanceof jm ? e.options : e instanceof Mm ? G.objectValues(e.enum) : e instanceof Lm ? ym(e._def.innerType) : e instanceof lm ? [void 0] : e instanceof um ? [null] : e instanceof Fm ? [void 0, ...ym(e.unwrap())] : e instanceof Im ? [null, ...ym(e.unwrap())] : e instanceof Bm || e instanceof Hm ? ym(e.unwrap()) : e instanceof Rm ? ym(e._def.innerType) : []
  , bm = class e extends Q {
    _parse(e) {
        let {ctx: t} = this._processInputParams(e);
        if (t.parsedType !== K.object)
            return J(t, {
                code: q.invalid_type,
                expected: K.object,
                received: t.parsedType
            }),
            Y;
        let n = this.discriminator
          , r = t.data[n]
          , i = this.optionsMap.get(r);
        return i ? t.common.async ? i._parseAsync({
            data: t.data,
            path: t.path,
            parent: t
        }) : i._parseSync({
            data: t.data,
            path: t.path,
            parent: t
        }) : (J(t, {
            code: q.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [n]
        }),
        Y)
    }
    get discriminator() {
        return this._def.discriminator
    }
    get options() {
        return this._def.options
    }
    get optionsMap() {
        return this._def.optionsMap
    }
    static create(t, n, r) {
        let i = new Map;
        for (let e of n) {
            let n = ym(e.shape[t]);
            if (!n.length)
                throw Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
            for (let r of n) {
                if (i.has(r))
                    throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);
                i.set(r, e)
            }
        }
        return new e({
            typeName: $.ZodDiscriminatedUnion,
            discriminator: t,
            options: n,
            optionsMap: i,
            ...Z(r)
        })
    }
}
;
function xm(e, t) {
    let n = _p(e)
      , r = _p(t);
    if (e === t)
        return {
            valid: !0,
            data: e
        };
    if (n === K.object && r === K.object) {
        let n = G.objectKeys(t)
          , r = G.objectKeys(e).filter(e => n.indexOf(e) !== -1)
          , i = {
            ...e,
            ...t
        };
        for (let n of r) {
            let r = xm(e[n], t[n]);
            if (!r.valid)
                return {
                    valid: !1
                };
            i[n] = r.data
        }
        return {
            valid: !0,
            data: i
        }
    }
    if (n === K.array && r === K.array) {
        if (e.length !== t.length)
            return {
                valid: !1
            };
        let n = [];
        for (let r = 0; r < e.length; r++) {
            let i = e[r]
              , a = t[r]
              , o = xm(i, a);
            if (!o.valid)
                return {
                    valid: !1
                };
            n.push(o.data)
        }
        return {
            valid: !0,
            data: n
        }
    }
    return n === K.date && r === K.date && +e == +t ? {
        valid: !0,
        data: e
    } : {
        valid: !1
    }
}
var Sm = class extends Q {
    _parse(e) {
        let {status: t, ctx: n} = this._processInputParams(e)
          , r = (e, r) => {
            if (Ep(e) || Ep(r))
                return Y;
            let i = xm(e.value, r.value);
            return i.valid ? ((Dp(e) || Dp(r)) && t.dirty(),
            {
                status: t.value,
                value: i.data
            }) : (J(n, {
                code: q.invalid_intersection_types
            }),
            Y)
        }
        ;
        return n.common.async ? Promise.all([this._def.left._parseAsync({
            data: n.data,
            path: n.path,
            parent: n
        }), this._def.right._parseAsync({
            data: n.data,
            path: n.path,
            parent: n
        })]).then( ([e,t]) => r(e, t)) : r(this._def.left._parseSync({
            data: n.data,
            path: n.path,
            parent: n
        }), this._def.right._parseSync({
            data: n.data,
            path: n.path,
            parent: n
        }))
    }
}
;
Sm.create = (e, t, n) => new Sm({
    left: e,
    right: t,
    typeName: $.ZodIntersection,
    ...Z(n)
});
var Cm = class e extends Q {
    _parse(e) {
        let {status: t, ctx: n} = this._processInputParams(e);
        if (n.parsedType !== K.array)
            return J(n, {
                code: q.invalid_type,
                expected: K.array,
                received: n.parsedType
            }),
            Y;
        if (n.data.length < this._def.items.length)
            return J(n, {
                code: q.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: `array`
            }),
            Y;
        !this._def.rest && n.data.length > this._def.items.length && (J(n, {
            code: q.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: `array`
        }),
        t.dirty());
        let r = [...n.data].map( (e, t) => {
            let r = this._def.items[t] || this._def.rest;
            return r ? r._parse(new Ap(n,e,n.path,t)) : null
        }
        ).filter(e => !!e);
        return n.common.async ? Promise.all(r).then(e => Cp.mergeArray(t, e)) : Cp.mergeArray(t, r)
    }
    get items() {
        return this._def.items
    }
    rest(t) {
        return new e({
            ...this._def,
            rest: t
        })
    }
}
;
Cm.create = (e, t) => {
    if (!Array.isArray(e))
        throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);
    return new Cm({
        items: e,
        typeName: $.ZodTuple,
        rest: null,
        ...Z(t)
    })
}
;
var wm = class e extends Q {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        let {status: t, ctx: n} = this._processInputParams(e);
        if (n.parsedType !== K.object)
            return J(n, {
                code: q.invalid_type,
                expected: K.object,
                received: n.parsedType
            }),
            Y;
        let r = []
          , i = this._def.keyType
          , a = this._def.valueType;
        for (let e in n.data)
            r.push({
                key: i._parse(new Ap(n,e,n.path,e)),
                value: a._parse(new Ap(n,n.data[e],n.path,e)),
                alwaysSet: e in n.data
            });
        return n.common.async ? Cp.mergeObjectAsync(t, r) : Cp.mergeObjectSync(t, r)
    }
    get element() {
        return this._def.valueType
    }
    static create(t, n, r) {
        return n instanceof Q ? new e({
            keyType: t,
            valueType: n,
            typeName: $.ZodRecord,
            ...Z(r)
        }) : new e({
            keyType: nm.create(),
            valueType: t,
            typeName: $.ZodRecord,
            ...Z(n)
        })
    }
}
  , Tm = class extends Q {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        let {status: t, ctx: n} = this._processInputParams(e);
        if (n.parsedType !== K.map)
            return J(n, {
                code: q.invalid_type,
                expected: K.map,
                received: n.parsedType
            }),
            Y;
        let r = this._def.keyType
          , i = this._def.valueType
          , a = [...n.data.entries()].map( ([e,t], a) => ({
            key: r._parse(new Ap(n,e,n.path,[a, `key`])),
            value: i._parse(new Ap(n,t,n.path,[a, `value`]))
        }));
        if (n.common.async) {
            let e = new Map;
            return Promise.resolve().then(async () => {
                for (let n of a) {
                    let r = await n.key
                      , i = await n.value;
                    if (r.status === `aborted` || i.status === `aborted`)
                        return Y;
                    (r.status === `dirty` || i.status === `dirty`) && t.dirty(),
                    e.set(r.value, i.value)
                }
                return {
                    status: t.value,
                    value: e
                }
            }
            )
        }
        {
            let e = new Map;
            for (let n of a) {
                let r = n.key
                  , i = n.value;
                if (r.status === `aborted` || i.status === `aborted`)
                    return Y;
                (r.status === `dirty` || i.status === `dirty`) && t.dirty(),
                e.set(r.value, i.value)
            }
            return {
                status: t.value,
                value: e
            }
        }
    }
}
;
Tm.create = (e, t, n) => new Tm({
    valueType: t,
    keyType: e,
    typeName: $.ZodMap,
    ...Z(n)
});
var Em = class e extends Q {
    _parse(e) {
        let {status: t, ctx: n} = this._processInputParams(e);
        if (n.parsedType !== K.set)
            return J(n, {
                code: q.invalid_type,
                expected: K.set,
                received: n.parsedType
            }),
            Y;
        let r = this._def;
        r.minSize !== null && n.data.size < r.minSize.value && (J(n, {
            code: q.too_small,
            minimum: r.minSize.value,
            type: `set`,
            inclusive: !0,
            exact: !1,
            message: r.minSize.message
        }),
        t.dirty()),
        r.maxSize !== null && n.data.size > r.maxSize.value && (J(n, {
            code: q.too_big,
            maximum: r.maxSize.value,
            type: `set`,
            inclusive: !0,
            exact: !1,
            message: r.maxSize.message
        }),
        t.dirty());
        let i = this._def.valueType;
        function a(e) {
            let n = new Set;
            for (let r of e) {
                if (r.status === `aborted`)
                    return Y;
                r.status === `dirty` && t.dirty(),
                n.add(r.value)
            }
            return {
                status: t.value,
                value: n
            }
        }
        let o = [...n.data.values()].map( (e, t) => i._parse(new Ap(n,e,n.path,t)));
        return n.common.async ? Promise.all(o).then(e => a(e)) : a(o)
    }
    min(t, n) {
        return new e({
            ...this._def,
            minSize: {
                value: t,
                message: X.toString(n)
            }
        })
    }
    max(t, n) {
        return new e({
            ...this._def,
            maxSize: {
                value: t,
                message: X.toString(n)
            }
        })
    }
    size(e, t) {
        return this.min(e, t).max(e, t)
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
;
Em.create = (e, t) => new Em({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: $.ZodSet,
    ...Z(t)
});
var Dm = class e extends Q {
    constructor() {
        super(...arguments),
        this.validate = this.implement
    }
    _parse(e) {
        let {ctx: t} = this._processInputParams(e);
        if (t.parsedType !== K.function)
            return J(t, {
                code: q.invalid_type,
                expected: K.function,
                received: t.parsedType
            }),
            Y;
        function n(e, n) {
            return Sp({
                data: e,
                path: t.path,
                errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, xp(), yp].filter(e => !!e),
                issueData: {
                    code: q.invalid_arguments,
                    argumentsError: n
                }
            })
        }
        function r(e, n) {
            return Sp({
                data: e,
                path: t.path,
                errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, xp(), yp].filter(e => !!e),
                issueData: {
                    code: q.invalid_return_type,
                    returnTypeError: n
                }
            })
        }
        let i = {
            errorMap: t.common.contextualErrorMap
        }
          , a = t.data;
        if (this._def.returns instanceof Nm) {
            let e = this;
            return Tp(async function(...t) {
                let o = new vp([])
                  , s = await e._def.args.parseAsync(t, i).catch(e => {
                    throw o.addIssue(n(t, e)),
                    o
                }
                )
                  , c = await Reflect.apply(a, this, s);
                return await e._def.returns._def.type.parseAsync(c, i).catch(e => {
                    throw o.addIssue(r(c, e)),
                    o
                }
                )
            })
        }
        {
            let e = this;
            return Tp(function(...t) {
                let o = e._def.args.safeParse(t, i);
                if (!o.success)
                    throw new vp([n(t, o.error)]);
                let s = Reflect.apply(a, this, o.data)
                  , c = e._def.returns.safeParse(s, i);
                if (!c.success)
                    throw new vp([r(s, c.error)]);
                return c.data
            })
        }
    }
    parameters() {
        return this._def.args
    }
    returnType() {
        return this._def.returns
    }
    args(...t) {
        return new e({
            ...this._def,
            args: Cm.create(t).rest(fm.create())
        })
    }
    returns(t) {
        return new e({
            ...this._def,
            returns: t
        })
    }
    implement(e) {
        return this.parse(e)
    }
    strictImplement(e) {
        return this.parse(e)
    }
    static create(t, n, r) {
        return new e({
            args: t || Cm.create([]).rest(fm.create()),
            returns: n || fm.create(),
            typeName: $.ZodFunction,
            ...Z(r)
        })
    }
}
  , Om = class extends Q {
    get schema() {
        return this._def.getter()
    }
    _parse(e) {
        let {ctx: t} = this._processInputParams(e);
        return this._def.getter()._parse({
            data: t.data,
            path: t.path,
            parent: t
        })
    }
}
;
Om.create = (e, t) => new Om({
    getter: e,
    typeName: $.ZodLazy,
    ...Z(t)
});
var km = class extends Q {
    _parse(e) {
        if (e.data !== this._def.value) {
            let t = this._getOrReturnCtx(e);
            return J(t, {
                received: t.data,
                code: q.invalid_literal,
                expected: this._def.value
            }),
            Y
        }
        return {
            status: `valid`,
            value: e.data
        }
    }
    get value() {
        return this._def.value
    }
}
;
km.create = (e, t) => new km({
    value: e,
    typeName: $.ZodLiteral,
    ...Z(t)
});
function Am(e, t) {
    return new jm({
        values: e,
        typeName: $.ZodEnum,
        ...Z(t)
    })
}
var jm = class e extends Q {
    _parse(e) {
        if (typeof e.data != `string`) {
            let t = this._getOrReturnCtx(e)
              , n = this._def.values;
            return J(t, {
                expected: G.joinValues(n),
                received: t.parsedType,
                code: q.invalid_type
            }),
            Y
        }
        if (this._cache ||= new Set(this._def.values),
        !this._cache.has(e.data)) {
            let t = this._getOrReturnCtx(e)
              , n = this._def.values;
            return J(t, {
                received: t.data,
                code: q.invalid_enum_value,
                options: n
            }),
            Y
        }
        return Tp(e.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        let e = {};
        for (let t of this._def.values)
            e[t] = t;
        return e
    }
    get Values() {
        let e = {};
        for (let t of this._def.values)
            e[t] = t;
        return e
    }
    get Enum() {
        let e = {};
        for (let t of this._def.values)
            e[t] = t;
        return e
    }
    extract(t, n=this._def) {
        return e.create(t, {
            ...this._def,
            ...n
        })
    }
    exclude(t, n=this._def) {
        return e.create(this.options.filter(e => !t.includes(e)), {
            ...this._def,
            ...n
        })
    }
}
;
jm.create = Am;
var Mm = class extends Q {
    _parse(e) {
        let t = G.getValidEnumValues(this._def.values)
          , n = this._getOrReturnCtx(e);
        if (n.parsedType !== K.string && n.parsedType !== K.number) {
            let e = G.objectValues(t);
            return J(n, {
                expected: G.joinValues(e),
                received: n.parsedType,
                code: q.invalid_type
            }),
            Y
        }
        if (this._cache ||= new Set(G.getValidEnumValues(this._def.values)),
        !this._cache.has(e.data)) {
            let e = G.objectValues(t);
            return J(n, {
                received: n.data,
                code: q.invalid_enum_value,
                options: e
            }),
            Y
        }
        return Tp(e.data)
    }
    get enum() {
        return this._def.values
    }
}
;
Mm.create = (e, t) => new Mm({
    values: e,
    typeName: $.ZodNativeEnum,
    ...Z(t)
});
var Nm = class extends Q {
    unwrap() {
        return this._def.type
    }
    _parse(e) {
        let {ctx: t} = this._processInputParams(e);
        return t.parsedType !== K.promise && t.common.async === !1 ? (J(t, {
            code: q.invalid_type,
            expected: K.promise,
            received: t.parsedType
        }),
        Y) : Tp((t.parsedType === K.promise ? t.data : Promise.resolve(t.data)).then(e => this._def.type.parseAsync(e, {
            path: t.path,
            errorMap: t.common.contextualErrorMap
        })))
    }
}
;
Nm.create = (e, t) => new Nm({
    type: e,
    typeName: $.ZodPromise,
    ...Z(t)
});
var Pm = class extends Q {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === $.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(e) {
        let {status: t, ctx: n} = this._processInputParams(e)
          , r = this._def.effect || null
          , i = {
            addIssue: e => {
                J(n, e),
                e.fatal ? t.abort() : t.dirty()
            }
            ,
            get path() {
                return n.path
            }
        };
        if (i.addIssue = i.addIssue.bind(i),
        r.type === `preprocess`) {
            let e = r.transform(n.data, i);
            if (n.common.async)
                return Promise.resolve(e).then(async e => {
                    if (t.value === `aborted`)
                        return Y;
                    let r = await this._def.schema._parseAsync({
                        data: e,
                        path: n.path,
                        parent: n
                    });
                    return r.status === `aborted` ? Y : r.status === `dirty` || t.value === `dirty` ? wp(r.value) : r
                }
                );
            {
                if (t.value === `aborted`)
                    return Y;
                let r = this._def.schema._parseSync({
                    data: e,
                    path: n.path,
                    parent: n
                });
                return r.status === `aborted` ? Y : r.status === `dirty` || t.value === `dirty` ? wp(r.value) : r
            }
        }
        if (r.type === `refinement`) {
            let e = e => {
                let t = r.refinement(e, i);
                if (n.common.async)
                    return Promise.resolve(t);
                if (t instanceof Promise)
                    throw Error(`Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`);
                return e
            }
            ;
            if (n.common.async === !1) {
                let r = this._def.schema._parseSync({
                    data: n.data,
                    path: n.path,
                    parent: n
                });
                return r.status === `aborted` ? Y : (r.status === `dirty` && t.dirty(),
                e(r.value),
                {
                    status: t.value,
                    value: r.value
                })
            }
            return this._def.schema._parseAsync({
                data: n.data,
                path: n.path,
                parent: n
            }).then(n => n.status === `aborted` ? Y : (n.status === `dirty` && t.dirty(),
            e(n.value).then( () => ({
                status: t.value,
                value: n.value
            }))))
        }
        if (r.type === `transform`)
            if (n.common.async === !1) {
                let e = this._def.schema._parseSync({
                    data: n.data,
                    path: n.path,
                    parent: n
                });
                if (!Op(e))
                    return Y;
                let a = r.transform(e.value, i);
                if (a instanceof Promise)
                    throw Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                return {
                    status: t.value,
                    value: a
                }
            } else
                return this._def.schema._parseAsync({
                    data: n.data,
                    path: n.path,
                    parent: n
                }).then(e => Op(e) ? Promise.resolve(r.transform(e.value, i)).then(e => ({
                    status: t.value,
                    value: e
                })) : Y);
        G.assertNever(r)
    }
}
;
Pm.create = (e, t, n) => new Pm({
    schema: e,
    typeName: $.ZodEffects,
    effect: t,
    ...Z(n)
}),
Pm.createWithPreprocess = (e, t, n) => new Pm({
    schema: t,
    effect: {
        type: `preprocess`,
        transform: e
    },
    typeName: $.ZodEffects,
    ...Z(n)
});
var Fm = class extends Q {
    _parse(e) {
        return this._getType(e) === K.undefined ? Tp(void 0) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
;
Fm.create = (e, t) => new Fm({
    innerType: e,
    typeName: $.ZodOptional,
    ...Z(t)
});
var Im = class extends Q {
    _parse(e) {
        return this._getType(e) === K.null ? Tp(null) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
;
Im.create = (e, t) => new Im({
    innerType: e,
    typeName: $.ZodNullable,
    ...Z(t)
});
var Lm = class extends Q {
    _parse(e) {
        let {ctx: t} = this._processInputParams(e)
          , n = t.data;
        return t.parsedType === K.undefined && (n = this._def.defaultValue()),
        this._def.innerType._parse({
            data: n,
            path: t.path,
            parent: t
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
;
Lm.create = (e, t) => new Lm({
    innerType: e,
    typeName: $.ZodDefault,
    defaultValue: typeof t.default == `function` ? t.default : () => t.default,
    ...Z(t)
});
var Rm = class extends Q {
    _parse(e) {
        let {ctx: t} = this._processInputParams(e)
          , n = {
            ...t,
            common: {
                ...t.common,
                issues: []
            }
        }
          , r = this._def.innerType._parse({
            data: n.data,
            path: n.path,
            parent: {
                ...n
            }
        });
        return kp(r) ? r.then(e => ({
            status: `valid`,
            value: e.status === `valid` ? e.value : this._def.catchValue({
                get error() {
                    return new vp(n.common.issues)
                },
                input: n.data
            })
        })) : {
            status: `valid`,
            value: r.status === `valid` ? r.value : this._def.catchValue({
                get error() {
                    return new vp(n.common.issues)
                },
                input: n.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
;
Rm.create = (e, t) => new Rm({
    innerType: e,
    typeName: $.ZodCatch,
    catchValue: typeof t.catch == `function` ? t.catch : () => t.catch,
    ...Z(t)
});
var zm = class extends Q {
    _parse(e) {
        if (this._getType(e) !== K.nan) {
            let t = this._getOrReturnCtx(e);
            return J(t, {
                code: q.invalid_type,
                expected: K.nan,
                received: t.parsedType
            }),
            Y
        }
        return {
            status: `valid`,
            value: e.data
        }
    }
}
;
zm.create = e => new zm({
    typeName: $.ZodNaN,
    ...Z(e)
});
var Bm = class extends Q {
    _parse(e) {
        let {ctx: t} = this._processInputParams(e)
          , n = t.data;
        return this._def.type._parse({
            data: n,
            path: t.path,
            parent: t
        })
    }
    unwrap() {
        return this._def.type
    }
}
  , Vm = class e extends Q {
    _parse(e) {
        let {status: t, ctx: n} = this._processInputParams(e);
        if (n.common.async)
            return (async () => {
                let e = await this._def.in._parseAsync({
                    data: n.data,
                    path: n.path,
                    parent: n
                });
                return e.status === `aborted` ? Y : e.status === `dirty` ? (t.dirty(),
                wp(e.value)) : this._def.out._parseAsync({
                    data: e.value,
                    path: n.path,
                    parent: n
                })
            }
            )();
        {
            let e = this._def.in._parseSync({
                data: n.data,
                path: n.path,
                parent: n
            });
            return e.status === `aborted` ? Y : e.status === `dirty` ? (t.dirty(),
            {
                status: `dirty`,
                value: e.value
            }) : this._def.out._parseSync({
                data: e.value,
                path: n.path,
                parent: n
            })
        }
    }
    static create(t, n) {
        return new e({
            in: t,
            out: n,
            typeName: $.ZodPipeline
        })
    }
}
  , Hm = class extends Q {
    _parse(e) {
        let t = this._def.innerType._parse(e)
          , n = e => (Op(e) && (e.value = Object.freeze(e.value)),
        e);
        return kp(t) ? t.then(e => n(e)) : n(t)
    }
    unwrap() {
        return this._def.innerType
    }
}
;
Hm.create = (e, t) => new Hm({
    innerType: e,
    typeName: $.ZodReadonly,
    ...Z(t)
}),
_m.lazycreate;
var $;
(function(e) {
    e.ZodString = `ZodString`,
    e.ZodNumber = `ZodNumber`,
    e.ZodNaN = `ZodNaN`,
    e.ZodBigInt = `ZodBigInt`,
    e.ZodBoolean = `ZodBoolean`,
    e.ZodDate = `ZodDate`,
    e.ZodSymbol = `ZodSymbol`,
    e.ZodUndefined = `ZodUndefined`,
    e.ZodNull = `ZodNull`,
    e.ZodAny = `ZodAny`,
    e.ZodUnknown = `ZodUnknown`,
    e.ZodNever = `ZodNever`,
    e.ZodVoid = `ZodVoid`,
    e.ZodArray = `ZodArray`,
    e.ZodObject = `ZodObject`,
    e.ZodUnion = `ZodUnion`,
    e.ZodDiscriminatedUnion = `ZodDiscriminatedUnion`,
    e.ZodIntersection = `ZodIntersection`,
    e.ZodTuple = `ZodTuple`,
    e.ZodRecord = `ZodRecord`,
    e.ZodMap = `ZodMap`,
    e.ZodSet = `ZodSet`,
    e.ZodFunction = `ZodFunction`,
    e.ZodLazy = `ZodLazy`,
    e.ZodLiteral = `ZodLiteral`,
    e.ZodEnum = `ZodEnum`,
    e.ZodEffects = `ZodEffects`,
    e.ZodNativeEnum = `ZodNativeEnum`,
    e.ZodOptional = `ZodOptional`,
    e.ZodNullable = `ZodNullable`,
    e.ZodDefault = `ZodDefault`,
    e.ZodCatch = `ZodCatch`,
    e.ZodPromise = `ZodPromise`,
    e.ZodBranded = `ZodBranded`,
    e.ZodPipeline = `ZodPipeline`,
    e.ZodReadonly = `ZodReadonly`
}
)($ ||= {});
var Um = nm.create;
im.create,
zm.create,
am.create,
om.create,
sm.create,
cm.create,
lm.create,
um.create,
dm.create,
fm.create,
pm.create,
mm.create,
hm.create;
var Wm = _m.create;
_m.strictCreate,
vm.create,
bm.create,
Sm.create,
Cm.create,
wm.create,
Tm.create,
Em.create,
Dm.create,
Om.create,
km.create,
jm.create,
Mm.create,
Nm.create,
Pm.create,
Fm.create,
Im.create,
Pm.createWithPreprocess,
Vm.create;
var Gm = fl(`/contato`)({
    head: () => lp(`Contato | Carvalho Soluções em Auditoria`, `Fale com a Carvalho Soluções em Auditoria pelo WhatsApp e apresente a necessidade patrimonial da sua organização.`),
    component: pl( () => pp( () => import(`./contato-XBjmMlYv.js`), []), `component`)
});
Wm({
    nome: Um().trim().min(2, `Informe seu nome`).max(100),
    organizacao: Um().trim().min(2, `Informe a organização`).max(120),
    contato: Um().trim().max(120).optional(),
    assunto: Um().trim().min(3, `Informe o assunto`).max(120),
    mensagem: Um().trim().min(10, `Descreva brevemente sua necessidade`).max(1e3)
});
var Km = fl(`/perguntas-frequentes`)({
    head: () => lp(`Perguntas Frequentes | Carvalho Soluções em Auditoria`, `Tire dúvidas sobre auditoria de ativo imobilizado, levantamento físico e conciliação físico-contábil.`),
    component: pl( () => pp( () => import(`./perguntas-frequentes-CLEJY_lm.js`), __vite__mapDeps([3, 1])), `component`)
})
  , qm = fl(`/segmentos`)({
    head: () => lp(`Segmentos Atendidos | Carvalho Soluções em Auditoria`, `Serviços de verificação de bens e controle patrimonial para empresas privadas e organizações públicas.`),
    component: pl( () => pp( () => import(`./segmentos-D2gk6S5I.js`), __vite__mapDeps([4, 1])), `component`)
})
  , Jm = fl(`/servicos`)({
    head: () => lp(`Serviços de Auditoria Patrimonial | Carvalho Soluções em Auditoria`, `Levantamento físico patrimonial, conciliação físico-contábil, análise cadastral e apoio ao controle patrimonial do ativo imobilizado.`),
    component: pl( () => pp( () => import(`./servicos-BLcBpXYK.js`), __vite__mapDeps([5, 1])), `component`)
})
  , Ym = fl(`/sobre`)({
    head: () => lp(`Sobre | Carvalho Soluções em Auditoria`, `Conheça a Carvalho Soluções em Auditoria: conhecimento técnico aplicado à gestão patrimonial e ao controle do ativo imobilizado.`),
    component: pl( () => pp( () => import(`./sobre-C5Wgbzis.js`), __vite__mapDeps([6, 1])), `component`)
})
  , Xm = {
    IndexRoute: mp.update({
        id: `/`,
        path: `/`,
        getParentRoute: () => op
    }),
    ComoFuncionaRoute: hp.update({
        id: `/como-funciona`,
        path: `/como-funciona`,
        getParentRoute: () => op
    }),
    ContatoRoute: Gm.update({
        id: `/contato`,
        path: `/contato`,
        getParentRoute: () => op
    }),
    PerguntasFrequentesRoute: Km.update({
        id: `/perguntas-frequentes`,
        path: `/perguntas-frequentes`,
        getParentRoute: () => op
    }),
    SegmentosRoute: qm.update({
        id: `/segmentos`,
        path: `/segmentos`,
        getParentRoute: () => op
    }),
    ServicosRoute: Jm.update({
        id: `/servicos`,
        path: `/servicos`,
        getParentRoute: () => op
    }),
    SobreRoute: Ym.update({
        id: `/sobre`,
        path: `/sobre`,
        getParentRoute: () => op
    })
}
  , Zm = op._addFileChildren(Xm)
  , Qm = () => kl({
    routeTree: Zm,
    context: {
        queryClient: new Uu
    },
    scrollRestoration: !0,
    defaultPreloadStaleTime: 0
});
async function $m() {
    let e = await Qm(), t;
    if (ql) {
        let n = await ql.getOptions();
        n.serializationAdapters = n.serializationAdapters ?? [],
        window.__TSS_START_OPTIONS__ = n,
        t = n.serializationAdapters,
        e.options.defaultSsr = n.defaultSsr
    } else
        t = [],
        window.__TSS_START_OPTIONS__ = {
            serializationAdapters: t
        };
    return t.push(Ks),
    e.options.serializationAdapters && t.push(...e.options.serializationAdapters),
    e.update({
        basepath: ``,
        serializationAdapters: t
    }),
    e.stores.ids.get().length || await qn(e),
    e
}
var eh = $m;
function th() {
    return eh().finally( () => window.$_TSR?.h())
}
var nh;
function rh() {
    return nh ||= th(),
    (0,
    I.jsx)(Qs, {
        promise: nh,
        children: e => (0,
        I.jsx)(Ml, {
            router: e
        })
    })
}
var ih = g();
(0,
F.startTransition)( () => {
    (0,
    ih.hydrateRoot)(document, (0,
    I.jsx)(F.StrictMode, {
        children: (0,
        I.jsx)(rh, {})
    }))
}
);
export {c as _, Cd as a, hd as c, gd as d, md as f, u as g, Xs as h, bd as i, _d as l, al as m, Um as n, Sd as o, id as p, $f as r, wd as s, Wm as t, pd as u};
