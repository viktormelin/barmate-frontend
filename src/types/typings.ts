import { LayoutKeys } from '@/components/Layouts/Layouts';
import { NextComponentType, NextPage, NextPageContext } from 'next';
import { AppProps } from 'next/app';

export interface Box {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
}

export interface Grid {
  big: Box;
  small: Box[];
}

export type MyPage<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: LayoutKeys;
};

export type MyAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & {
    Layout: LayoutKeys;
  };
};
