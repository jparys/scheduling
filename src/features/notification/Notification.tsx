import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { selectNotification, cancel, confirm } from './notificationSlice'

export function Notification() {
    const dispatch = useAppDispatch();
    const notificationState = useAppSelector(selectNotification);
    
    const handleCancel = () => {
        dispatch(cancel())
    }

    const handleYes = () => {
        dispatch(confirm())
    }

    return (
        <div>
            <Modal show={notificationState.show} onHide={handleCancel} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{notificationState.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{notificationState.message}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                </Button>
                    <Button variant="primary" onClick={handleYes}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}