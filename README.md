# SEED Restfull webapi with Sails.Js and Passport.js

created for fast development start.

fist:
```
$ npm install
```
after:

create your personal config file
save it on config/personal.js
```
module.exports = {
		database:{
			mysql: {
			    adapter: 'sails-mysql',
			    host: "yourhostip",
			    port: 3306,
			    user: "yourusername",
			    password: "yourpassword",
			    database: "yourdatabase",
			    charset: 'utf8',
			    collation: 'utf8_swedish_ci'
			  }
		}
};
```

now run it with:
```
$ sails lift
```
test it with:
```
$ npm test
```


still more to come, find me at :

http://twitter.com/leualemax

made with s2 in floripa. 
