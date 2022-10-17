import { styled } from '@mui/material/styles';
// Import { Grid } from '@mui/material';
// Import MainCard from 'components/ui/MainCard';
// Import ThemingS from 'services/ThemingS';
// Import Stats from 'components/features/stats/stats';
// Import InfoPageDemoSection from 'components/features/InfoPageComponents/InfoPageDemoSection';
// Import InvolvedSection from 'components/features/InfoPageComponents/InvolvedSection';
// Import KeyFeatureSection from "components/features/InfoPageComponents/KeyFeatureSection";
// Import SubscribeSection from "components/features/InfoPageComponents/Subscribe";
import AppBar from 'components/features/AppBar';
import HeaderSection from 'components/features/HeaderSection';
import ItinerarySection from 'components/features/ItinerarySection';
import RulesSection from 'components/features/RulesSection';
import StatsSection from 'components/features/StatsSection';
import Meta from 'components/ui/Meta';
import { useEffect } from 'react';
// Import FeatureSection from 'components/features/FeatureSection';
// Import TimelineSection from 'components/features/TimelineSection';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import EventDetailsSection from 'components/features/EventDetailsSection';
import FAQSection from 'components/features/FAQSection';
import Footer from 'components/features/Footer';
import UsefulLinksSection from 'components/features/UsefulLinksSection';

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

const FourthWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  borderRadius: '8px',
  paddingTop: 100,
  [theme.breakpoints.down('md')]: {
    paddingTop: 60
  }
}));

const AnchorOffset = styled('h2')({
  '&:before': {
    display: 'block',
    content: '""',
    height: '110px' /* Give height of your fixed element */,
    marginTop: '-110px' /* Give negative margin of your fixed element */,
    visibility: 'hidden'
  }
});

export default function Info() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);

  return (
    <>
      <Meta title="Big Lynn 2023" description="The official website of the 2023 Big Lynn Competition." />
      <HeaderWrapper id="home">
        <AppBar />
        <HeaderSection />
      </HeaderWrapper>

      <ThirdWrapper>
        <AnchorOffset id="eventDetails" className="offset">
          <EventDetailsSection data-aos="fade-right" data-aos-duration="3000" />
        </AnchorOffset>
      </ThirdWrapper>

      <FourthWrapper>
        <AnchorOffset id="itinerary" className="offset">
          <ItinerarySection data-aos="fade-left" data-aos-duration="3000" />
        </AnchorOffset>
      </FourthWrapper>

      <ThirdWrapper>
        <AnchorOffset id="rules" className="offset">
          <RulesSection />
        </AnchorOffset>
      </ThirdWrapper>

      <SecondWrapper>
        <AnchorOffset id="statistics" className="offset">
          <StatsSection />
        </AnchorOffset>
      </SecondWrapper>

      <FourthWrapper>
        <AnchorOffset id="FAQ" className="offset">
          <FAQSection />
        </AnchorOffset>
      </FourthWrapper>

      <ThirdWrapper>
        <AnchorOffset id="usefulLinks" className="offset">
          <UsefulLinksSection />
        </AnchorOffset>
      </ThirdWrapper>

      <Footer />
    </>
  );
}
