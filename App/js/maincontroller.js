app.controller('maincontroller', ['$scope', function($scope) {
    $scope.wrongOrcorrect=false;
    $scope.icon;
    $scope.ending;
    $scope.data=[];
    var output = [];
    $scope.checkSen=function(sen1,sen2){
    var subOfsen1 = sen1.substring(sen1.length - 2);
    var subOfsen2 = sen2.substring(sen2.length - 2);
    if(subOfsen1[0] == subOfsen2[0] && subOfsen1[1] == subOfsen2[1]){
           console.log("This is a rithm. Well done");
           $scope.wrongOrcorrect = true;
           $scope.icon="http://www.nexcius.net/wp-content/uploads/2013/05/success_512.png";
           $scope.data=$scope.data.concat([sen1,sen2]);
           console.log($scope.data);
    }else{
         console.log("This is not a rythm, try again");
         $scope.wrongOrcorrect = true;
         $scope.icon="http://png-4.findicons.com/files/icons/1014/ivista/256/error.png";
         }        
    };
  
      var output = { 
         "ка":["штука","мука","сумка","разлука","ловка"],
         "ой":["судьбой","собой","особой","слабой","боевой"]
    };
    $scope.search = function(input){
        var subOfinput = input.substring(input.length - 2);
        $scope.words = output[subOfinput];
    };
}]);