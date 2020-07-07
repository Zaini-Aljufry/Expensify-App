import React from 'react'
import Modal from 'react-modal'

const RemoveModal = (props) => (
    <Modal
        isOpen={!!props.showModal}
        contentLabel="Remove modal"
        onRequestClose={props.handleCloseModal}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Remove Expense?</h3>
        <p>{props.body}</p>
        <button className="button button--modal" onClick={props.handleConfirm} >Okay</button>
        <button className="button button--modal" onClick={ props.handleCloseModal }>{ props.cancelText }</button>
    </Modal>
)

module.exports = {
    RemoveModal
}