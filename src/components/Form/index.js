import React, { useState } from 'react';
import { Form, RadioGroup, Radio, Input, Notification, useToaster } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Button from '../Button/Button';
import './Form.css';


const FormComponent = ({ onFormComplete, ...props}) => {

    // Options in Form
    // Client Type
    const clientTypeOptions = [
        { label: 'An employer interested in employer-sponsored wills', value: 'employer' },
        { label: 'An attorney interested in becoming a Bestated partner', value: 'attorney' },
        { label: 'A financial advisor interested in the beneficiary API', value: 'financialAdvisor' },
        { label: 'An individual looking for more information', value: 'individual' },
        { label: 'Other', value: 'other'}
    ].map((option) => (
        <Radio  
            name='type'
            key={option.value}
            value={option.value}
            required
            onChange={(value) => setFormValue({...formValue, type: value})}
        >
            {option.label}
        </Radio>
    ));


    // Company Size 
    const companySizeOptions = [
        { label: '1 - 10 people', value: '1 - 10' },
        { label: '11 - 20 people', value: '11 - 20' },
        { label: '21 - 50 people', value: '21 - 50' },
        { label: '50 - 250 people', value: '50 - 250' },
        { label: '250+', value: '250+' }
    ].map((option) => (
        <Radio 
            key={option.value}
            value={option.value}
            onChange={(value) => setFormValue({...formValue, size: value})}
        >
            {option.label}
        </Radio>
    ));

    // States 
    const usStates = [
        { label: 'Choose a state', value: '' },
        { label: 'Alabama', value: 'AL' },
        { label: 'Alaska', value: 'AK' },
        { label: 'Arizona', value: 'AZ' },
        { label: 'Arkansas', value: 'AR' },
        { label: 'California', value: 'CA' },
        { label: 'Colorado', value: 'CO' },
        { label: 'Connecticut', value: 'CT' },
        { label: 'Delaware', value: 'DE' },
        { label: 'Florida', value: 'FL' },
        { label: 'Georgia', value: 'GA' },
        { label: 'Hawaii', value: 'HI' },
        { label: 'Idaho', value: 'ID' },
        { label: 'Illinois', value: 'IL' },
        { label: 'Indiana', value: 'IN' },
        { label: 'Iowa', value: 'IA' },
        { label: 'Kansas', value: 'KS' },
        { label: 'Kentucky', value: 'KY' },
        { label: 'Louisiana', value: 'LA' },
        { label: 'Maine', value: 'ME' },
        { label: 'Maryland', value: 'MD' },
        { label: 'Massachusetts', value: 'MA' },
        { label: 'Michigan', value: 'MI' },
        { label: 'Minnesota', value: 'MN' },
        { label: 'Mississippi', value: 'MS' },
        { label: 'Missouri', value: 'MO' },
        { label: 'Montana', value: 'MT' },
        { label: 'Nebraska', value: 'NE' },
        { label: 'Nevada', value: 'NV' },
        { label: 'New Hampshire', value: 'NH' },
        { label: 'New Jersey', value: 'NJ' },
        { label: 'New Mexico', value: 'NM' },
        { label: 'New York', value: 'NY' },
        { label: 'North Carolina', value: 'NC' },
        { label: 'North Dakota', value: 'ND' },
        { label: 'Ohio', value: 'OH' },
        { label: 'Oklahoma', value: 'OK' },
        { label: 'Oregon', value: 'OR' },
        { label: 'Pennsylvania', value: 'PA' },
        { label: 'Rhode Island', value: 'RI' },
        { label: 'South Carolina', value: 'SC' },
        { label: 'South Dakota', value: 'SD' },
        { label: 'Tennessee', value: 'TN' },
        { label: 'Texas', value: 'TX' },
        { label: 'Utah', value: 'UT' },
        { label: 'Vermont', value: 'VT' },
        { label: 'Virginia', value: 'VA' },
        { label: 'Washington', value: 'WA' },
        { label: 'West Virginia', value: 'WV' },
        { label: 'Wisconsin', value: 'WI' },
        { label: 'Wyoming', value: 'WY' },
        { label: 'Oversea', value: 'oversea'}
    ].map((o, index) => (
        <option 
            key={o.value}
            value={o.value} 
            disabled={index===0} 
        >
            {o.label}
        </option>
    ))


    // Collect Information
    const [formValue, setFormValue] = useState({
        contactName: '',
        type: '',
        companyName: '',
        size: '',
        email: '',
        phone: '',
        state: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [loading, setLoading] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    const validateForm = () => {
        const errors = [];
    
        if (!formValue.contactName.trim()) {
          errors.push('Name is required.');
        }
    
        if (!formValue.type) {
          errors.push('Please select your client type.');
        }
    
        if (!formValue.email.trim()) {
          errors.push('Email is required.');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValue.email)) {
          errors.push('Please enter a valid email address.');
        }
    
        if (!formValue.state) {
          errors.push('State is required.');
        }
    
        if (!formValue.message.trim()) {
          errors.push('Message is required.');
        }
    
        setHasErrors(errors.length > 0);
        setErrorMessages(errors);
    
        return errors.length === 0; 
    };

    // Noticifation
    const toaster = useToaster();
    const showNotification = (type) => {
        toaster.push(
            <Notification 
                type={type}
                header={type === 'error' ? 'Error' : 'Success'}
                closable
            >
                {type === 'error' ? 'An error occurred' : 'Your Form Info has been submitted successfully'}
            </Notification>,
            { placement: 'topCenter'}
        );
    };

    const handleSubmit = async() => {

        if (validateForm()){
            console.log(`formValue: ${JSON.stringify(formValue)}`); 

            // process.env.REACT_APP_BACKEND_URL
            // process.env.REACT_APP_BACKEND_PORT

            const REACT_APP_BACKEND_URL = 'https://api.bestated.ai';
            const REACT_APP_BACKEND_PORT = 443;

            // Saving Data throught API 
            try {

                setLoading(true);

                const response = await fetch(`${REACT_APP_BACKEND_URL}:${REACT_APP_BACKEND_PORT}/submit`, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValue),
                });
    
                if (response.ok) {
                    // alert('Your Info has been submitted successfully!');
                    showNotification('success');
                    onFormComplete(true);

                } else {

                    // alert('Failed to submit data.');
                    showNotification('error')

                }
            } catch (error) {

                console.error('Error submitting data:', error);
                showNotification('error')
                // alert('An error occurred while submitting data.');

            } finally {
                setLoading(false);
            }

        } else {
            console.log(`Missing Info `);
        }
    } 




    return (
        <div className='form-container'>
            <Form
                fluid
                formValue={formValue}
                onChange={setFormValue}
                onSubmit={handleSubmit}
            >
                {/* Contact Name */}
                <Form.Group>
                    <Form.ControlLabel htmlFor='name'><p>Name <span id='req'>*</span></p></Form.ControlLabel>
                    <Input 
                        placeholder='Enter your full name'
                        value={formValue.contactName}
                        onChange={(value) => setFormValue({...formValue, contactName: value})}
                        required
                    />
                </Form.Group>

                {/* Client Type */}
                <Form.Group>
                    <Form.ControlLabel><p>Who are you ? <span id='req'>*</span></p></Form.ControlLabel>
                    <RadioGroup name='type'>
                        {clientTypeOptions}
                    </RadioGroup>
                </Form.Group>

                {/* Company Name  */}
                <Form.Group>
                    <Form.ControlLabel htmlFor='company'><p>Company Name <span id='optional'>(optional)</span></p></Form.ControlLabel>
                    <Input 
                        id='companyName'
                        type='text'
                        placeholder='Enter your company name'
                        value={formValue.companyName}
                        onChange={(value) => setFormValue((prev) => ({...prev, companyName: value}))}
                    />
                </Form.Group>


                {/* Company Size  */}
                <Form.Group>
                    <Form.ControlLabel><p>Number of employees <span id='optional'>(optional)</span></p></Form.ControlLabel>
                    <RadioGroup name='size'>
                        {companySizeOptions}
                    </RadioGroup>
                </Form.Group>
                

                {/* Email  */}
                <Form.Group>
                    <Form.ControlLabel htmlFor='email'><p>Email <span id='req'>*</span></p></Form.ControlLabel>
                    <Input 
                        id='email'
                        name='email'
                        placeholder='Give us the best email to contact you at'
                        value={formValue.email}
                        onChange={(value) => setFormValue((prev) => ({...prev, email: value}))}
                        required
                    />
                </Form.Group>


                {/* Phone  */}
                <Form.Group>
                    <Form.ControlLabel htmlFor='phone'><p>Phone <span id='optional'>(optional, but suggested)</span></p></Form.ControlLabel>
                    <Input 
                        id='phone'
                        name='phone'
                        placeholder='Enter your phone number'
                        value={formValue.phone}
                        onChange={(value) => setFormValue((prev) => ({...prev, phone: value}))}
                    />
                </Form.Group>


                {/* US states */}
                <Form.Group>
                    <Form.ControlLabel htmlFor='state'><p>State <span id='req'>*</span></p></Form.ControlLabel>
                    <select
                        name='state'
                        value={formValue.state || ''}  
                        onChange={(e) => setFormValue({ ...formValue, [e.target.name] : e.target.value })}
                        required
                    >
                        {usStates}
                    </select>
                </Form.Group>

                {/* Leave a message */}
                <Form.Group>
                    <Form.ControlLabel ><p>Message <span id='req'>*</span></p></Form.ControlLabel>  
                    <Input
                        as='textarea'
                        rows={5}
                        placeholder='Shoot us a message!'
                        value={formValue.message}
                        onChange={(value) => setFormValue({ ...formValue, message: value})}
                        required
                    />
                </Form.Group>

                {/* Submit Button */}
                <Form.Group>
                    <Button 
                        textDisplay='Submit Message'
                        state='primary'
                        type='submit'
                    />

                </Form.Group>

            </Form>

            {loading && (
                <div className="overlay">
                    <div className="spinner"></div>
                </div>
            )}

        </div> 
    );
};


export default FormComponent;