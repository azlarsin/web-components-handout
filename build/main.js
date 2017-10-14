webpackJsonp([0],Array(18).concat([
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__ = __webpack_require__(9);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__["a" /* default */]);

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore right clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ['replace', 'to', 'innerRef']); // eslint-disable-line no-unused-vars

    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, 'You should not use <Link> outside a <Router>');

    var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      createHref: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__ = __webpack_require__(17);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__["a" /* default */]);

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(65);

var _Ripple = __webpack_require__(78);

var _Ripple2 = _interopRequireDefault(_Ripple);

var _Pages = __webpack_require__(79);

var _Pages2 = _interopRequireDefault(_Pages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by azlar on 02/10/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            ripples: new Map()
        };

        _this.createRipple = _this.createRipple.bind(_this);
        _this.handleRoute = _this.handleRoute.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'getChildContext',
        value: function getChildContext() {
            var _this2 = this;

            return {
                clearRipple: function clearRipple(id) {
                    var ripples = _this2.state.ripples;
                    ripples.delete(id);

                    _this2.setState({
                        ripples: ripples
                    });
                }
            };
        }
    }, {
        key: 'createRipple',
        value: function createRipple(e) {

            e = arguments[1] || arguments[0];
            e.persist();

            var ripples = this.state.ripples,
                id = 'ripple-' + Date.now(),
                size = 50,
                rippleStyle = {};

            if (!arguments[1]) {

                if (this.context.router.route.location.pathname !== '/') {
                    return;
                }
                size = window.screen.width; // max(container.size)

                rippleStyle.backgroundColor = "#" + (~~(Math.random() * (1 << 24))).toString(16);
                rippleStyle.opacity = Math.random();
            } else {

                rippleStyle.backgroundColor = "rgba(0, 0, 255, .2)";
                rippleStyle.opacity = .3;
            }

            ripples.set(id, {
                id: id,
                style: _extends({
                    top: e.pageY - size / 2,
                    left: e.pageX - size / 2,
                    width: size,
                    height: size
                }, rippleStyle)
            });

            this.setState({
                ripples: ripples
            });
        }
    }, {
        key: 'handleRoute',
        value: function handleRoute(action, e) {
            e.preventDefault();

            if (action === 'next') {
                var allNext = this.refs.content.querySelectorAll("section.next:not(.show)");
                if (allNext.length === 0) {
                    var router = this.context.router,
                        history = router.history,
                        route = router.route;


                    if (route.location.pathname === '/') {

                        history.push("/1");
                    } else {
                        var currentPageIndex = Number(route.location.pathname.slice(1));

                        currentPageIndex++;

                        // last page, maybe could route to a specify path like '/end'
                        if (currentPageIndex > _Pages2.default.length) {

                            return;
                        }

                        history.push("/" + currentPageIndex);
                    }
                } else {
                    allNext[0].classList.add("show");
                }
            }

            if (action === 'prev') {
                var allPrev = this.refs.content.querySelectorAll("section.next.show");
                if (allPrev.length === 0) {
                    var _router = this.context.router,
                        _history = _router.history,
                        _route = _router.route;


                    if (_route.location.pathname === '/') {

                        return;
                    } else {
                        var _currentPageIndex = Number(_route.location.pathname.slice(1));

                        if (_currentPageIndex === 1) {
                            _history.push("/");
                        } else {

                            _currentPageIndex--;

                            _history.push("/" + _currentPageIndex);
                        }
                    }
                } else {
                    allPrev[allPrev.length - 1].classList.remove("show");
                }
            }

            // // clear all ripple
            // setTimeout(() => {
            //     this.setState({
            //         ripples: new Map()
            //     })
            // }, 2000);
        }
    }, {
        key: 'render',
        value: function render() {
            var ripples = Array.from(this.state.ripples.values());
            return _react2.default.createElement(
                'div',
                { className: "panel", onMouseDown: this.createRipple },
                ripples.map(function (ripple) {
                    return _react2.default.createElement(_Ripple2.default, _extends({}, ripple, { key: "ripple-index-" + ripple.id }));
                }),
                _react2.default.createElement(
                    'div',
                    { className: "content", ref: "content" },
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render() {
                            return _react2.default.createElement(
                                'h1',
                                null,
                                '~~'
                            );
                        } }),
                    _Pages2.default.map(function (page, index) {
                        return _react2.default.createElement(_reactRouterDom.Route, { path: '/' + (index + 1), key: "route-page-" + index, component: page });
                    })
                ),
                _react2.default.createElement(
                    'aside',
                    { className: "control", onMouseMove: this.createRipple.bind("move", this) },
                    _react2.default.createElement(
                        'svg',
                        { width: 60, height: 40, viewBox: "0 0 60 40", onClick: this.handleRoute.bind(this, 'prev') },
                        _react2.default.createElement('path', { d: "M5 20 L50 20 L30 9 M50 20 L30 31", stroke: "rgba(0,0,255, .4)", strokeWidth: 5, fill: "transparent", strokeLinecap: "round" })
                    ),
                    _react2.default.createElement(
                        'svg',
                        { width: 60, height: 40, viewBox: "0 0 60 40", onClick: this.handleRoute.bind(this, 'next') },
                        _react2.default.createElement('path', { d: "M5 20 L50 20 L30 9 M50 20 L30 31", stroke: "rgba(0,0,255, .4)", strokeWidth: 5, fill: "transparent", strokeLinecap: "round" })
                    )
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

App.childContextTypes = {
    clearRipple: _propTypes2.default.func
};

App.contextTypes = {
    router: _propTypes2.default.object
};

__webpack_require__(90);

_reactDom2.default.render(_react2.default.createElement(
    _reactRouterDom.HashRouter,
    null,
    _react2.default.createElement(App, null)
), document.getElementById('qwe'));

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(68);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return __WEBPACK_IMPORTED_MODULE_1__HashRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_2__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_4__NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(72);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_5__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_6__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_8__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(74);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_9__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__matchPath__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_11__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__withRouter__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_12__withRouter__["a"]; });



























/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(18);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<BrowserRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { BrowserRouter as Router }`.');
  };

  BrowserRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

BrowserRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  forceRefresh: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (BrowserRouter);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(1);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(3);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(14);

var _PathUtils = __webpack_require__(5);

var _createTransitionManager = __webpack_require__(15);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(18);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<HashRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { HashRouter as Router }`.');
  };

  HashRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

HashRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  hashType: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['hashbang', 'noslash', 'slash']),
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (HashRouter);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(1);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(3);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(14);

var _PathUtils = __webpack_require__(5);

var _createTransitionManager = __webpack_require__(15);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__ = __webpack_require__(23);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__["a" /* default */]);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Route__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(33);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref.ariaCurrent,
      rest = _objectWithoutProperties(_ref, ['to', 'exact', 'strict', 'location', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive', 'ariaCurrent']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Route__["a" /* default */], {
    path: (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(' ') : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        'aria-current': isActive && ariaCurrent
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */].propTypes.to,
  exact: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  activeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  activeStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  isActive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  ariaCurrent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['page', 'step', 'location', 'true'])
};

NavLink.defaultProps = {
  activeClassName: 'active',
  ariaCurrent: 'true'
};

/* harmony default export */ __webpack_exports__["a"] = (NavLink);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__ = __webpack_require__(26);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__["a" /* default */]);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__ = __webpack_require__(27);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__["a" /* default */]);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__ = __webpack_require__(29);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__["a" /* default */]);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__ = __webpack_require__(30);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__["a" /* default */]);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__ = __webpack_require__(11);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__["a" /* default */]);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__ = __webpack_require__(31);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__["a" /* default */]);

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by azlar on 11/10/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Ripple = function (_React$Component) {
    _inherits(Ripple, _React$Component);

    function Ripple(props) {
        _classCallCheck(this, Ripple);

        var _this = _possibleConstructorReturn(this, (Ripple.__proto__ || Object.getPrototypeOf(Ripple)).call(this, props));

        _this.handleRippleTransitionEnd = _this.handleRippleTransitionEnd.bind(_this);
        return _this;
    }

    _createClass(Ripple, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            setTimeout(function () {
                _this2.refs.d.classList.add("ripple-animate");
            }, 0);
        }
    }, {
        key: 'handleRippleTransitionEnd',
        value: function handleRippleTransitionEnd(e) {
            var clearRipple = this.context.clearRipple;


            clearRipple(this.props.id);
        }
    }, {
        key: 'render',
        value: function render() {
            var style = _extends({}, this.props.style);
            return _react2.default.createElement('div', { className: "ripple", style: style, onTransitionEnd: this.handleRippleTransitionEnd, ref: "d" });
        }
    }]);

    return Ripple;
}(_react2.default.Component);

Ripple.contextTypes = {
    clearRipple: _propTypes2.default.func
};

exports.default = Ripple;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Utils = __webpack_require__(80);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by azlar on 12/10/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter() {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this));

        _this.state = {
            count: 0
        };

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(Counter, [{
        key: 'handleClick',
        value: function handleClick(type) {
            if (type === 'plus') {
                this.setState({
                    count: this.state.count + 1
                });
            }

            if (type === 'minus') {
                this.setState({
                    count: this.state.count - 1
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    this.state.count
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.handleClick.bind(this, 'plus') },
                    '+'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.handleClick.bind(this, 'minus') },
                    '-'
                )
            );
        }
    }]);

    return Counter;
}(_react2.default.Component);

exports.default = [function (match) {
    return _react2.default.createElement(
        'div',
        { className: "page page-" + Number(match.location.pathname.slice(1)) },
        _react2.default.createElement(
            'h1',
            null,
            '\u600E\u6837\u505A\u4E00\u4E2A\u53EF\u62D6\u62FD\u7684\u6811\u72B6\u7ED3\u6784'
        ),
        _react2.default.createElement(
            'div',
            { className: "sections no-margin" },
            _react2.default.createElement(
                'section',
                { className: "next" },
                _react2.default.createElement('img', { src: __webpack_require__(81) })
            )
        )
    );
}, function (match) {
    return _react2.default.createElement(
        'div',
        { className: "page page-" + Number(match.location.pathname.slice(1)) },
        _react2.default.createElement(
            'h1',
            null,
            '\u5206\u6790\u9700\u6C42'
        ),
        _react2.default.createElement(
            'div',
            { className: "sections" },
            _react2.default.createElement(
                'section',
                { className: "next column" },
                _react2.default.createElement(
                    'h3',
                    null,
                    'dom \u5C42\uFF1A'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u53EF\u62D6\u62FD'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u7236\u5B50\u7EA7'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u94FE\u8868\u7ED3\u6784'
                    )
                )
            ),
            _react2.default.createElement(
                'section',
                { className: "next column" },
                _react2.default.createElement(
                    'h3',
                    null,
                    '\u6570\u636E\u5C42\uFF1A'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u964D\u4F4E\u7EAC\u5EA6\uFF0C\u51CF\u8F7B\u590D\u6742\u5EA6\uFF08hash table\uFF09'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u6EE1\u8DB3\u5D4C\u5957'
                    )
                )
            )
        )
    );
}, function (match) {
    return _react2.default.createElement(
        'div',
        { className: "page page-" + Number(match.location.pathname.slice(1)) },
        _react2.default.createElement(
            'h1',
            null,
            '\u5206\u6790\u7236\u5B50\u5173\u7CFB'
        ),
        _react2.default.createElement(
            'div',
            { className: "sections no-margin" },
            _react2.default.createElement(
                'section',
                { className: "next" },
                _react2.default.createElement('div', null),
                _react2.default.createElement('img', { src: __webpack_require__(82) })
            )
        )
    );
}, function (_React$Component2) {
    _inherits(DragDemo, _React$Component2);

    function DragDemo(props) {
        _classCallCheck(this, DragDemo);

        var _this2 = _possibleConstructorReturn(this, (DragDemo.__proto__ || Object.getPrototypeOf(DragDemo)).call(this, props));

        _this2.state = {
            draggingNode: null,
            hoveringNode: null,
            dropNode: null,
            type: null
        };

        _this2.handleDragLeave = _this2.handleDragLeave.bind(_this2);
        return _this2;
    }

    _createClass(DragDemo, [{
        key: 'handleDragStart',
        value: function handleDragStart(nodeIndex, e) {
            e.dataTransfer.effectAllowed = "move";

            this.setState({
                draggingNode: nodeIndex
            });
        }
    }, {
        key: 'handleDragOver',
        value: function handleDragOver(nodeIndex, e) {
            e.preventDefault();
            e.stopPropagation();

            if (nodeIndex !== this.state.draggingNode) {
                var layer = e.target;

                var rect = layer.getBoundingClientRect(),
                    layerHeight = rect.height,
                    mouse = e.clientY - rect.top;

                // holder only has top line
                if (mouse > layerHeight / 3 && mouse <= layerHeight) {
                    // layer show over

                    layer.classList.add("over");
                    layer.classList.remove("show-top-line");

                    this.setState({
                        hoveringNode: nodeIndex,
                        type: "drop in"
                    });
                } else {
                    // layer show top line
                    layer.classList.add("show-top-line");
                    layer.classList.remove("over");

                    this.setState({
                        hoveringNode: nodeIndex,
                        type: "move to its upon"
                    });
                }
            }
        }
    }, {
        key: 'handleDragLeave',
        value: function handleDragLeave() {
            var dragEnd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


            this.setState({
                hoveringNode: null,
                draggingNode: dragEnd ? null : this.state.draggingNode
            });
        }
    }, {
        key: 'handleDrop',
        value: function handleDrop(nodeIndex, e) {
            e.preventDefault();
            e.stopPropagation();

            this.setState({
                dropNode: nodeIndex
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var location = this.props.location;


            return _react2.default.createElement(
                'div',
                { className: "page page-" + Number(location.pathname.slice(1)) },
                _react2.default.createElement(
                    'h1',
                    null,
                    '\u4E00\u7EF4\u6811 dom \u7ED3\u6784\uFF0C\u89C2\u5BDF\u62D6\u62FD\u4E8B\u4EF6'
                ),
                _react2.default.createElement(
                    'div',
                    { className: "sections no-margin" },
                    _react2.default.createElement(
                        'section',
                        { className: "next" },
                        _react2.default.createElement(
                            'pre',
                            null,
                            _react2.default.createElement(
                                'p',
                                null,
                                "<div class='item' draggable='true'></div>"
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                "list: ['item-1', 'item-2', 'item-3'] "
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                "hash: { item-1: xxx(details) }"
                            )
                        ),
                        [1, 2, 3].map(function (v) {
                            return _react2.default.createElement(
                                'div',
                                {
                                    className: 'drag-item' + (_this3.state.hoveringNode === v ? " over" : ""),
                                    draggable: 'true',
                                    key: "drag-item-" + v,
                                    onDragStart: _this3.handleDragStart.bind(_this3, v),
                                    onDragOver: _this3.handleDragOver.bind(_this3, v),
                                    onDragLeave: _this3.handleDragLeave.bind(_this3, false),

                                    onDrop: _this3.handleDrop.bind(_this3, v)
                                },
                                "item-" + v
                            );
                        }),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'p',
                                null,
                                this.state.draggingNode ? "dragging: item-" + this.state.draggingNode : ""
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                this.state.hoveringNode ? "targeting: item-" + this.state.hoveringNode + ", type: " + this.state.type : ""
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                this.state.dropNode ? "target: item-" + this.state.dropNode + ", type: " + this.state.type : ""
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DragDemo;
}(_react2.default.Component), function (match) {
    return _react2.default.createElement(
        'div',
        { className: "page page-" + Number(match.location.pathname.slice(1)) },
        _react2.default.createElement(
            'h1',
            null,
            '\u4E8B\u4EF6\u7ED1\u5B9A'
        ),
        _react2.default.createElement(
            'div',
            { className: "sections" },
            _react2.default.createElement(
                'section',
                { className: "next b100" },
                _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        "item.addEventListener(' dragstart, dragover, drop....')"
                    )
                )
            ),
            _react2.default.createElement(
                'section',
                { className: "next b100" },
                '\u901A\u8FC7\u4E8B\u4EF6\u7ED1\u5B9A\uFF0C\u6211\u4EEC\u9700\u8981\u5F97\u5230\u4E0A\u4E2A\u4F8B\u5B50\u4E2D\u7684\u4E09\u4E2A\u6570\u636E',
                _react2.default.createElement(
                    'pre',
                    { style: { textAlign: "center" } },
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'b',
                            null,
                            'selected node'
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'b',
                            null,
                            'target node'
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'b',
                            null,
                            'move type'
                        )
                    )
                )
            )
        )
    );
}, function (_React$Component3) {
    _inherits(DragDemoUsingLib, _React$Component3);

    function DragDemoUsingLib() {
        _classCallCheck(this, DragDemoUsingLib);

        var _this4 = _possibleConstructorReturn(this, (DragDemoUsingLib.__proto__ || Object.getPrototypeOf(DragDemoUsingLib)).call(this));

        _this4.tree = null;

        _this4.handleClick = _this4.handleClick.bind(_this4);
        return _this4;
    }

    _createClass(DragDemoUsingLib, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            var tree = DraggableTree.create({
                map: new Map(),
                list: [],
                mountDom: ".layers",
                multiSelect: true
            });
            tree.createNode(null, {
                data: "<div>item 1</div>"
            });
            tree.createNode(tree.getRootList()[0], {
                data: "<div>item 2</div>"
            });
            tree.createNode(tree.getRootList()[0], {
                data: "<div>item 3</div>"
            });
            tree.createNode(tree.getRootList()[0], {
                data: "<div>item 4</div>"
            });
            tree.createNode(tree.getRootList()[0], {
                data: "<div>item 5</div>"
            });
            tree.createNode(null, {
                data: "<div>item 6</div>"
            });
            tree.createNode(null, {
                data: "<div>item 7</div>"
            });

            this.tree = tree;
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            if (e.target === e.currentTarget) {
                this.tree.clearSelected();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var location = this.props.location;


            return _react2.default.createElement(
                'div',
                { className: "page page-" + Number(location.pathname.slice(1)), onClick: this.handleClick },
                _react2.default.createElement(
                    'h1',
                    null,
                    '\u5D4C\u5957'
                ),
                _react2.default.createElement(
                    'div',
                    { className: "sections" },
                    _react2.default.createElement(
                        'section',
                        { className: "next column" },
                        _react2.default.createElement('div', { className: "layers", onMouseDown: function onMouseDown(e) {
                                e.stopPropagation();
                            } })
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: "next column" },
                        _react2.default.createElement(
                            'pre',
                            { style: { margin: 0, marginLeft: 10, userSelect: 'auto' }, onMouseDown: function onMouseDown(e) {
                                    e.stopPropagation();
                                } },
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'h5',
                                    null,
                                    'hash map\uFF08\u4E00\u7EF4\u5C55\u5F00\uFF09'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    "{ \r\n  item-1: xxx(details), \r\n  item-2: xxx(details),\r\n  ...\r\n}"
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: { border: '1px solid rgba(0, 0, 255, .5)', borderRadius: 2, marginBottom: 10, padding: 5 } },
                                _react2.default.createElement(
                                    'h5',
                                    null,
                                    'root list'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    "list: ['item-1', 'item-6', 'item-7'] "
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: { border: '1px solid rgba(255, 0, 0, .5)', borderRadius: 2, marginBottom: 10, padding: 5 } },
                                _react2.default.createElement(
                                    'h5',
                                    null,
                                    'item-1\'s children list'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    "list: ['item-2', 'item-3', 'item-4', 'item-5'] "
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DragDemoUsingLib;
}(_react2.default.Component), function (match) {
    return _react2.default.createElement(
        'div',
        { className: "page page-" + Number(match.location.pathname.slice(1)) },
        _react2.default.createElement(
            'h1',
            null,
            '\u5B9E\u73B0'
        ),
        _react2.default.createElement(
            'div',
            { className: "sections" },
            _react2.default.createElement(
                'section',
                { className: "next b100" },
                _react2.default.createElement(
                    'p',
                    null,
                    '\u601D\u8003\u4E00\u4E2A\u95EE\u9898\uFF1A\u6BCF\u4E00\u4E2A item \u8BE5\u600E\u4E48\u5199\uFF1F'
                )
            ),
            _react2.default.createElement(
                'section',
                { className: "next b100" },
                _react2.default.createElement(
                    'p',
                    null,
                    '\u65B9\u6848\u4E00\uFF1A\u539F\u751F dom \u5199\u597D createNode()\uFF0CdeleteNode() \u7B49\uFF0C\u5C01\u5E93'
                )
            ),
            _react2.default.createElement(
                'section',
                { className: "next b100 replaceAll" },
                _react2.default.createElement('img', { src: __webpack_require__(83) })
            )
        )
    );
}, function (match) {
    return _react2.default.createElement(
        'div',
        { className: "page page-" + Number(match.location.pathname.slice(1)) },
        _react2.default.createElement(
            'h1',
            null,
            '\u65B9\u6848\u4E00'
        ),
        _react2.default.createElement(
            'div',
            { className: "sections" },
            _react2.default.createElement(
                'section',
                { className: "next column" },
                _react2.default.createElement(
                    'h3',
                    null,
                    '\u4F18\u70B9\uFF1A'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u5F00\u7BB1\u5373\u7528\uFF0C\u65E0\u9700\u81EA\u5EFA\u6570\u636E\u7ED3\u6784'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u4E0D\u9700\u8981\u6DF1\u5EA6\u7406\u89E3\u5185\u90E8\u903B\u8F91\uFF0C\u9075\u5FAA api \u5373\u53EF'
                    )
                )
            ),
            _react2.default.createElement(
                'section',
                { className: "next column" },
                _react2.default.createElement(
                    'h3',
                    null,
                    '\u7F3A\u70B9\uFF1A'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u96BE\u4EE5\u7EF4\u62A4\uFF08\u5BB9\u6613\u5F62\u6210\u5806\u79EF\u6728\uFF09'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'p',
                            { className: "tooltip", 'data-label': "（例如：map 过大（任务过多）时，想根据 list 的 id 动态获取 map 内容，\r\n如果库内没有封装相应方法，很难开发新功能" },
                            '\u65E0\u6CD5\u76D1\u63A7\u751F\u547D\u5468\u671F'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u5E93\u4E00\u822C\u4E3A\u5168\u5C40\u53D8\u91CF\uFF0C\u53EF\u80FD\u4F1A\u88AB\u8986\u76D6\u3001\u6C61\u67D3'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u963B\u585E\u5176\u4ED6\u7A0B\u5E8F\u8FD0\u884C'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u540C\u9875\u9762\u591A\u5B9E\u4F8B\u7684\u7EF4\u62A4'
                    )
                )
            )
        )
    );
}, function (match) {
    return _react2.default.createElement(
        'div',
        { className: "page page-" + Number(match.location.pathname.slice(1)) },
        _react2.default.createElement(
            'h1',
            { className: "shake-crazy hover-shake", onDoubleClick: function onDoubleClick(e) {
                    return e.target.classList.toggle("shake-crazy");
                } },
            '\u7EC4\u4EF6\u5316'
        ),
        _react2.default.createElement(
            'div',
            { className: "sections" },
            _react2.default.createElement(
                'section',
                { className: "next column" },
                _react2.default.createElement(
                    'h3',
                    null,
                    '\u5148\u8BF4\u4E00\u4E0B\u6A21\u5757\u5316\u7F16\u7A0B'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u6A21\u5757\u662F\u4E00\u6BB5 JavaScript \u4EE3\u7801\uFF0C\u5177\u6709\u7EDF\u4E00\u7684\u57FA\u672C\u4E66\u5199\u683C\u5F0F'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u6A21\u5757\u4E4B\u95F4\u901A\u8FC7\u57FA\u672C\u4EA4\u4E92\u89C4\u5219\uFF0C\u80FD\u5F7C\u6B64\u5F15\u7528\uFF0C\u534F\u540C\u5DE5\u4F5C\u3002'
                    )
                )
            ),
            _react2.default.createElement(
                'section',
                { className: "next column" },
                _react2.default.createElement(
                    'h3',
                    null,
                    '\u7EC6\u8282'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u4E3B\u8981\u4F9D\u9760\u540E\u7AEF\u6E32\u67D3\uFF0Cjs \u8D1F\u8D23\u9875\u9762\u903B\u8F91'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u901A\u8FC7\u9875\u9762\u5BF9\u4E0D\u540C\u6A21\u5757\u5F15\u5165\uFF0C'
                    )
                )
            )
        )
    );
}, function (match) {
    return _react2.default.createElement(
        'div',
        { className: "page page-" + Number(match.location.pathname.slice(1)) },
        _react2.default.createElement(
            'h1',
            null,
            '\u6A21\u5757\u5316'
        ),
        _react2.default.createElement(
            'div',
            { className: "sections no-margin" },
            _react2.default.createElement(
                'section',
                { className: "next column" },
                _react2.default.createElement('img', { src: __webpack_require__(84) })
            )
        )
    );
}, function (match) {
    return _react2.default.createElement(
        'div',
        { className: "page page-" + Number(match.location.pathname.slice(1)) },
        _react2.default.createElement(
            'div',
            { className: "knock-down-overlay" },
            _react2.default.createElement(
                'h1',
                { className: "shake-crazy shake-constant hover-shake", onDoubleClick: function onDoubleClick(e) {
                        e.target.classList.remove("shake-crazy");
                        var target = e.target;

                        function t(target) {
                            target.classList.add("knock-down");
                        }

                        if (e.target.classList.contains("knock-down")) {
                            target.classList.remove("knock-down");
                        } else {
                            setTimeout(function () {
                                t(target);
                            }, 10);
                        }
                    } },
                '\u7EC4\u4EF6\u5316'
            )
        ),
        _react2.default.createElement(
            'div',
            { className: "sections" },
            _react2.default.createElement(
                'section',
                { className: "next column" },
                _react2.default.createElement(
                    'h3',
                    null,
                    '\u5B98\u65B9\u5B9A\u4E49'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        'Custom Element: \u81EA\u5B9A\u4E49HTML\u5143\u7D20'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        'shadow DOM: \u5C01\u88C5'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        'HTML Imports: \u6253\u5305\u4E00\u5207'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        'HTML Template: Lazy\u7684DOM\u6A21\u677F'
                    )
                )
            ),
            _react2.default.createElement(
                'section',
                { className: "next column" },
                _react2.default.createElement(
                    'h3',
                    null,
                    '\u7B80\u5355\u6765\u8BF4'
                ),
                _react2.default.createElement('img', { src: __webpack_require__(85) }),
                "把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式"
            )
        )
    );
}, function (match) {
    return _react2.default.createElement(
        'div',
        { className: "page page-" + Number(match.location.pathname.slice(1)) },
        _react2.default.createElement(
            'h1',
            null,
            '\u5173\u4E8E dom'
        ),
        _react2.default.createElement(
            'div',
            { className: "sections no-margin" },
            _react2.default.createElement(
                'section',
                { className: "next b100" },
                _react2.default.createElement(
                    'p',
                    null,
                    '\u6CE8\u610F\u5230\uFF0C\u5F53\u6211\u4EEC\u9700\u8981\u5B9E\u73B0\u62D6\u62FD\u540E\u7684\u903B\u8F91\u65F6'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    '\u6211\u4EEC\u5FC5\u987B\u624B\u52A8\u64CD\u4F5C dom'
                )
            ),
            _react2.default.createElement(
                'section',
                { className: "next b100" },
                _react2.default.createElement('img', { src: __webpack_require__(86), style: { width: "75%" } })
            )
        )
    );
}, function (match) {
    return _react2.default.createElement(
        'div',
        { className: "page page-" + Number(match.location.pathname.slice(1)) },
        _react2.default.createElement(
            'h1',
            null,
            '\u770B\u4E00\u4E0B react \u7684\u7B80\u5355\u5B9E\u73B0\uFF1A'
        ),
        _react2.default.createElement(
            'div',
            { className: "sections no-margin" },
            _react2.default.createElement(
                'section',
                { className: "next b100" },
                _react2.default.createElement(Counter, null)
            ),
            _react2.default.createElement(
                'section',
                { className: "next b100" },
                _react2.default.createElement('img', { src: __webpack_require__(87), style: { width: "75%" } })
            )
        )
    );
}, function (match) {
    return _react2.default.createElement(
        'div',
        { className: "page page-" + Number(match.location.pathname.slice(1)) },
        _react2.default.createElement(
            'h1',
            null,
            '\u7EC4\u4EF6\u5316\u6846\u67B6'
        ),
        _react2.default.createElement(
            'div',
            { className: "sections" },
            _react2.default.createElement(
                'section',
                { className: "next column" },
                _react2.default.createElement(
                    'h3',
                    null,
                    '\u89E3\u51B3\u7684\u6838\u5FC3\u95EE\u9898'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u5E2E\u52A9\u6211\u4EEC\u4F7F\u7528 state \u7EF4\u62A4 dom'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u5355\u9875\u9762\u5185\u590D\u6742\u903B\u8F91\u5B9E\u73B0'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u5B8C\u6574\u7684\u751F\u547D\u5468\u671F'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u5F3A\u5236\u7EC4\u4EF6\u5316\u601D\u7EF4'
                    )
                )
            ),
            _react2.default.createElement(
                'section',
                { className: "next column" },
                _react2.default.createElement('img', { src: __webpack_require__(88), style: { width: "75%" } })
            ),
            _react2.default.createElement(
                'section',
                { className: "next column" },
                _react2.default.createElement('img', { src: __webpack_require__(89), style: { width: "75%" } })
            )
        )
    );
}, function (_React$Component4) {
    _inherits(DragDemoUsingLib, _React$Component4);

    function DragDemoUsingLib() {
        _classCallCheck(this, DragDemoUsingLib);

        var _this5 = _possibleConstructorReturn(this, (DragDemoUsingLib.__proto__ || Object.getPrototypeOf(DragDemoUsingLib)).call(this));

        _this5.state = {
            loading: true
        };

        _this5.tree = null;

        _this5.selectedId = null;
        _this5.targetId = null;
        _this5.type = null;
        _this5.projectId = 21;

        _this5.handleAddTask = _this5.handleAddTask.bind(_this5);
        _this5.handleDeleteTask = _this5.handleDeleteTask.bind(_this5);
        _this5._renderDataFromServer = _this5._renderDataFromServer.bind(_this5);
        return _this5;
    }

    _createClass(DragDemoUsingLib, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this._renderDataFromServer();
        }
    }, {
        key: '_renderDataFromServer',
        value: function _renderDataFromServer() {
            var _this6 = this;

            var getAllUrl = 'http://59.110.242.31:8087/teamday-web/1/task/getTaskAll';

            var params = {
                projectId: this.projectId
            };

            (0, _Utils.request)(getAllUrl, params).then(function (data) {

                console.log(data);

                _this6.setState({
                    loading: false
                }, function () {
                    var taskCodeList = data.taskCodeList,
                        taskList = data.taskList;


                    var mapArray = taskList.map(function (task) {
                        return [task.taskId, _extends({}, task, {
                            children: task.childList,
                            data: '<div class=\'task\'>' + task.taskName + '</div>',
                            id: task.taskId
                        })];
                    });

                    _this6.tree = DraggableTree.create({
                        map: new Map(mapArray),
                        list: taskCodeList,
                        mountDom: "#task-layers",
                        // multiSelect: true,


                        beforeDrop: function beforeDrop(dragId, targetId, type) {
                            console.log(dragId, targetId, type);

                            _this6.__moveTaskByServer(dragId, targetId, type);

                            return new Promise(function (resolve) {
                                setTimeout(resolve, 5000);
                            });
                        }
                    });

                    _this6.tree.setEvents({
                        changed: function changed(actionType) {
                            console.log(arguments);
                        },

                        click: function click(id) {
                            _this6.selectedId = id;
                        },

                        drop: function drop(dragId, targetId, type) {
                            console.log(dragId, targetId, type);
                        }
                    });
                });
            });
        }
    }, {
        key: '__moveTaskByServer',
        value: function __moveTaskByServer(moveId, targetId, type) {
            var params = {
                moveId: moveId,
                targetId: targetId,
                moveType: Number(type) - 1
            },
                moveTaskUrl = 'http://59.110.242.31:8087/teamday-web/1/task/moveTask';

            this.setState({
                loading: true
            }, function () {
                (0, _Utils.request)(moveTaskUrl, params).then(function (data) {
                    console.log(data);
                });
            });
        }
    }, {
        key: 'handleAddTask',
        value: function handleAddTask() {
            var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            console.log(this.selectedId);

            if (top || this.selectedId) {
                var newTask = {
                    projectId: this.projectId,
                    taskName: top ? "一个顶层任务" : "一个子任务",
                    taskUser: 1
                };

                if (top) {
                    delete newTask.taskParent;
                }

                var createTaskUrl = 'http://59.110.242.31:8087/teamday-web/1/task/save';

                (0, _Utils.request)(createTaskUrl, newTask).then(function (data) {
                    console.log(data);
                });
            }
        }
    }, {
        key: 'handleDeleteTask',
        value: function handleDeleteTask() {
            if (this.selectedId) {
                var params = {
                    taskUser: 1,
                    taskId: this.selectedId
                };

                var deleteTaskUrl = 'http://59.110.242.31:8087/teamday-web/1/task/remove';

                (0, _Utils.request)(deleteTaskUrl, params).then(function (data) {
                    console.log(data);
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {

            if (this.state.loading) {
                return _react2.default.createElement(
                    'div',
                    { style: { marginTop: 100, textAlign: 'center' } },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Loading...'
                    )
                );
            }
            return _react2.default.createElement(
                'div',
                { style: { marginTop: 100, textAlign: 'center', userSelect: 'none' } },
                _react2.default.createElement('div', { className: "tasks", id: "task-layers" }),
                _react2.default.createElement(
                    'div',
                    { className: "control-panel" },
                    _react2.default.createElement(
                        'button',
                        { onClick: this.handleAddTask.bind(this, true) },
                        '\u6DFB\u52A0\u9876\u7EA7\u4EFB\u52A1'
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.handleAddTask.bind(this, false) },
                        '\u4E3A\u9009\u4E2D\u6DFB\u52A0\u4EFB\u52A1'
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.handleDeleteTask },
                        '\u5220\u9664\u9009\u4E2D\u4EFB\u52A1'
                    )
                )
            );
        }
    }]);

    return DragDemoUsingLib;
}(_react2.default.Component), function (match) {
    return _react2.default.createElement(
        'div',
        { className: "page page-" + Number(match.location.pathname.slice(1)) },
        _react2.default.createElement(
            'h1',
            null,
            'Live Demo'
        ),
        _react2.default.createElement(
            'div',
            { className: "sections no-margin" },
            _react2.default.createElement('iframe', { src: "localhost:8081" })
        )
    );
}];

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.formatDate = formatDate;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by azlar on 26/09/2017.
 */

var request = exports.request = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(api, params) {
        var needTk = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var data, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, i, webResponse, webRes;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        // todo: check window.fetch

                        data = new FormData();
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 4;


                        for (_iterator = Object.keys(params)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            i = _step.value;

                            data.append(i, _typeof(params[i]) === 'object' ? JSON.stringify(params[i]) : params[i]);
                        }

                        _context.next = 12;
                        break;

                    case 8:
                        _context.prev = 8;
                        _context.t0 = _context['catch'](4);
                        _didIteratorError = true;
                        _iteratorError = _context.t0;

                    case 12:
                        _context.prev = 12;
                        _context.prev = 13;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 15:
                        _context.prev = 15;

                        if (!_didIteratorError) {
                            _context.next = 18;
                            break;
                        }

                        throw _iteratorError;

                    case 18:
                        return _context.finish(15);

                    case 19:
                        return _context.finish(12);

                    case 20:
                        webResponse = void 0, webRes = void 0;
                        _context.prev = 21;
                        _context.next = 24;
                        return window.fetch(api, {
                            method: 'POST',
                            body: data
                            // mode: 'no-cors'
                        });

                    case 24:
                        webResponse = _context.sent;
                        _context.next = 27;
                        return webResponse.json();

                    case 27:
                        webRes = _context.sent;
                        _context.next = 34;
                        break;

                    case 30:
                        _context.prev = 30;
                        _context.t1 = _context['catch'](21);

                        console.log(_context.t1);

                        throw _context.t1;

                    case 34:
                        if (!(webRes.code == 0)) {
                            _context.next = 38;
                            break;
                        }

                        return _context.abrupt('return', webRes.results);

                    case 38:
                        throw "err msg";

                    case 39:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[4, 8, 12, 20], [13,, 15, 19], [21, 30]]);
    }));

    return function request(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var requestJsonP = exports.requestJsonP = function requestJsonP() {};

/**
 * copy to clipboard
 * from: https://stackoverflow.com/questions/22581345/click-button-copy-to-clipboard-using-jquery
 * @param elem: dom-element
 */
var copyToClipboard = exports.copyToClipboard = function copyToClipboard(elem) {
    // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    var succeed;
    try {
        succeed = document.execCommand("copy");
    } catch (e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
};

function formatDate(date) {
    if (!date) {
        return date;
    }
    if (date instanceof Date) {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    } else {
        return new Date(date);
    }
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/tasks.dee1628.jpeg";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/parent-children.a616357.jpeg";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/create-tree-by-lib.437e94c.jpeg";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/modules.bc96810.jpeg";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/components.c7f6eef.png";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/operate-dom.28b94df.jpeg";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/react-counter.20836d3.jpeg";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/vue-components.130ef80.jpeg";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/react-lifecycle.3752798.jpg";

/***/ }),
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
]),[64]);