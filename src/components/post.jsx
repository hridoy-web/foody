import { use } from "react";


const Post = ({data}) => {

    const allPosts = use(data)

    console.log(allPosts);

    return (
        <div>
            <h2>{allPosts.length}</h2>
            {
                allPosts.map(posts => <h2 key={posts.id}>{posts.title}</h2> )
            }
        </div>
    );
};

export default Post;