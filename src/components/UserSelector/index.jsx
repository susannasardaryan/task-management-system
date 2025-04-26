import { USERS } from '../../constants/consts.js';
import { useState } from "react";
import './index.css'

const UserSelector = ({ assignee, onHandleUserSelect, disabled }) => {
    const [isShowUserList, setShowUserList] = useState(false);

    const handleUserSelect = (user) => {
        onHandleUserSelect(user);
        setShowUserList(false);
    }

    const handleClick = () => {
        if (!disabled) setShowUserList(true)
    }
    return (
        <>
            <span
                className={'user-assigned-input'}
                onClick={handleClick}
            >{assignee.name || 'Add assignee to task'}</span>
            <div className={'change-user-list'} hidden={!isShowUserList}>
                {USERS.map((user) => <div key={user.id}
                    className={'change-user-list-item'}
                    onClick={() => handleUserSelect(user)}>
                    <img src={user.avatar} alt="user avatar" className={'change-user-avatar'} />
                    <span className={'change-user-name'}>{user.name}</span>
                </div>)}
            </div>
        </>
    )
}

export default UserSelector;