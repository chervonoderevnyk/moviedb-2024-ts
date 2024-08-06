// import {createBrowserRouter, Navigate} from "react-router-dom";
//
// import {MainLayout} from "./lauoyts/MainLayout";
// import {MoviesPage} from "./pages/MoviesPage";
// import {GenreListPage} from "./pages/GenreListPage";
// import {MovieDetailsPage} from "./pages/MovieDetailsPage";
//
// const router = createBrowserRouter([
//     {path: '', element: <MainLayout/>, children:[
//             {index:true, element:<Navigate to={'movies'}/>},
//             {path: 'movies', element: <MoviesPage/>},
//             {path: 'list/:list_id', element: <GenreListPage/>},
//             {path: '/movie/:movie_id', element: <MovieDetailsPage/>}
//         ]}
// ])
//
// export {
//     router
// }

import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./lauoyts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage";
import {GenreListPage} from "./pages/GenreListPage";
import {MovieDetailsPage} from "./pages/MovieDetailsPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'list/:list_id', element: <GenreListPage/>},
            {
                path: 'movie/:movie_id', element: <MoviesPage/>, children: [
                    {path: '', element: <MovieDetailsPage/>} // Модальне вікно для деталей фільму
                ]
            }
        ]
    }
]);

export {
    router
};
