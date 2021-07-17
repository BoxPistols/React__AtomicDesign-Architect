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

// https://zenn.dev/yukiyohure/articles/32801c0c6bf147
export const Button = ({ onClick, child, ...props }) => {
  return (
    <button className={foo} onClick={onClick}>
      {child}
    </button>
  );
};
