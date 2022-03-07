import Head from "next/head";
import React from "react";

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword}></meta>
      <meta content={contents}></meta>
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "My Blog",
  keyword: "Blog powered by Next js",
  contents: "pratice Next js",
};

export default HeadInfo;
