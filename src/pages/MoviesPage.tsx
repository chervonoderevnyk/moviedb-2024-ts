import { Outlet } from "react-router-dom";
import {Movies} from "../components/movieContainer/Movies";

const MoviesPage = () => {
    return (
        <div>
            <Movies/>
            <Outlet/>
        </div>
    );
};

export {MoviesPage};

