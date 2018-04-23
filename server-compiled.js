/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("is-mobile");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
module.exports = __webpack_require__(13);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _regenerator = __webpack_require__(14);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(16);

var _koa = __webpack_require__(17);

var _koa2 = _interopRequireDefault(_koa);

var _koaStatic = __webpack_require__(3);

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _styledComponents = __webpack_require__(1);

var _Html = __webpack_require__(18);

var _Html2 = _interopRequireDefault(_Html);

var _App = __webpack_require__(19);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();

var isDeveloping = "development" !== 'production';

app.use((0, _koaStatic2.default)('./dist'));

app.use(__webpack_require__(3)(__dirname + '/public'));

app.use(function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
    var sheet, App, body, styles;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (ctx.path === '/') {
              sheet = new _styledComponents.ServerStyleSheet();
              App = _react2.default.createElement(_App2.default);
              body = (0, _server.renderToStaticMarkup)(sheet.collectStyles(App));
              styles = sheet.getStyleTags();


              ctx.body = (0, _Html2.default)(body, styles);
            }

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

app.listen(isDeveloping ? 2000 : process.env.PORT);
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (body, styles) {
  return "\n  <!DOCTYPE html>\n  <head>\n    <title>BUBBLE CHAMBER</title>\n    <meta name=\"viewport\" content=\"width=device-width\" />\n    <link href='base.css' rel='stylesheet' />\n    " + styles + "\n  </head>\n  <body>\n    <div id='app'>" + body + "</div>\n    <script src='main.js#" + Date.now() + "'></script>\n  </body>\n";
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(2);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  from {transform:rotate(0deg) scale(1, 1.5);}\n  to {transform:rotate(360deg) scale(1, 1.5);}\n'], ['\n  from {transform:rotate(0deg) scale(1, 1.5);}\n  to {transform:rotate(360deg) scale(1, 1.5);}\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  0% {transform: translateX(0) translateY(0) scale(1, 1.5);}\n  20% {transform: translateX(-3px) translateY(4px) scale(1, 1.5);}\n  40% {transform: translateX(3px) translateY(-2px) scale(1, 1.5);}\n  50% {transform: translateX(0px) translateY(3px) scale(1, 1.5);}\n  70% {transform: translateX(-5px) translateY(0) scale(1, 1.5);}\n  80% {transform: translateX(-2px) translateY(3px) scale(1, 1.5);}\n  90% {transform: translateX(-1px) translateY(5px) scale(1, 1.5);}\n  100% {transform: translateX(0) translateY(0) scale(1, 1.5);}\n'], ['\n  0% {transform: translateX(0) translateY(0) scale(1, 1.5);}\n  20% {transform: translateX(-3px) translateY(4px) scale(1, 1.5);}\n  40% {transform: translateX(3px) translateY(-2px) scale(1, 1.5);}\n  50% {transform: translateX(0px) translateY(3px) scale(1, 1.5);}\n  70% {transform: translateX(-5px) translateY(0) scale(1, 1.5);}\n  80% {transform: translateX(-2px) translateY(3px) scale(1, 1.5);}\n  90% {transform: translateX(-1px) translateY(5px) scale(1, 1.5);}\n  100% {transform: translateX(0) translateY(0) scale(1, 1.5);}\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  min-height: 100vh;\n  background: linear-gradient(to right, orange,   green, blue);\n  color: black;\n  font-family: Helvetica;\n  line-height: 28px;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n'], ['\n  min-height: 100vh;\n  background: linear-gradient(to right, orange,   green, blue);\n  color: black;\n  font-family: Helvetica;\n  line-height: 28px;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  color: white;\n  text-align: left;\n  padding: 35px 30px;\n  z-index: ', ';\n  @media (min-width: 700px) {\n    padding: 60px;\n  }\n'], ['\n  color: white;\n  text-align: left;\n  padding: 35px 30px;\n  z-index: ', ';\n  @media (min-width: 700px) {\n    padding: 60px;\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  @media (max-width: 700px) {\n    transform: scale(1, 1.2) rotate(1deg);\n    margin: 30px 0 0;\n    opacity: 0.5;\n    color: black;    \n  }\n  @media (min-width: 700px) {\n    margin: 40px 0 10px;\n    font-family: \'Univox\';\n    font-size: 24px;\n  }\n'], ['\n  @media (max-width: 700px) {\n    transform: scale(1, 1.2) rotate(1deg);\n    margin: 30px 0 0;\n    opacity: 0.5;\n    color: black;    \n  }\n  @media (min-width: 700px) {\n    margin: 40px 0 10px;\n    font-family: \'Univox\';\n    font-size: 24px;\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n'], ['\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  color: white;\n  text-decoration: none;\n  flex-shrink: 1;\n  display: inline-block;\n  margin-right: 15px;\n  transform: scale(1, 1.1);\n  &:hover {\n    animation: ', ' 0.5s linear infinite;\n  }\n  span {\n    font-size: 10px;\n  }\n'], ['\n  color: white;\n  text-decoration: none;\n  flex-shrink: 1;\n  display: inline-block;\n  margin-right: 15px;\n  transform: scale(1, 1.1);\n  &:hover {\n    animation: ', ' 0.5s linear infinite;\n  }\n  span {\n    font-size: 10px;\n  }\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  transition: all 0.2s ease-in-out;\n  &:hover {\n    animation: ', ' 0.5s linear infinite;\n  }\n'], ['\n  transition: all 0.2s ease-in-out;\n  &:hover {\n    animation: ', ' 0.5s linear infinite;\n  }\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n  margin-right: 10px;\n  opacity: 0.5;\n  display: inline-block;\n  transform: scale(1, 1.1) rotate(1deg);\n'], ['\n  margin-right: 10px;\n  opacity: 0.5;\n  display: inline-block;\n  transform: scale(1, 1.1) rotate(1deg);\n']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n  width: 150px;\n  @media (min-width: 500px) {\n    width: 250px;\n  }\n'], ['\n  width: 150px;\n  @media (min-width: 500px) {\n    width: 250px;\n  }\n']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n  animation: ', ' 2s linear infinite;\n'], ['\n  animation: ', ' 2s linear infinite;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _isMobile = __webpack_require__(4);

var _isMobile2 = _interopRequireDefault(_isMobile);

var _EmailSignup = __webpack_require__(20);

var _EmailSignup2 = _interopRequireDefault(_EmailSignup);

var _Bubbles = __webpack_require__(21);

var _Bubbles2 = _interopRequireDefault(_Bubbles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spin = (0, _styledComponents.keyframes)(_templateObject);

var pulse = (0, _styledComponents.keyframes)(_templateObject2);

var Container = _styledComponents2.default.div(_templateObject3);

var Content = _styledComponents2.default.div(_templateObject4, function () {
  return (0, _isMobile2.default)() ? 1 : 0;
});

var Title = _styledComponents2.default.h1(_templateObject5);

var Links = _styledComponents2.default.div(_templateObject6);

var Link = _styledComponents2.default.a(_templateObject7, pulse);

var RegularLink = Link.extend(_templateObject8, pulse);

var LinkTitle = _styledComponents2.default.span(_templateObject9);

var Logo = _styledComponents2.default.img(_templateObject10);

var UpcomingLink = Link.extend(_templateObject11, pulse);

exports.default = function () {
  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(
      Content,
      null,
      _react2.default.createElement(Logo, { src: 'logo.png' }),
      _react2.default.createElement(
        Title,
        null,
        'MAIL'
      ),
      _react2.default.createElement(_EmailSignup2.default, null),
      _react2.default.createElement(
        Title,
        null,
        'PARTIES'
      ),
      _react2.default.createElement(
        Links,
        null,
        _react2.default.createElement(
          LinkTitle,
          null,
          '2018'
        ),
        _react2.default.createElement(
          Link,
          { href: 'https://www.facebook.com/events/2266322840060534/' },
          'FEB'
        ),
        _react2.default.createElement(
          Link,
          { href: 'https://www.facebook.com/events/217436759008807/' },
          'MAR'
        ),
        _react2.default.createElement(
          UpcomingLink,
          { href: 'https://www.facebook.com/events/178381789371767/' },
          'JUN'
        )
      ),
      _react2.default.createElement(
        Links,
        null,
        _react2.default.createElement(
          LinkTitle,
          null,
          '2017'
        ),
        _react2.default.createElement(
          Link,
          { href: 'https://www.facebook.com/events/493753987662434/' },
          'NOV'
        ),
        _react2.default.createElement(
          Link,
          { href: 'https://www.facebook.com/events/178381789371767/' },
          'SEP'
        )
      ),
      _react2.default.createElement(
        Title,
        null,
        'RADIO'
      ),
      _react2.default.createElement(
        Links,
        null,
        _react2.default.createElement(
          LinkTitle,
          null,
          '2018'
        ),
        _react2.default.createElement(
          Link,
          { href: 'https://www.mixcloud.com/balamii/bubble-chamber-jan-2018/' },
          'JAN'
        ),
        _react2.default.createElement(
          Link,
          { href: 'https://www.mixcloud.com/balamii/bubble-chamber-feb-2018/' },
          'FEB'
        ),
        _react2.default.createElement(
          Link,
          { href: 'https://www.mixcloud.com/balamii/bubble-chamber-march-2018/' },
          'MAR'
        ),
        _react2.default.createElement(
          Link,
          { href: 'https://www.mixcloud.com/balamii/bubble-chamber-april-2018/' },
          'APR'
        )
      ),
      _react2.default.createElement(
        Links,
        null,
        _react2.default.createElement(
          LinkTitle,
          null,
          '2017'
        ),
        _react2.default.createElement(
          Link,
          { href: 'https://www.mixcloud.com/balamii/bubble-chamber-dec-2017/' },
          'DEC'
        ),
        _react2.default.createElement(
          Link,
          { href: 'https://www.mixcloud.com/balamii/bubble-chamber-oct-2017/' },
          'OCT'
        )
      ),
      _react2.default.createElement(
        Title,
        null,
        'DATES'
      ),
      _react2.default.createElement(
        Links,
        null,
        _react2.default.createElement(
          LinkTitle,
          null,
          '13.05.18'
        ),
        _react2.default.createElement(
          RegularLink,
          { href: 'https://www.residentadvisor.net/events/1085790' },
          'JADED'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          LinkTitle,
          null,
          '08.06.18'
        ),
        _react2.default.createElement(
          RegularLink,
          { href: 'http://www.meadowsinthemountains.com/' },
          'MEADOWS IN THE MOUNTAINS'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          LinkTitle,
          null,
          '30.06.18'
        ),
        _react2.default.createElement(
          RegularLink,
          { href: 'https://www.the-tower.co.uk/' },
          'THE TOWER'
        ),
        _react2.default.createElement('br', null)
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        Links,
        null,
        _react2.default.createElement(
          RegularLink,
          { href: 'mailto:bookings@bubblechamber.club' },
          'info@bubblechamber.club'
        )
      )
    ),
    typeof window !== 'undefined' && _react2.default.createElement(_Bubbles2.default, null)
  );
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(2);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 180px;\n  padding: 10px 15px;\n  border: 0;\n  outline: 0;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 14px;\n  background: transparent;\n  border: 2px solid white;\n  color: white;\n  max-width: 100%;\n  border-radius: 0;\n  -webkit-appearance: none;\n  ::placeholder {\n    color: rgba(255,255,255,0.5);\n  }\n'], ['\n  width: 180px;\n  padding: 10px 15px;\n  border: 0;\n  outline: 0;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 14px;\n  background: transparent;\n  border: 2px solid white;\n  color: white;\n  max-width: 100%;\n  border-radius: 0;\n  -webkit-appearance: none;\n  ::placeholder {\n    color: rgba(255,255,255,0.5);\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = _styledComponents2.default.input(_templateObject);

var EmailSignup = function (_React$Component) {
  (0, _inherits3.default)(EmailSignup, _React$Component);

  function EmailSignup() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EmailSignup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EmailSignup.__proto__ || (0, _getPrototypeOf2.default)(EmailSignup)).call.apply(_ref, [this].concat(args))), _this), _this.ref = function (input) {
      _this.textInput = input;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EmailSignup, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { action: 'https://club.us18.list-manage.com/subscribe/post', method: 'POST' },
        _react2.default.createElement('input', { type: 'hidden', name: 'u', value: 'a86fd108dec61846745479d81' }),
        _react2.default.createElement('input', { type: 'hidden', name: 'id', value: '660140cbda' }),
        _react2.default.createElement(Input, {
          type: 'email',
          name: 'MERGE0',
          id: 'MERGE0',
          ref: this.ref,
          placeholder: 'GIVE US YOUR EMAIL'
        })
      );
    }
  }]);
  return EmailSignup;
}(_react2.default.Component);

exports.default = EmailSignup;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(22);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(2);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  from {\n    transform: translateY(100vh);\n  }\n\n  to {\n    transform: translateY(-200vh);\n  }\n'], ['\n  from {\n    transform: translateY(100vh);\n  }\n\n  to {\n    transform: translateY(-200vh);\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: fixed;\n  top: ', 'px;\n  left: ', 'px;\n  width: 100px;\n  height: 100px;\n  opacity: 0.5;\n  border-radius: 50%;\n  cursor: pointer;\n  background: linear-gradient(to bottom, #3dff32 1%,#a189ff 100%);\n  opacity: 0.3;\n  animation: ', ' ', 's linear infinite;\n'], ['\n  position: fixed;\n  top: ', 'px;\n  left: ', 'px;\n  width: 100px;\n  height: 100px;\n  opacity: 0.5;\n  border-radius: 50%;\n  cursor: pointer;\n  background: linear-gradient(to bottom, #3dff32 1%,#a189ff 100%);\n  opacity: 0.3;\n  animation: ', ' ', 's linear infinite;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _isMobile = __webpack_require__(4);

var _isMobile2 = _interopRequireDefault(_isMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var float = (0, _styledComponents.keyframes)(_templateObject);

var Bubble = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.top;
}, function (props) {
  return props.left;
}, float, function (props) {
  return props.speed;
});

var BubbleComponent = function (_React$Component) {
  (0, _inherits3.default)(BubbleComponent, _React$Component);

  function BubbleComponent(props) {
    (0, _classCallCheck3.default)(this, BubbleComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BubbleComponent.__proto__ || (0, _getPrototypeOf2.default)(BubbleComponent)).call(this, props));

    _this.hide = function () {
      _this.pop.play();
      _this.remove();
    };

    _this.remove = function () {
      return _this.setState({ hidden: true });
    };

    _this.pop = new Audio('/pop.mp3');
    _this.pop.volume = 0.2;
    _this.state = {
      hidden: false,
      topOffset: 0
    };
    setTimeout(_this.remove, props.speed * 1000);
    return _this;
  }

  (0, _createClass3.default)(BubbleComponent, [{
    key: 'render',
    value: function render() {
      return !this.state.hidden ? _react2.default.createElement(Bubble, {
        top: this.props.top + this.state.topOffset,
        left: this.props.left,
        speed: this.props.speed,
        onMouseOver: this.hide
      }) : null;
    }
  }]);
  return BubbleComponent;
}(_react2.default.Component);

var Bubbles = function (_React$Component2) {
  (0, _inherits3.default)(Bubbles, _React$Component2);

  function Bubbles() {
    (0, _classCallCheck3.default)(this, Bubbles);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Bubbles.__proto__ || (0, _getPrototypeOf2.default)(Bubbles)).call(this));

    _this2.state = { bubbles: [] };
    setInterval(function () {
      return _this2.makeBubble();
    }, 400);
    return _this2;
  }

  (0, _createClass3.default)(Bubbles, [{
    key: 'makeBubble',
    value: function makeBubble() {
      var bubbles = this.state.bubbles;


      var top = Math.floor(Math.random() * window.innerHeight);
      var left = Math.floor(Math.random() * window.innerWidth) - 50;

      this.setState({
        bubbles: [].concat((0, _toConsumableArray3.default)(this.state.bubbles), [{ top: top, left: left, speed: 10 + Math.floor(Math.random() * 50) }])
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.state.bubbles.map(function (bubble, index) {
          return _react2.default.createElement(BubbleComponent, {
            top: bubble.top,
            left: bubble.left,
            speed: bubble.speed,
            key: index
          });
        })
      );
    }
  }]);
  return Bubbles;
}(_react2.default.Component);

exports.default = Bubbles;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ })
/******/ ]);