export const PRIORITIES = ['low', 'medium', 'high'];

export const USERS = [
    {
        "id": 1,
        "name": "John",
        "surname": "Doe",
        "email": "john.doe@example.com",
        "avatar": "https://randomuser.me/api/portraits/men/47.jpg"
    },
    {
        "id": 2,
        "name": "Jane",
        "surname": "Smith",
        "email": "jane.smith@example.com",
        "avatar": "https://randomuser.me/api/portraits/men/48.jpg"
    },
    {
        "id": 3,
        "name": "Alex",
        "surname": "Johnson",
        "email": "alex.johnson@example.com",
        "avatar": "https://randomuser.me/api/portraits/men/49.jpg"
    },
    {
        "id": 4,
        "name": "Michael",
        "surname": "Garcia",
        "email": "maria.garcia@example.com",
        "avatar": "https://randomuser.me/api/portraits/men/50.jpg"
    },
    {
        "id": 5,
        "name": "David",
        "surname": "Lee",
        "email": "david.lee@example.com",
        "avatar": "https://randomuser.me/api/portraits/men/51.jpg"
    }
];

export const STASUSES = ['todo', 'doing', 'done', 'blocked'];

export const LOCAL_STORAGE_KEY = 'task-management-tasks';

export const DEFAULT_TASK = {
    id: 0,
    title: '',
    description: '',
    status: 'todo',
    priority: "low",
    assignee: {},
};