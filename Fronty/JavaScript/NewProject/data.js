const Users = [
    {
        name: "Angel Lewis",
        image:
            "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/0d4/2f7/07a3d35.jpg",
        location: "Seattle, WA"
    },
    {
        name: "Justin Dean",
        image:
            "https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAIMAAAAJGExNTE4OWY4LWU4ODMtNDA2ZS1iNWI1LWNkYmIyOWMyMGQ5Zg.jpg",
        location: "Muscatine, IA"
    },
    {
        name: "Nora Blake",
        image:
            "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/005/0b8/118/387e091.jpg",
        location: "Seattle, WA"
    },
    {
        name: "Russell Fox",
        image:
            "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/084/26e/2d9e05b.jpg",
        location: "Albuquerque, NM"
    },
    {
        name: "Daryl Bradley",
        image:
            "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/042/0ad/197566e.jpg",
        location: "Buckeystown, MD"
    },
    {
        name: "Franklin Gonzales",
        image:
            "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/005/0b2/1c9/2a423c1.jpg",
        location: "Atlanta, GA"
    },
    {
        name: "Viola Francis",
        image:
            "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAASJAAAAJGMyMTUzN2EyLTExY2ItNDZiNS1hMTY1LTI4NDA2NDMwZmFkNg.jpg",
        location: "Zanesville, OH"
    },
    {
        name: "Reginald Benson",
        image:
            "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/000/10f/3cc/275a407.jpg",
        location: "Gilbert, AZ"
    },
    {
        name: "Glenda Ray",
        image:
            "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/005/0ac/1ca/07c25a2.jpg",
        location: "Baltimore, MD"
    }
];

//Live-Search
document.querySelector("#searchPanel").oninput = function () {
    let val = this.value;
    let searchItems = document.querySelectorAll(".search-menu li");
    if (val != "") {
        searchItems.forEach(elem => {
            if (elem.innerText.search(val) == -1) {
                elem.style.display = "none";
            } else {
                elem.style.display = "block";
            }
        });
    } else {
        searchItems.forEach(elem => {
            elem.style.display = "block";
        });
    }
};

//Add-Users-List
let ul = document.querySelector(".search-menu");
Users.forEach((element, i) => {
    let users = Object.values(element)[0];
    let usersImg = "https://www.godhelpu.com/assets/img//person-img.png";
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.setAttribute("src", `${usersImg}`);
    li.classList = "list-group-item";
    li.appendChild(img);
    li.appendChild(document.createTextNode(users));
    ul.appendChild(li);
});

//Add-Users
let button = document.getElementById("enter");
let input = document.getElementById("userinput1");
function inputLength() {
    return input.value.length;
}
function createListElement() {
    let li = document.createElement("li");
    let img = document.createElement("img");
    let usersImg = "https://www.godhelpu.com/assets/img//person-img.png";
    li.classList = "list-group-item";
    img.setAttribute("src", `${usersImg}`);
    li.appendChild(img);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}
function addListClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}
function addListEnter() {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}
button.addEventListener("click", function () {
    addListClick();
});
input.addEventListener("keypress", function () {
    addListEnter();
});

























// const users = [
//     { name: 'max', userName: 'max05', button: true },
//     { name: 'bob', userName: 'bob10', button: false },
//     { name: 'jane', userName: 'omt', button: true }
//   ]

//   const filters = {
//     searchText: ''
//   }

//   const renderData = () => {
//     addUser(users);
//   };

//   // Create User

//   const addUser = (arr) => {
//     const userList = document.querySelector('#root');
//     let output = '';
//     arr.forEach(item => {
//       output += `
//       <div class="row align-items-end">
//       <div class="col-md-auto my-3">
//         <div class="row align-items-center">
//           <div class="col-md-auto">
//             <img src="https://source.unsplash.com//60x60/?face,women" alt="user" class="rounded">
//           </div>
//           <div class="col-md-auto">
//             <div>
//               <p class="">${item.name}</p>
//               <p class="mb-0">@${item.userName}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//        ${item.button ?
//           `<div class="col-md-3 ml-auto">
//             <a href="#" class="btn btn-link">Edit</a>
//            </div>` : ''}
//     </div>
//     <hr class="my-0" />
//       `
//       userList.innerHTML = output;
//     })
//   }

//   addUser(users)

//   // Search Users

//   const searchUser = (users, filters) => {
//     const filteredUsers = users.filter(user => {
//       return user.name.toLowerCase().includes(filters.searchText.toLowerCase()) || user.userName.toLowerCase().includes(filters.searchText.toLowerCase())
//     })
//     addUser(filteredUsers)
//   }

//   searchUser(users, filters);

//   document.querySelector('#term').addEventListener('input', function (e) {
//     filters.searchText = e.target.value;
//     searchUser(users, filters)
//   })

//   // Create User

//   document.querySelector('#submit').addEventListener('click', function (e) {
//     const name = document.querySelector('#fullName');
//     const userName = document.querySelector('#userName');
//     const edit = document.querySelector('#edit');

//     users.push({
//       name: name.value,
//       userName: userName.value,
//       button: edit.checked
//     })
//     addUser(users)
//     name.value = '';
//     userName.value = '';
//     edit.checked = '';
//   })


//   // Local storage (testing)

//   const getData = (str) => {
//     let users;
//     if (localStorage.getItem(str) === null) {
//       data = [];
//     } else {
//       data = JSON.parse(localStorage.getItem(str))
//     }
//     return users;
//   }

//   const setData = (str, value) => {
//     const users = getData(str);
//     users.push(value);
//     localStorage.setItem(str, JSON.stringify(value))
//   }