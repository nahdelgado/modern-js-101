const calculateTotal = ({ contents }) => contents.reduce((acc, { price }) => (acc + price), 0);

const listContents = ({ contents }) => contents.reduce((acc, { name }) => ([...acc, name]), []);

const getRecommendation = ({ bestRecommendation: { name, price } }) => `Don't miss out on this ${name} for only €${price}!`;

export { calculateTotal, listContents, getRecommendation };
