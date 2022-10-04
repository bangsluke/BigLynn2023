import { styled } from '@mui/material/styles';
// Import { Grid } from '@mui/material';
// Import MainCard from 'components/ui/MainCard';
// Import ThemingS from 'services/ThemingS';
// Import Stats from 'components/features/stats/stats';
// Import InfoPageDemoSection from 'components/features/InfoPageComponents/InfoPageDemoSection';
// Import InvolvedSection from 'components/features/InfoPageComponents/InvolvedSection';

// Import KeyFeatureSection from "components/features/InfoPageComponents/KeyFeatureSection";
// Import SubscribeSection from "components/features/InfoPageComponents/Subscribe";
import Meta from 'components/ui/Meta';
import AppBar from 'components/features/AppBar';
import HeaderSection from 'components/features/HeaderSection';
// Import FeatureSection from 'components/features/FeatureSection';
// Import TimelineSection from 'components/features/TimelineSection';
import Footer from 'components/features/Footer';

const HeaderWrapper = styled('div')(({ theme }) => ({
  // BackgroundColor: "#FFF",
  borderRadius: '8px',
  overflowX: 'hidden',
  overflowY: 'clip',
  [theme.breakpoints.down('md')]: {
    paddingTop: 42
  }
}));

const SecondWrapper = styled('div')(({ theme }) => ({
  paddingTop: 100,
  borderRadius: '8px',
  [theme.breakpoints.down('md')]: {
    paddingTop: 60
  }
}));

const ThirdWrapper = styled('div')(({ theme }) => ({
  backgroundColor: '#FFF',
  borderRadius: '8px',
  paddingTop: 100,
  [theme.breakpoints.down('md')]: {
    paddingTop: 60
  }
}));

export default function Info() {
  return (
    <>
      <Meta title="Big Lynn 2023" description="The official website of the 2023 Big Lynn Competition." />
      <HeaderWrapper id="home">
        <AppBar />
        <HeaderSection />
      </HeaderWrapper>
      {/* <SecondWrapper>
        <FeatureSection />
      </SecondWrapper> */}
      {/* <ThirdWrapper>
        <InfoPageDemoSection />
      </ThirdWrapper> */}
      {/* <SecondWrapper>
        <InvolvedSection toolInfo={ToolInfo.involvedSection} />
      </SecondWrapper> */}
      {/* <ThirdWrapper>
        <TimelineSection />
      </ThirdWrapper> */}
      {/* <SecondWrapper>
				<KeyFeatureSection />
			</SecondWrapper>
			<SecondWrapper>
				<SubscribeSection />
			</SecondWrapper> */}

      {/* <MainCard>
        <Grid container spacing={ThemingS.themeConfig.gridSpacing}>
          <Grid item xs={12}> */}
      <h2>Welcome to the official website of the Big Lynn 2023.</h2>
      {/* </Grid>
        </Grid>
      </MainCard> */}
      {/* <MainCard title="Event Details" id="eventdetails">
        <Grid container spacing={ThemingS.themeConfig.gridSpacing}>
          <Grid item xs={12}> */}
      <h2>Location</h2>
      {/* </Grid>
        </Grid>
      </MainCard> */}
      {/* <MainCard title="FAQ" id="FAQ">
        <Grid container spacing={ThemingS.themeConfig.gridSpacing}>
          <Grid item xs={12}> */}
      <h2>Frequently Asked Questions</h2>
      <h3>A section dedicated to those who didn&#39;t read the above section and of course &#39;Mr Question&#39; himself, Keith Joseph</h3>
      {/* </Grid>
        </Grid>
      </MainCard> */}
      {/* <MainCard title="Stats" id="stats">
        <Grid container spacing={ThemingS.themeConfig.gridSpacing}>
          <Grid item xs={12}> */}
      <h2>Stats</h2>
      {/* <Stats /> */}
      {/* </Grid>
        </Grid>
      </MainCard> */}
      {/* <MainCard title="Extra" id="extra"></MainCard> */}

      <Footer />
    </>
  );
}
