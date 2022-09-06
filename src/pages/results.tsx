// Material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

// Project imports
import Meta from '../components/base/Meta';
import MainCard from 'ui-component/cards/MainCard';
import EarningCard from '../components/features/ResultComponents/EarningCard';
import TotalOrderLineChartCard from '../components/features/ResultComponents/TotalOrderLineChartCard';
import TotalIncomeDarkCard from '../components/features/ResultComponents/TotalIncomeDarkCard';
import TotalIncomeLightCard from '../components/features/ResultComponents/TotalIncomeLightCard';
import DVPTaskCard from '../components/features/ResultComponents/DVPTaskCard';
import GanttChart from '../components/features/ResultComponents/GanttChart';
import I18nS from '../services/I18nS';

const Results = () => (
  <>
    <Meta title={I18nS.t('RESULTS_title')} description={I18nS.t('RESULTS_description')} />
    <MainCard title="Results">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <EarningCard />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <TotalOrderLineChartCard />
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  <TotalIncomeDarkCard />
                </Grid>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  <TotalIncomeLightCard />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <DVPTaskCard />
        </Grid>
        <Grid item xs={12}>
          <GanttChart />
        </Grid>
      </Grid>
    </MainCard>
  </>
);

Results.Layout = 'authGuard';
export default Results;
