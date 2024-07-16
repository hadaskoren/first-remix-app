import { Link } from "remix";

export default function AdminIndex() {
  return (
    <p>
      <Link to="new">Create a New Cool Post</Link>
      <p>More text</p>
      <p>More</p>
    </p>
  );
}