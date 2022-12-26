import {AppBar, Toolbar, styled} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar= styled(AppBar)`
    background:#fff;
`;

const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

const Logo=styled('img')({
   height:55,
   margin:'auto',
   paddingRight:70,
})

const Header =()=>{
    return (
        <Navbar position='static'>
            <Toolbar>
               <MenuIcon style={{color:'#000'}}/>
               <Logo src={url} alt="inshort Image" />
            </Toolbar>
        </Navbar>
    );
}

export default Header;