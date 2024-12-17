import axios from "axios";
import { BASE_URL } from "./Constant";
export default axios.create({ baseURL: BASE_URL });
