import React from "react";
import Link from "next/link";
import { categories, CategoriesProps } from "./data";

const Header = () => {
  return <header>
    <nav style={{padding: 20, color: 'white', backgroundColor: 'blue'}}>
      <ul style={{display:"flex", justifyContent:"space-between", listStyle:"none"}}>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        {categories?.map((category: CategoriesProps) => {
          return <li key={category.id}>
              <Link href={`/${category.url_key}`} >
                {category.name}
              </Link>
          </li>
        })}
      </ul>
    </nav>
  </header>
}

export default Header;
