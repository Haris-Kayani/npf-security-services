export type Client = {
  id: string;
  name: string;
  logo: string;
  width: number;
  height: number;
  presentation?: "wide";
};

export const clients: readonly Client[] = [
  {
    id: "ubank",
    name: "Ubank",
    logo: "/images/clients/ubank.png",
    width: 1254,
    height: 1254,
    presentation: "wide",
  },
  {
    id: "kfc",
    name: "KFC",
    logo: "/images/clients/kfc.png",
    width: 1254,
    height: 1254,
  },
  {
    id: "nadra",
    name: "NADRA",
    logo: "/images/clients/nadra.png",
    width: 1254,
    height: 1254,
  },
];
