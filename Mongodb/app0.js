const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'mydatabase1';

MongoClient.connect(url, (error, res1) => {
  if (error) {
    return console.log('Failed to connect to MongoDB', error);
  }
  console.log('Connected to MongoDB');
  const db = res1.db(dbName);
  //2 insertOne
  db.collection('users').insertOne({ name: 'John Doe', age: 30 }, (err, res2) => {
    {console.log('Document inserted:', res2.insertedId);}
     console.log(res2.insertedId)
        res1.close()
    }   
    );
     db.collection('users').insertOne({ name: 'ali ahmed', age: 35 }, (err, res2) => {
    {console.log('Document inserted:', res2.insertedId);}
     console.log(res2.insertedId)
        res1.close()
    }   
    );
    //insertMany 10 5 27y
     db.collection('users').insertMany(
        [{ name: 'ali ahmed', age: 35 },
         { name: 'ahmed yasser', age: 35 },
         { name: 'ali yasser', age: 35 },
         { name: 'mohamed ahmed', age: 35 },
         { name: 'aya ahmed', age: 35 },
         { name: 'alaa ahmed', age: 27 },
         { name: 'wafaa ahmed', age: 27 },
         { name: 'habe ahmed', age: 27},
         { name: 'essra ahmed', age: 27 },
         { name: 'sarah ahmed', age: 27 }],

(err, res2) => {
    if(err){
        console.log("Error to insert many users!")
    }
     console.log(res2.insertedCount)
        // res1.close()
    }   
    );
    //find limit
    db.collection('users').find({age:27}).limit(3).toArray((err, users) => {
        if (err){
    return console.log('Error get 3 users');}
     console.log(users)
        // res1.close()
    }
    );

});