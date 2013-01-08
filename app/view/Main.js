Ext.define("ABLV.view.Main", {
    extend: 'Ext.ux.slidenavigation.View',
    xtype: 'mainview',
    alias: 'widget.mainview',

    requires: [
        'Ext.ux.slidenavigation.View',
        'ABLV.view.TaskList',
        'Ext.Container',
        //'Ext.MessageBox',
        'Ext.Panel',
        'Ext.Toolbar',
        'Ext.event.publisher.Dom',
        //'ABLV.view.TaskList',
        //'ABLV.view.TaskDetails',
        'Ext.navigation.View',
        //'ABLV.store.Tasks'
        ],
    
    config: {
        id: 'main',
        fullscreen: true,
        
        /*Slaideris menu*/
        slideSelector: 'x-toolbar',
        
        selectSlideDuration: 200,

        itemMask: true,
        closeOnSelect: false,

        /*Slaidera poga galvenajā skatā*/
        slideButtonDefaults: {
            selector: 'toolbar',
            ui: 'action'
        },
        
        /*Kreisais menu slaideris*/ 
        list: {
            id: 'kreisaislists',
            cls: 'custom-list-left',
            maxDrag: 400,
            width: 300,
                items: [{
                    xtype: 'toolbar',
                    docked: 'top',
                    ui: 'dark',                    
                        title: {
                            title: 'Uzdevumu saraksts',
                            centered: false,
                            width: 300,
                            left: 0
                        }
                    },
            //kreisās apakšas logo
                {
                    xtype: 'image',
                    docked: 'bottom',
                    height: 125,
                    width: 300,
                    position: 'center',
                    ui: 'light',
                    src: 'resources/css/logo-left.png'
                }
                ]
            
        }, //beidzās "list"
        
        groups: {
            'Visi uzdevumi': 1,
            'Kategorijas': 2
        },
        
        /**
         *  These are the default values to apply to the items within the
         *  container.
         */
        defaults: {
            xtype: 'container'
            },
        
        cls: 'custom-list-center',
        
        items: [
        
            {
            title: 'Visi uzdevumi',
            group: 'Visi uzdevumi',
            id: 'first',
            

            // Enable the slide button using the defaults defined above in
            // `slideButtonDefaults`.
            slideButton: true,
            
            items: [
                {//kreisās puses kategorija 'Visi uzdevumi'
                    xtype: 'toolbar',
                    title: 'Visi uzdevumi new',
                    docked: 'top',
                    ui: 'light',
                },
                {//kreisās puses visu uzdevumu saraksts
                    xtype: 'labaislists',

                    // Mask this item when the container is opened
                    maskOnOpen: false
                }]//Visu uzdevumu itemu beigas
            },
        
            {//Pārējās kategorijas - jābūt dinamiskam listam
            title: 'Atskaites sagatavošana',
            group: 'Kategorijas',
            slideButton: {
                selector: 'toolbar',
                iconMask: true,
                //iconCls: 'arrow_left'
            },
            items: [{
                xtype: 'toolbar',
                title: 'Atskaites sagatavošana',
                docked: 'top'
                },
                {//kreisās puses 'Atskaites sagatavošana'
                    xtype: 'labaislists222', //no šejienes ņem datus
                    //itemTpl:'{uzdevumaId}',
                    //cls: 'custom-list-center',


                // Mask this item when the container is opened
                maskOnOpen: false
            }]
            },

            {//Nākošā apakškategorija
            title: 'Rīkojuma nosūtīšana',
            group: 'Kategorijas',
            slideButton: {
                selector: 'toolbar',
                iconMask: true,
                iconCls: 'arrow_left'
            },

            items: [{
                xtype: 'toolbar',
                title: 'Rīkojuma nosūtīšana',
                docked: 'top'
                },
                {//kreisās puses 'Atskaites sagatavošana'
                   xtype: 'labaislists222', //no šejienes ņem datus
                    

                // Mask this item when the container is opened
                maskOnOpen: false
            }]
            },

            {//Nākošā apakškategorija
            title: 'Lēmuma pieņemšana',
            group: 'Kategorijas',
            slideButton: {
                selector: 'toolbar',
                iconMask: true,
                iconCls: 'arrow_left'
            },

            items: [{
                xtype: 'toolbar',
                title: 'Lēmuma pieņemšana',
                docked: 'top'
                },
                {//kreisās puses 'Atskaites sagatavošana'
                    xtype: 'labaislists222', //no šejienes ņem datus
                    

                // Mask this item when the container is opened
                maskOnOpen: false
            }]


        }] //Beidzās apakškategorijas
    
    } //beidzās "config"




});//beidzās Ext.define("ABLV.view.Main",)