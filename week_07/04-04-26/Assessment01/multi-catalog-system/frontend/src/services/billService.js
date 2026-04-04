export const getSummary = async () => {
  const res = await fetch("http://localhost:5275/api/Bills/summary");
  return res.json();
};