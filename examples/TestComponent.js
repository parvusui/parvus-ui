
import React from 'react';
import {
  withTheme,
  A,
  Alert,
  Background,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Checkbox,
  Input,
  Label,
  Radio,
  Select,
  Option,
  Textarea
} from '../src';

const TestComponent = props => {
  return (
    <Background styles={{display: 'flex'}}>
      <h1>Anchor tag</h1>
      <A>Link</A>

      <h1>Alert</h1>
      <Alert type="primary">Primary</Alert>
      <Alert type="secondary">Secondary</Alert>
      <Alert type="tertiary">Tertiary</Alert>
      <Alert type="success">Success</Alert>
      <Alert type="error">Error</Alert>
      <Alert type="warning">Warning</Alert>

      <h1>Breadcrumbs</h1>

      <h1>Button</h1>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="tertiary">Tertiary</Button>
      <Button type="success">Success</Button>
      <Button type="error">Error</Button>
      <Button type="warning">Warning</Button>

      <h1>Card</h1>
      <Card styles={{width: '100px'}}>
        <CardHeader>
          Header
        </CardHeader>
        <CardContent>
          Content
        </CardContent>
        <CardFooter>
          Footer
        </CardFooter>
      </Card>

      <h1>Checkbox</h1>
      <Checkbox
        checked={true}
        onChange={() => {}}
      />

      <h1>Drawer</h1>

      <h1>Input</h1>
      <Input
        value="Hello"
        onChange={() => {}}
      />

      <h1>Label</h1>
      <Label>
        Hello
      </Label>

      <h1>Menu</h1>

      <h1>Radio</h1>
      <Radio
        checked={true}
        onChange={() => {}}
      />

      <h1>Select</h1>
      <Select
        onChange={() => {}}
      >
        <Option id="test1" value="test1"/>
        <Option id="test1" value="test2"/>
      </Select>

      <h1>Textarea</h1>
      <Textarea
        value="Hello"
        onChange={() => {}}
      />

      <h1>Tooltip</h1>
    </Background>
  );
};

export default withTheme(TestComponent);
