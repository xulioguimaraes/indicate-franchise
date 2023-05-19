import { Box, ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.routes";
import { customTheme } from "./styles/customThemes";

function App() {
  return (
    <>
      <ChakraProvider theme={customTheme}>
      
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  );
}

export default App;
