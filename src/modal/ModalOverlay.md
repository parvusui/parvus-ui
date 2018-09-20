Modal:

```
<div>
  <p>The modal overlay doesn't display in this example</p>
  <ModalOverlay isOpen={false}>
    <Modal isOpen>
      <Card styles={{ backgroundColor: '#ffffff', width: '400px' }}>
        <CardHeader>
          <span style={{ display: 'flex', justifyContent: 'space-between'}}>
            <span>Header</span>
            <A>X</A>
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
</div>
```
