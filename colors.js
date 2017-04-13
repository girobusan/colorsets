function colorbox(){

this.highlights = {
  orange : "#ffa03d",
  red: "#f7396c" ,
  green: "#06f98c" ,
  blue: "#038dff" ,
  yellow: "#d3ff57" ,
  purple: "#de5bf4" ,
  gray: "#4e545c"

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
    .style("width" , "100px")
    .style("height" , "100px")
    .style("display" , "inline-block")
    .style("background-color" , function(d){return d})
    .style("border" , "1px solid gray")
 }


}
