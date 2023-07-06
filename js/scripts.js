function validateForm() {
  var name = document.forms['message-form']['fullName'].value
  var email = document.forms['message-form']['email'].value
  var phone = document.forms['message-form']['phoneNumber'].value
  var message = document.forms['message-form']['message'].value
  
  document.getElementById('sender-fullName').innerText = name
  document.getElementById('sender-email').innerText = email
  document.getElementById('sender-phoneNumber').innerText = phone
  document.getElementById('sender-message').innerText = message
  
  return false
}

function getParameters() {
  const urlParams = new URLSearchParams(window.location.search)
  const fullName = urlParams.get('fullName')
  const email = urlParams.get('email')
  const phoneNumber = urlParams.get('phoneNumber')
  const message = urlParams.get('message')

  document.getElementById('sender-fullName').textContent = fullName
  document.getElementById('sender-email').textContent = email
  document.getElementById('sender-phoneNumber').textContent = phoneNumber
  document.getElementById('sender-message').textContent = message

}
        