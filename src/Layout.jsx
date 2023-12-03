import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/verify"></Link>
          </li>
          <li>
            <Link to="/addmovie"></Link>
          </li>
          <li>
            <Link to="/deletemovie"></Link>
          </li>
          <li>
            <Link to="search"></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;