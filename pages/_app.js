/* eslint-disable react-hooks/exhaustive-deps */
import "antd/dist/antd.css";

import "../styles/globals.css";
import { AuthProvider } from "../contexts/AuthContext";
import { PaymentProvider } from "../contexts/PaymentContext";
import { RecoilRoot } from "recoil";
import { useLayoutEffect, useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import { analytics } from "../config/firebase-config";
import { useRouter } from "next/router";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const routers = useRouter();
  useEffect(() => {
    // if (process.env.NODE_ENV === "production") {
    analytics();
    // }
  }, []);

  // Implementing screen_view event
  useEffect(() => {
    const logEvent = (url) => {
      analytics().setCurrentScreen(url);
      analytics().logEvent("screen_view");
    };

    routers.events.on("routeChangeComplete", logEvent);
    //For First Page
    logEvent(window.location.pathname);

    //Remvove Event Listener after un-mount
    return () => {
      routers.events.off("routeChangeComplete", logEvent);
    };
  }, []);

  const { width } = useWindowSize();

  // if (width < 1132) {
  //   return (
  //     <div className="w-full h-full flex justify-center items-center text-lg p-8">
  //       Sorry, we don&apos;t support your current resolution at the moment.
  //       Please try either turning your device sideways to landscape mode or
  //       share with a device wider than 1133px.
  //     </div>
  //   );
  // } else {
  return (
    <>
      {/* <Script
        async
        type="text/javascript"
        src="https://cdn.weglot.com/weglot.min.js"
        onLoad={() => {
          Weglot.initialize({
            api_key: "wg_22f9b5a096e59c4526f1da3019b8e63a9",
          });
        }}
      /> */}

      <AuthProvider>
        <PaymentProvider>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </PaymentProvider>
      </AuthProvider>
    </>
  );
}
// }

export default MyApp;
