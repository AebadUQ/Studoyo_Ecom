import React, { useState } from "react";
import {  Card, Typography, Row, Divider, Skeleton,Image ,Button} from "antd";
import { Colors } from "../../constant/theme";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/action";
const { Meta } = Card;
const EcomCard = ({ element }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
  };
  //Setting timeout to simulate loading state before rendering data from an API in the future
  setTimeout(() => setLoading(false), 1000);
  return (
    <Skeleton loading={loading} active>
      <Card
        style={{
          width: 280,
          textAlign: "left",
          margin: "1rem 0rem",
        }}
        cover={
          <Image alt="card_image" src={element?.imgdata} width={"100%"} height={200} preview={false}/>
        }
      >
        <Meta title={element?.title} />
        <Row align={"middle"}>
          <Typography.Text
            strong
            style={{
              color: Colors?.primary,
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            {"$" + element?.price}
          </Typography.Text>
          <Divider type="vertical" style={{ borderColor:Colors?.black}} />
          <Typography.Text
            strong
            style={{ color: Colors?.secondary, fontSize: "18px" }}
          >
            {"10%" + " off"}
          </Typography.Text>
          <Divider type="vertical" style={{ borderColor: Colors?.black }} />
          <Typography.Text
            strong
            style={{
              color: Colors?.primary,
              fontSize: "12px",
              fontWeight: "bold",
            }}
            delete
          >
            {"$" + element?.price}
          </Typography.Text>

          <Typography.Paragraph>{element?.description}</Typography.Paragraph>
        </Row>
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
