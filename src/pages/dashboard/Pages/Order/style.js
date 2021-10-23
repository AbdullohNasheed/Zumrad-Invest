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

export const ContainerOrder = styled.body`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${dark};
`
export const ContainerInner = styled.div`
    display: flex;
    /* width: 100%;
    height: 100%; */
    flex-direction: column;
    align-items: center;
`
export const OrderList = styled.div`
    width: 95%;
    display: flex; 
    margin: 10px;
`
export const Text = styled.span`
    font-weight: 700;
    font-size: 15px;
    display: flex;
    color: ${white};
    
`
export const Id = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    color: ${white};
`
export const IdText = styled.span`
    padding: 10px 9px;
    display: flex;
    align-items: center;
    border: 1px solid #1d1d1d;
    border-radius: 5px;
    background: ${dark};
    -webkit-box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    -moz-box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    & i{
        margin-right: 10px;
        font-size: 25px;
    }

`
export const Color = styled.div`
    & i{
        color: ${gren}
    }
`
export const ColorOne = styled.div`
    & i{
        color: ${rose};
    }
`
export const OrderInner = styled.div`

`
export const Img = styled.img`
    width: 80px;
    height: 75px;
    margin-bottom: 4px;
    border-radius: 10px;
`
export const Data = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 6px 10px; 
`
export const ID = styled.span`
    font-size: 15px;
    font-weight: 600;
    color: ${white}
`
export const Time = styled.span`
    font-size: 12px;
    color: ${grey2}
`
export const OrderIneer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* flex-direction:column; */
`
export const OrderOne = styled.div`
    display: flex;
    align-items:center;
    width: 95%;
    flex-direction: column;
`
export const Customer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    margin-top: 5vh;
    -webkit-box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    -moz-box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    background: ${dark};
    
`
export const ImgContainer = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 6px 10px;

`
export const ImgContainerr = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 6px 10px;
    border-bottom: 1.5px solid ${blue};

`
export const DataBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1px;
`
export const CustomerImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin: 3px 4px;
`
export const TextName = styled.span`
    display: flex;
    flex-direction: column;
    border-bottom: 1.5px solid ${blue};
    width: 67%;
    font-size: 15px;
    font-weight: 600;
    padding-bottom: 10px;
    margin-left: 10px;
    color: ${white}
`
export const TextNamee = styled.span`
    display: flex;
    flex-direction: column;
    width: 67%;
    font-size: 15px;
    font-weight: 600;
    color: ${white};
    padding-bottom: 10px;
    margin-left: 10px;
`

export const Span = styled.span`
    font-size: 12px;
    font-weight: 500;
    margin:2px;
    color: ${grey2}
`
export const SpanInner = styled.span`

`
export const Price = styled.span`
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 12px;
    color: ${white};
    align-items: center;
`
export const OrderFooter = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`
export const Footer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 5px 9px;
`
export const PriceOrder = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 500;
    color: ${grey2};
`
export const PriceIcon = styled.div`
    display: flex;
    align-items: center;
`
export const PriceName = styled.span`
    font-size: 15px;
    font-weight: 600;
    margin: 2px;
    color: ${white}
`
export const Icon = styled.div`
    display: flex;
    width: 35px;
    height: 35px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    border: 2px solid ${gren};
    & i {
        font-size: 22px;
        color: ${gren};
    }
`
export const Icon1 = styled.div`
    display: flex;
    width: 35px;
    height: 35px;
    margin-right: 15px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    border: 2px solid${rose};
    & i {
        font-size: 22px;
        color: ${rose}
    }
`
