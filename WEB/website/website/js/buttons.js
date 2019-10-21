let click1 = true;
let click2 = false;
let click3 = false;
let click4 = false;
let click5 = false;
let click6 = false;
let click7 = false;
let click8 = false;


function selector1() {
  if (click1 == true) {
    return
  }
  click1 = click2 = click3 = click4 = click5 = click6 = click7 = click8 = true;
  document.getElementById("sec1").style.display = "block";
  document.getElementById("sec1").style.zIndex = 5;
  document.getElementById("sec1").animate(
    [
      {transform: 'translateY(-100vh)'},
      {transform: 'translateY(0vh)'}
    ],
    {
      duration: 1200,
      easing: "ease-in-out"
    }
  )
  setTimeout(function() {
  document.getElementById("sec2").style.display = "none";
  document.getElementById("sec3").style.display = "none";
  document.getElementById("sec4").style.display = "none";
  document.getElementById("sec5").style.display = "none";
  document.getElementById("sec6").style.display = "none";
  document.getElementById("sec7").style.display = "none";
  document.getElementById("sec8").style.display = "none";

  click2 = click3 = click4 = click5 = click6 = click7 = click8 = false;
  }, 1200);
  document.getElementById("sec2").style.zIndex = 2;
  document.getElementById("sec3").style.zIndex = 2;
  document.getElementById("sec4").style.zIndex = 2;
  document.getElementById("sec5").style.zIndex = 2;
  document.getElementById("sec6").style.zIndex = 2;
  document.getElementById("sec7").style.zIndex = 2;
  document.getElementById("sec8").style.zIndex = 2;
}

function selector2() {
  if (click2 == true) {
    return
  }
  click1 = click2 = click3 = click4 = click5 = click6 = click7 = click8 = true;
  document.getElementById("sec2").style.display = "block";
  document.getElementById("sec2").style.zIndex = 5;
  document.getElementById("sec2").animate(
    [
      {opacity: 0},
      {opacity: 1}
    ],
    {
      duration: 1200
    }
  )
  setTimeout(function() {
  document.getElementById("sec1").style.display = "none";
  document.getElementById("sec3").style.display = "none";
  document.getElementById("sec4").style.display = "none";
  document.getElementById("sec5").style.display = "none";
  document.getElementById("sec6").style.display = "none";
  document.getElementById("sec7").style.display = "none";
  document.getElementById("sec8").style.display = "none";

  click1 = click3 = click4 = click5 = click6 = click7 = click8 = false;
  }, 1200);
  document.getElementById("sec1").style.zIndex = 2;
  document.getElementById("sec3").style.zIndex = 2;
  document.getElementById("sec4").style.zIndex = 2;
  document.getElementById("sec5").style.zIndex = 2;
  document.getElementById("sec6").style.zIndex = 2;
  document.getElementById("sec7").style.zIndex = 2;
  document.getElementById("sec8").style.zIndex = 2;
}

function selector3() {
  if (click3 == true) {
    return
  }
  click1 = click2 = click3 = click4 = click5 = click6 = click7 = click8 = true;
  document.getElementById("sec3").style.display = "block";
  document.getElementById("sec3").style.zIndex = 5;
  document.getElementById("sec3").animate(
    [
      {opacity: 0},
      {opacity: 1}
    ],
    {
      duration: 1200
    }
  )
  setTimeout(function() {
  document.getElementById("sec1").style.display = "none";
  document.getElementById("sec2").style.display = "none";
  document.getElementById("sec4").style.display = "none";
  document.getElementById("sec5").style.display = "none";
  document.getElementById("sec6").style.display = "none";
  document.getElementById("sec7").style.display = "none";
  document.getElementById("sec8").style.display = "none";

  click1 = click2 = click4 = click5 = click6 = click7 = click8 = false;
  }, 1200);
  document.getElementById("sec1").style.zIndex = 2;
  document.getElementById("sec2").style.zIndex = 2;
  document.getElementById("sec4").style.zIndex = 2;
  document.getElementById("sec5").style.zIndex = 2;
  document.getElementById("sec6").style.zIndex = 2;
  document.getElementById("sec7").style.zIndex = 2;
  document.getElementById("sec8").style.zIndex = 2;
}

function selector4() {
  if (click4 == true) {
    return
  }
  click1 = click2 = click3 = click4 = click5 = click6 = click7 = click8 = true;
  document.getElementById("sec4").style.display = "block";
  document.getElementById("sec4").style.zIndex = 5;
  document.getElementById("sec4").animate(
    [
      {opacity: 0},
      {opacity: 1}
    ],
    {
      duration: 1200
    }
  )
  setTimeout(function() {
  document.getElementById("sec1").style.display = "none";
  document.getElementById("sec2").style.display = "none";
  document.getElementById("sec3").style.display = "none";
  document.getElementById("sec5").style.display = "none";
  document.getElementById("sec6").style.display = "none";
  document.getElementById("sec7").style.display = "none";
  document.getElementById("sec8").style.display = "none";

  click1 = click2 = click3 = click5 = click6 = click7 = click8 = false;
  }, 1200);
  document.getElementById("sec1").style.zIndex = 2;
  document.getElementById("sec2").style.zIndex = 2;
  document.getElementById("sec3").style.zIndex = 2;
  document.getElementById("sec5").style.zIndex = 2;
  document.getElementById("sec6").style.zIndex = 2;
  document.getElementById("sec7").style.zIndex = 2;
  document.getElementById("sec8").style.zIndex = 2;
}

function selector5() {
  if (click5 == true) {
    return
  }
  click1 = click2 = click3 = click4 = click5 = click6 = click7 = click8 = true;
  document.getElementById("sec5").style.display = "block";
  document.getElementById("sec5").style.zIndex = 5;
  document.getElementById("sec5").animate(
    [
      {opacity: 0},
      {opacity: 1}
    ],
    {
      duration: 1200
    }
  )
  setTimeout(function() {
  document.getElementById("sec1").style.display = "none";
  document.getElementById("sec2").style.display = "none";
  document.getElementById("sec3").style.display = "none";
  document.getElementById("sec4").style.display = "none";
  document.getElementById("sec6").style.display = "none";
  document.getElementById("sec7").style.display = "none";
  document.getElementById("sec8").style.display = "none";

  click1 = click2 = click3 = click4 = click6 = click7 = click8 = false;
  }, 1200);
  document.getElementById("sec1").style.zIndex = 2;
  document.getElementById("sec2").style.zIndex = 2;
  document.getElementById("sec3").style.zIndex = 2;
  document.getElementById("sec4").style.zIndex = 2;
  document.getElementById("sec6").style.zIndex = 2;
  document.getElementById("sec7").style.zIndex = 2;
  document.getElementById("sec8").style.zIndex = 2;
}

function selector6() {
  if (click6 == true) {
    return
  }
  click1 = click2 = click3 = click4 = click5 = click6 = click7 = click8 = true;
  document.getElementById("sec6").style.display = "block";
  document.getElementById("sec6").style.zIndex = 5;
  document.getElementById("sec6").animate(
    [
      {opacity: 0},
      {opacity: 1}
    ],
    {
      duration: 1200,
    }
  )
  setTimeout(function() {
  document.getElementById("sec1").style.display = "none";
  document.getElementById("sec2").style.display = "none";
  document.getElementById("sec3").style.display = "none";
  document.getElementById("sec4").style.display = "none";
  document.getElementById("sec5").style.display = "none";
  document.getElementById("sec7").style.display = "none";
  document.getElementById("sec8").style.display = "none";

  click1 = click2 = click3 = click4 = click5 = click7 = click8 = false;
  }, 1200);
  document.getElementById("sec1").style.zIndex = 2;
  document.getElementById("sec2").style.zIndex = 2;
  document.getElementById("sec3").style.zIndex = 2;
  document.getElementById("sec4").style.zIndex = 2;
  document.getElementById("sec5").style.zIndex = 2;
  document.getElementById("sec7").style.zIndex = 2;
  document.getElementById("sec8").style.zIndex = 2;
}

function selector7() {
  if (click7 == true) {
    return
  }
  click1 = click2 = click3 = click4 = click5 = click6 = click7 = click8 = true;
  document.getElementById("sec7").style.display = "block";
  document.getElementById("sec7").style.zIndex = 5;
  document.getElementById("sec7").animate(
    [
      {opacity: 0},
      {opacity: 1}
    ],
    {
      duration: 1200
    }
  )
  setTimeout(function() {
  document.getElementById("sec1").style.display = "none";
  document.getElementById("sec2").style.display = "none";
  document.getElementById("sec3").style.display = "none";
  document.getElementById("sec4").style.display = "none";
  document.getElementById("sec5").style.display = "none";
  document.getElementById("sec6").style.display = "none";
  document.getElementById("sec8").style.display = "none";

  click1 = click2 = click3 = click4 = click5 = click6 = click8 = false;
  }, 1200);
  document.getElementById("sec1").style.zIndex = 2;
  document.getElementById("sec2").style.zIndex = 2;
  document.getElementById("sec3").style.zIndex = 2;
  document.getElementById("sec4").style.zIndex = 2;
  document.getElementById("sec5").style.zIndex = 2;
  document.getElementById("sec6").style.zIndex = 2;
  document.getElementById("sec8").style.zIndex = 2;
}

function selector8() {
  if (click8 == true) {
    return
  }
  click1 = click2 = click3 = click4 = click5 = click6 = click7 = click8 = true;
  document.getElementById("sec8").style.display = "block";
  document.getElementById("sec8").style.zIndex = 5;
  document.getElementById("sec8").animate(
    [
      {opacity: 0},
      {opacity: 1}
    ],
    {
      duration: 1200
    }
  )
  setTimeout(function() {
  document.getElementById("sec1").style.display = "none";
  document.getElementById("sec2").style.display = "none";
  document.getElementById("sec3").style.display = "none";
  document.getElementById("sec4").style.display = "none";
  document.getElementById("sec5").style.display = "none";
  document.getElementById("sec6").style.display = "none";
  document.getElementById("sec7").style.display = "none";
  
  click1 = click2 = click3 = click4 = click5 = click6 = click7 = false;
  }, 1200);
  document.getElementById("sec1").style.zIndex = 2;
  document.getElementById("sec2").style.zIndex = 2;
  document.getElementById("sec3").style.zIndex = 2;
  document.getElementById("sec4").style.zIndex = 2;
  document.getElementById("sec5").style.zIndex = 2;
  document.getElementById("sec6").style.zIndex = 2;
  document.getElementById("sec7").style.zIndex = 2;
}

