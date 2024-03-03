import apiBase from "../api";

export const getTasks = async () => {
    const response = await apiBase.get("/tasks/");
    return response.data;
}

export const postTask = async (task) => {
    const response = await apiBase.post("/tasks/", task);
    return response.data;
}
