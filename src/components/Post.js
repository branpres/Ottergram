function Post({ src, name }) {
    return (
        <li className='post-component'>
            <button>
              <img src={src} alt={name} />
              <p className="post-name">{name}</p>
            </button>
          </li>
    )
}

export default Post;