import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-modal';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

import '../../css/modal.css'
import { closeModal } from '@/store/ui/uiSlice';
import { eventAddNew } from '@/store/calendar/calendarSlice';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');


const now = moment().minutes(0).seconds(0).add(1, 'hours')
const anHourFromNow = now.clone().add(1, 'hours')


export const CalendarModal = () => {

    const [startDate, setStartDate] = useState(now.toDate())
    const [endDate, setEndDate] = useState(anHourFromNow.toDate())
    const [isTitleValid, setIsTitleValid] = useState(true)

    const [formValues, setFormValues] = useState({
        title: 'Evento',
        notes: '',
        start: now.toDate(),
        end: anHourFromNow.toDate()
    });

    const {isModalOpen} = useSelector( state=> state.ui )
    const dispatch = useDispatch()
    

    const { title, notes, start, end } = formValues;
    const handleInputChange = ({ target })=>{

        setFormValues({
            ...formValues,
            [target.name]: target.value 
        })

    }

    const handleCloseModal = () => {
    
        dispatch( closeModal() )    
        
    }

    const handleStartDateChange = (e)=>{
        console.log(e)
        setStartDate(e);
        setFormValues({
            ...formValues,
            start: e
        });
    };

    const handleEndDateChange = (e)=>{
        setEndDate(e);
        setFormValues({
            ...formValues,
            end: e
        });
    };

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        
        if( title.trim().length < 2 ){
            return setIsTitleValid(false);
        }

        setIsTitleValid( true );
        dispatch( 
            eventAddNew( {
                ...formValues,
                id: new Date().getTime(),
                user: {
                    _id: '123',
                    name: 'Pedro'
                }
            } ) 
        )
        handleCloseModal()

    }

    return (
        <div>
            <Modal
                className='modal'
                closeTimeoutMS={200}
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                overlayClassName='modal-fondo'
                style={customStyles}
            >
                <h1> Nuevo evento </h1>
                <hr />
                <form className="container" onSubmit={handleFormSubmit} >

                    <div className="form-group mb-2">
                        <label>Fecha y hora inicio</label>
                        <DateTimePicker 
                            className='form-control'
                            locale='es'
                            onChange={handleStartDateChange}
                            value={startDate}
                        />
                    </div>

                    <div className="form-group mb-2">
                        <label>Fecha y hora fin</label>
                        <DateTimePicker 
                            className='form-control'
                            locale='es'
                            onChange={handleEndDateChange}
                            minDate={ startDate }
                            value={endDate}
                        />
                    </div>

                    <hr />
                    <div className="form-group mb-2">
                        <label>Titulo y notas</label>
                        <input
                            type="text"
                            className={`form-control ${ !isTitleValid && 'is-invalid' } `}  
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={title}
                        />
                        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                    </div>

                    <div className="form-group mb-2">
                        <textarea
                            type="text"
                            className="form-control"
                            onChange={handleInputChange}
                            placeholder="Notas"
                            rows="5"
                            name="notes"
                            value={notes}
                        ></textarea>
                        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>

                </form>
            </Modal>
        </div>
    )
}
