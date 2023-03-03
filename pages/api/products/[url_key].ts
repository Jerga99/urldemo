// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { products, ProductProps } from '@/components/data'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductProps>
) {
  const urlKey = req.query.url_key;
  
  const product = products.find(product => product.url_key === urlKey);
  res.status(200).json(product!);
}
