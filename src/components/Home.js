import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Header from './Header';
import VendorManagement from './VendorManagement';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
        width: `calc(100% - 60px)`,
        marginLeft: '60px',
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        color: 'black',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: 'white',
        minHeight: 'calc(100vh - 60px)',
        height: '100%',
        minHeight: '-webkit-fill-available',
    }
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        <Box p={3} style={{padding: '0px'}}>{children}</Box>
      </Typography>
    );
  }
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 0,
            index : 0        
        }
    }

    handleChange = (event, newValue) => {
        this.setState({value: newValue});
      }
    
      handleChangeIndex = (index) => {
        this.setState({index: index});
      }

    render() {
        const { classes } = this.props;
        const {value, index} = this.state;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <Header />
                <main className={classes.content}>
                    <AppBar position="static" color="white" style={{ paddingTop: "65px" }}>
                        <Tabs
                            value={value}
                            onChange={this.handleChange}
                            inkBarStyle={{ background: "red", height: "5px", marginTop: "-5px" }}
                        >
                            <Tab label="Vendors" style={{ marginLeft: '40px', textTransform: 'capitalize', fontWeight: '700' }} />
                            <Tab label="Extracts" style={{ marginLeft: '40px', textTransform: 'capitalize', fontWeight: '700' }} />
                            <Tab label="Rules" style={{ marginLeft: '40px', textTransform: 'capitalize', fontWeight: '700' }} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0} dir={'ltl'} style={{backgroundColor: 'lightgrey', padding: '0px', height: '100%', minHeight: '100%', minHeight: '-webkit-fill-available'}}>
                        <VendorManagement />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={'ltl'} style={{backgroundColor: 'lightgrey'}}>
                        Extracts
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={'ltl'} style={{backgroundColor: 'lightgrey'}}>
                        Rules
                    </TabPanel>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
