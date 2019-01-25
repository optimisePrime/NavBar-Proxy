const Express = require('express');
const Path = require('path');
const httpReq = require('axios');
const Port = 3000;

const app = Express();

app.use('/:productId', Express.static(Path.join(__dirname, 'public')));

app.get('/reviews/all/:productid', (req, res) => {
  const productId = req.params.productid;
  httpReq.get(`http://reviewloadbalancer-438610705.us-west-1.elb.amazonaws.com/reviews/all/${productId}`)
  .then((reviews) => {
    res.status(200).send(reviews.data);
  })
  .catch((error) => {
    res.status(501).send(error);
  });
})

app.listen(Port, () => { console.log('listening on port ' + Port)});
