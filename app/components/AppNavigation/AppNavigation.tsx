"use client";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Col, Collapse, Modal } from "antd";
import { useState } from "react";
import { Collapsible } from "../Collapsible/Collapsible";
import classNames from "./AppNavigation.module.css";

export const AppNavigation = () => {
  const [open, setOpen] = useState(false);

  const changeModal = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Col md={0}>
        {open ? (
          <Button
            onClick={changeModal}
            icon={<CloseOutlined shape="circle" />}
          ></Button>
        ) : (
          <Button
            onClick={changeModal}
            icon={<MenuOutlined shape="circle" />}
          ></Button>
        )}
        <Collapsible open={open} classNames={[classNames.collapse]}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            debitis cumque sequi dolor, porro neque voluptatum impedit voluptate
            minus, nemo, optio amet ipsa? Vitae laudantium quasi architecto
            similique veritatis quam. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Iusto debitis cumque sequi dolor, porro neque
            voluptatum impedit voluptate minus, nemo, optio amet ipsa? Vitae
            laudantium quasi architecto similique veritatis quam. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Iusto debitis cumque
            sequi dolor, porro neque voluptatum impedit voluptate minus, nemo,
            optio amet ipsa? Vitae laudantium quasi architecto similique
            veritatis quam.
          </p>
        </Collapsible>
      </Col>
    </div>
  );
};
