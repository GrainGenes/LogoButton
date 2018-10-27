/* 
 */

define([
           'dojo/_base/declare',
           'dojo/_base/lang',
           'dojo/Deferred',
           'JBrowse/Plugin',
           'JBrowse/Util'
       ],
       function(
           declare,
           lang,
           Deferred,
           JBrowsePlugin,
           Util        
       ) {
return declare( JBrowsePlugin,
{
    constructor: function( args ) {
        console.log("plugin: LogoButton",args);

        let thisB = this;
        let browser = this.browser;
        let conf = browser.config;
        let dataRoot = conf.baseUrl + conf.dataRoot;

        let dialogTitle = "Information";
        let logoFile = "plugins/LogoButton/GG3-2.png";

        // if arg.logo is defined, reference the logo in the data directory
        if (args.logo) logoFile = conf.dataRoot + '/' + args.logo;

        // use custom dialog title
        if (args.dialogTitle) dialogTitle = args.dialogTitle;

        //console.log('plugin-config',getPluginConf(),dataRoot);

        // create function intercept after view initialization (because the view object doesn't exist before that)
        browser.afterMilestone( 'initView', function() {

            console.log("initView");
            $('div.menuBar').prepend(
                '<span class="dijit dijitReset dijitInline menu"><img id="logoInfoImage" src="'+logoFile+'" /></span>'+
                '<div id="infoDialog" title="'+dialogTitle+'"></div>'
            );

            $( function() {
                $( "#infoDialog" ).dialog({
                  modal: true,
                  autoOpen: true,
                  width: 1000,
                  show: {
                    effect: "scale",
                    duration: 1000
                  },
                  hide: {
                    effect: "scale",
                    duration: 1000
                  },
                  open: function ()
                  {
                    $(this).load(dataRoot+'/pageinfo.html',function( response, status, xhr) {
                        if ( status == "error" ) {
                            let msg = "<p>pageinfo.html: " + xhr.status + " " + xhr.statusText + "</p>";
                            if (xhr.status===404)
                                msg += "<p>Place pageinfo.html in the data root.  This will be displayed in the this dialog box upon launch.";

                            $( "#infoDialog" ).html( msg );
                        }
                        $("#infoDialogClose").on( "click", function() {
                            $( "#infoDialog" ).dialog( "close" );
                        });
                        $("#logoInfoImage").on( "click", function() {
                            $( "#infoDialog" ).dialog( "open" );
                        });
                });
                  }          
                });
            });
            
            //setTimeout(function() {
            //    $("#infoDialog").dialog( "open" );
            //},1000);

        }); 
        
        function getPluginConf() {
            let plugins = conf.plugins;
            let hasPlugin = false;
            plugins.forEach(function(item) {
                console.log(item,typeof item);
                if (item==="LogoButton" || item.name==="LogoButton") hasPlugin = item;
            });
            return hasPlugin;
        };
    }
    
});
});

