import React, { useState, useEffect } from "react";
import {
    TGContainer,
    TGCard,
TGH1,
    TGWrapper,
    TGH2,
    TGH3,
    TGH3s,
} from "./TopGainersElements";
import '../../styles.css'
import Carousel from 'react-elastic-carousel'
import {getTopgainers, getToplosers } from "../../core/helper/coreapicalls";

const TGMain = () => {

    // const [toplosers, setToplosers] = useState([]);
    // const [error, setError] = useState(false);

    const loadAllToplosers = () => {
        getToplosers()
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    console.log(error);
                } else {
                    setToplosers(data);
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadAllToplosers();
    }, []);



    const [topgainers, setTopgainers] = useState([]);
    const [error, setError] = useState(false);
    const [toplosers, setToplosers] = useState([]);

    const loadAllTopgainers = () => {
        getTopgainers()
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    console.log(error);
                } else {
                    setTopgainers(data);
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadAllTopgainers();
    }, []);

    const breakPoints = [
        {width: 500, itemsToShow:1},
        {width: 768, itemsToShow:2},
        {width: 1200, itemsToShow:3},
        {width: 1500, itemsToShow:4},
    ]

    return (
        

        <TGContainer>
<TGH1>
TopGainers & TopLosers
</TGH1>
            <TGWrapper>
                <Carousel  breakPoints={breakPoints}>
        {topgainers.map((topgainer, index) => {
                return (
                    <div key={index}>
                        <TGCard>
                            <TGH2>{topgainer.securityID}</TGH2>
                            <TGH3s className="green">High: {topgainer.LTP}₹</TGH3s>
                            <TGH3s className="red">Low: {topgainer.change}₹</TGH3s>
                            <TGH3s className="green">Net: {topgainer.pChange}%</TGH3s>
                            
                            
                        </TGCard>
                    </div>
                );
            })}
        </Carousel>
        <Carousel breakPoints={breakPoints}>
        {toplosers.map((toploser, index) => {
                return (
                    <div key={index}>
                        <TGCard>
                            <TGH2>{toploser.securityID}</TGH2>
                            <TGH3s className="green">High: {toploser.LTP}₹</TGH3s>
                            <TGH3s className="red">Low: {toploser.change}₹</TGH3s>
                            <TGH3s className="red">Net: {toploser.pChange}%</TGH3s>
                            
                            
                        </TGCard>
                    </div>
                );
            })}
        </Carousel>
      </TGWrapper>
        </TGContainer>

        
    );
};

export default TGMain;
