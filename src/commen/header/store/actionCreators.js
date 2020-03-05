import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';


export const handleFocused = () => ({
	type: constants.INPUT_FOCUSED
});

export const handleBlur = () => ({
	type: constants.INPUT_BLUR
});

export const handlerMouseIn = () => ({
	type: constants.MOUSE_IN
});

export const handlerMouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
	type: constants.CHANGE_PAGE,
	page
});

const getList = (data) => ({
	type: constants.ADD_LIST,
	list: fromJS(data),
	totalPages: Math.ceil(data.length / 10)
})

export const getListItem = () => {
	return (dispatch) => {
		axios.get('api/headerList.json')
			.then(res => {
				dispatch(getList(res.data.data));
			})
	}
}