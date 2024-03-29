import css from './ContactItem.module.css';

const ContactItem = ({ contact, onDelete }) => {
  return (
    <>
      <div className={css.wrapper}>
        <p className={css.text}>{contact.name}</p>
        <p className={css.text}>{contact.number}</p>
      </div>
      <button
        type="button"
        onClick={() => onDelete(contact.id)}
        className={css.btn}
      >
        Delete
      </button>
    </>
  );
};

export default ContactItem;
