import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const { movie_id } = useParams();

    return (
        <div>
            <h1>Movie Details</h1>
            <p>Movie ID: {movie_id}</p>
        </div>
    );
};

export { MovieDetails };
