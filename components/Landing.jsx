import React from 'react'
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa"

const Landing = ({ toggleModal }) => {

    return (
        <section id="Landing">

            <h1 className="title">A better way to choose your
                <span className="purple"> course</span>
            </h1>

            <form className="input__wrapper">

                <input className="search__course" type="text"
                    placeholder="Search for your course to get started"
                    autoComplete="off" required />

            </form>

            <div className="btn__location">
                <Link href="/Options" >
                    <button className='browse__all'>Browse All</button>
                </Link>
            </div>

            <Link href="#">
                <button className="mail__btn click" onClick={() => toggleModal()}>
                    <FaEnvelope />
                </button>
            </Link>

        </section>
    )
}

export default Landing