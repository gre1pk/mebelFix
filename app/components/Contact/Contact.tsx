"use client";
import { PhoneFilled, WhatsAppOutlined } from "@ant-design/icons";
import { Button, Col, Space } from "antd";
import Link from "antd/es/typography/Link";

export const Contact = () => {
  return (
    <Space direction="horizontal">
      <Button icon={<PhoneFilled />} shape="circle" href="tel:+375296758342" />
      <Col xs={0} sm={24}>
        <Link
          style={{
            color: "#333",
            fontSize: "18px",
            fontFamily: "Carlito-bold!important",
          }}
          href="tel:+375296758342"
        >
          +375 29 675-83-42
        </Link>
      </Col>
      <Button
        icon={<WhatsAppOutlined />}
        shape="circle"
        href="tel:+375296758342"
        style={{
          backgroundColor: "#7360f2",
          color: "#fff",
          borderColor: "#7360f2",
        }}
      />
    </Space>
  );
};
