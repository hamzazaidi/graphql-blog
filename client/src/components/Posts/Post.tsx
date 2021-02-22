import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Post } from "../../model/Post";
import { GET_POSTS } from "../../queries";
import Spinner from "../Spinner/Spinner";
import './Posts.css';
function Posts() {
    const { loading, error, data } = useQuery(GET_POSTS);
    const [postId, setPostId] = useState('');

    function selectPost(value: string) {
        setPostId(value);
    }

    function setSelectedPostClass(id: string) {
        return id === postId ? 'card is-selected' : 'card';
    }

    function setContainerClass() {
        return postId ? 'container-md posts selected' : 'container-md posts'
    }

    function displayPosts() {
        if (loading) {
            return <div className="card">
                <div className="card-body">
                    <Spinner />
                </div>
            </div>
        } else {
            return data.posts.map((u: Post) => {
                return <div
                    className={setSelectedPostClass(u.id)}
                    key={u.id}
                    onClick={() => selectPost(u.id)}
                >
                    <div className="card-body d-flex flex-row shadow-lg p-3 bg-body rounded">
                        <div className="card-content">
                            <h5 className="card-title">{u.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{u.body}</h6>
                        </div>
                        <div className="flex-fill">
                            <img src={u.user.avatar} alt="" className="shadow-sm mb-3 bg-body" />
                            <h6 className="card-subtitle mb-2 text-muted">{u.user.name}</h6>
                        </div>
                    </div>
                </div>
            })
        }
    }
    return (
        <div className={setContainerClass()}>
            { displayPosts()}
        </div>
    );
}

export default Posts;
