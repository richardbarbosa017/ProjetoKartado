// in src/todoss.js
import React from 'react';
import {useMediaQuery, Container} from '@material-ui/core';
import {BooleanField,BooleanInput,SimpleList, Filter, Create, SelectInput ,ReferenceInput,TextInput, SimpleForm,Edit, List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';


const TodosTitle = ({ record }) => {
    return <span>Tarefa {record ? `"${record.title}"` : ''}</span>;
};

const TodosFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
        <ReferenceInput label="Nome" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const TodosList = props => {
    const isSmall = useMediaQuery(theme=>theme.breakpoints.down('sm'));
    return (
        <List title="Tarefas" filters={<TodosFilter/>} {...props}>
            {isSmall ? (
                <SimpleList source="name"
                    primaryText={record => record.title}
                />
            ) : (
                <Datagrid rowClick="edit">
                        <TextField source="id" />
                        <ReferenceField label="Nome" source="userId" reference="users">
                            <TextField source="name" />
                        </ReferenceField>
                        <TextField label="Tarefa" source="title" />
                        <BooleanField textAlign="center" label="Completo" source="completed" />
                        <EditButton />
                </Datagrid>
            )}
        </List>
    );
}
export const TodosEdit = props => (
    <Container>
        <Edit title={<TodosTitle/>} {...props}>
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
export const TodosCreate = props => (
    <Create title={"Criar Tarefa"} {...props}>
        <SimpleForm>
            <ReferenceInput label= "Funcionário" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput label= "Tarefa" source="title" />
            <BooleanInput label="Completo" source="completed" />
        </SimpleForm>
    </Create>
);