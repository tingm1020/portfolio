import React from 'react';
import Head from 'next/head';
import '../src/assets/styles/style.scss';

function MyApp({ Component, pageProps }){
    return (
        <>
            <Head></Head>
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;