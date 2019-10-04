myapp=angular.module('chrome_app', []);
myapp.controller('popup_ctrl', ['$scope', function($scope){
    $scope.aimpermonth=0;
	$scope.platformfees=20;
	$scope.minchargepermonth=0;
	$scope.minchargeperweek=0;
	$scope.minchargeperday=0;
	$scope.projectaim=0;
	$scope.charge=0;
	$scope.charge_upwork=0;
	$scope.charge_freelancer=0;
	$scope.mode=1;

	

	$scope.change=function(){
		$scope.minchargepermonth=Math.round((1+($scope.platformfees/100))*$scope.aimpermonth);
		$scope.minchargeperweek=Math.round($scope.minchargepermonth/4);
		$scope.minchargeperday=Math.round($scope.minchargeperweek/7);
	}
	$scope.upwork_change=function(){

		$scope.charge_upwork=Math.round((1+($scope.platformfees/100))*$scope.projectaim);

	}
	$scope.freelancer_change=function(){
		$scope.charge_freelancer=Math.round((1+($scope.platformfees/100))*$scope.projectaim);
	}

	$scope.feechange=function(){
		if($scope.client_billed=="1"){
			$scope.platformfees=20;
		}
		else if($scope.client_billed=="2"){
			$scope.platformfees=10;
		}
		else if($scope.client_billed=="3"){
			$scope.platformfees=5;
		}
	}

	$scope.fiverr=function(){
		$scope.mode=1;
		$scope.platformfees=20;
		$scope.minchargepermonth=0;
		$scope.minchargeperweek=0;
		$scope.minchargeperday=0;
	    $scope.aimpermonth=0;
	}

	$scope.upwork=function(){
		$scope.mode=2;
		$scope.platformfees=20;
		$scope.minchargepermonth=0;
		$scope.charge_upwork=0;
		$scope.minchargeperweek=0;
		$scope.projectaim=0;
		$scope.minchargeperday=0;
		$scope.client_billed="1";
	    $scope.aimpermonth=0;
	}


	$scope.freelancer=function(){
		$scope.mode=3;
		$scope.platformfees=10;
		$scope.minchargepermonth=0;
		$scope.projectaim=0;
		$scope.charge_freelancer=0;
		$scope.minchargeperweek=0;
		$scope.minchargeperday=0;
	    $scope.aimpermonth=0;
	}


}]);

