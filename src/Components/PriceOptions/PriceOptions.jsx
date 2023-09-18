import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const productsData = {
        products: [
            {
                id: "product1",
                name: "Starter Package",
                price: "$9.99",
                features: [
                    "Access to our starter product",
                    "Limited customer support",
                    "Basic features"
                ]
            },
            {
                id: "product2",
                name: "Basic Package",
                price: "$19.99",
                features: [
                    "Access to our basic product",
                    "Email customer support",
                    "Basic customization options"
                ]
            },
            {
                id: "product3",
                name: "Standard Package",
                price: "$39.99",
                features: [
                    "Access to our standard product",
                    "24/7 customer support",
                    "Advanced customization options"
                ]
            },
            {
                id: "product4",
                name: "Pro Package",
                price: "$59.99",
                features: [
                    "Access to our pro product",
                    "Priority customer support",
                    "Advanced customization options",
                    "Analytics and reporting"
                ]
            },
            {
                id: "product5",
                name: "Premium Package",
                price: "$99.99",
                features: [
                    "Access to our premium product",
                    "24/7 premium customer support",
                    "Full customization options",
                    "Exclusive discounts",
                    "Unlimited storage"
                ]
            }
        ]
    }

    return (
        <div>
            <h2 className="text-5xl text-center font-semibold">Best Deals Here</h2>
            {
                PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;