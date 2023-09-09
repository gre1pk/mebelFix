"use client";
import { CloseOutlined, MenuOutlined, PhoneFilled } from "@ant-design/icons";
import { Button, Col, Collapse, Modal } from "antd";
import { useState } from "react";
import { Collapsible } from "../Collapsible/Collapsible";
import classNames from "./AppNavigation.module.css";
import { AppMenu } from "../AppMenu/AppMenu";
import Link from "next/link";

export const AppNavigation = () => {
  const [open, setOpen] = useState(false);

  const changeCollapse = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Col md={0}>
        {open ? (
          <Button
            onClick={changeCollapse}
            icon={<CloseOutlined shape="circle" />}
          ></Button>
        ) : (
          <Button
            onClick={changeCollapse}
            icon={<MenuOutlined shape="circle" />}
          ></Button>
        )}
        <Collapsible open={open} classNames={[classNames.collapse]}>
          <AppMenu />
          <Button
            icon={<PhoneFilled />}
            shape="circle"
            href="tel:+375296758342"
          />
          <Link
            style={{
              color: "#333",
              fontSize: "18px",
              fontFamily: "Carlito-bold!important",
              marginLeft: 10,
            }}
            href="tel:+375296758342"
          >
            +375 29 675-83-42
          </Link>
        </Collapsible>
      </Col>
    </div>
  );
};
