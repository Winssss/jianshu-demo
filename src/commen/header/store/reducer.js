import * as constants from './constants.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	list: [],
	page: 1,
	totalPages: 1
});

export default (state=defaultState, action) => {
	switch(action.type) {
		case constants.INPUT_FOCUSED:
			return state.set('focused', true);
		case constants.INPUT_BLUR:
			return state.set('focused', false);
		case constants.MOUSE_IN:
			return state.set('mouseIn', true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case constants.ADD_LIST:
			return state.merge({
				list: action.list,
				totalPages: action.totalPages
			});
		case constants.CHANGE_PAGE: 
			return state.set('page', action.page);
		default: 
			return state;
	}
}