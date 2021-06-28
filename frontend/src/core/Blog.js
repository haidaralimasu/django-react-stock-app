import React, {useState}  from 'react'
import Navbar from '../components/Navbar/index'
import Sidebar from '../components/Sidebar/index'
import Footer from '../components/Footer/Footer'
import Post from '../components/Post/index'

const Blog = () => {

	const [isOpen, SetisOpen ] = useState(false)

    const toggle = () => {
        SetisOpen(!isOpen)
    }

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
            <Post />
            <Footer />
        </>
    )
}

export default Blog;
