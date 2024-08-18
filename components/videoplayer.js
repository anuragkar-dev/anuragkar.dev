import React from 'react';
import { Box } from '@chakra-ui/react';

const VideoPlayer = () => (
  <Box>
    <video width="100%" height="auto" controls muted>
      <source src="video/wandersync.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </Box>
);

export default VideoPlayer;