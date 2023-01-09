import type { NextApiRequest, NextApiResponse } from 'next';
import { parse } from 'rss-to-json';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  var rss = await parse('https://medium.com/feed/@mehmetsagir');

  return res.status(200).json(
    rss.items.map((item) => ({
      title: item.title,
      link: item.link,
      date: item.published,
      content: item.content.replaceAll(/<[^>]*>/g, ' '),
      tags: item.category,
    }))
  );
}
