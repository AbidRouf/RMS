import { LinkIcon } from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from "next/link";
import { FaAdjust } from "react-icons/fa"

const Nav = () => {

	const { data: session } = useSession()

	return (
		<header>
			<nav>
				<div className="nav__container">

					{/* Logo */}
					<Link href="/">
						<img src="/assets/RateMySubject.svg" className="logo" />
					</Link>

					{/* Levels of Education */}
					<ul className="nav__row">

						<li className="nav__link">
							<Link href="/Options">GCSE</Link>
						</li>
						<li className="nav__link">
							<Link href="/Options">A-Level</Link>
						</li>
						<li className="nav__link">
							<Link href="/Options">University</Link>
						</li>

					</ul>

					{/* Contrast and Sign In Buttons */}
					<div className="icons"> {/* Wrapping icon + button together */}

						<li className="icon click">
							<Link href="#">
								<FaAdjust /> {/* Contrast Button icon import */}
							</Link>
						</li>

						{/* Sign out */}
						{session ? (
							<img
								onClick={signOut}
								className='click pfp'
								src={session.user.image}
							/>
						) : (
							// sign in
							<button
								className='signin btn'
								onClick={signIn}>Sign In</button>
						)}

					</div>

				</div>
			</nav>
		</header>

	)
}

export default Nav