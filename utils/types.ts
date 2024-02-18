import { SVGProps } from 'react';

export interface TitleContent {
  title: string | string[];
  content: string | string[];
};

export type IconComponent = React.ComponentType<SVGProps<SVGSVGElement>>;