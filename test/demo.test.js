import should from "should"
import { getPrixTotalPanier } from "../app.js"
describe("TEST prix total du panier", () => {
    it("générer un prix total", () => {
        debugger
        getPrixTotalPanier().should.be.equal(50)
    })
})
