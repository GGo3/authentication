const formEl = document.querySelector('.login-form');
const statusEl = document.querySelector('.status')

formEl.addEventListener('submit', ev => {
  ev.preventDefault();
  const params = new FormData(formEl);
  let currentPagePath = window.location.pathname;
  axios.post(currentPagePath, params)
  .then( r => {
    console.log(r);
    if (r.data[0].status === 'Error') {
      statusEl.innerHTML = r.data.reduce((total, current) =>{
        return `<p>${total}  ${current.errorText}</p>`
      }, '');
    } else {
      statusEl.innerHTML = r.data;
    }
  });
});