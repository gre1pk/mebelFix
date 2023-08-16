"use client";
import { Typography } from "antd";
import Link from "next/link";

const { Text } = Typography;
export const AppLogo = () => {
  return (
    <Link href="/">
      <Text
        style={{
          fontSize: "18px",
          fontFamily: "Carlito-bold!important",
        }}
      >
        FIXмебель
      </Text>
    </Link>
  );
};
