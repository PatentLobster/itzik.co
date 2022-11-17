import dynamic from 'next/dynamic';

export const SliderDynamic = dynamic(
  () => import('./Slider' /* webpackChunkName: "Slider" */).then((mod) => mod.Slider),
  { ssr: false },
);