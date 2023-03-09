const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dk8yjc0ph', 
    api_key: '539142784594357', 
    api_secret: 'ZgyIXCBqlVEvc8kc6tJjsVQISRI',
    secure: true
  });
  module.exports = cloudinary