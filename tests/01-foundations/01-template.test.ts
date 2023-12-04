import { emailTemplate } from "../../src/01-foundations/01-templates";

describe("01-template", () => {
  test('emailTemplate should contain "div" and "h1" tag', () => {
    expect(emailTemplate).toContain("<div>");
    expect(emailTemplate).toContain("</div>");
    expect(emailTemplate).toContain("</h1>");
    expect(emailTemplate).toContain("</h1>");
  });

  test("emailTemplate should contain a greeting", () => {
    expect(emailTemplate.toLocaleLowerCase()).toContain(
      "hola mundo, ".toLowerCase()
    );
  });

  test("emailTemplate should contain {{name}}", () => {
    // expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toContain("{{name}}");
  });
});
