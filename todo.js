// todo3.js - DOM manipulation scaffolded, focus on JS logic

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');

  // Create and insert the clear completed button
  const clearBtn = document.createElement('button');
  clearBtn.textContent = 'Clear Completed';
  clearBtn.className = 'clear-btn';
  clearBtn.style.display = 'none';
  form.parentNode.insertBefore(clearBtn, list);

  // Counter elements (already created for you)
  const todoCount = document.createElement('div');
  todoCount.className = 'todo-count';
  form.parentNode.insertBefore(todoCount, list);

  const completedCount = document.createElement('div');
  completedCount.className = 'completed-count';
  form.parentNode.insertBefore(completedCount, list);

  // Add a button for toggling all complete
  const toggleAllBtn = document.createElement('button');
  toggleAllBtn.textContent = 'Toggle All Complete';
  toggleAllBtn.className = 'toggle-all-btn';
  form.parentNode.insertBefore(toggleAllBtn, list);
  toggleAllBtn.addEventListener('click', function() {
    toggleAllComplete();
    updateClearButton();
    updateAllCounters();
  });

  // Event: Add todo
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const task = input.value.trim();
    if (task) {
        // TODO: write code to take the `task` and add it to the `list` variable defined at the top
        addTodo(task);
        input.value = '';
        updateClearButton();
      }
    updateAllCounters();
  });

  // Event: Clear completed
  clearBtn.addEventListener('click', function() {
    clearCompleted();
    updateClearButton();
    updateAllCounters();
  });

  // Add a todo item to the list
  function addTodo(task) {
    // DOM is handled for you:
    const li = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;
    taskText.className = 'task-text';
    li.appendChild(taskText);
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete-btn';
    li.appendChild(delBtn);
    list.appendChild(li);

    // Event: Mark as complete
    taskText.addEventListener('click', function() {
      markAsComplete(li);
      updateClearButton();
      updateAllCounters();
    });
    // Event: Delete
    delBtn.onclick = function() {
      list.removeChild(li);
      updateClearButton();
      updateAllCounters();
    };
    // Event: Edit
    taskText.ondblclick = function() {
      editTodo(li);
    };
  }

  // Mark a todo item as completed
  function markAsComplete(todoItem) {
    // TODO: Toggle the 'completed' class on todoItem
    // Hit: if (todoItem.classList.contains('completed')) { ... }
    if (todoItem.classList.contains('completed')) { 
      todoItem.classList.remove('completed');
    }
    else {
      todoItem.classList.add('completed');
    }
  }

  // Remove all completed tasks from the list
  function clearCompleted() {
    // TODO: Remove all items with the 'completed' class from the list
    // Hit: Use a loop to check each child of the list constant at the top of the document
    const completedItems = list.querySelectorAll('.completed');
    completedItems.forEach(item => {
      list.removeChild(item);
    });
  }

  // Show/hide the clear completed button
  function updateClearButton() {
    const completedItems = list.querySelectorAll('.completed');
    clearBtn.style.display = completedItems.length > 0 ? 'block' : 'none';
  }

  // Call update counters whenever the list changes
  function updateAllCounters() {
    updateTodoCount();
    updateCompletedCount();
    updateNoTodosMessage();
  }

  // Count and display the number of todos
  function updateTodoCount() {
    // TODO: Count how many todo items are in the list
    // Hint: count the todos using a for each loop and save it in a variable x. Then use the below code to set the todoCount counter
    // Set todoCount.textContent = 'Todos: ' + x;
    const x = list.children.length;
    todoCount.textContent = 'Todos: ' + x;
  }

  // Count and display the number of completed todos
  function updateCompletedCount() {
    // TODO: Count how many todo items have the 'completed' class
    // Set completedCount.textContent = 'Completed: Y';
    const completedItems = list.querySelectorAll('.completed');
    const y = completedItems.length;
    completedCount.textContent = 'Completed: ' + y;
  }

  // Show a message if there are no todos left
  function updateNoTodosMessage() {
    // TODO: If there are no todos, show a message (e.g. 'No todos left!')
    // You can use todoCount.textContent for this, or create a new element
    if (list.children.length === 0) {
      todoCount.textContent = 'No todos left!';
    }
  }

  /**
   * Edits the text of a todo item
   * @param {HTMLElement} todoItem - The todo item to edit
   */
  function editTodo(todoItem) {
    // TODO: Allow editing the todo text
    // Hint: Use an input field and save changes on Enter
    // Use if statements to check for events
    const span = todoItem.querySelector('.task-text');
    if (!span) return;

    const oldText = span.textContent;

    // Create an input for editing
    const input = document.createElement('input');
    input.type = 'text';
    input.value = oldText;
    input.className = 'edit-input';

    // Swap the span with the input
    todoItem.replaceChild(input, span);
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length); // put cursor at end

    // Control flow so finish() runs only once
    let done = false;
    function finish(newText, revertOnEmpty = true) {
      if (done) return;
      done = true;

      const text = newText.trim();
      const newSpan = document.createElement('span');
      newSpan.className = 'task-text';

      if (text || !revertOnEmpty) {
        newSpan.textContent = text || oldText;
      } else {
        newSpan.textContent = oldText;
      }

      // Reattach interactions
      newSpan.addEventListener('click', () => {
        markAsComplete(todoItem);
        updateClearButton();
        updateAllCounters();
      });
      newSpan.addEventListener('dblclick', () => {
        editTodo(todoItem);
    });

    todoItem.replaceChild(newSpan, input);

    updateClearButton();
    updateAllCounters();
  }

  // Save on Enter
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      finish(input.value);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      finish(oldText); // cancel editing
    }
  });

  // Save on blur
  input.addEventListener('blur', () => {
    finish(input.value);
  });
}

 

  /**
   * Toggles all todos as completed or not completed
   */
  function toggleAllComplete() {
    const items = list.querySelectorAll('li');
    const allCompleted = Array.from(items).every(item =>
      item.classList.contains('completed')
    );

    items.forEach(item => {
      if (!allCompleted) {
        item.classList.add('completed');
      }
    });
}
});
