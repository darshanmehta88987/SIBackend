var db = require('../dbconnec');
// const { addEveryday } = require('./everyday_model');
var everydayinout = {
    getAllInOutEnteryofSociety: function(secretaryPhoneNumber, callback) {
        return db.query('select * from everydayinout where secretaryPhoneNumber=?', [secretaryPhoneNumber], callback);
    },
    addEverydayInEntries: function(item, callback) {
        return db.query("insert into everydayinout(phoneNumber,InTime,outTime,secretaryPhoneNumber) VALUES (?,NOW(),0,?);", [item.phoneNumber, item.secretaryPhoneNumber], callback);
    },
    addEverydayOutEntries: function(phoneNumber, callback) {
        return db.query("update everydayinout set outTime = NOW() where phoneNumber = ? and outTime=0", [phoneNumber], callback)
    },
    getAllInEntriesofSociety: function(secretaryPhoneNumber, callback) {
        return db.query('select phoneNumber,InTime from everydayinout where outTime="0" and secretaryPhoneNumber=?', [secretaryPhoneNumber], callback);
    },
    getAllInOutEntriesforUser: function(userPhoneNumber, callback) {
        return db.query('select uf.flatNumber,uf.blockName,e.everydayPhoneNumber,e.name,e.image,ec.categoryName,ee.inTime,ee.outTime from everydayinout ee,userblockeveryday ub,userflat uf,everyday e,everydaycategory ec where e.everydayPhoneNumber=ee.phoneNumber and e.everydayPhoneNumber=ub.everydayPhoneNumber and ec.categoryId=e.categoryId and uf.secretaryPhoneNumber=ub.secretaryPhoneNumber and uf.userPhoneNumber=?', [userPhoneNumber], callback);
    }


};
module.exports = everydayinout;