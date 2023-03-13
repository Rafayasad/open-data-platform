import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { colors } from '../../../utils/colors';
import TextField from '@mui/material/TextField';
import './style.css';

function TextArea(props) {

    const { label, onChange } = props

    return (
        <FloatingLabel style={{ color: colors.gray, fontSize: '13px', padding: 0 }} controlId="floatingTextarea2" label={""}>
            <TextField
                className='w-100'
                id="outlined-multiline-static"
                multiline
                rows={4}
                placeholder={"Type your message here"}
            />
            {/* <Form.Control
                onChange={(e) => onChange(e.target.value)}
                as="textarea"
                className='shadow-none'
                placeholder="Leave a comment here"
                style={{ minHeight: "50%", maxHeight: "100%", fontSize: '13px', color: colors.grey, border: "1px solid #9F9F9F", borderWidth: '1.5px' }}
            /> */}
        </FloatingLabel>
    );
}

export default TextArea;