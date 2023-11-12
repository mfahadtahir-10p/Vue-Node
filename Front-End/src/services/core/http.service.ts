export class Http {
  static baseURL: string = import.meta.env.VITE_BASE_API_URL;
  
  public static async get(url: string) {
    console.log(this.baseURL, url)
    return fetch(this.baseURL + url)
      .then((resp) => resp.json())
      .catch((err) => {
        // handle global api errors here
        console.log(err.message);
        if (err.status == 401) {
          // do something on 401 and so on
          // auth.logout();
          // router.go('/login?unauthorized=1');
        }
      })
  }

  public static async post(url: string, data: unknown) {
    return fetch(this.baseURL + url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .catch((err) => {
        // handle global api errors here
        console.log(err.message)
        if (err.status == 401) {
          // do something on 401 and so on
          // auth.logout();
          // router.go('/login?unauthorized=1');
        }
      })
  }
  public static async put(url: string, data: unknown) {
    return fetch(this.baseURL + url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .catch((err) => {
        // handle global api errors here
        console.log(err.message)
        if (err.status == 401) {
          // do something on 401 and so on
          // auth.logout();
          // router.go('/login?unauthorized=1');
        }
      })
  }
  public static async delete(url: string) {
    return fetch(this.baseURL + url, {
      method: 'DELETE'
    })
      .then((resp) => resp.json())
      .catch((err) => {
        // handle global api errors here
        console.log(err.message)
        if (err.status == 401) {
          // do something on 401 and so on
          // auth.logout();
          // router.go('/login?unauthorized=1');
        }
      })
  }
}
