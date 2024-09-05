import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='pt-br'>
                <Head>
                    <meta charSet='UTF-8' />
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <meta name='description' content='Generated by create next app' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}