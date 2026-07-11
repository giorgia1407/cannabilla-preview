"use client";

import { GiuliaProvider, useGiulia } from "@/lib/giulia-context";
import { GiuliaAvatar } from "./GiuliaAvatar";
import { GiuliaTeaser } from "./GiuliaTeaser";
import { GiuliaDrawer } from "./GiuliaDrawer";

function GiuliaSurface() {
  const { ready, widgetHidden } = useGiulia();
  // Wait for hydration so the dismissed-for-7-days state is known before painting.
  if (!ready || widgetHidden) return null;
  return (
    <>
      <GiuliaAvatar />
      <GiuliaTeaser />
      <GiuliaDrawer />
    </>
  );
}

/** Entry point: avatar persistente + teaser + drawer, con provider di stato. */
export function GiuliaWidget() {
  return (
    <GiuliaProvider>
      <GiuliaSurface />
    </GiuliaProvider>
  );
}
