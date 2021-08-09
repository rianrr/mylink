import AsyncStorage from "@react-native-async-storage/async-storage";

// Buscar os links salvos.

export async function getLinksSave(key) {
  const myLinks = await AsyncStorage.getItem(key);

  let linkSaves = JSON.parse(myLinks) || [];

  return linkSaves;
}

// Salvar um link no storage.

export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key);

  // Caso tenha um link com o mesmo id ou duplicado, preciso ignorar.

  const hasLink = linksStored.some((link) => link.id === newLink.id);

  if (hasLink) {
    console.log("ja existe");

    // Parar execução.

    return;
  }

  linksStored.push(newLink);

  await AsyncStorage.setItem(key, JSON.stringify(linksStored));

  console.log("link salvo");
}

// Deletar algum link.

export async function deleteLink(links, id) {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem("links", JSON.stringify(myLinks));

  console.log("deletado");

  return myLinks;
}
