const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/trips`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (err) {
    console.log(err);
    throw err
  }
};

const show = async (tripId) => {
  try {
    const res = await fetch(`${BASE_URL}/${tripId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (err) {
    console.log(err);
    throw err
  }
};

const create = async (tripFormData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripFormData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
    throw err
  }
};

const deleteTrip = async (tripId) => {
  try {
    const res = await fetch(`${BASE_URL}/${tripId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.json();
  } catch (err) {
    console.log(err);
    throw err
  }
};

async function updateTrip(tripId, tripFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${tripId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tripFormData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
    throw err
  }
}

export { index, show, create, deleteTrip, updateTrip };
