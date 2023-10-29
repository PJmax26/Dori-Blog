function PostContainer({posts}) {
    return ( 

        <div className="post_container">
            {
                posts.map(post => (
                    <div className="postItem" id={post.id}>
                        <img src={post.img}/>
                        <div className="title">{post.title}</div>
                        <div className="body">
                            {
                                `${(post.body).length >= 100 ? (post.body).slice(0, 100) : post.body} ...`
                            }
                        </div>
                    </div>
                ))
            }
        </div>

     );
}

export default PostContainer;