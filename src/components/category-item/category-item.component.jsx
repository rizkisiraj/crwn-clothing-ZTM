import './category-item.styles.css'

const CategoryItem = ({category,className}) => {
    const { title,imageUrl } = category;

    return (
        <div className={className} >
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
                <div className="title">
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </div>
        </div>
    )

}

export default CategoryItem;