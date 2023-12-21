function SelectedItem({ src, name }) {
    return (
        <div className='selected-item'>
            <p>{name}</p>
            <img src={src} alt={name} />
        </div>
    )
}

export default SelectedItem;