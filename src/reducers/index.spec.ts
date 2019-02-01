import { CHANGED_CHROMOSOME, CHANGED_FEATURE, CHANGED_SEARCH, CHANGED_TEXT } from "../actions/index";
import * as Reducer from "./index";

describe("reducers", () => {
  describe("chromosomes_reducer", () => {
    it("should provide the initial state", () => {
      expect(Reducer.chromosomes_reducer(undefined, {})).toBe(Reducer.DEFAULT_CHROMOSOME);
    });

    it("should handle CHANGED_CHROMOSOME action", () => {
      expect(Reducer.chromosomes_reducer(Reducer.DEFAULT_CHROMOSOME, { type: CHANGED_CHROMOSOME, chromosome: "X" })).toBe("X");
    });

    it("should ignore unknown actions", () => {
      expect(Reducer.chromosomes_reducer(Reducer.DEFAULT_CHROMOSOME, { type: "unknown" })).toBe(Reducer.DEFAULT_CHROMOSOME);
    });
  });

  describe("features_reducer", () => {
    it("should provide the initial state", () => {
      expect(Reducer.features_reducer(undefined, {})).toBe(Reducer.DEFAULT_FEATURE);
    });

    it("should handle CHANGED_FEATURE action", () => {
      expect(Reducer.features_reducer(Reducer.DEFAULT_FEATURE, { type: CHANGED_FEATURE, feature: "BRG1" })).toBe("BRG1");
    });

    it("should ignore unknown actions", () => {
      expect(Reducer.features_reducer(Reducer.DEFAULT_FEATURE, { type: "unknown" })).toBe(Reducer.DEFAULT_FEATURE);
    });
  });

  describe("search_reducer", () => {
    it("should provide the initial state", () => {
      expect(Reducer.search_reducer(undefined, {})).toBe(Reducer.DEFAULT_SEARCH);
    });

    it("should handle CHANGED_SEARCH action", () => {
      expect(Reducer.search_reducer(Reducer.DEFAULT_SEARCH, { type: CHANGED_SEARCH, search: "Hoxa1" })).toBe("Hoxa1");
    });

    it("should ignore unknown actions", () => {
      expect(Reducer.search_reducer(Reducer.DEFAULT_SEARCH, { type: "unknown" })).toBe(Reducer.DEFAULT_SEARCH);
    });
  });

  describe("text_reducer", () => {
    it("should provide the initial state", () => {
      expect(Reducer.text_reducer(undefined, {})).toBe(Reducer.DEFAULT_TEXT);
    });

    it("should handle CHANGED_TEXT action", () => {
      expect(Reducer.text_reducer(Reducer.DEFAULT_TEXT, { type: CHANGED_TEXT, text: "Hoxa1" })).toBe("Hoxa1");
    });

    it("should ignore unknown actions", () => {
      expect(Reducer.text_reducer(Reducer.DEFAULT_TEXT, { type: "unknown" })).toBe(Reducer.DEFAULT_TEXT);
    });
  });
});
