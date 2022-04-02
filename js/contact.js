

// const getData = () => {
//   fetch('https://shree-ser.herokuapp.com/api/form').then(
//       res => {
//           return res.json();
//       }
//   ).then(
//       data => {
//           console.log(data)
//       }
//   )
// }
// getData();

// const postData = (e) => {
//   e.preventDefault();

// // const userName = document.getElementsByName("Your Name");
// // console.log(userName)
// // const userEmail = document.querySelector('#email');
// // const userPhone  = document.querySelector('#num'); 
// // const userMessage = document.querySelector('#message');
// const formValues = document.querySelectorAll('.contact_bg input');
// console.log(formValues);

 
//   const options = {
//       method: 'POST',
//       body: JSON.stringify({
//         formValues: formValues.value,
//         userName: userName.value,
//         userName: userEmail.value,
//         userPhone: userPhone.value,
//         userMessage: userMessage.value
//       }),
//       headers: {
//           'Accept': 'application/json',
//           'Content-type': 'application/json'
//       }
//   }
//   fetch('https://shree-ser.herokuapp.com/api/form', options).then(
//       res => {
//           return res.json();
//       }
//   ).then(
//     data =>  {console.log(data);
//     getData();
//     }
//   )
//   formValues.value ='';
//   userName.value = '';
//   userName.value = '';
//   userPhone.value = '';
//   userMessage.value = '';

//   const arr = Array.from(formValues).reduce((acc, input) => ({...acc,
//     [input.id]:input.value}), {});
  
//     console.log(arr);
// }

// let form = document.querySelector('.contact_bg');
// form.addEventListener('submit', postData);


const contactUsForm = document.querySelector('.contact_bg');
const btn = document.querySelector('.send');
const formValues = document.querySelectorAll('.contact_bg input');


 function sendForm(e) {
   e.preventDefault();
  const arr = Array.from(formValues).reduce((acc, input) => ({...acc,
    [input.id]:input.value}), {});
    console.log(arr)
  localStorage.setItem("contactUs", JSON.stringify(arr));
  
 }

btn.addEventListener('click', sendForm);

const news = document.querySelector('.newslatter');
const btn2 = document.querySelector('.submit');


function submit(e) {
  e.preventDefault();
 var val = news.value;

 localStorage.setItem("subscribe", val);
 
}

btn2.addEventListener('click', submit);



