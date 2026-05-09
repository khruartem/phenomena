import { lazy, Suspense, type FC } from "react";

import { PreloaderUI } from "../../components/ui/preloader";
import { ScrollToHash } from "../../components/scroll-to-hash";

import type { TPageProps } from "./types";

import { PageProvider } from "./page-provider.tsx";

const PageUI = lazy(() => import("../ui/page/page.tsx"));

export const Page: FC<TPageProps> = ({
  children,
  noHeader,
  noFooter,
  className,
}) => {
  const pageContextValue = { className, noHeader, noFooter };

  return (
    <Suspense fallback={<PreloaderUI />}>
      <PageProvider value={pageContextValue}>
        <PageUI>{children}</PageUI>
        <ScrollToHash />
      </PageProvider>
    </Suspense>
  );
};
