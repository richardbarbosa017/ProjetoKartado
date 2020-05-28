// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './components/users';
import { todosList ,todosCreate, todosEdit} from './components/toDos';
import jsonServerProvider from 'ra-data-json-server';
import todosIcon from '@material-ui/icons/Work';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './components/Dashboard';
import authProvider from './components/authProvider';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin theme={theme} authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="users" options={{ label: 'Funcionários' }} list={UserList} icon={UserIcon} />
        <Resource name="todos" options={{ label: 'Tarefas' }} list={todosList}  edit={todosEdit} create={todosCreate} icon={todosIcon} />
    </Admin>
);

export default App;