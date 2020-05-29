// in src/users.js
import React from 'react';
import {useMediaQuery, Container} from '@material-ui/core';
import {BooleanInput,SimpleList, Filter, Create,EmailField,TextInput, SimpleForm,Edit, List, Datagrid, TextField } from 'react-admin';

const UserTitle = ({ record }) => {
    return <span>Funcionário(a) {record ? `"${record.name}"` : ''}</span>;
};
 
const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
    </Filter>
);

export const UserList = props => {
    const isSmall = useMediaQuery(theme=>theme.breakpoints.down('sm'));
    return (
        <List title={"Funcionários"} filters={<UserFilter />} {...props}>
            {isSmall ? (
                <SimpleList source="name"
                    primaryText={record => record.name}
                />
            ) : (
            
                <Datagrid label="Editar" rowClick="edit">
                    <TextField source="id" />
                    <TextField label="Nome" source="name" />
                    <EmailField source="email" />
                    <TextField label="Telefone" source="phone" />
                </Datagrid>
                )}
        </List>
    );
}
export const UserEdit = props => (
    <Container>
        <Edit title={<UserTitle/>} {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput label="Nome" source="name"/>                            
                <TextInput label= "Email" source="email" />
                <TextInput label= "Telefone" source="phone" />
            </SimpleForm>
        </Edit>
    </Container>
);
export const UserCreate = props => (
    <Create title="Criar Usuário" {...props}>
        <SimpleForm>
        <TextInput label= "Funcionário" source="name" />
        <TextInput label= "Tarefa" source="title" />
        <TextInput label= "Email" source="email" />
        <TextInput label= "Telefone" source="phone" />
        <BooleanInput label="Completo" source="completed" />
        </SimpleForm>
    </Create>
);