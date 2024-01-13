import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect,useDispatch, } from "react-redux";
import { updateFormData, addBook } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';  // Importa o hook useHistory

const FormAddBooks = ({ formData, updateFormData, addBook }) => {
    const [formDataLocal, setFormDataLocal] = useState({ bookName: '', link: '' });
    const navigate = useNavigate();

       
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormDataLocal((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
        // updateFormData({ [name]: value });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        addBook(formDataLocal);
        setFormDataLocal({ bookName: '', link: '' });
        // console.log(data)
        navigate('/cards');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Nome do Livro</Form.Label>
                <Form.Control name="bookName" value={formDataLocal.bookName} onChange={handleChange} />
                <Form.Label>Link</Form.Label>
                <Form.Control name="link" value={formDataLocal.link} onChange={handleChange} />
            </Form.Group>

            <Button variant="secondary" type="submit"> Criar Item</Button>
        </Form>
    );
};

const mapStateToProps = (state) => ({
    formData: state.form.formData,
});

export default connect(mapStateToProps, { updateFormData, addBook })(FormAddBooks);
