// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { products, ProductProps } from '@/components/data'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductProps[]>
) {
  res.status(200).json(products);
}
