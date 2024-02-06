export const calculateCost = (costByDimension, packageType, shippingMethod) => {
    const packagePrice = packageType === "standard" && 1 || packageType === "fragile" && 10 || packageType === "document" && 5 || packageType === "plastic" && 15 || packageType === "soft" && 8;
    const shippingPrice = shippingMethod === "standard" && 1 || shippingMethod === "expedited" && 10 || shippingMethod === "express" && 20;
    const totalCost = costByDimension + packagePrice + shippingPrice;
    return totalCost;
}