import React, {useState} from 'react'
import Navbar from '../components/Navbar/index'
import Sidebar from '../components/Sidebar/index'
import Card from '../components/Card/index'
import Footer from "../components/Footer/Footer";

const News = () => {

    const [isOpen, SetisOpen ] = useState(false)

    const toggle = () => {
        SetisOpen(!isOpen)
    }

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Card />
        <Footer />
        </>
    )
}

export default News;
