import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./lauoyts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage";
import {GenreListPage} from "./pages/GenreListPage";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index:true, element:<Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'list/:list_id', element: <GenreListPage/>},
        ]}
])

export {
    router
}