import React, { useEffect, useState } from 'react'
import { Row, Col, Typography, Image,Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { DELETE, DECQUANTITY, INCQUANTITY } from '../../redux/actions/action';
import { DeleteFilled } from "@ant-design/icons";

import { Colors } from '../../constant/theme';
import styled from "styled-components";
const Heading = styled.p`
  color: ${Colors?.black};
  font-weight: 500;
  font-size: 32px;
`;
const Subheading = styled.p`
  color: ${Colors?.black};
  font-weight: 400;
  font-size: 22px;
`;
const TotalHeading = styled.p`
  color: ${Colors?.black};
  font-weight: 500;
`;
const Content =styled.div`
padding-inline: 3rem;
padding-top: 3rem;
`;
const CardsDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const total = useSelector((state) => state.cardReducer.total);

    const [data, setData] = useState([])
    const getdata = useSelector((state) => state?.cardReducer?.carts)
    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e?.id == id
        })
        setData(comparedata)
    }
    useEffect(() => {
        compare()

    }, [getdata])

    const dispatch = useDispatch()
    const del = (id) => {
        dispatch(DELETE(id))
        navigate('/');

    }
    const quantityDec = (item) => {
        dispatch(DECQUANTITY(item))
    }
    const quantityInc = (item) => {
        dispatch(INCQUANTITY(item))
    }
    return (
        <>
            {data?.map((ele) => {
                return (
                    <Row justify={"center"} style={{ height: '90vh' }} align="middle">
                                                          

                        <Col xs={20} sm={20} md={20} lg={16} xl={16} xxl={16}>
                            <Row style={{ border: '1px solid red' }}>
                                <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10} style={{ border: '1px solid red' }}>
                                    <Image src={ele?.imgdata} width={"100%"} height={500} />
                                </Col>
                                <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14} >
                                   
                                    <Content>

                                    <Heading>{ele?.title}</Heading>
                                    <Subheading>{ele?.description}</Subheading>

                                    <p>Price:{ele?.price}</p>

                                    <p>Total: {total}</p>
                                    <button onClick={ele?.qnty <= 1 ? () => del(ele?.id) : () => quantityDec(ele)}>sub</button>

                                    <p>Quan:{ele?.qnty}</p>
                                    <button onClick={() => quantityInc(ele)}>add</button>
                                    <Button onClick={() => del(ele?.id)} icon={<DeleteFilled style={{fontSize:22,color:'red'}} />} style={{border:'0px'}}/>

                                    </Content>
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