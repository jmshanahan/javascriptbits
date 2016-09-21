
var person = {
    firstName : 'John',
    lastName : 'Doe',
    getFullName : function(){
        var fullname = this.firstName + ' ' + this.lastName;
        return fullname;
    }
}

var logName = function(lang1,lang2){
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments ' + lang1 + ' ' + lang2);
    console.log('----------------');
}

var logPersonName = logName.bind(person);
logPersonName('en');
logName.call(person);

logName.call(person, 'en');
logName.apply(person,['en','es']);
