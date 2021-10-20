function toggleNavbar(collapseID) {
    document.getElementById(collapseID).classList.toggle("hidden");
    document.getElementById(collapseID).classList.toggle("block");
  }
  const names = document.getElementById("name");
  const email =  document.getElementById("email");
  const message =  document.getElementById("message");
  const button = document.getElementById("button");
   let namee;
   let emails;
   let messages;
names.addEventListener("change", (e) => {
   namee = e.target.value;
})

email.addEventListener("change", (e) => {
  emails = e.target.value;
})
message.addEventListener("change", (e) => {
  messages = e.target.value;
})


button.addEventListener("click", (e) => {
  e.preventDefault()
  if ( messages && emails && namee !== null ) {
    alert("Thank you for sending us message , We will get in touch within 2 working days ( 24 hrs) Sorry for any inconvenience")
    namee='';
    messages ='';
    emails = '';
 } else{
   alert("please input the correct information in correct field")
    namee='';
    messages ='';
    emails = '';
 }
})
  
