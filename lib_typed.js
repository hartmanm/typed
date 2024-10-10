const typed_copyright=`
Copyright (c) 2019 Michael Neill Hartman. All rights reserved.
mnh_license@proton.me
https://github.com/hartmanm
`

function reload(){location.reload();}
function repeat(){
var main=document.getElementById("repeat");
main.innerHTML = "repeat typed";
main.id;
main.addEventListener("mouseover", function(e){var target = e.target || e.srcElement; hover(main.id)}, 
false);
main.addEventListener("mouseleave", function(e){var target = e.target || e.srcElement; leave(main.id)}, 
false);
main.addEventListener("click", function(e){var target = e.target || e.srcElement; reload()}, false);
}
repeat();
function display_info(){
var main=document.getElementById("info");
main.innerHTML = "(i)";
main.id;
main.addEventListener("mouseover", function(e){var target = e.target || e.srcElement; load_tooltip()}, 
false);
main.addEventListener("mouseleave", function(e){var target = e.target || e.srcElement; 
clear_tooltip(main.id)}, false);
}
display_info();
function load_tooltip(){
var main=document.getElementById("info");
main.style = "z-index: 1; font-size: 100%; outline-style: solid; color: rgb(119, 0, 255); outline-color: #FEFF4D; cursor: pointer;";
var one = document.createElement("h3");
one.id = "info_tip";
one.innerHTML = info;
main.appendChild(one);
}
function clear_tooltip(){
var main= document.getElementById("info");
while(main.firstChild){main.removeChild(main.firstChild);}
main.innerHTML = "(i)";
main.style = "z-index: 2;transform: scale(1);font-size: 100%; ";
}
function hover(id){
var out = document.getElementById(id);
out.style = "z-index: 1; font-size: 100%; outline-style: solid; color: rgb(119, 0, 255); outline-color: #FEFF4D; cursor: pointer;";
}
function leave(id){
var out = document.getElementById(id);
out.style = "z-index: 2;transform: scale(1);font-size: 100%; ";
}
function create_h4(parent,innerhtml,id){
var one = document.createElement("h4");
one.innerHTML = innerhtml;
one.id=id;
parent.appendChild(one);
}
function append_h4(parent,innerhtml,id){
var one = document.getElementById(id)
one.innerHTML = innerhtml;
}
function wipe_h4(parent,id,clear_typing_callback){
var one = document.getElementById(id);
one.innerHTML = "";
one.id=id;
clearInterval(clear_typing_callback);
}
function update_text(display_text,display_text_length,typing_callback){
var d = new Date();
var s = d.getTime();
var now = (s-start)/1000
var the_count=now*typing_speed*accelerator // gets faster over time if accelerator > 1
var text_iterator=0;
var output_text=""
for(var key of display_text){
if(the_count > text_iterator){
output_text+=key
} // if(the_count > text_iterator){
text_iterator++
} // for(var key of display_text){
append_h4(intro_dom,output_text,"intro1")
if(the_count > display_text_length){
clearInterval(typing_callback);
} // if(the_count > display_text_length){
} // update_text()
function initialize_output(){
var intro_dom = document.getElementById("lib_typed_basis");
intro_dom.innerHTML="";
create_h4(intro_dom,"","intro1")
}
function get_next_line(main_loop_callback){
display_iterator++
if(display_iterator < input_text_array_length){
output_line=""
var dd = new Date();
var ss = dd.getTime();
start=ss
output_line=input_text_array[display_iterator]
while(output_line==""){
display_iterator++
output_line=input_text_array[display_iterator]
} // while(output_line==""){
if(main_loop_callback){clearInterval(main_loop_callback);
}
if(output_line!=undefined){output();}
} // if(display_iterator < input_text_array_length){
}
function output(){
var display_text=output_line
var text_to_type= Array.from(display_text);
var display_text_length=text_to_type.length;
var main_loop_duration=(display_text_length*100)+(time_to_hold_before_clearing*1000)+1000
var main_loop = setInterval(() => {get_next_line(main_loop);}, main_loop_duration);
var typing = setInterval(() => {update_text(text_to_type,display_text_length,typing);}, 
update_timeout_frequency);
var clear_typing_duration=(display_text_length*100)+(time_to_hold_before_clearing*1000)
var clear_typing = setInterval(() => {wipe_h4(intro_dom,"intro1",clear_typing);}, 
clear_typing_duration);
}
// initialize variables
if(accelerator<1){accelerator=1}
console.log("typed settings:\n"+"typing_speed: "+typing_speed+"\n"+"time_to_hold_before_clearing: "+time_to_hold_before_clearing+"\n"+"accelerator: "+accelerator+"\n"+"update_timeout_frequency: "+update_timeout_frequency+"\n");
process_text=`
`
process_text+=input_text
// split multiline string into an array of strings
let splitLines = str => str.split(/\r?\n/);
// run splitLines to generate input_text_array
var input_text_array=splitLines(process_text);
var input_text_array_length=input_text_array.length
// create accessor var
var intro_dom = document.getElementById("lib_typed_basis");
var display_iterator=0
var hold=false
var output_line=""
var start=0
time_to_hold_before_clearing+=2
// kick off processing 
initialize_output();
get_next_line();