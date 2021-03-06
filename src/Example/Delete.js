import React, { useState } from "react";

function CRUD(props) {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Giang",
      gender: 1,
    },
    {
      id: 2,
      name: "Hung",
      gender: 0,
    },
    {
      id: 3,
      name: "Phuong",
      gender: 0,
    },
  ]);
  const [user, setUser] = useState({});
  //tsao truyen obj vao useState
  const [add, setAdd] = useState({});
  const [search, setSearch] = useState("");

  const onEdit = (element) => {
    setUser(element);
  };

  //   console.log(user, data, add);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleChangeAdd = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };
  const onDelete = (id) => {
    const dataCopy = [...data];
    const index = dataCopy.findIndex((element) => {
      if (element.id === id) {
        return element;
      }
    });
    const newData = dataCopy.splice(index, 1);

    setData(dataCopy);
  };
  const onSave = () => {
    const newData = data.map((element) => {
      if (element.id === user.id) {
        return { ...user };
      } else {
        return { ...element };
      }
    });
    setData(newData);
  };
  const onMore = (e) => {
    const connect = data.concat([add]);
    setData(connect);
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const onSearch = () => {
    if (!search.length) {
      const dataCopi = [...data];
      setData(dataCopi);
    } else {
      const dataCopy = [...data];
      const foundData = dataCopy.filter((el) => el.name === search);

      setData(foundData);
    }
  };

  return (
    <div>
      <input type="text" onChange={handleChangeSearch} />
      <button onClick={onSearch}>Search</button>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>gender</td>
          </tr>
        </thead>
        <tbody>
          
          {data.map((element) => {
            return (
              <tr>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>
                  {element.gender == 0
                    ? "nam"
                    : element.gender == 1
                    ? "nu"
                    : "khac"}
                </td>
                <button onClick={() => onEdit(element)}>sửa</button>
                <button onClick={() => onDelete(element.id)}> xóa</button>
              </tr>
            );
          })}
        </tbody>
      </table>

      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="gender"
        value={user.gender}
        onChange={handleChange}
      />
      <button onClick={onSave}>Lưu</button>
      <br />
      <input type="text" name="name" onChange={handleChangeAdd} />
      <input type="text" name="gender" onChange={handleChangeAdd} />
      <button onClick={onMore}>add </button>
    </div>
  );
}
export default CRUD;
