import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { colors } from '../../../utils/colors';

function TextArea(props) {

    const { label } = props

    return (
        <FloatingLabel style={{ color: colors.gray, fontSize: '13px'}} controlId="floatingTextarea2" label={label}>
            <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '80px', fontSize: '13px', color: colors.grey, border: "solid rgb(112, 112, 112)", borderWidth:'1.5px' }}
            />
        </FloatingLabel>
    );
}

export default TextArea;