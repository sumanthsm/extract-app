import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddVendor from './AddVendor';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  fab: {
    backgroundColor: 'white',
    color: 'black'
  }
});

class VendorManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddVendor: false
    }
  }

  handleAddClick = () => {
    this.setState({ showAddVendor: true });
  }


  render() {
    const { classes } = this.props;
    const { showAddVendor } = this.state;
    return (
      <div style={{ padding: '20px 40px' }}>
        <Grid item xs={12} container justify="left" style={{ marginTop: '10px' }}>
          <Grid item xs={4}>
            <span style={{ fontSize: '25px', fontWeight: 'bold' }}>Vendor Management</span>
          </Grid>
          <Grid item xs={8}>
            <div style={{ float: 'right', marginRight: '40px' }}>
              <span style={{ fontSize: '16px', fontWeight: 'bold', marginRight: '20px' }}>ADD VENDOR</span>
              <Fab size="small" className={classes.fab} color="primary" onClick={this.handleAddClick}>
                <AddIcon />
              </Fab>
            </div>
          </Grid>
          <Grid item xs={3} style={{ marginTop: '20px' }}>
            <select
              id="vendor"
              defaultValue={"Select Vendor"}
              style={{
                backgroundColor: 'white',
                borderRadius: '5px',
                width: '100%',
                alignItems: 'left',
                padding: '12px',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                borderTop: '6px solid #666666'
              }}
              onChange={''}
            >
              <option value="Select Vendor">Select Vendor</option>
            </select>
            <Paper className={classes.root} style={{ marginTop: "15px", backgroundColor: "#FFFFFF" }}>
              <h5 style={{ padding: '10px 0px 0px 10px', margin: 'auto' }}>Governance ID and/or SSN Exception Code</h5>
              <p style={{ padding: '0px 10px', fontStyle: 'italic', fontSize: '14px' }}>Florida Blue corporate policy requires an approved Governance ID, and an SSN Exception Code (if sending full SSN) prior to sharing data externally. Procedure #5.50.20</p>
              <div style={{ textAlign: 'center', paddingBottom: '15px' }}>
                <Button
                  variant="outlined"
                  style={{ backgroundColor: '#666666', color: 'white' }}
                  onClick={''}
                >
                  <span style={{ padding: '0 15px', fontSize: '11px', fontWeight: '700' }}>REQUEST ID OR EXCEPTION CODE</span>
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={9} style={{ marginTop: '20px' }}>
            {
              showAddVendor ? <AddVendor /> : <Paper className={classes.root} style={{ margin: "0px 40px 0px 20px", width: '95%', height: '250px', backgroundColor: "#FFFFFF", borderTop: '6px solid #666666' }}>
                <h2 style={{ padding: '30px', margin: '0px' }}>Welcome</h2>
              </Paper>
            }
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(VendorManagement);