import { h } from "preact";
import Header from "../components/header";
import { mount } from "enzyme";

describe("Initial Test of the Header", () => {
    test("Header renders 3 nav items", () => {
        const context = mount(<Header />);
        expect(context.find("h1").text()).toBe("App");
    });
});
