"use client";
import { FC, ReactNode } from "react";
import classes from "./Collapsible.module.css";
import { className } from "@/app/utils/className/className";
import { motion, AnimatePresence } from "framer-motion";

interface CollapsibleProps {
  children: ReactNode;
  open: boolean;
  classNames?: string[];
  animationTime?: number;
}

export const Collapsible: FC<CollapsibleProps> = ({
  children,
  open,
  classNames,
  animationTime = 0.5,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={className(classes.collapsible, classNames)}
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          style={{ overflow: "hidden" }}
          transition={{ duration: animationTime }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
