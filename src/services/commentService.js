const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/comments`;

const indexComments = async (logEntryId) => {
  if (!logEntryId) {
    throw new Error("logEntryId is required");
  }
  try {
    console.log(`Making request to ${BASE_URL}/${logEntryId}`);
    const res = await fetch(`${BASE_URL}/${logEntryId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    console.log(`Response status: ${res.status}`);
    const commentsData = await res.json();
    console.log(`commentsData:`, commentsData);
    return commentsData;
  } catch (err) {
    console.log(err);
  }
};

const createComment = async (logEntryId, commentFormData) => {
  if (!logEntryId) {
    throw new Error("logEntryId is required");
  }
  try {
    const res = await fetch(`${BASE_URL}/${logEntryId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const updateComment = async (commentId, commentFormData) => {
  if (!commentId) {
    throw new Error("commentId is required");
  }
  try {
    const res = await fetch(`${BASE_URL}/${commentId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteComment = async (commentId) => {
  if (!commentId) {
    throw new Error("commentId is required");
  }
  try {
    const res = await fetch(`${BASE_URL}/${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { indexComments, createComment, updateComment, deleteComment };