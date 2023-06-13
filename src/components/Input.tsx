import React, { Ref, forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ type = "text", ...rest }, ref: Ref<HTMLInputElement>) => <input ref={ref} type={type} className="form-control" {...rest} />);

export default Input;
