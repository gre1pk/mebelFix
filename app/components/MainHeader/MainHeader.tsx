"use client";
import { Col, Row } from "antd";
import { Layout } from "antd";
import { FC, ReactElement } from "react";
import classes from "./MainHeader.module.css";
import { AppMenu } from "../AppMenu/AppMenu";

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
    <Layout>
      <Header className={classes.header}>
        <Row wrap={false} justify={"space-between"} align={"middle"}>
          <Col md={{ order: 0 }}>{AppLogo}</Col>
          <Col xs={0} md={12}>
            <AppMenu classNames={[classes.menu]} />
          </Col>
          <Col md={{ order: 2 }}>{Contact}</Col>
          <Col md={{ order: 1 }}> {AppNavigation}</Col>
        </Row>
      </Header>
    </Layout>
  );
};

export default MainHeader;
