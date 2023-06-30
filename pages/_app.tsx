import type { AppProps } from "next/app";
import "../styles/global.scss";
import { RichTextComponents } from "../rich-text";
import { PortableTextComponentsProvider } from "@portabletext/react";
import { BlogProvider } from "../app/api/generated/hooks/globalContext";
import { useEffect, useState } from "react";
declare global {
  interface Window {
    drift: any;
  }
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <PortableTextComponentsProvider components={RichTextComponents}>
      <BlogProvider>
      <Component {...pageProps} />
      </BlogProvider>
    </PortableTextComponentsProvider>
  );
}
