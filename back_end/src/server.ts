import { app, port } from "./app.js";

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
