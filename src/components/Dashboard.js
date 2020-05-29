import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, CardHeader,CardActionArea} from '@material-ui/core';
import working from './images/funcionarios.jpg';
import todos from './images/tarefas.jpg';
import { NavLink } from "react-router-dom";
import {useMediaQuery} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStylesSmall = makeStyles({
  root: {
      maxWidth: 60,
      padding: '0 30px',
      margin:'20px 20px',
      height:150,
  },
  background: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      order: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      textAlign:"center",
      maxHeight:'140px',
      padding: '10px 50px',
      margin:'10px 10px',
  },
});
const configSmall = makeStyles({
  root: {    
      borderRadius: 5,
      padding: '00px 10px',
      display: 'flex',
      fontSize:'12px',
  },
});
const stySmall = makeStyles({
  root: {    
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Montserrat-Bold',
      fontSize: 16,
      fontWeight: undefined,
  },
});
const useStyles = makeStyles({
    root: {
        width: 345,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        order: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        textAlign:'center',
        margin:'20px 20px',
        maxHeight:345,
    },
  });
  const config = makeStyles({
    root: {    
        borderRadius: 5,
        textAlign:'center',
        padding: '00px 160px',
        display: 'flex',
    },
  });
  const sty = makeStyles({
    root: {    
        textAlign: 'center',
        color: 'white',
        fontSize:'40px'
    },
  });
export default () => {
    const classes = useStyles();
    const conf = config();
    const st = sty();
    const confSmall = configSmall();
    const stSmall = stySmall();
    const classesSmall = useStylesSmall();
    const isSmall = useMediaQuery(theme=>theme.breakpoints.down('sm'));
    return(
      isSmall ? (
        <div>
          <h1 className={stSmall.root}>Process Manager</h1>
          <div className={confSmall.root}>
          <>
              <Card className={classesSmall.background} >
                  <CardActionArea component = {NavLink} to ="/users">
                      <img src={working} alt="" width="100" height="100"/>
                      <CardContent>
                        <Typography component="div">
                          <Box fontSize={15} textAlign="left">Funcionários</Box>
                        </Typography>
                      </CardContent>
                  </CardActionArea>
              </Card>
              <br></br>
              <Card className={classesSmall.background}>
                  <CardActionArea component = {NavLink} to ="/todos">                   
                      <img src={todos} alt="" width="100" height="100"  />           
                      <CardContent>
                        <Typography component="div">
                          <Box fontSize={15} textAlign="left">Tarefas</Box>
                        </Typography>
                      </CardContent>
                  </CardActionArea>
              </Card>
          </>
          </div>
        </div>
      ) : (
      <div>
        <h1 className={st.root}>Process Manager</h1>
        <div className={conf.root}>
        <>
            <Card className={classes.root} >
                <CardActionArea component = {NavLink} to ="/users">
                    <img src={working} alt="" height="140" />
                    <CardHeader title="Funcionários" />
                    <CardContent>
                        Lista de funcionários e dados importantes como nome, email e telefone.
                    </CardContent>
                </CardActionArea>
            </Card>
            <br></br>
            <Card className={classes.root}>
                <CardActionArea component = {NavLink} to ="/todos">                   
                    <img src={todos} alt="" height="140"  />           
                    <CardHeader title="Tarefas" />
                    <CardContent>Atividades disponíveis na empresa.</CardContent>
                </CardActionArea>
            </Card>
        </>
        </div>
    </div>
    )
    );
}