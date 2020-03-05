import React, {Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../store/actionCreator'
import { 
  ContentListWrapper,
  ListItem,
  ListTitle,
  ListDesc,
  ShowMore
} from '../style';

class ContentList extends Component {
  render() {
    const { articleList,  showMore, page} = this.props;
    return (
      <Fragment>
      <ContentListWrapper>
        {
          articleList.map((item) => (
            <ListItem key={item.get('id')}>
              <Link to={`/detail/${item.get('id')}`}>
                <img className="list-pic" src={item.get('imgUrl')} alt="" />
              </Link>
              <Link to={`/detail/${item.get('id')}`}>
                <ListTitle>{item.get('title')}</ListTitle>
              </Link>
              <ListDesc>
                {item.get('desc')}
              </ListDesc>
            </ListItem>
          ))
        }
      </ContentListWrapper>
      <ShowMore onClick={()=>{showMore(page)}}>More</ShowMore>
      </Fragment>
    );
  }
  
}

const mapState = (state) => ({
  articleList: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"])
})

const mapDispatch = (dispatch) => ({
  showMore(page) {
    dispatch(actionCreators.getMoreLists(page))
  }
});

export default connect(mapState, mapDispatch)(ContentList);