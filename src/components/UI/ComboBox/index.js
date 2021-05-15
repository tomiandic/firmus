import React from "react";
import { makeStyles, NoSsr } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import styles from "./style.js";
import { Check, Close } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ComboBox(props) {
  const updateLanguages = (value) => {
    value.forEach((item) => props.selectOptionHandler(item));
  };

  return (
    <Autocomplete
      multiple
      options={[...Object.keys(props.options)]}
      getOptionLabel={(option) => option}
      filterSelectedOptions
      onChange={(event, value) => console.log(event)}
      renderInput={(params) => <TextField {...params} variant="filled" />}
    />
  );
}
