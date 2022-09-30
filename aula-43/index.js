const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://xuxinha:xuxinha123@cluster0.pugm9rh.mongodb.net/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Yarn' });
kitty.save().then(() => console.log('Gato salvo com sucesso!'));

