# logobutton-jbplugin

In the JBrowse root, create plugins/LogoButton dir.  Place the files in this project in there.

Add the following to index.html in the JBrowse root directory.
```
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
```

### Plugin Configuration

In the dataset's trackList.json, plugin configuration:

Standard configuration:
```
   "plugins" : ["LogoButton"],
```

Extended configuration options:
```
   "plugins" : [
      {
        "name": "LogoButton",
        "logo":"GG3-2.png", (image in dataset root)
        "logoURL":"http://wheat.pw.usda.gov",
        "logoText": "goto GrainGenes home",
        "dialogTitle":"Assembly Information",
        "showInfoDialog":true,
        "hasInfoButton":true,
        "showMethod":"slideDown" (can also be any JQuery UI effect, "scale","blind", etc.)
        "animShowTime": 300, (milliseconds)
        "animHideTime": 300, (milliseconds)
        "dialogWidth":1000,  (pixels)
		"hideTitle": false
      }
   ],
```
### pageinfo.html Example
Includes method of implementing a close button.
```
<div>
    Click for more info about the operations of the demo: 
    <a class="ui-button ui-widget ui-corner-all" target="_blank" href="https://jblast.readthedocs.io/en/latest/features.html#jblast-brief-tutorial">View Demo Guide</a>

    <button id="infoDialogClose" class="ui-button ui-widget ui-corner-all">Close</button>

</div>
```
