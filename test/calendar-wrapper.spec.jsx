import React 			from "react";
import test 			from "tape";
import { shallow } 		from "enzyme";

import CalendarWrapper	from "../src/components/CalendarWrapper";
import Calendar			from "../src/components/Calendar";
import Dropdown			from "../src/components/Dropdown";

test("<CalendarWrapper /> renders one <Dropdown /> ", (t) => {
	const wrapper = shallow(<CalendarWrapper />);
	t.equal(wrapper.contains(<Dropdown />), true);
	t.end();
});


test("<CalendarWrapper /> renders one <Calendar /> ", (t) => {
	const wrapper = shallow(<CalendarWrapper />);
	t.equal(wrapper.contains(<Calendar />), true);
	t.end();
});