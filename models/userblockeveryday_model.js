var db=require('../dbconnec');
var userblockeveryday={
    getUserblockeveryday:function(blockNumber,flatName,secretaryPhoneNumber,callback){
        return db.query('select * from userblockeveryday u join everyday e on e.everydayPhoneNumber=u.everydayPhoneNumber  where blockNumber=? and flatName=? and u.secretaryPhoneNumber=?',[blockNumber,flatName,secretaryPhoneNumber],callback);
    },
};
module.exports=userblockeveryday;