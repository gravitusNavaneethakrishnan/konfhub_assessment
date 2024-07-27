import { Outlet } from 'react-router-dom';

// @mui
import { styled } from '@mui/material/styles';
import Header from './header';

//import files

//StyledRoot
const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

//Main
const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  [theme.breakpoints.up('lg')]: {
  },
}));
function DashboardLayout({ data }) {

  return (
    <StyledRoot>
      <Header data={data} />
      <Main sx={{ backgroundColor: '#FFFFFF' }}>
        <Outlet />
      </Main>
    </StyledRoot>
  )
}

export default DashboardLayout;