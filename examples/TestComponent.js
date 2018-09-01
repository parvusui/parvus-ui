
import React, { Component } from 'react';
import cxs from "cxs";
import {
  withTheme,
  A,
  Alert,
  Background,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Checkbox,
  Input,
  Label,
  Modal,
  ModalOverlay,
  Radio,
  Select,
  Option,
  Textarea,
  Tooltip
} from '../src';

class TestComponent extends Component {
  state = {
    checkboxChecked: true,
    inputText: 'Hello',
    modalOpen: false,
    textareaText: 'Hello'
  }

  render() {
    const {
      checkboxChecked,
      inputText,
      modalOpen,
      textareaText
    } = this.state;

    return (
      <Background>
        <h1>Anchor tag</h1>
        <A>Link</A>

        <h1>Alert</h1>
        <Alert type="primary">Primary</Alert>
        <Alert type="secondary">Secondary</Alert>
        <Alert type="tertiary">Tertiary</Alert>
        <Alert type="success">Success</Alert>
        <Alert type="error">Error</Alert>
        <Alert type="warning">Warning</Alert>

        <h1>Breadcrumb</h1>
        <Breadcrumb>
          <BreadcrumbItem><A>Home</A></BreadcrumbItem>
          <BreadcrumbItem><A>About</A></BreadcrumbItem>
          <BreadcrumbItem><A>Contact us</A></BreadcrumbItem>
        </Breadcrumb>
        <h1>Button</h1>
        <div className={cxs({ display: 'flex', justifyContent: 'flex-start' })}>
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
          <Button type="tertiary">Tertiary</Button>
          <Button type="success">Success</Button>
          <Button type="error">Error</Button>
          <Button type="warning">Warning</Button>
        </div>

        <h1>Card</h1>
        <Card styles={{ width: '400px' }}>
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
        <Label htmlFor="testCheckboxMain">
         Test checkbox
        </Label>
        <Checkbox
          id="testCheckboxMain"
          checked={checkboxChecked}
          onChange={() => this.setState({ checkboxChecked: !checkboxChecked })}
        />

        <h1>Input</h1>
        <Label htmlFor="testInputMain">
         Test input
        </Label>
        <Input
          id="testInputMain"
          value={inputText}
          onChange={(event) => { this.setState({ inputText: event.target.value })}}
        />

        <h1>Label</h1>
        <Label htmlFor="testLabel">
          <b>Hello </b>
        </Label>
        <Input
          id="testLabel"
          value="Hello"
          onChange={() => { }}
        />

        <h1>Modal</h1>
        <Button type="primary" onClick={() => this.setState({ modalOpen: true })}>Open Modal</Button>
        <ModalOverlay isOpen={modalOpen}>
          <Modal isOpen={modalOpen}>
            <Card styles={{ backgroundColor: '#ffffff', width: '400px' }}>
              <CardHeader>
                <span className={cxs({ display: 'flex', justifyContent: 'space-between'})}>
                  <span>Header</span>
                  <A onClick={() => this.setState({ modalOpen: false })}>X</A>
                </span>
              </CardHeader>
              <CardContent>
                Content
            </CardContent>
              <CardFooter>
                Footer
            </CardFooter>
            </Card>
          </Modal>
        </ModalOverlay>

        <h1>Radio</h1>
        <Label htmlFor="radio1">
          Radio 1
        </Label>
        <Radio
          id="radio1"
          checked={true}
          onChange={() => { }}
        />
        <Label htmlFor="radio2">
          Radio 2
        </Label>
        <Radio
          id="radio2"
          checked={false}
          onChange={() => { }}
        />

        <h1>Select</h1>
        <Label htmlFor="testSelect">
         Test select
        </Label>
        <Select id="testSelect">
          <Option id="option1" value="test1">Test 1</Option>
          <Option id="option2" value="test2">Test 2</Option>
        </Select>

        <h1>Textarea</h1>
        <Label htmlFor="testTextarea">
         Test textarea
        </Label>
        <Textarea
          id="testTextarea"
          value={textareaText}
          onChange={(event) => { this.setState({ textareaText: event.target.value })}}
        />

        <h1>Tooltip</h1>
        <Tooltip
          tooltipText="This is test text"
          label="Hover over me"
          onHover={false}
        />
      </Background>
    );
  };
};

export default withTheme(TestComponent);
