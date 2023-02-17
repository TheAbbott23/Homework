
function printTwenties () {
    for (i=20; i<=240; i+=20) {
        console.log(i);
    }
}
//printTwenties();

function countUntilTens (step){
    
    let i = step;

    while (true) {
        console.log(i);
        
        i += step;

        if (i % 10 === 0){
            console.log(i);
            break;
        }
  
    }
}
//countUntilTens(3);

function hasVowels(word) {
    for (let i=0; i<word.length; i++) {
        console.log(word[i]);
        if (word[i] === 'a' || word[i] === 'e' || word[i] == 'i' || word[i] === 'o' || word[i] === 'u'){
            return true;
        }
            
    }
    return false;
}
//console.log(hasVowels('sstttvvvv'));

function testTemperature (desiredTemp, actualTemp) {

    if (actualTemp > desiredTemp) console.log('Run AC');
    else if (actualTemp < desiredTemp) console.log("Run Heat" );
    else console.log('Standby');

}
//testTemperature(65,92);



const dealership = [
    {
        make: 'Toyota',
        model: 'Prius',
        year:  2020,
        hybrid: true,
    },
    {
        make: 'Toyota',
        model: 'Prius',
        year:  2021,
        hybrid: true,     
    },
    {
        make: 'Ford',
        model: 'F-150',
        year:  2021,
        hybrid: false,
    },
    {
        make: 'Ferrari',
        model: 'Enzo',
        year:  2004,
        hybrid: false,
    },

]

function findCars(array, model) {
    return array.filter(car => car.model === model);
}

function addCar(array,newMake,newModel,newHybrid) {
    const newCar = {
        model: newModel,
        make: newMake,
        year: 2021,
        hybrid: newHybrid,
    };
    array.unshift(newCar);  //unshift instead of push, we want it on top
}
//addCar(dealership, 'Ford', 'Focus', true);
//console.log(dealership)

function areThereAnyHybridsForSale (array) {
    return array.some(car => car.hybrid === true);
}
//console.log(areThereAnyHybridsForSale(dealership));









