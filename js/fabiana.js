angular.module('myApp').controller('fabiana',['$scope', function($scope){
        
        $scope.nome="fabiana";
        $scope.idade="36";
        $scope.info=["trabalho","diversao","show do roupa nova"];
        $scope.objeto="tt";
        $scope.dados={"documentos":["rg","cpf","cnh"," bluehost","bb"],"roupas":[1,2,3,4,5]};
        
        $scope.objeto="r";
        $scope.Carrega=function(){
            //alert("teste"); 
            $scope.dados.documentos.push($scope.objeto);
            $scope.objeto="";
        };
        
}]); 