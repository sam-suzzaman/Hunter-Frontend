import React from "react";
import Wrapper from "../assets/css/wrappers/LandingPage";
import { Link } from "react-router-dom";
import photo from "../assets/media/LandingPage/hero.png";

const Landing = () => {
    return (
        <Wrapper>
            <div className="hero-content">
                <div className="text-content">
                    <h1>
                        Biggest <span className="fancy">Job Tracking</span> App
                    </h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Illo perferendis dignissimos eligendi voluptas
                        exercitationem, eius aut mollitia quasi nisi voluptatem
                        similique, tempore totam, odit repellendus non. Dolores
                        eos animi recusandae.
                    </p>
                    <div className="btn-grp">
                        <Link className="btn" to="/login">
                            login
                        </Link>
                        <Link className="btn" to="/register">
                            register
                        </Link>
                    </div>
                </div>
                <div className="placeholder">
                    <img src={photo} alt="job viva photo" />
                </div>
            </div>
        </Wrapper>
    );
};

export default Landing;
