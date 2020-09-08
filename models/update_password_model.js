var db=require('../dbconnec');
var users={
    getuserpassword:function(userPhoneNumber,userType,callback){
        return db.query("SELECT password FROM users join usertype on users.userTypeId=usertype.userTypeId WHERE userPhoneNumber=?  and usertype.name=?",[userPhoneNumber,userType],callback); 

    },    
    updatepassword:function(userPhoneNumber,userTypeId,item,callback){
        return db.query("update users set password=? where userPhoneNumber=? and userTypeId=?",[item.password,userPhoneNumber,userTypeId],callback);
    },
};
module.exports=users;