// import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
// import {useEffect} from "react";
// import {genreActions} from "../../redux/slices/GenreSlice";
// import {Genre} from "./Genre";
//
// const Genres = () => {
//
//     const {genres} = useAppSelector(state => state.genres);
//
//     const dispatch = useAppDispatch();
//
//     useEffect(() => {
//         dispatch(genreActions.getAllGenres2())
//     }, [dispatch]);
//
//     return (
//         <div>
//             {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
//         </div>
//     );
// };
//
// export {Genres};

const Genres = () => {
    return (
        <div>
            Genres
        </div>
    );
};

export {Genres};