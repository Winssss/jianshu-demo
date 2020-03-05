import styled from 'styled-components';
import logoPic from '../../statics/logo.png';


export const HeaderWrapper = styled.div`
	position: relative;
	height: 56px;
`

export const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 50px;
	display: block;
	width: 100px;
	height: 56px;
	background: url(${logoPic});
	background-size: contain;

`

export const Nav = styled.div`
	width: 960px;
	height: 56px;
	margin: 0 auto;
`

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 10px;
	margin-right: 10px;
	&.left {
		float: left;
		
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`

export const SearchInputWrapper = styled.div`
	float: left;
	position: relative;
	height: 56px;
	.zoom {
		position: absolute;
		right: 5px;
		bottom: 14px;
		width: 28px;
		height: 28px;
		background: #eee;
		border-radius: 50%;
		text-align: center;
		line-height: 28px;
		margin-right: 0;
		&.focused {
			background: #999;
			color: #fff;
		}
	}
	.slide-enter {
		transition: all .2s ease-out;
	}
	.slide-enter-active {
		width: 320px;
	}
	.slide-exit {
		transition: all .2s ease-out;
	}
	.slide-exit-active {
		width: 260px;
	}
`

export const SearchInput = styled.input`
	margin-top: 9px;
	width: 260px;
	height: 38px;
	box-sizing: border-box;
	border: 1px solid #eee;
	background: #eee;
	border-radius: 40px;
	padding: 0 30px 0 20px;
	font-size: 13px;
	color: #777;
	&::placeholder {
		color: #777;
	}
	&.focused {
		width: 320px;
	}
`

export const SearchInfo = styled.div`
	position: absolute;
	top: 58px;
	left: 0;
	box-sizing: border-box;
	padding: 10px;
	width: 260px;
	background: #fff;
	box-shadow:  0 0 8px rgba(0,0,0, .1);
	border-radius: 5px;
	
`

export const SearchInfoSwitch = styled.span`
	display: block;
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		float: left;
		display: block;
		font-size: 13px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`

export const SearchInfoTitle = styled.div`
	display: inline-block;
	font-size: 15px;
	color: #333;
`

export const SearchListWrapper = styled.div`
	width: auto;
	margin-top: 5px;
`

export const SearchListItem = styled.a `
	display: inline-block;
	border: 1px solid #999;
	font-size: 14px;
	color: #777;
	padding: 3px;
	border-radius: 5px;
	margin-right: 5px;
	margin-bottom: 5px;
`


export const Addition = styled.div`
	position: absolute;
	top:0;
	right: 50px;
	height: 56px;
`

export const Button = styled.div`
	float: left;
	margin-top: 9px;
	height: 38px;
	text-align: center;
	line-height: 38px;
	border: 1px solid rgba(236,97,73,.7);
	border-radius: 20px;
	&.signUp {
		width: 80px;
		color: #ea6f5a;
		margin-right: 10px;
	}
	&.writing {
		width: 100px;
		color: #fff;
		background: #ea6f5a;
	}
`