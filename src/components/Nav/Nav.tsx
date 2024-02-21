import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/storeHook";

const Nav = () => {
  const { data } = useAppSelector((state) => state.movieDetail);
  return (
    <ul className="flex gap-x-8 justify-center">
      <li>
        <Link to="/">Movie search</Link>
      </li>
      {data && (
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