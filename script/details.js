"use strict"



window.onload = function(){

const urlParams = new URLSearchParams(location.search); 
     console.log(urlParams);

let id = -1;
if (urlParams.has("courseid") === true) {
id = urlParams.get("courseid")

fetch("http://localhost:8081/api/courses/" + id)
 .then(response => response.json())
.then(data => {

 let display= document.getElementById("display");

 display.innerHTML = "<span style='color: red ; '> Deptartment : </span>" + data.dept + "<br />" + "<span style='color: red ; '> Course Number : </span>" + data.courseNum + "<br />" + "<span style='color: red ; '> Course Name : </span>" + data.courseName + "<br />" + "<span style='color: red ; '> Instructor : </span>" + data.instructor + "<br />" + "<span style='color: red ; '> Start Date : </span>" + data.startDate + "<br />" + "<span style='color: red ; '> No of Days : </span>" + data.numDays;
 
});

};
}
 



