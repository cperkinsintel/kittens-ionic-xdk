(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  .uib_w_2 */
    $(document).on("click", ".uib_w_2", function(evt)
    {
        /* your code goes here */ 
        intel.xdk.services.flickrphotos_search({});
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
