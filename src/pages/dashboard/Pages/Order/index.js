import React from 'react'
import Headers from '../../../../Components/Headers';
import Image from'../../../../assets/images/photo_2021-08-04_10-05-31.jpg'
import Order from '../../../../assets/images/IMG_4825.JPG'
import {
 ContainerOrder,
 Customer,
 Data, 
 Time, 
 ID, 
 ContainerInner, 
 OrderList, 
 Text, 
 Id, 
 IdText, 
 OrderIneer,  
 Img,
 DataBox,
 CustomerImg,
 ImgContainer,
 TextName,
 Span,
 SpanInner,
 Price,
 OrderFooter,
 Footer,
 PriceIcon,
 PriceOrder,
 PriceName,
 Icon,
 Icon1,
 TextNamee,
 ImgContainerr,
 Color,
 ColorOne,
 OrderOne,
} from'./style'

const OrderPage = () => {

    return(
        <ContainerOrder>
           <Headers/>
           <ContainerInner>
                <OrderList>
                   <Text>ORDER LIST</Text>
                </OrderList>
                <Id>
                    <IdText><Color><i class='bx bx-check'></i></Color>#345</IdText>
                    <IdText><ColorOne><i class='bx bx-x'></i></ColorOne>#346</IdText>
                    {/* <IdText><Color><i class='bx bx-check'></i></Color>#347</IdText> */}
                    <IdText><Color><i class='bx bx-check'></i></Color>#348</IdText>
                    <IdText><ColorOne><i class='bx bx-x'></i></ColorOne>#349</IdText>
                    <IdText><Color><i class='bx bx-check'></i></Color>#350</IdText>
                    <IdText><ColorOne><i class='bx bx-x'></i></ColorOne>#351</IdText>
                    <IdText><ColorOne><i class='bx bx-x'></i></ColorOne>#352</IdText>
                    <IdText><Color><i class='bx bx-check'></i></Color>#353</IdText>
                    <IdText><ColorOne><i class='bx bx-x'></i></ColorOne>#345</IdText>
                </Id>
                <OrderOne>
                <OrderIneer>
                    <Customer>
                    <Data>
                        <DataBox>
                            <ID>Order #351</ID>
                            <Time>23 Feb 2021, 08:28 PM</Time>
                        </DataBox>
                        <CustomerImg src={Image}/>
                    </Data>
                       <ImgContainer>
                            <Img src={Order}/> 
                                <TextName>
                                    Kresla 245h
                                    <Span>Kresla Fritters With Egg</Span>
                                    <Price>
                                        $45
                                        <SpanInner>
                                            Qty: 1
                                       </SpanInner>
                                    </Price>
                                </TextName>  
                       </ImgContainer>
                       <ImgContainerr>
                            <Img src={Order}/>  
                            <TextNamee>
                                    Kresla 245h
                                    <Span>Kresla Fritters With Egg</Span>
                                    <Price>
                                        $45
                                        <SpanInner>
                                            Qty: 1
                                       </SpanInner>
                                    </Price>
                                </TextNamee>   
                       </ImgContainerr>
                       <OrderFooter>
                             <Footer>
                                <PriceOrder>
                                    X2 items
                                    <PriceName>
                                          $90
                                    </PriceName>
                                </PriceOrder>
                                <PriceIcon>
                                    <Icon1>
                                    <i class='bx bx-x'></i>
                                    </Icon1>
                                    <Icon>
                                    <i class='bx bx-check'></i>
                                    </Icon>
                                </PriceIcon>
                            </Footer>   
                        </OrderFooter>
                    </Customer>
                    <Customer>
                    <Data>
                        <DataBox>
                            <ID>Order #351</ID>
                            <Time>23 Feb 2021, 08:28 PM</Time>
                        </DataBox>
                        <CustomerImg src={Image}/>
                    </Data>
                       <ImgContainer>
                            <Img src={Order}/> 
                                <TextName>
                                    Kresla 245h
                                    <Span>Kresla Fritters With Egg</Span>
                                    <Price>
                                        $45
                                        <SpanInner>
                                            Qty: 1
                                       </SpanInner>
                                    </Price>
                                </TextName>  
                       </ImgContainer>
                       <ImgContainerr>
                            <Img src={Order}/>  
                            <TextNamee>
                                    Kresla 245h
                                    <Span>Kresla Fritters With Egg</Span>
                                    <Price>
                                        $45
                                        <SpanInner>
                                            Qty: 1
                                       </SpanInner>
                                    </Price>
                                </TextNamee>   
                       </ImgContainerr>
                       <OrderFooter>
                             <Footer>
                                <PriceOrder>
                                    X2 items
                                    <PriceName>
                                          $90
                                    </PriceName>
                                </PriceOrder>
                                <PriceIcon>
                                    <Icon1>
                                    <i class='bx bx-x'></i>
                                    </Icon1>
                                    <Icon>
                                    <i class='bx bx-check'></i>
                                    </Icon>
                                </PriceIcon>
                            </Footer>   
                        </OrderFooter>
                    </Customer>
                    <Customer>
                    <Data>
                        <DataBox>
                            <ID>Order #351</ID>
                            <Time>23 Feb 2021, 08:28 PM</Time>
                        </DataBox>
                        <CustomerImg src={Image}/>
                    </Data>
                       <ImgContainer>
                            <Img src={Order}/> 
                                <TextName>
                                    Kresla 245h
                                    <Span>Kresla Fritters With Egg</Span>
                                    <Price>
                                        $45
                                        <SpanInner>
                                            Qty: 1
                                       </SpanInner>
                                    </Price>
                                </TextName>  
                       </ImgContainer>
                       <ImgContainerr>
                            <Img src={Order}/>  
                            <TextNamee>
                                    Kresla 245h
                                    <Span>Kresla Fritters With Egg</Span>
                                    <Price>
                                        $45
                                        <SpanInner>
                                            Qty: 1
                                       </SpanInner>
                                    </Price>
                                </TextNamee>   
                       </ImgContainerr>
                       <OrderFooter>
                             <Footer>
                                <PriceOrder>
                                    X2 items
                                    <PriceName>
                                          $90
                                    </PriceName>
                                </PriceOrder>
                                <PriceIcon>
                                    <Icon1>
                                    <i class='bx bx-x'></i>
                                    </Icon1>
                                    <Icon>
                                    <i class='bx bx-check'></i>
                                    </Icon>
                                </PriceIcon>
                            </Footer>   
                        </OrderFooter>
                    </Customer>
                    <Customer>
                    <Data>
                        <DataBox>
                            <ID>Order #351</ID>
                            <Time>23 Feb 2021, 08:28 PM</Time>
                        </DataBox>
                        <CustomerImg src={Image}/>
                    </Data>
                       <ImgContainer>
                            <Img src={Order}/> 
                                <TextName>
                                    Kresla 245h
                                    <Span>Kresla Fritters With Egg</Span>
                                    <Price>
                                        $45
                                        <SpanInner>
                                            Qty: 1
                                       </SpanInner>
                                    </Price>
                                </TextName>  
                       </ImgContainer>
                       <ImgContainerr>
                            <Img src={Order}/>  
                            <TextNamee>
                                    Kresla 245h
                                    <Span>Kresla Fritters With Egg</Span>
                                    <Price>
                                        $45
                                        <SpanInner>
                                            Qty: 1
                                       </SpanInner>
                                    </Price>
                                </TextNamee>   
                       </ImgContainerr>
                       <OrderFooter>
                             <Footer>
                                <PriceOrder>
                                    X2 items
                                    <PriceName>
                                          $90
                                    </PriceName>
                                </PriceOrder>
                                <PriceIcon>
                                    <Icon1>
                                    <i class='bx bx-x'></i>
                                    </Icon1>
                                    <Icon>
                                    <i class='bx bx-check'></i>
                                    </Icon>
                                </PriceIcon>
                            </Footer>   
                        </OrderFooter>
                    </Customer>
                </OrderIneer>
                </OrderOne>
           </ContainerInner>
        </ContainerOrder>
    )
}

export default OrderPage