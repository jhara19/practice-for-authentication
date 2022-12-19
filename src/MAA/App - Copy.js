
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import {routes} from "./routes/routes"

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </>
  );
}

export default App;
