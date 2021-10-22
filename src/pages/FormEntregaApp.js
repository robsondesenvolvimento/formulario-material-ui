import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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
                    <TextField label="Nome" variant="outlined" name="nome" required fullWidth onChange={ handleChange } value={fields.nome} />
                </Grid>

                <Grid item sm={8}>
                    <TextField label="Sobrenome" variant="outlined" name="sobrenome" fullWidth onChange={ handleChange } value={fields.sobrenome} />
                </Grid>

                <Grid item sm={12}>
                    <TextField label="CPF" variant="outlined" name="cpf" helperText="Insira o CPF sem separadores" required fullWidth onChange={ handleChange } value={fields.cpf} />
                </Grid>

                <Grid item sm={4}>
                    <TextField label="Endereço" variant="outlined" name="endereco" fullWidth onChange={ handleChange } value={fields.endereco} />
                </Grid>

                <Grid item sm={3}>
                    <TextField label="Cidade" variant="outlined" name="cidade" fullWidth onChange={ handleChange } value={fields.cidade} />
                </Grid>

                <Grid item sm={2}>
                    <TextField label="Estado" variant="outlined" name="estado" fullWidth onChange={ handleChange } value={fields.estado} />
                </Grid>

                <Grid item sm={3}>
                    <TextField label="CEP" variant="outlined" name="cep" helperText="Insira o CEP sem separadores" fullWidth onChange={ handleChange } value={fields.cep} />
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