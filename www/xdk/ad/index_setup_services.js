var data_views   = { group:[], single:[], bindings:{}};


data_views.group.push({"model":{"url":null,"title":null,"secret":null},"child":".uib_w_10","parent":".uib_w_6"});
data_views.single.push({"selector":".uib_w_11","options":{"effect":["html","attributes"]}});
/* prepare controllers */

data_support.prepare_mvc(".uib_w_10", "intel.xdk.services.flickrphotos_search", ["photos","photo"], "standard-list", data_views);
data_support.prepare_mvc(".uib_w_11", "uib_w_10_data", [], "null", data_views);
