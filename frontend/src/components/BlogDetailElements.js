import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	max-width: 90vw;
	flex-direction: column;
	margin: auto;
	@media and screen (max-width: 768px){
		max-width: 90vw;
	}
`
export const Img  = styled.img`
	max-width: 100%;
	max-height: 100vh;
`

export const Title = styled.h1`
	font-size: 2.5rem;
	margin: 32px;
	text-align : center;
	color: #15cdfc;
`

export const Info = styled.h2`
	font-size: 1.5rem;
`
export const Content = styled.p`
	font-size: 1.3rem

`