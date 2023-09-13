export function addressFormater(address: string) {
  const addressText = address.replace(", ", "\n");
  return addressText;
}
