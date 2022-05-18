import UserIdentifier from "../staticdata/useridentifier";
export default function getIdentity(words, testType) {
  let id;
  let required = testType !== 1 ? Math.floor(words / 2) : words;
  for (id = UserIdentifier.length - 1; id >= 0; id--) {
    if (required >= UserIdentifier[id].requiredWords) {
      break;
    }
  }
  return {
    idName: UserIdentifier[id].name,
    idEmoji: UserIdentifier[id].emoji,
  };
}
