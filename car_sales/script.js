const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})




//Form validation

const firstName = document.querySelector('.contact #firstName')
const lastName = document.querySelector('.contact #lastName')
const subject = document.querySelector('.contact #subject')
const submit = document.querySelector('.contact .submit_btn')

firstName.addEventListener('click', () => {
  firstName.value = ''
  firstName.style.border = 'none'
  firstName.style.color = 'black'

})

lastName.addEventListener('click', () => {
  lastName.value = ''
  lastName.style.border = 'none'
  lastName.style.color = 'black'

})

subject.addEventListener('click', () => {
  subject.value = ''
  subject.style.border = 'none'
  subject.style.color = 'black'

})





firstName.addEventListener('onChange', (e) => {

  firstName.textContent = e.target.value
  console.log(e.target.value)
})




lastName.addEventListener('onChange', (e) => {
  lastName.textContent = ''

 lastName.textContent = e.target.value
  console.log(e.target.value)
})

if(firstName.value.length === 0 ){
  console.log('add') 
}



submit.addEventListener('click', (e) => {
 
e.preventDefault()

if(firstName.value.length > 0 && lastName.value.length > 0 && subject.value.length ){
  console.log('submitted')
  alert('Submitted Successfully!! One of our agents will be in touch in 2-3 Working days')
}

console.log('first')

if(firstName.value.length === 0 ){
  console.log('please add a first name in') 
  firstName.value = 'please add a first name in'
  firstName.style.border = '3px solid red'
  firstName.style.color = 'red'
}  

if(lastName.value.length === 0 ){
  console.log('please add a last name in') 
  lastName.style.border = '3px solid red'
  lastName.value = 'please add a last name in'
  lastName.style.color = 'red'
  



}

if(subject.value.length === 0 ){
  console.log('please add a last name in') 
  subject.style.border = '3px solid red'
  subject.value = 'please add a message'
  subject.style.color = 'red'


}




})

