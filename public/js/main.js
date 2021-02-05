const formEl = document.querySelector('.login-form');
const statusEl = document.querySelector('.status')

formEl.addEventListener('submit', ev => {
  ev.preventDefault();
  const params = new FormData(formEl);
  let currentPagePath = window.location.pathname;
  axios.post(currentPagePath, params)
  .then( r => {
    console.log(r);
    if (r.data[0].status === false) {
      statusEl.innerHTML = r.data.reduce((total, current) =>{
        return `<p>${total}  ${current.errorText}</p>`
      }, '');
    } else {
      statusEl.innerHTML = r.data;
    }
    document.querySelectorAll('.inputs').forEach(el => {
      el.classList.remove('inputs-novalid');
    });
    r.data.forEach(el => {
      document.querySelectorAll(el.inputName).forEach(el => {
        el.classList.add('inputs-novalid');
      });
    });
  });
});