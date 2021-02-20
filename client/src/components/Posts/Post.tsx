import { useQuery } from "@apollo/client";
import { Post } from "../../model/Post";
import { GET_POSTS } from "../../queries";
import Spinner from "../Spinner/Spinner";
import './Posts.css';
function Posts() {
    const { loading, error, data } = useQuery(GET_POSTS);
    function displayPosts() {
        if (loading) {
          return <div className="card">
            <div className="card-body">
              <Spinner />
            </div>
          </div>
        } else {
          return data.posts.map((u: Post) => {
            return <div className="card" key={u.id}>
              <div className="card-body d-flex flex-row">
                <div className="card-content">
                  <h5 className="card-title">{u.title}</h5>  
                  <h6 className="card-subtitle mb-2 text-muted">{ u.body }</h6>                      
                </div>            
              </div>
            </div>
          })
        }
      }
    return (
      <div className="container posts">
          { displayPosts() }
      </div>
    );
  }
  
  export default Posts;
  