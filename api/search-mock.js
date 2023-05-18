import nunjucks from './shared/nunjucks';

export default async function(req, res) {
  res.send(nunjucks().render('search.njk', {
    "latitude": 0,
    "longitude": 11111,
    "now": 22222,
    "elements": [
      {
        "name": "Sussex Ring",
        "coords": [
          51.614863,
          -0.189965
        ],
        "id": "490013049W",
        "route_names": [
          "221",
          "326"
        ],
        "route_ids": [
          "LondonBus221",
          "LondonBus326"
        ],
        "brand_ids": [
          "LondonBus"
        ],
        "alias": "sussex-ring-nw",
        "bearing": "NW",
        "direction": "Mill Hill Or Whetstone",
        "kind": "transitstop",
        "walk_time_seconds": 72
      },
      {
        "name": "Hail & Ride Argyle Road",
        "coords": [
          51.613594,
          -0.187589
        ],
        "id": "490000375Y",
        "route_names": [
          "326"
        ],
        "route_ids": [
          "LondonBus326"
        ],
        "brand_ids": [
          "LondonBus"
        ],
        "alias": "hail-ride-argyle-road",
        "bearing": "NW",
        "kind": "transitstop",
        "walk_time_seconds": 111
      }
    ]
  }));
}
