viewControllers.controller('notificationsListView', ['$scope', '$rootScope', '$state', '$stateParams', 'servicesProvider', '$translate', 'apiProvider', 'cacheProvider', 'utilsProvider', 'historyProvider', '$mdSidenav', '$window', '$filter', '$cookieStore', 'rolesSettings', '$timeout',
    function($scope, $rootScope, $state, $stateParams, servicesProvider, $translate, apiProvider, cacheProvider, utilsProvider, historyProvider, $mdSidenav, $window, $filter, $cookieStore, rolesSettings, $timeout) {

        var sCurrentUser = cacheProvider.oUserProfile.sUserName;
        var sCompany = cacheProvider.oUserProfile.sCurrentCompany;
        var sCurrentRole = cacheProvider.oUserProfile.sCurrentRole;

        $rootScope.sCurrentStateName = $state.current.name; // for backNavigation   
        $rootScope.oStateParams = {}; // for backNavigation 

        //Will be used for notification dropdown
        // if ($cookieStore.get("selectedDeficiencyStatuses" + sCurrentUser + sCompany) && $cookieStore.get("selectedDeficiencyStatuses" + sCurrentUser + sCompany).aSelectedStatuses) {
        //     $scope.aSelectedStatuses = angular.copy($cookieStore.get("selectedDeficiencyStatuses" + sCurrentUser + sCompany).aSelectedStatuses);
        // }

        $scope.aDataForMassChanges = [];

        var oNotificationsListData = {
            aData: []
        };

        var oTableStatusFromCache = cacheProvider.getTableStatusFromCache({
            sTableName: "notificationsList",
            sStateName: $rootScope.sCurrentStateName,
        });

        var oInitialSortingForNotificationsList = {
            _createdAt: 'desc'
        };
        if (oTableStatusFromCache && !angular.equals(oTableStatusFromCache.oSorting, {})) {
            oInitialSortingForNotificationsList = angular.copy(oTableStatusFromCache.oSorting);
        }
        var oInitialFilterForNotificationsList = {};
        if (oTableStatusFromCache && !angular.equals(oTableStatusFromCache.oFilter, {})) {
            oInitialFilterForNotificationsList = angular.copy(oTableStatusFromCache.oFilter);
        }
        var oInitialGroupsSettingsForNotificationsList = [];
        if (oTableStatusFromCache && !angular.equals(oTableStatusFromCache.aGroups, [])) {
            oInitialGroupsSettingsForNotificationsList = angular.copy(oTableStatusFromCache.aGroups);
        }

        $scope.tableParams = servicesProvider.createNgTable({
            oInitialDataArrayWrapper: oNotificationsListData,
            sDisplayedDataArrayName: "aDisplayedNotification",
            oInitialSorting: oInitialSortingForNotificationsList,
            oInitialFilter: oInitialFilterForNotificationsList,
            aInitialGroupsSettings: oInitialGroupsSettingsForNotificationsList,
            sGroupBy: "sProjectPhase",
            sGroupsSortingAttribue: "_sortingSequence" //for default groups sorting
        });

        var onNotificationsLoaded = function(aData) {
            var sProjectName = "";
            var sPhaseName = "";
            var dCurrentDate = new Date();
            var sProjectPhase = "";
            var bMatchFound = false;
            var iSortingSequence = 0;
            // var sStatusSortingSequence = "";
            // var sStatuseIconUrl = "";
            // var sStatuseIconGuid = "";
            var sStatusDescription = "";


            oNotificationsListData.aData = [];

            for (var i = 0; i < aData.length; i++) {
                sProjectName = "";
                sPhaseName = "";
                sProjectPhase = "";
                
                iSortingSequence = 0;
                
                sStatus = "";
                
                bMatchFound = false;

                if (aData[i].PhaseDetails) {
                    iSortingSequence = aData[i].PhaseDetails.GeneralAttributes.SortingSequence;
                    for (var k = 0; k < cacheProvider.oUserProfile.aGloballySelectedPhasesGuids.length; k++) {
                        if (aData[i].PhaseDetails.Guid === cacheProvider.oUserProfile.aGloballySelectedPhasesGuids[k]) {
                            bMatchFound = true;
                            break;
                        }
                    }
                    if (!bMatchFound) {
                        continue;
                    }

                    sProjectName = $translate.use() === "en" ? aData[i].PhaseDetails.ProjectDetails.NameEN : aData[i].PhaseDetails.ProjectDetails.NameFR;
                    if (!sProjectName) {
                        sProjectName = aData[i].PhaseDetails.ProjectDetails.NameEN;
                    }
                    sPhaseName = $translate.use() === "en" ? aData[i].PhaseDetails.NameEN : aData[i].PhaseDetails.NameFR;
                    if (!sPhaseName) {
                        sPhaseName = aData[i].PhaseDetails.NameEN;
                    }

                    sProjectPhase = sProjectName + " - " + sPhaseName;
                } else {
                    sProjectPhase = "Not Assigned";
                }

                sOperationName = $translate.use() === "en" ? aData[i].OperationNameEN : aData[i].OperationNameFR;

                if(aData[i].Status === "not read"){

                }

                oNotificationsListData.aData.push({
                    _guid: aData[i].Guid,
                    sProjectPhase: sProjectPhase,
                    sStatus: aData[i].Status,
                    sEntityName: aData[i].EntityName,
                    _entityGuid: aData[i].EntityGuid,
                    sOperationName:  sOperationName,
                    _sortingSequence: iSortingSequence,
                    _createdAt: aData[i].CreatedAt,
                    sCreatedAt: utilsProvider.dBDateToSting(aData[i].CreatedAt),
                    sCreatedBy: aData[i].GeneralAttributes.CreatedBy,
                });
            }
            $scope.tableParams.reload();
            $timeout(function() {
                if ($(".cnpAppView")[0]) {
                    $(".cnpAppView")[0].scrollTop = cacheProvider.getListViewScrollPosition("notificationsList");
                    cacheProvider.putListViewScrollPosition("notificationsList", 0);
                }
            }, 0);
        };

        var loadNotifications = function() {
            oNotificationsListData.aData = [];
                apiProvider.getOperationLogs({
                    sExpand: "PhaseDetails/ProjectDetails",
                    sFilter: "CompanyName eq '" + cacheProvider.oUserProfile.sCurrentCompany + "' and UserName eq '" + cacheProvider.oUserProfile.sUserName + "'",
                    bShowSpinner: true,
                    onSuccess: onNotificationsLoaded
                });
        };
        loadNotifications();

        $scope.onDisplay = function(oNotification, oEvent) {
            cacheProvider.putListViewScrollPosition("notificationsList", $(".cnpAppView")[0].scrollTop); //saving scroll position...
            switch(oNotification.sEntityName){
                case "deficiency":
                    $state.go('app.deficiencyDetailsWrapper.deficiencyDetails', {
                        sMode: "display",
                        sDeficiencyGuid: oNotification._entityGuid,
                    });                    
                    break;
            }

            apiProvider.updateOperationLog({
                sKey: oNotification._guid,
                oData: {
                    Status: 'read'
                },                
            })
        };

        $scope.onClearFiltering = function() {
            $scope.tableParams.$params.filter = {};
            $scope.tableParams.reload();
        };

        $scope.$on('globalUserPhasesHaveBeenChanged', function(oParameters) {
            loadNotifications();
        });

        $scope.$on('notificationsShouldBeRefreshed', function(oParameters) {
            loadNotifications();
        });

        $scope.onStatusChange = function(oNotification) {
            if (!$scope.bDisplayEditButtons) {
                return;
            }
            oNotification.sStatuseIconUrl = $window.location.origin + $window.location.pathname + "rest/file/V2/get/" + aTaskStatuses[(oNotification.sStatusSortingSequence + 1) % aTaskStatuses.length].AssociatedIconFileGuid;

            $scope.aDataForMassChanges.push({
                Guid: oNotification._guid,
                TaskStatusGuid: aTaskStatuses[(oNotification.sStatusSortingSequence + 1) % aTaskStatuses.length].Guid,
            });
            oNotification.sStatusSortingSequence = (oNotification.sStatusSortingSequence + 1) % aTaskStatuses.length;
            alert(oNotification._guid);
            oNotification._guid = "!!!";
        };

        $scope.onMassSave = function() {
            cacheProvider.putListViewScrollPosition("notificationsList", $(".cnpAppView")[0].scrollTop); //saving scroll position...
            var onSuccess = function() {
                $scope.aDataForMassChanges = [];
                loadNotifications();
            };

            apiProvider.updateNotifications({
                aData: $scope.aDataForMassChanges,
                bShowSpinner: true,
                bShowSuccessMessage: true,
                bShowErrorMessage: true,
                onSuccess: onSuccess
            });
        };

        $scope.$on("$destroy", function() {
            if (historyProvider.getPreviousStateName() === $rootScope.sCurrentStateName) { //current state was already put to the history in the parent views
                return;
            }

            historyProvider.addStateToHistory({
                sStateName: $rootScope.sCurrentStateName,
                oStateParams: $rootScope.oStateParams
            });
        });        
    }
]);