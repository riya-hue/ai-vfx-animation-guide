export default function Output({ result }) {
  if (!result) return null;

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-xl font-semibold mb-2">AI Explanation</h2>
      <p>{result}</p>
    </div>
  );
}
