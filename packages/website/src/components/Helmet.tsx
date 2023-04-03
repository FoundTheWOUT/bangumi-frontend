import React from 'react';
import { Helmet as BaseHelmet, type HelmetProps } from 'react-helmet-async';

import { useNotify } from '@bangumi/website/hooks/use-notify.tsx';

const Helmet = (props: React.PropsWithChildren<HelmetProps>) => {
  const { noticeCount } = useNotify() ?? { noticeCount: 0 };

  return (
    <BaseHelmet
      defaultTitle='Bangumi 番组计划'
      titleTemplate={
        noticeCount ? `(${noticeCount}) %s | Bangumi 番组计划` : `%s | Bangumi 番组计划`
      }
      {...props}
    />
  );
};

export default Helmet;
