function Courses() {
  return (
    <>
      <Form sm={{ offset: 5 }}>
        <Form.Group controlid="fromNameSurname">
          <Row>
            <Col sm={(6, { span: 3, offset: 3 })}>
              <Form.Label>Search</Form.Label>
              <Form.Control placeholder="What do you want it ?" />
            </Col>
          </Row>
          <Button
            variant="primary"
            className="mt-3"
            onClick={() => {
              console.log("search");
            }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default Courses;