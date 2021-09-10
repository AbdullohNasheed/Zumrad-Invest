import React from "react";
import {
  DeliveryCont,
  DeliveryHeader,
  HeaderMenu,
  HeaderElement,
  HeaderElementImg,
  MenuComp,
  MenuSearch,
  SearchComp,
  MenuItem,
  SearchImgLink,
  SearchImg,
  EmptyComp,
  CallComp,
  PhoneImg,
  WishList,
  WishListImg,
  UserComp,
  UserImg,
  InnerMenu,
  InnerItems,
  InnerItem,
  InnerImg,
  DeliverySection,
} from "./styles";
import logo from "../../assets/images/logo.svg";
import loupe from "../../assets/images/loupe.svg";
import phoneImg from "../../assets/images/phone.svg";
import chairImg from "../../assets/images/chair-icon.svg";
import userImg from "../../assets/images/profile-icon.svg";
import wishImg from "../../assets/images/wishlist-icon.svg";
import officeImg from "../../assets/images/office-icon.svg";

export default function DeliveryPage() {
  return (
    <DeliveryCont>
      <DeliveryHeader>
        <HeaderMenu>
          <HeaderElement href="#">
            <HeaderElementImg src={logo} />
          </HeaderElement>
          <MenuComp>
            <MenuItem href="#">Главная</MenuItem>
          </MenuComp>
          <MenuComp>
            <MenuItem href="#">О нас</MenuItem>
          </MenuComp>
          <MenuComp>
            <MenuItem href="#">Контакты</MenuItem>
          </MenuComp>
          <SearchComp>
            <SearchImgLink href="#">
              <SearchImg src={loupe} />
            </SearchImgLink>
            <MenuSearch type="text" placeholder="Поиск" />
          </SearchComp>
          <EmptyComp />
          <CallComp>
            <PhoneImg src={phoneImg} />8 (964) 89 99 119
          </CallComp>
          <WishList href="#">
            <WishListImg src={wishImg} />
          </WishList>
          <UserComp href="#">
            <UserImg src={userImg} />
          </UserComp>
        </HeaderMenu>
      </DeliveryHeader>
      <InnerMenu>
        <InnerItems>
          <InnerImg src={officeImg} />
          <InnerItem href="#">Офисная мебель</InnerItem>
        </InnerItems>
        <InnerItems>
          <InnerImg src={chairImg} />
          <InnerItem href="#">Театральная мебель</InnerItem>
        </InnerItems>
      </InnerMenu>
      <DeliverySection>
        
      </DeliverySection>
    </DeliveryCont>
  );
}
