import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { FaPencilAlt } from 'react-icons/fa';
import { GrStatusGood } from 'react-icons/gr';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import useInput from "./../../hooks/useInput";


function CommonTextbox(props) {

  const {
    textboxLabel,
    textboxReadOnly, // boolean
    textboxType, // text, number, email, date
    textboxOnSave
  } = props;

  const { value: textboxValue, onChange: textboxOnchange } = useInput(username);

  return (
    <div className="-puggysoft-common-textbox" >
      <>
        <InputGroup className="mb-3">
          <Form.Label column sm="2">
            <div><FaPencilAlt /> {textboxLabel}</div>

          </Form.Label>
          <>
            <div onClick={textboxOnSave}>
              <GrStatusGood />
            </div>
            <div onClick={""}>
              <AiOutlineCloseCircle />
            </div>
          </>
          <FormControl
            readOnly={textboxReadOnly}
            onChange={textboxOnchange}
            value={textboxValue}
            type={textboxType}
          />
        </InputGroup>
      </>
    </div>
  )
}

export default CommonTextbox;
