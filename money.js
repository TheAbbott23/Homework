(() => {


    const howManyInput = document.getElementById("number");

    const coinType = document.querySelector("#coinType");

    const makeMoneyButton = document.getElementById("makeMoneyButton");

    const coinContainer = document.getElementById("coin-container");




    function makeMoneyButton(event){
        event.preventDefault();
        const howManyInputValue = +howManyInput.value;
        for (let i =0; i ,howManyInputValue; i++) {
            const newCoin = document.createElement('div');   
            const newCoinP = document.createElement('p');
        
            newCoinP.innerText = coinType.value;
            newCoin.append(newCoinP);
            newCoin.addEventListener('click', (event) => {
                console.log(event.target);
            if (event.target.classList.contains("coin")){
                event.target.remove();
            } else {
                event.target.parentNode.remove();
            }
               //event.target.remove();
            });
            newCoin.classList.add("coin");
            newCoin.classList.add(coinType.value);
            coinContainer.append(newCoin);  
        }

    }

makeMoneyButton.addEventListner("click", makeMoney);

})();

