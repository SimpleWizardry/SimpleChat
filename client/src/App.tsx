import React, { FC } from 'react';
import './App.less';
import { Route, Redirect, Switch } from "react-router-dom";
import {Auth, Home} from "./pages";
import {useTypedSelector} from "./hooks/useTypedSelector";

const App: FC = (props) => {
    const isAuth = useTypedSelector(state => state.user.isAuth)
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
                        render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
                    />
                </Switch>
        </div>
    );
};

export default App;
