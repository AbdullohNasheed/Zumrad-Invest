import React, { useEffect } from "react";
import Reklama from "../../../../assets/images/IMG_4854.JPG";
import {
  Products,
  ProductsInner,
  Table,
  Tr,
  Td,
  Image,
  Container,
  Madel,
  Span,
  SpanOne,
  Price,
  Time,
  Icon,
  Icon1,
  Icon2,
  Containner,
  All,
  TableAdd,
  Text,
} from "./style";
import Headers from "../../../../Components/Headers";
import { Link } from "react-router-dom";
import { requests } from "../../../../api/requests";

const ProductsPage = () => {
  let effect = async () => {
    try {
      let res = await requests.products.getProducts();
    } catch (error) {

    }
  }
  useEffect(() => {
    effect();
  }, [])
  return (
    <Products>
      <Headers />
      <All>
        <TableAdd>
          <Link to="/dashboard/products/add-new">
            <Text>
              ADD NEW
            </Text>
          </Link>
        </TableAdd>

      </All>
    </Products>
  );
};

export default ProductsPage;

{/* <Containner>
          <ProductsInner>
            <Table>
              <Tr>
                <Td>
                  <Container>
                    <Image src={Reklama} />
                  </Container>
                </Td>
                <Td>
                  <Madel>
                    <Span>309h</Span>
                    <SpanOne>Offesni Kresla</SpanOne>
                  </Madel>
                </Td>
                <Td>
                  <Price>
                    <Span>$500</Span>
                    <Time>16:37 PM</Time>
                  </Price>
                </Td>
              </Tr>
            </Table>
            <Icon>
              <Icon1>
                <i class="bx bx-edit"></i>
              </Icon1>
              <Icon2>
                <i class="bx bx-trash"></i>
              </Icon2>
            </Icon>
          </ProductsInner>
          <ProductsInner>
            <Table>
              <Tr>
                <Td>
                  <Container>
                    <Image src={Reklama} />
                  </Container>
                </Td>
                <Td>
                  <Madel>
                    <Span>309h</Span>
                    <SpanOne>Offesni Kresla</SpanOne>
                  </Madel>
                </Td>
                <Td>
                  <Price>
                    <Span>$500</Span>
                    <Time>16:37 PM</Time>
                  </Price>
                </Td>
              </Tr>
            </Table>
            <Icon>
              <Icon1>
                <i class="bx bx-edit"></i>
              </Icon1>
              <Icon2>
                <i class="bx bx-trash"></i>
              </Icon2>
            </Icon>
          </ProductsInner>
        </Containner>
        <Containner>
          <ProductsInner>
            <Table>
              <Tr>
                <Td>
                  <Container>
                    <Image src={Reklama} />
                  </Container>
                </Td>
                <Td>
                  <Madel>
                    <Span>309h</Span>
                    <SpanOne>Offesni Kresla</SpanOne>
                  </Madel>
                </Td>
                <Td>
                  <Price>
                    <Span>$500</Span>
                    <Time>16:37 PM</Time>
                  </Price>
                </Td>
              </Tr>
            </Table>
            <Icon>
              <Icon1>
                <i class="bx bx-edit"></i>
              </Icon1>
              <Icon2>
                <i class="bx bx-trash"></i>
              </Icon2>
            </Icon>
          </ProductsInner>
          <ProductsInner>
            <Table>
              <Tr>
                <Td>
                  <Container>
                    <Image src={Reklama} />
                  </Container>
                </Td>
                <Td>
                  <Madel>
                    <Span>309h</Span>
                    <SpanOne>Offesni Kresla</SpanOne>
                  </Madel>
                </Td>
                <Td>
                  <Price>
                    <Span>$500</Span>
                    <Time>16:37 PM</Time>
                  </Price>
                </Td>
              </Tr>
            </Table>
            <Icon>
              <Icon1>
                <i class="bx bx-edit"></i>
              </Icon1>
              <Icon2>
                <i class="bx bx-trash"></i>
              </Icon2>
            </Icon>
          </ProductsInner>
        </Containner>
        <Containner>
          <ProductsInner>
            <Table>
              <Tr>
                <Td>
                  <Container>
                    <Image src={Reklama} />
                  </Container>
                </Td>
                <Td>
                  <Madel>
                    <Span>309h</Span>
                    <SpanOne>Offesni Kresla</SpanOne>
                  </Madel>
                </Td>
                <Td>
                  <Price>
                    <Span>$500</Span>
                    <Time>16:37 PM</Time>
                  </Price>
                </Td>
              </Tr>
            </Table>
            <Icon>
              <Icon1>
                <i class="bx bx-edit"></i>
              </Icon1>
              <Icon2>
                <i class="bx bx-trash"></i>
              </Icon2>
            </Icon>
          </ProductsInner>
          <ProductsInner>
            <Table>
              <Tr>
                <Td>
                  <Container>
                    <Image src={Reklama} />
                  </Container>
                </Td>
                <Td>
                  <Madel>
                    <Span>309h</Span>
                    <SpanOne>Offesni Kresla</SpanOne>
                  </Madel>
                </Td>
                <Td>
                  <Price>
                    <Span>$500</Span>
                    <Time>16:37 PM</Time>
                  </Price>
                </Td>
              </Tr>
            </Table>
            <Icon>
              <Icon1>
                <i class="bx bx-edit"></i>
              </Icon1>
              <Icon2>
                <i class="bx bx-trash"></i>
              </Icon2>
            </Icon>
          </ProductsInner>
        </Containner> */}