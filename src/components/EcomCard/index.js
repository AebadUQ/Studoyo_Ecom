import { Button, Card, Grid, Typography ,Row,Col, Divider} from 'antd';
import { Colors } from '../../constant/theme';
const { Meta } = Card;
const { useBreakpoint } = Grid;

const EcomCard = ({
  title,
  description,
  price,
}) => {
  const screens = useBreakpoint();

  return (
    <Card
      style={{
        width: 350,
       
      }}
      cover={
        <img
          alt="example"
          src="https://interwood.pk/media/catalog/product/f/r/frea_sofa_set_-_dark_beige.jpg"
        
        />
      }
    //   actions={[
    //    ,
    //   ]}
    >
      <Meta
        title={title}
       
      />
    
        
            <Typography.Text strong style={{ color: Colors?.primary, fontSize: '18px', fontWeight: 'bold' }} >
        {"$" + "1200"}
      </Typography.Text>
      <Divider type="vertical" style={{borderColor:'black'}}/>
      <Typography.Text strong style={{ color: '#2da143', fontSize: '18px', fontWeight: 'bold' }}>
        {"90%" + " off"}
      </Typography.Text>
      <Divider type="vertical" style={{borderColor:'black'}}/>

      <Typography.Text strong style={{ color: Colors?.primary, fontSize: '12px', fontWeight: 'bold' }} delete>
        {"$" + price}
      </Typography.Text>
      
        <Typography.Paragraph>
            {description}
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
        >
          Add to Cart
        </Button>
    </Card>
  );
};

export default EcomCard;
