import { createAction, handleActions } from "redux-actions";

/*
	Action Types
*/

const PAGE = "/page/";
const PAGE_TITLE = PAGE + "title/";
const CHANGE_PAGE_TITLE = PAGE_TITLE + "change";

/*
	Action creator
*/

export const changePageTitle = createAction(CHANGE_PAGE_TITLE);

/*
	Initial State
*/
export const INITIAL_STATE = {
	pageTitle: ""
};

export default handleActions(
	{
		[CHANGE_PAGE_TITLE]: (state, { payload }) => ({
			...state,
			pageTitle: payload
		})
	},
	INITIAL_STATE
);
