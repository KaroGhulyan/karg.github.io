let tetris = document.createElement("div");   //tetris = div;
tetris.classList.add("tetris");                //div class = "tetris"

for (let i = 1;i < 181; i++) {                    
    let excel = document.createElement("div"); //180 հատ div
    excel.classList.add("excel");               //div class = "excel"
    tetris.appendChild(excel);                  //div class = "tetris" => 180 հատ div class ="excel"
}

let main = document.getElementsByClassName("main")[0]; 
main.appendChild(tetris);                       //div class = "main" =>div class = "tetris" => 180 հատ div class ="excel"

let excel = document.getElementsByClassName('excel'); // let excel = 180 հատ div;
let i = 0;

for(let y = 18;y>0;y--){                            //ցիկլ y առանցքի համար վերևից ներքև
    for(let x = 1;x < 11 ;x++){                     //ցիկլ x առանցքի համար;
        excel[i].setAttribute("posX",x);            
        excel[i].setAttribute("posY",y);            //տալիս ենք կորդինատներ մեր յուրաքանչյուր div -ին(180);
        i++;
    }
}
                                            
                                                //Ֆիգուռաներ
let x = 5;
let y = 15;

let mainArr = [
    //Ձող
    [
        [0,1],        
        [0,2],        
        [0,3],
        //90
        [
         [-1,1],   
         [0,0],   
         [1,-1],   
         [2,-2],   
        ],
        //180
        [
            [1,-1],   
            [0,0],   
            [-1,1],   
            [-2,2],   
        ],
        //270
        [
            [-1,1],   
            [0,0],   
            [1,-1],   
            [2,-2],   
        ],
        //360
        [
               [1,-1],   
               [0,0],   
               [-1,1],   
               [-2,2],   
        ],
        
        
                
    ],
    //Քառակուսի;
    [
        [1,0],
        [0,1],
        [1,1],
        //90
        [
            [0,0],   
            [0,0],   
            [0,0],   
            [0,0],   
           ],
           //180
           [
               [0,0],   
               [0,0],   
               [0,0],   
               [0,0],   
           ],
           //270
           [
               [0,0],   
               [0,0],   
               [0,0],   
               [0,0],   
           ],
           //360
           [
                  [0,0],   
                  [0,0],   
                  [0,0],   
                  [0,0],   
           ],
    ],
    //L
    [
        [1,0],
        [0,1],
        [0,2],
        //90
        [
         [0,0],   
         [-1,1],   
         [1,0],   
         [2,-1],   
        ],
        //180
        [
            [1,-1],   
            [1,-1],   
            [-1,0],   
            [-1,0],   
        ],
        //270
        [
            [-1,0],   
            [0,-1],   
            [2,-2],   
            [1,-1],   
        ],
        //360
        [
               [0,-1],   
               [0,-1],   
               [-2,0],   
               [-2,0],   
        ],
    ],
    //L mirror
    [
        [1,0],
        [1,1],
        [1,2],
        //90
        [
            [0,0],   
            [0,0],   
            [1,-1],   
            [-1,-1],   
           ],
           //180
           [
               [0,-1],   
               [-1,0],   
               [-2,1],   
               [1,0],   
           ],
           //270
           [
               [2,0],   
               [0,0],   
               [1,-1],   
               [1,-1],   
           ],
           //360
           [
                  [-2,0],   
                  [1,-1],   
                  [0,0],   
                  [-1,1],   
           ],
    ],
    //Կայծակ աջ 
    [
        [1,0],
        [-1,1],
        [0,1],
        //90
        [
            [0,-1],   
            [-1,0],   
            [2,-1],   
            [1,0],   
           ],
           //180
           [
               [0,0],   
               [1,-1],   
               [-2,0],   
               [-1,-1],   
           ],
           //270
           [
               [0,-1],   
               [-1,0],   
               [2,-1],   
               [1,0],   
           ],
           //360
           [
                  [0,0],   
                  [1,-1],   
                  [-2,0],   
                  [-1,-1],   
           ],
    ],
    //Կայծակ ձախ 
    [
        [1,0],
        [1,1],
        [2,1],
        //90
        [
            [2,-1],   
            [0,0],   
            [1,-1],   
            [-1,0],   
           ],
           //180
           [
               [-2,0],   
               [0,-1],   
               [-1,0],   
               [1,-1],   
           ],
           //270
           [
               [2,-1],   
               [0,0],   
               [1,-1],   
               [-1,0],   
           ],
           //360
           [
                  [-2,0],   
                  [0,-1],   
                  [-1,0],   
                  [1,-1],   
           ],
    ],
    //լեգո
    [
        [1,0],
        [2,0],
        [1,1],
        //90
        [
            [1,-1],   
            [0,0],   
            [0,0],   
            [0,0],   
           ],
           //180
           [
               [0,0],   
               [-1,0],   
               [-1,0],   
               [1,-1],   
           ],
           //270
           [
               [1,-1],   
               [1,-1],   
               [1,-1],   
               [0,0],   
           ],
           //360
           [
                  [-2,0],   
                  [0,-1],   
                  [0,-1],   
                  [-1,-1],   
           ],

    ],
]

let currentFigure = 0;
let figureBody = 0;
let rotate = 1;

function create() {
    function getRandom() {
        return Math.round(Math.random()*(mainArr.length-1))
    }
rotate = 1;
currentFigure = getRandom();
figureBody = [
    document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
    document.querySelector(`[posX = "${x + mainArr[currentFigure][0][0]}"][posY = "${y + mainArr[currentFigure][0][1]}"]`),
    document.querySelector(`[posX = "${x + mainArr[currentFigure][1][0]}"][posY = "${y + mainArr[currentFigure][1][1]}"]`),
    document.querySelector(`[posX = "${x + mainArr[currentFigure][2][0]}"][posY = "${y + mainArr[currentFigure][2][1]}"]`),
]
for(let i =0; i < figureBody.length; i++){
    figureBody[i].classList.add(`figure`);
}
}
create();


//Քարերի շարժ
function move() {
    let moveFlag = true;
    let cordinates = [
        [figureBody[0].getAttribute("posX"),figureBody[0].getAttribute("posY")],
        [figureBody[1].getAttribute("posX"),figureBody[1].getAttribute("posY")],
        [figureBody[2].getAttribute("posX"),figureBody[2].getAttribute("posY")],
        [figureBody[3].getAttribute("posX"),figureBody[3].getAttribute("posY")],
    ];//մենք դիմում ենք figureBod-ին ու վերցնում ենք իրա բոլոր posX ու posY ատրիբութտները 
    
    for (let i = 0; i < cordinates.length; i++) {
        if(cordinates[i][1] == 1 || document.querySelector(`[posX ="${cordinates[i][0]}" ][posY  ="${cordinates[i][1]-1}" ]`).classList.contains("set")){
            moveFlag = false;
            break;
        }//եթե 4 էլեմենտներից մեկը ունի posY = 1 մենք կանգնեցնում ենք շարժը ||եթե ներքևում գտնվում ա էլեմենտ .set կլասով ․․մենք դադարեցնում ենք շարժումը 
        //(նշանակում ա որ մեր ֆիգուռկան հասել է ներքևի սահմանին)              (այսինքն արդեն ընկած քար)    
    }
    
    if(moveFlag == true){ // եթե կարող ենք  շարժվել ներքև  ․․ջնջում ենք figure class-ը 
        for(let i =0; i < figureBody.length; i++){
            figureBody[i].classList.remove("figure");
        };
        //հիմա պետք է նորից գրել figureBody -ի կորդինատները ․․․որվհետև նրանք փոխվել են;  
        figureBody = [  
            document.querySelector(`[posX ="${cordinates[0][0]}" ][posY  ="${cordinates[0][1]-1}" ]`),
            document.querySelector(`[posX ="${cordinates[1][0]}" ][posY  ="${cordinates[1][1]-1}" ]`),
            document.querySelector(`[posX ="${cordinates[2][0]}" ][posY  ="${cordinates[2][1]-1}" ]`),
            document.querySelector(`[posX ="${cordinates[3][0]}" ][posY  ="${cordinates[3][1]-1}" ]`),
            
        ] ;//նորից ցիկլով անցնում եքն figureBody-ի վրայով և ավելացնում ենք figure class-ը;
        for(let i =0; i < figureBody.length; i++){
            figureBody[i].classList.add("figure");
        };          
    }else{                                                   //եթե մեր moveFlag-ը false է   
        for(let i =0; i < figureBody.length; i++){
            figureBody[i].classList.remove("figure");
            figureBody[i].classList.add("set");
        };
        create(); //որպիսզի նոր ֆիգուռկա ստեղծվի և ընկնի ներքև
    }    
}
    let interval = setInterval(()=>{
        move();
    },300); //ստեղծեցինք ինտեռվալ որպիսզի ամեն 300մվ հետո մեր move-ֆունկցիան կրկնի; 
                            //ավելացնում ենք կնօպկեք ;)
window.addEventListener("keydown",function (e) {
    let cordinates1 = [figureBody[0].getAttribute("posX"),figureBody[0].getAttribute("posY")];
    let cordinates2 = [figureBody[1].getAttribute("posX"),figureBody[1].getAttribute("posY")];
    let cordinates3 = [figureBody[2].getAttribute("posX"),figureBody[2].getAttribute("posY")];
    let cordinates4 = [figureBody[3].getAttribute("posX"),figureBody[3].getAttribute("posY")];
    function getNewState(a) {  //որոշում ենք ֆիգուռների նոր կորդինատները տիրույթում;
        flag = true; 
        
        let figureNew = [
            document.querySelector(`[posX ="${+cordinates1[0]+ a}" ][posY  ="${cordinates1[1]}" ]`),
            document.querySelector(`[posX ="${+cordinates2[0]+ a}" ][posY  ="${cordinates2[1]}" ]`),
            document.querySelector(`[posX ="${+cordinates3[0]+ a}" ][posY  ="${cordinates3[1]}" ]`),
            document.querySelector(`[posX ="${+cordinates4[0]+ a}" ][posY  ="${cordinates4[1]}" ]`),
         ];//y-մնում է ամփոփոխ իսկ x-y  լինելու է 1 կամ -1(1 ու -1 լինելու է a առգումենտի մեջ);
         
         for(let i = 0; i < figureNew.length;i++){
            if(!figureNew[i]||figureNew[i].classList.contains("set") ){//եթե figureNew[i]չկա || կամ ունի կլաս set
                flag = false;
            }
         }
         if(flag == true){
            for(let i =0; i < figureBody.length; i++){
                figureBody[i].classList.remove("figure");
            };
            figureBody = figureNew;
            for(let i =0; i < figureBody.length; i++){
                figureBody[i].classList.add("figure");
            };
         }
    }

    if(e.keyCode == 37){ //ձախ կնոպկա   
        getNewState(-1);
    }else if(e.keyCode == 39){ //աջ կնոպկա
        getNewState(1);
    }else if(e.keyCode == 40){ //ներքև կնոպկա որ արագ իջնի
        move();
    }
    else if(e.keyCode == 38){ //վերև կնոպկա շրջելու համար;
        flag = true; 
        
        let figureNew = [
            document.querySelector(`[posX ="${+cordinates1[0]+ mainArr[currentFigure][rotate + 2][0][0]}" ][posY  ="${+cordinates1[1]+ mainArr[currentFigure][rotate + 2][0][1]}" ]`),
            document.querySelector(`[posX ="${+cordinates2[0]+ mainArr[currentFigure][rotate + 2][1][0]}" ][posY  ="${+cordinates2[1]+ mainArr[currentFigure][rotate + 2][1][1]}" ]`),
            document.querySelector(`[posX ="${+cordinates3[0]+ mainArr[currentFigure][rotate + 2][2][0]}" ][posY  ="${+cordinates3[1]+ mainArr[currentFigure][rotate + 2][2][1]}" ]`),
            document.querySelector(`[posX ="${+cordinates4[0]+ mainArr[currentFigure][rotate + 2][3][0]}" ][posY  ="${+cordinates4[1]+ mainArr[currentFigure][rotate + 2][3][1]}" ]`),
         ];//y-մնում է ամփոփոխ իսկ x-y  լինելու է 1 կամ -1(1 ու -1 լինելու է a առգումենտի մեջ);
         
         for(let i = 0; i < figureNew.length;i++){
            if(!figureNew[i]||figureNew[i].classList.contains("set") ){//եթե figureNew[i]չկա || կամ ունի կլաս set
                flag = false;
            }
         }
         if(flag == true){
            for(let i =0; i < figureBody.length; i++){
                figureBody[i].classList.remove("figure");
            };
            figureBody = figureNew;
            for(let i =0; i < figureBody.length; i++){
                figureBody[i].classList.add("figure");
            };
            if(rotate < 4){
                rotate++;
            }else{
                rotate = 1;
            }
         }
    }
    
})