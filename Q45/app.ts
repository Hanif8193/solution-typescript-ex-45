function make_Car (maunfacturer, model, ...option){

    let car ={
        maunfacturer: maunfacturer,
        model: model,
    };
    //aditional options
    option. forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;

};
//call the function to create car object
let my_car  = make_Car("Honda", "city", "color : Blue", "sunroof : true", "year: 2022");
//print the value
console.log(my_car);

