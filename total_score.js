let set3=["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"];

function cPal(num){
  let cArr=[];
  for(let cnt=0;cnt<num;cnt++){
    cArr.push(set3[cnt%set3.length]);
  }
  return cArr;
}


function showRegion(reg){
d3.select("#canvas_c").remove();
let cnt_lst=countries[reg];

let canvas_c = d3.select("body")
    .append("svg")
    .attr("id","canvas_c");
let toolTip=d3.select("body").append("div").style("visibility","hidden").style("position","absolute").attr("id","tooltip");
let w_s=window.innerWidth;
let h_s=window.innerHeight;

let w=+d3.select("#canvas_c").style("width").slice(0,-2);
let h=+d3.select("#canvas_c").style("height").slice(0,-2); 

let pad_t=Math.floor(h/9);
let pad_b=Math.floor(h/5);
let pad=Math.floor(w/12);
  
let mouseover = (d,i)=>{
console.log(cnt_lst);
console.log(cnt_lst[cnt_lst.length-1]);
toolTip.style("visibility","visible").html(i[0]+"<br>" + i[1]).style("background-color","#ffffe0").style("color","darkblue").style("border","1px solid darkblue").style("width",0.18*w+"px").style("text-align","center").style("display","block").style("top",0.55*h_s+"px").style("left",i[0]==cnt_lst[cnt_lst.length-2]?0.45*(w_s-w)+xScale(i[0])-25+"px":(i[0]==cnt_lst[cnt_lst.length-1]?0.45*(w_s-w)+xScale(i[0])-20+"px":0.45*(w_s-w)+xScale(i[0])+"px")).style("font",`${h/40}px arial`);}


function colorAttr(c){
  for(let i=0;i<cnt_lst.length;i++){
    if(c==cnt_lst[i]){
      return cPal(cnt_lst.length)[i];
    }
  }
}

let xScale=d3.scaleBand().domain(cnt_lst).range([pad,w-pad]);

let yScale=d3.scaleLinear().domain([0,8.3]).range([0,h-pad_t-pad_b]);

let yAxisScale=d3.scaleLinear().domain([0,8.3]).range([h-pad_b,pad_t]); 

let xAxis=d3.axisBottom(xScale).ticks(cnt_lst.length);
let yAxis=d3.axisLeft(yAxisScale).tickFormat(d3.format('d'));
if((reg!="Commonwealth of Independent States")&&(reg!="North America and ANZ")&&(reg!="Sub-Saharan Africa")&&(reg!="East Asia")&&(reg!="South Asia")&&(reg!="Southeast Asia")){
canvas_c.append('g').call(xAxis).attr('transform','translate(0,'+(h-pad_b)+')').selectAll("text")  
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-65)").style("font",`${w/40}px arial`);}
if((reg=="North America and ANZ")||(reg=="East Asia")||(reg=="South Asia")||(reg=="Southeast Asia")){
canvas_c.append('g').call(xAxis).attr('transform','translate(0,'+(h-pad_b)+')').selectAll("text")  
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-65)").style("font",`${w/30}px arial`);}
  if(reg=="Sub-Saharan Africa"){
canvas_c.append('g').call(xAxis).attr('transform','translate(0,'+(h-pad_b)+')').selectAll("text")  
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-65)").style("font",`${w/46}px arial`);}
  if(reg=="Commonwealth of Independent States"){
canvas_c.append('g').call(xAxis).attr('transform','translate(0,'+(h-pad_b)+')').selectAll("text")  
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-65)").style("font",`${w/36}px arial`);}
canvas_c.append('g').style("font",`${h/35}px times`).call(yAxis).attr('id','y-axis').attr('transform','translate('+pad+','+0*pad+')');
canvas_c.selectAll('rect').data(vals21[reg]).enter().append('rect').attr('class','bar').attr('width', (w-2*pad)/(cnt_lst.length)).
attr('height',(item)=>{return yScale(item[1])}).attr('x',(item)=>{return xScale(item[0])}).attr('y',(item)=>{ return  h-pad_b-yScale(item[1])}).attr("fill",(item)=>colorAttr(item[0])).on("mouseover",mouseover).on("mouseleave",()=>{return toolTip.style("visibility","hidden")});}

showRegion("Western Europe");

d3.select("#selectButton")
      .selectAll('myOptions')
     	.data(['Western Europe', 'North America and ANZ', 'Middle East and North Africa', 'Latin America and Caribbean', 'Central and Eastern Europe', 'East Asia', 'Southeast Asia', 'Commonwealth of Independent States', 'Sub-Saharan Africa', 'South Asia'])
      .enter()
    	.append('option')
      .text(function (d) { return d; }) 
      .attr("value", function (d) { return d; })

                                      function update(selectedGroup) {   
   showRegion(selectedGroup);
}  
  d3.select("#selectButton").on("change", function(d) {
        let selectedOption = d3.select(this).property("value")
        update(selectedOption)});

