import BannerImg from'.././../../../assets/images/Screenshot_4.png'
import Headers from '../../../../Components/Headers';
import {
Banner,
Container,
BannerContainer,
BannerDiv,
Title,
Span,
SpanTitle,
Img,
IconBox,
Icon,
IconOne,
ImageBox,
} from"./style"
const BannerPage = () => {
    return (
        <Banner>
             <Headers/>
            <Container>
                <BannerContainer>
                  <ImageBox>
                  <Img src={BannerImg}/>
                  </ImageBox>
                    <BannerDiv>
                        <Title>
                            <Span>
                                Loft Mebel
                            <IconBox>
                                <Icon>
                                <i class='bx bx-edit'></i>
                                </Icon>
                                 <IconOne>
                                <i class='bx bx-trash'></i>
                                </IconOne>
                            </IconBox>
                            </Span>
                            <SpanTitle>
                                Современная и удобная мебель в Анапе
                            </SpanTitle>
                        </Title>
                    </BannerDiv>
                </BannerContainer>
            </Container>
        </Banner>
    )
}

export default BannerPage
