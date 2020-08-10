var db=require('../dbconnec');
// const { response } = require('../app');
var societywatchman={


    getSocietyWatchman:function(secretaryPhoneNumber,callback)
    {
        return db.query("select u.userName,u.userPhoneNumber from users u,societywatchman sw where u.userTypeId=3 and u.userPhoneNumber=sw.userPhoneNumber and sw.secretaryPhoneNumber =? ",secretaryPhoneNumber,callback);
    },


    
    insertSocietyWatchman:function(item,callback)
    {
        console.log(item);
        return db.query("INSERT INTO societyWatchman(userPhoneNumber,secretaryPhoneNumber,) VALUES (?,?)",[item.userPhoneNumber,item.secretaryPhoneNumber],callback);
    }
};
    module.exports=societywatchman;

