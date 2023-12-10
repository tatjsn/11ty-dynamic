import nunjucks from './shared/nunjucks';

export default async function (req, res) {
  res.setHeader('Cache-Control', 'no-cache');
  res.send(
    nunjucks().render(req.query.big ? 'stop-big.njk' : 'stop.njk', {
      stops: [
        {
          name: 'Argyle Road / Avondale & Avenue',
          coords: [51.613558, -0.186392],
          indicator: 'TT',
          id: '490003373E',
          routes: [
            {
              name: '221',
              color: '#DC241F',
              text_color: '#FFFFFF',
              ui_color: '#C2322E',
              id: 'LondonBus221',
              brand: 'LondonBus',
              supports_routeinfo: true,
              aliases: ['bus-221'],
            },
          ],
          brands: ['LondonBus'],
          bearing: 'E',
          direction: 'Friern Barnet',
          region_id: 'uk-london',
          services: [
            {
              headsign: 'Turnpike Lane Bus Station',
              route_id: 'LondonBus221',
              live_departures_seconds: [335, 806, 1301],
            },
          ],
        },
      ],
      routeDict: {
        LondonBus221: {
          name: '221',
          color: '#DC241F',
          text_color: '#FFFFFF',
          ui_color: '#C2322E',
          id: 'LondonBus221',
          brand: 'LondonBus',
          supports_routeinfo: true,
          aliases: ['bus-221'],
        },
      },
    })
  );
}
