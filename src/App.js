// in src/App.js
import React from 'react';
import { Admin, Resource} from 'react-admin';
import {UserEdit,UserCreate, UserList } from './components/users';
import { TodosShow,TodosList ,TodosCreate, TodosEdit} from './components/toDos';
import jsonServerProvider from 'ra-data-json-server';
import todosIcon from '@material-ui/icons/Work';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './components/Dashboard';
import loginPage from './components/SignIn';
import authProvider from './components/authProvider';
import { createMuiTheme } from '@material-ui/core/styles';



const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin theme={theme} authProvider={authProvider} loginPage={loginPage} dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="users" options={{ label: 'Funcionários' }} list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
        <Resource name="todos" options={{ label: 'Tarefas' }} show={TodosShow} list={TodosList}  edit={TodosEdit} create={TodosCreate} icon={todosIcon} />
    </Admin>
);

export default App;