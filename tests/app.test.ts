describe("App", () => {
  test("should be 30", () => {
    // 1. Arrange (Organizar / Preparar)
    const num1 = 10;
    const num2 = 20;

    // 2. Act (Actuar)
    const result = num1 + num2;

    // 3. Assert (Resultado)
    expect(result).toBe(30);
  });
});
