/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
// Modal.setAppElement("#root");
import {
  Header,
  Div,
  One,
  LM,
  Adrs,
  Icon_one,
  IconNumber,
  IconPhone,
  AdrsText,
  LmText,
  Icon,
  Two_text,
  Text_for,
  Text_five,
  One_text,
  Two,
  Three,
  Footer_One,
  Footer_two,
  Footer,
  Footer_Inner,
  Like,
  Text_one,
  Text_three,
  Text_two,
  Foto,
  Text,
  FotoContainer,
  LikeIcon,
  LikeImage,
  Div_one,
  MebelCont,
  Section_inner,
  Section,
  OfesIcon,
  OfesMebel,
  Header_one,
  Header_two,
  Advertising,
  AdvertisingImg,
  Input,
  Lupa,
  WishLink,
  InputLupa,
  ProfileLink,
  WishStyledIcon,
  ProfileStyledIcon,
  InputCont,
  HeaderInner,
  Logotip,
  BackgrundImg,
  CloseButton,
  ModalInput,
  XitPradaja,
  Email,
  Modal_one,
  CloseInput,
  ModalButto,
  ModalButton_one,
  AdvertisingInner,
  Loft,
  LoftButton,
  LoftText,

} from "./styled";
import MeblLogo from "../../assets/images/Screenshot_1.png";
import WishIcon from "../../assets/images/wishlist-icon-default.svg";
import ProfileIcon from "../../assets/images/profile-icon.svg";
import Lupaicon from "../../assets/images/search-icon.svg";
import Ofices from "../../assets/images/office-icon.svg";
import foto_1 from "../../assets/images/IMG_4832.JPG";
import foto_2 from "../../assets/images/IMG_4842.JPG";
import foto_3 from "../../assets/images/IMG_4843.JPG";
import foto_4 from "../../assets/images/IMG_4844.JPG";
import foto_5 from "../../assets/images/IMG_4845.JPG";
import foto_6 from "../../assets/images/IMG_4846.JPG";
import foto_7 from "../../assets/images/IMG_4847.JPG";
import foto_8 from "../../assets/images/IMG_4848.JPG";
import foto_9 from "../../assets/images/IMG_4849.JPG";
import foto_10 from "../../assets/images/IMG_4850.JPG";
import foto_11 from "../../assets/images/IMG_4851.JPG";
import foto_12 from "../../assets/images/IMG_4852.JPG";
import foto_13 from "../../assets/images/IMG_4853.JPG";
import foto_14 from "../../assets/images/IMG_4854.JPG";
import foto_15 from "../../assets/images/IMG_4857.JPG";
import foto_16 from "../../assets/images/IMG_4856.JPG";
import Phone from "../../assets/images/phone.svg";
import Instagram from "../../assets/images/insta-icon.svg";
import mail from "../../assets/images/mail-icon.svg";
import Modal from "react-modal";
import { Link } from "react-router-dom";

function HomePage() {
  const customStyles = {
    overlay: {
      background: "#000",
      opacity: "0.8",
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: "flex",
      width: "30%",
      height: "70%",
      background:"#000",
      border: "none",
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header>
        <HeaderInner>
          <Logotip src={MeblLogo}/>
          <InputCont>
            <InputLupa href="#">
              <Lupa src={Lupaicon} />
            </InputLupa>
            <Input type="text" placeholder="??????????" />
          </InputCont>
          <WishLink href="#">
            <WishStyledIcon src={WishIcon} />
          </WishLink>
          <Link to="/orderpage"> <i class='bx bx-cart-alt'></i> </Link>
          <ProfileLink href="#">
            <ProfileStyledIcon
              src={ProfileIcon}
              onClick={() => setIsOpen(true)}
            />
            <Modal
              isOpen={isOpen}
              style={customStyles}
              onRequestClose={() => setIsOpen(false)}
            >
             <CloseButton>
              <CloseInput>
              <Modal_one>
              <ModalInput type="text"required="required"/>
              <Email>Email</Email>
              </Modal_one>
              <Modal_one>
              <ModalInput type="password" required="required"/>
              <Email>Password</Email>
              </Modal_one>
              <Modal_one>
              <ModalButto>
                 Login
              </ModalButto>
              <ModalButton_one onClick={() => setIsOpen(false)}>
                 Exit
              </ModalButton_one>
              </Modal_one>
              </CloseInput>
             </CloseButton>
            </Modal>
          </ProfileLink>
        </HeaderInner>
      </Header>
      <Header_one>
        <Header_two>
          <MebelCont>
            <OfesIcon src={Ofices} />
            <OfesMebel href="#">??????????</OfesMebel>
          </MebelCont>
          <MebelCont>
            <OfesIcon src={Ofices} />
            <OfesMebel href="#"> ?????????????? ????????????</OfesMebel>
          </MebelCont>
        </Header_two>
      </Header_one>
      <Advertising>
        <AdvertisingImg>
          <BackgrundImg>
            <AdvertisingInner>
                <Loft>loft <br/>????????????</Loft>
                <LoftText>?????????????????????? ?? ?????????????? ???????????? ?? ??????????</LoftText>
                <LoftButton>???????????????? ??????????????</LoftButton>
            </AdvertisingInner>
          </BackgrundImg>
        </AdvertisingImg>
      </Advertising>
      <XitPradaja>
      ???????? ????????????
      </XitPradaja>
      <Section>
        <Section_inner>
          <Div>
            <Div_one>
              <LikeIcon>
                <Like href="#">
                  <LikeImage src={WishIcon} />
                </Like>
              </LikeIcon>
              <FotoContainer>
                <Foto src={foto_1} />
              </FotoContainer>
              <Text>
                <Text_one>???????????? Barhat Grey</Text_one>
                <Text_two>???????????????????????? ??????????????</Text_two>
                <Text_three>21 990???</Text_three>
              </Text>
            </Div_one>
            <Div_one>
              <LikeIcon>
                <Like href="#">
                  <LikeImage src={WishIcon} />
                </Like>
              </LikeIcon>
              <FotoContainer>
                <Foto src={foto_2} />
              </FotoContainer>
              <Text>
                <Text_one>???????????? Barhat Grey</Text_one>
                <Text_two>???????????????????????? ??????????????</Text_two>
                <Text_three>21 990???</Text_three>
              </Text>
            </Div_one>
            <Div_one>
              <LikeIcon>
                <Like href="#">
                  <LikeImage src={WishIcon} />
                </Like>
              </LikeIcon>
              <FotoContainer>
                <Foto src={foto_3} />
              </FotoContainer>
              <Text>
                <Text_one>???????????? Barhat Grey</Text_one>
                <Text_two>???????????????????????? ??????????????</Text_two>
                <Text_three>21 990???</Text_three>
              </Text>
            </Div_one>
            <Div_one>
              <LikeIcon>
                <Like href="#">
                  <LikeImage src={WishIcon} />
                </Like>
              </LikeIcon>
              <FotoContainer>
                <Foto src={foto_4} />
              </FotoContainer>
              <Text>
                <Text_one>???????????? Barhat Grey</Text_one>
                <Text_two>???????????????????????? ??????????????</Text_two>
                <Text_three>21 990???</Text_three>
              </Text>
            </Div_one>
          </Div>
          <Div>
            <Div_one>
              <LikeIcon>
                <Like href="#">
                  <LikeImage src={WishIcon} />
                </Like>
              </LikeIcon>
              <FotoContainer>
                <Foto src={foto_5} />
              </FotoContainer>
              <Text>
                <Text_one>???????????? Barhat Grey</Text_one>
                <Text_two>???????????????????????? ??????????????</Text_two>
                <Text_three>21 990???</Text_three>
              </Text>
            </Div_one>
            <Div_one>
              <LikeIcon>
                <Like href="#">
                  <LikeImage src={WishIcon} />
                </Like>
              </LikeIcon>
              <FotoContainer>
                <Foto src={foto_6} />
              </FotoContainer>
              <Text>
                <Text_one>???????????? Barhat Grey</Text_one>
                <Text_two>???????????????????????? ??????????????</Text_two>
                <Text_three>21 990???</Text_three>
              </Text>
            </Div_one>
            <Div_one>
              <LikeIcon>
                <Like href="#">
                  <LikeImage src={WishIcon} />
                </Like>
              </LikeIcon>
              <FotoContainer>
                <Foto src={foto_7} />
              </FotoContainer>
              <Text>
                <Text_one>???????????? Barhat Grey</Text_one>
                <Text_two>???????????????????????? ??????????????</Text_two>
                <Text_three>21 990???</Text_three>
              </Text>
            </Div_one>
            <Div_one>
              <LikeIcon>
                <Like href="#">
                  <LikeImage src={WishIcon} />
                </Like>
              </LikeIcon>
              <FotoContainer>
                <Foto src={foto_8} />
              </FotoContainer>
              <Text>
                <Text_one>???????????? Barhat Grey</Text_one>
                <Text_two>???????????????????????? ??????????????</Text_two>
                <Text_three>21 990???</Text_three>
              </Text>
            </Div_one>
          </Div>
          <Div>
            <Div_one>
              <LikeIcon>
                <Like href="#">
                  <LikeImage src={WishIcon} />
                </Like>
              </LikeIcon>
              <FotoContainer>
                <Foto src={foto_9} />
              </FotoContainer>
              <Text>
                <Text_one>???????????? Barhat Grey</Text_one>
                <Text_two>???????????????????????? ??????????????</Text_two>
                <Text_three>21 990???</Text_three>
              </Text>
            </Div_one>
            <Div_one>
              <LikeIcon>
                <Like href="#">
                  <LikeImage src={WishIcon} />
                </Like>
              </LikeIcon>
              <FotoContainer>
                <Foto src={foto_10} />
              </FotoContainer>
              <Text>
                <Text_one>???????????? Barhat Grey</Text_one>
                <Text_two>???????????????????????? ??????????????</Text_two>
                <Text_three>21 990???</Text_three>
              </Text>
            </Div_one>
            <Div_one>
              <LikeIcon>
                <Like href="#">
                  <LikeImage src={WishIcon} />
                </Like>
              </LikeIcon>
              <FotoContainer>
                <Foto src={foto_11} />
              </FotoContainer>
              <Text>
                <Text_one>???????????? Barhat Grey</Text_one>
                <Text_two>???????????????????????? ??????????????</Text_two>
                <Text_three>21 990???</Text_three>
              </Text>
            </Div_one>
            <Div_one>
              <LikeIcon>
                <Like href="#">
                  <LikeImage src={WishIcon} />
                </Like>
              </LikeIcon>
              <FotoContainer>
                <Foto src={foto_12} />
              </FotoContainer>
              <Text>
                <Text_one>???????????? Barhat Grey</Text_one>
                <Text_two>???????????????????????? ??????????????</Text_two>
                <Text_three>21 990???</Text_three>
              </Text>
            </Div_one>
          </Div>
          <Div>
            <Div_one>
              <LikeIcon>
                <Like href="#">
                  <LikeImage src={WishIcon} />
                </Like>
              </LikeIcon>
              <FotoContainer>
                <Foto src={foto_13} />
              </FotoContainer>
              <Text>
                <Text_one>???????????? Barhat Grey</Text_one>
                <Text_two>???????????????????????? ??????????????</Text_two>
                <Text_three>21 990???</Text_three>
              </Text>
            </Div_one>
            <Div_one>
              <LikeIcon>
                <Like href="#">
                  <LikeImage src={WishIcon} />
                </Like>
              </LikeIcon>
              <FotoContainer>
                <Foto src={foto_14} />
              </FotoContainer>
              <Text>
                <Text_one>???????????? Barhat Grey</Text_one>
                <Text_two>???????????????????????? ??????????????</Text_two>
                <Text_three>21 990???</Text_three>
              </Text>
            </Div_one>
            <Div_one>
              <LikeIcon>
                <Like href="#">
                  <LikeImage src={WishIcon} />
                </Like>
              </LikeIcon>
              <FotoContainer>
                <Foto src={foto_15} />
              </FotoContainer>
              <Text>
                <Text_one>???????????? Barhat Grey</Text_one>
                <Text_two>???????????????????????? ??????????????</Text_two>
                <Text_three>21 990???</Text_three>
              </Text>
            </Div_one>
            <Div_one>
              <LikeIcon>
                <Like href="#">
                  <LikeImage src={WishIcon} />
                </Like>
              </LikeIcon>
              <FotoContainer>
                <Foto src={foto_16} />
              </FotoContainer>
              <Text>
                <Text_one>???????????? Barhat Grey</Text_one>
                <Text_two>???????????????????????? ??????????????</Text_two>
                <Text_three>21 990???</Text_three>
              </Text>
            </Div_one>
          </Div>
        </Section_inner>
      </Section>
      <Footer>
        <Footer_Inner>
          <Footer_One>
            <One>
              <One_text>??????????????????</One_text>
            </One>
            <Two>
              <Two_text>
                ?????????? <br />
                ??????????????
                <br />
                ??????????????????
              </Two_text>
              <Two_text>
                ????????????????
                <br />
                ?????????????? ???????????? <br />
                ??????????????
              </Two_text>
              <Two_text>
                ?????????? <br />
                ??????????????
                <br />
                ???????????? ????????????
              </Two_text>
            </Two>
            <Three>
              <Text_for>??????????</Text_for>
              <Text_five>??????????????</Text_five>
            </Three>
          </Footer_One>
          <Footer_two>
            <LM>
              <LmText>LM</LmText>
            </LM>
            <Adrs>
              <AdrsText>
                ??. ??????????, ???????????????? ??????????,
                <br />
                30 ??/?? ???????????? ????????
              </AdrsText>
            </Adrs>
            <Icon>
              <Icon_one>
                <IconPhone src={Phone} />
                <IconNumber>+998(99) 859 59 37</IconNumber>
              </Icon_one>
              <Icon_one>
                <IconPhone src={Instagram} />
                <IconNumber>INSTAGRAM</IconNumber>
              </Icon_one>
              <Icon_one>
                <IconPhone src={mail} />
                <IconNumber>mebel_loft_anapa@mail.ru</IconNumber>
              </Icon_one>
            </Icon>
          </Footer_two>
        </Footer_Inner>
      </Footer>
    </>
  );
}

export default HomePage;
