const submit = document.querySelector('.submit-btn')
const ratePage = document.querySelector('.rate-container')
const feedbackPage = document.querySelector('.feedback-container')
const rateList = document.querySelectorAll('.rate-list input')
const rateValue = document.querySelector('.rate-value')

window.onload = () => {
  submit.disabled = true
}

submit.addEventListener('click', () => {
  if (rateValue.textContent !== '') {
    ratePage.style.display = 'none'
    feedbackPage.style.display = 'block'
  }
})

rateList.forEach((value) =>
  value.addEventListener('click', (e) => {
    submit.disabled = false
    rateList.forEach((item) => {
      item.style.backgroundColor = 'hsl(213, 19%, 18%)'
    })

    if (e.target.style.backgroundColor === 'rgb(251, 116, 19)') {
      e.target.style.backgroundColor = 'hsl(213, 19%, 18%)'
    } else {
      e.target.style.backgroundColor = 'rgb(251, 116, 19)'
    }
    rateValue.innerHTML = e.target.value
  })
)
