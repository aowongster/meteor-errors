Package.describe({
  name: 'aowongster:errors',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'A pattern to display application errors to the user',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com:aowongster/meteor-errors.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  // api.use('ecmascript');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');
  // api.mainModule('errors.js');
  if (api.export) 
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('aowongster:errors');
  api.mainModule('errors-tests.js');
});
