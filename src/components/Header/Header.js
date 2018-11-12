import React from "react";

const pageTitles = ["Hello", "World", "!"];

export default props => {
	const { pageTitle } = props;
	return (
		<div>
			<nav className="navbar navbar-default" role="navigation">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">
							pageTitles
						</a>
					</div>
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							{pageTitles.map(title => (
								<li>
									<a href="#">{title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
