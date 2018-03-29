/* global beforeEach before */

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

before(done => {
  mongoose.connect('mongodb://localhost:27017/user_test')
  mongoose.connection
    .once('open', () => done())
    .on('error', err => console.warn('Warning ', err))
})

beforeEach(done => {
  mongoose.connection.collections.users.drop(() => {
    done()
  })
})
