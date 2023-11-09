import React from "react";
import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";
import common from "../assets/media/404/common.png";
import notFound from "../assets/media/404/404.png";

const Error = () => {
    const error = useRouteError();

    if ((error.status = 404)) {
        return (
            <Wrapper>
                <div className="container">
                    <img src={notFound} alt="page not found" />
                    <h2>Opps! {error.statusText}</h2>
                    <Link className="btn" to="/dashboard">
                        back
                    </Link>
                </div>
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            <div className="container">
                <img src={common} alt="error" />
                <h2>Something went to wrong</h2>
                <Link className="btn" to="/">
                    go to home
                </Link>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    .container {
        text-align: center;
        height: 100%;
        width: 100%;
        max-width: 1200px;
    }
    .container img {
        width: 100%;
        max-width: 1000px;
        height: 90%;
        max-height: 400px;
        margin: 0 auto;
        border-radius: 6px;
        object-fit: cover;
    }
    .container h2 {
        margin-top: calc(1rem + 0.4vw);
        text-transform: capitalize;
        font-weight: 500;
        font-size: calc(1rem + 0.7vw);
    }
    .container .btn {
        background-color: var(--color-primary);
        color: var(--color-white);
        font-size: calc(0.9rem + 0.2vw);
        font-weight: 400;
        text-transform: capitalize;
        letter-spacing: 1px;
        padding: 8px 25px;
        border-radius: 6px;
        margin-top: 8px;
        display: inline-block;
    }
`;
export default Error;
