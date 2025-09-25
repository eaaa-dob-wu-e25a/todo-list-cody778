# Todo List Application - Student Worksheet

## Introduction

In this worksheet, you'll build a todo list application by filling in the logic for several key functions. The HTML and CSS, as well as all DOM manipulation, are already set up for you. Your job is to focus on JavaScript fundamentals: writing functions, using loops, and making decisions with if statements.

If you get stuck, use the resources linked at the top of this worksheet or ask your classmates for help!

---

## Task 1: Add a Todo Item

**Function:** `addTodo(task)`

This function is called when the user adds a new todo and submits the form. The DOM setup is done for you. Your job is to make sure the todo item is added to the list.

### Subtasks

1. Make sure the function receives the task text and creates a new todo item.
2. Add the todo item to the list so it appears on the page.

**Skeleton code:**

```javascript
function addTodo(task) {
  // Your code here: create and add a new todo item
}
```

---

## Task 2: Mark a Todo as Complete

**Function:** `markAsComplete(todoItem)`

This function is called when you click on a todo item. It should toggle whether the item is marked as completed by changing the class of the `todoItem` element.

### Subtasks

1. Use an if statement to check if the todo item already has the 'completed' class.
2. If it does, remove the class. If it doesn't, add the class.
3. Test by clicking on a todo item to see if it toggles completion.

**Skeleton code:**

```javascript
function markAsComplete(todoItem) {
  // Your code here: toggle the 'completed' class
}
```

---

## Task 3: Remove All Completed Todos

**Function:** `clearCompleted()`

This function is called when you click the "Clear Completed" button. It should remove all completed todos from the list.

### Subtasks

1. Use a loop to go through all todo items in the list.
2. Use an if statement to check if each item has the 'completed' class.
3. Remove completed items from the list.

**Skeleton code:**

```javascript
function clearCompleted() {
  // Your code here: remove all completed items from the list
}
```

---

## Task 4: Count Todos and Completed Todos

**Functions:** `updateTodoCount()`, `updateCompletedCount()`

These functions update the counters that show how many todos you have and how many are completed.

### Subtasks

1. Use a loop or the `.length` property to count all todo items (`li` elements).
2. Count how many items have the 'completed' class.
3. Update the counter elements with the results.

**Skeleton code:**

```javascript
function updateTodoCount() {
  // Your code here: count all todo items and update the counter
}

function updateCompletedCount() {
  // Your code here: count completed todo items and update the counter
}
```

---

## Task 5: Show a Message When There Are No Todos

**Function:** `updateNoTodosMessage()`

This function should display a message if there are no todos left.

### Subtasks

1. Count the number of todo items in the list.
2. If the count is zero, set the counter to show 'No todos left!'.
3. Otherwise, show the normal count.

**Skeleton code:**

```javascript
function updateNoTodosMessage() {
  // Your code here: show a message if there are no todos
}
```

---

## Task 6: Edit a Todo Item

**Function:** `editTodo(todoItem)`

This function is called when you double-click a todo item. It should let you change the text of the todo.

### Subtasks

1. Replace the todo text with an input field so the user can type a new value.
2. Use an if statement to check for the Enter key or when the input loses focus.
3. Save the new text and replace the input field with the updated span.

**Skeleton code:**

```javascript
function editTodo(todoItem) {
  // Your code here: allow editing the todo text
}
```

---

## Task 7: Toggle All Todos as Complete

**Function:** `toggleAllComplete()`

This function is called when you click the "Toggle All Complete" button. It should mark all todos as completed, or uncompleted if all are already completed.

### Subtasks

1. Use a loop to go through all todo items in the list.
2. Use an if statement to check if all todos are completed.
3. If all are completed, uncomplete them all. Otherwise, complete them all.

**Skeleton code:**

```javascript
function toggleAllComplete() {
  // Your code here: toggle all todos as completed or not completed
}
```

---

## Final Steps

Once you've implemented all the functions above, test your todo list application:

- Add several tasks
- Mark some as completed
- Edit a task
- Delete a task
- Clear all completed tasks
- Toggle all tasks as complete
- Try edge cases like empty inputs or very long task names

Congratulations! You've built a functional todo list using JavaScript fundamentals.
