import { createBrowserRouter } from "react-router-dom";
import protectedRoutes from "./protected";
import publicRoutes from "./public";

const router = createBrowserRouter([...publicRoutes, ...protectedRoutes])

export default router