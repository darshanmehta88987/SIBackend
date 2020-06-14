var db=require('../dbconnec');
var everyday={
    getAllEveryday:function(callback){
        return db.query('select * from everyday',callback);
    },
    addEveryday:function(item,callback){
        return db.query("insert into everyday(everydayPhoneNumber,name,categoryId,secretaryPhoneNumber) values(?,?,?,?)",[item.everydayPhoneNumber,item.name,item.categoryId,item.secretaryPhoneNumber],callback);
    },
    deleteEveryday:function(id,callback){
        return db.query("delete from everyday where everydayPhoneNumber=?",[id],callback);
    },
    getEverydayById:function(id,callback){
        return db.query("select * from everyday where everydayPhoneNumber=?",[id],callback);
    },
    updateEverydayById:function(id,item,callback){
        return db.query("update everyday set name=?,categoryId=?,secretaryPhoneNumber=? where everydayPhoneNumber=?",[item.name,item.categoryId,item.secretaryPhoneNumber,id],callback);
    }

};
module.exports=everyday;
//everydayPhoneNumber,name,categoryId,secretaryPhoneNumber