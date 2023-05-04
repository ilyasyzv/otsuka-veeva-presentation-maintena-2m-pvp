import React, { useState, Suspense } from 'react';
import { Route } from '@organisms';
import { Page, ErrorBoundary } from '@pages';
import { Layout } from '@templates';
import { PageContext, PageProvider } from '@/context/PageContext';
import { ISIModalProvider } from '@/context/ISIModalContext';

export const AppStorybook = ({ path, background = 'default', components }) => {
  const [currentPage, setCurrentPage] = useState(path);

  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading application...</h1>}>
        <PageProvider currPage={path}>
          <ISIModalProvider>
            <Layout>
              <Route
                path={`/${path}`}
                component={() => (
                  <Page background={background} component={components} />
                )}
              />
            </Layout>
          </ISIModalProvider>
        </PageProvider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppStorybook;
