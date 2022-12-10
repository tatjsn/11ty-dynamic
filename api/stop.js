import nunjucks from './shared/nunjucks';

export default async function(req, res) {
  const reqUrl = new URL(req.url, 'https://example.com');
  const id = reqUrl.searchParams.get('id');
  const url = `https://citymapper.com/api/1/departures?headways=1&ids=${id}&region_id=uk-london`;
  const fetchedRes = await fetch(url);
  const fetchedData = await fetchedRes.json();
  const { stops } = fetchedData;

  res.setHeader('Cache-Control', 'no-cache');
  res.send(nunjucks().render('stop.njk', {
    stops,
  }));
}
