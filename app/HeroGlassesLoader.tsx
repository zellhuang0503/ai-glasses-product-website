"use client";

import { lazy, Suspense } from "react";

const HeroGlasses = lazy(() =>
  import("./HeroGlasses").then((module) => ({ default: module.HeroGlasses })),
);

export function HeroGlassesLoader() {
  return (
    <Suspense
      fallback={
        <div className="heroProduct heroProductLoading" aria-label="AI 眼鏡 3D 展示載入中">
          <span />
        </div>
      }
    >
      <HeroGlasses />
    </Suspense>
  );
}
