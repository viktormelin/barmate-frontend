import { emotionCache } from '@/emotion-cache';
import { ServerStyles, createGetInitialProps, createStylesServer } from '@mantine/next';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

const stylesServer = createStylesServer(emotionCache);
const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [initialProps.styles, <ServerStyles html={initialProps.html} server={stylesServer} key='styles' />],
    };
  }
}
