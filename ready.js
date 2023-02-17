
function main() {

    const growMe = document.getElementById('grow-me');
    growMe.classList.add('big');

    const shrinkMe = document.getElementById('shrink-me');
    shrinkMe.classList.remove('big');

    const lis =document.querySelectorAll('li');

    for (let li of lis) {
        console.log(li.innerText)
    }

    const link = document.querySelectorAll('.link');

    link.setAttribute('href', 'http://example.com');
    link.innerText = 'somewhere';

    const hideMe = document.getElementById('hide-me');
    hideMe.style.display = 'none';

    const showMe = document.getElementById('show-me');
    showMe.style.display ='block';

   const name = document.getElementById('name');
   const h1 =document.querySelector('h1');
   h1.textContent = name.value ;

}