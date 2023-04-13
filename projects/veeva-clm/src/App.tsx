import React, { useState, Suspense } from 'react';
import { Route } from '@organisms';
import { Page, ErrorBoundary } from '@pages';
import { Layout } from '@templates';
import { PageContext } from '@/context/PageContext';
import './App.scss';

import A_0_Home from '@/content/pages/A.0.Home/index.mdx';
import A_1_0_Executive_summary from '@/content/pages/A.1.0_Executive_summary/index.mdx';
import A_2_1_X_S_Overview from '@/content/pages/A.2.1.X_S_Overview/index.mdx';
import A_2_1_1_S_Overview from '@/content/pages/A.2.1.1_S_Overview/index.mdx';
import A_2_1_2_S_Overview from '@/content/pages/A.2.1.2_S_Overview/index.mdx';
import A_2_1_3_S_Overview from '@/content/pages/A.2.1.3_S_Overview/index.mdx';
import A_2_2_X_B_Overview from '@/content/pages/A.2.2.X_B_Overview/index.mdx';
import A_2_3_X_LAIs from '@/content/pages/A.2.3.X_LAIs/index.mdx';
import A_2_4_Summary from '@/content/pages/A.2.4_Summary/index.mdx';
import A_3_0_Clinical_profile from '@/content/pages/A.3.0_Clinical_profile/index.mdx';
import A_3_1_Clinical_overview from '@/content/pages/A.3.1_Clinical_overview/index.mdx';
import A_3_2_X_Efficacy from '@/content/pages/A.3.2.X_Efficacy/index.mdx';
import A_3_4_Dosing from '@/content/pages/A.3.4_Dosing/index.mdx';
import A_3_5_X_Additional from '@/content/pages/A.3.5.X_Additional/index.mdx';
import A_4_0_Economic_value from '@/content/pages/A.4.0_Economic_value/index.mdx';
import A_5_X_Patients_support from '@/content/pages/A.5.X_Patients_support/index.mdx';
import A_6_1_X_Appendix_Safety from '@/content/pages/A.6.1.X_Appendix_Safety/index.mdx';
import A_6_2_Apendix_MOA from '@/content/pages/A.6.2_Apendix_MOA/index.mdx';
import A_6_3_X_Apendix_Safety from '@/content/pages/A.6.3.X_Apendix_Safety/index.mdx';
import A_7_0_ISI from '@/content/pages/A.7.0_ISI/index.mdx';

type AppProps = {
  tab: string;
};

function App({ tab }: AppProps) {
  const [currentPage, setCurrentPage] = useState<string>(tab);
  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading application...</h1>}>
        <PageContext.Provider value={[currentPage, setCurrentPage]}>
          <Layout>
            <Route path='/01_Launch_screen' component={() => <Page component={A_0_Home} />} />
            <Route path='/A.0.Home' component={() => <Page component={A_0_Home} />} />
            <Route path='/A.1.0_Executive_summary' component={() => <Page component={A_1_0_Executive_summary} />} />
            <Route path='/A.2.1.X_S_Overview' component={() => <Page component={A_2_1_X_S_Overview} />} />
            <Route path='/A.2.1.1_S_Overview' component={() => <Page component={A_2_1_1_S_Overview} />} />
            <Route path='/A.2.1.2_S_Overview' component={() => <Page component={A_2_1_2_S_Overview} />} />
            <Route path='/A.2.1.3_S_Overview' component={() => <Page component={A_2_1_3_S_Overview} />} />
            <Route path='/A.2.2.X_B_Overview' component={() => <Page component={A_2_2_X_B_Overview} />} />
            <Route path='/A.2.3.X_LAIs' component={() => <Page component={A_2_3_X_LAIs} />} />
            <Route path='/A.2.4_Summary' component={() => <Page component={A_2_4_Summary} />} />
            <Route path='/A.3.0_Clinical_profile' component={() => <Page component={A_3_0_Clinical_profile} />} />
            <Route path='/A.3.1_Clinical_overview' component={() => <Page component={A_3_1_Clinical_overview} />} />
            <Route path='/A.3.2.X_Efficacy' component={() => <Page component={A_3_2_X_Efficacy} />} />
            <Route path='/A.3.4_Dosing' component={() => <Page component={A_3_4_Dosing} />} />
            <Route path='/A.3.5.X_Additional' component={() => <Page component={A_3_5_X_Additional} />} />
            <Route path='/A.4.0_Economic_value' component={() => <Page component={A_4_0_Economic_value} />} />
            <Route path='/A.5.X_Patients_support' component={() => <Page component={A_5_X_Patients_support} />} />
            <Route path='/A.6.1.X_Appendix_Safety' component={() => <Page component={A_6_1_X_Appendix_Safety} />} />
            <Route path='/A.6.2_Apendix_MOA' component={() => <Page component={A_6_2_Apendix_MOA} />} />
            <Route path='/A.6.3.X_Apendix_Safety' component={() => <Page component={A_6_3_X_Apendix_Safety} />} />
            <Route path='/A.7.0_ISI' component={() => <Page component={A_7_0_ISI} />} />
          </Layout>
        </PageContext.Provider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
