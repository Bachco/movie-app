import { useAppSelector, useAppDispatch } from "../../hooks/storeHook";
import { findValueByKey } from "../../api/functions";
import ButtonIsFavorit from "../../components/ButtonIsFavorit/ButtonIsFavorit";
import { WritingItem } from "../../api/interfaces";


const DetailPage = () => {
  const { movieDetail } = useAppSelector((state) => state);

  const movie: WritingItem = {
    Title: findValueByKey(movieDetail.data, "Title"),
    imdbID: findValueByKey(movieDetail.data, "imdbID"),
    Year: findValueByKey(movieDetail.data, "Year"),
    Type: findValueByKey(movieDetail.data, "Type"),
    Poster: findValueByKey(movieDetail.data, "Poster"),

  }
 
  return (
    <div>
      {
        (!movieDetail.error && movieDetail.data && !findValueByKey(movieDetail.data, "Search")) && (<div>
          <div>
            {findValueByKey(movieDetail.data, "Poster") && <img src={findValueByKey(movieDetail.data, "Poster")} alt={findValueByKey(movieDetail.data, "Poster")} />}
          </div>
          <div>
            {findValueByKey(movieDetail.data, "Title") && <h1>{findValueByKey(movieDetail.data, "Title")}</h1>}
            {findValueByKey(movieDetail.data, "Type") && <p>Type: {findValueByKey(movieDetail.data, "Type")}</p>}
            {findValueByKey(movieDetail.data, "Year") && <p>Year: {findValueByKey(movieDetail.data, "Year")}</p>}
            {findValueByKey(movieDetail.data, "Genre") && <p>Genre: {findValueByKey(movieDetail.data, "Genre")}</p>}
          </div>
          <ButtonIsFavorit item={movie} />
        </div>)
      }

      {
        findValueByKey(movieDetail.data, "Search") && <p>Bad data</p>
        /*
      movieDetail.imdbID == "" ?
        (<div>Movie detail don't exist</div>) :
        (<div>
          <div>
            {movieDetail.Poster !== "" && <img src={movieDetail.Poster} alt={movieDetail.Title} />}
          </div>
          <div>
            {movieDetail.Title !== "" && <h1>{movieDetail.Title}</h1>}
            {movieDetail.Type !== "" && <p>{movieDetail.Type}</p>}
            {movieDetail.Year !== "" && <p>{movieDetail.Year}</p>}
            
          </div>
        </div>)
        */}
    </div>
  )
}

export default DetailPage