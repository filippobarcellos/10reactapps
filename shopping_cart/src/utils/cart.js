export const addToCart = (draft, item) => {
  const productIndex = draft.findIndex((p) => p.sku === item.sku);

  if (productIndex >= 0) {
    draft[productIndex].qtd += 1;
  } else {
    draft.push({ ...item, qtd: 1 });
  }
};

export const removeFromCart = (draft, item) => {
  const productIndex = draft.findIndex((p) => p.sku === item.sku);

  if (productIndex >= 0) {
    if (draft[productIndex].qtd !== 1) {
      draft[productIndex].qtd -= 1;
    } else {
      draft.splice(productIndex, 1);
    }
  }
};
