import './style.css'

export const PostCard = (props) => {
  const post = props

  return (
    <div className='post'>
      <img src={post.cover} alt={post.title}></img>
      <div className="post-content">
        <h2 className="post-title">{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}