import React, { useState, Suspense } from 'react';
import { Route } from '@organisms';
import { Page, ErrorBoundary } from '@pages';
import { Layout } from '@templates';
import { PageContext } from '@/context/PageContext';

export const AppStorybook = ({ path, background = 'default', components }) => {
  const [currentPage, setCurrentPage] = useState(path);

  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading application...</h1>}>
        <PageContext.Provider value={[currentPage, setCurrentPage]}>
          <Layout>
            <Route
              path={`/${path}`}
              component={() => (
                <Page background={background} component={components} />
              )}
            />
          </Layout>
        </PageContext.Provider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppStorybook;
