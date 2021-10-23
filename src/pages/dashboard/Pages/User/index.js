import React from 'react'
import Headers from '../../../../Components/Headers';
import {Body, OnlineCustomer, Table, TableBox, TableAdd, Td, Text, Tr, BoxImg, Img, Name, Span, A, AA, TableContainer, Input} from './style'
import Image from"../../../../assets/images/photo_2021-08-04_10-05-31.jpg"

const UserPage = () => {

    return(
        <Body>
            <Headers/>
            <OnlineCustomer>
                  <TableAdd>
                        <Text>ADD NEW</Text>
                  </TableAdd>
                  <TableBox>
                  <TableContainer>
                        <Table>
                            <Tr>
                                <Td><BoxImg><Img src={Image}/><Name>Muhammadeyev<Span>Ibrohim</Span></Name></BoxImg></Td>
                                <Td>+998(33)4601020</Td>
                            </Tr>
                        </Table>
                        <Input>
                            <A href="#">
                            <i class='bx bx-edit'></i>
                            </A>
                            <AA href="#">
                            <i class='bx bx-trash'></i>
                            </AA>
                        </Input>
                   </TableContainer>
                   <TableContainer>
                        <Table>
                            <Tr>
                                <Td><BoxImg><Img src={Image}/><Name>Muhammadeyev<Span>Ibrohim</Span></Name></BoxImg></Td>
                                <Td>+998(33)4601020</Td>
                            </Tr>
                        </Table>
                        <Input>
                            <A href="#">
                            <i class='bx bx-edit'></i>
                            </A>
                            <AA href="#">
                            <i class='bx bx-trash'></i>
                            </AA>
                        </Input>
                   </TableContainer>
                   <TableContainer>
                        <Table>
                            <Tr>
                                <Td><BoxImg><Img src={Image}/><Name>Muhammadeyev<Span>Ibrohim</Span></Name></BoxImg></Td>
                                <Td>+998(33)4601020</Td>
                            </Tr>
                        </Table>
                        <Input>
                            <A href="#">
                            <i class='bx bx-edit'></i>
                            </A>
                            <AA href="#">
                            <i class='bx bx-trash'></i>
                            </AA>
                        </Input>
                   </TableContainer>
                   <TableContainer>
                        <Table>
                            <Tr>
                                <Td><BoxImg><Img src={Image}/><Name>Muhammadeyev<Span>Ibrohim</Span></Name></BoxImg></Td>
                                <Td>+998(33)4601020</Td>
                            </Tr>
                        </Table>
                        <Input>
                            <A href="#">
                            <i class='bx bx-edit'></i>
                            </A>
                            <AA href="#">
                            <i class='bx bx-trash'></i>
                            </AA>
                        </Input>
                   </TableContainer>
                   <TableContainer>
                        <Table>
                            <Tr>
                                <Td><BoxImg><Img src={Image}/><Name>Muhammadeyev<Span>Ibrohim</Span></Name></BoxImg></Td>
                                <Td>+998(33)4601020</Td>
                            </Tr>
                        </Table>
                        <Input>
                            <A href="#">
                            <i class='bx bx-edit'></i>
                            </A>
                            <AA href="#">
                            <i class='bx bx-trash'></i>
                            </AA>
                        </Input>
                   </TableContainer>
                   <TableContainer>
                        <Table>
                            <Tr>
                                <Td><BoxImg><Img src={Image}/><Name>Muhammadeyev<Span>Ibrohim</Span></Name></BoxImg></Td>
                                <Td>+998(33)4601020</Td>
                            </Tr>
                        </Table>
                        <Input>
                            <A href="#">
                            <i class='bx bx-edit'></i>
                            </A>
                            <AA href="#">
                            <i class='bx bx-trash'></i>
                            </AA>
                        </Input>
                   </TableContainer>
                   
                  </TableBox>
            </OnlineCustomer>
        </Body>
    )
}

export default UserPage;