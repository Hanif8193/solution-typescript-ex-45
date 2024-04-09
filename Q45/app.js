function make_Car(maunfacturer, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    var car = {
        maunfacturer: maunfacturer,
        model: model,
    };
    //aditional options
    option.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
;
//call the function to create car object
var my_car = make_Car("Honda", "city", "color : Blue", "sunroof : true", "year: 2022");
//print the value
console.log(my_car);
