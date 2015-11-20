var db = require('../db/connection.js');
var respHandler = require('../utils/responseHandler.js');

var BusinessAPI = {
savebusiness: function(req, res) {
        var business=req.body;
        
        //a
          db.business.insert(business, function(err, dbUser) {
                if (err) {
                    /* http://www.mongodb.org/about/contributors/error-codes/*/
                    if (err.code == 11000) {
                        // duplicate key error
                        // res, status, data, message, err
                        respHandler(res, 400, null, 'A user with this email already exists', 'A user with this email already exists');
                        return;
                    } else {
                        // res, status, data, message, err
                        respHandler(res, 500, null, 'Oops something went wrong while processing your credentials', err);
                        return;
                    }
                } else {
//                    delete dbUser.password;

                    // res, status, data, message, err
                    respHandler(res, 200, null, 'Success', null);
                }

            });
        
        //a

      
    },
    
    getBusiness:function(req,res){
        console.log('getBusiness method from server');
          db.business.find(function(err, business) {
                    if (err) {
                        // res, status, data, message, err
                        respHandler(res, 500, null, 'Oops something went wrong while processing your credentials', err);
                        return;
                    }

                    // res, status, data, message, err
                    respHandler(res, 200,{result:business}, 'Success', null);

                });
                
      
    } 
};
 
module.exports = BusinessAPI;
