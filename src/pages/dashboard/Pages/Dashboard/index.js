import React from 'react'
import Ibrohim from "../../../../assets/images/photo_2021-08-04_10-05-31.jpg"

import {
Dashboard,
CardBox,
Card,
Numbers,
CardName,
IconBox,
Details,
RecentOrder,
CardHeader,
H2,
A,
Table,
Thead,
Tr,
Trr,
Td,
Tbody,
Span,
Pending,
Return,
InProgress,
RecentCustomer,
CustomersTable,
CustomersTd,
CustomersTr,
ImgBox,
TdCustomers,
Img,
H4,
CustomersSpan,
} from'../Dashboard/style'

const DashboardPage = () => {

    return(
        <Dashboard>
              <CardBox>
                <Card>
                    <div>
                    <Numbers>284</Numbers>
                    <CardName>Products</CardName>
                    </div>
                    <IconBox><i class='bx bx-basket'></i></IconBox>
                </Card>
                <Card>
                    <div>
                    <Numbers>80</Numbers>
                    <CardName>Order</CardName>
                    </div>
                    <IconBox><i class='bx bx-cart-alt'></i></IconBox>
                </Card>
                <Card>
                    <div>
                    <Numbers>52</Numbers>
                    <CardName>Messages</CardName>
                    </div>
                    <IconBox><i class='bx bx-chat'></i></IconBox>
                </Card>
                <Card>
                    <div>
                    <Numbers>7854$</Numbers>
                    <CardName>Earning</CardName>
                    </div>
                    <IconBox><i class='bx bx-dollar-circle'></i></IconBox>
                </Card>
              </CardBox>
              <Details>
                    <RecentOrder>
                        <CardHeader>
                            <H2>Recent Order</H2>
                            <A href="#">View All</A>
                        </CardHeader>
                        <Table>
                            <Thead>
                                <Tr>
                                    <Trr>Name</Trr>
                                    <Trr>Price</Trr>
                                    <Trr>Payment</Trr>
                                    <Trr>Status</Trr>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>309h Mebel</Td>
                                    <Td>1200$</Td>
                                    <Td>Paid</Td>
                                    <Td><Span>Delivered</Span></Td>
                                </Tr>
                            </Tbody>
                            <Tbody>
                                <Tr>
                                    <Td>309h kreslo</Td>
                                    <Td>780$</Td>
                                    <Td>Due</Td>
                                    <Td><Pending>Pending</Pending></Td>
                                </Tr>
                            </Tbody>
                            <Tbody>
                                <Tr>
                                    <Td>309h kreslo</Td>
                                    <Td>650$</Td>
                                    <Td>paid</Td>
                                    <Td><Return>Return</Return></Td>
                                </Tr>
                            </Tbody>
                            <Tbody>
                                <Tr>
                                    <Td>309h kreslo</Td>
                                    <Td>200$</Td>
                                    <Td>Due</Td>
                                    <Td><InProgress>In Progress</InProgress></Td>
                                </Tr>
                            </Tbody>
                            <Tbody>
                                <Tr>
                                    <Td>309h kreslo</Td>
                                    <Td>380$</Td>
                                    <Td>paid</Td>
                                    <Td><Span>Delivered</Span></Td>
                                </Tr>
                            </Tbody>
                            <Tbody>
                                <Tr>
                                    <Td>309h kreslo</Td>
                                    <Td>150$</Td>
                                    <Td>paid</Td>
                                    <Td><Pending>Pending</Pending></Td>
                                </Tr>
                            </Tbody>
                            <Tbody>
                                <Tr>
                                    <Td>309h kreslo</Td>
                                    <Td>150$</Td>
                                    <Td>paid</Td>
                                    <Td><InProgress>In Progress</InProgress></Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </RecentOrder>
                    <RecentCustomer>
                        <CardHeader>
                            <H2>Recent Customers</H2>
                        </CardHeader>
                    <CustomersTable>
                        <CustomersTr>
                            <CustomersTd>
                                <ImgBox>
                                     <Img src={Ibrohim}/>
                                </ImgBox>
                            </CustomersTd>
                            <TdCustomers>
                                <H4>
                                    Muhammadeyev
                                    <br/> 
                                    <CustomersSpan>
                                    Ibrohim
                                    </CustomersSpan>
                                </H4>
                            </TdCustomers>
                        </CustomersTr>
                        <CustomersTr>
                            <CustomersTd>
                                <ImgBox>
                                     <Img src={Ibrohim}/>
                                </ImgBox>
                            </CustomersTd>
                            <TdCustomers>
                                <H4>
                                    Muhammadeyev
                                    <br/> 
                                    <CustomersSpan>
                                    Ibrohim
                                    </CustomersSpan>
                                </H4>
                            </TdCustomers>
                        </CustomersTr>
                        <CustomersTr>
                            <CustomersTd>
                                <ImgBox>
                                     <Img src={Ibrohim}/>
                                </ImgBox>
                            </CustomersTd>
                            <TdCustomers>
                                <H4>
                                    Muhammadeyev
                                    <br/> 
                                    <CustomersSpan>
                                    Ibrohim
                                    </CustomersSpan>
                                </H4>
                            </TdCustomers>
                        </CustomersTr>
                        <CustomersTr>
                            <CustomersTd>
                                <ImgBox>
                                     <Img src={Ibrohim}/>
                                </ImgBox>
                            </CustomersTd>
                            <TdCustomers>
                                <H4>
                                    Muhammadeyev
                                    <br/> 
                                    <CustomersSpan>
                                    Ibrohim
                                    </CustomersSpan>
                                </H4>
                            </TdCustomers>
                        </CustomersTr>
                        <CustomersTr>
                            <CustomersTd>
                                <ImgBox>
                                     <Img src={Ibrohim}/>
                                </ImgBox>
                            </CustomersTd>
                            <TdCustomers>
                                <H4>
                                    Muhammadeyev
                                    <br/> 
                                    <CustomersSpan>
                                    Ibrohim
                                    </CustomersSpan>
                                </H4>
                            </TdCustomers>
                        </CustomersTr>
                        <CustomersTr>
                            <CustomersTd>
                                <ImgBox>
                                     <Img src={Ibrohim}/>
                                </ImgBox>
                            </CustomersTd>
                            <TdCustomers>
                                <H4>
                                    Muhammadeyev
                                    <br/> 
                                    <CustomersSpan>
                                    Ibrohim
                                    </CustomersSpan>
                                </H4>
                            </TdCustomers>
                        </CustomersTr>
                        <CustomersTr>
                            <CustomersTd>
                                <ImgBox>
                                     <Img src={Ibrohim}/>
                                </ImgBox>
                            </CustomersTd>
                            <TdCustomers>
                                <H4>
                                    Muhammadeyev
                                    <br/> 
                                    <CustomersSpan>
                                    Ibrohim
                                    </CustomersSpan>
                                </H4>
                            </TdCustomers>
                        </CustomersTr>
                    </CustomersTable>
                    </RecentCustomer>
                </Details>
        </Dashboard>
    )
}

export default DashboardPage