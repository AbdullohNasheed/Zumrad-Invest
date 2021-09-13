import styled from "styled-components";

export const DeliveryCont = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

export const DeliveryHeader = styled.header`
  width: 90%;
  height: 70px;
  display: flex;
  align-items: flex-start;
`;

export const HeaderMenu = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
`;

export const HeaderElement = styled.a`
  width: 210px;
  height: 35px;
`;

export const HeaderElementImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MenuComp = styled.li`
  margin-left: 30px;
`;

export const MenuItem = styled.a`
  color: #000;
  font-weight: 300;
  text-decoration: none;
`;

export const SearchComp = styled.div`
  width: 140px;
  height: 20px;
  padding: 5px;
  display: flex;
  margin-left: 20px;
  align-items: center;
`;

export const SearchImgLink = styled.a`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
`;

export const SearchImg = styled.img`
  width: 15px;
  height: 15px;
`;

export const MenuSearch = styled.input`
  width: 110px;
  height: 20px;
  color: #000;
  border: none;
  outline: none;
  margin-left: 10px;
  border-bottom: 1px solid #000;
`;

export const EmptyComp = styled.div`
  width: 140px;
  height: 100%;
`;

export const CallComp = styled.div`
  width: 140px;
  display: flex;
  font-size: 14px;
  align-items: center;
`;

export const PhoneImg = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

export const WishList = styled.a`
  width: 20px;
  height: 20px;
  display: flex;
  margin-left: 40px;
  align-items: center;
`;

export const WishListImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const UserComp = styled.a`
  width: 20px;
  height: 20px;
  display: flex;
  margin-left: 40px;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const InnerMenu = styled.div`
  width: 90%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const InnerItems = styled.li`
  height: 40px;
  display: flex;
  list-style: none;
  margin-right: 90px;
  align-items: center;
  border-top: 1px solid #000;
  justify-content: space-between;
`;

export const InnerImg = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 15px;
`;

export const InnerItem = styled.a`
  color: #000;
`;

export const DeliverySection = styled.section`
  width: 90%;
  height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

export const SelectedItem = styled.div`
  width: 95%;
  height: 70vh;
  display: flex;
`;
export const ItemImg = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgSrc = styled.img`
  width: 60%;
  height: 80%;
`;

export const ItemDoc = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ItemName = styled.h1`
  font-weight: 600;
  margin-bottom: 30px;
`;

export const ItemPrice = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.h2`
  font-weight: 400;
  color: #414141;
  margin-right: 50px;
`;

export const BuyButton = styled.button`
  width: 120px;
  height: 35px;
  border: none;
  margin-right: 50px;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;
  background-color: #245462;
  &:hover {
    width: 130px;
    transition: 0.2s;
  }
`;

export const LikedItem = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LikeImg = styled.img`
  width: 25px;
  height: 25px;
`;

export const NumComp = styled.div`
  width: 360px;
  height: 70px;
  display: flex;
  margin-top: 30px;
  /* margin-left: 2px; */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`;

export const ItemNumber = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2px;
`;

export const ItemNum = styled.input`
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  border-bottom: 1px solid #000;
  font-size: 24px;
`;

export const ItemSize = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Size = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 2px;
  border-bottom: 1px solid #000;
`;
export const ItemCharacteristic = styled.div`
  width: 95%;
  height: 50vh;
`;
