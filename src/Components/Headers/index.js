import { Header, Name, AdminName, Img} from './style'
import React from 'react'
import AdminImage from '../../assets/images/photo_2021-08-04_10-05-31.jpg'

function Headers() {
    return (
        <Header>
            <Name>Ibrohim<AdminName>Admin</AdminName></Name>
            <Img src={AdminImage}/>
        </Header>
    )
}

export default Headers
