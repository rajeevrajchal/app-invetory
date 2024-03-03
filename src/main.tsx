import { MantineProvider } from "@mantine/core";
import i18n from "@plugins/i18n";
import { QueryClientProvider } from "@tanstack/react-query";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./index.css";

import "@mantine/core/styles.css";
import "mantine-datatable/styles.layer.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import ReactDOM from "react-dom/client";

// css
import { AuthProvider } from "@hook/store/use-auth";
import { BreadcrumbProvider } from "@hook/store/use-breadcrumb";
import queryClient from "@plugins/react-query";
import AppRoutes from "@routes";

const app = (
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <MantineProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <ToastContainer />
            <AuthProvider>
              <BreadcrumbProvider>
                <AppRoutes />
              </BreadcrumbProvider>
            </AuthProvider>{" "}
          </QueryClientProvider>
        </BrowserRouter>
      </MantineProvider>
    </I18nextProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")!).render(app);
