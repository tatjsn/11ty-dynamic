import nunjucks from './shared/nunjucks';

export default async function (req, res) {
  const { id } = req.query;
  const url = `https://citymapper.com/api/1/departures?headways=1&ids=${id}&region_id=uk-london`;
  const fetchedRes = await fetch(url);
  const fetchedData = await fetchedRes.json();
  const { stops } = fetchedData;

  res.setHeader('Cache-Control', 'no-cache');
  res.send(
    nunjucks().render(req.query.big ? 'stop-big.njk' : 'stop.njk', {
      stops,
    })
  );
}
