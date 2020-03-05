import React from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';


const Topic = (props) => {
  const { topicList } = props; 
  return (
    <TopicWrapper>
      {
        topicList.map((item) => (
          <TopicItem key={item.get("id")}>
            <img src={item.get("imgUrl")} alt="" className="topic-pic"/>
            {item.get("name")}
          </TopicItem>
        ))
      }
      
    </TopicWrapper>
  );
}

const mapState = (state) => {
  return {
    topicList: state.getIn(["home", "topicList"])
  }
}

export default connect(mapState, null)(Topic);