/**
 * Created by umashankar.pardhi on 13-12-2016.
 */
var editor = createClass({

    initialize: function(canvasList){
        this.createEditor(canvasList);
    },
    createEditor:function(canvasList){
        _.each(canvasList, function (key,val) {
            var canvas = new fabric.Canvas('canvas-'+key.id);

        });
    }

});
