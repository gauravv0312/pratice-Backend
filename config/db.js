const mongoose = require('mongoose');

const connectWithDb = ()=>{
mongoose.connect(process.env.DB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
}).then(console.log(`DB GOT CONNECT`))
  .catch((error)=>{
       console.log('DB CONNECTION ISSUSE');
       console.log(error);
  });
};

module.exports = connectWithDb