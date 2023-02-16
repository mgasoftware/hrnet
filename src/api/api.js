import axios from "axios";

const URL = "http://localhost:8080/employees";

export async function fetchGetEmployees() {
  return await axios.get(URL)
  .then((result) => {
    console.log(result.data);
  })
  .catch((error) => {
    console.error({message: error.message})
  })
}
