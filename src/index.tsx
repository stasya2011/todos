import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./STORE";
import { PersistGate } from "redux-persist/es/integration/react";
import App from "./App";
import "./index.css";
import Loading from "./app/components/loading";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
