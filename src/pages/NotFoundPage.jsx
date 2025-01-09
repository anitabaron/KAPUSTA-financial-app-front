
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <Link to="/">
        <h2>Something went wrong... Click me to back.</h2>
      </Link>
    </>
  );
}
