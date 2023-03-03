import { ProductProps } from "@/components/data";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { getParamsData, setParamsData } from "../utils/params";

export async function getStaticPaths() {
  const productRes = await fetch("http://localhost:3000/api/products");
  const categoryRes = await fetch("http://localhost:3000/api/categories");

  const products = await productRes.json();
  const categories = await categoryRes.json();

  const productsPaths = products
    .map((product: any) => ({params: {url_key: product.url_key, type: "product"}})) 

  const categoriesPaths = categories
    .map((category: any) => ({params: {url_key: category.url_key, type: "category"}})) 

  const paths = [...productsPaths, ...categoriesPaths]
  
  setParamsData(paths);

  return {
    paths,
    fallback: false
  }
}

type ProductCategoryInfo = {
  params: {
    url_key: string;
    type: "product" | "category"
  }
}

export async function getStaticProps({params}: any) {
  const productCategoryInfo = getParamsData() as ProductCategoryInfo[];

  const info = productCategoryInfo.find(info => info.params.url_key === params.url_key);
  const isProduct = info?.params.type === "product";

  const res = isProduct ? 
    await fetch(`http://localhost:3000/api/products/${params.url_key}`) :
    await fetch(`http://localhost:3000/api/categories/${params.url_key}`);

  const item = await res.json();
  
  return {
    props: {selectedProduct: item, isProduct}
  };
}

const Product: FC<{selectedProduct: ProductProps, isProduct: boolean}> = ({selectedProduct, isProduct}) => {
  const [items, setItems] = useState<ProductProps[]>([]);

  useEffect(() => {
    setItems([]);
    const fetchItems = async () => {
      const res = await fetch(`http://localhost:3000/api/products/category/${selectedProduct.id}`)
      const _items = await res.json();
      setItems(_items);
    }
    if (!isProduct) {
      fetchItems();
    }
  }, [selectedProduct?.id, isProduct]);
  
  return <div>
    <h1>{isProduct ? "Product" : "Category"} - {selectedProduct.name}</h1>
    <p>ID: {selectedProduct.id}</p>
    <p>name: {selectedProduct.name}</p>

    <ul>
      {items.map(item =>
        <li key={item.id}>
          <Link href={`/${item.url_key}`}>
            <span style={{textDecoration: "underline"}}>
              {item.name}
            </span>
          </Link> 
        </li> 
      )}
    </ul>
  </div>
}

export default Product;
