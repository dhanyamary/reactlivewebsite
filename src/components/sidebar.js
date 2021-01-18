import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';


const drawerWidth = 239;

const useStyles = makeStyles((theme) => ({
  rooot: {
    marginTop:10,
    marginLeft:12,
    marginRight:12,
    display: 'flex',
    borderRadius:0,
    boxShadow:'none'
  },
  rooott:{
    marginTop:10,
    marginLeft:12,
    marginRight:12,
    display: 'flex',
    backgroundColor:'#3399ff',
    color:'white',
    borderRadius:0,
    boxShadow:'none'
  },
  details: {
    height:10
  },
  buttonn: {
    margin: theme.spacing(1),
    marginLeft:20,
    marginTop:30
  },
  contentt: {
    marginTop:-6,
    fontFamily:'Arial, Helvetica, sans-serif',
    fontSize:12
  },
  cpp:{
    marginTop:2,
    fontWeight:'bold'
  },
  cp:{
    marginTop:-30,
    fontSize:10,
    fontWeight:0
  },
  chg:{
    textAlign:'left',
    cellSpacing:50,
    marginRight:20
  },
  chang:{
    marginLeft:20,
    marginTop:45,
    marginRight:20
  },
  changg:{
    marginTop:-20,
    marginLeft:-4
  },
  chng:{
    marginLeft:20,
    marginTop:10
  },
  side: {
    marginTop:25,
    marginRight:500,
    marginLeft:25
  },
  cg:{
    marginTop:45,
    marginLeft:60
  },
  btn:{
    backgroundColor:'DodgerBlue',
    border:'none',
    color:'white',
    padding:'12px 16px',
    fontSize:'13px',
    textAlign:'left',
    marginTop:26,
    marginLeft:20,
    width:'11%',
    height:35,
    borderRadius:3
  },
  d:{
    fontSize:12,
    fontFamily:'Calibri',
    fontWeight:'bold'
  },
  dd:{
    fontSize:12,
    fontFamily:'Calibri',
    fontWeight:'bold',
    backgroundColor:'#0099ff',
    marginTop:10,
    paddingTop:10,
    marginBottom:10,
    paddingBottom:10,
    color:'white'
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginTop:-20,
    marginLeft:22,
    marginRight:20
  },
  cover: {
    margin:8,
    marginRight:0,
    width: 40,
    height:40,
    borderRadius:'50%'
  },
  colo:{
    backgroundColor:'#f5f5ef',
    position:'relative',
    marginLeft:-60,
    marginTop:-40,
    marginRight:-24
  },
  button:{
    backgroundColor:'#00b300',
    border:'none',
    color:'white',
    padding:'20px',
    textAlign:'center',
    textDecoration:'none',
    display:'inline-block',
    fontSize:'13px',
    margin:'4px 2px',
    borderRadius:'50%',
    fontFamily:'sans-serif',
    fontWeight:'bold',
    marginLeft:22,
    height:57,
    width:57
  },
  cc:{
    fontSize:18,
    textAlign:'left',
    marginTop:-3,
    marginLeft:-8
  },
  cccc:{
    marginTop:-18,
    marginLeft:17,
    fontSize:11
  },
  set:{
    backgroundColor:'#f5f5ef',
    marginLeft:50,
    borderColor:'#d7d7c1'
  },
  pset:{
    padding:0,
    fontSize:12,
    marginTop:15,
    marginLeft:19,
    fontFamily:'sans-serif'
  },
  psetd:{
    fontWeight:'bold'
  },
  psett:{
    paddingLeft:749,
    fontSize:11,
  },
  psettt:{
    paddingLeft:10,
    fontSize:35
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
    grow: {
        flexGrow: 1,
      },
      small: {
        width: 22,
    height: 22,
    marginTop:-35
      },
      m:{
        borderBottom:"white",
        borderLeftColor:"#d6d6c2",
        borderTopColor:"#d6d6c2",
        borderRightColor:"#d6d6c2",
        fontSize:13,
    fontFamily:'Calibri',
    color:'DodgerBlue',
    fontWeight:'bold'
      },
      
      root: {
        '& > *': {
          margin: theme.spacing(1),
        
        },
      },
      logo: {
        maxWidth: 50,
        marginRight:70
      },
      sett:{
        paddingRight:'20'
      },
      
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
    
      
      sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
        
      },
  roott: {
    display: 'flex'
  },
  pat: {
    paddingLeft: 13,
    paddingTop:-1,
    fontSize:12,
    fontWeight:'bold',
    fontFamily:'Arial, Helvetica, sans-serif'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow:'0 8px 6px -9px grey',
    height:62
  },
  menu:{
    borderCollapse:'collapse',
    marginTop:25,
    marginLeft:24,
    textAlign:'center',
    backgroundColor:'white',
    border:0,
    borderBottomColor:"#d6d6c2",
    width:'55%'
  },
  a:{
    borderCollapse:'collapse',
    marginTop:25,
    marginLeft:14,
    width:'33%',
    border:0
  },
  ab:{
    borderCollapse:'collapse',
    marginTop:25,
    marginLeft:20,
    width:'96%',
    border:'none'
  },
  acol:{
    backgroundColor:'#e6f2ff'
  },
  bcol:{
    backgroundColor:'#f5f5ef'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#e6f2ff",
    border:0
  },
  drawerContainer: {
    overflow: 'auto',
  },
  ccc:{
    fontSize:15,
    fontWeight:'bold',
    paddingBottom:4
  },
  e1:{
    fontSize:11,
    fontFamily:'sans-serif'
  },
  ee1:{
    fontSize:11,
    fontFamily:'sans-serif',
    paddingLeft:10
  },
  e2:{
    fontSize:11,
    fontFamily:'sans-serif',
    fontWeight:'bold',
    paddingLeft:20
  },
  ee2:{
    fontSize:11,
    fontFamily:'sans-serif',
    fontWeight:'bold',
    paddingLeft:10
  },
  content: {
    flexGrow: 1,
    backgroundColor:'#ffffff',
    padding: theme.spacing(3)
  },
  drawcol:{
    backgroundColor:'#e6e6e6',
    marginTop:-9,
    color:'#ebebe0'
  },
  drawcoll:{
    backgroundColor:'#e6e6e6',
    marginTop:7,
    marginLeft:10,
    marginBottom:-15
  },
  active:{
    backgroundColor:'#3399ff',
    color:'white',
    display:'block',
    padding:'24px 21px 25px 21px',
    textDecoration:'none',
    textAlign:'center',
    fontSize:10.5,
    fontFamily:'Arial, Helvetica, sans-serif'
  },
  abc:{
    display:'block',
    color:'black',
    padding:'24px 21px 25px 21px',
    textDecoration:'none',
    textAlign:'center',
    fontSize:10.5,
    fontFamily:'Arial, Helvetica, sans-serif',
    fontWeight:'bold'
  },
  al:{
    margin:-8
  },
  cd:{
    color:'black',
    marginTop:-12,
    marginLeft:-40
  },
  search: {
    position: 'relative',
    borderRadius: 0,
    backgroundColor: 'white',
    marginLeft: 13,
    marginRight:12,
    marginTop:-4,
    height:28
  },
  searchIcon: {
    color:'#d6d6c2',
    position: 'absolute',
    alignItems: 'right',
    justifyContent: 'left',
    marginLeft:185,
    marginTop:5
  },
  searchsize:{
    height:19
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize:11,
    fontFamily:'Arial, Helvetica, sans-serif',
    marginLeft:-33,
    marginTop:2
  },
  bb:{
    marginTop:1,
    marginLeft:-3
  },
  ee:{
    color:'#8d8d8d',
    paddingRight:10
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.roott}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{ background: '#ffffff' }}>
      <Toolbar>
        <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHIvLkkzdHvZw/company-logo_200_200/0/1544449689256?e=2159024400&v=beta&t=SV5-D4_VkE_ECYGvjc6lYRGM7n-GSaKJfyZfz2lffJA" alt="logo" className={classes.logo} />
        <a className={classes.active} href="#home">PATIENTS</a>
        <a href="#about" className={classes.abc} >CALENDER</a>
        <a href="#contact" className={classes.abc} >USERS</a>
        <a href="#contact" className={classes.abc} >BILLING</a>
    
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

              <div className={classes.root}>
              <IconButton className={classes.cd}>
              <Badge variant="dot" color="secondary" anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  >
                <NotificationsIcon className={classes.al}/>
              </Badge>
              </IconButton>
              
            </div>
            <div>
          <Avatar alt="Remy Sharp" src="images.jpeg" className={classes.small}/>
          </div>
          </div>
          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        position="static"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawcol}>.</div>
        <div className={classes.drawerContainer}>
        <p className={classes.pat}>Patients</p>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon className={classes.searchsize}/>
            </div>
            <InputBase
              placeholder="Search Patient"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
    <Card className={classes.rooott}>
    <CardMedia
        className={classes.cover}
        image="images.jpeg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.contentt}>
        <p className={classes.cpp}>Sara Smith</p>
          <br/>
            <p className={classes.cp}>15 Aug 2020</p>
          
        </CardContent>
      </div>
      <FiberManualRecordIcon
        style={{
        marginTop:20,
        color:'#00cc00',
        height:15,
        marginLeft:34
      }}
      />
    </Card>
    <Card className={classes.rooot}>
    <CardMedia
        className={classes.cover}
        image="images.jpeg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.contentt}>
        <p className={classes.cpp}>James Johnson</p>
          <br/>
          <p className={classes.cp}>No Clearance</p>
          
        </CardContent>
      </div>
      <FiberManualRecordIcon
        style={{
        marginTop:20,
        color:'red',
        height:15,
        marginLeft:5
      }}
      />
    </Card>
    <Card className={classes.rooot}>
    <CardMedia
        className={classes.cover}
        image="images.jpeg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.contentt}>
        <p className={classes.cpp}>Patrice Page</p>
          <br/>
          <p className={classes.cp}>19 Aug 2020</p>
          
        </CardContent>
      </div>
      <FiberManualRecordIcon
        style={{
        marginTop:20,
        color:'#00cc00',
        height:15,
        marginLeft:24
      }}
      />
    </Card>
    <Card className={classes.rooot}>
    <CardMedia
        className={classes.cover}
        image="images.jpeg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.contentt}>
        <p className={classes.cpp}>Derek Diamon</p>
          <br/>
          <p className={classes.cp}>21 Aug 2020</p>
          
        </CardContent>
      </div>
      <FiberManualRecordIcon
        style={{
        marginTop:20,
        color:'#00cc00',
        height:15,
        marginLeft:15
      }}
      />
    </Card>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <div className={classes.colo}>
        <div className={classes.drawcoll}>...</div>
        <div className={classes.set}>
        <table className={classes.pset}>
          <tr>
            <td className={classes.psetd}>Patient Information</td>
            <td className={classes.psett}>Last updated: <b>10:25 AM, today</b></td>
            <MoreHorizIcon color='grey' className={classes.psettt}/>
          </tr>
        </table>

          <table className={classes.changg}>
            <tr>
            <td>
            <table className={classes.chg} cellSpacing="2" cellPadding="1">
            <tr>
              <td rowSpan='5'>
              <Avatar alt="Remy Sharp" src="images.jpeg" className={classes.large} />
              </td>
              <th colSpan='2' className={classes.ccc}>
              Sara Smith
              </th>
            </tr>
            <tr>
              <td className={classes.e1}>
              Phone:
              </td>
              <td className={classes.e2}>302-857-9685
              </td>
            </tr>
            <tr>
              <td className={classes.e1}>
              Email:
              </td>
              <td className={classes.e2}>sarasmith@gmail.com
                   </td>
            </tr>
            <tr>
              <td className={classes.e1}>
              Gender:
              </td>
              <td className={classes.e2}>Female
              </td>
            </tr>
            <tr>
              <td className={classes.e1}>Age:
              </td>
              <td className={classes.e2}>45
              </td>
            </tr>

          </table>
            </td>
            <td>
              <table className={classes.chang}>
                <tr>
                <td className={classes.e1}>Surgery Type:</td>
                <td className={classes.e2}>Rotator Cuff Repair</td>
                </tr>
                <tr>
                <td className={classes.e1}>Surgery Date:</td>
                <td className={classes.e2}>15 Aug 2020</td>
                </tr>
                <tr>
                <td className={classes.e1}>Height (cm):</td>
                <td className={classes.e2}>163</td>
                </tr>
                <tr>
                <td className={classes.e1}>Weight (lb):</td>
                <td className={classes.e2}>110</td>
                </tr>
                <tr>
                <td className={classes.e1}>BMI:</td>
                <td className={classes.e2}>19</td>
                </tr>
              </table>
            </td>
            <td>
            <table className={classes.chng}>
                <tr>
                <td className={classes.e1}>Anesthesiologist:</td>
                <td className={classes.e2}>Dr.Christina Hardaway</td>
                </tr>
                <tr>
                <td className={classes.e1}>Anesthesiologist Phone:</td>
                <td className={classes.e2}>301-896-8745</td>
                </tr>
                <tr>
                <td className={classes.e1}>Anesthesiologist Email</td>
                <td className={classes.e2}>christina@h3a.com</td>
                </tr>
              </table>
            </td>
            <td>
            <table className={classes.cg}>
                <tr>
                <td className={classes.e1}>Surgery Clearance</td>
                </tr>
                <tr>
                <td>
                <button className={classes.button}><p className={classes.bb}>Yes</p></button>
                </td>
                </tr>
              </table>
            </td>
            </tr>
          </table>
          <table border='1' className={classes.menu} cellSpacing='20' cellPadding='10'>
            <tr>
              <td className={classes.m}>
                List of prior<br/>Surgeries
              </td>
              <td className={classes.e1}>
                List of Medical<br/>Diagnosis
              </td>
              <td className={classes.e1}>
              List of<br/>Medications
              </td>
              <td className={classes.e1}>
              Airway<br/>Evaluation
              </td>
              <td className={classes.e1}>
              Anesthesia Clearance and<br/>Recommendation
              </td>
            </tr>
          </table>
          
 
        </div>
        </div>
        <table border='1' className={classes.a} cellPadding='6'>
          <tr className={classes.acol}>
          <td className={classes.ee2}>First Time Surgery</td>
          </tr>
          <tr className={classes.bcol}>
          <td className={classes.ee1}>No</td>
          </tr>
        </table>
        <table border='1' className={classes.a} cellPadding='4'>
          <tr className={classes.acol}>
          <td className={classes.ee2}>Family History of Surgical Complications?</td>
          </tr>
          <tr className={classes.bcol}>
          <td className={classes.ee1}>Yes</td>
          </tr>
        </table>
        <table border='1' className={classes.a} cellPadding='4'>
          <tr className={classes.acol}>
          <td className={classes.ee2}>If Yes, please provide more details</td>
          </tr>
          <tr className={classes.bcol}>
          <td className={classes.ee1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse. </td>
          </tr>
        </table>
        <table border='1' className={classes.ab} cellPadding='4'>
        <caption className={classes.e1} style={{textAlign:"left"}}>Previous Surgeries</caption>
          <tr className={classes.acol}>
          <td className={classes.ee2}>Surgery Type</td>
          <td className={classes.ee2}>Date</td>
          <td className={classes.ee2}>Anesthesia Type</td>
          <td className={classes.ee2}>Surgical Complications</td>
          <td className={classes.ee2}>Anesthetic Complications (nausea,<br/>vomiting, difficult intubation)</td>
          <td></td>
          </tr>
          <tr className={classes.bcol}>
          <td className={classes.ee1}>Shoulder reconstruction</td>
          <td className={classes.ee1}>January 2008</td>
          <td className={classes.ee1}>General "Breathing Tube"</td>
          <td className={classes.ee1}>No</td>
          <td className={classes.ee1}>No</td>
          <td><DeleteIcon className={classes.ee}/>
          <CreateOutlinedIcon className={classes.ee}/>
          </td>
          </tr>
        </table>
        <div>
        <button className={classes.btn}><AddIcon className={classes.cc}/><p className={classes.cccc}>Add Surgery</p></button>
    </div>
      </main>
    </div>
  );
}