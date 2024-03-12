import { AuthProvider } from "@/hook/store/use-auth";
import { BreadcrumbProvider } from "@/hook/store/use-breadcrumb";
import queryClient from "@/plugins/react-query";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import type { Metadata } from "next";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";
import "mantine-datatable/styles.layer.css";
import "react-toastify/dist/ReactToastify.css";

import Splash from "@/components/splash";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ati Nova",
  description: "System CMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <Suspense fallback={<Splash />}>
          <MantineProvider defaultColorScheme="dark">
            <QueryClientProvider client={queryClient}>
              <ToastContainer />
              <AuthProvider>
                <BreadcrumbProvider>{children}</BreadcrumbProvider>
              </AuthProvider>
            </QueryClientProvider>
          </MantineProvider>
        </Suspense>
      </body>
    </html>
  );
}
