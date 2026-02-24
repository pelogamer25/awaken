export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  tags: string[];
}

export interface Package {
  id: string;
  title: string;
  duration: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}
