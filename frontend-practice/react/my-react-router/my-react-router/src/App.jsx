import "./App.css";
import mainRouter from "./routers/main-router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={mainRouter} />
    </>
  );
}

export default App;
