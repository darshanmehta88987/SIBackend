var db=require('../dbconnec');
var users={
    getAllUsers:function(callback){
        return db.query('select u.userPhoneNumber,u.userName,u.password,ut.name from users u join usertype ut on u.userTypeId=ut.userTypeId',callback);
    },
    addUsers:function(item,callback){
        return db.query("insert into users(userPhoneNumber,userName,password,userTypeId) values(?,?,?,?)",[item.userPhoneNumber,item.userName,item.password,item.userTypeId],callback);
    },
    deleteUsers:function(id,callback){
        return db.query("delete from users where userPhoneNumber=?",[id],callback);
    },
    getUsersById:function(id,callback){
        return db.query("select * from users where userPhoneNumber=?",[id],callback);
    },
    updateUsersById:function(id,item,callback){
        return db.query("update users set userName=?,password=?,userTypeId=? where userPhoneNumber=?",[item.userName,item.password,item.userTypeId,id],callback);
    },
    login:function(username,password,userType,callback){
        return db.query("SELECT * FROM users join usertype on users.userTypeId=usertype.userTypeId WHERE userPhoneNumber=? and PASSWORD=? and usertype.name=?",[username,password,userType],callback); 

        //return db.query("select * from users where userPhoneNumber=? and password=?",[username,password],callback);
    },
    loginUsingOTP:function(username,userType,callback){
        return db.query("SELECT * FROM users join usertype on users.userTypeId=usertype.userTypeId WHERE userPhoneNumber=? and usertype.name=?",[username,userType],callback); 

        //return db.query("select * from users where userPhoneNumber=? and password=?",[username,password],callback);
    },
    loginPost:function(item,callback){
        return db.query("SELECT * FROM users join usertype on users.userTypeId=usertype.userTypeId WHERE userPhoneNumber=? and PASSWORD=? and usertype.name=?",[item.username,item.password,item.userType],callback); 

        //return db.query("select * from users where userPhoneNumber=? and password=?",[username,password],callback);
    }

};
module.exports=users;
//userPhoneNumber userName password userTypeId