function runAnimation(index, selectedActual, selectedPred){
  $.get("http://localhost:5000/predict/?index=" + index).then(
        function(response) {
            $(selectedActual).css("filter", "brightness(100%)")
            $(selectedPred).css("filter", "brightness(100%)")
            if(response.success === "False"){
                return
            } else {
                index++;
            }
            switch(response.actual) {
                case 1:
                    selectedActual = "#cyrindarical_act"
                    break;
                case 2:
                    selectedActual = "#tip_act"
                    break;

                case 3:
                    selectedActual = "#hook_act"
                    break;

                case 4:
                    selectedActual = "#palmar_act"
                    break;

                case 5:
                    selectedActual = "#spherical_act"
                    break;

                case 6:
                    selectedActual = "#lateral_act"
            }
            switch(response.pred) {
                case 1:
                    selectedPred = "#cyrindarical_pred"
                    break;
                case 2:
                    selectedPred = "#tip_pred"
                    break;
                case 3:
                    selectedPred = "#hook_pred"
                    break;
                case 4:
                    selectedPred = "#palmar_pred"
                    break;
                case 5:
                    selectedPred = "#spherical_pred"
                    break;
                case 6:
                    selectedPred = "#lateral_pred"
                    break;
            }
            $(selectedActual).css("filter", "brightness(50%)")
            $(selectedPred).css("filter", "brightness(50%)")
            console.log(response.pred);
            console.log(response.actual);
            console.log(selectedActual);
            console.log(selectedPred);

            setTimeout(runAnimation(index, selectedActual, selectedPred), 500);
        }
    )
}

$(document).ready(function() {

    $("#predict").click(function(){
        console.log("hi");

        runAnimation(0, null,  null);
    })
})