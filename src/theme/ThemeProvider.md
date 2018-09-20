Theme Provider:

```
  <ThemeProvider
    theme={{
      backgroundColor: '#fefefe',
      primaryColor: '#007bff',
      secondaryColor: '#6c757d',
      tertiaryColor: '#fefefe',
      successColor: '#3cb371',
      errorColor: '#ff0000',
      warningColor: '#ffa500',
      borderRadius: 0,
      fontColor: '#000000',
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
    }}
  >
    <div style={{ textAlign: 'center' }}>
      <Alert type="success">
        An alert with a theme!
      </Alert>
      <br/>
      <Button type="secondary">A button with a theme!</Button>
    </div>
  </ThemeProvider>
```