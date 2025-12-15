import * as z from "zod";
import { rgxEmail, rgxPrice, rgxRequired } from "./regex";

export const VRequired = z
  .string({ message: rgxRequired.msg.required })
  .regex(rgxRequired.regex, rgxRequired.msg.required);
export const VOptional = z.string().optional();
export const VNumbOnly = z
  .string()
  .regex(rgxRequired.regex, rgxRequired.msg.required);
export const VEmail = z
  .string({ message: rgxEmail.msg.required })
  .regex(rgxEmail.regex, rgxEmail.msg.invalid);
export const VPrice = z
  .string({ message: rgxPrice.msg.required })
  .regex(rgxPrice.regex, rgxPrice.msg.invalid);
