"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmtyBorder = exports.CharComp = exports.ItemCharacteristic = exports.Size = exports.ItemSize = exports.ItemNum = exports.ItemNumber = exports.NumComp = exports.LikeImg = exports.LikedItem = exports.BuyButton = exports.Price = exports.ItemPrice = exports.ItemName = exports.ItemDoc = exports.ImgSrc = exports.ItemImg = exports.SelectedItem = exports.DeliverySection = exports.InnerItem = exports.InnerImg = exports.InnerItems = exports.InnerMenu = exports.UserImg = exports.UserComp = exports.WishListImg = exports.WishList = exports.PhoneImg = exports.CallComp = exports.EmptyComp = exports.MenuSearch = exports.SearchImg = exports.SearchImgLink = exports.SearchComp = exports.MenuItem = exports.MenuComp = exports.HeaderElementImg = exports.HeaderElement = exports.HeaderMenu = exports.DeliveryHeader = exports.DeliveryCont = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject41() {
  var data = _taggedTemplateLiteral([" \n  width: 100px;\n\n"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["\n  font-size: 20px;\n  font-weight: 500;\n  margin-left: 50px;\n  color: #414141;\n  /* border-bottom: 1px solid #245462; */\n"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral(["\n  width: 95%;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  \n"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 2px;\n  border-bottom: 1px solid #000;\n"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  border: none;\n  outline: none;\n  border-bottom: 1px solid #000;\n  font-size: 24px;\n"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 2px;\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n  width: 360px;\n  height: 70px;\n  display: flex;\n  margin-top: 30px;\n  /* margin-left: 2px; */\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 14px;\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n  width: 25px;\n  height: 25px;\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n  width: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  width: 120px;\n  height: 35px;\n  border: none;\n  margin-right: 50px;\n  color: #fff;\n  cursor: pointer;\n  transition: 0.2s;\n  background-color: #245462;\n  &:hover {\n    width: 130px;\n    transition: 0.2s;\n  }\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 400;\n  color: #414141;\n  margin-right: 50px;\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  width: 95%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 600;\n  margin-bottom: 30px;\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  width: 60%;\n  height: 80%;\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  width: 95%;\n  height: 70vh;\n  display: flex;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  width: 90%;\n  height: 150vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* justify-content: center; */\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  color: #000;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  width: 15px;\n  height: 15px;\n  margin-right: 15px;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  height: 40px;\n  display: flex;\n  list-style: none;\n  margin-left: 50px;\n  /* margin-right: 90px; */\n  align-items: center;\n  border-top: 1px solid #000;\n  justify-content: space-between;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  width: 90%;\n  height: 10vh;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  width: 20px;\n  height: 20px;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  width: 20px;\n  height: 20px;\n  display: flex;\n  margin-left: 40px;\n  align-items: center;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  width: 20px;\n  height: 20px;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  width: 20px;\n  height: 20px;\n  display: flex;\n  margin-left: 40px;\n  align-items: center;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  width: 15px;\n  height: 15px;\n  margin-right: 10px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  width: 140px;\n  display: flex;\n  font-size: 14px;\n  align-items: center;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  width: 140px;\n  height: 100%;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  width: 110px;\n  height: 20px;\n  color: #000;\n  border: none;\n  outline: none;\n  margin-left: 10px;\n  border-bottom: 1px solid #000;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 15px;\n  height: 15px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  width: 15px;\n  height: 15px;\n  display: flex;\n  align-items: center;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: 140px;\n  height: 20px;\n  padding: 5px;\n  display: flex;\n  margin-left: 20px;\n  align-items: center;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: #000;\n  font-weight: 300;\n  text-decoration: none;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 30px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 210px;\n  height: 35px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  list-style: none;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 90%;\n  height: 70px;\n  display: flex;\n  align-items: flex-start;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 200vh;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: flex-start;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DeliveryCont = _styledComponents["default"].div(_templateObject());

exports.DeliveryCont = DeliveryCont;

var DeliveryHeader = _styledComponents["default"].header(_templateObject2());

exports.DeliveryHeader = DeliveryHeader;

var HeaderMenu = _styledComponents["default"].ul(_templateObject3());

exports.HeaderMenu = HeaderMenu;

var HeaderElement = _styledComponents["default"].a(_templateObject4());

exports.HeaderElement = HeaderElement;

var HeaderElementImg = _styledComponents["default"].img(_templateObject5());

exports.HeaderElementImg = HeaderElementImg;

var MenuComp = _styledComponents["default"].li(_templateObject6());

exports.MenuComp = MenuComp;

var MenuItem = _styledComponents["default"].a(_templateObject7());

exports.MenuItem = MenuItem;

var SearchComp = _styledComponents["default"].div(_templateObject8());

exports.SearchComp = SearchComp;

var SearchImgLink = _styledComponents["default"].a(_templateObject9());

exports.SearchImgLink = SearchImgLink;

var SearchImg = _styledComponents["default"].img(_templateObject10());

exports.SearchImg = SearchImg;

var MenuSearch = _styledComponents["default"].input(_templateObject11());

exports.MenuSearch = MenuSearch;

var EmptyComp = _styledComponents["default"].div(_templateObject12());

exports.EmptyComp = EmptyComp;

var CallComp = _styledComponents["default"].div(_templateObject13());

exports.CallComp = CallComp;

var PhoneImg = _styledComponents["default"].img(_templateObject14());

exports.PhoneImg = PhoneImg;

var WishList = _styledComponents["default"].a(_templateObject15());

exports.WishList = WishList;

var WishListImg = _styledComponents["default"].img(_templateObject16());

exports.WishListImg = WishListImg;

var UserComp = _styledComponents["default"].a(_templateObject17());

exports.UserComp = UserComp;

var UserImg = _styledComponents["default"].img(_templateObject18());

exports.UserImg = UserImg;

var InnerMenu = _styledComponents["default"].div(_templateObject19());

exports.InnerMenu = InnerMenu;

var InnerItems = _styledComponents["default"].li(_templateObject20());

exports.InnerItems = InnerItems;

var InnerImg = _styledComponents["default"].img(_templateObject21());

exports.InnerImg = InnerImg;

var InnerItem = _styledComponents["default"].a(_templateObject22());

exports.InnerItem = InnerItem;

var DeliverySection = _styledComponents["default"].section(_templateObject23());

exports.DeliverySection = DeliverySection;

var SelectedItem = _styledComponents["default"].div(_templateObject24());

exports.SelectedItem = SelectedItem;

var ItemImg = _styledComponents["default"].div(_templateObject25());

exports.ItemImg = ItemImg;

var ImgSrc = _styledComponents["default"].img(_templateObject26());

exports.ImgSrc = ImgSrc;

var ItemDoc = _styledComponents["default"].div(_templateObject27());

exports.ItemDoc = ItemDoc;

var ItemName = _styledComponents["default"].h1(_templateObject28());

exports.ItemName = ItemName;

var ItemPrice = _styledComponents["default"].div(_templateObject29());

exports.ItemPrice = ItemPrice;

var Price = _styledComponents["default"].h2(_templateObject30());

exports.Price = Price;

var BuyButton = _styledComponents["default"].button(_templateObject31());

exports.BuyButton = BuyButton;

var LikedItem = _styledComponents["default"].div(_templateObject32());

exports.LikedItem = LikedItem;

var LikeImg = _styledComponents["default"].img(_templateObject33());

exports.LikeImg = LikeImg;

var NumComp = _styledComponents["default"].div(_templateObject34());

exports.NumComp = NumComp;

var ItemNumber = _styledComponents["default"].div(_templateObject35());

exports.ItemNumber = ItemNumber;

var ItemNum = _styledComponents["default"].input(_templateObject36());

exports.ItemNum = ItemNum;

var ItemSize = _styledComponents["default"].div(_templateObject37());

exports.ItemSize = ItemSize;

var Size = _styledComponents["default"].h4(_templateObject38());

exports.Size = Size;

var ItemCharacteristic = _styledComponents["default"].div(_templateObject39());

exports.ItemCharacteristic = ItemCharacteristic;

var CharComp = _styledComponents["default"].h4(_templateObject40());

exports.CharComp = CharComp;

var EmtyBorder = _styledComponents["default"].span(_templateObject41());

exports.EmtyBorder = EmtyBorder;