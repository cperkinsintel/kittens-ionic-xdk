data_support.late(init_data_driving);



        utils.dispatch_case("driving-on-change", "ionic/input",
                            function(domNode, data, f){ $(domNode).find("input").on("change keydown paste input", f); });
        utils.dispatch_case("driving-get-value", "ionic/input",
                            function(domNode, data)
                            {
                              return $(domNode).find("input").val(); 
                            });
