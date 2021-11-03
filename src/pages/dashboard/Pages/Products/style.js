import styled from "styled-components";

const white = '#fff'
const black = '#11101d'
const dark = '#1d1b31'
const darkgrey = '#2c2a3e'
const rose = '#FCC4C9'
const blue = '#2c3d63'
const blue2 = '#080e2c'
const grey = '#e7e7e7'
const grey2 = '#d2d1cf'
const gren = '#A2EEAE'

export const Products = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    background: ${dark}
`
export const Containner = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
export const All = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const TableAdd = styled.div`
    display: flex;
    width: 85%;
    justify-content: flex-end;
    margin-top: 20px;
`
export const Text = styled.div`
   width: 120px;
   height: 35px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 6px;
   color: ${white};
   font-size: 14px; 
   -webkit-box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    -moz-box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
`
export const ProductsInner = styled.div`
    display: flex;
    width: 45%;
    border-radius: 12px;
    -webkit-box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    -moz-box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    justify-content: space-between;
`
export const Table = styled.table`
 padding: 10px 15px;
`
export const Icon1 = styled.a`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 10px 10px;
    border:1.5px solid ${gren};
    & i {
        font-size: 20px;
        color: ${gren};
    }
`
export const Icon2 = styled.a`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 10px 10px;
    border:1.5px solid ${rose};
    & i {
        font-size: 20px;
        color: ${rose};
    }
`
export const Icon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Tr = styled.tr`

`
export const Td = styled.td`

`
export const Container = styled.div`
    display: flex;
`
export const Price = styled.div`
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
`
export const Time = styled.div`
    margin-top: 2px;
    border-bottom: 1.5px solid ${blue};
    color: ${grey2};
    font-size: 14px;
    padding-bottom: 5px;
`
export const Image = styled.img`
    width: 100px;
    height: 110px;
    border-radius: 10px;
`
export const Madel = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
`
export const Span = styled.span`
    color: ${white};
    font-size: 18px;
`
export const SpanOne = styled.span`
    margin-top: 2px;
    color: ${grey2};
    font-size: 14px;
    border-bottom: 1.5px solid ${blue};
    padding-bottom: 5px;

`