import React, { useState } from "react";
import Rating from "@mui/material/Rating";

type Props = {};

const StarRating = (props: Props) => {
  const [value, setValue] = useState<number | null>(0);
  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
};

export default StarRating;
