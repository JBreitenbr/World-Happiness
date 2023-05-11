let pal=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"];

let reg1=['Central and Eastern Europe', 'Commonwealth of Independent States', 'East Asia','Latin America and Caribbean', 'Middle East and North Africa', 'North America and ANZ','South Asia','Southeast Asia', 'Sub-Saharan Africa', 'Western Europe'];

let reg2=['Central and Eastern Europe', 'Commonwealth of Ind. States', 'East Asia','Latin America and Caribbean', 'Middle East and North Africa', 'North America and ANZ','South Asia','Southeast Asia', 'Sub-Saharan Africa', 'Western Europe'];

function showDimensions(dim,reg){

d3.select("#canvas_c").remove();

let canvas_c = d3.select("body")

    .append("svg")

    .attr("id","canvas_c");

let p1=d3.select("body").append("p").attr("id","p1").style("opacity",0);

let p2=d3.select("body").append("p").attr("id","p2").style("opacity",0);

let toolTip=d3.select("body").append("div").style("visibility","hidden").style("position","absolute").style("background-color","white").attr("id","tooltip");

let w=+d3.select("#canvas_c").style("width").slice(0,-2);

let h=+d3.select("#canvas_c").style("height").slice(0,-2); 

let w_s=window.innerWidth;

let h_s=window.innerWidth;

  

let mouseover = (d,i)=>{

    

    toolTip.style("visibility","visible").html("Country: "+i[0]+"<br>" + "Population: "+i[2]+"<br>"+"Happiness Score: "+i[3]+"<br>"+dim+": " +i[4]+"%").style("background-color","#ffffe0").style("color","darkblue").style("border","1px solid darkblue").style("left",0.5*(w_s-w)+0.63*w+"px").style("top",Math.min(750,0.8*h_s)+"px").style("font",`${w/35}px arial`);}

let pad_t=Math.floor(h/10);

let pad=Math.floor(w/12);

let xScale=d3.scaleLinear().domain(scales[dim]).range([pad,w-pad]);

let yScale=d3.scaleLinear().domain([0,8]).range([0,h-2*pad_t]);

let yAxisScale=d3.scaleLinear().domain([0,8]).range([h-pad_t,pad_t]); 

let xAxis=d3.axisBottom(xScale).ticks(4);

let yAxis=d3.axisLeft(yAxisScale);

canvas_c.append('g').call(xAxis).attr('id','x-axis').attr('transform','translate(0,'+(h-pad_t)+')');

canvas_c.append('g').style("font","10px arial").call(yAxis).attr('id','y-axis').attr('transform','translate('+pad+',0)');

let leg_h=yAxisScale(0)-yAxisScale(2);

let dat;

if(reg=="All Regions"){

  dat=residuals[dim];

}

else{

  dat=residuals[dim].filter((item)=>item[1]==reg);

}

let legbox=canvas_c.append('g').attr("id","legend");

for(let i=0; i<5; i++){

legbox.append("rect").attr("x",xScale(scales[dim][0])+0.02*w).attr("y",yAxisScale(1.8)+i*(leg_h/6)).attr("height",h/35).attr("width",h/35).attr("fill",pal[i]).attr("opacity",0.7);

legbox.append("text").text(reg2[i]).style("text-anchor","end").attr("x",xScale(scales[dim][0])+0.43*w).attr("y",yAxisScale(1.58)+i*(leg_h/6)).style("font",`${w/36}px arial`).style("fill","navy");}

for(let i=5;i<10;i++){

legbox.append("rect").attr("x",xScale(scales[dim][0])+0.46*w).attr("y",yAxisScale(1.8)+(i-5)*(leg_h/6)).attr("height",h/35).attr("width",h/35).attr("fill",pal[i]).attr("opacity",0.7);

legbox.append("text").text(reg2[i]).style("text-anchor","end").attr("x",xScale(scales[dim][0])+0.82*w).attr("y",yAxisScale(1.58)+(i-5)*(leg_h/6)).style("font",`${w/36}px arial`).style("fill","navy");}

canvas_c.selectAll('circle').data(dat).enter().append('circle').attr('cx',(item)=>{return xScale(item[4])}).attr('cy',(item)=>{ return  h-pad_t-yScale(item[3])}).attr('r',(item)=>(0.0000025*h)*Math.sqrt(item[2])).attr("fill",(item)=>item[5]).attr("opacity",0.7).on("mouseover",mouseover).on("mouseleave",()=>{return toolTip.style("visibility","hidden")});

legbox.append("text").text("Percentage related to sum of all dimensions").style("text-anchor","end").attr("x",xScale(scales[dim][0])+0.82*w).attr("y",yAxisScale(1.58)+8*(leg_h/7)).style("font",`${h/50}px arial`).style("fill","navy");

                 }

showDimensions("GDP per capita","All Regions");

d3.select("#selectButton")

      .selectAll('myOptions')

     	.data(['GDP per capita','Social support','Healthy life expectancy','Freedom to make life choices','Perceptions of corruption','Generosity'])      .enter()

    	.append('option')

      .text(function (d) { return d; }) // text showed in the menu

      .attr("value", function (d) { return d; })

d3.select("#selectButton2")

      .selectAll('myOptions')

     	.data(['All Regions',...reg1])

      .enter()

    	.append('option')

      .text(function (d) { return d; }) // text showed in the menu

      .attr("value", function (d) { return d; })

                                      function update(sel1,sel2) {   

   showDimensions(sel1,sel2);

                                      }  

/*let sel;

function retrieve(selectedGroup) {

   sel=selectedGroup;

}*/

d3.select("#selectButton").on("change", function(d) {

        // recover the option that has been chosen

        var selectedOption = d3.select(this).property("value");

  

    d3.select("#p1").text(selectedOption  );

//update(selectedOption,"All Regions");

let v2=document.getElementById('p2').innerText;

if(!v2){

  update(selectedOption,"All Regions");

}

else{

update(selectedOption,v2);}

/*if(secval=="All Regions"){

  update(selectedOption,"All Regions");

}*/

});

     

d3.select("#selectButton2").on("change", function(d) {

        // recover the option that has been chosen

        var selectedOption2 = d3.select(this).property("value");

d3.select("#p2").text(selectedOption2);

let v1=document.getElementById('p1').innerText;

if(!v1){

  update("GDP per capita",selectedOption2);

}

else{

update(v1,selectedOption2);

  }

});

  

let val2=document.getElementById('p2').innerText;

console.log(val2);

//console.log(val1,val2)       /*console.log(selectedOption2)});   

/*d3.select("#selected-dropdown2").text(selected).style("opacity",0);*/
