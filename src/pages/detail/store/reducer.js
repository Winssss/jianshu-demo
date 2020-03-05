import * as constant from './constant';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: '',
  content: ''
});

export default(state=defaultState, action) => {
  switch(action.type) {
    case constant.ADD_DETAIL_ITEM:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default: 
      return state;
  }

}