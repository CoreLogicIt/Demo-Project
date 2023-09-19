import { TextField } from "@mui/material"

const Input = ({ type, name, label, value,variant,onChangeHandler }) => {
    return (
        <TextField required sx={{width:"100%",margin:"1em 0em",fontFamily:"Roboto Sans-Serif",bgcolor:"white"}} type={type} name={name} label={label} value={value} variant={variant} onChange={onChangeHandler}  />
    )
}

export default Input