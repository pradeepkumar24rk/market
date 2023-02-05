import styled from "styled-components"



const Container = styled.div`
// width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255, 255, 255,0.5),
                           rgba(255, 255, 255,0.5));
display:flex;
justify-content:center;
align-items:center;
overflow-y:hidden;


`;

const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color:white;


`;
const Link = styled.a`
margin: 5px 0px;
font-size:12px;
text-decoration:underline;
`

const Form = styled.form`
display:flex;
flex-direction:column;

`;

const Title = styled.h1`
font-size:24px;
font-weight:300;

`;

const Input = styled.input`
flex: 1;
min-width:40%;
margin:10px  0px;
padding:10px;

`;


const Button = styled.button`

width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;

`;


const Login = () => {
  return (
   <Container>
    <Wrapper>
        <Title>Sign In</Title>
        <Form>
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
          
             <Button>
                LOGIN
            </Button>
            <Link>Do not remember your password?</Link>
            <Link>Create a New account</Link>
        </Form>
    </Wrapper>
   </Container>
  )
}


export default Login



