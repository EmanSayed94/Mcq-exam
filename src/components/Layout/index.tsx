import React from "react";

import Card from "antd/es/card/Card";
import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className={styles["layout-container"]}>
      <Card className={styles.card}>{children}</Card>
    </div>
  );
};

export default Layout;
