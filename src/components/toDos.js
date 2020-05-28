// in src/todoss.js
import React from 'react';
import {useMediaQuery, Container} from '@material-ui/core';
import {BooleanInput,SimpleList, Filter, Create, SelectInput ,ReferenceInput,TextInput, SimpleForm,Edit, List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';


const todosTitle = ({ record }) => {
    return <span>todos {record ? `"${record.title}"` : ''}</span>;
};

const todosFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const todosList = props => {
    //const isSmall = useMediaQuery(theme=>theme.breakpoints.down('sm'));
    return (
        <List filters={<todosFilter/>} {...props}>
            {
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <ReferenceField label="User" source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <TextField source="completed" />
                    <EditButton />
                </Datagrid>
            }
        </List>
    );
}

    /*<List filters={<todosFilter/>}  {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton/>
        </Datagrid>
    </List>*/

export const todosEdit = props => (
    <Container>
        <Edit title={<todosTitle/>} {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <ReferenceInput label= "Funcionário" source="userId" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput>            
                <TextInput label= "Tarefa" source="title" />
                <BooleanInput label="Completo" source="completed" />
            </SimpleForm>
        </Edit>
    </Container>
);
export const todosCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label= "Funcionário" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput label= "Tarefa" source="title" />
            <BooleanInput label="Completo" source="completed" />
        </SimpleForm>
    </Create>
);