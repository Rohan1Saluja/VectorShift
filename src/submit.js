// submit.js

import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });
      const data = await response.json();
      alert(
        `Number of Nodes: ${data.num_nodes}\nNumber of Edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`
      );
    } catch {
      alert("Missing Data");
      console.log("Nodes; ", nodes);
      console.log("Edges; ", edges);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <button
        className="border rounded-md py-1 px-2 max-w-fit hover:shadow-sm"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};
