import React from 'react'
import Reklama from '../../../../assets/images/IMG_4854.JPG'
import {
 Products, 
 ProductsInner,
 Table,
 Tr,
 Td,
 Image,
 Container,
 Madel,
 Span,
 SpanOne,
 Price,
 Time,
 Icon,
 Icon1,
 Icon2,
 Containner,
 All,
} from'./style'
import Headers from '../../../../Components/Headers';

const ProductsPage = () => {
    return(
        <Products>
            <Headers/>
            <All>
            <Containner>
           <ProductsInner>
                <Table>
                    <Tr>
                        <Td>
                        <Container>
                            <Image src={Reklama}/>
                        </Container>
                        </Td>
                        <Td>
                            <Madel>
                               <Span>309h</Span>
                               <SpanOne>Offesni Kresla</SpanOne>
                            </Madel>
                        </Td>
                        <Td>
                            <Price>
                            <Span>
                                $500
                            </Span>
                            <Time>16:37 PM</Time>
                            </Price>
                        </Td>
                    </Tr>
                </Table>
                <Icon>
                 <Icon1><i class='bx bx-edit'></i></Icon1>
                 <Icon2><i class='bx bx-trash'></i></Icon2>
                </Icon>
            </ProductsInner>
            <ProductsInner>
                <Table>
                    <Tr>
                        <Td>
                        <Container>
                            <Image src={Reklama}/>
                        </Container>
                        </Td>
                        <Td>
                            <Madel>
                               <Span>309h</Span>
                               <SpanOne>Offesni Kresla</SpanOne>
                            </Madel>
                        </Td>
                        <Td>
                            <Price>
                            <Span>
                                $500
                            </Span>
                            <Time>16:37 PM</Time>
                            </Price>
                        </Td>
                    </Tr>
                </Table>
                <Icon>
                 <Icon1><i class='bx bx-edit'></i></Icon1>
                 <Icon2><i class='bx bx-trash'></i></Icon2>
                </Icon>
            </ProductsInner>
           </Containner>
           <Containner>
           <ProductsInner>
                <Table>
                    <Tr>
                        <Td>
                        <Container>
                            <Image src={Reklama}/>
                        </Container>
                        </Td>
                        <Td>
                            <Madel>
                               <Span>309h</Span>
                               <SpanOne>Offesni Kresla</SpanOne>
                            </Madel>
                        </Td>
                        <Td>
                            <Price>
                            <Span>
                                $500
                            </Span>
                            <Time>16:37 PM</Time>
                            </Price>
                        </Td>
                    </Tr>
                </Table>
                <Icon>
                 <Icon1><i class='bx bx-edit'></i></Icon1>
                 <Icon2><i class='bx bx-trash'></i></Icon2>
                </Icon>
            </ProductsInner>
            <ProductsInner>
                <Table>
                    <Tr>
                        <Td>
                        <Container>
                            <Image src={Reklama}/>
                        </Container>
                        </Td>
                        <Td>
                            <Madel>
                               <Span>309h</Span>
                               <SpanOne>Offesni Kresla</SpanOne>
                            </Madel>
                        </Td>
                        <Td>
                            <Price>
                            <Span>
                                $500
                            </Span>
                            <Time>16:37 PM</Time>
                            </Price>
                        </Td>
                    </Tr>
                </Table>
                <Icon>
                 <Icon1><i class='bx bx-edit'></i></Icon1>
                 <Icon2><i class='bx bx-trash'></i></Icon2>
                </Icon>
            </ProductsInner>
           </Containner>
           <Containner>
           <ProductsInner>
                <Table>
                    <Tr>
                        <Td>
                        <Container>
                            <Image src={Reklama}/>
                        </Container>
                        </Td>
                        <Td>
                            <Madel>
                               <Span>309h</Span>
                               <SpanOne>Offesni Kresla</SpanOne>
                            </Madel>
                        </Td>
                        <Td>
                            <Price>
                            <Span>
                                $500
                            </Span>
                            <Time>16:37 PM</Time>
                            </Price>
                        </Td>
                    </Tr>
                </Table>
                <Icon>
                 <Icon1><i class='bx bx-edit'></i></Icon1>
                 <Icon2><i class='bx bx-trash'></i></Icon2>
                </Icon>
            </ProductsInner>
            <ProductsInner>
                <Table>
                    <Tr>
                        <Td>
                        <Container>
                            <Image src={Reklama}/>
                        </Container>
                        </Td>
                        <Td>
                            <Madel>
                               <Span>309h</Span>
                               <SpanOne>Offesni Kresla</SpanOne>
                            </Madel>
                        </Td>
                        <Td>
                            <Price>
                            <Span>
                                $500
                            </Span>
                            <Time>16:37 PM</Time>
                            </Price>
                        </Td>
                    </Tr>
                </Table>
                <Icon>
                 <Icon1><i class='bx bx-edit'></i></Icon1>
                 <Icon2><i class='bx bx-trash'></i></Icon2>
                </Icon>
            </ProductsInner>
           </Containner>
            </All>
        </Products>
    )
}

export default ProductsPage