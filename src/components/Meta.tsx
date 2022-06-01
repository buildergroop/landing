import Head from "next/head";
import React from "react";

interface Props {
  title: string;
}

export const Meta: React.FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
      />
      <meta
        name="description"
        content="We make tech and entrepreneurship more accessible for the ambitious youth. Join us and meet the next generation of builders."
      />
      <meta
        name="keywords"
        content="Buildergroop, Gen-Z, Builders, Tech, Code, Business, Startups, Entrepreneurship, Community, Discord"
      />

      <meta name="og:title" content={title} />
      <meta
        name="og:description"
        content="We make tech and entrepreneurship more accessible for the ambitious youth. Join us and meet the next generation of builders."
      />
      <meta name="og:image" content="/brand/ogImage.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="We make tech and entrepreneurship more accessible for the ambitious youth. Join us and meet the next generation of builders."
      />
      <meta name="twitter:image" content="/brand/ogImage.png" />

      <meta name="theme-color" content="#DB00FF" />
      <link rel="shortcut icon" href="/brand/favicon.ico" />
    </Head>
  );
};
