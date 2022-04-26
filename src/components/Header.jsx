import React from 'react'
import {Container, ContainerContent, ContainerHeader, ContainerSup} from '../style/index.js'
import Avatar from './Avatar'
import Button from './Button'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';



import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      fontSize: '1.02em',
      padding: '5px',
    },
  });
  

export default function Header() {
    const classes = useStyles();
    const urlForm = 'https://forms.gle/j1EPkG5W21umyDh36'
    const urlWhatsApp = 'https://api.whatsapp.com/send?phone=5511974394393&text=Ol%C3%A1%2C%20Paz%20do%20Senhor!%20Poderia%20me%20ajudar%20com%20a%20minha%20inscri%C3%A7%C3%A3o%3F%20(CURSO%20DE%20OFICIAIS%202021)'
    const urlEdital = 'https://forms.gle/H2eRWFmDK5aKnbBL6'


    return (
    

            <ContainerHeader>
                 <Avatar/>
                <div>

                <h1>CONVENÇÃO OBPC SP</h1>
                <p>SEMINÁRIO DE MINISTROS - 2021/2022</p>

                <ul>
                    <li><a href={urlEdital} target="_blank"><Button text={"EDITAL"} icon={<MenuBookIcon className={classes.root}></MenuBookIcon>}></Button></a></li>
                    <li><a href={urlForm} target="_blank"><Button text={"FAÇA SUA INSCRIÇÃO"} icon={<AssignmentIcon className={classes.root}></AssignmentIcon>}></Button></a></li>
                    <li><a href={urlWhatsApp} target="_blank"><Button text={"DÚVIDAS"} icon={<WhatsAppIcon className={classes.root}></WhatsAppIcon>}></Button></a></li>
                </ul>

                </div>

                <footer>
                    
                </footer>
            </ContainerHeader>


    )
}
