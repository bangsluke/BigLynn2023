// Material-ui
import { Grid } from '@mui/material';
import CalculateButton from 'components/features/CalculateButton';
import { gridSpacing } from 'store/constant';

// Project imports
import Meta from '../components/base/Meta';
import MainCard from 'ui-component/cards/MainCard';
import ProjectConstraintsCard from '../components/features/InputComponents/ProjectConstraintsCard';
import PreferenceSlidersCard from '../components/features/InputComponents/PreferenceSlidersCard';
// Import DropdownSection from '../components/features/InputComponents/DropdownSection';
import VehicleSpecificationCard from '../components/features/InputComponents/VehicleSpecificationCard';
import ValidationLevelCard from '../components/features/InputComponents/ValidationLevelCard';
import I18nS from '../services/I18nS';

const Inputs = () => (
  <>
    <Meta title={I18nS.t('INPUTS_title')} description={I18nS.t('INPUTS_description')} />
    <MainCard title="Inputs">
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
      <CalculateButton />
    </MainCard>
  </>
);

Inputs.Layout = 'authGuard';
export default Inputs;
