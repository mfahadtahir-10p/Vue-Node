import { Http } from "../core/http.service";

export class DashobardService {
    static getAllShoes() {
        return Http.get('detail/getAllShoes')
    }
}