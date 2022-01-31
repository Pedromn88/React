import React from "react";
import { useParams } from "react-router-dom";
import { getList } from "../utils/apiRest";
import "./styles.component.css"


interface MovieDetailsEntity {
    genres: any;
    poster_path: string;
    title: string;
    overview: string;

}


export const MovieDetails = () => {
        const [movieDetails, setMovieDetails] = React.useState<MovieDetailsEntity>();
        const { movieId } = useParams();
      
      
        React.useEffect(() => {
          getList("/movie/" + movieId ).then((res) => {
              setMovieDetails(res.data);
              console.log(res)
            })
        }, [movieId]);

        if (!movieDetails) {
          return null;
        }

        const imgDetail = "https://image.tmdb.org/t/p/w500" + movieDetails.poster_path;

        return (
          <div className="details">
            
            <img src={imgDetail} alt={movieDetails.title}/>
            <div className="description">
              <p>
                <strong>Title:</strong> {movieDetails.title}
              </p>
              <p>
                <strong>Genres:</strong>{" "}
                {movieDetails.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p>
                <strong>Description:</strong> {movieDetails.overview}
              </p>
            </div>
          </div>
        );
}