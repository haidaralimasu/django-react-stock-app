import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
	min-height: 692px;
	// max-height: 100%;
	// position: fixed;

	display: flex;
	flex-direction: column;
	margin: auto;
	background: #15cdfc;
	
	// z-index: 0;
	overflow: hidden;

`

export const FormWrap = styled.div`
	height: 100%;
	display: flex;
	width: 100%;
	background: #212121;
	flex-direction: column;
	justify-content:center;
	margin: auto;
	@media screen and (max-width: 400px){
		height: 80%;
	}
`

export const FormContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #15cdfc;

	@media screen and (max-width: 480px){
		padding: 10px;
	}
`

export const Form = styled.form`
	max-width: 400px;
	width: 450px;
	height: auto;
	max-width: 100%;
	z-index: 1;
	display: grid;
	margin: 0 auto;
	padding: 80px 32px;
	background: #212121;
	border-radius: 4px;

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	}
`

export const FormH1 = styled.h1`
	margin-bottom: 40px;
	color: #fff;
	font-size: 20px;
	font-weight: 400px;
	text-align: center;

`
export const FormLabel = styled.label`
	margin-bottom: 8px;
	font-size: 14px;
	color: #fff;
`
export const FormInput = styled.input`
	padding: 16px 16px;
	margin-bottom: 32px;
	border: none;
	border-radius: 4px;
`
export const FormBtn = styled.button`
	background: #15cdfc;
	padding: 16px 0;
	border: none;
	border-radius: 4px;
	color: #fff;
	font-size: 20px;
	cursor: pointer;
`

export const Text = styled(Link)`
	text-align:center;
	margin-top; 24px;
	color: #fff;
	font-size: 14px;
`