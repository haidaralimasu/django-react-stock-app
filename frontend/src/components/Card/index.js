import React , {useEffect, useState }from 'react'
import {
	CardContainer,
	CardWrapper,
	CardImg,
	Cards,
	CardTitle,
	CardInfo,CardBG
} from './CardElements'
import hero from '../Hero/hero.jpeg'
import {Button, OButton} from '../ButtonElements'
import {getNroducts } from "../../core/helper/coreapicalls";

const Card = () =>{

    const [nroducts, setNroducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllNroducts = () => {
        getNroducts()
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    console.log(error);
                } else {
                    setNroducts(data);
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadAllNroducts();
    }, []);


	return(
		<CardContainer>
        <CardBG>
		<CardWrapper>

{nroducts.map((nroduct, index) => {
                return (
                    <div key={index}>
                       <Cards>
		<CardImg src={nroduct.urlToImage}/>
		<CardTitle>
		{nroduct.title}
		</CardTitle>
		<CardInfo>
		{nroduct.description}
		</CardInfo>
		<OButton  href={
                nroduct.url
              }
              rel='noopener noreferrer'
              target='_blank'>
		Read On Web
		</OButton>
		</Cards>
                    </div>
                );
            })}


		</CardWrapper>
        </CardBG>
		</CardContainer>
		)
}

export default Card