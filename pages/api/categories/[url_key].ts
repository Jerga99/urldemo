// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { categories, ProductProps } from '@/components/data'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductProps>
) {
  const urlKey = req.query.url_key;
  const category = categories.find(category => category.url_key === urlKey);
  res.status(200).json(category!);
}
