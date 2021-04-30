import styled from 'styled-components';


const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: transparent;

`

const ContainerHeader = styled(Container)`  
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: 80px;
    font-size: 1.1em;
    color:white;
    text-align: center;
    font-family: 'Jaldi', sans-serif;
    flex-direction:column;

    p {
        font-size: 0.76em;
    }

    h1 {
        font-weight: 400;
    }

    ul {
        margin-top: 20px;
    }
    li {
        padding-top: 20px;
        background-color: transparent,
        border: 1px solid white,
        border-radius: 50,
        color: white,
        height: 48,
        padding: 30px,
        width: 350,
        font-family: Roboto,
        font-weight: 300,
        fontSize: 1.09em
    }

    h7 {
        margin-bottom: 30px;
        color: white;
    }

    footer {
        margin-top: 40px;
        font-size: 0.6em;
        font-family: 'Roboto', serif;
        color: white;
    }

    a:visited {
        color: white;
    }
    
`


export {Container, ContainerHeader}