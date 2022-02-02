function GlobalStyle() {
    return (
        <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 

        ::-webkit-scrollbar {
        width: 3px;
        background-color: #212931;
        }

        ::-webkit-scrollbar-thumb {
        background: #207227;
        }
      `}</style>
    );
}

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}