import React, { Component } from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}
/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */


var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);

emptyFunction.thatReturnsThis = function () {
  return this;
};

emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

var emptyFunction$1 = /*#__PURE__*/Object.freeze({
  default: emptyFunction_1,
  __moduleExports: emptyFunction_1
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
}

var invariant_1 = invariant;

var invariant$1 = /*#__PURE__*/Object.freeze({
  default: invariant_1,
  __moduleExports: invariant_1
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var ReactPropTypesSecret$1 = /*#__PURE__*/Object.freeze({
  default: ReactPropTypesSecret_1,
  __moduleExports: ReactPropTypesSecret_1
});

var emptyFunction$2 = ( emptyFunction$1 && emptyFunction_1 ) || emptyFunction$1;

var invariant$2 = ( invariant$1 && invariant_1 ) || invariant$1;

var ReactPropTypesSecret$2 = ( ReactPropTypesSecret$1 && ReactPropTypesSecret_1 ) || ReactPropTypesSecret$1;

var factoryWithThrowingShims = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret$2) {
      // It is still safe when called from React.
      return;
    }

    invariant$2(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  }
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };
  ReactPropTypes.checkPropTypes = emptyFunction$2;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var factoryWithThrowingShims$1 = /*#__PURE__*/Object.freeze({
  default: factoryWithThrowingShims,
  __moduleExports: factoryWithThrowingShims
});

var require$$0 = ( factoryWithThrowingShims$1 && factoryWithThrowingShims ) || factoryWithThrowingShims$1;

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require$$0();
}
});

var propTypes$1 = /*#__PURE__*/Object.freeze({
  default: propTypes,
  __moduleExports: propTypes
});

var _propTypes = ( propTypes$1 && propTypes ) || propTypes$1;

var lib = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React);



var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

var uniqueId = 0;

function createReactContext(defaultValue) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + uniqueId++ + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        this.emitter.set(nextProps.value);
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(React.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function () {
        _this2.setState({
          value: _this2.getValue()
        });
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(React.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];
});

var createReactContext = unwrapExports(lib);

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function _possibleConstructorReturn$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var StateContext = createReactContext(null);

var Container = function () {
  function Container() {
    var _this = this;

    _classCallCheck$1(this, Container);

    this._listeners = [];
    CONTAINER_DEBUG_CALLBACKS.forEach(function (cb) {
      return cb(_this);
    });
  }

  Container.prototype.setState = function setState(updater, callback) {
    var _this2 = this;

    return Promise.resolve().then(function () {
      var nextState = void 0;

      if (typeof updater === 'function') {
        nextState = updater(_this2.state);
      } else {
        nextState = updater;
      }

      if (nextState == null) {
        if (callback) callback();
        return;
      }

      _this2.state = Object.assign({}, _this2.state, nextState);

      var promises = _this2._listeners.map(function (listener) {
        return listener();
      });

      return Promise.all(promises).then(function () {
        if (callback) {
          return callback();
        }
      });
    });
  };

  Container.prototype.subscribe = function subscribe(fn) {
    this._listeners.push(fn);
  };

  Container.prototype.unsubscribe = function unsubscribe(fn) {
    this._listeners = this._listeners.filter(function (f) {
      return f !== fn;
    });
  };

  return Container;
}();

var DUMMY_STATE = {};

var Subscribe = function (_React$Component) {
  _inherits$1(Subscribe, _React$Component);

  function Subscribe() {
    var _temp, _this3, _ret;

    _classCallCheck$1(this, Subscribe);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = _possibleConstructorReturn$1(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this3), _this3.state = {}, _this3.instances = [], _this3.unmounted = false, _this3.onUpdate = function () {
      return new Promise(function (resolve) {
        if (!_this3.unmounted) {
          _this3.setState(DUMMY_STATE, resolve);
        } else {
          resolve();
        }
      });
    }, _temp), _possibleConstructorReturn$1(_this3, _ret);
  }

  Subscribe.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;

    this._unsubscribe();
  };

  Subscribe.prototype._unsubscribe = function _unsubscribe() {
    var _this4 = this;

    this.instances.forEach(function (container) {
      container.unsubscribe(_this4.onUpdate);
    });
  };

  Subscribe.prototype._createInstances = function _createInstances(map, containers) {
    var _this5 = this;

    this._unsubscribe();

    if (map === null) {
      throw new Error('You must wrap your <Subscribe> components with a <Provider>');
    }

    var safeMap = map;
    var instances = containers.map(function (ContainerItem) {
      var instance = void 0;

      if ((typeof ContainerItem === 'undefined' ? 'undefined' : _typeof$1(ContainerItem)) === 'object' && ContainerItem instanceof Container) {
        instance = ContainerItem;
      } else {
        instance = safeMap.get(ContainerItem);

        if (!instance) {
          instance = new ContainerItem();
          safeMap.set(ContainerItem, instance);
        }
      }

      instance.unsubscribe(_this5.onUpdate);
      instance.subscribe(_this5.onUpdate);
      return instance;
    });
    this.instances = instances;
    return instances;
  };

  Subscribe.prototype.render = function render() {
    var _this6 = this;

    return React.createElement(StateContext.Consumer, null, function (map) {
      return _this6.props.children.apply(null, _this6._createInstances(map, _this6.props.to));
    });
  };

  return Subscribe;
}(React.Component);

function Provider(props) {
  return React.createElement(StateContext.Consumer, null, function (parentMap) {
    var childMap = new Map(parentMap);

    if (props.inject) {
      props.inject.forEach(function (instance) {
        childMap.set(instance.constructor, instance);
      });
    }

    return React.createElement(StateContext.Provider, {
      value: childMap
    }, props.children);
  });
}

var CONTAINER_DEBUG_CALLBACKS = []; // If your name isn't Sindre, this is not for you.

var AccordionContainer =
/*#__PURE__*/
function (_Container) {
  _inherits(AccordionContainer, _Container);

  function AccordionContainer() {
    var _this;

    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AccordionContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AccordionContainer).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setAccordion", function (accordion) {
      if (accordion !== _this.state.accordion) {
        return _this.setState({
          accordion: accordion
        });
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setOnChange", function (onChange) {
      if (onChange !== _this.state.onChange) {
        return _this.setState({
          onChange: onChange
        });
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addItem", function (newItem) {
      // Need to use callback style otherwise race-conditions are created by concurrent registrations.
      _this.setState(function (state) {
        var items;

        if (state.items.some(function (item) {
          return item.uuid === newItem.uuid;
        })) {
          // eslint-disable-next-line no-console
          console.error("AccordionItem error: One item already has the uuid \"".concat(newItem.uuid, "\". Uuid property must be unique. See: https://github.com/springload/react-accessible-accordion#accordionitem"));
        }

        if (state.accordion && newItem.expanded) {
          // If this is a true accordion and the new item is expanded, then the others must be closed.
          items = _toConsumableArray(state.items.map(function (item) {
            return _objectSpread({}, item, {
              expanded: false
            });
          })).concat([newItem]);
        } else {
          items = _toConsumableArray(state.items).concat([newItem]);
        }

        return {
          items: items
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeItem", function (key) {
      return _this.setState(function (state) {
        return {
          items: state.items.filter(function (item) {
            return item.uuid !== key;
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setExpanded", function (key, expanded) {
      return _this.setState(function (state) {
        return {
          items: state.items.map(function (item) {
            if (item.uuid === key) {
              return _objectSpread({}, item, {
                expanded: expanded
              });
            }

            if (state.accordion && expanded) {
              // If this is an accordion, we might need to collapse the other expanded item.
              return _objectSpread({}, item, {
                expanded: false
              });
            }

            return item;
          })
        };
      }).then(function () {
        if (_this.state.accordion) {
          _this.state.onChange(key);
        } else {
          _this.state.onChange(_this.state.items.filter(function (item) {
            return item.expanded;
          }).map(function (item) {
            return item.uuid;
          }));
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setDisabled", function (key, disabled) {
      _this.setState(function (state) {
        return {
          items: state.items.map(function (item) {
            if (item.uuid === key) {
              return _objectSpread({}, item, {
                disabled: disabled
              });
            }

            return item;
          })
        };
      });
    });

    _this.state = _objectSpread({
      items: [],
      accordion: true,
      onChange: function onChange() {}
    }, args);
    return _this;
  }

  return AccordionContainer;
}(Container);

var accordionDefaultProps = {
  accordion: true
};

var Accordion = function Accordion(_ref) {
  var accordion = _ref.accordion,
      rest = _objectWithoutProperties(_ref, ["accordion"]);

  return React.createElement("div", _extends({
    role: accordion ? 'tablist' : null
  }, rest));
};

Accordion.defaultProps = accordionDefaultProps;

var defaultProps = {
  accordion: true,
  onChange: function onChange() {},
  className: 'accordion',
  children: null
};

var AccordionWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(AccordionWrapper, _Component);

  function AccordionWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AccordionWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccordionWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "accordionStore", new AccordionContainer({
      accordion: _this.props.accordion,
      onChange: _this.props.onChange
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderAccordion", function (accordionStore) {
      var _this$props = _this.props,
          accordion = _this$props.accordion,
          onChange = _this$props.onChange,
          rest = _objectWithoutProperties(_this$props, ["accordion", "onChange"]);

      return React.createElement(Accordion, _extends({
        accordion: accordionStore.state.accordion
      }, rest));
    });

    return _this;
  }

  _createClass(AccordionWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.accordionStore.setAccordion(this.props.accordion);
      this.accordionStore.setOnChange(this.props.onChange);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.accordionStore.setAccordion(this.props.accordion);
      this.accordionStore.setOnChange(this.props.onChange);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(Provider, {
        inject: [this.accordionStore]
      }, React.createElement(Subscribe, {
        to: [AccordionContainer]
      }, this.renderAccordion));
    }
  }]);

  return AccordionWrapper;
}(Component);

_defineProperty(AccordionWrapper, "defaultProps", defaultProps);

/*!
 * consecutive
 * Get consecutive numbers
 * Copyright(c) 2017 ivanoff .$ curl -A cv ivanoff.org.ua
 * MIT Licensed
 */

var consecutive = function (begin, base, inc) {
  var number = begin || 0;
  if (typeof base !== 'number') base = 10;
  if (typeof inc !== 'number') inc = 1;
  return function () {
    var res;

    if (typeof base === 'undefined' || base === 10) {
      res = number;
      number += inc;
    } else {
      res = number.toString();
      number = (parseInt(number, base) + inc).toString(base);
    }

    return res;
  };
};

var nextUuid = consecutive();
function resetNextUuid() {
  nextUuid = consecutive();
}

var ItemContainer =
/*#__PURE__*/
function (_Container) {
  _inherits(ItemContainer, _Container);

  function ItemContainer() {
    var _this;

    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ItemContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ItemContainer).call(this));
    _this.state = _objectSpread({}, args);

    if (_this.state.uuid === undefined) {
      _this.state.uuid = nextUuid();
    }

    return _this;
  }

  _createClass(ItemContainer, [{
    key: "setUuid",
    value: function setUuid(customUuid) {
      return this.setState({
        uuid: customUuid
      });
    }
  }]);

  return ItemContainer;
}(Container);

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg)) {
        classes.push(classNames.apply(null, arg));
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if (module.exports) {
    module.exports = classNames;
  } else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
    // register as 'classnames', consistent with npm package name
    undefined('classnames', [], function () {
      return classNames;
    });
  } else {
    window.classNames = classNames;
  }
})();
});

var AccordionItem =
/*#__PURE__*/
function (_Component) {
  _inherits(AccordionItem, _Component);

  function AccordionItem() {
    _classCallCheck(this, AccordionItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(AccordionItem).apply(this, arguments));
  }

  _createClass(AccordionItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          uuid = _this$props.uuid,
          accordionStore = _this$props.accordionStore,
          disabled = _this$props.disabled;
      accordionStore.addItem({
        uuid: uuid,
        expanded: this.props.expanded || false,
        disabled: disabled
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.accordionStore.removeItem(this.props.uuid);
    } // This is here so that the user can dynamically set the 'expanded' state using the 'expanded' prop.

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          uuid = _this$props2.uuid,
          expanded = _this$props2.expanded,
          disabled = _this$props2.disabled,
          accordionStore = _this$props2.accordionStore;

      if (expanded !== prevProps.expanded) {
        accordionStore.setExpanded(uuid, expanded);
      }

      if (disabled !== prevProps.disabled) {
        accordionStore.setDisabled(uuid, disabled);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          uuid = _this$props3.uuid,
          className = _this$props3.className,
          hideBodyClassName = _this$props3.hideBodyClassName,
          accordionStore = _this$props3.accordionStore,
          disabled = _this$props3.disabled,
          expanded = _this$props3.expanded,
          rest = _objectWithoutProperties(_this$props3, ["uuid", "className", "hideBodyClassName", "accordionStore", "disabled", "expanded"]);

      var currentItem = accordionStore.state.items.filter(function (item) {
        return item.uuid === uuid;
      })[0];

      if (!currentItem) {
        return null;
      }

      return React.createElement("div", _extends({
        className: classnames(className, _defineProperty({}, hideBodyClassName, !currentItem.expanded && hideBodyClassName))
      }, rest));
    }
  }]);

  return AccordionItem;
}(Component);

var defaultProps$1 = {
  className: 'accordion__item',
  hideBodyClassName: '',
  disabled: false,
  expanded: false,
  accordionStore: new AccordionContainer(),
  uuid: undefined
};

var AccordionItemWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(AccordionItemWrapper, _Component);

  function AccordionItemWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AccordionItemWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccordionItemWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "itemContainer", new ItemContainer({
      uuid: _this.props.uuid
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderItem", function (accordionStore, itemStore) {
      var uuid = itemStore.state.uuid;
      return React.createElement(AccordionItem, _extends({}, _this.props, {
        uuid: uuid,
        accordionStore: accordionStore
      }));
    });

    return _this;
  }

  _createClass(AccordionItemWrapper, [{
    key: "render",
    value: function render() {
      return React.createElement(Provider, {
        inject: [this.itemContainer]
      }, React.createElement(Subscribe, {
        to: [AccordionContainer, ItemContainer]
      }, this.renderItem));
    }
  }]);

  return AccordionItemWrapper;
}(Component);

_defineProperty(AccordionItemWrapper, "defaultProps", defaultProps$1);

var AccordionItemTitle =
/*#__PURE__*/
function (_Component) {
  _inherits(AccordionItemTitle, _Component);

  function AccordionItemTitle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AccordionItemTitle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccordionItemTitle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      var _this$props = _this.props,
          uuid = _this$props.uuid,
          expanded = _this$props.expanded,
          setExpanded = _this$props.setExpanded;
      setExpanded(uuid, !expanded);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyPress", function (evt) {
      if (evt.charCode === 13 || evt.charCode === 32) {
        evt.preventDefault();

        _this.handleClick();
      }
    });

    return _this;
  }

  _createClass(AccordionItemTitle, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          hideBodyClassName = _this$props2.hideBodyClassName,
          accordionStore = _this$props2.accordionStore,
          item = _this$props2.item,
          accordion = _this$props2.accordion,
          setExpanded = _this$props2.setExpanded,
          expanded = _this$props2.expanded,
          uuid = _this$props2.uuid,
          disabled = _this$props2.disabled,
          rest = _objectWithoutProperties(_this$props2, ["className", "hideBodyClassName", "accordionStore", "item", "accordion", "setExpanded", "expanded", "uuid", "disabled"]);

      var id = "accordion__title-".concat(uuid);
      var ariaControls = "accordion__body-".concat(uuid);
      var role = accordion ? 'tab' : 'button';
      var titleClassName = classnames(className, _defineProperty({}, hideBodyClassName, hideBodyClassName && !expanded));

      if (role === 'tab') {
        return React.createElement("div", _extends({
          id: id,
          "aria-selected": expanded,
          "aria-controls": ariaControls,
          className: titleClassName,
          onClick: disabled ? undefined : this.handleClick,
          role: role,
          tabIndex: "0" // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
          ,
          onKeyPress: this.handleKeyPress,
          disabled: disabled
        }, rest));
      }

      return React.createElement("div", _extends({
        id: id,
        "aria-expanded": expanded,
        "aria-controls": ariaControls,
        className: titleClassName,
        onClick: disabled ? undefined : this.handleClick,
        role: role,
        tabIndex: "0" // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
        ,
        onKeyPress: this.handleKeyPress,
        disabled: disabled
      }, rest));
    }
  }]);

  return AccordionItemTitle;
}(Component);

_defineProperty(AccordionItemTitle, "accordionElementName", 'AccordionItemTitle');

var AccordionItemTitleWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(AccordionItemTitleWrapper, _Component);

  function AccordionItemTitleWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AccordionItemTitleWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccordionItemTitleWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderItemTitle", function (accordionStore, itemStore) {
      var uuid = itemStore.state.uuid;
      var _accordionStore$state = accordionStore.state,
          items = _accordionStore$state.items,
          accordion = _accordionStore$state.accordion;
      var item = items.filter(function (stateItem) {
        return stateItem.uuid === uuid;
      })[0];
      return React.createElement(AccordionItemTitle, _extends({}, _this.props, item, {
        setExpanded: accordionStore.setExpanded,
        accordion: accordion
      }));
    });

    return _this;
  }

  _createClass(AccordionItemTitleWrapper, [{
    key: "render",
    value: function render() {
      return React.createElement(Subscribe, {
        to: [AccordionContainer, ItemContainer]
      }, this.renderItemTitle);
    }
  }]);

  return AccordionItemTitleWrapper;
}(Component);

_defineProperty(AccordionItemTitleWrapper, "defaultProps", {
  className: 'accordion__title',
  hideBodyClassName: ''
});

var AccordionItemBody = function AccordionItemBody(props) {
  var className = props.className,
      hideBodyClassName = props.hideBodyClassName,
      uuid = props.uuid,
      expanded = props.expanded,
      disabled = props.disabled,
      accordion = props.accordion,
      rest = _objectWithoutProperties(props, ["className", "hideBodyClassName", "uuid", "expanded", "disabled", "accordion"]);

  return React.createElement("div", _extends({
    id: "accordion__body-".concat(uuid),
    className: classnames(className, _defineProperty({}, hideBodyClassName, !expanded)),
    "aria-hidden": !expanded,
    "aria-labelledby": "accordion__title-".concat(uuid),
    role: accordion ? 'tabpanel' : null
  }, rest));
};

var AccordionItemBodyWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(AccordionItemBodyWrapper, _Component);

  function AccordionItemBodyWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AccordionItemBodyWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccordionItemBodyWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderItemBody", function (accordionStore, itemStore) {
      var uuid = itemStore.state.uuid;
      var _accordionStore$state = accordionStore.state,
          items = _accordionStore$state.items,
          accordion = _accordionStore$state.accordion;
      var item = items.filter(function (stateItem) {
        return stateItem.uuid === uuid;
      })[0];
      return React.createElement(AccordionItemBody, _extends({}, _this.props, item, {
        accordion: accordion
      }));
    });

    return _this;
  }

  _createClass(AccordionItemBodyWrapper, [{
    key: "render",
    value: function render() {
      return React.createElement(Subscribe, {
        to: [AccordionContainer, ItemContainer]
      }, this.renderItemBody);
    }
  }]);

  return AccordionItemBodyWrapper;
}(Component);

_defineProperty(AccordionItemBodyWrapper, "defaultProps", {
  className: 'accordion__body',
  hideBodyClassName: 'accordion__body--hidden'
});

// eslint-disable-next-line

export { AccordionWrapper as Accordion, AccordionItemWrapper as AccordionItem, AccordionItemTitleWrapper as AccordionItemTitle, AccordionItemBodyWrapper as AccordionItemBody, resetNextUuid };
