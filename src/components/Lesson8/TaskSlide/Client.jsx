import React from "react";
import './Client.css'
const ClientCard = (props) => {
  const { name, phone, card } = props;

  return (
    <div  className={(card&&name&&phone)?'background-gray':'' || card?'':'background-yellow'}  style={{ width: "18rem",color:'black' }}>
      <div className="card-body">
        <h5 className="card-title">
          Имя клиента: { name!==''?name : 'Anonimus'}
        </h5>
        {phone? 
        <h6 className="card-subtitle mb-2 text-muted">Телефон:{phone} </h6>:''
        }
        <p  >Номер карты: {card? card : 'Card is not specified'}</p>
      </div>
    </div>
  );
};
export default ClientCard;