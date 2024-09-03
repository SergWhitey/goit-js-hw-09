const formData = { email: "", message: "" };

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector("[name='email']");
const messageInput = document.querySelector("[name='message']");
const notification = document.getElementById('notification');

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    formData.email = email;
    formData.message = message;
    emailInput.value = email;
    messageInput.value = message;
  }
});

form.addEventListener('input', () => {
  formData.email = emailInput.value;
  formData.message = messageInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!emailInput.value.trim() || !messageInput.value.trim()) {
    alert("Fill please all fields!");
    return;
  }
    
    console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  emailInput.value = '';
  messageInput.value = '';
  notification.textContent = '';
});
