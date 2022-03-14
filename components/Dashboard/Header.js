import React, { useState } from 'react';
import styled from "styled-components";

import
{
    Layout,
    Typography,
    Input,
    Avatar,
} from "antd";
import
{
    MessageFilled,
} from "@ant-design/icons";

import products from "../../fakeData/products.json";

import { useAuth } from "../../contexts/AuthContext";

const { Header } = Layout;
const { Title } = Typography;
const { Search } = Input;

const HeaderMenu = styled.div`
  color: ${ ( props ) => ( props.active ? "#73c92d" : "#fff" ) };
  cursor: pointer;
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: ${ ( props ) => ( props.active ? "#73c92d" : "transparent" ) };

  &:hover {
    color: var(--kelly);
    border-bottom: 4px solid var(--kelly);
  }
`;

const AppHeader = (
    {
        onChangeProduct
    }
) =>
{

    const { user } = useAuth();
    const [ activeProduct, setActiveProduct ] = useState( products[ 0 ] );

    const onProductChange = ( product ) =>
    {
        setActiveProduct( product );
        onChangeProduct && onChangeProduct( product );
    };

    return (
      <Header
        className="header"
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
      >
        <div className="flex items-center">
          <Title level={2} className="dashboard-logo m-0">
            Sprint Zero
          </Title>
          <div className="flex items-center ml-11">
            {products.map((item, i) => (
              <HeaderMenu
                key={i}
                className="mr-10"
                active={activeProduct === item}
                onClick={() => onProductChange(item)}
              >
                {item}
              </HeaderMenu>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <Search
            placeholder="Search"
            allowClear
            className="mr-6 border-none focus:outline-none outline-none"
            // onSearch={onSearch}
            style={{ width: 200 }}
          />
          {/* <MessageFilled
                    style={ { color: "#73c92d", width: "24px" } }
                    className="mr-6"
                /> */}
          <Avatar
            src={user?.photoURL}
            style={{ border: "2px solid #73c92d" }}
          />
        </div>
      </Header>
    );
};

export default AppHeader;
