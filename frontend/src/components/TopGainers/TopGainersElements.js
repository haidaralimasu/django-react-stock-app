import styled from 'styled-components'

export const TGContainer = styled.div`
	height: 400px;
	
	justify-content: center;
	flex-direction; column;
	align-items: center;
	

	@media screen and (max-width: 768px) {
		height: 700px
	}

	@media screen and (max-width: 480px) {
		height: 700px;
	}
`
export const TGWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display:grid;
	
	grid-template-columns: 1fr 1fr;
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}

	@media screen and (max-width: 480px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`
export const TGCard = styled.div`
	background: #212121;
	display: flex;
	flex-direction: column;
	justify-content: flex-start
	align-items: center;
	border-radius: 10px;
	height: 200px;
	width: 300px;
color:#fff;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.2);
	transition: all 0.2s ease-in-out;

	&:hover{
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`
export const TGIcon = styled.img`
	height: 60px;
	width: 60px;
	display: flex;
	
	margin: auto;
`

export const TGH1 = styled.h1`
	font-size: 2.5rem;
	text-align: center;
	margin: 64px;
	border-radius:10px;
	color: #15cdfc;
	background:#212121;
	@media screen and (max-width: 480px){
		font-size: 2rem;
	}
`
export const TGH2 = styled.h2`
	font-size: 1.8rem;
	margin-bottom: 10px;
	text-align: center;

@media screen and (max-width: 480px) {
		font-size: 1rem;
	}
`
export const TGH3 = styled.h3`
	font-size: 1rem;
	color: #15cdfc;
	font-weight: bold;
	text-align: center;
`
export const TGH3s = styled.h3`
	font-size: 1rem;
	text-align: center;
	// color: red;

`
export const VCard = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-btween;
	width: 90vw;
	height: 30px;
	align-items: center;
`
