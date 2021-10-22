import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

const dadosEntrega = {
    nome: "",
    sobrenome: "", 
    cpf: "", 
    endereco: "", 
    cidade: "",
    estado: "",
    cep: ""
}

function FormEntregaApp(){

    const [ fields, setFields ] = useState(dadosEntrega);

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(fields);
    }

    function handleChange(event) {
        const fieldName = event.target.name;
        const value = event.target.value;
        setFields({ ...fields, [fieldName]: value });
    }

    return (
        <Box component="form" onSubmit={ handleSubmit } sx={{ mt: 5 }}>
            <Typography variant="h4">
                Nova Entrega
            </Typography>

            <Grid container spacing={2} sx={{ mt: 5 }}>

                <Grid item sm={4}>
                    <TextField label="Nome" variant="outlined" name="nome" fullWidth onChange={ handleChange } value={dadosEntrega.nome} />
                </Grid>

                <Grid item sm={8}>
                    <TextField label="Sobrenome" variant="outlined" name="sobrenome" fullWidth onChange={ handleChange } value={dadosEntrega.sobrenome} />
                </Grid>

                <Grid item sm={12}>
                    <TextField label="CPF" variant="outlined" name="cpf" fullWidth onChange={ handleChange } value={dadosEntrega.cpf} />
                </Grid>

                <Grid item sm={5}>
                    <TextField label="Endereço" variant="outlined" name="endereco" fullWidth onChange={ handleChange } value={dadosEntrega.endereco} />
                </Grid>

                <Grid item sm={3}>
                    <TextField label="Cidade" variant="outlined" name="cidade" fullWidth onChange={ handleChange } value={dadosEntrega.cidade} />
                </Grid>

                <Grid item sm={2}>
                    <TextField label="Estado" variant="outlined" name="estado" fullWidth onChange={ handleChange } value={dadosEntrega.estado} />
                </Grid>

                <Grid item sm={2}>
                    <TextField label="CEP" variant="outlined" name="cep" fullWidth onChange={ handleChange } value={dadosEntrega.cep} />
                </Grid>

                <Grid item sm={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large" 
                    >
                        Cadastrar Entrega
                    </Button> 
                </Grid>
                
            </Grid>
        </Box>
    )

}

export default FormEntregaApp;