//Generate ID
const genId = () => {
    let d = new Date().getTime();
    let d2 = (performance && performance.now && performance.now() * 1000) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16;
        if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

//All Data
let data = [];
let filterCategories = [{
    name: 'Work',
    value: 'Work',
    status: false
},
{
    name: 'Sport',
    value: 'Sport',
    status: false
},
{
    name: 'Home',
    value: 'Home',
    status: false
},
{
    name: 'University',
    value: 'University',
    status: false
},
{
    name: 'Shop',
    value: 'Shop',
    status: false
}
];
// Render Select Categories
const renderCategories = data => {
    const categories = document.getElementById('inputListCategory');
    const editcategories = document.getElementById('selectCategory');

    let output = '';
    data.forEach(el => {
        output += `
                  <option class="options" value='${el.value}'>${el.name}</option>
              `;
    });
    categories.innerHTML = output;
    editcategories.innerHTML = output;
};
renderCategories(filterCategories);

// Render Filter Categories
const renderFilter = data => {
    const chkParent = document.getElementById('checkbox-parentTag');
    let output = '';
    data.forEach((element, index, array) => {
        output += `
              <div class="inputGroup rounded">
                  <input id="option${index}" name="option${index} "type="checkbox" value='${element.value}'  data-name="${element.name}"/>
                  <label for="option${index}">${element.name}</label>
              </div>
              `;
    });
    chkParent.innerHTML = output;
};
renderFilter(filterCategories);

// function categoriesAllFalse() {
//   filterCategories.forEach(element => {
//     if (element.status === true) {
//       console.log(element);

//       return false;
//     }
//   });
//   return true;
// }


//Render Table Elements
const renderTableElement = (data) => {
    const root = document.querySelector('#root');
    if (data.length !== 0) {
        let template = '';
        data.forEach(element => {
            if (filterCategories.find(item => item.name === element.category).status === true) {
                template += `
                       <tr class="shadow-sm" id="tr">
                          <th scope="row" class='text-info'>#</th>
                          <th scope="row"><i class="far fa-check-circle cursor-pointer  ${element.completed ? 'text-success' : 'text-orangered'}" onclick="completedStatus('${element.id}')"></i></th>
                       <td class='${element.completed ? 'font-weight-bold text-muted' : 'font-weight-bold'}'>${element.category}</td>
                       <td class='${element.completed ? 'text-line-through font-weight-bold text-muted' : 'text-dark activityText'}'>${element.activity}</td>
                       <td class='${element.completed ? 'font-weight-bold text-muted' : 'text-info font-weight-bold'}'>${element.createdDate}</td>
                       <td class='${element.completed ? 'font-weight-bold text-muted' : 'text-info font-weight-bold'}'>${element.deadline}</td>
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
            }
        });
        root.innerHTML = template;
    } else {
        root.innerHTML = '';
    }
};


//FilterStatusToggler
const filterTogglerstatus = document
    .querySelectorAll('.inputGroup > input')
    .forEach(element => {
        element.addEventListener('click', () => {
            const name = element.dataset.name;
            // if (status) {
            //     element.setAttribute('checked', false);
            // }
            filterCategories.forEach(element => {
                if (element.name === name) {
                    if (!element.status) {
                        element.status = true;
                    } else {
                        element.status = false;
                    }
                }
                renderTableElement(data);
            });
            console.log(filterCategories)
        });
    });

//Sort Items
const sortItems = (data) => {
    let categoriesSort = false;
    document.querySelectorAll('#sort-category button').forEach(element => {
        element.addEventListener('click', () => {
            console.log(element.value)
            const activity = element.dataset.activity;
            const categories = element.dataset.category;
            const created = element.dataset.created;
            const deadLine = element.dataset.deadline;
            // console.log(element.name)

            //Sort by Category
            if (element.value === categories) {
                if (!categoriesSort) {
                    console.log('sadsads')
                    categoriesSort = true;
                    data.sort(function (a, b) {
                        let nameA = a.category.toLowerCase(),
                            nameB = b.category.toLowerCase();
                        console.log(nameA)
                        if (nameA < nameB)
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0;
                    });
                } else {
                    categoriesSort = false;
                    data.sort(function (a, b) {
                        let nameA = a.category.toLowerCase(),
                            nameB = b.category.toLowerCase()
                        if (nameA < nameB)
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0;
                    }).reverse();
                }
                // renderTableElement(data);
            }
            // Sort by Activity
            else if (element.value === activity) {
                if (!categoriesSort) {
                    categoriesSort = true;
                    data.sort(function (a, b) {
                        let nameA = a.activity.toLowerCase(),
                            nameB = b.activity.toLowerCase();
                        if (nameA < nameB)
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0;
                    });
                } else {
                    categoriesSort = false;
                    data.sort(function (a, b) {
                        let nameA = a.activity.toLowerCase(),
                            nameB = b.activity.toLowerCase();
                        if (nameA < nameB)
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0;
                    }).reverse();
                }
            }
            //Sort by DeadLine
            else if (element.value === deadLine) {
                if (!categoriesSort) {
                    categoriesSort = true;
                    data.sort(function (a, b) {
                        let dateA = new Date(a.deadline),
                            dateB = new Date(b.deadline);
                        return dateA - dateB;
                    });
                } else {
                    categoriesSort = false;
                    data.sort(function (a, b) {
                        let dateA = new Date(a.deadline),
                            dateB = new Date(b.deadline);
                        return dateA - dateB;
                    }).reverse();
                }
            }
            //Sort by Created ate
            else if (element.value === created) {
                if (!categoriesSort) {
                    categoriesSort = true;
                    data.sort(function (a, b) {
                        let dateA = new Date(a.createdDate),
                            dateB = new Date(b.createdDate);
                        return dateA - dateB;
                    });
                } else {
                    categoriesSort = false;
                    data.sort(function (a, b) {
                        let dateA = new Date(a.createdDate),
                            dateB = new Date(b.createdDate);
                        return dateA - dateB;
                    }).reverse();
                }
            }
            renderTableElement(data);
        })
    })
}
sortItems(data)

// const editItems = () => {
//     let category;
//     document.querySelectorAll('#selectCategory > option').forEach(element => {
//         if (element.selected) category = element.value;
//     });
//     const activity = document.querySelector('#activity').value;
//     const deadline = document.querySelector('#deadline').value.replace('T', ' ');

//     data.forEach(element => {
//         if (element.id) {
//             data.push({
//                 category,
//                 activity,
//                 deadline
//             });
//         }
//     });
// };
// const filters = {
//     searchText: ''
// };

// live - Search
let term = '';
const liveSearch = (items, term) => {
    if (term === 0) {
        renderTableElement(items)
    }
    let filteredItems = items.filter(item => {
        return item.activity.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
    renderTableElement(filteredItems)
}
document.querySelector('#searchPanel').addEventListener('input', (e) => {
    term = e.target.value;
    liveSearch(data, term);
});

//Add Items to Data
const addItems = data => {
    const category = selectedCategory();
    const activity = document.querySelector('#todotext').value;
    const deadline = document
        .querySelector('#deadlineDate')
        .value.replace('T', ' ');
    const createdDate = new Date().toISOString().substr(0, 10);

    if (activity.trim() === '' || deadline === '') {
        alert('something goes wrong');
        return;
    }
    data.push({
        id: genId(),
        completed: false,
        activity,
        category,
        deadline,
        createdDate
    });

    // console.log(data);
    renderTableElement(data);
};
// Select Category
const selectedCategory = () => {
    let category;
    document.querySelectorAll('#inputListCategory > option').forEach(element => {
        if (element.selected) category = element.value;
    });
    return category;
};
const deleteItems = id => {
    // const index = data.findIndex(el => el.id === id);
    // const before = data.slice(0, index);
    // const after = data.slice(index + 1);
    // const newArray = [...before, ...after];
    // if (index > -1) {
    //     renderTableElement(newArray);
    // };
    const index = data.findIndex(el => el.id === id);
    if (index > -1) {
        data.splice(index, 1);
        renderTableElement(data);
    }
};
// completedStatus
const completedStatus = id => {
    console.log(id);
    data.forEach(element => {
        if (element.id === id) {
            if (!element.completed) {
                element.completed = true;
            } else {
                element.completed = false;
            }
        }
    });

    renderTableElement(data);
};