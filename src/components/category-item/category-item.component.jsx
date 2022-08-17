import { useNavigate } from 'react-router-dom';
import './category-item.styles.jsx'
import { BackgroundImage, Body, DirectoryItemContainer } from './category-item.styles.jsx';

const CategoryItem = ({category,height}) => {
    const { title,imageUrl, route } = category;
    const navigate = useNavigate();

    return (
        <DirectoryItemContainer height={height} onClick={() => navigate(route)}>
            <BackgroundImage imageUrl={imageUrl} />
                <Body>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </Body>
        </DirectoryItemContainer>
    )

}

export default CategoryItem;