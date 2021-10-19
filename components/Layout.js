import React from 'react'
import { Typography, Card, Row, Col, Button } from "antd";
const { Title, Text } = Typography;


const Layout = ({children}) => {
  return (
    <div className="mb-8">
      <Title level={2} className="logo">
        Sprint Zero
      </Title>
      
      {children}
    </div>
  );
}

export default Layout
