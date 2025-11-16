import { Outlet } from "react-router";
import classes from './layout.module.css';
import NavBar from "../components/navbar/navbar";
const Layout = () => {

    return <div className={classes.pages_styles}>
        <NavBar />
        <Outlet />
    </div>
}
export default Layout;

