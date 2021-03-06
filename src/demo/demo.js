import React from 'react' ;
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search'; 
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import ArrowDropDownTwoToneIcon from '@material-ui/icons/ArrowDropDownTwoTone';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupIcon from '@material-ui/icons/Group';
import FeaturedVideoOutlinedIcon from '@material-ui/icons/FeaturedVideoOutlined';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'

function Facebook(props) {
    return (
        <div>
            <Grid 
             container 
             spacing={4} 
             
             justify="space-evenly"
             alignItems="flex-end" >

                <Grid item>
                <FacebookIcon/>
                <SearchIcon />
                <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
                </Grid>

                <Grid item
                > 
                
                <HomeOutlinedIcon/>
                <OndemandVideoIcon/>
                <StorefrontIcon/>
                <GroupIcon/>
                <FeaturedVideoOutlinedIcon/>
                </Grid>

                <Grid item>
                <AddTwoToneIcon/>
                <MessageRoundedIcon/>
                <NotificationsIcon/>
                <ArrowDropDownTwoToneIcon/>
                </Grid>
                
            </Grid>
            <Grid 
            container
            >
                <Grid item
                direction="row"
                justify="center"
                alignItems="center" >
                <Avatar>H</Avatar>
                <Typography variant="subtitle1">Avatar name</Typography>
                </Grid>

                <Grid item >

                </Grid>

                <Grid item
                direction="row"
                justify="center"
                alignItems="center" >
                <Avatar>H</Avatar>
                <Typography variant="subtitle1">Avatar name</Typography>
                </Grid>

            </Grid>
        </div>
    )
}
export default Facebook;