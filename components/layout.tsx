import { Layout as LayoutWrapper } from "antd";
import { ILayout } from "interface";
import styles from "styles/layout.module.css";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: ILayout) => {
  return (
    <LayoutWrapper>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </LayoutWrapper>
  );
};
export default Layout;
