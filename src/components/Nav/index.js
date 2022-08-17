// == Import npm
import React from 'react';

// == Import

import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// == Composant
const Nav = () => {
    return (
      <Stack spacing={2}>
        <Pagination count={4} />
      </Stack>
    );
  }

// == Export

export default Nav


