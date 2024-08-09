import { FC, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import css from './MovieDetails.module.css';
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { movieActions } from "../../../redux/slices/moviesSlicesContainer/MovieSlice";
import { StarRating } from "../../ratingContainer/StarRating";

const MovieDetail: FC = () => {
    const { movie_id } = useParams<{ movie_id: string }>();
    const dispatch = useAppDispatch();
    const movieDetails = useAppSelector(state => state.movies.movieDetails);

    useEffect(() => {
        if (movie_id) {
            dispatch(movieActions.getDetailsByMovie(movie_id));
        }
    }, [dispatch, movie_id]);

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    const backgroundImage = movieDetails.backdrop_path
        ? `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`
        : '';

    const popularity = movieDetails.popularity;

    return (
        <div className={css.detailsContainer} style={{ backgroundImage }}>
            <div className={css.detailsContent}>
                <h1>{movieDetails.title}</h1>
                <StarRating rating={popularity} maxRating={10} />
                <p><strong>Overview:</strong> {movieDetails.overview}</p>
                <p><strong>Budget:</strong> {movieDetails.budget}$</p>
                <p><strong>Tag line:</strong> {movieDetails.tagline}</p>
                <p><strong>Status:</strong> {movieDetails.status}</p>
                <p><strong>Vote Count:</strong> {movieDetails.vote_count}</p>
                <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
                <div className={css.genresContainer}>
                    {movieDetails.genres.map((genre) => (
                        <Link key={genre.id} to={`/list/${genre.id}`} className={css.genreLink}>
                            {genre.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export { MovieDetail };
