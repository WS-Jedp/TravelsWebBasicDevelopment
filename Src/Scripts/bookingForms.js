// ----------- Add another person
const btnAddPerson = document.getElementById('forms--addPerson');
const containerForms = document.getElementsByClassName('forms--inputs-persons')[0];
const newFormPerson = document.createElement('article');

newFormPerson.classList.add('container-column');
newFormPerson.classList.add('background-white');
newFormPerson.classList.add('forms--person');

newFormPerson.innerHTML = `<div class='container-column forms--person-inputs'>
<label for="name[]">First Name</label>
<input type="text" name='name[]' placeholder="Give us your first name">
</div>

<div class='container-column forms--person-inputs'>
<label for="lastName[]">Last Name</label>
<input type="text" name='lastName[]' placeholder="Give us your first name">
</div>

<div class='container-column forms--person-inputs'>
<label for="birthdate[]">Birthdate</label>
<input type="date" name='birthdate[]'>
</div>

<div class='container-column forms--person-inputs'>
<label for="id[]">Number of Identification</label>
<input type="number" name='id[]' placeholder="Give us the number of Identification">
</div>

<div class='container-column forms--person-inputs'>
<label for="email[]">Email</label>
<input type="text" name='email[]' placeholder="Give us your first name">
</div>`

btnAddPerson.addEventListener('click', function(event){
  event.preventDefault();

  containerForms.appendChild(newFormPerson);
});

// ----------- Submit Forms
const formPersons = document.getElementById('forms--persons');

formPersons.addEventListener('submit', ev => {
  ev.preventDefault();
  const dataForm = {};

  for(let i = 0; i < formPersons.elements.length; i++){
    dataForm[formPersons.elements[i].name] = formPersons.elements[i].value;
  }
  JSON.stringify(dataForm);
  
  location.replace('checkout.html');
})
