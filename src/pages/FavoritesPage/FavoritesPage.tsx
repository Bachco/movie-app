import { useAppDispatch, useAppSelector } from "../../hooks/storeHook";
import Title from "../../components/Title/Title";
import { Link } from "react-router-dom";
import { getMoviesById } from "../../api/actions";
import ButtonRemoveFavorit from "../../components/Buttons/ButtonRemoveFavorit";


const FavoritesPage = () => {
  const { favoritesData } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Title title="Favorites" specialClass="text-center" />

      {(favoritesData?.favorites.length && favoritesData?.favorites.length > 0) ? (

        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col">
            <div className="my-2 overflow-x-auto sm:-max-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-gray-200 m-4">
                  <table className="w-full divide-y divide-gray-200 mx-auto">
                    <thead className="bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          Poster
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          Type
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          Year
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200">
                      {favoritesData?.favorites.map(item => <tr key={item.imdbID}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {(item.Poster && item.Poster !== "N/A") ? (
                            <img className="h-10 w-10 rounded-full" src={item.Poster} alt={item.Title} />
                          ) : (
                            <div className="flex h-10 w-10 rounded-full justify-center items-center bg-gray-900 text-white">
                              
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm font-medium text-gray-900 dark:text-gray-400"><Link to="/detail" onClick={() => dispatch(getMoviesById({ searchId: item.imdbID }))}>{item.Title}</Link></div></td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.Type}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.Year}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-2xl font-medium"><ButtonRemoveFavorit item={item} /></td>
                      </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) :
        <p className="text-center text-2xl">No favorites movies</p>
      }
    </div>
  )
}

export default FavoritesPage