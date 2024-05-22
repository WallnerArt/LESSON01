use("crud_db")



  

 // db.animals.updateMany({kind: 'shark'}, {$set: {predatory: true}})

  //db.animals.updateMany({}, {$inc: {weight: -2}})

  //db.animals.updateOne({_id: ObjectId ('664c5b11e4d957e1dc563bc3')}, 
  //{$set:{weight: 5}})
    

  //db.animals.updateOne({kind: 'cheetah'}, {$push: {foods:
    //'chitos'
  //}})

  //db.animals.updateOne({kind: 'cheetah'}, {$push: {foods:
    //['chips', 'cola']
  //}})


  //db.animals.updateMany({}, {$rename: {predatory: "isPredator"}})

  //db.animals.updateOne(
    //{ kind: 'cheetah' },
    //{ $push: { foods: { $each: ['squid', 'hinkali'] } } }
  //);

  //db.animals.deleteOne({_id: ObjectId('664c588f138aab90fb64a1b1')})
  //db.animals.deleteOne({name: "Sharp"})

  //db.posts.insertOne({likes: 10, text: 'Hello, nice to see you here!'})

  //db.comments.insertMany([
    //{email: "123@google.com", message: 'Hi!', post_id: ObjectId("664c724af3a5021dd4e95a5f")},
    //{email: "345@google.com", message: 'Ohh! nice to see you', post_id: ObjectId("664c724af3a5021dd4e95a5f")},
    //{email: "679@google.com", message: '🙆‍♂️', post_id: ObjectId("664c724af3a5021dd4e95a5f")}
  //])

  //db.comments.aggregate({$lookup: {from: 'posts', localField: "post_id", foreignField: "_id", as: "post_info"}})

  //db.animals.aggregate([
    //{ $match: { isPredator: true } },
    //{ $sort: { weight: -1 } }
  //])

  //db.animals.aggregate([{$match: { isPredator: false}},
    //{$count: "number_of_not_predators"}
  //])

  db.animals.aggregate[[{$sample: {weight: 297}}]]