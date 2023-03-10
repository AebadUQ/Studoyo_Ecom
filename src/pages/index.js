import { Menu, Dropdown, Badge, Drawer, Typography, Image, Button,Divider } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { DeleteFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { Colors } from "../constant/theme";
import { DELETE } from "../redux/actions/action";
import styled from "styled-components";
const Heading = styled.p`
  color: ${Colors?.primary};
  font-weight: 500;
`;
const Subheading = styled.p`
  color: ${Colors?.black};
  font-weight: 500;
`;
const TotalHeading = styled.p`
  color: ${Colors?.black};
  font-weight: 500;
`;
const { Title, Paragraph, Text } = Typography;

const HorizontalMenu = () => {
  const navigate = useNavigate();

  const getdata = useSelector((state) => state?.cardReducer?.carts);
  const total = useSelector((state) => state.cardReducer.total);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const del = (id) => {
    dispatch(DELETE(id));
  };

  const cartMenu = (
    <>
      {getdata.length ? (
        <Row style={{ display: "flex", flexDirection: "column" }}>
          {getdata?.map((e) => {
            return (
              <Row style={{ backgroundColor: "white" ,padding:'1rem'}}>
                <Col xs={10} sm={10} md={10} lg={10} xl={10} xxl={10}>
                  <Image
                    src={e.imgdata}
                    style={{ width: "100%", objectFit: "cover",height:125 }}
                    preview={false}
                  />
                </Col>
                <Col
                  xs={14}
                  sm={14}
                  md={14}
                  lg={14}
                  xl={14}
                  xxl={14}
                  style={{ paddingInline: "0.5rem" }}
                >
                  <Heading>{e?.title} </Heading>

                  <Row justify={"space-between"}>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <Subheading>price: ${e?.price}</Subheading>

                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <Subheading> quantity: {e?.qnty}</Subheading>
                  
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <Button onClick={() => navigate(`/cart/${e?.id}`)}   style={{
            border: '1px solid #8538ed',
            color:'#8538ed',
            borderRadius: 4,
           
          }}>
                      View
                    </Button>

                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
                    <Button onClick={() => del(e?.id)} icon={<DeleteFilled style={{fontSize:22,color:'red'}} />} style={{border:'0px'}}/>
                    
                  
                
                  
                    </Col>
                  
                  </Row>
                </Col>
              </Row>
            );
          })}
          <Divider/>
          <Row justify={"end"}>
          <TotalHeading>Total ${total}</TotalHeading>
          </Row>
          <Divider/> 
        </Row>
      ) : (
        <Paragraph>Your Studoyo Cart is empty</Paragraph>
      )}
    </>
  );

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Menu
        mode="horizontal"
        style={{
          background: "linear-gradient(to left, #8538ed, #c4a6f8)",
          color: "white",
        }}
      >
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="about">About Us</Menu.Item>
        <Menu.Item key="settings">Settings</Menu.Item>
        <Menu.Item
          key="cart"
          icon={
            <Badge
              count={getdata?.length}
              style={{
                fontSize: "10px",
                backgroundColor: "#FADA5E",
                color: "black",
              }}
            >
              <ShoppingCartOutlined
                style={{ fontSize: "22px", color: "white" }}
              />
            </Badge>
          }
          onClick={showDrawer}
          style={{ marginLeft: "auto" }}
        ></Menu.Item>
      </Menu>
      <Drawer
        title="Studoyo Ecom"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        {cartMenu}
      </Drawer>
    </>
  );
};

export default HorizontalMenu;
