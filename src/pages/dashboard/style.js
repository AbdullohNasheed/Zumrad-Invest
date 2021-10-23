import styled from "styled-components";

const iconSize = 20;
const textSize = 16;

const white = '#fff';
const black = '#000';
const lightBlue = '#1d1b31';
const darkBlue = '#11101d';
const green = '#138632';

export const DashboardCont = styled.div`
    display: flex;
    flex-direction: row;
`

export const SidebarCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 16px 16px 16px;
    background: ${darkBlue};
    width: ${props => props.isShow ? 270 : 70}px;
    transition: all 0.5s  ease;
`
export const SidebarLogo = styled.div`
`

export const Logo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & i{
        color: ${green};
        background: ${darkBlue};
        font-size: ${iconSize}px;
    }
`

export const Logobox = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
`

export const LogoName = styled.span`
    color: ${white};
    margin-left: 6px;
    font-size: ${textSize}px;
`

export const SideBarMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & i{
        padding: 10px;     
        color: ${white};
        cursor: pointer;
        font-size: ${iconSize}px;
    }
`

export const SearchInner = styled.div`
    display: flex;
    margin-top: 1em;
    align-items: center;
`

export const SearchIcon = styled.div`
    color: ${white};
    display: flex;
    align-items: center;
    border-radius: 12px;
    background-color: ${lightBlue};
    
    &:hover{
        background-color: ${props =>
            props.isHidden ? white : lightBlue
        };

        & i {
            color: ${props =>
                props.isHidden ? black : white
            };
        }
    }

    & i{
        padding: 10px;
        color: ${white};
        text-align: center;
        font-size: ${iconSize}px;
    }
`

export const Search = styled.input`
    border: none;
    padding: ${props => props.isShow ? '10' : '0'}px;
    outline: none;
    color: ${white};
    font-size: ${textSize}px;
    border-radius: 12px;
    width: ${props => props.isShow ? '100%' : '0%'};
    background-color: transparent;
`

export const DashboardBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const IconText = styled.div`
    display: flex;
    color: ${white};
    margin-top: 16px;
    border-radius: 12px;
    align-items: center;
    transition: all 0.4s ease;

    &:hover {
        cursor: pointer;
        background-color: ${white};

        span, i {
            color: ${darkBlue};
        }
    }

    & i {
        padding: 10px;
        font-size: ${iconSize}px;
        align-items: center;
    }
`
export const Text = styled.span`
    /* margin-left: 8px; */
    font-size: ${textSize}px;
`
export const Admin = styled.div`
    display: flex;
    margin-top: 12px;
    align-items: center;
    border-radius: 12px;
    justify-content: space-between;
    background-color: ${lightBlue};

    & i{
        padding: 10px;
        color: ${white};
        cursor: pointer;
        font-size: ${iconSize}px;

    }
`
export const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 12px; 
`
export const ImageInner = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Name = styled.span`
    color: #fff;
    font-size: ${textSize}px;
    line-height: 22px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
export const Div = styled.div`
 display: flex;
 margin-right: 5px;
`
export const DivAdmin = styled.div`
 display: flex;
 align-items: center;
`
export const Job = styled.span`
 font-size: ${textSize}px;
`
export const MainCont = styled.div`
    display: flex;
    width: 100%;
`