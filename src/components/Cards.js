import React, { useState } from 'react'
import CardsData from './CardsData'
import EcomCard from './EcomCard'
import { Row, Col } from 'antd'
const Cards = () => {
    const [data, setData] = useState(CardsData)
    return (
        <Row gutter={[20, 20]} justify={"center"} >
            {data?.map((element, id) => {
                return (
                    <Col xs={24} sm={24} md={7} lg={7} xl={6} xxl={6}  key={id}>
                        <EcomCard
                            element={element}
                        />
                    </Col>
                )
            })}

        </Row>
    )
}

export default Cards