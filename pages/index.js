// import Head from 'next/head'
// import Plans from '../components/Plans'
// import Layout from '../components/Layout'


// export default function Home() {
//   return (
//     <div className="mb-8">
//       <Head>
//         <title>Sprint Zero</title>
//         <meta name="description" content="Generated by create-next-app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Layout>
//         <Plans />
//       </Layout>
//     </div>
//   );
// }

import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Login from "../components/Login";
import Script from "next/script";

const login = () => {
  return (
    <div>
      <Head>
        <title>Login | Sprint Zero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Script
        async
        type="text/javascript"
        src="https://cdn.weglot.com/weglot.min.js"
        onLoad={() => {
          Weglot.initialize({
            api_key: process.env.NEXT_PUBLIC_WEGLOT_API_KEY,
          });
        }}
      /> */}

      <Layout>
        <Login />
      </Layout>
    </div>
  );
};

export default login;

