import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
	border-radius: 50px;
	background: ${({primary}) => (primary ? '#15cdfc' : '#010606' ) };
	white-space: nowrap;
	padding: ${(big) => (big ? '14px 48px' : '12px 30px') };
	color: ${(dark) => (dark ? '#212121' : '#fff') };
	font-size: ${(fontBig) => (fontBig ? '20px' : '16px') };
	outline: none;
	border; none;
	cursor: pointer;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2 ease-in-out;

	&:hover{
		color: #212121;
		text-decoration: none;
		transition: all 0.2 ease-in-out;
		background: ${({primary}) => (primary ? '#fff' : '#15cdfc' ) };

	}
`

export const OButton = styled.a`
	border-radius: 50px;
	border: 2px solid #15cdfc;
	color: #15cdfc;
	background: #fff;
	font-size: 18px;
	cursor: pointer;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	padding: 12px 30px;

	&:hover{
		text-decoration: none;
		transition: 0.2 ease-in-out;
		background: #15cdfc;
		color: #fff;
	}

`