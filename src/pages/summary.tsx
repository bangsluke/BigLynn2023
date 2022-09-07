// Material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

import Image from 'next/image';
import BigLynn2023 from '../../public/assets/images/2022-Lineup.jpg';

// Project imports
import Meta from '../components/base/Meta';
import MainCard from 'ui-component/cards/MainCard';
import ProjectConstraintsCard from '../components/features/InputComponents/ProjectConstraintsCard';
import PreferenceSlidersCard from '../components/features/InputComponents/PreferenceSlidersCard';
// Import DropdownSection from '../components/features/InputComponents/DropdownSection';
import VehicleSpecificationCard from '../components/features/InputComponents/VehicleSpecificationCard';
import ValidationLevelCard from '../components/features/InputComponents/ValidationLevelCard';
import I18nS from '../services/I18nS';

const Summary = () => (
  <>
    <Meta title={I18nS.t('INPUTS_title')} description={I18nS.t('INPUTS_description')} />

    <MainCard>
      <Grid container spacing={gridSpacing}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image src={BigLynn2023} alt="Big Lynn 2023" layout="fill" objectFit="contain" />
          </div>
          {/* <Image src={BigLynn2023} alt="Big Lynn 2023" layout="intrinsic" width="100vw" height={'270'} /> */}
        </Grid>
      </Grid>
    </MainCard>
    <MainCard>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <h2>Welcome to the official website of the Big Lynn 2023.</h2>
        </Grid>
      </Grid>
    </MainCard>
    <MainCard title="Event Details">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <h2>Location</h2>
        </Grid>
      </Grid>
    </MainCard>
    <MainCard title="FAQ">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <h2>Frequently Asked Questions</h2>
          <h3>A section dedicated to those who didn't read the above section and of course "Mr Question" himself, Keith Joseph</h3>
        </Grid>
      </Grid>
    </MainCard>
    <MainCard title="Stats">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <ProjectConstraintsCard />
            </Grid>
            <Grid item lg={8} md={6} sm={6} xs={12}>
              <PreferenceSlidersCard />
            </Grid>
            <Grid item lg={8} md={6} sm={6} xs={12}>
              {/* <DropdownSection /> */}
              <VehicleSpecificationCard />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <ValidationLevelCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  </>
);

Summary.Layout = 'authGuard'; // This is needed.
export default Summary;
