import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Container } from 'reactstrap';
import IPageProps from '../interfaces/page';

const HomePage: React.FunctionComponent<IPageProps> = props => {
    return (
        <Container>
            <Card>
                <CardBody>
                    <p>
                        Welcome to this page that is protected by Friebase auth!
                    </p>
                    <p>
                        Change your password <Link to="/change">here</Link>.
                    </p>
                    <p>
                        Click <Link to='/logout'>here</Link> to logout.
                    </p>
                </CardBody>
            </Card>
        </Container>
    );
}

export default HomePage;