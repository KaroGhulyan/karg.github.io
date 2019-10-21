function Number(value) {

    document.getElementById('result').value = document.getElementById('result').value + value;

}

function Operator(value) {

    switch (value) {

        case "+":

            o = "+";

            break;

        case "-":

            o = "-";

            break;

        case "(-)":

            o = "-";

            break;

        case "×":

            o = "*";

            break;

        case "÷":

            o = "/";

            break;

        case "%":

            o = "%";

            break;

        case "xⁿ":

            o = "^";

            break;

    }

    document.getElementById("result").value = document.getElementById("result").value + " " + o + " ";

}

function Egal() {

    var v = document.getElementById("result").value;

    document.getElementById("result").value = "";

    var o = v.indexOf("^");

    if (o > -1) {

        var p1 = v.substring(0, o - 1);

        var p2 = v.substring(o + 1, v.length);

        pow1 = parseInt(p1);

        pow2 = parseInt(p2);

        res1 = Math.pow(pow1, pow2);

        res = res1.toString();

        document.getElementById("result").value = res;

    }

    else {

        var res = eval(v);

        document.getElementById("result").value = res;

    }

}

function Supp() {

    var res = document.getElementById("result").value;

    var l = res.length;

    var x = l - 1;

    if (res.charAt(l - 1 == " ")) {

        x = l - 1;

    }

    res = res.substring(0, x);

    document.getElementById("result").value = res;

}

function SuppAll() {

    document.getElementById("result").value = "";

}

function Exp2() {

    var v = document.getElementById('result').value;

    v = parseInt(v);

    var exp = v * v;

    res = exp.toString();

    document.getElementById('result').value = res;

}

function Abs() {

    var x = document.getElementById('result').value;

    v = x.replace(/ /g, '');

    v = parseInt(v);

    if (v >= 0) {

        exp = v;

    }

    else {

        exp = v * (-1);

    }

    res = exp.toString();

    document.getElementById('result').value = res;

}

function Racine() {

    var x = document.getElementById('result').value;

    v = x.replace(/ /g, '');

    v = parseInt(v);

    exp = Math.sqrt(v);

    res = exp.toString();

    document.getElementById('result').value = res;

}

function Cos() {

    var x = document.getElementById('result').value;

    v = x.replace(/ /g, '');

    v = parseInt(v);

    exp = Math.cos(v);

    res = exp.toString();

    document.getElementById('result').value = res;

}

function Sin() {

    var x = document.getElementById('result').value;

    v = x.replace(/ /g, '');

    v = parseInt(v);

    exp = Math.sin(v);

    res = exp.toString();

    document.getElementById('result').value = res;

}

function Tan() {

    var x = document.getElementById('result').value;

    v = x.replace(/ /g, '');

    v = parseInt(v);

    exp = Math.tan(v);

    res = exp.toString();

    document.getElementById('result').value = res;

}

function Log() {

    var x = document.getElementById('result').value;

    v = x.replace(/ /g, '');

    v = parseInt(v);

    exp = Math.log(v);

    res = exp.toString();

    document.getElementById('result').value = res;

}

function Expo() {

    var x = document.getElementById('result').value;

    v = x.replace(/ /g, '');

    v = parseInt(v);

    exp = Math.exp(v);

    res = exp.toString();

    document.getElementById('result').value = res;

}

function factorial(x) {

    if (x === 0) {

        return 1;

    }

    return x * factorial(x - 1);

}

function Facto() {

    var x = document.getElementById('result').value;

    exp = parseInt(x);

    exp = factorial(x);

    res = exp.toString();

    document.getElementById('result').value = res;

}