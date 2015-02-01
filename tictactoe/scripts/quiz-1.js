$(document).ready(function() 
{    $("#results").click(function() {                

if (!$("input[@name=q1]:checked").val() ||            
!$("input[@name=q2]:checked").val() ||            
!$("input[@name=q3]:checked").val()
//  ||            
// !$("input[@name=q4]:checked").val() ||            
// !$("input[@name=q5]:checked").val() ||            
// !$("input[@name=q6]:checked").val() ||            
// !$("input[@name=q7]:checked").val() ||            
// !$("input[@name=q8]:checked").val() ||            
// !$("input[@name=q9]:checked").val() ||            
// !$("input[@name=q10]:checked").val()            
) {            
alert("You're not done yet!");        
}        

else {            
var cat1name = "1";            
var cat2name = "2";            
var cat3name = "3";            
// var cat4name = "4";            
// var cat5name = "5";            
// var cat6name = "6";            
// var cat7name = "7";            
// var cat8name = "8";            
// var cat9name = "9";            
// var cat10name = "10";            
var cat11name = "None";            
            

var cat1 = ($("input[@name=q1]:checked").val() != "b"); 
           
var cat2 = ($("input[@name=q2]:checked").val() != "b");  

var cat3 = ($("input[@name=q3]:checked").val() != "c");  

// var cat4 = ($("input[@name=q4]:checked").val() != "d");  

// var cat5 = ($("input[@name=q5]:checked").val() != "a"); 

// var cat6 = ($("input[@name=q6]:checked").val() != "b");  

// var cat7 = ($("input[@name=q7]:checked").val() != "c"); 

// var cat8 = ($("input[@name=q8]:checked").val() != "d");  

// var cat9 = ($("input[@name=q9]:checked").val() != "a"); 

// var cat10 = ($("input[@name=q10]:checked").val() != "b");  

var cat11 = (!cat1 && !cat2 && !cat3); var categories = [];                        

if (cat1) { categories.push(cat1name) };            
if (cat2) { categories.push(cat2name) };            
if (cat3) { categories.push(cat3name) };                       
if (cat11) { categories.push(cat11name) };                        

var catStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';                     
$("#categorylist").text(catStr);                        
$("#categorylist").show("slow");            

if (cat1) { $("#category1").show("slow"); };            
if (cat2) { $("#category2").show("slow"); };            
if (cat3) { $("#category3").show("slow"); };                     
if (cat11) { $("#category11").show("slow"); };
{ $("#closing").show("slow"); };
}
    });});