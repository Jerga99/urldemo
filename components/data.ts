export interface CategoriesProps {
    id: string;
    name: string;
    description: string;
    url_key: string;
}

export interface ProductProps {
    id: string;
    categories?: string;
    name: string;
    description: string;
    url_key: string;
}

export const categories: CategoriesProps[] = [
  {id: "c-1", name: "Phone", description: "", url_key: "phone"},
  {id: "c-2", name: "Laptop", description: "", url_key: "laptop"},
  {id: "c-3", name: "Keyboard", description: "", url_key: "keyboard"},
  {id: "c-4", name: "iPhone", description: "", url_key: "iphone"},
  {id: "c-5", name: "Tablets", description: "", url_key: "tablets"},
];

export const products: ProductProps[] = [
  {id: "p-1", categories: "c-1", name: "Samsung galaxy S3", description: "", url_key: "samsung-galaxy-s3"},
  {id: "p-2", categories: "c-2", name: "Samsung galaxy A30", description: "", url_key: "samsung-galaxy-a30"},
  {id: "p-3", categories: "c-3", name: "Lenovo ideapad", description: "", url_key: "lenovo-ideapad"},
  {id: "p-4", categories: "c-2", name: "Apple Macbook Pro", description: "", url_key: "apple-macbook-pro"},
  {id: "p-5", categories: "c-3", name: "Logitech Combo", description: "", url_key: "logitech-combo"},
  {id: "p-6", categories: "c-4", name: "iPhone 11 Pro", description: "", url_key: "iphone-11-pro"},
  {id: "p-7", categories: "c-5", name: "samsung galaxy tab 3", description: "", url_key: "samsung-galaxy-tab-3"},
];
