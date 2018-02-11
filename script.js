alert("made a nice drawing? share the hash in the comments");
//FUNCTIONS
function random(){
    for(var i=0;i<m.length;i++){
    var x = r(0,c.length);
                $("#c-"+i).css("background-color",c[x]);}
    m[i] = x;
}

function r(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//.FUNCTIONS

//let m = new Array(20).fill(0);
var m = "0-2-3-0-0-3-2-0-0-2-3-0-0-3-2-0-0-2-3-0".split("-");
var c = ["gray","#ef5350","orange","black","#039be5","#fdd835","#4caf50"];

$(function() {
    //INIT LCD
    var id = 0;
    var cells = 20;
    var b = "";
    for(id; id<cells; id++){
        if((id+1)%4 ===0){b="<br>";}else
        {b="";}
        $("#lcd").append("<div id='c-"+id+"' class='cell f'></div>"+b);
    }
    
    //INIT COLOR
    for(var i=0;i<m.length;i++){
                $("#c-"+i).css("background-color",c[m[i]]);
        }
    
    //EVENTS
    //Cell
    $(".cell").click(function(){
        var id = $(this).attr('id').split("-")[1];
        m[id] += 1;
        if(m[id] > c.length-1){m[id]=0;}
        //console.log(m[id]);
        $(this).css("background-color",c[m[id]]);
    });
    //Save
    $("#load-b").click(function(){
        $("#load-i").val("");
        var out = "";
        for(var i=0; i<m.length; i++){
            out += (m[i]+"-");
        }
        out = out.slice(0, -1);
        $("#load-i").val(out);
    });
    //Input
    $("#input-b").click(function(){
    try
    {
        var in_ = $("#load-i").val().split("-");
        if(in_.length === 20){
            m = in_;
            //console.log(m);
            for(var i=0;i<m.length;i++){
                $("#c-"+i).css("background-color",c[m[i]]);
            //console.log(c[m[i]]);
                if(c[m[i]] === undefined){
                    $("#debug").text("wrong input");
                }
            }
        }else{
            $("#debug").text("wrong input");
        }
    }catch(err)
    {
        //alert("wrong input");
    }
    });
    //Reset
    $("#reset-b").click(function(){
        m = new Array(20).fill(0);
        for(var i=0;i<m.length;i++){
                $("#c-"+i).css("background-color",c[m[i]]);
        }
    });
    //Random
    $("#random-b").click(function(){
        random();
    });
});

