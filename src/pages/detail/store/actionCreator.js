import * as constant from './constant';
import axios from 'axios';

const addDetailItem = (data) => ({
  type: constant.ADD_DETAIL_ITEM,
  title: data.title,
  content: data.content
});


export const getDetailList = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+id)
      .then(res => {
        dispatch(addDetailItem(res.data.data))
      });
  }
}


