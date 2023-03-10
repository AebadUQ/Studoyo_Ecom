import { Menu, Dropdown, Badge } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { Row, Col } from 'antd';

const HorizontalMenu = () => {
  const navigate = useNavigate();

  const getdata = useSelector((state) => state?.cardReducer?.carts)
  const cartMenu = (
    <>
      <div>Your cart is empty</div>
      {getdata.length ? <Row style={{ display: 'flex', flexDirection: 'column' }}>

        {getdata?.map((e) => {
          return (
            <>
              <Row style={{ backgroundColor: 'white' }}>

                <Col >
                  <img src={e.imgdata}
                    style={{ width: 100, height: 100 }}
                  />              </Col>
                <Col>
                  <p>{e?.rname}</p>
                  <p>quantity:{e?.qnty} </p>
                  <p>Remove: <DeleteOutlined /></p>
                  <p>Total: </p>
                  <button onClick={
                    () => navigate(`/cart/${e?.id}`)
                  }>...</button>
                </Col>
              </Row>
            </>
          )
        })}
      </Row> : null}
    </>
    // <Menu>
    //   <Menu.Item key="item1">Item 1</Menu.Item>
    //   <Menu.Item key="item2">Item 2</Menu.Item>
    // </Menu>
  );

  console.log(getdata)
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="user" icon={<UserOutlined />}>
        User
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Dropdown overlay={cartMenu} placement="bottomRight">
        <Menu.Item key="cart" icon={<Badge count={getdata?.length}><ShoppingCartOutlined /></Badge>}>
          Cart
        </Menu.Item>
      </Dropdown>
    </Menu>
  );
};

export default HorizontalMenu;
