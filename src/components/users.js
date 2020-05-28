// in src/users.js
import React from 'react';
import { List, Datagrid, TextField, EmailField} from 'react-admin';

export const UserList = props => (
    <List title={"Funcionários"} {...props}>
        <Datagrid label="Editar" rowClick="edit">
            <TextField source="id" />
            <TextField label="Nome" source="name" />
            <EmailField source="email" />
            <TextField label="Telefone" source="phone" />
        </Datagrid>
    </List>
);