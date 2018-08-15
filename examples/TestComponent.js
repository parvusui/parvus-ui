
import React from 'react';
import { withTheme, Button, Background, Card, CardHeader, CardContent, CardFooter, A } from '../src';

const TestComponent = props => {
  return (
    <Background styles={{display: 'flex'}}>
      <Card styles={{width: '100px'}}>
        <CardHeader>
          Header
        </CardHeader>
        <CardContent>
          <Button type="primary">Text</Button>
          <A>Link</A>
        </CardContent>
        <CardFooter>
          Footer
        </CardFooter>
      </Card>
    </Background>
  );
};

export default withTheme(TestComponent);
