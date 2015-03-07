app.controller('mainController', ['$scope', '$rootScope', '$state', 'apiProvider', 'servicesProvider', 'cacheProvider', 'CONSTANTS', 'utilsProvider', 'cfpLoadingBar',
	function($scope, $rootScope, $state, apiProvider, servicesProvider, cacheProvider, CONSTANTS, utilsProvider, cfpLoadingBar) {
		var sUserName = apiProvider.getCurrentUserName();
		// if(CONSTANTS.bIsHybridApplication){
		// 		$cordovaStatusbar.overlaysWebView(false);			
		// }

		if (sUserName) {
			// alert("pubNub notification....");
			// $rootScope.sSessionGuid = utilsProvider.generateGUID();
			servicesProvider.onF5WithCurrentUserHandler(sUserName);

			// var sChannel = "";

			// PubNub.init({
			// 	publish_key: 'pub-c-59bd66cf-9992-42d5-af04-87ec537c73bb',
			// 	subscribe_key: 'sub-c-7606f63c-9908-11e4-a626-02ee2ddab7fe'
			// });
			// sChannel = "conspectorPubNub" + cacheProvider.oUserProfile.sCurrentCompany;
			// PubNub.ngSubscribe({
			// 	channel: sChannel
			// });

			// $rootScope.$on(PubNub.ngMsgEv(sChannel), function(event, payload) {
			// 	if (payload.message.sSessionGuid === $rootScope.sSessionGuid) {
			// 		return;
			// 	}
			// 	cacheProvider.cleanEntitiesCache(payload.message.sEntityName);
			// 	if (payload.message.sEntityName === "oAccountEntity") {
			// 		cacheProvider.cleanEntitiesCache("oAccountTypeEntity"); //for cases when accountTypes are readed with Accounts;
			// 	}

			// 	switch (payload.message.sEntityName) {
			// 		case "oAccountEntity":
			// 			$rootScope.$broadcast('accountsShouldBeRefreshed');
			// 			break;
			// 		case "oContactEntity":
			// 			$rootScope.$broadcast('contactsShouldBeRefreshed');
			// 			break;
			// 		case "oDeficiencyEntity":
			// 			$rootScope.$broadcast('deficienciesShouldBeRefreshed');
			// 			break;
			// 		case "oUnitEntity":
			// 			$rootScope.$broadcast('unitsShouldBeRefreshed');
			// 			break;	
			// 		case "oActivityEntity":
			// 			$rootScope.$broadcast('unitsShouldBeRefreshed');
			// 			break;												
			// 	}
			// });
		} else {
			//servicesProvider.logOut(); // had to move this call to appController.js to make it work...
		}

		$rootScope.$on('LOAD', function() {
			cfpLoadingBar.start();
			$rootScope.showSpinner = true;
		});
		$rootScope.$on('UNLOAD', function() {
			cfpLoadingBar.complete();
			$rootScope.showSpinner = false;
		});

		var onNotificationsLoaded = function(aData) {
			$rootScope.iNotificationsNumber = aData.length;
		};

		var getNotificationsNumber = function(){
			apiProvider.getOperationLogs({
				sExpand: "PhaseDetails/ProjectDetails",
				sFilter: "CompanyName eq '" + cacheProvider.oUserProfile.sCurrentCompany + "' and UserName eq '" + cacheProvider.oUserProfile.sUserName + "' and Status eq 'not read'",
				onSuccess: onNotificationsLoaded
			});			
		}

		$rootScope.$on('notificationsNumberShouldBeRefreshed', function(oParameters) {
			getNotificationsNumber();
		});

		getNotificationsNumber();

		$rootScope.bIsGalleryHidden = true;

		$rootScope.hideGallery = function() {
			$rootScope.bIsGalleryHidden = true;
		};
	}
]);