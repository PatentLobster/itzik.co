import dynamic from 'next/dynamic';

export const FooterDynamic = dynamic(
  () => import('./Footer' /* webpackChunkName: "Footer" */).then((mod) => mod.Footer),
  { ssr: false },
);