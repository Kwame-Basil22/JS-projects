// variable
const courses = document.querySelector("#courses-list");

const shoppingCartContent = document.querySelector;
querySelector("#cart-content body");

const clearCartBtn = document.querySelector("#clear-cart");

// eventlisteners
loadEventListeners();

function loadEventListeners() {
  // When a new course is added
  courses.addEventListeners("click", buyCourse);

  // when the remove botton is clicked
  shoppingCartContent.addEventListener("click", removeCourse);

  // when the clear buttton is clicked
  clearCartBtn.addEventListener("click", clearCart);

  // document ready
  document.addEventListener("DOMContentLoaded", getFromLocalStorage);
}
// functions
function buyCourse(e) {
  e.preventDefault();
  // use delegation to find the course that was added
  if (e.target.classList.contains("add-to-cart")) {
    // read the course values
    getCourseInfo(course);
  }
}
// reads the HTML information of the selected course
function getCourseInfo(course) {
  // create an object with course data
  const CourseInfo = {
    Image: course.querySelector("img").src,
    title: querySelector("h4").textContent,
    price: querySelector("price span").textContent,
    id: course.querySelector("a").getAttribute("data-id"),
  };
}
// inset into the shopping cart
addIntoCart(CourseInfo);

// display selected courses into the shopping cart

function addIntoCart(courses) {
  // create a <tr>
  const row = document.createElement("tr");

  // build a template
  row.innerHTML = `
        <tr>
        <td> <img src =${course.Image}" width=100></td>
        <td>$ </td>
        </td></tr>
        <td></td>
        </tr>
   `;
  // adding into shopping cart
  shoppingCartContent.appendChild(row);

  // add course into shoping cart
  saveIntoStorage(course);
}
// add course into local storage

function saveIntoStorage(course) {
    let courses = getCoursesFromStorage()

    // add the course into the tray
    courses.push(course);

    // since storage only saves strings, we need to convert JSON into string
    localStorage.setItem("courses", JSON.stringify(courses));
}
// get the content from storage
funtion getCoursesFromStorage() {
    let courses; 
    
    // if something exist on storage then we get the value, otherwise create an empty array
    if (localStorage.getItem('courses' == null)) {
        courses = [];
    } else {
        courses = JSON.parse(localStorage.getItem('courses'))
    } return courses;
}
// remove course from the dom
functionm removeCourse(e){
let course, courseId;

// remove from the DOM
    if (e.target.classList.contains(remove)) {
        e.target.parentElement.parentElement.remove();
        courses = e.target.parentElement.parentElement;
        coursesId = courses.querySelector("a").gatAttribute("data-id");
    } console.log(courseId);
    // remove from local storage
    removeCourseLocalStorage(courseId)
}
// remove from local storage
function removeCourseLocalStorage(id) {
    // get the local storage data
    let coursesLS = getCoursesFromStorage();

    // loop through the array and find the index to remove

    coursesLS.forEach(function (courseLS, index) {
        if (courseLS.id == id) {
            coursesLS.splice(index, 1);
        }
    });

    // add the rest of the array
    localStorage.setItem('courses', JSON.stringify(coursesLS));
}


// clears the shopping cart
function clearCart() {
    // shoppingCartContent.innerHTML = '';

    while (shoppingCartContent.firstChild) {
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }
    // clear from local storage
    clearLocalStorage();
}
    // clear the whole local stoarage
function clearLocalStorage() {
    localStorage.clear();
}

//loads when document is ready and print courses into shipping cart

function getFromLocalStorage() {
    Let coursesLS = getCoursesFromStorage();
    
    //LOOP throughout the courses and print into the cart
    coursesLS.forEach(function (course) {
        const row = document.createElement('tr');
        
        //print the content
        row.innerHTML = `
            <tr> 
                 <td>
                      <img src ="${course.image}" width =100>
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td>
                     <a href ="#" class ="remove" data-id="${course.id}">X</a>
                 </td>
            </tr>
     `;
        shoppingCartContent.appendChild(row);
    });
}



































