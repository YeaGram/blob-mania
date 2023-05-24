// library imports
import Head from "next/head";

export default function HeadLayout({ title, children }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/blob_mania_logo.svg" />
      {children}
    </Head>
  );
}
