import { alpha } from '@mui/material/styles';

function Button(theme) {
  return {
    MuiButton: {

      styleOverrides: {
        primaryButton: {
          border: '1px solid #572148',
          borderRadius: '8px',
          background: 'transparent',
          height: '47px',
          color: ' #E8E8E8',
          textAlign: 'center',
          fontFamily: 'Manrope,sans-serif',
          fontSize: '16px',
          fontWeight: '400',
          maxWidth: '237px',

          '@media (min-width: 768px)': {
            width: '273px',
          },
          '@media (min-width: 600px)': {
            width: '180px',
          },
          '@media (min-width: 1200px)': {
            width: '273px',
          },
          '&:hover': {
            background: 'transparent',
          },
        },

        //secondary
        secondaryButton: {
          borderRadius: '8px',
          background: '#572148',
          height: '47px',
          color: ' #FFFFFF',
          textAlign: 'center',
          fontFamily: 'Manrope,sans-serif',
          fontSize: '16px',
          fontWeight: '400',
          maxWidth: '237px',
          '@media (min-width: 768px)': {
            width: '273px',
          },
          '@media (min-width: 600px)': {
            width: '180px',
          },
          '@media (min-width: 1200px)': {
            width: '273px',
          },
          '&:hover': {
            background: '#572148',
          },
        },

        //Sign In
        signInButton: {
          borderRadius: '5px',
          background: '#572148',
          height: '32px',
          color: ' #FFFFFF',
          textAlign: 'center',
          fontFamily: 'Manrope,sans-serif',
          fontSize: '16px',
          fontWeight: '400',
          maxWidth: '127px',
          '@media (min-width: 768px)': {
            width: '273px',
          },
          '@media (min-width: 600px)': {
            width: '180px',
          },
          '@media (min-width: 1200px)': {
            width: '273px',
          },
          '&:hover': {
            background: '#572148',
          },
        },

        //login button
        logInButton: {
          borderRadius: '5px',
          background: '#572148',
          height: '32px',
          color: ' #FFFFFF',
          textAlign: 'center',
          fontFamily: 'Manrope,sans-serif',
          fontSize: '16px',
          fontWeight: '700',
          '&:hover': {
            background: '#572148',
          },
        },

        //request otp
        requestOTPButton: {
          border: '1px solid #572148',
          borderRadius: '5px',
          background: 'transparent',
          height: '32px',
          color: ' #572148',
          textAlign: 'center',
          fontFamily: 'Manrope,sans-serif',
          fontSize: '16px',
          fontWeight: '700',
          '&:hover': {
            background: 'transparent',
          },
        },

        //speakerButon
        speakerButton: {
          border: '1px solid #572148',
          borderRadius: '8px',
          background: 'transparent',
          height: '47px',
          color: ' #000',
          textAlign: 'center',
          fontFamily: 'Manrope,sans-serif',
          fontSize: '16px',
          fontWeight: '400',
          '&:hover': {
            background: 'transparent',
          },
        },
        //
        //workshopButton
        workshopButton: {
          borderRadius: '8px',
          background: '#572148',
          height: '47px',
          color: ' #FFFFFF',
          textAlign: 'center',
          fontFamily: 'Manrope,sans-serif',
          fontSize: '16px',
          fontWeight: '400',
          '&:hover': {
            background: '#572148',
          },
        },
        viewprojectbutton: {
          borderRadius: '30px',
          background: 'transparent',
          border: '2px solid #FFF',
          height: '47px',
          color: ' #E8E8E8',
          textAlign: 'center',
          fontFamily: 'Manrope,sans-serif',
          fontSize: '16px',
          fontWeight: '400',
          maxWidth: '237px',

          '@media (min-width: 768px)': {
            width: '273px',
          },
          '@media (min-width: 600px)': {
            width: '180px',
          },
          '@media (min-width: 1200px)': {
            width: '273px',
          },
        },
        aboutbutton: {
          borderRadius: '30px',
          background: '#121212',
          '&:hover': {
            background: '#121212',
          },
          height: '47px',
          color: ' #E8E8E8',
          textAlign: 'center',
          fontFamily: 'Manrope,sans-serif',
          fontSize: '16px',
          fontWeight: '400',
          maxWidth: '159px',

          '@media (min-width: 768px)': {
            width: '273px',
          },
          '@media (min-width: 600px)': {
            width: '140px',
          },
          '@media (min-width: 1200px)': {
            width: '159px',
          },
        },
        viewprojectmainbutton: {
          borderRadius: '30px',
          background: 'transparent',
          border: '2px solid #FFF',
          height: '40px',
          color: ' #E8E8E8',
          textAlign: 'center',
          fontFamily: 'Manrope,sans-serif',
          fontSize: '14px',
          fontWeight: '400',
          maxWidth: '190px',

          '@media (min-width: 768px)': {
            width: '190px',
          },
          '@media (min-width: 600px)': {
            width: '140px',
          },
          '@media (min-width: 1200px)': {
            width: '190px',
          },
        },
        sendbutton: {
          borderRadius: '30px',
          background: 'linear-gradient(to right, #002E8C, #0051F7)',
          height: '40px',
          color: ' #E8E8E8',
          textAlign: 'center',
          fontFamily: 'Manrope,sans-serif',
          fontSize: '16px',
          fontWeight: '400',
          maxWidth: '143px',

          '@media (min-width: 768px)': {
            width: '143px',
          },
          '@media (min-width: 600px)': {
            width: '143px',
          },
          '@media (min-width: 1200px)': {
            width: '143px',
          },
        },
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows.primary,
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}

export default Button;
