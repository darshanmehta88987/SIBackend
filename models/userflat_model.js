var db=require('../dbconnec');
var userflat={
    getAlluserflat:function(callback){
        return db.query('select userflat.*,users.* from userflat join users on users.userPhoneNumber = userflat.userPhoneNumber',callback);
    },
    adduserflat:function(item,callback){
        return db.query("insert into userflat(userPhoneNumber,flatNumber,blockName,secretaryPhoneNumber) values(?,?,?,?)",[item.userPhoneNumber,item.flatNumber,item.blockName,item.secretaryPhoneNumber],callback);
    },
    deleteuserflat:function(userPhoneNumber,flatNumber,blockName,secretaryPhoneNumber,callback){
        return db.query("delete from userflat where userPhoneNumber=? and flatNumber=? and blockName=? and secretaryPhoneNumber=?",[userPhoneNumber,flatNumber,blockName,secretaryPhoneNumber],callback);
    },
    getuserflatById:function(flatNumber,blockName,secretaryPhoneNumber,callback){
        return db.query("select userflat.*,users.* from userflat join users on users.userPhoneNumber = userflat.userPhoneNumber join usertype on users.userTypeid = usertype.userTypeId where flatNumber=? and blockName=? and secretaryPhoneNumber=? and usertype.name = 'user'",[flatNumber,blockName,secretaryPhoneNumber],callback);
    },
    updateuserflatById:function(flatNumber,blockName,secretaryPhoneNumber,item,callback){
        return db.query("update userflat set userPhoneNumber=? where flatNumber=? and blockName=? and secretaryPhoneNumber=?",[item.userPhoneNumber,flatNumber,blockName,secretaryPhoneNumber],callback);
    },
    getuserflatOfParticularUser:function(userPhoneNumber,callback){
        return db.query("select userflat.*,society.* from userflat join society on userflat.secretaryPhoneNumber=society.secretaryPhoneNumber where userPhoneNumber=? group by userflat.secretaryPhoneNumber",[userPhoneNumber],callback);
    },
    getUserbyUserPhoneNumberAndSecretaryPhoneNumber:function(userPhoneNumber,secretaryPhoneNumber,callback){
        return db.query("SELECT * FROM userflat where userPhoneNumber=? and secretaryPhoneNumber=? group by blockName",[userPhoneNumber,secretaryPhoneNumber],callback)
    },
    getUserflatNumbers:function(blockName,userPhoneNumber,secretaryPhoneNumber,callback){
        return db.query("SELECT * FROM `userflat` WHERE blockName=? and userPhoneNumber=?and secretaryPhoneNumber=?",[blockName,userPhoneNumber,secretaryPhoneNumber],callback);
    },
    
    

};
module.exports=userflat;
//userPhoneNumber,flatNumber,blockName,secretaryPhoneNumber