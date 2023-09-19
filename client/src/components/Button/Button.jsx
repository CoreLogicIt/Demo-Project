import {Button as ButtonComp} from "../../constants/MuiConstants"

const Button = ({type,variant,text}) => {

    return (
        <ButtonComp  type={type} sx={{width:"100%"}} variant={variant}>{text}</ButtonComp>
    )
}

export default Button