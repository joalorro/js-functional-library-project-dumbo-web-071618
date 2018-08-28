fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
      //discern between arrays and objects

      if (collection instanceof Object && collection instanceof Array){
        //this block will run if collection is an array
        for (let i = 0; i < collection.length; i++){
          callback(collection[i], i, collection)
        }

      }else if (collection instanceof Object && !(collection instanceof Array)) {
        //this block will run if collection is an POLO
        for (let key in collection) {
          callback(collection[key], key, collection)
        }

      }

      return collection
    },

    map: function(collection, callback) {
      let newArr = [];
      if(collection instanceof Object && collection instanceof Array){
        for (let i = 0; i < collection.length; i++){
          newArr.push(callback(collection[i], i, collection))
      }} else if (collection instanceof Object && !(collection instanceof Array)){
        //this block will run if collection is an POLO
        for (let key in collection) {
          newArr.push(callback(collection[key], key, collection))
        }
      }
      return newArr
    },

    reduce: function(collection,callback,acc = 0) {
      // for(let element in collection){
      //   acc = callback(acc,collection[element])
      // }
      for (let i = 0; i < collection.length; i++){
        acc = callback(acc,collection[i], collection)
      }
      return acc
    },

    find: function(collection,callback){

      if (collection instanceof Object && collection instanceof Array){
        for (let i = 0; i < collection.length; i++){
          if (callback(collection[i])){
            return collection[i]
          }
        }
      } else if (collection instanceof Object && !(collection instanceof Array)){
        for (let element in collection) {
          if (callback(element)){
            return element
          }
        }
      }
      return undefined
    },

    filter: function(collection,callback){
      const newArr = []

      if (collection instanceof Object && collection instanceof Array){
        for (let i = 0; i < collection.length; i++){
          if (callback(collection[i])){
            newArr.push(collection[i])
          }
        }
      }
      return newArr
    },

    size: function(collection,callback){
      let count = 0
      if (collection instanceof Object && collection instanceof Array) {
        for (let i = 0; i < collection.length; i++){
          count++
        }
      } else if (collection instanceof Object && !(collection instanceof Array)){
        for (let element in collection){
          count += 1
        }
      }
      return count
    },

    first: function (collection, n = 1){
      let newArr = [];
      if(n === 1){
        return collection[0]
      } else {
      for (let i = 0; i < n; i++) {
        newArr.push(collection[i])
      }}
      return newArr;
    },

    last: function (collection, n = 1){
      let newArr = [];
      let last = collection.length;
      if (n === 1) {
        return collection[last -1]
      } else {
        // for (let i = last -n; i < last; i++) {
        //   newArr.push(collection[i])
        // }
        newArr = collection.slice(last - n)
      }
      return newArr;
    },

    compact: function(collection){
      let newArr = [];
      for (let i = 0; i < collection.length; i++) {
        if (!!collection[i]){
          newArr.push(collection[i])
        }
      }
      return newArr;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
