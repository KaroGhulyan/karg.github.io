
import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form";
import './app.css';



export default class App extends React.Component {
    maxId = 100;//էլեմենտները որոնք մենք ավելացնելու ենք ունենալու են id 100ից սկսած
    constructor() {
        super();
        class Const {
            constructor(label, important, id) {
                this.label = label;
                this.important = important;
                this.id = id;
            }
        }
        this.state = {
            todoData: [
                new Const("Drink Coffe", false, this.maxId++),
                new Const("Make Awesome App", false, this.maxId++),
                new Const("Have a lunch", false, this.maxId++),
                // { label: 'Drink Coffee', important: false, id: 1 },
                // { label: 'Make Awesome App', important: true, id: 2 },
                // { label: 'Have a lunch', important: false, id: 3 }
            ],
            term: '',
            filter: 'all', //active/done/all
        };


        this.deleteItem = (id) => {
            this.setState(({ todoData }) => {
                const indx = todoData.findIndex(el => el.id === id);//ստանում ենք element-ի id-ին
                // todoData.splice(indx, 1);
                //[a,b,c,d,e] պետք է ջնջել с-ն
                //[a,b  d,e]
                const before = todoData.slice(0, indx);
                const after = todoData.slice(indx + 1);//??????????վերցնում ենք մնացած էլէմենտները
                const newArray = [...before, ...after];//լցնում ենք նոր մասիվի մեջ
                return {
                    todoData: newArray,//կլիկի ժամանակ մեր todoData-ն փոխվում ա newArray-ի որի մեջ գտնվում են մեր նոր էլեմենտները
                }
            })
        }
        this.addItem = (text) => {
            //generate id 
            const newItem = new Const(text, false, this.maxId++);
            //-ստանալ էլեմենտ մասիվի միջ օբյեկտի նման(label,important,id) ու ավելացնել մասիվ
            this.setState(({ todoData }) => {
                const newArr = [
                    ...todoData,
                    newItem
                ]
                return {
                    todoData: newArr
                }
            })
            console.log("Added", text);
        }
        this.toggleProperty = (arr, id, propName) => {
            const idx = arr.findIndex((el) => el.id === id);
            const oldItem = arr[idx];
            const newItem = { ...oldItem, [propName]: !oldItem[propName] };
            //1. update object

            //2. construct new array
            return [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1),
            ]
        }
        this.onToggleImportant = (id) => {
            // console.log("tog imp", id);

            this.setState(({ todoData }) => {

                return {
                    todoData: this.toggleProperty(todoData, id, "important"),
                };
            })

        }
        this.onToggleDone = (id) => {
            // console.log("tog don", id);
            this.setState(({ todoData }) => {

                return {
                    todoData: this.toggleProperty(todoData, id, "done"),
                };
            })
        }
        this.onSearchChange = (term) => {
            this.setState({ term });
        }
        this.search = (items, term) => {
            if (term === 0) {
                return items;
            }
            return items.filter((item) => {
                return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
            })
        }
        this.filter = (items, filter) => {
            switch (filter) {
                case "all":
                    return items;
                case "active":
                    return items.filter((item) => !item.done);
                case "done":
                    return items.filter((item) => item.done);
                default:
                    return items;
            }
        }
        this.onFilterChange = (filter) => {
            this.setState({ filter });
        }


    }

    render() {
        const { todoData, term, filter } = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filter);
        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;
        return (
            <div className="todo-app" >
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter filter={filter}
                        onFilterChange={this.onFilterChange} />
                </div>
                <TodoList todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone} />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    }

};
