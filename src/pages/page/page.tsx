import { lazy, Suspense, type FC } from "react";

import { PreloaderUI } from "../../components/ui/preloader";

import type { TPageProps } from "./types";
import { PageProvider } from "./page-provider.tsx";

const PageUI = lazy(() => import("../ui/page/page.tsx"));

export const Page: FC<TPageProps> = ({ children, className }) => {
  const pageContextValue = { className };

  return (
    <Suspense fallback={<PreloaderUI />}>
      <PageProvider value={pageContextValue}>
        <PageUI>{children}</PageUI>
      </PageProvider>
    </Suspense>
  );
};
