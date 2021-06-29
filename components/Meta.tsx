import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <title>Pijush Barik | Web Developer</title>

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#343434"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#343434" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#343434" />
      <meta
        name="description"
        content="Personal website and blog of Pijush Barik"
      />
      <meta property="og:image" content="/pijushbarik.com.jpg" />
      <meta
        name="keywords"
        content="pijush barik, web developer, full stack web developer, javascript, typescript, react, nextjs, frontend development, web development, blog, developer blog"
      />
    </Head>
  );
};

export default Meta;
