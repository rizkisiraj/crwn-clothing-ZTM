import './categories-items.component.scss';
import CategoryItem from '../category-item/category-item.component';

const CategoriesItems = ({categories}) => (
    <div className='categories-items'>
        {
            categories.map(category => {
                return category.id >= 4 ? <CategoryItem key={category.id} category={category} height='large' /> :  <CategoryItem key={category.id} category={category} height='category-item' />
            })
        }
    </div>
)

export default CategoriesItems;