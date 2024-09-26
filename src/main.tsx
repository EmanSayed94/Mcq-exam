import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import App from "./App.tsx";
import Layout from "./components/Layout/index.tsx";
import "./index.css";

const colorPrimary='#5a75cf';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary,
            algorithm: true, 
          },
          Input: {
            colorPrimary,
            algorithm: true, 
          },
          Radio:{
            colorPrimary,
            algorithm: true, 
          }
        },
      }}
    >
      <Layout>
        <App />
      </Layout>
      </ConfigProvider>
    </Provider>
  </StrictMode>
);
