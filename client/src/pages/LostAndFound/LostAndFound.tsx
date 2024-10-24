import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LostReport from "../../features/LostAndFound/LostReport";
import FoundReport from "../../features/LostAndFound/FoundReport";
import PetCards from "../../features/LostAndFound/PetCards";
import ChatFeature from "../../features/LostAndFound/ChatFeature";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function LostAndFound() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: 1000,
        marginLeft: 40,
      }}
    >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="All Pets" {...a11yProps(0)} />
          <Tab label="Found Report" {...a11yProps(1)} />
          <Tab label="Lost Report" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <PetCards></PetCards>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <FoundReport></FoundReport>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <LostReport></LostReport>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <ChatFeature></ChatFeature>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
