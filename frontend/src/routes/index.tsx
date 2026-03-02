import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import axios from "axios";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        setValue(res.data.title);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-full flex flex-col">
      {loading ? (
        <p className="text-center my-12">Loading...</p>
      ) : (
        <>
          <h1 className="text-center my-12">Placeholder</h1>
          <p className="text-center">Title: {value}</p>
          <img
            src="/src/assets/react.svg"
            alt="Logo"
            className="mx-auto my-4 w-32 h-32 mt-4 animate-spin [animation-duration:5s]"
          />
        </>
      )}
    </div>
  );
}
