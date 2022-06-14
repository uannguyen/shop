import { AppPropsWithLayout } from "interface";
import "styles/globals.css";

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
};
export default MyApp;
