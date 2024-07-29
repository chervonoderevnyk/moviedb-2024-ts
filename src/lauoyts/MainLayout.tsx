import {Outlet} from "react-router-dom";
import {useEffect} from "react";

import {Header} from "../components/header/Header";
import {useAppDispatch} from "../hooks/reduxHooks";
import {meActions} from "../redux/slices/MeSlice";
import css from "./MainLayout.module.css"

const MainLayout = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(meActions.getMe())
    }, [dispatch]);

    return (
        <div className={css.mainContainer}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};