// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { products, ProductProps } from '@/components/data'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductProps[]>
) {
  const {id} = req.query;
  const _products = products.filter(product => product.categories === id);
  res.status(200).json(_products);
}
