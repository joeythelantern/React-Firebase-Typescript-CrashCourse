import React from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../../config/firebase';
import logging from '../../config/logging';

export interface IAuthRouteProps { }

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = props => {
    const { children } = props;

    if (!auth.currentUser)
    {
        logging.warn('No user detected, redirecting');
        return <Redirect to="/login" />;
    }

    return (
        <div>{children}</div>
    );
}

export default AuthRoute;