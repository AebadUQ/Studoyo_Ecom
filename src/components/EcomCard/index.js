import { Button, Card, Grid, Typography, Row, Col, Divider, Skeleton } from 'antd';
import { Colors } from '../../constant/theme';
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { ADD } from '../../redux/actions/action';
import CardsData from '../CardsData';
const { Meta } = Card;

const EcomCard = ({
  element
}) => {

  const [data, setData] = useState(CardsData)
  const dispatch = useDispatch()
  const send = (e) => {
    console.log(e)
    dispatch(ADD(e))

  }
  console.log(element)
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 1000); // hide skeleton after 2 seconds

  return (
    <Skeleton loading={loading} active>
      <Card
        style={{
          width: 350,

        }}
        cover={
          <img
            alt="example"
            src={element?.imgdata}
            width={200}
            height={250}

          />
        }

      >
        <Meta
          title={element?.title}

        />


        <Typography.Text strong style={{ color: Colors?.primary, fontSize: '18px', fontWeight: 'bold' }} >
          {"$" + element?.price}
        </Typography.Text>
        <Divider type="vertical" style={{ borderColor: 'black' }} />
        <Typography.Text strong style={{ color: '#2da143', fontSize: '18px', fontWeight: 'bold' }}>
          {"10%" + " off"}
        </Typography.Text>
        <Divider type="vertical" style={{ borderColor: 'black' }} />

        <Typography.Text strong style={{ color: Colors?.primary, fontSize: '12px', fontWeight: 'bold' }} delete>
          {"$" + element?.price}
        </Typography.Text>

        <Typography.Paragraph>
          {element?.description}
        </Typography.Paragraph>
        <Button
          type="primary"
          size="large"
          style={{
            border: '0px',
            borderRadius: 4,
            width: '100%',
            background: 'linear-gradient(to left, #8538ed, #c4a6f8)',
          }}
          onClick={() => send(element)}
        >
          Add to Cart
        </Button>
      </Card>
    </Skeleton>
  );
};

export default EcomCard;
