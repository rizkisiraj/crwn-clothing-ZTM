import { useEffect } from 'react';
import CategoriesPreview from '../categories-preview/categories.component';
import Category from '../category/category.component';
import { Routes, Route } from 'react-router-dom';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.util';

import './shop.styles.scss'
import { useDispatch } from 'react-redux';
import {setCategories} from '../../stores/categories/category.action'

export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      console.log(categoryMap);
      dispatch(setCategories(categoryMap))
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
}