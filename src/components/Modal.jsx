import Modal from 'react-modal'
import "../css/Modal.css"

const customStyles = {
    content: {
      top: '20%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '380px',
      height: '194px',
    },
  };

  Modal.setAppElement('#root');

export const ConfCloseModal = ({modalIsOpen, modalIsClose, signOutConf})=>{
        return (
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={modalIsClose}
            style={customStyles}
            contentLabel="Gallery modal"
            >
            <div className='modal-box'>
                <button onClick={modalIsClose} className='modal-close-button'>X</button>
                <p className='modal-p'>Do you really want to leave?</p>
                <div className='modal-btn-box'>
                <button onClick={modalIsClose} className='isInActive'>No</button>
                <button onClick={signOutConf} className='isActive'>Yes</button>
                </div>
            </div>
            </Modal>
        );
    }

    const customStylesDelete = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '380px',
        height: '194px',
      },
    };


    export const ConfModal = ({modalIsOpen, deleteModalClose, deleteConf})=>{
      return (
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={deleteModalClose}
          style={customStylesDelete}
          contentLabel="Gallery modal"
          >
          <div className='modal-box'>
              <button onClick={deleteModalClose} className='modal-close-button'>X</button>
              <p className='modal-p'>Are You sure?</p>
              <div className='modal-btn-box'>
              <button onClick={deleteModalClose} className='isInActive'>No</button>
              <button onClick={deleteConf} className='isActive'>Yes</button>
              </div>
          </div>
          </Modal>
      );
  }