import "@/styles/globals.css";
import { Provider, createClient } from "urql";

//importing shop context
import { StateContext } from "@/util/context";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });
function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
    </StateContext>
  );
}

export default App;
