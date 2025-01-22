import app from "./app";

const PORT = process.env.PORT || 3000;

console.log("Before app.listen");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log("After app.listen");
