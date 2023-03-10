import React, { useEffect, useState } from 'react'
import { Row, Col, Typography,Image  } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {  useParams,useNavigate } from 'react-router';
import { DELETE ,DECQUANTITY} from '../redux/actions/action';
const CardsDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate();

    const [data, setData] = useState([])
    const getdata = useSelector((state) => state?.cardReducer?.carts)
    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e?.id == id
        })
        setData(comparedata)
        console.log(comparedata)
    }
    useEffect(() => {
        compare()
      
    }, [id])

    const dispatch=useDispatch()
    const del=(id)=>{
        dispatch(DELETE(id))
        navigate('/');
        
    }
    // const quantityDec=(item)=>{
    //     dispatch(DECQUANTITY(item))
    // }
    return (
        <>



            {data?.map((ele) => {
                return (
                    <Row justify={"center"} style={{ height: '90vh' }} align="middle">
                        <Col xs={20} sm={20} md={20} lg={18} xl={18} xxl={18}>
                        <Row style={{ border: '1px solid red' }}>
  <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{ border: '1px solid red' }}>
    <Image src={ele?.imgdata} width={700} height={500}  />
  </Col>
  <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
    <Typography.Title>{ele?.title}</Typography.Title>
    <Typography.Paragraph>{ele?.description}</Typography.Paragraph>
    <p>Price:{ele?.price}</p><p>Quan:{ele?.qnty}</p>
    <p>Total</p>
    <button onClick={()=>del(ele?.id)}>remove</button>
    {/* <button onClick={()=>quantityDec(ele)}>sub</button> */}
    
  </Col>
</Row>


                        </Col>
                    </Row>
                )
            })}

        </>
    )
}

export default CardsDetails