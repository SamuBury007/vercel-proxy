export default async function handler(req, res) {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    return res.status(400).send('Missing URL');
  }

  try {
    const response = await fetch(targetUrl);
    const html = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send('Error fetching the URL');
  }
}
