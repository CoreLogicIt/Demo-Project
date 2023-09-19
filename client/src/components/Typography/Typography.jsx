import { Typography as TypographyComp } from "../../constants/MuiConstants";

import { useNavigate } from "react-router-dom";

import { handleView } from "../../utils/auth.utils";

const Typography = ({ text, variant, component, styles, view }) => {
  const navigate = useNavigate();

  return (
    <TypographyComp
      sx={styles}
      variant={variant}
      component={component}
      onClick={() => handleView(navigate, view)}
    >
      {text}
    </TypographyComp>
  );
};

export default Typography;
