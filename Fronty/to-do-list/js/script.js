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

// --------------------------------------------------------------------------------------------------------------------------
//All Data
let data = [

];

let filterCategories = [
    // { name: 'All', value: 'All', status: true },
    { name: 'Work', value: 'Work', status: false },
    { name: 'Sport', value: 'Sport', status: false },
    { name: 'Home', value: 'Home', status: false },
    { name: 'University', value: 'University', status: false },
    { name: 'Shop', value: 'Shop', status: false }
];
// ---------------------------------------------------------------------------------------------------------------------
//Local Storage 
function saveTodos() {
    var str = JSON.stringify(data);
    localStorage.setItem("todos", str)
}
//get data from locale storage
function getToDos() {
    var str = localStorage.getItem("todos")
    data = JSON.parse(str);
    if (!data) {
        data = [];
    }
}



// ---------------------------------------------------------------------------------------------------------------------

let page = 1;
let itemsPerPage = 5;
// let totalPages = 3
let totalPages = Math.ceil(data.length / itemsPerPage);


//initialize todo app
getToDos()
renderTableElement(data, page);

//Pagination 
function handlePanginationClick(direction) {
    page = direction === "next" ? page + 1 : page - 1;
    renderTableElement(data, page);
}
// Render Pagination
function renderPagination() {
    const pagination = document.getElementById('pagination');
    // Disable pagination buttons
    let template = `
                  <nav aria-label="Page navigation example">
                    <ul class="pagination text-indigoblue">
                      <button ${page === 1 ? 'disabled' : null} id="prev" class="btn page-item p-0">
                        <a class="page-link" href="#">Previous</a>
                      </button>
                      <button class="btn page-item p-0">
                        <a class="page-link font-weight-bold" href="#">${page}</a>
                      </button>
                      <button class="btn page-item p-0">
                        <a class="page-link" href="#">of</a>
                      </button>
                      <button class="btn page-item p-0">
                        <a class="page-link font-weight-bold" href="#">${totalPages}</a>
                      </button>
                      <button  ${page >= totalPages ? 'disabled' : null} id="next" class="btn page-item p-0">
                        <a class="page-link" href="#">Next</a>
                     </button>
                    </ul>
                  </nav>`;

    pagination.innerHTML = template;
    const nextPage = document.querySelector('#next').addEventListener('click', () => {
        handlePanginationClick('next');
    });
    const prevPage = document.querySelector('#prev').addEventListener('click', () => {
        handlePanginationClick('prev');
    });
};
renderPagination(page);

// ------------------------------------------------------------------------------------------------------------------------

//Render 

//Render Categories
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




//Render Table Elements
function renderTableElement(data, pageNumber) {
    // Update totalPages after render elements
    totalPages = Math.ceil(data.length / itemsPerPage);
    // Update pagination after render elements
    renderPagination(page);
    const root = document.querySelector('#root');
    if (data.length !== 0) {
        let template = '';
        let count = itemsPerPage;
        let filteredData = [];
        data.forEach(element => {
            if (filterCategories.find(item => item.name === element.category).status === true || filterCategories.filter(item => item.status === false).length === 5) {
                filteredData.push(element);
            }
        });
        filteredData.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage).forEach(element => {
            if (count === 0) {
                return;
            }
            count--;
            template += `
                       <tr class="shadow-sm">
                          <th scope="row" class='text-info'>#</th>
                          <th scope="row">
                           <i class="far fa-check-circle cursor-pointer  ${element.completed ? 'text-success' : 'text-orangered'}" onclick="completedStatus('${element.id}')"></i></th>
                          <td class='${element.completed ? 'font-weight-bold text-muted' : 'font-weight-bold'}'>${element.category}</td>
                          <td class='${element.completed ? 'text-line-through font-weight-bold text-muted' : 'text-dark activityText'}'>${element.activity}</td>
                          <td class='${element.completed ? 'font-weight-bold text-muted' : 'text-info font-weight-bold'}'>${element.createdDate}</td>
                          <td class='${element.completed ? 'font-weight-bold text-muted' : 'text-info font-weight-bold'}'>${element.deadline}</td>
                          <td class="text-secondary">
                            <button class="btn p-0 m-0" data-toggle="modal" data-target="#exampleModal" id='editbtn'>
                            <i class="far fa-edit"></i>
                            </button>
                          </td>
                          <td class="text-danger" id="btn-group">
                            <button class="btn p-0 m-0 trashbtn"  onclick="deleteItems('${element.id}', ${pageNumber})">
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
};

renderTableElement(data, page);


// document.getElementById('submit').addEventListener('click', function () {
//     console.log('dsds')
// })

//filterCheck
function filterCheck(category) {
    return filterCategories.find(item => item.name === category)
}

//FilterStatusToggler
const filterTogglerstatus = document
    .querySelectorAll('.inputGroup > input')
    .forEach(element => {
        element.addEventListener('click', () => {
            // const allElements = document.getElementById('option22');
            // allElements.removeAttribute('checked');
            const name = element.dataset.name;
            console.log(filterCategories)
            // console.log(name)
            filterCategories.forEach(element => {
                if (element.name === name) {
                    if (!element.status) {
                        element.status = true;
                    } else {
                        element.status = false;
                    }
                }
                renderTableElement(data, page);
            });
            // console.log(filterCategories);
        });
    });

// ------------------------------------------------------------------------------------------------------------------------

//Sort Items
const sortItems = data => {
    let categoriesSort = false;
    document.querySelectorAll('#sort-category button').forEach(element => {
        element.addEventListener('click', () => {
            console.log(element.value);
            const activity = element.dataset.activity;
            const categories = element.dataset.category;
            const created = element.dataset.created;
            const deadLine = element.dataset.deadline;

            //Sort by Category
            if (element.value === categories) {
                if (!categoriesSort) {
                    console.log('sadsads');
                    categoriesSort = true;
                    data.sort(function (a, b) {
                        let nameA = a.category.toLowerCase(),
                            nameB = b.category.toLowerCase();
                        console.log(nameA);
                        if (nameA < nameB) return -1;
                        if (nameA > nameB) return 1;
                        return 0;
                    });
                } else {
                    categoriesSort = false;
                    data
                        .sort(function (a, b) {
                            let nameA = a.category.toLowerCase(),
                                nameB = b.category.toLowerCase();
                            if (nameA < nameB) return -1;
                            if (nameA > nameB) return 1;
                            return 0;
                        })
                        .reverse();
                }
            }
            // Sort by Activity
            else if (element.value === activity) {
                if (!categoriesSort) {
                    categoriesSort = true;
                    data.sort(function (a, b) {
                        let nameA = a.activity.toLowerCase(),
                            nameB = b.activity.toLowerCase();
                        if (nameA < nameB) return -1;
                        if (nameA > nameB) return 1;
                        return 0;
                    });
                } else {
                    categoriesSort = false;
                    data
                        .sort(function (a, b) {
                            let nameA = a.activity.toLowerCase(),
                                nameB = b.activity.toLowerCase();
                            if (nameA < nameB) return -1;
                            if (nameA > nameB) return 1;
                            return 0;
                        })
                        .reverse();
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
                    data
                        .sort(function (a, b) {
                            let dateA = new Date(a.deadline),
                                dateB = new Date(b.deadline);
                            return dateA - dateB;
                        })
                        .reverse();
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
                    data
                        .sort(function (a, b) {
                            let dateA = new Date(a.createdDate),
                                dateB = new Date(b.createdDate);
                            return dateA - dateB;
                        })
                        .reverse();
                }
            }
            renderTableElement(data, page);
        });
    });
};
sortItems(data);


// -----------------------------------------------------------------------------------------------------------------
// live - Search
let term = '';
const liveSearch = (items, term) => {
    if (term === 0) {
        renderTableElement(items, page);
    }
    let filteredItems = items.filter(item => {
        return item.activity.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
    renderTableElement(filteredItems, page);
};
document.querySelector('#searchPanel').addEventListener('input', e => {
    term = e.target.value;
    liveSearch(data, term);
});

// --------------------------------------------------------------------------------------------------------------------
//Add Items to Data
const addItems = (data, pageNumber) => {
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
        createdDate,
        status: false,
    });
    saveTodos(data);
    console.log(data);
    renderTableElement(data, pageNumber);
};

// -----------------------------------------------------------------------------------------------------------------------------
// Select Category
const selectedCategory = () => {
    let category;
    document.querySelectorAll('#inputListCategory > option').forEach(element => {
        if (element.selected) category = element.value;
    });
    return category;
};

//Delete Items
const deleteItems = (id, pageNumber) => {
    const index = data.findIndex(el => el.id === id);
    if (index > -1) {
        data.splice(index, 1);
        renderPagination(page);
        renderTableElement(data, pageNumber);
        saveTodos(data);

    }
};
// completedStatus
const completedStatus = id => {
    // console.log(id);
    data.forEach(element => {
        if (element.id === id) {
            if (!element.completed) {
                element.completed = true;
            } else {
                element.completed = false;
            }
        }
    });
    renderTableElement(data, page);
};









