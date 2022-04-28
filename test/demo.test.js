import should from "should"
import { getPrixTotalPanier, prixTVA } from "../app.js"
describe("TEST prix total du panier", () => {
    it("générer un prix total", () => {
        debugger
        getPrixTotalPanier().should.be.a.Number()
    })
})
describe("TEST tva number", () => {
    it("générer une tva", () => {
        debugger
        prixTVA().should.be.a.Number()
    })
})