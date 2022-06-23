import {
  FacebookOutlined,
  HeartOutlined,
  InboxOutlined,
  LinkedinOutlined,
  ShoppingCartOutlined,
  SkypeOutlined,
  TwitterOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Badge, Button, Col, Layout, Menu, Row, Space, Typography } from "antd";
import { PAGES } from "components/Constant";
import Image from "next/image";
import LogoImg from "public/images/logo.png";
import { useState } from "react";
import layoutCSS from "styles/layout.module.css";

const Header = () => {
  const [page, setPage] = useState("home");
  const onChangePage = (e: any) => setPage(e.key);
  return (
    <Layout.Header className={layoutCSS["header-container"]}>
      <Row className={layoutCSS["header-top"]}>
        <Col xl={{ span: 8, offset: 4 }} lg={{ span: 10, offset: 2 }}>
          <Space align="start">
            <InboxOutlined style={{ color: "#000" }} />
            <Typography className="after">test@gmail.com</Typography>
            <Typography>|</Typography>
            <Typography>Free Shipping for all Order of $99</Typography>
          </Space>
        </Col>
        <Col span={8} offset={4}>
          <Space size="middle">
            <FacebookOutlined />
            <LinkedinOutlined />
            <TwitterOutlined />
            <SkypeOutlined />
            <Typography>|</Typography>
            <Button
              style={{ color: "#000", padding: 0 }}
              size="large"
              type="link"
              block
            >
              <UserOutlined twoToneColor="#000" />
              Login
            </Button>
          </Space>
        </Col>
      </Row>
      <Row className={layoutCSS["header-bottom"]}>
        <Col span={16} offset={4}>
          <Row>
            <Col span={6}>
              <Image src={LogoImg} alt="Logo" />
            </Col>
            <Col span={12}>
              <Menu
                className="menu-page"
                onClick={onChangePage}
                selectable={false}
                selectedKeys={[page]}
                mode="horizontal"
                items={PAGES}
              />
            </Col>
            <Col span={6}>
              <Space size="middle">
                <Badge count={5}>
                  <HeartOutlined style={{ fontSize: 25 }} />
                </Badge>
                <Badge count={3} showZero>
                  <ShoppingCartOutlined style={{ fontSize: 25 }} />
                </Badge>
                <Typography style={{ paddingLeft: 10 }}>
                  item: $150.00
                </Typography>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Header>
  );
};
export default Header;
