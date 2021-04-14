import { render } from "enzyme";
import App from "./App";

describe("App Main Entry Component", () => {
  it("should render App component", () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  });
});
