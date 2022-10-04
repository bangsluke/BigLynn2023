import { Container, Grid, Typography } from '@mui/material';
import ThemingS from 'services/ThemingS';
import FeatureCard from 'components/ui/FeatureCard';

const InfoPageFeatureSection = () => {
  // Sort the features by the id property - https://www.w3schools.com/jsref/jsref_sort.asp & https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
  const sortedFeatures: ToolInfoFeatureType[] = toolInfo.features.sort(function (a, b) {
    return a.id - b.id;
  });

  // Map over the features info to create all feature cards.
  const featureElements = sortedFeatures.map((feature) => {
    return (
      <FeatureCard id={feature.id} key={feature.id} iconName={feature.iconName} title={feature.title} description={feature.description} />
    );
  });

  return (
    <Container>
      <Grid container spacing={ThemingS.themeConfig.gridSpacing}>
        <Grid item xs={12} lg={5} md={10}>
          <Grid container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item>
                  <Typography variant="h5" color="primary">
                    Top Features
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" component="div">
                {toolInfo.question}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">{toolInfo.summaryText}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mb: 5 }}>
          <Grid container justifyContent="center" spacing={ThemingS.themeConfig.gridSpacing} sx={{ textAlign: 'center' }}>
            {featureElements}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InfoPageFeatureSection;
