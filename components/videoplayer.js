import React from 'react';
import { Box } from '@chakra-ui/react';

const VideoPlayer = ({ videoSrc, videoType }) => (
  <Box>
    <video width="100%" height="auto" controls muted>
      <source src={videoSrc} type={videoType} />
      Your browser does not support the video tag.
    </video>
  </Box>
);

export default VideoPlayer;
