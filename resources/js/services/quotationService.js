import { postPromise } from "../api/apiService";
import { apiEndPoints } from "../api/endPoints";

export const saveQuotation = async (param) =>{

    return await postPromise(`${apiEndPoints("QUOTATION", "SAVE")}`,param);
}
