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
export const LogoImg = styled.img`
  width: 10%;
  height: 50%;
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
export const WishLink = styled.a`
  width: 19.83px;
  height: 18px;
`;
export const ProfileLink = styled.a`
  width: 12.87px;
  height: 18px;
`;

export const ModalInput = styled.input ` 
  width: 300px;
  height: 30px;
  background-color: #fff;
  /* opacity: 1; */
`


export const CloseButton = styled.button `
  width: 150px;
  height: 30px;
  background-color: #000;
  color: #fff;
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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
`;
export const BackgrundImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 120%;
`;

//Advertising.......

export const Section = styled.section`
  width: 100%;
  height: 183.5vh;
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
  height: 45vh;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
export const Div_one = styled.div`
  width: 23.5%;
  height: 93%;
  display: flex;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  flex-direction: column;
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
  width: 65%;
  height: 90%;
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
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
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
