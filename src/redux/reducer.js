import { combineReducers } from "redux"
import page, {INITIAL_STATE as PAGE_INITIAL_STATE} from "./page"

export const INITIAL_STATE = {
	page: PAGE_INITIAL_STATE
}
export default combineReducers({
	page
})
