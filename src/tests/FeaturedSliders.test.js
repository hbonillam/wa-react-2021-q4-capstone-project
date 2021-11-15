import React from "react";
import {
  render,
  screen,
  cleanup,
  waitFor,
  getByText,
} from "@testing-library/react";
import HomePageComponent from "../components/HomePageComponent";
import { BrowserRouter as Router } from "react-router-dom";
//import App from "../App";

afterEach(cleanup);
const sliderTexts = [
  "AMAZING FINISHES - BEDROOM",
  "A GREAT STYLE - LIVING ROOM",
  "GREAT VERSATILITY - DINING ROOM",
];
const carouselTexts = [
  "Bed & Bath",
  "Lighting",
  "Kitchen",
  "Furniture",
  "Decorate & Organize",
];
const gridTexts = [
  "Grayton Armchair",
  "Tallulah Sofa Gray",
  "Tyler Poly Reclining Leather Armchair",
  "Thatcher Armchair",
  "Shay Armchair",
  "Spear Armchair",
  "Roscoe Armchair Gray",
  "Chesterfield Sofa Dark Brown",
  "Brown Turner Right Arm Armchair",
  "Balboa Armchair",
  "Comfort Aquare Arm Sofa",
  "PB Comfort Roll Arm Sofa",
  "Big Sur Modular Room",
  "Pearce Modular Sofa Left Arm",
  "Farmhouse King Size Bed",
  "Studded Armchair Irving",
];
it("renders slider correctly", async () => {
  render(
    <Router>
      <HomePageComponent />
    </Router>
  );
  await waitFor(() => {
    const sliderNode = screen.getByTestId("slider");
    expect(sliderNode.children).toHaveLength(3 * 2);
    sliderTexts.forEach((sliderText) => {
      const textNode = screen.getByText(sliderText);
      expect(textNode).toBeInTheDocument();
    });
  });
});
it("renders carousel correctly", async () => {
  render(
    <Router>
      <HomePageComponent />
    </Router>
  );
  await waitFor(() => {
    const carouselNode = screen.getByTestId("carousel");
    expect(carouselNode.children).toHaveLength(5);
    carouselTexts.forEach((carouselText) => {
      const textNode = screen.getByText(carouselText);
      expect(textNode).toBeInTheDocument();
    });
  });
});
it("renders grid correctly", async () => {
  render(
    <Router>
      <HomePageComponent />
    </Router>
  );
  await waitFor(() => {
    const gridNode = screen.getByTestId("grid");
    expect(gridNode.children).toHaveLength(16); //dfas
    gridTexts.forEach((gridText) => {
      const textNode = screen.getByText(`${gridText}`, { exact: false });
      expect(textNode).toBeInTheDocument();
    });
  });
});
