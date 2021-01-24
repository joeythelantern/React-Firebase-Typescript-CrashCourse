import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Button, FormGroup, Input } from 'reactstrap';
import AuthContainer from '../../components/AuthContainer';
import ErrorText from '../../components/ErrorText';
import { auth } from '../../config/firebase';
import logging from '../../config/logging';
import IPageProps from '../../interfaces/page';

const ChangePasswordPage: React.FunctionComponent<IPageProps> = props => {
    const [changing, setChanging] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [old, setOld] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [error, setError] = useState<string>('');

    const history = useHistory();

    const passwordChangeRequest = () => {
        if (password !== confirm)
        {
            setError('Make sure your passwords are matching');
            return;
        }

        if (error !== '') setError('');

        setChanging(true);

        auth.currentUser?.updatePassword(password)
        .then(() => {
            logging.info('Password change successful.');
            history.push('/');
        })
        .catch(error => {
            logging.error(error);
            setChanging(false);
            setError(error.message);
        });
    }

    if (auth.currentUser?.providerData[0]?.providerId !== 'password')
        return <Redirect to="/" />;

    return (
        <AuthContainer header="Change Password">
            <FormGroup>
                <Input 
                    autoComplete="new-password"
                    type="password"
                    name="oldPassword"
                    id="oldPassword"
                    placeholder="Current Password"
                    onChange={event => setOld(event.target.value)}
                    value={old}
                />
            </FormGroup>
            <FormGroup>
                <Input 
                    autoComplete="new-password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                />
            </FormGroup>
            <FormGroup>
                <Input 
                    autoComplete="new-password"
                    type="password"
                    name="confirm"
                    id="confirm"
                    placeholder="Confirm Password"
                    onChange={event => setConfirm(event.target.value)}
                    value={confirm}
                />
            </FormGroup>
            <Button
                disabled={changing}
                color="success"
                block
                onClick={() => passwordChangeRequest()}
            >
                Change Password
            </Button>
            <ErrorText error={error} />
        </AuthContainer>
    );
}

export default ChangePasswordPage;