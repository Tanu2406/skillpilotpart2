const assert = require("node:assert/strict");
const { once } = require("node:events");
const test = require("node:test");
const app = require("./index");

test("GET / responds with exactly Hello World", async (t) => {
  const server = app.listen(0);
  await once(server, "listening");
  t.after(() => server.close());

  const address = server.address();
  const response = await fetch(`http://localhost:${address.port}/`);

  assert.equal(response.status, 200);
  assert.equal(await response.text(), "Hello World");
});
