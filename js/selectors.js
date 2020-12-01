const container = document.querySelector('.container');
const a = document.querySelector('.container>article');

container.innerHTML = `<label class="label">.container</label>` + container.innerHTML;
document.querySelector('.container>article').innerHTML = `<label class="label">.container article</label>` + document.querySelector('.container>article').innerHTML;
