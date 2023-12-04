import { http } from "../../src/plugins";

describe("http-client.plugin", () => {
  test("http-client.plugin.get() should return a string", async () => {
    const data = await http.get("https://jsonplaceholder.typicode.com/todos/1");

    expect(data).toStrictEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean), // Espera solamente un boolean indiferentemente si es true o false.
    });
  });

  test("http-client.plugin should have POST, PUT and DELETE methods", () => {
    expect(typeof http.post).toBe("function");
    expect(typeof http.put).toBe("function");
    expect(typeof http.delete).toBe("function");
  });
});
