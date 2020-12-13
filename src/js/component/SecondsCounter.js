import React from "react";
import PropTypes from "prop-types";

export const SecondsCounter = props => {
	// Returns HTML and Bootstrap layout
	return (
		<div className="container bg-dark text-white rounded">
			<div className="row">
				<span className="col border-light">
					<i className="far fa-clock fa-5x" />
				</span>
				<span className="col border border-light border-bottom-0 h3">
					{props.secondSix % 10}
				</span>
				<span className="col border border-light border-bottom-0 h3">
					{props.secondFive % 10}
				</span>
				<span className="col border border-light border-bottom-0 h3">
					{props.secondFour % 10}
				</span>
				<span className="col border border-light border-bottom-0 h3">
					{props.secondThree % 10}
				</span>
				<span className="col border border-light border-bottom-0 h3">
					{props.secondTwo % 10}
				</span>
				<span className="col border border-light border-bottom-0 h3">
					{props.secondOne % 10}
				</span>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	secondOne: PropTypes.number,
	secondTwo: PropTypes.number,
	secondThree: PropTypes.number,
	secondFour: PropTypes.number,
	secondFive: PropTypes.number,
	secondSix: PropTypes.number
};

export default SecondsCounter;
