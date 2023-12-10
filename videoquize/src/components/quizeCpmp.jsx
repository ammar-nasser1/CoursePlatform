
import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setQuize } from '../store/action'
import { setShowQuize } from '../store/action'
export default function quizeCpmp() {


  const showQuiz = useSelector(state => state.showQuiz)
  const dispatch = useDispatch()
  const handelClick = () => {
    dispatch(setShowQuize(false))
    console.log("sho child", showQuiz);

  }
  useEffect(() => {
    dispatch(setShowQuize(false))
    console.log("show quizada", showQuiz);
  }, [showQuiz, dispatch])
  return (
    <div >
      <Form>
        <fieldset >
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="Disabled input"

            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
            <Form.Select id="disabledSelect">
              <option>Disabled select</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              id="disabledFieldsetCheck"
              label="Can't check this"
            />
          </Form.Group>
          <Button type="button" onClick={handelClick}>Submit</Button>
        </fieldset>
      </Form>

    </div>
  )
}
