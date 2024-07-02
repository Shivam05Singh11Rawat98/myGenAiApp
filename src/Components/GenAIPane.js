import React from 'react';
import { Box, List, ListItem, Divider, Typography, Paper, styled } from '@mui/material';

const Container = styled(Box)({
  display: 'flex',
  height: '100vh',
  width: '100%',
  backgroundColor: '#252525',
  color:'#fff'
});

const HistoryPane = styled(Box)({
  width: '25%',
  borderRight: '1px solid #ddd',
  overflowY: 'auto',
  backgroundColor: '#1a1a1a',
  color:'#fff'
});

const MainPane = styled(Box)({
  width: '75%',
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
});

const MessageBox = styled(Paper)({
  padding: '8px',
  marginBottom: '8px',
});

export const GenAIPane = () => {
  return (
    <Container>
      <HistoryPane>
        <List>
          <ListItem>
            <Typography variant="h6" color='#fff'>History</Typography>
          </ListItem>
          <Divider />
          {/* Example history items */}
          <ListItem button>
            <Typography variant="body1">Chat 1</Typography>
          </ListItem>
          <Divider />
          <ListItem button>
            <Typography variant="body1">Chat 2</Typography>
          </ListItem>
          <Divider />
          {/* Add more history items as needed */}
        </List>
      </HistoryPane>
      <MainPane>
        <Typography variant="h6" gutterBottom>
          ChatGPT Main Pane
        </Typography>
        <MessageBox>
          <Typography variant="body1">User: Hello, ChatGPT!</Typography>
        </MessageBox>
        <MessageBox>
          <Typography variant="body1">ChatGPT: Hello! How can I assist you today?</Typography>
        </MessageBox>
        {/* Add more chat messages as needed */}
      </MainPane>
    </Container>
  );
};
