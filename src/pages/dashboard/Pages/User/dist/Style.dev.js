"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Th = exports.Td = exports.TrOne = exports.Tr = exports.Table = exports.All = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n position: absolute;\n border-collapse: collapse;\n width: 79%;\n height: 200px;\n "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n width: 100%;\n height: 100%;\n display: flex;\n border-radius: 5px;\n justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var All = _styledComponents["default"].div(_templateObject());

exports.All = All;

var Table = _styledComponents["default"].table(_templateObject2());

exports.Table = Table;

var Tr = _styledComponents["default"].tr(_templateObject3());

exports.Tr = Tr;

var TrOne = _styledComponents["default"].tr(_templateObject4());

exports.TrOne = TrOne;

var Td = _styledComponents["default"].td(_templateObject5());

exports.Td = Td;

var Th = _styledComponents["default"].th(_templateObject6());

exports.Th = Th;