import { AppProps } from "next/app";
import "@styles/index.css";
import dynamic from "next/dynamic";
import HeaderPlaceholder from "@components/Layout/HeaderPlaceholder";
import Meta from "@components/Meta";

const Layout = dynamic(() => import("@components/Layout"), {
  ssr: false,
  loading: () => <HeaderPlaceholder />,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
