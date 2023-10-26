//Q1-----------------------------

//Q2----------------------------


/*
var person= {
    name: "Rajeevan",
    age: "25",
  introduceYou:function() { console.log(" Hello,my name is "+ this.name);}

}

person.introduceYou();

*/


//Q3-------------------------------------------




var person= {
    name: "Rajeevan",
    age: "25",
    email: "john@example.com"
    
//   introduceYou:function() { console.log(" Hello,my name is "+ this.name);}

}


// function greet(greetstudent) {
//     return "Hello "+person.name+" welcome to the codig school"
// }
// console.log(greet("greetstudent"));



//Q4---------------------------------------


console.log ("Name:"+ person.name);
console.log ("age: "+ person.age)


console.log("name:"+person["name"]);
console.log ("age:" + person["age"]);
// console.log("email:"+ person ["email"]);



// Q5-----------------------------------------

console.log("email:"+ person ["email"]);


// Q6-----------------------------------

delete person.email;
console.log(person);


//Q7--------------------------------------

if (person.email == undefined){

    console.log("the email,exists");

}

else{
    console.log("email is not correct");
}


//Q8-------------------------------------------

// const course = {
//     courseName: "jon",
//     courseCode: "MATH101",
    
//   }
  
 
// const studentCourse = Object.assign({}, student, course);
  
//   console.log(studentCourse);



//Q9-------------------------------------------------




//Q10 ------------------------------------------------


const book = {


    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1993,
  }
  

  const bookJsonString = JSON.stringify(book);
  
  console.log(bookJsonString);
  



  //Q11 ------------------------------------------------
  const students = [
    {
      name: "Raja",
      age: 20,
      grade: "A",
    },
    {
      name: "ramesh",
      age: 22,
      grade: "B",
    },
    {
      name: "kamal",
      age: 21,
      grade: "C",
    },
    
  ];
  
 
  console.log(students[0]); 
  console.log(students[1]); 
  