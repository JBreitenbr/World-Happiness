let set2=["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494"];

let expl=['GDP per capita','Social support','Healthy life expectancy','Freedom to make life choices','Perceptions of corruption','Generosity','Dystopia Residual'];

function showTimeline(cnt){

d3.select("#canvas_c1").remove();

d3.select("#canvas_c2").remove();

d3.select("#canvas_c3").remove();

d3.select("#canvas_c4").remove();

d3.select("#canvas_c5").remove();

d3.select("#canvas_c6").remove();

d3.select("#canvas_c7").remove();

d3.select("#canvas_c8").remove();

let canvas_c1 = d3.select("body")

    .append("svg")

    .attr("id","canvas_c1");

let canvas_c2 = d3.select("body")

    .append("svg")

    .attr("id","canvas_c2");

let canvas_c3 = d3.select("body")

    .append("svg")

    .attr("id","canvas_c3");

let canvas_c4 = d3.select("body")

    .append("svg")

    .attr("id","canvas_c4");

let canvas_c5 = d3.select("body")

    .append("svg")

    .attr("id","canvas_c5");

let canvas_c6 = d3.select("body")

    .append("svg")

    .attr("id","canvas_c6");

let canvas_c7 = d3.select("body")

    .append("svg")

    .attr("id","canvas_c7");

let canvas_c8 = d3.select("body")

    .append("svg")

    .attr("id","canvas_c8");

let legbox=canvas_c8.append('g').attr("id","legend");

let leg_h=+d3.select("#canvas_c8").style("height").slice(0,-2); 

let leg_w=+d3.select("#canvas_c8").style("width").slice(0,-2); 

for(let i=0;i<4;i++){

legbox.append("rect").attr("x",0.015*leg_w).attr("y",18/130*leg_h+i*25/130*leg_h).attr("height",leg_h/8).attr("width",leg_h/8).attr("fill",set2[i]);

legbox.append("text").text(expl[i]).style("text-anchor","end").attr("x",0.48*leg_w).attr("y",30/130*leg_h+i*25/130*leg_h).style("font",`${leg_h/11.3}px arial`).style("fill","navy");}

for(let i=4;i<7;i++){

legbox.append("rect").attr("x",0.54*leg_w).attr("y",18/130*leg_h+(i-4)*25/130*leg_h).attr("height",leg_h/8).attr("width",leg_h/8).attr("fill",set2[i]);

legbox.append("text").text(expl[i]).style("text-anchor","end").attr("x",0.95*leg_w).attr("y",30/130*leg_h+(i-4)*25/130*leg_h).style("font",`${leg_h/11.3}px arial`).style("fill","navy");}

let toolTip1=d3.select("body").append("div").style("visibility","hidden").style("position","absolute").style("background-color","white");

let toolTip2=d3.select("body").append("div").style("visibility","hidden").style("position","absolute").style("background-color","white");

let toolTip3=d3.select("body").append("div").style("visibility","hidden").style("position","absolute").style("background-color","white");

let toolTip4=d3.select("body").append("div").style("visibility","hidden").style("position","absolute").style("background-color","white");

let toolTip5=d3.select("body").append("div").style("visibility","hidden").style("position","absolute").style("background-color","white");

let toolTip6=d3.select("body").append("div").style("visibility","hidden").style("position","absolute").style("background-color","white");

let toolTip7=d3.select("body").append("div").style("visibility","hidden").style("position","absolute").style("background-color","white");

let w_s=window.innerWidth;

let h_s=window.innerHeight;

  

let w=+d3.select("#canvas_c1").style("width").slice(0,-2);

let h=+d3.select("#canvas_c1").style("height").slice(0,-2); 

let mouseover1 = (d,i)=>{

  toolTip1.style("visibility","visible").html(i[0]).style("background-color","#ffffe0").style("color","darkblue").style("border","1px solid darkblue").style("left",0.5*(w_s-w)+i[1]*w*0.1+0.15*w+"px").style("top",115+2.5*h+"px").style("font",`${h/4}px arial`);}

  

let mouseover2 = (d,i)=>{

toolTip2.style("visibility","visible").html(i[0]).style("background-color","#ffffe0").style("color","darkblue").style("border","1px solid darkblue").style("left",0.5*(w_s-w)+i[1]*w*0.1+0.15*w+"px").style("top",115+3.5*h+"px").style("font",`${h/4}px arial`);

}

let mouseover3 = (d,i)=>{

toolTip3.style("visibility","visible").html(i[0]).style("background-color","#ffffe0").style("color","darkblue").style("border","1px solid darkblue").style("left",0.5*(w_s-w)+i[1]*w*0.1+0.15*w+"px").style("top",115+4.5*h+"px").style("font",`${h/4}px arial`);

}

let mouseover4 = (d,i)=>{

toolTip4.style("visibility","visible").html(i[0]).style("background-color","#ffffe0").style("color","darkblue").style("border","1px solid darkblue").style("left",0.5*(w_s-w)+i[1]*w*0.1+0.15*w+"px").style("top",115+5.5*h+"px").style("font",`${h/4}px arial`);

}

let mouseover5 = (d,i)=>{

toolTip5.style("visibility","visible").html(i[0]).style("background-color","#ffffe0").style("color","darkblue").style("border","1px solid darkblue").style("left",0.5*(w_s-w)+i[1]*w*0.1+0.15*w+"px").style("top",115+6.5*h+"px").style("font",`${h/4}px arial`);

}

let mouseover6 = (d,i)=>{

toolTip6.style("visibility","visible").html(i[0]).style("background-color","#ffffe0").style("color","darkblue").style("border","1px solid darkblue").style("left",0.5*(w_s-w)+i[1]*w*0.1+0.15*w+"px").style("top",115+7.5*h+"px").style("font",`${h/4}px arial`);

}

let mouseover7 = (d,i)=>{

toolTip7.style("visibility","visible").html(i[0]).style("background-color","#ffffe0").style("color","darkblue").style("border","1px solid darkblue").style("left",0.5*(w_s-w)+i[1]*w*0.1+0.15*w+"px").style("top",115+8.5*h+"px").style("font",`${h/4}px arial`);

}

  

canvas_c1.append("text").text("2015").style("text-anchor","end").attr("x",35*w/365).attr("y",29*h/40).style("font",`${14*w/365}px arial`).style("fill","navy");

canvas_c2.append("text").text("2016").style("text-anchor","end").attr("x",35*w/365).attr("y",29*h/40).style("font",`${14*w/365}px arial`).style("fill","navy");

canvas_c3.append("text").text("2017").style("text-anchor","end").attr("x",35*w/365).attr("y",29*h/40).style("font",`${14*w/365}px arial`).style("fill","navy");

canvas_c4.append("text").text("2018").style("text-anchor","end").attr("x",35*w/365).attr("y",29*h/40).style("font",`${14*w/365}px arial`).style("fill","navy");

canvas_c5.append("text").text("2019").style("text-anchor","end").attr("x",35*w/365).attr("y",29*h/40).style("font",`${14*w/365}px arial`).style("fill","navy");

canvas_c6.append("text").text("2020").style("text-anchor","end").attr("x",35*w/365).attr("y",29*h/40).style("font",`${14*w/365}px arial`).style("fill","navy");

canvas_c7.append("text").text("2021").style("text-anchor","end").attr("x",35*w/365).attr("y",29*h/40).style("font",`${14*w/365}px arial`).style("fill","navy");

canvas_c1.selectAll('rect').data(dim15[cnt]).enter().append('rect').attr('width', (item)=>{return item[0]*0.1*w}).

attr('height',0.8*h).attr('x',(item)=>{return 0.125*w+item[1]*0.1*w}).attr('y',10).attr("fill",(item)=>item[2]).on("mouseover",mouseover1).on("mouseleave",()=>{return toolTip1.style("visibility","hidden")});

canvas_c2.selectAll('rect').data(dim16[cnt]).enter().append('rect').attr('width', (item)=>{return item[0]*0.1*w}).

attr('height',0.8*h).attr('x',(item)=>{return 0.125*w+item[1]*0.1*w}).attr('y',10).attr("fill",(item)=>item[2]).on("mouseover",mouseover2).on("mouseleave",()=>{return toolTip2.style("visibility","hidden")});

canvas_c3.selectAll('rect').data(dim17[cnt]).enter().append('rect').attr('width', (item)=>{return item[0]*0.1*w}).

attr('height',0.8*h).attr('x',(item)=>{return 0.125*w+item[1]*0.1*w}).attr('y',10).attr("fill",(item)=>item[2]).on("mouseover",mouseover3).on("mouseleave",()=>{return toolTip3.style("visibility","hidden")});

canvas_c4.selectAll('rect').data(dim18[cnt]).enter().append('rect').attr('width', (item)=>{return item[0]*0.1*w}).

attr('height',0.8*h).attr('x',(item)=>{return 0.125*w+item[1]*0.1*w}).attr('y',10).attr("fill",(item)=>item[2]).on("mouseover",mouseover4).on("mouseleave",()=>{return toolTip4.style("visibility","hidden")});

canvas_c5.selectAll('rect').data(dim19[cnt]).enter().append('rect').attr('width', (item)=>{return item[0]*0.1*w}).

attr('height',0.8*h).attr('x',(item)=>{return 0.125*w+item[1]*0.1*w}).attr('y',10).attr("fill",(item)=>item[2]).on("mouseover",mouseover5).on("mouseleave",()=>{return toolTip5.style("visibility","hidden")});

canvas_c6.selectAll('rect').data(dim20[cnt]).enter().append('rect').attr('width', (item)=>{return item[0]*0.1*w}).

attr('height',0.8*h).attr('x',(item)=>{return 0.125*w+item[1]*0.1*w}).attr('y',10).attr("fill",(item)=>item[2]).on("mouseover",mouseover6).on("mouseleave",()=>{return toolTip6.style("visibility","hidden")});

canvas_c7.selectAll('rect').data(dim21[cnt]).enter().append('rect').attr('width', (item)=>{return item[0]*0.1*w}).

attr('height',0.8*h).attr('x',(item)=>{return 0.125*w+item[1]*0.1*w}).attr('y',10).attr("fill",(item)=>item[2]).on("mouseover",mouseover7).on("mouseleave",()=>{return toolTip7.style("visibility","hidden")});

let l15=time_dic["2015"][cnt];

canvas_c1.append("text").text(l15[0].toFixed(3)).style("text-anchor","end").attr("x",l15[0]*0.1*w+0.21*w).attr("y",27*h/40).style("font",`${11*w/365}px arial`).style("fill","navy");

let l16=time_dic["2016"][cnt];

canvas_c2.append("text").text(l16[0].toFixed(3)).style("text-anchor","end").attr("x",l16[0]*0.1*w+0.21*w).attr("y",27*h/40).style("font",`${11*w/365}px arial`).style("fill","navy");

let l17=time_dic["2017"][cnt];

canvas_c3.append("text").text(l17[0].toFixed(3)).style("text-anchor","end").attr("x",l17[0]*0.1*w+0.21*w).attr("y",27*h/40).style("font",`${11*w/365}px arial`).style("fill","navy");

let l18=time_dic["2018"][cnt];

canvas_c4.append("text").text(l18[0].toFixed(3)).style("text-anchor","end").attr("x",l18[0]*0.1*w+0.21*w).attr("y",27*h/40).style("font",`${11*w/365}px arial`).style("fill","navy");

let l19=time_dic["2019"][cnt];

canvas_c5.append("text").text(l19[0].toFixed(3)).style("text-anchor","end").attr("x",l19[0]*0.1*w+0.21*w).attr("y",27*h/40).style("font",`${11*w/365}px arial`).style("fill","navy");

let l20=time_dic["2020"][cnt];

canvas_c6.append("text").text(l20[0].toFixed(3)).style("text-anchor","end").attr("x",l20[0]*0.1*w+0.21*w).attr("y",27*h/40).style("font",`${11*w/365}px arial`).style("fill","navy");

let l21=time_dic["2021"][cnt];

canvas_c7.append("text").text(l21[0].toFixed(3)).style("text-anchor","end").attr("x",l21[0]*0.1*w+0.21*w).attr("y",27*h/40).style("font",`${11*w/365}px arial`).style("fill","navy");

  

};

showTimeline("Finland");

d3.select("#selectButton")

      .selectAll('myOptions')

     	.data(g_cntries)      .enter()

    	.append('option')

      .text(function (d) { return d; }) 

      .attr("value", function (d) { return d; })

                                      function update(selectedGroup) {   

   showTimeline(selectedGroup);

                                      }  d3.select("#selectButton").on("change", function(d) {

        var selectedOption = d3.select(this).property("value")

        update(selectedOption)});
