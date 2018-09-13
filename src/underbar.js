(function() {
  'use strict';

  window._ = {};
  _.identity = function(val) {
    return val;
  };

  _.first = function(array, n) {
    return (n === undefined) ? array[0] : array.slice(0, n);
  };

  _.last = function(array, n) {
    var startIndex = (n > array.length) ? 0 : array.length - n;
    return (n === undefined) ? array[array.length - 1] : array.slice(startIndex);
  };

  _.each = function(collection, iterator) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {
      for (var key in collection) {
        iterator(collection[key], key, collection);
      }
    }
  };

  _.indexOf = function(array, target){
    var result = -1;
    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });
    return result;
  };

  _.filter = function(collection, test) {
    var filteredCollection = [];
    _.each(collection, function(item) {
      if (test(item)) filteredCollection.push(item);
    });
    return filteredCollection;
  };

  _.reject = function(collection, test) {
    var testFailed = function(item) {
      return !test(item);
    };
    return _.filter(collection, testFailed);
  };

  _.uniq = function(array, isSorted, iterator) {
    var uniques = array.slice();
    var match = function(a, b) {
      if (iterator !== undefined) {
        return iterator(a) === iterator(b);
      } else {
        return a === b;
      }
    };

    for (var i = 0; i < uniques.length; i++) {
      for (var j = i + 1; j < uniques.length; j++) {
        if (match(uniques[i], uniques[j])) {
          uniques.splice(j, 1);
          j--;
        }
      }
    }
    return uniques;
  };

  _.map = function(collection, iterator) {
    var newCollection = [];
    _.each(collection, function(item, key, collection) {
      newCollection.push(iterator(item, key, collection));
    });
    return newCollection;
  };

  _.pluck = function(collection, key) {
    return _.map(collection, function(item){
      return item[key];
    });
  };

  _.reduce = function(collection, iterator, accumulator) {
    var startUndefined = (accumulator === undefined);
    _.each(collection, function(item, key, collection) {
      if (startUndefined) {
        accumulator = item;
        startUndefined = false;
      } else {
        accumulator = iterator(accumulator, item, key, collection);
      }
    });
    return accumulator;
  };

  _.contains = function(collection, target) {
    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };

  _.every = function(collection, iterator) {
    if (iterator === undefined) {
      iterator = _.identity;
    }
    return _.reduce(collection, function(collectionStatus, item, key, collection) {
      return collectionStatus && !!iterator(item, key, collection);
    }, true);
  };

  _.some = function(collection, iterator) {
    if (iterator === undefined) {
      iterator = _.identity;
    }
    return !_.every(collection, function(item, key, collection) {
      return !iterator(item, key, collection);
    });
  };

  _.extend = function(obj) {
    for (var i = 1; i < arguments.length; i++) {
      var objFromArgs = arguments[i];
      _.each(objFromArgs, function(item, key) {
        obj[key] = item;
      });
    }
    return obj;
  };

  _.defaults = function(obj) {
    for (var i = 1; i < arguments.length; i++) {
      var objFromArgs = arguments[i];
      _.each(objFromArgs, function(item, key) {
        if (obj[key] === undefined) obj[key] = item;
      });
    }
    return obj;
  };

  _.once = function(func) {
    var alreadyCalled = false;
    var result;

    return function() {
      if (!alreadyCalled) {
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      return result;
    };
  };

  _.memoize = function(func) {
    var calls = {};
    return function() {
      var args = JSON.stringify(arguments);
      if (calls[args] === undefined) {
        calls[args] = func.apply(this, arguments);
      }
      return calls[args];
    }
  };

  _.delay = function(func, wait) {
    var argsToPass = _.map(arguments, item => item).slice(2);
    return setTimeout(function(){
      func.apply(this, argsToPass);
    }, wait);
  };

  _.shuffle = function(array) {;
    var copy = array.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var random = Math.floor(Math.random() * (i + 1));
      var temp = copy[i];
      copy[i] = copy[random];
      copy[random] = temp;
    }
    return copy;
  };

  /**
   * ADVANCED
   * =================
   *
   * Note: This is the end of the pre-course curriculum. Feel free to continue,
   * but nothing beyond here is required.
   */

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  _.throttle = function(func, wait) {
  };
}());
