"use client";
import { Button } from "antd";
import styles from "./page.module.css";
import classNames from "classnames";
import { Collapsible } from "./components/Collapsible/Collapsible";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Button
      </Button>
      <p className={styles.main}>adsa</p>
      <Collapsible open={open}>ad</Collapsible>
    </div>
  );
}
