/* eslint-disable no-unused-vars */
import React, { useState,} from 'react'
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminImage from '../../assets/images/photo_2021-08-04_10-05-31.jpg'

import {
    DashboardCont,
    SidebarCont,
    MainCont,
    SidebarLogo,
    Search,
    Logo,
    Logobox,
    SearchInner,
    LogoName,
    SideBarMenu,
    SearchIcon,
    DashboardBar,
    IconText,
    Text,
    Admin,
    Image,
    Job,
    Name,
    Div,
    DivAdmin,
    ImageInner,
} from"./style"

import 'boxicons';

import DashboardPage from './Pages/Dashboard';
import OrderPage from './Pages/Order';
import ProductsPage from './Pages/Products';
import UserPage from './Pages/User';
import MessagePage from './Pages/Messages';
import BannerPage from'./Pages/Banner'


function Dashboard() {
    let { path,} = useRouteMatch()

    const [isShow, setIsShow] = useState(true);

    return (
        <DashboardCont>
            <SidebarCont isShow={isShow}>
                <SidebarLogo>
                    <Logo>
                        {isShow ? (
                            <Link to={`${path}/`}>
                                <Logobox>
                                    <i class='bx bxl-sketch'></i>
                                    <LogoName>Zumrad.Invest</LogoName>
                                </Logobox>
                            </Link>
                        ) : null}
                        <SideBarMenu onClick={() => setIsShow(!isShow)}>
                            <i class='bx bx-menu'></i>
                        </SideBarMenu>
                    </Logo>
                    <SearchInner>
                        <SearchIcon isHidden={!isShow}>
                            <i class='bx bx-search'></i>
                            {true ? (
                                <Search
                                    type='text'
                                    placeholder='Search...'
                                    isShow={isShow}
                                />
                            ) : null}
                        </SearchIcon>
                    </SearchInner>
                    <DashboardBar>
                        <Link to={`${path}/users`}>
                            <IconText isShow={isShow}>
                                <i class='bx bx-user'></i>
                                {isShow ? (
                                    <Text>User</Text>
                                ) : null}
                            </IconText>
                        </Link>
                        <Link to={`${path}/messages`}>
                            <IconText isShow={isShow}>
                                <i class='bx bx-chat' ></i>
                                {isShow ? (
                                    <Text>Messages</Text>
                                ) : null}
                            </IconText>
                        </Link>
                        <Link to={`${path}/products`}>
                            <IconText isShow={isShow}>
                                <i class='bx bx-basket'></i>
                                {isShow ? (
                                    <Text>Praducts</Text>
                                ) : null}
                            </IconText>
                        </Link>
                        <Link to={`${path}/orders`}>
                            <IconText isShow={isShow}>
                                <i class='bx bx-cart-alt' ></i>
                                {isShow ? (
                                    <Text>Order</Text>
                                ) : null}
                            </IconText>
                        </Link>
                        <Link to={`${path}/banner`}>
                            <IconText isShow={isShow}>
                                <i class='bx bx-images'></i>
                                {isShow ? (
                                    <Text>Banner</Text>
                                ) : null}
                            </IconText>
                        </Link>
                    </DashboardBar>
                </SidebarLogo>
                <Admin>
                    {isShow ? (
                        <DivAdmin>
                          <ImageInner>  
                            <Image src={AdminImage}/>
                          </ImageInner>
                            <Name>
                            Ibrohim
                            <Job>Admin</Job>
                            </Name>
                        </DivAdmin>
                    ) : null}
                <Div> <i class='bx bx-log-out'></i></Div>
                </Admin>
            </SidebarCont>
            <MainCont>
                <Switch>
                    <Route
                        exact
                        path={`${path}/`}
                        component={DashboardPage}
                    />
                    <Route
                        path={`${path}/users`}
                        component={UserPage}
                    />
                    <Route
                        path={`${path}/orders`}
                        component={OrderPage}
                    />
                    <Route
                        path={`${path}/products`}
                        component={ProductsPage}
                    />
                     <Route
                        path={`${path}/messages`}
                        component={MessagePage}
                    />
                     <Route
                        path={`${path}/banner`}
                        component={BannerPage}
                    />
                </Switch>
            </MainCont>
        </DashboardCont>
    )
}

export default Dashboard
