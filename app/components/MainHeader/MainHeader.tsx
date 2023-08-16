"use client";
import { Button } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { FC, ReactElement } from "react";

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
      <Header>
        {AppLogo}
        {Contact}
        {AppNavigation}
      </Header>
    </Layout>
  );
};

export default MainHeader;
