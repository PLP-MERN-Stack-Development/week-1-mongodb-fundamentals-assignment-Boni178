/* Task 2: Basic CRUD Operations */

db.books.find({genre : "Fantasy"})


db.books.find({"Published Year" : {$gt :2015}})

db.books.find({author : "V.E.Schwab"})

db.books.updateOne({title : 'Vicious'}, {$set : {price :18.99}})

db.books.deleteOne({title : "The House in the Cerulean Sea"})


/* Task 3: Advanced Queries */

db.books.find({ "Published Year": { $gt: 2010 }, in_stock: true })

db.books.find({}, {title:1 , author :1 , price : 1})

db.books.find().sort({price :1})

db.books.find().sort({price :-1})

db.books.find().sort({ title: 1 }).skip(0).limit(5)

/*Task 4: Aggregation Pipeline */

db.books.aggregate([ {$group : {_id :"$genre" ,averagePrice :{$avg : "$price"}}} ])

db.books.aggregate([ {$group: { _id: "$author",bookCount: { $sum: 1 }} },{$sort: { bookCount: -1 }},{$limit: 1}])


db.books.aggregate([ {$project: {decade: {$multiply: [{ $floor: { $divide: ["$Published Year", 10] } },10]} }}, { $group: { _id: "$decade",bookCount: { $sum: 1 }}},{ $sort: { _id: 1 } }])


/*Task 5: Indexing */
db.books.createIndex({title :1})

db.books.createIndex({author :1 , "Published Year": 1})


