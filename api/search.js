import nunjucks from 'nunjucks';
import view from '../njk/search.js';

export default async function(req, res) {
  const url = `https://citymapper.com/api/3/nearby?brand_ids=LondonBus,GenericUKBus,UKAirportBusExpress,UKNationalExpress,UKGreenLine,UKEasyBus,Arriva,First,OxfordBusCompany,ReadingBuses,Stagecoach,Centrebus,BrightonHoveBuses,IpswichBuses,SussexMetrobus,StephensonsEssex,CompassTravel&location=${req.body.latitude},${req.body.longitude}&region_id=uk-london&mode_id=uk-london-bus&limit=50&extended=1`;
  const fetchedRes = await fetch(url);
  const fetchedData = await fetchedRes.json();
  const { elements } = fetchedData;
  const html = nunjucks.renderString(view, {
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    now: req.body.now,
    elements,
  });

  return res.send(html);
}
