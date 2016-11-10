import React from "react";

import Dropdown from "./Dropdown";
import Calendar from "./Calendar";


class CalendarWrapper extends React.Component {

	render(){
		return (
			<div className="wrapper">
				<Dropdown />
				<Calendar />
			</div>
		)
	}

};

export default CalendarWrapper;