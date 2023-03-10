import { Menu, Dropdown, Badge, Drawer, Typography, Image } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Row, Col } from 'antd';
import { CheckOutlined ,EllipsisOutlined} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const HorizontalMenu = () => {
  const navigate = useNavigate();

  const getdata = useSelector((state) => state?.cardReducer?.carts);

  const [visible, setVisible] = useState(false);

  const cartMenu = (
    <>

      {getdata.length ? (
        <Row style={{ display: 'flex', flexDirection: 'column' }}>
          {getdata?.map((e) => {
            console.log(e)
            return (
              <Row style={{ backgroundColor: 'white',border:'1px solid red' }}>
                <Col xs={10} sm={10} md={10} lg={10} xl={10} xxl={10} style={{border:'1px solid red'}}>
                  <Image
                    src={e.imgdata}
                    style={{ width: "100%",objectFit:'cover' }}
                  />
                </Col>
                <Col xs={14} sm={14} md={14} lg={14} xl={14} xxl={14} style={{ paddingInline: '0.5rem' }}>
                  <Typography.Paragraph>{e?.title
                  }
                  </Typography.Paragraph>
                 <Row justify={"space-between"}>
                 <Typography.Paragraph>price: ${e?.price
                  }
                  </Typography.Paragraph>
                  
                  <Typography.Paragraph>quantity:   {e?.qnty
                  }
                  </Typography.Paragraph>
                  <button onClick={() => navigate(`/cart/${e?.id}`)}>...</button>
                 </Row>
                  
           

                </Col>
              </Row>
            );
          })}
        </Row>
      ) :

        <Paragraph>Your Studoyo Cart is empty</Paragraph>}
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
      <Menu mode="horizontal" style={{ background: 'linear-gradient(to left, #8538ed, #c4a6f8)', color: 'white' }}>
        <Menu.Item key="home" >
          Home
        </Menu.Item>
        <Menu.Item key="about">
          About Us
        </Menu.Item>
        <Menu.Item key="settings" >
          Settings
        </Menu.Item>
        <Menu.Item key="cart" icon={<Badge count={getdata?.length} style={{ fontSize: '10px', backgroundColor: '#FADA5E', color: 'black' }}><ShoppingCartOutlined style={{ fontSize: '22px', color: 'white' }} /></Badge>} onClick={showDrawer} style={{ marginLeft: 'auto' }}>

        </Menu.Item>

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