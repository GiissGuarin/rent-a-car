export interface CarInterface {
  id: string;
  title: string;
  brand: string;
  model: string;
  line: string;
  year: string;
  price: number;
  description: string;
  specification: [
    {
      text: number | string;
      icon: string;
    }
  ];
  img: string;
  imgs_large: Array<string>;
}
