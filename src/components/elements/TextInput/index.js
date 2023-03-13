import React, { memo, useState } from "react";
// import { Form, InputGroup } from "react-bootstrap";
import { locales } from "../../../i18n/helper";
import i18n from "../../../i18n/i18n";
import { colors } from "../../../utils/colors";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";

const TextInput = memo((props) => {

  const { t } = useTranslation();

  const { placeholder, type, onChange, value } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    // <Form.Group
    //   style={{ position: "relative" }}
    //   className="d-flex justify-content-between align-items-center">
    //   <Form.Floating
    //     className="my-2 w-100"
    //     label={placeholder}
    //     style={{ color: colors.gray, fontSize: '13px' }}
    //   >
    //     <Form.Control
    //       className="px-0 m-0 bg-secondary"
    //       id="floatingInputCustom"
    //       type={type}
    //       placeholder={placeholder}
    //       dir="rtl"
    //       onChange={(e) => onChange(e.target.value)}
    //       style={{
    //         border: 0,
    //         borderRadius: 0,
    //         borderBottom: value ? "1.5px solid " + colors.black : "1.5px solid " + colors.light_gray,
    //         boxShadow: "none",
    //         fontSize: '13px',
    //         direction: i18n.language === locales.AR ? "rtl" : "ltr",
    //         margin: 0
    //       }}
    //     /> 
    //     <label className="px-0 pt-4" htmlFor="floatingInputCustom">
    //       <p className="m-0">{placeholder}</p>
    //     </label>
    //   </Form.Floating>
    //   {placeholder === t("password")
    //     &&
    //     <div
    //       className="mx-2 start-0 d-flex justify-content-end align-items-center"
    //       style={{ position: "absolute" }}>
    //       <AiOutlineEye size={18} />
    //     </div>
    //   }
    // </Form.Group>
    <FormControl sx={{ width: '100%' }} variant="standard" className="my-2">
      <InputLabel htmlFor="standard-adornment-password">{placeholder}</InputLabel>
      <Input
        id="standard-adornment-password"
        type={placeholder === t("password") && !showPassword ? "password" : "text"}
        onChange={(e) => onChange(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            {placeholder === t("password") &&
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </IconButton>
            }
          </InputAdornment>
        }
      />
    </FormControl>
  );
});

export default TextInput;
