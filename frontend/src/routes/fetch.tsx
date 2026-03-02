import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/fetch")({
  component: RouteComponent,
});

function RouteComponent() {
  const [data, setData] = useState<{ Hello: string }>({ Hello: "" });

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1>Fetch</h1>
      <p>{data.Hello}</p>
    </div>
  );
}
