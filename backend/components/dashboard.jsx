import React from 'react';
import { Box, H2, Text } from '@adminjs/design-system';

const Dashboard = () => {
  return (
    <Box variant="grey">
      <Box variant="white" style={{ padding: '20px' }}>
        <H2>Welcome to DJ Portfolio Admin Panel</H2>
        <Text>Here you can manage all contact form submissions and inquiries.</Text>
        <Box style={{ marginTop: '20px' }}>
          <Text variant="sm">
            Features:
          </Text>
          <ul>
            <li>View all messages in real-time</li>
            <li>Mark messages as read/unread</li>
            <li>Track message status</li>
            <li>Filter and search through inquiries</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
