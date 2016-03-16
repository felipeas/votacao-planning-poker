webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(159);

	var _reduxRouter = __webpack_require__(180);

	var _store = __webpack_require__(239);

	var _store2 = _interopRequireDefault(_store);

	_reactDom2['default'].render(_react2['default'].createElement(
	    _reactRedux.Provider,
	    { store: _store2['default'] },
	    _react2['default'].createElement(_reduxRouter.ReduxRouter, null)
	), document.getElementById('root'));

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(165);

	var _reduxThunk = __webpack_require__(240);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxRouter = __webpack_require__(180);

	var _history = __webpack_require__(241);

	var _routes = __webpack_require__(246);

	var _routes2 = _interopRequireDefault(_routes);

	var _reducers = __webpack_require__(305);

	var _reducers2 = _interopRequireDefault(_reducers);

	var finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2['default']), (0, _reduxRouter.reduxReactRouter)({
	  createHistory: _history.createHistory,
	  routes: _routes2['default']
	}))(_redux.createStore);

	var store = finalCreateStore(_reducers2['default']);

	exports['default'] = store;
	module.exports = exports['default'];

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	/* containers */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _containersApp = __webpack_require__(247);

	var _containersHome = __webpack_require__(252);

	var _containersList = __webpack_require__(259);

	exports['default'] = React.createElement(
	  Route,
	  { path: '/', component: _containersApp.App },
	  React.createElement(IndexRoute, { component: _containersHome.Home }),
	  React.createElement(Route, { path: 'list', component: _containersList.List }),
	  React.createElement(Route, { status: 404, path: '*', component: _containersHome.Home })
	);
	module.exports = exports['default'];

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(159);

	__webpack_require__(248);

	var App = (function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(App, [{
	    key: 'handleLoginClick',
	    value: function handleLoginClick() {}
	  }, {
	    key: 'handleLogoutClick',
	    value: function handleLogoutClick() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return App;
	})(_react.Component);

	exports['default'] = App;
	module.exports = exports['default'];

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(249);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(251)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./App.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./App.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(250)();
	exports.push([module.id, "", ""]);

/***/ },

/***/ 250:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	/* components */

	var _componentsTopImage = __webpack_require__(253);

	var _componentsTools = __webpack_require__(256);

	var Home = (function (_Component) {
	  _inherits(Home, _Component);

	  function Home() {
	    _classCallCheck(this, Home);

	    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(_componentsTopImage.TopImage, null),
	        _react2['default'].createElement(_componentsTools.Tools, null)
	      );
	    }
	  }]);

	  return Home;
	})(_react.Component);

	exports.Home = Home;

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	/* component styles */

	var _stylesTopImageScss = __webpack_require__(254);

	var TopImage = (function (_Component) {
	  _inherits(TopImage, _Component);

	  function TopImage(props) {
	    _classCallCheck(this, TopImage);

	    _get(Object.getPrototypeOf(TopImage.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(TopImage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'section',
	        { className: '' + _stylesTopImageScss.styles, ref: 'parallax' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'row' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center' },
	              _react2['default'].createElement(
	                'h1',
	                { className: 'title' },
	                'Votacao PP'
	              ),
	              _react2['default'].createElement(
	                'p',
	                null,
	                'O que era bom, ficou ainda melhor'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return TopImage;
	})(_react.Component);

	exports.TopImage = TopImage;

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(255);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(251)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./TopImage.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./TopImage.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(250)();
	exports.locals = {
	  "styles": "_28C-vEmkWl9jh6iwycNwg3"
	};
	exports.push([module.id, "._28C-vEmkWl9jh6iwycNwg3 {\n  position: relative;\n  background: linear-gradient(red, yellow);\n  background-size: 100% auto;\n  height: 500px; }\n  ._28C-vEmkWl9jh6iwycNwg3 h1.title {\n    color: #FFF;\n    font-size: 60px;\n    margin-top: 20%; }\n  ._28C-vEmkWl9jh6iwycNwg3 p {\n    color: #FFF; }\n", ""]);

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	/* component styles */

	var _stylesToolsScss = __webpack_require__(257);

	var Tools = (function (_Component) {
	  _inherits(Tools, _Component);

	  function Tools() {
	    _classCallCheck(this, Tools);

	    _get(Object.getPrototypeOf(Tools.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Tools, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('section', { className: '' + _stylesToolsScss.styles });
	    }
	  }]);

	  return Tools;
	})(_react.Component);

	exports.Tools = Tools;

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(258);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(251)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Tools.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Tools.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(250)();
	exports.push([module.id, "", ""]);

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(165);

	var _reactRedux = __webpack_require__(159);

	var _componentsItems = __webpack_require__(260);

	var _componentsAddItem = __webpack_require__(263);

	/* actions */

	var _actionsItems = __webpack_require__(304);

	var actionCreators = _interopRequireWildcard(_actionsItems);

	var List = (function (_Component) {
	  _inherits(List, _Component);

	  function List(props) {
	    _classCallCheck(this, List);

	    _get(Object.getPrototypeOf(List.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(List, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'row' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-12 col-md-6 col-lg-6\r col-md-offset-3 col-lg-offset-3' },
	              _react2['default'].createElement(
	                'h1',
	                null,
	                'Redux'
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'row' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-12 col-md-6 col-lg-6\r col-md-offset-3 col-lg-offset-3' },
	              _react2['default'].createElement(
	                'h2',
	                null,
	                'Boilerplate contains:'
	              ),
	              _react2['default'].createElement(_componentsItems.Items, this.props)
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-12 col-md-6 col-lg-6\r col-md-offset-3 col-lg-offset-3' },
	              _react2['default'].createElement(_componentsAddItem.AddItem, this.props)
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return List;
	})(_react.Component);

	exports.List = List;

	function mapStateToProps(state) {
	  return {
	    items: state.items
	  };
	}

	exports['default'] = (0, _reactRedux.connect)(mapStateToProps)(items);

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	/* component styles */

	var _stylesItemsScss = __webpack_require__(261);

	var Items = (function (_Component) {
	  _inherits(Items, _Component);

	  function Items(props) {
	    _classCallCheck(this, Items);

	    _get(Object.getPrototypeOf(Items.prototype), 'constructor', this).call(this, props);
	  }

	  /*componentDidMount(){
	      window.addEventListener('onDelete', this.handleOnDelete);
	  }
	  */

	  _createClass(Items, [{
	    key: 'handleonDelete',
	    value: function handleonDelete(event) {
	      event.preventDefault();
	      var index = event.currentTarget.dataset.index;
	      this.props.delItem(index);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      var items = this.props.items;

	      return _react2['default'].createElement(
	        'div',
	        { className: _stylesItemsScss.styles },
	        !items.length && _react2['default'].createElement(
	          'span',
	          null,
	          'Array is empty'
	        ),
	        items.map(function (item, index) {
	          return _react2['default'].createElement(
	            'div',
	            { className: 'checkbox', key: index },
	            _react2['default'].createElement(
	              'label',
	              null,
	              _react2['default'].createElement('input', { type: 'checkbox',
	                defaultChecked: item.done
	              }),
	              '' + item.text,
	              _react2['default'].createElement(
	                'span',
	                { className: 'remove',
	                  'data-index': index,
	                  onClick: _this.handleOnDelete
	                },
	                'x'
	              )
	            )
	          );
	        })
	      );
	    }
	  }]);

	  return Items;
	})(_react.Component);

	exports.Items = Items;

	Items.propTypes = {
	  items: _react2['default'].PropTypes.array,
	  delItem: _react2['default'].PropTypes.func
	};

	exports['default'] = Items;

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(262);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(251)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Items.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Items.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(250)();
	exports.locals = {
	  "styles": "_1i4VfSifOBR8A-YD0VvYR4"
	};
	exports.push([module.id, "._1i4VfSifOBR8A-YD0VvYR4 button {\n  margin-right: 10px; }\n", ""]);

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(264);

	/* component styles */

	var _stylesItemsScss = __webpack_require__(261);

	var AddItem = (function (_Component) {
	  _inherits(AddItem, _Component);

	  function AddItem(props) {
	    _classCallCheck(this, AddItem);

	    _get(Object.getPrototypeOf(AddItem.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(AddItem, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('onAdd', this.handleOnAdd);
	    }
	  }, {
	    key: 'handleOnAdd',
	    value: function handleOnAdd(event) {
	      if (this.props.fields.name.value) {
	        /* add item*/
	        this.props.addItem(this.props.fields);

	        /* reset form */
	        this.props.dispatch((0, _reduxForm.reset)('addItem'));
	      }
	      event.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var name = this.props.fields.name;

	      return _react2['default'].createElement(
	        'form',
	        { className: _stylesItemsScss.styles, onSubmit: this.onAdd },
	        _react2['default'].createElement(
	          'div',
	          { className: 'form-group' },
	          _react2['default'].createElement('input', _extends({
	            type: 'text',
	            className: 'form-control',
	            placeholder: 'Enter something'
	          }, name))
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'form-group' },
	          _react2['default'].createElement(
	            'button',
	            { className: 'btn btn-default', onClick: this.onAdd },
	            'Add item'
	          )
	        )
	      );
	    }
	  }]);

	  return AddItem;
	})(_react.Component);

	exports.AddItem = AddItem;

	exports.AddItem = AddItem = (0, _reduxForm.reduxForm)({
	  fields: ['name'],
	  form: 'addItem',
	  destroyOnUnmount: false,
	  propTypes: {
	    dispatch: _react2['default'].PropTypes.func,
	    fields: _react2['default'].PropTypes.object.isRequired,
	    items: _react2['default'].PropTypes.array,
	    addItem: _react2['default'].PropTypes.func
	  }
	})(AddItem);

	exports['default'] = AddItem;

/***/ },

/***/ 304:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.addItem = addItem;
	exports.delItem = delItem;

	function addItem(fields) {
	  return {
	    type: 'ADD_ITEM',
	    fields: fields
	  };
	}

	function delItem(index) {
	  return {
	    type: 'DELETE_ITEM',
	    index: index
	  };
	}

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _redux = __webpack_require__(165);

	var _reduxForm = __webpack_require__(264);

	var _items = __webpack_require__(306);

	var rootReducer = (0, _redux.combineReducers)({
	  form: _reduxForm.reducer,

	  items: _items.items
	});

	exports['default'] = rootReducer;
	module.exports = exports['default'];

/***/ },

/***/ 306:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.items = items;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var initialState = {
	  items: [{
	    text: 'React'
	  }, {
	    text: 'Redux'
	  }, {
	    text: 'React router'
	  }, {
	    text: 'Bootstrap webpack'
	  }, {
	    text: 'Sass modules (sass-loader css-loader style-loader)'
	  }, {
	    text: 'React transform'
	  }, {
	    text: 'Redux logger'
	  }, {
	    text: 'React document meta'
	  }, {
	    text: 'Redux form'
	  }, {
	    text: 'Karma'
	  }, {
	    text: 'Mocha'
	  }, {
	    text: 'Server-side rendering',
	    done: false
	  }]
	};

	function items(state, action) {
	  if (state === undefined) state = initialState;

	  switch (action.type) {
	    case 'ADD_ITEM':
	      return _extends({}, state, {
	        items: [].concat(_toConsumableArray(state.items), [{
	          text: action.fields.name.value
	        }])
	      });

	    case 'DELETE_ITEM':
	      return _extends({}, state, {
	        items: [].concat(_toConsumableArray(state.items.slice(0, action.index)), _toConsumableArray(state.items.slice(+action.index + 1)))
	      });

	    default:
	      return state;
	  }
	}

/***/ }

});