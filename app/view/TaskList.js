Ext.define('ABLV.view.TaskList', {
	extend: 'Ext.dataview.List',
	alias: 'widget.labaislists',
	xtype: 'labaislists',
	requires: ['ABLV.store.Tasks'],
	
	config: {
		cls: 'custom-list-center',
		animation: 'slide', 
		title: 'Uzdevumu saraksts', 
		id: 'labaislists',
		grouped: true,
		itemTpl: '{uzdevumaApraksts}, id: {id}',
		store: 'Tasks',
		disableSelection: true,
		refs: {
			taskdetails: {
                autoCreate: true,
                selector: 'taskdetails',
                xtype: 'taskdetails'
            },
		},
	},

});