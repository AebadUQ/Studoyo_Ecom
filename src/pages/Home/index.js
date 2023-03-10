import React, { useState } from 'react';
import CardsData from '../../constant/CardsData';
import EcomCard from '../../components/EcomCard';
import { Row, Col } from 'antd';
const Home = () => {
  const [data, setData] = useState(CardsData);

  return (
    <Row  justify="center" align="middle" >
      {data?.map((item) => {
        return (
          <Col xs={24} sm={12} md={12} lg={8} xl={7} xxl={5} key={item?.id} align="middle">
            <EcomCard element={item} />
          </Col>
        );
      })}
    </Row>
  );
};
export default Home;
