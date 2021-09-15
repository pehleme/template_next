export enum StorageItemEnum {
  AgeGate = '@App:ageGate',
}

const get = <T>(name: StorageItemEnum): T | undefined => {
  const item = localStorage.getItem(name);
  return item ? (JSON.parse(item) as T) : undefined;
};

const set = <T>(name: StorageItemEnum, value: T): void => {
  localStorage.setItem(name, JSON.stringify(value));
};

const remove = (name: StorageItemEnum): void => {
  localStorage.removeItem(name);
};

export const storage = { get, set, remove };
