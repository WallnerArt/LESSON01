//use("student_db")
// подключение к текущей бд

// создали коллекцию со строкой
//db.students.insertOne({name:'Eugen'})

// пример вложенности 
//db.students.insertOne({name: 'Donald', age:35, address: {country: 'Germany', city: 'Berlin'}})

// пример записи нескольких объектов в коллекцию
//db.students.insertMany([
    //{name: 'Alena', hobby: 'Travel'},
    //{name: 'Eugen', hobby: 'Woodworking'}
//])


// запись одного объекта с несколькими значениями у одного ключа (массив)
//db.students.insertOne({
  //  name:'Harry',
    //hobby: ['Magic', 'Flying', 'Traveling', 'Battle with Evil']
//  })

//db.students.find().limit(2)
