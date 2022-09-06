// Material-ui
// Import { useTheme } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

// Project imports
// Import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// Third-party
// Import { FrappeGantt } from 'frappe-gantt-react';

// Chart data
// Import chartData from './chart-data/total-growth-bar-chart';
// Import tasks from './chart-data/GanttChartData';

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const GanttChart = () => {
  return (
    <>
      <MainCard>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    <Typography variant="h3">Testing Plan</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ overflow: 'hidden' }}>
            <div style={{ height: '10rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h3">Add Gantt Here</Typography>
            </div>
            {/* <FrappeGantt
                tasks={tasks}
                // ViewMode={this.state.mode}
                onClick={(task) => console.log(task, 'click')}
                onDateChange={(task, start, end) => console.log(task, start, end, 'date')}
                onProgressChange={(task, progress) => console.log(task, progress, 'progress')}
                onTasksChange={(tasks) => console.log(tasks, 'tasks')}
              /> */}
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
};

export default GanttChart;
