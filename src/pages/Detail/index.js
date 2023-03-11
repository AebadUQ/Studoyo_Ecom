import React, { useEffect, useState } from "react";
import { Row, Col, Image, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { DELETE, DECQUANTITY, INCQUANTITY } from "../../redux/actions/action";
import { DeleteFilled, StarOutlined } from "@ant-design/icons";
import subIcon from "../../assets/images/minus.png";
import addIcon from "../../assets/images/addition.png";

import { Colors } from "../../constant/theme";
import styled from "styled-components";
const Heading = styled.p`
  color: ${Colors?.black};
  font-weight: 400;
  font-size: 32px;
  margin: 0;
`;
const Subheading = styled.p`
  color: ${Colors?.black};
  font-weight: bold;
  font-size: 18px;
  text-align: right;
`;
const Description = styled.p`
  color: ${Colors?.black};
  font-weight: 400;
  font-size: 22px;
  /* text-align:right; */
`;
const QuanHeading = styled.p`
  color: ${Colors?.black};
  font-weight: 500;
  font-size: 18px;
`;
const Content = styled.div`
  padding-inline: 3rem;
  padding-top: 3rem;
`;
const CardsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const total = useSelector((state) => state.cardReducer.total);

  const [data, setData] = useState([]);
  const getdata = useSelector((state) => state?.cardReducer?.carts);
  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e?.id == id;
    });
    setData(comparedata);
  };
  useEffect(() => {
    compare();
  }, [getdata]);

  const dispatch = useDispatch();
  const del = (id) => {
    dispatch(DELETE(id));
    navigate("/");
  };
  const quantityDec = (item) => {
    dispatch(DECQUANTITY(item));
  };
  const quantityInc = (item) => {
    dispatch(INCQUANTITY(item));
  };
  return (
    <>
      {data?.map((ele) => {
        return (
          <Row justify={"center"} style={{ height: "90vh" }} align="middle">
            <Col xs={20} sm={20} md={22} lg={22} xl={20} xxl={14}>
              <Row
                style={{
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                  borderRadius: "8px",
                  padding: "16px",
                  background: "#fff",
                  marginBottom: "16px",
                }}
              >
                <Col xs={24} sm={24} md={12} lg={10} xl={8} xxl={6} >
                  <Image src={ele?.imgdata} width={"100%"} height={'100%'} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={14} xl={16} xxl={18}>
                  <Content>
                    <Row>
                      <Col xs={21} sm={21} md={21} lg={21} xl={21} xxl={21}>
                        <Heading>{ele?.title}</Heading>
                      </Col>
                      <Col
                        xs={3}
                        sm={3}
                        md={3}
                        lg={3}
                        xl={3}
                        xxl={3}
                        style={{
                          paddingTop: "0.5rem",
                        }}
                      >
                        <Subheading>${ele?.price * ele?.qnty}</Subheading>
                      </Col>
                    </Row>
                    <Row>
                      <p
                        style={{ color: Colors?.secondary, fontWeight: "400" }}
                      >
                        {" "}
                        In Stock
                      </p>
                    </Row>

                   
                    <Row>
                      <Button
                        icon={<StarOutlined />}
                        style={{
                          backgroundColor: Colors?.secondary,
                          color: "white",
                          borderRadius: 4,
                        }}
                      >
                        {ele?.rating}
                      </Button>
                      <Button
                        onClick={() => del(ele?.id)}
                        icon={
                          <DeleteFilled
                            style={{ fontSize: 22, color: "black" }}
                          />
                        }
                        style={{ border: "0px" }}
                      />
                    </Row>
                    <Description>{ele?.description}</Description>

                    <Row>
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        xxl={12}
                      ></Col>
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        xxl={12}
                      ></Col>
                    </Row>

                    <Row justify={"start"}>
                      <Col xs={8} sm={6} md={8} lg={4} xl={3} xxll={3} >
                        {/* <QuanHeading>
                          Total: {ele?.price * ele?.qnty}
                        </QuanHeading> */}
                        <Row justify={"space-between"}>
                        
                         
                          <Image
                            src={subIcon}
                            onClick={
                              ele?.qnty <= 1
                                ? () => del(ele?.id)
                                : () => quantityDec(ele)
                            }
                            width={24}
                            height={24}
                            preview={false}
                          />
                          <Subheading>{ele?.qnty}</Subheading>
                          <Image
                            src={addIcon}
                            onClick={() => quantityInc(ele)}
                            width={24}
                            height={24}
                            preview={false}
                          />
                          
                        </Row>
                      </Col>
                    </Row>
                  </Content>
                </Col>
              </Row>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default CardsDetails;
