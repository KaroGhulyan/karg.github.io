// All Data List
class Data {
    constructor() {
        this.allList = [];
        this.workList = [];
        this.sportList = [];
        this.universityList = [];
    }
    addWork(item) {
        this.allList.push(item);
        this.workList.push(item);
    }
    addSport(item) {
        this.allList.push(item)
        this.sportList.push(item)
    }
    addUniversity(item) {
        this.allList.push(item)
        this.universityList.push(item)
    }
    tableElement(element) {
        let count = 1;
        count++;
        let output = `
        <tr class="shadow-sm" id="tr">
        <th scope="row">${count++}</th>
        <th scope="row"><i class="far fa-check-circle cursor-pointer"></i></th>
        <td>${element.category}</td>
        <td class='font-weight-bold'>${element.inputText}</td>
        <td>${element.createdDate}</td>
        <td>${element.deadlineDate}</td>
        <td class="text-secondary">
        <button class="btn p-0 m-0" data-toggle="modal" data-target="#exampleModal">
            <i class="far fa-edit"></i>
        </button>
        </td>
        <td class="text-danger">
        <button class="btn p-0 m-0">
            <i class="far fa-trash-alt text-danger"></i>
        </button>
        </td>
        </tr>
        `
        return output
    }
    showList() {
        let root = document.querySelector('#root');
        let output = ``;
        this.allList.forEach(element => {
            console.log(element)
            output += data.tableElement(element);
        })
        root.innerHTML = output;
    }
    filterList() {
        let root = document.querySelector('#root');
        let output = ``;
        document.querySelectorAll('#btn-groupAll .btn').forEach((element) => {
            element.addEventListener('click', function (e) {
                if (element.value === 'All') {
                    output = ``;
                    data.allList.forEach(element => {
                        console.log(element)
                        output += data.tableElement(element);
                    })
                    root.innerHTML = output;
                }
                else if (element.value === 'Work') {
                    output = ``;
                    data.workList.forEach(element => {
                        output += data.tableElement(element);
                    })
                    root.innerHTML = output;
                }
                else if (element.value === 'Sport') {
                    output = ``;
                    data.sportList.forEach(element => {
                        output += data.tableElement(element);
                    })
                    root.innerHTML = output;
                }
                else if (element.value === 'University') {
                    output = ``;
                    data.universityList.forEach(element => {
                        output += data.tableElement(element);
                    })
                    root.innerHTML = output;
                }
            })

        })

    }
}
const data = new Data();

function renderList() {
    data.showList();
    data.filterList();
}

// Select Category
function selectedCategory() {
    let category;
    document.querySelectorAll("#inputListCategory > option").forEach(element => {
        if (element.selected)
            category = element.value;
    })
    return category
}
//Select DeadLinaDate
function selectedDeadlineDate() {
    return document.querySelector('#deadlineDate').value;
}
//SelectInputTextValue
function toDoText() {
    return document.querySelector('#todotext').value;
}
//Created Date
function createdDate() {
    return new Date().toISOString().substr(0, 10)
}
//Generate ID
function generateId() {
    let count = 0;
    return function () {
        return count++;
    };
};
let genId = generateId();

//AddItems
function addItem() {
    let item = {
        category: selectedCategory(),
        inputText: toDoText(),
        deadlineDate: selectedDeadlineDate(),
        createdDate: createdDate(),
        id: genId(),
    }

    for (const key in item) {
        if (item[key].length === 0) {
            switch (key) {
                case 'inputText':
                    document.querySelector('#todotext').style.borderColor = 'red';
                    break;
            }
        }
    }
    switch (item.category) {
        case 'Work':
            data.addWork(item)
            break;
        case 'Sport':
            data.addSport(item)
            break;
        case 'University':
            data.addUniversity(item)
            break;
        default:
            break;
    }
    renderList();

    // console.log(item)
}