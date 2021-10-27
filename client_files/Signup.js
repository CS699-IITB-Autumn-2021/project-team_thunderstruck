<Form>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Admin name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>E-mail</Form.Label>
    <Form.Control type="email" placeholder="Enter your Email address" />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasiccPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm your Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Sign up!
  </Button>
</Form>