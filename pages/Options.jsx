import React from 'react';
import Link from "next/link";


const Options = () => {
    return (
        <section id="Options">
            <div className="container">
                <div className="row">

                    <h2 className="option__title"> {/*Adding the title*/}
                        Choose from a range of <span className="purple">Options</span>
                    </h2>

                    {/*Adding the 3 columns*/}
                    <div className="options__wrapper">
                        <div className="option">
                            <h3 className="option__subtitle">GCSE</h3> {/*GCSE ROW*/}

                            <li className="option__list">
                                <Link to="/ComputerScience" className="
                                link__hover-effect
                                link__hover-effect--purple
                                ">Computer Science</Link>
                            </li>
                            
                        </div>

                        <div className="option">
                            <h3 className="option__subtitle">A-Level</h3> {/*A-LEVEL ROW*/}

                            <li className="option__list">
                                <Link href="/Maths" className="
                                link__hover-effect
                                link__hover-effect--purple
                                ">Maths</Link>
                            </li>

                        </div>

                        <div className="option">
                            <h3 className="option__subtitle">University</h3> {/*UNIVERSITY ROW*/}

                            <li className="option__list">
                                <Link href="/Computer Science with Business" className="
                                link__hover-effect
                                link__hover-effect--purple
                                ">Computer Science with Business</Link>
                            </li>

                        </div>

                    </div>

                </div>
            </div>
        </section >
    );
};

export default Options;
