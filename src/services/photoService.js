const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/photos`;

const indexPhotos = async (logEntryId) => {
  try {
    const res = await fetch(`${BASE_URL}/${logEntryId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const showPhoto = async (photoId) => {
  try {
    const res = await fetch(`${BASE_URL}/${photoId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const uploadPhoto = async (photoFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${photoFormData.get('logEntry')}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: photoFormData,
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deletePhoto = async (photoId) => {
  try {
    const res = await fetch(`${BASE_URL}/${photoId}`, {
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

export { indexPhotos, showPhoto, uploadPhoto, deletePhoto };
