import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="min-w-full min-h-screen bg-forest-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
