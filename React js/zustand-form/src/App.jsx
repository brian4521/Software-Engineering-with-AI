import "./App.css";
import useStore from "./store/useStore";

function App() {
  const { data, updatedData, validation, validateData } = useStore();

  console.log("FROM APP", data);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTED", data);
    validateData();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>
          Name <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          name="name"
          value={data.name}
          required
          onChange={(e) => updatedData({ name: e.target.value })}
        />
        {data.name === "" ? (
          <p style={{ color: "red" }}>{validation.name}</p>
        ) : null}

        <label>
          Gender <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          name="gender"
          value={data.gender}
          required
          onChange={(e) => updatedData({ gender: e.target.value })}
        />
        {data.gender === "" ? (
          <p style={{ color: "red" }}>{validation.gender}</p>
        ) : null}

        <label>
          Age <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="number"
          name="age"
          value={data.age}
          required
          onChange={(e) => updatedData({ age: e.target.value })}
        />
        {data.age === "" ? (
          <p style={{ color: "red" }}>{validation.age}</p>
        ) : null}

        <label>
          Phone <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={data.phone}
          required
          onChange={(e) => updatedData({ phone: e.target.value })}
        />
        {data.phone === "" ? (
          <p style={{ color: "red" }}>{validation.phone}</p>
        ) : null}

        <label>
          Email <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="email"
          name="email"
          value={data.email}
          required
          onChange={(e) => updatedData({ email: e.target.value })}
        />
        {data.email === "" ? (
          <p style={{ color: "red" }}>{validation.email}</p>
        ) : null}

        <label>
          Address <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          name="address"
          value={data.address}
          required
          onChange={(e) => updatedData({ address: e.target.value })}
        />
        {data.address === "" ? (
          <p style={{ color: "red" }}>{validation.address}</p>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
