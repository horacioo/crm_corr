  angular.module('myApp').controller('info',info);
           function info(){
               var inn=this;
               inn.teste="teste info";
               inn.testevvv="eeee";
               inn.fun = function(){alert("teste");}
           }
           