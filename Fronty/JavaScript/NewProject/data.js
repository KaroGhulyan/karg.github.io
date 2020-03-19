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



//Generate ID
const genId = () => {
    let d = new Date().getTime();
    let d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16;
        if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        ;
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
};

//All Data
let data = [];
let filterCategories = [
    { name: "Work", value: "Work" },
    { name: "Sport", value: "Sport" },
    { name: "Home", value: "Home" },
    { name: "University", value: "University" },
    { name: "Shop", value: "Shop" },
];

// Render Select Categories
const renderCategories = (data) => {
    const categories = document.getElementById('inputListCategory');
    const editcategories = document.getElementById('selectCategory');

    let output = '';
    data.forEach((el) => {
        output += `
                <option class="options" value='${el.value}'>${el.name}</option>
            `;
    })
    categories.innerHTML = output;
    editcategories.innerHTML = output;
}
renderCategories(filterCategories);
// Render Filter Categories
const renderFilter = (data) => {
    const chkParent = document.getElementById('checkbox-parentTag');
    let output = '';
    data.forEach((el, index) => {
        output += `
            <div class="inputGroup rounded">
                <input id="option${index}" name="option${index}" type="checkbox" value='${el.value}' onclick="${checker(index) ? onCheck(index) : onUnCheck(index)}" />
                <label for="option${index}">${el.name}</label>
            </div>
            `;
    })
    chkParent.innerHTML = output;
}
renderFilter(filterCategories);
//Render Table Elements
const renderTableElement = (data) => {
    const root = document.querySelector("#root");
    if (data.length !== 0) {
        let template = '';
        data.forEach((element) => {
            template += `
                     <tr class="shadow-sm" id="tr">
                     <th scope="row" class='text-info'>#</th>
                     <th scope="row"><i class="far fa-check-circle cursor-pointer  ${element.completed ? 'text-success' : "text-orangered"}" onclick="completedStatus('${element.id}')"></i></th>
                     <td class='${element.completed ? 'font-weight-bold text-muted' : "font-weight-bold"}'>${element.category}</td>
                     <td class='${element.completed ? 'text-line-through font-weight-bold text-muted' : "text-dark"}'>${element.activity}</td>
                     <td class='${element.completed ? 'font-weight-bold text-muted' : "text-info font-weight-bold"}'>${element.createdDate}</td>
                     <td class='${element.completed ? 'font-weight-bold text-muted' : "text-info font-weight-bold"}'>${element.deadline}</td>
                     <td class="text-secondary">
                     <button class="btn p-0 m-0" data-toggle="modal" data-target="#exampleModal">
                         <i class="far fa-edit"></i>
                     </button>
                     </td>
                     <td class="text-danger" id="btn-group">
                     <button class="btn p-0 m-0 trashbtn"  onclick="deleteItems('${element.id}')">
                         <i class="far fa-trash-alt text-orangered"></i>
                     </button>
                     </td>
                 </tr>
                     `;
        });
        root.innerHTML = template;
    } else {
        root.innerHTML = '';
    }
}
const editItems = () => {
    let category;
    document.querySelectorAll("#selectCategory > option").forEach(element => {
        if (element.selected)
            category = element.value;
    })
    const activity = document.querySelector('#activity').value;
    const deadline = document.querySelector('#deadline').value.replace('T', ' ');

    data.forEach(element => {
        if (element.id) {
            data.push({
                category,
                activity,
                deadline,
            })
        }
    })


}

const addItems = (data) => {
    const category = selectedCategory();
    const activity = document.querySelector('#todotext').value;
    const deadline = document.querySelector('#deadlineDate').value.replace('T', ' ');
    const createdDate = new Date().toISOString().substr(0, 10);

    if (activity.trim() === '' || deadline === '') {
        alert('something goes wrong')
        return;
    }
    ;
    data.push({
        id: genId(),
        completed: false,
        activity,
        category,
        deadline,
        createdDate,
    });

    // console.log(data);
    renderTableElement(data);
};
// Select Category
const selectedCategory = () => {
    let category;
    document.querySelectorAll("#inputListCategory > option").forEach(element => {
        if (element.selected)
            category = element.value;
    })
    return category
}
const deleteItems = id => {
    const index = data.findIndex(el => el.id === id);
    if (index > -1) {
        data.splice(index, 1);
        renderTableElement(data);
    }
};
// completedStatus
const completedStatus = (id) => {
    console.log(id)
    data.forEach(element => {
        if (element.id === id) {
            if (!element.completed) {
                element.completed = true;
                renderTableElement(data)
            } else {
                element.completed = false;
                renderTableElement(data);
            }
        }
    })
};

const onCheck = index => document.getElementById(`option${index}`).setAttribute('checked', true);
const onUnCheck = index => document.getElementById(`option${index}`).removeAttribute('checked');

const checker = index => document.getElementById(`option${index}`).getAttribute('title') === null;

const dataFilter = data => {
    const filterCategory = filterCategories.map((item, index) => 'option' + index);




    return filteredData;
};


// function genId() {
//     let d = new Date().getTime();
//     let d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//         let r = Math.random() * 16;
//         if (d > 0) {
//             r = (d + r) % 16 | 0;
//             d = Math.floor(d / 16);
//         } else {
//             r = (d2 + r) % 16 | 0;
//             d2 = Math.floor(d2 / 16);
//         };
//         return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
//     });
// };
// // All Data List
// class Data {
//     constructor() {
//         this.allList = [];
//         this.workList = [];
//         this.sportList = [];
//         this.universityList = [];
//     }
//     addWork(item) {
//         this.allList.push(item);
//         this.workList.push(item);
//     }
//     addSport(item) {
//         this.allList.push(item)
//         this.sportList.push(item)
//     }
//     addUniversity(item) {
//         this.allList.push(item)
//         this.universityList.push(item)
//     }
//     //Tabel Elements 
//     tableElement(element) {
//         let output = `
//         <tr class="shadow-sm" id="tr">
//         <th scope="row" class='text-info'>#</th>
//         <th scope="row"><i class="far fa-check-circle cursor-pointer ${element.done ? 'text-success' : "text-orangered"}" onclick="doneItems('${element.id}')"></i></th>
//         <td class="font-weight-bold">${element.category}</td>
//         <td class='${element.done ? 'text-success font-weight-bold' : "text-dark"}'>${element.inputText}</td>
//         <td class="text-info font-weight-bold">${element.createdDate}</td>
//         <td class="text-info font-weight-bold">${element.deadlineDate}</td>
//         <td class="text-secondary">
//         <button class="btn p-0 m-0" data-toggle="modal" data-target="#exampleModal">
//             <i class="far fa-edit"></i>
//         </button>
//         </td>
//         <td class="text-danger" id="btn-group">
//         <button class="btn p-0 m-0 trashbtn"  onclick="deleteItems('${element.id}',${element.category})">
//             <i class="far fa-trash-alt text-orangered"></i>
//         </button>
//         </td>
//         </tr>
//         `
//         return output;
//     }
//     //Show All List
//     showList() {
//         let root = document.querySelector('#root');
//         renderAllItems();
//     }
//     //Filter
//     filterList() {
//         let root = document.querySelector('#root');
//         let output = ``;
//         document.querySelectorAll('#btn-groupAll .btn').forEach((element) => {
//             element.addEventListener('click', function (e) {
//                 if (element.value === 'All') {
//                     renderAllItems();
//                 }
//                 else if (element.value === 'Work') {
//                     renderWorkItems();
//                 }
//                 else if (element.value === 'Sport') {
//                     renderSportItems();
//                 }
//                 else if (element.value === 'University') {
//                     renderUniverItems();
//                 }
//             })

//         })

//     }
//     //Sort Items
//     sortList() {
//         let root = document.querySelector('#root');
//         let output = ``;
//         let categoriesSort = false;
//         document.querySelectorAll('#sort-category button').forEach(element => {
//             element.addEventListener('click', function (e) {
//                 //Sort by Category
//                 if (element.value === "Categories") {
//                     if (!categoriesSort) {
//                         categoriesSort = true;
//                         data.allList.sort(function (a, b) {
//                             let nameA = a.category.toLowerCase(), nameB = b.category.toLowerCase()
//                             if (nameA < nameB)
//                                 return -1
//                             if (nameA > nameB)
//                                 return 1
//                             return 0;
//                         });
//                         renderAllItems();
//                     } else {
//                         categoriesSort = false;
//                         data.allList.sort(function (a, b) {
//                             let nameA = a.category.toLowerCase(), nameB = b.category.toLowerCase()
//                             if (nameA < nameB)
//                                 return -1
//                             if (nameA > nameB)
//                                 return 1
//                             return 0;
//                         }).reverse();
//                         renderAllItems();
//                     }
//                 }
//                 //Sort by Activity
//                 if (element.value === "Activity") {
//                     if (!categoriesSort) {
//                         categoriesSort = true;
//                         data.allList.sort(function (a, b) {
//                             let nameA = a.inputText.toLowerCase(), nameB = b.inputText.toLowerCase();
//                             if (nameA < nameB)
//                                 return -1
//                             if (nameA > nameB)
//                                 return 1
//                             return 0;
//                         });
//                         renderAllItems();
//                     }
//                     else {
//                         categoriesSort = false;
//                         data.allList.sort(function (a, b) {
//                             let nameA = a.inputText.toLowerCase(), nameB = b.inputText.toLowerCase();
//                             if (nameA < nameB)
//                                 return -1
//                             if (nameA > nameB)
//                                 return 1
//                             return 0;
//                         }).reverse();
//                         renderAllItems();
//                     }
//                 }
//                 //Sort by DeadLine
//                 if (element.value === 'Deadline') {
//                     if (!categoriesSort) {
//                         categoriesSort = true;
//                         data.allList.sort(function (a, b) {
//                             let dateA = new Date(a.deadlineDate), dateB = new Date(b.deadlineDate);
//                             return dateA - dateB;
//                         });
//                         renderAllItems();
//                     }
//                     else {
//                         categoriesSort = false;
//                         data.allList.sort(function (a, b) {
//                             let dateA = new Date(a.deadlineDate), dateB = new Date(b.deadlineDate);
//                             return dateA - dateB;
//                         }).reverse();
//                         renderAllItems();
//                     }
//                 }
//                 //Sort by Created date
//                 if (element.value === 'Created') {
//                     if (!categoriesSort) {
//                         categoriesSort = true;
//                         data.allList.sort(function (a, b) {
//                             let dateA = new Date(a.createdDate), dateB = new Date(b.createdDate);
//                             return dateA - dateB;
//                         });
//                         renderAllItems();
//                     }
//                     else {
//                         categoriesSort = false;
//                         data.allList.sort(function (a, b) {
//                             let dateA = new Date(a.createdDate), dateB = new Date(b.createdDate);
//                             return dateA - dateB;
//                         }).reverse();
//                         renderAllItems();
//                     }
//                 }
//             })
//         })
//     }
// }
// const data = new Data();
// //Render Items
// function renderList() {
//     data.showList();
//     data.filterList();
//     data.sortList();
// }
// //Render All Items
// function renderAllItems() {
//     output = ``;
//     data.allList.forEach(element => {
//         output += data.tableElement(element);
//     })
//     root.innerHTML = output;
// }
// //Render Work Category Items
// function renderWorkItems() {
//     output = ``;
//     data.workList.forEach(element => {
//         output += data.tableElement(element);
//     })
//     root.innerHTML = output;
// }
// //Render Sport Category Items
// function renderSportItems() {
//     output = ``;
//     data.sportList.forEach(element => {
//         output += data.tableElement(element);
//     })
//     root.innerHTML = output;
// }
// //Render Univer Category Items
// function renderUniverItems() {
//     output = ``;
//     data.universityList.forEach(element => {
//         output += data.tableElement(element);
//     })
//     root.innerHTML = output;
// }
// //Edit Items
// function editItems(obj) {
//     let activity = document.querySelector('#formGroupExampleInput').value;
//     let deadLine = document.querySelector('#formGroupExampleInput2').value;
//     let category;
//     document.querySelectorAll("#inputState1 > option").forEach(element => {
//         if (element.selected)
//             category = element.value;
//     });
//     console.log(obj);
//     // for (const key in obj) {
//     //     console.log(obj[key]);
//     // }
//     // console.log(obj.id);
//     obj.category = category;
//     obj.inputText = activity;
//     obj.deadLine = deadLine;
//     renderAllItems();

//     // console.log(a);
//     // for (const key in this) {
//     //     console.log(key.id)
//     //     // if (key.id) {
//     //     //     this.category = category;
//     //     //     renderAllItems();
//     //     //     this.inputText = activity;
//     //     //     renderAllItems();
//     //     //     this.deadLine = deadLine;
//     //     //     renderAllItems();
//     //     // }
//     // }

// }
// //doneItems
// function doneItems(id) {
//     let root = document.querySelector('#root');
//     let output = ``;
//     data.allList.forEach(element => {
//         if (element.id === id) {
//             if (!element.done) {
//                 element.done = true;
//                 renderAllItems();
//             } else {
//                 element.done = false;
//                 renderAllItems();
//             }
//         }
//     })
// }
// // Select Category
// function selectedCategory() {
//     let category;
//     document.querySelectorAll("#inputListCategory > option").forEach(element => {
//         if (element.selected)
//             category = element.value;
//     })
//     return category
// }
// //Select DeadLinaDate
// function selectedDeadlineDate() {
//     return document.querySelector('#deadlineDate').value;
// }
// //SelectInputTextValue
// function toDoText() {
//     return document.querySelector('#todotext').value;
// }
// //Created Date
// function createdDate() {
//     return new Date().toISOString().substr(0, 10)
// }
// //Delete Items
// function deleteItems(id, category) {
//     // let root = document.querySelector('#root');
//     // let output = ``;
//     data.allList.forEach((element, index, array) => {
//         if (element.id === id) {
//             const index = array.indexOf(element);
//             if (index > -1) {
//                 data.allList.splice(index, 1);
//                 output = ``;
//                 renderAllItems();
//                 // output = ``;
//                 return;
//             }
//         }
//     })
//     if (category === 'Work') {
//         data.workList.forEach((element, index, array) => {
//             if (element.id === id) {
//                 const index = array.indexOf(element);
//                 if (index > -1) {
//                     data.workList.splice(index, 1);
//                     data.allList.splice(index, 1);
//                     renderWorkItems();
//                     // output = ``;
//                 }
//             }
//         })
//     } else if (category === 'Sport') {
//         data.sportList.forEach((element, index, array) => {
//             if (element.id === id) {
//                 const index = array.indexOf(element);
//                 if (index > -1) {
//                     data.sportList.splice(index, 1);
//                     renderSportItems();
//                     // output = ``;
//                 }
//             }
//         })
//     } else if (category === 'University') {
//         data.universityList.forEach((element, index, array) => {
//             if (element.id === id) {
//                 const index = array.indexOf(element);
//                 if (index > -1) {
//                     data.universityList.splice(index, 1);
//                     renderUniverItems;
//                     // output = ``;
//                 }
//             }
//         })
//     }
// }
// //AddItems
// document.querySelector('#addbtn').addEventListener('click', function (e) {
//     let item = {
//         category: selectedCategory(),
//         inputText: toDoText(),
//         deadlineDate: selectedDeadlineDate(),
//         createdDate: createdDate(),
//         id: genId(),
//         done: false,
//         count: 1,
//         // func: function () {
//         //     this.category = category;
//         //     this.inputText = activity;
//         // }
//     }

//     AkunaMatata = editItems.bind(null, item);

//     for (const key in item) {
//         if (item[key].length === 0) {
//             switch (key) {
//                 case 'inputText':
//                     document.querySelector('#todotext').style.borderColor = 'red';
//                     break;
//             }
//         }
//     }
//     switch (item.category) {
//         case 'Work':
//             data.addWork(item)
//             break;
//         case 'Sport':
//             data.addSport(item)
//             break;
//         case 'University':
//             data.addUniversity(item)
//             break;
//         default:
//             break;
//     }
//     renderList();
//     // console.log(data.allsList)
// })




