import { VueWrapper, mount } from "@vue/test-utils";
import OlMap from "../OlMap.vue";
import { beforeAll, describe, expect, it } from "vitest";
import { toLonLat } from "ol/proj";
import type { Map } from "ol";
import type { Coordinate } from "ol/coordinate";
import { FullScreen, Zoom } from "ol/control";
import "../../../../tests/_setup";

describe("OlMap.vue", () => {
  let mapComponent: VueWrapper;
  beforeAll(() => {
    mapComponent = mount(OlMap, {
      props: {
        controls: [new FullScreen({}), new Zoom({})],
      },
    });
  });
  it("passes props to the map constructor", () => {
    const olViewportWrapepr = mapComponent.find(".ol-viewport");
    expect(olViewportWrapepr.exists());
  });
});
