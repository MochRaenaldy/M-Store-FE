import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./route/routes";

function App() {
  return (
    <div>
      <RouterProvider router={createBrowserRouter(routes)} />
    </div>
  );
}
export default App;
