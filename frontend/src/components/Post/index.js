import React , {useEffect, useState }from 'react'
import {
	CardContainer,
	CardWrapper,
	CardImg,
	Cards,
	CardTitle,
    CardBG,
	CardInfo,
} from '../Card/CardElements'
import SearchBar from '../SearchBar/index'
import {OButton} from '../ButtonElements'
import {getPosts } from "../../core/helper/coreapicalls";
import {Link} from 'react-router-dom'

const Card = () =>{

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllPosts = () => {
        getPosts()
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    console.log(error);
                } else {
                    setPosts(data);
                }
            })
            .catch((err) => console.log(err));
    };

    const SearchFunc = () => {
        let filter = document.getElementby('input')
    }

    useEffect(() => {
        loadAllPosts();
    }, []);

        

	return(
        <>
        
		<CardContainer>
        <CardBG>
        <SearchBar id="input" />
		<CardWrapper>

{posts.map((post, index) => {

     
             return (
                    <div key={index}>
                       <Cards>
		<CardImg src={post.thumbnail}/>
		<CardTitle>
		{post.title}
		</CardTitle>
		<CardInfo>
		{post.excerpt}
		</CardInfo>
        <CardInfo><CardInfo>
        {post.month} {post.day}
        </CardInfo>
        {post.author}
        </CardInfo>
        <Link to={`/blog/${post.slug}`}  >
        Continue Reading
        </Link>
          
		  
     
        
		</Cards>
                    </div>
                );
            })}

		</CardWrapper>

    </ CardBG>
		</CardContainer>
        </>
		)
}

export default Card