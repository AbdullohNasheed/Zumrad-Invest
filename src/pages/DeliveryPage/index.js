import React, { useState } from "react";
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
  SelectedItem,
  ItemImg,
  ImgSrc,
  ItemDoc,
  ItemName,
  ItemPrice,
  Price,
  BuyButton,
  LikedItem,
  LikeImg,
  NumComp,
  ItemNum,
  ItemNumber,
  ItemSize,
  Size,
  ItemCharacteristic,
  CharComp,
} from "./styles";
import logo from "../../assets/images/logo.png";
import loupe from "../../assets/images/search-icon.svg";
import phoneImg from "../../assets/images/phone.svg";
import chairImg from "../../assets/images/chair-icon.svg";
import userImg from "../../assets/images/profile-icon.svg";
import wishImg from "../../assets/images/wishlist-icon-default.svg";
import wishRedImg from "../../assets/images/wishlist-icon-red.svg";
import officeImg from "../../assets/images/office-icon.svg";
import SelectedtImage from "../../assets/images/IMG_4867.JPG";

export default function DeliveryPage() {
  const [isLiked, setisLiked] = useState(false);

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
            <PhoneImg src={phoneImg} />
            (9*) 123 45 67
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
        <SelectedItem>
          <ItemImg>
            <ImgSrc src={SelectedtImage} />
          </ItemImg>
          <ItemDoc>
            <ItemName> Модель: 201-H</ItemName>
            <ItemPrice>
              <Price>4 690₽</Price>
              <BuyButton>Купить</BuyButton>
              <LikedItem>
                {isLiked ? (
                  <LikeImg
                    onClick={() => setisLiked(!isLiked)}
                    src={wishRedImg}
                  />
                ) : (
                  <LikeImg onClick={() => setisLiked(!isLiked)} src={wishImg} />
                )}
                Добавить в желаемое
              </LikedItem>
            </ItemPrice>
            <NumComp>
              <ItemNumber>
                Количество
                <ItemNum type="number" placeholder="1" min="1" max="10" />
              </ItemNumber>
              <ItemSize>
                Размер (Д × Ш × В) <Size>218 СМ × 95 СМ × 90 СМ</Size>
              </ItemSize>
            </NumComp>
          </ItemDoc>
        </SelectedItem>
        <ItemCharacteristic>
          <CharComp>
            Характеристики
            
            </CharComp>
        </ItemCharacteristic>
      </DeliverySection>
    </DeliveryCont>
  );
}
