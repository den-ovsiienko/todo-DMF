# TODO App is a react application developed for DMF

## How to Use

### npm install - Download all the packages used for development

### npm start - Build/run the TODO App in development mode

### npm run build - Build the TODO App for production

### npm run server - Build/Run the TODO app for production using a project-local version of http-server.

## Implementation

### View a TODO
Each todo has ID, title, description, state, and due date. In order to see the description, the user should click on the down arrow at the bottom of the TODO card.

### Add a TODO
The user is able to add a new TODO by clicking on the "plus" sign at the left top of each table. This action will trigger the add modal for the specific Table. (state)

### Delete a TODO
The user is able to delete a todo by clicking on the red button on the right of the TODO Card. The delete modal will appear.

### Edit a TODO
The user is able to edit a todo by clicking on the yellow button on the right of the TODO Card. The edit modal will appear.

### List TODOs
Filter: The search box with the dropdown option is located on the top right of the screen. The user is able to filter TODOs by their table(state), title, description, id, due date. Active filters are saved inside the dropbox with the yellow button on the top right of the screen.

Sort: The user is able to sort TODOs within the table(state) by clicking on the grey button on the top right of TODO's card. The sort is available by title, id, and due date.

Sort by dragging: The user is able to change: the order of the TODOs in each table(state) by dragging the TODO card within the table, the TODO's state by dragging the TODO to a different table, and the order of the tables by dragging the table (this feature is implemented for the laptop screen sizes and is not recommended for tables & mobile phones) 

### Overdue TODOs
The TODOs which have overdue due dates and do not have a 'Done' state are marked as 'Overdue'.
