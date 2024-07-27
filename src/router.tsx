import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./lauoyts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage";
import {GenresPage} from "./pages/GenresPage";
// import {MePage} from "./pages/MePage";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index:true, element:<Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>},
            // {path: 'genres', element: <GenresPage/>},
            // {path: 'me', element:<MePage/>}
        ]}
])

export {
    router
}