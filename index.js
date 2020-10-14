function calculator(num1, num2, operator) {

    var n1 = document.getElementById('num1')
    var n2 = document.getElementById('num2')
    var e = document.getElementById('operator')
    o = e.options[e.selectedIndex].text    
    var add = eval(n1.value) + eval(n2.value);

    if(o == "+") {
        document.getElementById('answer').innerHTML = add
    }
    else if(o == "-") {
        document.getElementById('answer').innerHTML = n1.value - n2.value
    }
    else if(o == "/") {
        document.getElementById('answer').innerHTML = n1.value / n2.value
    }
    else if(o == "*") {
        document.getElementById('answer').innerHTML = n1.value * n2.value
    }

}