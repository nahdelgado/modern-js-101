import { calculateTotal, listContents, getRecommendation } from "./checkout";

const cartFixture = {
    contents: [
        {
            name: "Shoes",
            price: 20.0
        },
        {
            name: "Luxury dress",
            price: 35.9
        },
        {
            name: "Shorts",
            price: 10.5
        },
        {
            name: "Bag",
            price: 12.0
        },
        {
            name: "Hat",
            price: 4.3
        },
    ],
    bestRecommendation: {
        name: "Perfect socks",
        price: 2.99
    }
};

describe("Checkout module", () => {
    it("should calculate total price", () => {
        expect(calculateTotal(cartFixture)).toBe(20 + 35.9 + 10.5 + 12 + 4.3);
    });

    it("should list cart contents", () => {
        expect(listContents(cartFixture)).toEqual(["Shoes", "Luxury dress", "Shorts", "Bag", "Hat"]);
    });

    it("should recommend the special item", () => {
        expect(getRecommendation(cartFixture)).toBe("Don't miss out on this Perfect socks for only €2.99!");
    });
});
