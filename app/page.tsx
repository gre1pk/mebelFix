"use client";
import { Button } from "antd";
import styles from "./page.module.css";
import classNames from "classnames";

export default function Home() {
  return (
    <div>
      <Button>Button</Button>
      <p className={styles.main}>adsa</p>
    </div>
  );
}
