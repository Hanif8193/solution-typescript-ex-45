// 21.	They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.
interface itCourse {
    courseName : String;
    location :  String ;
    onsiteStudents : number ;

}
let itCourse = {
    courseName : 'Typescript & Phyton',
    location : "Governor House",
    onsiteStudents : 50000
};

console.log (itCourse);
