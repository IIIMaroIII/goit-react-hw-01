import './mailbox.module.css';

const Mailbox = ({ username, unreadMessages }) => {
  return (
    <>
      <p>Hello {username}</p>
      {unreadMessages.length > 0 ? (
        <p>You have {unreadMessages.length} unread messages</p>
      ) : (
        'No unread messages'
      )}
    </>
  );
};

Mailbox.defaultProps = {
  unreadMessages: [],
};

export default Mailbox;
