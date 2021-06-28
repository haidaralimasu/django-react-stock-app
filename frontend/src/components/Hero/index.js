import React, {useState} from 'react'
import {
    HeroContainer,
    HeroBg,
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward, 
    ArrowRight,
} from './HeroElements'
import hero from './hero.jpeg'
    import { Button } from '../ButtonElements'

const Hero = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
        <HeroBg>
        <ImageBg src={hero} />
        </HeroBg>
        <HeroContent>
        <HeroH1>
        Analysing Stock Market Is Now Easy
        </HeroH1>
        <HeroP>
        Get your Market skills to next level with us.
        </HeroP>
        <HeroBtnWrapper>
        
        <Button to="/blog" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" >
        Explore Blog {hover ? <ArrowForward /> : <ArrowRight />} 
        </Button>
        </HeroBtnWrapper>
        </HeroContent>
        </HeroContainer>
    )
}

export default Hero
