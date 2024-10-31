/* eslint-disable react/prop-types */
import s from '../Contact/Contact.module.css'
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function Contact({ name, number, onDelete }) {
  return (
    <div className={s.wrapper}>
      <li className={s.items}>
        <div className={s.contactInfo}>
          <div>
            <div className={s.iconWrap}>
              <FaUser className={s.icon} />
              <p className={s.name}>{name}</p>
            </div>
            <div className={s.iconWrap}>
              <FaPhoneAlt />
              <p className={s.number}>{number}</p>
            </div>
          </div>
        </div>
        <button className={s.button} onClick={onDelete}>
          Delete
        </button>
      </li>
    </div>
  );
}

export default Contact 