import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/teste")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p className="text-green-500">Hello!</p>
      <button>Click me</button>
      <Link to="/">Go Home</Link>
    </div>
  );
}
