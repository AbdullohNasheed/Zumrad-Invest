/* eslint-disable no-undef */
import styled from "styled-components";
import img from "../../assets/images/reklam-img.svg";

export const Header = styled.header`
  width: 100%;
  height: 11vh;
  display: flex;
  justify-content: center;
`;
export const HeaderInner = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const InputCont = styled.div`
  width: 75%;
  height: 50%;
  display: flex;
  align-items: center;
  border: 1px solid #e5e5e5;
`;
export const WishStyledIcon = styled.img`
  width: 19.83px;
  height: 18px;
`;
export const ProfileStyledIcon = styled.img`
  width: 12.87px;
  height: 18px;
`;
export const  Logotip = styled.img`
 width: 15%;
 height: 80%;
`
export const WishLink = styled.a`
  width: 19.83px;
  height: 18px;
`;
export const ProfileLink = styled.a`
  width: 12.87px;
  height: 18px;
`;

export const ModalInput = styled.input ` 
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 border: 1px solid #111;
 background: transparent;
 padding: 10px;
 border-radius: 4px;
 box-sizing: border-box;
 outline: none;
 font-size: 16px;
 color: #111;
 font-weight: 300;
 &:focus ~ span{
 transform: translateX(-10px)translateY(-32px);
 font-size: 14px;
 }
`
export const Email = styled.span`
 position: absolute;
 top: 1px;
 left: 1px;
 padding: 10px;
 display: inline-block;
 font-size: 16px;
 color: #111;
 font-weight: 300;
 transition: 0.5s;
 pointer-events:none;
`
export const Modal_one = styled.div`
 position: relative;
 width: 300px;
 height: 46px;
 border-bottom: 1px;
 margin-bottom: 35px;
 display: flex;
`
export const ModalButto = styled.button`
 display: flex;
 width: 50%;
 height: 95%;
 align-items: center;
 justify-content: center;
 border-radius: 5px;
 /* background-color: #2196f3; */
 border: 1px solid #111;
 color: #111;
 font-weight: 600;
 font-size: 16px;
 background-color:#cdd5dc;
 &:hover{
   color: green;
   transition: 0.8s;
 }
`
export const ModalButton_one = styled.button`
 display: flex;
 width: 50%;
 height: 95%;
 align-items: center;
 justify-content: center;
 border-radius: 5px;
 margin-left: 10px;
 /* background-color: #2196f3; */
 color: #111;
 font-weight: 600;
 font-size: 16px;
 border: 1px solid #111;
 background-color:#cdd5dc;
 &:hover{
   color: red;
   transition: 0.8s;
 }
`
export const CloseButton = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;
 height: 100%;
`
export const CloseInput = styled.div`
 position: relative;
 padding: 70px 40px;
 background:#fff;
 border-radius: 20px;
 background-color: #cdd5dc;
`

export const InputLupa = styled.a`
  width: 4%;
  height: 45%;
  display: flex;
  margin-bottom: 0.2%;
`;
export const Lupa = styled.img`
  width: 100%;
  height: 100%;
`;
export const Input = styled.input`
  width: 95%;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 1%;
`;
export const Header_one = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Header_two = styled.div`
  width: 80%;
  height: 80%;
  -webkit-box-shadow: 0px 0px 12px -3px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 0px 0px 12px -3px rgba(34, 60, 80, 0.2);
box-shadow: 0px 0px 12px -3px rgba(34, 60, 80, 0.2);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const OfesMebel = styled.a`
  font-size: 12px;
  height: 35%;
  display: flex;
  color: #000;
`;
export const MebelCont = styled.div`
  width: 15%;
  height: 90%;
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const OfesIcon = styled.img`
  width: 18%;
  height: 38%;
`;

//Header........

export const Advertising = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const AdvertisingImg = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: flex-end; 
`;
export const BackgrundImg = styled.div`
  width: 100%;
  height: 95%;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 120%;
  -webkit-box-shadow: 0px 0px 46px -12px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 46px -12px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 46px -12px rgba(34, 60, 80, 0.2);
`;
export const AdvertisingInner = styled.nav`
 width: 35%;
 height: 100%;
 display: flex;
 margin-left: 13%; 
 flex-direction: column;
`
export const Loft = styled.h1 `
 font-size: 50px;
 color: #3C3C3C;
 font-weight: 700;
 margin-top: 20%;
`
export const LoftButton = styled.button`
 width: 45%;
 height: 12%;
 font-size: 10px;
 color: #414141;
 background-color: #fff;
 font-weight: 700;
 margin-top: 5%;
 -webkit-box-shadow: 0px 6px 11px 0px rgba(34, 60, 80, 0.2);
 -moz-box-shadow: 0px 6px 11px 0px rgba(34, 60, 80, 0.2);
 box-shadow: 0px 6px 11px 0px rgba(34, 60, 80, 0.2);
 border:none;
 border-radius: 4px;
`
export const LoftText = styled.span`
 color: #343434;
 font-size: 13px;
 margin-top: 3%;
`

export const XitPradaja = styled.div`
 width: 19%;
 height: 6vh;
 display: flex;
 align-items: flex-end;
 justify-content: flex-end;
 font-size: 16px;
 font-weight: 550;
`

//Advertising.......

export const Section = styled.section`
  width: 100%;
  height: 191.5vh;
  display: flex;
  justify-content: center;
`;
export const Section_inner = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Div = styled.div`
  width: 100%;
  height: 47vh;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
export const Div_one = styled.div`
  width: 23.5%;
  height: 93%;
  display: flex;
  -webkit-box-shadow: 0px 0px 12px -3px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 12px -3px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 12px -3px rgba(34, 60, 80, 0.2);
  flex-direction: column;
  border-radius: 8px;
`;
export const Like = styled.a`
  width: 8%;
  height: 60%;
  margin-right: 3%;
`;
export const LikeImage = styled.img`
  width: 17.5px;
  height: 15px;
`;
export const LikeIcon = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const FotoContainer = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
`;
export const Foto = styled.img`
  width: 50%;
  height: 100%;
`;
export const Text_one = styled.h3`
  font-size: 15px;
  font-weight: 500;
  margin-left: 5%;
`;
export const Text_two = styled.p`
  font-size: 11px;
  margin-left: 5%;
`;
export const Text_three = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin-left: 5%;
`;
//Section.......

export const Footer = styled.footer`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  -webkit-box-shadow: 0px 0px 12px -3px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 0px 0px 12px -3px rgba(34, 60, 80, 0.2);
box-shadow: 0px 0px 12px -3px rgba(34, 60, 80, 0.2);
`;
export const Footer_Inner = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
`;
export const Footer_One = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Footer_two = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const One = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: flex-end;
`;
export const Two = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
`;
export const Three = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
`;
export const One_text = styled.h3`
  font-size: 13px;
  font-weight: 600;
`;
export const Two_text = styled.div`
  width: 20%;
  height: 70%;
  font-size: 11px;
  display: flex;
  margin-top: 2%;
  line-height: 20px;
  color: #414141;
`;
export const Text_for = styled.p`
  font-size: 12px;
  color: red;
  margin-top: 2%;
`;
export const Text_five = styled.p`
  font-size: 12px;
  padding-left: 5%;
  margin-top: 2%;
  color: #414141;
`;
export const LM = styled.div`
  width: 50%;
  height: 40%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const Adrs = styled.div`
  width: 50%;
  height: 35%;
  display: flex;
  justify-content: flex-end;
`;
export const Icon = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: space-between;
`;
export const LmText = styled.h1``;
export const AdrsText = styled.p`
  display: flex;
  font-size: 11px;
  align-items: center;
  justify-content: center;
  color: #414141;
  text-align: end;
`;
export const IconPhone = styled.img`
  width: 14px;
  height: 14px;
`;
export const Icon_one = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const IconNumber = styled.span`
  font-size: 11px;
  margin-left: 6px;
`;
