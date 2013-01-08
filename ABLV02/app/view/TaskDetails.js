Ext.define('ABLV.view.TaskDetails', {
    extend: 'Ext.form.Panel',
    xtype: 'taskdetails',
    alias: 'widget.taskdetails',
    

    
    config: {
        store: 'Tasks',
        padding: '10px',
        scrollable: true,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Detalizēts skats',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'infoBackBtn',
                        ui: 'back',
                        text: 'Back'
                    },
                    {
                        xtype: 'spacer'
                    }                    
                ]
            },
            
            {
                xtype: 'fieldset',
                title: 'Eksperta sagatavotā informācija',
                //instructions: 'Please enter the information above.',
                defaults: {
                    labelWidth: '30%'
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'id',
                        label: 'ID',
                        itemId: 'id',
                        //disabled: true,
                        clearIcon: false,
                        readOnly: false,
                        hidden: true
                        //labelAlign: 'top'
                    },
                    {
                        xtype: 'textfield',
                        //disabled: true,
                        itemId: 'uzdevumaID',
                        clearIcon: false,
                        label: 'Uzdevuma ID',
                        name: 'uzdevumaID',
                        readOnly: false,
                        hidden: false
                    },
                    {
                        xtype: 'textfield',
                        //disabled: true,
                        itemId: 'uzdevumaTips',
                        clearIcon: false,
                        label: 'Uzdevuma tips:',
                        name: 'uzdevumaTips',
                        placeHolder: 'Uzdevuma tips nav norādīts',
                        readOnly: false
                    },{
                        xtype: 'textfield',
                        //disabled: true,
                        itemId: 'uzdevumaApraksts',
                        clearIcon: false,
                        label: 'Uzdevuma apraksts:',
                        name: 'uzdevumaApraksts',
                        placeHolder: 'Uzdevuma apraksts nav norādīts',
                        readOnly: false
                    },
                    {   
                        xtype: 'textfield',
                        //disabled: true,
                        itemid: 'izpildesDatums',
                        clearIcon: false,
                        label: 'Izpildes termiņš:',
                        name: 'izpildesDatums',
                        //placeHolder: 'Izpildes termiņš nav norādīts',
                        readOnly: false
                    },
                ],    
            },                
            {
                xtype: 'fieldset',
                title: 'Pievienot komentāru par izpildi',
                defaults: {
                    labelWidth: '30%'
                },
                items: [
                    {//Pietrūkst!!
                        xtype: 'textfield',
                        name: 'komentars',
                        label: 'Komentārs:',
                        itemId: 'komentars',
                        //disabled: true,
                        clearIcon: true,
                        readOnly: false,
                        hidden: false,
                        placeHolder: 'Pievieno savu komentāru par uzdevuma izpildi!',
                        //labelAlign: 'top'
                    },
                    {//Pietrūkst!!
                                xtype: 'datepickerfield',
                                //disabled: true,
                                itemid: 'FaktiskaisIzpildesDatums',
                                clearIcon: false,
                                label: 'Faktiskais izpildes datums:',
                                name: 'FaktiskaisIzpildesDatums',
                                value : { day: new Date().getDate(), month: (new Date().getMonth()+1), year : new Date().getFullYear()},
                                readOnly: false,
                                picker: {
                                        yearFrom: 2012,
                                        yearTo: 2015
                                        }
                    },

                ],    
            },{
                xtype: 'fieldset',
                title: 'Pārējie lauki',
                defaults: {
                    labelWidth: '30%'
                },
                items: [
                    {//Pietrūkst!!
                        xtype: 'textfield',
                        name: 'lietotajs',
                        label: 'Lietotājs:',
                        itemId: 'lietotajs',
                        //disabled: true,
                        clearIcon: true,
                        readOnly: true,
                        hidden: false,
                        placeHolder: 'Lietotājs',
                        //labelAlign: 'top'
                    },
                    {//Pietrūkst!!
                        xtype: 'textfield',
                        name: 'uzdevumaStatuss',
                        label: 'Uzdevuma statuss:',
                        itemId: 'uzdevumaStatuss',
                        //disabled: true,
                        clearIcon: true,
                        readOnly: true,
                        hidden: false,
                        placeHolder: 'Lietotājs',
                        //labelAlign: 'top'
                    },
                ],    
            },
           
            

            {
                xtype: 'toolbar',
                docked: 'bottom',
                ui: 'dark',
                title: '',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'CancelTaskBtn',
                        ui: 'decline',
                        iconCls: '',
                        iconMask: true,
                        text: 'Atcelt uzdevumu'
                    },
                    {
                        xtype: 'button',
                        itemId: 'CompleteTaskBtn',
                        ui: 'confirm',
                        iconCls: '',
                        iconMask: true,
                        text: 'Pārsūtīt uz pārbaudi'
                    }
                ]
            }, 
        ]
    },

    getValidationErrors: function() {
        var errors = [];
        var reqFields = this.query('field[required=true]');
        var i = 0, ln = reqFields.length, field;
        for (; i < ln; i++) {
            field = reqFields[i];
            if (!field.getValue()) {
                errors.push(field.getLabel() + ' must be completed.');
            }
        }
        console.dir(errors);
        return errors;
    },

    setRecord: function(record) {
        this.callParent(arguments);
        /*if (record) {
            this.child('contactpic').setData(record.data);
        }*/
    }

});