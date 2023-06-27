import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export default function RegisterForm(bShow) {

    let [isShow,setIsShow] = useState(bShow);
  return (
    <>
      <Modal show={isShow} onHide={()=>{}} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>

        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={()=>{setIsShow(false)}}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{setIsShow(false)}}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}
