export class Item {
  id: string;
  price: string;
  name: string;
  title: string;
  sourceCategory: string;
  createdAt: Date;
  reviewCount: number;
  topScores: { topic: string, score: number }[];
  latestReviewDate: Date;
  domain: string;
  imageURL: string;
}
