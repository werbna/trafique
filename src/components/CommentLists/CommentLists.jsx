import { Link } from "react-router-dom";


const CommentList = (props) => {
  if (!props.comments) {
    return <p>No comments found.</p>;
  }

  return (
    <main>
      {props.comments.map((comment) => (
        <Link key={comment._id} to={`/logEntry/${comment._id}`}>
          <article>
            <header>
              <h2>{comment.title}</h2>
              <p>
                {comment.author.username} posted on 
                {new Date(comment.createdAt).toLocaleDateString()}
              </p>
            </header>
            <p>{comment.text}</p>
          </article>
        </Link>
      ))}
    </main>
  );
}
export default CommentList;