import Intro from "./Intro";
import PostContainer from "./PostContainer";

function Home({posts, setPosts}) {
    return ( 
        <div className="Home">
        <Intro/>
        <PostContainer posts = {posts}/>
        </div>
     );
}

export default Home;