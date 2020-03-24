// Local Storage

const getDataLS = () => {
    const dataJSON = localStorage.getItem('todo');
    if (dataJSON !== null) {
        return JSON.parse(dataJSON);
    } else {
        return [
            {
                id: 1584367462428,
                status: false,
                category: "Home",
                text: "Buy some food",
                created: new Date().toISOString().slice(0, 10),
                deadline: "2020-03-20, 08:30"
            },
            {
                id: 1584367462418,
                status: false,
                category: "Pets",
                text: "Walk the dog",
                created: new Date().toISOString().slice(0, 10),
                deadline: "2020-03-18, 09:09"
            },
            {
                id: 1584598792325,
                status: true,
                category: "Classes",
                text: "Prepare for test",
                created: new Date().toISOString().slice(0, 10),
                deadline: "2020-03-20, 09:09"
            },
            {
                id: 1584598702325,
                status: false,
                category: "Work",
                text: "Take the docs",
                created: new Date().toISOString().slice(0, 10),
                deadline: "2020-03-21, 10:09"
            },
            {
                id: 1584598702225,
                status: false,
                category: "Classes",
                text: "Buy books",
                created: new Date().toISOString().slice(0, 10),
                deadline: "2020-03-22, 10:30"
            },
            {
                id: 1580598702225,
                status: true,
                category: "Home",
                text: "Clean the house",
                created: new Date().toISOString().slice(0, 10),
                deadline: "2020-03-22, 10:45"
            },
            {
                id: 1580598802225,
                status: false,
                category: "Pets",
                text: "Visit pet shop",
                created: new Date().toISOString().slice(0, 10),
                deadline: "2020-03-22, 10:45"
            },
            {
                id: 1580598802245,
                status: false,
                category: "Work",
                text: "Discussions",
                created: new Date().toISOString().slice(0, 10),
                deadline: "2020-03-22, 11:45"
            },
        ];
    }
};


const saveDataLS = (data) => {
    localStorage.setItem('todos', JSON.stringify(data));
};

// -------------------------------------------------------//

let data = getDataLS();
let selectedItemID = null;
let order = false;

const $ = selector => document.querySelector(selector);

const filters = {
    searchText: ''
};

// Pagination

const config = {
    dataSet: data,
    currentPage: 1,
    dataPerPage: 5
};

const paginate = (dataSet, currentPage, dataPerPage) => {
    const indexOfLastRow = currentPage * dataPerPage;
    const indexOfFirstRow = indexOfLastRow - dataPerPage;
    const currentPosts = dataSet.slice(indexOfFirstRow, indexOfLastRow);
    const pagesCount = Math.ceil(dataSet.length / dataPerPage);
    return {
        dataSet: currentPosts,
        pagesCount
    }
};

const renderPages = pages => {
    let container = $('#pagination-container');
    container.innerHTML = '';
    console.log('Pages:', pages)

    for (let i = 1; i <= pages; i++) {
        container.innerHTML += `<li value=${i} class="page-item"><a class="page page-link" href="#">${i}</a></li>`
    }
};

// Load DOM

const renderData = () => {
    console.log('DOM loaded');
    displayData(data);

    $('#form-submit').addEventListener('submit', (e) => {
        e.preventDefault();
        selectedItemID ? updateData() : addData();
    });
};


// Read/display data

const getData = data => {
    const list = $('#todo-list');
    // const { dataSet, currentPage, dataPerPage } = config;
    // const current = paginate(dataSet, currentPage, dataPerPage);
    if (data !== 0) {
        let output = '';
        data.forEach((el, index) => {
            output += `
          <tr>
            <th scope="row">${index + 1}</th>
            <td>${el.category}</td>
            <td>${el.text}</td>
            <td>${el.created}</td>
            <td>${el.deadline}</td>
            ${el.status ?
                    `<td><a href="#" class="text-center text-success" onclick="editStatus(${el.id})"><i class="fas fa-check"></i></a></td>` :
                    `<td><a href="#" class="text-center text-danger" onclick="editStatus(${el.id})"><i class="fas fa-times"></i></a></td>`}
            <td><button class="btn btn-link text-secondary"><i class="far fa-edit edit-${el.id}" data-id="${el.id}"></i></button></td>
            <td><button class="btn btn-link text-danger"><i class="far fa-trash-alt delete-${el.id}" data-id="${el.id}"></i></button></td>
          </tr>
          `;
        });
        list.innerHTML = output;
        // renderPages(current.pagesCount);
    } else {
        list.innerHTML = "";
    }
};

const displayData = (data) => {
    getData(data);
};

// CRUD

const clearFields = () => {
    const select = $('#categories');
    select.value = "";
    $('#text').value = "";
    $('#deadline').value = "";
};

// Create data

const addData = () => {
    const select = $('#categories');
    const category = select.value;
    const text = $('#text').value;
    const deadline = $('#deadline').value.replace('T', ', ');
    const created = new Date().toISOString().slice(0, 10);

    if (category === '' || text.trim() === '' || deadline === '') {
        alert('Please fill all fields');
        return;
    };

    data.push({
        id: new Date().valueOf(),
        status: false,
        category,
        text,
        created,
        deadline
    });

    clearFields();
    saveDataLS(data);
    displayData(data);
};

// Update data

const updateData = () => {
    if (!selectedItemID) return;

    const index = data.findIndex(el => el.id === selectedItemID);
    let item = data[index];
    const select = $('#categories');
    const category = select.value;
    const text = $('#text').value;
    const deadline = $('#deadline').value.replace('T', ', ');

    if (category === '' || text.trim() === '' || deadline === '') {
        alert('Please fill all fields');
        return;
    };

    item = {
        ...item,
        category,
        text,
        deadline
    };

    data.splice(index, 1, item);
    selectedItemID = null;
    clearFields();
    saveDataLS(data);
    displayData(data);
};

const fillForm = data => {
    const select = $('#categories');
    const text = $('#text');
    const deadline = $('#deadline');

    select.value = data.category;
    text.value = data.text;
    deadline.value = data.deadline.replace(', ', 'T');
};

const onEdit = e => {
    const todoId = parseInt(e.target.dataset.id);
    if (e.target.classList.contains(`edit-${todoId}`)) {
        const item = data.find(el => el.id === todoId);
        selectedItemID = item.id;
        fillForm(item);
    };
};

$('#todo-list').addEventListener('click', onEdit);

// Delete data

const onDelete = e => {
    const todoId = parseInt(e.target.dataset.id);
    if (e.target.classList.contains(`delete-${todoId}`)) {
        const index = data.findIndex(el => el.id === todoId);
        if (confirm('Are you sure?')) {
            data.splice(index, 1);
            saveDataLS(data);
            displayData(data);
        };
    };
};

$('#todo-list').addEventListener('click', onDelete);

// Status toggle

const editStatus = id => {
    const index = data.findIndex(el => el.id === id);
    let item = data[index];
    item.status = !item.status;
    item = {
        ...item,
        status: item.status
    };

    data.splice(index, 1, item);
    saveDataLS(data);
    displayData(data);
};

// Sorting lists

const sortCol = e => {
    const colName = e.target.dataset.sort;
    const dataType = typeof data[0][colName];
    order = !order;

    if (dataType === "string") {
        sortTextCol(order, colName);
    } else {
        sortNumCol(order, colName);
    }
    displayData(data);
};

const sortNumCol = (dir, colName) => {
    data = data.sort((a, b) => {
        return dir ? a[colName] - b[colName] : b[colName] - a[colName]
    });
};

const sortTextCol = (dir, colName) => {
    data = data.sort((a, b) => {
        let textA = a[colName].toLowerCase();
        let textB = b[colName].toLowerCase();
        return dir ? (textA > textB) - (textA < textB) : (textB > textA) - (textB < textA);
    });
};

$('#table-caption').addEventListener('click', sortCol);

// Live search

const searchData = (data, filters) => {
    const filtered = data.filter(el => {
        return el.text.toLowerCase().includes(filters.searchText.toLowerCase()) || el.deadline.includes(filters.searchText);
    })
    displayData(filtered)
};

$('#input-filter').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    searchData(data, filters);
});

// Filter lists

const filterChecks = document.querySelectorAll('.check-filter');
const checksArray = Array.from(filterChecks);

const filterData = () => {
    checksArray.forEach(check => {
        if (check.checked) {
            const current = check.getAttribute('data-filter');
            if (current === "All") {
                displayData(data);
            } else {
                const filtered = data.filter(el => el.category === current);
                displayData(filtered);
            }
        };
    });
};

checksArray.forEach(check => check.addEventListener('change', filterData));

