viewControllers.controller('operationLogsListView', ['$scope', '$rootScope','$state', 'servicesProvider', 'ngTableParams', '$filter', 'apiProvider', '$translate', 'utilsProvider', 'historyProvider',
	function($scope, $rootScope, $state, servicesProvider, ngTableParams, $filter, apiProvider, $translate, utilsProvider, historyProvider) {
		historyProvider.removeHistory(); // because current view doesn't have a back button			
		$rootScope.sCurrentStateName = $state.current.name; // for backNavigation	
		$rootScope.oStateParams = {}; // for backNavigation			
		var oOperationLogsListData = {
			aData: []
		};

		$scope.tableParams = servicesProvider.createNgTable({
			oInitialDataArrayWrapper: oOperationLogsListData,
			sDisplayedDataArrayName: "aDisplayedOperationLogs",
			oInitialSorting: {
				createdAt: 'desc'
			}
		});

		var onOperationLogsLoaded = function(aData) {
			var oOperation = {};
			var oOperationContent = {};
			for (var i = 0; i < aData.length; i++) {
				oOperation = {};
				oOperationContent = {};
				oOperation.operationName = aData[i].OperationName;
				oOperation.createdBy = aData[i].GeneralAttributes.CreatedBy;
				oOperation.createdAt = utilsProvider.dBDateToSting(aData[i].CreatedAt);
				if (aData[i].OperationName === "login_success" || "log_out") {
					oOperationContent = utilsProvider.stringToJson(aData[i].OperationContent);
					oOperation.operationContent = $translate.instant('global_role') + ": " + oOperationContent.sRole + ", ";
					oOperation.operationContent = oOperation.operationContent + $translate.instant('global_company') + ": " + oOperationContent.sCompany;
				}

				oOperationLogsListData.aData.push(oOperation);
			}
			$scope.tableParams.reload();
		}

		apiProvider.getOperationLogs({
			sPath: "OperationLogs",
			sFilter: "CompanyName eq '" + cacheProvider.oUserProfile.sCurrentCompany + "' and GeneralAttributes/IsDeleted eq false",
			bShowSpinner: true,
			onSuccess: onOperationLogsLoaded
		});
	}
]);