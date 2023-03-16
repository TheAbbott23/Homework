(function () {

    
    const makeMoneyButton = document.getElementById("makeMoney");

    makeMoneyButton.addEventListener('click', (event) => {

        event.preventDefault();
        const howMany = document.getElementById("howMany");
        const coinType = document.getElementById("coinType");
       
        for ( let i =0; i<howMany.value; i++) {
            const newCoin = document.createElement('div');

            newCoin.classList.add(coinType.value)

            document.body.append(newCoin)

        }


    });

    // const coinContainer = document.getElementById("coinContainer");

    // function makeMoneyButton(event){
    //     event.preventDefault();
    //     const howManyInputValue = +howManyInput.value;
    //     for (let i=0; i,howManyInputValue; i++) {
    //         const newCoin = document.createElement('div');
    //         const newCoinP= document.createElement('p');

    //         newCoinP.innerText = coinType.value;
    //         newCoin.append(newCoinP);
    //         newCoin.addEventListener('click', (event)=> {
    //             console.log(event.target);
    //         if (event.target.classList.contains('coin')){
    //             event.target.remove();
    //         } else {
    //             event.target.parentNode.remove();
    //         }
    //         });
    //         newCoin.classList.add("coin");
    //         newCoin.classList.add(coinType.value);
    //         coinContainer.append(newCoin);
    //     }

    // }

    



})();

