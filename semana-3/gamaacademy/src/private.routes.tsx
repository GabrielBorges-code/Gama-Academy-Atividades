import { Route, Navigate } from "react-router-dom";
import jwt from "jsonwebtoken";
// 17:08 

const PrivateRoute: any = ({ component: Component, path: Path, ...rest }: any) => {
    const isLoggedIn: string | null = localStorage.getItem("@gamaServiceToken");

    const isSectionActive: any = () => {
        if (isLoggedIn === null) {
            return false;

        } else {
            const onlyToken = isLoggedIn;
            const tokenPayLoad: any = jwt.decode(onlyToken);
            const expSeconds = tokenPayLoad.exp;
            const timeNow = Date.now() / 1000;

            return timeNow > expSeconds ? false : true;
        }
    }

    return (
        <Route {...rest} render={ (props: any) => (
            isSectionActive() ? <Component {...props}/> : <Navigate to="/"/>
        )}/>
        
    );
}

export default PrivateRoute;