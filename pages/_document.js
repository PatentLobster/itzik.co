import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full overflow-x-hidden antialiased" lang={"en"}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}
              `,
          }}
        />
      </Head>
      <body
        className={
          "flex flex-col bg-white text-black antialiased dark:bg-neutral-900 dark:text-white"
        }
      >
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="phone" name="phone" />
          <textarea name="message"></textarea>
        </form>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
