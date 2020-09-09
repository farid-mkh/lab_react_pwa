import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';
//logo
import logo from '../assets/logo/logo.svg'

const Home = (props) => {
    return (
        <div className="center min-vh-100">
            <div className="bubble position-absolute bg-red absolute-center mr-5"></div>
            <div className="bubble position-absolute bg-yellow absolute-center-right ml-5">farid</div>
            <Card className="col-lg-2 px-0 center border-0 shadow-yellow rounded-more animate__animated animate__fadeIn">
                <Card.Header className="w-100 center mx-0 rounded-more border-0"><Image srcSet={logo} width="100"/></Card.Header>       
                <Link className="btn btn-red my-5 text-white" to="/desktop">حالت دسکتاپ</Link>
                <Link className="btn btn-yellow mb-5" to="/mobile">حالت موبایل</Link>
                <small className="text-muted font-sm mb-5">حالت موبایل را در گوشی خود باز کنید</small>
            </Card>
        </div>
    );
};

export default Home;