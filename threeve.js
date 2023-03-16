(function () {

    const additButton = document.getElementById('addIt');

    const container = document.getElementById('container');

    additButton.addEventListener('click', () => {

        //need to dynamically set properties on the shape (size, text, circle)

        const text =document.getElementById('text').value;
        const size =document.getElementById('size').value;
        const makeCircle =document.getElementById('makeCircle');

        const shape =document.createElement('div');

        shape.classList.add('shape');
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.lineHeight = `${size}px`;

        shape.innerText = text;

        if (makeCircle.checked) {
            shape.classList.add('circle');
        }

        container.append(shape);

    });

    container.addEventListener('click', (event)=> {
        console.log(event.target);
        
        if (event.target.classList.contains('shape')){
        event.target.classList.toggle('highlighted'); 
        }   
    })


}());