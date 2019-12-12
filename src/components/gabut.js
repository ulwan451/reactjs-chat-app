import React from 'react';

export default function gabut() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<a className="navbar-brand" href="#/">
						Navbar
					</a>

					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="mr-auto" />
						<div className="navbar-nav">
							<a className="nav-item nav-link active" href="#/">
								Home <span className="sr-only">(current)</span>
							</a>
							<a className="nav-item nav-link" href="#/">
								Features
							</a>
							<a className="nav-item nav-link" href="#/">
								Pricing
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
