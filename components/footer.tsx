import { Col, Input, Layout, Row, Space, Typography } from "antd";
import { CONTACT_INFO, HELP_LINK } from "components/Constant";
import FaceBookIcon from "components/Icons/fb";
import HeartIcon from "components/Icons/heart";
import InstagramIcon from "components/Icons/instagram";
import PinterestIcon from "components/Icons/pinterest";
import TwitterIcon from "components/Icons/twitter";
import Image from "next/image";
import LogoImg from "public/images/logo.png";
import PaymentImg from "public/images/payment-item.png";
import React from "react";
import layoutCSS from "styles/layout.module.css";
const { Search } = Input;

const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <Row className={layoutCSS["footer-top"]}>
        <Col span={16} offset={4}>
          <Row className="footer-top-wrapper">
            <Col md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 8 }}>
              <Row>
                <Col span={24}>
                  <Image src={LogoImg} alt="Logo" />
                </Col>
                <Space direction="vertical" style={{ paddingTop: 10 }}>
                  {CONTACT_INFO.map((text) => (
                    <Col key={text} span={24}>
                      <Typography>{text}</Typography>
                    </Col>
                  ))}
                </Space>
              </Row>
            </Col>
            <Col md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 8 }}>
              <Col span={24}>
                <Typography style={{ fontFamily: "Roboto-Bold", fontSize: 16 }}>
                  Useful Links
                </Typography>
              </Col>
              <Row>
                <Col span={12}>
                  <Space direction="vertical" style={{ paddingTop: 10 }}>
                    {HELP_LINK.slice(0, HELP_LINK.length / 2).map((text) => (
                      <Col key={text} span={24}>
                        <Typography>{text}</Typography>
                      </Col>
                    ))}
                  </Space>
                </Col>
                <Col span={12}>
                  <Space direction="vertical" style={{ paddingTop: 10 }}>
                    {HELP_LINK.slice(
                      HELP_LINK.length / 2,
                      HELP_LINK.length
                    ).map((text) => (
                      <Col key={text} span={24}>
                        <Typography>{text}</Typography>
                      </Col>
                    ))}
                  </Space>
                </Col>
              </Row>
            </Col>
            <Col md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 8 }}>
              <Space direction="vertical" style={{ paddingTop: 10 }}>
                <Col span={24}>
                  <Typography
                    style={{ fontFamily: "Roboto-Bold", fontSize: 16 }}
                  >
                    Join Our Newsletter Now
                  </Typography>
                </Col>
                <Col span={24}>
                  Get E-mail updates about our latest shop and special offers.
                </Col>
                <Col className="subscribe-btn" span={24}>
                  <Search
                    placeholder="Enter your email"
                    allowClear
                    enterButton="Subscribe"
                    size="large"
                    // onSearch={onSearch}
                    // onPressEnter={onSearch}
                  />
                </Col>
                <Col>
                  <Space direction="horizontal">
                    <div className="circle circle-hover">
                      <FaceBookIcon />
                    </div>
                    <div className="circle circle-hover">
                      <InstagramIcon />
                    </div>
                    <div className="circle circle-hover">
                      <TwitterIcon />
                    </div>
                    <div className="circle circle-hover">
                      <PinterestIcon />
                    </div>
                  </Space>
                </Col>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={16} offset={4} className={layoutCSS["footer-bottom"]}>
          <Row>
            <Col span={17}>
              Copyright © 2022 All rights reserved | This template is made with
              &nbsp;
              <HeartIcon fill="#6f6f6f" />
              &nbsp; by Colorlib
            </Col>
            <Col span={7}>
              <Image src={PaymentImg} alt="Payment-item" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Footer>
  );
};
export default Footer;
