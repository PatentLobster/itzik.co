import dynamic from 'next/dynamic';

export const SkillsDynamic = dynamic(
  () => import('./Skills' /* webpackChunkName: "Skills" */).then((mod) => mod.Skills),
  { ssr: false },
);