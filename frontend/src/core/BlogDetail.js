import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    Container,
    Img,
    Title,
    Info,
    Content
} from '../components/BlogDetailElements'
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";

const BlogDetail = (props) => {
    const [blog, setBlog] = useState({});
    const [isOpen, SetisOpen] = useState(false);

    const toggle = () => {
        SetisOpen(!isOpen);
    };

    useEffect(() => {
        const slug = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`http://159.65.158.238/api/blog/${slug}`);
                setBlog(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]);

    const createBlog = () => {
        return {__html: blog.content}
    };



    return (

        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        <Container>
        <Title>
        {blog.title}
        </Title>
        <Info>
        {blog.month} {blog.day}        </Info>
        <Img src={blog.thumbnail} />
        <Content dangerouslySetInnerHTML={createBlog()} />
    
        </Container>
        <Footer />
        </div>
    );
};

export default BlogDetail;