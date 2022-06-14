import { ILayout } from "interface";
import styles from "styles/layout.module.scss";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
