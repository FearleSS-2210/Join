lab_1 = [];

function get1()
{
    document.getElementById("label1").innerHTML = inputs.join();

    for (var i = 0; i<= 6; i++) {
        inputs.push(document.getElementById("paral_input_box_" + i).value);
    }

}


lab_2 = [];

function get2()
{
    document.getElementById("label2").innerHTML = inputs.join();

    for (var u = 0; u<= 6; u++) {
        inputs.push(document.getElementById("box_" + u).value);
    }
    
}