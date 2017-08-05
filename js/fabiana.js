angular.module('myApp').controller('fabiana',['$scope', function($scope){
        $scope.nome="fabiana";
        $scope.idade="36";
        $scope.info=["trabalho","diversao","show do roupa nova"];
        $scope.dados={"documentos":["rg","cpf","cnh"," bluehost","bb"],"roupas":[1,2,3,4,5]};
}]);