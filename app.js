const produit = {
    nom: "Test",
    prix: 15,
    poids: 0.5,
    quantite: 2
}

const produit2 = {
    nom: "Test2",
    prix: 20,
    poids: 0.5,
    quantite: 1
}

const addProduit = (produits) => {
    let cart = {
        produits
    }
    return cart
}

const createPanier = (produit) => {
    const cart = addProduit(produit)
    return cart
}

// console.log(createPanier([produit,produit2]))

export const getPrixTotalPanier = () => {
    const panier = createPanier([produit,produit2])
    let prix = 0
    for (let i = 0; i < panier.produits.length; i++) {
        prix += panier.produits[i].prix * panier.produits[i].quantite    
    }
    return prix
}

// console.log(getPrixTotalPanier());

export const prixTVA = (tva) => {
    const prix = getPrixTotalPanier()
    const prixTva = (prix * tva) / 100
    const prixFinal = prix + prixTva
    return prixFinal
}

// console.log(prixTVA(20));