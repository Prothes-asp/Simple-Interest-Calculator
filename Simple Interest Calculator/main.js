"use strict";
function calculateResults(e){
    var t=document.querySelector("#principal"),
        r=document.querySelector("#rate"),
        o=document.querySelector("#time"),
        n=document.querySelector("#payment"),
        l=document.querySelector("#interest"),
        u=document.querySelector("#total"),
        c=parseFloat(t.value),
        s=parseFloat(r.value),
        a=parseFloat(o.value),
        i=c*a*s/100,
        d=((i+c)/(12*a)).toFixed(2),
        m=(i+c).toFixed(2);
        isFinite(d)?(l.innerHTML="$"+i.toFixed(2),
        n.innerHTML="$"+d,
        u.innerHTML="$"+m,
        button.classList.remove("loading"),
        results.classList.remove("hide")):(showError("Please check your numbers and try again."),
        button.classList.remove("loading"))}function showError(e){var t=document.createElement("div"),
        r=document.querySelector("#calculate");
        t.className="error",
        t.appendChild(document.createTextNode(e)),
        simpleInterest.insertBefore(t,r),
        setTimeout(clearError,3e3)}function clearError(){
            document.querySelector(".error").remove()}var simpleInterest=document.querySelector(".simple-interest"),
            button=document.querySelector(".button"),
            results=document.querySelector(".results");
            button.addEventListener("click",
            function(e){console.log("Calculating..."),
            button.classList.add("loading"),
            setTimeout(calculateResults,2e3),
            e.preventDefault()
});