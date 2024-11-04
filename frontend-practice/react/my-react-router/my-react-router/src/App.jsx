import mainRouter from "~/routers/main-router";
import { RouterProvider } from "react-router-dom";
import MyNavbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <MyNavbar />
      <RouterProvider router={mainRouter} />
    </>
  );
}

export default App;
