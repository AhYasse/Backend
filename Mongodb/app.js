const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'mydatabase';

MongoClient.connect(url, (error, res1) => {
  if (error) {
    return console.log('Failed to connect to MongoDB', error);
  }
  console.log('Connected to MongoDB');
  const db = res1.db(dbName);
//   //add 2 Doc by insertOne
//   db.collection('users').insertOne({ name: 'John Doe', age: 30 }, (err, res2) => {
//     {console.log('Document inserted:', res2.insertedId);}
//      console.log(res2.insertedId)
//         res1.close()
//     }   
//     );
//      db.collection('users').insertOne({ name: 'ali ahmed', age: 35 }, (err, res2) => {
//     {console.log('Document inserted:', res2.insertedId);}
//      console.log(res2.insertedId)
//         res1.close()
//     }   
//     );
//     //insertMany 10 Doc 5 Doc 27y
//      db.collection('users').insertMany(
//         [{ name: 'ali ahmed', age: 35 },
//          { name: 'ahmed yasser', age: 35 },
//          { name: 'ali yasser', age: 35 },
//          { name: 'mohamed ahmed', age: 35 },
//          { name: 'aya ahmed', age: 35 },
//          { name: 'alaa ahmed', age: 27 },
//          { name: 'wafaa ahmed', age: 27 },
//          { name: 'habe ahmed', age: 27},
//          { name: 'essra ahmed', age: 27 },
//          { name: 'sarah ahmed', age: 27 }],

// (err, res2) => {
//     if(err){
//         console.log("Error to insert many users!")
//     }
//      console.log(res2.insertedCount)
//         // res1.close()
//     }   
//     );
    //find limit 3 age = 27
    // db.collection('users').find({age:27}).limit(3).toArray((err, users) => {
    //     if (err){
    // return console.log('Error get 3 users');}
    //  console.log(users)
    //     // res1.close()
    // }
    // );
    
    //update one user by id name and inc age 4
    // db.collection('users').updateOne({_id:mongodb.ObjectId("688f99c84351a522ec1539e3")},{
    //                                         $set :{
    //                                             name: "ahmed"
    //                                         },
    //                                     $inc : {
    //                                         age: 4
    //                                     }
    //                                     })
    //  db.collection('users').updateOne({_id:mongodb.ObjectId("688f99c84351a522ec1539e4")},{
    //                                         $set :{
    //                                             name: "ali"
    //                                         },
    //                                     $inc : {
    //                                         age: 4
    //                                     }
    //                                     })
    //  db.collection('users').updateOne({_id:mongodb.ObjectId("688f99c84351a522ec1539e5")},{
    //                                         $set :{
    //                                             name: "sarah"
    //                                         },
    //                                     $inc : {
    //                                         age: 4
    //                                     }
    //                                     })   
    // db.collection('users').updateOne({_id:mongodb. ObjectId("688f99c84351a522ec1539e6")},{
    //                                         $set :{
    //                                             name: "sarah"
    //                                         },
    //                                     $inc : {
    //                                         age: 4
    //                                     }
    //                                     })     
    // //inc all age 10 times 
    // db.collection('users').updateMany({},{
    //     $inc : {
    //         age: 10
    //     }
    // })  
    
    //delete all users with age 41
  db.collection('users').deleteMany({age: 41}, (err, res2) => {
    if (err) {
      return console.log('Error deleting users:', err);
    }
    console.log('Documents deleted:', res2.deletedCount);
    res1.close();
  });
})










































// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected to MongoDB');
//     const db = client.db(dbName);   
//     const collection = db.collection('collection');
//     // Example operations
//     return collection.insertOne({ name: 'Alice', age: 30 })
//       .then(result => {
//         console.log('Document inserted:', result.insertedId);   
//         return collection.find({}).toArray();
//         })  
//         .then(docs => { 
//             console.log('Documents found:', docs);
//             return collection.updateOne({ name: 'Alice' }, { $set: { age: 31 } });
//             }
//         )
//         .then(result => {
//           console.log('Document updated:', result.modifiedCount);
//           return collection.deleteOne({ name: 'Alice' });
//         })
//         .then(result => {   
//             console.log('Document deleted:', result.deletedCount);
//             client.close();
//             }       
//         )
//       .catch(err => {
//         console.error('Error during operations:', err);
//         client.close();
//       });
//   })
//   .catch(err => {
//     console.error('Failed to connect to MongoDB', err);
//   });   
// Uncomment the following code to use a modular approach for MongoDB operations



// let db;
// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected to MongoDB');
//     db = client.db(dbName);
//   })
//   .catch(err => {
//     console.error('Failed to connect to MongoDB', err);
//   });

// function getCollection(name) {
//   if (!db) {
//     throw new Error('Database not initialized');
//   }
//   return db.collection(name);
// }       

// function insertDocument(collectionName, document) {
//   const collection = getCollection(collectionName);
//   return collection.insertOne(document)
//     .then(result => {
//       console.log('Document inserted:', result.insertedId);
//       return result;
//     })
//     .catch(err => {
//       console.error('Error inserting document:', err);
//       throw err;
//     });
// }           

// function findDocuments(collectionName, query = {}) {
//   const collection = getCollection(collectionName);
//   return collection.find(query).toArray()
//     .then(docs => {
//       console.log('Documents found:', docs);
//       return docs;
//     })
//     .catch(err => {
//       console.error('Error finding documents:', err);
//       throw err;
//     });
// }       
// function updateDocument(collectionName, query, update) {
//   const collection = getCollection(collectionName);
//   return collection.updateOne(query, { $set: update })
//     .then(result => {
//       console.log('Document updated:', result.modifiedCount);
//       return result;
//     })
//     .catch(err => {     
//       console.error('Error updating document:', err);
//       throw err;
//     });
// }       
// function deleteDocument(collectionName, query) {
//   const collection = getCollection(collectionName);
//   return collection.deleteOne(query)            
//     .then(result => {
//       console.log('Document deleted:', result.deletedCount);
//       return result;
//     })
//     .catch(err => {
//       console.error('Error deleting document:', err);
//       throw err;
//     });
// }   
// module.exports = {
//   insertDocument,
//   findDocuments,    
//     updateDocument,
//     deleteDocument
// };
