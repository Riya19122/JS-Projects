const form = document.querySelector('form')
// this usecase will give the empty value
    // const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit' , function(e){
    e.preventDefault();    // to prvent from submit to the next page

    const height = parseInt(document.querySelector('#height').value);   // parseInt => helps to convert string into number
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`;
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2)
        message = `<span>your bmi is ${bmi}<span>`;

        if(bmi < 18.6){
            message += ` you are underweight`;
        } else if(18.6 < bmi < 24.9){
            message += ` you are normalweight `
        } else{
            message += ` you are overweight`
        }

        results.innerHTML = message;

    }


})