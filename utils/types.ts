import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { SVGProps } from 'react';

export interface TitleContent {
  title: string | string[];
  content: string | string[];
};

export type IconComponent = React.ComponentType<SVGProps<SVGSVGElement>>;

export interface ImageSlideProps {
  src: string | StaticImport,
  alt: string,
  header?: string,
  desc?: string
}

export interface QouteContent {
  comment: string
  imgSrc: string | StaticImport
  name: string
  role?: string
}