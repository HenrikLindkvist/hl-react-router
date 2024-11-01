import { useParams, useOutletContext } from "react-router-dom";

export function Book() {
  const { id } = useParams();
  const { hello } = useOutletContext();
  return (
    <h1>
      Book {id}
      <span> <small>{hello}</small></span>
    </h1>
  );
}
