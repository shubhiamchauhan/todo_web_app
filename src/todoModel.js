class TodoItem {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
  
  editDetails(title, description){
    this.title = title;
    this.description = description;
  }
}

class TodoList {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  editDetails(title, description){
    this.title = title;
    this.description = description;
  }
}

class UserTODOs {
  constructor(userId) {
    this.userId = userId;
    this.todoList = [];
  }

  addTodoList(list) {
    this.todoList.push(list);
  }

}

module.exports = { TodoList, UserTODOs, TodoItem };
