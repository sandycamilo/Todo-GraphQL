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
```

### getCompletedTodos 
```
```

### addTodo
```
mutation {
  addTodo(name:"run", completed: "yes", date:"May 13 2021", id: 22) {
    name
    completed
    date
    id
  }
}

```

### completeTodo 
```
```
