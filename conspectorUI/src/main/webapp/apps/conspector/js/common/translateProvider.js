app.config(['$translateProvider',
      function($translateProvider) {
            $translateProvider.translations('en', {
                  //global
                  global_addNew: 'Add New',
                  global_actions: 'Actions',
                  global_descriptionEN: 'Description EN',
                  global_descriptionFR: 'Description FR',
                  global_sortingSequence: 'Sorting sequence',
                  global_successOperation: 'Operation finished successfully.',
                  global_errorOperation: 'Operation failed.',
                  global_noDefaultViewForTheRole: 'Contact your system administrator (No default view assignment to the role)',
                  global_noCompanyAssignment: 'Contact your system administrator (No company assignment to the user)',
                  global_noRoleAssignment: 'Contact your system administrator (No role assignment to the user)',
                  global_noInitialPasswordProvided: 'No initial password has been provided. User creation is not possible',
                  global_changesSaveConfirmationHeader: 'Do you want to save changes before leaving the view?',
                  global_changesSaveConfirmationContent: 'Not saved changes will be lost...',
                  global_emptyFields: 'Please make sure that all the fields are filled',
                  global_companies: 'Assigned Companies:',
                  global_authorizedPhases: 'Authorized projects and phases:',
                  global_avatar: 'Avatar:',
                  global_noTableData: 'No data selected',
                  global_createdBy: 'Created By',
                  global_createdAt: 'Created At',
                  global_role: 'Role',
                  global_company: 'Company',
                  global_roles: 'Role(s)',
                  global_companies: 'Company(s)',
                  global_project: 'Project',
                  global_upload: 'Upload',
                  global_icon: 'Icon',
                  global_userName: 'Username',
                  global_email: 'Email',
                  global_back: 'Back',
                  global_edit: 'Edit',
                  global_save: 'Save',
                  global_delete: 'Delete',
                  global_saveAndNew: 'Save and new',
                  global_creationDate: 'Creation Date',
                  global_lastModificationDate: 'Last Modification Date',
                  global_associatedIconFileGuid: 'Associated Icon File Guid',
                  global_associatedColor: 'Associated Color',
                  global_password: 'Password',
                  global_passwordConfirmation: 'Password Confirmation',
                  global_continue: 'Continue',
                  global_ok: 'Ok',
                  global_yes: 'Yes',
                  global_no: 'No',
                  global_cancel: 'Cancel',
                  global_passwordsDontMatch: "Provided passwords don't match.",
                  global_contractorName: 'Contractor',
                  global_phone: 'Phone',
                  global_tags: 'Tags',
                  //backendMessages
                  m100: 'Operation finished successfully.',
                  m101: 'Email with instructions to recover your password was successfully sent.',
                  m102: 'Your password was successfully changed.',
                  m200: 'Username already exists',
                  m201: 'User with provided email already exists',
                  m203: 'Can not login. Check your Username and Password.',
                  m204: 'Email not found.',
                  m205: 'Provided Old Password is not correct',
                  m206: 'Username not found',
                  //app
                  app_switchCompanies: "Switch company",
                  app_switchRoles: "Switch Role",
                  app_logOut: 'Log Out',
                  app_adminPanel: 'Admin Panel',
                  app_profileSettings: 'Profile Settings',
                  app_deficienciesTab: 'Deficiencies',
                  app_unitsTab: 'Units',
                  app_contractorsTab: 'Contractors',
                  app_clientsTab: 'Clients',
                  //profileSettings
                  profileSettings_menuHeader: 'Profile Settings Menu',
                  profileSettings_profileDetails: 'Profile Details',
                  profileSettings_changePassword: 'Change Password',
                  //profileDetails
                  profileDetails_title: 'Profile Details',
                  //changePassword
                  changePassword_title: 'Change Password',
                  //adminPanel
                  adminPanel_menuHeader: 'Admin Panel Menu',
                  adminPanel_companies: "Companies",
                  adminPanel_userManagement: 'User Management',
                  adminPanel_roles: "User Roles",
                  adminPanel_projects: 'Projects',
                  adminPanel_phases: 'Phases',
                  adminPanel_deficiencyStatuses: 'Deficiency Statuses',
                  adminPanel_deficiencyPriorities: 'Deficiency Priorities',
                  adminPanel_systemFiles: 'System Files',
                  adminPanel_operationLogs: 'Operation Logs',
                  adminPanel_accountTypes: 'Account Types',
                  //companiesList
                  companiesList_title: "Companies",
                  companiesList_companyName: "Company Name",
                  //usersList
                  usersList_title: 'Users',
                  //userDetails
                  userDetails_title: 'User Details',
                  userDetails_deletionConfirmationHeader: 'Are you sure that you want to delete current user?',
                  userDetails_deletionConfirmationContent: 'Current user will be deleted...',
                  //rolesList
                  rolesList_title: "User Roles",
                  rolesList_roleName: "Role Name",
                  //projectsList
                  projectsList_title: 'Projects',
                  //phasesList
                  phasesList_title: 'Phases',
                  //deficiencyStatuses
                  deficiencyStatuses_title: 'Deficiency Statuses',
                  //deficiencyPriorities
                  deficiencyPriorities_title: 'Deficiency Priorities',
                  //operationLogsList
                  operationLogsList_title: 'Operation Logs',
                  operationLogsList_operationName: 'Operation Name',
                  operationLogsList_operationContent: 'Operation Content',
                  //accountTypesList
                  accountTypesList_title: 'Account Types',
                  //systemFiles
                  systemFiles_title: 'System Files',
                  systemFiles_logos: 'Logos:',
                  systemFiles_deficiencyStatuses: 'Deficiency Statuses:',
                  //signIn
                  signIn_userName: 'Username',
                  signIn_password: 'Password',
                  signIn_logIn: 'Log In to Conspector',
                  signIn_languageCode: 'FR',
                  signIn_forgotPassword: 'Forgot your password?',
                  signIn_rememberUserName: 'Remember Username',
                  //initialPasswordReset
                  initialPasswordReset_headerLabel: 'This is the first time you login. Please enter a new password:',
                  initialPasswordReset_newPassword: 'New password',
                  initialPasswordReset_newPasswordConfirmation: 'New password confirmation',
                  initialPasswordReset_reset: 'Set new password',
                  //passwordReset
                  passwordReset_headerLabel: 'Please enter a new password:',
                  passwordReset_newPassword: 'New password',
                  passwordReset_newPasswordConfirmation: 'New password confirmation',
                  passwordReset_reset: 'Set new password',
                  passwordReset_passwordsDontMatch: "Provided passwords don't match.",
                  //companySelection
                  companySelection_heagerLabel: 'Please choose a company:',
                  //roleSelection
                  roleSelection_heagerLabel: 'Please choose a role:',
                  //forgotPassword
                  forgotPassword_heagerLabel: 'Please select what you remember:',
                  forgotPassword_userName: 'Username',
                  forgotPassword_email: 'Email',
                  forgotPassword_reset: 'Reset password',
                  forgotPassword_footerLabel: 'Having issues logging in?\nEmail us at ',
                  //contractorsList
                  contractorsList_title: 'Contractors',
                  //contractorDetails
                  contractorDetails_title: 'Contractor Deatails',
            });

            $translateProvider.translations('fr', {
                  //global
                  global_addNew: 'Add New',
                  global_actions: 'Actions',
                  global_descriptionEN: 'Description EN',
                  global_descriptionFR: 'Description FR',
                  global_sortingSequence: 'Sorting sequence',
                  global_successOperation: 'Operation finished successfully.',
                  global_errorOperation: 'Operation failed.',
                  global_noDefaultViewForTheRole: 'Contact your system administrator (No default view assignment to the role)',
                  global_noCompanyAssignment: 'Contact your system administrator (No company assignment to the user)',
                  global_noRoleAssignment: 'Contact your system administrator (No role assignment to the user)',
                  global_noInitialPasswordProvided: 'No initial password has been provided. User creation is not possible',
                  global_changesSaveConfirmationHeader: 'Do you want to save changes before leaving the view?',
                  global_changesSaveConfirmationContent: 'Not saved changes will be lost...',
                  global_emptyFields: 'Please make sure that all the fields are filled',
                  global_companies: 'Assigned Companies:',
                  global_authorizedPhases: 'Authorized projects and phases:',
                  global_avatar: 'Avatar:',
                  global_noTableData: 'No data selected',
                  global_createdBy: 'Created By',
                  global_createdAt: 'Created At',
                  global_role: 'Role',
                  global_company: 'Company',
                  global_roles: 'Role(s)',
                  global_companies: 'Company(s)',
                  global_project: 'Project',
                  global_upload: 'Upload',
                  global_icon: 'Icon',
                  global_userName: 'Username',
                  global_email: 'Email',
                  global_back: 'Back',
                  global_edit: 'Edit',
                  global_save: 'Save',
                  global_delete: 'Delete',
                  global_saveAndNew: 'Save and new',
                  global_creationDate: 'Creation Date',
                  global_lastModificationDate: 'Last Modification Date',
                  global_associatedIconFileGuid: 'Associated Icon File Guid',
                  global_associatedColor: 'Associated Color',
                  global_password: 'Password',
                  global_passwordConfirmation: 'Password Confirmation',
                  global_continue: 'Continue',
                  global_ok: 'Ok',
                  global_yes: 'Yes',
                  global_no: 'No',
                  global_cancel: 'Cancel',
                  global_passwordsDontMatch: "Provided passwords don't match.",
                  global_contractorName: 'Contractor',
                  global_phone: 'Phone',
                  global_tags: 'Tags',
                  //backendMessages
                  m100: 'Operation finished successfully.',
                  m101: 'Email with instructions to recover your password was successfully sent.',
                  m102: 'Your password was successfully changed.',
                  m200: 'Username already exists',
                  m201: 'User with provided email already exists',
                  m203: 'Can not login. Check your Username and Password.',
                  m204: 'Email not found.',
                  m205: 'Provided Old Password is not correct',
                  m206: 'Username not found',
                  //app
                  app_switchCompanies: "Switch company",
                  app_switchRoles: "Switch Role",
                  app_logOut: 'Log Out',
                  app_adminPanel: 'Admin Panel',
                  app_profileSettings: 'Profile Settings',
                  app_deficienciesTab: 'Deficiencies',
                  app_unitsTab: 'Units',
                  app_contractorsTab: 'Contractors',
                  app_clientsTab: 'Clients',
                  //profileSettings
                  profileSettings_menuHeader: 'Profile Settings Menu',
                  profileSettings_profileDetails: 'Profile Details',
                  profileSettings_changePassword: 'Change Password',
                  //profileDetails
                  profileDetails_title: 'Profile Details',
                  //changePassword
                  changePassword_title: 'Change Password',
                  //adminPanel
                  adminPanel_menuHeader: 'Admin Panel Menu',
                  adminPanel_companies: "Companies",
                  adminPanel_userManagement: 'User Management',
                  adminPanel_roles: "User Roles",
                  adminPanel_projects: 'Projects',
                  adminPanel_phases: 'Phases',
                  adminPanel_deficiencyStatuses: 'Deficiency Statuses',
                  adminPanel_deficiencyPriorities: 'Deficiency Priorities',
                  adminPanel_systemFiles: 'System Files',
                  adminPanel_operationLogs: 'Operation Logs',
                  adminPanel_accountTypes: 'Account Types',
                  //companiesList
                  companiesList_title: "Companies",
                  companiesList_companyName: "Company Name",
                  //usersList
                  usersList_title: 'Users',
                  //userDetails
                  userDetails_title: 'User Details',
                  userDetails_deletionConfirmationHeader: 'Are you sure that you want to delete current user?',
                  userDetails_deletionConfirmationContent: 'Current user will be deleted...',
                  //rolesList
                  rolesList_title: "User Roles",
                  rolesList_roleName: "Role Name",
                  //projectsList
                  projectsList_title: 'Projects',
                  //phasesList
                  phasesList_title: 'Phases',
                  //deficiencyStatuses
                  deficiencyStatuses_title: 'Deficiency Statuses',
                  //deficiencyPriorities
                  deficiencyPriorities_title: 'Deficiency Priorities',
                  //operationLogsList
                  operationLogsList_title: 'Operation Logs',
                  operationLogsList_operationName: 'Operation Name',
                  operationLogsList_operationContent: 'Operation Content',
                  //accountTypesList
                  accountTypesList_title: 'Account Types',
                  //systemFiles
                  systemFiles_title: 'System Files',
                  systemFiles_logos: 'Logos:',
                  systemFiles_deficiencyStatuses: 'Deficiency Statuses:',
                  //signIn
                  signIn_userName: 'Username',
                  signIn_password: 'Password',
                  signIn_logIn: 'Connexion \u00E0 Conspector',
                  signIn_languageCode: 'EN',
                  signIn_forgotPassword: 'Forgot your password?',
                  signIn_rememberUserName: 'Remember Username',
                  //initialPasswordReset
                  initialPasswordReset_headerLabel: 'This is the first time you login. Please enter a new password:',
                  initialPasswordReset_newPassword: 'New password',
                  initialPasswordReset_newPasswordConfirmation: 'New password confirmation',
                  initialPasswordReset_reset: 'Set new password',
                  //passwordReset
                  passwordReset_headerLabel: 'Please enter a new password:',
                  passwordReset_newPassword: 'New password',
                  passwordReset_newPasswordConfirmation: 'New password confirmation',
                  passwordReset_reset: 'Set new password',
                  passwordReset_passwordsDontMatch: "Provided passwords don't match.",
                  //companySelection
                  companySelection_heagerLabel: 'Please choose a company:',
                  //roleSelection
                  roleSelection_heagerLabel: 'Please choose a role:',
                  //forgotPassword
                  forgotPassword_heagerLabel: 'Please select what you remember:',
                  forgotPassword_userName: 'Username',
                  forgotPassword_email: 'Email',
                  forgotPassword_reset: 'Reset password',
                  forgotPassword_footerLabel: 'Un probl\u00E8me de connexion?\n\u00C9crivez \u00E0 ',
                  //contractorsList
                  contractorsList_title: 'Contractors',
                  //contractorDetails
                  contractorDetails_title: 'Contractor Deatails',
            });

            $translateProvider.preferredLanguage('en');
            $translateProvider.useCookieStorage();
      }
]);