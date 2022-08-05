import Form from "./Form/Form";
import { CssBaseline, Container, Paper, Box } from "@mui/material";

function App() {
  return (
    <>
    <CssBaseline />
    <Container component={Box} p={4}>
    <Paper component={Box} p={3}>
    <Form />
    </Paper>
    </Container>
    </>
  );
}

export default App;
