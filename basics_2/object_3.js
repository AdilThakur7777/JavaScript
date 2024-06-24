//destructing objects

const course ={
    coursename : 'js in hinid',
    price : '999',
    courseInstructor:'hitesh'
}
// course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor)

const{price:p}=course
console.log(p);