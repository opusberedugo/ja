// import flatpickr from "flatpickr";

// document.addEventListener('DOMContentLoaded', () => {
//   flatpickr("#datepicker", {
//       altInput: true,
//       altFormat: 'F j, Y',
//       dateFormat: 'Y-m-d',
//       wrap: true,
//   });
// });

flatpickr("#dob", {
  minDate: new Date(new Date(new Date().setFullYear(new Date().getFullYear() - 35))).toISOString().split('T')[0],
  maxDate: new Date(new Date(new Date().setFullYear(new Date().getFullYear() - 13))).toISOString().split('T')[0],
});


document.querySelector("form").addEventListener("submit", (e)=>{
  e.preventDefault();
  
  let inputFields = Array.from(document.querySelectorAll("input"));
  let errorFields = document.querySelectorAll("form p.text-crimson");

  inputFields.pop();

  inputFields.forEach((v,i)=>{
    errorFields[i].textContent = "";
    v.classList.remove("border-2","border-crimson");
    // v.classList.add("border-crimson");
    // throw Error("Empty Field")
  })

  inputFields.forEach((v,i)=>{
    if (v.value.trim() === "") {
      errorFields[i].textContent = "This field cannot be empty";
      v.classList.add("border-2","border-crimson");
      // v.classList.add("border-crimson");
      throw Error("Empty Field")
    }
  })


  if(inputFields[0].value.trim().length <= 2){
    errorFields[0].textContent = "Name must have be at least three characters long";
    inputFields[0].classList.add("border-2","border-crimson");
    throw Error("Invalid name. A name must have at least three characters long")
  }

  
  if(inputFields[1].value.trim().length <= 2){
    errorFields[1].textContent = "Name must have be at least three characters long";
    inputFields[1].classList.add("border-2","border-crimson");
    throw Error("Invalid name. A name must have at least three characters long")
  }

  

  
  if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputFields[2].value.trim()) ) {
    errorFields[2].textContent = "Please enter a valid email";
    inputFields[2].classList.add("border-2","border-crimson");
    throw Error("Invalid Email")
  }

  if(!/^(?:\+?1[-.●]?)?(\(?\d{3}\)?[-.●]?)?\d{3}[-.●]?\d{4}$/.test(inputFields[3].value.trim()) && inputFields[3].value.trim().length < 10){
    errorFields[3].textContent = "Please enter a valid phone number";
    inputFields[3].classList.add("border-2","border-crimson");
    throw Error("Invalid Phone Number");
  }

  if(inputFields[5].value.trim().length <= 8){
    errorFields[1].textContent = "Password must have be at least eight characters long";
    inputFields[1].classList.add("border-2","border-crimson");
    throw Error("Invalid Password. A password must have at least eight characters long")
  }

  document.querySelector("form").submit();

});