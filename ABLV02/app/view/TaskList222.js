Ext.define('ABLV.view.TaskList222', {
	extend: 'Ext.dataview.List',
	alias: 'widget.labaislists222',
	xtype: 'labaislists222',
	requires: ['ABLV.store.Tasks'],
	
	config: {
		cls: 'custom-list-center',
		animation: 'slide', 
		title: 'Uzdevumu saraksts', 
		id: 'labaislists222',
		grouped: true,
		itemTpl: '222 - {uzdevumaApraksts}, id: {id}',
		store: 'Tasks',
		refs: {
			taskdetails: {
                autoCreate: true,
                selector: 'taskdetails',
                xtype: 'taskdetails'
            },
		},
	},
	

	onContactItemTap: function(dataview, index, target, record, e, options) {
        var info = this.getTaskdetails();
        console.log(info);

        info.setRecord(record);
        //Ext.Viewport.animateActiveItem(info, {type:'slide', direction:'left'});
        Ext.Viewport.animateActiveItem(info, {type:'slide', direction:'left'});
        console.log('ContactItemTap funkcija');

    },

});