import styled from "styled-components";
const white = '#fff'
const IconColor = '#999'
const SpanColor = '#1d1b31'
const SpanColor2 = '#11101d'

export const Dashboard = styled.div`
    width: 100%;
    height: 100vh;
    background: ${SpanColor}
`
export const CardBox = styled.div`
    width:100%;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 30px;
`
export const Card = styled.div`
    position: relative;
    padding: 24px;
    -webkit-box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    -moz-box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    background: ${SpanColor};
    &:hover{
        div,i{
            color: ${SpanColor2};
        }
        background: ${white};
        transition: 0.2s;
    }
`
export const IconBox = styled.div`
    & i{
        font-size: 3.5em;
        color: ${white};
    }
`
export const Numbers = styled.div`
    position: relative;
    font-weight: 500;
    font-size: 2.5em;
    color: ${white};
`
export const CardName = styled.div`
    color: ${white};
    font-size: 1.1em;
    margin-top: 5px;
`
// Recent Order.......

export const Details = styled.div`
    position: relative;
    width: 100%;
    padding:20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 30px;
    margin-top: 10px;
`
export const RecentOrder = styled.div`
   position:relative;
   display: grid;
   min-height: 370px;
   background: ${SpanColor};
   padding: 20px;
   -webkit-box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
-moz-box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
   border-radius: 20px;
`
export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`
export const H2 = styled.h2`
    font-weight: 600;
    color: ${white};
`  
export const A = styled.a`
    position: relative;
    padding: 5px 10px;
    background: ${SpanColor2};
    color: #fff;
    border-radius: 6px;
`
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
`
export const Trr = styled.td`
    font-weight: 600;
    padding: 10px;
    &:last-child{
        text-align: end;
    }
`
export const Thead = styled.thead`
`
export const Tr = styled.tr`
    color: ${white};
    /* border-bottom: 0.5px solid ${IconColor}; */
    padding: 10px;
`
export const Td = styled.td`
    padding: 10px;
    &:last-child{
        text-align: end;
    }
`
export const Tbody = styled.tbody`
 &:hover{
     background: ${white};
     Td {
         color: ${SpanColor};
     }
 }
`
export const Span = styled.span`
    padding: 2px 4px;
    background: #8de02c;
    color: ${white};
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
`
export const Pending = styled.span`
    padding: 2px 4px;
    background: #f00;
    color: ${white};
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
`
export const Return = styled.span`
    padding: 2px 4px;
    background: #f9ca4f;
    color: ${white};
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
`
export const InProgress = styled.span`
    padding: 2px 4px;
    background: #1795ce;
    color: ${white};
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
`
// New Customers.......

export const RecentCustomer = styled.div`
    position: relative;
    display: grid;
    min-height: 400px;
    padding: 20px;
    -webkit-box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    -moz-box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    box-shadow: 8px 0px 13px 7px rgba(1, 8, 14, 0.2);
    border-radius: 20px;
    background: ${SpanColor};
`
export const CustomersTable = styled.table`
  border-collapse: collapse;
`
export const CustomersTd = styled.td`
 width: 60px;
`
export const CustomersTr = styled.tr`
 &:hover{
         
         background: ${white};
         color: ${SpanColor2};
         span,H4 {
             color: ${SpanColor2}
         }
      }
`
export const ImgBox  = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 7px;
`
export const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const TdCustomers = styled.td`

`
export const H4 = styled.h4`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.3em;
    color: ${white};
`
export const CustomersSpan = styled.span`
    font-size: 14px;
    color: ${white}
`