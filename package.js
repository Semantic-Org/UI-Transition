var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-transition',
  summary : 'Semantic UI - Transition (official): Single component release of transition',
  version : '1.9.2',
  git     : 'git://github.com/Semantic-Org/UI-Transition.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
