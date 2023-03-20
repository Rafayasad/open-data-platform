import React, { memo, useState } from "react";
import { colors } from "../../../utils/colors";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useCallback } from "react";
import './style.css';
import Heading from "../Heading";

const TextInput = memo((props) => {

  const { t } = useTranslation();

  const { placeholder, type, onChange, value } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = useCallback(() => setShowPassword((show) => !show), [showPassword]);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const passwordValidationText = [
    'Include at least 1 uppercase letter',
    'Include at least 1 lowercase letter',
    'Must be at least 8 digits long',
    'Include at least 1 special character (!@#$%^&*)',
    'Maximum length must be 20 digits',
    'Must not contain your username or dictionary words'
  ]
  const [onFocusPassword, setOnFocusPassword] = useState(false);
  const toggle = useCallback(() => setOnFocusPassword(!onFocusPassword));

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
        onFocus={toggle}
        onBlur={toggle}
        id="standard-adornment-password"
        sx={{
          ':before': { borderBottomColor: 'black' },
          ':after': { borderBottomColor: 'black' },
        }}
        type={!showPassword && (placeholder === t("password") || placeholder === t("rePwd")) ? "password" : placeholder != t("password") && type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        endAdornment={
          <InputAdornment>
            {
              (placeholder === t("password") || placeholder === t("rePwd")) &&
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
      {onFocusPassword && placeholder === t("password") &&
        <div className="mt-3">
          {passwordValidationText?.map(item => <p className="m-0" style={{ color: colors.green }}><small>{item}</small></p>)}
        </div>
      }
    </FormControl>



  );
});

export default TextInput;
