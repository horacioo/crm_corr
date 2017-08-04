angular.module('myApp').controller('teste',teste);
function teste(){
    var x = this;
    x.testre1="informacao";
    x.lista=[
        {nome:"fabiana", idade:36},
        {nome:"horácio", idade:40},
    ];
}