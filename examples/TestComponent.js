import React from 'react';
import { withTheme, Button, Container } from '../src';

const TestComponent = props => {
  return (
    <Container>
      <Button type="primary">Text</Button>
    </Container>
  );
};

export default withTheme(TestComponent);
