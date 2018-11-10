import {compose} from "recompose";
import {connect} from "react-redux";
import Header from './Header';

export default compose(
	connect(state => ({
		pageTitle: state.page.pageTitle
	})) 
)(Header)

