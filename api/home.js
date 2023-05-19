import nunjucks from './shared/nunjucks';

export default async function (req, res) {
  res.send(nunjucks().render('lookup.njk'));
}
