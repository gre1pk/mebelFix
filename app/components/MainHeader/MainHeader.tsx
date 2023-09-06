"use client";
import { Button, Col, Row } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { FC, ReactElement, useState } from "react";
import classes from "./MainHeader.module.css";
import { Collapsible } from "../Collapsible/Collapsible";

const { Header } = Layout;

interface PropsMainHeader {
  AppLogo?: ReactElement;
  AppNavigation?: ReactElement;
  Contact?: ReactElement;
}

const MainHeader: FC<PropsMainHeader> = ({
  AppLogo,
  AppNavigation,
  Contact,
}) => {
  return (
    <>
      <Layout>
        <Header className={classes.header}>
          <Row wrap={false} justify={"space-between"}>
            <Col md={{ order: 0 }}>{AppLogo}</Col>
            <Col md={{ order: 2 }}>{Contact}</Col>
            <Col md={{ order: 1 }}> {AppNavigation}</Col>
          </Row>
        </Header>
      </Layout>
    </>
  );
};

export default MainHeader;
