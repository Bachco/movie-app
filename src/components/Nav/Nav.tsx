import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/storeHook";

const Nav = () => {
  const { imdbID } = useAppSelector((state) => state.movieDetail);
  return (
    <ul className="flex gap-x-4">
      <li>
        <Link to="/">Movie search</Link>
      </li>
      {imdbID !== "" && (
        <li>
          <Link to="/detail">Detail</Link>
        </li>
      )}
      <li>
        <Link to="/favorites">Favorites</Link>
      </li>
    </ul>
  )
}

export default Nav