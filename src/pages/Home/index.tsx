import React from 'react';
import IntroImage from './IntroImage';
import { Container } from '@material-ui/core';
import CoursesList from '../../components/CoursesList';

export default class Home extends React.Component {

    public render() {
        console.log('Home')
        return (
            <Container>
                <IntroImage/>
                <CoursesList/>
            </Container>
        );
    }

}
