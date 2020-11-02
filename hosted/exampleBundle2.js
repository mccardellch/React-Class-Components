"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HelloUser =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HelloUser, _React$Component);

  function HelloUser(props) {
    var _this;

    _classCallCheck(this, HelloUser);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HelloUser).call(this, props));
    _this.state = {
      username: props.username
    }; //for this function, make the 'this' keyword look at entire class

    _this.handleNameChange = _this.handleNameChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HelloUser, [{
    key: "handleNameChange",
    value: function handleNameChange(e) {
      //update state based on the object that is passed in
      this.setState({
        username: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, "Hello ", this.state.username, React.createElement("p", null, "Change Name:"), React.createElement("input", {
        type: "text",
        value: this.state.username,
        onChange: this.handleNameChange
      }));
    }
  }]);

  return HelloUser;
}(React.Component);

var init = function init() {
  ReactDOM.render(React.createElement(HelloUser, {
    username: "Jimbo"
  }), document.getElementById('app'));
};

window.onload = init;
