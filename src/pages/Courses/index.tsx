import React from 'react';
import { Container } from '@material-ui/core';
import CoursesList from '../../components/CoursesList';
import CoursesCarousal from './CoursesCarousal';

export default class Courses extends React.Component {

    public render() {
        return (
            <Container>
                <CoursesCarousal />
                <CoursesList/>
            </Container>
        );
    }
}
