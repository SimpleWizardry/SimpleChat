import React, { FC } from 'react';
import './App.less';
import { Route, Redirect, Switch } from "react-router-dom";
import { Auth } from "./pages";
import {useSelector} from "react-redux";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {RootState} from "./redux/store";

const App: FC = (props) => {
    //const { isAuth } = props;
    const isAuth = useTypedSelector(state => state.isAuth)
    console.log(isAuth)
    return (
        <div className="wrapper">
                <Switch>
                    <Route
                        exact
                        path={["/signin", "/signup", "/signup/verify"]}
                        component={Auth}
                    />
                    <Route
                        path="/"
                        render={() => (isAuth ? <Auth /> : <Redirect to="/signin" />)}
                    />
                </Switch>
        </div>
    );
};

//export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
export default App;
