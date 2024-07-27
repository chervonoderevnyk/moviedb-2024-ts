import {Header} from "../components/header/Header";
import {Outlet} from "react-router-dom";
import {useAppDispatch} from "../hooks/reduxHooks";
import {useEffect} from "react";
import {meActions} from "../redux/slices/MeSlice";

const MainLayout = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(meActions.getMe())
    }, [dispatch]);

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};