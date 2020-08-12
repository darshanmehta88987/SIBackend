var db=require('../dbconnec');
const { response } = require('../app');
var notice={
    getNotice:function(secretaryPhoneNumber,callback)
    {
      return db.query("select id,secretaryPhoneNumber,message,DATE_FORMAT(date, '%d %M %Y')as date  from notice where secretaryPhoneNumber=? ORDER BY(DATE_FORMAT(date, '%Y')) DESC,(DATE_FORMAT(date, '%m')) DESC,(DATE_FORMAT(date, '%d')) DESC ",[secretaryPhoneNumber],callback);
    },
    insertNotice:function(item,callback)
    {
        //console.log(item);
        return db.query("insert into notice values(?,?,?,now())",[item.id,item.secretaryPhoneNumber,item.message],callback);
    },
    updateNotice:function(id,item,callback)
    {
      //  console.log(item);
        return db.query("update  notice set secretaryPhoneNumber=? , message=? ,date=?  where id=?",[item.secretaryPhoneNumber,item.message,item.date,id],callback);
    },
    deleteNotice:function(id,callback)
    {
      //  console.log(item);
        return db.query("delete from notice  where id=?",[id],callback);
    }
    
};
module.exports=notice;