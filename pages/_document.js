import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        return { ...initialProps }
    }

    render() {
        return (
            <html>
                <Head>
                    <title>Redux Saga - Example</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                </Head>
                <body className="is-preload" id="is-body">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}