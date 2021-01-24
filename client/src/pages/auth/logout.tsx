import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import AuthContainer from '../../components/AuthContainer';
import { auth } from '../../config/firebase';
import logging from '../../config/logging';
import IPageProps from '../../interfaces/page';

const LogoutPage: React.FunctionComponent<IPageProps> = props => {
    const history = useHistory();

    const Logout = () => {
        auth.signOut()
        .then(() => history.push('/login'))
        .catch(error => logging.error(error));
    }

    return (
        <AuthContainer header="Logout">
            <p className='text-center'>Are you sure you want to logout?</p>
            <div className='text-center'>
                <Button color="danger" className="mr-2" onClick={() => history.goBack()}>Cancel</Button>
                <Button color="info" className="mr-2" onClick={() => Logout()}>Logout</Button>
            </div>
        </AuthContainer>
    );
}

export default LogoutPage;