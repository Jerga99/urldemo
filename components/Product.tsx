import React from "react";
import Link from "next/link";

const Product = ({products}: any) => {
  return <ul>{products.map((product: any) => {
    return <li key={product.id}>
      <Link href={{
        pathname:`/product`,
        query: {
          id: product.id
        }
      }} as={`${product.url_key}`}>{product.name}</Link>
      </li>
  })}</ul>
}

export default Product;
