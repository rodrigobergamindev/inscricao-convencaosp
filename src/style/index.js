import styled from 'styled-components';


const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: transparent;

    @media only screen and (max-width: 600px) {
        padding: 1rem;
}
    
`

const ContainerSup = styled.div`

    display: grid;
    grid-template-columns: repeat(2,1fr);

    grid-gap: 60px;

    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(1,1fr);
}
`

const ContainerContent = styled.div`
    
    border-radius: 7px;
    margin-top: 2rem;
    height: 100%;

    ul {
        margin: 0;
        padding:0;
        
    }

    li {
        padding: 0.5rem;
        border: 1px solid #A0AEC0;
    }

    h2 {
        font-size: 1.2rem;
        background-color:#25D366;
        padding: 0.75rem;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
    }
`

const ContainerHeader = styled(Container)`  
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    
    
    font-size: 1.1em;
    color:white;
    text-align: center;
    font-family: 'Jaldi', sans-serif;
    flex-direction:column;

    p {
        font-size: 0.9em;
    }

    h1 {
        font-weight: 400;
    }


    a:visited {
        color: white;
    }
    
`


export {Container, ContainerHeader, ContainerContent, ContainerSup}