import iziToast from "izitoast";

const formCooperation = document.querySelector('.work-together-form');

let formCooperationValue = { userEmail: '', comment: '' };
const validIndicator = document.querySelector(
  '.work-together-form__input-email-indicator'
);

// Email validator
const validateEmail = (value, emailInput) => {

  if(emailInput.name !== "userEmail") {
    return;
  }

  if (value === '') {
    validIndicator.textContent = '';
    validIndicator.classList.remove('success', 'invalid');

    emailInput.classList.remove('success', 'invalid');

    return false;
  }

  const regex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (regex.test(value)) {
    validIndicator.classList.remove('invalid');
    emailInput.classList.remove('invalid');

    validIndicator.textContent = 'Succes!';
    validIndicator.classList.add('success');

    emailInput.classList.add('success');
    return true;
  }

  validIndicator.classList.remove('success');
  emailInput.classList.remove('success');

  validIndicator.textContent = 'Invalid email, try again';
  validIndicator.classList.add('invalid');

  emailInput.classList.add('invalid');
  return false;
};

// get form values from LS and set
const setformCooperationValue = () => {
  const data = getDataFromLS('formCooperation');

  if (data !== null) {
    const { userEmail, comment } = formCooperation.elements;

    formCooperationValue = data;
    userEmail.value = data.userEmail;
    comment.value = data.comment;

    validateEmail(userEmail.value, userEmail);
  }
};

const onFormCooperationInput = evt => {
  const targetElement = evt.target;

  validateEmail(targetElement.value, targetElement);

  formCooperationValue[targetElement.name] = targetElement.value;
  setDataToLS('formCooperation', formCooperationValue);
};

// post reqest
const postDataRequest = async (data) => {
  try {
    const response = await fetch("https://portfolio-js.b.goit.study/api/requests", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch(err) {
    iziToast.error({
      message: 'Oops... Something went wrong, please try again',
      position: 'topRight',
  });
  return null;
  }
}

// operation with local storage
const getDataFromLS = name => {
  try {
    const data = localStorage.getItem(name);

    if (data !== null) {
      return JSON.parse(data);
    }
    return null;
  } catch (err) {}
};

const setDataToLS = (name, data) => {
  try {
    localStorage.setItem(name, JSON.stringify(data));
  } catch (err) {}
};

const onFormCooperationSubmit = async evt => {
  evt.preventDefault();

  const { userEmail, comment } = evt.currentTarget.elements;

  const isEmailValid = validateEmail(userEmail.value, userEmail);
  if(isEmailValid && comment.value.length > 0) {
    console.log(formCooperationValue);

    const data = await postDataRequest({email: userEmail.value, comment: comment.value})
    console.log(data);
    return;
  }

  iziToast.warning({
    message: 'Please fill up all fields!',
    position: 'topRight',
});
};

setformCooperationValue();

formCooperation.addEventListener('submit', onFormCooperationSubmit);
formCooperation.addEventListener('input', onFormCooperationInput);
