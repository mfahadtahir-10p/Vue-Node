import { Http } from "../core/http.service";

export class ShoeService {
    static addShoe(payload: {
      name: string,
      brand: string,
      color: string,
      category: string,
      date: string,
      description: string,
      size: string,
      stock: string,
    }) {
        return Http.post('form/addShoe', payload)
    }
}