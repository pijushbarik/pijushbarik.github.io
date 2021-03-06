import Head from "next/head";

type MetaProps = {
  keywords?: string[];
  title?: string;
  ogImage?: string;
};

const Meta: React.FC<MetaProps> = (props) => {
  const commonKeywords =
    "pijush barik, web developer, full stack web developer, javascript, typescript, react, nextjs, frontend development, web development, blog, developer blog";

  return (
    <Head>
      <title>
        {props.title
          ? `${props.title} - Pijush Barik`
          : "Pijush Barik | Web Developer"}
      </title>
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
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#343434"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico?v=2" />
      <meta name="msapplication-TileColor" content="#343434" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#343434" />
      <meta
        name="description"
        content="Personal website and blog of Pijush Barik"
      />
      <meta
        property="og:image"
        content={`https://pijushbarik.com${
          props.ogImage ? props.ogImage : "/og.jpg"
        }`}
      />
      <meta property="og:url" content="https://pijushbarik.com" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Personal website and blog of Pijush Barik"
      />
      <meta
        property="og:title"
        content={
          props.title
            ? `${props.title} - Pijush Barik`
            : "Pijush Barik | Web Developer"
        }
      />
      <meta property="og:site_name" content="Pijush Barik | Web Developer" />
      <meta
        name="keywords"
        content={
          (props.keywords ? `${props.keywords.join(", ")}, ` : "") +
          commonKeywords
        }
      />
      <link rel="manifest" href="/site.webmanifest" />
      {props.children}
    </Head>
  );
};

export default Meta;
