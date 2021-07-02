import { AppProps } from "next/app";
import "@styles/index.css";
import dynamic from "next/dynamic";
import HeaderPlaceholder from "@components/Layout/HeaderPlaceholder";
import { useEffect } from "react";

const Layout = dynamic(() => import("@components/Layout"), {
  ssr: false,
  loading: () => <HeaderPlaceholder />,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Registering our dummy service worker and unregistering it to prevent loading
    // old cached gatsby website
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          registration.unregister().then((isUnregistered) => {
            if (isUnregistered) {
              console.log("SW unregistered");
            }
          });
        })
        .catch(function (error) {
          console.error("SW registration/unregistration failed with " + error);
        });
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
