import {USERS} from "../../constants/consts.js";
import {useState} from "react";
import './index.css'

const UserSelector = ({assignee, onHandleUserSelect}) => {
    const [isShowUserList, setShowUserList] = useState(false);

    const handleUserSelect = (user) => {
        onHandleUserSelect(user);
        setShowUserList(false);
    }
    return (
        <>
            <input  type={'text'}
                    value={assignee.name}
                    defaultValue={assignee.name}
                    className={'user-assigned-input'}
                    placeholder={'Add Task Assignee'}
                    onClick={() => setShowUserList(true)}
                    required={true}
            />
            <div className={'change-user-list'} style={{display: isShowUserList ? '' : 'none'}}>
                {USERS.map((user) => <div key={user.id}
                                          className={'change-user-list-item'}
                                          onClick={() => handleUserSelect(user)}>
                    <img src={user.avatar} alt="user avatar" className={'change-user-avatar'}/>
                    <span className={'change-user-name'}>{user.name}</span>
                </div>)}
            </div>
        </>
    )
}

export default UserSelector;