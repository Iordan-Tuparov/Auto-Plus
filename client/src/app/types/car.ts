export interface Car {
  _id: string;
  _owner: string;
  model: string;
  year: string;
  price: string;
  horsePower: string;
  imageUrl: string;
  information: string;
  userLikes: [];
  comments: [
    {
      text: string;
      creatorEmail: string;
      _owner: string;
      _id: string;
    }
  ];
  __v: number;
}
