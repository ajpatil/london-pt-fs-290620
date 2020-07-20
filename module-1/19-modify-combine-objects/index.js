/**
 * Exercise 1
 *
 * Create an object {user} and add properties "firstName" and "lastName".
 */
 let user = {
   firstName: 'AJ',
   lastName: 'Patil'
 }

/**
 * Exercise 2
 *
 * Create an object {userRead} and add properties "books" and "newspapers".
 * Both should be arrays with strings.
 */
 let userRead = {
   books: ['Wool','LOTR'],
   newspapers: ['Guardian', 'Independant'],
   

 }
/**
 * Exercise 3
 *
 * extend {user} object with all properties from {userRead} object
 *
 * Note: if I modify {userRead} it shouldn't change {user} object
 *
 * Result should be:
 * user = {
 *   firstName: '',
 *   lastName: '',
 *   books: [],
 *   newspapers: []
 * }
 */
   Object.assign(user, userRead)
 // user = {
 //   ...user,
 //   userRead:userRead
 // }
 // user.userRead = userRead
//  user = {
//    ...user,
//    userRead:userRead
//   }
//
 console.log(user)



/**
 * Exercise 4
 *
 * Create an object {userWatch} and add properties "tvShows" and "movies".
 * Both should be arrays with strings.
 */
const userWatch = {
  tvShows: ["friends", "The Wire"],
  movies: ['godfather', 'casino'],

}

/**
 * Exercise 5
 *
 * extend {user} object with new property "userWatch" and assign {userWatch} object
 * as a value.
 *
 * Note: if I modify {userWatch} it should change {user} object
 *
 * Result should be:
 * user = {
 *   firstName: '',
 *   lastName: '',
 *   books: [],
 *   newspapers: [],
 *   userWatch: {
 *     tvShows: [],
 *     movies: []
 *   }
 * }
 */
 user  = {
   ...user,
   userWatch:{
     ...userWatch
   }


 }
 console.log(user)
