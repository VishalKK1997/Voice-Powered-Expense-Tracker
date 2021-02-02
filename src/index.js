import { SpeechProvider } from "@speechly/react-client";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Provider } from "./context/context";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="e209f568-ef79-48bc-b3f4-cca55eb2830d" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
