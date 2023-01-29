import React from 'react';
import { useNavigate } from 'react-router';

import '../../styles/CreateEmployee.css'
import Header from '../Features/Header';
import FormInfos from '../Features/FormInfos';
import useModal from '../utils/useModal';
import Modal from '../Features/Modal';

export default function CreateEmployee() {
  const { isShowing: isCreateCompleted, toggle: toggleModal } = useModal();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/employee");
  }

  return (
    <div>
      <Header title="Create Employee"/>
      <FormInfos toggleModal={toggleModal}/>
      <Modal
        isShowing={isCreateCompleted}
        hide={toggleModal}
        title="Employee created !">
        <p className="hrnet-modalInfo">Where do you want to go ?</p>
        <div className="hrnet-modalButtonGroup">
          <button className="hrnet-modalButtonCreate" onClick={toggleModal}>Create employee</button>
          <button className="hrnet-modalButtonList" onClick={handleSubmit}>List employee</button>
        </div>
      </Modal>
    </div>
  )
}
