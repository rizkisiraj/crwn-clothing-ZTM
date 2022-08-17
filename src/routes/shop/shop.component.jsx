import CategoriesPreview from '../categories-preview/categories.component';
import Category from '../category/category.component';
import { Routes, Route } from 'react-router-dom';

import './shop.styles.scss'

export const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
}