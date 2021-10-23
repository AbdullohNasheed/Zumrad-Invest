import React from 'react'
import{  
    Container, 
    SettingsTray,
    Image,
    Profil,
    Icon,
    ContainerInner,
    SettingsRight,
    ContainerInput,
    Input,
    InputContainer,
    FriendContainer,
    FriendName,
    FriendImag,
    H6,
    Span,
    Time,
    Img,
    Profile,
    ImgContainer,
    SpanName,
    SpanText,
    SpanContainer,
    Fotter,
    InputBox,
    Smaylik,
    SmaylikBox,
    InputMessage,
    Centr,
    Right,
    Left,
} from './style';
import Ibrohim from'../../../../assets/images/photo_2021-08-04_10-05-31.jpg'
const MessagePage = () => {

    return(
       <Container>
           <ContainerInner>
           <SettingsTray>
                <Profil>
                    <Image src={Ibrohim}/>
                    <Icon>
                    <i class='bx bx-rotate-left'></i>
                    <i class='bx bx-chat'></i>
                    <i class='bx bx-menu'></i>
                    </Icon>
                </Profil>
                <ContainerInput>
                    <InputContainer>
                         <i class='bx bx-search'></i>
                        <Input type='text' placeholder='Search here'/>
                    </InputContainer>
                </ContainerInput>
                <FriendContainer>
                    <FriendImag>
                        <Image src={Ibrohim}/>
                        <H6> 
                            Robo Cop
                            <Span>Hey, you're arrested!</Span>
                        </H6>
                    </FriendImag>   
                    <FriendName>
                        <Time>
                            13:45
                        </Time>
                    </FriendName>
                </FriendContainer>
                <FriendContainer>
                    <FriendImag>
                        <Image src={Ibrohim}/>
                        <H6> 
                            Robo Cop
                            <Span>Hey, you're arrested!</Span>
                        </H6>
                    </FriendImag>   
                    <FriendName>
                        <Time>
                            13:45
                        </Time>
                    </FriendName>
                </FriendContainer>
                <FriendContainer>
                    <FriendImag>
                        <Image src={Ibrohim}/>
                        <H6> 
                            Robo Cop
                            <Span>Hey, you're arrested!</Span>
                        </H6>
                    </FriendImag>   
                    <FriendName>
                        <Time>
                            13:45
                        </Time>
                    </FriendName>
                </FriendContainer>
                <FriendContainer>
                    <FriendImag>
                        <Image src={Ibrohim}/>
                        <H6> 
                            Robo Cop
                            <Span>Hey, you're arrested!</Span>
                        </H6>
                    </FriendImag>   
                    <FriendName>
                        <Time>
                            13:45
                        </Time>
                    </FriendName>
                </FriendContainer>
                <FriendContainer>
                    <FriendImag>
                        <Image src={Ibrohim}/>
                        <H6> 
                            Robo Cop
                            <Span>Hey, you're arrested!</Span>
                        </H6>
                    </FriendImag>   
                    <FriendName>
                        <Time>
                            13:45
                        </Time>
                    </FriendName>
                </FriendContainer>
                <FriendContainer>
                    <FriendImag>
                        <Image src={Ibrohim}/>
                        <H6> 
                            Robo Cop
                            <Span>Hey, you're arrested!</Span>
                        </H6>
                    </FriendImag>   
                    <FriendName>
                        <Time>
                            13:45
                        </Time>
                    </FriendName>
                </FriendContainer>
                <FriendContainer>
                    <FriendImag>
                        <Image src={Ibrohim}/>
                        <H6> 
                            Robo Cop
                            <Span>Hey, you're arrested!</Span>
                        </H6>
                    </FriendImag>   
                    <FriendName>
                        <Time>
                            13:45
                        </Time>
                    </FriendName>
                </FriendContainer>
                <FriendContainer>
                    <FriendImag>
                        <Image src={Ibrohim}/>
                        <H6> 
                            Robo Cop
                            <Span>Hey, you're arrested!</Span>
                        </H6>
                    </FriendImag>   
                    <FriendName>
                        <Time>
                            13:45
                        </Time>
                    </FriendName>
                </FriendContainer>
                <FriendContainer>
                    <FriendImag>
                        <Image src={Ibrohim}/>
                        <H6> 
                            Robo Cop
                            <Span>Hey, you're arrested!</Span>
                        </H6>
                    </FriendImag>   
                    <FriendName>
                        <Time>
                            13:45
                        </Time>
                    </FriendName>
                </FriendContainer>
            </SettingsTray>
            <SettingsRight>
                <Profile>
                    <ImgContainer>
                        <Img src={Ibrohim}/>
                        <SpanContainer>
                            <SpanName>
                                Robo Cop
                            </SpanName>
                            <SpanText>
                                Layn' down the law since like before chirst...
                            </SpanText>
                        </SpanContainer>
                    </ImgContainer>
                    <Icon>
                        <i class='bx bx-rotate-left'></i>
                        <i class='bx bx-chat'></i>
                        <i class='bx bx-menu'></i>
                    </Icon>
                </Profile>
                <Centr>
                    <Left>
                        
                    </Left>
                    <Right></Right>
                </Centr>
                <Fotter>
                    <Smaylik href="#">
                    <i class='bx bx-smile'></i>
                    </Smaylik>
                    <InputBox>
                        <InputMessage type='text' placeholder='Type your message here...'/>
                    </InputBox>
                    <SmaylikBox href="#">
                    <i class='bx bxs-microphone-alt'></i>
                    </SmaylikBox>
                    <SmaylikBox href="#">
                    <i class='bx bx-send'></i>
                    </SmaylikBox>
                </Fotter>
            </SettingsRight>
           </ContainerInner>
       </Container>
    )
}

export default MessagePage;
