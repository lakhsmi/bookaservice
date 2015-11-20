var db = require('../db/connection.js');
var respHandler = require('../utils/responseHandler.js');

var ServiceAPI = {
saveservice: function(req, res) {
        var services=req.body;
        console.log(services);
        
        db.services.insert(services,function(err,records){
            
            if(err)
            {
               respHandler(res, 500, null, 'Oops something went wrong while saving record', err);
            }
            else
            {
               // res,status,data,message,err
                respHandler(res, 200, records, 'Success', null); 
            }
        });
        
        
          

      
    },
     getAllServices:function(req,res){
        console.log('Get All Services from server');
          db.services.find(function(err, services) {
                    if (err) {
                        // res, status, data, message, err
                        respHandler(res, 500, null, 'Oops something went wrong while processing your credentials', err);
                        return;
                    }
                   // res, status, data, message, err
                    respHandler(res, 200,{result:services}, 'Success', null);

                });
                
      
    }
};
 
module.exports = ServiceAPI;
