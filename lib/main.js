var data = require('self').data;

require('page-mod').PageMod({
	include: '*',
	contentScriptWhen: 'end',
	contentScriptFile: data.url('foo.js'),
	onAttach: function(worker) {
		console.log('we\'re attached...');
	}
});
