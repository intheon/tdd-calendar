import React 			from "react";
import test 			from "tape";
import { shallow } 		from "enzyme";

import Dropdown			from "../src/components/Dropdown";
import SelectForm		from "../src/components/SelectForm";

test("<Dropdown /> renders one <SelectForm /> ", (t) => {
	const wrapper = shallow(<Dropdown />);
	t.equal(wrapper.contains(<SelectForm />), true);
	t.end();
});