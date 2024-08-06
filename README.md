# Todo List App

A simple and visually appealing Todo List application built with JavaScript and Tailwind CSS. This application allows users to manage their tasks with Create, Read, Update, and Delete (CRUD) functionality. The data is saved to local storage and is not persisted in any database or cloud.

## Features

- **Add Task**: Users can add new tasks to the list.
- **Edit Task**: Users can edit tasks directly in the task list.
- **Complete Task**: Users can mark tasks as complete.
- **Delete Task**: Users can delete tasks from the list.
- **Local Storage**: Tasks are saved to the browser's local storage.

## Technologies Used

- **JavaScript**: For the application's logic.
- **Tailwind CSS**: For styling the application.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Azrael654/todo-list.git
cd todo-list-app
```

2. Open `index.html` in your browser:

```bash
open index.html
```

## Usage

- **Add a Task**: Enter a task in the input field and click the add button (plus icon) to add it to the list.
- **Edit a Task**: Click the edit button (pencil icon) next to the task. Edit the task directly and click outside the input to save changes.
- **Complete a Task**: Click the complete button (check icon) to mark the task as completed.
- **Delete a Task**: Click the delete button (trash icon) to remove the task from the list.

## Folder Structure

```
todo-list-app/
│
├── index.html          # The main HTML file
├── styles.css          # Custom styles
├── app.js              # Main JavaScript file
└── README.md           # This README file
```

## Customization

### Change Font

To change the font, update the link to Google Fonts in the `<head>` section of `index.html` and the `font-family` in `styles.css`.

### Change Icons

To change the icons, update the `innerHTML` of the buttons in `app.js` with the desired Font Awesome icon classes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
