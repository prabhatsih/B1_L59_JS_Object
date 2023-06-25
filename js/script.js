let students = ["Student1","Student2",'Student3',`Student4`,"Student5"];
var allStudent = '';
for(var i=0;i<=students.length-1;i++){
    //console.log(students[i]);
    //allStudent = allStudent + students[i]; //Not optimize
    allStudent += students[i] + ' '; //Optimize
}
console.log(allStudent);

//JS Object
/*
    {
        Property:value,
        Property:value,
        functions
    }
    A JS Object can also contain Array ad value.
*/
var student = {
    'name':"Prabhat",
    "Surname":"Singh",
    address:'Patna',
    friends:["Raju","Shyam","Babu Rao"], //JS Object containg Array.
    teacher:[{
                name:'Anil Dollar',
                mob:"978987979",
            },{
                name:"Amit Singh",
                contact:'765757577',
            }]
}
var x = ['Sunil','Anil',student]; //Array contain JS Object.

//For Print Object member use code Object.member
console.log(student.name);
console.log(student.Surname);
console.log(student.address);
console.log(student.friends[0]);
console.log(student.friends[1]);
console.log(student.friends[2]);
console.log(student.name+" have "+student.friends.length+" friends.");

