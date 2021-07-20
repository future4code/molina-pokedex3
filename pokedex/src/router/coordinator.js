export const goToPokedex = (history) => {
  history.push('./pokedex')
}

export const goToDetailsPage = (history, name, isPokedex) => {
  console.log("ispoke", isPokedex);
  isPokedex
    ? history.push(`/pokemon/${name}/telaPokedex`)
    : history.push(`/pokemon/${name}`);
};