import React, { lazy, Suspense } from 'react';

const LazyControlForm = lazy(() => import('./ControlForm'));

const ControlForm = props => (
  <Suspense fallback={null}>
    <LazyControlForm {...props} />
  </Suspense>
);

export default ControlForm;
