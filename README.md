# Todo-GraphQL
GraphQL todo app


# Schema 

## Type Todo
- name 
- completed 
- date
- id

## Query 
- getAllTodos - returns a list of todos
- getTodo - returns a single todo
- getCompletedTodos - returns a list of completed todos or not completed todos

## Mutation 
- addTodo - creates a new todo and returns that todo
- completeTodo - marks a todo complete and returns that todo
- deleteTodo - deletes a todo and returns that todo

## Queries 

### getAllTodos
```
query{
  getAllTodos {
    name
    date
    completed
    id
    date
  }
}
```

### getTodo

```
query{
  getTodo(id: 1){
		name
  }
}
```

### getCompletedTodos 

```
query{
  getCompletedTodos(completed: true){
    name
    date
    completed
    id
  }
}
```

### addTodo

```
ADD 
mutation {
  addTodo(name:"drink", completed: false, date:"May 22 2022") {
    name
    date
    id
  }
}
```

### completeTodo 

```
mutation {
  completeTodo(id:1, completed: true) {
    name
    completed
  }
}
```

### deleteTodo

```
mutation {
  deleteTodo(id: 1) {
    name
    date
    completed
    id
  }
}
```
