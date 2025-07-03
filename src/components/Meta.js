import Head from "next/head";

const MetaComponent = ({ title = "See. Explore. Code.｜Riva Hsu" }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="title" content={title} />
            <meta name="keywords" content="作品集、portfolio、前端、數位專題、UI套件、動態設計、社會趨勢專案、教育專案、政策視角專案、獎項專案、活動頁面" />
            <meta name="description" content="探索一系列透過功能性呈現議題內容的前端開發作品。" />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:locale" content="zh_TW" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://portfoliorh.vercel.app/" />
            <meta property="og:image" content="https://portfoliorh.vercel.app/images/fbShare.jpg" />
            <meta property="og:description" content="探索一系列透過功能性呈現議題內容的前端開發作品。" />
            <link rel="icon" href="/images/favicon.ico" />
        </Head>
    )
}

export default MetaComponent;