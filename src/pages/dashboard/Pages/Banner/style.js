import styled from "styled-components";

const white = '#fff'
const black = '#11101d'
const dark  = '#1d1b31'
const darkgrey = '#2c2a3e'
const rose = '#FCC4C9'
const blue = '#2c3d63'
const blue2 = '#080e2c'
const grey = '#e7e7e7'
const grey2 = '#d2d1cf'
const gren = '#A2EEAE'

export const Banner = styled.body`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${dark};
    align-items: center;
`
export const All = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
`
export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    
`
export const BannerContainer = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    -webkit-box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    -moz-box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    border: 1px solid ${black};
`
export const ImageBox = styled.div`
    width: 100%;
    display: flex;
`
export const Img = styled.img`
    width: 100%;
    height: 60vh;

`
export const BannerDiv = styled.div`
    display: flex;
    flex-direction: column;
`
export const Title = styled.div`
    display: flex;
    flex-direction:column;
    padding: 20px 15px;
`
export const Span = styled.span`
    display: flex;
    justify-content: space-between;
    font-size: 25px;
    font-weight: 600;
    align-items: flex-end;
    padding-left: 10px;
    color: ${white};
`
export const SpanTitle = styled.span`
    font-size: 18px;
    padding: 4px 10px;
    color: ${grey};
    font-weight: 500;
`
export const IconBox = styled.a`
    display: flex;
    & i{
        :hover{
            color: ${white};
            transition: all 0.4s ease;
        }
    }
`
export const Icon = styled.a`
    width: 30px;
    height: 30px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px 10px;
    & i {
        font-size: 30px;
        color: ${gren};
    }
`
export const IconOne = styled.a`
     width: 30px;
    height: 30px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px 10px;
    & i {
        font-size: 30px;
        color: ${rose};
    }
`