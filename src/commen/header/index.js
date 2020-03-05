import React ,{ Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {actionCreators} from './store';
import {actionCreators as actionCreator} from '../../pages/signIn/store';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchInputWrapper,
	SearchInput,
	SearchInfo,
	SearchInfoTitle,
	SearchListWrapper,
	SearchListItem,
	SearchInfoSwitch,
	Addition,
	Button
} from './style';


class Header extends Component {

	getListArea() {
		const { 
			focused, 
			mouseIn, 
			list,
			page,
			totalPages,
			handlerMouseIn, 
			handlerMouseLeave,
			switchSearchItem
		} = this.props;

		const newList = list.toJS();
		const getList = [];

		if (newList.length) {
			for (let i=(page-1)*10; i<page*10; i++){
				getList.push(<SearchListItem key={newList[i]}>{newList[i]}</SearchListItem>);
			}
		}

		if ( focused || mouseIn ) {
			return(
				<SearchInfo 
					onMouseEnter={handlerMouseIn}
					onMouseLeave={handlerMouseLeave}
				>
					<SearchInfoTitle>Hot</SearchInfoTitle>
					<SearchInfoSwitch
						onClick={()=>switchSearchItem(page, totalPages, this.iconSpin
							)}
					>
						<i ref={(icon) => {this.iconSpin = icon}} className="iconfont spin">&#xe851;</i>换一批
					</SearchInfoSwitch>
					<SearchListWrapper>
						{getList}
					</SearchListWrapper>
				</SearchInfo>	
			);
		} else {
			return null;
		}
		
	}

	render() {
		const { focused, list, SignInStatus, handleInputFocused, handleInputBlur, signOut } = this.props;
		return (
			<Fragment>
				<HeaderWrapper>
					<Link to="/">
						<Logo />
					</Link>
					<Nav>
						<NavItem className="left active">
							<i className="iconfont">&#xe695;</i>
							首页
						</NavItem>
						<NavItem className="left">
							<i className="iconfont">&#xe784;</i>
							下载 APP
						</NavItem>
						{SignInStatus
							?<NavItem className="right" onClick={signOut}>登出</NavItem>
							:<Link to="signin"><NavItem className="right" >登陆</NavItem></Link>}
						<NavItem className="right iconfont">&#xe636;</NavItem>
						<SearchInputWrapper>
							<CSSTransition
								in={focused}
								timeout={200}
								classNames="slide"
							>
								<SearchInput 
									className={focused ? 'focused' : ''} 
									placeholder="搜索"
									onFocus={() => handleInputFocused(list)}
									onBlur={handleInputBlur}
								/>
							</CSSTransition>
							<i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'} >&#xe62b;</i>
							{this.getListArea()}
						</SearchInputWrapper>
					</Nav>
				</HeaderWrapper>
				<Addition>
					<Button className="signUp">注册</Button>
					<Button className="writing">
						<i className="iconfont">&#xe624;</i>
						写文章
					</Button>
				</Addition>
			</Fragment>
		);
	}
}

const mapState = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPages: state.getIn(['header', 'totalPages']),
		SignInStatus: state.getIn(['signin', 'signIn'])
	}
}

const mapDispatch = (dispatch) => {
	return {
		handleInputFocused(list) {
			dispatch(actionCreators.handleFocused());
			list.size === 0 && dispatch(actionCreators.getListItem());
		},
		handleInputBlur() {
			dispatch(actionCreators.handleBlur());
		},
		handlerMouseIn() {
			dispatch(actionCreators.handlerMouseIn());
		}, 
		handlerMouseLeave() {
			dispatch(actionCreators.handlerMouseLeave()); 
		},
		switchSearchItem(page, totalPages, spin) {
			let originAngel = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngel) {
				originAngel = parseInt(originAngel, 10);
			} else {
				originAngel = 0
			}
			spin.style.transform = 'rotate('+(360+originAngel)+'deg)';
			if (page < totalPages) {
				dispatch(actionCreators.changePage(page+1));
			} else {
				dispatch(actionCreators.changePage(1));
			}
		},
		signOut() {
			dispatch(actionCreator.signout());
		}
	}
}

export default connect(mapState, mapDispatch)(Header);