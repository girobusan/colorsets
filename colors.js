function colorbox(){
/*
More or less random
colour sets
*/


this.highlights = {
  orange : "#ffa03d",
  red: "#f7396c" ,
  green: "#06f98c" ,
  blue: "#038dff" ,
  yellow: "#d3ff57" ,
  purple: "#f45bc4" ,
  gray: "#4e586c"

}

this.faded = {
  1 : "#eb912b" ,
  2 : "#7099a5" ,
  3 : "#c71f34" ,
  4 : "#1d437d" ,
  5 : "#e8762b" ,
  6 : "#5b6591" ,
  7 : "#59879b"


}

this.tableau ={
1:  "#4c77a4",
2:  "#b17aa0"  ,
2:  "#e15457" ,
4:  "#fd9ba3",
5:  "#f08d29",
6:  "#ecc846",
7:  "#58a04d",

8:  "#74b4b0" ,
9:  "#a0b44a",
10: "#9c755f"

}

this.tableau20 = {
1: "#9edae5" ,
2: "#17becf" ,
3: "#dbdb8d" ,
4: "#bcbd22"  ,
5: "#c7c7c7"  ,
6: "#7f7f7f" ,
7: "#f7b6d2"  ,
8: "#e377c2" ,
9: "#c49c94" ,
10: "#8c564b"  ,
11: "#c5b0d5" ,
12: "#9467bd" ,
13: "#ff9896" ,
14: "#d62728" ,
15: "#98df8a",
16: "#2ca02c" ,
17: "#ffbb78",
18: "#ff7f0e" ,
19: "#aec7e8"  ,
20: "#1f77b4"


}

this.vinatge8colors = {

 black : "#000" ,
 green:  "#0f0" ,
 red: "#f00" ,
 blue: "#00f" ,
 yellow: "#ff0" ,
 cyan: "#0ff" ,
 purple: "#f0f" ,
 white: "#fff"
 }

 this.neutralgrays3 = {
    dark : "#333" ,
    middle : "#666" ,
    light: "#999"

 }

 function isFunction(object) {
   var getType = {};
   return object && getType.toString.call(object) === '[object Function]';
 }

 this.pal2array = function(pal){
   r = []
   for (var k in pal){
    if (Object.prototype.hasOwnProperty.call(pal, k)){
      r.push(pal[k]);
    }
   }
   return r;
 }

 this.getNum = function(num , pal){
   return pal2array(pal).slice(0,num);
 }

 this.testpal = function(pal , where){
    d3.select(where)
    .selectAll("div")
    .data(this.pal2array(pal))
    .enter()
    .append('div')
    .style("width" , "60px")
    .style("height" , "60px")
    .style("display" , "inline-block")
    .style("background-color" , function(d){return d})
    .style("border" , "0px solid gray")
 }

 this.gatherPals = function(){
   var r = {};
   for(var k in this){
     if(!isFunction(this[k])){
       r[k] = this[k];
     }
   }
   return r;
 }




}
