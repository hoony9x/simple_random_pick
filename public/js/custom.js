var randomApp = angular.module('randomApp', []);

randomApp.controller('RandomPickControl', function($scope, $interval) {
    var init1 = ['test1', 'test2', 'test3'];
    var init2 = ['test4', 'test5', 'test6'];
    var init3 = ['test7', 'test8', 'test9'];

    $scope.group1 = [];
    $scope.group2 = [];
    $scope.group3 = [];

    function getRandomNum(modular) {
        var result = Math.floor(Math.random() * modular);
        return result;
    };

    $scope.displayTargetName = function(name) {
        /*
        $scope.target_name = 5;
        var timeout = $interval(function() {
            $scope.target_name--;
            if($scope.target_name == 0)
            {
                $scope.target_name = name;
                $interval.cancel(timeout);
            }
        }, 1000);
        */
        /* 딜레이 없이 이름 바로 표시 */
        $scope.target_name = name;
    };

    $scope.getGroup1Member = function() {
        if($scope.group1.length == 0) {
            //Reset Array
            angular.copy(init1, $scope.group1);
        }

        var index = getRandomNum($scope.group1.length);
        $scope.displayTargetName($scope.group1[index]);
        $scope.group1.splice(index, 1);
    };

    $scope.getGroup2Member = function() {
        if($scope.group2.length == 0) {
            //Reset Array
            angular.copy(init2, $scope.group2);
        }

        var index = getRandomNum($scope.group2.length);
        $scope.displayTargetName($scope.group2[index]);
        $scope.group2.splice(index, 1);
    };

    $scope.getGroup3Member = function() {
        if($scope.group3.length == 0) {
            //Reset Array
            angular.copy(init3, $scope.group3);
        }

        var index = getRandomNum($scope.group3.length);
        $scope.displayTargetName($scope.group3[index]);
        $scope.group3.splice(index, 1);
    };

    $scope.target_name = null;
    $scope.RemoveName = function() {
        $scope.target_name = null;
    }
});