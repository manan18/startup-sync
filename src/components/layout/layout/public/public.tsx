import React, { ReactNode } from "react";
import styles from "./layout.module.css";
import { Box } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
  header?: boolean;
  sidebar?: boolean;
}

const Layout = ({ children, header = false, sidebar }: LayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    ></Box>
  );
};

export default Layout;
