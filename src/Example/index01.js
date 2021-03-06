import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'

function Layout  () {
    return (
        <div>
            <Grid
            container 
            spacing={4} 
            
            wrap-xs-wrap-reverse
            justify="space-evenly"
            alignItems="flex-end">
                
                <Grid item  >
                    <TextField 
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2021-04-03"
                    InputLabelProps={{shrink:true}}
                    />
                </Grid>
                <Grid item >
                    <TextField 
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2021-04-03"
                    InputLabelProps={{shrink:true}}
                    />
                </Grid>
                <Grid item >
                    <TextField 
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2021-04-03"
                    InputLabelProps={{shrink:true}}
                    />
                </Grid>
                <Grid item >
                    <TextField 
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2021-04-03"
                    InputLabelProps={{shrink:true}}
                    />
                </Grid>
                <Grid item >
                    <TextField 
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2021-04-03"
                    InputLabelProps={{shrink:true}}
                    />
                </Grid>
                <Grid item >
                    <TextField 
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2021-04-03"
                    InputLabelProps={{shrink:true}}
                    />
                </Grid>
                <Grid item >
                    <TextField 
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2021-04-03"
                    InputLabelProps={{shrink:true}}
                    />
                </Grid>
                <Grid item >
                    <TextField 
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2021-04-03"
                    InputLabelProps={{shrink:true}}
                    />
                </Grid>
                <Grid item >
                    <TextField 
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2021-04-03"
                    InputLabelProps={{shrink:true}}
                    />
                </Grid>
                <Grid item >
                    <TextField 
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2021-04-03"
                    InputLabelProps={{shrink:true}}
                    />
                </Grid>
                
                <Grid item >
                    <TextField
                    id = "standard-multiline-flexible"
                    label="Multiline"
                    multiline rowsMax={4}
                    name="text"
                    />
                </Grid>
            </Grid>
            <Grid
            container 
            spacing={4} 
            wrap
            direction="row"
            justify="flex-start"
            alignItems="flex-start">
                
                <Grid item >
                    <TextField 
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2021-04-03"
                    InputLabelProps={{shrink:true}}
                    />
                </Grid>
                <Grid item >
                    <TextField
                    id = "standard-multiline-flexible"
                    label="Multiline"
                    multiline rowsMax={4}
                    name="text"
                    />
                </Grid>
            </Grid>
            <Grid 
            container 
            spacing={4} 
            wrap
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
            >
                <Grid item xs={4}>
                    <Typography variant="h7">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h7">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h7">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.</Typography>
                </Grid>

                
                <Grid item xs={4}>
                <Typography variant="h7">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.</Typography>
                </Grid>
                <Grid item xs={4}>
                <Typography variant="h7">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.</Typography>
                </Grid>
                <Grid item xs={4}>
                <Typography variant="h7">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.</Typography>
                </Grid>
                <Grid item xs={4}>
                <Typography variant="h7">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.</Typography>
                </Grid>
                
            </Grid>
        </div>
        
    )
    
    
    
}
export default Layout;