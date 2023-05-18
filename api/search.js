import nunjucks from './shared/nunjucks';

export default async function(req, res) {
  const {latitude, longitude} = req.cookies;
  const url = `https://citymapper.com/api/3/nearby?brand_ids=LondonBus,GenericUKBus,UKAirportBusExpress,UKNationalExpress,UKGreenLine,UKEasyBus,Arriva,First,OxfordBusCompany,ReadingBuses,Stagecoach,Centrebus,BrightonHoveBuses,IpswichBuses,SussexMetrobus,StephensonsEssex,CompassTravel&location=${latitude},${longitude}&region_id=uk-london&mode_id=uk-london-bus&limit=50&extended=1`;
  const fetchedRes = await fetch(url);
  const fetchedData = await fetchedRes.json();
  const { elements } = fetchedData;

  res.send(nunjucks().render('search.njk', {
    latitude,
    longitude,
    elements,
  }));
}
