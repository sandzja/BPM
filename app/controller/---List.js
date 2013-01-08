Ext.define('ABLV.controller.List', {
   extend: 'Ext.app.Controller',

    config: {
        refs: {
            taskdetails: {
                autoCreate: true,
                selector: 'taskdetails',
                xtype: 'taskdetails'
        },
   },

        control: {
            "#taskList2": {
                itemtap: 'onTaskListTap'
            }
        }
    },

     onListActivate: function(container, newActiveItem, oldActiveItem, options) {
        var ds = Ext.StoreManager.lookup('Tasks');
        ds.clearFilter();
        console.log('ListActivate funkcija');
    },

    onTaskListTap: function(dataview, index, target, record, e, options) {
        var info = this.getTaskdetails();
        console.log('Info - ', info);
        

        info.setRecord(record);
        console.log('Record - ', info);

        Ext.Viewport.animateActiveItem(info, {});
        Ext.Viewport.animateActiveItem(info, {type:'slide', direction:'left'});
        console.log('ContactItemTap funkcija');

    }
    

});