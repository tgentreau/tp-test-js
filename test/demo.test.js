import { getPrixTotalPanier, prixTVA } from "../app.js"
test("TEST prix total du panier", () => {
    expect(getPrixTotalPanier()).toBe(50)
})
test("TEST tva", () => {
    expect(prixTVA(20)).toBe(60)
})
