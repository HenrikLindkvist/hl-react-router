import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookRoutes } from "./BookRoutes";
import { NotFound } from "./pages/NotFound";

function App() {
  /* let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/books/*",
      element: <BookRoutes />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      {element}
    </>
  );
} */
  const location = useLocation();
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : {};
              }}
              to="/"
            >
              {({ isActive }) => {
                return isActive ? "Active Home" : "Home";
              }}
            </NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
        </ul>
      </nav>
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
