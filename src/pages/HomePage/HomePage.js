/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import React from "react";
<<<<<<< HEAD
import {HomeIn, ProfileComp, WishListicon, Home, Header, InputAll,WishComp, SearchLink,LupaLink, MenuInput, Header_one, Header_two, MeblImage, Text, Text_one, LupaInput, ProfileListicon } from "./HomePageStyle";
import Mebl from "../../assets/images/zumrat_invest.png"
import { MenuSearch } from "../DeliveryPage/styles"
import InputLupa from "../../assets/images/loupe.svg"
import WishIcon from "../../assets/images/wishlist-icon.svg"
import ProfileIcon from "../../assets/images/profile-icon.svg"
=======
import {HomeIn, Home, Header, } from "./HomePageStyle";
// import img from "../../assest/img/icon/ZUMRAD INVEST11.png"
>>>>>>> 6e0cf55c3f7b9833bf2f20dde97e74c7a85b357d

export default function HomePage() {
  return (
    <Home>
       <HomeIn>
          <Header>
              <Header_one>
                  <MeblImage src = {Mebl} />
                  <Text>
                    Zumrad
                    <Text_one>
                     Mebel
                    </Text_one>
                  </Text>
                  <SearchLink>
                         <InputAll>
                         <LupaLink href="#">
                            <LupaInput src={InputLupa}/>  
                          </LupaLink>
                         <MenuInput  type="text" placeholder="Поиск"/>
                         </InputAll>
                   </SearchLink>
              </Header_one>
              <Header_two>
                <WishComp href="#">
                  <WishListicon src={WishIcon} />
                </WishComp>
                <ProfileComp href="#">
                    <ProfileListicon src={ProfileIcon}/>
                </ProfileComp>
              </Header_two>
          </Header>
       </HomeIn>
    </Home>
  )
}
