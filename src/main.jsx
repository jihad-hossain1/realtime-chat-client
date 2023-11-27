import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/Main/MainLayout.jsx";
import { router } from "./router/Router.jsx";
import ChatProvider from "./context/ChatProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChatProvider>
    <ChakraProvider>
      <RouterProvider router={router}>
        <MainLayout />
      </RouterProvider>
    </ChakraProvider>
  </ChatProvider>
);
