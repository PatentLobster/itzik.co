import dynamic from 'next/dynamic';

export const ContactDynamic = dynamic(
  () => import('./Contact' /* webpackChunkName: "Contact" */).then((mod) => mod.Contact),
  { ssr: false },
);