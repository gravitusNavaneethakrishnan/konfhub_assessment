import { Grid, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';



const AboutPage = ({ data }) => {


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));


  const applyCustomStyles = (html) => {
    const container = document.createElement('div');
    container.innerHTML = html;

    // Create a wrapper div for the grid and add a class for media query
    const gridWrapper = document.createElement('div');
    gridWrapper.className = 'grid-wrapper'; // Add class name here
    gridWrapper.style.display = 'grid';
    gridWrapper.style.gridTemplateColumns = isMobile ? '1fr' : '1fr 2fr';
    gridWrapper.style.gap = '20px';
    gridWrapper.style.marginBottom = '20px';

    // Create elements for the first grid
    const firstGrid = document.createElement('div');
    const secondGrid = document.createElement('div');

    // Extract elements from the container
    const img = container.querySelector('img');
    const blockquote = container.querySelector('blockquote');
    const paragraph = container.querySelector('p');
    const strong = container.querySelector('strong');
    const em = container.querySelector('em');

    // Create and append h1 element to the second grid
    const h1 = document.createElement('h1');
    h1.textContent = 'ABOUT EVENT';
    h1.style.fontFamily = 'Manrope, sans-serif';
    h1.style.fontSize = '28px';
    h1.style.color = '#333';
    secondGrid.appendChild(h1);

    if (img) {
      img.classList.add('responsive-image');
      firstGrid.appendChild(img);
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
    }
    if (paragraph) {
      paragraph.style.fontFamily = 'Manrope,sans-serif';
      paragraph.style.fontSize = '22px';
    }
    if (blockquote) {
      blockquote.classList.add('blockquote');
      blockquote.style.padding = '10px 20px';
      blockquote.style.margin = '20px 0';
      secondGrid.appendChild(blockquote);
    }

    if (strong) {
      strong.style.color = '#2c3e50';
    }

    if (em) {
      em.style.color = '#e74c3c';
    }

    // Append grid elements to the grid wrapper
    gridWrapper.appendChild(firstGrid);
    gridWrapper.appendChild(secondGrid);

    // Create a second wrapper div for the grid
    const secondgridWrapper = document.createElement('div');
    secondgridWrapper.style.display = 'grid';
    secondgridWrapper.style.gridTemplateColumns = '1fr';
    secondgridWrapper.style.gap = '20px';
    secondgridWrapper.style.marginBottom = '20px';

    // Create elements for the grid
    const thirdGrid = document.createElement('div');
    const fourthGrid = document.createElement('div');

    // Extract elements from the container
    const iframe = container.querySelector('iframe');
    const table = container.querySelector('table');

    // Append grid elements to the grid wrapper
    secondgridWrapper.appendChild(thirdGrid);
    secondgridWrapper.appendChild(fourthGrid);

    // Append the iframe below the grid
    if (iframe) {
      iframe.style.width = '100%';
      iframe.style.height = '550px';
      thirdGrid.appendChild(iframe);
    }

    if (table) {
      table.style.width = '100%';
      table.style.borderCollapse = 'collapse';
      table.style.margin = '20px 0';
      fourthGrid.appendChild(table);

      const ths = table.querySelectorAll('th');
      ths.forEach((th) => {
        th.style.border = '1px solid #ddd';
        th.style.padding = '8px';
        th.style.backgroundColor = '#f2f2f2';
      });

      const tds = table.querySelectorAll('td');
      tds.forEach((td) => {
        td.style.border = '1px solid #ddd';
        td.style.padding = '8px';
      });
    }

    // Clear the container and append the grid wrapper
    container.innerHTML = '';
    container.appendChild(gridWrapper);
    container.appendChild(secondgridWrapper);

    // Append the style tag for responsive design
    const style = document.createElement('style');
    style.innerHTML = `
      @media (max-width: 900px) {
        .responsive-image {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);

    return container.innerHTML;
  };


  const styledDescription = applyCustomStyles(data.description);

  return (
    <>
      <Grid
        pt={{ xs: 6, sm: 8, md: 8, lg: 8 }}
        pb={{ xs: 6, sm: 8, md: 8, lg: 8 }}
        justifyContent={{ lg: 'space-between', md: 'space-between', sm: 'space-between', xs: 'space-between' }}
        display={{ xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex', }}
        flexDirection={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
      >
        <Grid item md={8} sm={12} xs={12} lg={8}
          sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
          pl={{ xs: 4, sm: 8, md: 8, lg: 16 }}
          pr={{ xs: 4, sm: 8, md: 8, lg: 16 }}
        >
          {/* <Typography variant='h3'>
            ABOUT EVENT
          </Typography> */}
          <br />
          <div
            className="custom-description"
            dangerouslySetInnerHTML={{ __html: styledDescription }}
          />
        </Grid>
      </Grid>
    </ >
  )
}

export default AboutPage;
