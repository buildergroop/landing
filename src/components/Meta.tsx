import Head from "next/head";

export const Meta = ({
  title,
  description,
  url = "",
  keywords = "",
  image = "",
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />

    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />

    <meta name="twitter:card" content={description} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content={url} />
    <meta property="twitter:image" content={image} />

    <meta name="keywords" content={keywords} />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="canonical" href={url} />
  </Head>
);
