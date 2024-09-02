const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/comments`;

const indexComments = async (logEntryId) => {
  try {
    const res = await fetch(`${BASE_URL}/${logEntryId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const showComment = async (commentId) => {
  try {
    const res = await fetch(`${BASE_URL}/${commentId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const createComment = async (commentFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${commentFormData.logEntry}`, {
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

const deleteComment = async (commentId) => {
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

const updateComment = async (commentId, commentFormData) => {
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

export { indexComments, showComment, createComment, deleteComment, updateComment };
