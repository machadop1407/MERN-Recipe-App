(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('universal-cookie'), require('react')) :
	typeof define === 'function' && define.amd ? define(['universal-cookie', 'react'], factory) :
	(global = global || self, global.ReactCookie = factory(global.UniversalCookie, global.React));
}(this, (function (universalCookie, react) { 'use strict';

	universalCookie = universalCookie && Object.prototype.hasOwnProperty.call(universalCookie, 'default') ? universalCookie['default'] : universalCookie;
	react = react && Object.prototype.hasOwnProperty.call(react, 'default') ? react['default'] : react;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var Cookies = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _universalCookie = _interopRequireDefault(universalCookie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _default = _universalCookie["default"];
	exports["default"] = _default;
	module.exports = exports.default;
	});

	unwrapExports(Cookies);

	var CookiesContext_1 = createCommonjsModule(function (module, exports) {

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = exports.Consumer = exports.Provider = void 0;

	var React = _interopRequireWildcard(react);

	var _Cookies = _interopRequireDefault(Cookies);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

	function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

	var CookiesContext = /*#__PURE__*/React.createContext(new _Cookies["default"]());
	var Provider = CookiesContext.Provider,
	    Consumer = CookiesContext.Consumer;
	exports.Consumer = Consumer;
	exports.Provider = Provider;
	var _default = CookiesContext;
	exports["default"] = _default;
	});

	unwrapExports(CookiesContext_1);
	var CookiesContext_2 = CookiesContext_1.Consumer;
	var CookiesContext_3 = CookiesContext_1.Provider;

	var CookiesProvider_1 = createCommonjsModule(function (module, exports) {

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var React = _interopRequireWildcard(react);

	var _universalCookie = _interopRequireDefault(universalCookie);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

	function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

	var __extends =  function () {
	  var _extendStatics = function extendStatics(d, b) {
	    _extendStatics = Object.setPrototypeOf || {
	      __proto__: []
	    } instanceof Array && function (d, b) {
	      d.__proto__ = b;
	    } || function (d, b) {
	      for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	      }
	    };

	    return _extendStatics(d, b);
	  };

	  return function (d, b) {
	    _extendStatics(d, b);

	    function __() {
	      this.constructor = d;
	    }

	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	  };
	}();

	var CookiesProvider = function (_super) {
	  __extends(CookiesProvider, _super);

	  function CookiesProvider(props) {
	    var _this = _super.call(this, props) || this;

	    if (props.cookies) {
	      _this.cookies = props.cookies;
	    } else {
	      _this.cookies = new _universalCookie["default"]();
	    }

	    return _this;
	  }

	  CookiesProvider.prototype.render = function () {
	    return /*#__PURE__*/React.createElement(CookiesContext_1.Provider, {
	      value: this.cookies
	    }, this.props.children);
	  };

	  return CookiesProvider;
	}(React.Component);

	var _default = CookiesProvider;
	exports["default"] = _default;
	module.exports = exports.default;
	});

	unwrapExports(CookiesProvider_1);

	var reactIs_development = createCommonjsModule(function (module, exports) {



	{
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	exports.isValidElementType = isValidElementType;
	exports.typeOf = typeOf;
	  })();
	}
	});
	var reactIs_development_1 = reactIs_development.AsyncMode;
	var reactIs_development_2 = reactIs_development.ConcurrentMode;
	var reactIs_development_3 = reactIs_development.ContextConsumer;
	var reactIs_development_4 = reactIs_development.ContextProvider;
	var reactIs_development_5 = reactIs_development.Element;
	var reactIs_development_6 = reactIs_development.ForwardRef;
	var reactIs_development_7 = reactIs_development.Fragment;
	var reactIs_development_8 = reactIs_development.Lazy;
	var reactIs_development_9 = reactIs_development.Memo;
	var reactIs_development_10 = reactIs_development.Portal;
	var reactIs_development_11 = reactIs_development.Profiler;
	var reactIs_development_12 = reactIs_development.StrictMode;
	var reactIs_development_13 = reactIs_development.Suspense;
	var reactIs_development_14 = reactIs_development.isAsyncMode;
	var reactIs_development_15 = reactIs_development.isConcurrentMode;
	var reactIs_development_16 = reactIs_development.isContextConsumer;
	var reactIs_development_17 = reactIs_development.isContextProvider;
	var reactIs_development_18 = reactIs_development.isElement;
	var reactIs_development_19 = reactIs_development.isForwardRef;
	var reactIs_development_20 = reactIs_development.isFragment;
	var reactIs_development_21 = reactIs_development.isLazy;
	var reactIs_development_22 = reactIs_development.isMemo;
	var reactIs_development_23 = reactIs_development.isPortal;
	var reactIs_development_24 = reactIs_development.isProfiler;
	var reactIs_development_25 = reactIs_development.isStrictMode;
	var reactIs_development_26 = reactIs_development.isSuspense;
	var reactIs_development_27 = reactIs_development.isValidElementType;
	var reactIs_development_28 = reactIs_development.typeOf;

	var reactIs = createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_development;
	}
	});

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	  childContextTypes: true,
	  contextType: true,
	  contextTypes: true,
	  defaultProps: true,
	  displayName: true,
	  getDefaultProps: true,
	  getDerivedStateFromError: true,
	  getDerivedStateFromProps: true,
	  mixins: true,
	  propTypes: true,
	  type: true
	};
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

	function getStatics(component) {
	  // React v16.11 and below
	  if (reactIs.isMemo(component)) {
	    return MEMO_STATICS;
	  } // React v16.12 and above


	  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	  if (typeof sourceComponent !== 'string') {
	    // don't hoist over string (html) components
	    if (objectPrototype) {
	      var inheritedComponent = getPrototypeOf(sourceComponent);

	      if (inheritedComponent && inheritedComponent !== objectPrototype) {
	        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	      }
	    }

	    var keys = getOwnPropertyNames(sourceComponent);

	    if (getOwnPropertySymbols) {
	      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	    }

	    var targetStatics = getStatics(targetComponent);
	    var sourceStatics = getStatics(sourceComponent);

	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i];

	      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

	        try {
	          // Avoid failures from read-only properties
	          defineProperty(targetComponent, key, descriptor);
	        } catch (e) {}
	      }
	    }
	  }

	  return targetComponent;
	}

	var hoistNonReactStatics_cjs = hoistNonReactStatics;

	var withCookies_1 = createCommonjsModule(function (module, exports) {

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = withCookies;

	var React = _interopRequireWildcard(react);

	var _hoistNonReactStatics = _interopRequireDefault(hoistNonReactStatics_cjs);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

	function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

	var __extends =  function () {
	  var _extendStatics = function extendStatics(d, b) {
	    _extendStatics = Object.setPrototypeOf || {
	      __proto__: []
	    } instanceof Array && function (d, b) {
	      d.__proto__ = b;
	    } || function (d, b) {
	      for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	      }
	    };

	    return _extendStatics(d, b);
	  };

	  return function (d, b) {
	    _extendStatics(d, b);

	    function __() {
	      this.constructor = d;
	    }

	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	  };
	}();

	var __assign =  function () {
	  __assign = Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	      s = arguments[i];

	      for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	      }
	    }

	    return t;
	  };

	  return __assign.apply(this, arguments);
	};

	var __rest =  function (s, e) {
	  var t = {};

	  for (var p in s) {
	    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	  }

	  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	  }
	  return t;
	};

	function withCookies(WrappedComponent) {
	  // @ts-ignore
	  var name = WrappedComponent.displayName || WrappedComponent.name;

	  var CookieWrapper = function (_super) {
	    __extends(CookieWrapper, _super);

	    function CookieWrapper() {
	      var _this = _super !== null && _super.apply(this, arguments) || this;

	      _this.onChange = function () {
	        // Make sure to update children with new values
	        _this.forceUpdate();
	      };

	      return _this;
	    }

	    CookieWrapper.prototype.listen = function () {
	      this.props.cookies.addChangeListener(this.onChange);
	    };

	    CookieWrapper.prototype.unlisten = function (cookies) {
	      (cookies || this.props.cookies).removeChangeListener(this.onChange);
	    };

	    CookieWrapper.prototype.componentDidMount = function () {
	      this.listen();
	    };

	    CookieWrapper.prototype.componentDidUpdate = function (prevProps) {
	      if (prevProps.cookies !== this.props.cookies) {
	        this.unlisten(prevProps.cookies);
	        this.listen();
	      }
	    };

	    CookieWrapper.prototype.componentWillUnmount = function () {
	      this.unlisten();
	    };

	    CookieWrapper.prototype.render = function () {
	      var _a = this.props,
	          forwardedRef = _a.forwardedRef,
	          cookies = _a.cookies,
	          restProps = __rest(_a, ["forwardedRef", "cookies"]);

	      var allCookies = cookies.getAll();
	      return /*#__PURE__*/React.createElement(WrappedComponent, __assign({}, restProps, {
	        ref: forwardedRef,
	        cookies: cookies,
	        allCookies: allCookies
	      }));
	    };

	    CookieWrapper.displayName = "withCookies(" + name + ")";
	    CookieWrapper.WrappedComponent = WrappedComponent;
	    return CookieWrapper;
	  }(React.Component);

	  var ForwardedComponent = /*#__PURE__*/React.forwardRef(function (props, ref) {
	    return /*#__PURE__*/React.createElement(CookiesContext_1.Consumer, null, function (cookies) {
	      return /*#__PURE__*/React.createElement(CookieWrapper, __assign({
	        cookies: cookies
	      }, props, {
	        forwardedRef: ref
	      }));
	    });
	  });
	  ForwardedComponent.displayName = CookieWrapper.displayName;
	  ForwardedComponent.WrappedComponent = CookieWrapper.WrappedComponent;
	  return (0, _hoistNonReactStatics["default"])(ForwardedComponent, WrappedComponent);
	}

	module.exports = exports.default;
	});

	unwrapExports(withCookies_1);

	var utils = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isInBrowser = isInBrowser;

	function isInBrowser() {
	  return typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
	}
	});

	unwrapExports(utils);
	var utils_1 = utils.isInBrowser;

	var useCookies_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = useCookies;



	var _CookiesContext = _interopRequireDefault(CookiesContext_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function useCookies(dependencies) {
	  var cookies = (0, react.useContext)(_CookiesContext["default"]);

	  if (!cookies) {
	    throw new Error('Missing <CookiesProvider>');
	  }

	  var initialCookies = cookies.getAll();

	  var _a = (0, react.useState)(initialCookies),
	      allCookies = _a[0],
	      setCookies = _a[1];

	  var previousCookiesRef = (0, react.useRef)(allCookies);

	  if ((0, utils.isInBrowser)()) {
	    (0, react.useLayoutEffect)(function () {
	      function onChange() {
	        var newCookies = cookies.getAll();

	        if (shouldUpdate(dependencies || null, newCookies, previousCookiesRef.current)) {
	          setCookies(newCookies);
	        }

	        previousCookiesRef.current = newCookies;
	      }

	      cookies.addChangeListener(onChange);
	      return function () {
	        cookies.removeChangeListener(onChange);
	      };
	    }, [cookies]);
	  }

	  var setCookie = (0, react.useMemo)(function () {
	    return cookies.set.bind(cookies);
	  }, [cookies]);
	  var removeCookie = (0, react.useMemo)(function () {
	    return cookies.remove.bind(cookies);
	  }, [cookies]);
	  return [allCookies, setCookie, removeCookie];
	}

	function shouldUpdate(dependencies, newCookies, oldCookies) {
	  if (!dependencies) {
	    return true;
	  }

	  for (var _i = 0, dependencies_1 = dependencies; _i < dependencies_1.length; _i++) {
	    var dependency = dependencies_1[_i];

	    if (newCookies[dependency] !== oldCookies[dependency]) {
	      return true;
	    }
	  }

	  return false;
	}

	module.exports = exports.default;
	});

	unwrapExports(useCookies_1);



	var types = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var cjs = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _exportNames = {
	  Cookies: true,
	  CookiesProvider: true,
	  withCookies: true,
	  useCookies: true
	};
	Object.defineProperty(exports, "Cookies", {
	  enumerable: true,
	  get: function get() {
	    return _Cookies["default"];
	  }
	});
	Object.defineProperty(exports, "CookiesProvider", {
	  enumerable: true,
	  get: function get() {
	    return _CookiesProvider["default"];
	  }
	});
	Object.defineProperty(exports, "withCookies", {
	  enumerable: true,
	  get: function get() {
	    return _withCookies["default"];
	  }
	});
	Object.defineProperty(exports, "useCookies", {
	  enumerable: true,
	  get: function get() {
	    return _useCookies["default"];
	  }
	});

	var _Cookies = _interopRequireDefault(Cookies);

	var _CookiesProvider = _interopRequireDefault(CookiesProvider_1);

	var _withCookies = _interopRequireDefault(withCookies_1);

	var _useCookies = _interopRequireDefault(useCookies_1);



	Object.keys(types).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
	  if (key in exports && exports[key] === types[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return types[key];
	    }
	  });
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	});

	var index = unwrapExports(cjs);

	return index;

})));
