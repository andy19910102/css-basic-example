const container = document.querySelector('.container');
const a = document.querySelector('.container>div');

container.innerHTML = `<label class="label">.container</label>` + container.innerHTML;
document.querySelector('.container>div').innerHTML = `<label class="label">.container div</label>` + document.querySelector('.container>div').innerHTML;
