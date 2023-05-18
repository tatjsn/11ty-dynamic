export default function(req, res) {
  res.setHeader('Set-Cookie', [
    `latitude=${req.body.latitude}; Path=/; Secure; HttpOnly`,
    `longitude=${req.body.longitude}; Path=/; Secure; HttpOnly`
  ]);
  // TODO This redirect doesn't work under `vercel dev`
  res.redirect(303, '/search');
}
