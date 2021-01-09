import { Product } from "./types";


export function checkIsSelected(selectedProducts: Product[], product: Product) {
return selectedProducts.some(item => item.id === product.id);

}

/*FORMATAÇÃO DE PREÇO*/
export function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL', /*MOEDA*/
        minimumFractionDigits: 2 /*QUANTIDADE DE CASAS DECIMAIS*/
    });

    return formatter.format(price);
}