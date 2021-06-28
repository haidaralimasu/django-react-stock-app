import React, {useState} from 'react'
import Navbar from '../components/Navbar/index'
import Sidebar from '../components/Sidebar/index'

const About = () => {

	const [isOpen, SetisOpen ] = useState(false)

    const toggle = () => {
        SetisOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
        	<Navbar toggle={toggle} />
            <h1>About</h1>
        </>
    )
}

export default About
