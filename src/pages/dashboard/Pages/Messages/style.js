import styled from "styled-components";

const grey = '#eee'
const white = '#fff'
const greey = '#999'
const blue = '#74b9ff'
const color1 = '#11101d'
const color = '#1d1b31'
const input = 'fafafa'

export const Container= styled.div `
    display: flex;
    width: 100%;
    height: 100vh;
    align-content: center;
    justify-content: center;
    background: ${color};
`
export const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 25px;
    margin-left: 10px;
`
export const SettingsTray = styled.div`
    display: flex;
    width: 30%;
    flex-direction: column;
    border-right: 1.5px solid ${grey};
`
export const Profil = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: space-between;
    background: ${grey};
    align-items: center;
    border-radius: 5px;
`
export const Icon = styled.div`
    & i {
        font-size: 21px;
        color: ${greey};
        padding: 5px 10px;
        &:hover{
            color: ${blue};
            transition: 0.3s;
        }
    }
`
export const SettingsRight = styled.div`
    display: flex;
    width: 70%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
`
export const ContainerInner = styled.div`
    width: 90%;
    height: 90vh;
    display: flex;
    margin-top: 30px;
    background: ${white};
    border-radius: 7px;
` 
 export const ContainerInput = styled.div`
    display: flex;
    background: #fafafa;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;

`
export const Input = styled.input`
    outline: none;
    border: none;
    width: 88%;
    padding-left: 4px;
    &::placeholder {
        color: ${grey};
    }

`
export const InputContainer = styled.div`
    display: flex;
    background: ${white};
    height: 25px;
    width: 90%;
    border-radius: 12px;
    align-items: center;
    & i {
        border-radius: 12px;
        font-size: 18px;
        margin-left: 3px;
        color: ${greey};
    }
`
export const FriendContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    margin: 1px;
    justify-content: space-between;
    &:hover{
         H6,Span{
            color: ${white};
            font-weight: 500;
        }
        background: ${blue};
        cursor: pointer;
    }
`
export const FriendName = styled.div`
    width: 18%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 10px 15px;
    
`
export const FriendImag = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`
export const H6 = styled.h6`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    margin: 5px;
    height: 100%;
    width: 100%;
    border-bottom: 1px solid ${grey};
    justify-content: center;
`
export const Span = styled.span`
    font-size: 10px;
    color: ${greey};
    font-weight: 300;
    margin-top: 2px;
`
export const Time = styled.span`
    font-size: 12px;
    color: ${greey}
`

export const Profile = styled.div`
    display: flex;
    width: 100%;
    height: 10.5%;
    background: ${grey};
    align-items: center;
    border-radius: 5px;
    justify-content: space-between;
`
export const ImgContainer = styled.div`
    display:flex;
    align-items: center;
`

export const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin-left: 12px;
`
export const SpanContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 6px;
`
export const SpanName = styled.span`
    font-size: 14px;
    font-weight: 600;
`
export const SpanText = styled.span`
    font-size: 12px;
    margin-top: 2px;
    color: ${greey}
`
export const Fotter = styled.div`
    display: flex;
    width: 100%;
    height: 10.5%;
    align-items: center;
    justify-content: center;
    background-color: ${grey}
`
export const InputMessage = styled.input`
    width: 95%;
    height: 100%;
    margin-left: 2px; 
    border-radius: 15px;
    outline: none;
    border: none;
    font-size: 14px;
    &::placeholder {
        font-size: 13px;
        color: ${grey}
    }
`
export const InputBox = styled.div`
    display: flex;
    width: 60%;
    height: 26px;
    border-radius: 15px;
    justify-content: center;
    background: ${white}
`
export const Smaylik = styled.a`
        display: flex;
        margin-right: 50px;
    & i{
        color: ${greey};
        font-size: 25px;
    }
`
export const SmaylikBox = styled.a`
        display: flex;
        margin-left: 15px;
& i{
        color: ${greey};
        font-size: 25px;
       
    }
`

export const Centr = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`
export const Left = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
`
export const Right = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
`