import { styled } from '@mui/material/styles';
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
      <Footer />
    </>
  );
}
