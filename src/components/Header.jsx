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
                <p>SEMINÁRIO DE OFICIAIS - 2021/2022</p>
                <p style={{color: 'white', padding: '0.5rem', fontSize:"1.5rem"}}>Contato: (11) 2090-1288 - Comissão de Ética - Pastor Edmilson Santos</p>


                <ContainerSup>

                <ContainerContent>
                <h2>CANDIDATOS APROVADOS</h2>
                  <ul>
                    <li>ADEMIR ALVES DA CUNHA</li>
                    <li>ADILSON DE SOUZA SILVA</li>
                    <li>ALAN CARLOS RODRIGUES</li>
                    <li>ANDERSON CLAITON COCENZO DE CARVALHO</li>
                    <li>ANDRE AUGUSTO DA SILVA GONÇALVES DOS SANTOS</li>
                    <li>ANDRÉ CARVALHO TOSTES</li>
                    <li>ANTÔNIO DA CONCEIÇÃO REQUENA JUNIOR</li>
                    <li>ANTONIO DO NASCIMENTO</li>
                    <li>ANTONIO GOMES CALADO</li>
                    <li>BRUNO MANOEL CASATTI FERREIRA</li>
                    <li>BRUNO MARTINS CLARA DO NASCIMENTO</li>
                    <li>CARLOS ALBERTO BALIERO</li>
                    <li>CÁSSIO BARBOSA DA SILVA</li>
                    <li>CICERO SANTOS DE LIMA</li>
                    <li>CLAUDIA CRISTINA SILVA DOS REIS</li>
                    <li>CLEBERSON DOS ANJOS MARINHO</li>
                    <li>CRISTIANO MARCOS DE ARAUJO VICENTE</li>
                    <li>DAVID DE JESUS FERREIRA</li>
                    <li>DEUSDETE JUNIOR DIAS SANTOS</li>
                    <li>DIEGO MESSIAS POPST</li>
                    <li>DIEGO PATRICK MOLINA LOREDO</li>
                    <li>DIÓGENES FELIX DOS SANTOS</li>
                    <li>EDIMA CARNEIRO DA SILVA</li>
                    <li>EDJALMA FARIAS DE LIMA</li>
                    <li>EDSON PEREIRA</li>
                    <li>ELIAS MOISES DA SILVA</li>
                    <li>ELIAS TERTO LEANDRO JUNIOR</li>
                    <li>ELISEU GROTO JUNIOR</li>
                    <li>ELIVELTON SILVEIRA SOUZA</li>
                    <li>EMERSON DE LIMA BEZERRA</li>
                    <li>EVANILDO ROSA DA SILVA</li>
                    <li>FERNANDO JOSE ALVES BORGES</li>
                    <li>FRANCISCO KELSON DE MORAES</li>
                    <li>FRANKLIN EVERTON DO ESPIRITO SANTO</li>
                    <li>GILIARD JOSE ANDRADE DA SILVA</li>
                    <li>HARLEN FERRARI RIBEIRO</li>
                    <li>IRANILSON NELLO DA PALMA</li>
                    <li>ISRAEL XAVIER DA SILVA MENDES</li>
                    <li>IVANILDO ALVES DA SILVA</li>
                    <li>JAN ALVES DAMACENO</li>
                    <li>JANISSON ANTONIO DE SOUZA</li>
                    <li>JEFERSON COUTO DOS SANTOS</li>
                    <li>JEFFERSON SOLER DE SOUZA</li>
                    <li>JOSE ALVES DE FRANÇA</li>
                    <li>JOSE DA PENHA SILVA</li>
                    <li>JOSÉ FERNANDO CORREIA MOREIRA</li>
                    <li>JOSÉ LUCAS VIEIRA</li>
                    <li>JOSE WILSON DA SILVA PEREIRA</li>
                    <li>JOSIEL DOS SANTOS</li>
                    <li>JOVELINO FERREIRA</li>
                    <li>LEANDRO AURELIANO DA SILVA</li>
                    <li>LEANDRO DE OLIVEIRA</li>
                    <li>LUIS MARCOS ARAUJO</li>
                    <li>LUIZ CLAUDIO PEREIRA DE SOUZA FILHO</li>
                    <li>LUKAS RAFAEL MARTINS DA SILVA</li>
                    <li>MACIEL CARLOS MARIANO DE OLIVEIRA</li>
                    <li>MARCOS LÁZARO FELICIANO</li>
                    <li>NIVALDO DANIEL FREIRES</li>
                    <li>OSVALDO FIGUEIREDO SOUSA</li>
                    <li>PATRIC PINHEIRO</li>
                    <li>PEDRO LUIZ PEREIRA</li>
                    <li>RAQUEL MOREIRA CAMARGO DA FONSECA</li>
                    <li>REGINALDO DE MIRANDA</li>
                    <li>RENAN RODRIGUES </li>
                    <li> RENATO EVARISTO DOS SANTOS</li>
                    <li>RENATO MONTEIRO MOREIRA</li>
                    <li> RICARDO DIONIZIO DE SOUZA</li>
                    <li>RICARDO FERNADES DE GOÉS</li>
                    <li>RICARDO FERREIRA DINIZ DO NASCIMENTO</li>
                    <li>ROBERTO FERREIRA GOMES</li>
                    <li>ROBERTO LEAL PIRES MOTA</li>
                    <li>RODOLPHO TUXEN</li>
                    <li>RODRIGO AGUIAR LEÃO</li>
                    <li>ROGÉRIO BATISTA DE OLIVEIRA</li>
                    <li>RUBENS ALVES DE SOUZA</li>
                    <li>SAMUEL DE SOUZA PEREIRA</li>
                    <li>SAMUEL GARCIA DE JESUS</li>
                    <li>SAULO SALES DA SILVA</li>
                    <li>VALDIR RODRIGUES DA SILVA</li>
                    <li>VALÉRIO CONCEIÇÃO DA SILVA</li>
                    <li>WAGNER DA SILVA</li>
                    <li>WALDENILSON DA SILVA</li>
                    <li>WESLEY RAFAEL DOS SANTOS</li>
                    <li>WESLLEY ALMEIDA ALVES</li>
                  </ul>
                </ContainerContent>

                </ContainerSup>

                </div>

                <footer>
                    
                </footer>
            </ContainerHeader>


    )
}
