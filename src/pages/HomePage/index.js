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
  // customStyles,
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

function HomePage() {
  const customStyles = {
    overlay: {
      background: "#000",
      opacity: ".8",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "400px",
      height: "300px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#AFE19F",
      border: "none",
      borderRadius: "10px",
      color: "#fff",
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
            <Input type="text" placeholder="Поиск" />
          </InputCont>
          <WishLink href="#">
            <WishStyledIcon src={WishIcon} />
          </WishLink>
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
              <ModalInput type="text" placeholder="Email" />
              <ModalInput type="password" placeholder="Password" />

              <CloseButton onClick={() => setIsOpen(false)}>
                Выход
              </CloseButton>
            </Modal>
          </ProfileLink>
        </HeaderInner>
      </Header>
      <Header_one>
        <Header_two>
          <MebelCont>
            <OfesIcon src={Ofices} />
            <OfesMebel href="#">Кухни</OfesMebel>
          </MebelCont>
          <MebelCont>
            <OfesIcon src={Ofices} />
            <OfesMebel href="#"> Офисная мебель</OfesMebel>
          </MebelCont>
        </Header_two>
      </Header_one>
      <Advertising>
        <AdvertisingImg>
          <BackgrundImg></BackgrundImg>
        </AdvertisingImg>
      </Advertising>
      <XitPradaja>
      Хиты продаж
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
                <Text_one>Шерона Barhat Grey</Text_one>
                <Text_two>Двухспальные кровати</Text_two>
                <Text_three>21 990₽</Text_three>
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
                <Text_one>Шерона Barhat Grey</Text_one>
                <Text_two>Двухспальные кровати</Text_two>
                <Text_three>21 990₽</Text_three>
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
                <Text_one>Шерона Barhat Grey</Text_one>
                <Text_two>Двухспальные кровати</Text_two>
                <Text_three>21 990₽</Text_three>
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
                <Text_one>Шерона Barhat Grey</Text_one>
                <Text_two>Двухспальные кровати</Text_two>
                <Text_three>21 990₽</Text_three>
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
                <Text_one>Шерона Barhat Grey</Text_one>
                <Text_two>Двухспальные кровати</Text_two>
                <Text_three>21 990₽</Text_three>
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
                <Text_one>Шерона Barhat Grey</Text_one>
                <Text_two>Двухспальные кровати</Text_two>
                <Text_three>21 990₽</Text_three>
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
                <Text_one>Шерона Barhat Grey</Text_one>
                <Text_two>Двухспальные кровати</Text_two>
                <Text_three>21 990₽</Text_three>
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
                <Text_one>Шерона Barhat Grey</Text_one>
                <Text_two>Двухспальные кровати</Text_two>
                <Text_three>21 990₽</Text_three>
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
                <Text_one>Шерона Barhat Grey</Text_one>
                <Text_two>Двухспальные кровати</Text_two>
                <Text_three>21 990₽</Text_three>
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
                <Text_one>Шерона Barhat Grey</Text_one>
                <Text_two>Двухспальные кровати</Text_two>
                <Text_three>21 990₽</Text_three>
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
                <Text_one>Шерона Barhat Grey</Text_one>
                <Text_two>Двухспальные кровати</Text_two>
                <Text_three>21 990₽</Text_three>
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
                <Text_one>Шерона Barhat Grey</Text_one>
                <Text_two>Двухспальные кровати</Text_two>
                <Text_three>21 990₽</Text_three>
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
                <Text_one>Шерона Barhat Grey</Text_one>
                <Text_two>Двухспальные кровати</Text_two>
                <Text_three>21 990₽</Text_three>
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
                <Text_one>Шерона Barhat Grey</Text_one>
                <Text_two>Двухспальные кровати</Text_two>
                <Text_three>21 990₽</Text_three>
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
                <Text_one>Шерона Barhat Grey</Text_one>
                <Text_two>Двухспальные кровати</Text_two>
                <Text_three>21 990₽</Text_three>
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
                <Text_one>Шерона Barhat Grey</Text_one>
                <Text_two>Двухспальные кровати</Text_two>
                <Text_three>21 990₽</Text_three>
              </Text>
            </Div_one>
          </Div>
        </Section_inner>
      </Section>
      <Footer>
        <Footer_Inner>
          <Footer_One>
            <One>
              <One_text>НАВИГАЦИЯ</One_text>
            </One>
            <Two>
              <Two_text>
                Кухни <br />
                Спальни
                <br />
                Гостинные
              </Two_text>
              <Two_text>
                Прихожие
                <br />
                Офисная мебель <br />
                Детская
              </Two_text>
              <Two_text>
                Шкафы <br />
                Матрасы
                <br />
                Мягкая мебель
              </Two_text>
            </Two>
            <Three>
              <Text_for>Акция</Text_for>
              <Text_five>Новинки</Text_five>
            </Three>
          </Footer_One>
          <Footer_two>
            <LM>
              <LmText>LM</LmText>
            </LM>
            <Adrs>
              <AdrsText>
                г. Анапа, Анапское шоссе,
                <br />
                30 Ж/К Черное море
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
