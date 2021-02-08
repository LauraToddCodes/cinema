import $ from "jquery"

$(".bookTimeBtn").on("click", function(){
    let chosenTime = this.text();
    alert(chosenTime)
});


