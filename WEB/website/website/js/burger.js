let burger = 0;

function burgerAnimation(x) {
    x.classList.toggle("change");
    if (burger==0){
      document.getElementById("menu").style.visibility = "visible";
      document.getElementById("menu").classList.remove("menu_class2");
      document.getElementById("menu").className += "menu_class1";
      document.getElementById("dv1").classList.add("div_class1");
      document.getElementById("dv2").classList.add("div_class2");
      document.getElementById("dv3").classList.add("div_class3");
      document.getElementById("dv4").classList.add("div_class4");
      document.getElementById("dv5").classList.add("div_class5");
      document.getElementById("dv6").classList.add("div_class6");
      document.getElementById("dv7").classList.add("div_class7");
      document.getElementById("dv8").classList.add("div_class8");
      document.getElementById("dv9").classList.add("div_class9");
      burger++
    }
    else {setTimeout(function(){ document.getElementById("menu").style.visibility = "hidden"; }, 420);;
    document.getElementById("menu").classList.remove("menu_class1");
    document.getElementById("menu").className += "menu_class2";
    document.getElementById("dv1").classList.remove("div_class1");
    document.getElementById("dv2").classList.remove("div_class2");
    document.getElementById("dv3").classList.remove("div_class3");
    document.getElementById("dv4").classList.remove("div_class4");
    document.getElementById("dv5").classList.remove("div_class5");
    document.getElementById("dv6").classList.remove("div_class6");
    document.getElementById("dv7").classList.remove("div_class7");
    document.getElementById("dv8").classList.remove("div_class8");
    document.getElementById("dv9").classList.remove("div_class9");
    burger--}
  }