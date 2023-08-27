import {Navigate, Route, Routes} from "react-router-dom";
import {Home, NotFound, Search} from "../pages";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Navigate to="/" replace/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};
