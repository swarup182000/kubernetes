cat <<EOF > index.js
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Hello from Swarup DevOps App! v2</h1>');
});
app.listen(3000, () => {
  console.log('App running on port 3000');
});
EOF
