import { css } from "@emotion/css";

const foo = css`
  padding: 0.5em 48px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4em;
  text-align: center;
  color: ghostwhite;
  border: none;
  box-shadow: 4px 4px 12px 0px rgb(0, 0, 0, 50%);
  transition: 0.3s;
  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }
`;

export const Button = (props) => {
  return <button className={foo}>{props.text}</button>;
};
