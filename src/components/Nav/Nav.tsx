import { Link } from "react-router-dom";

const Nav = () => {
  return (
      <ul>
        <li>
          <Link to="/">Movie search</Link>
        </li>
        <li>
          <Link to="/detail">Detail</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
  )
}

export default Nav