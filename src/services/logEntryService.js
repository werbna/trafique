const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/logEntries`;

const indexLogsInTrip = async (tripId) => {
  try {
    const res = await fetch(`${BASE_URL}/trips/${tripId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const showLogEntry = async (logEntryId) => {
  try {
    const res = await fetch(`${BASE_URL}/${logEntryId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const createLogEntry = async (logEntryFormData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logEntryFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteLogEntry = async (logEntryId) => {
  try {
    const res = await fetch(`${BASE_URL}/${logEntryId}`, {
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

const updateLogEntry = async (logEntryId, logEntryFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${logEntryId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logEntryFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { indexLogsInTrip, showLogEntry, createLogEntry, deleteLogEntry, updateLogEntry };
