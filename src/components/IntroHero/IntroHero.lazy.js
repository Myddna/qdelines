import React, { lazy, Suspense } from 'react';

const LazyIntroHero = lazy(() => import('./IntroHero'));

const IntroHero = props => (
  <Suspense fallback={null}>
    <LazyIntroHero {...props} />
  </Suspense>
);

export default IntroHero;
