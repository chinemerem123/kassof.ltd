let depBtn=document.querySelector("#dep-btn");
let wldBtn=document.querySelector("#wld-btn");
let getBtn=document.querySelector("#get-btn");
let dates=document.querySelectorAll(".date");
let getdate=document.querySelector(".getDate");

getBtn.addEventListener("click", ()=>{
    alert("helo");
    dates.forEach((date)=>{
        date.innerText=getdate.value;
    })
})

let rDepName1,rDepName2,rDepName3,rDepName4,rDepName5,rDepName6;
let rDepAmt1,rDepAmt2,rDepAmt3,rDepAmt4,rDepAmt5,rDepAmt6;
let rWldName1,rWldName2,rWldName3,rWldName4,rWldName5,rWldName6;
let rWldAmt1,rWldAmt2,rWldAmt3,rWldAmt4,rWldAmt5,rWldAmt6;
let depName1,depName2,depName3,depName4,depName5,depName6;
let depAmt1,depAmt2,depAmt3,depAmt4,depAmt5,depAmt6;
let wldName1,wldName2,wldName3,wldName4,wldName5,wldName6;
let wldAmt1,wldAmt2,wldAmt3,wldAmt4,wldAmt5,wldAmt6;


rWldAmt1=document.querySelector(".r-wld-amt1");
rWldAmt2=document.querySelector(".r-wld-amt2");
rWldAmt3=document.querySelector(".r-wld-amt3");
rWldAmt4=document.querySelector(".r-wld-amt4");
rWldAmt5=document.querySelector(".r-wld-amt5");
rWldAmt6=document.querySelector(".r-wld-amt6");

rWldName1=document.querySelector(".r-wld-name1");
rWldName2=document.querySelector(".r-wld-name2");
rWldName3=document.querySelector(".r-wld-name3");
rWldName4=document.querySelector(".r-wld-name4");
rWldName5=document.querySelector(".r-wld-name5");
rWldName6=document.querySelector(".r-wld-name6");


rDepName1=document.querySelector(".r-dep-name1");
rDepName2=document.querySelector(".r-dep-name2");
rDepName3=document.querySelector(".r-dep-name3");
rDepName4=document.querySelector(".r-dep-name4");
rDepName5=document.querySelector(".r-dep-name5");
rDepName6=document.querySelector(".r-dep-name6");


rDepAmt1=document.querySelector(".r-dep-amt1");
rDepAmt2=document.querySelector(".r-dep-amt2");
rDepAmt3=document.querySelector(".r-dep-amt3");
rDepAmt4=document.querySelector(".r-dep-amt4");
rDepAmt5=document.querySelector(".r-dep-amt5");
rDepAmt6=document.querySelector(".r-dep-amt6");



wldAmt1=document.querySelector(".wld-amt1");
wldAmt2=document.querySelector(".wld-amt2");
wldAmt3=document.querySelector(".wld-amt3");
wldAmt4=document.querySelector(".wld-amt4");
wldAmt5=document.querySelector(".wld-amt5");
wldAmt6=document.querySelector(".wld-amt6");


wldName1=document.querySelector(".wld-name1");
wldName2=document.querySelector(".wld-name2");
wldName3=document.querySelector(".wld-name3");
wldName4=document.querySelector(".wld-name4");
wldName5=document.querySelector(".wld-name5");
wldName6=document.querySelector(".wld-name6");



depName1=document.querySelector(".dep-name1");
depName2=document.querySelector(".dep-name2");
depName3=document.querySelector(".dep-name3");
depName4=document.querySelector(".dep-name4");
depName5=document.querySelector(".dep-name5");
depName6=document.querySelector(".dep-name6");


depAmt1=document.querySelector(".dep-amt1");
depAmt2=document.querySelector(".dep-amt2");
depAmt3=document.querySelector(".dep-amt3");
depAmt4=document.querySelector(".dep-amt4");
depAmt5=document.querySelector(".dep-amt5");
depAmt6=document.querySelector(".dep-amt6");


depBtn.addEventListener("click", ()=>{
rDepName1.innerText=depName1.value + "**";
rDepName2.innerText=depName2.value + "**";
rDepName3.innerText=depName3.value + "**";
rDepName4.innerText=depName4.value + "**";
rDepName5.innerText=depName5.value + "**";
rDepName6.innerText=depName6.value + "**";

rDepAmt1.innerText= "$" + depAmt1.value + ".00";
rDepAmt2.innerText= "$" + depAmt2.value + ".00";
rDepAmt3.innerText= "$" + depAmt3.value + ".00";
rDepAmt4.innerText= "$" + depAmt4.value + ".00";
rDepAmt5.innerText= "$" + depAmt5.value + ".00";
rDepAmt6.innerText= "$" + depAmt6.value + ".00";

    })


wldBtn.addEventListener("click", ()=>{
    
   rWldName1.innerText =wldName1.value + "**";
   rWldName2.innerText =wldName2.value + "**";
   rWldName3.innerText =wldName3.value + "**";
   rWldName4.innerText =wldName4.value + "**";
   rWldName5.innerText =wldName5.value + "**";
   rWldName6.innerText =wldName6.value + "**";


   rWldAmt1.innerText = "$" + wldAmt1.value + ".00";
   rWldAmt2.innerText = "$" + wldAmt2.value + ".00";
   rWldAmt3.innerText = "$" + wldAmt3.value + ".00";
   rWldAmt4.innerText = "$" + wldAmt4.value + ".00";
   rWldAmt5.innerText = "$" + wldAmt5.value + ".00";
   rWldAmt6.innerText = "$" + wldAmt6.value + ".00";
   
    })
