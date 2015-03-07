viewControllers.controller('activityDetailsWrapperView', ['$scope', '$rootScope', '$state', '$stateParams', 'servicesProvider', '$translate', 'apiProvider', 'cacheProvider', 'historyProvider',
	function($scope, $rootScope, $state, $stateParams, servicesProvider, $translate, apiProvider, cacheProvider, historyProvider) {
		$scope.bDisplayAttachmentsList = false;

		$rootScope.bDataHasBeenModified = false;

        $scope.onDisplayAttachmentsList = function() {
            $scope.bDisplayAttachmentsList === false ? $scope.bDisplayAttachmentsList = true : $scope.bDisplayAttachmentsList = false;
        };

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