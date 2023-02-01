import Alert from '@mui/material/Alert';

export const Error = ({errorMessage}) =>{
    return (
    <Alert variant="outlined" severity="error">
    {errorMessage}
    </Alert>
)};