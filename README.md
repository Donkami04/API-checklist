
# API Tasks - MongoDB

This API REST let you create users and tasks by using the non-relational database MongoDB. 

The entity of the users refers to the id of the tasks that have been assigned to the corresponding user. If a task is deleted it will be removed from all users that have referenced this task.

In this way an N:N relation can be demonstrated in MongoDB, however, for 1:N relations it is recommended to use the embedded documents following the rules of the mongo documentation.

The user and task entities act as scalable microservices, however, in this simple case it was preferred to leave the same database for both.


## API Reference

#### Get all users

```http
  GET /api/users
```

#### Get one user

```http
  GET /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |


#### Get all tasks

```http
  GET /api/tasks
```

#### Get one task

```http
  GET /api/tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of task to fetch |


