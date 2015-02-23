viewControllers.controller('unitDetailsWrapperView', ['$scope', '$rootScope', '$state', '$stateParams', 'servicesProvider', '$translate', 'apiProvider', 'cacheProvider', 'historyProvider',
	function($scope, $rootScope, $state, $stateParams, servicesProvider, $translate, apiProvider, cacheProvider, historyProvider) {
		$scope.bDisplayAttachmentsList = false;
		$scope.bDisplayDeficienciesList = false;
		$scope.bDisplayActivitiesList = false;

		$rootScope.bDataHasBeenModified = false;

		$scope.onDisplayDeficienciesList = function(){
			$scope.bDisplayDeficienciesList === false ? $scope.bDisplayDeficienciesList = true : $scope.bDisplayDeficienciesList = false;
		}

		$scope.$on("$destroy", function() {
			if(historyProvider.getPreviousStateName() === $rootScope.sCurrentStateName){ //current state was already put to the history in the parent views
				return;
			}

			historyProvider.addStateToHistory({
				sStateName: $rootScope.sCurrentStateName,
				oStateParams: angular.copy($rootScope.oStateParams)
			});
		});
	}
]);