export interface Products {
  id: number;
  brand: string;
  name: string;
  image: string;
  price: string;
  description: string;
  category_id: number;
  gender_id: number;
}
export interface Profiles {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  username: string;
}
export interface Categories {
  id: number;
  name: string;
}
export interface Genders {
  id: number;
  name: string;
}
export interface AuthToken {
  token: string;
}

