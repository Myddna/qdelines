import React, { lazy, Suspense } from 'react';

const LazyLineSet = lazy(() => import('./LineSet'));

const LineSet = props => (
  <Suspense fallback={null}>
    <LazyLineSet {...props} />
  </Suspense>
);

export default LineSet;
