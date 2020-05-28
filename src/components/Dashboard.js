import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, CardHeader,CardActionArea} from '@material-ui/core';
import working from './images/funcionarios.jpg';
import todos from './images/tarefas.jpg';
import status from './images/status.jpg';
import { NavLink } from "react-router-dom";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        order: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        textAlign:'center',
        padding: '0 30px',
        margin:'20px 20px',
        maxHeight:345,
    },
  });
  const config = makeStyles({
    root: {    
        borderRadius: 5,
        textAlign:'center',
        padding: '150px 100px',
        display: 'flex',
    },
  });
  
export default () => {
    const classes = useStyles();
    const conf = config();

    return(
    <div className={conf.root}>
    <>
        <Card className={classes.root} >
            <CardActionArea component = {NavLink} to ="/users">
                <img src={working} height="140" />
                <CardHeader title="Funcionários" />
                <CardContent>
                    Lista de funcionários e dados importantes como nome, email e telefone.
                </CardContent>
            </CardActionArea>
        </Card>
        <br></br>
        <Card className={classes.root}>
            <CardActionArea component = {NavLink} to ="/todos">                   
                <img src={todos} width="140" height="140"  />           
                <CardHeader title="Tarefas" />
                <CardContent>Atividades disponíveis na empresa.</CardContent>
            </CardActionArea>
        </Card>
        <br></br>
        <Card className={classes.root}>
            <CardActionArea>                   
                <img src={status} height="140"  /> 
                <CardHeader title="Status" />
                <CardContent>Dados estatisticos da situação das atividades propostas na empresa.</CardContent>
            </CardActionArea>
        </Card>
    </>
    </div>
    );
}