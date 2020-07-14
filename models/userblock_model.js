var db=require('../dbconnec');
var userblock={
    getAllUserBlock:function(callback){
        return db.query('select userblock.*,users.* from userblock join users on users.userPhoneNumber = userblock.userPhoneNumber',callback);
    },
    addUserBlock:function(item,callback){
        return db.query("insert into userblock(userPhoneNumber,blockNumber,flatName,secretaryPhoneNumber) values(?,?,?,?)",[item.userPhoneNumber,item.blockNumber,item.flatName,item.secretaryPhoneNumber],callback);
    },
    deleteUserBlock:function(userPhoneNumber,blockNumber,flatName,secretaryPhoneNumber,callback){
        return db.query("delete from userblock where userPhoneNumber=? and blockNumber=? and flatName=? and secretaryPhoneNumber=?",[userPhoneNumber,blockNumber,flatName,secretaryPhoneNumber],callback);
    },
    getUserBlockById:function(blockNumber,flatName,secretaryPhoneNumber,callback){
        return db.query("select userblock.*,users.* from userblock join users on users.userPhoneNumber = userblock.userPhoneNumber join usertype on users.userTypeid = usertype.userTypeId where blockNumber=? and flatName=? and secretaryPhoneNumber=? and usertype.name = 'user'",[blockNumber,flatName,secretaryPhoneNumber],callback);
    },
    updateUserBlockById:function(blockNumber,flatName,secretaryPhoneNumber,item,callback){
        return db.query("update userblock set userPhoneNumber=? where blockNumber=? and flatName=? and secretaryPhoneNumber=?",[item.userPhoneNumber,blockNumber,flatName,secretaryPhoneNumber],callback);
    }

};
module.exports=userblock;
//userPhoneNumber,blockNumber,flatName,secretaryPhoneNumber