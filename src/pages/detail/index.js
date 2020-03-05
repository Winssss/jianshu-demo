import React, { Component } from 'react';
import * as actionCreator from './store/actionCreator';
import { connect } from 'react-redux';
import { 
  DetailWrapper, 
  MainWrapper,
  Leftside,
  Title,
  Content
} from './style';


class Detail extends Component{
  render() {
    const { title, content } = this.props;
    return(
      <DetailWrapper>
        <MainWrapper>
          <Leftside>
            <Title>{title}</Title>
            <Content dangerouslySetInnerHTML={{__html: content}}></Content>
          </Leftside>
        </MainWrapper>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreator.getDetailList(id));
  }
});

export default connect(mapState, mapDispatch)(Detail);