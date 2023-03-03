// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { categories, CategoriesProps } from '@/components/data'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CategoriesProps[]>
) {
  res.status(200).json(categories);
}
