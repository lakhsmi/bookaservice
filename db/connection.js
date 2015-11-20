var mongojs = require('mongojs');
var db = mongojs('ionicbookstoreapp', ['users', 'books','business','services']);

// Add a unique index
db.users.ensureIndex({
    email: 1
}, {
    unique: true
});

module.exports = db;
