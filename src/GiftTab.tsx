import React from 'react';
import {TabProduct} from "./models";
import "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GiftsetProduct from "./components/GiftsetProduct";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
interface GiftTabProps{
    productList: TabProduct[]
}

const GiftTab = ({productList}:GiftTabProps) => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'block', height: 463 }}
        >
            <Tabs className='Giftset__Container__Tab'
                  // centered
                orientation="vertical"
                variant="scrollable"
                scrollButtons = {false}
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
                TabIndicatorProps={{style: {background:'#415167'}}}

            >
                {productList.map(product => <Tab key = {'tab for'+product.id} className='f-DisplayMedium' label={product.id} {...a11yProps(product.id)}/>)}
                {/*<Tab label="1" {...a11yProps(0)} />*/}
            </Tabs>
            {productList.map(product =>
                <TabPanel key = {'tab panel for'+product.id} index={product.id-1} value={value} children={<GiftsetProduct product={product}/>} />
            )}
            {/*<TabPanel  value={value} index={0} >*/}
            {/*    Item One 1*/}
            {/*</TabPanel>*/}
        </Box>
    );
};

export default GiftTab;