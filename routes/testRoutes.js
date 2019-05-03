const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer({dest: './public/images/upload'});

const Product = mongoose.model('product');

module.exports = app =>{
  app.get('/upload', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
  });

  app.post('/api/upload', upload.single('image'), async (req, res) =>{
    const { filename } = req.file;
    const { name, brand, price, description } = req.body;
    let image = '';

    (req.file) ? image = filename : image = 'noimage.jpg';

    const newProduct = await new Product({
      name,
      brand,
      image,
      price,
      description
    }).save();

    res.send(newProduct);
  });
}
