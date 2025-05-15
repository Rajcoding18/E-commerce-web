import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import BreadCrums from '../components/BreadCrums/BreadCrums';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productID}= useParams()

  const product = all_product.find((e)=>e.id === Number(productID))
  return (
    <div>
      <BreadCrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product