function Post({ src, name }) {
    const handleClick = (name) => {
      console.log('Clicked on ' + name);
      alert("Here's " + name);
    }

    const handleMouseEnter = (name) => {
      console.log('Howdy ' + name);
    }

    const handleMouseLeave = (name) => {
      console.log('See ya ' + name);
    }

    return (
        <li className='post-component'>
            <button onClick={ () => handleClick(name)} onMouseEnter={() => handleMouseEnter(name)} onMouseLeave={() => handleMouseLeave(name)}>
              <img src={src} alt={name} />
              <p className="post-name">{name}</p>
            </button>
          </li>
    )
}

export default Post;