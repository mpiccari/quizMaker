import { Answer } from "./answer.model";

export interface UserQuestion {
  text: string;
  answers: Answer[];
}
