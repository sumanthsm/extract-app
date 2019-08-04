import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

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
    },
    inputBase: {
        backgroundColor: 'lightgrey',
        borderRadius: '3px',
        alignItems: 'left',
        padding: '0 10px',
        height: '35px',
        width: '100%',
        border: 'none'
    }
});

class AddVendor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Paper className={classes.root} style={{ margin: "0px 40px 0px 20px", width: '95%', backgroundColor: "#FFFFFF", borderTop: '6px solid #666666' }}>
                    <div style={{ paddingTop: '15px' }}>
                        <span style={{ padding: '20px 0px 10px 25px', fontSize: '20px', fontWeight: 'bold' }}>Add Vendor</span>
                    </div>
                    <Grid item xs={12} container justify="left" style={{ padding: '0px 20px' }}>
                        <Grid item xs={4}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="vendorLegalName" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Vendor Legal Name *</label>
                                </div>
                                <InputBase
                                    id="vendorLegalName"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="appName" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Vendor DBA Name</label>
                                </div>
                                <InputBase
                                    id="vendorDbaName"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="vendorNumber" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Vendor Number *</label>
                                </div>
                                <InputBase
                                    id="vendorNumber"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container justify="left" style={{ padding: '0px 20px' }}>
                        <Grid item xs={4}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="vendorStatus" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Vendor Status *</label>
                                </div>
                                <ToggleButtonGroup value='left' exclusive onChange={''} style={{backgroundColor: 'lightgrey', borderRadius: '5px'}}>
                                    <ToggleButton style={{height: '35px', textTransform: 'capitalize', color: 'white', border: 'none', borderRadius: '5px', backgroundColor: '#666666'}}>
                                        Active
                                    </ToggleButton>
                                    <ToggleButton style={{height: '35px', textTransform: 'capitalize', color: 'black', border: 'none', borderRadius: '5px', backgroundColor: 'lightgrey'}}>
                                        Retired
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </Grid>
                        <Grid item xs={8}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="vendorNumber" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Vendor Business Description *</label>
                                </div>
                                <InputBase
                                    id="vendorNumber"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container justify="left" style={{ padding: '0px 20px' }}>
                        <Grid item xs={4}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="vendorSecurityAgreement" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Vendor Security Agreement</label>
                                </div>
                                <ToggleButtonGroup value='left' exclusive onChange={''} style={{backgroundColor: 'lightgrey', borderRadius: '5px'}}>
                                    <ToggleButton style={{height: '35px', textTransform: 'capitalize', color: 'white', border: 'none', borderRadius: '5px', backgroundColor: '#666666'}}>
                                        Yes
                                    </ToggleButton>
                                    <ToggleButton style={{height: '35px', textTransform: 'capitalize', color: 'black', border: 'none', borderRadius: '5px', backgroundColor: 'lightgrey'}}>
                                        No
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="IsVendorAccredited" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Is Vendor Accredited?</label>
                                </div>
                                <ToggleButtonGroup value='left' exclusive onChange={''} style={{backgroundColor: 'lightgrey', borderRadius: '5px'}}>
                                    <ToggleButton style={{height: '35px', textTransform: 'capitalize', color: 'white', border: 'none', borderRadius: '5px', backgroundColor: '#666666'}}>
                                        Yes
                                    </ToggleButton>
                                    <ToggleButton style={{height: '35px', textTransform: 'capitalize', color: 'black', border: 'none', borderRadius: '5px', backgroundColor: 'lightgrey'}}>
                                        No
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="accreditedBy" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Accredited By</label>
                                </div>
                                <InputBase
                                    id="accreditedBy"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container justify="left" style={{ padding: '0px 20px' }}>
                        <div style={{ paddingTop: '15px' }}>
                            <span style={{ padding: '20px 0px 10px 5px', fontSize: '15px', fontWeight: 'bold' }}>VENDOR CONTACT INFORMATION</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} container justify="left" style={{ padding: '0px 20px' }}>
                        <Grid item xs={3}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="primaryFirstName" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Primary First Name *</label>
                                </div>
                                <InputBase
                                    id="primaryFirstName"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="primaryLastName" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Primary Last Name *</label>
                                </div>
                                <InputBase
                                    id="primaryLastName"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="primaryPhone" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Primary Phone *</label>
                                </div>
                                <InputBase
                                    id="primaryPhone"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="primaryEmail" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Primary Email *</label>
                                </div>
                                <InputBase
                                    id="primaryEmail"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container justify="left" style={{ padding: '0px 20px' }}>
                        <Grid item xs={3}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="secondaryFirstName" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Secondary First Name</label>
                                </div>
                                <InputBase
                                    id="secondaryFirstName"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="secondaryLastName" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Secondary Last Name</label>
                                </div>
                                <InputBase
                                    id="secondaryLastName"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="secondaryPhone" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Secondary Phone</label>
                                </div>
                                <InputBase
                                    id="secondaryPhone"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="secondaryEmail" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Secondary Email</label>
                                </div>
                                <InputBase
                                    id="secondaryEmail"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container justify="left" style={{ padding: '15px 20px 0px 20px' }}>
                        <Grid item xs={4}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="effectiveDate" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Effective Date *</label>
                                </div>
                                <InputBase
                                    id="effectiveDate"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="expirationDate" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Expiration Date *</label>
                                </div>
                                <InputBase
                                    id="expirationDate"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="analytics" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Files Being Sent by Analytics *</label>
                                </div>
                                <ToggleButtonGroup value='left' exclusive onChange={''} style={{backgroundColor: 'lightgrey', borderRadius: '5px'}}>
                                    <ToggleButton style={{height: '35px', textTransform: 'capitalize', color: 'white', border: 'none', borderRadius: '5px', backgroundColor: '#666666'}}>
                                        Yes
                                    </ToggleButton>
                                    <ToggleButton style={{height: '35px', textTransform: 'capitalize', color: 'black', border: 'none', borderRadius: '5px', backgroundColor: 'lightgrey'}}>
                                        No
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container justify="left" style={{ padding: '5px 20px 0px 20px' }}>
                        <Grid item xs={4}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="governanceId" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Governance ID *</label>
                                </div>
                                <InputBase
                                    id="governanceId"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="ssnExceptionCode" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>SSN Exception Code</label>
                                </div>
                                <InputBase
                                    id="ssnExceptionCode"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="analytics" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Provider Name</label>
                                </div>
                                <InputBase
                                    id="analytics"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container justify="left" style={{ padding: '5px 20px 0px 20px' }}>
                        <Grid item xs={3}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="governanceId" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Downstream Contacts</label>
                                </div>
                                <ToggleButtonGroup value='left' exclusive onChange={''} style={{backgroundColor: 'lightgrey', borderRadius: '5px'}}>
                                    <ToggleButton style={{height: '35px', textTransform: 'capitalize', color: 'white', border: 'none', borderRadius: '5px', backgroundColor: '#666666'}}>
                                        Yes
                                    </ToggleButton>
                                    <ToggleButton style={{height: '35px', textTransform: 'capitalize', color: 'black', border: 'none', borderRadius: '5px', backgroundColor: 'lightgrey'}}>
                                        No
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="ssnExceptionCode" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Off-Shoring</label>
                                </div>
                                <ToggleButtonGroup value='left' exclusive onChange={''} style={{backgroundColor: 'lightgrey', borderRadius: '5px'}}>
                                    <ToggleButton style={{height: '35px', textTransform: 'capitalize', color: 'white', border: 'none', borderRadius: '5px', backgroundColor: '#666666'}}>
                                        Yes
                                    </ToggleButton>
                                    <ToggleButton style={{height: '35px', textTransform: 'capitalize', color: 'black', border: 'none', borderRadius: '5px', backgroundColor: 'lightgrey'}}>
                                        No
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="analytics" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>BAA/NDA *</label>
                                </div>
                                <ToggleButtonGroup value='left' exclusive onChange={''} style={{backgroundColor: 'lightgrey', borderRadius: '5px'}}>
                                    <ToggleButton style={{height: '35px', textTransform: 'capitalize', color: 'white', border: 'none', borderRadius: '5px', backgroundColor: '#666666'}}>
                                        Yes
                                    </ToggleButton>
                                    <ToggleButton style={{height: '35px', textTransform: 'capitalize', color: 'black', border: 'none', borderRadius: '5px', backgroundColor: 'lightgrey'}}>
                                        No
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="analytics" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Delegated Functions *</label>
                                </div>
                                <InputBase
                                    id="analytics"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="analytics" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Sensitive Codes *</label>
                                </div>
                                <ToggleButtonGroup value='left' exclusive onChange={''} style={{backgroundColor: 'lightgrey', borderRadius: '5px'}}>
                                    <ToggleButton style={{height: '35px', textTransform: 'capitalize', color: 'white', border: 'none', borderRadius: '5px', backgroundColor: '#666666'}}>
                                        Yes
                                    </ToggleButton>
                                    <ToggleButton style={{height: '35px', textTransform: 'capitalize', color: 'black', border: 'none', borderRadius: '5px', backgroundColor: 'lightgrey'}}>
                                        No
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container justify="left" style={{ padding: '0px 20px' }}>
                        <div style={{ paddingTop: '15px' }}>
                            <span style={{ padding: '20px 0px 10px 5px', fontSize: '15px', fontWeight: 'bold' }}>NOT FOR BUSINESS USE</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} container justify="left" style={{ padding: '15px 20px 0px 20px' }}>
                        <Grid item xs={6}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="masterAccount" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>FTP Master Account</label>
                                </div>
                                <InputBase
                                    id="masterAccount"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="surrogate" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>FTP Surrogate</label>
                                </div>
                                <InputBase
                                    id="surrogate"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container justify="left" style={{ padding: '5px 20px 0px 20px' }}>
                        <Grid item xs={4}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="vendorShortName" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Vendor Short Name</label>
                                </div>
                                <InputBase
                                    id="vendorShortName"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={5}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="fileIndicator" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>New/Change Extract Review File Indicator</label>
                                </div>
                                <select
                                    id="fileIndicator"
                                    defaultValue={"Select"}
                                    className={classes.inputBase}
                                    onChange={''}
                                >
                                    <option value="Select Vendor">Select</option>
                                </select>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="ssnExceptionVerified" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>SSN Exception Verified</label>
                                </div>
                                <select
                                    id="ssnExceptionVerified"
                                    defaultValue={"Select"}
                                    className={classes.inputBase}
                                    onChange={''}
                                >
                                    <option value="Select Vendor">Select</option>
                                </select>
                            </div>
                        </Grid>
                    </Grid>
                    <div style={{ padding: '30px 5px', height: '80px' }}>
                        <Button
                            variant="outlined"
                            style={{ margin: '0px 20px', backgroundColor: '#666666', color: 'white', float: 'right' }}
                            onClick={this.handleSubmmit}
                        >
                            <span style={{ padding: '0 15px', fontWeight: 'bold', fontSize: '12px' }}>SAVE AND SELECT EXTRACTS</span>
                        </Button>
                        <Button variant="outlined" style={{ float: 'right' }} onClick={this.onCancelButtonClick}>
                            <span style={{ padding: '0 15px', fontWeight: 'bold', fontSize: '12px' }}>RESET</span>
                        </Button>
                    </div>
                </Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(AddVendor);