<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Admin ID</Form.Label>
    <Form.Control type="text" placeholder="Enter your serial id" />
    <Form.Text className="text-muted">
      Your email is secure.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>