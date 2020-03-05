import React,{ Fragment } from 'react';
import { connect } from 'react-redux';
import { 
  Boder,
  BoderImg
} from '../style';


const Recommed = (props) =>{
  const { recommendList } = props;
  return (
    <Fragment>
      <Boder>
        {
          recommendList.map((item) => (
            <BoderImg src={item.get('imgUrl')}  key={item.get("id")} alt=""/>
          ))
        }
      </Boder>
    </Fragment>
  );
}

const mapState = (state) => {
  return {
    recommendList: state.getIn(["home", "recommendList"])
  }
}


export default connect(mapState, null)(Recommed);