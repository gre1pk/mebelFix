import Link from "next/link";
import { menuData } from "./AppMenu.module";
import { Button, Typography } from "antd";
import { PhoneFilled } from "@ant-design/icons";
import { FC } from "react";
import { className } from "@/app/utils/className/className";
import classes from "./AppMenu.module.css";

interface AppMenu {
  classNames?: string[];
}
export const AppMenu: FC<AppMenu> = ({ classNames }) => {
  return (
    <ul className={className(classes.appMenu, classNames)}>
      {menuData.map((el) => {
        return (
          <li
            key={el.label}
            style={{
              lineHeight: "40px",
              marginRight: "20px",
            }}
          >
            <Link href={el.to}>
              <Typography.Text
                style={{
                  fontSize: "17px",
                  fontFamily: "Carlito-bold!important",
                }}
              >
                {el.label}
              </Typography.Text>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
