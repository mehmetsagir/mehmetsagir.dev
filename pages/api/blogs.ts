import type { NextApiRequest, NextApiResponse } from 'next';
import { parse } from 'rss-to-json';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    var rss = await parse('https://medium.com/feed/@mehmetsagir');

    return res.status(200).json(
      rss.items.map(item => ({
        title: item.title,
        link: item.link,
        date: item.published,
        content: item.content.replaceAll(/<[^>]*>/g, ' '),
        tags: item.category
      }))
    );
  } catch (error) {
    return res.status(200).json([]);
  }
}
