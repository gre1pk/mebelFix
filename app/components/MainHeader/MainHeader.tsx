"use client";
import { Button } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { FC, ReactElement } from "react";
import classes from "./MainHeader.module.css";

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
      <Header
        className={classes.header}
        style={{
          display: "flex",
          justifyContent: "space-between",
          // padding: "0 15px",
        }}
      >
        {AppLogo}
        {Contact}
        {AppNavigation}
      </Header>
    </Layout>
  );
};

export default MainHeader;
