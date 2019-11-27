"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @File:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Description:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Autor: yangw5
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Email: yangw5@163.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2019-11-22 13:23:12
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @LastEditors: yangw5
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @LastEditTime: 2019-11-22 15:28:27
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @FilePath: \antdup\src\Alter.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Alert = function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        "\u5F39\u51FA\u5C42"
      );
    }
  }]);

  return Alert;
}(_react2.default.Component());

exports.default = Alert;