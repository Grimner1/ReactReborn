import React from "react";

const url = "https://61856c5523a2fe0017fff620.mockapi.io/api/ToDoList";

export const GetLists = (id) =>
  id
    ? fetch(`${url}/${id}`).then((data) => data.json())
    : fetch(url).then((data) => data.json());

export const PostTask = (task) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(task),
  });

export const PutTask = (task, id) =>
  fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(task),
  });

export const DeleteTask = (id) => fetch(`${url}/${id}`, { method: "DELETE" });
