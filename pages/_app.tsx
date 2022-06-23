import "antd/dist/antd.css";
import { AppPropsWithLayout } from "interface";
import "styles/globals.css";
import "styles/layout.module.css";

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
};
export default MyApp;
