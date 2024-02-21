import { useAppSelector } from "../../hooks/storeHook";
import { findValueByKey } from "../../api/functions";
import ButtonIsFavorit from "../../components/Buttons/ButtonIsFavorit";
import { WritingItem } from "../../api/interfaces";
import Loading from "../../components/Loading/Loading";
import Title from "../../components/Title/Title";


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
    <div className="max-w-screen-lg mx-auto">
      {
        (!movieDetail.loading) ? (!movieDetail.error && movieDetail.data && !findValueByKey(movieDetail.data, "Search")) && (<div className="container mx-auto flex flex-col xl:flex-row gap-x-12">
          <div className="flex flex-col w-full xl:max-w-[480px] relative">
            {(movie.Poster && movie.Poster !== "N/A") ? (
              <img src={movie.Poster} alt={movie.Title} />
            ) : (
              <div className="flex w-full min-h-80 justify-center items-center bg-gray-800 text-white">
                No image
              </div>
            )}           
            <div className="absolute right-4 top-4 text-4xl"><ButtonIsFavorit item={movie} /></div>
          </div>
          <div className="flex-1 flex flex-col justify-start text-lg">            
            {findValueByKey(movieDetail.data, "Title") && <Title title={findValueByKey(movieDetail.data, "Title")} specialClass="text-[30px]"/>}
            {findValueByKey(movieDetail.data, "Type") && <p><strong>Type: </strong>{findValueByKey(movieDetail.data, "Type")}</p>}
            {findValueByKey(movieDetail.data, "Year") && <p><strong>Year: </strong> {findValueByKey(movieDetail.data, "Year")}</p>}
            {findValueByKey(movieDetail.data, "Genre") && <p><strong>Genre: </strong> {findValueByKey(movieDetail.data, "Genre")}</p>}
            {findValueByKey(movieDetail.data, "Search") && <p><strong>Bad data</strong></p>}
          </div>
        </div>) : <Loading />
      }      
      {movieDetail.error && <p>{movieDetail.error}</p>}
    </div>
  )
}

export default DetailPage