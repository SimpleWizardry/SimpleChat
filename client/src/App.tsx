import React, { FC } from 'react';
import './App.less';
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";

import { Auth, Home } from "pages";

const App: FC = props => {
    const { isAuth } = props;
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

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
