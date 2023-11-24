import React from "react";
import styled from "styled-components";
import Logo from "../Logo";

const Navbar = ({ navbarRef }) => {
    return (
        <Wrapper ref={navbarRef}>
            <div className="container">
                <Logo />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 0 5px 5px var(--shadow-light);
    padding: 1rem 0;
    .container {
        width: 100%;
        max-width: 1200px;
    }
    @media screen and (max-width: 1200px) {
        padding: 1rem 2rem;
    }
    @media screen and (max-width: 600px) {
        padding: 1.2rem 1rem;
        .container {
            display: flex;
            justify-content: center;
        }
    }
`;

export default Navbar;
